import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const DotProduct = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-9, 9, 9, -9],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        const a = board.create('point', [4, 1], { name: renderTex('\\mathbf{a}'), color: '#D8C3A5', size: 4 });
        const b = board.create('point', [1, 4], { name: renderTex('\\mathbf{b}'), color: '#E98074', size: 4 });

        board.create('arrow', [[0, 0], a], { strokeColor: '#D8C3A5', strokeWidth: 3 });
        board.create('arrow', [[0, 0], b], { strokeColor: '#E98074', strokeWidth: 3 });

        // Projection of a onto b
        const dot = () => a.X() * b.X() + a.Y() * b.Y();
        const magBSq = () => b.X()**2 + b.Y()**2;
        const scalar = () => dot() / (magBSq() || 1);
        
        const proj = board.create('point', [
            () => b.X() * scalar(),
            () => b.Y() * scalar()
        ], { name: renderTex('\\text{proj}_{\\mathbf{b}}\\mathbf{a}'), color: '#8E9775', size: 3 });

        board.create('segment', [a, proj], { strokeColor: '#8E9775', dash: 2, strokeWidth: 1 });
        board.create('arrow', [[0, 0], proj], { strokeColor: '#8E9775', strokeWidth: 4 });

        // MathJax: Step-by-Step Dot Product Formula
        board.create('text', [-6.5, 6, () => {
            const ax = a.X().toFixed(2);
            const ay = a.Y().toFixed(2);
            const bx = b.X().toFixed(2);
            const by = b.Y().toFixed(2);
            const dotVal = dot();
            
            return renderTex(`
                \\begin{aligned}
                \\mathbf{a} \\cdot \\mathbf{b} &= a_x b_x + a_y b_y \\\\
                &= (${ax})( ${bx}) + (${ay})( ${by}) \\\\
                &= ${dotVal.toFixed(2)}
                \\end{aligned}
            `, true);
        }], { fontSize: 13, parse: false, color: '#D8C3A5' });

        board.create('text', [-6.5, 3.5, () => {
            const magA = Math.sqrt(a.X()**2 + a.Y()**2);
            const magB = Math.sqrt(magBSq());
            const angle = Math.acos(dot() / (magA * magB || 1)) * (180 / Math.PI);
            return renderTex(`\\theta = ${angle.toFixed(1)}^\\circ`, true);
        }], { fontSize: 13, color: '#E98074', parse: false });

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

export default DotProduct;
