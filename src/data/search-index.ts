export interface SearchableTopic {
  id: string;
  title: string;
  category: string;
  path: string;
  keywords: string[];
}

export const SEARCH_INDEX: SearchableTopic[] = [
  // --- Linear Algebra ---
  {
    id: "vectors",
    title: "Vectors",
    category: "Linear Algebra",
    path: "/mathematics/linear-algebra/vectors",
    keywords: ["vector", "coordinate", "magnitude", "direction"]
  },
  {
    id: "vector-spaces",
    title: "Vector Spaces",
    category: "Linear Algebra",
    path: "/mathematics/linear-algebra/vector-spaces",
    keywords: ["space", "span", "subspace", "linear combination"]
  },
  {
    id: "linear-independence",
    title: "Linear Independence",
    category: "Linear Algebra",
    path: "/mathematics/linear-algebra/linear-independence",
    keywords: ["independence", "dependent", "redundancy"]
  },
  {
    id: "basis-dimension",
    title: "Basis & Dimension",
    category: "Linear Algebra",
    path: "/mathematics/linear-algebra/basis-dimension",
    keywords: ["basis", "dimension", "coordinates", "rank"]
  },
  {
    id: "dot-product",
    title: "Dot Product",
    category: "Linear Algebra",
    path: "/mathematics/linear-algebra/dot-product",
    keywords: ["dot", "scalar", "projection", "similarity", "cosine"]
  },
  {
    id: "vector-norms",
    title: "Vector Norms",
    category: "Linear Algebra",
    path: "/mathematics/linear-algebra/vector-norms",
    keywords: ["norm", "L1", "L2", "magnitude", "distance", "manhattan", "euclidean"]
  },
  {
    id: "matrices",
    title: "Matrices",
    category: "Linear Algebra",
    path: "/mathematics/linear-algebra/matrices",
    keywords: ["matrix", "array", "transformation", "linear map"]
  },
  {
    id: "matrix-multiplication",
    title: "Matrix Multiplication",
    category: "Linear Algebra",
    path: "/mathematics/linear-algebra/matrix-multiplication",
    keywords: ["multiplication", "product", "composition", "matmul"]
  },
  {
    id: "matrix-inverse",
    title: "Matrix Inverse",
    category: "Linear Algebra",
    path: "/mathematics/linear-algebra/matrix-inverse",
    keywords: ["inverse", "identity", "solvable", "singular"]
  },
  {
    id: "determinants",
    title: "Determinants",
    category: "Linear Algebra",
    path: "/mathematics/linear-algebra/determinants",
    keywords: ["determinant", "volume", "scaling", "invertibility"]
  },
  {
    id: "matrix-rank",
    title: "Matrix Rank",
    category: "Linear Algebra",
    path: "/mathematics/linear-algebra/matrix-rank",
    keywords: ["rank", "nullity", "dimension", "independence"]
  },
  {
    id: "orthogonality-projections",
    title: "Orthogonality & Projections",
    category: "Linear Algebra",
    path: "/mathematics/linear-algebra/orthogonality-projections",
    keywords: ["orthogonal", "projection", "perpendicular", "basis"]
  },
  {
    id: "eigenvalues-eigenvectors",
    title: "Eigenvalues & Eigenvectors",
    category: "Linear Algebra",
    path: "/mathematics/linear-algebra/eigenvalues-eigenvectors",
    keywords: ["eigen", "eigenvalue", "eigenvector", "characteristic"]
  },
  {
    id: "positive-definite",
    title: "Positive Definite Matrices",
    category: "Linear Algebra",
    path: "/mathematics/linear-algebra/positive-definite-matrices",
    keywords: ["positive definite", "quadratic", "optimization", "energy"]
  },
  {
    id: "svd",
    title: "Singular Value Decomposition (SVD)",
    category: "Linear Algebra",
    path: "/mathematics/linear-algebra/svd",
    keywords: ["svd", "decomposition", "approximation", "singular"]
  },
  {
    id: "pca",
    title: "Principal Component Analysis (PCA)",
    category: "Linear Algebra",
    path: "/mathematics/linear-algebra/pca",
    keywords: ["pca", "reduction", "variance", "features", "dimensionality"]
  },

  // --- Calculus ---
  {
    id: "derivatives",
    title: "Derivatives",
    category: "Calculus",
    path: "/mathematics/calculus/derivatives",
    keywords: ["derivative", "slope", "tangent", "change"]
  },
  {
    id: "partial-derivatives",
    title: "Partial Derivatives",
    category: "Calculus",
    path: "/mathematics/calculus/partial-derivatives",
    keywords: ["partial", "multivariable", "gradient"]
  },
  {
    id: "gradient",
    title: "The Gradient",
    category: "Calculus",
    path: "/mathematics/calculus/gradient",
    keywords: ["gradient", "nabla", "direction", "steepest"]
  },
  {
    id: "chain-rule",
    title: "Chain Rule",
    category: "Calculus",
    path: "/mathematics/calculus/chain-rule",
    keywords: ["chain", "backpropagation", "composite", "nested"]
  },
  {
    id: "jacobian",
    title: "Jacobian Matrix",
    category: "Calculus",
    path: "/mathematics/calculus/jacobian",
    keywords: ["jacobian", "sensitivity", "transformation"]
  },
  {
    id: "hessian",
    title: "Hessian Matrix",
    category: "Calculus",
    path: "/mathematics/calculus/hessian",
    keywords: ["hessian", "curvature", "second derivative"]
  },
  {
    id: "taylor-series",
    title: "Taylor Series",
    category: "Calculus",
    path: "/mathematics/calculus/taylor-series",
    keywords: ["taylor", "approximation", "polynomial", "local"]
  },
  {
    id: "critical-points",
    title: "Critical Points",
    category: "Calculus",
    path: "/mathematics/calculus/critical-points",
    keywords: ["minima", "maxima", "saddle", "optimization"]
  },

  // --- Probability ---
  {
    id: "random-variables",
    title: "Random Variables",
    category: "Probability",
    path: "/mathematics/probability/random-variables",
    keywords: ["random", "variable", "discrete", "continuous"]
  },
  {
    id: "probability-distributions",
    title: "Distributions",
    category: "Probability",
    path: "/mathematics/probability/probability-distributions",
    keywords: ["distribution", "gaussian", "normal", "bernoulli", "poisson"]
  },
  {
    id: "joint-distributions",
    title: "Joint Distributions",
    category: "Probability",
    path: "/mathematics/probability/joint-distributions",
    keywords: ["joint", "marginal", "covariance"]
  },
  {
    id: "conditional-probability",
    title: "Conditional Probability",
    category: "Probability",
    path: "/mathematics/probability/conditional-probability",
    keywords: ["conditional", "given", "dependency"]
  },
  {
    id: "independence",
    title: "Independence",
    category: "Probability",
    path: "/mathematics/probability/independence",
    keywords: ["independent", "disjoint", "event"]
  },
  {
    id: "expectation",
    title: "Expectation",
    category: "Probability",
    path: "/mathematics/probability/expectation",
    keywords: ["expectation", "mean", "average", "expected value"]
  },
  {
    id: "variance",
    title: "Variance",
    category: "Probability",
    path: "/mathematics/probability/variance",
    keywords: ["variance", "std", "spread", "dispersion"]
  },
  {
    id: "law-of-large-numbers",
    title: "Law of Large Numbers",
    category: "Probability",
    path: "/mathematics/probability/law-of-large-numbers",
    keywords: ["lln", "large numbers", "convergence"]
  },
  {
    id: "central-limit-theorem",
    title: "Central Limit Theorem",
    category: "Probability",
    path: "/mathematics/probability/central-limit-theorem",
    keywords: ["clt", "gaussian", "sampling"]
  },
  {
    id: "bayes-theorem",
    title: "Bayes Theorem",
    category: "Probability",
    path: "/mathematics/probability/bayes-theorem",
    keywords: ["bayes", "prior", "posterior", "likelihood"]
  },

  // --- Statistics ---
  {
    id: "mle",
    title: "MLE",
    category: "Statistics",
    path: "/mathematics/statistics/mle",
    keywords: ["mle", "likelihood", "estimation", "parameters"]
  },
  {
    id: "map",
    title: "MAP",
    category: "Statistics",
    path: "/mathematics/statistics/map",
    keywords: ["map", "posterior", "prior", "regularization"]
  },
  {
    id: "bias-variance",
    title: "Bias-Variance Tradeoff",
    category: "Statistics",
    path: "/mathematics/statistics/bias-variance",
    keywords: ["bias", "variance", "overfitting", "model", "tradeoff"]
  },
  {
    id: "hypothesis-testing",
    title: "Hypothesis Testing",
    category: "Statistics",
    path: "/mathematics/statistics/hypothesis-testing",
    keywords: ["hypothesis", "p-value", "significance", "ttest", "anova", "chisquare"]
  },
  {
    id: "confidence-intervals",
    title: "Confidence Intervals",
    category: "Statistics",
    path: "/mathematics/statistics/confidence-intervals",
    keywords: ["confidence", "interval", "error bar", "significance"]
  },

  // --- Information Theory ---
  {
    id: "entropy",
    title: "Entropy",
    category: "Information Theory",
    path: "/mathematics/information-theory/entropy",
    keywords: ["entropy", "uncertainty", "bits", "shannon"]
  },
  {
    id: "cross-entropy",
    title: "Cross-Entropy",
    category: "Information Theory",
    path: "/mathematics/information-theory/cross-entropy",
    keywords: ["cross entropy", "loss", "softmax", "classifier"]
  },
  {
    id: "kl-divergence",
    title: "KL Divergence",
    category: "Information Theory",
    path: "/mathematics/information-theory/kl-divergence",
    keywords: ["kl", "divergence", "distance", "relative entropy"]
  },

  // --- Optimization ---
  {
    id: "gradient-descent",
    title: "Gradient Descent",
    category: "Optimization",
    path: "/mathematics/optimization/gradient-descent",
    keywords: ["gradient descent", "minima", "descent", "learning rate"]
  },
  {
    id: "sgd",
    title: "SGD",
    category: "Optimization",
    path: "/mathematics/optimization/sgd",
    keywords: ["sgd", "stochastic", "minibatch", "noise"]
  },
  {
    id: "convex-optimization",
    title: "Convex Optimization",
    category: "Optimization",
    path: "/mathematics/optimization/convex-optimization",
    keywords: ["convex", "bowl", "global minima", "concave"]
  },
  {
    id: "regularization",
    title: "Regularization",
    category: "Optimization",
    path: "/mathematics/optimization/regularization",
    keywords: ["regularization", "L1", "L2", "lasso", "ridge", "sparsity"]
  }
];
