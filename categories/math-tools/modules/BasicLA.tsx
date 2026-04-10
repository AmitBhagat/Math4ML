import React, { useState } from "react";
import { Mafs, Coordinates, Vector, MovablePoint, Polygon, Circle, Transform, Line, Point, vec } from "mafs";

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 1: VECTORS (Advanced Operations)
   ───────────────────────────────────────────────────────────────────────────── */
export const VectorLab = () => {
  const [mode, setMode] = useState<'add' | 'sub' | 'scalar'>('add');
  const [a, setA] = useState<[number, number]>([3, 2]);
  const [b, setB] = useState<[number, number]>([-2, 3]);
  const [k, setK] = useState(1.5);

  const resultant = mode === 'add' ? vec.add(a, b) : mode === 'sub' ? vec.sub(a, b) : vec.scale(a, k);

  const derivation = mode === 'add' 
    ? `1. Addition:\n   v = a + b\n   v = [${a[0]}, ${a[1]}] + [${b[0]}, ${b[1]}]\n   v = [${a[0]} + (${b[0]}), ${a[1]} + (${b[1]})]\n   v = [${resultant[0].toFixed(2)}, ${resultant[1].toFixed(2)}]`
    : mode === 'sub'
    ? `1. Subtraction:\n   v = a - b\n   v = [${a[0]}, ${a[1]}] - [${b[0]}, ${b[1]}]\n   v = [${a[0]} - (${b[0]}), ${a[1]} - (${b[1]})]\n   v = [${resultant[0].toFixed(2)}, ${resultant[1].toFixed(2)}]`
    : `1. Scalar Product:\n   v = k * a\n   v = ${k.toFixed(2)} * [${a[0]}, ${a[1]}]\n   v = [${k.toFixed(2)} * ${a[0]}, ${k.toFixed(2)} * ${a[1]}]\n   v = [${resultant[0].toFixed(2)}, ${resultant[1].toFixed(2)}]`;

  return (
    <div className="lab-layout">
      <div className="lab-visualizer canvas-card" style={{ height: '450px' }}>
        <Mafs viewBox={{ x: [-5, 5], y: [-5, 5] }}>
          <Coordinates.Cartesian subdivisions={2} />
          <Vector tip={a} color="var(--accent-premium)" weight={3} />
          <MovablePoint point={a} onMove={setA} color="var(--accent-premium)" />
          {mode !== 'scalar' && (
            <>
              <Vector tip={b} color="var(--green-premium)" weight={3} />
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
          <Point point={resultant} color="var(--gold-premium)" />
        </Mafs>
      </div>

      <div className="lab-grid">
        <div className="space-y-4">
          <div className="card">
            <div className="card-title">Operation Mode</div>
            <div className="btn-row">
              <button className={`btn ${mode === 'add' ? 'btn-primary' : ''}`} onClick={() => setMode('add')}>A + B</button>
              <button className={`btn ${mode === 'sub' ? 'btn-primary' : ''}`} onClick={() => setMode('sub')}>A - B</button>
              <button className={`btn ${mode === 'scalar' ? 'btn-primary' : ''}`} onClick={() => setMode('scalar')}>k · A</button>
            </div>
          </div>
          
          <div className="card">
            <div className="card-title">Vector A <span className="text-[10px] opacity-50 ml-2">(Drag tip)</span></div>
            <div className="ctrl-row"><span className="ctrl-label">Aₓ</span><input type="range" min="-5" max="5" step="0.5" value={a[0]} onChange={e => setA([+e.target.value, a[1]])} /><span className="val-badge text-blue">{a[0]}</span></div>
            <div className="ctrl-row"><span className="ctrl-label">Aᵧ</span><input type="range" min="-5" max="5" step="0.5" value={a[1]} onChange={e => setA([a[0], +e.target.value])} /><span className="val-badge text-blue">{a[1]}</span></div>
            
            {mode !== 'scalar' ? (
              <>
                <div className="divider"></div>
                <div className="card-title">Vector B <span className="text-[10px] opacity-50 ml-2">(Drag tip)</span></div>
                <div className="ctrl-row"><span className="ctrl-label">Bₓ</span><input type="range" min="-5" max="5" step="0.5" value={b[0]} onChange={e => setB([+e.target.value, b[1]])} /><span className="val-badge text-teal">{b[0]}</span></div>
                <div className="ctrl-row"><span className="ctrl-label">Bᵧ</span><input type="range" min="-5" max="5" step="0.5" value={b[1]} onChange={e => setB([b[0], +e.target.value])} /><span className="val-badge text-teal">{b[1]}</span></div>
              </>
            ) : (
              <>
                <div className="divider"></div>
                <div className="card-title">Scalar k</div>
                <div className="ctrl-row"><span className="ctrl-label">k</span><input type="range" min="-2" max="2" step="0.1" value={k} onChange={e => setK(+e.target.value)} /><span className="val-badge text-orange">{k.toFixed(1)}</span></div>
              </>
            )}
          </div>
        </div>

        <div className="card">
          <div className="result-label">Step-by-Step {mode.toUpperCase()}</div>
          <div className="result-box whitespace-pre">{derivation}</div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 2: NORMS & METRICS
   ───────────────────────────────────────────────────────────────────────────── */
export const NormsLab = () => {
  const [v, setV] = useState<[number, number]>([3, 2]);
  const [mode, setMode] = useState<'l1' | 'l2' | 'inf'>('l2');

  const l1 = Math.abs(v[0]) + Math.abs(v[1]);
  const l2 = vec.mag(v);
  const linf = Math.max(Math.abs(v[0]), Math.abs(v[1]));

  const derivation = mode === 'l1'
    ? `1. L1 Norm (Manhattan):\n   ||v||₁ = |vₓ| + |vᵧ|\n   ||v||₁ = |${v[0]}| + |${v[1]}|\n   ||v||₁ = ${l1.toFixed(3)}`
    : mode === 'l2'
    ? `1. L2 Norm (Euclidean):\n   ||v||₂ = √(vₓ² + vᵧ²)\n   ||v||₂ = √(${v[0]}² + ${v[1]}²)\n   ||v||₂ = √(${(v[0]**2).toFixed(2)} + ${(v[1]**2).toFixed(2)})\n   ||v||₂ = ${l2.toFixed(3)}`
    : `1. L∞ Norm (Maximum):\n   ||v||∞ = max(|vₓ|, |vᵧ|)\n   ||v||∞ = max(|${v[0]}|, |${v[1]}|)\n   ||v||∞ = ${linf.toFixed(3)}`;

  return (
    <div className="lab-layout">
      <div className="lab-visualizer canvas-card" style={{ height: '450px' }}>
        <Mafs viewBox={{ x: [-5, 5], y: [-5, 5] }}>
          <Coordinates.Cartesian subdivisions={2} />
          {mode === 'l1' && <Polygon points={[ [l1, 0], [0, l1], [-l1, 0], [0, -l1] ]} color="var(--gold-premium)" fillOpacity={0.05} strokeStyle="dashed" />}
          {mode === 'l2' && <Circle center={[0, 0]} radius={l2} color="var(--gold-premium)" fillOpacity={0.05} strokeStyle="dashed" />}
          {mode === 'inf' && <Polygon points={[ [linf, linf], [-linf, linf], [-linf, -linf], [linf, -linf] ]} color="var(--gold-premium)" fillOpacity={0.05} strokeStyle="dashed" />}
          <Vector tip={v} color="var(--accent-premium)" weight={3} />
          <MovablePoint point={v} onMove={setV} color="var(--accent-premium)" />
        </Mafs>
      </div>

      <div className="lab-grid">
        <div className="space-y-4">
          <div className="card">
            <div className="card-title">Metric: {mode.toUpperCase()} Norm</div>
            <div className="btn-row">
              <button className={`btn ${mode === 'l1' ? 'btn-primary' : ''}`} onClick={() => setMode('l1')}>L1</button>
              <button className={`btn ${mode === 'l2' ? 'btn-primary' : ''}`} onClick={() => setMode('l2')}>L2</button>
              <button className={`btn ${mode === 'inf' ? 'btn-primary' : ''}`} onClick={() => setMode('inf')}>L∞</button>
            </div>
          </div>
          
          <div className="card">
            <div className="card-title">Vector V <span className="text-[10px] opacity-50 ml-2">(Drag tip)</span></div>
            <div className="ctrl-row"><span className="ctrl-label">Vₓ</span><input type="range" min="-5" max="5" step="0.5" value={v[0]} onChange={e => setV([+e.target.value, v[1]])} /><span className="val-badge">{v[0]}</span></div>
            <div className="ctrl-row"><span className="ctrl-label">Vᵧ</span><input type="range" min="-5" max="5" step="0.5" value={v[1]} onChange={e => setV([v[0], +e.target.value])} /><span className="val-badge">{v[1]}</span></div>
          </div>
        </div>
        <div className="card">
          <div className="result-label">Step-by-Step Norm</div>
          <div className="result-box whitespace-pre">{derivation}</div>
        </div>
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

  const derivation = `1. Basis i (1, 0) maps to:\n   T i = [${t00}*1 + ${t01}*0, ${t10}*1 + ${t11}*0]\n   T i = [${t00}, ${t10}]\n\n2. Basis j (0, 1) maps to:\n   T j = [${t00}*0 + ${t01}*1, ${t10}*0 + ${t11}*1]\n   T j = [${t01}, ${t11}]\n\n3. Area Change (Det):\n   det(T) = ${t00}*${t11} - ${t01}*${t10} = ${(t00 * t11 - t01 * t10).toFixed(3)}`;

  return (
    <div className="lab-layout">
      <div className="lab-visualizer canvas-card" style={{ height: '450px' }}>
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

      <div className="lab-grid">
        <div className="card">
          <div className="card-title">Matrix T</div>
          <div className="mat-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <input className="mat-input" type="number" step="0.1" value={t00} onChange={e => setM([[+e.target.value, t01], [t10, t11]])} />
            <input className="mat-input" type="number" step="0.1" value={t01} onChange={e => setM([[t00, +e.target.value], [t10, t11]])} />
            <input className="mat-input" type="number" step="0.1" value={t10} onChange={e => setM([[t00, t01], [+e.target.value, t11]])} />
            <input className="mat-input" type="number" step="0.1" value={t11} onChange={e => setM([[t00, t01], [t10, +e.target.value]])} />
          </div>
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
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 4: MATRIX CALCULATOR
   ───────────────────────────────────────────────────────────────────────────── */
export const MatrixCalcLab = () => {
  return (
    <div className="card p-8 text-center opacity-70 border-dashed border-2" style={{ borderColor: 'var(--border-accent)' }}>
      <div className="text-2xl font-light mb-4" style={{ color: 'var(--accent-premium)' }}>High-Performance Compute Engine</div>
      <p className="opacity-60 mb-6">Utilizing BLAS-optimized routines for arbitrary precision decomposition.</p>
      <div className="badge-premium inline-block">COMING SOON</div>
    </div>
  );
};
