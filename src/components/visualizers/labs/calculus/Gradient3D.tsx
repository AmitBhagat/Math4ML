import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const Gradient3D = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-5, 5, 5, -5],
            axis: false,
            showNavigation: true,
            showCopyright: false
        });

        const box = [-3, 3];
        const view = board.create('view3d', [[-3, -1], [6, 6], [box, box, box]], {
            projection: 'central',
            xPlaneRear: { visible: false },
            yPlaneRear: { visible: false }
        });

        // Surface: f(x, y) = 0.3 * (x^2 + y^2) - 2
        const F_txt = '0.3 * (x^2 + y^2) - 2';
        const F = board.jc.snippet(F_txt, true, 'x,y');
        const Fdx = board.jc.snippet(`D(${F_txt}, x)`, true, 'x,y');
        const Fdy = board.jc.snippet(`D(${F_txt}, y)`, true, 'x,y');

        view.create('functiongraph3d', [F, box, box], {
            strokeWidth: 0.5,
            stepsU: 40,
            stepsV: 40,
            strokeColor: '#D8C3A5',
            fillColor: '#D8C3A5',
            fillOpacity: 0.2
        });

        // Interactive Sliders for (x0, y0)
        const x0 = board.create('slider', [[-4.5, -4], [-2, -4], [-2.5, 1.5, 2.5]], { name: renderTex('x'), color: '#E98074' });
        const y0 = board.create('slider', [[1, -4], [3.5, -4], [-2.5, 1.5, 2.5]], { name: renderTex('y'), color: '#8E9775' });

        // Point on Surface
        const A = view.create('point3d', [() => [x0.Value(), y0.Value(), F(x0.Value(), y0.Value())]], {
            name: renderTex('P'),
            color: '#E98074',
            size: 4
        });

        // Gradient Vector on Surface
        // We show the gradient as an arrow starting at A
        // Scale the vector for better visibility
        const scale = 0.5;
        const gradTip = view.create('point3d', [
            () => x0.Value() + Fdx(x0.Value(), y0.Value()) * scale,
            () => y0.Value() + Fdy(x0.Value(), y0.Value()) * scale,
            () => F(x0.Value(), y0.Value()) + (Fdx(x0.Value(), y0.Value())**2 + Fdy(x0.Value(), y0.Value())**2) * 0.1 // Slight vertical tilt
        ], { visible: false });

        view.create('line3d', [A, gradTip, [0, 1]], { 
            strokeColor: '#E98074', 
            strokeWidth: 3, 
            lastArrow: true 
        });

        // Projection on XY plane (Contour view)
        const Axy = view.create('point3d', [() => x0.Value(), () => y0.Value(), -3], { visible: true, size: 2, color: '#aaaaaa' });
        const gradAxyTip = view.create('point3d', [
            () => x0.Value() + Fdx(x0.Value(), y0.Value()) * scale,
            () => y0.Value() + Fdy(x0.Value(), y0.Value()) * scale,
            -3
        ], { visible: false });
        view.create('line3d', [Axy, gradAxyTip, [0, 1]], { 
            strokeColor: '#8E9775', 
            strokeWidth: 2, 
            lastArrow: true 
        });

        // MathJax
        board.create('text', [-4.5, 4.5, () => {
            const dx = Fdx(x0.Value(), y0.Value()).toFixed(2);
            const dy = Fdy(x0.Value(), y0.Value()).toFixed(2);
            return renderTex(`\\nabla f = \\begin{bmatrix} ${dx} \\\\ ${dy} \\end{bmatrix}`, true);
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

export default Gradient3D;
