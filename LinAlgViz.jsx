
import { useState, useEffect, useRef, useCallback, useMemo } from "react";

// ─── KATEX CDN ───────────────────────────────────────────────────────────────
const KatexCSS = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
    
    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    :root {
      --bg: #050a14;
      --bg2: #080f1e;
      --bg3: #0c1628;
      --panel: #0a1220;
      --border: #1a2840;
      --blue: #3b8beb;
      --blue2: #5ba3f5;
      --teal: #00d4aa;
      --purple: #a78bfa;
      --pink: #f472b6;
      --yellow: #fbbf24;
      --red: #f87171;
      --green: #4ade80;
      --text: #e2e8f0;
      --muted: #64748b;
      --accent: #3b8beb;
    }

    body { background: var(--bg); color: var(--text); font-family: 'Space Grotesk', sans-serif; overflow: hidden; }

    .katex { font-size: 1em !important; color: var(--text); }
    .katex-display { color: var(--blue2); }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--bg2); }
    ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

    @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes glow { 0%,100% { box-shadow: 0 0 8px var(--blue)40; } 50% { box-shadow: 0 0 20px var(--blue)80; } }
    @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    
    .scene-fade { animation: fadeIn 0.4s ease; }
    .glow-btn { animation: glow 2s ease-in-out infinite; }
    
    canvas { display: block; }
    
    input[type=range] {
      -webkit-appearance: none;
      width: 100%; height: 4px;
      background: var(--border);
      border-radius: 2px; outline: none;
    }
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--blue);
      cursor: pointer;
      box-shadow: 0 0 8px var(--blue)80;
    }
    input[type=number] {
      background: var(--bg3); border: 1px solid var(--border);
      color: var(--text); border-radius: 4px; padding: 4px 8px;
      font-family: 'JetBrains Mono', monospace; font-size: 12px; width: 60px;
    }
  `}</style>
);

// ─── MATH RENDERING ──────────────────────────────────────────────────────────
const MathSpan = ({ tex, display = false }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current || !window.katex) return;
    try {
      window.katex.render(tex, ref.current, { displayMode: display, throwOnError: false });
    } catch (e) {}
  }, [tex, display]);
  return <span ref={ref} />;
};

// ─── COLOR PALETTE ────────────────────────────────────────────────────────────
const C = {
  blue: "#3b8beb", blue2: "#5ba3f5", teal: "#00d4aa",
  purple: "#a78bfa", pink: "#f472b6", yellow: "#fbbf24",
  red: "#f87171", green: "#4ade80", orange: "#fb923c",
  grid: "#1a2840", gridBright: "#243656", axis: "#2a4070",
  white: "#e2e8f0", muted: "#64748b",
};

// ─── CANVAS HELPERS ───────────────────────────────────────────────────────────
function useAnimationFrame(cb, deps = []) {
  const rafRef = useRef(null);
  const cbRef = useRef(cb);
  useEffect(() => { cbRef.current = cb; }, [cb]);
  useEffect(() => {
    let start = null;
    const loop = (ts) => {
      if (!start) start = ts;
      cbRef.current(ts - start, ts);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, deps);
}

function drawGrid(ctx, w, h, scale, ox, oy) {
  ctx.lineWidth = 0.5;
  const step = scale;
  ctx.strokeStyle = C.grid;
  for (let x = ox % step; x < w; x += step) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = oy % step; y < h; y += step) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }
  // Axes
  ctx.lineWidth = 1.5; ctx.strokeStyle = C.axis;
  ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(w, oy); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(ox, 0); ctx.lineTo(ox, h); ctx.stroke();
}

function drawArrow(ctx, x1, y1, x2, y2, color, width = 2, headSize = 10) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - headSize * Math.cos(angle - 0.4), y2 - headSize * Math.sin(angle - 0.4));
  ctx.lineTo(x2 - headSize * Math.cos(angle + 0.4), y2 - headSize * Math.sin(angle + 0.4));
  ctx.closePath();
  ctx.fill();
}

function lerp(a, b, t) { return a + (b - a) * t; }
function easeInOut(t) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }
function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

// ─── SCENE 1: VECTORS ────────────────────────────────────────────────────────
function VectorsScene({ params, playing, t }) {
  const canvasRef = useRef(null);
  const { vx = 3, vy = 2, wx = -1, wy = 2, scalar = 1.5, mode = "add", showMath } = params;

  useAnimationFrame((elapsed) => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const scale = 60, ox = W / 2, oy = H / 2;
    const progress = playing ? Math.min(elapsed / 3000, 1) : 1;
    const p = easeInOut(progress);

    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy);

    const toScreen = (x, y) => [ox + x * scale, oy - y * scale];

    if (mode === "add") {
      // Draw v
      const [vx2, vy2] = toScreen(vx * p, vy * p);
      ctx.shadowBlur = 12; ctx.shadowColor = C.blue;
      drawArrow(ctx, ox, oy, vx2, vy2, C.blue, 3);
      ctx.shadowBlur = 0;
      // Draw w from tip of v
      const [wx2, wy2] = toScreen(vx * p + wx * p, vy * p + wy * p);
      if (p > 0.3) {
        ctx.setLineDash([5, 5]); ctx.shadowBlur = 8; ctx.shadowColor = C.teal;
        drawArrow(ctx, vx2, vy2, wx2, wy2, C.teal, 2);
        ctx.setLineDash([]); ctx.shadowBlur = 0;
      }
      // Draw result
      if (p > 0.6) {
        const alpha = Math.min(1, (p - 0.6) / 0.4);
        ctx.globalAlpha = alpha; ctx.shadowBlur = 16; ctx.shadowColor = C.yellow;
        drawArrow(ctx, ox, oy, wx2, wy2, C.yellow, 3);
        ctx.shadowBlur = 0; ctx.globalAlpha = 1;
      }
      // Labels
      ctx.font = "bold 13px 'Space Grotesk'"; ctx.fillStyle = C.blue;
      ctx.fillText("v", ox + vx * scale * p / 2 + 5, oy - vy * scale * p / 2);
      if (p > 0.3) { ctx.fillStyle = C.teal; ctx.fillText("w", vx2 + wx * scale * p / 2 + 5, vy2 - wy * scale * p / 2); }
      if (p > 0.6) { ctx.fillStyle = C.yellow; ctx.fillText("v+w", wx2 + 8, wy2); }
    } else if (mode === "scalar") {
      const sv = scalar;
      drawArrow(ctx, ox, oy, ...toScreen(vx, vy), C.blue, 2);
      const [sx2, sy2] = toScreen(vx * sv * p, vy * sv * p);
      ctx.shadowBlur = 16; ctx.shadowColor = C.purple;
      drawArrow(ctx, ox, oy, sx2, sy2, C.purple, 3);
      ctx.shadowBlur = 0;
      ctx.font = "bold 13px 'Space Grotesk'";
      ctx.fillStyle = C.blue; ctx.fillText("v", ox + vx * scale / 2 + 5, oy - vy * scale / 2);
      ctx.fillStyle = C.purple; ctx.fillText(`${sv}v`, sx2 + 5, sy2);
    } else if (mode === "dot") {
      // Project v onto w
      drawArrow(ctx, ox, oy, ...toScreen(vx, vy), C.blue, 3);
      drawArrow(ctx, ox, oy, ...toScreen(wx, wy), C.teal, 3);
      const dot = vx * wx + vy * wy;
      const wlen2 = wx * wx + wy * wy;
      const projX = (dot / wlen2) * wx, projY = (dot / wlen2) * wy;
      const [px2, py2] = toScreen(projX * p, projY * p);
      ctx.shadowBlur = 12; ctx.shadowColor = C.yellow;
      drawArrow(ctx, ox, oy, px2, py2, C.yellow, 3);
      ctx.shadowBlur = 0;
      // Dashed line from v to projection
      if (p > 0.4) {
        const [vsx, vsy] = toScreen(vx, vy);
        ctx.setLineDash([4, 4]); ctx.strokeStyle = C.muted; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(vsx, vsy); ctx.lineTo(px2, py2); ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    // Coordinate ticks
    ctx.fillStyle = C.muted; ctx.font = "10px 'JetBrains Mono'";
    for (let i = -6; i <= 6; i++) {
      if (i === 0) continue;
      ctx.fillText(i, ox + i * scale - 8, oy + 14);
      ctx.fillText(i, ox + 4, oy - i * scale + 4);
    }
  }, [vx, vy, wx, wy, scalar, mode, playing, t]);

  return <canvas ref={canvasRef} width={700} height={520} style={{ width: "100%", height: "100%" }} />;
}

// ─── SCENE 2: DOT PRODUCT ────────────────────────────────────────────────────
function DotProductScene({ params, playing, t }) {
  const canvasRef = useRef(null);
  const { vx = 3, vy = 1, wx = 1, wy = 3, showMath } = params;

  useAnimationFrame((elapsed) => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const scale = 60, ox = W / 2, oy = H / 2;
    const progress = playing ? Math.min(elapsed / 2500, 1) : 1;
    const p = easeInOut(progress);

    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy);

    const toScreen = (x, y) => [ox + x * scale, oy - y * scale];
    const dot = vx * wx + vy * wy;
    const wlen = Math.sqrt(wx * wx + wy * wy);
    const vlen = Math.sqrt(vx * vx + vy * vy);
    const cosA = dot / (vlen * wlen);
    const angle = Math.acos(Math.max(-1, Math.min(1, cosA)));

    // Draw vectors
    ctx.shadowBlur = 14; ctx.shadowColor = C.blue;
    drawArrow(ctx, ox, oy, ...toScreen(vx * p, vy * p), C.blue, 3);
    ctx.shadowBlur = 14; ctx.shadowColor = C.teal;
    drawArrow(ctx, ox, oy, ...toScreen(wx * p, wy * p), C.teal, 3);
    ctx.shadowBlur = 0;

    // Draw angle arc
    if (p > 0.3) {
      const a1 = Math.atan2(-vy, vx);
      const a2 = Math.atan2(-wy, wx);
      const r = 35;
      ctx.beginPath();
      ctx.strokeStyle = C.purple; ctx.lineWidth = 2;
      ctx.arc(ox, oy, r, Math.min(a1,a2), Math.max(a1,a2));
      ctx.stroke();
      const amid = (a1 + a2) / 2;
      ctx.fillStyle = C.purple; ctx.font = "12px 'JetBrains Mono'";
      ctx.fillText("θ", ox + (r+8)*Math.cos(amid), oy + (r+8)*Math.sin(amid));
    }

    // Projection
    const wlen2 = wx*wx + wy*wy;
    const projX = (dot/wlen2)*wx, projY = (dot/wlen2)*wy;
    const [px2, py2] = toScreen(projX * p, projY * p);
    if (p > 0.5) {
      const alpha = (p - 0.5) / 0.5;
      ctx.globalAlpha = alpha;
      ctx.shadowBlur = 10; ctx.shadowColor = C.yellow;
      drawArrow(ctx, ox, oy, px2, py2, C.yellow, 3);
      ctx.shadowBlur = 0;
      // perpendicular dashed
      const [vsx, vsy] = toScreen(vx, vy);
      ctx.setLineDash([4, 4]); ctx.strokeStyle = C.muted; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(vsx, vsy); ctx.lineTo(px2, py2); ctx.stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;
    }

    // Labels
    const [vsx, vsy] = toScreen(vx*p, vy*p);
    const [wsx, wsy] = toScreen(wx*p, wy*p);
    ctx.font = "bold 14px 'Space Grotesk'";
    ctx.fillStyle = C.blue; ctx.fillText("v", vsx + 6, vsy - 6);
    ctx.fillStyle = C.teal; ctx.fillText("w", wsx + 6, wsy - 6);
    if (p > 0.5) { ctx.fillStyle = C.yellow; ctx.fillText("proj", px2 + 6, py2 - 6); }

    // Info box
    ctx.fillStyle = "#0a1220"; ctx.strokeStyle = C.border;
    roundRect(ctx, 16, 16, 200, 90, 6);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = C.text; ctx.font = "12px 'JetBrains Mono'";
    ctx.fillStyle = C.blue2;
    ctx.fillText(`v·w = ${dot.toFixed(2)}`, 28, 40);
    ctx.fillStyle = C.purple;
    ctx.fillText(`θ = ${(angle * 180 / Math.PI).toFixed(1)}°`, 28, 60);
    ctx.fillStyle = C.yellow;
    ctx.fillText(`|proj| = ${(dot/wlen).toFixed(2)}`, 28, 80);
    ctx.fillText(`|proj| = ${(dot/wlen * p).toFixed(2)}`, 28, 96);

    // ticks
    ctx.fillStyle = C.muted; ctx.font = "10px 'JetBrains Mono'";
    for (let i = -5; i <= 5; i++) {
      if (i === 0) continue;
      ctx.fillText(i, ox + i * scale - 6, oy + 14);
      ctx.fillText(i, ox + 4, oy - i * scale + 4);
    }
  }, [vx, vy, wx, wy, playing, t]);

  return <canvas ref={canvasRef} width={700} height={520} style={{ width: "100%", height: "100%" }} />;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x+r, y);
  ctx.arcTo(x+w, y, x+w, y+h, r);
  ctx.arcTo(x+w, y+h, x, y+h, r);
  ctx.arcTo(x, y+h, x, y, r);
  ctx.arcTo(x, y, x+w, y, r);
  ctx.closePath();
}

// ─── SCENE 3: MATRIX TRANSFORMS ──────────────────────────────────────────────
function MatrixScene({ params, playing, t }) {
  const canvasRef = useRef(null);
  const { a=1,b=0,c=0,d=1 } = params;

  useAnimationFrame((elapsed) => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const scale = 50, ox = W / 2, oy = H / 2;
    const progress = playing ? Math.min(elapsed / 2500, 1) : 1;
    const p = easeInOut(progress);

    ctx.clearRect(0, 0, W, H);

    // Draw transformed grid
    const ta = lerp(1, a, p), tb = lerp(0, b, p);
    const tc = lerp(0, c, p), td = lerp(1, d, p);

    // Grid lines (transformed)
    const range = 7;
    ctx.lineWidth = 0.5;
    for (let i = -range; i <= range; i++) {
      // Horizontal lines
      ctx.strokeStyle = i === 0 ? C.teal + "80" : C.grid;
      ctx.lineWidth = i === 0 ? 1.5 : 0.5;
      ctx.beginPath();
      const x1s = ox + (-range * ta + i * tc) * scale, y1s = oy - (-range * tb + i * td) * scale;
      const x2s = ox + (range * ta + i * tc) * scale, y2s = oy - (range * tb + i * td) * scale;
      ctx.moveTo(x1s, y1s); ctx.lineTo(x2s, y2s); ctx.stroke();
      // Vertical lines
      ctx.strokeStyle = i === 0 ? C.blue + "80" : C.grid;
      ctx.lineWidth = i === 0 ? 1.5 : 0.5;
      ctx.beginPath();
      const x3s = ox + (i * ta - range * tc) * scale, y3s = oy - (i * tb - range * td) * scale;
      const x4s = ox + (i * ta + range * tc) * scale, y4s = oy - (i * tb + range * td) * scale;
      ctx.moveTo(x3s, y3s); ctx.lineTo(x4s, y4s); ctx.stroke();
    }

    // Original unit square (ghost)
    ctx.setLineDash([4, 4]); ctx.strokeStyle = C.muted + "50"; ctx.lineWidth = 1;
    ctx.strokeRect(ox, oy - scale, scale, scale);
    ctx.setLineDash([]);

    // Transformed unit square
    const sq = [[0,0],[1,0],[1,1],[0,1]];
    const sqT = sq.map(([x,y]) => [ox + (ta*x + tc*y)*scale, oy - (tb*x + td*y)*scale]);
    ctx.beginPath();
    ctx.moveTo(sqT[0][0], sqT[0][1]);
    sqT.forEach(pt => ctx.lineTo(pt[0], pt[1]));
    ctx.closePath();
    ctx.fillStyle = C.blue + "20"; ctx.fill();
    ctx.strokeStyle = C.blue; ctx.lineWidth = 1.5; ctx.stroke();

    // Basis vectors
    ctx.shadowBlur = 12;
    ctx.shadowColor = C.blue;
    drawArrow(ctx, ox, oy, ox + ta*scale, oy - tb*scale, C.blue, 3);
    ctx.shadowColor = C.teal;
    drawArrow(ctx, ox, oy, ox + tc*scale, oy - td*scale, C.teal, 3);
    ctx.shadowBlur = 0;

    // Labels
    ctx.font = "bold 13px 'Space Grotesk'"; 
    ctx.fillStyle = C.blue; ctx.fillText("ê₁", ox + ta*scale + 6, oy - tb*scale - 6);
    ctx.fillStyle = C.teal; ctx.fillText("ê₂", ox + tc*scale + 6, oy - td*scale - 6);

    // Matrix display
    const det = ta*td - tb*tc;
    ctx.fillStyle = "#0a1220cc"; ctx.strokeStyle = C.border;
    roundRect(ctx, W - 185, 12, 172, 100, 6);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = C.text; ctx.font = "bold 12px 'JetBrains Mono'";
    ctx.fillText("Matrix:", W - 173, 32);
    ctx.fillStyle = C.blue2;
    ctx.fillText(`[${a.toFixed(1)}  ${b.toFixed(1)}]`, W - 173, 52);
    ctx.fillText(`[${c.toFixed(1)}  ${d.toFixed(1)}]`, W - 173, 68);
    ctx.fillStyle = Math.abs(det) < 0.01 ? C.red : C.green;
    ctx.fillText(`det = ${det.toFixed(2)}`, W - 173, 92);

    // Ticks
    ctx.fillStyle = C.muted; ctx.font = "10px 'JetBrains Mono'";
    for (let i = -6; i <= 6; i++) {
      if (i === 0) continue;
      ctx.fillText(i, ox + i * scale - 6, oy + 14);
      ctx.fillText(i, ox + 4, oy - i * scale + 4);
    }
  }, [a, b, c, d, playing, t]);

  return <canvas ref={canvasRef} width={700} height={520} style={{ width: "100%", height: "100%" }} />;
}

// ─── SCENE 4: DETERMINANT ────────────────────────────────────────────────────
function DeterminantScene({ params, playing }) {
  const canvasRef = useRef(null);
  const { a=2, b=1, c=0.5, d=2 } = params;

  useAnimationFrame((elapsed) => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const scale = 60, ox = W / 2, oy = H / 2;
    const progress = playing ? Math.min(elapsed / 3000, 1) : 1;
    const p = easeInOut(progress);
    const ta = lerp(1, a, p), tb = lerp(0, b, p);
    const tc = lerp(0, c, p), td = lerp(1, d, p);

    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy);

    // Unit square before
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = C.muted + "60"; ctx.lineWidth = 1;
    ctx.strokeRect(ox, oy - scale, scale, scale);
    ctx.setLineDash([]);

    // Transformed parallelogram
    const pts = [[0,0],[1,0],[1,1],[0,1]].map(([x,y]) =>
      [ox + (ta*x + tc*y)*scale, oy - (tb*x + td*y)*scale]
    );
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    pts.forEach(pt => ctx.lineTo(pt[0], pt[1]));
    ctx.closePath();
    const det = ta*td - tb*tc;
    const col = det >= 0 ? C.teal : C.red;
    ctx.fillStyle = col + "30"; ctx.fill();
    ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.stroke();

    // Basis vectors
    ctx.shadowBlur = 12; ctx.shadowColor = C.blue;
    drawArrow(ctx, ox, oy, ox + ta*scale, oy - tb*scale, C.blue, 3);
    ctx.shadowColor = C.teal;
    drawArrow(ctx, ox, oy, ox + tc*scale, oy - td*scale, C.teal, 3);
    ctx.shadowBlur = 0;

    // Area label
    const cx = (pts[0][0]+pts[1][0]+pts[2][0]+pts[3][0])/4;
    const cy = (pts[0][1]+pts[1][1]+pts[2][1]+pts[3][1])/4;
    ctx.font = "bold 14px 'Space Grotesk'"; ctx.fillStyle = col;
    ctx.textAlign = "center";
    ctx.fillText(`Area = ${Math.abs(det).toFixed(2)}`, cx, cy);
    if (det < 0) { ctx.fillStyle = C.red; ctx.fillText("(flipped!)", cx, cy + 20); }
    ctx.textAlign = "left";

    // Info
    ctx.fillStyle = "#0a1220dd"; ctx.strokeStyle = C.border;
    roundRect(ctx, 12, 12, 180, 70, 6); ctx.fill(); ctx.stroke();
    ctx.font = "12px 'JetBrains Mono'"; ctx.fillStyle = C.blue2;
    ctx.fillText(`det = ad - bc`, 22, 34);
    ctx.fillStyle = det >= 0 ? C.green : C.red;
    ctx.fillText(`= ${det.toFixed(3)}`, 22, 54);
    ctx.fillStyle = C.muted;
    ctx.fillText(`Scale factor: ×${Math.abs(det).toFixed(2)}`, 22, 72);

    ctx.fillStyle = C.muted; ctx.font = "10px 'JetBrains Mono'";
    for (let i = -5; i <= 5; i++) {
      if (i === 0) continue;
      ctx.fillText(i, ox + i * scale - 6, oy + 14);
      ctx.fillText(i, ox + 4, oy - i * scale + 4);
    }
  }, [a, b, c, d, playing]);

  return <canvas ref={canvasRef} width={700} height={520} style={{ width: "100%", height: "100%" }} />;
}

// ─── SCENE 5: EIGENVECTORS ───────────────────────────────────────────────────
function EigenScene({ params, playing }) {
  const canvasRef = useRef(null);
  const { a=2, b=1, c=1, d=2, showEigen=true } = params;

  useAnimationFrame((elapsed) => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const scale = 55, ox = W / 2, oy = H / 2;
    const progress = playing ? Math.min(elapsed / 3000, 1) : 1;
    const p = easeInOut(progress);
    const ta = lerp(1, a, p), tb = lerp(0, b, p);
    const tc = lerp(0, c, p), td = lerp(1, d, p);

    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy);

    // Random vectors (showing they get sheared)
    const testVecs = [[1,0],[0,1],[1,1],[-1,1],[2,1],[-1,2]];
    testVecs.forEach(([x, y]) => {
      const nx = ta*x + tc*y, ny = tb*x + td*y;
      const ox2 = ox + lerp(x, nx, p)*scale, oy2 = oy - lerp(y, ny, p)*scale;
      ctx.globalAlpha = 0.25;
      drawArrow(ctx, ox, oy, ox2, oy2, C.muted, 1.5, 6);
      ctx.globalAlpha = 1;
    });

    // Eigen computation (for 2x2 symmetric, eigenvalues = (a+d±sqrt((a-d)²+4bc))/2)
    const trace = a + d, det = a*d - b*c;
    const disc = trace*trace - 4*det;
    if (disc >= 0) {
      const lam1 = (trace + Math.sqrt(disc)) / 2;
      const lam2 = (trace - Math.sqrt(disc)) / 2;
      // Eigenvectors (if b != 0)
      const ev1 = b !== 0 ? [lam1 - d, b] : [1, 0];
      const ev2 = b !== 0 ? [lam2 - d, b] : [0, 1];
      const norm1 = Math.sqrt(ev1[0]**2 + ev1[1]**2);
      const norm2 = Math.sqrt(ev2[0]**2 + ev2[1]**2);
      const e1 = [ev1[0]/norm1, ev1[1]/norm1];
      const e2 = [ev2[0]/norm2, ev2[1]/norm2];

      // Eigen lines
      [-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8].forEach(i => {
        ctx.strokeStyle = C.yellow + "20"; ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(ox + (e1[0]*i - e1[1]*20)*scale, oy - (e1[1]*i + e1[0]*20)*scale);
        ctx.lineTo(ox + (e1[0]*i + e1[1]*20)*scale, oy - (e1[1]*i - e1[0]*20)*scale);
      });

      // Eigenvector 1
      const sv1 = 2, sv2 = 2;
      const [ex1, ey1] = [ox + e1[0]*sv1*scale, oy - e1[1]*sv1*scale];
      const [ex2, ey2] = [ox + e2[0]*sv2*scale, oy - e2[1]*sv2*scale];
      
      ctx.shadowBlur = 16; ctx.shadowColor = C.yellow;
      drawArrow(ctx, ox, oy, lerp(ox + e1[0]*sv1*scale, ox + e1[0]*sv1*lam1*scale, p), lerp(oy - e1[1]*sv1*scale, oy - e1[1]*sv1*lam1*scale, p), C.yellow, 3);
      ctx.shadowColor = C.pink;
      drawArrow(ctx, ox, oy, lerp(ox + e2[0]*sv2*scale, ox + e2[0]*sv2*lam2*scale, p), lerp(oy - e2[1]*sv2*scale, oy - e2[1]*sv2*lam2*scale, p), C.pink, 3);
      ctx.shadowBlur = 0;

      // Labels
      ctx.font = "bold 12px 'Space Grotesk'";
      ctx.fillStyle = C.yellow;
      ctx.fillText(`λ₁=${lam1.toFixed(2)}`, ox + e1[0]*sv1*lam1*scale + 6, oy - e1[1]*sv1*lam1*scale - 6);
      ctx.fillStyle = C.pink;
      ctx.fillText(`λ₂=${lam2.toFixed(2)}`, ox + e2[0]*sv2*lam2*scale + 6, oy - e2[1]*sv2*lam2*scale - 6);

      // Info box
      ctx.fillStyle = "#0a1220dd"; ctx.strokeStyle = C.border;
      roundRect(ctx, 12, 12, 200, 90, 6); ctx.fill(); ctx.stroke();
      ctx.font = "12px 'JetBrains Mono'";
      ctx.fillStyle = C.blue2; ctx.fillText(`Matrix: [${a} ${b}; ${c} ${d}]`, 22, 32);
      ctx.fillStyle = C.yellow; ctx.fillText(`λ₁ = ${lam1.toFixed(3)}`, 22, 52);
      ctx.fillStyle = C.pink; ctx.fillText(`λ₂ = ${lam2.toFixed(3)}`, 22, 72);
      ctx.fillStyle = C.muted; ctx.fillText(`tr=${trace}, det=${det}`, 22, 92);
    }

    ctx.fillStyle = C.muted; ctx.font = "10px 'JetBrains Mono'";
    for (let i = -5; i <= 5; i++) {
      if (i === 0) continue;
      ctx.fillText(i, ox + i * scale - 6, oy + 14);
      ctx.fillText(i, ox + 4, oy - i * scale + 4);
    }
  }, [a, b, c, d, playing]);

  return <canvas ref={canvasRef} width={700} height={520} style={{ width: "100%", height: "100%" }} />;
}

// ─── SCENE 6: CHANGE OF BASIS ─────────────────────────────────────────────────
function BasisScene({ params, playing }) {
  const canvasRef = useRef(null);
  const { e1x=1, e1y=1, e2x=-1, e2y=1, vx=1, vy=1 } = params;

  useAnimationFrame((elapsed) => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const scale = 55, ox = W / 2, oy = H / 2;
    const progress = playing ? Math.min(elapsed / 3000, 1) : 1;
    const p = easeInOut(progress);

    ctx.clearRect(0, 0, W, H);

    // Standard grid (fading out)
    ctx.globalAlpha = 1 - p * 0.4;
    drawGrid(ctx, W, H, scale, ox, oy);
    ctx.globalAlpha = 1;

    // New basis grid
    const norm1 = Math.sqrt(e1x**2 + e1y**2);
    const norm2 = Math.sqrt(e2x**2 + e2y**2);
    const b1 = [e1x/norm1, e1y/norm1], b2 = [e2x/norm2, e2y/norm2];

    ctx.globalAlpha = p;
    const range = 7;
    for (let i = -range; i <= range; i++) {
      ctx.strokeStyle = i === 0 ? C.teal + "80" : C.grid + "80";
      ctx.lineWidth = i === 0 ? 1.5 : 0.5;
      ctx.beginPath();
      ctx.moveTo(ox + (-range*b1[0] + i*b2[0])*scale, oy - (-range*b1[1] + i*b2[1])*scale);
      ctx.lineTo(ox + (range*b1[0] + i*b2[0])*scale, oy - (range*b1[1] + i*b2[1])*scale);
      ctx.stroke();
      ctx.strokeStyle = i === 0 ? C.blue + "80" : C.grid + "80";
      ctx.lineWidth = i === 0 ? 1.5 : 0.5;
      ctx.beginPath();
      ctx.moveTo(ox + (i*b1[0] - range*b2[0])*scale, oy - (i*b1[1] - range*b2[1])*scale);
      ctx.lineTo(ox + (i*b1[0] + range*b2[0])*scale, oy - (i*b1[1] + range*b2[1])*scale);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // Basis vectors
    ctx.shadowBlur = 12; ctx.shadowColor = C.blue;
    drawArrow(ctx, ox, oy, ox + b1[0]*scale*lerp(1, norm1, p), oy - b1[1]*scale*lerp(1, norm1, p), C.blue, 3);
    ctx.shadowColor = C.teal;
    drawArrow(ctx, ox, oy, ox + b2[0]*scale*lerp(1, norm2, p), oy - b2[1]*scale*lerp(1, norm2, p), C.teal, 3);
    ctx.shadowBlur = 0;

    // Vector in new basis
    const vInNew_x = vx * b1[0] + vy * b2[0];
    const vInNew_y = vx * b1[1] + vy * b2[1];
    const vScreenX = ox + lerp(vx, vInNew_x, p) * scale;
    const vScreenY = oy - lerp(vy, vInNew_y, p) * scale;
    ctx.shadowBlur = 14; ctx.shadowColor = C.yellow;
    drawArrow(ctx, ox, oy, vScreenX, vScreenY, C.yellow, 3);
    ctx.shadowBlur = 0;

    ctx.font = "bold 13px 'Space Grotesk'";
    ctx.fillStyle = C.blue; ctx.fillText("b₁", ox + b1[0]*scale + 6, oy - b1[1]*scale - 6);
    ctx.fillStyle = C.teal; ctx.fillText("b₂", ox + b2[0]*scale + 6, oy - b2[1]*scale - 6);
    ctx.fillStyle = C.yellow; ctx.fillText("v", vScreenX + 6, vScreenY - 6);

    // Info
    ctx.fillStyle = "#0a1220dd"; ctx.strokeStyle = C.border;
    roundRect(ctx, 12, 12, 220, 90, 6); ctx.fill(); ctx.stroke();
    ctx.font = "12px 'JetBrains Mono'"; ctx.fillStyle = C.muted;
    ctx.fillText("Standard basis → New basis", 22, 30);
    ctx.fillStyle = C.blue2;
    ctx.fillText(`b₁ = (${e1x.toFixed(1)}, ${e1y.toFixed(1)})`, 22, 50);
    ctx.fillStyle = C.teal;
    ctx.fillText(`b₂ = (${e2x.toFixed(1)}, ${e2y.toFixed(1)})`, 22, 70);
    ctx.fillStyle = C.yellow;
    ctx.fillText(`v_new = (${vx.toFixed(1)}, ${vy.toFixed(1)})`, 22, 90);

    ctx.fillStyle = C.muted; ctx.font = "10px 'JetBrains Mono'";
    for (let i = -5; i <= 5; i++) {
      if (i === 0) continue;
      ctx.fillText(i, ox + i * scale - 6, oy + 14);
    }
  }, [e1x, e1y, e2x, e2y, vx, vy, playing]);

  return <canvas ref={canvasRef} width={700} height={520} style={{ width: "100%", height: "100%" }} />;
}

// ─── SCENE 7: SVD ─────────────────────────────────────────────────────────────
function SVDScene({ params, playing }) {
  const canvasRef = useRef(null);
  const { sigma1=2.5, sigma2=0.8, theta1=30, theta2=20 } = params;

  useAnimationFrame((elapsed) => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const scale = 55, ox = W / 2, oy = H / 2;
    const duration = 4000;
    const progress = playing ? Math.min(elapsed / duration, 1) : 1;
    const p = easeInOut(progress);

    // SVD: A = U Σ Vᵀ — 3 step animation
    // Step 1: V rotation (0→0.33), Step 2: Σ scale (0.33→0.66), Step 3: U rotation (0.66→1)
    const ph1 = Math.min(1, p * 3);
    const ph2 = Math.min(1, Math.max(0, p * 3 - 1));
    const ph3 = Math.min(1, Math.max(0, p * 3 - 2));

    const t1 = theta1 * Math.PI / 180;
    const t2 = theta2 * Math.PI / 180;

    const rot = (ang) => [[Math.cos(ang), -Math.sin(ang)], [Math.sin(ang), Math.cos(ang)]];
    const applyRot = (r, x, y) => [r[0][0]*x + r[0][1]*y, r[1][0]*x + r[1][1]*y];

    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy);

    // Draw unit circle (original)
    ctx.beginPath(); ctx.strokeStyle = C.muted + "40"; ctx.lineWidth = 1; ctx.setLineDash([4,4]);
    ctx.arc(ox, oy, scale, 0, Math.PI*2); ctx.stroke(); ctx.setLineDash([]);

    // Draw transformed ellipse (result of A = UΣVᵀ)
    const R_V = rot(t1 * ph1);
    const s1 = lerp(1, sigma1, ph2), s2 = lerp(1, sigma2, ph2);
    const R_U = rot(t2 * ph3);

    ctx.beginPath();
    for (let ang = 0; ang <= Math.PI*2; ang += 0.05) {
      const ux = Math.cos(ang), uy = Math.sin(ang);
      const [rx, ry] = applyRot(R_V, ux, uy);
      const sx = rx * s1, sy = ry * s2;
      const [tx, ty] = applyRot(R_U, sx, sy);
      const sx2 = ox + tx * scale, sy2 = oy - ty * scale;
      ang === 0 ? ctx.moveTo(sx2, sy2) : ctx.lineTo(sx2, sy2);
    }
    ctx.closePath();
    ctx.strokeStyle = C.blue; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = C.blue + "10"; ctx.fill();

    // Principal axes (σ1 and σ2 directions)
    const [ua1x, ua1y] = applyRot(R_U, [s1, 0][0], 0);
    const [ua2x, ua2y] = applyRot(R_U, 0, s2);
    ctx.shadowBlur = 10; ctx.shadowColor = C.yellow;
    drawArrow(ctx, ox, oy, ox + ua1x*scale, oy - ua1y*scale, C.yellow, 2.5);
    ctx.shadowColor = C.pink;
    drawArrow(ctx, ox, oy, ox + ua2x*scale, oy - ua2y*scale, C.pink, 2.5);
    ctx.shadowBlur = 0;
    ctx.font = "bold 12px 'Space Grotesk'";
    ctx.fillStyle = C.yellow; ctx.fillText(`σ₁=${sigma1}`, ox + ua1x*scale + 6, oy - ua1y*scale - 6);
    ctx.fillStyle = C.pink; ctx.fillText(`σ₂=${sigma2}`, ox + ua2x*scale + 6, oy - ua2y*scale - 6);

    // Step indicator
    const steps = ["1. Rotate (Vᵀ)", "2. Scale (Σ)", "3. Rotate (U)"];
    const stepIdx = ph3 > 0 ? 2 : ph2 > 0 ? 1 : 0;
    ctx.fillStyle = "#0a1220dd"; ctx.strokeStyle = C.border;
    roundRect(ctx, 12, 12, 220, 90, 6); ctx.fill(); ctx.stroke();
    ctx.font = "bold 13px 'Space Grotesk'"; ctx.fillStyle = C.blue2;
    ctx.fillText("SVD: A = U Σ Vᵀ", 22, 32);
    steps.forEach((s, i) => {
      ctx.fillStyle = i === stepIdx ? C.yellow : C.muted;
      ctx.font = `${i === stepIdx ? "bold " : ""}12px 'JetBrains Mono'`;
      ctx.fillText(`${i === stepIdx ? "▶" : " "} ${s}`, 22, 52 + i*18);
    });
    ctx.fillStyle = C.muted; ctx.font = "10px 'JetBrains Mono'";
    for (let i = -5; i <= 5; i++) {
      if (i === 0) continue;
      ctx.fillText(i, ox + i * scale - 6, oy + 14);
      ctx.fillText(i, ox + 4, oy - i * scale + 4);
    }
  }, [sigma1, sigma2, theta1, theta2, playing]);

  return <canvas ref={canvasRef} width={700} height={520} style={{ width: "100%", height: "100%" }} />;
}

// ─── SCENE 8: PCA ─────────────────────────────────────────────────────────────
function PCAScene({ params, playing }) {
  const canvasRef = useRef(null);
  const { spread=1.5, angle=30, nPoints=40, showPC=true } = params;

  // Generate deterministic random points
  const points = useMemo(() => {
    const pts = [];
    let seed = 42;
    const rand = () => { seed = (seed * 1664525 + 1013904223) & 0xffffffff; return (seed >>> 0) / 0xffffffff; };
    const randn = () => Math.sqrt(-2*Math.log(rand() + 1e-10)) * Math.cos(2*Math.PI*rand());
    for (let i = 0; i < nPoints; i++) {
      pts.push([randn() * spread * 2 + randn() * 0.3, randn() * 0.4 + randn() * 0.3]);
    }
    return pts;
  }, [nPoints, spread]);

  useAnimationFrame((elapsed) => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const scale = 55, ox = W / 2, oy = H / 2;
    const progress = playing ? Math.min(elapsed / 3000, 1) : 1;
    const p = easeInOut(progress);

    const ang = angle * Math.PI / 180;
    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy);

    // Rotate and draw points
    const rotPts = points.map(([x, y]) => [
      x * Math.cos(ang) - y * Math.sin(ang),
      x * Math.sin(ang) + y * Math.cos(ang)
    ]);

    // Data cloud
    rotPts.forEach(([x, y]) => {
      const sx = ox + x*scale, sy = oy - y*scale;
      ctx.beginPath();
      ctx.arc(sx, sy, 4, 0, Math.PI*2);
      ctx.fillStyle = C.blue + "90"; ctx.fill();
      ctx.strokeStyle = C.blue2 + "60"; ctx.lineWidth = 0.5; ctx.stroke();
    });

    // PC1 direction
    const pc1 = [Math.cos(ang), Math.sin(ang)];
    const pc2 = [-Math.sin(ang), Math.cos(ang)];

    if (p > 0.3) {
      const alpha = (p - 0.3) / 0.7;
      // Draw projections
      rotPts.forEach(([x, y]) => {
        const projLen = x * pc1[0] + y * pc1[1];
        const projX = projLen * pc1[0], projY = projLen * pc1[1];
        ctx.globalAlpha = alpha * 0.3;
        ctx.strokeStyle = C.muted; ctx.lineWidth = 0.8;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(ox + x*scale, oy - y*scale);
        ctx.lineTo(ox + projX*scale, oy - projY*scale);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.globalAlpha = 1;
        // Projected point
        ctx.globalAlpha = alpha * 0.7;
        ctx.beginPath();
        ctx.arc(ox + projX*scale, oy - projY*scale, 3, 0, Math.PI*2);
        ctx.fillStyle = C.yellow;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
    }

    // PC axes
    const extent = 5;
    ctx.shadowBlur = 14; ctx.shadowColor = C.yellow;
    drawArrow(ctx, ox - pc1[0]*extent*scale, oy + pc1[1]*extent*scale,
              ox + pc1[0]*extent*scale, oy - pc1[1]*extent*scale, C.yellow, 3);
    ctx.shadowColor = C.pink;
    drawArrow(ctx, ox - pc2[0]*extent*scale*0.3, oy + pc2[1]*extent*scale*0.3,
              ox + pc2[0]*extent*scale*0.3, oy - pc2[1]*extent*scale*0.3, C.pink, 2);
    ctx.shadowBlur = 0;

    ctx.font = "bold 13px 'Space Grotesk'";
    ctx.fillStyle = C.yellow;
    ctx.fillText("PC₁ (max variance)", ox + pc1[0]*extent*scale + 6, oy - pc1[1]*extent*scale);
    ctx.fillStyle = C.pink;
    ctx.fillText("PC₂", ox + pc2[0]*extent*scale*0.3 + 6, oy - pc2[1]*extent*scale*0.3);

    // Info
    ctx.fillStyle = "#0a1220dd"; ctx.strokeStyle = C.border;
    roundRect(ctx, 12, 12, 220, 80, 6); ctx.fill(); ctx.stroke();
    ctx.font = "12px 'JetBrains Mono'"; ctx.fillStyle = C.muted;
    ctx.fillText(`Points: ${nPoints}`, 22, 32);
    ctx.fillStyle = C.yellow; ctx.fillText(`PC₁ angle: ${angle}°`, 22, 52);
    ctx.fillStyle = C.blue2; ctx.fillText(`Spread: ${spread.toFixed(1)}`, 22, 72);

    ctx.fillStyle = C.muted; ctx.font = "10px 'JetBrains Mono'";
    for (let i = -5; i <= 5; i++) {
      if (i === 0) continue;
      ctx.fillText(i, ox + i * scale - 6, oy + 14);
      ctx.fillText(i, ox + 4, oy - i * scale + 4);
    }
  }, [points, angle, spread, playing]);

  return <canvas ref={canvasRef} width={700} height={520} style={{ width: "100%", height: "100%" }} />;
}

// ─── TOPICS CONFIG ────────────────────────────────────────────────────────────
const TOPICS = [
  {
    id: "vectors", label: "Vectors", icon: "→", color: C.blue,
    desc: "Vector addition, subtraction, and scalar multiplication in 2D space.",
    equations: ["\\vec{v} + \\vec{w} = \\vec{r}", "c\\vec{v} = \\text{scaled vector}"],
    Scene: VectorsScene,
    defaultParams: { vx: 3, vy: 2, wx: -1, wy: 2, scalar: 1.5, mode: "add" },
    controls: [
      { key: "mode", label: "Mode", type: "select", options: ["add", "scalar", "dot"] },
      { key: "vx", label: "vx", type: "slider", min: -5, max: 5, step: 0.1 },
      { key: "vy", label: "vy", type: "slider", min: -5, max: 5, step: 0.1 },
      { key: "wx", label: "wx", type: "slider", min: -5, max: 5, step: 0.1 },
      { key: "wy", label: "wy", type: "slider", min: -5, max: 5, step: 0.1 },
      { key: "scalar", label: "scalar", type: "slider", min: -3, max: 3, step: 0.1 },
    ]
  },
  {
    id: "dot", label: "Dot Product", icon: "·", color: C.teal,
    desc: "The dot product measures how much two vectors align. Projects v onto w.",
    equations: ["\\vec{v} \\cdot \\vec{w} = |v||w|\\cos\\theta", "\\text{proj}_w v = \\frac{\\vec{v}\\cdot\\vec{w}}{|w|^2}\\vec{w}"],
    Scene: DotProductScene,
    defaultParams: { vx: 3, vy: 1, wx: 1, wy: 3 },
    controls: [
      { key: "vx", label: "vx", type: "slider", min: -4, max: 4, step: 0.1 },
      { key: "vy", label: "vy", type: "slider", min: -4, max: 4, step: 0.1 },
      { key: "wx", label: "wx", type: "slider", min: -4, max: 4, step: 0.1 },
      { key: "wy", label: "wy", type: "slider", min: -4, max: 4, step: 0.1 },
    ]
  },
  {
    id: "matrix", label: "Linear Maps", icon: "M", color: C.purple,
    desc: "A matrix defines a linear transformation of space. Watch the grid transform.",
    equations: ["T(\\vec{x}) = A\\vec{x}", "A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}"],
    Scene: MatrixScene,
    defaultParams: { a: 1, b: 0.5, c: -0.5, d: 1 },
    controls: [
      { key: "a", label: "a", type: "slider", min: -3, max: 3, step: 0.05 },
      { key: "b", label: "b", type: "slider", min: -3, max: 3, step: 0.05 },
      { key: "c", label: "c", type: "slider", min: -3, max: 3, step: 0.05 },
      { key: "d", label: "d", type: "slider", min: -3, max: 3, step: 0.05 },
    ]
  },
  {
    id: "det", label: "Determinant", icon: "D", color: C.yellow,
    desc: "The determinant measures area scaling. Negative det = orientation flip.",
    equations: ["\\det(A) = ad - bc", "|\\det(A)| = \\text{area scale}"],
    Scene: DeterminantScene,
    defaultParams: { a: 2, b: 1, c: 0.5, d: 2 },
    controls: [
      { key: "a", label: "a", type: "slider", min: -3, max: 3, step: 0.05 },
      { key: "b", label: "b", type: "slider", min: -3, max: 3, step: 0.05 },
      { key: "c", label: "c", type: "slider", min: -3, max: 3, step: 0.05 },
      { key: "d", label: "d", type: "slider", min: -3, max: 3, step: 0.05 },
    ]
  },
  {
    id: "eigen", label: "Eigenvectors", icon: "λ", color: C.pink,
    desc: "Eigenvectors stay on their own line after transformation. λ is the scale factor.",
    equations: ["A\\vec{v} = \\lambda\\vec{v}", "\\det(A - \\lambda I) = 0"],
    Scene: EigenScene,
    defaultParams: { a: 2, b: 1, c: 1, d: 2 },
    controls: [
      { key: "a", label: "a", type: "slider", min: -3, max: 3, step: 0.05 },
      { key: "b", label: "b", type: "slider", min: -3, max: 3, step: 0.05 },
      { key: "c", label: "c", type: "slider", min: -3, max: 3, step: 0.05 },
      { key: "d", label: "d", type: "slider", min: -3, max: 3, step: 0.05 },
    ]
  },
  {
    id: "basis", label: "Change of Basis", icon: "B", color: C.orange,
    desc: "Different bases give different coordinate representations of the same vector.",
    equations: ["[\\vec{v}]_B = B^{-1}\\vec{v}", "P = \\begin{bmatrix} \\vec{b_1} & \\vec{b_2} \\end{bmatrix}"],
    Scene: BasisScene,
    defaultParams: { e1x: 1, e1y: 1, e2x: -1, e2y: 1, vx: 1, vy: 1 },
    controls: [
      { key: "e1x", label: "b₁x", type: "slider", min: -3, max: 3, step: 0.1 },
      { key: "e1y", label: "b₁y", type: "slider", min: -3, max: 3, step: 0.1 },
      { key: "e2x", label: "b₂x", type: "slider", min: -3, max: 3, step: 0.1 },
      { key: "e2y", label: "b₂y", type: "slider", min: -3, max: 3, step: 0.1 },
      { key: "vx", label: "vx", type: "slider", min: -4, max: 4, step: 0.1 },
      { key: "vy", label: "vy", type: "slider", min: -4, max: 4, step: 0.1 },
    ]
  },
  {
    id: "svd", label: "SVD", icon: "Σ", color: C.green,
    desc: "SVD decomposes any matrix into rotation → scale → rotation. Fundamental to ML.",
    equations: ["A = U\\Sigma V^T", "\\Sigma = \\begin{bmatrix}\\sigma_1 & 0 \\\\ 0 & \\sigma_2\\end{bmatrix}"],
    Scene: SVDScene,
    defaultParams: { sigma1: 2.5, sigma2: 0.8, theta1: 30, theta2: 20 },
    controls: [
      { key: "sigma1", label: "σ₁", type: "slider", min: 0.1, max: 4, step: 0.05 },
      { key: "sigma2", label: "σ₂", type: "slider", min: 0.1, max: 4, step: 0.05 },
      { key: "theta1", label: "θ_V (°)", type: "slider", min: -90, max: 90, step: 1 },
      { key: "theta2", label: "θ_U (°)", type: "slider", min: -90, max: 90, step: 1 },
    ]
  },
  {
    id: "pca", label: "PCA", icon: "P", color: C.red,
    desc: "PCA finds axes of maximum variance. Projects high-dim data to lower dimensions.",
    equations: ["C = \\frac{1}{n}X^TX", "C\\vec{v} = \\lambda\\vec{v}"],
    Scene: PCAScene,
    defaultParams: { spread: 1.5, angle: 30, nPoints: 40 },
    controls: [
      { key: "spread", label: "Spread", type: "slider", min: 0.3, max: 3, step: 0.05 },
      { key: "angle", label: "PC₁ angle (°)", type: "slider", min: -90, max: 90, step: 1 },
      { key: "nPoints", label: "# Points", type: "slider", min: 10, max: 80, step: 1 },
    ]
  },
];

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function LinAlgViz() {
  const [topicIdx, setTopicIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [t, setT] = useState(0); // reset trigger
  const [params, setParams] = useState({});
  const [showMath, setShowMath] = useState(true);
  const [katexLoaded, setKatexLoaded] = useState(false);

  const topic = TOPICS[topicIdx];

  // Load KaTeX
  useEffect(() => {
    if (window.katex) { setKatexLoaded(true); return; }
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css";
    document.head.appendChild(link);
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js";
    script.onload = () => setKatexLoaded(true);
    document.head.appendChild(script);
  }, []);

  // Reset params on topic switch
  useEffect(() => {
    setParams(topic.defaultParams);
    setT(v => v + 1);
    setPlaying(true);
  }, [topicIdx]);

  const setParam = useCallback((key, val) => {
    setParams(p => ({ ...p, [key]: val }));
  }, []);

  const reset = () => { setT(v => v + 1); setPlaying(true); };

  const allParams = { ...topic.defaultParams, ...params, showMath };
  const Scene = topic.Scene;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "var(--bg)", overflow: "hidden" }}>
      <KatexCSS />

      {/* TOP BAR */}
      <div style={{
        display: "flex", alignItems: "center", gap: 16,
        padding: "10px 20px", background: "var(--bg2)",
        borderBottom: "1px solid var(--border)", flexShrink: 0,
        boxShadow: "0 2px 20px #0008"
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: `linear-gradient(135deg, ${C.blue}, ${C.purple})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, fontWeight: 700, boxShadow: `0 0 12px ${C.blue}60`
          }}>L</div>
          <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: "-0.5px", color: C.blue2 }}>LinAlgViz</span>
        </div>

        {/* Topic name */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <span style={{ fontSize: 13, color: C.muted, fontFamily: "'JetBrains Mono'" }}>Topic: </span>
          <span style={{ fontSize: 14, fontWeight: 600, color: topic.color }}>{topic.label}</span>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <ControlBtn onClick={reset} title="Reset">↺</ControlBtn>
          <ControlBtn onClick={() => setPlaying(p => !p)} accent title={playing ? "Pause" : "Play"} glow={playing}>
            {playing ? "⏸" : "▶"}
          </ControlBtn>
          <ControlBtn onClick={() => setT(v => v + 1)} title="Step">⏭</ControlBtn>
          <ControlBtn
            onClick={() => setShowMath(v => !v)}
            accent={showMath} title="Toggle Math"
            style={{ fontSize: 11, padding: "6px 10px" }}
          >∑ Math</ControlBtn>
        </div>
      </div>

      {/* BODY */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* SIDEBAR */}
        <div style={{
          width: 168, background: "var(--bg2)", borderRight: "1px solid var(--border)",
          display: "flex", flexDirection: "column", overflowY: "auto", flexShrink: 0
        }}>
          <div style={{ padding: "8px 6px", fontSize: 10, color: C.muted, letterSpacing: 2, textTransform: "uppercase", paddingTop: 14 }}>Topics</div>
          {TOPICS.map((tp, i) => (
            <button key={tp.id} onClick={() => setTopicIdx(i)} style={{
              display: "flex", alignItems: "center", gap: 10, padding: "10px 12px",
              background: i === topicIdx ? `${tp.color}15` : "transparent",
              border: "none", borderLeft: `3px solid ${i === topicIdx ? tp.color : "transparent"}`,
              cursor: "pointer", width: "100%", textAlign: "left",
              transition: "all 0.15s",
              borderBottom: "1px solid var(--border)"
            }}>
              <span style={{
                width: 26, height: 26, borderRadius: 6,
                background: i === topicIdx ? tp.color + "30" : "var(--bg3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 700, color: i === topicIdx ? tp.color : C.muted,
                flexShrink: 0
              }}>{tp.icon}</span>
              <span style={{ fontSize: 12, fontWeight: i === topicIdx ? 600 : 400, color: i === topicIdx ? tp.color : C.text }}>
                {tp.label}
              </span>
            </button>
          ))}
        </div>

        {/* MAIN CANVAS AREA */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
          {/* Canvas */}
          <div key={`${topicIdx}-${t}`} className="scene-fade" style={{
            flex: 1, background: "var(--bg)", position: "relative", overflow: "hidden"
          }}>
            <Scene params={allParams} playing={playing} t={t} />

            {/* Math overlay */}
            {showMath && katexLoaded && (
              <div style={{
                position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)",
                display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center"
              }}>
                {topic.equations.map((eq, i) => (
                  <div key={i} style={{
                    background: "#0a1228cc", border: `1px solid ${topic.color}40`,
                    borderRadius: 8, padding: "6px 14px",
                    backdropFilter: "blur(8px)",
                    boxShadow: `0 0 12px ${topic.color}20`
                  }}>
                    <MathSpan tex={eq} />
                  </div>
                ))}
              </div>
            )}

            {/* Playing indicator */}
            {playing && (
              <div style={{
                position: "absolute", top: 12, right: 12,
                background: C.green + "20", border: `1px solid ${C.green}40`,
                borderRadius: 20, padding: "3px 10px",
                fontSize: 11, color: C.green, fontFamily: "'JetBrains Mono'",
                display: "flex", alignItems: "center", gap: 5
              }}>
                <span style={{ animation: "pulse 1s infinite", display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: C.green }} />
                LIVE
              </div>
            )}
          </div>

          {/* Progress indicator */}
          <div style={{
            height: 3, background: "var(--border)", position: "relative"
          }}>
            <div style={{
              height: "100%",
              background: `linear-gradient(90deg, ${topic.color}, ${topic.color}80)`,
              width: playing ? "100%" : "0%",
              transition: playing ? "width 3s linear" : "none",
              boxShadow: `0 0 8px ${topic.color}80`
            }} />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div style={{
          width: 230, background: "var(--bg2)", borderLeft: "1px solid var(--border)",
          display: "flex", flexDirection: "column", overflow: "hidden", flexShrink: 0
        }}>
          {/* Description */}
          <div style={{ padding: "14px 14px 10px", borderBottom: "1px solid var(--border)" }}>
            <div style={{ fontSize: 11, color: C.muted, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>About</div>
            <p style={{ fontSize: 12, color: C.text, lineHeight: 1.55, fontFamily: "'Crimson Pro', serif" }}>
              {topic.desc}
            </p>
          </div>

          {/* Controls */}
          <div style={{ padding: "10px 14px", overflowY: "auto", flex: 1 }}>
            <div style={{ fontSize: 11, color: C.muted, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 10 }}>Parameters</div>
            {topic.controls.map(ctrl => (
              <div key={ctrl.key} style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <label style={{ fontSize: 11, color: C.muted, fontFamily: "'JetBrains Mono'" }}>{ctrl.label}</label>
                  {ctrl.type === "slider" && (
                    <span style={{ fontSize: 11, color: topic.color, fontFamily: "'JetBrains Mono'" }}>
                      {Number(allParams[ctrl.key] ?? ctrl.min).toFixed(ctrl.step < 1 ? 2 : 0)}
                    </span>
                  )}
                </div>
                {ctrl.type === "slider" && (
                  <input type="range"
                    min={ctrl.min} max={ctrl.max} step={ctrl.step}
                    value={allParams[ctrl.key] ?? ctrl.min}
                    onChange={e => setParam(ctrl.key, Number(e.target.value))}
                  />
                )}
                {ctrl.type === "select" && (
                  <select value={allParams[ctrl.key] ?? ctrl.options[0]}
                    onChange={e => setParam(ctrl.key, e.target.value)}
                    style={{
                      width: "100%", background: "var(--bg3)", border: "1px solid var(--border)",
                      color: C.text, borderRadius: 4, padding: "5px 8px",
                      fontFamily: "'JetBrains Mono'", fontSize: 12
                    }}>
                    {ctrl.options.map(o => <option key={o}>{o}</option>)}
                  </select>
                )}
              </div>
            ))}
          </div>

          {/* Math equations */}
          {showMath && katexLoaded && (
            <div style={{ borderTop: "1px solid var(--border)", padding: 12 }}>
              <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>Key Equations</div>
              {topic.equations.map((eq, i) => (
                <div key={i} style={{
                  background: "var(--bg3)", borderRadius: 6, padding: "6px 10px",
                  marginBottom: 6, fontSize: 12, overflowX: "auto",
                  border: `1px solid ${topic.color}20`
                }}>
                  <MathSpan tex={eq} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── CONTROL BUTTON ───────────────────────────────────────────────────────────
function ControlBtn({ children, onClick, accent, glow, title, style: sty = {} }) {
  return (
    <button onClick={onClick} title={title} style={{
      background: accent ? "var(--blue)" : "var(--bg3)",
      border: `1px solid ${accent ? "var(--blue)" : "var(--border)"}`,
      color: accent ? "#fff" : "var(--text)",
      borderRadius: 6, padding: "6px 12px", cursor: "pointer",
      fontSize: 14, fontWeight: 600, transition: "all 0.15s",
      boxShadow: glow ? "0 0 14px var(--blue)60" : "none",
      fontFamily: "'Space Grotesk'",
      ...sty
    }}>
      {children}
    </button>
  );
}
