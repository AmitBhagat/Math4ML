import React, { useState } from "react";
import { InlineMath } from "react-katex";

const MatrixInput = ({ value, onChange }: { value: number; onChange: (v: number) => void; key?: string }) => (
  <input
    type="number"
    value={value}
    onChange={(e) => onChange(Number(e.target.value))}
    className="w-16 h-12 text-center border border-gray-300 rounded focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all px-2 py-2 font-medium text-gray-800"
  />
);

const ResultCell = ({ value }: { value: number; key?: string }) => (
  <div className="w-16 h-12 flex items-center justify-center border border-green-200 bg-white rounded text-green-600 font-bold shadow-sm">
    {value}
  </div>
);

const Bracket = ({ children }: { children: React.ReactNode }) => (
  <div className="relative flex items-center">
    <span className="text-4xl text-gray-300 font-light select-none px-1">[</span>
    {children}
    <span className="text-4xl text-gray-300 font-light select-none px-1">]</span>
  </div>
);

export const MatrixOperationsInteractive: React.FC = () => {
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
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 max-w-4xl mx-auto my-8 font-sans text-gray-900">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Matrix Operations</h3>
        <p className="text-sm text-gray-600">Experiment with Addition, Multiplication, and Scalar operations in real-time.</p>
      </div>

      {/* Mode Selector */}
      <div className="flex flex-wrap gap-3 mb-8">
        {(["add", "multiply", "scalar"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              mode === m ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {m === "add" ? "Addition (A + B)" : m === "multiply" ? "Multiplication (A × B)" : "Scalar (k × A)"}
          </button>
        ))}
      </div>

      {/* Matrix Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
        {mode === "scalar" && (
          <div className="flex flex-col items-center">
             <label className="text-xs font-bold text-gray-400 uppercase mb-2">Scalar k</label>
             <input
                type="number"
                value={scalar}
                onChange={(e) => setScalar(Number(e.target.value))}
                className="w-24 h-12 text-center text-lg font-semibold border border-gray-300 rounded focus:ring-2 focus:ring-gray-500 transition-all"
             />
          </div>
        )}

        <div className="flex flex-col items-center">
          <label className="text-xs font-bold text-gray-400 uppercase mb-2">Matrix A</label>
          <Bracket>
            <div className="grid grid-cols-2 gap-2">
              {matrixA.map((row, r) => row.map((val, c) => (
                <MatrixInput key={`a-${r}-${c}`} value={val} onChange={(v) => updateA(r, c, v)} />
              )))}
            </div>
          </Bracket>
        </div>

        <span className="text-2xl text-gray-400 font-light mx-2">
          {mode === "add" ? "+" : "×"}
        </span>

        {mode !== "scalar" && (
          <div className="flex flex-col items-center">
            <label className="text-xs font-bold text-gray-400 uppercase mb-2">Matrix B</label>
            <Bracket>
              <div className="grid grid-cols-2 gap-2">
                {matrixB.map((row, r) => row.map((val, c) => (
                  <MatrixInput key={`b-${r}-${c}`} value={val} onChange={(v) => updateB(r, c, v)} />
                )))}
              </div>
            </Bracket>
          </div>
        )}

        <span className="text-2xl text-gray-400 font-light mx-2">=</span>

        <div className="flex flex-col items-center">
          <label className="text-xs font-bold text-green-600 uppercase mb-2">Result Matrix</label>
          <div className="bg-green-50 border border-green-100 p-4 rounded-xl">
             <Bracket>
                <div className="grid grid-cols-2 gap-2">
                  {result.map((row, r) => row.map((val, c) => (
                    <ResultCell key={`c-${r}-${c}`} value={val} />
                  )))}
                </div>
             </Bracket>
          </div>
        </div>
      </div>

      {/* Calculation Steps Area */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Calculation Steps</h4>
        <p className="text-sm text-gray-500 mb-4 italic">Individual cell arithmetic based on current inputs.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm text-gray-700">
           {mode === "add" && (
             <>
               <div className="flex items-center gap-2"><InlineMath>{`C_{11} = A_{11} + B_{11} = ${matrixA[0][0]} + ${matrixB[0][0]} =`}</InlineMath> <span className="text-green-600 font-bold">{result[0][0]}</span></div>
               <div className="flex items-center gap-2"><InlineMath>{`C_{12} = A_{12} + B_{12} = ${matrixA[0][1]} + ${matrixB[0][1]} =`}</InlineMath> <span className="text-green-600 font-bold">{result[0][1]}</span></div>
               <div className="flex items-center gap-2"><InlineMath>{`C_{21} = A_{21} + B_{21} = ${matrixA[1][0]} + ${matrixB[1][0]} =`}</InlineMath> <span className="text-green-600 font-bold">{result[1][0]}</span></div>
               <div className="flex items-center gap-2"><InlineMath>{`C_{22} = A_{22} + B_{22} = ${matrixA[1][1]} + ${matrixB[1][1]} =`}</InlineMath> <span className="text-green-600 font-bold">{result[1][1]}</span></div>
             </>
           )}
           {mode === "multiply" && (
             <>
               <div className="flex items-center gap-2"><InlineMath>{`C_{11} = (A_{11} \\times B_{11}) + (A_{12} \\times B_{21}) = (${matrixA[0][0]} \\times ${matrixB[0][0]}) + (${matrixA[0][1]} \\times ${matrixB[1][0]}) =`}</InlineMath> <span className="text-green-600 font-bold">{result[0][0]}</span></div>
               <div className="flex items-center gap-2"><InlineMath>{`C_{12} = (A_{11} \\times B_{12}) + (A_{12} \\times B_{22}) = (${matrixA[0][0]} \\times ${matrixB[0][1]}) + (${matrixA[0][1]} \\times ${matrixB[1][1]}) =`}</InlineMath> <span className="text-green-600 font-bold">{result[0][1]}</span></div>
               <div className="flex items-center gap-2"><InlineMath>{`C_{21} = (A_{21} \\times B_{11}) + (A_{22} \\times B_{21}) = (${matrixA[1][0]} \\times ${matrixB[0][0]}) + (${matrixA[1][1]} \\times ${matrixB[1][0]}) =`}</InlineMath> <span className="text-green-600 font-bold">{result[1][0]}</span></div>
               <div className="flex items-center gap-2"><InlineMath>{`C_{22} = (A_{21} \\times B_{12}) + (A_{22} \\times B_{22}) = (${matrixA[1][0]} \\times ${matrixB[0][1]}) + (${matrixA[1][1]} \\times ${matrixB[1][1]}) =`}</InlineMath> <span className="text-green-600 font-bold">{result[1][1]}</span></div>
             </>
           )}
           {mode === "scalar" && (
             <>
               <div className="flex items-center gap-2"><InlineMath>{`C_{11} = k \\times A_{11} = ${scalar} \\times ${matrixA[0][0]} =`}</InlineMath> <span className="text-green-600 font-bold">{result[0][0]}</span></div>
               <div className="flex items-center gap-2"><InlineMath>{`C_{12} = k \\times A_{12} = ${scalar} \\times ${matrixA[0][1]} =`}</InlineMath> <span className="text-green-600 font-bold">{result[0][1]}</span></div>
               <div className="flex items-center gap-2"><InlineMath>{`C_{21} = k \\times A_{21} = ${scalar} \\times ${matrixA[1][0]} =`}</InlineMath> <span className="text-green-600 font-bold">{result[1][0]}</span></div>
               <div className="flex items-center gap-2"><InlineMath>{`C_{22} = k \\times A_{22} = ${scalar} \\times ${matrixA[1][1]} =`}</InlineMath> <span className="text-green-600 font-bold">{result[1][1]}</span></div>
             </>
           )}
        </div>
      </div>
    </div>
  );
};
