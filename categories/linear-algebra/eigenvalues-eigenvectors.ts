import { TopicSection } from '../../src/data/types';

export const eigenvaluesEigenvectorsSection: TopicSection = {
  id: "eigenvalues-eigenvectors",
  title: "Eigenvalues and Eigenvectors",
  description: "Eigenvectors are the 'Hidden Axes' of a matrix that don't rotate when transformed. Eigenvalues tell you how much they stretch.",
  color: "#3F51B5",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Linear Algebra · Eigenpairs</div>
      <h1>Eigenvalues & Eigenvectors</h1>
      <p>An <strong>Eigenvector</strong> is a vector that, when multiplied by a matrix, <strong>never changes direction</strong>—it only scales. The <strong>Eigenvalue</strong> \(\lambda\) is the scaling factor. They are the "Fingerprints" of a linear transformation.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example-diagonal">Example 1: Finding Hidden Axes</a>
      <a href="#example-chareq">Example 2: Characteristic Equation Walkthrough</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>Normally, when you multiply a vector by a matrix, it gets rotated and stretched into chaos. But for every matrix, there are a few "Special directions" that stay perfectly still. If you know these directions, you can simplify the entire matrix into a set of simple stretches. This is how we find <strong>Principal Components</strong> in data.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of Eigenvectors like the <strong>Axes of Rotation</strong>. 
        If you spin a globe, every point moves—except for the North and South Poles. 
        The "Line through the Poles" is the <strong>Eigenvector</strong>. 
        It stays in place while everything else transforms around it.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>A vector \(\mathbf{v}\) is an eigenvector if:</p>
    <div class="math-block">$$A\mathbf{v} = \lambda\mathbf{v}$$</div>
    <p>To find \(\lambda\), we solve the <strong>Characteristic Equation</strong>:</p>
    <div class="math-block">$$\det(A - \lambda I) = 0$$</div>

    <h2 id="example-diagonal">Example 1: Finding Hidden Axes</h2>
    <div class="example-box">
      <h4>Problem: Identifying Eigenvalues for a Diagonal Matrix</h4>
      <p>For \(A = \begin{bmatrix} 3 & 0 \\ 0 & 2 \end{bmatrix}\), find the eigenpairs.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identify:</strong> Scaling is 3x on x and 2x on y.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Check:</strong> Multiplying \([1, 0]\) gives \([3, 0]\). Direct 3x scale.</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Check:</strong> Multiplying \([0, 1]\) gives \([0, 2]\). Direct 2x scale.</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> \(\lambda_1 = 3, \mathbf{v}_1 = [1, 0]\) and \(\lambda_2 = 2, \mathbf{v}_2 = [0, 1]\). Diagonal matrices already show their eigen-secrets!
        </div>
      </div>
    </div>

    <h2 id="example-chareq">Example 2: Characteristic Equation Walkthrough</h2>
    <div class="example-box">
      <h4>Problem: Solxing for λ of A = [[4, 1], [2, 3]]</h4>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Set up:</strong> \(\det(A - \lambda I) = (4-\lambda)(3-\lambda) - 2 = 0\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Factor:</strong> \(\lambda^2 - 7\lambda + 10 = 0 \to (\lambda - 5)(\lambda - 2) = 0\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Result:</strong> \(\lambda = 5, 2\).</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> \(\lambda = 5\) is your "Main Signal." The direction corresponding to this eigenvalue contains the most <strong>Variance</strong> in your data.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

A = np.array([[4, 1], [2, 3]])

# Calculating eigenvalues and eigenvectors
vals, vecs = np.linalg.eig(A)

print(f"Eigenvalues: {vals}")
print(f"Eigenvectors:\n{vecs}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Principal Component Analysis (PCA)</strong>: Finding the eigenvectors of the data's covariance matrix to reduce dimensions.</li>
      <li><strong>Google PageRank</strong>: Your search results are ranked based on the leading eigenvector of a massive "Web matrix."</li>
      <li><strong>Spectral Clustering</strong>: Using eigenvalues to find groups (clusters) in complex data networks.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Some matrices have "Good Behavior" and always produce positive scaling factors. Explore <strong><a href="#/mathematics/linear-algebra/positive-definite">Positive Definite Matrices</a></strong>.
    </div>
  `
};
