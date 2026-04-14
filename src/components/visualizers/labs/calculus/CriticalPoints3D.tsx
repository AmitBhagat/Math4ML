import React, { useEffect, useRef, useState } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const CriticalPoints3D = () => {
    const boardRef = useRef<HTMLDivElement>(null);
    const [pointType, setPointType] = useState<'minimum' | 'maximum' | 'saddle'>('saddle');

    useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-5, 5, 5, -5],
            axis: false,
            showNavigation: true,
            showCopyright: false
        });

        const box = [-3, 3];
        const view = board.create('view3d', [[-3, -1], [6, 6], [box, box, box]], {
            projection: 'central',
            xPlaneRear: { visible: false },
            yPlaneRear: { visible: false }
        });

        // Function definitions
        const funcMap = {
            minimum: '0.3 * (x^2 + y^2) - 2',
            maximum: '2 - 0.3 * (x^2 + y^2)',
            saddle: '0.3 * (x^2 - y^2)'
        };
        const F_txt = funcMap[pointType];
        const F = board.jc.snippet(F_txt, true, 'x,y');

        view.create('functiongraph3d', [F, box, box], {
            strokeWidth: 0.5,
            stepsU: 40,
            stepsV: 40,
            strokeColor: '#D8C3A5',
            fillColor: '#D8C3A5',
            fillOpacity: 0.2
        });

        const A = view.create('point3d', [0, 0, F(0, 0)], {
            name: renderTex(pointType.toUpperCase()),
            color: '#E98074',
            size: 6
        });

        // Curvature indicators (tangent lines at origin)
        const lineX = view.create('line3d', [[-1, 0, F(-1, 0)], [1, 0, F(1, 0)]], { 
            strokeColor: '#E98074', 
            strokeWidth: 2, 
            dash: 2 
        });
        const lineY = view.create('line3d', [[0, -1, F(0, -1)], [0, 1, F(0, 1)]], { 
            strokeColor: '#8E9775', 
            strokeWidth: 2, 
            dash: 2 
        });

        // Hessian Info
        board.create('text', [-4.5, 4.5, () => {
            let info = "";
            if (pointType === 'minimum') info = "f_{xx} > 0, \\, det(H) > 0";
            else if (pointType === 'maximum') info = "f_{xx} < 0, \\, det(H) > 0";
            else info = "det(H) < 0 \\\\ \\text{(Indefinite)}";
            return renderTex(`\\text{Criteria: } ${info}`, true);
        }], { fontSize: 16, parse: false });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, [pointType]);

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="flex gap-2 mb-6">
                {(['minimum', 'maximum', 'saddle'] as const).map(t => (
                    <button
                        key={t}
                        onClick={() => setPointType(t)}
                        className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all
                            ${pointType === t 
                                ? "bg-accent-premium text-white shadow-lg scale-105" 
                                : "bg-accent-premium/5 text-accent-premium hover:bg-accent-premium/10 border border-accent-premium/20"}`}
                    >
                        {t}
                    </button>
                ))}
            </div>
            <div 
                ref={boardRef} 
                className="jxgbox rounded-3xl shadow-2xl border border-white/10" 
                style={{ width: '100%', aspectRatio: '1/1', maxWidth: '700px' }} 
            />
        </div>
    );
};

export default CriticalPoints3D;
