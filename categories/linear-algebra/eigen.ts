import { TopicSection } from '../../src/data/types';

export const eigenvaluesSection: TopicSection = {
  id: "eigenvalues-eigenvectors",
  title: "Eigenvalues & Eigenvectors: Natural Axes",
  description: "Eigen-decomposition is the 'X-ray' of linear algebra. It reveals the hidden axes of a matrix where all the action happens, showing us exactly how a model stretches and compresses information.",
  formula: "A \\mathbf{v} = \\lambda \\mathbf{v}",
  details: [
    "Characteristic Equation: det(A - λI) = 0 helps us find the 'scale' of transformation.",
    "Geometric Preservation: Eigenvectors maintain their direction during space distortion.",
    "PCA Foundation: Identifying the directions of maximum variance in a dataset."
  ],
  contentSections: [
    {
      heading: "The Characteristic Equation and Hidden Axes",
      paragraphs: [
        "Eigenvalues and eigenvectors are associated with a square matrix and provide insights into its properties. An eigenvalue is a scalar that indicates how much an eigenvector stretches or shrinks during a linear transformation. To find them, we derive the **characteristic equation**:  ",
        "$$A \mathbf{v} = \lambda \mathbf{v} \implies (A - \lambda I)\mathbf{v} = 0$$",
        "For a non-zero vector $\mathbf{v}$, this implies that the determinant of $(A - \lambda I)$ must be zero:  ",
        "$$\det(A - \lambda I) = 0$$",
        "This polynomial equation allows us to solve for all possible values of $\lambda$. Once $\lambda_i$ is found, we solve the system $(A - \lambda_i I)X = 0$ to find the corresponding eigenvectors."
      ]
    },
    {
      heading: "Numerical Execution (Case 1: 2x2 Matrix)",
      paragraphs: [
        "**Example**: Find eigenvalues for $A = \\begin{bmatrix} 1 & 2 \\\\ 5 & 4 \\end{bmatrix}$.  ",
        "Characteristic Equation: $\\begin{vmatrix} 1 - \\lambda & 2 \\\\ 5 & 4 - \\lambda \\end{vmatrix} = 0$  ",
        "$(1-\\lambda)(4-\\lambda) - 10 = 0 \\implies \\lambda^2 - 5\\lambda - 6 = 0$  ",
        "Solving factors: $(\\lambda - 6)(\\lambda + 1) = 0 \\implies \\lambda_1 = 6, \\lambda_2 = -1$.  ",
        "- For $\\lambda = 6$: $(A - 6I)v = 0 \\implies 5a - 2b = 0$, giving eigenvector $\\mathbf{v} = [2, 5]^T$.  ",
        "- For $\\lambda = -1$: $(A + I)v = 0 \\implies a + b = 0$, giving eigenvector $\\mathbf{v} = [1, -1]^T$."
      ]
    },
    {
      heading: "Numerical Execution (Case 2: 3x3 Matrix)",
      paragraphs: [
        "**Example**: Find eigenvalues for $A = \\begin{bmatrix} 2 & 2 & 2 \\\\ 2 & 2 & 2 \\\\ 2 & 2 & 2 \\end{bmatrix}$.  ",
        "The characteristic equation for this rank-1 matrix leads to eigenvalues: $\\lambda = 6, 0, 0$.  ",
        "The corresponding eigenvectors are oriented along the main directions of the transformation:  ",
        "- For $\\lambda = 6$: $\\mathbf{v} = [1, 1, 1]^T$.  ",
        "- For $\\lambda = 0$: $\\mathbf{v}_1 = [-1, 1, 0]^T$ and $\\mathbf{v}_2 = [-1, 0, 1]^T$.  ",
        "In ML, these directions allow us to identify principal components (PCA) and stationary states in Markov processes."
      ],
      code: "import numpy as np\nA = np.array([[1, 2], [5, 4]])\neigen_vals, eigen_vecs = np.linalg.eig(A)\n\nprint(f\"Eigenvalues: {eigen_vals}\")\nprint(f\"Eigenvector for lambda=6:\\n{eigen_vecs[:, 0]}\")",
      output: "Eigenvalues: [-1.  6.]\nEigenvector for lambda=6:\n[-0.70710678 0.70710678]"
    }
  ],
  tags: ["PCA", "Characteristic Equation", "Feature Selection", "Stability"],
  level: "Advanced"
};
