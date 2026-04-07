import { TopicSection } from '../../src/data/types';

export const matrixDecompositionsSection: TopicSection = {
  id: "matrix-decompositions",
  title: "Matrix Decompositions",
  description: "High-dimensional data can be dense and difficult to manage. Decompositions — SVD, LU, Cholesky, and QR — allow us to break complex matrices into simpler, more manageable factors.",
  color: "#D32F2F",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Linear Algebra · Decompositions</div>
      <h1>Matrix Decompositions</h1>
      <p>In Machine Learning, <strong>Matrix Decomposition</strong> (or Factorization) is the process of breaking down a matrix into a product of simpler, constituent matrices. This is analogous to factoring a number (e.g., \(15 = 3 \times 5\)). Decomposing a matrix makes it easier to solve linear equations, invert matrices, and compress data.</p>
    </div>

    <visualizer topic="Matrices" />

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#lu">1. LU Decomposition</a>
      <a href="#cholesky">2. Cholesky Decomposition</a>
      <a href="#qr">3. QR Decomposition</a>
      <a href="#svd">4. Singular Value Decomposition (SVD)</a>
      <a href="#implementation">Implementation (Python/SciPy)</a>
      <a href="#comparison">Algorithm Complexity & Selection</a>
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
    <p>LU Decomposition factors a square matrix \(A\) into a <strong>Lower Triangular</strong> matrix (\(L\)) and an <strong>Upper Triangular</strong> matrix (\(U\)). It is primarily used to solve systems of linear equations (\(Ax = b\)) efficiently.</p>
    <div class="math-block">$$A = LU \implies \begin{bmatrix} 1 & 0 \\ l_{21} & 1 \end{bmatrix} \begin{bmatrix} u_{11} & u_{12} \\ 0 & u_{22} \end{bmatrix}$$</div>

    <div class="example-box">
      <h4>Problem: LU Factorization</h4>
      <p>Factor \(A = \begin{bmatrix} 2 & 3 \\ 8 & 15 \end{bmatrix}\) into \(L\) and \(U\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Extract Top Row for U:</strong> The first row of \(U\) is simply the first row of \(A\) if \(l_{11}=1\).</div></div>
      <div class="math-block">$$u_{11} = 2, \quad u_{12} = 3$$</div>
      
      <div class="step-box"><span class="step-num">2</span><div><strong>Calculate Multiplier for L:</strong> Find \(l_{21}\) such that \(l_{21} \times u_{11} = 8\).</div></div>
      <div class="math-block">$$l_{21} = 8/2 = 4$$</div>

      <div class="step-box"><span class="step-num">3</span><div><strong>Solve for Remainder in U:</strong> \((4 \times u_{12}) + u_{22} = 15\).</div></div>
      <div class="math-block">$$12 + u_{22} = 15 \implies u_{22} = 3$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> \(L = \begin{bmatrix} 1 & 0 \\ 4 & 1 \end{bmatrix}, \quad U = \begin{bmatrix} 2 & 3 \\ 0 & 3 \end{bmatrix}\). Multiplying them back recovers \(A\).</div></div>
    </div>

    <h2 id="cholesky">2. Cholesky Decomposition</h2>
    <p>Cholesky Decomposition is a special case of LU for <strong>Symmetric, Positive Definite</strong> matrices. It factors \(A\) into \(LL^T\). Because it exploits symmetry, it is roughly twice as fast as LU decomposition and much more numerically stable.</p>
    <h3>Applications in ML</h3>
    <ul>
      <li><strong>Gaussian Processes:</strong> Used to sample from multivariate normal distributions.</li>
      <li><strong>Kalman Filters:</strong> For state estimation in robotics.</li>
    </ul>

    <h2 id="qr">3. QR Decomposition</h2>
    <p>QR Decomposition factors a matrix into an <strong>Orthogonal</strong> matrix (\(Q\)) and an <strong>Upper Triangular</strong> matrix (\(R\)). Since \(Q\) preserves lengths and angles (\(Q^T Q = I\)), this is used to solve the <strong>Least Squares</strong> problem in Linear Regression.</p>

    <div class="example-box">
      <h4>Problem: QR Factorization Intuition</h4>
      <p>Factor \(A = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}\) into \(Q\) and \(R\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Orthogonalize columns (Gram-Schmidt):</strong> Column 1 (\(\mathbf{a}_1\)) is already unit length and along the x-axis.</div></div>
      <div class="math-block">$$\mathbf{q}_1 = [1, 0]^T$$</div>
      
      <div class="step-box"><span class="step-num">2</span><div><strong>Project and Subtract:</strong> Keep the part of \(\mathbf{a}_2\) that is perpendicular to \(\mathbf{q}_1\).</div></div>
      <div class="math-block">$$\mathbf{q}_2 = [0, 1]^T$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> \(Q = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}, \quad R = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}\). In this case, \(A\) was already "mostly" orthogonal.</div></div>
    </div>

    <h2 id="svd">4. Singular Value Decomposition (SVD)</h2>
    <p>SVD is the "Swiss Army Knife" of Linear Algebra. Unlike Eigen-decomposition, it works for <strong>any</strong> \(m \times n\) matrix.</p>
    <div class="math-block">$$A = U \Sigma V^T$$</div>

    <visualizer topic="SVD" />

    <h3>Illustrative Example: SVD Manual Breakdown</h3>
    <div class="example-box">
      <h4>Problem: Decomposing a Scaling Matrix</h4>
      <p>Factor \(A = \begin{bmatrix} 3 & 0 \\ 0 & 2 \end{bmatrix}\) using SVD.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identify Singular Values (\(\Sigma\)):</strong> Since \(A\) is diagonal, the singular values are simply the diagonal elements in descending order.</div></div>
      <div class="math-block">$$\sigma_1 = 3, \quad \sigma_2 = 2 \implies \Sigma = \begin{bmatrix} 3 & 0 \\ 0 & 2 \end{bmatrix}$$</div>
      
      <div class="step-box"><span class="step-num">2</span><div><strong>Left Singular Vectors (U):</strong> These represent the output space rotation. Since no rotation occurred, \(U = I\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Right Singular Vectors (Vᵀ):</strong> These represent the input space rotation. Again, \(V^T = I\).</div></div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> \(A = [I][\text{diag}(3, 2)][I]\). For more complex matrices, \(U\) and \(V\) would contain eigenvectors of \(AA^T\) and \(A^TA\).</div></div>
    </div>

    <h3>Applications in ML</h3>
    <ul>
      <li><strong>Image Compression:</strong> Keeping only the largest \(k\) singular values to reconstruct a smaller image.</li>
      <li><strong>Latent Semantic Analysis (LSA):</strong> Finding hidden relationships in NLP.</li>
      <li><strong>PCA:</strong> Robust implementations typically use SVD for stability.</li>
    </ul>

    <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Key Insight:</strong> The singular values in \(\Sigma\) are the square roots of the eigenvalues of \(A^T A\), linking SVD directly to eigenvalue theory.</div></div>

    <h2 id="implementation">Implementation (Python/SciPy)</h2>
    <python-code>
import numpy as np
from scipy.linalg import lu, qr, cholesky, svd

A = np.array([[4, 12, -16], [12, 37, -43], [-16, -43, 98]])

# LU Decomposition
P, L, U = lu(A)

# Cholesky (Requires Symmetric Positive Definite)
L_chol = cholesky(A, lower=True)

# SVD
U_svd, s, Vh = svd(A)

print(f"SVD Singular Values: {s}")
    </python-code>

    <h2 id="comparison">Algorithm Complexity & Selection</h2>
    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Method</th><th>Complexity</th><th>Requirement</th><th>Best For</th></tr>
        </thead>
        <tbody>
          <tr><td>LU</td><td>\(O(2/3 n^3)\)</td><td>Square</td><td>Systems of Equations</td></tr>
          <tr><td>QR</td><td>\(O(2 n^3)\)</td><td>Any</td><td>Linear Regression</td></tr>
          <tr><td>Cholesky</td><td>\(O(1/3 n^3)\)</td><td>Symm + PD</td><td>Efficient Sampling</td></tr>
          <tr><td>SVD</td><td>\(O(mn^2)\)</td><td>Any</td><td>PCA / NLP / Compression</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>LU/Cholesky</strong> are for efficiency in solving equations.</li>
      <li><strong>QR</strong> is for numerical stability in regression.</li>
      <li><strong>SVD</strong> is for discovering latent structure (latent features) in data.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> SVD directly uses eigenvalues. Now, reach the crown jewel of Linear Algebra: <strong><a href="#/mathematics/linear-algebra/eigenvalues-eigenvectors">Eigenvalues & Eigenvectors</a></strong>.
    </div>
  `
};
