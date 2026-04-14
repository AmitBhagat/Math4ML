import React, { useEffect, useRef, useState } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const Hessian3D = () => {
    const boardRef = useRef<HTMLDivElement>(null);
    const [funcType, setFuncType] = useState<'bowl' | 'saddle' | 'cap'>('bowl');

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

        // Surface Definitions
        const functions = {
            bowl: '0.2 * (x^2 + y^2) - 2',
            cap: '2 - 0.2 * (x^2 + y^2)',
            saddle: '0.2 * (x^2 - y^2)'
        };
        const f_txt = functions[funcType];
        const f = board.jc.snippet(f_txt, true, 'x,y');

        // Hessian Elements (Precomputed for standard types)
        const Hxx = funcType === 'bowl' ? 0.4 : funcType === 'cap' ? -0.4 : 0.4;
        const Hyy = funcType === 'bowl' ? 0.4 : funcType === 'cap' ? -0.4 : -0.4;
        const Hxy = 0;

        view.create('functiongraph3d', [f, box, box], {
            strokeWidth: 0.5,
            stepsU: 40,
            stepsV: 40,
            strokeColor: '#D8C3A5',
            fillColor: '#D8C3A5',
            fillOpacity: 0.1
        });

        // Sliders for P(x0, y0)
        const x0 = board.create('slider', [[-4.5, -4], [-2, -4], [-2, 0, 2]], { name: renderTex('x_0'), color: '#E98074' });
        const y0 = board.create('slider', [[1, -4], [3.5, -4], [-2, 0, 2]], { name: renderTex('y_0'), color: '#8E9775' });

        // Point on Surface
        const P = view.create('point3d', [() => x0.Value(), () => y0.Value(), () => f(x0.Value(), y0.Value())], {
            name: renderTex('P'),
            color: '#E98074',
            size: 5
        });

        // Quadratic Approximation (Hessian Bowl)
        // Q(x,y) = f(P) + df/dx*(x-x0) + df/dy*(y-y0) + 0.5 * [Hxx*(x-x0)^2 + 2*Hxy*(x-x0)(y-y0) + Hyy*(y-y0)^2]
        // Note: For simplicity and clear intuition, we focus on the curvature part
        const Fdx = board.jc.snippet(`D(${f_txt}, x)`, true, 'x,y');
        const Fdy = board.jc.snippet(`D(${f_txt}, y)`, true, 'x,y');

        const q = (x: number, y: number) => {
            const dx = x - x0.Value();
            const dy = y - y0.Value();
            const v = f(x0.Value(), y0.Value());
            const slope = Fdx(x0.Value(), y0.Value()) * dx + Fdy(x0.Value(), y0.Value()) * dy;
            const curvature = 0.5 * (Hxx * dx * dx + 2 * Hxy * dx * dy + Hyy * dy * dy);
            return v + slope + curvature;
        };

        const approxBox = [-1, 1]; // Local small surface
        view.create('functiongraph3d', [q, () => [x0.Value() - 1, x0.Value() + 1], () => [y0.Value() - 1, y0.Value() + 1]], {
            strokeWidth: 1,
            stepsU: 15,
            stepsV: 15,
            strokeColor: '#E98074',
            fillColor: '#E98074',
            fillOpacity: 0.5
        });

        // Info Text
        board.create('text', [-4.5, 4.5, () => {
            const det = (Hxx * Hyy - Hxy * Hxy).toFixed(2);
            return renderTex(`\\det(H) = ${det}`, true);
        }], { fontSize: 18, parse: false });

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, [funcType]);

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="flex gap-2 mb-6">
                {(['bowl', 'cap', 'saddle'] as const).map(t => (
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

export default Hessian3D;
