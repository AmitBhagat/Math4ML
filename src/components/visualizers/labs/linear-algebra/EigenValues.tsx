import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';

const EigenValues = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = true;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-8, 8, 8, -8],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // Matrix Inputs (Sliders)
        const a = board.create('slider', [[-7, -4.5], [-3, -4.5], [-5, 3, 5]], { name: 'a', color: '#E98074' });
        const b = board.create('slider', [[-7, -5.5], [-3, -5.5], [-5, 1, 5]], { name: 'b', color: '#E98074' });
        const c = board.create('slider', [[1, -4.5], [5, -4.5], [-5, 2, 5]], { name: 'c', color: '#D8C3A5' });
        const d = board.create('slider', [[1, -5.5], [5, -5.5], [-5, 2, 5]], { name: 'd', color: '#D8C3A5' });

        // Unit vector v (movable on circle)
        const circ = board.create('circle', [[0, 0], 1], { visible: false });
        const p = board.create('glider', [1, 0, circ], { name: 'v', color: '#D8C3A5', size: 4 });
        board.create('arrow', [[0, 0], p], { strokeColor: '#D8C3A5', strokeWidth: 2 });

        // Transformed vector Av
        const p2 = board.create('point', [
            () => a.Value() * p.X() + b.Value() * p.Y(),
            () => c.Value() * p.X() + d.Value() * p.Y()
        ], { name: 'Av', color: '#E98074', size: 4 });
        board.create('arrow', [[0, 0], p2], { strokeColor: '#E98074', strokeWidth: 3 });

        // MathJax: Characteristic Equation
        board.create('text', [-7.5, 7, () => {
            const tr = a.Value() + d.Value();
            const det = a.Value() * d.Value() - b.Value() * c.Value();
            const trStr = tr >= 0 ? `- ${tr.toFixed(1)}` : `+ ${Math.abs(tr).toFixed(1)}`;
            const detStr = det >= 0 ? `+ ${det.toFixed(1)}` : `- ${Math.abs(det).toFixed(1)}`;
            return `\\[\\det(A - \\lambda I) = \\lambda^2 ${trStr}\\lambda ${detStr} = 0\\]`;
        }], { fontSize: 16 });

        // MathJax: Current Eigenvalues (Approximate)
        board.create('text', [-7.5, 5, () => {
            const tr = a.Value() + d.Value();
            const det = a.Value() * d.Value() - b.Value() * c.Value();
            const disc = tr * tr - 4 * det;
            if (disc < 0) return '\\[\\lambda \\in \\mathbb{C} \\text{ (Complex)}\\]';
            const l1 = (tr + Math.sqrt(disc)) / 2;
            const l2 = (tr - Math.sqrt(disc)) / 2;
            return `\\[\\lambda_1 = ${l1.toFixed(2)}, \\, \\lambda_2 = ${l2.toFixed(2)}\\]`;
        }], { fontSize: 16, color: '#E98074' });

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

export default EigenValues;
