import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const Jacobian2D = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-5, 5, 5, -5],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // Mapping: f(x, y) = (u, v)
        // Let's use a subtle swirl/warp
        const warpX = (x: number, y: number) => x + 0.1 * y * y;
        const warpY = (x: number, y: number) => y + 0.1 * x * x;

        // Jacobian elements (Partial derivatives)
        const du_dx = (x: number, y: number) => 1;
        const du_dy = (x: number, y: number) => 0.2 * y;
        const dv_dx = (x: number, y: number) => 0.2 * x;
        const dv_dy = (x: number, y: number) => 1;

        // Visual Deformed Grid
        for (let i = -4; i <= 4; i++) {
            // Vertical lines warped
            board.create('curve', [
                (t: number) => warpX(i, t),
                (t: number) => warpY(i, t),
                -4, 4
            ], { strokeColor: '#D8C3A5', strokeWidth: 1, opacity: 0.3 });
            
            // Horizontal lines warped
            board.create('curve', [
                (t: number) => warpX(t, i),
                (t: number) => warpY(t, i),
                -4, 4
            ], { strokeColor: '#D8C3A5', strokeWidth: 1, opacity: 0.3 });
        }

        // Interactive Point P in the domain (represented on the warped range)
        const p = board.create('point', [1, 1], { 
            name: renderTex('\\mathbf{x}'), 
            color: '#E98074', 
            size: 5 
        });

        // The point P' = f(P)
        const pPrime = board.create('point', [
            () => warpX(p.X(), p.Y()),
            () => warpY(p.X(), p.Y())
        ], { 
            name: renderTex('f(\\mathbf{x})'), 
            color: '#8E9775', 
            size: 6 
        });

        // Area element visualizing local linearity
        // Small square at P transforms to parallelogram defined by Jacobian columns
        const h = 0.5;
        const localArea = board.create('polygon', [
            pPrime,
            [() => pPrime.X() + du_dx(p.X(), p.Y()) * h, () => pPrime.Y() + dv_dx(p.X(), p.Y()) * h],
            [() => pPrime.X() + (du_dx(p.X(), p.Y()) + du_dy(p.X(), p.Y())) * h, () => pPrime.Y() + (dv_dx(p.X(), p.Y()) + dv_dy(p.X(), p.Y())) * h],
            [() => pPrime.X() + du_dy(p.X(), p.Y()) * h, () => pPrime.Y() + dv_dy(p.X(), p.Y()) * h]
        ], {
            fillColor: '#E98074',
            fillOpacity: 0.3,
            strokeColor: '#E98074',
            strokeWidth: 2
        });

        // Math Info
        board.create('text', [-4.5, 4.5, () => {
            const x = p.X();
            const y = p.Y();
            const det = (du_dx(x, y) * dv_dy(x, y) - du_dy(x, y) * dv_dx(x, y)).toFixed(3);
            return renderTex(`\\det(J) = ${det}`, true);
        }], { fontSize: 20, parse: false });

        board.create('text', [-4.5, 3.2, () => {
            return renderTex(`\\text{Local Area Scaling Factore}`, false);
        }], { fontSize: 13, color: '#aaaaaa', parse: false });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, []);

    return (
        <div 
            ref={boardRef} 
            className="jxgbox rounded-3xl shadow-2xl border border-white/10" 
            style={{ width: '100%', aspectRatio: '1/1', maxWidth: '750px' }} 
        />
    );
};

export default Jacobian2D;
