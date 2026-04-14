import React from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const ANOVA = () => {
    const boardRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-1, 12, 11, -1],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // 1. Group Sliders (Means of 3 groups)
        const mu1 = board.create('slider', [[1, 11], [4, 11], [1, 4, 10]], { name: 'μ₁', color: '#E98074' });
        const mu2 = board.create('slider', [[1, 10], [4, 10], [1, 5, 10]], { name: 'μ₂', color: '#8E9775' });
        const mu3 = board.create('slider', [[1, 9], [4, 9], [1, 6, 10]], { name: 'μ₃', color: '#D8C3A5' });

        const sigma = board.create('slider', [[6, 11], [9, 11], [0.5, 1, 3]], { name: 'σ_within', color: '#aaaaaa' });

        // 2. Sample Data simulation (Visual only)
        const n = 10;
        const generatePoints = (muFunc: () => number, color: string, offset: number) => {
            for (let i = 0; i < n; i++) {
                board.create('point', [
                    () => muFunc() + (Math.random() - 0.5) * sigma.Value() * 2,
                    offset
                ], { size: 2, color: color, name: '', opacity: 0.5 });
            }
        };

        generatePoints(() => mu1.Value(), '#E98074', 1);
        generatePoints(() => mu2.Value(), '#8E9775', 2);
        generatePoints(() => mu3.Value(), '#D8C3A5', 3);

        // 3. Stats Display
        board.create('text', [0.5, 7, () => {
            const m1 = mu1.Value();
            const m2 = mu2.Value();
            const m3 = mu3.Value();
            const grandMean = (m1 + m2 + m3) / 3;
            const ssBetween = Math.pow(m1 - grandMean, 2) + Math.pow(m2 - grandMean, 2) + Math.pow(m3 - grandMean, 2);
            const fStat = ssBetween / (sigma.Value() ** 2);
            
            return `<div class="p-6 bg-bg-secondary border-2 border-border-premium rounded-2xl shadow-xl w-[300px]">
                <div class="text-[10px] font-black uppercase tracking-widest text-muted-premium mb-1 text-center">ANOVA F-Statistic</div>
                <div class="text-4xl font-black text-center text-accent-premium">${fStat.toFixed(2)}</div>
                <div class="mt-4 space-y-2">
                    <div class="flex justify-between text-[11px] font-bold">
                        <span class="text-muted-premium uppercase">Variance Ratio</span>
                        <span class="text-white">${(fStat > 10 ? 'Significant' : 'Low')}</span>
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
            style={{ width: '100%', aspectRatio: '1.2/1' }} 
        />
    );
};

export default ANOVA;
