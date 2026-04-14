import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const ChainRule = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-1, 6, 11, -1],
            axis: false,
            showNavigation: false,
            showCopyright: false
        });

        // Split visualizer
        // Left side: Inner function g(x) = x^2 / 4
        // Right side: Outer function f(u) = sin(u) + 3

        const g = (x: number) => x * x / 4;
        const dg = (x: number) => x / 2;
        const f = (u: number) => Math.sin(u) + 3;
        const df = (u: number) => Math.cos(u);

        // Grid lines to separate
        board.create('segment', [[5, 0], [5, 6]], { strokeColor: '#aaaaaa', dash: 2 });

        // Left Plot: g(x)
        const ax1 = board.create('axis', [[0, 0], [1, 0]], { strokeColor: '#aaaaaa' });
        const ax2 = board.create('axis', [[0, 0], [0, 1]], { strokeColor: '#aaaaaa' });
        board.create('functiongraph', [g, 0, 4.5], { strokeColor: '#8E9775', strokeWidth: 3 });

        // Right Plot: f(u) - Shifted by +5.5 on X
        const f_shifted = (x: number) => f(x - 5.5);
        board.create('functiongraph', [f_shifted, 5.5, 10], { strokeColor: '#E98074', strokeWidth: 3 });
        board.create('segment', [[5.5, 0], [10, 0]], { strokeColor: '#aaaaaa' });
        board.create('segment', [[5.5, 0], [5.5, 6]], { strokeColor: '#aaaaaa' });

        // Sliders and Interaction
        const x_val = board.create('slider', [[0.5, 0.5], [3.5, 0.5], [0, 2, 4]], { name: renderTex('x'), color: '#8E9775' });
        
        // Point on g(x)
        const pG = board.create('point', [() => x_val.Value(), () => g(x_val.Value())], { 
            name: renderTex('g(x)'), 
            color: '#8E9775',
            size: 4
        });

        // Result u = g(x) maps to the input of f(u)
        const u = () => g(x_val.Value());
        
        // Point on f(u)
        const pF = board.create('point', [() => 5.5 + u(), () => f(u())], {
            name: renderTex('f(g(x))'),
            color: '#E98074',
            size: 4
        });

        // Connector line showing the value transfer
        board.create('arrow', [[4.5, () => u()], [5.5, () => u()]], { strokeColor: '#E98074', dash: 1, strokeWidth: 1 });

        // Derivatives display
        board.create('text', [0.5, 5, () => {
            const dg_val = dg(x_val.Value()).toFixed(2);
            return renderTex(`\\frac{dg}{dx} = ${dg_val}`, true);
        }], { fontSize: 16, color: '#8E9775', parse: false });

        board.create('text', [6, 5, () => {
            const df_val = df(u()).toFixed(2);
            return renderTex(`\\frac{df}{dg} = ${df_val}`, true);
        }], { fontSize: 16, color: '#E98074', parse: false });

        board.create('text', [3, 0.5, () => {
            const total = (dg(x_val.Value()) * df(u())).toFixed(2);
            return renderTex(`\\frac{df}{dx} = \\frac{df}{dg} \\cdot \\frac{dg}{dx} = ${total}`, true);
        }], { fontSize: 18, parse: false });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, []);

    return (
        <div 
            ref={boardRef} 
            className="jxgbox rounded-3xl shadow-2xl border border-white/10" 
            style={{ width: '100%', aspectRatio: '1.8/1' }} 
        />
    );
};

export default ChainRule;
