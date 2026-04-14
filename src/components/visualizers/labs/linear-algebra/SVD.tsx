import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const SVD = () => {
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

        // Matrix A Sliders
        const a11 = board.create('slider', [[-7, -4.5], [-3, -4.5], [-3, 2, 3]], { name: renderTex('a_{11}'), color: '#E98074' });
        const a12 = board.create('slider', [[-7, -5.5], [-3, -5.5], [-3, 0.5, 3]], { name: renderTex('a_{12}'), color: '#E98074' });
        const a21 = board.create('slider', [[1, -4.5], [5, -4.5], [-3, 1, 3]], { name: renderTex('a_{21}'), color: '#D8C3A5' });
        const a22 = board.create('slider', [[1, -5.5], [5, -5.5], [-3, 1.5, 3]], { name: renderTex('a_{22}'), color: '#D8C3A5' });

        // Unit Circle (Input Space)
        board.create('circle', [[0, 0], 1], { strokeColor: '#8E9775', dash: 2, strokeWidth: 1, opacity: 0.4 });

        // Transformed Circle (Ellipse)
        // We simulate the ellipse by a parametric curve transformed by A
        const ellipse = board.create('curve', [
            (t: number) => a11.Value() * Math.cos(t) + a12.Value() * Math.sin(t),
            (t: number) => a21.Value() * Math.cos(t) + a22.Value() * Math.sin(t),
            0, 2 * Math.PI
        ], { strokeColor: '#E98074', strokeWidth: 3, fillColor: '#E98074', fillOpacity: 0.1 });

        // Singular Value Computation helpers
        const getSingularValues = () => {
            const m00 = a11.Value()**2 + a21.Value()**2;
            const m01 = a11.Value()*a12.Value() + a21.Value()*a22.Value();
            const m11 = a12.Value()**2 + a22.Value()**2;
            const tr = m00 + m11, det = m00*m11 - m01*m01;
            const disc = Math.sqrt(Math.max(0, tr*tr/4 - det));
            const l1 = tr/2 + disc, l2 = tr/2 - disc;
            return [Math.sqrt(l1), Math.sqrt(l2)];
        };

        // MathJax: Singular Values
        board.create('text', [-7.5, 7, () => {
            const [s1, s2] = getSingularValues();
            return renderTex(`\\sigma_1 = ${s1.toFixed(3)}, \\, \\sigma_2 = ${s2.toFixed(3)}`, true);
        }], { fontSize: 18, parse: false });

        board.create('text', [-7.5, 5, () => {
            const det = a11.Value()*a22.Value() - a12.Value()*a21.Value();
            return renderTex(`|\\det(A)| = \\sigma_1 \\sigma_2 = ${Math.abs(det).toFixed(3)}`, true);
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

export default SVD;
