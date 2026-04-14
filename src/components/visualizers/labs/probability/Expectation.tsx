import React from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const Expectation = () => {
    const boardRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-1, 5, 11, -1],
            axis: false,
            showNavigation: false,
            showCopyright: false
        });

        // 1. Pivot Point (The Realized Mean)
        const p1 = board.create('point', [2, 1], { name: 'P1', color: '#E98074', size: 6 });
        const p2 = board.create('point', [5, 1], { name: 'P2', color: '#8E9775', size: 6 });
        const p3 = board.create('point', [8, 1], { name: 'P3', color: '#D8C3A5', size: 6 });

        // Sliders for Weights (Probabilities)
        const w1 = board.create('slider', [[1, 4], [3, 4], [0, 0.3, 1]], { name: 'P(x₁)', color: '#E98074' });
        const w2 = board.create('slider', [[4, 4], [6, 4], [0, 0.4, 1]], { name: 'P(x₂)', color: '#8E9775' });
        const w3 = board.create('slider', [[7, 4], [9, 4], [0, 0.3, 1]], { name: 'P(x₃)', color: '#D8C3A5' });

        // Normalizing Weights (Must sum to 1)
        const sumW = () => w1.Value() + w2.Value() + w3.Value();
        const getE = () => (p1.X() * w1.Value() + p2.X() * w2.Value() + p3.X() * w3.Value()) / sumW();

        // 2. The Balance Beam
        const beam = board.create('segment', [[0, 1], [10, 1]], { strokeColor: '#444', strokeWidth: 5 });
        
        // 3. The Fulcrum (Expectation)
        const fulcrum = board.create('polygon', [
            [() => getE(), 1],
            [() => getE() - 0.3, 0.5],
            [() => getE() + 0.3, 0.5]
        ], { fillColor: '#fff', strokeColor: '#E98074', strokeWidth: 2 });

        board.create('text', [() => getE() - 0.5, 0.2, () => {
            const ev = getE().toFixed(2);
            return `<span class="text-xs font-black text-accent-premium">E[X] = ${ev}</span>`;
        }], { parse: false });

        // 4. "Weights" visualization on the beam
        [p1, p2, p3].forEach((p, i) => {
            const wFunc = [w1, w2, w3][i];
            board.create('circle', [p, () => Math.sqrt(wFunc.Value() / sumW())], {
                fillColor: p.getAttribute('color'),
                fillOpacity: 0.5,
                strokeColor: 'white'
            });
        });

        // Instructional Text
        // Step-by-Step Expectation Calculation
        board.create('text', [0.2, 3.2, () => {
             const sW = sumW() || 1;
             const normW1 = w1.Value() / sW;
             const normW2 = w2.Value() / sW;
             const normW3 = w3.Value() / sW;
             const ev = getE().toFixed(2);
             
             return renderTex(`
                \\begin{aligned}
                E[X] &= \\sum x_i P(x_i) \\\\
                &= (${p1.X().toFixed(1)} \\cdot ${normW1.toFixed(2)}) + (${p2.X().toFixed(1)} \\cdot ${normW2.toFixed(2)}) + (${p3.X().toFixed(1)} \\cdot ${normW3.toFixed(2)}) \\\\
                &= ${ev}
                \\end{aligned}
             `, true);
        }], { fontSize: 13, parse: false });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, []);

    return (
        <div 
            ref={boardRef} 
            className="jxgbox rounded-3xl shadow-2xl border border-white/10" 
            style={{ width: '100%', aspectRatio: '1.6/1', maxWidth: '900px' }} 
        />
    );
};

export default Expectation;
