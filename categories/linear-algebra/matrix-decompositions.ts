import { TopicSection } from '../../src/data/types';

export const matrixDecompositionsSection: TopicSection = {
  id: "matrix-decompositions",
  title: "Introduction to Matrix Decompositions",
  description: "In Machine Learning, Matrix Decomposition (or Factorization) is the process of breaking down a matrix into a product of simpler, constituent matrices. This is analogous to factoring a number (e.g., 15 = 3 × 5). Decomposing a matrix makes it easier to solve linear equations, invert matrices, and compress data.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔀 Linear Algebra · Matrix Decompositions</div>
      <h1>Introduction to Matrix Decompositions</h1>
      <p>In Machine Learning, <strong>Matrix Decomposition</strong> (or Factorization) is the process of breaking down a matrix into a product of simpler, constituent matrices. This is analogous to factoring a number (e.g., \(15 = 3 \times 5\)). Decomposing a matrix makes it easier to solve linear equations, invert matrices, and compress data.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#lu">1. LU Decomposition</a>
      <a href="#cholesky">2. Cholesky Decomposition</a>
      <a href="#qr">3. QR Decomposition</a>
      <a href="#svd">4. Singular Value Decomposition (SVD)</a>
      <a href="#implementation">Implementation (Python/NumPy/SciPy)</a>
      <a href="#summary">Summary Table</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Matrix Multiplication:</strong> \(AB = C\).</li>
        <li><strong>Orthonormal Matrices:</strong> \(Q^T Q = I\) (columns are unit vectors and orthogonal).</li>
        <li><strong>Triangular Matrices:</strong> Upper (\(U\)) or Lower (\(L\)) where all elements above/below the diagonal are zero.</li>
      </ul>
    </div>

    <h2 id="lu">1. LU Decomposition</h2>
    <p>LU Decomposition factors a square matrix \(A\) into a <strong>Lower Triangular</strong> matrix (\(L\)) and an <strong>Upper Triangular</strong> matrix (\(U\)).</p>

    <h3>Core Theory</h3>
    <p>It is primarily used to solve systems of linear equations (\(Ax = b\)). Instead of calculating a costly inverse, we solve two simpler triangular systems: \(Ly = b\) and then \(Ux = y\).</p>

    <h3>Mathematical Derivation</h3>
    <p>For \(A \in \mathbb{R}^{n \times n}\):</p>
    <div class="math-block">$$A = LU$$</div>
    <p>Where:</p>
    <div class="math-block">$$L = \begin{bmatrix} 1 & 0 \\ l_{21} & 1 \end{bmatrix} \quad \text{and} \quad U = \begin{bmatrix} u_{11} & u_{12} \\ 0 & u_{22} \end{bmatrix}$$</div>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: LU Factorization</h4>
      <p>Factor \(A = \begin{bmatrix} 2 & 3 \\ 8 & 15 \end{bmatrix}\).</p>
      <ol>
        <li>Set \(u_{11} = 2, u_{12} = 3\).</li>
        <li>Find \(l_{21}\) such that \(l_{21} \times 2 = 8 \implies l_{21} = 4\).</li>
        <li>Find \(u_{22}\) such that \((4 \times 3) + u_{22} = 15 \implies u_{22} = 3\).</li>
      </ol>
      <div class="math-block">$$L = \begin{bmatrix} 1 & 0 \\ 4 & 1 \end{bmatrix}, \quad U = \begin{bmatrix} 2 & 3 \\ 0 & 3 \end{bmatrix}$$</div>
    </div>

    <h2 id="cholesky">2. Cholesky Decomposition</h2>
    <p>Cholesky Decomposition is a special case of LU for <strong>Symmetric, Positive Definite</strong> matrices.</p>

    <h3>Core Theory</h3>
    <p>It factors \(A\) into \(LL^T\). Because it exploits symmetry, it is roughly twice as fast as LU decomposition and much more numerically stable.</p>

    <h3>Mathematical Derivation</h3>
    <div class="math-block">$$A = LL^T$$</div>
    <p>Where \(L\) is a lower triangular matrix with positive diagonal entries.</p>

    <h3>Applications in ML</h3>
    <ul>
      <li><strong>Gaussian Processes:</strong> Used to sample from multivariate normal distributions.</li>
      <li><strong>Kalman Filters:</strong> For state estimation in robotics.</li>
    </ul>

    <h2 id="qr">3. QR Decomposition</h2>
    <p>QR Decomposition factors a matrix into an <strong>Orthogonal</strong> matrix (\(Q\)) and an <strong>Upper Triangular</strong> matrix (\(R\)).</p>

    <h3>Core Theory</h3>
    <p>\(Q\) contains orthonormal columns (\(Q^T Q = I\)), meaning it preserves lengths and angles. \(R\) contains the "coefficients" of the transformation. This is widely used to solve the <strong>Least Squares</strong> problem in Linear Regression.</p>

    <h3>Mathematical Derivation</h3>
    <div class="math-block">$$A = QR$$</div>
    <p>Usually computed using the <strong>Gram-Schmidt process</strong> or <strong>Householder reflections</strong>.</p>

    <h2 id="svd">4. Singular Value Decomposition (SVD)</h2>
    <p>SVD is the "Swiss Army Knife" of Linear Algebra. Unlike Eigen-decomposition, it works for <strong>any</strong> \(m \times n\) matrix.</p>

    <h3>Core Theory</h3>
    <p>SVD decomposes a matrix into three parts:</p>
    <ol>
      <li><strong>\(U\):</strong> Left singular vectors (Orthogonal — represents rotations in the output space).</li>
      <li><strong>\(\Sigma\) (Sigma):</strong> Singular values (Diagonal — represents scaling factors).</li>
      <li><strong>\(V^T\):</strong> Right singular vectors (Orthogonal — represents rotations in the input space).</li>
    </ol>

    <h3>Mathematical Derivation</h3>
    <div class="math-block">$$A = U \Sigma V^T$$</div>
    <p>The singular values in \(\Sigma\) are the square roots of the eigenvalues of \(A^T A\).</p>

    <h3>Applications in ML</h3>
    <ul>
      <li><strong>Image Compression:</strong> Keeping only the largest \(k\) singular values to reconstruct a lower-quality but smaller image.</li>
      <li><strong>Latent Semantic Analysis (LSA):</strong> Finding hidden relationships between documents and terms.</li>
      <li><strong>PCA:</strong> Modern PCA implementations typically use SVD for better numerical stability.</li>
    </ul>

    <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Key Insight:</strong> The singular values in \(\Sigma\) are the square roots of the eigenvalues of \(A^T A\), linking SVD directly to eigenvalue theory.</div></div>

    <h2 id="implementation">Implementation (Python/NumPy/SciPy)</h2>
    <python-code>
import numpy as np
from scipy.linalg import lu, cholesky, qr, svd

A = np.array([[4, 12, -16], [12, 37, -43], [-16, -43, 98]])

# LU Decomposition
P, L, U = lu(A)

# Cholesky (Requires Symmetric Positive Definite)
L_chol = cholesky(A, lower=True)

# QR Decomposition
Q, R = qr(A)

# SVD
U_svd, s, Vh = svd(A)

print(f"SVD Singular Values: {s}")
    </python-code>

    <h2 id="summary">Summary Table</h2>
    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead><tr><th>Decomposition</th><th>Requirements</th><th>Main Use Case</th></tr></thead>
        <tbody>
          <tr><td><strong>LU</strong></td><td>Square Matrix</td><td>Solving linear systems (\(Ax=b\))</td></tr>
          <tr><td><strong>Cholesky</strong></td><td>Symmetric + PD</td><td>Fast optimization, Gaussian sampling</td></tr>
          <tr><td><strong>QR</strong></td><td>Any Matrix</td><td>Linear Regression (Least Squares)</td></tr>
          <tr><td><strong>SVD</strong></td><td>Any Matrix</td><td>Data Compression, PCA, NLP</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>LU/Cholesky</strong> are for efficiency in solving equations.</li>
      <li><strong>QR</strong> is for numerical stability in regression.</li>
      <li><strong>SVD</strong> is for discovering the underlying structure (latent features) of data.</li>
    </ul>

    <div class="linking-rule">
      <strong>Linking Rule:</strong> Having mastered how to decompose data structures, we now have the foundation for <strong>Optimization</strong>. Specifically, we can use these tools to solve for the weights of a model where the "change" in error is minimized using <strong>Calculus</strong>.
    </div>
  `
};
