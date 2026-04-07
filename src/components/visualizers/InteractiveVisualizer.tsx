import React, { useState } from "react";
import { TopicVisualizer } from "../MathematicalVisualizations";
import { VisualizerControls } from "./VisualizerControls";
import { useTheme } from "../../hooks/useTheme";
import { VisualizerTheme } from "./CanvasBase";

interface InteractiveVisualizerProps {
  topicId: string;
}

const DEFAULT_PARAMS: Record<string, any> = {
  Vectors: { x1: 0.2, w1: 0.5, x2: 0.6, w2: -0.3, x3: -0.3, w3: 0.8 },
  LinearCombinations: { vx: 2, vy: 1, wx: 1, wy: 2, scalar: 1.5, mode: "scalar" },
  DotProduct: { vx: 3, vy: 1, wx: 1, wy: 3 },
  MatrixOperations: { mode: "add", a11: 2, a12: 1, a21: 0, a22: 3, b11: 1, b12: 2, b21: 4, b22: 1, k: 2 },
  Matrices: { a: 1, b: 0.5, c: -0.5, d: 1 },
  LinearTransformation: { a: 1, d: 1, b: 0.5, c: -0.2 },
  Eigenvalues: { a: 2, b: 1, c: 1, d: 2 },
  Eigenvectors: { a: 2, b: 1, c: 1, d: 2 },
  SVD: { sigma1: 2.5, sigma2: 0.8, theta1: 30, theta2: 20 },
  MatrixDecompositions: { sigma1: 2.5, sigma2: 0.8, theta1: 30, theta2: 20 },
  BasisChange: { e1x: 1, e1y: 1, e2x: -1, e2y: 1, vx: 1, vy: 1 },
  Determinants: { a: 2, b: 1, c: 0.5, d: 2 },
  PCA: { spread: 1.8, angle: 30 },
};

export const InteractiveVisualizer: React.FC<InteractiveVisualizerProps> = ({ topicId }) => {
  const [params, setParams] = useState(DEFAULT_PARAMS[topicId] || {});
  const { theme } = useTheme();
  const vTheme = theme as VisualizerTheme;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* ─── Card 1: Controls ─── */}
      <div className="h-auto bg-bg-secondary dark:bg-bg-tertiary rounded-[2rem] border border-border-premium shadow-xl p-6 outline outline-1 outline-border-premium/50 transition-colors duration-500">
          <VisualizerControls 
            topicId={topicId} 
            params={params} 
            setParams={setParams} 
            theme={vTheme}
          />
      </div>

      {/* ─── Card 2: Visual ─── */}
      <div className="h-fit sticky top-24">
        <div className={`h-[450px] ${vTheme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'} rounded-[2rem] border border-border-premium shadow-2xl overflow-hidden relative outline outline-1 outline-border-premium/30 transition-all duration-700`}>
          <div className={`absolute inset-x-0 h-10 ${vTheme === 'dark' ? 'bg-slate-900/80' : 'bg-slate-50/80'} backdrop-blur-md border-b border-border-premium/30 flex items-center px-6 z-10 transition-colors duration-500`}>
             <div className="flex gap-1.5 min-w-[60px]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/40" />
             </div>
             <span className={`mx-auto text-[10px] uppercase tracking-[0.2em] font-black ${vTheme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Mathematical Projection</span>
          </div>
          <div className="h-full pt-10">
            <TopicVisualizer topicId={topicId} params={params} theme={vTheme} />
          </div>
        </div>
        <div className="mt-6 px-4">
           <div className="text-[11px] text-slate-400 font-medium italic leading-relaxed text-center">
              The high-fidelity canvas uses coordinate-accurate processing to map your parameter shifts to geometry.
           </div>
        </div>
      </div>
    </div>
  );
};


