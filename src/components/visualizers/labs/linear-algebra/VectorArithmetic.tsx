import React, { useEffect, useRef, useState } from 'react';
import JXG from 'jsxgraph';

const VectorArithmetic = () => {
    const boardRef = useRef<HTMLDivElement>(null);
    const boardInstance = useRef<any>(null);
    const [mode, setMode] = useState<'add' | 'sub' | 'scalar'>('add');

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = true;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-8, 8, 8, -8],
            axis: true,
            showNavigation: true,
            showCopyright: false
        });
        boardInstance.current = board;

        // Sliders & Controls
        const k = board.create('slider', [[-7, -6], [-3, -6], [-3, 1.5, 3]], { name: 'k', color: '#E98074' });

        // Vector A
        const a = board.create('point', [3, 2], { name: '\\mathbf{a}', color: '#D8C3A5', size: 4 });
        const arrowA = board.create('arrow', [[0, 0], a], { strokeColor: '#D8C3A5', strokeWidth: 3 });

        // Vector B
        const b = board.create('point', [1, 4], { 
            name: '\\mathbf{b}', 
            color: '#8E9775', 
            size: 4,
            visible: () => mode !== 'scalar'
        });
        const arrowB = board.create('arrow', [[0, 0], b], { 
            strokeColor: '#8E9775', 
            strokeWidth: 3,
            visible: () => mode !== 'scalar'
        });

        // Resultant Vector
        const resX = () => {
            if (mode === 'add') return a.X() + b.X();
            if (mode === 'sub') return a.X() - b.X();
            return a.X() * k.Value();
        };
        const resY = () => {
            if (mode === 'add') return a.Y() + b.Y();
            if (mode === 'sub') return a.Y() - b.Y();
            return a.Y() * k.Value();
        };

        const res = board.create('point', [resX, resY], { 
            name: '\\mathbf{v}', 
            color: '#E98074', 
            size: 5,
            face: 'square'
        });
        board.create('arrow', [[0, 0], res], { strokeColor: '#E98074', strokeWidth: 4 });

        // Helper lines (Parallelogram/Tip-to-tail)
        board.create('segment', [a, res], { 
            strokeColor: '#8E9775', 
            dash: 2, 
            strokeWidth: 1,
            visible: () => mode === 'add'
        });
        board.create('segment', [b, res], { 
            strokeColor: '#D8C3A5', 
            dash: 2, 
            strokeWidth: 1,
            visible: () => mode === 'add'
        });

        // MathJax Formulas
        board.create('text', [-7.5, 7, () => {
            const sym = mode === 'add' ? '+' : mode === 'sub' ? '-' : '\\cdot';
            const resLabel = mode === 'scalar' ? `k\\mathbf{a}` : `\\mathbf{a} ${sym} \\mathbf{b}`;
            return `\\[${resLabel} = \\begin{bmatrix} ${resX().toFixed(1)} \\\\ ${resY().toFixed(1)} \\end{bmatrix}\\]`;
        }], { fontSize: 18 });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, [mode]);

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="flex gap-2 mb-6">
                {(['add', 'sub', 'scalar'] as const).map(m => (
                    <button
                        key={m}
                        onClick={() => setMode(m)}
                        className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all
                            ${mode === m 
                                ? "bg-accent-premium text-white shadow-lg scale-105" 
                                : "bg-accent-premium/5 text-accent-premium hover:bg-accent-premium/10 border border-accent-premium/20"}`}
                    >
                        {m === 'add' ? 'Addition' : m === 'sub' ? 'Subtraction' : 'Scalar Mul'}
                    </button>
                ))}
            </div>
            <div 
                ref={boardRef} 
                className="jxgbox rounded-3xl shadow-2xl border border-white/10" 
                style={{ width: '100%', aspectRatio: '1/1', maxWidth: '700px' }} 
            />
        </div>
    );
};

export default VectorArithmetic;
