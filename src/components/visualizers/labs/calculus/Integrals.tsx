import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';

const Integrals = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = true;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-1, 6, 12, -1],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // Function: f(x) = sin(x) + 3
        const f = (x: number) => Math.sin(x) + 3;

        const graph = board.create('functiongraph', [f], { strokeColor: '#8E9775', strokeWidth: 3 });

        // Lower and Upper bounds (Sliders)
        const a = board.create('slider', [[1, -1.5], [4, -1.5], [0, 1, 10]], { name: 'a', color: '#E98074' });
        const b = board.create('slider', [[6, -1.5], [9, -1.5], [0, 5, 10]], { name: 'b', color: '#E98074' });

        // Riemann Sum Integral
        const os = board.create('riemannsum', [f, () => 20, "middle", () => a.Value(), () => b.Value()], {
            fillColor: '#E98074',
            fillOpacity: 0.2,
            strokeColor: '#E98074',
            strokeOpacity: 0.3
        });

        // MathJax: Integral Notation
        board.create('text', [1, 5, () => {
            const start = a.Value().toFixed(1);
            const end = b.Value().toFixed(1);
            // Riemann sum value is roughly the integral value here
            const val = JXG.Math.Numerics.integral([a.Value(), b.Value()], f).toFixed(3);
            return `\\[\\int_{${start}}^{${end}} f(x) \\, dx = ${val}\\]`;
        }], { fontSize: 20 });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, []);

    return (
        <div 
            ref={boardRef} 
            className="jxgbox rounded-3xl shadow-2xl border border-white/10" 
            style={{ width: '100%', aspectRatio: '1/1', maxWidth: '750px' }} 
        />
    );
};

export default Integrals;
