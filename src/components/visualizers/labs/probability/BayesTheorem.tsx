import React from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const BayesTheorem = () => {
    const boardRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-6, 12, 16, -2],
            axis: false,
            showNavigation: false,
            showCopyright: false
        });

        // 1. Controls: Prior P(A) and Likelihood P(B|A)
        const pA = board.create('slider', [[0, -0.5], [4, -0.5], [0, 0.2, 1]], { 
            name: 'P(A)', color: '#E98074' 
        });
        const pBA = board.create('slider', [[6, -0.5], [10, -0.5], [0, 0.8, 1]], { 
            name: 'P(B|A)', color: '#D8C3A5' 
        });

        // 2. Population Visualization (100 dots)
        for (let i = 0; i < 100; i++) {
            const x = i % 10;
            const y = 9 - Math.floor(i / 10);
            
            board.create('point', [x + 0.5, y + 1.5], { 
                size: 6, 
                strokeColor: 'white',
                strokeWidth: 1,
                name: '',
                fillColor: () => {
                    const thresholdA = pA.Value() * 100;
                    const isA = i < thresholdA;
                    
                    if (isA) {
                        // Event A occurred (Prior)
                        // Fraction P(B|A) are red (Result)
                        const subIndex = i;
                        return (subIndex < (thresholdA * pBA.Value())) ? '#E98074' : '#E9807444';
                    } else {
                        // Event A didn't occur
                        // We assume base false alarm rate for B if not A is fixed or related
                        // To keep it simple: P(B|Ac) = 0.1
                        const isBGivenAc = ((i - thresholdA) < (100 - thresholdA) * 0.1);
                        return isBGivenAc ? '#8E9775' : '#D8C3A511';
                    }
                }
            });
        }

        // 3. Posterior Calculation: Step-by-Step Expansion
        board.create('text', [0.2, 11, () => {
            const prior = pA.Value();
            const likelihood = pBA.Value();
            const pBAc = 0.1; // False alarm rate (fixed in this lab)
            const pAc = 1 - prior;
            const marginalB = (prior * likelihood) + (pAc * pBAc);
            const posterior = (prior * likelihood) / Math.max(0.001, marginalB);
            
            return renderTex(`
                \\begin{aligned}
                P(A|B) &= \\frac{P(B|A)P(A)}{P(B|A)P(A) + P(B|A^c)P(A^c)} \\\\
                &= \\frac{(${likelihood.toFixed(2)})(${prior.toFixed(2)})}{(${likelihood.toFixed(2)} \\cdot ${prior.toFixed(2)}) + (${pBAc.toFixed(2)} \\cdot ${pAc.toFixed(2)})} \\\\
                &= \\frac{${(prior * likelihood).toFixed(3)}}{${marginalB.toFixed(3)}} = ${posterior.toFixed(3)}
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
            style={{ width: '100%', aspectRatio: '1/1', maxWidth: '750px' }} 
        />
    );
};

export default BayesTheorem;
