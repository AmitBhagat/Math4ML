import React, { useState } from "react";
import { useTheme } from "../../../src/hooks/useTheme";
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
   MODULE 1: VECTORS (Advanced Operations)
   ───────────────────────────────────────────────────────────────────────────── */
export const VectorLab = () => {
  const { theme } = useTheme();
  const [mode, setMode] = useState<'add' | 'sub' | 'scalar'>('add');
  const [a, setA] = useState<[number, number]>([3, 2]);
  const [b, setB] = useState<[number, number]>([-2, 3]);
  const [k, setK] = useState(1.5);

  const resultant = mode === 'add' ? vec.add(a, b) : mode === 'sub' ? vec.sub(a, b) : vec.scale(a, k);

  const steps = mode === 'add' 
    ? [
        `a = [${a[0].toFixed(2)}, ${a[1].toFixed(2)}]^T, \\, b = [${b[0].toFixed(2)}, ${b[1].toFixed(2)}]^T`,
        `a + b = [${a[0].toFixed(2)} + (${b[0].toFixed(2)}), ${a[1].toFixed(2)} + (${b[1].toFixed(2)})]^T`,
        `v = [${resultant[0].toFixed(2)}, ${resultant[1].toFixed(2)}]^T`
      ]
    : mode === 'sub'
    ? [
        `a = [${a[0].toFixed(2)}, ${a[1].toFixed(2)}]^T, \\, b = [${b[0].toFixed(2)}, ${b[1].toFixed(2)}]^T`,
        `a - b = [${a[0].toFixed(2)} - (${b[0].toFixed(2)}), ${a[1].toFixed(2)} - (${b[1].toFixed(2)})]^T`,
        `v = [${resultant[0].toFixed(2)}, ${resultant[1].toFixed(2)}]^T`
      ]
    : [
        `a = [${a[0].toFixed(2)}, ${a[1].toFixed(2)}]^T, \\, k = ${k.toFixed(2)}`,
        `k \\cdot a = ${k.toFixed(2)} \\cdot [${a[0].toFixed(2)}, ${a[1].toFixed(2)}]^T`,
        `v = [${resultant[0].toFixed(2)}, ${resultant[1].toFixed(2)}]^T`
      ];

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Operation Mode</div>
          <div className="btn-row">
            <button className={`btn ${mode === 'add' ? 'btn-primary' : ''}`} onClick={() => setMode('add')}>A + B</button>
            <button className={`btn ${mode === 'sub' ? 'btn-primary' : ''}`} onClick={() => setMode('sub')}>A - B</button>
            <button className={`btn ${mode === 'scalar' ? 'btn-primary' : ''}`} onClick={() => setMode('scalar')}>k · A</button>
          </div>
          
          {mode === 'scalar' && (
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="card-title mb-2">Scalar Multiplier (k)</div>
              <div className="ctrl-row">
                <PremiumSlider min={-2} max={2} step={0.1} value={k} onChange={setK} origin={0} />
                <span className="val-badge text-orange">{k.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>

        <div className="card overflow-y-auto max-h-[300px]">
          <div className="result-label">Mathematical Derivation: {mode.toUpperCase()}</div>
          <LatexSolver steps={steps} />
        </div>
      </div>

      <div className="lab-visualizer canvas-card">
        <Mafs viewBox={{ x: [-5, 5], y: [-5, 5] }}>
          <Coordinates.Cartesian subdivisions={2} />
          <Vector tip={a} color="var(--accent-premium)" weight={3} />
          <Text x={a[0]} y={a[1]} attach="nw" color="var(--accent-premium)" style={{ fontSize: '12px', fontWeight: 800 }}>a</Text>
          <MovablePoint point={a} onMove={setA} color="var(--accent-premium)" />
          {mode !== 'scalar' && (
            <>
              <Vector tip={b} color="var(--green-premium)" weight={3} />
              <Text x={b[0]} y={b[1]} attach="ne" color="var(--green-premium)" style={{ fontSize: '12px', fontWeight: 800 }}>b</Text>
              <MovablePoint point={b} onMove={setB} color="var(--green-premium)" />
            </>
          )}
          {mode === 'add' && (
            <>
              <Vector tail={a} tip={resultant} color="var(--green-premium)" opacity={0.4} />
              <Vector tail={b} tip={resultant} color="var(--accent-premium)" opacity={0.4} />
            </>
          )}
          <Vector tip={resultant} color="var(--gold-premium)" weight={4} />
          <Text x={resultant[0]} y={resultant[1]} attach="se" color="var(--gold-premium)" style={{ fontSize: '12px', fontWeight: 800 }}>
            {mode === 'add' ? 'a+b' : mode === 'sub' ? 'a-b' : 'ka'}
          </Text>
          <Point point={resultant} color="var(--gold-premium)" />
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 2: NORMS & METRICS
   ───────────────────────────────────────────────────────────────────────────── */
export const NormsLab = () => {
  const { theme } = useTheme();
  const [v, setV] = useState<[number, number]>([3, 2]);
  const [mode, setMode] = useState<'l1' | 'l2' | 'inf'>('l2');

  const l1 = Math.abs(v[0]) + Math.abs(v[1]);
  const l2 = vec.mag(v);
  const linf = Math.max(Math.abs(v[0]), Math.abs(v[1]));

  const derivation = mode === 'l1'
    ? `1. Formula: ||v||₁ = |vₓ| + |vᵧ|\n\n2. Solve:\n   ||v||₁ = |${v[0].toFixed(2)}| + |${v[1].toFixed(2)}|\n   ||v||₁ = ${l1.toFixed(2)}`
    : mode === 'l2'
    ? `1. Formula: ||v||₂ = √(vₓ² + vᵧ²)\n\n2. Solve:\n   ||v||₂ = √(${v[0].toFixed(2)}² + ${v[1].toFixed(2)}²)\n   ||v||₂ = √(${(v[0]**2).toFixed(2)} + ${(v[1]**2).toFixed(2)})\n   ||v||₂ = √(${(v[0]**2 + v[1]**2).toFixed(2)})\n   ||v||₂ = ${l2.toFixed(2)}`
    : `1. Formula: ||v||∞ = max(|vₓ|, |vᵧ|)\n\n2. Solve:\n   ||v||∞ = max(|${v[0].toFixed(2)}|, |${v[1].toFixed(2)}|)\n   ||v||∞ = ${linf.toFixed(2)}`;

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Metric: {mode.toUpperCase()} Norm</div>
          <div className="btn-row">
            <button className={`btn ${mode === 'l1' ? 'btn-primary' : ''}`} onClick={() => setMode('l1')}>L1 (Manhattan)</button>
            <button className={`btn ${mode === 'l2' ? 'btn-primary' : ''}`} onClick={() => setMode('l2')}>L2 (Euclidean)</button>
            <button className={`btn ${mode === 'inf' ? 'btn-primary' : ''}`} onClick={() => setMode('inf')}>L∞ (Chebyshev)</button>
          </div>
        </div>

        <div className="card">
          <div className="result-label">Step-by-Step Norm</div>
          <div className="result-box whitespace-pre">{derivation}</div>
        </div>
      </div>

      <div className="lab-visualizer canvas-card">
        <Mafs viewBox={{ x: [-5, 5], y: [-5, 5] }}>
          <Coordinates.Cartesian subdivisions={2} />
          {mode === 'l1' && <Polygon points={[ [l1, 0], [0, l1], [-l1, 0], [0, -l1] ]} color="var(--gold-premium)" fillOpacity={0.05} strokeStyle="dashed" />}
          {mode === 'l2' && <Circle center={[0, 0]} radius={l2} color="var(--gold-premium)" fillOpacity={0.05} strokeStyle="dashed" />}
          {mode === 'inf' && <Polygon points={[ [linf, linf], [-linf, linf], [-linf, -linf], [linf, -linf] ]} color="var(--gold-premium)" fillOpacity={0.05} strokeStyle="dashed" />}
          <Vector tip={v} color="var(--accent-premium)" weight={3} />
          <MovablePoint point={v} onMove={setV} color="var(--accent-premium)" />
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 3: TRANSFORMATIONS
   ───────────────────────────────────────────────────────────────────────────── */
export const TransformLab = () => {
  const [m, setM] = useState<[ [number, number], [number, number] ]>([ [2, 0], [0, 1] ]);
  const [[t00, t01], [t10, t11]] = m;

  const setPreset = (p: string) => {
    const presets: Record<string, [ [number, number], [number, number] ]> = {
      scale2: [ [2, 0], [0, 2] ],
      rot90: [ [0, -1], [1, 0] ],
      shear: [ [1, 1], [0, 1] ],
      identity: [ [1, 0], [0, 1] ]
    };
    if (presets[p]) setM(presets[p]);
  };

  const matrix: [number, number, number, number, number, number] = [t00, t01, 0, t10, t11, 0];

  const derivation = `1. Transformation Matrix A:\n   A = [${t00.toFixed(2)}  ${t01.toFixed(2)}]\n       [${t10.toFixed(2)}  ${t11.toFixed(2)}]\n\n2. Basis Transformation:\n   T(e₁) = A * [1, 0]ᵀ = [${t00.toFixed(2)}, ${t10.toFixed(2)}]\n   T(e₂) = A * [0, 1]ᵀ = [${t01.toFixed(2)}, ${t11.toFixed(2)}]\n\n3. Area Scaling (Determinant):\n   det(A) = (a*d) - (b*c)\n   det(A) = (${t00.toFixed(2)} * ${t11.toFixed(2)}) - (${t01.toFixed(2)} * ${t10.toFixed(2)})\n   det(A) = ${(t00 * t11 - t01 * t10).toFixed(2)}`;

  return (
    <div className="two-col">
      <div className="space-y-4">
        <div className="card">
          <div className="card-title">Geometric Transforms</div>
          <div className="preset-row mt-4">
            <span className="preset-tag" onClick={() => setPreset('scale2')}>Scale</span>
            <span className="preset-tag" onClick={() => setPreset('rot90')}>Rotate</span>
            <span className="preset-tag" onClick={() => setPreset('shear')}>Shear</span>
            <span className="preset-tag" onClick={() => setPreset('identity')}>Reset</span>
          </div>
        </div>
        <div className="card">
          <div className="result-label">Step-by-Step Transform</div>
          <div className="result-box whitespace-pre">{derivation}</div>
        </div>
      </div>

      <div className="lab-visualizer canvas-card">
        <Mafs viewBox={{ x: [-5, 5], y: [-5, 5] }}>
          <Transform matrix={matrix}>
            <Coordinates.Cartesian subdivisions={2} />
            <Vector tip={[1, 0]} color="var(--accent-premium)" weight={3} />
            <Vector tip={[0, 1]} color="var(--gold-premium)" weight={3} />
            <Polygon points={[ [0,0], [1,0], [1,1], [0,1] ]} color="var(--green-premium)" fillOpacity={0.1} />
          </Transform>
          <MovablePoint point={[t00, t10]} color="var(--accent-premium)" onMove={([x, y]) => setM([[x, t01], [y, t11]])} />
          <MovablePoint point={[t01, t11]} color="var(--gold-premium)" onMove={([x, y]) => setM([[t00, x], [t10, y]])} />
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 4: DOT PRODUCT
   ───────────────────────────────────────────────────────────────────────────── */
export const DotProductLab = () => {
  const [a, setA] = useState<[number, number]>([3, 1]);
  const [b, setB] = useState<[number, number]>([1, 2]);

  const dot = a[0] * b[0] + a[1] * b[1];
  const magA = vec.mag(a);
  const magB = vec.mag(b);
  const cosTheta = dot / (magA * magB || 1);
  const angle = Math.acos(Math.max(-1, Math.min(1, cosTheta))) * (180 / Math.PI);

  const steps = [
    `a \\cdot b = (a_x b_x) + (a_y b_y) = (${a[0].toFixed(2)} \\cdot ${b[0].toFixed(2)}) + (${a[1].toFixed(2)} \\cdot ${b[1].toFixed(2)})`,
    `a \\cdot b = ${dot.toFixed(3)}`,
    `\\cos(\\theta) = \\frac{a \\cdot b}{||a|| ||b||} = \\frac{${dot.toFixed(2)}}{${magA.toFixed(2)} \\cdot ${magB.toFixed(2)}} = ${cosTheta.toFixed(3)}`,
    `\\theta = ${angle.toFixed(1)}^\\circ`,
    `\\text{Relationship: } ${cosTheta > 0.1 ? '\\text{Acute}' : cosTheta < -0.1 ? '\\text{Obtuse}' : '\\text{Orthogonal}'}`
  ];

  return (
    <div className="two-col">
      <div className="card h-full overflow-y-auto max-h-[400px]">
        <div className="result-label">Mathematical Derivation: Dot Product</div>
        <LatexSolver steps={steps} />
      </div>

      <div className="lab-visualizer canvas-card">
        <Mafs viewBox={{ x: [-5, 5], y: [-5, 5] }}>
          <Coordinates.Cartesian subdivisions={2} />
          <Vector tip={a} color="var(--accent-premium)" weight={3} />
          <MovablePoint point={a} onMove={setA} color="var(--accent-premium)" />
          <Vector tip={b} color="var(--green-premium)" weight={3} />
          <MovablePoint point={b} onMove={setB} color="var(--green-premium)" />
          <Text x={a[0]} y={a[1]} attach="ne" color="var(--accent-premium)">a</Text>
          <Text x={b[0]} y={b[1]} attach="nw" color="var(--green-premium)">b</Text>
        </Mafs>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 5: PROJECTIONS
   ───────────────────────────────────────────────────────────────────────────── */
export const ProjectionLab = () => {
  const [a, setA] = useState<[number, number]>([3, 2]);
  const [b, setB] = useState<[number, number]>([4, 0]);

  const dotAB = a[0] * b[0] + a[1] * b[1];
  const magBSq = b[0]**2 + b[1]**2;
  const scalar = dotAB / (magBSq || 1);
  const proj = [b[0] * scalar, b[1] * scalar] as [number, number];

  const steps = [
    `\\text{proj}_b a = \\frac{a \\cdot b}{||b||^2} b`,
    `a \\cdot b = ${dotAB.toFixed(2)}, \\, ||b||^2 = ${magBSq.toFixed(2)}`,
    `c = \\frac{${dotAB.toFixed(2)}}{${magBSq.toFixed(2)}} = ${scalar.toFixed(3)}`,
    `\\text{proj}_b a = ${scalar.toFixed(3)} \\cdot [${b[0].toFixed(2)}, ${b[1].toFixed(2)}]^T = [${proj[0].toFixed(2)}, ${proj[1].toFixed(2)}]^T`
  ];

  return (
    <div className="two-col">
      <div className="card h-full overflow-y-auto max-h-[400px]">
        <div className="result-label">Mathematical Derivation: Projections</div>
        <LatexSolver steps={steps} />
      </div>

      <div className="lab-visualizer canvas-card">
        <Mafs viewBox={{ x: [-5, 5], y: [-5, 5] }}>
          <Coordinates.Cartesian subdivisions={2} />
          <Vector tip={b} color="var(--muted-premium)" weight={2} opacity={0.5} />
          <Line.ThroughPoints point1={[0,0]} point2={b} color="var(--muted-premium)" opacity={0.2} strokeStyle="dashed" />
          <Vector tip={a} color="var(--accent-premium)" weight={3} />
          <MovablePoint point={a} onMove={setA} color="var(--accent-premium)" />
          <MovablePoint point={b} onMove={setB} color="var(--muted-premium)" />
          <Vector tip={proj} color="var(--gold-premium)" weight={4} />
          <Line.Segment point1={a} point2={proj} color="var(--gold-premium)" opacity={0.5} strokeStyle="dashed" />
          <Text x={proj[0]} y={proj[1]} attach="se" color="var(--gold-premium)">proj_b a</Text>
        </Mafs>
      </div>
    </div>
  );
};
