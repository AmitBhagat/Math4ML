import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const BinaryEntropy = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        // Initialize Board
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-0.2, 1.4, 1.2, -0.2],
            axis: true,
            showNavigation: false,
            showCopyright: false,
            pan: { enabled: false },
            zoom: { enabled: false }
        });

        // Aesthetic Colors
        const primaryColor = '#E98074'; // Salmon
        const accentColor = '#D8C3A5';  // Tan
        const textColor = '#8E8D8A';

        // Help grid / Labels
        board.create('text', [0.5, -0.1, renderTex('p = P(X=1)')], { anchorX: 'middle', fixed: true });
        board.create('text', [-0.15, 0.5, renderTex('H(p)')], { rotate: 90, anchorX: 'middle', fixed: true });

        // Entropy Function: H(p) = -p*log2(p) - (1-p)*log2(1-p)
        const entropyFunc = (p: number) => {
            if (p <= 0 || p >= 1) return 0;
            return -(p * Math.log2(p) + (1 - p) * Math.log2(1 - p));
        };

        // Plot the curve
        board.create('functiongraph', [entropyFunc, 0, 1], {
            strokeColor: accentColor,
            strokeWidth: 3,
            highlight: false
        });

        // Draggable point on the curve
        // We use a glider on a segment [0,1] to control X, then map to Y
        const axisSegment = board.create('segment', [[0, 0], [1, 0]], { visible: false });
        const controlPoint = board.create('glider', [0.5, 0, axisSegment], {
            name: '',
            color: primaryColor,
            size: 5,
            strokeColor: '#fff',
            strokeWidth: 2
        });

        const activePoint = board.create('point', [
            () => controlPoint.X(),
            () => entropyFunc(controlPoint.X())
        ], {
            name: '',
            color: primaryColor,
            size: 6,
            strokeColor: '#fff',
            strokeWidth: 2
        });

        // Trace line from X-axis to point
        board.create('segment', [controlPoint, activePoint], {
            dash: 2,
            strokeColor: textColor,
            strokeWidth: 1
        });

        // Informational Text: Step-by-Step Calculation
        board.create('text', [0.05, 1.15, () => {
            const p = controlPoint.X();
            const h = entropyFunc(p);
            const p1 = p > 0 ? p * Math.log2(p) : 0;
            const p2 = (1 - p) > 0 ? (1 - p) * Math.log2(1 - p) : 0;
            
            return renderTex(`
                \\begin{aligned}
                H(p) &= -[p \\log_2 p + (1-p) \\log_2(1-p)] \\\\
                H(${p.toFixed(2)}) &= -[(${p.toFixed(2)} \\times ${Math.log2(p || 1e-10).toFixed(2)}) + (${(1-p).toFixed(2)} \\times ${Math.log2(1-p || 1e-10).toFixed(2)})] \\\\
                &= -[${p1.toFixed(3)} + ${p2.toFixed(3)}] \\\\
                &= ${h.toFixed(3)} \\text{ bits}
                \\end{aligned}
            `, true);
        }], { fontSize: 14, color: textColor, parse: false });

        // Surprisal Calculation visualization
        board.create('text', [0.65, 0.6, () => {
            const p = controlPoint.X();
            const surprisal1 = p > 0 ? -Math.log2(p) : Infinity;
            return renderTex(`I(x=1) = -\\log_2(${p.toFixed(2)}) \\approx ${isFinite(surprisal1) ? surprisal1.toFixed(2) : '\\infty'} \\text{ bits}`, false);
        }], { fontSize: 13, color: primaryColor, visible: () => controlPoint.X() > 0.05 });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, []);

    return (
        <div className="space-y-4">
            <div 
                ref={boardRef} 
                className="jxgbox rounded-3xl shadow-xl border border-border-premium bg-white/50" 
                style={{ width: '100%', aspectRatio: '1.6/1', maxWidth: '800px' }} 
            />
            <p className="text-center text-sm text-muted-premium italic">
                Drag the salmon point along the axis to see how entropy changes with probability $p$.
            </p>
        </div>
    );
};

export default BinaryEntropy;
