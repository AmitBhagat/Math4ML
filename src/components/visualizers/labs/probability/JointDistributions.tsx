import React from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const JointDistributions = () => {
    const boardRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-2, 6, 11, -2],
            axis: false,
            showNavigation: false,
            showCopyright: false
        });

        // 1. Controls
        const rho = board.create('slider', [[1, -1], [5, -1], [-0.99, 0, 0.99]], { name: 'ρ', color: '#E98074' });

        // 2. Main Plot Region (Heatmap/Ellipse)
        const center = [3, 3];
        const ellipse = board.create('ellipse', [
            [() => 3 - rho.Value(), () => 3 - rho.Value()], 
            [() => 3 + rho.Value(), () => 3 + rho.Value()], 
            4
        ], {
            strokeColor: '#E98074', fillOpacity: 0.1, fillColor: '#E98074'
        });

        // 3. Marginals (On the axes)
        const gauss = (x: number, m: number, s: number) => (1 / (s * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - m) / s, 2));
        
        // Marginal X (Projected on Bottom)
        board.create('functiongraph', [(x: number) => gauss(x, 3, 1) * 2 - 1.5, 0, 6], { 
            strokeColor: '#D8C3A5', strokeWidth: 2 
        });
        board.create('text', [3, -1.8, renderTex('P(X)')], { color: '#D8C3A5' });

        // Marginal Y (Projected on Left)
        board.create('functiongraph', [(y: number) => gauss(y, 3, 1) * 2 - 1.5, 0, 6], { 
            strokeColor: '#8E9775', strokeWidth: 2, 
            transform: board.create('transform', [Math.PI/2, 0, 0], { type: 'rotate' }) 
        });
        board.create('text', [-1.8, 3, renderTex('P(Y)')], { color: '#8E9775' });

        // Axes
        board.create('axis', [[0, -1.5], [6, -1.5]], { strokeColor: '#aaa' });
        board.create('axis', [[-1.5, 0], [-1.5, 6]], { strokeColor: '#aaa' });

        // Instruction
        board.create('text', [6, 4.5, () => {
             return `<div class="p-4 bg-bg-secondary border border-border-premium rounded-xl shadow-xl w-[250px]">
                <div class="text-[10px] font-black uppercase tracking-widest text-accent-premium mb-1">Joint Distribution</div>
                <div class="text-xs text-white">
                    The joint distribution $P(X, Y)$ shows how two variables vary together.
                </div>
                <div class="mt-2 text-[9px] text-muted-premium italic">
                    Notice: Changing correlation $\\rho$ tilts the joint 'cloud' but keeps the marginal projections $P(X)$ and $P(Y)$ identical!
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
            style={{ width: '100%', aspectRatio: '1.2/1', maxWidth: '850px' }} 
        />
    );
};

export default JointDistributions;
