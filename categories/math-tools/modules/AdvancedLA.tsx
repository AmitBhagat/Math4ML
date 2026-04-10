import React, { useState, useEffect } from "react";
import { Mafs, Coordinates, Vector, MovablePoint, Polygon, Circle, Transform, Line, Point, vec } from "mafs";

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 4: EIGENVALUES
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

  const derivation = `1. Characteristic Equation:\n   det(A - λI) = 0\n   det([${a.a00}-λ  ${a.a01}]  [${a.a10}  ${a.a11}-λ]) = 0\n\n2. Expand:\n   λ² - (${a.a00}+${a.a11})λ + (${a.a00}*${a.a11} - ${a.a01}*${a.a10}) = 0\n   λ² - ${(a.a00+a.a11)}λ + ${(a.a00*a.a11 - a.a01*a.a10)} = 0\n\n3. Solve for λ:\n   λ₁,₂ = ${eigenData.disc >= 0 ? `${eigenData.l1.toFixed(3)}, ${eigenData.l2.toFixed(3)}` : 'Complex'}`;

  const matrix: [number, number, number, number, number, number] = [a.a00, a.a01, 0, a.a10, a.a11, 0];

  return (
    <div className="lab-layout">
      <div className="lab-visualizer canvas-card" style={{ height: '450px' }}>
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

      <div className="lab-grid">
        <div className="space-y-4">
          <div className="card">
            <div className="card-title">2×2 Matrix A <span className="text-[10px] opacity-50 ml-2">(Drag basis tips)</span></div>
            <div className="mat-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <input className="mat-input" type="number" step="0.1" value={a.a00} onChange={e => setA({ ...a, a00: +e.target.value })} />
              <input className="mat-input" type="number" step="0.1" value={a.a01} onChange={e => setA({ ...a, a01: +e.target.value })} />
              <input className="mat-input" type="number" step="0.1" value={a.a10} onChange={e => setA({ ...a, a10: +e.target.value })} />
              <input className="mat-input" type="number" step="0.1" value={a.a11} onChange={e => setA({ ...a, a11: +e.target.value })} />
            </div>
          </div>
          <div className="card">
            <div className="card-title">Eigenvalues</div>
            <div className="result-box">
              {eigenData.disc >= 0 ? `λ₁ = ${eigenData.l1.toFixed(3)}, λ₂ = ${eigenData.l2.toFixed(3)}` : "Complex Eigenvalues (λ ∈ ℂ)"}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="result-label">Step-by-Step Eigen</div>
          <div className="result-box whitespace-pre">{derivation}</div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 5: LINEAR SYSTEMS
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
  const derivation = `1. Compute Determinant D:\n   D = ${s.a}*${s.d} - ${s.b}*${s.c} = ${det}\n\n2. Cramer's Rule:\n   Dₓ = ${s.e}*${s.d} - ${s.b}*${s.f} = ${dx}\n   Dᵧ = ${s.a}*${s.f} - ${s.e}*${s.c} = ${dy}\n\n3. Solve:\n   x = Dₓ/D = ${det !== 0 ? (dx/det).toFixed(2) : 'No Unique Sol'}\n   y = Dᵧ/D = ${det !== 0 ? (dy/det).toFixed(2) : 'No Unique Sol'}`;

  return (
    <div className="lab-layout">
      <div className="lab-visualizer canvas-card" style={{ height: '450px' }}>
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

      <div className="lab-grid">
        <div className="card">
          <div className="card-title">System Ax = b</div>
          <div className="sys-equation">
            <input className="mat-input" type="number" step="1" value={s.a} onChange={e => setS({ ...s, a: +e.target.value })} />x +
            <input className="mat-input" type="number" step="1" value={s.b} onChange={e => setS({ ...s, b: +e.target.value })} />y =
            <input className="mat-input" type="number" step="1" value={s.e} onChange={e => setS({ ...s, e: +e.target.value })} />
          </div>
          <div className="sys-equation">
            <input className="mat-input" type="number" step="1" value={s.c} onChange={e => setS({ ...s, c: +e.target.value })} />x +
            <input className="mat-input" type="number" step="1" value={s.d} onChange={e => setS({ ...s, d: +e.target.value })} />y =
            <input className="mat-input" type="number" step="1" value={s.f} onChange={e => setS({ ...s, f: +e.target.value })} />
          </div>
        </div>
        <div className="card">
          <div className="result-label">Step-by-Step Cramer</div>
          <div className="result-box whitespace-pre">{derivation}</div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 8: BASIS & SPAN
   ───────────────────────────────────────────────────────────────────────────── */
export const BasisLab = () => {
  const [b1, setB1] = useState<[number, number]>([2, 1]);
  const [b2, setB2] = useState<[number, number]>([1, 2]);

  const area = Math.abs(b1[0]*b2[1] - b1[1]*b2[0]);
  const derivation = `1. Basis Vectors:\n   b1 = [${b1[0]}, ${b1[1]}]\n   b2 = [${b2[0]}, ${b2[1]}]\n\n2. Span Area (Determinant):\n   Area = |x1y2 - y1x2|\n   Area = |${b1[0]}*${b2[1]} - ${b1[1]}*${b2[0]}|\n   Area = ${area.toFixed(2)} units²`;

  return (
    <div className="lab-layout">
      <div className="lab-visualizer canvas-card" style={{ height: '450px' }}>
        <Mafs viewBox={{ x: [-5, 5], y: [-5, 5] }}>
          <Coordinates.Cartesian subdivisions={2} />
          <Polygon points={[ [0,0], b1, vec.add(b1, b2), b2 ]} color="var(--accent-premium)" fillOpacity={0.1} />
          <Vector tip={b1} color="var(--accent-premium)" weight={3} />
          <MovablePoint point={b1} onMove={setB1} color="var(--accent-premium)" />
          <Vector tip={b2} color="var(--green-premium)" weight={3} />
          <MovablePoint point={b2} onMove={setB2} color="var(--green-premium)" />
        </Mafs>
      </div>

      <div className="lab-grid">
        <div className="card">
          <div className="card-title">Basis Vectors <span className="text-[10px] opacity-50 ml-2">(Drag tips)</span></div>
          <div className="ctrl-row"><span className="ctrl-label">b₁ₓ</span><input type="range" min="-4" max="4" step="0.5" value={b1[0]} onChange={e => setB1([+e.target.value, b1[1]])} /><span className="val-badge">{b1[0]}</span></div>
          <div className="ctrl-row"><span className="ctrl-label">b₂ₓ</span><input type="range" min="-4" max="4" step="0.5" value={b2[0]} onChange={e => setB2([+e.target.value, b2[1]])} /><span className="val-badge">{b2[0]}</span></div>
        </div>
        <div className="card">
          <div className="result-label">Step-by-Step Basis</div>
          <div className="result-box whitespace-pre">{derivation}</div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE 9: SVD
   ───────────────────────────────────────────────────────────────────────────── */
export const SVDLab = () => {
  const [a, setA] = useState({ a00: 2, a01: 0, a10: 0.5, a11: 1 });

  const getSVD = () => {
    const { a00, a01, a10, a11 } = a;
    const ATA = [a00 * a00 + a10 * a10, a00 * a01 + a10 * a11, a00 * a01 + a10 * a11, a01 * a01 + a11 * a11];
    const tr = ATA[0] + ATA[3], det = ATA[0] * ATA[3] - ATA[1] * ATA[2];
    const disc = Math.sqrt(Math.max(0, tr * tr / 4 - det));
    const s1 = Math.sqrt(Math.max(0, tr / 2 + disc)), s2 = Math.sqrt(Math.max(0, tr / 2 - disc));
    const angle = 0.5 * Math.atan2(2 * ATA[1], ATA[0] - ATA[3]);
    const u1 = [Math.cos(angle), Math.sin(angle)];
    return { s1, s2, u1 };
  };

  const { s1, s2, u1 } = getSVD();
  const matrix: [number, number, number, number, number, number] = [a.a00, a.a01, 0, a.a10, a.a11, 0];

  const derivation = `1. Compute ATA:\n   ATA = [Σa_i₀²  Σa_i₀a_i₁]\n   ATA = [${(a.a00**2 + a.a10**2).toFixed(1)}  ${(a.a00*a.a01 + a.a10*a.a11).toFixed(1)}]\n         [${(a.a00*a.a01 + a.a10*a.a11).toFixed(1)}  ${(a.a01**2 + a.a11**2).toFixed(1)}]\n\n2. Singular Values (σ = √λ):\n   σ₁ = ${s1.toFixed(3)}\n   σ₂ = ${s2.toFixed(3)}`;

  return (
    <div className="lab-layout">
      <div className="lab-visualizer canvas-card" style={{ height: '450px' }}>
        <Mafs viewBox={{ x: [-4, 4], y: [-4, 4] }}>
          <Coordinates.Cartesian subdivisions={2} />
          <Circle center={[0, 0]} radius={1} color="var(--text-premium)" opacity={0.1} strokeStyle="dashed" />
          <Transform matrix={matrix}>
            <Circle center={[0, 0]} radius={1} color="var(--gold-premium)" fillOpacity={0.05} />
          </Transform>
          <MovablePoint point={[a.a00, a.a10]} color="var(--accent-premium)" onMove={([x, y]) => setA({...a, a00: x, a10: y})} />
          <MovablePoint point={[a.a01, a.a11]} color="var(--green-premium)" onMove={([x, y]) => setA({...a, a01: x, a11: y})} />
          <Vector tip={[u1[0]*s1, u1[1]*s1]} color="var(--accent-premium)" />
          <Vector tip={[-u1[1]*s2, u1[0]*s2]} color="var(--green-premium)" />
        </Mafs>
      </div>

      <div className="lab-grid">
        <div className="card">
          <div className="card-title">SVD Decomposition <span className="text-[10px] opacity-50 ml-2">(Drag tips)</span></div>
          <div className="mat-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <input className="mat-input" type="number" step="0.1" value={a.a00} onChange={e => setA({ ...a, a00: +e.target.value })} />
            <input className="mat-input" type="number" step="0.1" value={a.a01} onChange={e => setA({ ...a, a01: +e.target.value })} />
            <input className="mat-input" type="number" step="0.1" value={a.a10} onChange={e => setA({ ...a, a10: +e.target.value })} />
            <input className="mat-input" type="number" step="0.1" value={a.a11} onChange={e => setA({ ...a, a11: +e.target.value })} />
          </div>
        </div>
        <div className="card">
          <div className="result-label">Step-by-Step SVD</div>
          <div className="result-box whitespace-pre">{derivation}</div>
        </div>
      </div>
    </div>
  );
};
