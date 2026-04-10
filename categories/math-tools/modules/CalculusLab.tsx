import React, { useState, useEffect, useRef } from "react";
import { CanvasBase, drawGrid, getResponsiveScale, C } from "../../../src/components/visualizers/core/CanvasBase";
import { useTheme } from "../../../src/hooks/useTheme";

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MODULE 1: BACKPROPAGATION ENGINE (Chain Rule)
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const BackpropLab = () => {
  const { theme } = useTheme();
  const colors = C(theme as any);
  const [w, setW] = useState(0.8);
  const [x, setX] = useState(1.5);
  const pulseRef = useRef(0);

  const z = w * x;
  const a = Math.tanh(z);
  const loss = (a - 1) ** 2;

  const dL_da = 2 * (a - 1);
  const da_dz = 1 - Math.tanh(z) ** 2;
  const dz_dw = x;
  const dL_dw = dL_da * da_dz * dz_dw;

  const runBackprop = () => { pulseRef.current = 1.0; };

  const draw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number) => {
    const cx = W / 2, cy = H / 2;
    ctx.clearRect(0, 0, W, H);
    if (pulseRef.current > 0) pulseRef.current = Math.max(0, pulseRef.current - 0.015);

    const nodes = [
      { x: cx - 180, y: cy, l: "Input x", v: x.toFixed(1), c: colors.muted },
      { x: cx - 60, y: cy, l: "Weights w", v: w.toFixed(2), c: colors.blue },
      { x: cx + 60, y: cy, l: "Activation Ïƒ", v: a.toFixed(2), c: colors.teal },
      { x: cx + 180, y: cy, l: "Loss L", v: loss.toFixed(2), c: colors.orange }
    ];

    ctx.lineWidth = 2;
    nodes.forEach((n, i) => {
      if (i < nodes.length - 1) {
        ctx.strokeStyle = colors.muted + '4D';
        ctx.beginPath(); ctx.moveTo(n.x + 25, n.y); ctx.lineTo(nodes[i+1].x - 25, nodes[i+1].y); ctx.stroke();
      }
    });

    if (pulseRef.current > 0) {
      const stage = Math.floor((1 - pulseRef.current) * 3);
      if (stage < 3) {
        const start = nodes[3 - stage], end = nodes[2 - stage];
        ctx.strokeStyle = colors.orange + Math.floor(pulseRef.current * 255).toString(16).padStart(2, '0'); ctx.lineWidth = 4;
        ctx.beginPath(); ctx.moveTo(start.x - 25, start.y); ctx.lineTo(end.x + 25, end.y); ctx.stroke();
      }
    }

    nodes.forEach(n => {
       ctx.fillStyle = n.c; ctx.beginPath(); ctx.arc(n.x, n.y, 25, 0, Math.PI*2); ctx.fill();
       ctx.fillStyle = theme === 'dark' ? '#fff' : '#000'; ctx.font = "bold 12px 'JetBrains Mono'"; ctx.textAlign = "center";
       ctx.fillText(n.v, n.x, n.y + 4);
    });
  };

  const derivation = `1. Compute Loss Derivative:
   âˆ‚L/âˆ‚a = 2(a - 1) = ${dL_da.toFixed(3)}

2. Compute Activation Local Gradient:
   âˆ‚a/âˆ‚z = 1 - tanhÂ²(z) = ${da_dz.toFixed(3)}

3. Compute Weight Local Gradient:
   âˆ‚z/âˆ‚w = x = ${dz_dw.toFixed(3)}

4. Chain Rule (Backward Pass):
   âˆ‚L/âˆ‚w = (âˆ‚L/âˆ‚a) * (âˆ‚a/âˆ‚z) * (âˆ‚z/âˆ‚w)
   âˆ‚L/âˆ‚w = (${dL_da.toFixed(2)}) * (${da_dz.toFixed(2)}) * (${dz_dw.toFixed(2)})
   âˆ‚L/âˆ‚w = ${dL_dw.toFixed(4)}`;

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Backpropagation Control</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Weight (w)</span>
            <input type="range" min="-2" max="2" step="0.1" value={w} onChange={e => setW(+e.target.value)} />
            <span className="val-badge">{w.toFixed(1)}</span>
          </div>
          <button className="btn btn-primary w-full mt-4" onClick={runBackprop}>Trigger Backprop Pulse</button>
        </div>
        <div className="card">
          <div className="result-label">Step-by-Step Chain Rule</div>
          <div className="result-box">{derivation}</div>
        </div>
      </div>
      <div><div className="canvas-card" style={{ height: '400px' }}><CanvasBase onDraw={draw} showControls={false} theme={theme as any} /></div></div>
    </div>
  );
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MODULE 2: PARAMETER SENSITIVITY (Derivatives)
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const ParameterSensitivity = () => {
  const { theme } = useTheme();
  const colors = C(theme as any);
  const [w, setW] = useState(0);
  const nudgeRef = useRef(0);

  const L = (val: number) => val ** 2 + 1;
  const dL = (val: number) => 2 * val;

  const draw = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
    const sc = getResponsiveScale(W, H, 40);
    const cx = W / 2, cy = H / 2;
    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, sc, cx, cy, theme as any);
    if (nudgeRef.current > 0) nudgeRef.current -= 0.05;

    ctx.strokeStyle = colors.muted + '44'; ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = -4; x <= 4; x += 0.1) {
      const [px, py] = [cx + x * sc, cy - L(x) * sc];
      if (x === -4) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();

    const slope = dL(w);
    ctx.strokeStyle = '#f8a96a'; ctx.lineWidth = 2;
    ctx.beginPath();
    const tx1 = w - 1, tx2 = w + 1;
    ctx.moveTo(cx + tx1 * sc, cy - (L(w) + slope * (tx1 - w)) * sc);
    ctx.lineTo(cx + tx2 * sc, cy - (L(w) + slope * (tx2 - w)) * sc);
    ctx.stroke();

    ctx.fillStyle = '#5b9cf6'; ctx.beginPath(); ctx.arc(cx + w * sc, cy - L(w) * sc, 6, 0, Math.PI * 2); ctx.fill();
    
    if (nudgeRef.current > 0) {
      ctx.strokeStyle = colors.teal; ctx.lineWidth = 3; 
      ctx.beginPath(); ctx.moveTo(cx + w * sc, cy + 20); ctx.lineTo(cx + (w + 0.5) * sc, cy + 20); ctx.stroke();
    }
  };

  const derivation = `1. Loss Function defined as MSE:
   L(w) = wÂ² + 1

2. Differentiate w.r.t w:
   dL/dw = d/dw[wÂ²] + d/dw[1]
   dL/dw = 2w

3. Current Sensitivity:
   dL/dw = 2(${w.toFixed(1)})
   dL/dw = ${dL(w).toFixed(2)}

Insight:
If dL/dw > 0, increasing w increases Loss. 
Move weight LEFT (Decrease w).`;

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Parameter Sensitivity</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Weight w</span>
            <input type="range" min="-3" max="3" step="0.1" value={w} onChange={e => setW(+e.target.value)} />
            <span className="val-badge">{w.toFixed(1)}</span>
          </div>
          <button className="btn btn-primary w-full mt-4" onClick={() => nudgeRef.current = 1.0}>Nudge Weight (Î”w)</button>
        </div>
        <div className="card">
          <div className="result-label">Step-by-Step Derivative</div>
          <div className="result-box">{derivation}</div>
        </div>
      </div>
      <div><div className="canvas-card" style={{ height: '400px' }}><CanvasBase onDraw={draw} showControls={false} theme={theme as any} /></div></div>
    </div>
  );
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MODULE 3: STOCHASTIC OPTIMIZATION
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const StochasticOptimizer = () => {
  const { theme } = useTheme();
  const colors = C(theme as any);
  const [lr, setLr] = useState(0.1);
  const [batchSize, setBatchSize] = useState(1);
  const [surface, setSurface] = useState<'convex' | 'wavy' | 'regression'>('convex');
  
  const posRef = useRef({ x: -4, v: 0 });
  const noiseRef = useRef(0);
  const nextSampleTimeRef = useRef(0);
  const lastTimeRef = useRef(0);

  // Data for Regression Mode (Static sample of noisy points)
  const dataRef = useRef([
    {x: -4, y: -2}, {x: -2, y: -0.8}, {x: 1, y: 0.5}, {x: 2, y: 1.5}, {x: 4, y: 1.8}
  ]);

  const getF = (x: number) => {
    if (surface === 'convex') return (x*x)/5;
    if (surface === 'wavy') return (x*x)/10 + Math.cos(2*x) + 1;
    let mse = 0;
    dataRef.current.forEach(d => { mse += (x * d.x/1.5 - d.y) ** 2; });
    return mse / 4;
  };

  const getDf = (x: number) => {
    if (surface === 'convex') return (2*x)/5;
    if (surface === 'wavy') return (x/5) - 2*Math.sin(2*x);
    let grad = 0;
    dataRef.current.forEach(d => { grad += (d.x/1.5) * (x * d.x/1.5 - d.y); });
    return (2 * grad) / 4;
  };

  const draw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number) => {
    const sc = getResponsiveScale(W, H, 40);
    const cx = W / 2, cy = H / 2;
    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, sc, cx, cy, theme as any);

    const dt = (elapsed - lastTimeRef.current) / 1000 || 0;
    lastTimeRef.current = elapsed;
    
    if (elapsed > nextSampleTimeRef.current) {
      noiseRef.current = (Math.random() - 0.5) * (15 / batchSize);
      nextSampleTimeRef.current = elapsed + 180;
    }

    const grad = getDf(posRef.current.x) + (batchSize < 25 ? noiseRef.current : 0);
    const beta = 0.92;
    posRef.current.v = posRef.current.v * beta - (grad * lr * 1.5) * (1 - beta);
    posRef.current.x = Math.max(-5, Math.min(5, posRef.current.x + posRef.current.v * dt * 15));

    // Draw Surface Curve
    ctx.strokeStyle = colors.muted + '4D'; ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = -5.5; x <= 5.5; x += 0.1) {
      const [px, py] = [cx + x * sc, cy - getF(x) * sc + 50];
      if (x === -5.5) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Regression Visuals
    if (surface === 'regression') {
      ctx.fillStyle = colors.blue;
      dataRef.current.forEach(d => {
        ctx.beginPath(); ctx.arc(cx + d.x * sc, cy - d.y * sc, 4, 0, Math.PI*2); ctx.fill();
      });
      ctx.strokeStyle = colors.teal; ctx.lineWidth = 2.5; ctx.setLineDash([5, 5]);
      ctx.beginPath(); ctx.moveTo(cx - 5*sc, cy + (posRef.current.x * 3.3)*sc);
      ctx.lineTo(cx + 5*sc, cy - (posRef.current.x * 3.3)*sc); ctx.stroke(); ctx.setLineDash([]);
    }

    ctx.fillStyle = colors.orange; ctx.shadowBlur = 15; ctx.shadowColor = colors.orange;
    ctx.beginPath(); ctx.arc(cx + posRef.current.x * sc, cy - getF(posRef.current.x) * sc + 50, 7, 0, Math.PI * 2); ctx.fill();
    ctx.shadowBlur = 0;
  };

  const derivation = `1. Task Type:
   ${surface === 'regression' ? "Linear Regression Fit" : (surface === 'convex' ? "Convex Optimization" : "Non-Convex Escape Lab")}

2. Interaction:
   CLICK anywhere on the graph to 
   teleport the particle!

3. Escaping Minima:
   Complex mode + small batch 
   demonstrates how noise jumps 
   over local traps.`;

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Optimizer Control</div>
          <div className="preset-row">
            <button className={`preset-tag ${surface === 'convex' ? 'active' : ''}`} onClick={() => setSurface('convex')}>Convex</button>
            <button className={`preset-tag ${surface === 'wavy' ? 'active' : ''}`} onClick={() => setSurface('wavy')}>Wavy Escape</button>
            <button className={`preset-tag ${surface === 'regression' ? 'active' : ''}`} onClick={() => setSurface('regression')}>Regression Fit</button>
          </div>
          <div className="ctrl-row"><span className="ctrl-label">Batch Size</span><input type="range" min="1" max="100" step="1" value={batchSize} onChange={e => setBatchSize(+e.target.value)} /><span className="val-badge">{batchSize}</span></div>
          <div className="ctrl-row"><span className="ctrl-label">Learning Rate</span><input type="range" min="0.01" max="0.5" step="0.01" value={lr} onChange={e => setLr(+e.target.value)} /><span className="val-badge">{lr.toFixed(2)}</span></div>
          <button className="btn w-full mt-4" onClick={() => posRef.current = {x: -4, v: 0}}>Reset Optimizer</button>
        </div>
        <div className="card">
          <div className="result-label">The "Escape" Analysis</div>
          <div className="result-box">{derivation}</div>
        </div>
      </div>
      <div><div className="canvas-card" style={{ height: '400px' }}>
        <CanvasBase 
           onDraw={draw} 
           showControls={true} 
           theme={theme as any}
           onCanvasClick={(px, W) => {
             const sc = getResponsiveScale(W, 400, 40);
             const cx = W / 2;
             posRef.current = { x: (px - cx) / sc, v: 0 };
           }}
        />
      </div></div>
    </div>
  );
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MODULE 4: AUC PERFORMANCE
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const AUCIntegralLab = () => {
  const { theme } = useTheme();
  const colors = C(theme as any);
  const [threshold, setThreshold] = useState(4);
  const f = (x: number) => Math.exp(-x / 2) * 5;

  const draw = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
    const sc = getResponsiveScale(W, H, 40);
    const cx = W / 2 - 150, cy = H / 2 + 100;
    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, sc, cx, cy, theme as any);

    ctx.strokeStyle = '#5b9cf6'; ctx.lineWidth = 3;
    ctx.beginPath();
    for (let x = 0; x <= 8; x += 0.1) {
      const [px, py] = [cx + x * sc, cy - f(x) * sc];
      if (x === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();

    ctx.fillStyle = 'rgba(91,156,246,0.3)';
    ctx.beginPath(); ctx.moveTo(cx, cy);
    for (let x = 0; x <= threshold; x += 0.1) ctx.lineTo(cx + x * sc, cy - f(x) * sc);
    ctx.lineTo(cx + threshold * sc, cy); ctx.closePath(); ctx.fill();

    ctx.strokeStyle = colors.orange; ctx.setLineDash([5, 5]);
    ctx.beginPath(); ctx.moveTo(cx + threshold * sc, cy); ctx.lineTo(cx + threshold * sc, cy - f(threshold) * sc); ctx.stroke();
    ctx.setLineDash([]);
  };

  const val = (10 * (1 - Math.exp(-threshold / 2))).toFixed(2);
  const derivation = `1. Performance Function:
   P(t) = 5 * e^(-t/2)

2. Goal: Integrate from 0 to threshold (T):
   AUC = âˆ«[0â†’T] 5e^(-t/2) dt
   AUC = [-10e^(-t/2)] from 0 to T

3. Evaluation at T = ${threshold.toFixed(1)}:
   AUC = -10e^(-${threshold/2}) - (-10e^0)
   AUC = -10 * ${Math.exp(-threshold/2).toFixed(3)} + 10
   AUC = ${val}`;

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">AUC Metrics</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Threshold</span>
            <input type="range" min="0" max="8" step="0.1" value={threshold} onChange={e => setThreshold(+e.target.value)} />
            <span className="val-badge">{threshold.toFixed(1)}</span>
          </div>
        </div>
        <div className="card">
          <div className="result-label">Step-by-Step Integration</div>
          <div className="result-box">{derivation}</div>
        </div>
      </div>
      <div><div className="canvas-card" style={{ height: '400px' }}><CanvasBase onDraw={draw} showControls={false} theme={theme as any} /></div></div>
    </div>
  );
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MODULE 5: JACOBIAN VECTOR FIELD (Multivariate)
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const JacobianLab = () => {
  const { theme } = useTheme();
  const colors = C(theme as any);
  const [w1, setW1] = useState(1);
  const [w2, setW2] = useState(1);

  const L = (x: number, y: number) => (x - 2)**2 + (y - 2)**2 + 0.5*x*y;
  const dL_dw1 = (x: number, y: number) => 2*(x - 2) + 0.5*y;
  const dL_dw2 = (x: number, y: number) => 2*(y - 2) + 0.5*x;

  const draw = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
    const sc = getResponsiveScale(W, H, 40);
    const cx = W / 2, cy = H / 2;
    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, sc, cx, cy, theme as any);

    // Draw Heatmap/Contour (Sampling)
    for (let i = -4; i <= 4; i += 0.5) {
      for (let j = -4; j <= 4; j += 0.5) {
        const val = L(i, j);
        ctx.fillStyle = `rgba(91, 156, 246, ${Math.min(0.3, val/20)})`;
        ctx.fillRect(cx + i*sc - 10, cy - j*sc - 10, 20, 20);
      }
    }

    // Draw Gradient Vector at (w1, w2)
    const g1 = dL_dw1(w1, w2);
    const g2 = dL_dw2(w1, w2);

    ctx.strokeStyle = colors.orange; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx + w1*sc, cy - w2*sc);
    ctx.lineTo(cx + (w1 - g1)*sc, cy - (w2 - g2)*sc);
    ctx.stroke();

    // Weight point
    ctx.fillStyle = theme === 'dark' ? '#fff' : '#000'; ctx.beginPath(); ctx.arc(cx + w1*sc, cy - w2*sc, 6, 0, Math.PI*2); ctx.fill();
  };

  const derivation = `1. Loss Function L(wâ‚, wâ‚‚):
   L = (wâ‚-2)Â² + (wâ‚‚-2)Â² + 0.5wâ‚wâ‚‚

2. Jacobian (Gradient Vector):
   J = [ âˆ‚L/âˆ‚wâ‚, âˆ‚L/âˆ‚wâ‚‚ ]
   âˆ‚L/âˆ‚wâ‚ = ${dL_dw1(w1, w2).toFixed(2)}
   âˆ‚L/âˆ‚wâ‚‚ = ${dL_dw2(w1, w2).toFixed(2)}`;

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Jacobian Control</div>
          <div className="ctrl-row"><span className="ctrl-label">wâ‚</span><input type="range" min="-4" max="4" step="0.1" value={w1} onChange={e => setW1(+e.target.value)} /><span className="val-badge">{w1.toFixed(1)}</span></div>
          <div className="ctrl-row"><span className="ctrl-label">wâ‚‚</span><input type="range" min="-4" max="4" step="0.1" value={w2} onChange={e => setW2(+e.target.value)} /><span className="val-badge">{w2.toFixed(1)}</span></div>
        </div>
        <div className="card">
          <div className="result-label">Multivariate Derivation</div>
          <div className="result-box">{derivation}</div>
        </div>
      </div>
      <div><div className="canvas-card" style={{ height: '400px' }}><CanvasBase onDraw={draw} showControls={false} theme={theme as any} /></div></div>
    </div>
  );
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MODULE 6: HESSIAN CURVATURE
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const CurvatureLab = () => {
  const { theme } = useTheme();
  const colors = C(theme as any);
  const [w, setW] = useState(0);
  const f = (x: number) => 0.5 * x**2 + (x < 0 ? 0.2 * x**4 : 0);
  const df = (x: number) => x + (x < 0 ? 0.8 * x**3 : 0);
  const ddf = (x: number) => 1 + (x < 0 ? 2.4 * x**2 : 0);

  const draw = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
    const sc = getResponsiveScale(W, H, 40);
    const cx = W / 2, cy = H / 2;
    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, sc, cx, cy, theme as any);

    ctx.strokeStyle = colors.muted + '4D'; ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = -3; x <= 3; x += 0.1) {
      const [px, py] = [cx + x * sc, cy - f(x) * sc + 50];
      if (x === -3) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();

    const curv = ddf(w);
    const radius = Math.abs(1 / curv) * sc;
    ctx.strokeStyle = colors.teal; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx + w * sc, cy - f(w) * sc + 50 - radius, radius, 0, Math.PI*2);
    ctx.stroke();

    ctx.fillStyle = theme === 'dark' ? '#fff' : '#000'; ctx.beginPath(); ctx.arc(cx + w*sc, cy - f(w)*sc + 50, 6, 0, Math.PI*2); ctx.fill();
  };

  const derivation = `1. Second Derivative (Hessian):
   H = âˆ‚Â²L / âˆ‚wÂ²
   H(current) = ${ddf(w).toFixed(3)}

2. Curvature Interpretation:
   Radius of Curvature = 1 / H
   H = ${ddf(w).toFixed(2)} (Sharpness)`;

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Hessian Curvature</div>
          <div className="ctrl-row"><span className="ctrl-label">Weight</span><input type="range" min="-2.5" max="2.5" step="0.1" value={w} onChange={e => setW(+e.target.value)} /><span className="val-badge">{w.toFixed(1)}</span></div>
        </div>
        <div className="card">
          <div className="result-label">Second-Order Analysis</div>
          <div className="result-box">{derivation}</div>
        </div>
      </div>
      <div><div className="canvas-card" style={{ height: '400px' }}><CanvasBase onDraw={draw} showControls={false} theme={theme as any} /></div></div>
    </div>
  );
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MODULE 7: TAYLOR APPROXIMATION
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const TaylorLab = () => {
  const { theme } = useTheme();
  const colors = C(theme as any);
  const [order, setOrder] = useState(1);
  const target = (x: number) => Math.sin(x);
  
  const draw = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
    const sc = getResponsiveScale(W, H, 40);
    const cx = W / 2, cy = H / 2;
    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, sc, cx, cy, theme as any);

    // Target Function (sin)
    ctx.strokeStyle = colors.muted + '4D'; ctx.lineWidth = 4;
    ctx.beginPath();
    for (let x = -5; x <= 5; x += 0.1) {
      const [px, py] = [cx + x * sc, cy - target(x) * sc];
      if (x === -5) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Taylor Series
    ctx.strokeStyle = colors.purple; ctx.lineWidth = 2;
    ctx.beginPath();
    const taylor = (x: number) => {
      let sum = 0;
      if (order >= 1) sum += x;
      if (order >= 3) sum -= (x**3) / 6;
      if (order >= 5) sum += (x**5) / 120;
      return sum;
    };

    for (let x = -5; x <= 5; x += 0.1) {
      const [px, py] = [cx + x * sc, cy - taylor(x) * sc];
      if (x === -5) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();
  };

  const derivation = `1. Target: f(x) = sin(x)
2. Taylor Expansion around x=0:
   Lâ‚…(x) â‰ˆ x - xÂ³/3! + xâµ/5!`;

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Taylor Series</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Order</span>
            <input type="range" min="1" max="5" step="2" value={order} onChange={e => setOrder(+e.target.value)} />
            <span className="val-badge">{order}</span>
          </div>
        </div>
        <div className="card">
          <div className="result-label">Polynomial Approx</div>
          <div className="result-box">{derivation}</div>
        </div>
      </div>
      <div><div className="canvas-card" style={{ height: '400px' }}><CanvasBase onDraw={draw} showControls={false} theme={theme as any} /></div></div>
    </div>
  );
};

export const CalculusLab = () => <BackpropLab />;

