import { TopicSection } from '../../src/data/types';

export const normsSection: TopicSection = {
  id: "vector-norms",
  title: "Vector Norms: Measuring Magnitude",
  description: "A norm is a mathematical function that assigns a strictly positive 'length' or 'size' to a vector. In ML, we use norms to penalize large weights and prevent our models from overfitting the training data.",
  formula: "\\|\\mathbf{v}\\|_p = \\left( \\sum_{i=1}^n |x_i|^p \\right)^{1/p}",
  details: [
    "Distance Metrics: Norms define the geometry of your feature space.",
    "Regularization: Using L1 (Lasso) and L2 (Ridge) to control model complexity.",
    "Convergence Engine: Measuring how far the current model is from the optimal solution."
  ],
  contentSections: [
    {
      heading: "Magnitude and the Three Norm Axioms",
      paragraphs: [
        "A vector norm, denoted as $\\|x\\|$, assigns a non-negative length or size to a vector. It's used in ML to compare the importance of different features and to normalize data. A valid norm must satisfy three properties:  ",
        "1. **Non-negativity**: $\\|x\\| > 0$ if $x \\neq 0$, and $\\|x\\| = 0$ if and only if $x = 0$.  ",
        "2. **Scalar Multiplication**: $\\|kx\\| = |k| \\cdot \\|x\\|$ for any scalar $k$.  ",
        "3. **Triangle Inequality**: $\\|x + y\\| \\leq \\|x\\| + \\|y\\|$.  ",
        "The general **p-norm** formula for $p = 1, 2, \\dots$ is defined as:  ",
        "$$\\|\\mathbf{x}\\|_p = \\left( \\sum_{i=1}^{n} |x_i|^p \\right)^{\\frac{1}{p}}$$"
      ]
    },
    {
      heading: "Commonly Used Norms in Machine Learning",
      paragraphs: [
        "Three specific norms are standard for regularization and measuring distance:  ",
        "**L1 Norm (Manhattan)**: The sum of absolute values. For $\\mathbf{x} = [3, -4, 2]$, $\\|x\\|_1 = |3| + |-4| + |2| = 9$.  ",
        "**L2 Norm (Euclidean)**: The square root of the sum of squares. For $\\mathbf{x} = [3, -4, 2]$, $\\|x\\|_2 = \\sqrt{3^2 + (-4)^2 + 2^2} = \\sqrt{29} \\approx 5.39$.  ",
        "**L∞ Norm (Max)**: The largest absolute value among components. For $\\mathbf{x} = [3, -4, 2]$, $\\|x\\|_\\infty = \\max(|3|, |-4|, |2|) = 4$.  ",
        "In AI practice, $L_2$ (Ridge) keeps weights small and stable, while $L_1$ (Lasso) encourages 'sparsity' by zeroing out redundant features."
      ]
    },
    {
      heading: "Practice Problems: Test Your Understanding",
      paragraphs: [
        "**Question 1.** For $\\mathbf{x} = [4, -3, 7, 1]$, calculate the $L_1$ norm.  ",
        "**Question 2.** For $\\mathbf{x} = [1, -2, 2]$, calculate the $L_2$ norm.  ",
        "**Question 3.** For $\\mathbf{x} = [7, -1, -4, 6]$, calculate the $L_\\infty$ norm.  ",
        "**Question 4.** If $\\|x\\|_2 = 10$, $x_1 = 6$ and $x_2 = 8$, find $x_3$.  ",
        "**Answers**: 1. 15 | 2. 3 | 3. 7 | 4. 0"
      ],
      code: "import numpy as np\nx1 = np.array([4, -3, 7, 1])\nx2 = np.array([1, -2, 2])\n\nprint(f\"Q1 (L1): {np.linalg.norm(x1, 1)}\")\nprint(f\"Q2 (L2): {np.linalg.norm(x2, 2)}\")",
      output: "Q1 (L1): 15.0\nQ2 (L2): 3.0"
    }
  ],
  tags: ["L1 Regularization", "L2 Regularization", "Lasso", "Ridge", "Magnitude"],
  level: "Intermediate"
};
