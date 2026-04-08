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
    id: "probability",
    title: "Probability",
    description: "The mathematical framework for quantifying uncertainty — the bedrock of Bayesian inference and probabilistic modeling.",
    keyConcepts: [
      { title: "Basic Axioms", description: "Sample spaces, Kolmogorov axioms, and the building blocks of uncertainty." },
      { title: "Bayes' Theorem", description: "Updating beliefs based on evidence: Posterior, Likelihood, and Priors." },
      { title: "Random Variables", description: "Discrete (PMF) vs. Continuous (PDF) mappings of stochastic processes." },
      { title: "Expectation & Variance", description: "Summarizing distributions: Center (Mean) and Spread (Variance/Covariance)." },
      { title: "Common Distributions", description: "Bernoulli, Gaussian, Poisson, and Laplace — the shapes of data." },
      { title: "Multivariate Probability", description: "Joint, Marginal, and Conditional distributions for feature vectors." },
      { title: "LLN & CLT", description: "The Law of Large Numbers and Central Limit Theorem: WHY samples work." },
      { title: "Estimation (MLE/MAP)", description: "Finding the 'best' parameters for a distribution using Likelihood." },
      { title: "Practical Inference", description: "Solved examples: Spam filtering and Bernoulli MLE coin tosses." }
    ]
  },
  {
    id: "statistics",
    title: "Statistics",
    description: "The science of drawing meaningful inferences from data — from hypothesis testing to regression analysis and evaluation metrics.",
    keyConcepts: [
      { title: "Descriptive Statistics", description: "Measures of central tendency, spread, and information-theoretic uncertainty." },
      { title: "Sampling & Resampling", description: "Bootstrapping, Cross-Validation, and population inference." },
      { title: "Inferential Statistics", description: "The mathematical theory of hypothesis testing, p-values, and confidence intervals." },
      { title: "Estimation Theory", description: "Maximum Likelihood (MLE) vs. Maximum A Posteriori (MAP) and the Bias-Variance tradeoff." },
      { title: "Regression Analysis", description: "The Ordinary Least Squares (OLS) framework, residuals, and R-squared." },
      { title: "Evaluation Metrics", description: "Probabilistic and information-theoretic measures of classification and regression performance." }
    ]
  },
  {
    id: "information-theory",
    title: "Information Theory",
    description: "Quantifying uncertainty and information flow, providing the bedrock for loss functions like Cross-Entropy and KL Divergence.",
    keyConcepts: [
      { title: "Shannon Entropy", description: "Measuring the average uncertainty in a probability distribution." },
      { title: "KL Divergence", description: "Quantifying the information loss between two distributions." },
      { title: "Cross-Entropy", description: "The standard objective function for classification and NLP." },
      { title: "Mutual Information", description: "Measuring the statistical dependency between random variables." }
    ]
  },
  {
    id: "discrete-math",
    title: "Discrete Mathematics",
    description: "The logic and structures governing finite systems, essential for computer science, algorithms, and symbolic AI.",
    keyConcepts: [
      { title: "Set Theory", description: "Foundations of data manipulation, filtering, and joins." },
      { title: "Mathematical Logic", description: "Propositional and First-Order logic for reasoning systems." },
      { title: "Combinatorics", description: "Counting arrangements, permutations, and search space analysis." },
      { title: "Graph Theory", description: "Modeling relationships between entities in Knowledge Graphs." }
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
    title: "Neural Networks & Deep Learning",
    description: "The mathematical engines of modern AI—from the singular Perceptron to the multi-head Attention mechanisms of Large Language Models.",
    keyConcepts: [
      { title: "Forward & Backprop", description: "The iterative cycle of activation and gradient-based learning." },
      { title: "Inductive Biases", description: "Architectural constraints for specific data (Spatial for CNNs, Temporal for RNNs)." },
      { title: "The Attention Era", description: "Moving from sequential processing to global parallelized attention (Transformers)." }
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
  },
  {
    id: "optimization",
    title: "Optimization",
    description: "The iterative process of finding the optimal parameters for a model by minimizing a loss function on a multi-dimensional surface.",
    keyConcepts: [
      { title: "Gradient Descent", description: "Batch updates following the steepest downward path." },
      { title: "Stochastic Gradients", description: "Frequent, noisy updates using a mini-batch of data." },
      { title: "Convexity", description: "Guarantees of reaching the global minimum without local traps." },
      { title: "Regularization", description: "Geometric constraints to prevent model overfitting (L1, L2)." }
    ]
  },
  {
    id: "foundation-ml",
    title: "Foundation of Machine Learning",
    description: "The core principles, types, and fundamental concepts that provide the framework for all Machine Learning systems.",
    keyConcepts: [
      { title: "What is ML?", description: "Learning patterns from data vs. manual rule-based programming." },
      { title: "Learning Paradigms", description: "Supervised, Unsupervised, Semi-supervised, and Reinforcement Learning." },
      { title: "Overfitting & Bias", description: "The core trade-offs: Generalization vs. Memory and Rigid vs. Reactive." },
      { title: "Feature Engineering", description: "The art of preparing data to maximize model insight." }
    ]
  },
  {
    id: "pgm",
    title: "Probabilistic & Graphical Models",
    description: "The marriage of graph theory and probability to model complex conditional dependencies and latent structures.",
    keyConcepts: [
      { title: "Bayesian Networks", description: "Directed Acyclic Graphs (DAGs) for modeling causality and influence." },
      { title: "Hidden Markov Models", description: "Sequential data modeling with latent states and stochastic transitions." },
      { title: "EM Algorithm", description: "The iterative engine for optimizing models with missing or hidden variables." }
    ]
  },
  {
    id: "optimization-ml",
    title: "Optimization in ML",
    description: "The iterative engines that power model training—from basic Gradient Descent to the adaptive precision of the Adam optimizer.",
    keyConcepts: [
      { title: "Iterative Descent", description: "Finding the minimum of complex loss surfaces via gradients." },
      { title: "Adaptive Moments", description: "Individual parameter step-sizes based on volatility (Adam)." },
      { title: "Convergence Stability", description: "Using momentum and scheduling to prevent oscillations." }
    ]
  },
  {
    id: "advanced-ml",
    title: "Advanced ML Topics",
    description: "Beyond individual algorithms—exploring the synergy of multiple models through Bagging, Boosting, and Stacking.",
    keyConcepts: [
      { title: "Ensemble Theory", description: "Combining multiple weak learners to create one robust strong learner." },
      { title: "Parallel vs Sequential", description: "Reducing variance (Bagging) vs reducing bias (Boosting)." },
      { title: "Meta-Learning", description: "Hierarchical architectures where models learn from other models." }
    ]
  },
  {
    id: "modern-ml",
    title: "Modern ML Topics",
    description: "The current state-of-the-art—from Self-Supervised puzzles to the 'Gift of Experience' in Transfer Learning.",
    keyConcepts: [
      { title: "Self-Supervision", description: "Learning without human labels by solving innovative 'pretext' tasks." },
      { title: "Knowledge Transfer", description: "Repurposing pre-trained global intelligence for specific tasks." },
      { title: "Latent Manifolds", description: "Mapping raw data into low-dimensional semantic vector spaces." }
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
    title: "Mathematics",
    description: "The rigorous theoretical frameworks that govern linear transformations, optimization, and probabilistic reasoning.",
    categories: ["linear-algebra", "probability", "statistics", "calculus", "information-theory", "discrete-math", "optimization"]
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "Architectural paradigms and learning strategies that transform raw data into predictive, autonomous systems.",
    categories: ["foundation-ml", "supervised-learning", "unsupervised-learning", "pgm", "deep-learning", "reinforcement-learning", "data-preprocessing", "model-evaluation", "optimization-ml", "advanced-ml", "modern-ml"]
  }
];

// ---------------------------------------------------------------------------
// UI helpers — small icon map for categories (kept with metadata)
// ---------------------------------------------------------------------------
import {
  Layers, FunctionSquare, BarChart3, Dice5,
  Brain, Cpu, Network, Database, Activity, ShieldCheck,
  Binary, GitBranch, Target, Share2, Zap
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
  "information-theory": Binary,
  "discrete-math": GitBranch,
  "optimization": Target,
  "foundation-ml": Brain,
  "pgm": Share2,
  "optimization-ml": Zap,
  "advanced-ml": Layers,
  "modern-ml": Activity,
};

// ---------------------------------------------------------------------------
// Dynamic loader — fetches category data only when needed
// ---------------------------------------------------------------------------
const categoryCache = new Map<string, CategoryData>();

// Maps for dynamic import — Vite will code-split these into separate chunks
const importMap: Record<string, () => Promise<any>> = {
  'linear-algebra': () => import('../../categories/linear-algebra-index'),
  'probability': () => import('../../categories/probability-index'),
  'statistics': () => import('../../categories/statistics-index'),
  'calculus': () => import('../../categories/calculus-index'),
  'information-theory': () => import('../../categories/information-theory-index'),
  'discrete-math': () => import('../../categories/discrete-math-index'),
  
  // Machine Learning Cluster
  'supervised-learning': () => import('../../categories/supervised-learning-index'),
  'unsupervised-learning': () => import('../../categories/unsupervised-learning-index'),
  'deep-learning': () => import('../../categories/deep-learning-index'),
  'reinforcement-learning': () => import('../../categories/reinforcement-learning-index'),
  'data-preprocessing': () => import('../../categories/data-preprocessing-index'),
  'model-evaluation': () => import('../../categories/model-evaluation-index'),
  'optimization': () => import('../../categories/optimization-index'),
  'foundation-ml': () => import('../../categories/foundation-ml-index'),
  'pgm': () => import('../../categories/pgm-index'),
  'optimization-ml': () => import('../../categories/optimization-ml-index'),
  'advanced-ml': () => import('../../categories/advanced-ml-index'),
  'modern-ml': () => import('../../categories/modern-ml-index'),
};

// Export name map (the const name inside each file)
const exportNameMap: Record<string, string> = {
  'linear-algebra': 'LINEAR_ALGEBRA_DATA',
  'probability': 'PROBABILITY_DATA',
  'statistics': 'STATISTICS_DATA',
  'calculus': 'CALCULUS_DATA',
  'information-theory': 'INFORMATION_THEORY_DATA',
  'discrete-math': 'DISCRETE_MATH_DATA',
  
  // Machine Learning Cluster
  'supervised-learning': 'SUPERVISED_LEARNING_DATA',
  'unsupervised-learning': 'UNSUPERVISED_LEARNING_DATA',
  'deep-learning': 'DEEP_LEARNING_DATA',
  'reinforcement-learning': 'REINFORCEMENT_LEARNING_DATA',
  'data-preprocessing': 'DATA_PREPROCESSING_DATA',
  'model-evaluation': 'MODEL_EVALUATION_DATA',
  'optimization': 'OPTIMIZATION_DATA',
  'foundation-ml': 'FOUNDATION_ML_DATA',
  'pgm': 'PGM_DATA',
  'optimization-ml': 'OPTIMIZATION_ML_DATA',
  'advanced-ml': 'ADVANCED_ML_DATA',
  'modern-ml': 'MODERN_ML_DATA',
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

