import React from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const Independence = () => {
    const boardRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-0.2, 1.2, 1.2, -0.4],
            axis: false,
            showNavigation: false,
            showCopyright: false
        });

        // 1. Controls
        const pA = board.create('slider', [[0, -0.1], [0.4, -0.1], [0, 0.5, 1]], { name: 'P(A)', color: '#E98074' });
        const pB = board.create('slider', [[0.6, -0.1], [1.0, -0.1], [0, 0.5, 1]], { name: 'P(B)', color: '#8E9775' });
        const dep = board.create('slider', [[0, -0.25], [1.0, -0.25], [-0.2, 0, 0.2]], { name: 'Dependence Index', color: '#D8C3A5' });

        // 2. Logic: P(A & B) = P(A)P(B) + dep
        // Need to clamp dep to ensure valid probabilities
        const getPAB = () => {
            const base = pA.Value() * pB.Value();
            const min = Math.max(0, pA.Value() + pB.Value() - 1);
            const max = Math.min(pA.Value(), pB.Value());
            return Math.max(min, Math.min(max, base + dep.Value()));
        };

        // 3. Visualization Mapping (Moser Plot)
        // Divide square vertically by A and complement A'
        // Within A, divide horizontally by P(B|A)
        // Within A', divide horizontally by P(B|A')
        
        const pBA = () => getPAB() / Math.max(0.001, pA.Value());
        const pBAc = () => (pB.Value() - getPAB()) / Math.max(0.001, 1 - pA.Value());

        // Region A & B
        board.create('polygon', [[0, 0], [() => pA.Value(), 0], [() => pA.Value(), () => pBA()], [0, () => pBA()]], {
            fillColor: '#E98074', fillOpacity: 0.8, strokeColor: 'white', name: 'A \u2229 B'
        });

        // Region A & ~B
        board.create('polygon', [[0, () => pBA()], [() => pA.Value(), () => pBA()], [() => pA.Value(), 1], [0, 1]], {
            fillColor: '#E98074', fillOpacity: 0.2, strokeColor: 'white'
        });

        // Region ~A & B
        board.create('polygon', [[() => pA.Value(), 0], [1, 0], [1, () => pBAc()], [() => pA.Value(), () => pBAc()]], {
            fillColor: '#8E9775', fillOpacity: 0.8, strokeColor: 'white'
        });

        // Region ~A & ~B
        board.create('polygon', [[() => pA.Value(), () => pBAc()], [1, () => pBAc()], [1, 1], [() => pA.Value(), 1]], {
            fillColor: '#8E9775', fillOpacity: 0.2, strokeColor: 'white'
        });

        // Feedback Text
        board.create('text', [0, 1.1, () => {
            const isInd = Math.abs(dep.Value()) < 0.001;
            const diff = (getPAB() - (pA.Value() * pB.Value())).toFixed(3);
            return `<div class="p-3 bg-bg-secondary border border-border-premium rounded-xl">
                <div class="text-[10px] font-black uppercase tracking-widest ${isInd ? 'text-emerald-500' : 'text-rose-500'} mb-1">
                    ${isInd ? 'Statistically Independent' : 'Dependent (Correlated)'}
                </div>
                <div class="text-xs text-muted-premium">
                    P(A \u2229 B) ${isInd ? '=' : '\u2260'} P(A)P(B). Gap: ${diff}
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

export default Independence;
