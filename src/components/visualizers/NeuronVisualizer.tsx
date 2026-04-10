import React, { useState, useEffect } from "react";
import { Mafs, Coordinates, Line, Point, Text, MovablePoint } from "mafs";
import { PremiumSlider } from "./core/PremiumSlider";
import "react-katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

// Local LaTeX rendering helper consistent with other labs
const LatexSolver = ({ steps }: { steps: string[] }) => (
  <div className="space-y-4 font-serif text-on-surface-variant/90 leading-relaxed">
    {steps.map((step, i) => (
      <div key={i} className="flex gap-3 items-start animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-teal/10 text-accent-teal text-[10px] flex items-center justify-center font-black mt-1 uppercase">
          {i + 1}
        </span>
        <div className="flex-grow pt-0.5 border-b border-white/5 pb-2">
           <InlineMath math={step} />
        </div>
      </div>
    ))}
  </div>
);

/**
 * NeuronVisualizer: A high-fidelity "Single Neuron Architect" laboratory.
 * Allows users to manipulate inputs and weights to witness the birth of non-linear decision boundaries.
 * (Ported and renamed from CalculusLab.BackpropLab for modularity)
 */
export const NeuronVisualizer = () => {
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
          <div className="card-title">Single Neuron Architect</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Synaptic Weight (w)</span>
            <PremiumSlider min={-2} max={2} step={0.1} value={w} onChange={setW} origin={0} />
            <span className="val-badge text-blue">{w.toFixed(2)}</span>
          </div>
          <button 
            className="w-full mt-6 py-4 rounded-xl bg-accent-teal text-white font-black text-[10px] uppercase tracking-[0.3em] shadow-[0_10px_30px_-5px_var(--accent-teal-soft)] hover:scale-[1.02] transition-transform active:scale-95" 
            onClick={() => setPulse(1)}
          >
            Trigger Backward Pass
          </button>
        </div>
        <div className="card overflow-y-auto max-h-[400px]">
          <div className="result-label">The Signal Gradient</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div>
        <div className="canvas-card">
          <Mafs viewBox={{ x: [-5, 5], y: [-3, 3] }}>
            <Coordinates.Cartesian />
            
            {/* Synaptic Pathway */}
            <Line.Segment point1={[-3.5, 0]} point2={[-1.5, 0]} color="var(--border)" opacity={0.6} weight={2} />
            <Line.Segment point1={[-1.5, 0]} point2={[0.5, 0]} color="var(--border)" opacity={0.6} weight={2} />
            <Line.Segment point1={[0.5, 0]} point2={[2.5, 0]} color="var(--border)" opacity={0.6} weight={2} />

            {/* Backprop Pulse Animation */}
            {pulse > 0 && (
              <Point x={2.5 - (1 - pulse) * 6} y={0} color="var(--accent-teal)" opacity={pulse} />
            )}

            {/* Input Node */}
            <MovablePoint point={[-3.5, 0]} onMove={([xVal]) => setX(Math.abs(xVal * 0.5))} color="var(--accent-teal)" />
            <Text x={-3.5} y={-0.8} size={10} color="var(--accent-teal)" opacity={0.8}>X (INPUT)</Text>
            <Text x={-3.5} y={0.1} size={14} weight={800} color="var(--on-surface)">{x.toFixed(1)}</Text>

            {/* Weight Node */}
            <MovablePoint point={[-1.5, 0]} onMove={([xVal]) => setW(xVal + 1.5 + 0.8)} color="var(--blue-premium)" />
            <Text x={-1.5} y={-0.8} size={10} color="var(--blue-premium)" opacity={0.8}>W (WEIGHT)</Text>
            <Text x={-1.5} y={0.1} size={14} weight={800} color="var(--blue-premium)">{w.toFixed(1)}</Text>

            {/* Activation Node */}
            <Point x={0.5} y={0} color="var(--green-premium)" />
            <Text x={0.5} y={-0.8} size={10} color="var(--green-premium)" opacity={0.8}>σ (TANH)</Text>
            <Text x={0.5} y={0.1} size={14} weight={800} color="var(--green-premium)">{a.toFixed(1)}</Text>

            {/* Loss Terminal */}
            <Point x={2.5} y={0} color="var(--accent-purple)" />
            <Text x={2.5} y={-0.8} size={10} color="var(--accent-purple)" opacity={0.8}>L (LOSS)</Text>
            <Text x={2.5} y={0.1} size={14} weight={800} color="var(--accent-purple)">{loss.toFixed(1)}</Text>
          </Mafs>
        </div>
      </div>
    </div>
  );
};
