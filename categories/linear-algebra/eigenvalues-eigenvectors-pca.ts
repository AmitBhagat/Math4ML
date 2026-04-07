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
      <a href="#examples">3. Solved Practice Examples</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#summary-table">Summary Table</a>
    </div>

    <h2 id="theory">1. The Intuition: Variance as Information</h2>
    <p>In Machine Learning, we assume that the directions in which data varies the most are the directions that contain the most <strong>information</strong>. PCA finds these directions (Principal Components) and ignores the noise.</p>
    <div class="example-box">
      <h4>Age vs. Income (2D to 1D)</h4>
      <p>Imagine Age and Income are highly correlated. Instead of using two features, PCA finds the "trend line" (PC1) that explains most of the spread. By projecting data onto this 1D line, we capture the "Age-Income" effect while reducing dimensionality by 50%.</p>
    </div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> PCA works because it assumes <strong>Variance = Information</strong>. If a feature doesn't change much, it's probably noise. PCA rotates the coordinate system until the first axis (PC1) points toward the greatest spread of data.
      </div>
    </div>

    <h2 id="derivation">2. Mathematical Derivation (The 5 Steps)</h2>
    <p>This is the formal process for transforming a high-dimensional dataset \(X\) into a lower-dimensional subspace:</p>
    <div class="step-box"><span class="step-num">1</span><strong>Standardize:</strong> Mean-center the data (\(X_{centered} = X - \mu\)) so the data cloud is centered at the origin.</div>
    <div class="step-box"><span class="step-num">2</span><strong>Covariance Matrix:</strong> Compute \(C = \frac{1}{m-1} X^T X\) to measure how features vary together.</div>
    <div class="step-box"><span class="step-num">3</span><strong>Eigen-decomposition:</strong> Solve the characteristic equation \(Cv = \lambda v\). Eigenvectors define the new axes; eigenvalues define their "strength."</div>
    <div class="step-box"><span class="step-num">4</span><strong>Sort & Select:</strong> Rank eigenvalues in descending order. Pick the top \(k\) (where \(k < n\)) to form a projection matrix \(W\).</div>
    <div class="step-box"><span class="step-num">5</span><strong>Project:</strong> Transform the original data into the new subspace via \(X_{new} = X_{centered} \cdot W\).</div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> The <strong>Covariance Matrix</strong> $C$ is the bridge. It tells us which features move together. By finding the eigenvectors of $C$, we are finding the natural "skeleton" of the data distribution. Rank the eigenvalues, and you've ranked the features by information density.
      </div>
    </div>

    <h2 id="examples">3. Solved Practice Examples</h2>

    <h3>Illustrative Example: Finding Eigenvalues & Eigenvectors</h3>
    <div class="example-box">
      <h4>Problem: Manual Eigen-decomposition</h4>
      <p>Find the eigenvalues and eigenvectors for the matrix \(A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Solve the Characteristic Equation:</strong> \(\det(A - \lambda I) = 0 \implies \lambda^2 - 7\lambda + 10 = 0\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Factor the Quadratic:</strong> \((\lambda - 5)(\lambda - 2) = 0 \implies \lambda_1 = 5, \lambda_2 = 2\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Compute Eigenvector for \(\lambda_1=5\):</strong> Solve \((A-5I)\mathbf{v}=0 \implies \mathbf{v}_1 = [1, 1]^T\).</div></div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body">The <strong>Eigenvalues</strong> are \(\lambda_1 = 5\) and \(\lambda_2 = 2\). The primary axis of variance is the vector \([1, 1]\).</div></div>
    </div>

    <h3>Illustrative Example: Variance Selection</h3>
    <div class="example-box">
      <h4>Problem: Dimensionality Reduction Decision</h4>
      <p>If \(\lambda_1 = 15\), \(\lambda_2 = 4\), and \(\lambda_3 = 1\), how much variance is retained if we reduce to 2D?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Sum All Eigenvalues:</strong> \(\sum \lambda = 15 + 4 + 1 = 20\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Reconstructed Sum:</strong> \(15 + 4 = 19\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Calculate Ratio:</strong> \(\frac{19}{20} = 95\%\).</div></div>

      <div class="callout info"><div class="callout-icon">ℹ️</div><div class="callout-body"><strong>Conclusion:</strong> Keeping the first two components retains <strong>95%</strong> of original info.</div></div>
    </div>

    <h3>Illustrative Example: Interpreting PC Axes</h3>
    <div class="example-box">
      <h4>Problem: The "Size" Component in Height-Weight Data</h4>
      <p>In a dataset measuring Height and Weight, the first PC is \(\mathbf{v}_1 = [0.707, 0.707]\). What is its physical meaning?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Analyze Contributions:</strong> Both components are positive and equal.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Deduce Meaning:</strong> This axis represents a simultaneous increase in both features.</div></div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Interpretation:</strong> PC1 represents the <strong>"Overall Size"</strong> of the person. It captures the shared variance where taller people tend to be heavier.</div></div>
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
