import React from 'react';
import { VisualizerTheme } from './CanvasBase';
import { MathToolsDashboard } from '../../../../categories/math-tools/MathToolsDashboard';

export interface VisualizerProps {
  topicId: string;
  theme?: VisualizerTheme;
  onUpdateInfo?: (info: any) => void;
  params?: any;
}

/**
 * Returns the visualizer component for a given topic ID.
 * Following the pivot to a Unified Dashboard, we mostly route to MathToolsDashboard
 * and pass the appropriate starting tab.
 */
export const getVisualizerComponent = (topicId: string): React.FC<any> | null => {
  const tid = topicId.toLowerCase();

  // Mapping specific tool names to Dashboard tabs
  const tabMapping: Record<string, string> = {
    "vectors": "vectors",
    "vector-arithmetic": "vectors",
    "vector-explorer": "vectors",
    "transformation": "transform",
    "transform": "transform",
    "linear-transformation": "transform",
    "matrices": "transform",
    "matrix-calc": "matcalc",
    "matrixcalc": "matcalc",
    "matrix-calculator": "matcalc",
    "matrix-operations": "matcalc",
    "eigen": "eigen",
    "eigen-solver": "eigen",
    "eigensolver": "eigen",
    "eigenvalues": "eigen",
    "eigenvectors": "eigen",
    "systems": "systems",
    "system-solver": "systems",
    "systemsolver": "systems",
    "linear-equations": "systems",
    "equations": "systems",
    "basis": "basis",
    "span": "basis",
    "linear-independence": "basis",
    "svd": "svd",
    "singular-value-decomposition": "svd",
    "projections": "norms",
    "norms": "norms",
    "vector-norms": "norms",
    "sample-space": "bayes",
    "samplespace": "bayes",
    "probability": "bayes",
    "bayes-theorem": "bayes",
    "bayestheorem": "bayes",
    "distributions": "galton",
    "conditional-probability": "bayes",
    "differentiation": "backprop",
    "derivatives": "sensitivity",
    "area-under-curve": "auc",
    "calculus": "backprop",
    "gradient-descent": "stochastic",
    "partial-derivatives": "jacobian"
  };

  const activeTab = tabMapping[tid];

  if (activeTab) {
    // Return a wrapper that pre-selects the correct tab
    return (props) => <MathToolsDashboard {...props} initialTab={activeTab} />;
  }

  // Fallback / Deprecated legacy
  return null;
};
