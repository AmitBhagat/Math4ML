import React from 'react';
import JXG from 'jsxgraph';
import { renderTex, normalCDF } from '@/src/lib/mathUtils';

const ABTesting = () => {
    const boardRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [0, 10, 0.4, -1],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // 1. Controls (Conversion Rates)
        const rateA = board.create('slider', [[0.05, 9], [0.15, 9], [0, 0.1, 0.4]], { name: 'p_A', color: '#8E9775' });
        const rateB = board.create('slider', [[0.25, 9], [0.35, 9], [0, 0.12, 0.4]], { name: 'p_B', color: '#E98074' });

        const n = 500; // Sample size

        const gauss = (x: number, p: number, n: number) => {
            const s = Math.sqrt((p * (1 - p)) / n);
            return (1 / (s * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - p) / s, 2)) * 0.15; // scaled
        };

        // 2. Distributions (Normal Approximation to Binomial)
        board.create('functiongraph', [(x: number) => gauss(x, rateA.Value(), n)], { 
            strokeColor: '#8E9775', 
            strokeWidth: 3, 
            fillColor: '#8E9775', 
            fillOpacity: 0.25,
            name: 'Control A'
        });

        board.create('functiongraph', [(x: number) => gauss(x, rateB.Value(), n)], { 
            strokeColor: '#E98074', 
            strokeWidth: 3, 
            fillColor: '#E98074', 
            fillOpacity: 0.25,
            name: 'Variant B'
        });

        // 3. Significance Logic
        board.create('text', [0.15, 4, () => {
            const pA = rateA.Value();
            const pB = rateB.Value();
            const seA = Math.sqrt((pA * (1 - pA)) / n);
            const seB = Math.sqrt((pB * (1 - pB)) / n);
            const seDiff = Math.sqrt(seA**2 + seB**2);
            const z = (pB - pA) / seDiff;
            const pVal = (1 - normalCDF(z));
            const lift = ((pB - pA) / pA * 100).toFixed(1);

            return `<div class="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
                <div class="mb-4">
                    <div class="text-[10px] font-black uppercase tracking-[0.2em] text-accent-premium/60 mb-1">Observed Lift</div>
                    <div class="text-4xl font-black ${parseFloat(lift) >= 0 ? 'text-emerald-500' : 'text-rose-500'}">
                        ${parseFloat(lift) >= 0 ? '+' : ''}${lift}%
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <div>
                        <div class="text-[9px] font-bold uppercase tracking-widest text-muted-premium">Confidence</div>
                        <div class="text-xl font-black text-white">${((1 - pVal) * 100).toFixed(1)}%</div>
                    </div>
                    <div class="h-10 w-px bg-white/10"></div>
                    <div>
                        <div class="text-[9px] font-bold uppercase tracking-widest text-muted-premium">Result</div>
                        <div class="text-[10px] font-black uppercase ${pVal < 0.05 ? 'text-emerald-500' : 'text-white/40'}">
                            ${pVal < 0.05 ? 'Winner Declared' : 'Inconclusive'}
                        </div>
                    </div>
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
            style={{ width: '100%', aspectRatio: '1.6/1' }} 
        />
    );
};

export default ABTesting;
