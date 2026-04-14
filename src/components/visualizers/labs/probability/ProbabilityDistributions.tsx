import React from 'react';
import JXG from 'jsxgraph';
import { renderTex } from '@/src/lib/mathUtils';

const ProbabilityDistributions = () => {
    const boardRef = React.useRef<HTMLDivElement>(null);
    const [distType, setDistType] = React.useState<'normal' | 'poisson' | 'binomial' | 'bernoulli'>('normal');

    React.useEffect(() => {
        if (!boardRef.current) return;

        JXG.Options.text.useMathJax = false;
        const board = JXG.JSXGraph.initBoard(boardRef.current, {
            boundingbox: [-1, 2, 11, -0.2],
            axis: true,
            showNavigation: false,
            showCopyright: false
        });

        // 1. Controls based on distribution
        // Evaluate labels once per re-render (since distType is in dependency array)
        let label1 = 'p';
        if (distType === 'normal') label1 = 'μ';
        else if (distType === 'poisson') label1 = 'λ';
        
        let label2 = 'n';
        if (distType === 'normal') label2 = 'σ';

        const p1 = board.create('slider', [[1, 1.8], [4, 1.8], [0, 5, 10]], { 
            name: label1, 
            color: '#E98074' 
        });

        const p2 = board.create('slider', [[6, 1.8], [9, 1.8], [0.1, 1, 3]], { 
            name: label2, 
            color: '#8E9775',
            visible: () => distType === 'normal' || distType === 'binomial'
        });

        // 2. Distributions
        const normalPDF = (x: number) => {
            const m = p1.Value();
            const s = p2.Value();
            return (1 / (s * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - m) / s, 2));
        };

        const factorial = (n: number): number => n <= 1 ? 1 : n * factorial(n - 1);
        const poissonPMF = (k: number) => {
            const lambda = p1.Value();
            const lk = Math.round(k);
            if (lk < 0) return 0;
            return (Math.pow(lambda, lk) * Math.exp(-lambda)) / factorial(lk);
        };

        const combinations = (n: number, k: number): number => {
            if (k < 0 || k > n) return 0;
            return factorial(n) / (factorial(k) * factorial(n - k));
        };

        const binomialPMF = (k: number) => {
            const n = Math.round(p2.Value() * 3); // scaled for visualization
            const p = p1.Value() / 10;
            const lk = Math.round(k);
            return combinations(n, lk) * Math.pow(p, lk) * Math.pow(1 - p, n - lk);
        };

        // 3. Rendering
        // Continuous (Normal)
        const pdfGraph = board.create('functiongraph', [normalPDF], { 
            strokeColor: '#E98074', strokeWidth: 3, visible: () => distType === 'normal' 
        });

        // Discrete (Others as bars)
        for (let i = 0; i < 15; i++) {
            board.create('segment', [[i, 0], [i, () => {
                if (distType === 'poisson') return poissonPMF(i);
                if (distType === 'binomial') return binomialPMF(i);
                if (distType === 'bernoulli') return i === 1 ? p1.Value() / 10 : (i === 0 ? 1 - p1.Value() / 10 : 0);
                return 0;
            }]], {
                strokeColor: '#D8C3A5', strokeWidth: 8, visible: () => distType !== 'normal'
            });
        }

        return () => {
            JXG.JSXGraph.freeBoard(board);
        };
    }, [distType]);

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 w-full justify-center">
                {(['normal', 'poisson', 'binomial', 'bernoulli'] as const).map(d => (
                    <button
                        key={d}
                        onClick={() => setDistType(d)}
                        className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap
                            ${distType === d
                                ? "bg-accent-premium text-white shadow-lg scale-105"
                                : "bg-accent-premium/5 text-accent-premium hover:bg-accent-premium/10 border border-accent-premium/20"}`}
                    >
                        {d} Distribution
                    </button>
                ))}
            </div>
            <div 
                ref={boardRef} 
                className="jxgbox rounded-3xl shadow-2xl border border-white/10" 
                style={{ width: '100%', aspectRatio: '1.6/1', maxWidth: '900px' }} 
            />
        </div>
    );
};

export default ProbabilityDistributions;
