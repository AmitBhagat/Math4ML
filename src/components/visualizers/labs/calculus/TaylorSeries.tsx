import React, { useEffect, useRef, useState } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const TaylorSeries = () => {
    const boardRef = useRef<HTMLDivElement>(null);
    const [degree, setDegree] = useState(1);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-5, 5, 5, -5],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // Target function
        const f_txt = "sin(x) * cos(x/2)";
        const f = board.jc.snippet(f_txt, true, 'x');
        board.create('functiongraph', [f], { strokeColor: '#D8C3A5', strokeWidth: 2, opacity: 0.4 });

        // Center of expansion (movable point on x-axis)
        const a = board.create('point', [0, 0], { 
            name: renderTex('a'), 
            color: '#E98074', 
            size: 4, 
            constrainedDirections: [true, false] // Only move on X
        });

        // Visual vertical line at a
        board.create('segment', [[() => a.X(), -5], [() => a.X(), 5]], { 
            strokeColor: '#E98074', 
            dash: 2, 
            strokeWidth: 1, 
            fixed: true 
        });

        // Sliders for Degree
        const nSlider = board.create('slider', [[-4, -4], [0, -4], [0, 1, 10]], { 
            name: renderTex('n'), 
            color: '#E98074',
            snapWidth: 1
        });
        
        nSlider.on('drag', () => setDegree(Math.round(nSlider.Value())));

        // Pre-calculate derivative snippets to avoid heavy computation in the rendering loop
        const derivatives: any[] = [];
        let current_deriv = f_txt;
        for (let k = 0; k <= 10; k++) {
            derivatives.push(board.jc.snippet(current_deriv, true, 'x'));
            current_deriv = `D(${current_deriv}, x)`;
        }

        const factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800];

        // Taylor Polynomial builder
        const taylorPoly = (x: number) => {
            const x0 = a.X();
            const n = Math.round(nSlider.Value());
            let sum = 0;
            
            for (let k = 0; k <= n; k++) {
                const val_fk = derivatives[k](x0);
                sum += (val_fk / factorials[k]) * Math.pow(x - x0, k);
            }
            return sum;
        };

        const polyGraph = board.create('functiongraph', [taylorPoly], { 
            strokeColor: '#E98074', 
            strokeWidth: 4 
        });

        // Math Info
        board.create('text', [-4.5, 4.5, () => {
            const n = Math.round(nSlider.Value());
            return renderTex(`P_{${n}}(x) \\approx \\sum_{k=0}^{${n}} \\frac{f^{(k)}(a)}{k!}(x-a)^k`, true);
        }], { fontSize: 18, parse: false });

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

export default TaylorSeries;
