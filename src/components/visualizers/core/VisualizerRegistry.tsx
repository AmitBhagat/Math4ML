import React, { lazy, Suspense } from 'react';
import { VisualizerTheme } from './CanvasBase';

// --- Linear Algebra ---
const MatrixMultiplication = lazy(() => import('../labs/linear-algebra/MatrixMultiplication'));
const VectorArithmetic = lazy(() => import('../labs/linear-algebra/VectorArithmetic'));
const MatrixTransformation = lazy(() => import('../labs/linear-algebra/MatrixTransformation'));
const EigenValues = lazy(() => import('../labs/linear-algebra/EigenValues'));
const Determinants = lazy(() => import('../labs/linear-algebra/Determinants'));
const SVD = lazy(() => import('../labs/linear-algebra/SVD'));
const PCA = lazy(() => import('../labs/linear-algebra/PCA'));
const DotProduct = lazy(() => import('../labs/linear-algebra/DotProduct'));
const SystemsOfEquations = lazy(() => import('../labs/linear-algebra/SystemsOfEquations'));
const MatrixInverse = lazy(() => import('../labs/linear-algebra/MatrixInverse'));
const MatrixRank = lazy(() => import('../labs/linear-algebra/MatrixRank'));
const BasisDimension = lazy(() => import('../labs/linear-algebra/BasisDimension'));
const OrthogonalProjections = lazy(() => import('../labs/linear-algebra/OrthogonalProjections'));
const VectorNorms = lazy(() => import('../labs/linear-algebra/VectorNorms'));

// --- Calculus ---
const Derivatives = lazy(() => import('../labs/calculus/Derivatives'));
const Integrals = lazy(() => import('../labs/calculus/Integrals'));

// --- Probability & Statistics ---
const BayesTheorem = lazy(() => import('../labs/probability/BayesTheorem'));
const GaussianMLE = lazy(() => import('../labs/probability/GaussianMLE'));

// Fallback Loading UI
const LabLoader = () => (
    <div className="w-full h-[400px] flex items-center justify-center bg-white/5 rounded-3xl animate-pulse">
        <span className="text-[10px] font-black uppercase tracking-widest text-accent-premium/40">Loading Laboratory...</span>
    </div>
);

export interface VisualizerProps {
  topicId: string;
  theme?: VisualizerTheme;
  onUpdateInfo?: (info: any) => void;
  params?: any;
}

export const getVisualizerComponent = (topicId: string): React.FC<any> | null => {
  const tid = topicId.toLowerCase();

  const registry: Record<string, React.LazyExoticComponent<any> | React.FC<any>> = {
    // Linear Algebra
    "vectors": VectorArithmetic,
    "vector-arithmetic": VectorArithmetic,
    "vector-ops": VectorArithmetic,
    "transformation": MatrixTransformation,
    "linear-transformation": MatrixTransformation,
    "linear-transformations": MatrixTransformation,
    "matrix-calc": MatrixMultiplication,
    "matrix-multiplication": MatrixMultiplication,
    "eigen": EigenValues,
    "eigenvalues": EigenValues,
    "eigenvalues-eigenvectors": EigenValues,
    "positive-definite-matrices": EigenValues,
    "determinants": Determinants,
    "determinant": Determinants,
    "svd": SVD,
    "pca": PCA,
    "dot-product": DotProduct,
    "dotproduct": DotProduct,
    "linear-systems": SystemsOfEquations,
    "systems-of-equations": SystemsOfEquations,
    "matrix-inverse": MatrixInverse,
    "inverse-matrices": MatrixInverse,
    "matrix-rank": MatrixRank,
    "rank": MatrixRank,
    "basis-dimension": BasisDimension,
    "vector-spaces": BasisDimension,
    "orthogonality-projections": OrthogonalProjections,
    "projections": OrthogonalProjections,
    "vector-norms": VectorNorms,
    "norms": VectorNorms,

    // Calculus
    "differentiation": Derivatives,
    "derivatives": Derivatives,
    "integrals": Integrals,
    "auc": Integrals,

    // Probability & Statistics
    "bayes": BayesTheorem,
    "bayes-theorem": BayesTheorem,
    "mle": GaussianMLE,
    "probability-distributions": GaussianMLE,
  };

  const Component = registry[tid];
  if (!Component) return null;

  return (props: any) => (
    <Suspense fallback={<LabLoader />}>
      <Component {...props} />
    </Suspense>
  );
};
