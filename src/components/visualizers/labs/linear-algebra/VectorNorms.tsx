import React, { useEffect, useRef, useState } from 'react';
import JXG from 'jsxgraph';

const VectorNorms = () => {
    const boardRef = useRef<HTMLDivElement>(null);
    const [normType, setNormType] = useState<'l1' | 'l2' | 'linf'>('l2');

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = true;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-4, 4, 4, -4],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        const p = board.create('point', [1, 1], { name: 'v', color: '#E98074', size: 5 });
        board.create('arrow', [[0, 0], p], { strokeColor: '#E98074', strokeWidth: 3 });

        // Unit Balls
        // L2 (Circle)
        board.create('circle', [[0, 0], 1], { 
            strokeColor: '#D8C3A5', 
            visible: () => normType === 'l2', 
            strokeWidth: 2,
            fillColor: '#D8C3A5',
            fillOpacity: 0.1
        });

        // L1 (Diamond)
        board.create('polygon', [[1, 0], [0, 1], [-1, 0], [0, -1]], { 
            visible: () => normType === 'l1', 
            strokeColor: '#D8C3A5',
            fillColor: '#D8C3A5',
            fillOpacity: 0.1
        });

        // Linf (Square)
        board.create('polygon', [[1, 1], [-1, 1], [-1, -1], [1, -1]], { 
            visible: () => normType === 'linf', 
            strokeColor: '#D8C3A5',
            fillColor: '#D8C3A5',
            fillOpacity: 0.1
        });

        board.create('text', [-3.5, 3.5, () => {
            const x = Math.abs(p.X());
            const y = Math.abs(p.Y());
            let val = 0;
            let label = "";
            if (normType === 'l1') {
                val = x + y;
                label = "||v||_1 = |x| + |y|";
            } else if (normType === 'l2') {
                val = Math.sqrt(x*x + y*y);
                label = "||v||_2 = \\sqrt{x^2 + y^2}";
            } else {
                val = Math.max(x, y);
                label = "||v||_\\infty = \\max(|x|, |y|)";
            }
            return `\\[${label} = ${val.toFixed(2)}\\]`;
        }], { fontSize: 18 });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, [normType]);

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="flex gap-2 mb-6">
                {(['l1', 'l2', 'linf'] as const).map(m => (
                    <button
                        key={m}
                        onClick={() => setNormType(m)}
                        className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all
                            ${normType === m 
                                ? "bg-accent-premium text-white shadow-lg scale-105" 
                                : "bg-accent-premium/5 text-accent-premium hover:bg-accent-premium/10 border border-accent-premium/20"}`}
                    >
                        {m === 'l1' ? 'L1 Norm' : m === 'l2' ? 'L2 Norm' : 'L-Infinity'}
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

export default VectorNorms;
