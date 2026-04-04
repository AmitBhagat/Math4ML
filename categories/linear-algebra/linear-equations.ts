import { TopicSection } from '../../src/data/types';

export const linearEquationsSection: TopicSection = {
  id: "linear-equations",
  title: "Linear Equations: Solving for Weights",
  description: "When we train a model, we're really just solving a massive system of linear equations. How do we find the unique configuration of weights (x) that satisfy all our data points (b)?",
  formula: "A \\mathbf{x} = \\mathbf{b}",
  details: [
    "Efficient Data Representation: Organizing millions of relationships in matrix form.",
    "Relationship Discovery: Using Nullity to identify redundant or noisy features.",
    "Optimization Engine: Forming the basis of almost all classical ML algorithms."
  ],
  contentSections: [
    {
      heading: "The Inverse Problem: General Linear Systems",
      paragraphs: [
        "In Machine Learning, we often face systems of the form $\mathbf{Ax} = \mathbf{b}$, where $A$ is an $m \times n$ matrix of coefficients, $x$ is an $n \times 1$ vector of unknown weights, and $b$ is an $m \times 1$ dependent variable vector.  ",
        "The solvability of your model depends on the rank of $A$ relative to the number of equations ($m$) and variables ($n$). We identify these linear relationships to determine whether features are redundant or if a unique pattern exists."
      ]
    },
    {
      heading: "Rank Conditions and Solvability (Case 1: m = n)",
      paragraphs: [
        "When the number of equations equals the number of variables, three primary results emerge:  ",
        "1. **Unique Solution**: If $A$ is full rank ($det(A) \\neq 0$), the solution is $x = A^{-1}b$.  ",
        "   Example: $\\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 7 \\\\ 10 \\end{bmatrix}$. Since rank is 2 (full), $x = [1, 2]^T$.  ",
        "2. **Infinite Solutions**: If rows are redundant but consistent.  ",
        "   Example: $\\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 10 \\end{bmatrix}$. Row 2 is $2 \\times$ Row 1 ($x_1 + 2x_2 = 5$). We have infinitely many solutions.  ",
        "3. **No Solution**: If equations are contradictory.  ",
        "   Example: $\\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 9 \\end{bmatrix}$. Here $2(x_1 + 2x_2) = 10 \\neq 9$. No valid $x$ exists."
      ]
    },
    {
      heading: "Optimization Leap: Cases m > n and m < n",
      paragraphs: [
        "In modern data science, we usually handle overdetermined ($m > n$) or underdetermined ($m < n$) systems:  ",
        "**Case 2: m > n (Overdetermined)**  ",
        "Not all equations can be satisfied, so we find $x$ that minimizes the error $e = Ax - b$. By minimizing the sum of squares $min[(Ax - b)^T (Ax - b)]$, we derive the **Least Squares Solution**:  ",
        "$$2(A^T A)x - 2A^T b = 0 \\implies x = (A^T A)^{-1} A^T b$$  ",
        "Example: For $A = \\begin{bmatrix} 1 & 0 \\\\ 2 & 0 \\\\ 3 & 1 \\end{bmatrix}$ and $b = \\begin{bmatrix} 1 \\\\ -0.5 \\\\ 5 \\end{bmatrix}$, the solution is $(x_1, x_2) = (0, 5)$.  ",
        "**Case 3: m < n (Underdetermined)**  ",
        "With infinite possible solutions, we use a Lagrangian to pick one (often the minimum-norm solution):  ",
        "$$\\min [\\frac{1}{2}x^T x + \\lambda^T (Ax - b)]$$"
      ],
      code: "import numpy as np\nA = np.array([[1, 0], [2, 0], [3, 1]])\nb = np.array([1, -0.5, 5])\n# Solving Case 2: x = (A^T A)^-1 A^T b\nA_pseudoinv = np.linalg.pinv(A)\nx = A_pseudoinv.dot(b)\nprint(f\"Least Squares Solution (x1, x2): {x}\")",
      output: "Least Squares Solution (x1, x2): [0. 5.]"
    }
  ],
  tags: ["Gaussian Elimination", "Null Space", "Least Squares", "Rank", "Inversion", "Lagrangian"],
  level: "Advanced"
};
