import React, { useState, useEffect, useRef } from "react";
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { Mafs, Coordinates, Plot, MovablePoint, Line, Point, Vector, Text, Theme, vec, Polygon, Circle, Transform, Ellipse } from "mafs";
import { useTheme } from "../../../src/hooks/useTheme";
import { PremiumSlider } from "../../../src/components/visualizers/core/PremiumSlider";

/* ─────────────────────────────────────────────────────────────────────────────
   HELPERS & SHARED COMPONENTS
   ───────────────────────────────────────────────────────────────────────────── */
const LatexSolver = ({ steps }: { steps: string[] }) => (
  <div className="space-y-4 py-3">
    {steps.map((step, i) => (
      <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
        <div className="flex items-center gap-2 mb-0.5">
           <span className="w-4 h-4 rounded-full bg-accent-premium/10 text-accent-premium text-[9px] font-bold flex items-center justify-center border border-accent-premium/20">
             {i+1}
           </span>
           <span className="text-[9px] font-black uppercase tracking-widest text-muted-premium opacity-60">Step {i+1}</span>
        </div>
        <div className="pl-6 overflow-x-auto text-text-premium derivation-latex font-mono pb-4" style={{ fontSize: '11px' }}>
          <BlockMath math={step} />
        </div>
      </div>
    ))}
  </div>
);

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MODULE 1: BACKPROPAGATION ENGINE (Chain Rule)
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const BackpropLab = () => {
  const [w, setW] = useState(0.8);
  const [x, setX] = useState(1.5);
  const [pulse, setPulse] = useState(0);

  const z = w * x;
  const a = Math.tanh(z);
  const loss = (a - 1) ** 2;

  const dL_da = 2 * (a - 1);
  const da_dz = 1 - Math.tanh(z) ** 2;
  const dz_dw = x;
  const dL_dw = dL_da * da_dz * dz_dw;

  useEffect(() => {
    if (pulse > 0) {
      const timer = setTimeout(() => setPulse(p => Math.max(0, p - 0.05)), 30);
      return () => clearTimeout(timer);
    }
  }, [pulse]);

  const steps = [
    `z = w \\cdot x = ${w.toFixed(2)} \\cdot ${x.toFixed(2)} = ${z.toFixed(2)}`,
    `a = \\tanh(z) = \\tanh(${z.toFixed(2)}) = ${a.toFixed(2)}`,
    `L = (a - 1)^2 = (${a.toFixed(2)} - 1)^2 = ${loss.toFixed(3)}`,
    `\\frac{\\partial L}{\\partial a} = 2(a - 1) = ${dL_da.toFixed(2)}`,
    `\\frac{\\partial a}{\\partial z} = 1 - \\tanh^2(z) = ${da_dz.toFixed(2)}`,
    `\\frac{\\partial L}{\\partial w} = \\frac{\\partial L}{\\partial a} \\cdot \\frac{\\partial a}{\\partial z} \\cdot \\frac{\\partial z}{\\partial w} = ${dL_dw.toFixed(3)}`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Backpropagation Engine</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Weight (w)</span>
            <PremiumSlider min={-2} max={2} step={0.1} value={w} onChange={setW} origin={0} />
            <span className="val-badge text-blue">{w.toFixed(2)}</span>
          </div>
          <button className="btn btn-primary w-full mt-4" onClick={() => setPulse(1)}>Trigger Backward Pass</button>
        </div>
        <div className="card overflow-y-auto max-h-[400px]">
          <div className="result-label">Mathematical Derivation: Chain Rule</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div>
        <div className="canvas-card">
          <Mafs viewBox={{ x: [-5, 5], y: [-3, 3] }}>
            
            
            {/* Edges - Use subtle border color */}
            <Line.Segment point1={[-3.5, 0]} point2={[-1.5, 0]} color="var(--border)" opacity={0.6} weight={2} />
            <Line.Segment point1={[-1.5, 0]} point2={[0.5, 0]} color="var(--border)" opacity={0.6} weight={2} />
            <Line.Segment point1={[0.5, 0]} point2={[2.5, 0]} color="var(--border)" opacity={0.6} weight={2} />

            {/* Backprop Pulse */}
            {pulse > 0 && (
              <Point x={2.5 - (1 - pulse) * 6} y={0} color="var(--accent-premium)" opacity={pulse} />
            )}

            {/* Nodes - High Contrast and Grabbable */}
            <MovablePoint point={[-3.5, 0]} onMove={([xVal, yVal]) => setX(Math.abs(xVal * 0.5))} color="var(--accent-premium)" />
            <Text x={-3.5} y={-0.8} size={10} color="var(--accent-premium)" opacity={0.8}>INPUT X</Text>
            <Text x={-3.5} y={0.1} size={14} weight={800} color="var(--text-premium)">{x.toFixed(1)}</Text>

            <MovablePoint point={[-1.5, 0]} onMove={([xVal, yVal]) => setW(xVal + 1.5 + 0.8)} color="var(--blue-premium)" />
            <Text x={-1.5} y={-0.8} size={10} color="var(--blue-premium)" opacity={0.8}>WEIGHT W</Text>
            <Text x={-1.5} y={0.1} size={14} weight={800} color="var(--blue-premium)">{w.toFixed(1)}</Text>

            <Point x={0.5} y={0} color="var(--green-premium)" />
            <Text x={0.5} y={-0.8} size={10} color="var(--green-premium)" opacity={0.8}>ACTIVATION σ</Text>
            <Text x={0.5} y={0.1} size={14} weight={800} color="var(--green-premium)">{a.toFixed(1)}</Text>

            <Point x={2.5} y={0} color="var(--accent-premium)" />
            <Text x={2.5} y={-0.8} size={10} color="var(--accent-premium)" opacity={0.8}>LOSS L</Text>
            <Text x={2.5} y={0.1} size={14} weight={800} color="var(--accent-premium)">{loss.toFixed(1)}</Text>
          </Mafs>
        </div>
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   MODULE 2: PARAMETER SENSITIVITY (Derivatives)
   ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── */
export const ParameterSensitivity = () => {
  const [point, setPoint] = useState<[number, number]>([0.8, 1.64]);
  const w = point[0];

  const f = (x: number) => x ** 2 + 1;
  const df = (x: number) => 2 * x;

  const steps = [
    `L(w) = w^2 + 1 \\text{ (MSE Loss Proxy)}`,
    `L(${w.toFixed(2)}) = ${w.toFixed(2)}^2 + 1 = ${f(w).toFixed(2)}`,
    `\\frac{dL}{dw} = 2w = 2(${w.toFixed(2)}) = ${df(w).toFixed(2)}`,
    df(w) > 0.05 ? `\\text{Derivative Positive: Increase } w \\Rightarrow \\text{Increase Loss. Move LEFT.}` : df(w) < -0.05 ? `\\text{Derivative Negative: Increase } w \\Rightarrow \\text{Decrease Loss. Move RIGHT.}` : `\\nabla L \\approx 0 \\Rightarrow \\text{Global Minimum Reach}`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Derivatives & Sensitivity</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Weight w (Grabbable)</span>
            <span className="val-badge text-blue">{w.toFixed(2)}</span>
          </div>
          <div className="p-3 text-[10px] text-muted-premium italic">
            → Drag the blue point on the graph to observe how the gradient changes.
          </div>
        </div>
        <div className="card overflow-y-auto max-h-[350px]">
          <div className="result-label">Mathematical Derivation: Instantaneous Rate</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div>
        <div className="canvas-card">
          <Mafs viewBox={{ x: [-3, 3], y: [0, 6] }}>
            <Coordinates.Cartesian />
            {/* Main Curve - Uses vibrant Blue in both themes */}
            <Plot.OfX y={f} color="var(--blue-premium)" opacity={0.6} weight={3} />
            
            {/* Tangent Line - High contrast Red/Orange */}
            <Plot.OfX 
              y={(x) => f(w) + df(w) * (x - w)} 
              color="var(--accent-premium)" 
              weight={2}
            />

            {/* Pivot Point - Glowing handle */}
            <MovablePoint 
              point={[w, f(w)]} 
              onMove={(p) => setPoint([p[0], f(p[0])])} 
              color="var(--blue-premium)" 
            />

            {/* Gradient Vector */}
            <Vector tail={[w, f(w)]} tip={[w + 0.5, f(w) + df(w) * 0.5]} color="var(--blue-premium)" weight={3} />
          </Mafs>
        </div>
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   MODULE 3: STOCHASTIC OPTIMIZATION
   ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── */
export const StochasticOptimizer = () => {
  const [lr, setLr] = useState(0.1);
  const [batchSize, setBatchSize] = useState(1);
  const [surface, setSurface] = useState<'convex' | 'wavy'>('convex');
  const [pos, setPos] = useState({ x: -4, v: 0 });
  const [isInteracting, setIsInteracting] = useState(false);

  const getF = (x: number) => {
    if (surface === 'convex') return (x * x) / 5;
    return (x * x) / 10 + Math.cos(2 * x) + 1;
  };

  const getDf = (x: number) => {
    if (surface === 'convex') return (2 * x) / 5;
    return (x / 5) - 2 * Math.sin(2 * x);
  };
  
  const stopInteraction = () => {
    setIsInteracting(false);
  };

  // Multimodal release detection for 100% reliability
  useEffect(() => {
    const handleRelease = () => setIsInteracting(false);
    
    // Catch every possible release/cancellation signal
    window.addEventListener('pointerup', handleRelease);
    window.addEventListener('mouseup', handleRelease);
    window.addEventListener('touchend', handleRelease);
    window.addEventListener('pointercancel', handleRelease);
    window.addEventListener('blur', handleRelease); // Handle tab switching
    
    return () => {
      window.removeEventListener('pointerup', handleRelease);
      window.removeEventListener('mouseup', handleRelease);
      window.removeEventListener('touchend', handleRelease);
      window.removeEventListener('pointercancel', handleRelease);
      window.removeEventListener('blur', handleRelease);
    };
  }, []);

  useEffect(() => {
    if (isInteracting) return;
    
    const frame = requestAnimationFrame(() => {
      // Noise scales with sqrt of batch size (Standard Error logic)
      const noiseIntensity = 5 / Math.sqrt(batchSize);
      const noise = (Math.random() - 0.5) * noiseIntensity;
      
      const grad = getDf(pos.x) + (batchSize < 50 ? noise : 0);
      const beta = 0.88; // Slightly more damped for visual stability
      
      const nextV = pos.v * beta - (grad * lr * 0.08) * (1 - beta);
      const nextX = Math.max(-5, Math.min(5, pos.x + nextV * 5));
      setPos({ x: nextX, v: nextV });
    });
    return () => cancelAnimationFrame(frame);
  }, [pos, lr, batchSize, surface, isInteracting]);

  const currentGrad = getDf(pos.x);
  const steps = [
    `w_{t+1} = w_t - \\eta \\cdot \\hat{g}_t`,
    `\\text{Instantaneous Gradient } \\nabla L(x=${pos.x.toFixed(2)}) = ${currentGrad.toFixed(3)}`,
    `\\text{Learning Rate } \\eta = ${lr.toFixed(2)}`,
    `\\text{Effective Step } \\Delta w \\approx -${(lr * currentGrad).toFixed(4)}`,
    batchSize < 10 ? `\\text{Batch Size } ${batchSize} \\rightarrow \\text{Stochastic Noise Added}` : `\\text{Batch Size } ${batchSize} \\rightarrow \\text{Mini-Batch Mean Gradient}`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Stochastic Optimizer Control</div>
          <div className="preset-row">
            <button className={`preset-tag ${surface === 'convex' ? 'active' : ''}`} onClick={() => setSurface('convex')}>Convex</button>
            <button className={`preset-tag ${surface === 'wavy' ? 'active' : ''}`} onClick={() => setSurface('wavy')}>Wavy Escape</button>
          </div>
          <div className="ctrl-row">
            <span className="ctrl-label">Batch Size (Noise)</span>
            <PremiumSlider min={1} max={100} step={1} value={batchSize} onChange={setBatchSize} origin={1} />
            <span className="val-badge text-orange">{batchSize}</span>
          </div>
          <div className="ctrl-row">
            <span className="ctrl-label">Learning Rate</span>
            <PremiumSlider min={0.01} max={0.5} step={0.01} value={lr} onChange={setLr} origin={0.01} />
            <span className="val-badge text-orange">{lr.toFixed(2)}</span>
          </div>
          <button className="btn w-full mt-4" onClick={() => setPos({ x: -4, v: 0 })}>Reset Optimizer</button>
        </div>
        <div className="card overflow-y-auto max-h-[350px]">
          <div className="result-label">Mathematical Derivation: Optimization Update</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div>
        <div 
          className="canvas-card relative group" 
          onPointerUp={stopInteraction}
          onPointerLeave={stopInteraction}
        >
          {isInteracting && (
            <div className="absolute top-4 right-4 z-10 px-2 py-1 bg-accent-premium/20 border border-accent-premium/30 rounded text-[9px] font-bold text-accent-premium animate-pulse">
              MANUAL OVERRIDE
            </div>
          )}
          <Mafs viewBox={{ x: [-5, 5], y: [-1, 6] }}>
            <Coordinates.Cartesian />
            <Plot.OfX y={getF} color="var(--blue-premium)" opacity={0.4} weight={3} />
            
            {/* Optimizer Particle - Now Grabbable and Teleportable */}
            <MovablePoint 
              point={[pos.x, getF(pos.x)]} 
              onMove={([newX]) => {
                setIsInteracting(true);
                setPos({ x: newX, v: 0 });
              }} 
              color="var(--accent-premium)" 
            />
            <Text x={pos.x} y={getF(pos.x) + 0.5} color="var(--accent-premium)" size={10} weight={800}>θ</Text>
          </Mafs>
        </div>
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   MODULE 4: AUC PERFORMANCE
   ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── */
export const AUCIntegralLab = () => {
  const [threshold, setThreshold] = useState(4);
  const f = (x: number) => Math.exp(-x / 2) * 5;

  const val = (10 * (1 - Math.exp(-threshold / 2))).toFixed(2);
  const steps = [
    `P(t) = 5 \\cdot e^{-t/2}`,
    `\\text{AUC} = \\int_{0}^{${threshold.toFixed(2)}} 5e^{-t/2} dt`,
    `F(t) = -10e^{-t/2} \\Big|_{0}^{${threshold.toFixed(2)}}`,
    `F(${threshold.toFixed(2)}) - F(0) = 10(1 - e^{${(-threshold/2).toFixed(3)}})`,
    `10(1 - ${(Math.exp(-threshold/2)).toFixed(3)}) = ${val}`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">AUC Metrics (Integrals)</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Threshold (T)</span>
            <PremiumSlider min={0} max={6} step={0.1} value={threshold} onChange={setThreshold} origin={0} />
            <span className="val-badge text-blue">{threshold.toFixed(2)}</span>
          </div>
        </div>
        <div className="card overflow-y-auto max-h-[350px]">
          <div className="result-label">Mathematical Derivation: Definite Integral</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div>
        <div className="canvas-card">
          <Mafs viewBox={{ x: [0, 6], y: [0, 6] }}>
            <Coordinates.Cartesian />
            <Plot.OfX y={f} color="var(--blue-premium)" weight={4} />
            
            {/* Shaded Area using Polygon - Theme adjusted opacity */}
            <Polygon
              points={[
                [0, 0],
                ...(() => {
                  const pts: [number, number][] = [];
                  for (let x = 0; x <= threshold; x += 0.1) {
                    pts.push([x, f(x)]);
                  }
                  return pts;
                })(),
                [threshold, 0],
              ]}
              color="var(--blue-premium)"
              fillOpacity={0.25}
              weight={0}
            />

            {/* Threshold Marker & Handle */}
            <Line.Segment 
              point1={[threshold, 0]} 
              point2={[threshold, f(threshold)]} 
              color="var(--orange-premium)" 
              style="dashed" 
            />
            <MovablePoint 
              point={[threshold, 0]} 
              onMove={([x]) => setThreshold(Math.max(0, Math.min(6, x)))} 
              color="var(--orange-premium)" 
            />
          </Mafs>
        </div>
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   MODULE 5: JACOBIAN VECTOR FIELD (Multivariate)
   ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── */
export const JacobianLab = () => {
  const [point, setPoint] = useState<[number, number]>([1, 1]);
  const [w1, w2] = point;

  const L = (x: number, y: number) => (x - 2)**2 + (y - 2)**2 + 0.5*x*y;
  const dL_dw1 = (x: number, y: number) => 2*(x - 2) + 0.5*y;
  const dL_dw2 = (x: number, y: number) => 2*(y - 2) + 0.5*x;

  const steps = [
    `L(w_1, w_2) = (w_1-2)^2 + (w_2-2)^2 + 0.5w_1w_2`,
    `J = \\begin{bmatrix} \\frac{\\partial L}{\\partial w_1} \\\\ \\frac{\\partial L}{\\partial w_2} \\end{bmatrix} = \\begin{bmatrix} 2(w_1-2) + 0.5w_2 \\\\ 2(w_2-2) + 0.5w_1 \\end{bmatrix}`,
    `\\frac{\\partial L}{\\partial w_1} = 2(${w1.toFixed(2)}-2) + 0.5(${w2.toFixed(2)}) = ${dL_dw1(w1, w2).toFixed(2)}`,
    `\\frac{\\partial L}{\\partial w_2} = 2(${w2.toFixed(2)}-2) + 0.5(${w1.toFixed(2)}) = ${dL_dw2(w1, w2).toFixed(2)}`,
    `\\nabla L (${w1.toFixed(1)}, ${w2.toFixed(1)}) = \\begin{bmatrix} ${dL_dw1(w1, w2).toFixed(2)} \\\\ ${dL_dw2(w1, w2).toFixed(2)} \\end{bmatrix}`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Jacobian Vector Field</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Point P (Grabbable)</span>
            <span className="val-badge text-blue">({w1.toFixed(1)}, {w2.toFixed(1)})</span>
          </div>
          <div className="p-3 text-[10px] text-muted-premium italic">
            → Drag the point to see the local gradient vector surface.
          </div>
        </div>
        <div className="card overflow-y-auto max-h-[350px]">
          <div className="result-label">Mathematical Derivation: Jacobian Matrix</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div>
        <div className="canvas-card">
          <Mafs viewBox={{ x: [-1, 5], y: [-1, 5] }}>
            <Coordinates.Cartesian />
            
            {/* Contour representation mockup using Circles */}
            {[1, 2, 4, 8, 12].map(r => (
               <Circle key={r} center={[2, 2]} radius={Math.sqrt(r)} color="var(--blue-premium)" opacity={0.1} />
            ))}

            <MovablePoint point={point} onMove={setPoint} color="var(--accent-premium)" />
            
            {/* Gradient Vector */}
            <Vector 
              tail={point} 
              tip={[w1 - dL_dw1(w1, w2) * 0.5, w2 - dL_dw2(w1, w2) * 0.5]} 
              color="var(--orange-premium)" 
              weight={3} 
            />
          </Mafs>
        </div>
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   MODULE 6: HESSIAN CURVATURE
   ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── */
/* ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   MODULE 6: HESSIAN MATRIX (Second-Order Curvature)
   ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── */
export const HessianLab = () => {
  const [point, setPoint] = useState<[number, number]>([1, 1]);
  const [x, y] = point;

  // Test Function: f(x, y) = x^2 + y^3 + xy
  const fxx = 2;
  const fyy = 6 * y;
  const fxy = 1;

  const det = fxx * fyy - fxy * fxy;
  
  // Isometric Projection Helper
  const project = (dx: number, dy: number, dz: number): [number, number] => {
    // Standard 30-deg Isometric
    const angle = Math.PI / 6;
    const isoX = (dx - dy) * Math.cos(angle);
    const isoY = (dx + dy) * Math.sin(angle) - dz * 0.4; // Scale height for better perspective
    return [x + isoX, y + isoY];
  };

  const steps = [
    `f(x, y) = x^2 + y^3 + xy`,
    `\\mathbf{H} = \\begin{bmatrix} 2 & 1 \\\\ 1 & 6y \\end{bmatrix}`,
    `\\text{Substitute } y = ${y.toFixed(2)}: \\, \\mathbf{H} = \\begin{bmatrix} 2.00 & 1.00 \\\\ 1.00 & ${fyy.toFixed(2)} \\end{bmatrix}`,
    `\\text{det}(\\mathbf{H}) = ${det.toFixed(2)}`,
    det > 0 ? `\\text{det} > 0 \\Rightarrow \\text{Local Bowl (Minimum)}` : `\\text{det} < 0 \\Rightarrow \\text{Saddle Point}`
  ];

  // Generate 3D Mesh for local quadratic form Q = 0.5 * (dx, dy) * H * (dx, dy)^T
  const gridSize = 1.2;
  const res = 6;
  const mesh: [number, number][][] = [];
  for (let i = -res; i <= res; i++) {
    const row: [number, number][] = [];
    const dx = (i / res) * gridSize;
    for (let j = -res; j <= res; j++) {
      const dy = (j / res) * gridSize;
      const dz = 0.5 * (fxx * dx**2 + 2 * fxy * dx * dy + fyy * dy**2);
      row.push(project(dx, dy, dz));
    }
    mesh.push(row);
  }

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Hessian Matrix (2.5D Projection)</div>
          <div className="ctrl-row">
             <span className="ctrl-label">Coord P (Grabbable)</span>
             <span className="val-badge text-blue">({x.toFixed(1)}, {y.toFixed(1)})</span>
          </div>
          <p className="text-[10px] opacity-60 mt-2 italic">Drag 'P' across the grid. The 3D wireframe mesh shows the local quadratic approximation. Watch it morph from a bowl (det &gt; 0) to a saddle (det &lt; 0).</p>
        </div>
        <div className="card overflow-y-auto max-h-[350px]">
          <div className="result-label">Mathematical Derivation: Curvature Grid</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div>
        <div className="canvas-card">
          <Mafs viewBox={{ x: [-3, 3], y: [-3, 3] }}>
            <Coordinates.Cartesian />
            
            {/* 3D Wireframe Rendering */}
            <g opacity={0.6}>
              {mesh.map((row, i) => (
                <React.Fragment key={`row-${i}`}>
                   <Polygon 
                     points={row} 
                     fillOpacity={0} 
                     color={det > 0 ? "var(--green-premium)" : "var(--orange-premium)"} 
                     weight={1.2} 
                   />
                   {i < mesh.length - 1 && row.map((p1, j) => (
                     <Line.Segment key={`seg-${i}-${j}`} point1={p1} point2={mesh[i+1][j]} color={det > 0 ? "var(--green-premium)" : "var(--orange-premium)"} weight={0.8} opacity={0.3} />
                   ))}
                </React.Fragment>
              ))}
            </g>

            <MovablePoint point={point} onMove={setPoint} color="var(--accent-premium)" />
            <Text x={x} y={y + 0.4} color="var(--accent-premium)" weight={800} size={12}>P</Text>
          </Mafs>
        </div>
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   MODULE 7: TAYLOR APPROXIMATION
   ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── */
export const TaylorLab = () => {
  const [order, setOrder] = useState(1);
  const [center, setCenter] = useState(0);

  const target = (x: number) => Math.sin(x);

  const taylor = (x: number) => {
    const c = center;
    const dx = x - c;
    const derivs = [
      Math.sin(c),
      Math.cos(c),
      -Math.sin(c),
      -Math.cos(c),
      Math.sin(c),
      Math.cos(c)
    ];
    
    let sum = 0;
    for (let i = 0; i <= order; i++) {
        if (i < derivs.length) {
            sum += (derivs[i] / Math.pow(Math.factorial ? (Math as any).factorial(i) : [1, 1, 2, 6, 24, 120][i], 1)) * Math.pow(dx, i);
        }
    }
    return sum;
  };

  const getPolynomialString = () => {
    const c = center;
    const derivs = [Math.sin(c), Math.cos(c), -Math.sin(c), -Math.cos(c), Math.sin(c), Math.cos(c)];
    const fact = [1, 1, 2, 6, 24, 120];
    
    let str = "";
    for (let i = 0; i <= order; i++) {
      const coeff = derivs[i] / fact[i];
      if (Math.abs(coeff) < 0.001 && i > 0) continue;
      
      const term = i === 0 ? coeff.toFixed(3) : 
                   i === 1 ? `${coeff > 0 ? "+" : ""}${coeff.toFixed(3)}(x - ${c.toFixed(2)})` :
                   `${coeff > 0 ? "+" : ""}${coeff.toFixed(3)}(x - ${c.toFixed(2)})^${i}`;
      str += term;
    }
    return str;
  };

  const steps = [
    `f(x) = \\sin(x) \\quad \\text{Center } a=${center.toFixed(2)}`,
    `f^{(n)}(a) \\text{ derivatives evaluated at } a: [${[Math.sin(center), Math.cos(center), -Math.sin(center), -Math.cos(center)].map(v => v.toFixed(3)).join(', ')}]`,
    `P_{${order}}(x) = ${getPolynomialString()}`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Taylor Polynomials</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Approximation Order (k)</span>
            <PremiumSlider min={1} max={5} step={2} value={order} onChange={setOrder} origin={1} />
            <span className="val-badge text-purple">{order.toFixed(0)}</span>
          </div>
        </div>
        <div className="card overflow-y-auto max-h-[350px]">
          <div className="result-label">Mathematical Derivation: Series Approx</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div>
        <div className="canvas-card">
          <Mafs viewBox={{ x: [-4, 4], y: [-2, 2] }}>
            <Coordinates.Cartesian />
            {/* Target Function */}
            <Plot.OfX y={target} color="var(--blue-premium)" opacity={0.3} weight={4} />
            {/* Taylor Approximation */}
            <Plot.OfX y={taylor} color="var(--purple-premium)" weight={3} />
            
            {/* Draggable Center Point */}
            <MovablePoint 
              point={[center, target(center)]} 
              onMove={([x]) => setCenter(x)} 
              color="var(--purple-premium)" 
            />

            <Text x={2.5} y={1.2} color="var(--blue-premium)" opacity={0.6}>sin(x)</Text>
            <Text x={center} y={taylor(center) - 0.5} color="var(--purple-premium)" weight={800} align="center">Center a</Text>
          </Mafs>
        </div>
      </div>
    </div>
  );
};

export const CalculusLab = () => {
  const [activeTab, setActiveTab] = useState('backprop');
  
  const labs: Record<string, React.ReactNode> = {
    'backprop': <BackpropLab />,
    'sensitivity': <ParameterSensitivity />,
    'optimizer': <StochasticOptimizer />,
    'integrals': <AUCIntegralLab />,
    'jacobian': <JacobianLab />,
    'hessian': <HessianLab />,
    'taylor': <TaylorLab />
  };

  return (
    <div className="lab-layout">
      <div className="tool-nav-modular no-scrollbar">
        {Object.keys(labs).map(tab => (
          <button 
            key={tab} 
            className={`tool-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-8 animate-in fade-in duration-700">
        {labs[activeTab]}
      </div>
    </div>
  );
};

