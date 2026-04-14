import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const MutualInformation = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boardRef.current) return;

        // Initialize Board
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-7, 8, 14, -8],
            axis: false,
            showNavigation: false,
            showCopyright: false,
            pan: { enabled: false },
            zoom: { enabled: false }
        });

        // Aesthetic Colors
        const xColor = '#D8C3A5'; // Tan
        const yColor = '#E98074'; // Salmon
        const iColor = '#8E8D8A'; // Grey for intersection
        const textColor = '#8E8D8A';

        // Sliders for H(X), H(Y), and I(X;Y)
        const hx_slider = board.create('slider', [[7, 4], [10, 4], [0.1, 2.5, 4]], { name: renderTex('H(X)'), color: xColor });
        const hy_slider = board.create('slider', [[7, 3], [10, 3], [0.1, 2.5, 4]], { name: renderTex('H(Y)'), color: yColor });
        const mi_slider = board.create('slider', [[7, 2], [10, 2], [0, 1.0, 4]], { 
            name: renderTex('I(X;Y)'), 
            color: iColor 
        });

        // Constraint: I(X;Y) <= min(H(X), H(Y))
        board.on('update', () => {
            const maxMI = Math.min(hx_slider.Value(), hy_slider.Value());
            if (mi_slider.Value() > maxMI) {
                mi_slider.setValue(maxMI);
            }
        });

        // Venn Diagram Circles
        // Area of circle = PI * r^2. We want Area proportional to Entropy.
        // So r = sqrt(H / PI)
        const getRX = () => Math.sqrt(hx_slider.Value() / Math.PI) * 4;
        const getRY = () => Math.sqrt(hy_slider.Value() / Math.PI) * 4;
        
        // Distance between centers for overlap area
        // Overlap of two circles is complex, but for visualization we can approximate 
        // distance 'd' such that intersection area is approximately I(X;Y)
        // A_int = 2*r^2*acos(d/2r) - (d/2)*sqrt(4r^2 - d^2)
        // For simplicity in a visualizer, we can map d such that d=0 is max overlap, 
        // d=r1+r2 is zero overlap.
        
        const getDistance = () => {
            const r1 = getRX();
            const r2 = getRY();
            const mi = mi_slider.Value();
            const maxMI = Math.min(hx_slider.Value(), hy_slider.Value());
            // Ratio of overlap: 0 to 1
            const ratio = mi / (maxMI || 1);
            // distance ranges from |r1-r2| (max overlap) to r1+r2 (zero overlap)
            const minD = Math.abs(r1 - r2);
            const maxD = r1 + r2;
            return maxD - ratio * (maxD - minD);
        };

        const cX = board.create('circle', [[0, 0], () => getRX()], { 
            fillColor: xColor, fillOpacity: 0.3, strokeColor: xColor, strokeWidth: 2, name: '', highlight: false 
        });
        const cY = board.create('circle', [[() => getDistance(), 0], () => getRY()], { 
            fillColor: yColor, fillOpacity: 0.3, strokeColor: yColor, strokeWidth: 2, name: '', highlight: false 
        });

        // Labels on circles
        board.create('text', [-1, 0, renderTex('H(X)')], { color: '#555', fontSize: 16 });
        board.create('text', [() => getDistance() + 1, 0, renderTex('H(Y)')], { color: '#555', fontSize: 16 });

        // Information Identity Text: Step-by-Step Calculation
        const textX = -4.5;
        board.create('text', [textX, 5, () => {
            const hx = hx_slider.Value();
            const hy = hy_slider.Value();
            const mi = mi_slider.Value();
            const hxy = hx + hy - mi;
            return renderTex(`
                \\begin{aligned}
                I(X; Y) &= H(X) + H(Y) - H(X, Y) \\\\
                I(X; Y) &= ${hx.toFixed(2)} + ${hy.toFixed(2)} - ${hxy.toFixed(2)} \\\\
                &= ${mi.toFixed(2)} \\text{ bits}
                \\end{aligned}
            `, true);
        }], { fontSize: 14, color: textColor, parse: false });

        board.create('text', [textX, 2.5, () => {
            const hx = hx_slider.Value();
            const hy = hy_slider.Value();
            const mi = mi_slider.Value();
            const hxy = hx + hy - mi;
            return renderTex(`H(X, Y) = ${hxy.toFixed(2)}`, true);
        }], { fontSize: 13, color: iColor, parse: false });

        // Intersection Label I(X;Y)
        board.create('text', [() => getDistance() / 2, -0.5, () => {
            return mi_slider.Value() > 0.1 ? renderTex('I(X;Y)') : '';
        }], { color: iColor, fontSize: 14, anchorX: 'middle' });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, []);

    return (
        <div className="space-y-4">
            <div 
                ref={boardRef} 
                className="jxgbox rounded-3xl shadow-xl border border-border-premium bg-white/50" 
                style={{ width: '100%', aspectRatio: '1.8/1', maxWidth: '800px' }} 
            />
            <div className="bg-bg-tertiary p-4 rounded-xl border border-border-premium">
                <p className="text-sm text-text-premium leading-relaxed">
                    <strong>Venn Interpretation:</strong> Mutual Information {"$I(X; Y)$"} is the 
                    intersection of two entropies. It represents the information that $X$ and $Y$ share. 
                    If {"$I(X; Y) = 0$"}, the circles are disjoint and the variables are <strong>Independent</strong>.
                </p>
                <p className="text-xs text-muted-premium mt-2 italic">
                    The total area covered by both circles is the Joint Entropy {"$H(X, Y)$"}.
                </p>
            </div>
        </div>
    );
};

export default MutualInformation;
