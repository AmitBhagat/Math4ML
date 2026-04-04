import React, { useState, useMemo } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

type Matrix = number[][];

const MatrixVisualizer = () => {
  const [activeTab, setActiveTab] = useState<'addition' | 'multiplication' | 'scalar'>('addition');
  const [matrixA, setMatrixA] = useState<Matrix>([[1, 2], [3, 4]]);
  const [matrixB, setMatrixB] = useState<Matrix>([[5, 6], [7, 8]]);
  const [scalar, setScalar] = useState<number>(2);


  const updateMatrix = (matrix: 'A' | 'B', row: number, col: number, value: string) => {
    const numValue = parseFloat(value) || 0;
    if (matrix === 'A') {
      const newMatrix = [...matrixA.map(r => [...r])];
      newMatrix[row][col] = numValue;
      setMatrixA(newMatrix);
    } else {
      const newMatrix = [...matrixB.map(r => [...r])];
      newMatrix[row][col] = numValue;
      setMatrixB(newMatrix);
    }
  };

  const results = useMemo(() => {
    let result: Matrix = [[0, 0], [0, 0]];
    let steps: string[] = [];

    if (activeTab === 'addition') {
      result = matrixA.map((row, i) => row.map((val, j) => val + matrixB[i][j]));
      steps = [
        `R_{0,0} = A_{0,0} + B_{0,0} = ${matrixA[0][0]} + ${matrixB[0][0]} = ${result[0][0]}`,
        `R_{0,1} = A_{0,1} + B_{0,1} = ${matrixA[0][1]} + ${matrixB[0][1]} = ${result[0][1]}`,
        `R_{1,0} = A_{1,0} + B_{1,0} = ${matrixA[1][0]} + ${matrixB[1][0]} = ${result[1][0]}`,
        `R_{1,1} = A_{1,1} + B_{1,1} = ${matrixA[1][1]} + ${matrixB[1][1]} = ${result[1][1]}`
      ];
    } else if (activeTab === 'multiplication') {
      result = [
        [
          matrixA[0][0] * matrixB[0][0] + matrixA[0][1] * matrixB[1][0],
          matrixA[0][0] * matrixB[0][1] + matrixA[0][1] * matrixB[1][1]
        ],
        [
          matrixA[1][0] * matrixB[0][0] + matrixA[1][1] * matrixB[1][0],
          matrixA[1][0] * matrixB[0][1] + matrixA[1][1] * matrixB[1][1]
        ]
      ];
      steps = [
        `R_{0,0} = A_{0,0}B_{0,0} + A_{0,1}B_{1,0} = (${matrixA[0][0]} \\times ${matrixB[0][0]}) + (${matrixA[0][1]} \\times ${matrixB[1][0]}) = ${result[0][0]}`,
        `R_{0,1} = A_{0,0}B_{0,1} + A_{0,1}B_{1,1} = (${matrixA[0][0]} \\times ${matrixB[0][1]}) + (${matrixA[0][1]} \\times ${matrixB[1][1]}) = ${result[0][1]}`,
        `R_{1,0} = A_{1,0}B_{0,0} + A_{1,1}B_{1,0} = (${matrixA[1][0]} \\times ${matrixB[0][0]}) + (${matrixA[1][1]} \\times ${matrixB[1][0]}) = ${result[1][0]}`,
        `R_{1,1} = A_{1,1}B_{0,1} + A_{1,1}B_{1,1} = (${matrixA[1][0]} \\times ${matrixB[0][1]}) + (${matrixA[1][1]} \\times ${matrixB[1][1]}) = ${result[1][1]}`
      ];
    } else {
      result = matrixA.map(row => row.map(val => val * scalar));
      steps = [
        `R_{0,0} = k \\cdot A_{0,0} = ${scalar} \\times ${matrixA[0][0]} = ${result[0][0]}`,
        `R_{0,1} = k \\cdot A_{0,1} = ${scalar} \\times ${matrixA[0][1]} = ${result[0][1]}`,
        `R_{1,0} = k \\cdot A_{1,0} = ${scalar} \\times ${matrixA[1][0]} = ${result[1][0]}`,
        `R_{1,1} = k \\cdot A_{1,1} = ${scalar} \\times ${matrixA[1][1]} = ${result[1][1]}`
      ];
    }
    return { result, steps };
  }, [activeTab, matrixA, matrixB, scalar]);



  const MatrixInput = ({ matrix, label, onUpdate }: { matrix: Matrix, label: string, onUpdate: (r: number, c: number, v: string) => void }) => (
    <div className="flex flex-col items-center group">
      <span className="text-[10px] font-black text-on-surface-variant mb-3 uppercase tracking-[0.2em]">{label}</span>
      <div className="relative p-5 border-l-2 border-r-2 border-black/10 dark:border-white/10 bg-surface-container-low transition-colors rounded-sm">
        <div className="grid grid-cols-2 gap-3">
          {matrix.map((row, rowIndex) => 
            row.map((val, colIndex) => (
              <input
                key={`${rowIndex}-${colIndex}`}
                type="number"
                value={val}
                onChange={(e) => onUpdate(rowIndex, colIndex, e.target.value)}
                className="w-12 h-12 md:w-14 md:h-14 text-center bg-surface border-none focus:ring-2 focus:ring-accent-teal outline-none font-mono text-base md:text-lg transition-all shadow-sm rounded-sm text-on-surface"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="my-16 bg-surface-container rounded border-none shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000 transition-colors">
      {/* Header & Tabs */}
      <div className="bg-surface-container-high px-8 py-5 flex flex-wrap items-center justify-between gap-6">
        <h4 className="text-xl font-headline font-black text-on-surface uppercase tracking-tight">Interactive Matrix Operations</h4>
        <div className="flex bg-background/50 p-1 rounded-lg backdrop-blur-sm">
          {(['addition', 'multiplication', 'scalar'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded transition-all ${
                activeTab === tab ? 'bg-surface text-accent-teal shadow-md' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 md:p-8">
        {/* Matrix Grids */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 mb-12">
          <MatrixInput matrix={matrixA} label="Matrix A" onUpdate={(r, c, v) => updateMatrix('A', r, c, v)} />
          
          <div className="text-2xl font-bold text-slate-400 dark:text-slate-600">
            {activeTab === 'addition' ? '+' : activeTab === 'multiplication' ? '×' : '×'}
          </div>

          {activeTab === 'scalar' ? (
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-black text-on-surface-variant mb-3 uppercase tracking-[0.2em]">Scalar k</span>
              <input
                type="number"
                value={scalar}
                onChange={(e) => setScalar(parseFloat(e.target.value) || 0)}
                className="w-16 h-14 text-center bg-surface border-none focus:ring-2 focus:ring-accent-teal outline-none font-mono text-lg shadow-sm rounded-sm text-on-surface"
              />
            </div>
          ) : (
            <MatrixInput matrix={matrixB} label="Matrix B" onUpdate={(r, c, v) => updateMatrix('B', r, c, v)} />
          )}

          <div className="text-3xl font-black text-black/10 dark:text-white/10 rotate-90 lg:rotate-0">=</div>

          {/* Result Matrix */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black text-accent-teal mb-3 uppercase tracking-[0.2em]">Result Matrix</span>
            <div className="relative p-5 border-l-2 border-r-2 border-accent-teal/50 bg-accent-teal/5 transition-colors rounded-sm">
              <div className="grid grid-cols-2 gap-3">
                {results.result.map((row, rowIndex) => 
                  row.map((val, colIndex) => (
                    <div
                      key={`res-${rowIndex}-${colIndex}`}
                      className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-accent-teal font-black bg-surface rounded-sm shadow-inner text-lg md:text-xl"
                    >
                      {val}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Breakdown */}
        <div className="mt-8 bg-surface-container-low rounded p-8 border-none">
          <h5 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] mb-6">Analytical Breakdown</h5>
          <div className="grid md:grid-cols-2 gap-6">
            {results.steps.map((step, i) => (
              <div key={i} className="bg-surface px-6 py-4 rounded shadow-sm hover:shadow-md transition-all text-on-surface/90 overflow-x-auto">
                <InlineMath math={step} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatrixVisualizer;
