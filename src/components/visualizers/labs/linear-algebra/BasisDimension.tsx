import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const BasisDimension = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-7, 7, 7, -7],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // Basis Vectors
        const e1 = board.create('point', [1, 0], { name: renderTex('\\mathbf{e}_1'), color: '#E98074', size: 4 });
        const e2 = board.create('point', [0, 1], { name: renderTex('\\mathbf{e}_2'), color: '#D8C3A5', size: 4 });

        board.create('arrow', [[0, 0], e1], { strokeColor: '#E98074', strokeWidth: 3 });
        board.create('arrow', [[0, 0], e2], { strokeColor: '#D8C3A5', strokeWidth: 3 });

        // Arbitrary vector v spanned by e1, e2
        const c1 = board.create('slider', [[-6, -5], [-2, -5], [-5, 2, 5]], { name: renderTex('c_1'), color: '#E98074' });
        const c2 = board.create('slider', [[1, -5], [5, -5], [-5, 3, 5]], { name: renderTex('c_2'), color: '#D8C3A5' });

        const v = board.create('point', [
            () => c1.Value() * e1.X() + c2.Value() * e2.X(),
            () => c1.Value() * e1.Y() + c2.Value() * e2.Y()
        ], { name: renderTex('\\mathbf{v} = c_1 \\mathbf{e}_1 + c_2 \\mathbf{e}_2'), color: '#8E9775', size: 4 });

        board.create('arrow', [[0, 0], v], { strokeColor: '#8E9775', strokeWidth: 3 });

        // Helper components
        const p1 = board.create('point', [
            () => c1.Value() * e1.X(), 
            () => c1.Value() * e1.Y()
        ], { visible: false });

        board.create('segment', [p1, v], { strokeColor: '#D8C3A5', dash: 2 });

        // MathJax: Linear Independence Check
        board.create('text', [-6.5, 6, () => {
            const det = e1.X() * e2.Y() - e1.Y() * e2.X();
            const independent = Math.abs(det) > 0.1;
            const status = independent ? "\\text{Independent (Basis for } \\mathbb{R}^2)" : "\\text{Dependent (Not a Basis)}";
            return renderTex(`\\text{Status: } ${status}`, false);
        }], { fontSize: 16, parse: false });

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

export default BasisDimension;
