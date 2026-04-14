import React from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const CentralLimitTheorem = () => {
    const boardRef = React.useRef<HTMLDivElement>(null);
    const [stats, setStats] = React.useState({ samples: 0 });
    const countsRef = React.useRef<Record<number, number>>({});

    React.useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-1, 0.4, 21, -0.05],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // 1. Controls
        const nSlider = board.create('slider', [[2, 0.35], [8, 0.35], [1, 5, 20]], { 
            name: 'Number of Variables (N)', 
            color: '#E98074',
            snapWidth: 1 
        });

        // 2. Histogram Bars (Pre-create a sufficient number)
        const bars: any[] = [];
        for (let i = 0; i <= 20; i++) {
            const b = board.create('segment', [[i, 0], [i, () => (countsRef.current[i] || 0) / Math.max(1, stats.samples)]], {
                strokeColor: '#E98074', strokeWidth: 10, opacity: 0.6
            });
            bars.push(b);
        }

        // 3. Logic
        const runSimulation = (batch: number) => {
            const N = Math.round(nSlider.Value());
            for (let i = 0; i < batch; i++) {
                // Sum of N Uniform-ish (0 to 1) distributions
                let sum = 0;
                for (let j = 0; j < N; j++) sum += Math.random();
                
                // Scale sum to fit our 0-20 x-axis
                const scaledSum = Math.round((sum / N) * 20);
                countsRef.current[scaledSum] = (countsRef.current[scaledSum] || 0) + 1;
            }
            setStats(prev => ({ samples: prev.samples + batch }));
            board.update();
        };

        const reset = () => {
            countsRef.current = {};
            setStats({ samples: 0 });
            board.update();
        };

        // UI Buttons
        board.create('button', [14, 0.35, 'Add 500 Samples', () => runSimulation(500)], { cssClass: 'premium-button' });
        board.create('button', [14, 0.28, 'Reset', reset], { cssClass: 'premium-button' });

        // Instruction
        board.create('text', [12, 0.15, () => {
             return `<div class="p-4 bg-bg-secondary border border-border-premium rounded-xl shadow-xl w-[220px]">
                <div class="text-[10px] font-black uppercase tracking-widest text-accent-premium mb-1">CLT in Action</div>
                <div class="text-xs text-white">
                    Watch the sum of $N$ random values form a Bell Curve.
                </div>
                <div class="mt-2 text-[9px] text-muted-premium italic">
                    Even though individual values are uniform, their SUM is Gaussian.
                </div>
            </div>`;
        }], { parse: false });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, []);

    return (
        <div className="flex flex-col items-center">
            <div className="flex gap-8 mb-4 p-4 bg-bg-secondary rounded-2xl border border-border-premium shadow-xl">
                <div className="text-center">
                    <div className="text-[10px] uppercase tracking-widest text-muted-premium">Total Samples</div>
                    <div className="text-2xl font-black text-white">{stats.samples}</div>
                </div>
                <div className="text-center">
                    <div className="text-[10px] uppercase tracking-widest text-muted-premium">Dist Shape</div>
                    <div className="text-sm font-bold text-accent-premium uppercase tracking-widest">
                        {stats.samples < 100 ? 'Random' : 'Gaussian (Normal)'}
                    </div>
                </div>
            </div>
            <div 
                ref={boardRef} 
                className="jxgbox rounded-3xl shadow-2xl border border-white/10" 
                style={{ width: '100%', aspectRatio: '1.5/1', maxWidth: '850px' }} 
            />
        </div>
    );
};

export default CentralLimitTheorem;
