import React from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const MAP = () => {
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

        // 1. Data Points (Likelihood source)
        const points = [
            board.create('point', [7, 0], { name: 'Data', color: '#D8C3A5', size: 3, constrainedDirections: [true, false] })
        ];

        // 2. Sliders
        const priorMu = board.create('slider', [[1, 9], [4, 9], [0, 3, 10]], { name: 'μ_prior', color: '#8E9775' });
        const priorStrength = board.create('slider', [[6, 9], [9, 9], [0.1, 1, 5]], { name: 'Confidence', color: '#8E9775' });

        const sigma = 1; // fixed for likelihood simplicity

        // Gaussian Helper
        const gauss = (x: number, m: number, s: number) => (1 / (s * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - m) / s, 2));

        // Likelihood Curve (from data)
        const likelihood = (x: number) => gauss(x, points[0].X(), sigma) * 5;
        board.create('functiongraph', [likelihood], { strokeColor: '#D8C3A5', strokeWidth: 1, dash: 2, name: 'Likelihood' });

        // Prior Curve (from hunch)
        const prior = (x: number) => gauss(x, priorMu.Value(), 1/priorStrength.Value()) * 5;
        board.create('functiongraph', [prior], { strokeColor: '#8E9775', strokeWidth: 2, name: 'Prior' });

        // Posterior Curve (The Product)
        const posterior = (x: number) => {
            const L = gauss(x, points[0].X(), sigma);
            const P = gauss(x, priorMu.Value(), 1/priorStrength.Value());
            return (L * P) * 25; // scaled for visibility
        };
        board.create('functiongraph', [posterior], { strokeColor: '#E98074', strokeWidth: 4, name: 'Posterior' });

        // Indicators
        const mlePoint = board.create('point', [() => points[0].X(), 0], { name: 'MLE', color: '#D32F2F', size: 2, fixed: true });
        
        // Analytical MAP for Gaussian-Gaussian conjugate
        const map_val = () => {
            const x = points[0].X();
            const mu_p = priorMu.Value();
            const tau_p = priorStrength.Value(); // precision
            const tau_l = 1; // likelihood precision
            return (tau_l * x + tau_p * mu_p) / (tau_l + tau_p);
        };

        const mapPoint = board.create('point', [map_val, 0], { name: 'MAP', color: '#E98074', size: 5, fixed: true });

        // Info Text
        board.create('text', [0.5, 7, () => {
            const m = map_val().toFixed(2);
             return renderTex(`\\text{MAP Estimate: } \\theta = ${m}`, true);
        }], { fontSize: 18, parse: false });

        board.create('text', [0.5, 6, renderTex(`MAP = \\frac{\\sigma_p^2 x + \\sigma^2 \\mu_p}{\\sigma_p^2 + \\sigma^2}`, true)], { fontSize: 14, color: '#aaaaaa' });

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

export default MAP;
