import React from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const ConditionalProbability = () => {
    const boardRef = React.useRef<HTMLDivElement>(null);
    const [stats, setStats] = React.useState({ prob: 0 });

    React.useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-1, 11, 11, -2],
            axis: false,
            showNavigation: false,
            showCopyright: false
        });

        // 1. Controls
        const pA = board.create('slider', [[1, -0.5], [4, -0.5], [0, 0.4, 1]], { name: 'P(A)', color: '#E98074' });
        const pB = board.create('slider', [[6, -0.5], [9, -0.5], [0.1, 0.3, 1]], { name: 'P(B)', color: '#8E9775' });
        
        const condOnB = board.create('checkbox', [1, 10.2, 'Condition on B (P(A|B))'], { color: '#8E9775' });

        // 2. Sample Space Dots
        const points: any[] = [];
        const n = 100;
        for (let i = 0; i < n; i++) {
            const x = i % 10;
            const y = Math.floor(i / 10);
            
            const p = board.create('point', [x + 0.5, y + 0.5], {
                size: 5,
                name: '',
                strokeColor: 'white',
                strokeWidth: 1,
                fillColor: () => {
                    const isA = i < (pA.Value() * 100);
                    const isB = (i % 10) < (pB.Value() * 10); // Simple independence for initial viz
                    
                    if (condOnB.Value() && !isB) return '#00000000'; // Filtered out
                    
                    if (isA && isB) return '#E98074'; // Intersection
                    if (isA) return '#E9807466';
                    if (isB) return '#8E977566';
                    return '#D8C3A522';
                },
                opacity: () => (condOnB.Value() && !((i % 10) < (pB.Value() * 10))) ? 0 : 1
            });
            points.push(p);
        }

        // 3. Labels
        board.create('text', [1, 9.5, () => {
            const pa = pA.Value();
            const pb = pB.Value();
            const pab = pa * pb; // assume independence for the dot count logic
            const pCond = pab / pb;

            const text = condOnB.Value() 
                ? `P(A|B) = \\frac{P(A \\cap B)}{P(B)} = ${pCond.toFixed(2)}`
                : `P(A) = ${pa.toFixed(2)}, P(B) = ${pb.toFixed(2)}`;
            
            return `<div class="p-4 bg-bg-secondary border border-border-premium rounded-xl shadow-lg">
                <div class="text-xs font-black tracking-widest text-accent-premium mb-1 uppercase">
                    ${condOnB.Value() ? 'Restricted Sample Space' : 'Full Universe'}
                </div>
                <div class="text-2xl font-black text-white">
                    ${renderTex(text, false)}
                </div>
                <div class="mt-2 text-[10px] text-muted-premium">
                    ${condOnB.Value() ? 'Everything not in B is ignored.' : 'Comparing full areas.'}
                </div>
            </div>`;
        }], { parse: false });

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

export default ConditionalProbability;
