import { TopicSection } from '../../src/data/types';

export const svdSection: TopicSection = {
  id: "svd",
  title: "SVD: The Ultimate Compression",
  description: "Singular Value Decomposition (SVD) is the master algorithm for dimensionality reduction. It decomposes any matrix into three fundamental components, isolating the most important signals from the noise.",
  formula: "\\mathbf{A} = \\mathbf{U} \\boldsymbol{\\Sigma} \\mathbf{V}^T",
  details: [
    "Matrix Factorization: Breaking down complex data into basic, independent parts.",
    "Data Compression: Truncating Singular Values to reduce memory without losing meaning.",
    "Pseudo-Inverse: Solving systems of equations even for non-square matrices."
  ],
  contentSections: [
    {
      heading: "The Essential Factorization: U, Σ, V",
      paragraphs: [
        "Singular Value Decomposition (SVD) is the master algorithm for factorizing any $m \times n$ matrix $A$ into three fundamental components: $A = U \Sigma V^T$.  ",
        "Consider a conceptual example in a recommendation engine: Suppose you have a table of people's ratings for movies:  ",
        "| Name | Movie 1 | Movie 2 |",
        "| :--- | :--- | :--- |",
        "| Amit | 5 | 3 |",
        "| Sanket | 4 | 2 |",
        "| Harsh | 2 | 5 |",
        "SVD breaks this table into:  ",
        "- **U**: User preferences (Left Singular Vectors).  ",
        "- **Σ**: Importance of each factor (Singular Values).  ",
        "- **V**: Movie similarity (Right Singular Vectors)."
      ]
    },
    {
      heading: "Numerical Execution: The 5-Step SVD Workflow",
      paragraphs: [
        "To perform SVD for the matrix $A = \\begin{bmatrix} 3 & 2 & 2 \\\\ 2 & 3 & -2 \\end{bmatrix}$:  ",
        "**Step 1: Compute $AA^T$.**  ",
        "$AA^T = \\begin{bmatrix} 3 & 2 & 2 \\\\ 2 & 3 & -2 \\end{bmatrix} \\begin{bmatrix} 3 & 2 \\\\ 2 & 3 \\\\ 2 & -2 \\end{bmatrix} = \\begin{bmatrix} 17 & 8 \\\\ 8 & 17 \\end{bmatrix}$  ",
        "**Step 2: Find Eigenvalues of $AA^T$.**  ",
        "Characteristic Equation: $(17-\\lambda)^2 - 64 = 0 \\implies \\lambda_1 = 25, \\lambda_2 = 9$.  ",
        "Singular values: $\\sigma_1 = \\sqrt{25} = 5, \\sigma_2 = \\sqrt{9} = 3$.  ",
        "**Step 3: Find Right Singular Vectors ($V$).**  ",
        "Solve for eigenvectors of $A^T A$: $\\mathbf{v}_1 = [\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}, 0]^T, \\mathbf{v}_2 = [\\frac{1}{\\sqrt{18}}, -\\frac{1}{\\sqrt{18}}, \\frac{4}{\\sqrt{18}}]^T$.  ",
        "**Step 4: Compute Left Singular Vectors ($U$).**  ",
        "$U = \\begin{bmatrix} \\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} \\\\ \\frac{1}{\\sqrt{2}} & -\\frac{1}{\\sqrt{2}} \\end{bmatrix}$  ",
        "**Step 5: Final Equation.**  ",
        "$A = U \\Sigma V^T$: The final map of your data's latent structure."
      ],
      code: "import numpy as np\nA = np.array([[3, 2, 2], [2, 3, -2]])\nU, S, Vt = np.linalg.svd(A)\n\nprint(f\"Singular Values: {S}\")\nprint(f\"Left Singular Vectors (U):\\n{U}\")",
      output: "Singular Values: [5. 3.]\nLeft Singular Vectors (U):\n[[ 0.70710678  0.70710678]\n [ 0.70710678 -0.70710678]]"
    }
  ],
  tags: ["Decomposition", "Compression", "PCA", "Singular Values", "Normalization"],
  level: "Advanced"
};
