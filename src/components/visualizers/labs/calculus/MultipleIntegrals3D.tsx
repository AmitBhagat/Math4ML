import React, { useEffect, useRef, useState } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const MultipleIntegrals3D = () => {
    const boardRef = useRef<HTMLDivElement>(null);
    const [numIntervals, setNumIntervals] = useState(4);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-5, 5, 5, -5],
            axis: false,
            showNavigation: true,
            showCopyright: false
        });

        const boxSize = [-3, 3];
        const view = board.create('view3d', [[-3, -1], [6, 6], [boxSize, boxSize, boxSize]], {
            projection: 'central',
            xPlaneRear: { visible: false },
            yPlaneRear: { visible: false }
        });

        const F_txt = '0.1 * (x^2 + y^2) + 0.5';
        const F = board.jc.snippet(F_txt, true, 'x,y');

        // Surface plot
        view.create('functiongraph3d', [F, boxSize, boxSize], {
            strokeWidth: 0.5,
            stepsU: 40,
            stepsV: 40,
            strokeColor: '#D8C3A5',
            fillColor: '#D8C3A5',
            fillOpacity: 0.2
        });

        // Sliders for dynamic intervals
        const nSlider = board.create('slider', [[-4.5, -4], [-1, -4], [2, 4, 10]], { 
            name: renderTex('n'), 
            color: '#E98074',
            snapWidth: 1 
        });

        // React-wrapped state update for the slider
        nSlider.on('drag', () => {
            setNumIntervals(nSlider.Value());
        });

        // Riemann Sum Cuboids
        // n x n grid from -2 to 2
        const n = numIntervals;
        const start = -2, end = 2;
        const step = (end - start) / n;

        // Optimization: Create a limited number of boxes or handle them dynamically
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                const x = start + i * step;
                const y = start + j * step;
                const h = F(x + step/2, y + step/2);
                
                // Box vertices: B000, B100, B110, B010, B001, B101, B111, B011
                // Simplification: We could use a custom 3D box or 8 points + lines
                // For performance, let's use a simpler visualization: vertical prisms or polygons
                
                // Base
                const b0 = [x, y, -3], b1 = [x+step, y, -3], b2 = [x+step, y+step, -3], b3 = [x, y+step, -3];
                // Top
                const t0 = [x, y, h], t1 = [x+step, y, h], t2 = [x+step, y+step, h], t3 = [x, y+step, h];

                // Create the top face
                view.create('polygon3d', [t0, t1, t2, t3], { fillColor: '#8E9775', fillOpacity: 0.4, strokeWidth: 0.2 });
                // Vertical edges for visual volume
                view.create('line3d', [b0, t0], { strokeWidth: 0.2, strokeColor: '#8E9775', opacity: 0.3 });
                view.create('line3d', [b1, t1], { strokeWidth: 0.2, strokeColor: '#8E9775', opacity: 0.3 });
                view.create('line3d', [b2, t2], { strokeWidth: 0.2, strokeColor: '#8E9775', opacity: 0.3 });
                view.create('line3d', [b3, t3], { strokeWidth: 0.2, strokeColor: '#8E9775', opacity: 0.3 });
            }
        }

        board.create('text', [-4.5, 4.5, () => {
            return renderTex(`\\iint_D f(x, y) dA \\approx \\sum_{i=1}^n f(x_i, y_i) \\Delta A`, true);
        }], { fontSize: 16, parse: false });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, [numIntervals]);

    return (
        <div 
            ref={boardRef} 
            className="jxgbox rounded-3xl shadow-2xl border border-white/10" 
            style={{ width: '100%', aspectRatio: '1/1', maxWidth: '700px' }} 
        />
    );
};

export default MultipleIntegrals3D;
