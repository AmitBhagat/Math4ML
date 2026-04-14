import React from 'react';
import JXG from 'jsxgraph';
import { renderTex, normalInv } from '@/src/lib/mathUtils';

const ConfidenceIntervals = () => {
    const boardRef = React.useRef<HTMLDivElement>(null);
    const [stats, setStats] = React.useState({ captures: 0, total: 0 });

    React.useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-1, 10, 11, -1],
            axis: false,
            showNavigation: false,
            showCopyright: false
        });

        // 1. Foundation
        const xAxis = board.create('axis', [[0, 0], [1, 0]], { strokeColor: '#aaaaaa' });
        const populationMean = 5;
        const trueLine = board.create('segment', [[populationMean, 0], [populationMean, 10]], { 
            strokeColor: '#D8C3A5', 
            dash: 2, 
            strokeWidth: 2 
        });
        board.create('text', [populationMean + 0.2, 9.5, renderTex('\\mu_{\\text{true}}', false)], { 
            color: '#D8C3A5', parse: false 
        });

        // 2. Controls
        const confSlider = board.create('slider', [[1, 0.5], [4, 0.5], [0.5, 0.95, 0.99]], { 
            name: 'Confidence Level', 
            color: '#E98074' 
        });

        // 3. Interval Generator
        let currentTotal = 0;
        let currentCaptures = 0;
        const intervalElements: any[] = [];

        const generateIntervals = () => {
            // Clear old
            intervalElements.forEach(el => board.removeObject(el));
            intervalElements.length = 0;
            currentTotal = 0;
            currentCaptures = 0;

            const N = 20; // Show 20 samples
            const Z = normalInv(1 - (1 - confSlider.Value())/2);
            
            for (let i = 0; i < N; i++) {
                // Large sample size simulation
                const sampleMean = populationMean + (Math.random() - 0.5) * 2;
                const margin = Z * 0.4; // simulated standard error
                const y = 8.5 - (i * 0.4);

                const left = sampleMean - margin;
                const right = sampleMean + margin;
                const captures = (left <= populationMean && right >= populationMean);

                if (captures) currentCaptures++;
                currentTotal++;

                const seg = board.create('segment', [[left, y], [right, y]], {
                    strokeColor: captures ? '#8E9775' : '#E98074',
                    strokeWidth: 3
                });
                const dot = board.create('point', [sampleMean, y], {
                    size: 2,
                    color: captures ? '#8E9775' : '#E98074',
                    name: ''
                });
                intervalElements.push(seg, dot);
            }
            setStats({ captures: currentCaptures, total: currentTotal });
        };

        // Button to resample
        const btn = board.create('button', [7, 0.5, 'Resample', generateIntervals], {
            cssClass: 'premium-button'
        });

        // Initial run
        generateIntervals();

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, []);

    return (
        <div className="flex flex-col items-center">
            <div className="flex gap-8 mb-4 p-4 bg-bg-secondary rounded-2xl border border-border-premium">
                <div className="text-center">
                    <div className="text-[10px] uppercase tracking-widest text-muted-premium">Capture Rate</div>
                    <div className="text-2xl font-black text-accent-premium">
                        {((stats.captures / stats.total) * 100 || 0).toFixed(0)}%
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-[10px] uppercase tracking-widest text-muted-premium">Misses</div>
                    <div className="text-2xl font-black text-rose-500">
                        {stats.total - stats.captures}
                    </div>
                </div>
            </div>
            <div 
                ref={boardRef} 
                className="jxgbox rounded-3xl shadow-2xl border border-white/10" 
                style={{ width: '100%', aspectRatio: '1.2/1', maxWidth: '800px' }} 
            />
        </div>
    );
};

export default ConfidenceIntervals;
