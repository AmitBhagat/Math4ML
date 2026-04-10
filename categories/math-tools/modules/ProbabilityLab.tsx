import React, { useState, useEffect, useRef } from "react";
import { CanvasBase, drawGrid, C } from "../../../src/components/visualizers/core/CanvasBase";
import { useTheme } from "../../../src/hooks/useTheme";

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MODULE 1: BAYES GRID
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const BayesGrid = () => {
  const [prevalence, setPrevalence] = useState(0.1);
  const [accuracy, setAccuracy] = useState(0.9);

  const total = 100;
  const sick = Math.round(total * prevalence);
  const healthy = total - sick;
  const truePos = Math.round(sick * accuracy);
  const falsePos = Math.round(healthy * (1 - accuracy));

  const { theme } = useTheme();
  const colors = C(theme as any);
  const p_ab = (truePos / (truePos + falsePos));
  const derivation = `1. Prior P(Sick):
   P(S) = ${prevalence.toFixed(2)}

2. Likelihoods:
   P(Pos | Sick) = ${accuracy.toFixed(2)}
   P(Pos | Healthy) = ${(1 - accuracy).toFixed(2)}

3. Evidence P(Pos Test):
   P(Pos) = P(Pos|S)P(S) + P(Pos|H)P(H)
   P(Pos) = (${accuracy.toFixed(2)} * ${prevalence.toFixed(2)}) + (${(1-accuracy).toFixed(2)} * ${(1-prevalence).toFixed(2)})
   P(Pos) = ${(truePos/100).toFixed(3)} + ${(falsePos/100).toFixed(3)} = ${((truePos + falsePos)/100).toFixed(3)}

4. Posterior P(Sick | Pos):
   P(S|Pos) = (P(Pos|S)P(S)) / P(Pos)
   P(S|Pos) = ${(truePos/100).toFixed(3)} / ${((truePos + falsePos)/100).toFixed(3)}
   P(S|Pos) = ${p_ab.toFixed(4)}`;

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Bayesian Population Grid</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Base Rate</span>
            <input type="range" min="0.01" max="0.5" step="0.01" value={prevalence} onChange={e => setPrevalence(+e.target.value)} />
            <span className="val-badge">{(prevalence * 100).toFixed(0)}%</span>
          </div>
          <div className="ctrl-row">
            <span className="ctrl-label">Accuracy</span>
            <input type="range" min="0.5" max="0.99" step="0.01" value={accuracy} onChange={e => setAccuracy(+e.target.value)} />
            <span className="val-badge">{(accuracy * 100).toFixed(0)}%</span>
          </div>
        </div>
        <div className="card">
          <div className="result-label">Step-by-Step Bayes</div>
          <div className="result-box">{derivation}</div>
        </div>
      </div>
      <div className="card p-4 flex flex-wrap gap-2 justify-center content-start" style={{ background: 'var(--surface2)' }}>
        {Array.from({ length: 100 }).map((_, i) => {
          let state = 'healthy';
          if (i < sick) state = i < truePos ? 'true-pos' : 'sick-missed';
          else if (i < sick + falsePos) state = 'false-pos';
          const color = state === 'true-pos' ? colors.teal : state === 'false-pos' ? colors.orange : state === 'sick-missed' ? colors.teal + '33' : colors.muted + '1A';
          return <div key={i} className="w-4 h-4 rounded-sm transition-colors duration-500" style={{ background: color }}></div>;
        })}
      </div>
    </div>
  );
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MODULE 2: GALTON BOARD (Optimized)
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const GaltonBoard = () => {
  const [bias, setBias] = useState(0.5);
  const ballsRef = useRef<{x: number, y: number, vx: number}[]>([]);
  const binsRef = useRef<number[]>(new Array(11).fill(0));
  const lastTimeRef = useRef(0);

  const spawnBall = () => { ballsRef.current.push({ x: 0, y: -200, vx: 0 }); };

  const { theme } = useTheme();
  const colors = C(theme as any);

  const draw = (ctx: CanvasRenderingContext2D, W: number, H: number, elapsed: number) => {
    const cx = W / 2, cy = H / 2;
    ctx.clearRect(0, 0, W, H);
    const dt = (elapsed - lastTimeRef.current);
    if (dt > 16) {
      ballsRef.current.forEach(b => {
        b.y += 4;
        if (b.y % 40 === 0) b.vx = Math.random() < bias ? 2 : -2;
        if (b.y % 40 < 20) b.x += b.vx;
      });
      ballsRef.current = ballsRef.current.filter(b => {
        if (b.y > 150) {
          const binIdx = Math.min(10, Math.max(0, Math.floor((b.x + 100) / 20)));
          binsRef.current[binIdx]++; return false;
        }
        return true;
      });
      lastTimeRef.current = elapsed;
    }
    ctx.fillStyle = colors.muted + '33';
    for(let r=0; r<8; r++) for(let c=0; c<=r; c++) { ctx.beginPath(); ctx.arc(cx + (c - r/2)*30, cy - 150 + r*40, 3, 0, Math.PI*2); ctx.fill(); }
    const maxBin = Math.max(...binsRef.current, 1);
    binsRef.current.forEach((count, i) => {
      const h = (count / maxBin) * 80;
      ctx.fillStyle = colors.blue + '4D';
      ctx.fillRect(cx - 100 + i * 20 + 2, cy + 180, 16, -h);
    });
    ctx.fillStyle = colors.orange;
    ballsRef.current.forEach(b => { ctx.beginPath(); ctx.arc(cx + b.x, cy + b.y, 4, 0, Math.PI * 2); ctx.fill(); });
  };

  const derivation = `1. Bernoulli Trials (n=10):
   Each pin is a coin flip. 
   P(Right) = p = ${bias.toFixed(2)}

2. Normal Approximation (CLT):
   Î¼ = n * p = 10 * ${bias.toFixed(2)} = ${(10*bias).toFixed(1)}
   ÏƒÂ² = n * p(1-p) = ${ (10 * bias * (1-bias)).toFixed(2) }

3. Convergence:
   As N â†’ âˆž, the bin heights approach:
   N(Î¼, ÏƒÂ²) via the Central Limit Theorem.`;

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Central Limit Theorem</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Peg Bias</span>
            <input type="range" min="0.2" max="0.8" step="0.05" value={bias} onChange={e => setBias(+e.target.value)} />
            <span className="val-badge">{(bias * 100).toFixed(0)}% R</span>
          </div>
          <button className="btn btn-primary w-full mt-4" onClick={spawnBall}>Drop Ball</button>
          <button className="btn w-full mt-2" onClick={() => binsRef.current.fill(0)}>Clear Bins</button>
        </div>
        <div className="card">
          <div className="result-label">The limit of Sums</div>
          <div className="result-box">{derivation}</div>
        </div>
      </div>
      <div><div className="canvas-card" style={{ height: '400px' }}><CanvasBase onDraw={draw} autoStart={true} showControls={false} theme={theme as any} /></div></div>
    </div>
  );
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MODULE 3: MAXIMUM LIKELIHOOD ESTIMATION (MLE)
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const MLELab = () => {
  const [mu, setMu] = useState(0);
  const [sigma, setSigma] = useState(1);
  const { theme } = useTheme();
  const colors = C(theme as any);

  const data = [-1.5, -0.8, 0.2, 0.5, 1.2]; // Fixed observed data

  const gaussian = (x: number, m: number, s: number) => 
    (1 / (s * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - m) / s)**2);

  const draw = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
    const cx = W / 2, cy = H / 2, sc = 40;
    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, sc, cx, cy, theme as any);

    // Draw Data Points
    ctx.fillStyle = colors.orange;
    data.forEach(d => {
      ctx.beginPath(); ctx.arc(cx + d*sc, cy + 100, 5, 0, Math.PI*2); ctx.fill();
    });

    // Draw PDF
    ctx.strokeStyle = colors.blue; ctx.lineWidth = 3;
    ctx.beginPath();
    for (let x = -5; x <= 5; x += 0.1) {
      const [px, py] = [cx + x*sc, cy + 100 - gaussian(x, mu, sigma)*sc*2];
      if (x === -5) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();
  };

  const getLogLikelihood = () => {
    let sum = 0;
    data.forEach(x => {
        const val = gaussian(x, mu, sigma);
        sum += Math.log(val || 1e-10);
    });
    return sum;
  };

  const derivation = `1. Gaussian Likelihood L(Î¸):
   L = Î  p(xáµ¢ | Î¼, Ïƒ)

2. Log-Likelihood â„“(Î¸):
   â„“ = Î£ ln[p(xáµ¢ | Î¼, Ïƒ)]
   Current â„“ â‰ˆ ${getLogLikelihood().toFixed(2)}

3. Optimization Goal:
   Adjust Î¼, Ïƒ until â„“ is MAXIMIZED.
   Data Mean: ${ (data.reduce((a,b)=>a+b,0)/data.length).toFixed(2) }`;

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">MLE Calibration</div>
          <div className="ctrl-row"><span className="ctrl-label">Mean Î¼</span><input type="range" min="-3" max="3" step="0.1" value={mu} onChange={e => setMu(+e.target.value)} /><span className="val-badge">{mu.toFixed(1)}</span></div>
          <div className="ctrl-row"><span className="ctrl-label">Std Ïƒ</span><input type="range" min="0.5" max="2" step="0.1" value={sigma} onChange={e => setSigma(+e.target.value)} /><span className="val-badge">{sigma.toFixed(1)}</span></div>
        </div>
        <div className="card">
          <div className="result-label">Log-Likelihood Derivation</div>
          <div className="result-box">{derivation}</div>
        </div>
      </div>
      <div><div className="canvas-card" style={{ height: '400px' }}><CanvasBase onDraw={draw} showControls={false} theme={theme as any} /></div></div>
    </div>
  );
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MODULE 4: KL-DIVERGENCE
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const KLDivLab = () => {
  const { theme } = useTheme();
  const colors = C(theme as any);
  const [muP, setMuP] = useState(-1);
  const [muQ, setMuQ] = useState(1);

  const gaussian = (x: number, m: number) => 
    (1 / (0.8 * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - m) / 0.8)**2);

  const calculateKL = () => {
    let kl = 0;
    for (let x = -5; x <= 5; x += 0.1) {
      const p = gaussian(x, muP), q = gaussian(x, muQ);
      kl += p * Math.log((p + 1e-10) / (q + 1e-10)) * 0.1;
    }
    return kl;
  };

  const draw = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
    const cx = W / 2, cy = H / 2, sc = 40;
    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, sc, cx, cy, theme as any);

    const drawPDF = (m: number, color: string, label: string) => {
        ctx.strokeStyle = color; ctx.lineWidth = 3;
        ctx.beginPath();
        for (let x = -5; x <= 5; x += 0.1) {
            const [px, py] = [cx + x*sc, cy + 100 - gaussian(x, m)*sc*2];
            if (x === -5) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.stroke();
    };

    drawPDF(muP, colors.blue, 'P'); // Target
    drawPDF(muQ, colors.orange, 'Q'); // Model
  };

  const kl = calculateKL();
  const derivation = `1. Kullback-Leibler Score:
   D_KL(P || Q) = Î£ P(x) ln(P(x) / Q(x))

2. Insight:
   Measures Information Leak when Q 
   is used to approximate P.

Current D_KL â‰ˆ ${kl.toFixed(3)} bits
If D_KL = 0, P and Q are identical.`;

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Distribution Drift</div>
          <div className="ctrl-row"><span className="ctrl-label">Target Î¼_p</span><input type="range" min="-3" max="3" step="0.1" value={muP} onChange={e => setMuP(+e.target.value)} /><span className="val-badge">{muP.toFixed(1)}</span></div>
          <div className="ctrl-row"><span className="ctrl-label">Model Î¼_q</span><input type="range" min="-3" max="3" step="0.1" value={muQ} onChange={e => setMuQ(+e.target.value)} /><span className="val-badge">{muQ.toFixed(1)}</span></div>
        </div>
        <div className="card">
          <div className="result-label">Distance Analysis</div>
          <div className="result-box">{derivation}</div>
        </div>
      </div>
      <div><div className="canvas-card" style={{ height: '400px' }}><CanvasBase onDraw={draw} showControls={false} /></div></div>
    </div>
  );
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MODULE 5: COVARIANCE MATRIX
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const CovarianceLab = () => {
  const { theme } = useTheme();
  const colors = C(theme as any);
  const [rho, setRho] = useState(0.5);
  const dataRef = useRef<{x: number, y: number}[]>([]);

  useEffect(() => {
    const d = [];
    for(let i=0; i<100; i++) {
        const x = (Math.random() - 0.5) * 4;
        const e = (Math.random() - 0.5) * 4 * (1 - Math.abs(rho));
        d.push({ x, y: x * rho + e });
    }
    dataRef.current = d;
  }, [rho]);

  const draw = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
    const cx = W / 2, cy = H / 2, sc = 40;
    ctx.clearRect(0, 0, W, H);
    drawGrid(ctx, W, H, sc, cx, cy, theme as any);

    ctx.fillStyle = colors.blue + '99';
    dataRef.current.forEach(p => {
        ctx.beginPath(); ctx.arc(cx + p.x*sc, cy - p.y*sc, 3, 0, Math.PI*2); ctx.fill();
    });
  };

  const cov = rho * 1.33; // Approx for uniform distribution variance
  const derivation = `1. Covariance Matrix Î£:
   Î£ = [ Ïƒ_xÂ²   Ïƒ_xy ]
       [ Ïƒ_xy   Ïƒ_yÂ² ]

2. Pearson Correlation Ï:
   Ï = ${rho.toFixed(2)}

3. Joint Relationship:
   Ïƒ_xy (Covariance) â‰ˆ ${cov.toFixed(3)}
   ${Math.abs(rho) > 0.7 ? "Strong Linear Dependency" : "Independent/Weak"}`;

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Feature Dependencies</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Correlation Ï</span>
            <input type="range" min="-0.95" max="0.95" step="0.05" value={rho} onChange={e => setRho(+e.target.value)} />
            <span className="val-badge">{rho.toFixed(2)}</span>
          </div>
        </div>
        <div className="card">
          <div className="result-label">Joint Stats</div>
          <div className="result-box">{derivation}</div>
        </div>
      </div>
      <div><div className="canvas-card" style={{ height: '400px' }}><CanvasBase onDraw={draw} showControls={false} /></div></div>
    </div>
  );
};

export const EntropyLab = () => {
  const { theme } = useTheme();
  const colors = C(theme as any);
  const entropyRef = useRef(0);
  const particlesRef = useRef<{x: number, y: number, color: string}[]>([]);

  useEffect(() => {
    const p = [];
    for(let i=0; i<50; i++) p.push({ x: Math.random() < 0.5 ? 40 : 160, y: Math.random()*150 + 25, color: i < 25 ? colors.blue : colors.orange });
    particlesRef.current = p;
  }, []);

  const scramble = () => {
    particlesRef.current.forEach(p => {
      p.x = Math.max(10, Math.min(190, p.x + (Math.random() - 0.5) * 20));
      p.y = Math.max(10, Math.min(190, p.y + (Math.random() - 0.5) * 20));
    });
    entropyRef.current = Math.min(1.0, entropyRef.current + 0.1);
  };

  const draw = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
     const cx = W / 2 - 100, cy = H / 2 - 100;
     ctx.clearRect(0, 0, W, H);
     ctx.strokeStyle = colors.muted + '33'; ctx.strokeRect(cx, cy, 200, 200);
     particlesRef.current.forEach(p => { ctx.fillStyle = p.color; ctx.beginPath(); ctx.arc(cx + p.x, cy + p.y, 4, 0, Math.PI*2); ctx.fill(); });
     ctx.fillStyle = colors.blue; ctx.fillRect(cx, cy + 220, 200 * entropyRef.current, 5);
  };

  const h = entropyRef.current;
  const derivation = `1. Shannnon Entropy H(X):
   H(X) = -Î£ p(x) logâ‚‚(p(x))

2. Statistical Order:
   Current Randomness (S): ${ (h * 100).toFixed(0) }%
   
3. Information Content:
   Uncertainty in outcome is increasing 
   as particles scramble from two bins 
   into a single joint distribution.`;

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Information Theory</div>
          <button className="btn btn-primary w-full" onClick={scramble}>Scramble System</button>
          <button className="btn w-full mt-2" onClick={() => { entropyRef.current = 0; }}>Reset Order</button>
        </div>
        <div className="card">
          <div className="result-label">Entropy Calculation</div>
          <div className="result-box">{derivation}</div>
        </div>
      </div>
      <div><div className="canvas-card" style={{ height: '400px' }}><CanvasBase onDraw={draw} showControls={false} theme={theme as any} /></div></div>
    </div>
  );
};

export const MarbleJar = () => {
  const { theme } = useTheme();
  const colors = C(theme as any);
  const [counts, setCounts] = useState({ red: 4, blue: 6 });
  const [history, setHistory] = useState<string[]>([]);
  const drawingRef = useRef(false);

  const drawMarble = () => {
    if (drawingRef.current) return;
    drawingRef.current = true;
    setTimeout(() => {
      const res = Math.random() < (counts.red / (counts.red + counts.blue)) ? 'red' : 'blue';
      setHistory(prev => [res, ...prev].slice(0, 50));
      drawingRef.current = false;
    }, 400);
  };

  const redP = counts.red / (counts.red + counts.blue);
  const sampleP = history.length > 0 ? history.filter(c => c === 'red').length / history.length : 0;
  const derivation = `1. Population Probability:
   P(Red) = ${counts.red} / ${counts.red + counts.blue} = ${redP.toFixed(2)}

2. Sampling (n=${history.length}):
   Observed Freq = ${sampleP.toFixed(3)}

3. Law of Large Numbers (LLN):
   As n â†’ âˆž, |Observed - P(Red)| â†’ 0.
   Current Gap: ${ Math.abs(redP - sampleP).toFixed(3) }`;

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Frequentest Sampling</div>
          <div className="ctrl-row"><span className="ctrl-label">Red</span><input type="range" min="1" max="10" value={counts.red} onChange={e => setCounts({...counts, red: +e.target.value})} /><span className="val-badge">{counts.red}</span></div>
          <div className="ctrl-row"><span className="ctrl-label">Blue</span><input type="range" min="1" max="10" value={counts.blue} onChange={e => setCounts({...counts, blue: +e.target.value})} /><span className="val-badge">{counts.blue}</span></div>
          <button className="btn btn-primary w-full mt-4" onClick={drawMarble}>Draw Marble</button>
        </div>
        <div className="card">
          <div className="result-label">Symmetry of Sampling</div>
          <div className="result-box">{derivation}</div>
        </div>
      </div>
      <div className="card flex flex-col items-center justify-center p-8 gap-6" style={{ background: 'var(--surface2)' }}>
        <div className="flex gap-2 min-h-8">
           {history.slice(0, 8).map((c, i) => <div key={i} className={`w-6 h-6 rounded-full ${c === 'red' ? 'bg-red-500' : 'bg-blue-500'}`}></div>)}
        </div>
      </div>
    </div>
  );
};

export const ExpectationBeam = () => {
  const { theme } = useTheme();
  const colors = C(theme as any);
  const [w1, setW1] = useState(1);
  const [w2, setW2] = useState(2);
  const mean = (-2*w1 + 2*w2) / (w1 + w2);

  const draw = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
    const cx = W / 2, cy = H / 2, sc = 40;
    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = colors.muted; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(cx - 100, cy + 50); ctx.lineTo(cx + 100, cy + 50); ctx.stroke();
    ctx.fillStyle = colors.orange; ctx.beginPath(); ctx.moveTo(cx + mean*sc, cy + 50); ctx.lineTo(cx + mean*sc - 10, cy+70); ctx.lineTo(cx + mean*sc + 10, cy+70); ctx.fill();
    ctx.fillStyle = colors.blue; 
    for(let i=0; i<w1; i++) ctx.fillRect(cx - 2*sc - 10, cy + 48 - (i+1)*12, 20, 10);
    for(let i=0; i<w2; i++) ctx.fillRect(cx + 2*sc - 10, cy + 48 - (i+1)*12, 20, 10);
  };

  const derivation = `1. Outcomes xáµ¢:
   xâ‚ = -2 (Left), xâ‚‚ = 2 (Right)

2. Probabilities P(xáµ¢):
   P(xâ‚) = ${w1} / ${w1 + w2} = ${(w1/(w1+w2)).toFixed(2)}
   P(xâ‚‚) = ${w2} / ${w1 + w2} = ${(w2/(w1+w2)).toFixed(2)}

3. Expected Value (Mean):
   E[X] = Î£ xáµ¢ P(xáµ¢)
   E[X] = (-2 * ${(w1/(w1+w2)).toFixed(2)}) + (2 * ${(w2/(w1+w2)).toFixed(2)})
   E[X] = ${mean.toFixed(3)}`;

  return (
    <div className="two-col">
       <div className="space-y-4">
          <div className="card">
            <div className="card-title">Expected Values</div>
            <div className="ctrl-row"><span className="ctrl-label">Weight L</span><input type="range" min="1" max="8" value={w1} onChange={e => setW1(+e.target.value)} /><span className="val-badge">{w1}</span></div>
            <div className="ctrl-row"><span className="ctrl-label">Weight R</span><input type="range" min="1" max="8" value={w2} onChange={e => setW2(+e.target.value)} /><span className="val-badge">{w2}</span></div>
          </div>
          <div className="card">
            <div className="result-label">Mean Calculation</div>
            <div className="result-box">{derivation}</div>
          </div>
       </div>
       <div><div className="canvas-card"><CanvasBase onDraw={draw} showControls={false} theme={theme as any} /></div></div>
    </div>
  );
};

export const ProbabilityLab = () => <BayesGrid />;

