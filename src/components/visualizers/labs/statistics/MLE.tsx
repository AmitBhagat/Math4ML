import React from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const MLE = () => {
    const boardRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-1, 10, 11, -2],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // 1. Interactive Data Points on the x-axis
        const dataValues = [2.5, 3.1, 3.8, 4.2, 5.5];
        const points = dataValues.map((v, i) => 
            board.create('point', [v, 0], { 
                name: `x_{${i+1}}`, 
                color: '#D8C3A5', 
                size: 3, 
                constrainedDirections: [true, false] // Move only on X
            })
        );

        // 2. The MLE Estimator (The Gaussian curve we want to fit)
        // Sliders for Mu and Sigma
        const muSlider = board.create('slider', [[1, 8], [5, 8], [0, 5, 10]], { 
            name: 'μ', 
            color: '#E98074' 
        });
        const sigmaSlider = board.create('slider', [[6, 8], [10, 8], [0.1, 1, 3]], { 
            name: 'σ', 
            color: '#8E9775' 
        });

        // Gaussian Function
        const gaussian = (x: number) => {
            const m = muSlider.Value();
            const s = sigmaSlider.Value();
            return (1 / (s * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - m) / s, 2)) * 5; // scaled for visibility
        };

        const gGraph = board.create('functiongraph', [gaussian], { 
            strokeColor: '#E98074', 
            strokeWidth: 3 
        });

        // 3. The Likelihood Bar
        const likelihood = () => {
            const m = muSlider.Value();
            const s = sigmaSlider.Value();
            let L = 1;
            points.forEach(p => {
                const x = p.X();
                const prob = (1 / (s * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - m) / s, 2));
                L *= (prob * 2); // scaling factor to keep L visible
            });
            return Math.min(L, 10); // clamp for display
        };

        const gaugeBase = board.create('point', [0.5, 0], { visible: false });
        const gaugeTop = board.create('point', [0.5, () => likelihood()], { visible: false });
        board.create('segment', [gaugeBase, gaugeTop], { 
            strokeColor: '#E98074', 
            strokeWidth: 10, 
            opacity: 0.5 
        });

        board.create('text', [0.2, -1, renderTex('\\text{Total Likelihood } L(\\theta)', false)], { fontSize: 14, color: '#E98074' });

        // Optimal Line indicator
        const meanPoint = board.create('point', [() => {
            const sum = points.reduce((acc, p) => acc + p.X(), 0);
            return sum / points.length;
        }, 0], { name: 'MLE', color: '#8E9775', size: 2, fixed: true });

        board.create('text', [6, 6, () => {
            const currentMu = muSlider.Value().toFixed(2);
            const idealMu = (points.reduce((acc, p) => acc + p.X(), 0) / points.length).toFixed(2);
             return renderTex(`\\hat{\\mu}_{MLE} = ${idealMu} \\quad \\text{Current } \\mu = ${currentMu}`, true);
        }], { fontSize: 16, parse: false });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, []);

    return (
        <div 
            ref={boardRef} 
            className="jxgbox rounded-3xl shadow-2xl border border-white/10" 
            style={{ width: '100%', aspectRatio: '1.2/1', maxWidth: '800px' }} 
        />
    );
};

export default MLE;
