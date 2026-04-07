import { TopicSection } from '../../src/data/types';

export const eigenvaluesEigenvectorsPcaSection: TopicSection = {
  id: "eigenvalues-eigenvectors-pca",
  title: "Solved Examples: Eigenvalues, Eigenvectors, and PCA",
  description: "Practical, step-by-step examples to solidify your understanding of Eigenvalues, Eigenvectors, and Principal Component Analysis (PCA). Each example walks through the complete solution with all intermediate steps shown.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📉 Linear Algebra · Principal Component Analysis</div>
      <h1>Principal Component Analysis (PCA) Walkthrough</h1>
      <p>PCA is the crown jewel of dimensionality reduction. It bridges the gap between <strong>Linear Algebra</strong> (SVD/Eigenvectors) and <strong>Statistics</strong> (Variance/Covariance) to simplify high-dimensional data without losing its soul.</p>
    </div>

    <visualizer topic="PCA" />

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">1. The Intuition: Variance as Information</a>
      <a href="#derivation">2. Mathematical Derivation (The 5 Steps)</a>
      <a href="#ex1">3. Solved Practice Case: Finding Eigen-pairs</a>
      <a href="#ex2">4. Solved Practice Case: Variance Selection</a>
      <a href="#ex3">5. Solved Practice Case: Interpreting PC1</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#summary-table">Summary Table</a>
    </div>

    <h2 id="theory">1. The Intuition: Variance as Information</h2>
    <p>In Machine Learning, we assume that the directions in which data varies the most are the directions that contain the most <strong>information</strong>. PCA finds these directions (Principal Components) and ignores the noise.</p>
    <div class="example-box">
      <h4>Age vs. Income (2D to 1D)</h4>
      <p>Imagine Age and Income are highly correlated. Instead of using two features, PCA finds the "trend line" (PC1) that explains most of the spread. By projecting data onto this 1D line, we capture the "Age-Income" effect while reducing dimensionality by 50%.</p>
    </div>

    <h2 id="derivation">2. Mathematical Derivation (The 5 Steps)</h2>
    <p>This is the formal process for transforming a high-dimensional dataset \(X\) into a lower-dimensional subspace:</p>
    <div class="step-box"><span class="step-num">1</span><strong>Standardize:</strong> Mean-center the data (\(X_{centered} = X - \mu\)) so the data cloud is centered at the origin.</div>
    <div class="step-box"><span class="step-num">2</span><strong>Covariance Matrix:</strong> Compute \(C = \frac{1}{m-1} X^T X\) to measure how features vary together.</div>
    <div class="step-box"><span class="step-num">3</span><strong>Eigen-decomposition:</strong> Solve the characteristic equation \(Cv = \lambda v\). Eigenvectors define the new axes; eigenvalues define their "strength."</div>
    <div class="step-box"><span class="step-num">4</span><strong>Sort & Select:</strong> Rank eigenvalues in descending order. Pick the top \(k\) (where \(k < n\)) to form a projection matrix \(W\).</div>
    <div class="step-box"><span class="step-num">5</span><strong>Project:</strong> Transform the original data into the new subspace via \(X_{new} = X_{centered} \cdot W\).</div>

    <h2 id="examples">3. Solved Practice Examples</h2>

    <!-- EXAMPLE 1 -->
    <div class="solved-card" id="ex1">
      <div class="solved-header">
        <div class="solved-num">1</div>
        <div class="solved-title">Finding Eigenvalues and Eigenvectors</div>
      </div>
      <div class="solved-body">
        <div class="problem-box">
          <div class="problem-label">Problem</div>
          Find the eigenvalues and eigenvectors for the matrix \(A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}\).
        </div>

        <div class="step-label">Step 1: Set up the Characteristic Equation</div>
        <div class="math-block">$$\det(A - \lambda I) = 0 \implies \begin{vmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{vmatrix} = 0$$</div>

        <div class="step-label">Step 2: Solve the Quadratic Equation</div>
        <div class="math-block">$$\lambda^2 - 7\lambda + 10 = 0 \implies (\lambda - 5)(\lambda - 2) = 0$$</div>
        <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body">The <strong>Eigenvalues</strong> are \(\lambda_1 = 5\) and \(\lambda_2 = 2\).</div></div>

        <div class="step-label">Step 3: Find Eigenvectors for λ₁ = 5</div>
        <div class="math-block">$$(A - 5I)v = 0 \implies \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$</div>
        <p>From the first row: \(-x + y = 0 \implies x = y\). One possible <strong>Eigenvector</strong> is \(v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}\).</p>
      </div>
    </div>

    <!-- EXAMPLE 2 -->
    <div class="solved-card" id="ex2">
      <div class="solved-header">
        <div class="solved-num">2</div>
        <div class="solved-title">PCA Selection (Variance Explained)</div>
      </div>
      <div class="solved-body">
        <div class="problem-box">
          <div class="problem-label">Problem</div>
          If \(\lambda_1 = 15\), \(\lambda_2 = 4\), and \(\lambda_3 = 1\), how much variance is retained in 2D?
        </div>

        <p>Total Variance = \(15 + 4 + 1 = 20\). Sum of top 2 = \(15 + 4 = 19\).</p>
        <div class="math-block">$$\frac{19}{20} \times 100 = 95\%$$</div>

        <div class="conclusion">
          <strong>Conclusion:</strong> By keeping the first two principal components, you retain <strong>95%</strong> of the original information while reducing the dimensionality.
        </div>
      </div>
    </div>

    <!-- EXAMPLE 3 -->
    <div class="solved-card" id="ex3">
      <div class="solved-header">
        <div class="solved-num">3</div>
        <div class="solved-title">PCA Interpretation: The "Size" Axis</div>
      </div>
      <div class="solved-body">
        <div class="problem-box">
          <div class="problem-label">Problem</div>
          In a dataset measuring "Height" and "Weight," \(v_1 = \begin{pmatrix} 0.707 \\ 0.707 \end{pmatrix}\) with \(\lambda_1 = 50\). What does this tell you?
        </div>

        <div class="step-label">Interpretation of Eigenvector (v₁)</div>
        <p>Since both components are positive and equal, this eigenvector represents an axis where Height and Weight increase together. This is the <strong>"Size"</strong> component. It shows the direction of maximum correlation.</p>
        <div class="callout info"><div class="callout-icon">ℹ️</div><div class="callout-body">The equal weighting (\(0.707 \approx 1/\sqrt{2}\)) means both Height and Weight contribute equally — a diagonal axis at 45° in the Height-Weight plane.</div></div>

        <div class="step-label">Interpretation of Eigenvalue (λ₁ = 50)</div>
        <p>A value of 50 indicates that a significant portion of the total spread (variance) is captured along this "Size" axis rather than by looking at height or weight individually.</p>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

# 1. Create Synthetic 2D Data
X = np.array([[2.5, 2.4], [0.5, 0.7], [2.2, 2.9], [1.9, 2.2], [3.1, 3.0]])

# 2. Standardization & Covariance
X_centered = X - np.mean(X, axis=0)
cov_mat = np.cov(X_centered, rowvar=False)

# 3. Eigen-decomposition
eigen_values, eigen_vectors = np.linalg.eigh(cov_mat)

# 4. Sort and Project (Top 1 PC)
idx = np.argsort(eigen_values)[::-1]
v1 = eigen_vectors[:, idx[0]]
X_pca = X_centered @ v1

print("PCA 1D Projection:", X_pca)
    </python-code>

    <!-- SUMMARY TABLE -->
    <h2 id="summary-table">Summary Table for Quick Revision</h2>
    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Concept</th><th>Math Tool</th><th>Purpose</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Centering</strong></td><td>Arithmetic Mean</td><td>Removes bias; shifts data to origin.</td></tr>
          <tr><td><strong>Relationship</strong></td><td>Covariance Matrix</td><td>Measures how features change together.</td></tr>
          <tr><td><strong>Directions</strong></td><td>Eigenvectors</td><td>Defines the "Principal Components".</td></tr>
          <tr><td><strong>Importance</strong></td><td>Eigenvalues</td><td>Tells us how much variance each PC captures.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> With Linear Algebra mastered, we can move into the world of uncertainty: <strong><a href="#/mathematics/probability/basic-axioms">Basic Axioms of Probability</a></strong>.
    </div>
  `
};
