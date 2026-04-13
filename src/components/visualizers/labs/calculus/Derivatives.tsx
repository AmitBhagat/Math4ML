import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';

const Derivatives = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = true;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-4, 6, 6, -1],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // Function: f(w) = w^2 / 4 + 1
        const f = (x: number) => x * x / 4 + 1;
        const df = (x: number) => x / 2;

        const graph = board.create('functiongraph', [f], { strokeColor: '#8E9775', strokeWidth: 3, opacity: 0.6 });

        // Movable point on the curve
        const p = board.create('glider', [2, 2, graph], { name: 'w', color: '#E98074', size: 5 });

        // Tangent line
        const tangent = board.create('tangent', [p], { strokeColor: '#E98074', strokeWidth: 2, dash: 2 });

        // Slope Vector (Visualization of Gradient)
        const vTip = board.create('point', [
            () => p.X() + 1,
            () => p.Y() + df(p.X())
        ], { visible: false });
        board.create('arrow', [p, vTip], { strokeColor: '#E98074', strokeWidth: 4 });

        // MathJax: Gradient Calculation
        board.create('text', [-3.5, 5, () => {
            const x = p.X();
            const grad = df(x);
            return `\\[\\frac{dL}{dw} = ${grad.toFixed(2)}\\]`;
        }], { fontSize: 18 });

        board.create('text', [-3.5, 3.5, () => {
            const grad = df(p.X());
            if (Math.abs(grad) < 0.1) return '\\text{Local Minimum Reach}';
            return grad > 0 ? '\\text{Gradient > 0: Move Left}' : '\\text{Gradient < 0: Move Right}';
        }], { fontSize: 14, color: '#E98074' });

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

export default Derivatives;
