import React, { useState } from "react";

export const MatrixMultiplication = () => {
  const [a, setA] = useState([[1, 2], [3, 4]]);
  const [b, setB] = useState([[5, 6], [7, 8]]);

  const c = [
    [a[0][0]*b[0][0] + a[0][1]*b[1][0], a[0][0]*b[0][1] + a[0][1]*b[1][1]],
    [a[1][0]*b[0][0] + a[1][1]*b[1][0], a[1][0]*b[0][1] + a[1][1]*b[1][1]],
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
       <div className="space-y-6">
          <div className="p-6 rounded-[24px] glass-panel border border-white/10 shadow-xl bg-white/5">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-accent-premium/60">
              Input Matrices [A × B]
            </div>
            <div className="flex gap-6 justify-center items-center">
               <div className="grid grid-cols-2 gap-2 bg-black/10 p-3 rounded-xl border border-white/5">
                  {a.flat().map((v, i) => (
                    <input 
                      key={i} 
                      type="number"
                      className="w-12 h-12 text-center bg-white/5 border border-white/10 rounded-lg text-white font-mono focus:border-accent-premium transition-colors outline-none" 
                      value={v} 
                      onChange={e => {
                        const next = [...a.map(r => [...r])];
                        next[Math.floor(i/2)][i%2] = +e.target.value;
                        setA(next);
                      }} 
                    />
                  ))}
               </div>
               <span className="text-2xl text-white/20 font-light">×</span>
               <div className="grid grid-cols-2 gap-2 bg-black/10 p-3 rounded-xl border border-white/5">
                  {b.flat().map((v, i) => (
                    <input 
                      key={i} 
                      type="number"
                      className="w-12 h-12 text-center bg-white/5 border border-white/10 rounded-lg text-white font-mono focus:border-accent-premium transition-colors outline-none" 
                      value={v} 
                      onChange={e => {
                        const next = [...b.map(r => [...r])];
                        next[Math.floor(i/2)][i%2] = +e.target.value;
                        setB(next);
                      }} 
                    />
                  ))}
               </div>
            </div>
          </div>

          <div className="p-6 rounded-[24px] glass-panel border border-white/10 shadow-xl bg-white/5">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-accent-premium/60">
              Derivation: Dot Product Steps
            </div>
            <div className="space-y-4 text-white/90">
              <div className="p-3 bg-white/5 rounded-lg border border-white/5 font-serif italic">
                $C_{11} = ({a[0][0]} \cdot {b[0][0]}) + ({a[0][1]} \cdot {b[1][0]}) = {c[0][0]}$
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/5 font-serif italic">
                $C_{12} = ({a[0][0]} \cdot {b[0][1]}) + ({a[0][1]} \cdot {b[1][1]}) = {c[0][1]}$
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/5 font-serif italic">
                $C_{21} = ({a[1][0]} \cdot {b[0][0]}) + ({a[1][1]} \cdot {b[1][0]}) = {c[1][0]}$
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/5 font-serif italic">
                $C_{22} = ({a[1][0]} \cdot {b[0][1]}) + ({a[1][1]} \cdot {b[1][1]}) = {c[1][1]}$
              </div>
            </div>
          </div>
       </div>

       <div className="p-8 rounded-[24px] glass-panel border border-accent-premium/10 shadow-2xl bg-accent-premium/5 h-full flex flex-col items-center justify-center">
          <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-accent-premium">
            Resulting Matrix C
          </div>
          <div className="grid grid-cols-2 gap-6 md:gap-8">
             {c.flat().map((v, i) => (
               <div key={i} className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border border-accent-premium/30 bg-accent-premium/10 flex items-center justify-center text-2xl md:text-3xl font-black text-accent-premium shadow-[0_0_30px_rgba(233,128,116,0.15)] animate-in zoom-in duration-500">
                 {v}
               </div>
             ))}
          </div>
       </div>
    </div>
  );
};

export default MatrixMultiplication;
