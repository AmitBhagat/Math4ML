import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const Determinants = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-8, 8, 8, -8],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // Matrix Inputs (Sliders)
        const a = board.create('slider', [[-7, -4.5], [-3, -4.5], [-2, 2, 2]], { name: renderTex('a'), color: '#E98074' });
        const b = board.create('slider', [[-7, -5.5], [-3, -5.5], [-2, 0.5, 2]], { name: renderTex('b'), color: '#E98074' });
        const c = board.create('slider', [[1, -4.5], [5, -4.5], [-2, 0.5, 2]], { name: renderTex('c'), color: '#D8C3A5' });
        const d = board.create('slider', [[1, -5.5], [5, -5.5], [-2, 2, 2]], { name: renderTex('d'), color: '#D8C3A5' });

        // Vertices of the transformed square
        const p0 = board.create('point', [0, 0], { visible: false, fixed: true });
        const p1 = board.create('point', [() => a.Value(), () => c.Value()], { visible: false });
        const p2 = board.create('point', [() => a.Value() + b.Value(), () => c.Value() + d.Value()], { visible: false });
        const p3 = board.create('point', [() => b.Value(), () => d.Value()], { visible: false });

        // Area Polygon
        board.create('polygon', [p0, p1, p2, p3], { 
            fillColor: '#E98074', 
            fillOpacity: 0.15, 
            strokeColor: '#E98074',
            borders: { strokeWidth: 2 }
        });

        // Column Vectors
        board.create('arrow', [[0, 0], p1], { strokeColor: '#E98074', strokeWidth: 3 });
        board.create('arrow', [[0, 0], p3], { strokeColor: '#D8C3A5', strokeWidth: 3 });

        // MathJax: Determinant Formula
        board.create('text', [-7.5, 7, () => {
            const det = a.Value() * d.Value() - b.Value() * c.Value();
            return renderTex(`\\det(A) = ad - bc = ${det.toFixed(2)}`, true);
        }], { fontSize: 18, parse: false });

        // Orientation Text
        board.create('text', [-7.5, 5.5, () => {
            const det = a.Value() * d.Value() - b.Value() * c.Value();
            const label = det < 0 
                ? '\\text{Orientation: Flipped (Negative Area)}' 
                : '\\text{Orientation: Preserved (Positive Area)}';
            return renderTex(label, false);
        }], { fontSize: 14, color: '#E98074', parse: false });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, []);

    return (
        <div 
            ref={boardRef} 
            className="jxgbox rounded-3xl shadow-2xl border border-white/10" 
            style={{ width: '100%', aspectRatio: '1/1', maxWidth: '700px' }} 
        />
    );
};

export default Determinants;
