import React from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const LawOfLargeNumbers = () => {
    const boardRef = React.useRef<HTMLDivElement>(null);
    const [stats, setStats] = React.useState({ n: 0, heads: 0 });
    const dataRef = React.useRef<{ x: number[], y: number[] }>({ x: [], y: [] });

    React.useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-10, 1.1, 1050, -0.1],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // 1. Plotting Area
        const chart = board.create('curve', [dataRef.current.x, dataRef.current.y], { 
            strokeColor: '#E98074', strokeWidth: 2 
        });

        const target = board.create('segment', [[0, 0.5], [1000, 0.5]], { 
            strokeColor: '#8E9775', dash: 2, strokeWidth: 1 
        });
        board.create('text', [10, 0.55, 'True Probability (0.5)'], { color: '#8E9775', fontSize: 10 });

        // 2. Control logic
        let interval: any = null;
        let cumulativeHeads = 0;
        let trials = 0;

        const addTrial = () => {
            if (trials >= 1000) return;
            const result = Math.random() > 0.5 ? 1 : 0;
            cumulativeHeads += result;
            trials++;
            
            dataRef.current.x.push(trials);
            dataRef.current.y.push(cumulativeHeads / trials);
            
            board.update();
            if (trials % 10 === 0) {
                 setStats({ n: trials, heads: cumulativeHeads });
            }
        };

        const reset = () => {
            trials = 0;
            cumulativeHeads = 0;
            dataRef.current.x = [];
            dataRef.current.y = [];
            board.update();
            setStats({ n: 0, heads: 0 });
        };

        // UI Buttons inside JSXGraph
        const btnFlip = board.create('button', [800, 0.9, 'Flip 50', () => {
             for(let i=0; i<50; i++) addTrial();
        }], { cssClass: 'premium-button' });

        const btnReset = board.create('button', [800, 0.8, 'Reset', reset], { cssClass: 'premium-button' });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, []);

    return (
        <div className="flex flex-col items-center">
            <div className="flex gap-8 mb-4 p-4 bg-bg-secondary rounded-2xl border border-border-premium shadow-xl">
                <div className="text-center">
                    <div className="text-[10px] uppercase tracking-widest text-muted-premium">Trials (n)</div>
                    <div className="text-2xl font-black text-white">{stats.n}</div>
                </div>
                <div className="text-center">
                    <div className="text-[10px] uppercase tracking-widest text-muted-premium">Heads %</div>
                    <div className="text-2xl font-black text-accent-premium">
                        {stats.n > 0 ? ((stats.heads / stats.n) * 100).toFixed(1) : '0.0'}%
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

export default LawOfLargeNumbers;
