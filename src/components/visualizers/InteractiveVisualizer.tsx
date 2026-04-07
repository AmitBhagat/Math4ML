import React, { useState } from "react";
import { TopicVisualizer } from "../MathematicalVisualizations";
import { VisualizerControls } from "./VisualizerControls";

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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* ─── Card 1: 1:1 Reference Style Controls ─── */}
      <div className="h-auto bg-white rounded-[2rem] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] p-6 outline outline-1 outline-white">
          <VisualizerControls 
            topicId={topicId} 
            params={params} 
            setParams={setParams} 
          />
      </div>

      {/* ─── Card 2: 1:1 Integrated Canvas/Visual ─── */}
      <div className="h-fit sticky top-24">
        <div className="h-[450px] bg-white rounded-[2rem] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] overflow-hidden relative outline outline-1 outline-white">
          <div className="absolute inset-x-0 h-10 bg-slate-50/50 backdrop-blur-sm border-b border-slate-100/50 flex items-center px-6 z-10">
             <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-slate-200" />
                <div className="w-2 h-2 rounded-full bg-slate-200" />
                <div className="w-2 h-2 rounded-full bg-slate-200" />
             </div>
             <span className="mx-auto text-[10px] uppercase tracking-widest font-black text-slate-300">Mathematical Projection</span>
          </div>
          <div className="h-full pt-10">
            <TopicVisualizer topicId={topicId} params={params} />
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


