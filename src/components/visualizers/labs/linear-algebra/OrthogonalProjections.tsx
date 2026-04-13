import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';

const OrthogonalProjections = () => {
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

        // Subspace (Line through u)
        const u = board.create('point', [4, 2], { name: 'u (Subspace)', color: '#D8C3A5', size: 4 });
        const line = board.create('line', [[0, 0], u], { strokeColor: '#D8C3A5', dash: 2, strokeWidth: 1 });

        // Vector to project
        const v = board.create('point', [1, 5], { name: 'v', color: '#E98074', size: 4 });
        board.create('arrow', [[0, 0], v], { strokeColor: '#E98074', strokeWidth: 3 });

        // Projection logic
        const dot = () => v.X() * u.X() + v.Y() * u.Y();
        const magUSq = () => u.X()**2 + u.Y()**2;
        const scalar = () => dot() / (magUSq() || 1);
        
        const proj = board.create('point', [
            () => u.X() * scalar(),
            () => u.Y() * scalar()
        ], { name: 'proj_u v', color: '#8E9775', size: 3 });

        board.create('arrow', [[0, 0], proj], { strokeColor: '#8E9775', strokeWidth: 4 });
        board.create('segment', [v, proj], { strokeColor: '#8E9775', dash: 2, strokeWidth: 1 });

        // MathJax: Projection Formula
        board.create('text', [-6.5, 6, () => {
            return `\\[\\text{proj}_{\\mathbf{u}} \\mathbf{v} = \\frac{\\mathbf{v} \\cdot \\mathbf{u}}{\\|\\mathbf{u}\\|^2} \\mathbf{u}\\]`;
        }], { fontSize: 18 });

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

export default OrthogonalProjections;
