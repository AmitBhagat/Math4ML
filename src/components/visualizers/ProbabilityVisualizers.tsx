import React, { useMemo } from "react";
import { 
  CanvasBase, 
  C as BaseC, 
  drawGrid, 
  lerp, 
  easeInOut,
  VisualizerTheme,
  drawInfoBox
} from "./CanvasBase";

// Utils removed, now using shared CanvasBase functions

// ─── SAMPLE SPACE (VENN DIAGRAM) ───
export const PremiumSampleSpaceVisualizer = ({ overlap = 0.3, aSize = 0.5, bSize = 0.5, theme = 'light' }: { overlap?: number, aSize?: number, bSize?: number, theme?: VisualizerTheme }) => {
  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const ox = W / 2, oy = H / 2;
    const p = easeInOut(Math.min(elapsed / 1500, 1));
    
    ctx.clearRect(0, 0, W, H);
    
    // Universe S
    ctx.strokeStyle = C.muted;
    ctx.setLineDash([5, 5]);
    ctx.strokeRect(ox - 180, oy - 120, 360, 240);
    ctx.setLineDash([]);
    ctx.fillStyle = C.muted;
    ctx.font = "bold 14px font-mono";
    ctx.fillText("S", ox + 160, oy - 100);

    const rA = Math.sqrt(aSize) * 120;
    const rB = Math.sqrt(bSize) * 120;
    const dist = (rA + rB) * (1 - overlap * p);

    const ax = ox - dist / 2;
    const bx = ox + dist / 2;

    // Set A
    ctx.beginPath();
    ctx.arc(ax, oy, rA, 0, Math.PI * 2);
    ctx.fillStyle = C.blue + "20";
    ctx.fill();
    ctx.strokeStyle = C.blue;
    ctx.lineWidth = 3;
    ctx.stroke();

    // Set B
    ctx.beginPath();
    ctx.arc(bx, oy, rB, 0, Math.PI * 2);
    ctx.fillStyle = C.teal + "20";
    ctx.fill();
    ctx.strokeStyle = C.teal;
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = C.white;
    ctx.font = "bold 16px 'Space Grotesk'";
    ctx.fillText("A", ax - 20, oy - rA - 10);
    ctx.fillText("B", bx + 20, oy - rB - 10);

    drawInfoBox(ctx, W, H, "Sample Space Logic", [
      { label: "P(A)", value: aSize.toFixed(2), color: C.blue2 },
      { label: "P(B)", value: bSize.toFixed(2), color: C.teal },
      { label: "Overlap", value: (overlap * 100).toFixed(0) + "%", color: C.yellow }
    ], theme);
  };
  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// ─── BAYES' THEOREM (MOSAIC AREA MODEL) ───
export const PremiumBayesTheoremVisualizer = ({ prior = 0.3, likelihood = 0.8, falseAlarm = 0.1, theme = 'light' }: { prior?: number, likelihood?: number, falseAlarm?: number, theme?: VisualizerTheme }) => {
  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const ox = W / 2, oy = H / 2;
    const p = easeInOut(Math.min(elapsed / 2000, 1));
    
    ctx.clearRect(0, 0, W, H);
    
    const boxW = Math.min(300, W * 0.8), boxH = Math.min(200, H * 0.45);
    const startX = ox - boxW / 2, startY = oy - boxH / 2;

    // 1. Draw "Prior" split
    const priorW = boxW * prior;
    const notPriorW = boxW - priorW;

    // Case H (Prior)
    ctx.fillStyle = C.blue + "30";
    ctx.fillRect(startX, startY, priorW, boxH);
    ctx.strokeStyle = C.blue;
    ctx.strokeRect(startX, startY, priorW, boxH);

    // Case ¬H
    ctx.fillStyle = C.muted + "10";
    ctx.fillRect(startX + priorW, startY, notPriorW, boxH);
    ctx.strokeStyle = C.muted;
    ctx.strokeRect(startX + priorW, startY, notPriorW, boxH);

    // 2. Likelihood overlay (Test Positives)
    const likelihoodH = boxH * likelihood * p;
    const falsePosH = boxH * falseAlarm * p;

    // True Positive
    ctx.fillStyle = C.teal + "60";
    ctx.fillRect(startX, startY + boxH - likelihoodH, priorW, likelihoodH);
    ctx.strokeStyle = C.teal;
    ctx.strokeRect(startX, startY + boxH - likelihoodH, priorW, likelihoodH);

    // False Positive
    ctx.fillStyle = C.pink + "40";
    ctx.fillRect(startX + priorW, startY + boxH - falsePosH, notPriorW, falsePosH);
    ctx.strokeStyle = C.pink;
    ctx.strokeRect(startX + priorW, startY + boxH - falsePosH, notPriorW, falsePosH);

    // Labels
    ctx.fillStyle = C.white;
    ctx.font = "bold 12px font-mono";
    ctx.fillText("H (Prior)", startX + 10, startY - 10);
    ctx.fillText("¬H", startX + priorW + 10, startY - 10);

    const posterior = (prior * likelihood) / (prior * likelihood + (1 - prior) * falseAlarm);

    drawInfoBox(ctx, W, H, "Bayesian Inference", [
      { label: "Prior P(H)", value: prior.toFixed(2), color: C.blue2 },
      { label: "Evidence P(E|H)", value: likelihood.toFixed(2), color: C.teal },
      { label: "False Pos P(E|¬H)", value: falseAlarm.toFixed(2), color: C.pink },
      { label: "Posterior P(H|E)", value: posterior.toFixed(4), color: C.yellow }
    ], theme);
  };
  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// ─── DISTRIBUTIONS (GAUSSIAN / NORMAL) ───
export const PremiumDistributionsVisualizer = ({ mu = 0, sigma = 1, theme = 'light' }: { mu?: number, sigma?: number, theme?: VisualizerTheme }) => {
  const normPDF = (x: number, m: number, s: number) => {
    return (1 / (s * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - m) / s, 2));
  };

  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const scale = 50, ox = W / 2, oy = H - 100;
    const p = easeInOut(Math.min(elapsed / 1500, 1));
    
    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, scale, ox, oy, theme);

    // Horizontal Axis
    ctx.beginPath();
    ctx.strokeStyle = C.axis;
    ctx.lineWidth = 2;
    ctx.moveTo(0, oy); ctx.lineTo(W, oy);
    ctx.stroke();

    // Curve
    ctx.beginPath();
    ctx.strokeStyle = C.teal;
    ctx.lineWidth = 3;
    const curveScale = 300;
    
    for (let x = -8; x <= 8; x += 0.1) {
       const fx = normPDF(x, mu * p, sigma);
       const sx = ox + x * scale;
       const sy = oy - fx * curveScale;
       x === -8 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
    }
    ctx.stroke();

    // 1-Sigma Range
    ctx.fillStyle = C.teal + "15";
    ctx.beginPath();
    for (let x = mu - sigma; x <= mu + sigma; x += 0.1) {
        const fx = normPDF(x, mu * p, sigma);
        const sx = ox + x * scale;
        const sy = oy - fx * curveScale;
        x === mu - sigma ? ctx.moveTo(sx, oy) : ctx.lineTo(sx, sy);
    }
    ctx.lineTo(ox + (mu + sigma) * scale, oy);
    ctx.closePath();
    ctx.fill();

    drawInfoBox(ctx, W, H, "Normal Distribution", [
      { label: "Mean (μ)", value: mu.toFixed(2), color: C.white },
      { label: "Variance (σ²)", value: (sigma * sigma).toFixed(2), color: C.teal },
      { label: "Area (±1σ)", value: "68.2%", color: C.muted }
    ], theme);
  };
  return <CanvasBase onDraw={onDraw} theme={theme} />;
};

// ─── CONDITIONAL PROBABILITY (SUBSET MAPPING) ───
export const PremiumConditionalVisualizer = ({ conditioning = 0.5, theme = 'light' }: { conditioning?: number, theme?: VisualizerTheme }) => {
  const onDraw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number, theme: VisualizerTheme) => {
    const C = BaseC(theme);
    const ox = W / 2, oy = H / 2;
    const p = easeInOut(Math.min(elapsed / 1500, 1));

    ctx.clearRect(0, 0, W, H);
    
    // Sample Space Container
    ctx.strokeStyle = C.muted;
    ctx.lineWidth = 1;
    ctx.strokeRect(ox - 150, oy - 100, 300, 200);

    // Event B (Condition)
    const bWidth = 300 * conditioning * p;
    ctx.fillStyle = C.teal + "20";
    ctx.fillRect(ox - 150, oy - 100, bWidth, 200);
    ctx.strokeStyle = C.teal;
    ctx.lineWidth = 2;
    ctx.strokeRect(ox - 150, oy - 100, bWidth, 200);

    // Event A (Intersects B)
    ctx.beginPath();
    ctx.ellipse(ox - 50, oy, 80, 60, 0, 0, Math.PI * 2);
    ctx.fillStyle = C.blue + "15";
    ctx.fill();
    ctx.strokeStyle = C.blue;
    ctx.stroke();

    // The Restricted Space Highlight
    ctx.save();
    ctx.beginPath();
    ctx.rect(ox - 150, oy - 100, bWidth, 200);
    ctx.clip();
    
    ctx.beginPath();
    ctx.ellipse(ox - 50, oy, 80, 60, 0, 0, Math.PI * 2);
    ctx.fillStyle = C.yellow + "40";
    ctx.fill();
    ctx.restore();

    ctx.fillStyle = C.white;
    ctx.font = "bold 12px font-mono";
    ctx.fillText("Event B", ox - 140, oy - 110);
    ctx.fillText("A ∩ B", ox - 70, oy);

    drawInfoBox(ctx, W, H, "Conditioning S → B", [
      { label: "P(B) Evidence", value: conditioning.toFixed(2), color: C.teal },
      { label: "P(A|B)", value: "Ratio (A∩B)/B", color: C.yellow },
      { label: "Logic", value: "Space Restriction", color: C.muted }
    ], theme);
  };
  return <CanvasBase onDraw={onDraw} theme={theme} />;
};
