import React, { useEffect, useRef, useState } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const PartialDerivatives3D = () => {
    const boardRef = useRef<HTMLDivElement>(null);
    const [funcType, setFuncType] = useState<'wave' | 'bowl' | 'saddle'>('wave');

    useEffect(() => {
        if (!boardRef.current) return;

        // Cleanup previous board if any
        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-5, 5, 5, -5],
            axis: false,
            showNavigation: true,
            showCopyright: false,
            pan: { enabled: true },
            zoom: { enabled: true }
        });

        const box = [-3, 3];
        const view = board.create('view3d', [[-3, -1], [6, 6], [box, box, box]], {
            projection: 'central',
            xPlaneRear: { visible: false },
            yPlaneRear: { visible: false },
            azimuth: 0.8,
            elevation: 0.5
        });

        // Function definitions
        let F_txt = '';
        if (funcType === 'wave') F_txt = 'cos(x) * sin(y)';
        else if (funcType === 'bowl') F_txt = '0.2 * (x^2 + y^2) - 2';
        else F_txt = '0.2 * (x^2 - y^2)';

        const F = board.jc.snippet(F_txt, true, 'x,y');
        
        // Symbolic derivatives for tangent vectors
        const Fdx = board.jc.snippet(`D(${F_txt}, x)`, true, 'x,y');
        const Fdy = board.jc.snippet(`D(${F_txt}, y)`, true, 'x,y');

        // Surface mesh
        view.create('functiongraph3d', [F, box, box], {
            strokeWidth: 0.5,
            stepsU: 40,
            stepsV: 40,
            strokeColor: '#D8C3A5',
            fillColor: '#D8C3A5',
            fillOpacity: 0.2
        });

        // Interactive Sliders for (x0, y0)
        const x0 = board.create('slider', [[-4.5, -4], [-2, -4], [-3, 0.5, 3]], { name: renderTex('x_0'), color: '#E98074' });
        const y0 = board.create('slider', [[1, -4], [3.5, -4], [-3, 1, 3]], { name: renderTex('y_0'), color: '#8E9775' });

        // Base point on xy-plane
        const Axy = view.create('point3d', [() => x0.Value(), () => y0.Value(), -3], { 
            visible: true, 
            size: 2, 
            color: '#aaaaaa', 
            name: '' 
        });

        // Point on Surface
        const A = view.create('point3d', [() => [x0.Value(), y0.Value(), F(x0.Value(), y0.Value())]], {
            name: renderTex('P'),
            color: '#E98074',
            size: 4
        });

        // Vertical indicator line
        view.create('line3d', [Axy, A], { dash: 1, strokeColor: '#aaaaaa' });

        // Tangent Vectors
        const dFx = () => Fdx(x0.Value(), y0.Value());
        const dFy = () => Fdy(x0.Value(), y0.Value());
        
        // Proper normalized tangent vectors for JSXGraph plane3d
        // Input for plane3d: [point, vec1, vec2, range1, range2]
        const v1 = [1, 0, dFx];
        const v2 = [0, 1, dFy];

        // Tangent Plane
        view.create('plane3d', [A, v1, v2, [-1, 1], [-1, 1]], {
            fillOpacity: 0.6,
            fillColor: '#8E9775',
            strokeWidth: 0.5,
            strokeColor: '#8E9775'
        });

        // Current Gradient Text
        board.create('text', [-4.5, 4.5, () => {
            const dx = dFx().toFixed(2);
            const dy = dFy().toFixed(2);
            return renderTex(`\\frac{\\partial f}{\\partial x} = ${dx}, \\, \\frac{\\partial f}{\\partial y} = ${dy}`, true);
        }], { fontSize: 16, parse: false });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, [funcType]);

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="flex gap-2 mb-6">
                {(['wave', 'bowl', 'saddle'] as const).map(t => (
                    <button
                        key={t}
                        onClick={() => setFuncType(t)}
                        className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all
                            ${funcType === t 
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

export default PartialDerivatives3D;
