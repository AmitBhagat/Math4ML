import React, { useMemo } from "react";
import { 
  CanvasBase, 
  C as BaseC, 
  drawGrid, 
  drawArrow, 
  lerp, 
  easeInOut,
  VisualizerTheme,
  drawInfoBox,
  roundRect
} from "./CanvasBase";

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
    ctx.beginPath(); ctx.strokeStyle = colors.axis; ctx.lineWidth = 1;
    ctx.moveTo(ox + i * scale, oy - 3); ctx.lineTo(ox + i * scale, oy + 3); ctx.stroke();
    ctx.moveTo(ox - 3, oy - i * scale); ctx.lineTo(ox + 3, oy - i * scale); ctx.stroke();
  }
  ctx.textAlign = "left";
};

// ─── DIFFERENTIATION ───
export const PremiumDifferentiationVisualizer = ({ a = 1, theme = 'light' }: { a?: number, theme?: VisualizerTheme }) => {
  const func = (x: number) => Math.sin(x) + 0.1 * x * x;
  const deriv = (x: number) => Math.cos(x) + 0.2 * x;

  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = 50, ox = W / 2, oy = H / 2;
    const p = easeInOut(Math.min(elapsed / 2000, 1));
    
    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy, theme);
    drawTicks(ctx, ox, oy, scale, theme);

    const toScreen = (x: number, y: number): [number, number] => [ox + x * scale, oy - y * scale];

    // Draw Function Curve
    ctx.beginPath();
    ctx.strokeStyle = C.blue;
    ctx.lineWidth = 2.5;
    for (let x = -8; x <= 8; x += 0.1) {
      const [sx, sy] = toScreen(x, func(x));
      x === -8 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
    }
    ctx.stroke();

    // Focus Point
    const fa = a * p;
    const fa_y = func(fa);
    const slope = deriv(fa);
    const [psx, psy] = toScreen(fa, fa_y);

    // Tangent Line
    const tLen = 3;
    const [tx1, ty1] = toScreen(fa - tLen, fa_y - tLen * slope);
    const [tx2, ty2] = toScreen(fa + tLen, fa_y + tLen * slope);
    ctx.beginPath();
    ctx.strokeStyle = C.teal;
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.moveTo(tx1, ty1);
    ctx.lineTo(tx2, ty2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Point
    ctx.fillStyle = C.white;
    ctx.beginPath(); ctx.arc(psx, psy, 6, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = C.teal; ctx.lineWidth = 2; ctx.stroke();

    drawInfoBox(ctx, W, H, "Differentiation", [
      { label: "Point x", value: fa.toFixed(2), color: C.white },
      { label: "f(x)", value: fa_y.toFixed(3), color: C.blue2 },
      { label: "Slope f'(x)", value: slope.toFixed(3), color: C.teal }
    ], theme);
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// ─── INTEGRATION (AREA UNDER CURVE) ───
export const PremiumAreaUnderCurveVisualizer = ({ a = -2, b = 2, n = 10, theme = 'light' }: { a?: number, b?: number, n?: number, theme?: VisualizerTheme }) => {
  const func = (x: number) => 0.5 * Math.cos(x * 1.5) + 1.5;

  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = 50, ox = W / 2, oy = H / 2;
    const p = easeInOut(Math.min(elapsed / 2500, 1));
    
    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy, theme);
    drawTicks(ctx, ox, oy, scale, theme);

    const toScreen = (x: number, y: number): [number, number] => [ox + x * scale, oy - y * scale];

    // Curve
    ctx.beginPath();
    ctx.strokeStyle = C.blue;
    ctx.lineWidth = 3;
    for (let x = -8; x <= 8; x += 0.1) {
      const [sx, sy] = toScreen(x, func(x));
      x === -8 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
    }
    ctx.stroke();

    // Area (Slightly transparent)
    ctx.fillStyle = theme === 'dark' ? "rgba(45, 212, 191, 0.15)" : "rgba(0, 212, 170, 0.1)";
    const dx = (b - a) / n;
    let totalArea = 0;
    
    for (let i = 0; i < n; i++) {
        const x_mid = a + i * dx + dx / 2;
        const fy = func(x_mid);
        const [x1, y1] = toScreen(a + i * dx, 0);
        const [x2, y2] = toScreen(a + (i + 1) * dx, fy * p);
        
        ctx.fillRect(x1, y2, x2 - x1, y1 - y2);
        ctx.strokeStyle = theme === 'dark' ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)";
        ctx.lineWidth = 0.5;
        ctx.strokeRect(x1, y2, x2 - x1, y1 - y2);
        
        totalArea += fy * dx;
    }

    drawInfoBox(ctx, W, H, "Definite Integral", [
      { label: "Interval", value: `[${a}, ${b}]`, color: C.white },
      { label: "Rects (n)", value: Math.floor(n).toString(), color: C.teal },
      { label: "Riemann Area", value: (totalArea * p).toFixed(3), color: C.yellow }
    ], theme);
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// ─── GRADIENT DESCENT ───
export const PremiumGradientDescentVisualizer = ({ eta = 0.1, theme = 'light' }: { eta?: number, theme?: VisualizerTheme }) => {
  const func = (x: number) => 0.5 * x * x;
  const grad = (x: number) => x;

  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = 50, ox = W / 2, oy = H / 2;
    const toScreen = (x: number, y: number): [number, number] => [ox + x * scale, oy - y * scale];

    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy, theme);
    drawTicks(ctx, ox, oy, scale, theme);

    // Cost Curve
    ctx.beginPath();
    ctx.strokeStyle = C.blue;
    ctx.lineWidth = 2.5;
    for (let x = -5; x <= 5; x += 0.1) {
      const [sx, sy] = toScreen(x, func(x));
      x === -5 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
    }
    ctx.stroke();

    // Descent Path
    let curX = 4;
    const steps = 10;
    const durationPerStep = 500;
    const totalStepsToShow = Math.min(steps, Math.floor(elapsed / durationPerStep));

    ctx.beginPath();
    ctx.strokeStyle = C.yellow;
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 2]);
    
    let [lastX, lastY] = toScreen(curX, func(curX));
    ctx.moveTo(lastX, lastY);

    for (let i = 0; i < totalStepsToShow; i++) {
        const delta = grad(curX);
        curX = curX - eta * delta;
        const [sx, sy] = toScreen(curX, func(curX));
        ctx.lineTo(sx, sy);
        lastX = sx; lastY = sy;
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Ball
    ctx.fillStyle = C.white;
    ctx.beginPath(); ctx.arc(lastX, lastY, 8, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = C.yellow; ctx.lineWidth = 3; ctx.stroke();

    drawInfoBox(ctx, W, H, "Stochastic Optimization", [
      { label: "Learning Rate", value: eta.toFixed(3), color: C.teal },
      { label: "Iteration", value: totalStepsToShow.toString(), color: C.yellow },
      { label: "Local Minimum", value: curX.toFixed(3), color: C.white },
      { label: "Status", value: curX < 0.1 ? "Converged" : "Descending...", color: C.muted }
    ], theme);
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// ─── PARTIAL DERIVATIVES ───
export const PremiumPartialDerivativesVisualizer = ({ focus = 'x', theme = 'light' }: { focus?: 'x' | 'y', theme?: VisualizerTheme }) => {
  // f(x,y) = sin(x) * cos(y)
  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = 40, ox = W / 2, oy = H / 2;
    const t = elapsed / 1000;

    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy, theme);

    // Draw Surface Projection (Contours)
    for (let r = 1; r < 6; r++) {
       ctx.beginPath();
       ctx.strokeStyle = C.blue;
       ctx.globalAlpha = 0.3 / r;
       ctx.arc(ox, oy, r * scale * (1 + 0.1 * Math.sin(t)), 0, Math.PI * 2);
       ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // Axis indicator
    ctx.strokeStyle = focus === 'x' ? C.teal : C.pink;
    ctx.lineWidth = 4;
    ctx.beginPath();
    if (focus === 'x') {
       ctx.moveTo(ox - 100, oy); ctx.lineTo(ox + 100, oy);
    } else {
       ctx.moveTo(ox, oy - 100); ctx.lineTo(ox, oy + 100);
    }
    ctx.stroke();

    drawInfoBox(ctx, W, H, "Partial Differentiation", [
      { label: "Wrt Variable", value: focus.toUpperCase(), color: focus === 'x' ? C.teal : C.pink },
      { label: "Logic", value: `Keep ${focus==='x'?'Y':'X'} Constant`, color: C.muted }
    ], theme);
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// ─── CHAIN RULE ───
export const PremiumChainRuleVisualizer = ({ theme = 'light' }: { theme?: VisualizerTheme }) => {
  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const ox = W / 2, oy = H / 2;
    const p = (elapsed % 3000) / 3000;

    ctx.clearRect(0, 0, W, H);
    
    // Components Boxes
    const drawBox = (x: number, y: number, label: string, color: string) => {
       ctx.fillStyle = color + "20";
       ctx.strokeStyle = color;
       ctx.lineWidth = 2;
       roundRect(ctx, x - 50, y - 30, 100, 60, 8);
       ctx.fill(); ctx.stroke();
       ctx.fillStyle = C.white;
       ctx.font = "bold 14px 'Space Grotesk'";
       ctx.textAlign = "center";
       ctx.fillText(label, x, y + 6);
    };

    drawBox(ox - 150, oy, "g(x)", C.teal);
    drawBox(ox + 50, oy, "f(u)", C.blue);

    // Connecting Arrows
    drawArrow(ctx, ox - 230, oy, ox - 200, oy, C.white, 2);
    drawArrow(ctx, ox - 100, oy, ox, oy, C.yellow, 3);
    drawArrow(ctx, ox + 100, oy, ox + 130, oy, C.yellow, 3);

    // Rate indicators
    ctx.fillStyle = C.yellow;
    ctx.font = "bold 10px font-mono";
    ctx.fillText("dg/dx", ox - 100, oy - 15);
    ctx.fillText("df/du", ox + 100, oy - 15);

    if (p > 0.5) {
       ctx.beginPath();
       ctx.strokeStyle = C.yellow;
       ctx.lineWidth = 1;
       ctx.arc(ox - 50, oy, 60 * p, 0, Math.PI * 2);
       ctx.stroke();
    }

    drawInfoBox(ctx, W, H, "The Chain Rule", [
      { label: "Logic", value: "Rate Propagation", color: C.yellow },
      { label: "Formula", value: "dy/dx = dy/du * du/dx", color: C.white }
    ], theme);
  };
  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// ─── GRADIENT VECTOR ───
export const PremiumGradientVisualizer = ({ x = 1, y = 1, theme = 'light' }: { x?: number, y?: number, theme?: VisualizerTheme }) => {
  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = 50, ox = W / 2, oy = H / 2;
    const p = easeInOut(Math.min(elapsed / 1500, 1));
    
    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy, theme);

    // Contour plot (ellipses)
    for (let r = 1; r < 7; r++) {
       ctx.beginPath();
       ctx.strokeStyle = C.blue;
       ctx.globalAlpha = 0.4 / r;
       ctx.ellipse(ox, oy, r * scale, r * scale * 0.6, 0, 0, Math.PI * 2);
       ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // Gradient logic: f(x,y) = x^2 + 2y^2 -> grad = [2x, 4y]
    const gx = 2 * x;
    const gy = 4 * y;
    const mag = Math.sqrt(gx*gx + gy*gy);
    const ux = gx / (mag || 1);
    const uy = gy / (mag || 1);

    const [sx, sy] = [ox + x * scale, oy - y * scale];
    const [ex, ey] = [sx + ux * scale * p, sy - uy * scale * p];

    // Vector
    drawArrow(ctx, sx, sy, ex, ey, C.yellow, 4);

    // Point
    ctx.fillStyle = C.white;
    ctx.beginPath(); ctx.arc(sx, sy, 5, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = C.yellow; ctx.stroke();

    drawInfoBox(ctx, W, H, "Gradient Field", [
      { label: "Point", value: `[${x.toFixed(1)}, ${y.toFixed(1)}]`, color: C.white },
      { label: "Gradient ∇f", value: `[${gx.toFixed(1)}, ${gy.toFixed(1)}]`, color: C.yellow },
      { label: "Property", value: "Steepest Ascent", color: C.muted }
    ], theme);
  };
  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// ─── JACOBIAN & HESSIAN ───
export const PremiumJacobianHessianVisualizer = ({ mode = 'jacobian', theme = 'light' }: { mode?: 'jacobian' | 'hessian', theme?: VisualizerTheme }) => {
  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = 50, ox = W / 2, oy = H / 2;
    const p = easeInOut((Math.sin(elapsed / 1000) + 1) / 2);

    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy, theme);

    if (mode === 'jacobian') {
       // Linearizing a mapping at a point
       ctx.strokeStyle = C.yellow;
       ctx.lineWidth = 2;
       ctx.setLineDash([5, 5]);
       ctx.strokeRect(ox - 40, oy - 40, 80, 80);
       ctx.setLineDash([]);
       
       ctx.beginPath();
       ctx.strokeStyle = C.teal;
       ctx.lineWidth = 3;
       // Warp manually
       const skew = p * 40;
       ctx.moveTo(ox - 40, oy - 40);
       ctx.lineTo(ox + 40 + skew, oy - 40);
       ctx.lineTo(ox + 40, oy + 40 + skew);
       ctx.lineTo(ox - 40 - skew, oy + 40);
       ctx.closePath();
       ctx.stroke();
    } else {
       // Curvature
       ctx.beginPath();
       ctx.strokeStyle = C.blue;
       ctx.lineWidth = 2;
       for (let x = -4; x <= 4; x += 0.2) {
          const y = (x * x) * 0.5 * p;
          const [sx, sy] = [ox + x * scale, oy - y * scale];
          x === -4 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
       }
       ctx.stroke();
    }

    drawInfoBox(ctx, W, H, mode === 'jacobian' ? "Jacobian Matrix" : "Hessian Matrix", [
      { label: "Concept", value: mode === 'jacobian' ? "Local Linearity" : "Local Curvature", color: C.yellow },
      { label: "ML Use", value: "Optimizer Dynamics", color: C.muted }
    ], theme);
  };

  return <CanvasBase onDraw={onDraw} theme={theme} />;
};
