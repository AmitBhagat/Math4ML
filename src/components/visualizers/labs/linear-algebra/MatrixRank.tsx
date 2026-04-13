import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';

const MatrixRank = () => {
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

        // Column vectors of matrix A = [c1, c2]
        const c1 = board.create('point', [4, 1], { name: 'c1', color: '#E98074', size: 4 });
        const c2 = board.create('point', [1, 3], { name: 'c2', color: '#D8C3A5', size: 4 });

        board.create('arrow', [[0, 0], c1], { strokeColor: '#E98074', strokeWidth: 3 });
        board.create('arrow', [[0, 0], c2], { strokeColor: '#D8C3A5', strokeWidth: 3 });

        // Determinant/Rank logic
        const getRank = () => {
            const det = c1.X() * c2.Y() - c1.Y() * c2.X();
            if (Math.abs(det) < 0.1) {
                // Check if it's the zero matrix
                if (Math.max(Math.abs(c1.X()), Math.abs(c1.Y()), Math.abs(c2.X()), Math.abs(c2.Y())) < 0.05) return 0;
                return 1;
            }
            return 2;
        };

        // Span Visualization
        board.create('line', [[0,0], c1], { strokeColor: '#E98074', strokeWidth: 1, dash: 2, visible: () => getRank() === 1 });

        board.create('text', [-7.5, 7, () => {
            const rank = getRank();
            return `\\[\\text{Rank}(A) = ${rank}\\]`;
        }], { fontSize: 24, fontStyle: 'bold' });

        board.create('text', [-7.5, 5, () => {
            const rank = getRank();
            if (rank === 2) return '\\text{Full Rank: Spans } \\mathbb{R}^2';
            if (rank === 1) return '\\text{Rank Deficient: Space collapses to a line}';
            return '\\text{Zero Matrix: Space collapses to a point}';
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

export default MatrixRank;
