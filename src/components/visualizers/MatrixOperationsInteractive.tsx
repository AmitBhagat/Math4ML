import React, { useState } from "react";
import { InlineMath } from "react-katex";
import { useTheme } from "../../hooks/useTheme";

interface MatrixInputProps {
  value: number;
  onChange: (v: number) => void;
  theme: 'light' | 'dark';
  key?: React.Key;
}

const MatrixInput = ({ value, onChange, theme }: MatrixInputProps) => (
  <input
    type="number"
    value={value}
    onChange={(e) => onChange(Number(e.target.value))}
    className="w-16 h-12 text-center border border-border-premium bg-bg-tertiary rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all px-2 py-2 font-mono font-bold text-slate-900 dark:text-white"
  />
);

interface ResultCellProps {
  value: number;
  theme: 'light' | 'dark';
  key?: React.Key;
}

const ResultCell = ({ value, theme }: ResultCellProps) => (
  <div className="w-16 h-12 flex items-center justify-center border-2 border-slate-900 dark:border-white bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-mono font-black shadow-lg transform scale-105">
    {value}
  </div>
);

const Bracket = ({ children }: { children: React.ReactNode; theme: 'light' | 'dark' }) => (
  <div className="relative flex items-center">
    <span className="text-5xl text-slate-300 dark:text-slate-700 font-extralight select-none px-2">[</span>
    {children}
    <span className="text-5xl text-slate-300 dark:text-slate-700 font-extralight select-none px-2">]</span>
  </div>
);

export const MatrixOperationsInteractive: React.FC = () => {
  const { theme } = useTheme();
  const [mode, setMode] = useState<"add" | "multiply" | "scalar">("add");
  const [matrixA, setMatrixA] = useState([[2, 1], [0, 3]]);
  const [matrixB, setMatrixB] = useState([[1, 2], [4, 1]]);
  const [scalar, setScalar] = useState(2);

  const updateA = (r: number, c: number, v: number) => {
    const next = [...matrixA];
    next[r] = [...next[r]];
    next[r][c] = v;
    setMatrixA(next);
  };

  const updateB = (r: number, c: number, v: number) => {
    const next = [...matrixB];
    next[r] = [...next[r]];
    next[r][c] = v;
    setMatrixB(next);
  };

  const calculateResult = () => {
    if (mode === "add") {
      return matrixA.map((row, i) => row.map((v, j) => v + matrixB[i][j]));
    } else if (mode === "multiply") {
      return [
        [
          matrixA[0][0] * matrixB[0][0] + matrixA[0][1] * matrixB[1][0],
          matrixA[0][0] * matrixB[0][1] + matrixA[0][1] * matrixB[1][1],
        ],
        [
          matrixA[1][0] * matrixB[0][0] + matrixA[1][1] * matrixB[1][0],
          matrixA[1][0] * matrixB[0][1] + matrixA[1][1] * matrixB[1][1],
        ],
      ];
    } else {
      return matrixA.map((row) => row.map((v) => v * scalar));
    }
  };

  const result = calculateResult();

  return (
    <div className="bg-bg-secondary dark:bg-slate-900 p-8 rounded-[2rem] shadow-xl border border-border-premium max-w-5xl mx-auto my-12 transition-colors duration-500 overflow-hidden">
      <div className="mb-10 text-center">
        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500 mb-2 font-mono">Computational Engine</h3>
        <h2 className="text-3xl font-headline font-black text-slate-900 dark:text-white tracking-tight">Interactive Matrix Laboratory</h2>
      </div>

      {/* Mode Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {(["add", "multiply", "scalar"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border-2 ${
              mode === m 
                ? "bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-slate-900 dark:border-white shadow-lg" 
                : "bg-transparent text-slate-400 dark:text-slate-500 border-border-premium hover:border-slate-400"
            }`}
          >
            {m === "add" ? "Addition (A + B)" : m === "multiply" ? "Multiplication (A × B)" : "Scalar (k × A)"}
          </button>
        ))}
      </div>

      {/* Matrix Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 scale-90 md:scale-100">
        {mode === "scalar" && (
          <div className="flex flex-col items-center">
             <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Scalar k</label>
             <input
                type="number"
                value={scalar}
                onChange={(e) => setScalar(Number(e.target.value))}
                className="w-20 h-14 text-center text-xl font-mono font-black bg-bg-tertiary border-2 border-border-premium rounded-xl focus:ring-2 focus:ring-slate-400 transition-all text-slate-900 dark:text-white"
             />
          </div>
        )}

        <div className="flex flex-col items-center">
          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Matrix A</label>
          <Bracket theme={theme}>
            <div className="grid grid-cols-2 gap-3">
              {matrixA.map((row, r) => row.map((val, c) => (
                <MatrixInput 
                  key={`a-${r}-${c}`} 
                  value={val} 
                  onChange={(v) => updateA(r, c, v)} 
                  theme={theme} 
                />
              )))}
            </div>
          </Bracket>
        </div>

        <span className="text-3xl text-slate-300 dark:text-slate-700 font-light translate-y-2">
          {mode === "add" ? "+" : "×"}
        </span>

        {mode !== "scalar" && (
          <div className="flex flex-col items-center">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Matrix B</label>
            <Bracket theme={theme}>
              <div className="grid grid-cols-2 gap-3">
                {matrixB.map((row, r) => row.map((val, c) => (
                  <MatrixInput 
                    key={`b-${r}-${c}`} 
                    value={val} 
                    onChange={(v) => updateB(r, c, v)} 
                    theme={theme} 
                  />
                )))}
              </div>
            </Bracket>
          </div>
        )}

        <span className="text-3xl text-slate-300 dark:text-slate-700 font-light translate-y-2">=</span>

        <div className="flex flex-col items-center">
          <label className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Result</label>
          <div className="p-4 rounded-2xl bg-bg-tertiary/50">
             <Bracket theme={theme}>
                <div className="grid grid-cols-2 gap-5">
                  {result.map((row, r) => row.map((val, c) => (
                    <ResultCell 
                      key={`c-${r}-${c}`} 
                      value={val} 
                      theme={theme} 
                    />
                  )))}
                </div>
             </Bracket>
          </div>
        </div>
      </div>

      {/* Calculation Steps Area */}
      <div className="bg-bg-tertiary/30 p-8 rounded-2xl border border-border-premium">
        <div className="flex items-center gap-3 mb-6">
           <div className="w-1 h-4 bg-slate-900 dark:bg-white rounded-full"></div>
           <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">Arithmetic Logic</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 text-[13px] font-mono text-slate-600 dark:text-slate-400">
           {mode === "add" && (
             <>
               <div className="flex items-center justify-between border-b border-border-premium pb-2">
                 <InlineMath>{`C_{11} = A_{11} + B_{11} = ${matrixA[0][0]} + ${matrixB[0][0]}`}</InlineMath>
                 <span className="text-slate-900 dark:text-white font-black">{result[0][0]}</span>
               </div>
               <div className="flex items-center justify-between border-b border-border-premium pb-2">
                 <InlineMath>{`C_{12} = A_{12} + B_{12} = ${matrixA[0][1]} + ${matrixB[0][1]}`}</InlineMath>
                 <span className="text-slate-900 dark:text-white font-black">{result[0][1]}</span>
               </div>
               <div className="flex items-center justify-between border-b border-border-premium pb-2">
                 <InlineMath>{`C_{21} = A_{21} + B_{21} = ${matrixA[1][0]} + ${matrixB[1][0]}`}</InlineMath>
                 <span className="text-slate-900 dark:text-white font-black">{result[1][0]}</span>
               </div>
               <div className="flex items-center justify-between border-b border-border-premium pb-2">
                 <InlineMath>{`C_{22} = A_{22} + B_{22} = ${matrixA[1][1]} + ${matrixB[1][1]}`}</InlineMath>
                 <span className="text-slate-900 dark:text-white font-black">{result[1][1]}</span>
               </div>
             </>
           )}
           {mode === "multiply" && (
             <>
               <div className="flex flex-col gap-1 border-b border-border-premium pb-2">
                 <InlineMath>{`C_{11} = (A_{11} \\cdot B_{11}) + (A_{12} \\cdot B_{21})`}</InlineMath>
                 <div className="flex justify-between items-center text-[11px] opacity-60">
                   <span>{`(${matrixA[0][0]} \\cdot ${matrixB[0][0]}) + (${matrixA[0][1]} \\cdot ${matrixB[1][0]})`}</span>
                   <span className="text-slate-900 dark:text-white font-black text-sm">{result[0][0]}</span>
                 </div>
               </div>
               <div className="flex flex-col gap-1 border-b border-border-premium pb-2">
                 <InlineMath>{`C_{12} = (A_{11} \\cdot B_{12}) + (A_{12} \\cdot B_{22})`}</InlineMath>
                 <div className="flex justify-between items-center text-[11px] opacity-60">
                   <span>{`(${matrixA[0][0]} \\cdot ${matrixB[0][1]}) + (${matrixA[0][1]} \\cdot ${matrixB[1][1]})`}</span>
                   <span className="text-slate-900 dark:text-white font-black text-sm">{result[0][1]}</span>
                 </div>
               </div>
               <div className="flex flex-col gap-1 border-b border-border-premium pb-2">
                 <InlineMath>{`C_{21} = (A_{21} \\cdot B_{11}) + (A_{22} \\cdot B_{21})`}</InlineMath>
                 <div className="flex justify-between items-center text-[11px] opacity-60">
                   <span>{`(${matrixA[1][0]} \\cdot ${matrixB[0][0]}) + (${matrixA[1][1]} \\cdot ${matrixB[1][0]})`}</span>
                   <span className="text-slate-900 dark:text-white font-black text-sm">{result[1][0]}</span>
                 </div>
               </div>
               <div className="flex flex-col gap-1 border-b border-border-premium pb-2">
                 <InlineMath>{`C_{22} = (A_{21} \\cdot B_{12}) + (A_{22} \\cdot B_{22})`}</InlineMath>
                 <div className="flex justify-between items-center text-[11px] opacity-60">
                   <span>{`(${matrixA[1][0]} \\cdot ${matrixB[0][1]}) + (${matrixA[1][1]} \\cdot ${matrixB[1][1]})`}</span>
                   <span className="text-slate-900 dark:text-white font-black text-sm">{result[1][1]}</span>
                 </div>
               </div>
             </>
           )}
           {mode === "scalar" && (
             <>
               <div className="flex items-center justify-between border-b border-border-premium pb-2">
                 <InlineMath>{`C_{11} = k \\cdot A_{11} = ${scalar} \\cdot ${matrixA[0][0]}`}</InlineMath>
                 <span className="text-slate-900 dark:text-white font-black">{result[0][0]}</span>
               </div>
               <div className="flex items-center justify-between border-b border-border-premium pb-2">
                 <InlineMath>{`C_{12} = k \\cdot A_{12} = ${scalar} \\cdot ${matrixA[0][1]}`}</InlineMath>
                 <span className="text-slate-900 dark:text-white font-black">{result[0][1]}</span>
               </div>
               <div className="flex items-center justify-between border-b border-border-premium pb-2">
                 <InlineMath>{`C_{21} = k \\cdot A_{21} = ${scalar} \\cdot ${matrixA[1][0]}`}</InlineMath>
                 <span className="text-slate-900 dark:text-white font-black">{result[1][0]}</span>
               </div>
               <div className="flex items-center justify-between border-b border-border-premium pb-2">
                 <InlineMath>{`C_{22} = k \\cdot A_{22} = ${scalar} \\cdot ${matrixA[1][1]}`}</InlineMath>
                 <span className="text-slate-900 dark:text-white font-black">{result[1][1]}</span>
               </div>
             </>
           )}
        </div>
      </div>
    </div>
  );
};
