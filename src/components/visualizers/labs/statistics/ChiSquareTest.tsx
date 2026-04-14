import React from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const ChiSquareTest = () => {
    const boardRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-1, 12, 11, -1],
            axis: false,
            showNavigation: false,
            showCopyright: false
        });

        // 1. Expected vs Observed (2x2 Table Visual)
        board.create('text', [1, 11, renderTex('\\chi^2 = \\sum \\frac{(O-E)^2}{E}', false)], { fontSize: 16, color: '#D8C3A5', parse: false });

        // Sliders for Observed counts in a two-category test
        const obs1 = board.create('slider', [[6, 10], [9, 10], [0, 60, 100]], { name: 'Observed A', color: '#E98074' });
        const obs2 = board.create('slider', [[6, 8.5], [9, 8.5], [0, 40, 100]], { name: 'Observed B', color: '#D8C3A5' });

        const expected1 = 50;
        const expected2 = 50;

        // Visual Bars
        board.create('segment', [[1, 0], [1, () => obs1.Value() / 10]], { strokeColor: '#E98074', strokeWidth: 20 });
        board.create('segment', [[3, 0], [3, () => obs2.Value() / 10]], { strokeColor: '#D8C3A5', strokeWidth: 20 });
        
        board.create('segment', [[0.5, 5], [1.5, 5]], { strokeColor: 'white', dash: 2, strokeWidth: 1 });
        board.create('segment', [[2.5, 5], [3.5, 5]], { strokeColor: 'white', dash: 2, strokeWidth: 1 });
        board.create('text', [9.2, 5, 'Expected'], { color: 'white', fontSize: 10 });

        // 2. Stats Calculation
        board.create('text', [5.5, 6, () => {
            const o1 = obs1.Value();
            const o2 = obs2.Value();
            const chi = (Math.pow(o1 - expected1, 2) / expected1) + (Math.pow(o2 - expected2, 2) / expected2);
            const pVal = (1 - 0.5); // Simplified for visual
            
            return `<div class="p-6 bg-bg-secondary border border-border-premium rounded-2xl shadow-xl">
                <div class="text-[10px] font-black uppercase tracking-widest text-muted-premium mb-1">Chi-Square Stat</div>
                <div class="text-4xl font-black text-accent-premium">${chi.toFixed(2)}</div>
                <div class="mt-4 text-[9px] font-bold uppercase ${chi > 3.84 ? 'text-emerald-500' : 'text-rose-500'}">
                    ${chi > 3.84 ? 'Statistically Significant Dist' : 'Matches Expected Dist'}
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

export default ChiSquareTest;
