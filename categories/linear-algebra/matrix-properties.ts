import { TopicSection } from '../../src/data/types';

export const matrixPropertiesSection: TopicSection = {
  id: "matrix-properties",
  title: "Matrix Properties: Information, Stability, and Convexity",
  description: "A formal investigation into the intrinsic invariants of matrices—from information capacity (Rank) and volume scaling (Determinant) to the spectral sum (Trace) and the curvature of optimization landscapes (Definiteness).",
  formula: "\\operatorname{rank}(A), \\quad \\det(A), \\quad \\operatorname{tr}(A), \\quad \\mathbf{x}^T M \\mathbf{x} > 0",
  details: [
    "Matrix Rank: Quantifying Independent Information",
    "Rank-Nullity Theorem: The Conservation of Dimensions",
    "Determinants: The Volume Scaling Factor in Probability Flows",
    "Matrix Trace: The Rotation-Invariant Spectral Sum",
    "Definiteness and the Hessian: Testing for Model Convexity",
    "Numerical Implementation: Stability and Rank Estimation"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Spectral Properties</div>
      <a href="#rank">I. Matrix Rank: Information Content</a>
      <a href="#determinant">II. Determinants and Volume Scaling</a>
      <a href="#definiteness">III. Matrix Definiteness and Convexity</a>
      <a href="#lab">Numerical Performance Laboratory</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="rank" class="premium-h2">I. Matrix Rank: Information Content</h2>
    <p>The <strong>rank</strong> of a matrix $A$ represents the maximum number of linearly independent rows or columns. In machine learning, the rank quantifies the intrinsic dimensionality and informational richness of our feature space.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">Rank Cardinality</div>
      <p><strong>Full Rank:</strong> $\operatorname{rank}(A) = \min(m, n)$. No information is lost during the transformation; the mapping is injective or surjective as appropriate.</p>
      <p style="margin-top:10px"><strong>Rank Deficient:</strong> $\operatorname{rank}(A) < \min(m, n)$. Indicates redundant features (multicollinearity), which can lead to numerical instability in optimization.</p>
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">📐</div>
      <div class="premium-callout-body">
        <strong>Rank-Nullity Theorem:</strong> For any linear mapping $A: V \to W$, the sum of the rank and the nullity (dimension of the kernel) is equal to the number of columns: $\operatorname{rank}(A) + \operatorname{null}(A) = n$.
      </div>
    </div>

    <!-- SECTION 2 -->
    <h2 id="determinant" class="premium-h2">II. Determinants and Volume Scaling</h2>
    <p>The <strong>determinant</strong> $\det(A)$ is a scalar value that captures how a linear transformation scales $n$-dimensional volume. A zero determinant implies that the transformation collapses space into a lower dimension, making the matrix singular (non-invertible).</p>

    <div class="premium-math-block">
      \det(A) = \prod_{i=1}^{n} \lambda_i
    </div>

    <p>For a $2 \times 2$ matrix, the determinant represents the area of the parallelogram formed by its column vectors. In probability, the absolute value of the determinant is used as a change-of-variables factor in density transformations.</p>

    <!-- SECTION 3 -->
    <h2 id="definiteness" class="premium-h2">III. Matrix Definiteness and Convexity</h2>
    <p>Definiteness is a property of symmetric matrices that characterizes the curvature of quadratic forms. It is essential for determining the <strong>convexity</strong> of objective functions in machine learning.</p>

    <div class="premium-math-block">
      \mathbf{x}^T M \mathbf{x} > 0 \quad \text{for all } \mathbf{x} \neq \mathbf{0}
    </div>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Definiteness</th><th>Eigenvalue Condition</th><th>Optimization Impact</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Positive Definite (PD)</strong></td><td>All $\lambda_i > 0$</td><td>Global minimum (Strictly Convex)</td></tr>
          <tr><td><strong>Positive Semidefinite (PSD)</strong></td><td>All $\lambda_i \geq 0$</td><td>Local/Global minimum (Convex)</td></tr>
          <tr><td><strong>Negative Definite (ND)</strong></td><td>All $\lambda_i < 0$</td><td>Global maximum (Concave)</td></tr>
          <tr><td><strong>Indefinite</strong></td><td>Mixed $\lambda_i$ signs</td><td>Saddle point</td></tr>
        </tbody>
      </table>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Numerical Performance Laboratory</h2>
    <div class="premium-math-block">
      <python-code>
import numpy as np

# Define a Symmetric Positive Definite Matrix
A = np.array([[4, 2], [2, 3]])

# 1. Scalar Invariants
rank = np.linalg.matrix_rank(A)
determinant = np.linalg.det(A)
trace = np.trace(A)

# 2. Spectral Properties
eigenvalues = np.linalg.eigvals(A)

# 3. Definiteness Check (Cholesky Decomposition)
try:
    np.linalg.cholesky(A)
    is_positive_definite = True
except np.linalg.LinAlgError:
    is_positive_definite = False

print(f"Determinant (Volume Factor): {determinant:.4f}")
print(f"Trace (Spectral Sum): {trace}")
print(f"Eigenvalues: {eigenvalues}")
print(f"Is Positive Definite: {is_positive_definite}")
      </python-code>
    </div>
  `
};
