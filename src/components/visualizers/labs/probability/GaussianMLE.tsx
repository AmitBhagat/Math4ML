import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';

const GaussianMLE = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = true;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-5, 1.2, 5, -0.3],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // Fixed data points
        const data = [-1.5, -0.8, -0.2, 0.4, 0.9, 1.6];
        data.forEach(x => {
            board.create('point', [x, 0], { size: 5, color: '#E98074', name: '', fixed: true });
        });

        // Mean and Sigma Sliders
        const mu = board.create('slider', [[-4, -0.15], [-1, -0.15], [-3, 0, 3]], { name: '\\mu', color: '#D8C3A5' });
        const sigma = board.create('slider', [[1, -0.15], [4, -0.15], [0.3, 1, 2]], { name: '\\sigma', color: '#E98074' });

        // Gaussian Function
        const f = (x: number) => {
            const m = mu.Value();
            const s = sigma.Value();
            return (1 / (s * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - m) / s) ** 2);
        };

        board.create('functiongraph', [f], { strokeColor: '#8E9775', strokeWidth: 3 });

        // MathJax: Log-Likelihood Formula
        board.create('text', [-4.5, 1, () => {
            const m = mu.Value();
            const s = sigma.Value();
            let logL = 0;
            data.forEach(x => {
                const prob = (1 / (s * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - m) / s) ** 2);
                logL += Math.log(prob);
            });
            return `\\[\\log \\mathcal{L}(\\mu, \\sigma) = ${logL.toFixed(3)}\\]`;
        }], { fontSize: 18 });

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

export default GaussianMLE;
