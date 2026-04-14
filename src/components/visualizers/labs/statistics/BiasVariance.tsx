import React from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const BiasVariance = () => {
    const boardRef = React.useRef<HTMLDivElement>(null);
    const [stats, setStats] = React.useState({ bias: 0, variance: 0 });

    React.useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-2, 2, 2, -2],
            axis: false,
            showNavigation: false,
            showCopyright: false
        });

        // 1. Target (The Bullseye)
        board.create('circle', [[0, 0], 0.2], { strokeColor: '#E98074', strokeWidth: 2, name: '', fixed: true });
        board.create('circle', [[0, 0], 0.5], { strokeColor: '#E98074', strokeWidth: 1, name: '', fixed: true, dash: 2 });
        board.create('circle', [[0, 0], 1.0], { strokeColor: '#E98074', strokeWidth: 1, name: '', fixed: true, dash: 3 });

        // 2. Control Sliders
        const biasSlider = board.create('slider', [[-1.5, -1.5], [-0.5, -1.5], [0, 0.2, 1.2]], { name: 'Bias', color: '#E98074' });
        const varSlider = board.create('slider', [[0.5, -1.5], [1.5, -1.5], [0, 0.3, 0.8]], { name: 'Variance', color: '#8E9775' });

        // 3. Simulated Shots (Model Predictions)
        const n = 15;
        const shots: any[] = [];
        for (let i = 0; i < n; i++) {
            const s = board.create('point', [
                () => {
                    // Bias moves the whole cluster center away from (0,0)
                    const center = biasSlider.Value();
                    // Variance spreads the points out
                    const spread = varSlider.Value();
                    return center + (Math.random() - 0.5) * 2 * spread;
                },
                () => {
                    const center = biasSlider.Value();
                    const spread = varSlider.Value();
                    return center + (Math.random() - 0.5) * 2 * spread;
                }
            ], { size: 3, color: '#D8C3A5', name: '', opacity: 0.6 });
            shots.push(s);
        }

        const updateStats = () => {
            setStats({ bias: biasSlider.Value(), variance: varSlider.Value() });
        };

        biasSlider.on('drag', updateStats);
        varSlider.on('drag', updateStats);
        
        // Initial stat set
        updateStats();

        // 4. Theoretical Text
        // 4. Theoretical Text: Step-by-Step Error Decomposition
        board.create('text', [-1.8, 1.8, () => {
             const b = biasSlider.Value();
             const v = varSlider.Value();
             const error = b*b + v;
             return renderTex(`
                \\begin{aligned}
                \\text{Total Error} &\\approx \\text{Bias}^2 + \\text{Variance} \\\\
                &\\approx (${b.toFixed(2)})^2 + ${v.toFixed(2)} \\\\
                &\\approx ${error.toFixed(2)}
                \\end{aligned}
             `, true);
        }], { fontSize: 13, color: '#D8C3A5' });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, []);

    return (
        <div className="flex flex-col items-center">
            <div className="flex gap-8 mb-4 p-4 bg-bg-secondary rounded-2xl border border-border-premium shadow-xl">
                <div className="text-center">
                    <div className="text-[10px] uppercase tracking-widest text-muted-premium">Bias (Offset)</div>
                    <div className="text-2xl font-black text-rose-500">{stats.bias.toFixed(2)}</div>
                </div>
                <div className="text-center">
                    <div className="text-[10px] uppercase tracking-widest text-muted-premium">Variance (Spread)</div>
                    <div className="text-2xl font-black text-emerald-500">{stats.variance.toFixed(2)}</div>
                </div>
            </div>
            <div 
                ref={boardRef} 
                className="jxgbox rounded-3xl shadow-2xl border border-white/10" 
                style={{ width: '100%', aspectRatio: '1.6/1', maxWidth: '850px' }} 
            />
        </div>
    );
};

export default BiasVariance;
