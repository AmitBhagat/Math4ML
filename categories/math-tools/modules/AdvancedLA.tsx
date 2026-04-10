import React, { useState, useEffect } from "react";
import { PremiumSlider } from "../../../src/components/visualizers/core/PremiumSlider";
import { Mafs, Coordinates, Vector, MovablePoint, Polygon, Circle, Transform, Line, Point, Text, vec } from "mafs";
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

/* ─────────────────────────────────────────────────────────────────────────────
   HELPERS & SHARED COMPONENTS
   ───────────────────────────────────────────────────────────────────────────── */
const LatexSolver = ({ steps }: { steps: string[] }) => (
  <div className="space-y-4 py-3">
    {steps.map((step, i) => (
      <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
        <div className="flex items-center gap-2 mb-0.5">
           <span className="w-4 h-4 rounded-full bg-accent-premium/10 text-accent-premium text-[9px] font-bold flex items-center justify-center border border-accent-premium/20">
             {i + 1}
           </span>
           <span className="text-[9px] font-black uppercase tracking-widest text-muted-premium opacity-60">Step {i + 1}</span>
        </div>
        <div className="pl-6 overflow-x-auto text-text-premium derivation-latex font-mono pb-4" style={{ fontSize: '11px' }}>
          <BlockMath math={step} />
        </div>
      </div>
    ))}
  </div>
);

const mtx = (vals: number[][]) => `\\begin{bmatrix} ${vals.map(r => r.map(v => v.toFixed(2)).join(' & ')).join(' \\\\ ')} \\end{bmatrix}`;

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 1: EIGENVALUES
   ───────────────────────────────────────────────────────────────────────────── */
export const EigenLab = () => {
  const [a, setA] = useState({ a00: 3, a01: 1, a10: 2, a11: 2 });
  const [eigenData, setEigenData] = useState({
    l1: 0, l2: 0, v1: [1, 0] as [number, number], v2: [0, 1] as [number, number], disc: -1
  });

  useEffect(() => {
    const { a00, a01, a10, a11 } = a;
    const tr = a00 + a11, det = a00 * a11 - a01 * a10, disc = tr * tr - 4 * det;
    if (disc >= 0) {
      const l1 = (tr + Math.sqrt(disc)) / 2, l2 = (tr - Math.sqrt(disc)) / 2;
      const getEv = (l: number): [number, number] => {
        if (Math.abs(a01) > 1e-4) return [a01, l - a00];
        if (Math.abs(a10) > 1e-4) return [l - a11, a10];
        return Math.abs(l - a00) < 1e-4 ? [1, 0] : [0, 1];
      };
      setEigenData({ l1, l2, v1: getEv(l1), v2: getEv(l2), disc });
    } else setEigenData(prev => ({ ...prev, disc }));
  }, [a]);

  const tr = a.a00 + a.a11;
  const det = a.a00 * a.a11 - a.a01 * a.a10;
  const disc = tr * tr - 4 * det;
  
  const steps = [
    `A = ${mtx([[a.a00, a.a01], [a.a10, a.a11]])}`,
    `\\det(A - \\lambda I) = (a_{11} - \\lambda)(a_{22} - \\lambda) - a_{12}a_{21} = 0`,
    `\\lambda^2 - (${a.a00.toFixed(2)} + ${a.a11.toFixed(2)})\\lambda + (${det.toFixed(2)}) = 0`,
    `\\lambda^2 - ${tr.toFixed(2)}\\lambda + ${det.toFixed(2)} = 0`,
    `D = tr^2 - 4\\det = ${disc.toFixed(3)}`,
    disc >= 0 ? 
      `\\lambda_{1,2} = \\frac{${tr.toFixed(2)} \\pm \\sqrt{${disc.toFixed(2)}}}{2} \\Rightarrow \\lambda_1=${eigenData.l1.toFixed(2)}, \\lambda_2=${eigenData.l2.toFixed(2)}` :
      `\\lambda \\in \\mathbb{C} \\text{ (Complex Spectrum)}`
  ];

  const matrix: [number, number, number, number, number, number] = [a.a00, a.a01, 0, a.a10, a.a11, 0];

  return (
    <div className="two-col">
      <div className="card h-full overflow-y-auto max-h-[500px]">
        <div className="result-label">Mathematical Derivation: Eigenvalues</div>
        <LatexSolver steps={steps} />
      </div>

      <div className="lab-visualizer canvas-card">
        <Mafs viewBox={{ x: [-5, 5], y: [-5, 5] }}>
          <Coordinates.Cartesian subdivisions={2} />
          <Transform matrix={matrix}>
            <Polygon points={[[0,0], [1,0], [1,1], [0,1]]} color="var(--accent-premium)" fillOpacity={0.05} />
          </Transform>
          <MovablePoint point={[a.a00, a.a10]} color="var(--accent-premium)" onMove={([x, y]) => setA({...a, a00: x, a10: y})} />
          <MovablePoint point={[a.a01, a.a11]} color="var(--gold-premium)" onMove={([x, y]) => setA({...a, a01: x, a11: y})} />
          {eigenData.disc >= 0 && (
            <>
              <Line.ThroughPoints point1={[0,0]} point2={eigenData.v1} color="var(--accent-premium)" opacity={0.3} strokeStyle="dashed" />
              <Vector tip={eigenData.v1} color="var(--accent-premium)" weight={3} />
              <Line.ThroughPoints point1={[0,0]} point2={eigenData.v2} color="var(--green-premium)" opacity={0.3} strokeStyle="dashed" />
              <Vector tip={eigenData.v2} color="var(--green-premium)" weight={3} />
            </>
          )}
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 2: LINEAR SYSTEMS
   ───────────────────────────────────────────────────────────────────────────── */
export const SystemsLab = () => {
  const [s, setS] = useState({ a: 2, b: 1, e: 4, c: 3, d: 3, f: 11 });

  const getIntersection = () => {
    const det = s.a * s.d - s.b * s.c;
    if (Math.abs(det) < 1e-9) return null;
    return [(s.e * s.d - s.b * s.f) / det, (s.a * s.f - s.e * s.c) / det] as [number, number];
  };

  const inter = getIntersection();
  const det = s.a * s.d - s.b * s.c;
  const dx = s.e * s.d - s.b * s.f;
  const dy = s.a * s.f - s.e * s.c;

  const steps = [
    `A|b = \\left[ \\begin{matrix} ${s.a} & ${s.b} \\\\ ${s.c} & ${s.d} \\end{matrix} \\, \\middle| \\, \\begin{matrix} ${s.e} \\\\ ${s.f} \\end{matrix} \\right]`,
    `D = \\det(A) = ${s.a} \\cdot ${s.d} - ${s.b} \\cdot ${s.c} = ${det.toFixed(2)}`,
    `D_x = \\det\\begin{bmatrix} ${s.e} & ${s.b} \\\\ ${s.f} & ${s.d} \\end{bmatrix} = ${dx.toFixed(2)}`,
    `D_y = \\det\\begin{bmatrix} ${s.a} & ${s.e} \\\\ ${s.c} & ${s.f} \\end{bmatrix} = ${dy.toFixed(2)}`,
    `x = \\frac{D_x}{D} = ${det !==0 ? (dx/det).toFixed(3) : '\\infty'}, \\, y = \\frac{D_y}{D} = ${det !==0 ? (dy/det).toFixed(3) : '\\infty'}`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">System Solver [2x2]</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input className="mat-input w-16" type="number" value={s.a} onChange={e => setS({ ...s, a: +e.target.value })} /> x +
              <input className="mat-input w-16" type="number" value={s.b} onChange={e => setS({ ...s, b: +e.target.value })} /> y =
              <input className="mat-input w-16" type="number" value={s.e} onChange={e => setS({ ...s, e: +e.target.value })} />
            </div>
            <div className="flex items-center gap-2">
              <input className="mat-input w-16" type="number" value={s.c} onChange={e => setS({ ...s, c: +e.target.value })} /> x +
              <input className="mat-input w-16" type="number" value={s.d} onChange={e => setS({ ...s, d: +e.target.value })} /> y =
              <input className="mat-input w-16" type="number" value={s.f} onChange={e => setS({ ...s, f: +e.target.value })} />
            </div>
          </div>
        </div>
        <div className="card overflow-y-auto max-h-[300px]">
          <div className="result-label">Mathematical Derivation: Cramer's Rule</div>
          <LatexSolver steps={steps} />
        </div>
      </div>

      <div className="lab-visualizer canvas-card">
        <Mafs viewBox={{ x: [-10, 10], y: [-10, 10] }}>
          <Coordinates.Cartesian subdivisions={2} />
          <Line.PointSlope
            point={Math.abs(s.b) > 1e-4 ? [0, s.e / s.b] : [s.a !== 0 ? s.e / s.a : 0, 0]}
            slope={Math.abs(s.b) > 1e-4 ? -s.a / s.b : 1e10}
            color="var(--accent-premium)"
          />
          <Line.PointSlope
            point={Math.abs(s.d) > 1e-4 ? [0, s.f / s.d] : [s.c !== 0 ? s.f / s.c : 0, 0]}
            slope={Math.abs(s.d) > 1e-4 ? -s.c / s.d : 1e10}
            color="var(--green-premium)"
          />
          {inter && <Point point={inter} color="var(--gold-premium)" />}
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 3: BASIS & SPAN
   ───────────────────────────────────────────────────────────────────────────── */
export const BasisLab = () => {
  const [b1, setB1] = useState<[number, number]>([2, 1]);
  const [b2, setB2] = useState<[number, number]>([1, 2]);

  const det = b1[0]*b2[1] - b1[1]*b2[0];
  const area = Math.abs(det);
  
  const steps = [
    `B = ${mtx([[b1[0], b2[0]], [b1[1], b2[1]]])}`,
    `\\det(B) = (${b1[0].toFixed(2)} \\cdot ${b2[1].toFixed(2)}) - (${b1[1].toFixed(2)} \\cdot ${b2[0].toFixed(2)}) = ${det.toFixed(3)}`,
    `Area = |\\det(B)| = ${area.toFixed(2)} \\text{ units}^2`,
    area > 0.01 ? `\\text{Linear Independence Preserved}` : `\\text{Space Collapsed (Dependent)}`
  ];

  return (
    <div className="two-col">
      <div className="card h-full overflow-y-auto max-h-[400px]">
        <div className="result-label">Mathematical Derivation: Basis Span</div>
        <LatexSolver steps={steps} />
      </div>

      <div className="lab-visualizer canvas-card">
        <Mafs viewBox={{ x: [-5, 5], y: [-5, 5] }}>
          <Coordinates.Cartesian subdivisions={2} />
          <Polygon points={[ [0,0], b1, vec.add(b1, b2), b2 ]} color="var(--accent-premium)" fillOpacity={0.1} />
          <Vector tip={b1} color="var(--accent-premium)" weight={3} />
          <MovablePoint point={b1} onMove={setB1} color="var(--accent-premium)" />
          <Vector tip={b2} color="var(--green-premium)" weight={3} />
          <MovablePoint point={b2} onMove={setB2} color="var(--green-premium)" />
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 4: DETERMINANTS (Geometric)
   ───────────────────────────────────────────────────────────────────────────── */
export const DeterminantsLab = () => {
  const [m, setM] = useState({ a: 1, b: 0.5, c: 0.5, d: 1 });
  const det = m.a * m.d - m.b * m.c;

  const steps = [
    `A = ${mtx([[m.a, m.b], [m.c, m.d]])}`,
    `\\det(A) = ad - bc = (${m.a.toFixed(2)} \\cdot ${m.d.toFixed(2)}) - (${m.b.toFixed(2)} \\cdot ${m.c.toFixed(2)})`,
    `\\det(A) = ${det.toFixed(3)}`,
    `\\text{Orientation: } ${det < 0 ? '\\text{Flipped (Left-handed)}' : '\\text{Preserved (Right-handed)}'}`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Determinant Visualizer</div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="ctrl-group">
               <label className="text-[10px] uppercase font-bold opacity-50">a</label>
               <PremiumSlider min={-2} max={2} step={0.1} value={m.a} onChange={v => setM({...m, a: v})} origin={0} />
            </div>
            <div className="ctrl-group">
               <label className="text-[10px] uppercase font-bold opacity-50">b</label>
               <PremiumSlider min={-2} max={2} step={0.1} value={m.b} onChange={v => setM({...m, b: v})} origin={0} />
            </div>
            <div className="ctrl-group">
               <label className="text-[10px] uppercase font-bold opacity-50">c</label>
               <PremiumSlider min={-2} max={2} step={0.1} value={m.c} onChange={v => setM({...m, c: v})} origin={0} />
            </div>
            <div className="ctrl-group">
               <label className="text-[10px] uppercase font-bold opacity-50">d</label>
               <PremiumSlider min={-2} max={2} step={0.1} value={m.d} onChange={v => setM({...m, d: v})} origin={0} />
            </div>
          </div>
        </div>
        <div className="card overflow-y-auto max-h-[300px]">
          <div className="result-label">Mathematical Derivation: Determinant</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div className="lab-visualizer canvas-card">
        <Mafs viewBox={{ x: [-4, 4], y: [-4, 4] }}>
          <Coordinates.Cartesian subdivisions={2} />
          <Transform matrix={[m.a, m.b, 0, m.c, m.d, 0]}>
            <Polygon points={[[0,0], [1,0], [1,1], [0,1]]} color="var(--gold-premium)" fillOpacity={0.1} />
            <Vector tip={[1, 0]} color="var(--accent-premium)" />
            <Vector tip={[0, 1]} color="var(--green-premium)" />
          </Transform>
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 5: MATRIX MULTIPLICATION
   ───────────────────────────────────────────────────────────────────────────── */
export const MatrixMultiplicationLab = () => {
  const [a, setA] = useState([[1, 2], [3, 4]]);
  const [b, setB] = useState([[5, 6], [7, 8]]);

  const c = [
    [a[0][0]*b[0][0] + a[0][1]*b[1][0], a[0][0]*b[0][1] + a[0][1]*b[1][1]],
    [a[1][0]*b[0][0] + a[1][1]*b[1][0], a[1][0]*b[0][1] + a[1][1]*b[1][1]],
  ];

  const steps = [
    `A = ${mtx(a)}, \\, B = ${mtx(b)}`,
    `C = A B = ${mtx(c)}`,
    `C_{11} = (a_{11}b_{11}) + (a_{12}b_{21}) = (${a[0][0]} \\cdot ${b[0][0]}) + (${a[0][1]} \\cdot ${b[1][0]}) = ${c[0][0]}`,
    `C_{12} = (a_{11}b_{12}) + (a_{12}b_{22}) = (${a[0][0]} \\cdot ${b[0][1]}) + (${a[0][1]} \\cdot ${b[1][1]}) = ${c[0][1]}`,
    `C_{21} = (a_{21}b_{11}) + (a_{22}b_{21}) = (${a[1][0]} \\cdot ${b[0][0]}) + (${a[1][1]} \\cdot ${b[1][0]}) = ${c[1][0]}`,
    `C_{22} = (a_{21}b_{12}) + (a_{22}b_{22}) = (${a[1][0]} \\cdot ${b[0][1]}) + (${a[1][1]} \\cdot ${b[1][1]}) = ${c[1][1]}`
  ];

  return (
    <div className="two-col">
       <div className="space-y-4">
          <div className="card">
            <div className="card-title">Matrix Multiplication [A × B]</div>
            <div className="flex gap-4 justify-center items-center">
               <div className="grid grid-cols-2 gap-1 bg-surface2 p-2 rounded">
                  {a.flat().map((v, i) => <input key={i} className="mat-input w-10 text-center" value={v} onChange={e => {
                    const next = [...a.map(r => [...r])];
                    next[Math.floor(i/2)][i%2] = +e.target.value;
                    setA(next);
                  }} />)}
               </div>
               <span className="text-xl">×</span>
               <div className="grid grid-cols-2 gap-1 bg-surface2 p-2 rounded">
                  {b.flat().map((v, i) => <input key={i} className="mat-input w-10 text-center" value={v} onChange={e => {
                    const next = [...b.map(r => [...r])];
                    next[Math.floor(i/2)][i%2] = +e.target.value;
                    setB(next);
                  }} />)}
               </div>
            </div>
          </div>
          <div className="card overflow-y-auto max-h-[300px]">
            <div className="result-label">Mathematical Derivation: Matrix Product</div>
            <LatexSolver steps={steps} />
          </div>
       </div>
       <div className="card flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs uppercase opacity-50 mb-4 tracking-widest">Resulting Matrix C</div>
            <div className="grid grid-cols-2 gap-4">
               {c.flat().map((v, i) => (
                 <div key={i} className="w-16 h-16 rounded-xl border border-accent-premium/30 bg-accent-premium/5 flex items-center justify-center text-xl font-black text-accent-premium">
                   {v}
                 </div>
               ))}
            </div>
          </div>
       </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 6: MATRIX RANK
   ───────────────────────────────────────────────────────────────────────────── */
export const RankLab = () => {
  const [v1, setV1] = useState<[number, number]>([1, 0]);
  const [v2, setV2] = useState<[number, number]>([0, 1]);
  const [v3, setV3] = useState<[number, number]>([1, 1]);

  const det12 = v1[0] * v2[1] - v1[1] * v2[0];
  const isDependent = Math.abs(det12) < 0.01;
  const rank = isDependent ? (Math.abs(v1[0]) + Math.abs(v1[1]) > 0.01 ? 1 : 0) : 2;

  const steps = [
    `A = [v_1 | v_2] = ${mtx([[v1[0], v2[0]], [v1[1], v2[1]]])}`,
    `\\det(v_1, v_2) = ${det12.toFixed(3)}`,
    `\\text{Rank} = \\dim(\\text{col}(A))`,
    `\\text{Independence}: ${isDependent ? '\\text{Singular (Line-dependent)}' : '\\text{Full Rank (Area-spanning)}'}`,
    `\\text{Resulting RANK} = ${rank}`
  ];

  return (
    <div className="two-col">
      <div className="card h-full overflow-y-auto max-h-[400px]">
        <div className="result-label">Mathematical Derivation: Matrix Rank</div>
        <LatexSolver steps={steps} />
      </div>
      <div className="lab-visualizer canvas-card">
         <Mafs viewBox={{ x: [-4, 4], y: [-4, 4] }}>
            <Coordinates.Cartesian subdivisions={2} />
            <Vector tip={v1} color="var(--accent-premium)" weight={3} />
            <MovablePoint point={v1} onMove={setV1} color="var(--accent-premium)" />
            <Vector tip={v2} color="var(--green-premium)" weight={3} />
            <MovablePoint point={v2} onMove={setV2} color="var(--green-premium)" />
            <Vector tip={v3} color="var(--gold-premium)" weight={2} opacity={0.3} />
            <MovablePoint point={v3} onMove={setV3} color="var(--gold-premium)" />
         </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 9: VECTOR SPACES
   ───────────────────────────────────────────────────────────────────────────── */
export const VectorSpacesLab = () => {
  const [lineShift, setLineShift] = useState(0); // 0 = subspace, >0 = non-subspace
  const [u1, setU1] = useState(1);
  const [v1, setV1] = useState(-1.5);
  const [k, setK] = useState(1.5);

  const slope = 0.5;
  const u: [number, number] = [u1, u1 * slope + lineShift];
  const v: [number, number] = [v1, v1 * slope + lineShift];
  const sum: [number, number] = [u[0] + v[0], u[1] + v[1]];
  const scaled: [number, number] = [u[0] * k, u[1] * k];

  // Closure Check
  const sumOnLine = Math.abs(sum[1] - (sum[0] * slope + lineShift)) < 0.01;
  const scaledOnLine = Math.abs(scaled[1] - (scaled[0] * slope + lineShift)) < 0.01;

  const steps = [
    `L: y = ${slope}x + ${lineShift}`,
    `\\text{Closure check for } \\mathbf{u} + \\mathbf{v}: ${sumOnLine ? '\\text{PASS}' : '\\text{FAIL}'}`,
    `\\text{Closure check for } k\\mathbf{u}: ${scaledOnLine ? '\\text{PASS}' : '\\text{FAIL}'}`,
    lineShift === 0 
      ? `\\text{Origin (0,0) is in Set. Valid Subspace.}` 
      : `\\text{Origin (0,0) is MISSING. Not a Subspace.}`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Subspace Axiom Test</div>
          <div className="ctrl-row">
            <span className="ctrl-label">Origin Offset</span>
            <PremiumSlider min={0} max={2} step={0.5} value={lineShift} onChange={setLineShift} origin={0} />
            <span className="val-badge">{lineShift === 0 ? "Through Origin" : "Shifted"}</span>
          </div>
          <div className="ctrl-row">
            <span className="ctrl-label">Scalar k</span>
            <PremiumSlider min={-2} max={2} step={0.1} value={k} onChange={setK} origin={1} />
            <span className="val-badge">{k.toFixed(1)}x</span>
          </div>
        </div>
        <div className="card overflow-y-auto max-h-[350px]">
          <div className="result-label">Linear Closure Validation</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div className="canvas-card" style={{ height: '400px' }}>
        <Mafs viewBox={{ x: [-5, 5], y: [-5, 5] }}>
          <Coordinates.Cartesian subdivisions={2} />
          <Line.PointSlope point={[0, lineShift]} slope={slope} color="var(--border)" opacity={0.3} />
          
          <Vector tip={u} color="var(--blue-premium)" weight={3} />
          <MovablePoint point={[u[0], 0]} onMove={([x]) => setU1(x)} color="var(--blue-premium)" />
          
          <Vector tip={v} color="var(--green-premium)" weight={3} />
          <MovablePoint point={[v[0], 0]} onMove={([x]) => setV1(x)} color="var(--green-premium)" />

          <Vector tip={sum} color="var(--accent-premium)" opacity={0.5} weight={2} />
          <Point point={sum} color="var(--accent-premium)" size={4} />
          
          <Vector tip={scaled} color="var(--gold-premium)" opacity={0.5} weight={2} />
          <Point point={scaled} color="var(--gold-premium)" size={4} />

          <Text x={sum[0]} y={sum[1]} color="var(--accent-premium)" size={10} attach="ne">u+v</Text>
          <Text x={scaled[0]} y={scaled[1]} color="var(--gold-premium)" size={10} attach="sw">ku</Text>
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 10: MATRIX INVERSE
   ───────────────────────────────────────────────────────────────────────────── */
export const InverseLab = () => {
  const [a, setA] = useState({ a00: 1.5, a01: 0.5, a10: 0.2, a11: 1.2 });
  const [showInverse, setShowInverse] = useState(false);

  const det = a.a00 * a.a11 - a.a01 * a.a10;
  const canInvert = Math.abs(det) > 0.01;

  const inv = canInvert ? {
    a00: a.a11/det, a01: -a.a01/det,
    a10: -a.a10/det, a11: a.a00/det
  } : null;

  const matrix: [number, number, number, number, number, number] = [a.a00, a.a01, 0, a.a10, a.a11, 0];
  const invMatrix: [number, number, number, number, number, number] = inv ? [inv.a00, inv.a01, 0, inv.a10, inv.a11, 0] : [1,0,0,0,1,0];

  const steps = [
    `A = ${mtx([[a.a00, a.a01], [a.a10, a.a11]])}`,
    `\\det(A) = ${det.toFixed(3)}`,
    inv ? `A^{-1} = ${mtx([[inv.a00, inv.a01], [inv.a10, inv.a11]])}` : `\\text{Matrix is Singular!}`
  ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">The Undo Button</div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <PremiumSlider min={-2} max={2} step={0.1} value={a.a00} onChange={v => setA({...a, a00: v})} />
            <PremiumSlider min={-2} max={2} step={0.1} value={a.a01} onChange={v => setA({...a, a01: v})} />
            <PremiumSlider min={-2} max={2} step={0.1} value={a.a10} onChange={v => setA({...a, a10: v})} />
            <PremiumSlider min={-2} max={2} step={0.1} value={a.a11} onChange={v => setA({...a, a11: v})} />
          </div>
          <div className="btn-row mt-6">
            <button 
              className={`btn w-full ${showInverse ? 'btn-primary' : ''}`}
              onClick={() => setShowInverse(!showInverse)}
              disabled={!canInvert}
            >
              {showInverse ? "Apply Inverse (Undo)" : "View Inverse"}
            </button>
          </div>
        </div>
        <div className="card overflow-y-auto max-h-[350px]">
          <div className="result-label">Reversing Linear Action</div>
          <LatexSolver steps={steps} />
        </div>
      </div>
      <div className="canvas-card" style={{ height: '400px' }}>
        <Mafs viewBox={{ x: [-4, 4], y: [-4, 4] }}>
          <Coordinates.Cartesian subdivisions={2} />
          
          {/* Base Shape */}
          <Polygon points={[[0,0], [1,0], [1,1], [0,1]]} color="var(--border)" opacity={0.2} strokeStyle="dashed" />

          {/* Transformed Shape */}
          <Transform matrix={showInverse ? [1, 0, 0, 0, 1, 0] : matrix}>
            <Polygon points={[[0,0], [1,0], [1,1], [0,1]]} color="var(--accent-premium)" fillOpacity={0.15} />
            <Vector tip={[1, 0]} color="var(--accent-premium)" />
            <Vector tip={[0, 1]} color="var(--green-premium)" />
          </Transform>

          {!showInverse && (
             <MovablePoint point={[a.a00, a.a10]} color="var(--accent-premium)" onMove={([x, y]) => setA({...a, a00: x, a10: y})} />
          )}
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 7: SVD
   ───────────────────────────────────────────────────────────────────────────── */
export const SVDLab = () => {
  const [a, setA] = useState({ a00: 2, a01: 0, a10: 0.5, a11: 1 });

  const getSVD = () => {
    const { a00, a01, a10, a11 } = a;
    const m00 = a00 * a00 + a10 * a10, m01 = a00 * a01 + a10 * a11, m11 = a01 * a01 + a11 * a11;
    const tr = m00 + m11, det = m00 * m11 - m01 * m01;
    const disc = Math.sqrt(Math.max(0, tr * tr / 4 - det));
    const l1 = tr / 2 + disc, l2 = tr / 2 - disc;
    const s1 = Math.sqrt(l1), s2 = Math.sqrt(l2);
    
    let v1: [number, number] = [1, 0];
    if (Math.abs(m01) > 1e-4) {
      v1 = [m01, l1 - m00];
    } else {
      v1 = l1 - m00 > l1 - m11 ? [1, 0] : [0, 1];
    }
    const magV1 = Math.sqrt(v1[0]**2 + v1[1]**2) || 1;
    v1 = [v1[0]/magV1, v1[1]/magV1];
    const v2: [number, number] = [-v1[1], v1[0]];

    const axis1: [number, number] = [a00*v1[0] + a01*v1[1], a10*v1[0] + a11*v1[1]];
    const axis2: [number, number] = [a00*v2[0] + a01*v2[1], a10*v2[0] + a11*v2[1]];
    return { s1, s2, axis1, axis2, m00, m01, m11, tr, det };
  };

  const { s1, s2, axis1, axis2, m00, m01, m11, tr, det } = getSVD();
  const matrix: [number, number, number, number, number, number] = [a.a00, a.a01, 0, a.a10, a.a11, 0];

  const steps = [
    `A = ${mtx([[a.a00, a.a01], [a.a10, a.a11]])}`,
    `A^T A = ${mtx([[m00, m01], [m01, m11]])}`,
    `\\det(A^T A - \\lambda I) = 0 \\Rightarrow \\lambda_1=${(s1**2).toFixed(2)}, \\lambda_2=${(s2**2).toFixed(2)}`,
    `\\sigma_1 = \\sqrt{\\lambda_1} = ${s1.toFixed(3)}, \\, \\sigma_2 = \\sqrt{\\lambda_2} = ${s2.toFixed(3)}`,
    `Av_1 = \\sigma_1 u_1 = [${axis1[0].toFixed(2)}, ${axis1[1].toFixed(2)}]^T`,
    `Av_2 = \\sigma_2 u_2 = [${axis2[0].toFixed(2)}, ${axis2[1].toFixed(2)}]^T`
  ];

  return (
    <div className="two-col">
      <div className="card h-full overflow-y-auto max-h-[500px]">
        <div className="result-label">Mathematical Derivation: SVD</div>
        <LatexSolver steps={steps} />
      </div>

      <div className="lab-visualizer canvas-card">
        <Mafs viewBox={{ x: [-4, 4], y: [-4, 4] }}>
          <Coordinates.Cartesian subdivisions={2} />
          <Circle center={[0, 0]} radius={1} color="var(--text-premium)" opacity={0.1} strokeStyle="dashed" />
          <Transform matrix={matrix}>
            <Circle center={[0, 0]} radius={1} color="var(--gold-premium)" fillOpacity={0.05} />
          </Transform>
          <Vector tip={[a.a00, a.a10]} color="var(--accent-premium)" opacity={0.3} strokeStyle="dashed" />
          <Vector tip={[a.a01, a.a11]} color="var(--green-premium)" opacity={0.3} strokeStyle="dashed" />
          <MovablePoint point={[a.a00, a.a10]} color="var(--accent-premium)" onMove={([x, y]) => setA({...a, a00: x, a10: y})} />
          <MovablePoint point={[a.a01, a.a11]} color="var(--green-premium)" onMove={([x, y]) => setA({...a, a01: x, a11: y})} />
          <Vector tip={axis1} color="var(--accent-premium)" weight={4} />
          <Vector tip={axis2} color="var(--green-premium)" weight={4} />
          <Text x={axis1[0]} y={axis1[1]} attach="ne" color="var(--accent-premium)">σ₁u₁</Text>
          <Text x={axis2[0]} y={axis2[1]} attach="nw" color="var(--green-premium)">σ₂u₂</Text>
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 8: PCA (Principal Component Analysis)
   ───────────────────────────────────────────────────────────────────────────── */
export const PCALab = () => {
  const [points, setPoints] = useState<[number, number][]>([
    [2, 1], [-1, -1], [1, 2], [-2, -1], [0.5, 0.5]
  ]);

  const getPCA = () => {
    // Center data
    const meanX = points.reduce((acc, p) => acc + p[0], 0) / points.length;
    const meanY = points.reduce((acc, p) => acc + p[1], 0) / points.length;
    
    // Covariance matrix
    let c00 = 0, c01 = 0, c11 = 0;
    points.forEach(p => {
      const dx = p[0] - meanX;
      const dy = p[1] - meanY;
      c00 += dx * dx;
      c01 += dx * dy;
      c11 += dy * dy;
    });
    c00 /= points.length - 1; c01 /= points.length - 1; c11 /= points.length - 1;

    // Eigen-analysis of Covariance Matrix
    const tr = c00 + c11, det = c00 * c11 - c01 * c01;
    const disc = Math.sqrt(Math.max(0, tr * tr / 4 - det));
    const l1 = tr / 2 + disc, l2 = tr / 2 - disc;
    
    let v1: [number, number] = [1, 0];
    if (Math.abs(c01) > 1e-4) v1 = [c01, l1 - c00];
    else v1 = l1 - c00 > l1 - c11 ? [1, 0] : [0, 1];
    
    const mag1 = Math.sqrt(v1[0]**2 + v1[1]**2) || 1;
    v1 = [v1[0]/mag1, v1[1]/mag1];
    const v2: [number, number] = [-v1[1], v1[0]];

    return { l1, l2, v1, v2, c00, c01, c11, meanX, meanY };
  };

  const { l1, l2, v1, v2, c00, c01, c11, meanX, meanY } = getPCA();

  const steps = [
    `\\mu = [${meanX.toFixed(2)}, ${meanY.toFixed(2)}]^T \\text{ (Mean of 5 points)}`,
    `\\Sigma = \\frac{1}{n-1} X^T X \\rightarrow \\text{Sub } n=5: \\, \\frac{1}{4} X^T X`,
    `\\Sigma = ${mtx([[c00, c01], [c01, c11]])}`,
    `\\det(\\Sigma - \\lambda I) = 0 \\Rightarrow \\lambda_1 = ${l1.toFixed(3)}, \\lambda_2 = ${l2.toFixed(3)}`,
    `\\text{Variance Expl. PC1} = ${(l1 / (l1 + l2) * 100).toFixed(1)} \\%`
  ];

  return (
    <div className="two-col">
      <div className="card h-full overflow-y-auto max-h-[500px]">
        <div className="result-label">Mathematical Derivation: PCA</div>
        <LatexSolver steps={steps} />
      </div>

      <div className="lab-visualizer canvas-card">
        <Mafs viewBox={{ x: [-4, 4], y: [-4, 4] }}>
          <Coordinates.Cartesian subdivisions={2} />
          {points.map((p, i) => (
            <MovablePoint key={i} point={p} color="var(--accent-premium)" onMove={(next) => {
              const newPts = [...points];
              newPts[i] = next as [number, number];
              setPoints(newPts);
            }} />
          ))}
          <Point point={[meanX, meanY]} color="var(--gold-premium)" size={6} />
          <Vector tail={[meanX, meanY]} tip={[meanX + v1[0]*Math.sqrt(l1), meanY + v1[1]*Math.sqrt(l1)]} color="var(--gold-premium)" weight={4} />
          <Vector tail={[meanX, meanY]} tip={[meanX + v2[0]*Math.sqrt(l2), meanY + v2[1]*Math.sqrt(l2)]} color="var(--purple-premium)" weight={3} />
        </Mafs>
      </div>
    </div>
  );
};
