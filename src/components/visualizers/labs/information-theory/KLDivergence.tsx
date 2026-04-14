import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const KLDivergence = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        // Initialize Board
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-3, 11, 13, -3],
            axis: false,
            showNavigation: false,
            showCopyright: false,
            pan: { enabled: false },
            zoom: { enabled: false }
        });

        // Aesthetic Colors
        const pColor = '#D8C3A5'; // Tan/True
        const qColor = '#E98074'; // Salmon/Model
        const textColor = '#8E8D8A';

        // P Distribution (Fixed for simplicity, or slightly adjustable)
        const p_vals = [0.6, 0.3, 0.1];
        
        // Q Distribution Sliders (Adjustable)
        // We'll use 3 bars that can be dragged vertically, and we normalize them
        const y0 = board.create('glider', [1, 5, board.create('segment', [[1, 0], [1, 9]], {visible: false})], { name: '', color: qColor, size: 4 });
        const y1 = board.create('glider', [4, 3, board.create('segment', [[4, 0], [4, 9]], {visible: false})], { name: '', color: qColor, size: 4 });
        const y2 = board.create('glider', [7, 2, board.create('segment', [[7, 0], [7, 9]], {visible: false})], { name: '', color: qColor, size: 4 });

        const getQ = () => {
            const sum = y0.Y() + y1.Y() + y2.Y();
            return [y0.Y() / sum, y1.Y() / sum, y2.Y() / sum];
        };

        // Draw P Bars (Background/Reference)
        p_vals.forEach((val, i) => {
            const x = i * 3 + 1.5;
            board.create('polygon', [
                [x - 0.4, 0], [x - 0.4, val * 8], [x + 0.4, val * 8], [x + 0.4, 0]
            ], { fillOpacity: 0.2, fillColor: pColor, strokeColor: pColor, highlight: false });
            board.create('text', [x - 0.4, -0.5, renderTex(`x_${i+1}`)], { fixed: true, color: textColor });
        });

        // Draw Q Bars (Foreground/Adjustable)
        [y0, y1, y2].forEach((slider, i) => {
            const x = i * 3 + 1.5;
            board.create('polygon', [
                [x - 0.2, 0], [x - 0.2, () => getQ()[i] * 8], [x + 0.2, () => getQ()[i] * 8], [x + 0.2, 0]
            ], { fillColor: qColor, strokeColor: qColor, highlight: false, borders: { strokeWidth: 2 } });
        });

        // Legend
        board.create('text', [8.5, 9, renderTex('P(x) \\text{ (True)}')], { color: pColor, fontSize: 14 });
        board.create('text', [8.5, 8.2, renderTex('Q(x) \\text{ (Predicted)}')], { color: qColor, fontSize: 14 });

        // Calculations
        const calcEntropyP = () => {
            return -p_vals.reduce((acc, p) => acc + (p > 0 ? p * Math.log2(p) : 0), 0);
        };

        const calcCrossEntropy = () => {
            const q = getQ();
            return -p_vals.reduce((acc, p, i) => acc + (p > 0 ? p * Math.log2(q[i] || 1e-10) : 0), 0);
        };

        const calcKL = () => {
            const q = getQ();
            return p_vals.reduce((acc, p, i) => acc + (p > 0 ? p * Math.log2(p / (q[i] || 1e-10)) : 0), 0);
        };

        // Display results: Step-by-Step Calculation
        board.create('text', [0, 9.6, () => {
            const q = getQ();
            const ce = calcCrossEntropy();
            const kl = calcKL();
            const term1 = p_vals[0] * Math.log2(p_vals[0] / (q[0] || 1e-10));
            const term2 = p_vals[1] * Math.log2(p_vals[1] / (q[1] || 1e-10));
            const term3 = p_vals[2] * Math.log2(p_vals[2] / (q[2] || 1e-10));

            return renderTex(`
                \\begin{aligned}
                D_{KL}(P \\parallel Q) &= \\sum_{i} P(x_i) \\log_2 \\frac{P(x_i)}{Q(x_i)} \\\\
                &= (${p_vals[0]} \\log \\frac{${p_vals[0]}}{${q[0].toFixed(2)}}) + (${p_vals[1]} \\log \\frac{${p_vals[1]}}{${q[1].toFixed(2)}}) + (${p_vals[2]} \\log \\frac{${p_vals[2]}}{${q[2].toFixed(2)}}) \\\\
                &= ${term1.toFixed(3)} + ${term2.toFixed(3)} + ${term3.toFixed(3)} \\\\
                &= ${kl.toFixed(3)} \\text{ bits}
                \\end{aligned}
            `, true);
        }], { fontSize: 13, color: textColor, parse: false });

        board.create('text', [0, 6.2, () => {
             const ce = calcCrossEntropy();
             const kl = calcKL();
             const hp = calcEntropyP();
             return renderTex(`H(P, Q) = H(P) + D_{KL} = ${hp.toFixed(2)} + ${kl.toFixed(2)} = ${ce.toFixed(2)} \\text{ bits}`, true);
        }], { fontSize: 14, color: qColor, parse: false });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, []);

    return (
        <div className="space-y-4">
            <div 
                ref={boardRef} 
                className="jxgbox rounded-3xl shadow-xl border border-border-premium bg-white/50" 
                style={{ width: '100%', aspectRatio: '1.8/1', maxWidth: '800px' }} 
            />
            <div className="bg-bg-tertiary p-4 rounded-xl border border-border-premium">
                <p className="text-sm text-text-premium leading-relaxed">
                    <strong>Interaction:</strong> Drag the small salmon circular handles to change the predicted distribution $Q$. 
                    Notice how {"$D_{KL}(P \\parallel Q)$"} is 0 only when $Q$ perfectly matches the background distribution $P$.
                </p>
                <p className="text-xs text-muted-premium mt-2 italic">
                    Note: Cross-Entropy $H(P, Q)$ is always greater than or equal to $H(P)$. The difference is exactly the KL Divergence.
                </p>
            </div>
        </div>
    );
};

export default KLDivergence;
