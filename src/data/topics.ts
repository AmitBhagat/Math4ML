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
    description: "Linear Algebra serves as the core mathematical framework for representing and processing data in machine learning, handling high-dimensional spaces and transformations.",
    keyConcepts: [
      { title: "Vectors", description: "Fundamental units for representing data points and features." },
      { title: "Matrices", description: "Structures for encoding linear operations and data collections." },
      { title: "Eigen-decomposition", description: "Internal structures of matrices that reveal data variance." },
      { title: "Matrix Factorization", description: "Advanced techniques like SVD for data compression and latent feature extraction." }
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
    categories: ["linear-algebra", "calculus", "probability", "statistics"]
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
  "probability": Dice5,
  "statistics": BarChart3,
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

