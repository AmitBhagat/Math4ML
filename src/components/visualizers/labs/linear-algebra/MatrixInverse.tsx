import React, { useEffect, useRef, useState } from 'react';
import JXG from 'jsxgraph';

const MatrixInverse = () => {
    const boardRef = useRef<HTMLDivElement>(null);
    const [isInverting, setIsInverting] = useState(false);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = true;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-8, 8, 8, -8],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // Matrix A: [[a,b],[c,d]]
        const a = board.create('slider', [[-7, -4.5], [-3, -4.5], [-2, 1, 2]], { name: 'a', color: '#E98074' });
        const b = board.create('slider', [[-7, -5.5], [-3, -5.5], [-2, 0, 2]], { name: 'b', color: '#E98074' });
        const c = board.create('slider', [[1, -4.5], [5, -4.5], [-2, 0, 2]], { name: 'c', color: '#D8C3A5' });
        const d = board.create('slider', [[1, -5.5], [5, -5.5], [-2, 1, 2]], { name: 'd', color: '#D8C3A5' });

        const p = board.create('point', [2, 1], { name: 'v', color: '#D8C3A5', size: 4 });
        
        // Transformed point v' = Av
        const p2 = board.create('point', [
            () => a.Value() * p.X() + b.Value() * p.Y(),
            () => c.Value() * p.X() + d.Value() * p.Y()
        ], { name: "v' = Av", color: '#E98074', size: 4 });

        board.create('arrow', [[0, 0], p], { strokeColor: '#D8C3A5', dash: 2, opacity: 0.5 });
        board.create('arrow', [[0, 0], p2], { strokeColor: '#E98074', strokeWidth: 3 });

        // Determinant check
        board.create('text', [-7.5, 7, () => {
            const det = a.Value() * d.Value() - b.Value() * c.Value();
            if (Math.abs(det) < 0.01) return '\\[\\det(A) = 0 \\implies \\text{A is Singular (No Inverse)}\\]';
            return `\\[\\det(A) = ${det.toFixed(2)}\\]`;
        }], { fontSize: 18 });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, []);

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div 
                ref={boardRef} 
                className="jxgbox rounded-3xl shadow-2xl border border-white/10" 
                style={{ width: '100%', aspectRatio: '1/1', maxWidth: '700px' }} 
            />
        </div>
    );
};

export default MatrixInverse;
