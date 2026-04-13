import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';

const DotProduct = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = true;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-7, 7, 7, -7],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        const a = board.create('point', [4, 1], { name: '\\mathbf{a}', color: '#D8C3A5', size: 4 });
        const b = board.create('point', [1, 4], { name: '\\mathbf{b}', color: '#E98074', size: 4 });

        board.create('arrow', [[0, 0], a], { strokeColor: '#D8C3A5', strokeWidth: 3 });
        board.create('arrow', [[0, 0], b], { strokeColor: '#E98074', strokeWidth: 3 });

        // Projection of a onto b
        const dot = () => a.X() * b.X() + a.Y() * b.Y();
        const magBSq = () => b.X()**2 + b.Y()**2;
        const scalar = () => dot() / (magBSq() || 1);
        
        const proj = board.create('point', [
            () => b.X() * scalar(),
            () => b.Y() * scalar()
        ], { name: 'proj_{\\mathbf{b}}\\mathbf{a}', color: '#8E9775', size: 3 });

        board.create('segment', [a, proj], { strokeColor: '#8E9775', dash: 2, strokeWidth: 1 });
        board.create('arrow', [[0, 0], proj], { strokeColor: '#8E9775', strokeWidth: 4 });

        // MathJax: Dot Product Formula
        board.create('text', [-6.5, 6, () => {
            const d = dot().toFixed(2);
            return `\\[\\mathbf{a} \\cdot \\mathbf{b} = a_x b_x + a_y b_y = ${d}\\]`;
        }], { fontSize: 18 });

        board.create('text', [-6.5, 4.5, () => {
            const angle = Math.acos(dot() / (Math.sqrt(a.X()**2 + a.Y()**2) * Math.sqrt(magBSq()) || 1)) * (180 / Math.PI);
            return `\\[\\theta = ${angle.toFixed(1)}^\\circ\\]`;
        }], { fontSize: 16, color: '#D8C3A5' });

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
