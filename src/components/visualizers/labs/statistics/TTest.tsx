import React from 'react';
import JXG from 'jsxgraph';
import { renderTex, normalCDF } from '@/src/lib/mathUtils';

const TTest = () => {
    const boardRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-1, 1, 11, -0.2],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // 1. Controls
        const mu1 = board.create('slider', [[1, 0.9], [4, 0.9], [2, 4, 8]], { name: 'μ_A', color: '#8E9775' });
        const mu2 = board.create('slider', [[1, 0.82], [4, 0.82], [2, 6, 8]], { name: 'μ_B', color: '#E98074' });
        const sigma = board.create('slider', [[6, 0.9], [9, 0.9], [0.5, 1, 2.5]], { name: 'Noise σ', color: '#D8C3A5' });

        const gauss = (x: number, m: number, s: number) => (1 / (s * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - m) / s, 2));

        // 2. Distributions
        board.create('functiongraph', [(x: number) => gauss(x, mu1.Value(), sigma.Value()), 0, 10], { 
            strokeColor: '#8E9775', 
            strokeWidth: 3, 
            fillColor: '#8E9775', 
            fillOpacity: 0.1 
        });

        board.create('functiongraph', [(x: number) => gauss(x, mu2.Value(), sigma.Value()), 0, 10], { 
            strokeColor: '#E98074', 
            strokeWidth: 3, 
            fillColor: '#E98074', 
            fillOpacity: 0.1 
        });

        // 3. Stats Display
        board.create('text', [6, 0.5, () => {
            const m1 = mu1.Value();
            const m2 = mu2.Value();
            const s = sigma.Value();
            const n = 30; // nominal sample size
            const tStat = (Math.abs(m1 - m2) / (s * Math.sqrt(2/n)));
            const pVal = (2 * (1 - normalCDF(tStat))).toFixed(4);
            
            return `<div class="p-6 bg-bg-secondary border-2 border-border-premium rounded-2xl shadow-xl">
                <div class="flex items-baseline gap-2 mb-2">
                    <span class="text-3xl font-black text-accent-premium">${tStat.toFixed(2)}</span>
                    <span class="text-[10px] uppercase tracking-widest text-muted-premium">t-statistic</span>
                </div>
                <div class="space-y-1">
                    <div class="flex justify-between text-[11px] font-bold">
                        <span class="text-muted-premium">P-VALUE (2-TAILED)</span>
                        <span class="${parseFloat(pVal) < 0.05 ? 'text-emerald-500' : 'text-rose-500'}">${pVal}</span>
                    </div>
                    <div class="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div class="h-full bg-accent-premium transition-all duration-300" style="width: ${Math.min(tStat * 20, 100)}%"></div>
                    </div>
                </div>
                <div class="mt-4 text-[9px] font-black uppercase tracking-wider ${parseFloat(pVal) < 0.05 ? 'text-emerald-500' : 'text-rose-500'}">
                    ${parseFloat(pVal) < 0.05 ? 'Statistically Significant Diff' : 'No Significant Evidence'}
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

export default TTest;
