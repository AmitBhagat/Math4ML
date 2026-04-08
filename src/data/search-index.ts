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
  },

  // --- Foundation of Machine Learning ---
  {
    id: "what-is-ml",
    title: "What is Machine Learning?",
    category: "Foundation of ML",
    path: "/machine-learning/foundation-ml/what-is-ml",
    keywords: ["ml", "machine learning", "pattern", "data", "algorithm"]
  },
  {
    id: "types-of-ml",
    title: "Types of Machine Learning",
    category: "Foundation of ML",
    path: "/machine-learning/foundation-ml/types-of-ml",
    keywords: ["paradigm", "supervised", "unsupervised", "reinforcement", "semi-supervised"]
  },
  {
    id: "supervised",
    title: "Supervised Learning",
    category: "Foundation of ML",
    path: "/machine-learning/foundation-ml/supervised",
    keywords: ["labels", "regression", "classification", "teacher"]
  },
  {
    id: "unsupervised",
    title: "Unsupervised Learning",
    category: "Foundation of ML",
    path: "/machine-learning/foundation-ml/unsupervised",
    keywords: ["clustering", "dimensionality", "pca", "patterns"]
  },
  {
    id: "semi-supervised",
    title: "Semi-Supervised Learning",
    category: "Foundation of ML",
    path: "/machine-learning/foundation-ml/semi-supervised",
    keywords: ["labeled", "unlabeled", "hybrid", "SSL"]
  },
  {
    id: "reinforcement",
    title: "Reinforcement Learning",
    category: "Foundation of ML",
    path: "/machine-learning/foundation-ml/reinforcement",
    keywords: ["agent", "reward", "policy", "trial and error", "q-learning"]
  },
  {
    id: "train-test-split",
    title: "Training vs. Testing Data",
    category: "Foundation of ML",
    path: "/machine-learning/foundation-ml/train-test-split",
    keywords: ["split", "validation", "test set", "generalization", "data leakage"]
  },
  {
    id: "overfitting-underfitting",
    title: "Overfitting and Underfitting",
    category: "Foundation of ML",
    path: "/machine-learning/foundation-ml/overfitting-underfitting",
    keywords: ["capacity", "memorization", "simpleton", "complexity"]
  },
  {
    id: "bias-variance-tradeoff",
    title: "Bias–Variance Tradeoff",
    category: "Foundation of ML",
    path: "/machine-learning/foundation-ml/bias-variance-tradeoff",
    keywords: ["bias", "variance", "error", "bullseye", "tradeoff"]
  },
  {
    id: "cross-validation",
    title: "Cross-Validation",
    category: "Foundation of ML",
    path: "/machine-learning/foundation-ml/cross-validation",
    keywords: ["k-fold", "rotation", "validation", "robustness"]
  },
  {
    id: "feature-engineering",
    title: "Feature Engineering",
    category: "Foundation of ML",
    path: "/machine-learning/foundation-ml/feature-engineering",
    keywords: ["features", "domain knowledge", "extraction", "transformation"]
  },
  {
    id: "scaling-normalization",
    title: "Feature Scaling and Normalization",
    category: "Foundation of ML",
    path: "/machine-learning/foundation-ml/scaling-normalization",
    keywords: ["scaling", "normalization", "standardization", "z-score", "min-max"]
  },
  {
    id: "evaluation-metrics",
    title: "Model Evaluation Metrics",
    category: "Foundation of ML",
    path: "/machine-learning/foundation-ml/evaluation-metrics",
    keywords: ["accuracy", "precision", "recall", "f1", "confusion matrix", "mse", "mae"]
  },

  // --- Supervised Learning (Advanced) ---
  {
    id: "regression-intro",
    title: "Regression Intro",
    category: "Supervised Learning",
    path: "/machine-learning/supervised-learning/regression-intro",
    keywords: ["regression", "continuous", "prediction", "trend", "shadow"]
  },
  {
    id: "linear-regression",
    title: "Linear Regression",
    category: "Supervised Learning",
    path: "/machine-learning/supervised-learning/linear-regression",
    keywords: ["linear", "OLS", "slope", "intercept", "least squares"]
  },
  {
    id: "ridge-regression",
    title: "Ridge Regression",
    category: "Supervised Learning",
    path: "/machine-learning/supervised-learning/ridge-regression",
    keywords: ["ridge", "L2", "regularization", "shrinkage", "penalty"]
  },
  {
    id: "lasso-regression",
    title: "Lasso Regression",
    category: "Supervised Learning",
    path: "/machine-learning/supervised-learning/lasso-regression",
    keywords: ["lasso", "L1", "regularization", "sparsity", "feature selection"]
  },
  {
    id: "polynomial-regression",
    title: "Polynomial Regression",
    category: "Supervised Learning",
    path: "/machine-learning/supervised-learning/polynomial-regression",
    keywords: ["polynomial", "curve", "degree", "non-linear", "transformation"]
  },
  {
    id: "classification-intro",
    title: "Classification Intro",
    category: "Supervised Learning",
    path: "/machine-learning/supervised-learning/classification-intro",
    keywords: ["classification", "discrete", "labels", "sorting hat", "boundary"]
  },
  {
    id: "logistic-regression",
    title: "Logistic Regression",
    category: "Supervised Learning",
    path: "/machine-learning/supervised-learning/logistic-regression",
    keywords: ["logistic", "sigmoid", "probability", "binary", "log-loss"]
  },
  {
    id: "naive-bayes",
    title: "Naive Bayes",
    category: "Supervised Learning",
    path: "/machine-learning/supervised-learning/naive-bayes",
    keywords: ["bayes", "naive", "probability", "independence", "sherlock"]
  },
  {
    id: "knn",
    title: "k-Nearest Neighbors (KNN)",
    category: "Supervised Learning",
    path: "/machine-learning/supervised-learning/knn",
    keywords: ["knn", "neighbors", "distance", "euclidean", "manhattan", "lazy"]
  },
  {
    id: "svm",
    title: "Support Vector Machines (SVM)",
    category: "Supervised Learning",
    path: "/machine-learning/supervised-learning/svm",
    keywords: ["svm", "hyperplane", "margin", "kernel", "support vectors"]
  },
  {
    id: "decision-trees",
    title: "Decision Trees",
    category: "Supervised Learning",
    path: "/machine-learning/supervised-learning/decision-trees",
    keywords: ["tree", "entropy", "gini", "information gain", "split", "pruning"]
  },
  {
    id: "random-forest",
    title: "Random Forest",
    category: "Supervised Learning",
    path: "/machine-learning/supervised-learning/random-forest",
    keywords: ["forest", "ensemble", "bagging", "bootstrap", "wisdom of crowds"]
  },
  {
    id: "gradient-boosting",
    title: "Gradient Boosting",
    category: "Supervised Learning",
    path: "/machine-learning/supervised-learning/gradient-boosting",
    keywords: ["boosting", "residual", "sequential", "gradient", "learning rate"]
  },
  {
    id: "advanced-boosting",
    title: "XGBoost, LightGBM, CatBoost",
    category: "Supervised Learning",
    path: "/machine-learning/supervised-learning/advanced-boosting",
    keywords: ["xgboost", "lightgbm", "catboost", "advanced boosting", "F1", "tree"]
  },

  // --- Unsupervised Learning (Advanced) ---
  {
    id: "kmeans",
    title: "k-Means Clustering",
    category: "Unsupervised Learning",
    path: "/machine-learning/unsupervised-learning/kmeans",
    keywords: ["kmeans", "clustering", "centroid", "inertia", "elbow method", "magnetic"]
  },
  {
    id: "hierarchical",
    title: "Hierarchical Clustering",
    category: "Unsupervised Learning",
    path: "/machine-learning/unsupervised-learning/hierarchical",
    keywords: ["hierarchical", "dendrogram", "agglomerative", "divisive", "linkage", "family tree"]
  },
  {
    id: "dbscan",
    title: "DBSCAN",
    category: "Unsupervised Learning",
    path: "/machine-learning/unsupervised-learning/dbscan",
    keywords: ["dbscan", "density", "epsilon", "minpts", "outliers", "core points", "noise"]
  },
  {
    id: "gmm",
    title: "Gaussian Mixture Models (GMM)",
    category: "Unsupervised Learning",
    path: "/machine-learning/unsupervised-learning/gmm",
    keywords: ["gmm", "gaussian", "mixture", "em algorithm", "probabilistic", "soft clustering"]
  },
  {
    id: "dim-reduction-intro",
    title: "Dimensionality Reduction Intro",
    category: "Unsupervised Learning",
    path: "/machine-learning/unsupervised-learning/dim-reduction-intro",
    keywords: ["dimensionality", "reduction", "projection", "curse of dimensionality", "shadow"]
  },
  {
    id: "pca",
    title: "PCA",
    category: "Unsupervised Learning",
    path: "/machine-learning/unsupervised-learning/pca",
    keywords: ["pca", "variance", "eigenvalue", "eigenvector", "components", "projection", "svd"]
  },
  {
    id: "tsne",
    title: "t-SNE",
    category: "Unsupervised Learning",
    path: "/machine-learning/unsupervised-learning/tsne",
    keywords: ["tsne", "visualization", "local structure", "perplexity", "neighborhood", "friendship"]
  },
  {
    id: "umap",
    title: "UMAP",
    category: "Unsupervised Learning",
    path: "/machine-learning/unsupervised-learning/umap",
    keywords: ["umap", "topology", "manifold", "global structure", "speed", "stretchy net"]
  },
  {
    id: "autoencoders",
    title: "Autoencoders",
    category: "Unsupervised Learning",
    path: "/machine-learning/unsupervised-learning/autoencoders",
    keywords: ["autoencoder", "encoder", "decoder", "latent space", "bottleneck", "hourglass", "neural"]
  },

  // --- Probabilistic & Graphical Models ---
  {
    id: "bayesian-networks",
    title: "Bayesian Networks",
    category: "Probabilistic & Graphical Models",
    path: "/machine-learning/pgm/bayesian-networks",
    keywords: ["bayesian network", "dag", "causality", "influence", "cpt", "inference"]
  },
  {
    id: "hmm",
    title: "Hidden Markov Models",
    category: "Probabilistic & Graphical Models",
    path: "/machine-learning/pgm/hmm",
    keywords: ["hmm", "markov", "latent", "hidden state", "viterbi", "sequence"]
  },
  {
    id: "em-algorithm",
    title: "EM Algorithm",
    category: "Probabilistic & Graphical Models",
    path: "/machine-learning/pgm/em-algorithm",
    keywords: ["em", "expectation maximization", "latent variable", "jensen", "log likelihood"]
  },

  // --- Neural Networks & Deep Learning ---
  {
    id: "perceptron",
    title: "The Perceptron",
    category: "Neural Networks & Deep Learning",
    path: "/machine-learning/deep-learning/perceptron",
    keywords: ["perceptron", "step function", "binary", "threshold", "loan officer"]
  },
  {
    id: "mlp",
    title: "Multilayer Perceptron (MLP)",
    category: "Neural Networks & Deep Learning",
    path: "/machine-learning/deep-learning/mlp",
    keywords: ["mlp", "multilayer", "hidden layer", "universal approximation", "dense"]
  },
  {
    id: "backpropagation",
    title: "Backpropagation",
    category: "Neural Networks & Deep Learning",
    path: "/machine-learning/deep-learning/backpropagation",
    keywords: ["backpropagation", "backprop", "chain rule", "gradient", "blame"]
  },
  {
    id: "activations",
    title: "Activation functions",
    category: "Neural Networks & Deep Learning",
    path: "/machine-learning/deep-learning/activations",
    keywords: ["activation", "relu", "sigmoid", "tanh", "softmax", "non-linear"]
  },
  {
    id: "loss-functions",
    title: "Loss functions",
    category: "Neural Networks & Deep Learning",
    path: "/machine-learning/deep-learning/loss-functions",
    keywords: ["loss", "cost", "mse", "cross-entropy", "log-loss", "mistake"]
  },
  {
    id: "architectures-intro",
    title: "Deep Learning Architectures",
    category: "Neural Networks & Deep Learning",
    path: "/machine-learning/deep-learning/architectures-intro",
    keywords: ["architecture", "deep learning", "body", "wiring", "blueprint"]
  },
  {
    id: "cnn",
    title: "Convolutional Neural Networks (CNN)",
    category: "Neural Networks & Deep Learning",
    path: "/machine-learning/deep-learning/cnn",
    keywords: ["cnn", "convolution", "pooling", "spatial", "image", "flashlight"]
  },
  {
    id: "rnn",
    title: "Recurrent Neural Networks (RNN)",
    category: "Neural Networks & Deep Learning",
    path: "/machine-learning/deep-learning/rnn",
    keywords: ["rnn", "recurrent", "sequence", "memory", "state", "goldfish"]
  },
  {
    id: "lstm-gru",
    title: "LSTM / GRU",
    category: "Neural Networks & Deep Learning",
    path: "/machine-learning/deep-learning/lstm-gru",
    keywords: ["lstm", "gru", "long term memory", "gating", "forget gate"]
  },
  {
    id: "transformers",
    title: "Transformers",
    category: "Neural Networks & Deep Learning",
    path: "/machine-learning/deep-learning/transformers",
    keywords: ["transformer", "attention", "self-attention", "query", "key", "value", "parallel"]
  },

  // --- Optimization in ML ---
  {
    id: "gradient-descent-ml",
    title: "Gradient Descent (Batch)",
    category: "Optimization in ML",
    path: "/machine-learning/optimization-ml/gradient-descent",
    keywords: ["gradient descent", "batch", "loss surface", "minima", "skier"]
  },
  {
    id: "sgd-ml",
    title: "Stochastic Gradient Descent (SGD)",
    category: "Optimization in ML",
    path: "/machine-learning/optimization-ml/sgd",
    keywords: ["sgd", "stochastic", "mini-batch", "noise", "drunken sailor"]
  },
  {
    id: "momentum-ml",
    title: "Momentum",
    category: "Optimization in ML",
    path: "/machine-learning/optimization-ml/momentum",
    keywords: ["momentum", "velocity", "inertia", "heavy boulder"]
  },
  {
    id: "adam-ml",
    title: "Adam Optimizer",
    category: "Optimization in ML",
    path: "/machine-learning/optimization-ml/adam",
    keywords: ["adam", "adaptive", "rms prop", "first moment", "second moment", "athlete"]
  },
  {
    id: "lr-scheduling-ml",
    title: "Learning Rate Scheduling",
    category: "Optimization in ML",
    path: "/machine-learning/optimization-ml/lr-scheduling",
    keywords: ["scheduling", "annealing", "decay", "cosine", "warmup", "runner"]
  },

  // --- Model Evaluation ---
  {
    id: "confusion-matrix",
    title: "Confusion Matrix",
    category: "Model Evaluation",
    path: "/machine-learning/model-evaluation/confusion-matrix",
    keywords: ["confusion matrix", "tp", "tn", "fp", "fn", "truth table", "type i", "type ii"]
  },
  {
    id: "precision",
    title: "Precision",
    category: "Model Evaluation",
    path: "/machine-learning/model-evaluation/precision",
    keywords: ["precision", "quality", "false positive", "positive predictive value"]
  },
  {
    id: "recall",
    title: "Recall (Sensitivity)",
    category: "Model Evaluation",
    path: "/machine-learning/model-evaluation/recall",
    keywords: ["recall", "sensitivity", "tpr", "false negative", "detection"]
  },
  {
    id: "f1-score",
    title: "F1 Score",
    category: "Model Evaluation",
    path: "/machine-learning/model-evaluation/f1-score",
    keywords: ["f1", "fscore", "harmonic mean", "balance", "diplomat"]
  },
  {
    id: "roc-curve",
    title: "ROC Curve",
    category: "Model Evaluation",
    path: "/machine-learning/model-evaluation/roc-curve",
    keywords: ["roc", "curve", "tpr", "fpr", "threshold", "sensitivity"]
  },
  {
    id: "auc",
    title: "AUC (Area Under Curve)",
    category: "Model Evaluation",
    path: "/machine-learning/model-evaluation/auc",
    keywords: ["auc", "auroc", "area", "ranking", "separation"]
  },

  // --- Advanced ML Topics ---
  {
    id: "ensemble-intro",
    title: "Ensemble Theory",
    category: "Advanced ML Topics",
    path: "/machine-learning/advanced-ml/ensemble-intro",
    keywords: ["ensemble", "wisdom of crowd", "averaging", "bias", "variance"]
  },
  {
    id: "bagging",
    title: "Bagging",
    category: "Advanced ML Topics",
    path: "/machine-learning/advanced-ml/bagging",
    keywords: ["bagging", "bootstrap", "aggregating", "parallel", "election"]
  },
  {
    id: "boosting",
    title: "Boosting",
    category: "Advanced ML Topics",
    path: "/machine-learning/advanced-ml/boosting",
    keywords: ["boosting", "sequential", "bias", "weak learner", "tutor"]
  },
  {
    id: "stacking",
    title: "Stacking",
    category: "Advanced ML Topics",
    path: "/machine-learning/advanced-ml/stacking",
    keywords: ["stacking", "meta-learner", "out-of-fold", "experts", "ceo"]
  },

  // --- Modern ML Topics ---
  {
    id: "self-supervised",
    title: "Self-supervised learning",
    category: "Modern ML Topics",
    path: "/machine-learning/modern-ml/self-supervised",
    keywords: ["ssl", "self-supervised", "pretext", "masking", "labels", "toddler"]
  },
  {
    id: "transfer-learning",
    title: "Transfer learning",
    category: "Modern ML Topics",
    path: "/machine-learning/modern-ml/transfer-learning",
    keywords: ["transfer", "fine-tuning", "pre-training", "kung fu"]
  },
  {
    id: "representation",
    title: "Representation learning",
    category: "Modern ML Topics",
    path: "/machine-learning/modern-ml/representation",
    keywords: ["representation", "latent", "space", "embedding", "sketch artist"]
  },
  {
    id: "contrastive",
    title: "Contrastive learning",
    category: "Modern ML Topics",
    path: "/machine-learning/modern-ml/contrastive",
    keywords: ["contrastive", "simclr", "triplet loss", "rival", "similarity"]
  }
];
