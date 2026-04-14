import React, { useEffect, useRef, useState } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const MatrixInverse = () => {
    const boardRef = useRef<HTMLDivElement>(null);
    const [isInverting, setIsInverting] = useState(false);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-10, 8, 10, -10],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // Matrix A: [[a,b],[c,d]]
        const a = board.create('slider', [[-7, -4.5], [-3, -4.5], [-2, 1, 2]], { name: renderTex('a'), color: '#E98074' });
        const b = board.create('slider', [[-7, -5.5], [-3, -5.5], [-2, 0, 2]], { name: renderTex('b'), color: '#E98074' });
        const c = board.create('slider', [[1, -4.5], [5, -4.5], [-2, 0, 2]], { name: renderTex('c'), color: '#D8C3A5' });
        const d = board.create('slider', [[1, -5.5], [5, -5.5], [-2, 1, 2]], { name: renderTex('d'), color: '#D8C3A5' });

        const p = board.create('point', [2, 1], { name: renderTex('\\mathbf{v}'), color: '#D8C3A5', size: 4 });
        
        // Transformed point v' = Av
        const p2 = board.create('point', [
            () => a.Value() * p.X() + b.Value() * p.Y(),
            () => c.Value() * p.X() + d.Value() * p.Y()
        ], { name: renderTex("\\mathbf{v}' = A\\mathbf{v}"), color: '#E98074', size: 4 });

        board.create('arrow', [[0, 0], p], { strokeColor: '#D8C3A5', dash: 2, opacity: 0.5 });
        board.create('arrow', [[0, 0], p2], { strokeColor: '#E98074', strokeWidth: 3 });

        // Step-by-Step Inverse Calculation
        board.create('text', [-9.5, 7.5, () => {
            const valA = a.Value();
            const valB = b.Value();
            const valC = c.Value();
            const valD = d.Value();
            const det = valA * valD - valB * valC;
            
            if (Math.abs(det) < 0.01) {
                return renderTex(`\\det(A) = 0 \\implies \\text{Non-invertible}`, true);
            }

            return renderTex(`
                \\begin{aligned}
                \\det(A) &= (${valA.toFixed(1)})(${valD.toFixed(1)}) - (${valB.toFixed(1)})(${valC.toFixed(1)}) = ${det.toFixed(2)} \\\\
                A^{-1} &= \\frac{1}{${det.toFixed(2)}} \\begin{bmatrix} ${valD.toFixed(1)} & ${(-valB).toFixed(1)} \\\\ ${(-valC).toFixed(1)} & ${valA.toFixed(1)} \\end{bmatrix} \\\\
                &= \\begin{bmatrix} ${(valD/det).toFixed(2)} & ${(-valB/det).toFixed(2)} \\\\ ${(-valC/det).toFixed(2)} & ${(valA/det).toFixed(2)} \\end{bmatrix}
                \\end{aligned}
            `, true);
        }], { fontSize: 13, parse: false, anchorX: 'left', anchorY: 'top' });

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
