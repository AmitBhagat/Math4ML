/**
 * curriculumTree.ts
 * The master index of the Math4ML curriculum.
 * This structure powers the GFG-style hierarchical sidebar.
 */

export interface TopicNode {
  id: string;
  title: string;
}

export interface CategoryNode {
  id: string;
  title: string;
  topics: TopicNode[];
}

export interface ClusterNode {
  id: string;
  title: string;
  categories: CategoryNode[];
}

export const CURRICULUM_TREE: ClusterNode[] = [
  {
    id: "mathematics",
    title: "Mathematics",
    categories: [
      {
        id: "linear-algebra",
        title: "Linear Algebra",
        topics: [
          { id: "vectors", title: "Vectors & Tensors" },
          { id: "vector-spaces", title: "Vector Spaces" },
          { id: "linear-independence", title: "Linear Independence" },
          { id: "basis-dimension", title: "Basis & Dimension" },
          { id: "dot-product", title: "Dot Product" },
          { id: "vector-norms", title: "Vector Norms" },
          { id: "matrices", title: "Matrix Basics" },
          { id: "matrix-multiplication", title: "Matrix Multiplication" },
          { id: "matrix-inverse", title: "Matrix Inverse" },
          { id: "determinants", title: "Determinants" },
          { id: "matrix-rank", title: "Matrix Rank" },
          { id: "orthogonality-projections", title: "Orthogonality" },
          { id: "eigenvalues-eigenvectors", title: "Eigen-decomposition" },
          { id: "positive-definite-matrices", title: "Positive Definite" },
          { id: "svd", title: "Singular Value Decomposition" },
          { id: "pca", title: "PCA Application" }
        ]
      },
      {
        id: "calculus",
        title: "Calculus",
        topics: [
          { id: "derivatives", title: "The Derivative" },
          { id: "partial-derivatives", title: "Partial Derivatives" },
          { id: "gradient", title: "The Gradient" },
          { id: "chain-rule", title: "The Chain Rule" },
          { id: "jacobian", title: "The Jacobian" },
          { id: "hessian", title: "The Hessian" },
          { id: "taylor-series", title: "Taylor Series" },
          { id: "critical-points", title: "Critical Points" },
          { id: "integrals", title: "Integrals in ML" }
        ]
      },
      {
        id: "probability",
        title: "Probability",
        topics: [
          { id: "random-variables", title: "Random Variables" },
          { id: "probability-distributions", title: "Distributions" },
          { id: "joint-distributions", title: "Joint Distributions" },
          { id: "conditional-probability", title: "Conditional Prob" },
          { id: "independence", title: "Independence" },
          { id: "expectation", title: "Expectation" },
          { id: "variance", title: "Variance & Covariance" },
          { id: "law-of-large-numbers", title: "Law of Large Numbers" },
          { id: "central-limit-theorem", title: "Central Limit Theorem" },
          { id: "bayes-theorem", title: "Bayes' Theorem" }
        ]
      },
      {
        id: "statistics",
        title: "Statistics",
        topics: [
          { id: "mle", title: "Maximum Likelihood (MLE)" },
          { id: "map", title: "Maximum A Posteriori (MAP)" },
          { id: "bias-variance", title: "Bias-Variance Tradeoff" },
          { id: "hypothesis-testing", title: "Hypothesis Testing" },
          { id: "t-test", title: "T-Test & Degrees of Freedom" },
          { id: "chi-square-test", title: "Chi-Square Test" },
          { id: "anova", title: "ANOVA Analysis" },
          { id: "ab-testing", title: "A/B Testing Framework" },
          { id: "confidence-intervals", title: "Confidence Intervals" }
        ]
      }
    ]
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    categories: [
      {
        id: "foundation-ml",
        title: "Foundations",
        topics: [
          { id: "what-is-ml", title: "What is Machine Learning?" },
          { id: "types-of-ml", title: "Learning Paradigms" },
          { id: "supervised", title: "Supervised Learning" },
          { id: "unsupervised", title: "Unsupervised Learning" },
          { id: "semi-supervised", title: "Semi-Supervised" },
          { id: "reinforcement", title: "Reinforcement Theory" },
          { id: "train-test-split", title: "The Train-Test Split" },
          { id: "overfitting-underfitting", title: "Capacity & Overfitting" },
          { id: "bias-variance-tradeoff", title: "Bias vs. Variance" },
          { id: "cross-validation", title: "K-Fold Cross-Validation" },
          { id: "feature-engineering", title: "Feature Engineering" },
          { id: "scaling-normalization", title: "Data Scaling" },
          { id: "evaluation-metrics", title: "Performance Metrics" }
        ]
      },
      {
        id: "supervised-learning",
        title: "Supervised Learning",
        topics: [
          { id: "regression-intro", title: "Intro to Regression" },
          { id: "linear-regression", title: "Linear Regression" },
          { id: "ridge-regression", title: "Ridge (L2) Regularization" },
          { id: "lasso-regression", title: "Lasso (L1) Regularization" },
          { id: "polynomial-regression", title: "Non-Linear Patterns" },
          { id: "classification-intro", title: "Intro to Classification" },
          { id: "logistic-regression", title: "Logistic Regression" },
          { id: "naive-bayes", title: "Naive Bayes Classifier" },
          { id: "knn", title: "K-Nearest Neighbors" },
          { id: "svm", title: "Support Vector Machines" },
          { id: "decision-trees", title: "Decision Trees" },
          { id: "random-forest", title: "Random Forests" },
          { id: "gradient-boosting", title: "Gradient Boosting" },
          { id: "advanced-boosting", title: "XG/LightGBM/CatBoost" }
        ]
      },
      {
        id: "deep-learning",
        title: "Deep Learning",
        topics: [
          { id: "perceptron", title: "The Perceptron" },
          { id: "mlp", title: "The Multi-Layer Perceptron" },
          { id: "backpropagation", title: "Backpropagation" },
          { id: "activations", title: "Activation Functions" },
          { id: "loss-functions", title: "The Objective Layer" },
          { id: "architectures-intro", title: "Intro to Architectures" },
          { id: "cnn", title: "Convolutional Nets (CNN)" },
          { id: "rnn", title: "Recurrent Nets (RNN)" },
          { id: "lstm-gru", title: "LSTMs & GRUs" },
          { id: "transformers", title: "The Transformer (Attention)" },
          { id: "gans", title: "Generative Adversarial Nets" }
        ]
      }
    ]
  }
];
