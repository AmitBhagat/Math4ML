// =============================================================================
// Curriculum Data — Dynamic Import Hub
// Each category is loaded on-demand for faster initial page loads.
// =============================================================================

export type { ContentBlock, TopicSection, CategoryData } from './types';
import type { CategoryData } from './types';

// ---------------------------------------------------------------------------
// Lightweight metadata used by HomePage (no heavy content loaded)
// ---------------------------------------------------------------------------
export interface CategoryMeta {
  id: string;
  title: string;
  description: string;
  keyConcepts: { title: string; description: string }[];
}

export const CATEGORY_META: CategoryMeta[] = [
  {
    id: "linear-algebra",
    title: "Linear Algebra",
    description: "Linear Algebra is the foundation for many machine learning algorithms. It provides the tools to represent and manipulate datasets, features and transformations.",
    keyConcepts: [
      { title: "Vectors", description: "Building blocks of datasets and features" },
      { title: "Matrices", description: "Essential for solving equations and optimizing ML models" },
      { title: "Eigenvalues", description: "For understanding variance and principal components" },
      { title: "SVD", description: "Widely used in dimensionality reduction and data compression" }
    ]
  },
  {
    id: "probability",
    title: "Probability",
    description: "Probability helps assess uncertainty and make predictions under limited information — the backbone of Bayesian inference, classification, and generative models.",
    keyConcepts: [
      { title: "Sample Space", description: "Foundation of outcome analysis" },
      { title: "Bayes' Theorem", description: "Updating beliefs with evidence" },
      { title: "Distributions", description: "Models for random variables" },
      { title: "Conditional", description: "Event dependencies" }
    ]
  },
  {
    id: "statistics",
    title: "Statistics",
    description: "Statistics helps analyze data, identify patterns and draw meaningful conclusions from datasets. It acts as the backbone for understanding data and building reliable models.",
    keyConcepts: [
      { title: "Descriptive", description: "Summarizes dataset characteristics" },
      { title: "Inferential", description: "Draws conclusions from samples" },
      { title: "Hypothesis Testing", description: "Validates claims with statistical significance" },
      { title: "Correlation", description: "Measures relationships between variables" }
    ]
  },
  {
    id: "calculus",
    title: "Calculus",
    description: "Calculus helps optimize machine learning models by adjusting parameters to minimize prediction error. It enables gradient-based learning.",
    keyConcepts: [
      { title: "Derivatives", description: "Measuring changes in parameters" },
      { title: "Gradient Descent", description: "Core optimization algorithm for ML" },
      { title: "Chain Rule", description: "Powers backpropagation in neural networks" },
      { title: "Jacobian & Hessian", description: "Second-order optimization" }
    ]
  }
];

// ---------------------------------------------------------------------------
// UI helpers — small icon map for categories (kept with metadata)
// ---------------------------------------------------------------------------
import { Layers, FunctionSquare, BarChart3, Dice5 } from "lucide-react";

export const ICON_MAP: Record<string, any> = {
  "linear-algebra": Layers,
  "probability": Dice5,
  "statistics": BarChart3,
  "calculus": FunctionSquare,
};

// ---------------------------------------------------------------------------
// Dynamic loader — fetches category data only when needed
// ---------------------------------------------------------------------------
const categoryCache = new Map<string, CategoryData>();

// Maps for dynamic import — Vite will code-split these into separate chunks
const importMap: Record<string, () => Promise<any>> = {
  'linear-algebra': () => import('./categories/linear-algebra'),
  'probability':    () => import('./categories/probability'),
  'statistics':     () => import('./categories/statistics'),
  'calculus':       () => import('./categories/calculus'),
};

// Export name map (the const name inside each file)
const exportNameMap: Record<string, string> = {
  'linear-algebra': 'LINEAR_ALGEBRA_DATA',
  'probability':    'PROBABILITY_DATA',
  'statistics':     'STATISTICS_DATA',
  'calculus':       'CALCULUS_DATA',
};

/**
 * Fetches category data on demand. Returns cached data if already loaded.
 */
export async function getCategoryData(categoryId: string): Promise<CategoryData | null> {
  if (categoryCache.has(categoryId)) {
    return categoryCache.get(categoryId)!;
  }

  const loader = importMap[categoryId];
  if (!loader) return null;

  const mod = await loader();
  const exportName = exportNameMap[categoryId];
  const data = mod[exportName] as CategoryData;
  categoryCache.set(categoryId, data);
  return data;
}

/**
 * Preload a category in the background (e.g. on hover).
 * Does not block rendering — fire-and-forget.
 */
export function preloadCategory(categoryId: string): void {
  if (categoryCache.has(categoryId)) return;
  const loader = importMap[categoryId];
  if (loader) loader(); // Vite will start fetching the chunk
}

