import React from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const RandomVariables = () => {
    const boardRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-1, 6, 11, -1],
            axis: false,
            showNavigation: false,
            showCopyright: false
        });

        // 1. Setup: Sample Space (Left-ish) and Real Line (Right-ish)
        board.create('text', [0.5, 5.5, 'Sample Space (\\Omega)'], { fontSize: 16, color: '#D8C3A5' });
        board.create('text', [6, 5.5, 'Real Number Line (\\mathbb{R})'], { fontSize: 16, color: '#E98074' });

        const rLine = board.create('axis', [[6, 2], [10, 2]], { strokeColor: '#aaaaaa', ticks: { visible: true, label: { visible: true } } });

        // 2. Outcomes in Omega
        const outcomes: any[] = [];
        for (let i = 0; i < 6; i++) {
            const y = 4.5 - i * 0.7;
            const p = board.create('point', [1, y], { 
                name: `\u03c9_{${i+1}}`, 
                size: 4, 
                color: '#D8C3A5', 
                fixed: true,
                label: { offset: [-15, 0], color: '#D8C3A5' }
            });
            outcomes.push(p);
        }

        // 3. Mapping Function Slider (Controls the value of outcomes)
        const scale = board.create('slider', [[6, 0.5], [9, 0.5], [0, 1, 3]], { name: 'Mapping Factor (k)', color: '#E98074' });
        const shift = board.create('slider', [[6, 0], [9, 0], [-2, 0, 2]], { name: 'Bias (b)', color: '#8E9775' });

        // 4. Mapped Points on Real Line
        outcomes.forEach((out, i) => {
            const val = () => (i + 1) * scale.Value() + shift.Value();
            
            // The mapping arrow
            board.create('arrow', [out, [() => 6 + (val() / 2), 2]], { 
                strokeColor: '#D8C3A5', 
                strokeWidth: 1, 
                dash: 2,
                opacity: 0.3
            });

            // The image point
            board.create('point', [() => 6 + (val() / 2), 2], {
                name: '',
                size: 5,
                color: '#E98074',
                strokeColor: 'white'
            });

            board.create('text', [() => 6 + (val() / 2), 2.3, () => `X(\u03c9_{${i+1}}) = ${val().toFixed(1)}`], {
                fontSize: 10,
                color: '#E98074'
            });
        });

        // Conclusion Text
        board.create('text', [0.2, 0, () => {
             return `<div class="p-4 bg-bg-secondary border border-border-premium rounded-xl shadow-xl">
                <div class="text-[10px] font-black uppercase tracking-widest text-accent-premium mb-1">Concept</div>
                <div class="text-sm font-bold text-white">
                    X is a function: $X: \\Omega \\to \\mathbb{R}$.
                </div>
                <div class="mt-1 text-[9px] text-muted-premium italic">
                    Change $k$ and $b$ to redefine the mapping $X(\omega) = k \cdot i + b$.
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

export default RandomVariables;
