import React, { useState, useEffect } from "react";
import { InlineMath } from "react-katex";
import { useTheme } from "../../hooks/useTheme";

interface ControlProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (val: number) => void;
  unit?: string;
  theme: 'light' | 'dark';
}

const SliderControl: React.FC<ControlProps> = ({ label, value, min, max, step = 0.1, onChange, unit = "", theme }) => (
  <div className="flex-1 flex flex-col">
    <div className="flex justify-between items-baseline mb-2">
      <label className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono select-none">
        {label}
      </label>
      <span className="text-[11px] font-bold font-mono text-slate-900 dark:text-white">
         {typeof value === 'number' ? value.toFixed(2) : '0.00'}{unit}
      </span>
    </div>
    <div className="w-full relative px-1 mb-2">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full appearance-none cursor-pointer premium-slider transition-all"
        style={{
           background: `linear-gradient(to right, ${theme === 'dark' ? '#fff' : '#000'} 0%, ${theme === 'dark' ? '#fff' : '#000'} ${(value - min) / (max - min) * 100}%, ${theme === 'dark' ? '#334155' : '#e2e8f0'} ${(value - min) / (max - min) * 100}%, ${theme === 'dark' ? '#334155' : '#e2e8f0'} 100%)`,
        }}
      />
      <style>{`
        .premium-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          background: ${theme === 'dark' ? '#fff' : '#000'};
          border: 1px solid ${theme === 'dark' ? '#fff' : '#000'};
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          transition: all 0.2s ease;
        }
        .premium-slider:hover::-webkit-slider-thumb {
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(0,0,0,0.2);
        }
        .premium-slider:active::-webkit-slider-thumb {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  </div>
);

interface VisualizerControlsProps {
  topicId: string;
  params: any;
  setParams: (p: any) => void;
  theme: 'light' | 'dark';
}

export const VisualizerControls: React.FC<VisualizerControlsProps> = ({ topicId, params, setParams, theme: propsTheme }) => {
  const { theme: contextTheme } = useTheme();
  const theme = propsTheme || contextTheme;
  const [elapsed, setElapsed] = useState(0);
  
  useEffect(() => {
    let start = Date.now();
    const timer = setInterval(() => {
      setElapsed(Date.now() - start);
    }, 50);
    return () => clearInterval(timer);
  }, [topicId]);

  const update = (key: string, val: any) => setParams({ ...params, [key]: val });

  const getTopicData = () => {
    switch (topicId) {
      case "Vectors": return {
        about: "Vector addition and scalar multiplication in 2D space. Basics of linear combinations.",
        equations: ["\\vec{v} + \\vec{w} = \\vec{r}", "c\\vec{v} = \\text{scaled vector}"]
      };
      case "DotProduct": return {
        about: "Measures alignment between vectors. The result is a scalar value representing projection magnitude.",
        equations: ["\\vec{v} \\cdot \\vec{w} = |v||w|\\cos\\theta", "\\text{proj}_w v = \\frac{\\vec{v}\\cdot\\vec{w}}{|w|^2}\\vec{w}"]
      };
      case "Matrices": return {
        about: "A matrix defines a linear transformation. Watch how the basis vectors i and j warp the space.",
        equations: ["T(\\vec{x}) = A\\vec{x}", "A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}"]
      };
      case "Eigenvalues": return {
        about: "Eigenvectors stay on their own line after transformation. λ is the scale factor along that line.",
        equations: ["A\\vec{v} = \\lambda\\vec{v}", "\\det(A - \\lambda I) = 0"]
      };
      case "SVD": return {
        about: "Singular Value Decomposition. Breaks any matrix into Rotate (Vᵀ) → Scale (Σ) → Rotate (U).",
        equations: ["A = U\\Sigma V^T", "\\Sigma = \\begin{bmatrix}\\sigma_1 & 0 \\\\ 0 & \\sigma_2\\end{bmatrix}"]
      };
      case "BasisChange": return {
        about: "Different bases give different coordinate representations of the same vector. Watch how v changes relative to b1 and b2.",
        equations: ["[\\vec{v}]_B = B^{-1}\\vec{v}", "P = \\begin{bmatrix} \\vec{b_1} & \\vec{b_2} \\end{bmatrix}"]
      };
      case "SampleSpace": return {
        about: "Set theory foundations. A Venn diagram shows the relationship between different events and their overlap (intersections).",
        equations: ["P(A \\cup B) = P(A) + P(B) - P(A \\cap B)", "P(A^c) = 1 - P(A)"]
      };
      case "BayesTheorem": return {
        about: "Updating beliefs based on evidence. Bayes' rule relates the conditional and marginal probabilities of stochastic events.",
        equations: ["P(H|E) = \\frac{P(E|H)P(H)}{P(E)}", "P(E) = P(E|H)P(H) + P(E|\\neg H)P(\\neg H)"]
      };
      case "Distributions": return {
        about: "The Normal (Gaussian) distribution is fundamental to ML. μ (mu) determines the center, and σ (sigma) determines the spread.",
        equations: ["f(x|\\mu, \\sigma^2) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}", "\\mu = \\text{Mean}, \\sigma = \\text{Std Dev}"]
      };
      case "ConditionalProbability": return {
        about: "Probability of an event occurring given that another event has already occurred. This restricts the sample space to the evidence set.",
        equations: ["P(A|B) = \\frac{P(A \\cap B)}{P(B)}", "P(A \\cap B) = P(A|B)P(B)"]
      };
      case "Differentiation": return {
        about: "The derivative measures the instantaneous rate of change. Watch the tangent line slope as you move point 'a'.",
        equations: ["f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}", "y - f(a) = f'(a)(x - a)"]
      };
      case "AreaUnderCurve": return {
        about: "Integration accumulates quantity. Riemann sums approximate the area by summing many thin rectangles. As n increases, the sum approaches the true integral.",
        equations: ["\\int_a^b f(x) dx \\approx \\sum_{i=1}^n f(x_i)\\Delta x", "\\Delta x = \\frac{b-a}{n}"]
      };
      case "GradientDescent": return {
        about: "Optimization by following the steepest descent. The learning rate (η) determines the size of each step toward the local minimum.",
        equations: ["w_{t+1} = w_t - \\eta \\nabla f(w_t)", "\\nabla f(x) = f'(x)"]
      };
      case "PartialDerivatives": return {
        about: "Rate of change relative to one variable while holding others constant. Essential for multivariable optimization.",
        equations: ["\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h, y) - f(x, y)}{h}", "\\nabla f = [\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}]"]
      };
      default: return { about: "", equations: [] };
    }
  };

  const topic = getTopicData();

  const renderSliders = () => {
    switch (topicId) {
      case "Vectors":
      case "LinearCombinations":
      case "DotProduct":
        return (
          <div className="space-y-4">
            <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
               <div className="grid grid-cols-2 gap-8">
                  <SliderControl label="vx" value={params.vx ?? 3} min={-3.5} max={3.5} onChange={(v) => update("vx", v)} theme={theme} />
                  <SliderControl label="vy" value={params.vy ?? 2} min={-3.5} max={3.5} onChange={(v) => update("vy", v)} theme={theme} />
               </div>
            </div>
            <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
               <div className="grid grid-cols-2 gap-8">
                  <SliderControl label="wx" value={params.wx ?? -1} min={-3.5} max={3.5} onChange={(v) => update("wx", v)} theme={theme} />
                  <SliderControl label="wy" value={params.wy ?? 2} min={-3.5} max={3.5} onChange={(v) => update("wy", v)} theme={theme} />
               </div>
            </div>
          </div>
        );

      case "Matrices":
      case "Eigenvalues":
      case "Eigenvectors":
      case "Determinants":
        return (
          <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-[2rem] p-8 shadow-sm transition-colors duration-500">
            <div className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.2em] mb-6 text-center">Matrix A Parameters</div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-8">
              <SliderControl label="a (1,1)" value={params.a ?? 1} min={-3} max={3} step={0.05} onChange={(v) => update("a", v)} theme={theme} />
              <SliderControl label="b (1,2)" value={params.b ?? 0} min={-3} max={3} step={0.05} onChange={(v) => update("b", v)} theme={theme} />
              <SliderControl label="c (2,1)" value={params.c ?? 0} min={-3} max={3} step={0.05} onChange={(v) => update("c", v)} theme={theme} />
              <SliderControl label="d (2,2)" value={params.d ?? 1} min={-3} max={3} step={0.05} onChange={(v) => update("d", v)} theme={theme} />
            </div>
          </div>
        );

      case "SVD":
        return (
          <div className="space-y-4">
             <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
                <div className="grid grid-cols-2 gap-8">
                   <SliderControl label="σ1 Scale" value={params.sigma1 ?? 2.5} min={0.1} max={4} onChange={(v) => update("sigma1", v)} theme={theme} />
                   <SliderControl label="σ2 Scale" value={params.sigma2 ?? 0.8} min={0.1} max={4} onChange={(v) => update("sigma2", v)} theme={theme} />
                </div>
             </div>
             <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
                <div className="grid grid-cols-2 gap-8">
                   <SliderControl label="θV Angle" value={params.theta1 ?? 30} min={-90} max={90} unit="°" onChange={(v) => update("theta1", v)} theme={theme} />
                   <SliderControl label="θU Angle" value={params.theta2 ?? 20} min={-90} max={90} unit="°" onChange={(v) => update("theta2", v)} theme={theme} />
                </div>
             </div>
          </div>
        );

      case "BasisChange":
        return (
          <div className="space-y-4">
            <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
              <div className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.2em] mb-6 text-center">New Basis Vectors (B)</div>
              <div className="grid grid-cols-2 gap-8">
                <SliderControl label="b₁x" value={params.e1x ?? 1} min={-2.2} max={2.2} onChange={(v) => update("e1x", v)} theme={theme} />
                <SliderControl label="b₁y" value={params.e1y ?? 1} min={-2.2} max={2.2} onChange={(v) => update("e1y", v)} theme={theme} />
              </div>
              <div className="grid grid-cols-2 gap-8 mt-4">
                <SliderControl label="b₂x" value={params.e2x ?? -1} min={-2.2} max={2.2} onChange={(v) => update("e2x", v)} theme={theme} />
                <SliderControl label="b₂y" value={params.e2y ?? 1} min={-2.2} max={2.2} onChange={(v) => update("e2y", v)} theme={theme} />
              </div>
            </div>
            <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
              <div className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.2em] mb-6 text-center">Vector [V] in New Basis</div>
              <div className="grid grid-cols-2 gap-8">
                <SliderControl label="vx" value={params.vx ?? 1} min={-2.5} max={2.5} onChange={(v) => update("vx", v)} theme={theme} />
                <SliderControl label="vy" value={params.vy ?? 1} min={-2.5} max={2.5} onChange={(v) => update("vy", v)} theme={theme} />
              </div>
            </div>
          </div>
        );

      case "Differentiation":
        return (
          <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
             <SliderControl label="Point a" value={params.a ?? 1} min={-3} max={3} onChange={(v) => update("a", v)} theme={theme} />
          </div>
        );

      case "AreaUnderCurve":
        return (
          <div className="space-y-4">
            <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
               <div className="grid grid-cols-2 gap-8">
                  <SliderControl label="Start a" value={params.a ?? -2} min={-4} max={0} onChange={(v) => update("a", v)} theme={theme} />
                  <SliderControl label="End b" value={params.b ?? 2} min={0} max={4} onChange={(v) => update("b", v)} theme={theme} />
               </div>
            </div>
            <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
               <SliderControl label="Density (n)" value={params.n ?? 10} min={1} max={100} step={1} onChange={(v) => update("n", v)} theme={theme} />
            </div>
          </div>
        );

      case "GradientDescent":
        return (
          <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
             <SliderControl label="Learning Rate (η)" value={params.eta ?? 0.1} min={0.01} max={1} step={0.01} onChange={(v) => update("eta", v)} theme={theme} />
             <div className="mt-4 text-[10px] text-slate-400 dark:text-slate-500 italic font-mono text-center">Caution: High η may cause divergence</div>
          </div>
        );

      case "PartialDerivatives":
        return (
          <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
             <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-black tracking-widest mb-4 text-center">Active Axis</div>
             <div className="flex gap-4">
                {(['x', 'y'] as const).map(ax => (
                  <button 
                    key={ax}
                    onClick={() => update("focus", ax)}
                    className={`flex-1 py-2 rounded-lg text-xs font-black uppercase tracking-widest border transition-all ${params.focus === ax ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white' : 'border-border-premium text-slate-400'}`}
                  >
                    ∂f / ∂{ax}
                  </button>
                ))}
             </div>
          </div>
        );

      case "JacobianHessian":
        return (
          <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
             <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-black tracking-widest mb-4 text-center">Approximation Mode</div>
             <div className="flex gap-4">
                {(['jacobian', 'hessian'] as const).map(m => (
                  <button 
                    key={m}
                    onClick={() => update("mode", m)}
                    className={`flex-1 py-2 rounded-lg text-xs font-black uppercase tracking-widest border transition-all ${params.mode === m ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white' : 'border-border-premium text-slate-400'}`}
                  >
                    {m}
                  </button>
                ))}
             </div>
          </div>
        );

      case "SampleSpace":
        return (
          <div className="space-y-4">
            <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
               <div className="grid grid-cols-2 gap-8">
                  <SliderControl label="P(A) Size" value={params.aSize ?? 0.5} min={0.2} max={0.8} onChange={(v) => update("aSize", v)} theme={theme} />
                  <SliderControl label="P(B) Size" value={params.bSize ?? 0.5} min={0.2} max={0.8} onChange={(v) => update("bSize", v)} theme={theme} />
               </div>
            </div>
            <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
               <SliderControl label="Intersection %" value={params.overlap ?? 0.3} min={0} max={0.9} onChange={(v) => update("overlap", v)} theme={theme} />
            </div>
          </div>
        );

      case "BayesTheorem":
        return (
          <div className="space-y-4">
            <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
               <SliderControl label="Prior P(H)" value={params.prior ?? 0.3} min={0.01} max={0.99} onChange={(v) => update("prior", v)} theme={theme} />
            </div>
            <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
               <div className="grid grid-cols-2 gap-8">
                  <SliderControl label="P(E|H)" value={params.likelihood ?? 0.8} min={0.01} max={0.99} onChange={(v) => update("likelihood", v)} theme={theme} />
                  <SliderControl label="P(E|¬H)" value={params.falseAlarm ?? 0.1} min={0.01} max={0.99} onChange={(v) => update("falseAlarm", v)} theme={theme} />
               </div>
            </div>
          </div>
        );

      case "Distributions":
        return (
          <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
             <div className="grid grid-cols-2 gap-8">
                <SliderControl label="Mean (μ)" value={params.mu ?? 0} min={-3} max={3} onChange={(v) => update("mu", v)} theme={theme} />
                <SliderControl label="Std Dev (σ)" value={params.sigma ?? 1} min={0.5} max={3} onChange={(v) => update("sigma", v)} theme={theme} />
             </div>
          </div>
        );

      case "ConditionalProbability":
        return (
          <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
             <SliderControl label="Evidence P(B)" value={params.conditioning ?? 0.5} min={0.1} max={0.9} onChange={(v) => update("conditioning", v)} theme={theme} />
          </div>
        );

      case "Gradient":
        return (
          <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 shadow-sm transition-colors duration-500">
             <div className="grid grid-cols-2 gap-8">
                <SliderControl label="x coordinate" value={params.x ?? 1} min={-2.2} max={2.2} onChange={(v) => update("x", v)} theme={theme} />
                <SliderControl label="y coordinate" value={params.y ?? 1} min={-2.2} max={2.2} onChange={(v) => update("y", v)} theme={theme} />
             </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderSVDStepIndicator = () => {
    if (topicId !== "SVD") return null;
    const p = Math.min((elapsed % 4000) / 4000, 1);
    const active = p < 0.33 ? 0 : p < 0.66 ? 1 : 2;
    return (
      <div className="bg-bg-secondary dark:bg-slate-900 border border-border-premium rounded-2xl p-6 space-y-4 transition-colors duration-500">
         <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-black tracking-widest mb-2 text-center">Process Sequence</div>
         <div className="space-y-3">
            {[
              { id: 0, label: "Step 1: Rotate (Vᵀ)" },
              { id: 1, label: "Step 2: Scale (Σ)" },
              { id: 2, label: "Step 3: Rotate (U)" }
            ].map((s) => (
              <div key={s.id} className={`flex items-center gap-3 transition-opacity duration-300 ${active === s.id ? 'opacity-100' : 'opacity-40'}`}>
                 <span className={`text-xs ${active === s.id ? 'animate-pulse text-slate-900 dark:text-white' : 'text-slate-300 dark:text-slate-600'}`}>{active === s.id ? "▶" : "○"}</span>
                 <span className={`text-[11px] font-mono font-bold ${active === s.id ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-500'}`}>{s.label}</span>
              </div>
            ))}
         </div>
      </div>
    );
  };

  return (
    <div className={`flex flex-col h-full ${theme === 'dark' ? 'text-slate-100' : 'text-slate-900'} animate-in fade-in duration-700 max-w-2xl mx-auto`}>
      <div className="space-y-6 flex-1">
        {renderSliders()}
        {renderSVDStepIndicator()}
      </div>

      {/* Equations Section */}
      {topic.equations.length > 0 && (
        <div className="mt-8 border-t border-border-premium pt-8">
           <h3 className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.2em] mb-4 text-center">Key Equations</h3>
           <div className="flex flex-wrap gap-3 justify-center">
             {topic.equations.map((eq, i) => (
               <div key={i} className="bg-bg-secondary dark:bg-slate-900 border border-border-premium px-6 py-3 rounded-xl shadow-sm text-xs transition-colors duration-500">
                 <InlineMath>{eq}</InlineMath>
               </div>
             ))}
           </div>
        </div>
      )}
    </div>
  );
};
