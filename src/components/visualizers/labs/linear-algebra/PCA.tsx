import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';

const PCA = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = true;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-8, 8, 8, -8],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // Data points (draggable)
        const points = [
            board.create('point', [2, 1], { color: '#E98074', size: 4, name: '' }),
            board.create('point', [-1.5, -1], { color: '#E98074', size: 4, name: '' }),
            board.create('point', [3, 4], { color: '#E98074', size: 4, name: '' }),
            board.create('point', [-2, -3], { color: '#E98074', size: 4, name: '' }),
            board.create('point', [0.5, 2], { color: '#E98074', size: 4, name: '' }),
            board.create('point', [4, 2], { color: '#E98074', size: 4, name: '' }),
        ];

        // Centroid Computation
        const meanX = () => points.reduce((acc, p) => acc + p.X(), 0) / points.length;
        const meanY = () => points.reduce((acc, p) => acc + p.Y(), 0) / points.length;
        const centroid = board.create('point', [meanX, meanY], { color: '#D8C3A5', size: 6, face: 'plus', name: '\\mu' });

        // Covariance Matrix & Eigen-analysis
        const getPCAData = () => {
            const mx = meanX(), my = meanY();
            let c00 = 0, c01 = 0, c11 = 0;
            points.forEach(p => {
                const dx = p.X() - mx;
                const dy = p.Y() - my;
                c00 += dx * dx;
                c01 += dx * dy;
                c11 += dy * dy;
            });
            const n = points.length - 1;
            c00 /= n; c01 /= n; c11 /= n;

            const tr = c00 + c11, det = c00 * c11 - c01 * c01;
            const disc = Math.sqrt(Math.max(0, tr * tr / 4 - det));
            const l1 = tr / 2 + disc, l2 = tr / 2 - disc;

            let v1: [number, number] = [1, 0];
            if (Math.abs(c01) > 1e-4) v1 = [c01, l1 - c00];
            else v1 = l1 - c00 > l1 - l1 ? [1, 0] : [0, 1];

            const m1 = Math.sqrt(v1[0]**2 + v1[1]**2) || 1;
            v1 = [v1[0]/m1, v1[1]/m1];
            const v2: [number, number] = [-v1[1], v1[0]];

            return { l1, l2, v1, v2, mx, my };
        };

        // PC1 Vector
        const pc1Tip = board.create('point', [
            () => { const d = getPCAData(); return d.mx + d.v1[0] * Math.sqrt(d.l1) * 2; },
            () => { const d = getPCAData(); return d.my + d.v1[1] * Math.sqrt(d.l1) * 2; }
        ], { visible: false });
        board.create('arrow', [centroid, pc1Tip], { strokeColor: '#D8C3A5', strokeWidth: 4, name: 'PC1' });

        // PC2 Vector
        const pc2Tip = board.create('point', [
            () => { const d = getPCAData(); return d.mx + d.v2[0] * Math.sqrt(d.l2) * 2; },
            () => { const d = getPCAData(); return d.my + d.v2[1] * Math.sqrt(d.l2) * 2; }
        ], { visible: false });
        board.create('arrow', [centroid, pc2Tip], { strokeColor: '#8E9775', strokeWidth: 3, name: 'PC2' });

        // MathJax: Variance Explained
        board.create('text', [-7.5, 7, () => {
            const { l1, l2 } = getPCAData();
            const ratio = (l1 / (l1 + l2) * 100).toFixed(1);
            return `\\[\\text{PC1 Variance Expl: } ${ratio}\\% \\]`;
        }], { fontSize: 16 });

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

export default PCA;
