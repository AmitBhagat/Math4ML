import React from 'react';
import JXG from 'jsxgraph';
import { renderTex, normalInv, normalCDF } from '@/src/lib/mathUtils';

const HypothesisTesting = () => {
    const boardRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-4, 0.5, 4, -0.1],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // 1. Null Hypothesis Distribution: N(0, 1)
        const alpha = 0.05;
        const gauss = (x: number) => (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * x * x);
        const fGraph = board.create('functiongraph', [gauss], { strokeColor: '#D8C3A5', strokeWidth: 2, opacity: 0.5 });

        // 2. Alpha (Rejection Region)
        const alphaSlider = board.create('slider', [[-3.5, 0.45], [-1.5, 0.45], [0.01, 0.05, 0.2]], { 
            name: 'α', 
            color: '#E98074' 
        });

        const zCritical = () => normalInv(1 - alphaSlider.Value());

        // Shaded Rejection Region (One-tailed for simplicity in visualization)
        board.create('integral', [[() => zCritical(), 4], fGraph], {
            fillColor: '#E98074',
            fillOpacity: 0.3,
            strokeColor: 'transparent',
            label: { visible: false }
        });

        // 3. Observed Sample Z-score
        const zObs = board.create('glider', [2.0, 0, board.defaultAxes.x], { 
            name: 'z_obs', 
            color: '#403d39', 
            size: 5 
        });

        // P-value Shading
        board.create('integral', [[() => zObs.X(), 4], fGraph], {
            fillColor: '#8E9775',
            fillOpacity: 0.5,
            strokeColor: 'transparent',
            label: { visible: false }
        });

        // 4. Decision Text
        board.create('text', [-3.8, 0.3, () => {
            const pVal = (1 - normalCDF(zObs.X())).toFixed(4);
            const sig = (parseFloat(pVal) < alphaSlider.Value());
            return `<div class="p-4 bg-bg-secondary border border-border-premium rounded-xl">
                <div class="text-[10px] uppercase tracking-widest text-muted-premium">P-Value</div>
                <div class="text-2xl font-black ${sig ? 'text-emerald-500' : 'text-rose-500'}">${pVal}</div>
                <div class="mt-2 text-[10px] font-bold uppercase ${sig ? 'text-emerald-500' : 'text-rose-500'}">
                    ${sig ? 'REJECT NULL HYPOTHESIS' : 'FAIL TO REJECT'}
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

export default HypothesisTesting;
