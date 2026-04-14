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
const PartialDerivatives3D = lazy(() => import('../labs/calculus/PartialDerivatives3D'));
const Gradient3D = lazy(() => import('../labs/calculus/Gradient3D'));
const CriticalPoints3D = lazy(() => import('../labs/calculus/CriticalPoints3D'));
const MultipleIntegrals3D = lazy(() => import('../labs/calculus/MultipleIntegrals3D'));
const TaylorSeries = lazy(() => import('../labs/calculus/TaylorSeries'));
const ChainRule = lazy(() => import('../labs/calculus/ChainRule'));
const Jacobian2D = lazy(() => import('../labs/calculus/Jacobian2D'));
const Hessian3D = lazy(() => import('../labs/calculus/Hessian3D'));

// --- Probability & Statistics ---
const BayesTheorem = lazy(() => import('../labs/probability/BayesTheorem'));
const ConditionalProbability = lazy(() => import('../labs/probability/ConditionalProbability'));
const RandomVariables = lazy(() => import('../labs/probability/RandomVariables'));
const ProbabilityDistributions = lazy(() => import('../labs/probability/ProbabilityDistributions'));
const Expectation = lazy(() => import('../labs/probability/Expectation'));
const Variance = lazy(() => import('../labs/probability/Variance'));
const JointDistributions = lazy(() => import('../labs/probability/JointDistributions'));
const Independence = lazy(() => import('../labs/probability/Independence'));
const LawOfLargeNumbers = lazy(() => import('../labs/probability/LawOfLargeNumbers'));
const CentralLimitTheorem = lazy(() => import('../labs/probability/CentralLimitTheorem'));

const MLE = lazy(() => import('../labs/statistics/MLE'));
const MAP = lazy(() => import('../labs/statistics/MAP'));
const BiasVariance = lazy(() => import('../labs/statistics/BiasVariance'));
const HypothesisTesting = lazy(() => import('../labs/statistics/HypothesisTesting'));
const TTest = lazy(() => import('../labs/statistics/TTest'));
const ABTesting = lazy(() => import('../labs/statistics/ABTesting'));
const ChiSquareTest = lazy(() => import('../labs/statistics/ChiSquareTest'));
const ANOVA = lazy(() => import('../labs/statistics/ANOVA'));
const ConfidenceIntervals = lazy(() => import('../labs/statistics/ConfidenceIntervals'));

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
    "partial-derivatives": PartialDerivatives3D,
    "gradient": Gradient3D,
    "critical-points": CriticalPoints3D,
    "integrals": Integrals,
    "multiple-integrals": MultipleIntegrals3D,
    "taylor-series": TaylorSeries,
    "chain-rule": ChainRule,
    "jacobian": Jacobian2D,
    "hessian": Hessian3D,
    "auc": Integrals,

    // Probability & Statistics
    "bayes": BayesTheorem,
    "bayes-theorem": BayesTheorem,
    "conditional-probability": ConditionalProbability,
    "random-variables": RandomVariables,
    "probability-distributions": ProbabilityDistributions,
    "expectation": Expectation,
    "expectations": Expectation,
    "variance": Variance,
    "joint-distributions": JointDistributions,
    "independence": Independence,
    "law-of-large-numbers": LawOfLargeNumbers,
    "lln": LawOfLargeNumbers,
    "clt": CentralLimitTheorem,
    "central-limit-theorem": CentralLimitTheorem,
    "galton": CentralLimitTheorem,

    "mle": MLE,
    "map": MAP,
    "bias-variance": BiasVariance,
    "hypothesis-testing": HypothesisTesting,
    "t-test": TTest,
    "ab-testing": ABTesting,
    "chi-square": ChiSquareTest,
    "anova": ANOVA,
    "confidence-intervals": ConfidenceIntervals,
  };

  const Component = registry[tid];
  if (!Component) return null;

  return (props: any) => (
    <Suspense fallback={<LabLoader />}>
      <Component {...props} />
    </Suspense>
  );
};
