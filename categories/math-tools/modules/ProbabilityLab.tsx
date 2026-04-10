import React, { useState, useEffect, useRef } from "react";
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { Mafs, Coordinates, Plot, MovablePoint, Line, Point, Vector, Text, Theme, vec, Polygon, Circle } from "mafs";
import { useTheme } from "../../../src/hooks/useTheme";
import { PremiumSlider } from "../../../src/components/visualizers/core/PremiumSlider";

/* ─────────────────────────────────────────────────────────────────────────────
   HELPERS & SHARED COMPONENTS
   ───────────────────────────────────────────────────────────────────────────── */
const LatexSolver = ({ steps }: { steps: string[] }) => (
  <div className="space-y-4 py-3">
    {steps.map((step, i) => (
      <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
        <div className="flex items-center gap-2 mb-0.5">
           <span className="w-4 h-4 rounded-full bg-accent-premium/10 text-accent-premium text-[9px] font-bold flex items-center justify-center border border-accent-premium/20">
             {i+1}
           </span>
           <span className="text-[9px] font-black uppercase tracking-widest text-muted-premium opacity-60">Step {i+1}</span>
        </div>
        <div className="pl-6 overflow-x-auto text-text-premium derivation-latex font-mono pb-4" style={{ fontSize: '11px' }}>
          <BlockMath math={step} />
        </div>
      </div>
    ))}
  </div>
);

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 1: BAYES GRID
   ───────────────────────────────────────────────────────────────────────────── */
export const BayesGrid = () => {
  const [prevalence, setPrevalence] = useState(0.1);
  const [accuracy, setAccuracy] = useState(0.9);

  const total = 100;
  const sick = Math.round(total * prevalence);
  const healthy = total - sick;
  const truePos = Math.round(sick * accuracy);
  const falsePos = Math.round(healthy * (1 - accuracy));

  const p_ab = (truePos / (truePos + falsePos)) || 0;
  
  const pSick = prevalence;
  const pHalthy = 1 - prevalence;
  const pPosSick = accuracy;
  const pPosHealthy = 1 - accuracy;
  const pPos = (pPosSick * pSick) + (pPosHealthy * pHalthy);

  const steps = [
    `P(S) = ${pSick.toFixed(2)}, \\, P(H) = ${pHalthy.toFixed(2)} \\quad \\text{(Base Rate)}`,
    `P(\\text{Pos}|S) = ${pPosSick.toFixed(2)}, \\, P(\\text{Pos}|H) = ${pPosHealthy.toFixed(2)}`,
    `P(\\text{Pos}) = (${pPosSick.toFixed(2)} \\cdot ${pSick.toFixed(2)}) + (${pPosHealthy.toFixed(2)} \\cdot ${pHalthy.toFixed(2)}) = ${pPos.toFixed(3)}`,
    `P(S|\\text{Pos}) = \\frac{P(\\text{Pos}|S)P(S)}{P(\\text{Pos})} = \\frac{${(pPosSick * pSick).toFixed(3)}}{${pPos.toFixed(3)}} = ${p_ab.toFixed(3)}`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Bayesian Population Grid</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Base Rate</span>
            <PremiumSlider min={0.01} max={0.5} step={0.01} value={prevalence} onChange={setPrevalence} origin={0.01} />
            <span className="val-badge text-blue-premium">{((prevalence * 100)).toFixed(1)}%</span>
          </div>
          <div className="ctrl-row">
            <span className="ctrl-label">Accuracy</span>
            <PremiumSlider min={0.5} max={0.99} step={0.01} value={accuracy} onChange={setAccuracy} origin={0.5} />
            <span className="val-badge text-green-premium">{((accuracy * 100)).toFixed(1)}%</span>
          </div>
        </div>
        <div className="card overflow-y-auto max-h-[350px]">
          <div className="result-label">The Bayes Inference Engine</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      
      <div className="canvas-card">
        <Mafs viewBox={{ x: [0, 10], y: [0, 10] }}>
          
          {Array.from({ length: 100 }).map((_, i) => {
            const x = i % 10;
            const y = 9 - Math.floor(i / 10);
            let state = 'healthy';
            if (i < sick) state = i < truePos ? 'true-pos' : 'sick-missed';
            else if (i < sick + falsePos) state = 'false-pos';
            
            const color = state === 'true-pos' ? 'var(--green-premium)' : 
                          state === 'false-pos' ? 'var(--accent-premium)' : 
                          state === 'sick-missed' ? 'var(--green-premium)' : 'var(--border)';
            const opacity = state === 'sick-missed' ? 0.15 : state === 'healthy' ? 0.1 : 0.8;
            
            return (
              <React.Fragment key={i}>
                <Point x={x + 0.5} y={y + 0.5} color={color} opacity={opacity} />
                {state === 'true-pos' && <Circle center={[x+0.5, y+0.5]} radius={0.3} color={color} opacity={0.2} />}
              </React.Fragment>
            );
          })}
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 2: GALTON BOARD (CLT)
   ───────────────────────────────────────────────────────────────────────────── */
export const GaltonBoard = () => {
  const [bias, setBias] = useState(0.5);
  const [bins, setBins] = useState<number[]>(new Array(13).fill(0));
  const [balls, setBalls] = useState<{ x: number; y: number; stage: number }[]>([]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setBalls(prev => prev.map(b => {
        const nextY = b.y - 0.2;
        const currentStage = Math.floor((3.2 - b.y) * 2.5);
        if (currentStage > b.stage && currentStage <= 12) {
          const shift = Math.random() < bias ? 0.3 : -0.3;
          return { x: b.x + shift, y: nextY, stage: currentStage };
        }
        return { ...b, y: nextY };
      }).filter(b => {
        if (b.y < -1.5) {
          const binIdx = Math.min(12, Math.max(0, Math.floor((b.x + 3.1) / 0.48)));
          setBins(prev => {
            const next = [...prev];
            next[binIdx]++;
            return next;
          });
          return false;
        }
        return true;
      }));
    }, 40);
    return () => clearInterval(timer);
  }, [bias]);

  const n = 12;
  const mu = n * bias;
  const sigma = Math.sqrt(n * bias * (1 - bias));
  const normal = (x: number) => {
    const scale = Math.max(...bins, 10) * 0.45;
    return (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - mu) / sigma) ** 2) * scale;
  };

  const steps = [
    `X \\sim \\text{Binomial}(n=12, p=${bias.toFixed(2)})`,
    `E[X] = np = 12 \\cdot ${bias.toFixed(2)} = ${mu.toFixed(2)}`,
    `\\text{Var}[X] = np(1-p) = 12 \\cdot ${bias.toFixed(2)} \\cdot ${(1-bias).toFixed(2)} = ${sigma ** 2 > 0 ? (sigma ** 2).toFixed(2) : '0'}`,
    `\\text{Result: CLT Approximates } \\mathcal{N}(${mu.toFixed(1)}, ${sigma.toFixed(2)})`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Galton Peg Board</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Peg Bias</span>
            <PremiumSlider min={0.2} max={0.8} step={0.05} value={bias} onChange={setBias} origin={0.5} />
            <span className="val-badge text-orange">{((bias * 100)).toFixed(0)}% R</span>
          </div>
          <div className="btn-row">
            <button className="btn btn-primary" onClick={() => setBalls(prev => [...prev, { x: 0, y: 3.2, stage: 0 }])}>Drop Ball</button>
            <button className="btn" onClick={() => setBins(new Array(13).fill(0))}>Reset</button>
          </div>
        </div>
        <div className="card overflow-y-auto max-h-[350px]">
          <div className="result-label">The Limit of Sums</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div className="canvas-card">
        <Mafs viewBox={{ x: [-4, 4], y: [-2, 4] }}>
          
          {Array.from({ length: 13 }).map((_, r) => 
            Array.from({ length: r + 1 }).map((_, c) => (
              <Point key={`${r}-${c}`} x={(c - r/2)*0.4} y={3 - r*0.4} color="var(--border)" size={2} opacity={0.3} />
            ))
          )}
          {bins.map((v, i) => (
            <Polygon key={i} points={[[-3.1+i*0.48,-1.5],[-2.7+i*0.48,-1.5],[-2.7+i*0.48,-1.5+v*0.1],[-3.1+i*0.48,-1.5+v*0.1]]} color="var(--blue-premium)" fillOpacity={0.4} />
          ))}
          <Plot.OfX y={(x) => normal((x + 3.1) / 0.48) - 1.5} color="var(--accent-premium)" weight={3} />
          {balls.map((b, i) => <Point key={i} x={b.x} y={b.y} color="var(--accent-premium)" size={4} />)}
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 3: MAXIMUM LIKELIHOOD (MLE)
   ───────────────────────────────────────────────────────────────────────────── */
export const MLELab = () => {
  const [mu, setMu] = useState(0);
  const [sigma, setSigma] = useState(1);
  const data = [-1.5, -0.5, 0.2, 0.8, 1.5];

  const logL = data.reduce((acc, x) => acc + Math.log((1/(sigma*Math.sqrt(2*Math.PI))) * Math.exp(-0.5*((x-mu)/sigma)**2)), 0);

  const steps = [
    `L(\\mu, \\sigma) = \\prod_{i=1}^n \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x_i-\\mu)^2}{2\\sigma^2}}`,
    `\\text{Substitute } n=5: \\, L(\\mu, \\sigma) = \\prod_{i=1}^5 f(x_i | \\mu, \\sigma)`,
    `\\ln L = \\sum_{i=1}^5 \\ln(f(x_i | ${mu.toFixed(1)}, ${sigma.toFixed(1)})) = ${logL.toFixed(3)}`,
    logL > -8 ? `\\text{Model matches the 5 data points closely.}` : `\\text{Insight: Adjust parameters to increase likelihood.}`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Likelihood Fitting</div>
          <div className="ctrl-row"><span className="ctrl-label">Mean</span><PremiumSlider min={-3} max={3} value={mu} onChange={setMu} /><span className="val-badge text-blue">{mu.toFixed(1)}</span></div>
          <div className="ctrl-row"><span className="ctrl-label">Sigma</span><PremiumSlider min={0.5} max={2} value={sigma} onChange={setSigma} /><span className="val-badge text-green-premium">{sigma.toFixed(1)}</span></div>
        </div>
        <div className="card overflow-y-auto max-h-[350px]">
          <div className="result-label">Optimization Goal</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div className="canvas-card">
        <Mafs viewBox={{ x: [-4, 4], y: [-0.2, 1] }}>
          <Coordinates.Cartesian />
          {data.map((x, i) => <Point key={i} x={x} y={0} color="var(--accent-premium)" size={6} />)}
          <Plot.OfX y={(x) => (1/(sigma*Math.sqrt(2*Math.PI))) * Math.exp(-0.5*((x-mu)/sigma)**2)} color="var(--blue-premium)" weight={3} />
          
          {/* Grabbable Handles for Mu and Sigma */}
          <MovablePoint point={[mu, 1/(sigma*Math.sqrt(2*Math.PI))]} onMove={([x, y]) => {
            setMu(x);
             // Inverse map y to sigma: y = 1/(sigma*sqrt(2pi)) -> sigma = 1/(y*sqrt(2pi))
            const newSigma = 1 / (y * Math.sqrt(2 * Math.PI));
            setSigma(Math.max(0.5, Math.min(2, newSigma)));
          }} color="var(--blue-premium)" />
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 4: KL-DIVERGENCE
   ───────────────────────────────────────────────────────────────────────────── */
export const KLDivLab = () => {
  const [muQ, setMuQ] = useState(1.5);
  const muP = 0; // Target is fixed at 0 for clarity
  const sigma = 0.8;

  const getKL = () => (Math.pow(muP - muQ, 2)) / (2 * Math.pow(sigma, 2));

  const steps = [
    `D_{KL}(P || Q) = \\int P(x) \\ln \\frac{P(x)}{Q(x)} dx`,
    `\\text{Special case (Gaussians): } D_{KL} = \\frac{(\\mu_p - \\mu_q)^2}{2\\sigma^2}`,
    `D_{KL} = \\frac{(0 - ${muQ.toFixed(2)})^2}{2 \\cdot ${sigma}^2} = ${getKL().toFixed(3)} \\text{ bits}`,
    `\\text{Insight: Informational difference between } P \\text{ and } Q.`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Distribution Drift</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Model μ_q</span>
            <PremiumSlider min={-3} max={3} step={0.1} value={muQ} onChange={setMuQ} origin={1.5} />
            <span className="val-badge text-orange">{muQ.toFixed(2)}</span>
          </div>
        </div>
        <div className="card overflow-y-auto max-h-[350px]">
          <div className="result-label">Information Leakage</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div className="canvas-card">
        <Mafs viewBox={{ x: [-4, 4], y: [-0.1, 0.6] }}>
          <Coordinates.Cartesian />
          <Plot.OfX y={(x) => (1/(sigma*Math.sqrt(2*Math.PI))) * Math.exp(-0.5*((x-muP)/sigma)**2)} color="var(--blue-premium)" weight={3} />
          <Plot.OfX y={(x) => (1/(sigma*Math.sqrt(2*Math.PI))) * Math.exp(-0.5*((x-muQ)/sigma)**2)} color="var(--accent-premium)" weight={3} />
          <MovablePoint point={[muQ, 0.45]} onMove={([x]) => setMuQ(x)} color="var(--accent-premium)" />
          <Text x={muP} y={0.55} color="var(--blue-premium)" align="center" size={12}>P (Target)</Text>
          <Text x={muQ} y={0.55} color="var(--accent-premium)" align="center" size={12}>Q (Model)</Text>
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 5: EXPECTATION & LLN
   ───────────────────────────────────────────────────────────────────────────── */
export const ExpectationBeam = () => {
  const [wL, setWL] = useState(2);
  const [wR, setWR] = useState(6);
  const mean = (-2 * wL + 2 * wR) / (wL + wR);

  const steps = [
    `E[X] = \\sum x_i P(x_i)`,
    `P(L) = \\frac{${wL}}{${wL+wR}}, \\, P(R) = \\frac{${wR}}{${wL+wR}}`,
    `E[X] = (-2)\\frac{${wL}}{${wL+wR}} + (2)\\frac{${wR}}{${wL+wR}} = ${mean.toFixed(2)}`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Balance of Probability</div>
          <div className="ctrl-row"><span className="ctrl-label">Weight L</span><PremiumSlider min={1} max={10} value={wL} onChange={setWL} /><span className="val-badge text-blue">{wL}</span></div>
          <div className="ctrl-row"><span className="ctrl-label">Weight R</span><PremiumSlider min={1} max={10} value={wR} onChange={setWR} /><span className="val-badge text-orange">{wR}</span></div>
        </div>
        <div className="card overflow-y-auto max-h-[350px]">
          <div className="result-label">Expected Value Mechanics</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div className="canvas-card">
        <Mafs viewBox={{ x: [-4, 4], y: [-2, 2] }}>
          <Line.Segment point1={[-3, -0.5]} point2={[3, -0.5]} color="var(--border)" weight={5} />
          {Array.from({length: wL}).map((_, i) => <Point key={i} x={-2} y={-0.4 + i*0.2} color="var(--blue-premium)" />)}
          {Array.from({length: wR}).map((_, i) => <Point key={i} x={2} y={-0.4 + i*0.2} color="var(--accent-premium)" />)}
          <Polygon points={[[mean, -0.5], [mean-0.3, -1], [mean+0.3, -1]]} color="var(--accent-premium)" />
          <Text x={mean} y={-1.3} color="var(--accent-premium)" align="center" weight={800}>E[X]</Text>
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 6: COVARIANCE PLOT
   ───────────────────────────────────────────────────────────────────────────── */
export const CovarianceLab = () => {
  const [rho, setRho] = useState(0.7);
  const data = useRef(Array.from({length: 80}).map(() => ({x: (Math.random()-0.5)*6, r: Math.random()-0.5})));

  const steps = [
    `\\text{Joint Covariance Matrix } \\Sigma:`,
    `\\Sigma = \\begin{bmatrix} 1.00 & ${rho.toFixed(2)} \\\\ ${rho.toFixed(2)} & 1.00 \\end{bmatrix}`,
    `\\rho = \\text{Correlation} = ${rho.toFixed(2)}`,
    `\\text{Degree of Linear Dependency: } ${Math.abs(rho) > 0.6 ? "High" : "Low"}`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Joint Distributions</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Correlation</span>
            <PremiumSlider min={-0.9} max={0.9} step={0.1} value={rho} onChange={setRho} origin={0} />
            <span className="val-badge text-blue">{rho.toFixed(2)}</span>
          </div>
        </div>
        <div className="card overflow-y-auto max-h-[350px]">
          <div className="result-label">Feature Covariance</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div className="canvas-card">
        <Mafs viewBox={{ x: [-4, 4], y: [-4, 4] }}>
          <Coordinates.Cartesian />
          {data.current.map((p, i) => (
            <Point key={i} x={p.x} y={p.x * rho + p.r * (1 - Math.abs(rho)) * 3} color="var(--blue-premium)" opacity={0.6} size={3} />
          ))}
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 7: ENTROPY (INFORMATION THEORY)
   ───────────────────────────────────────────────────────────────────────────── */
export const EntropyLab = () => {
  const [entropy, setEntropy] = useState(0);
  const [particles, setParticles] = useState(() => 
    Array.from({ length: 60 }).map((_, i) => ({
      x: i < 30 ? -2 + Math.random() : 1 + Math.random(),
      y: (Math.random() - 0.5) * 3,
      color: i < 30 ? 'var(--blue-premium)' : 'var(--accent-premium)'
    }))
  );

  const scramble = () => {
    setParticles(prev => prev.map(p => ({
      ...p,
      x: p.x + (Math.random() - 0.5) * 1.5,
      y: p.y + (Math.random() - 0.5) * 1.5
    })));
    setEntropy(prev => Math.min(1, prev + 0.1));
  };

  const steps = [
    `H(X) = -\\sum_{i=1}^n P(x_i) \\log_2 P(x_i)`,
    `\\text{Substitute } n=60: \\, H(X) = -\\sum_{i=1}^{60} P(x_i) \\log_2 P(x_i)`,
    `\\text{Entropy Metric: } ${(entropy * 3.32).toFixed(3)} \\text{ bits}`,
    `\\text{Disorder: } ${(entropy * 100).toFixed(0)}%`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Shannon Entropy</div>
          <p className="text-[11px] opacity-70 mb-4">Observe how scrambling particles increases the system entropy.</p>
          <div className="btn-row">
            <button className="btn btn-primary" onClick={scramble}>Scramble</button>
            <button className="btn" onClick={() => {
              setEntropy(0);
              setParticles(Array.from({ length: 60 }).map((_, i) => ({
                x: i < 30 ? -2 + Math.random() : 1 + Math.random(),
                y: (Math.random() - 0.5) * 3,
                color: i < 30 ? 'var(--blue-premium)' : 'var(--accent-premium)'
              })));
            }}>Restore Order</button>
          </div>
        </div>
        <div className="card overflow-y-auto max-h-[350px]">
          <div className="result-label">Statistical Complexity</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div className="canvas-card">
        <Mafs viewBox={{ x: [-4, 4], y: [-3, 3] }}>
          
          <Polygon points={[[-3.5, -2.5], [3.5, -2.5], [3.5, 2.5], [-3.5, 2.5]]} color="var(--border)" fillOpacity={0.05} />
          {particles.map((p, i) => (
            <Point key={i} x={p.x} y={p.y} color={p.color} size={4} opacity={0.6} />
          ))}
          <Line.Segment point1={[0, -2.5]} point2={[0, 2.5]} color="var(--border)" opacity={0.2} strokeStyle="dashed" />
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 8: SAMPLING & LLN
   ───────────────────────────────────────────────────────────────────────────── */
export const MarbleJar = () => {
  const [counts, setCounts] = useState({ red: 5, blue: 5 });
  const [history, setHistory] = useState<string[]>([]);
  
  const draw = () => {
    const total = counts.red + counts.blue;
    const res = Math.random() < (counts.red / total) ? 'red' : 'blue';
    setHistory(prev => [res, ...prev].slice(0, 40));
  };

  const p_theoretical = counts.red / (counts.red + counts.blue);
  const p_observed = history.length ? history.filter(x => x === 'red').length / history.length : 0;

  const steps = [
    `P(\\text{Red}) = \\frac{N_{red}}{N_{total}} = \\frac{${counts.red}}{${counts.red} + ${counts.blue}}`,
    `\\text{Theoretical: } P(\\text{Red}) = ${p_theoretical.toFixed(2)}`,
    `\\text{Observed: } \\hat{P}_n = ${p_observed.toFixed(3)} \\text{ (n=${history.length})}`,
    `\\text{LLN Convergence: } \\hat{P}_n \\to ${p_theoretical.toFixed(2)}`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Frequentest Jar</div>
          <div className="ctrl-row">
            <span className="ctrl-label text-accent-premium">Red Marbles</span>
            <PremiumSlider min={1} max={10} step={1} value={counts.red} onChange={v => setCounts(prev => ({...prev, red: v}))} />
            <span className="val-badge">{counts.red}</span>
          </div>
          <div className="ctrl-row">
            <span className="ctrl-label text-blue-premium">Blue Marbles</span>
            <PremiumSlider min={1} max={10} step={1} value={counts.blue} onChange={v => setCounts(prev => ({...prev, blue: v}))} />
            <span className="val-badge">{counts.blue}</span>
          </div>
          <div className="btn-row">
            <button className="btn btn-primary" onClick={draw}>Draw Marble</button>
            <button className="btn" onClick={() => setHistory([])}>Clear</button>
          </div>
        </div>
        <div className="card overflow-y-auto max-h-[350px]">
          <div className="result-label">Law of Large Numbers</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div className="canvas-card">
        <Mafs viewBox={{ x: [-4, 4], y: [-2, 2] }}>
          
          {/* History Display */}
          {history.map((res, i) => {
             const row = Math.floor(i / 10);
             const col = i % 10;
             return (
               <Point key={i} x={-2.25 + col * 0.5} y={1 - row * 0.5} color={res === 'red' ? 'var(--accent-premium)' : 'var(--blue-premium)'} size={10} />
             );
          })}
          <Text x={0} y={-1.5} color="var(--text-premium)" opacity={0.4} align="center">SAMPLE HISTORY (n={history.length})</Text>
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 9: INDEPENDENCE
   ───────────────────────────────────────────────────────────────────────────── */
export const IndependenceLab = () => {
  const [pA, setPA] = useState(0.4);
  const [pB, setPB] = useState(0.5);
  const [corr, setCorr] = useState(0); 

  const pA_pB = pA * pB;
  const maxPossible = Math.min(pA, pB);
  const minPossible = Math.max(0, pA + pB - 1);
  
  const pAnB = corr >= 0 
    ? pA_pB + corr * (maxPossible - pA_pB)
    : pA_pB + corr * (pA_pB - minPossible);

  const steps = [
    `P(A) = ${pA.toFixed(2)}, \\, P(B) = ${pB.toFixed(2)}`,
    `\\text{If Independent: } P(A \\cap B) = P(A)P(B) = ${(pA * pB).toFixed(3)}`,
    `\\text{Actual Overlap: } P(A \\cap B) = ${pAnB.toFixed(3)}`,
    Math.abs(pAnB - (pA * pB)) < 0.01 
      ? `\\text{Result: Independent! (knowing B doesn't scale A)}` 
      : `\\text{Result: Dependent (knowing B changes A likelihood)}`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Joint Probability Independence</div>
          <div className="ctrl-row">
            <span className="ctrl-label text-blue-premium">P(A)</span>
            <PremiumSlider min={0.1} max={0.9} step={0.05} value={pA} onChange={setPA} />
            <span className="val-badge text-blue-premium">{pA.toFixed(2)}</span>
          </div>
          <div className="ctrl-row">
            <span className="ctrl-label text-accent-premium">P(B)</span>
            <PremiumSlider min={0.1} max={0.9} step={0.05} value={pB} onChange={setPB} />
            <span className="val-badge text-accent-premium">{pB.toFixed(2)}</span>
          </div>
          <div className="ctrl-row">
            <span className="ctrl-label">Dependency</span>
            <PremiumSlider min={-1} max={1} step={0.1} value={corr} onChange={setCorr} origin={0} />
            <span className="val-badge">{corr > 0 ? "Positive" : corr < 0 ? "Negative" : "None"}</span>
          </div>
        </div>
        <div className="card overflow-y-auto max-h-[350px]">
          <div className="result-label">Information Dependence</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div className="canvas-card">
        <Mafs viewBox={{ x: [0, 1.2], y: [0, 1.2] }}>
          <Polygon points={[[0,0], [1,0], [1,1], [0,1]]} color="var(--border)" fillOpacity={0.05} />
          <Polygon points={[[0, 0], [pA, 0], [pA, 1], [0, 1]]} color="var(--blue-premium)" fillOpacity={0.15} />
          {(() => {
            const h1 = pAnB / pA;
            const h2 = (pB - pAnB) / (1 - pA);
            return (
              <>
                <Polygon points={[[0, 0], [pA, 0], [pA, h1], [0, h1]]} color="var(--accent-premium)" fillOpacity={0.4} />
                <Polygon points={[[pA, 0], [1, 0], [1, h2], [pA, h2]]} color="var(--accent-premium)" fillOpacity={0.25} />
                <Text x={pA/2} y={h1/2} color="white" align="center" size={10}>P(A∩B)</Text>
              </>
            );
          })()}
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 10: VARIANCE
   ───────────────────────────────────────────────────────────────────────────── */
export const VarianceLab = () => {
  const [spread, setSpread] = useState(1.5);
  const basePoints = [-2, -1, 0, 1, 2];
  const points = basePoints.map(p => p * spread);
  const mean = points.reduce((a, b) => a + b, 0) / points.length;
  
  const variance = points.reduce((acc, p) => acc + (p - mean) ** 2, 0) / points.length;
  const std = Math.sqrt(variance);

  const steps = [
    `\\mu = \\frac{1}{n} \\sum_{i=1}^n x_i \\text{ and } \\sigma^2 = \\frac{1}{n} \\sum_{i=1}^n (x_i - \\mu)^2`,
    `\\text{Substitute } n=5: \\, \\mu = \\frac{1}{5} \\sum x_i = ${mean.toFixed(2)}`,
    `\\sigma^2 = \\frac{1}{5} \\sum (x_i - ${mean.toFixed(1)})^2 = ${variance.toFixed(3)}`,
    `\\text{Result: } \\sigma = \\sqrt{${variance.toFixed(2)}} = ${std.toFixed(3)}`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Variance & Spread</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Spread Factor</span>
            <PremiumSlider min={0.2} max={2.5} step={0.1} value={spread} onChange={setSpread} origin={1} />
            <span className="val-badge text-accent-premium">{spread.toFixed(1)}x</span>
          </div>
        </div>
        <div className="card overflow-y-auto max-h-[350px]">
          <div className="result-label">Standard Deviation Calculus</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div className="canvas-card">
        <Mafs viewBox={{ x: [-6, 6], y: [-3, 6] }}>
          <Coordinates.Cartesian subdivisions={2} />
          {points.map((p, i) => {
            const diff = Math.abs(p - mean);
            return (
              <React.Fragment key={i}>
                <Polygon 
                  points={[[p, 0], [mean, 0], [mean, diff], [p, diff]]} 
                  color="var(--accent-premium)" 
                  fillOpacity={0.1}
                  strokeStyle="dashed"
                />
                <Point x={p} y={0} color="var(--blue-premium)" size={6} />
                <Line.Segment point1={[p, 0]} point2={[p, diff]} color="var(--accent-premium)" opacity={0.3} />
              </React.Fragment>
            );
          })}
          <Line.ThroughPoints point1={[mean, -10]} point2={[mean, 10]} color="var(--gold-premium)" weight={3} />
          <Text x={mean} y={-1.5} color="var(--gold-premium)" align="center" weight={800}>μ</Text>
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN PROBABILITY LABORATORY
   ───────────────────────────────────────────────────────────────────────────── */
export const ProbabilityLab = () => {
  const [activeTab, setActiveTab] = useState('bayes');
  
  const labs: Record<string, React.ReactNode> = {
    'bayes': <BayesGrid />,
    'clt': <GaltonBoard />,
    'mle': <MLELab />,
    'kldiv': <KLDivLab />,
    'entropy': <EntropyLab />,
    'sampling': <MarbleJar />,
    'expectation': <ExpectationBeam />,
    'covariance': <CovarianceLab />,
    'independence': <IndependenceLab />,
    'variance': <VarianceLab />
  };

  return (
    <div className="lab-layout">
      <div className="tool-nav-modular no-scrollbar">
        {Object.keys(labs).map(tab => (
          <button 
            key={tab} 
            className={`tool-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'clt' ? 'Galton Board' : tab === 'kldiv' ? 'KL-Div' : tab}
          </button>
        ))}
      </div>
      <div className="mt-8 animate-in fade-in duration-700">
        {labs[activeTab]}
      </div>
    </div>
  );
};
