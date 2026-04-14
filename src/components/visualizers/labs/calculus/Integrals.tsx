import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const Integrals = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-4, 7, 13, -2],
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

        // MathJax: Step-by-Step Integral (Fundamental Theorem of Calculus)
        board.create('text', [1, 5, () => {
            const start = a.Value();
            const end = b.Value();
            const val = os.Value().toFixed(3);
            
            // Antiderivative of sin(x) + 3 is -cos(x) + 3x
            const F = (x: number) => -Math.cos(x) + 3 * x;
            const fa = F(start).toFixed(2);
            const fb = F(end).toFixed(2);

            return renderTex(`
                \\begin{aligned}
                \\int_{a}^{b} (\\sin x + 3) \\, dx &= \\Big[ -\\cos x + 3x \\Big]_{${start.toFixed(1)}}^{${end.toFixed(1)}} \\\\
                &= (${fb}) - (${fa}) \\\\
                &= ${val}
                \\end{aligned}
            `, true);
        }], { fontSize: 13, parse: false });

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
