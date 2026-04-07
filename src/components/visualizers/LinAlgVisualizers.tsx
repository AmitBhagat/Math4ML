import React, { useRef, useMemo } from "react";
import { 
  CanvasBase, 
  C as BaseC, 
  drawGrid, 
  drawArrow, 
  lerp, 
  easeInOut,
  useAnimationFrame,
  VisualizerTheme,
  drawInfoBox,
  roundRect,
  getResponsiveScale
} from "./CanvasBase";

// â”€â”€â”€ UTILS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Utils removed, now using shared functions from CanvasBase

const drawTicks = (ctx: CanvasRenderingContext2D, ox: number, oy: number, scale: number, theme: VisualizerTheme = 'light', range = 6) => {
  const colors = BaseC(theme);
  ctx.fillStyle = colors.muted;
  ctx.font = "10px 'JetBrains Mono'";
  ctx.textAlign = "center";
  for (let i = -range; i <= range; i++) {
    if (i === 0) continue;
    ctx.fillText(i.toString(), ox + i * scale, oy + 18);
    ctx.fillText(i.toString(), ox - 14, oy - i * scale + 4);
    // little tick marks
    ctx.beginPath(); ctx.strokeStyle = colors.axis; ctx.lineWidth = 1;
    ctx.moveTo(ox + i * scale, oy - 3); ctx.lineTo(ox + i * scale, oy + 3); ctx.stroke();
    ctx.moveTo(ox - 3, oy - i * scale); ctx.lineTo(ox + 3, oy - i * scale); ctx.stroke();
  }
  ctx.textAlign = "left";
};

// â”€â”€â”€ SCENE 1: VECTORS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const PremiumVectorsVisualizer = ({ 
  mode = "add", 
  playing = true,
  vx = 3, vy = 2,
  wx = -1, wy = 2,
  scalar = 1.5,
  theme = 'light'
}: { 
  mode?: "add" | "scalar" | "dot", 
  playing?: boolean,
  vx?: number, vy?: number,
  wx?: number, wy?: number,
  scalar?: number,
  theme?: VisualizerTheme
}) => {

  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = getResponsiveScale(W, H, 60), ox = W / 2, oy = H / 2;
    const p = easeInOut(Math.min(elapsed / 3000, 1));

    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy, theme);
    drawTicks(ctx, ox, oy, scale, theme);

    const toScreen = (x: number, y: number): [number, number] => [ox + x * scale, oy - y * scale];

    if (mode === "add") {
      const [vx2, vy2] = toScreen(vx * p, vy * p);
      drawArrow(ctx, ox, oy, vx2, vy2, C.blue, 3);
      ctx.fillStyle = C.blue; ctx.font = "bold 14px 'Space Grotesk'";
      ctx.fillText("v", ox + vx * p * scale / 2 + 8, oy - vy * p * scale / 2);

      const [wx2, wy2] = toScreen(vx * p + wx * p, vy * p + wy * p);
      if (p > 0.3) {
        ctx.setLineDash([5, 5]);
        drawArrow(ctx, vx2, vy2, wx2, wy2, C.teal, 2.5);
        ctx.setLineDash([]);
        ctx.fillStyle = C.teal; ctx.font = "bold 13px 'Space Grotesk'";
        ctx.fillText("w", vx2 + wx * p * scale / 2 + 8, vy2 - wy * p * scale / 2);
      }

      if (p > 0.6) {
        const alpha = Math.min(1, (p - 0.6) / 0.4);
        ctx.globalAlpha = alpha;
        drawArrow(ctx, ox, oy, wx2, wy2, C.yellow, 3);
        ctx.globalAlpha = 1;
        ctx.fillStyle = C.yellow; ctx.fillText("v + w", wx2 + 10, wy2);
      }
    } else if (mode === "scalar") {
      const sv = scalar;
      drawArrow(ctx, ox, oy, ...toScreen(vx, vy), C.blue, 2);
      const [sx2, sy2] = toScreen(vx * sv * p, vy * sv * p);
      drawArrow(ctx, ox, oy, sx2, sy2, C.purple, 3);
      ctx.fillStyle = C.blue; ctx.font = "bold 14px 'Space Grotesk'";
      ctx.fillText("v", ox + vx * scale / 2 + 8, oy - vy * scale / 2);
      ctx.fillStyle = C.purple; ctx.fillText(`${sv}v`, sx2 + 8, sy2);
    } else if (mode === "dot") {
      drawArrow(ctx, ox, oy, ...toScreen(3, 1), C.blue, 3);
      drawArrow(ctx, ox, oy, ...toScreen(1, 3), C.teal, 3);
      const dot = 3 * 1 + 1 * 3;
      const wlen2 = 1**2 + 3**2;
      const px = (dot/wlen2)*1, py = (dot/wlen2)*3;
      const [psx, psy] = toScreen(px * p, py * p);
      drawArrow(ctx, ox, oy, psx, psy, C.yellow, 3);
      if (p > 0.4) {
        ctx.setLineDash([4,4]); ctx.strokeStyle = C.white; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(...toScreen(3, 1)); ctx.lineTo(psx, psy); ctx.stroke();
        ctx.setLineDash([]);
      }
    }
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// â”€â”€â”€ SCENE 2: DOT PRODUCT (DETAILED) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const PremiumDotProductVisualizer = ({
  vx = 3, vy = 1,
  wx = 1, wy = 3,
  theme = 'light'
}: {
  vx?: number, vy?: number,
  wx?: number, wy?: number,
  theme?: VisualizerTheme
}) => {

  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = getResponsiveScale(W, H, 60), ox = W / 2, oy = H / 2;
    const p = easeInOut(Math.min(elapsed / 2500, 1));

    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy, theme);
    drawTicks(ctx, ox, oy, scale, theme);

    const toScreen = (x: number, y: number): [number, number] => [ox + x * scale, oy - y * scale];
    const dot = vx * wx + vy * wy;
    const wlen = Math.sqrt(wx * wx + wy * wy);
    const vlen = Math.sqrt(vx * vx + vy * vy);
    const cosA = dot / (vlen * wlen);
    const angle = Math.acos(Math.max(-1, Math.min(1, cosA)));

    // Angle Arc
    if (p > 0.3) {
      const a1 = Math.atan2(-vy, vx), a2 = Math.atan2(-wy, wx);
      ctx.beginPath(); ctx.strokeStyle = C.purple; ctx.lineWidth = 2;
      ctx.arc(ox, oy, 40, Math.min(a1, a2), Math.max(a1, a2));
      ctx.stroke();
      const amid = (a1 + a2) / 2;
      ctx.fillStyle = C.purple; ctx.font = "bold 13px 'JetBrains Mono'";
      ctx.fillText("Î¸", ox + 48 * Math.cos(amid), oy + 48 * Math.sin(amid));
    }

    drawArrow(ctx, ox, oy, ...toScreen(vx * p, vy * p), C.blue, 3);
    drawArrow(ctx, ox, oy, ...toScreen(wx * p, wy * p), C.teal, 3);

    const wlen2 = wx**2 + wy**2;
    const projX = (dot / wlen2) * wx, projY = (dot / wlen2) * wy;
    const [px2, py2] = toScreen(projX * p, projY * p);
    if (p > 0.5) {
      drawArrow(ctx, ox, oy, px2, py2, C.yellow, 4);
      ctx.setLineDash([4, 4]); ctx.strokeStyle = C.white; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(...toScreen(vx, vy)); ctx.lineTo(px2, py2); ctx.stroke();
      ctx.setLineDash([]);
    }

    drawInfoBox(ctx, W, H, "Dot Product Detail", [
      { label: "v · w", value: dot.toFixed(2), color: C.blue2 },
      { label: "Angle θ", value: `${(angle * 180 / Math.PI).toFixed(1)}°`, color: C.purple },
      { label: "cos(θ)", value: cosA.toFixed(2), color: C.white },
      { label: " |proj_w(v)|", value: (dot/wlen).toFixed(2), color: C.yellow }
    ], theme);
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// ————————————————————————————————— SCENE 3: MATRIX TRANSFORMS —————————————————————————————————————
export const PremiumMatrixVisualizer = ({ a = 1, b = 0.5, c = -0.5, d = 1, playing = true, theme = 'light' }: { a?: number, b?: number, c?: number, d?: number, playing?: boolean, theme?: VisualizerTheme }) => {
  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = getResponsiveScale(W, H, 50), ox = W / 2, oy = H / 2;
    const p = easeInOut(Math.min(elapsed / 2500, 1));
    ctx.clearRect(0, 0, W, H);

    const ta = lerp(1, a, p), tb = lerp(0, b, p);
    const tc = lerp(0, c, p), td = lerp(1, d, p);

    // Ghost Original
    ctx.setLineDash([5, 5]); ctx.strokeStyle = C.muted + "40"; ctx.lineWidth = 1;
    ctx.strokeRect(ox, oy - scale, scale, scale);
    ctx.setLineDash([]);

    const range = 7;
    for (let i = -range; i <= range; i++) {
       // y-basis family (moving parallel to x-basis)
       ctx.lineWidth = i === 0 ? 1.5 : 0.5;
       ctx.strokeStyle = i === 0 ? C.blue + "80" : C.grid;
       ctx.beginPath();
       ctx.moveTo(ox + (-range * ta + i * tc) * scale, oy - (-range * tb + i * td) * scale);
       ctx.lineTo(ox + (range * ta + i * tc) * scale, oy - (range * tb + i * td) * scale);
       ctx.stroke();

       // x-basis family (moving parallel to y-basis)
       ctx.strokeStyle = i === 0 ? C.teal + "80" : C.grid;
       ctx.beginPath();
       ctx.moveTo(ox + (i * ta - range * tc) * scale, oy - (i * tb - range * td) * scale);
       ctx.lineTo(ox + (i * ta + range * tc) * scale, oy - (i * tb + range * td) * scale);
       ctx.stroke();
    }

    // Centered labels
    ctx.fillStyle = C.blue; ctx.font = "bold 13px 'Space Grotesk'";
    drawArrow(ctx, ox, oy, ox + ta * scale, oy - tb * scale, C.blue, 3);
    ctx.fillText("ê₁", ox + ta * scale + 6, oy - tb * scale - 6);
    ctx.fillStyle = C.teal;
    drawArrow(ctx, ox, oy, ox + tc * scale, oy - td * scale, C.teal, 3);
    ctx.fillText("ê₂", ox + tc * scale + 6, oy - td * scale - 6);

    const det = ta * td - tb * tc;
    drawInfoBox(ctx, W, H, "Transformation", [
      { label: "Matrix A", value: `[${a} ${b}; ${c} ${d}]`, color: C.blue2 },
      { label: "det(A)", value: det.toFixed(2), color: Math.abs(det) < 0.01 ? C.red : C.green },
      { label: "Scale factor", value: `×${Math.abs(det).toFixed(1)}`, color: C.muted }
    ], theme);
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// ————————————————————————————————— SCENE 4: DETERMINANT ———————————————————————————————————————————
export const PremiumDeterminantVisualizer = ({ a = 2, b = 1, c = 0.5, d = 2, playing = true, theme = 'light' }: { a?: number, b?: number, c?: number, d?: number, playing?: boolean, theme?: VisualizerTheme }) => {
  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = getResponsiveScale(W, H, 60), ox = W / 2, oy = H / 2;
    const p = easeInOut(Math.min(elapsed / 3000, 1));
    const ta = lerp(1, a, p), tb = lerp(0, b, p);
    const tc = lerp(0, c, p), td = lerp(1, d, p);

    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy, theme);

    const pts = [[0,0],[1,0],[1,1],[0,1]].map(([x,y]) => [ox + (ta*x + tc*y)*scale, oy - (tb*x + td*y)*scale]);
    ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
    pts.forEach(pt => ctx.lineTo(pt[0], pt[1]));
    ctx.closePath();
    const det = ta*td - tb*tc;
    ctx.fillStyle = (det >= 0 ? C.teal : C.red) + "30"; ctx.fill();
    ctx.strokeStyle = det >= 0 ? C.teal : C.red; ctx.lineWidth = 2; ctx.stroke();
    
    ctx.textAlign = "center"; ctx.fillStyle = det >= 0 ? C.teal : C.red; ctx.font = "bold 14px 'Space Grotesk'";
    const [cx, cy] = [(pts[0][0]+pts[2][0])/2, (pts[0][1]+pts[2][1])/2];
    ctx.fillText(`Area: ${Math.abs(det).toFixed(2)}`, cx, cy);
    if (det < 0) ctx.fillText("(Flipped Orientation!)", cx, cy + 20);
    ctx.textAlign = "left";

    drawArrow(ctx, ox, oy, ox + ta*scale, oy - tb*scale, C.blue, 3);
    drawArrow(ctx, ox, oy, ox + tc*scale, oy - td*scale, C.teal, 3);

    drawInfoBox(ctx, W, H, "Determinant Analysis", [
      { label: "det(A)", value: det.toFixed(2), color: C.yellow },
      { label: "Linear Scale", value: `×${Math.sqrt(Math.abs(det)).toFixed(2)}`, color: C.white }
    ], theme);
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// ————————————————————————————————— SCENE 5: EIGENVECTORS ———————————————————————————————————————————
export const PremiumEigenVisualizer = ({ a = 2, b = 1, c = 1, d = 2, playing = true, theme = 'light' }: { a?: number, b?: number, c?: number, d?: number, playing?: boolean, theme?: VisualizerTheme }) => {
  const points = useMemo(() => Array.from({ length: 40 }).map(() => [(Math.random()-0.5)*8, (Math.random()-0.5)*8]), []);

  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = getResponsiveScale(W, H, 55), ox = W / 2, oy = H / 2;
    const p = easeInOut(Math.min(elapsed / 3000, 1));
    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy, theme);
    drawTicks(ctx, ox, oy, scale, theme);

    const ta = lerp(1, a, p), tb = lerp(0, b, p);
    const tc = lerp(0, c, p), td = lerp(1, d, p);

    // Shearing Test Vectors (show how they move)
    points.forEach(([x, y]) => {
      const nx = ta*x + tc*y, ny = tb*x + td*y;
      const [sx, sy] = [ox + nx * scale, oy - ny * scale];
      ctx.beginPath(); ctx.arc(sx, sy, 3, 0, Math.PI*2);
      ctx.fillStyle = C.muted + "40"; ctx.fill();
    });

    const trace = a + d, det = a * d - b * c;
    const disc = trace * trace - 4 * det;
    
    if (disc >= 0) {
      const lam1 = (trace + Math.sqrt(disc)) / 2, lam2 = (trace - Math.sqrt(disc)) / 2;
      const ev1 = b !== 0 ? [lam1 - d, b] : [1, 0], ev2 = b !== 0 ? [lam2 - d, b] : [0, 1];
      const n1 = Math.sqrt(ev1[0]**2 + ev1[1]**2), n2 = Math.sqrt(ev2[0]**2 + ev2[1]**2);
      const e1 = [ev1[0]/n1, ev1[1]/n1], e2 = [ev2[0]/n2, ev2[1]/n2];

      // Eigen Lines (Fixed Directions)
      [e1, e2].forEach((e, idx) => {
        ctx.strokeStyle = idx === 0 ? C.yellow : C.pink;
        ctx.globalAlpha = 0.5;
        ctx.setLineDash([10, 5]); ctx.lineWidth = 1.5;
        ctx.beginPath(); 
        ctx.moveTo(ox - e[0]*1000, oy + e[1]*1000); 
        ctx.lineTo(ox + e[0]*1000, oy - e[1]*1000); 
        ctx.stroke();
      });
      ctx.setLineDash([]); ctx.globalAlpha = 1;

      const sv = 2.5; // Visual length
      const [ex1, ey1] = [ox + e1[0]*sv*lerp(1, lam1, p)*scale, oy - e1[1]*sv*lerp(1, lam1, p)*scale];
      const [ex2, ey2] = [ox + e2[0]*sv*lerp(1, lam2, p)*scale, oy - e2[1]*sv*lerp(1, lam2, p)*scale];
      
      drawArrow(ctx, ox, oy, ex1, ey1, C.yellow, 3.5);
      drawArrow(ctx, ox, oy, ex2, ey2, C.pink, 3.5);

      ctx.fillStyle = C.yellow; ctx.font = "bold 13px 'Space Grotesk'";
      ctx.fillText(`λ₁ = ${lam1.toFixed(2)}`, ex1 + 8, ey1 - 8);
      ctx.fillStyle = C.pink;
      ctx.fillText(`λ₂ = ${lam2.toFixed(2)}`, ex2 + 8, ey2 - 8);

      drawInfoBox(ctx, W, H, "Eigenvalue Decomposition", [
        { label: "λ1 (Yellow)", value: lam1.toFixed(3), color: C.yellow },
        { label: "λ2 (Pink)", value: lam2.toFixed(3), color: C.pink },
        { label: "Trace", value: trace.toFixed(1), color: C.muted },
        { label: "Determinant", value: det.toFixed(1), color: C.muted }
      ]);
    } else {
       ctx.fillStyle = C.red; ctx.font = "bold 14px 'Space Grotesk'";
       ctx.textAlign = "center";
       ctx.fillText("Complex Eigenvalues (Rotation Detected)", ox, oy - 100);
       ctx.textAlign = "left";
    }
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// ————————————————————————————————— SCENE 6: CHANGE OF BASIS ———————————————————————————————————————
export const PremiumBasisVisualizer = ({ e1x=1, e1y=1, e2x=-1, e2y=1, vx=1, vy=1, theme = 'light' }: { e1x?: number, e1y?: number, e2x?: number, e2y?: number, vx?: number, vy?: number, theme?: VisualizerTheme }) => {
  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = getResponsiveScale(W, H, 55), ox = W / 2, oy = H / 2;
    const p = easeInOut(Math.min(elapsed / 3000, 1));

    ctx.clearRect(0, 0, W, H);
    ctx.globalAlpha = 1 - p * 0.5;
    drawGrid(ctx, W, H, scale, ox, oy, theme);
    ctx.globalAlpha = 1;

    const norm1 = Math.sqrt(e1x**2 + e1y**2), norm2 = Math.sqrt(e2x**2 + e2y**2);
    const b1 = [e1x/norm1, e1y/norm1], b2 = [e2x/norm2, e2y/norm2];

    const range = 8; ctx.globalAlpha = p;
    for (let i = -range; i <= range; i++) {
      ctx.lineWidth = i === 0 ? 2 : 1;
      ctx.strokeStyle = i === 0 ? C.teal : C.grid;
      ctx.globalAlpha = i === 0 ? 0.8 * p : 0.4 * p;
      ctx.beginPath();
      ctx.moveTo(ox + (-range*b1[0] + i*b2[0])*scale, oy - (-range*b1[1] + i*b2[1])*scale);
      ctx.lineTo(ox + (range*b1[0] + i*b2[0])*scale, oy - (range*b1[1] + i*b2[1])*scale);
      ctx.stroke();

      ctx.strokeStyle = i === 0 ? C.blue : C.grid;
      ctx.beginPath();
      ctx.moveTo(ox + (i*b1[0] - range*b2[0])*scale, oy - (i*b1[1] - range*b2[1])*scale);
      ctx.lineTo(ox + (i*b1[0] + range*b2[0])*scale, oy - (i*b1[1] + range*b2[1])*scale);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    drawArrow(ctx, ox, oy, ox + b1[0]*scale*lerp(1, norm1, p), oy - b1[1]*scale*lerp(1, norm1, p), C.blue, 3);
    drawArrow(ctx, ox, oy, ox + b2[0]*scale*lerp(1, norm2, p), oy - b2[1]*scale*lerp(1, norm2, p), C.teal, 3);

    const vNew = [vx * b1[0] + vy * b2[0], vx * b1[1] + vy * b2[1]];
    const [vsx, vsy] = [ox + lerp(vx, vNew[0], p) * scale, oy - lerp(vy, vNew[1], p) * scale];
    drawArrow(ctx, ox, oy, vsx, vsy, C.yellow, 3);

    drawInfoBox(ctx, W, H, "Basis Change", [
      { label: "New b1", value: `(${e1x}, ${e1y})`, color: C.blue2 },
      { label: "New b2", value: `(${e2x}, ${e2y})`, color: C.teal },
      { label: "Transition", value: p > 0.9 ? "Basis Active" : "Interpolating...", color: C.muted }
    ], theme);
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// ————————————————————————————————— SCENE 7: SVD ———————————————————————————————————————————————————
export const PremiumSVDVisualizer = ({ sigma1 = 2.5, sigma2 = 0.8, theta1 = 30, theta2 = 20, playing = true, theme = 'light' }: { sigma1?: number, sigma2?: number, theta1?: number, theta2?: number, playing?: boolean, theme?: VisualizerTheme }) => {
  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = getResponsiveScale(W, H, 55), ox = W / 2, oy = H / 2;
    const duration = 4000;
    const p = easeInOut(Math.min(elapsed / duration, 1));
    
    // Triple-Phase Logic from LinAlgViz.jsx: 1. Rotate Vᵀ, 2. Scale Σ, 3. Rotate U
    const ph1 = Math.min(1, p * 3);
    const ph2 = Math.min(1, Math.max(0, p * 3 - 1));
    const ph3 = Math.min(1, Math.max(0, p * 3 - 2));

    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy, theme);
    drawTicks(ctx, ox, oy, scale, theme);

    const rot = (ang: number) => [[Math.cos(ang), -Math.sin(ang)], [Math.sin(ang), Math.cos(ang)]];
    const applyRot = (r: number[][], x: number, y: number) => [r[0][0]*x + r[0][1]*y, r[1][0]*x + r[1][1]*y];

    const t1 = theta1 * Math.PI / 180, t2 = theta2 * Math.PI / 180;
    const R_V = rot(t1 * ph1);
    const s1 = lerp(1, sigma1, ph2), s2 = lerp(1, sigma2, ph2);
    const R_U = rot(t2 * ph3);

    // Draw unit circle ghost
    ctx.setLineDash([4, 4]); ctx.strokeStyle = C.white; ctx.lineWidth = 1.5; ctx.globalAlpha = 0.5;
    ctx.beginPath(); ctx.arc(ox, oy, scale, 0, Math.PI*2); ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha = 1;

    // Draw transformed ellipse
    ctx.beginPath();
    for (let ang = 0; ang <= Math.PI*2; ang += 0.05) {
      const [rx, ry] = applyRot(R_V, Math.cos(ang), Math.sin(ang));
      const [tx, ty] = applyRot(R_U, rx * s1, ry * s2);
      const sx = ox + tx * scale, sy = oy - ty * scale;
      ang === 0 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
    }
    ctx.closePath();
    ctx.strokeStyle = C.blue; ctx.lineWidth = 2.5; ctx.stroke();
    ctx.fillStyle = C.blue + "15"; ctx.fill();

    const [ua1x, ua1y] = applyRot(R_U, s1, 0);
    const [ua2x, ua2y] = applyRot(R_U, 0, s2);
    drawArrow(ctx, ox, oy, ox + ua1x*scale, oy - ua1y*scale, C.yellow, 3);
    drawArrow(ctx, ox, oy, ox + ua2x*scale, oy - ua2y*scale, C.pink, 3);

    const currentStep = ph3 > 0.01 ? 2 : ph2 > 0.01 ? 1 : 0;
    const steps = ["Vᵀ Rotation", "Σ Scaling", "U Rotation"];
    drawInfoBox(ctx, W, H, "SVD: U Σ Vᵀ Decomposition", [
      { label: "State", value: steps[currentStep], color: C.yellow },
      { label: "σ1 Principal", value: s1.toFixed(2), color: C.white },
      { label: "σ2 Principal", value: s2.toFixed(2), color: C.white },
      { label: "Sequence", value: `${(p*100).toFixed(0)}% Complete`, color: C.muted }
    ], theme);
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// ————————————————————————————————— SCENE 8: PCA ———————————————————————————————————————————————————
export const PremiumPCAVisualizer = ({ angle = 30, spread = 1.8, playing = true, theme = 'light' }: { angle?: number, spread?: number, playing?: boolean, theme?: VisualizerTheme }) => {
  const points = useMemo(() => {
    return Array.from({ length: 40 }).map(() => [
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 0.8
    ]);
  }, []);

  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = getResponsiveScale(W, H, 55), ox = W / 2, oy = H / 2;
    const p = easeInOut(Math.min(elapsed / 3000, 1));
    const ang = angle * Math.PI / 180;

    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy, theme);

    const pc1 = [Math.cos(ang), Math.sin(ang)];
    points.forEach(([px, py]) => {
      const rx = px * Math.cos(ang) - py * Math.sin(ang);
      const ry = px * Math.sin(ang) + py * Math.cos(ang);
      const sx = ox + rx * scale, sy = oy - ry * scale;
      
      ctx.beginPath(); ctx.arc(sx, sy, 4, 0, Math.PI * 2);
      ctx.fillStyle = C.blue + "90"; ctx.fill();

      if (p > 0.4) {
        const dot = rx * pc1[0] + ry * pc1[1];
        const projX = dot * pc1[0], projY = dot * pc1[1];
        ctx.globalAlpha = (p - 0.4) * 0.5;
        ctx.setLineDash([3,3]); ctx.strokeStyle = C.white;
        ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ox + projX * scale, oy - projY * scale); ctx.stroke();
        ctx.setLineDash([]); ctx.globalAlpha = 1;
      }
    });

    const ex = 5;
    drawArrow(ctx, ox - pc1[0]*ex*scale, oy + pc1[1]*ex*scale, ox + pc1[0]*ex*scale, oy - pc1[1]*ex*scale, C.yellow, 3);
    
    drawInfoBox(ctx, W, H, "PCA Projections", [
      { label: "Principal axis", value: `${angle}°`, color: C.yellow },
      { label: "Variance", value: "Maximizing...", color: C.muted }
    ], theme);
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// =============================================================================
// Premium Vector Norms Visualizer (L1 vs L2)
// =============================================================================
export const PremiumNormsVisualizer = ({ p = 2, playing = true, theme = 'light' }: { p?: number, playing?: boolean, theme?: VisualizerTheme }) => {
  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = getResponsiveScale(W, H, 80), ox = W / 2, oy = H / 2;
    const dur = 3000;
    const animP = easeInOut(Math.min(elapsed / dur, 1));
    const currentP = lerp(2, p, animP);

    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy, theme);
    drawTicks(ctx, ox, oy, scale, theme, 3);

    ctx.beginPath();
    ctx.strokeStyle = C.teal;
    ctx.lineWidth = 3;

    const steps = 180;
    for (let i = 0; i <= steps; i++) {
        const theta = (i / steps) * Math.PI * 2;
        const cos = Math.cos(theta);
        const sin = Math.sin(theta);
        const r = Math.pow(Math.pow(Math.abs(cos), currentP) + Math.pow(Math.abs(sin), currentP), -1 / currentP);
        const px = ox + r * cos * scale;
        const py = oy - r * sin * scale;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.shadowBlur = 0;

    drawInfoBox(ctx, W, H, `L${p.toFixed(1)} Norm Unit Circle`, [
      { label: "Norm Order p", value: currentP.toFixed(2), color: C.teal },
      { label: "Shape", value: p === 1 ? "Diamond" : p === 2 ? "Circle" : "Super-ellipse", color: C.muted }
    ], theme);
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// =============================================================================
// Premium Distance Metrics Visualizer
// =============================================================================
export const PremiumDistanceVisualizer = ({ ax = -2, ay = -1, bx = 2, by = 2, playing = true, theme = 'light' }: { ax?: number, ay?: number, bx?: number, by?: number, playing?: boolean, theme?: VisualizerTheme }) => {
  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = getResponsiveScale(W, H, 55), ox = W / 2, oy = H / 2;
    const p = easeInOut(Math.min(elapsed / 2500, 1));

    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy, theme);
    drawTicks(ctx, ox, oy, scale, theme);

    const [pxA, pyA] = [ox + ax * scale, oy - ay * scale];
    const [pxB, pyB] = [ox + bx * scale, oy - by * scale];

    // Manhattan
    ctx.beginPath(); ctx.strokeStyle = C.teal; ctx.lineWidth = 2; ctx.setLineDash([5, 5]);
    ctx.moveTo(pxA, pyA);
    ctx.lineTo(ox + bx * p * scale + ax * (1-p) * scale, pyA);
    if (p > 0.5) ctx.lineTo(pxB, oy - (ay * (1 - (p-0.5)*2) + by * (p-0.5)*2) * scale);
    ctx.stroke();

    // Euclidean
    ctx.beginPath(); ctx.strokeStyle = C.blue; ctx.lineWidth = 3; ctx.setLineDash([]);
    ctx.moveTo(pxA, pyA);
    ctx.lineTo(ox + (ax + (bx - ax) * p) * scale, oy - (ay + (by - ay) * p) * scale);
    ctx.stroke();

    // Points
    ctx.fillStyle = C.blue; ctx.beginPath(); ctx.arc(pxA, pyA, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = C.teal; ctx.beginPath(); ctx.arc(pxB, pyB, 6, 0, Math.PI * 2); ctx.fill();

    const distE = Math.sqrt((bx - ax) ** 2 + (by - ay) ** 2);
    const distM = Math.abs(bx - ax) + Math.abs(by - ay);

    drawInfoBox(ctx, W, H, "Distance Analytics", [
      { label: "Euclidean (L2)", value: distE.toFixed(2), color: C.blue2 },
      { label: "Manhattan (L1)", value: distM.toFixed(2), color: C.teal },
      { label: "θ (Alignment)", value: (Math.atan2(by-ay, bx-ax) * 180 / Math.PI).toFixed(0) + "°", color: C.muted }
    ], theme);
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// =============================================================================
// Premium Equations Visualizer
// =============================================================================
export const PremiumEquationsVisualizer = ({ a1=1, b1=1, c1=2, a2=1, b2=-1, c2=0, playing=true, theme = 'light' }: { a1?: number, b1?: number, c1?: number, a2?: number, b2?: number, c2?: number, playing?: boolean, theme?: VisualizerTheme }) => {
  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = getResponsiveScale(W, H, 50), ox = W / 2, oy = H / 2;
    const p = easeInOut(Math.min(elapsed / 2500, 1));
    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy, theme);
    drawTicks(ctx, ox, oy, scale, theme);

    const drawEq = (a: number, b: number, c: number, color: string) => {
      ctx.beginPath(); ctx.strokeStyle = color; ctx.lineWidth = 3;
      const x1 = -6, x2 = 6;
      const y1 = (c - a*x1)/b, y2 = (c - a*x2)/b;
      ctx.moveTo(ox + x1*scale, oy - y1*scale);
      ctx.lineTo(ox + (x1 + (x2-x1)*p)*scale, oy - (y1 + (y2-y1)*p)*scale);
      ctx.stroke();
    };

    drawEq(a1, b1, c1, C.blue);
    drawEq(a2, b2, c2, C.teal);

    const det = a1 * b2 - a2 * b1;
    if (Math.abs(det) > 0.01) {
      const ix = (c1 * b2 - c2 * b1) / det, iy = (a1 * c2 - a2 * c1) / det;
      if (p > 0.8) {
        ctx.beginPath(); ctx.arc(ox + ix*scale, oy - iy*scale, 7, 0, Math.PI*2); ctx.fill();
        ctx.font = "bold 13px 'JetBrains Mono'";
        ctx.fillText(`Solution: (${ix.toFixed(1)}, ${iy.toFixed(1)})`, ox + ix*scale + 12, oy - iy*scale);
      }
    }

    drawInfoBox(ctx, W, H, "System Analysis", [
      { label: "Eq1", value: `${a1}x + ${b1}y = ${c1}`, color: C.blue2 },
      { label: "Eq2", value: `${a2}x + ${b2}y = ${c2}`, color: C.teal },
      { label: "Solvable", value: Math.abs(det) > 0.01 ? "Yes" : "Parallel", color: C.muted }
    ], theme);
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// =============================================================================
// Premium Matrix Operations Playground (Addition, Multiplication, Scalar)
// =============================================================================
export const PremiumMatrixOpsVisualizer = ({ 
  mode = "add", 
  a11=2, a12=1, a21=0, a22=3,
  b11=1, b12=2, b21=4, b22=1,
  k=2,
  theme = 'light'
}: {
  mode?: "add" | "multiply" | "scalar",
  a11?: number, a12?: number, a21?: number, a22?: number,
  b11?: number, b12?: number, b21?: number, b22?: number,
  k?: number,
  theme?: VisualizerTheme
}) => {
  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const ox = W / 2, oy = H / 2;
    const col1 = -160, col2 = 0, col3 = 160; // Horizontal positions
    const cellSize = 50, gap = 10;

    ctx.clearRect(0, 0, W, H);

    const drawMatrix = (x: number, y: number, vals: number[][], label: string, isResult = false) => {
      const bw = cellSize * 2 + gap * 3;
      const bh = cellSize * 2 + gap * 3;
      const bx = x - bw / 2, by = y - bh / 2;

      // Label
      ctx.fillStyle = C.muted; ctx.font = "bold 11px Inter"; ctx.textAlign = "center";
      ctx.fillText(label, x, by - 15);

      // Background for Result
      if (isResult) {
        ctx.fillStyle = theme === 'dark' ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)";
        roundRect(ctx, bx, by, bw, bh, 8); ctx.fill();
        ctx.strokeStyle = theme === 'dark' ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)";
        ctx.stroke();
      }

      // Brackets
      ctx.strokeStyle = theme === 'dark' ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";
      ctx.lineWidth = 3; ctx.lineCap = "round";
      // Left [
      ctx.beginPath(); ctx.moveTo(bx + 10, by); ctx.lineTo(bx, by); ctx.lineTo(bx, by + bh); ctx.lineTo(bx + 10, by + bh); ctx.stroke();
      // Right ]
      ctx.beginPath(); ctx.moveTo(bx + bw - 10, by); ctx.lineTo(bx + bw, by); ctx.lineTo(bx + bw, by + bh); ctx.lineTo(bx + bw - 10, by + bh); ctx.stroke();
 
      // Elements
      ctx.font = "bold 18px 'Space Grotesk'";
      vals.forEach((row, ri) => {
        row.forEach((v, ci) => {
          const ex = bx + gap + ci * (cellSize + gap) + cellSize / 2;
          const ey = by + gap + ri * (cellSize + gap) + cellSize / 2 + 6;
          ctx.fillStyle = theme === 'dark' ? "#ffffff" : "#000000";
          ctx.fillText(v.toString(), ex, ey);
        });
      });
    };

    const A = [[a11, a12], [a21, a22]];
    const B = [[b11, b12], [b21, b22]];
    
    let C_res: number[][] = [[0,0],[0,0]];
    let symbol = "+";

    if (mode === "add") {
      C_res = A.map((row, i) => row.map((v, j) => v + B[i][j]));
      symbol = "+";
    } else if (mode === "multiply") {
      C_res = [
        [A[0][0]*B[0][0] + A[0][1]*B[1][0], A[0][0]*B[0][1] + A[0][1]*B[1][1]],
        [A[1][0]*B[0][0] + A[1][1]*B[1][0], A[1][0]*B[0][1] + A[1][1]*B[1][1]]
      ];
      symbol = "Ã—";
    } else if (mode === "scalar") {
      C_res = A.map(row => row.map(v => k * v));
      symbol = "Ã—";
    }

    // Draw Operations
    if (mode === "scalar") {
        ctx.fillStyle = theme === 'dark' ? "#ffffff" : "#000000"; ctx.font = "bold 24px 'Space Grotesk'";
        const centerCol = W < 500 ? col2 : col1; 
        ctx.fillText(`k=${k}`, col1 - 100, oy + 8);
        drawMatrix(col1, oy, A, "Matrix A");
        ctx.fillStyle = theme === 'dark' ? "#ffffff" : "#000000"; ctx.font = "24px Inter"; ctx.fillText("=", col1 + 80, oy + 8);
        drawMatrix(col1 + 180, oy, C_res, "Result (k * A)", true);
    } else {
        const isSmall = W < 500;
        const spacing = isSmall ? 100 : 160;
        drawMatrix(ox - spacing, isSmall ? oy - 60 : oy, A, "Matrix A");
        ctx.fillStyle = theme === 'dark' ? "#ffffff" : "#000000"; ctx.font = "24px Inter"; 
        ctx.fillText(symbol, ox, isSmall ? oy : oy + 8);
        drawMatrix(isSmall ? ox : ox + spacing, isSmall ? oy + 60 : oy, B, "Matrix B");
        
        ctx.fillStyle = theme === 'dark' ? "#ffffff" : "#000000"; ctx.font = "24px Inter"; 
        ctx.fillText("=", isSmall ? ox + 100 : col3 - 80, isSmall ? oy + 120 : oy + 8);
        drawMatrix(isSmall ? ox : col3, isSmall ? oy + 180 : oy, C_res, "Result Matrix", true);
    }

    ctx.textAlign = "left";
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// =============================================================================
// Premium Orthogonality Visualizer
// =============================================================================
export const PremiumOrthogonalityVisualizer = ({ vx = 3, vy = 0, wx = 0, wy = 3, theme = 'light' }: { vx?: number, vy?: number, wx?: number, wy?: number, theme?: VisualizerTheme }) => {
  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = getResponsiveScale(W, H, 60), ox = W / 2, oy = H / 2;
    const p = easeInOut(Math.min(elapsed / 2500, 1));
    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy, theme);
    drawTicks(ctx, ox, oy, scale, theme);

    const [pxA, pyA] = [ox + vx * p * scale, oy - vy * p * scale];
    const [pxB, pyB] = [ox + wx * p * scale, oy - wy * p * scale];

    const dot = vx * wx + vy * wy;
    const isOrthogonal = Math.abs(dot) < 0.01;

    // Draw Right Angle Indicator
    if (isOrthogonal && p > 0.8) {
      const size = 15;
      const angleA = Math.atan2(vy, vx);
      const angleB = Math.atan2(wy, wx);
      ctx.beginPath(); ctx.strokeStyle = C.yellow; ctx.lineWidth = 2;
      ctx.moveTo(ox + size * Math.cos(angleA), oy - size * Math.sin(angleA));
      ctx.lineTo(ox + size * Math.cos(angleA) + size * Math.cos(angleB), oy - size * Math.sin(angleA) - size * Math.sin(angleB));
      ctx.lineTo(ox + size * Math.cos(angleB), oy - size * Math.sin(angleB));
      ctx.stroke();
    }

    drawArrow(ctx, ox, oy, pxA, pyA, C.blue, 4);
    drawArrow(ctx, ox, oy, pxB, pyB, C.teal, 4);

    drawInfoBox(ctx, W, H, "Orthogonality Check", [
      { label: "Vector v", value: `[${vx}, ${vy}]`, color: C.blue2 },
      { label: "Vector w", value: `[${wx}, ${wy}]`, color: C.teal },
      { label: "Dot Product", value: dot.toFixed(2), color: isOrthogonal ? C.green : C.red }
    ], theme);
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// =============================================================================
// Premium Projections Visualizer
// =============================================================================
export const PremiumProjectionsVisualizer = ({ vx = 3, vy = 2, wx = 4, wy = 0, theme = 'light' }: { vx?: number, vy?: number, wx?: number, wy?: number, theme?: VisualizerTheme }) => {
  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = getResponsiveScale(W, H, 60), ox = W / 2, oy = H / 2;
    const p = easeInOut(Math.min(elapsed / 3000, 1));
    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy, theme);
    drawTicks(ctx, ox, oy, scale, theme);

    const [pxV, pyV] = [ox + vx * scale, oy - vy * scale];
    const [pxW, pyW] = [ox + wx * scale, oy - wy * scale];
    
    // Line spanned by W
    ctx.setLineDash([10, 5]); ctx.strokeStyle = C.white; ctx.lineWidth = 1.2; ctx.globalAlpha = 0.5;
    ctx.beginPath(); ctx.moveTo(ox - wx * 10 * scale, oy + wy * 10 * scale); ctx.lineTo(ox + wx * 10 * scale, oy - wy * 10 * scale); ctx.stroke();
    ctx.setLineDash([]); ctx.globalAlpha = 1;

    // Vector W (Reference)
    ctx.globalAlpha = 0.6;
    drawArrow(ctx, ox, oy, pxW, pyW, C.teal, 2);
    ctx.globalAlpha = 1;

    // Vector V (to be projected)
    drawArrow(ctx, ox, oy, ox + vx*p*scale, oy - vy*p*scale, C.blue, 3);

    const dotVW = vx * wx + vy * wy;
    const wLenSq = wx * wx + wy * wy;
    const projCoeff = dotVW / wLenSq;
    const projX = projCoeff * wx, projY = projCoeff * wy;

    if (p > 0.5) {
      const alpha = (p - 0.5) * 2;
      ctx.globalAlpha = alpha;
      // The Projection Vector
      drawArrow(ctx, ox, oy, ox + projX * scale, oy - projY * scale, C.yellow, 4);

      // The Error Vector (Orthogonal to W)
      ctx.setLineDash([5, 5]); ctx.strokeStyle = C.pink; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(pxV, pyV); ctx.lineTo(ox + projX * scale, oy - projY * scale); ctx.stroke();
      ctx.setLineDash([]);
      
      ctx.globalAlpha = 1;
    }

    drawInfoBox(ctx, W, H, "Orthogonal Projection", [
      { label: "Vector v", value: `[${vx}, ${vy}]`, color: C.blue2 },
      { label: "Projected on", value: `[${wx}, ${wy}]`, color: C.teal },
      { label: "Coeff (λ)", value: projCoeff.toFixed(2), color: C.yellow },
      { label: "Orthogonal?", value: "Yes (Error ⊥ w)", color: C.green }
    ], theme);
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// =============================================================================
// Premium Rank Visualizer
// =============================================================================
export const PremiumRankVisualizer = ({ rank = 1, a = 1, b = 1, c = 1, d = 1, theme = 'light' }: { rank?: number, a?: number, b?: number, c?: number, d?: number, theme?: VisualizerTheme }) => {
  // For rank 1, we ensure c = k*a, d = k*b.
  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = getResponsiveScale(W, H, 50), ox = W / 2, oy = H / 2;
    const p = easeInOut(Math.min(elapsed / 4000, 1));
    ctx.clearRect(0, 0, W, H);

    // If rank is 1, steer towards the collapsed state
    const fa = lerp(1, a, p), fb = lerp(0, b, p);
    const fc = lerp(0, c, p), fd = lerp(1, d, p);

    // Background Ghost Grid
    ctx.strokeStyle = C.grid; ctx.lineWidth = 1; ctx.globalAlpha = 0.4;
    for(let i=-6; i<=6; i++) {
      ctx.beginPath(); ctx.moveTo(0, oy + i*scale); ctx.lineTo(W, oy + i*scale); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(ox + i*scale, 0); ctx.lineTo(ox + i*scale, H); ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // Transformed Grid
    const range = 7;
    for (let i = -range; i <= range; i++) {
       ctx.lineWidth = i === 0 ? 2 : 0.5;
       ctx.strokeStyle = i === 0 ? C.teal + "cc" : C.grid;
       ctx.beginPath();
       ctx.moveTo(ox + (-range * fa + i * fc) * scale, oy - (-range * fb + i * fd) * scale);
       ctx.lineTo(ox + (range * fa + i * fc) * scale, oy - (range * fb + i * fd) * scale);
       ctx.stroke();

       ctx.strokeStyle = i === 0 ? C.blue + "cc" : C.grid;
       ctx.beginPath();
       ctx.moveTo(ox + (i * fa - range * fc) * scale, oy - (i * fb - range * fd) * scale);
       ctx.lineTo(ox + (i * fa + range * fc) * scale, oy - (i * fb + range * fd) * scale);
       ctx.stroke();
    }

    const det = fa * fd - fb * fc;
    drawInfoBox(ctx, W, H, `Matrix Rank: ${rank}`, [
      { label: "Determinant", value: det.toFixed(3), color: Math.abs(det) < 0.01 ? C.red : C.green },
      { label: "Dimensionality", value: Math.abs(det) < 0.01 ? "1D (Line)" : "2D (Plane)", color: C.yellow },
      { label: "Status", value: Math.abs(det) < 0.01 ? "Rank Deficient" : "Full Rank", color: C.white }
    ], theme);

    if (Math.abs(det) < 0.05 && p > 0.8) {
      ctx.fillStyle = C.red; ctx.font = "bold 14px 'Space Grotesk'"; ctx.textAlign = "center";
      const isSmall = W < 500;
      ctx.fillText("SPACE COLLAPSED!", ox, isSmall ? oy + scale * 1.5 : oy + 180);
      ctx.textAlign = "left";
    }
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

