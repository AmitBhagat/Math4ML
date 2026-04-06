import { TopicSection } from '../../src/data/types';

export const matrixPropertiesSection: TopicSection = {
  id: "matrix-properties",
  title: "Introduction to Matrix Properties",
  description: "Matrix properties like Rank, Determinant, Trace, and Positive Definiteness act as the \"DNA\" of a matrix. They tell us whether a system of equations has a solution, how a transformation scales space, and whether an optimization problem (like training a model) has a stable minimum.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Linear Algebra · Matrix Properties</div>
      <h1>Introduction to Matrix Properties</h1>
      <p>Matrix properties like <strong>Rank</strong>, <strong>Determinant</strong>, <strong>Trace</strong>, and <strong>Positive Definiteness</strong> act as the "DNA" of a matrix. They tell us whether a system of equations has a solution, how a transformation scales space, and whether an optimization problem (like training a model) has a stable minimum.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#rank">1. Rank of a Matrix</a>
      <a href="#det">2. Determinant</a>
      <a href="#trace">3. Trace</a>
      <a href="#pd">4. Positive Definiteness</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li>Understanding of <strong>Matrices</strong> (Multiplication and Identity).</li>
        <li>Basic concept of <strong>Linear Independence</strong>.</li>
      </ul>
    </div>

    <h2 id="rank">1. Rank of a Matrix</h2>
    <p>The <strong>Rank</strong> of a matrix represents the number of linearly independent rows or columns in the matrix.</p>

    <h3>Core Theory</h3>
    <p>Rank tells us the "true dimensionality" of the information contained in a matrix. If a \(3 \times 3\) matrix has a rank of 2, it means one row is a redundant combination of the others, and the matrix effectively operates in 2D space.</p>
    <ul>
      <li><strong>Full Rank:</strong> When \(\text{rank}(A) = \min(m, n)\).</li>
      <li><strong>Rank Deficient:</strong> When \(\text{rank}(A) < \min(m, n)\).</li>
    </ul>

    <h3>Mathematical Derivation</h3>
    <p>The rank is often found by converting a matrix to <strong>Row Echelon Form (REF)</strong> using Gaussian elimination. The number of non-zero rows in REF is the rank.</p>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: Computing the Rank</h4>
      <p>Find the rank of \(A = \begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix}\).</p>
      <ol>
        <li>Perform row operation: \(R_2 \to R_2 - 2R_1\).</li>
        <li>\(A \to \begin{bmatrix} 1 & 2 \\ 0 & 0 \end{bmatrix}\).</li>
      </ol>
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> Rank is 1. (The rows are linearly dependent).</div></div>
    </div>

    <h2 id="det">2. Determinant (det(A) or |A|)</h2>
    <p>The <strong>Determinant</strong> is a scalar value that can be calculated from a square matrix.</p>

    <h3>Core Theory</h3>
    <p>Geometrically, the determinant represents the <strong>scaling factor</strong> of the linear transformation described by the matrix.</p>
    <ul>
      <li>If \(\det(A) = 0\), the matrix is <strong>singular</strong> (non-invertible) and "squashes" space into a lower dimension.</li>
      <li>If \(\det(A) = 1\), the transformation preserves volume.</li>
    </ul>

    <h3>Mathematical Derivation (for 2×2)</h3>
    <p>For \(A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}\):</p>
    <div class="math-block">$$\det(A) = ad - bc$$</div>
    <p>For a \(3 \times 3\) matrix, use cofactor expansion.</p>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: Computing the Determinant</h4>
      <p>\(A = \begin{bmatrix} 3 & 1 \\ 2 & 2 \end{bmatrix}\).</p>
      <div class="math-block">$$\det(A) = (3 \times 2) - (1 \times 2) = 6 - 2 = 4$$</div>
      <p><strong>Interpretation:</strong> This transformation increases the area of any shape by a factor of 4.</p>
    </div>

    <h2 id="trace">3. Trace (tr(A))</h2>
    <p>The <strong>Trace</strong> of a square matrix is the sum of its diagonal elements.</p>

    <h3>Core Theory</h3>
    <p>The trace is invariant under a change of basis. In ML, it is often used in the context of <strong>Matrix Derivatives</strong> and is related to the sum of the matrix's eigenvalues.</p>

    <h3>Mathematical Derivation</h3>
    <p>For \(A \in \mathbb{R}^{n \times n}\):</p>
    <div class="math-block">$$tr(A) = \sum_{i=1}^{n} a_{ii}$$</div>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: Computing the Trace</h4>
      <p>\(A = \begin{bmatrix} 5 & 2 & 1 \\ 0 & -1 & 4 \\ 3 & 1 & 10 \end{bmatrix}\).</p>
      <div class="math-block">$$tr(A) = 5 + (-1) + 10 = 14$$</div>
    </div>

    <h2 id="pd">4. Positive Definiteness</h2>
    <p>A symmetric matrix \(A\) is <strong>Positive Definite (PD)</strong> if for every non-zero vector \(\mathbf{x}\), the scalar \(\mathbf{x}^T A \mathbf{x}\) is strictly positive.</p>

    <h3>Core Theory</h3>
    <p>This property is critical in <strong>Optimization</strong>. If the Hessian matrix (matrix of second derivatives) of a loss function is Positive Definite, the function is locally convex, meaning any local minimum is a global minimum.</p>
    <ul>
      <li><strong>Positive Semi-Definite (PSD):</strong> \(\mathbf{x}^T A \mathbf{x} \geq 0\).</li>
    </ul>

    <h3>Mathematical Derivation</h3>
    <p>A matrix \(A\) is PD if:</p>
    <ol>
      <li>All its <strong>Eigenvalues</strong> are positive \((\lambda_i > 0)\).</li>
      <li>All its leading principal minors have positive determinants.</li>
    </ol>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: Testing Positive Definiteness</h4>
      <p>Is \(A = \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix}\) Positive Definite?</p>
      <p>Let \(\mathbf{x} = [x_1, x_2]^T\):</p>
      <div class="math-block">$$\mathbf{x}^T A \mathbf{x} = [x_1, x_2] \begin{bmatrix} 2x_1 \\ 3x_2 \end{bmatrix} = 2x_1^2 + 3x_2^2$$</div>
      <p>Since squares are always non-negative and \(\mathbf{x}\) is non-zero, the result is always \(> 0\).</p>
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> Yes, it is Positive Definite.</div></div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

A = np.array([[3, 1], [2, 2]])

# Rank
rank = np.linalg.matrix_rank(A)

# Determinant
det = np.linalg.det(A)

# Trace
trace = np.trace(A)

# Positive Definiteness (Checking eigenvalues)
eigenvalues = np.linalg.eigvals(A)
is_pd = np.all(eigenvalues > 0)

print(f"Rank: {rank}, Det: {det}, Trace: {trace}, Is PD: {is_pd}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Rank:</strong> Used in <strong>Low-Rank Approximation</strong> (SVD) to compress images or recommendation system matrices.</li>
      <li><strong>Determinant:</strong> Used in <strong>Gaussian Mixture Models (GMM)</strong> and calculating the Normal distribution's probability density.</li>
      <li><strong>Positive Definiteness:</strong> Used in <strong>Kernel Methods (SVM)</strong> and ensuring that <strong>Covariance Matrices</strong> are valid.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Rank</strong> = Dimensionality.</li>
      <li><strong>Determinant</strong> = Volume scaling (must be \(\neq 0\) for inversion).</li>
      <li><strong>Positive Definiteness</strong> = Guaranteed "bowl-shaped" (convex) optimization surface.</li>
    </ul>

    <div class="linking-rule">
      <strong>Linking Rule:</strong> These properties allow us to analyze the stability of our models. Next, we will explore <strong>Eigenvalues and Eigenvectors</strong>, which use these properties to decompose matrices into their simplest, most informative components.
    </div>
  `
};
