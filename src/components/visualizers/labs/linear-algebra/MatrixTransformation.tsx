import React, { useEffect, useRef, useState } from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const MatrixTransformation = () => {
    const boardRef = useRef<HTMLDivElement>(null);
    const boardInstance = useRef<any>(null);
    const [showTrace, setShowTrace] = useState(false);

    useEffect(() => {
        if (!boardRef.current) return;

        // Initialize board
        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-10, 10, 10, -10],
            axis: true,
            showNavigation: true,
            showCopyright: false,
            pan: { enabled: true, needTwoFingers: true },
            zoom: { wheel: true }
        });
        boardInstance.current = board;

        // Create Sliders
        const a = board.create('slider', [[-5, -3.5], [5, -3.5], [-5, 1, 5]], { name: renderTex('a'), snapWidth: 0.1, color: '#E98074' });
        const b = board.create('slider', [[-5, -4.5], [5, -4.5], [-5, 0, 5]], { name: renderTex('b'), snapWidth: 0.1, color: '#E98074' });
        const c = board.create('slider', [[-5, -5.5], [5, -5.5], [-5, 0, 5]], { name: renderTex('c'), snapWidth: 0.1, color: '#E98074' });
        const d = board.create('slider', [[-5, -6.5], [5, -6.5], [-5, 1, 5]], { name: renderTex('d'), snapWidth: 0.1, color: '#E98074' });

        // Create Vector v
        const v = board.create('point', [2, 2], { 
            face: 'o', 
            size: 4, 
            name: renderTex('\\mathbf{v}'), 
            color: '#D8C3A5',
            label: { offset: [5, 5], fontWeight: 'bold' }
        });
        board.create('arrow', [[0, 0], v], { strokeColor: '#D8C3A5', strokeWidth: 3 });

        // Create Transformed Vector v'
        const v2 = board.create('point', [
            () => a.Value() * v.X() + b.Value() * v.Y(),
            () => c.Value() * v.X() + d.Value() * v.Y()
        ], { 
            face: 'o', 
            size: 4, 
            name: renderTex("\\mathbf{v}' = A\\mathbf{v}"), 
            fillColor: '#E98074', 
            strokeColor: '#E98074',
            label: { offset: [5, 5], fontWeight: 'bold' }
        });
        board.create('arrow', [[0, 0], v2], { strokeColor: '#E98074', strokeWidth: 2 });

        // Matrix Display (MathJax)
        board.create('text', [-9, 7.5, () => {
            const m = `\\begin{pmatrix} ${(a.Value()).toFixed(2)} & ${(b.Value()).toFixed(2)} \\\\ ${(c.Value()).toFixed(2)} & ${(d.Value()).toFixed(2)} \\end{pmatrix}`;
            return renderTex(`M = ${m}`, true);
        }], { fontSize: 16, parse: false });

        // Scaling Factor (MathJax)
        board.create('text', [-9, 4, () => {
            const magV2 = Math.sqrt(v2.X()**2 + v2.Y()**2);
            const magV = Math.sqrt(v.X()**2 + v.Y()**2);
            const lambda = magV > 0 ? (magV2 / magV).toFixed(3) : "0.000";
            return renderTex(`\\lambda = \\frac{|\\mathbf{v}'|}{|\\mathbf{v}|} = ${lambda}`, true);
        }], { fontSize: 16, parse: false });

        // Cleanup
        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, []);

    const toggleTrace = () => {
        const next = !showTrace;
        setShowTrace(next);
        if (boardInstance.current) {
            // Find points and set trace
            boardInstance.current.objectsList.forEach((obj: any) => {
                if (obj.elType === 'point') {
                    obj.setAttribute({ trace: next });
                    if (!next) obj.clearTrace();
                }
            });
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="mb-4">
                <button 
                    onClick={toggleTrace}
                    className="px-6 py-2 bg-accent-premium/10 border border-accent-premium/30 rounded-lg text-accent-premium font-black uppercase tracking-widest hover:bg-accent-premium/20 transition-all"
                >
                    {showTrace ? "Hide trace" : "Show trace"}
                </button>
            </div>
            <div 
                ref={boardRef} 
                className="jxgbox rounded-3xl shadow-2xl border border-white/10" 
                style={{ width: '100%', aspectRatio: '1/1', maxWidth: '700px' }} 
            />
        </div>
    );
};

export default MatrixTransformation;
