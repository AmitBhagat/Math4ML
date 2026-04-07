import React, { useState, useEffect } from "react";
import { InlineMath } from "react-katex";

interface ControlProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (val: number) => void;
  unit?: string;
  color?: string;
}

const SliderControl: React.FC<ControlProps> = ({ label, value, min, max, step = 0.1, onChange, unit = "", color = "#3b8beb" }) => (
  <div className="flex-1 flex flex-col">
    <div className="flex justify-between items-baseline mb-2">
      <label className="text-[10px] text-slate-400 uppercase tracking-widest font-mono select-none">
        {label}
      </label>
      <span className="text-[11px] font-bold font-mono" style={{ color }}>
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
        className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer premium-slider transition-all"
        style={{
           background: `linear-gradient(to right, #000 0%, #000 ${(value - min) / (max - min) * 100}%, #e2e8f0 ${(value - min) / (max - min) * 100}%, #e2e8f0 100%)`,
        }}
      />
      <style>{`
        .premium-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          background: white;
          border: 1px solid #cbd5e1;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 8px rgba(0,0,0,0.1);
          transition: border-color 0.2s, transform 0.1s;
        }
        .premium-slider:active::-webkit-slider-thumb {
          transform: scale(1.1);
          border-color: #000;
        }
      `}</style>
    </div>
  </div>
);

interface VisualizerControlsProps {
  topicId: string;
  params: any;
  setParams: (p: any) => void;
}

export const VisualizerControls: React.FC<VisualizerControlsProps> = ({ topicId, params, setParams }) => {
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
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
               <div className="grid grid-cols-2 gap-8">
                  <SliderControl label="vx" value={params.vx ?? 3} min={-5} max={5} onChange={(v) => update("vx", v)} color="#3b8beb" />
                  <SliderControl label="vy" value={params.vy ?? 2} min={-5} max={5} onChange={(v) => update("vy", v)} color="#3b8beb" />
               </div>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
               <div className="grid grid-cols-2 gap-8">
                  <SliderControl label="wx" value={params.wx ?? -1} min={-5} max={5} onChange={(v) => update("wx", v)} color="#00d4aa" />
                  <SliderControl label="wy" value={params.wy ?? 2} min={-5} max={5} onChange={(v) => update("wy", v)} color="#00d4aa" />
               </div>
            </div>
          </div>
        );

      case "Matrices":
      case "Eigenvalues":
      case "Eigenvectors":
      case "Determinants":
        return (
          <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm">
            <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-6 text-center">Matrix A Parameters</div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-8">
              <SliderControl label="a (1,1)" value={params.a ?? 1} min={-3} max={3} step={0.05} onChange={(v) => update("a", v)} color="#3b8beb" />
              <SliderControl label="b (1,2)" value={params.b ?? 0} min={-3} max={3} step={0.05} onChange={(v) => update("b", v)} color="#a78bfa" />
              <SliderControl label="c (2,1)" value={params.c ?? 0} min={-3} max={3} step={0.05} onChange={(v) => update("c", v)} color="#00d4aa" />
              <SliderControl label="d (2,2)" value={params.d ?? 1} min={-3} max={3} step={0.05} onChange={(v) => update("d", v)} color="#f472b6" />
            </div>
          </div>
        );

      case "SVD":
        return (
          <div className="space-y-4">
             <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-8">
                   <SliderControl label="σ1 Scale" value={params.sigma1 ?? 2.5} min={0.1} max={4} onChange={(v) => update("sigma1", v)} color="#fbbf24" />
                   <SliderControl label="σ2 Scale" value={params.sigma2 ?? 0.8} min={0.1} max={4} onChange={(v) => update("sigma2", v)} color="#f472b6" />
                </div>
             </div>
             <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-8">
                   <SliderControl label="θV Angle" value={params.theta1 ?? 30} min={-90} max={90} unit="°" onChange={(v) => update("theta1", v)} color="#3b8beb" />
                   <SliderControl label="θU Angle" value={params.theta2 ?? 20} min={-90} max={90} unit="°" onChange={(v) => update("theta2", v)} color="#a78bfa" />
                </div>
             </div>
          </div>
        );

      case "BasisChange":
        return (
          <div className="space-y-4">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-6 text-center">New Basis Vectors (B)</div>
              <div className="grid grid-cols-2 gap-8">
                <SliderControl label="b₁x" value={params.e1x ?? 1} min={-3} max={3} onChange={(v) => update("e1x", v)} color="#3b8beb" />
                <SliderControl label="b₁y" value={params.e1y ?? 1} min={-3} max={3} onChange={(v) => update("e1y", v)} color="#3b8beb" />
              </div>
              <div className="grid grid-cols-2 gap-8 mt-4">
                <SliderControl label="b₂x" value={params.e2x ?? -1} min={-3} max={3} onChange={(v) => update("e2x", v)} color="#00d4aa" />
                <SliderControl label="b₂y" value={params.e2y ?? 1} min={-3} max={3} onChange={(v) => update("e2y", v)} color="#00d4aa" />
              </div>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-6 text-center">Vector [V] in New Basis</div>
              <div className="grid grid-cols-2 gap-8">
                <SliderControl label="vx" value={params.vx ?? 1} min={-4} max={4} onChange={(v) => update("vx", v)} color="#fbbf24" />
                <SliderControl label="vy" value={params.vy ?? 1} min={-4} max={4} onChange={(v) => update("vy", v)} color="#fbbf24" />
              </div>
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
      <div className="bg-slate-900 rounded-2xl p-6 text-white space-y-4">
         <div className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-2 text-center">Process Sequence</div>
         <div className="space-y-3">
            {[
              { id: 0, label: "Step 1: Rotate (Vᵀ)", color: "text-blue-400" },
              { id: 1, label: "Step 2: Scale (Σ)", color: "text-yellow-400" },
              { id: 2, label: "Step 3: Rotate (U)", color: "text-purple-400" }
            ].map((s) => (
              <div key={s.id} className={`flex items-center gap-3 transition-opacity duration-300 ${active === s.id ? 'opacity-100' : 'opacity-40'}`}>
                 <span className={`text-xs ${active === s.id ? 'animate-pulse' : ''}`}>{active === s.id ? "▶" : "○"}</span>
                 <span className={`text-[11px] font-mono font-bold ${active === s.id ? s.color : 'text-white'}`}>{s.label}</span>
              </div>
            ))}
         </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full font-sans text-slate-900 animate-in fade-in duration-700 max-w-2xl mx-auto">
      {/* About Section */}
      <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl mb-6">
        <h3 className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-3">About {topicId}</h3>
        <p className="text-xs text-slate-600 leading-relaxed font-serif italic">
          {topic.about}
        </p>
      </div>

      <div className="space-y-6 flex-1">
        {renderSliders()}
        {renderSVDStepIndicator()}
      </div>

      {/* Equations Section */}
      {topic.equations.length > 0 && (
        <div className="mt-8 border-t border-slate-100 pt-8">
           <h3 className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-4 text-center">Key Equations</h3>
           <div className="flex flex-wrap gap-3 justify-center">
             {topic.equations.map((eq, i) => (
               <div key={i} className="bg-white border border-slate-100 px-6 py-3 rounded-xl shadow-sm text-xs">
                 <InlineMath>{eq}</InlineMath>
               </div>
             ))}
           </div>
        </div>
      )}
    </div>
  );
};
