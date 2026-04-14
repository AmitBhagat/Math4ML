import React from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const Variance = () => {
    const boardRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-5, 1.2, 5, -0.4],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // 1. Controls
        const sigma = board.create('slider', [[-4, 1], [-1, 1], [0.1, 1, 3]], { name: 'σ', color: '#8E9775' });
        const mu = 0; // Fixed mean for clarity on variance

        // 2. Gaussian Plot
        const f = (x: number) => {
            const s = sigma.Value();
            return (1 / (s * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mu) / s, 2));
        };

        const fGraph = board.create('functiongraph', [f], { strokeColor: '#E98074', strokeWidth: 4 });

        // 3. Sigma Shading
        board.create('integral', [[() => -sigma.Value(), () => sigma.Value()], fGraph], {
            fillColor: '#E98074', fillOpacity: 0.1, strokeColor: 'transparent', label: { visible: false }
        });

        // 4. Data Point simulation (Scattered on the line)
        const points: any[] = [];
        for (let i = 0; i < 20; i++) {
            const p = board.create('point', [
                () => {
                    // Primitive Box-Muller-ish transform for visual spread
                    return (Math.random() - 0.5) * 4 * sigma.Value();
                }, 
                0
            ], { size: 3, color: '#D8C3A5', name: '', opacity: 0.4 });
            points.push(p);
        }

        // Labels
        board.create('text', [1, 0.8, () => {
            const s = sigma.Value();
            const v = (s * s).toFixed(2);
            return `<div class="p-4 bg-bg-secondary border border-border-premium rounded-xl shadow-xl">
                <div class="text-[10px] font-black uppercase tracking-widest text-accent-premium mb-1">Spread vs Variance</div>
                <div class="text-2xl font-black text-white">
                    ${renderTex(`\\sigma^2 = ${v}`, false)}
                </div>
                <div class="mt-2 text-[9px] text-muted-premium italic">
                    Variance measures how much points 'deviate' from the mean.
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
            style={{ width: '100%', aspectRatio: '1.2/1', maxWidth: '800px' }} 
        />
    );
};

export default Variance;
