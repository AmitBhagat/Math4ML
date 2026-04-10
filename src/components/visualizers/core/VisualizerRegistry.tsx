import React from 'react';
import { VisualizerTheme } from './CanvasBase';
import { VectorLab, TransformLab, NormsLab, DotProductLab, ProjectionLab } from '../../../../categories/math-tools/modules/BasicLA';
import { EigenLab, SystemsLab, BasisLab, SVDLab, DeterminantsLab, MatrixMultiplicationLab, RankLab, PCALab, VectorSpacesLab, InverseLab } from '../../../../categories/math-tools/modules/AdvancedLA';
import { BayesGrid, GaltonBoard, ExpectationBeam, MarbleJar, EntropyLab, MLELab, KLDivLab, CovarianceLab, IndependenceLab, VarianceLab } from '../../../../categories/math-tools/modules/ProbabilityLab';
import { BackpropLab, AUCIntegralLab, ParameterSensitivity, StochasticOptimizer, JacobianLab, HessianLab, TaylorLab } from '../../../../categories/math-tools/modules/CalculusLab';

export interface VisualizerProps {
  topicId: string;
  theme?: VisualizerTheme;
  onUpdateInfo?: (info: any) => void;
  params?: any;
}

/**
 * Returns the raw visualizer component for a given topic ID.
 * This registry maps topic identifiers to the specific laboratory modules
 * used for inline embedding in the curriculum.
 */
export const getVisualizerComponent = (topicId: string): React.FC<any> | null => {
  const tid = topicId.toLowerCase();

  const registry: Record<string, React.FC<any>> = {
    "vectors": VectorLab,
    "vector-arithmetic": VectorLab,
    "transformation": TransformLab,
    "transform": TransformLab,
    "linear-transformation": TransformLab,
    "matrices": TransformLab,
    "matrix-calc": MatrixMultiplicationLab,
    "matrixcalc": MatrixMultiplicationLab,
    "matrix-multiplication": MatrixMultiplicationLab,
    "dot-product": DotProductLab,
    "dotproduct": DotProductLab,
    "projections": ProjectionLab,
    "projection": ProjectionLab,
    "determinants": DeterminantsLab,
    "determinant": DeterminantsLab,
    "norms": NormsLab,
    "vector-norms": NormsLab,
    "eigen": EigenLab,
    "eigenvalues": EigenLab,
    "eigenvalues-eigenvectors": EigenLab,
    "positive-definite": EigenLab,
    "systems": SystemsLab,
    "system-solver": SystemsLab,
    "systems-of-equations": SystemsLab,
    "basis": BasisLab,
    "basis-dimension": BasisLab,
    "rank": RankLab,
    "matrix-rank": RankLab,
    "svd": SVDLab,
    "singular-value-decomposition": SVDLab,
    "pca": PCALab,
    "principal-component-analysis": PCALab,
    "vector-spaces": VectorSpacesLab,
    "vectorspaces": VectorSpacesLab,
    "matrix-inverse": InverseLab,
    "matrixinverse": InverseLab,
    "inverse": InverseLab,
    "bayes": BayesGrid,
    "bayes-theorem": BayesGrid,
    "bayestheorem": BayesGrid,
    "conditional-probability": BayesGrid,
    "conditionalprobability": BayesGrid,
    "galton": GaltonBoard,
    "central-limit-theorem": GaltonBoard,
    "expectation": ExpectationBeam,
    "sampling": MarbleJar,
    "lln": MarbleJar,
    "law-of-large-numbers": MarbleJar,
    "random-variables": MarbleJar,
    "distributions": MLELab,
    "variance": VarianceLab,
    "independence": IndependenceLab,
    "vectornorms": NormsLab,
    "basischange": BasisLab,
    "entropy": EntropyLab,
    "mle": MLELab,
    "probability-distributions": MLELab,
    "kldiv": KLDivLab,
    "covariance": CovarianceLab,
    "joint-distributions": CovarianceLab,
    "differentiation": ParameterSensitivity,
    "derivatives": ParameterSensitivity,
    "partial-derivatives": JacobianLab,
    "partialderivatives": JacobianLab,
    "gradient": StochasticOptimizer,
    "auc": AUCIntegralLab,
    "area-under-curve": AUCIntegralLab,
    "integrals": AUCIntegralLab,
    "chain-rule": BackpropLab,
    "chainrule": BackpropLab,
    "backprop": BackpropLab,
    "stochastic": StochasticOptimizer,
    "gradient-descent": StochasticOptimizer,
    "optimizer": StochasticOptimizer,
    "optimization": StochasticOptimizer,
    "jacobian": JacobianLab,
    "partial-derivatives-grid": JacobianLab,
    "curvature": HessianLab,
    "hessian": HessianLab,
    "taylor": TaylorLab,
    "critical-points": StochasticOptimizer,
    "stationary-points": StochasticOptimizer,
  };

  return registry[tid] || null;
};
