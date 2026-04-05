import { TopicSection } from '../../src/data/types';

export const decompositionsFullSection: TopicSection = {
  id: "decompositions-full",
  title: "Matrix Decompositions: The Computational Core of AI",
  description: "A formalization of the factorizations that power modern machine learning—from the universal SVD to the high-performance Cholesky and LU engines used in solver backends.",
  formula: "A = U\\Sigma V^T, \\quad PA = LU, \\quad A = LL^T, \\quad A = QR",
  details: [
    "Singular Value Decomposition (SVD): The Spectral Swiss Army Knife",
    "LU Decomposition: Efficient Solving via Triangular Mappings",
    "Cholesky Factorization: Optimal Solving for Positive-Definite Systems",
    "QR Decomposition: Numerical Stability for Linear Least Squares",
    "Eckart-Young Theorem: Optimal Low-Rank Approximations",
    "Numerical Implementation: Benchmarking SVD vs. LU in SciPy"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Factorization Engines</div>
      <a href="#svd">I. Singular Value Decomposition (SVD)</a>
      <a href="#solvers">II. Solver Architectures: LU and Cholesky</a>
      <a href="#qr">III. Numerical Stability: QR Decomposition</a>
      <a href="#lab">Numerical Laboratory: NumPy/SciPy</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="svd" class="premium-h2">I. The Universal Singular Value Decomposition (SVD)</h2>
    <p>The SVD is the "Swiss Army Knife" of linear algebra. Unlike the eigen-decomposition, which only applies to square matrices, every real matrix $A$ can be factored into three structured components.</p>

    <div class="premium-math-block">
      A = U \Sigma V^T
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">SVD Components</div>
      <p><strong>U and V:</strong> Orthogonal matrices representing rotations in the input and output spaces.</p>
      <p style="margin-top:10px"><strong>$\Sigma$:</strong> A diagonal matrix of non-negative "singular values" representing scaling factors along the principal axes.</p>
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">🔭</div>
      <div class="premium-callout-body">
        <strong>Eckart-Young Theorem:</strong> SVD provides the unique optimal low-rank approximation of any matrix. By keeping only the top $k$ singular values, we can compress massive datasets while minimizing information loss (Frobenius norm).
      </div>
    </div>

    <!-- SECTION 2 -->
    <h2 id="solvers" class="premium-h2">II. Solver Architectures: LU and Cholesky</h2>
    <p>Behind every <code class="premium-code">np.linalg.solve</code> call lies a decomposition engine. These factorizations split a matrix into triangular forms, reducing computational complexity to $O(n^3)$ for the initial factor and $O(n^2)$ for subsequent solves.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Decomposition</th><th>Matrix Type</th><th>Computational Logic</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>LU ($PA=LU$)</strong></td><td>General Square</td><td>Gaussian Elimination (Pivoted)</td></tr>
          <tr><td><strong>Cholesky ($A=LL^T$)</strong></td><td>Symmetric PD</td><td>$2 \times$ faster than LU (SPD only)</td></tr>
          <tr><td><strong>LDLT</strong></td><td>General Symmetric</td><td>Avoids square roots in Cholesky</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 3 -->
    <h2 id="qr" class="premium-h2">III. Numerical Stability: QR Decomposition</h2>
    <p>The <strong>QR Decomposition</strong> factors $A$ into an orthogonal matrix $Q$ and an upper triangular matrix $R$. It is the standard algorithm for solving Linear Least Squares problems without squaring the condition number of the data matrix.</p>

    <div class="premium-math-block">
      A = Q R
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Numerical Laboratory: NumPy/SciPy</h2>
    <div class="premium-math-block">
      <python-code>
import numpy as np
import scipy.linalg as la

# 1. Universal Factorization (SVD)
A = np.array([[1, 2, 3], [4, 5, 6]])
U, S, Vt = np.linalg.svd(A)

# 2. Performance Solvers (LU)
P, L, U_lu = la.lu(A)

# 3. Cholesky (Requires Symmetric Positive Definite)
SPD = np.array([[2, -1], [-1, 2]])
L_chol = np.linalg.cholesky(SPD)

print(f"Singular Values: {S}")
print(f"LU (L Matrix):\n{L}")
print(f"Cholesky (L Matrix):\n{L_chol}")
      </python-code>
    </div>
  `
};
