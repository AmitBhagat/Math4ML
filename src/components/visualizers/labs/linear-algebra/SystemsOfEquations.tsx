import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const SystemsOfEquations = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-8, 8, 8, -8],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // Line 1: a1*x + b1*y = c1
        const a1 = board.create('slider', [[-7, -5], [-3, -5], [-5, 1, 5]], { name: renderTex('a_1'), color: '#E98074' });
        const b1 = board.create('slider', [[-7, -6], [-3, -6], [-5, 2, 5]], { name: renderTex('b_1'), color: '#E98074' });
        const c1 = board.create('slider', [[-7, -7], [-3, -7], [-10, 4, 10]], { name: renderTex('c_1'), color: '#E98074' });

        // Line 2: a2*x + b2*y = c2
        const a2 = board.create('slider', [[1, -5], [5, -5], [-5, 3, 5]], { name: renderTex('a_2'), color: '#D8C3A5' });
        const b2 = board.create('slider', [[1, -6], [5, -6], [-5, -1, 5]], { name: renderTex('b_2'), color: '#D8C3A5' });
        const c2 = board.create('slider', [[1, -7], [5, -7], [-10, -2, 10]], { name: renderTex('c_2'), color: '#D8C3A5' });

        const line1 = board.create('line', [() => -c1.Value(), () => a1.Value(), () => b1.Value()], { strokeColor: '#E98074', strokeWidth: 2 });
        const line2 = board.create('line', [() => -c2.Value(), () => a2.Value(), () => b2.Value()], { strokeColor: '#D8C3A5', strokeWidth: 2 });

        const intersect = board.create('intersection', [line1, line2], { name: renderTex('\\text{Solution}'), color: '#8E9775', size: 4 });

        // MathJax: Current Solution
        board.create('text', [-7.5, 7, () => {
            const x = intersect.X().toFixed(2);
            const y = intersect.Y().toFixed(2);
            return renderTex(`(x, y) = (${x}, ${y})`, true);
        }], { fontSize: 18, parse: false });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, []);

    return (
        <div 
            ref={boardRef} 
            className="jxgbox rounded-3xl shadow-2xl border border-white/10" 
            style={{ width: '100%', aspectRatio: '1/1', maxWidth: '700px' }} 
        />
    );
};

export default SystemsOfEquations;
