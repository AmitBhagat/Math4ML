import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';

const BayesTheorem = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = true;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-1, 12, 11, -2],
            axis: false,
            showNavigation: false,
            showCopyright: false
        });

        // Sliders: Prior P(A) and Likelihood P(B|A)
        const pA = board.create('slider', [[0, -0.5], [4, -0.5], [0, 0.1, 1]], { name: 'P(Event A)', color: '#E98074' });
        const pBA = board.create('slider', [[6, -0.5], [10, -0.5], [0.5, 0.9, 1]], { name: 'P(Result|Event)', color: '#D8C3A5' });

        // Population Grid (10x10)
        const grid: any[] = [];
        for (let i = 0; i < 100; i++) {
            const x = i % 10;
            const y = 9 - Math.floor(i / 10);
            
            const p = board.create('point', [x + 0.5, y + 1.5], { 
                size: 8, 
                strokeColor: 'white',
                strokeWidth: 1,
                name: '',
                fillColor: () => {
                    const thresholdA = pA.Value() * 100;
                    const thresholdB = pBA.Value() * 100;
                    
                    if (i < thresholdA) {
                        // Event occurred (True Case)
                        return (i % 100) < (thresholdA * pBA.Value()) ? '#E98074' : '#E9807466';
                    } else {
                        // Event didn't occur (False Case)
                        const falseAlarmThreshold = (1 - pBA.Value()) * (100 - thresholdA);
                        return (i - thresholdA) < falseAlarmThreshold ? '#D8C3A5' : '#D8C3A522';
                    }
                }
            });
            grid.push(p);
        }

        // MathJax: Posterior Formula
        board.create('text', [0, 11, () => {
            const prior = pA.Value();
            const likelihood = pBA.Value();
            const falseAlarm = 1 - pBA.Value();
            const posterior = (prior * likelihood) / (prior * likelihood + (1 - prior) * falseAlarm);
            return `\\[P(A|B) = \\frac{P(B|A)P(A)}{P(B)} = ${posterior.toFixed(3)}\\]`;
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

export default BayesTheorem;
