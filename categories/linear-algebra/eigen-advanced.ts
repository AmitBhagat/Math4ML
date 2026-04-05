import { TopicSection } from '../../src/data/types';

export const eigenAdvancedSection: TopicSection = {
  id: "eigen-advanced",
  title: "Eigen-analysis & Latent Factors: The Spectral Soul of Data",
  description: "A theoretical deep dive into the hidden axes of data—covering Principal Component Analysis (PCA), Spectral Clustering, and the low-rank approximations that power modern recommendation systems.",
  formula: "A\\mathbf{v} = \\lambda\\mathbf{v}, \\quad C = Q\\Lambda Q^T, \\quad A \\approx UV^T",
  details: [
    "Eigen-analysis: Scaling without Rotation",
    "The Spectral Theorem: Orthogonal Decomposition of Symmetric Matrices",
    "PCA: Information Maximization via Variance Capture",
    "Spectral Clustering: Graph Laplacians and Non-Convex Clusters",
    "Matrix Factorization: User-Item Latent Embedding Spaces",
    "Numerical Implementation: Eigen-solvers and Rank-k SVD"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Spectral Content</div>
      <a href="#eigen">I. Eigen-analysis and Spectral Foundations</a>
      <a href="#pca">II. Principal Component Analysis (PCA)</a>
      <a href="#factorization">III. Latent Factor Models: Matrix Factorization</a>
      <a href="#lab">Spectral Computation: NumPy</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="eigen" class="premium-h2">I. Eigen-analysis and Spectral Foundations</h2>
    <p>Eigen-analysis reveals the hidden structure of a dataset. For a square matrix $A$, an <strong>eigenvector</strong> $\mathbf{v}$ and its corresponding <strong>eigenvalue</strong> $\lambda$ define a direction where the transformation involves only scaling, not rotation.</p>

    <div class="premium-math-block">
      A \mathbf{v} = \lambda \mathbf{v}
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">The Spectral Theorem</div>
      <p style="margin:0">Any symmetric real matrix has a full set of orthonormal eigenvectors, allowing for the diagonal decomposition $A = Q \Lambda Q^T$. This theorem provides the mathematical foundation for Principal Component Analysis and many spectral clustering techniques.</p>
    </div>

    <!-- SECTION 2 -->
    <h2 id="pca" class="premium-h2">II. Principal Component Analysis (PCA)</h2>
    <p>PCA rotates data into a new coordinate system where the first few axes (the Principal Components) capture the maximum possible variance. Geometrically, this means solving the eigenvalue problem for the <strong>Covariance Matrix</strong> $C$.</p>

    <div class="premium-callout info">
      <div class="premium-callout-icon">📊</div>
      <div class="premium-callout-body">
        <strong>Information Maximization:</strong> PCA identifies the directions in the feature space where data 'spread' is greatest. Dropping eigenvectors with small eigenvalues allows for dimensionality reduction while preserving the core informational manifold.
      </div>
    </div>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Technique</th><th>Core Operator</th><th>Primary Application</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>PCA</strong></td><td>Covariance Matrix ($C$)</td><td>Dimensionality Reduction</td></tr>
          <tr><td><strong>Spectral Clustering</strong></td><td>Graph Laplacian ($L$)</td><td>Non-linear / Graph Grouping</td></tr>
          <tr><td><strong>PageRank</strong></td><td>Transition Matrix ($M$)</td><td>Node Importance Ranking</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 3 -->
    <h2 id="factorization" class="premium-h2">III. Latent Factor Models: Matrix Factorization</h2>
    <p>Matrix Factorization decomposes a large, sparse matrix $A$ (such as a user-item rating matrix) into low-rank representations that reveal <strong>Latent Factors</strong>.</p>

    <div class="premium-case-study">
      <h4>Optimization Objective</h4>
      <p>The goal is to find two matrices $U$ and $V$ such that their product approximates the original data while minimizing the Frobenius norm of the error:</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        \min_{U,V} \|A - UV^T\|_F^2
      </div>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Spectral Computation: NumPy</h2>
    <div class="premium-math-block">
      <python-code>
import numpy as np

# 1. Full Spectral Analysis of a Symmetric Matrix
C = np.array([[3, 1], [1, 3]])
eigvals, eigvecs = np.linalg.eigh(C)

# 2. PCA Flow (Data Centering is Critical)
X = np.array([[1, 2], [2, 3], [3, 4]])
X_centered = X - np.mean(X, axis=0)
cov_mat = np.cov(X_centered, rowvar=False)
pc_vals, pc_vecs = np.linalg.eig(cov_mat)

# 3. Explained Variance Ratio
variance_explained = pc_vals / np.sum(pc_vals)

print(f"Spectral Eigenvalues: {eigvals}")
print(f"PCA Variance Captured: {variance_explained}")
print(f"Principal Components (Axes):\n{pc_vecs}")
      </python-code>
    </div>
  `
};
