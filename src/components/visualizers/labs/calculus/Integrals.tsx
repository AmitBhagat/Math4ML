import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const Integrals = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
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
        const a = board.create('slider', [[1, -1.5], [4, -1.5], [0, 1, 10]], { name: renderTex('a'), color: '#E98074' });
        const b = board.create('slider', [[6, -1.5], [9, -1.5], [0, 5, 10]], { name: renderTex('b'), color: '#E98074' });

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
            // Use the value directly from the Riemann Sum element for consistency
            const val = os.Value().toFixed(3);
            return renderTex(`\\int_{${start}}^{${end}} f(x) \\, dx \\approx ${val}`, true);
        }], { fontSize: 20, parse: false });

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
