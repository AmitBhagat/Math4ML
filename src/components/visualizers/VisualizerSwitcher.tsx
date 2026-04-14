import React, { lazy, Suspense } from 'react';

const BasisDimension = lazy(() => import('./labs/linear-algebra/BasisDimension'));
const Determinants = lazy(() => import('./labs/linear-algebra/Determinants'));
const DotProduct = lazy(() => import('./labs/linear-algebra/DotProduct'));
const EigenValues = lazy(() => import('./labs/linear-algebra/EigenValues'));
const MatrixInverse = lazy(() => import('./labs/linear-algebra/MatrixInverse'));
const MatrixMultiplication = lazy(() => import('./labs/linear-algebra/MatrixMultiplication'));
const MatrixRank = lazy(() => import('./labs/linear-algebra/MatrixRank'));
const MatrixTransformation = lazy(() => import('./labs/linear-algebra/MatrixTransformation'));
const OrthogonalProjections = lazy(() => import('./labs/linear-algebra/OrthogonalProjections'));
const PCA = lazy(() => import('./labs/linear-algebra/PCA.tsx'));
const SVD = lazy(() => import('./labs/linear-algebra/SVD.tsx'));
const SystemsOfEquations = lazy(() => import('./labs/linear-algebra/SystemsOfEquations'));
const VectorArithmetic = lazy(() => import('./labs/linear-algebra/VectorArithmetic'));
const VectorNorms = lazy(() => import('./labs/linear-algebra/VectorNorms'));

const Derivatives = lazy(() => import('./labs/calculus/Derivatives'));
const Integrals = lazy(() => import('./labs/calculus/Integrals'));
const PartialDerivatives3D = lazy(() => import('./labs/calculus/PartialDerivatives3D'));
const Gradient3D = lazy(() => import('./labs/calculus/Gradient3D'));
const CriticalPoints3D = lazy(() => import('./labs/calculus/CriticalPoints3D'));
const MultipleIntegrals3D = lazy(() => import('./labs/calculus/MultipleIntegrals3D'));

const GaussianMLE = lazy(() => import('./labs/probability/GaussianMLE'));

const topicMap: Record<string, React.ComponentType<any>> = {
  // Linear Algebra
  'vector-arithmetic': VectorArithmetic,
  'linear-independence': BasisDimension,
  'matrix-rank': MatrixRank,
  'determinants': Determinants,
  'eigenvalues-eigenvectors': EigenValues,
  'matrix-inverse': MatrixInverse,
  'dot-product': DotProduct,
  'matrix-multiplication': MatrixMultiplication,
  'systems-equations': SystemsOfEquations,
  'basis-dimension': BasisDimension,
  'orthogonality-projections': OrthogonalProjections,
  'pca': PCA,
  'svd': SVD,
  'vector-norms': VectorNorms,
  'matrix-transformation': MatrixTransformation,
  
  // Calculus
  'derivatives': Derivatives,
  'partial-derivatives': PartialDerivatives3D,
  'gradient': Gradient3D,
  'critical-points': CriticalPoints3D,
  'integrals': MultipleIntegrals3D,
  'multiple-integrals': MultipleIntegrals3D,
  'chain-rule': Derivatives,
  'taylor-series': Derivatives,

  // Probability
  'gaussian-mle': GaussianMLE,
  'mle-estimation': GaussianMLE,
};

interface VisualizerSwitcherProps {
  topic: string;
}

export const VisualizerSwitcher: React.FC<VisualizerSwitcherProps> = ({ topic }) => {
  const Component = topicMap[topic];

  if (!Component) {
    return (
      <div className="p-4 bg-bg-secondary border border-border-premium rounded-xl text-muted-premium italic">
        Visualizer for topic "{topic}" is not yet available.
      </div>
    );
  }

  return (
    <Suspense fallback={<div className="h-[400px] flex items-center justify-center bg-bg-secondary rounded-xl animate-pulse">Loading visualizer...</div>}>
      <Component />
    </Suspense>
  );
};

export default VisualizerSwitcher;
