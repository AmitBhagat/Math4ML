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
    description: "The core mathematical framework for representing data in high-dimensional spaces, encompassing transformations, decompositions, and metric spaces.",
    keyConcepts: [
      { title: "Vectors & Tensors", description: "Fundamental units for representing feature spaces." },
      { title: "Linear Combinations", description: "The building blocks of vector spaces and spans." },
      { title: "Dot Product", description: "Calculating projections and vector similarity." },
      { title: "Matrix Operations", description: "Transformations: Addition, Multiplication, Inversion." },
      { title: "Systems of Equations", description: "Solving linear dependencies via Gaussian elimination." },
      { title: "Eigen-decomposition", description: "Revealing internal variance via eigenvalues/vectors." },
      { title: "SVD", description: "Singular Value Decomposition for dimensionality reduction." },
      { title: "Vector Norms", description: "Measuring magnitude (L1, L2) and regularization." },
      { title: "Distance Measures", description: "Euclidean, Manhattan, and Cosine similarity metrics." }
    ]
  },
  {
    id: "statistics-probability",
    title: "Statistics & Probability",
    description: "The science of assessing uncertainty and drawing meaningful inferences from data distributions — the backbone of predictive modeling and hypothesis validation.",
    keyConcepts: [
      { title: "Bayesian Inference", description: "Conditional probability and Bayes' Theorem." },
      { title: "Probability Distributions", description: "Normal, Binomial, and Poisson models." },
      { title: "Descriptive Stats", description: "Mean, variance, skewness, and kurtosis." },
      { title: "Inferential Stats", description: "Population predictions and confidence intervals." },
      { title: "Hypothesis Testing", description: "p-values, Null hypotheses, and Type I/II errors." },
      { title: "Statistical Tests", description: "T-test, Z-test, F-test, and Chi-square validation." },
      { title: "Correlation", description: "Pearson and Spearman relationship coefficients." }
    ]
  },
  {
    id: "calculus",
    title: "Calculus",
    description: "The mathematical engine for optimization, using derivatives and gradients to minimize model error and power backpropagation.",
    keyConcepts: [
      { title: "Differentiation", description: "Calculating instantaneous rates of change." },
      { title: "Partial Derivatives", description: "Handling variables in multi-dimensional space." },
      { title: "Gradients", description: "Vectors of change used in optimization." },
      { title: "Gradient Descent", description: "Iterative minimization of loss functions." },
      { title: "Chain Rule", description: "The foundation of neural network backpropagation." },
      { title: "Jacobian & Hessian", description: "Coordinate transforms and second-order optimization." },
      { title: "Area Under Curve", description: "Integration and model evaluation (AUC-ROC)." }
    ]
  },
  // --- Machine Learning Cluster ---
  {
    id: "supervised-learning",
    title: "Supervised Learning",
    description: "Learning from labeled datasets to map inputs to discrete or continuous outputs. The foundation of predictive modeling.",
    keyConcepts: [
      { title: "Regression", description: "Predicting continuous numerical values." },
      { title: "Classification", description: "Categorizing data into predefined classes." },
      { title: "SVM & Trees", description: "Core algorithms for complex decision boundaries." }
    ]
  },
  {
    id: "unsupervised-learning",
    title: "Unsupervised Learning",
    description: "Extracting patterns and structures from unlabeled data. Essential for discovery and dimensionality reduction.",
    keyConcepts: [
      { title: "Clustering", description: "Grouping similar data points together." },
      { title: "PCA", description: "Reducing feature space while preserving variance." },
      { title: "Association", description: "Finding rules that describe your data." }
    ]
  },
  {
    id: "deep-learning",
    title: "Neural Networks",
    description: "Biologically inspired architectures (ANN, CNN, RNN) that power modern computer vision and natural language processing.",
    keyConcepts: [
      { title: "Backpropagation", description: "Efficient weight adjustment via chain rule." },
      { title: "Architectures", description: "Diverse layers for diverse data types." },
      { title: "Activation", description: "Introducing non-linearity into neurons." }
    ]
  },
  {
    id: "reinforcement-learning",
    title: "Reinforcement Learning",
    description: "Training agents to make sequences of decisions by rewarding desired behaviors and punishing undesired ones.",
    keyConcepts: [
      { title: "Agents & Env", description: "Fundamental RL interaction loop." },
      { title: "Q-Learning", description: "Learning value-based policies for action." },
      { title: "Markov Processes", description: "Mathematical framework for decision making." }
    ]
  },
  {
    id: "data-preprocessing",
    title: "Data Preprocessing",
    description: "Meticulous cleaning and transformation techniques (Scaling, Encoding, Imputation) required for high-quality model training.",
    keyConcepts: [
      { title: "Feature Scaling", description: "Normalizing data for gradient stability." },
      { title: "Cleaning", description: "Handling missing values and outliers." },
      { title: "Engineering", description: "Creating new features from raw data attributes." }
    ]
  },
  {
    id: "model-evaluation",
    title: "Model Evaluation",
    description: "Rigorous metrics and validation strategies to assess model performance and ensure generalization to new data.",
    keyConcepts: [
      { title: "Performance Metrics", description: "Accuracy, Precision, Recall, and AUC-ROC." },
      { title: "Cross-Validation", description: "Ensuring robustness across data splits." },
      { title: "Overfitting", description: "Detecting and preventing model memorization." }
    ]
  }
];

export interface ClusterMeta {
  id: string;
  title: string;
  description: string;
  categories: string[];
}

export const CLUSTERS: ClusterMeta[] = [
  {
    id: "mathematics",
    title: "The Mathematical Foundations",
    description: "The rigorous theoretical frameworks that govern linear transformations, optimization, and probabilistic reasoning.",
    categories: ["linear-algebra", "statistics-probability", "calculus"]
  },
  {
    id: "machine-learning",
    title: "The Applied Intelligence",
    description: "Architectural paradigms and learning strategies that transform raw data into predictive, autonomous systems.",
    categories: ["supervised-learning", "unsupervised-learning", "deep-learning", "reinforcement-learning", "data-preprocessing", "model-evaluation"]
  }
];

// ---------------------------------------------------------------------------
// UI helpers — small icon map for categories (kept with metadata)
// ---------------------------------------------------------------------------
import {
  Layers, FunctionSquare, BarChart3, Dice5,
  Brain, Cpu, Network, Database, Activity, ShieldCheck
} from "lucide-react";

export const ICON_MAP: Record<string, any> = {
  "linear-algebra": Layers,
  "statistics-probability": BarChart3,
  "calculus": FunctionSquare,
  // ML Category Icons
  "supervised-learning": Brain,
  "unsupervised-learning": Cpu,
  "deep-learning": Network,
  "reinforcement-learning": Activity,
  "data-preprocessing": Database,
  "model-evaluation": ShieldCheck,
};

// ---------------------------------------------------------------------------
// Dynamic loader — fetches category data only when needed
// ---------------------------------------------------------------------------
const categoryCache = new Map<string, CategoryData>();

// Maps for dynamic import — Vite will code-split these into separate chunks
const importMap: Record<string, () => Promise<any>> = {
  'linear-algebra': () => import('../../categories/linear-algebra-index'),
  'statistics-probability': () => import('../../categories/statistics-index'),
  'calculus': () => import('../../categories/calculus'),
};

// Export name map (the const name inside each file)
const exportNameMap: Record<string, string> = {
  'linear-algebra': 'LINEAR_ALGEBRA_DATA',
  'statistics-probability': 'STATISTICS_DATA',
  'calculus': 'CALCULUS_DATA',
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

