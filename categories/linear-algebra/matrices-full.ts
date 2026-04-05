import { TopicSection } from '../../src/data/types';

export const matricesFullSection: TopicSection = {
  id: "matrices-full",
  title: "Matrix Essentials: The Computational Engine of Data Science",
  description: "A comprehensive analysis of matrices as linear operators—covering multiplication mechanics, transposition, and the numerical stability of inverses in high-dimensional optimization.",
  formula: "\\mathbf{A} \\in \\mathbb{R}^{m \\times n}, \\quad (AB)_{ij} = \\sum A_{ik}B_{kj}, \\quad A A^{-1} = I",
  details: [
    "Matrix Multiplication: Non-Commutativity and Transformation Composition",
    "Transposition and the Adjoint: Aligning Weight Matrices",
    "Identity Matrices: The Unit Operator in Linear Algebra",
    "Matrix Inversion: Existence, Singularity, and Determinants",
    "ML Intuition: Solving Normal Equations in Regression",
    "Computational Complexity: $O(n^3)$ vs. Optimized Parallel Solves"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Module Contents</div>
      <a href="#multiplication">I. Matrix Multiplication Mechanics</a>
      <a href="#transpose">II. Transpose and Identity Mapping</a>
      <a href="#inversion">III. Inversion and Numerical Stability</a>
      <a href="#lab">Numerical Performance Laboratory</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="multiplication" class="premium-h2">I. Matrix Multiplication Mechanics</h2>
    <p>A matrix is more than a grid of numbers; it is a representation of a linear operator that maps one vector space to another. Matrix multiplication is the fundamental operation for composing these transformations.</p>

    <div class="premium-math-block">
      (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj}
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">Core Identities</div>
      <p><strong>Associativity:</strong> $(AB)C = A(BC)$. This allows for efficient re-computation in deep neural networks.</p>
      <p style="margin-top:10px"><strong>Non-Commutativity:</strong> $AB \neq BA$. The order of transformations <strong>matters</strong>. Rotating then scaling a feature space is not the same as scaling then rotating.</p>
    </div>

    <!-- SECTION 2 -->
    <h2 id="transpose" class="premium-h2">II. Transpose and Identity Mapping</h2>
    <p>The <strong>transpose</strong> $A^T$ is obtained by swapping rows and columns ($A^T_{ij} = A_{ji}$). In backpropagation, the transpose of the weight matrix is used to project error signals back into the previous layer's feature space.</p>

    <div class="premium-math-block">
      A I = I A = A
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">🆔</div>
      <div class="premium-callout-body">
        The <strong>Identity Matrix</strong> $I$ acts as the unit operator—it maps every vector to itself. It is a square matrix with ones on the main diagonal and zeros elsewhere.
      </div>
    </div>

    <!-- SECTION 3 -->
    <h2 id="inversion" class="premium-h2">III. Inversion and Numerical Stability</h2>
    <p>For a square matrix $A$, the inverse $A^{-1}$ satisfies $AA^{-1} = I$. The existence of an inverse is contingent on the matrix being <strong>non-singular</strong> (non-zero determinant).</p>

    <div class="premium-math-block">
      A A^-1 = I
    </div>

    <div class="premium-callout warn">
      <div class="premium-callout-icon">⚠️</div>
      <div class="premium-callout-body">
        <strong>Numerical Warning:</strong> Computing $A^{-1}$ directly is computationally expensive ($O(n^3)$) and numerically unstable. In production ML (like solving Normal Equations), <strong>never</strong> use direct inversion; use robust decomposition methods like LU or Cholesky instead.
      </div>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Numerical Performance Laboratory</h2>
    <div class="premium-math-block">
      <python-code>
import numpy as np

A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# 1. High-Performance Multiplication
product = A @ B

# 2. Transpose (View, not copy)
transpose_A = A.T

# 3. Robust Inversion Check
if np.linalg.det(A) != 0:
    A_inv = np.linalg.inv(A)
    # Verification: identity should be [1, 0, 0, 1]
    identity_check = np.round(A @ A_inv, 2)

print(f"Product AB:\n{product}")
print(f"Inverse A:\n{A_inv}")
print(f"Identity Check:\n{identity_check}")
      </python-code>
    </div>
  `
};
