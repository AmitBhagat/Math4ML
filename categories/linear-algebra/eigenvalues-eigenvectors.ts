import { TopicSection } from '../../src/data/types';

export const eigenvaluesEigenvectorsSection: TopicSection = {
  id: "eigenvalues-eigenvectors",
  title: "Introduction to Eigenvalues and Eigenvectors",
  description: "In Linear Algebra, Eigenvalues and Eigenvectors provide a way to decompose a matrix into its most fundamental components. When a linear transformation (represented by a matrix A) is applied to most vectors, they change both their magnitude and their direction. However, Eigenvectors are special vectors that only change in magnitude (scale) when the transformation is applied; their direction remains the same.",
  html: String.raw`
    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#core">1. Core Theory &amp; Mathematical Derivation</a>
      <a href="#core" class="sub">↳ How to Find Eigenvalues &amp; Eigenvectors</a>
      <a href="#core" class="sub">↳ Illustrative Example</a>
      <a href="#pca">2. Principal Component Analysis (PCA)</a>
      <a href="#spectral">3. Spectral Clustering</a>
      <a href="#factorization">4. Matrix Factorization</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Matrix Multiplication:</strong> \(A\mathbf{v}\).</li>
        <li><strong>Determinants:</strong> To solve the characteristic equation.</li>
        <li><strong>Identity Matrix:</strong> \(I\).</li>
      </ul>
    </div>

    <h2 id="core">1. Core Theory &amp; Mathematical Derivation</h2>
    <p>For a square matrix \(A\), a non-zero vector \(\mathbf{v}\) is an <strong>Eigenvector</strong> if:</p>
    <div class="math-block">$$A\mathbf{v} = \lambda\mathbf{v}$$</div>
    <p>where \(\lambda\) (Lambda) is a scalar called the <strong>Eigenvalue</strong> corresponding to that eigenvector.</p>

    <h3>How to Find Them (Step-by-Step)</h3>
    <div class="step-box"><span class="step-num">1</span><strong>The Characteristic Equation:</strong> Rearrange the equation to \((A - \lambda I)\mathbf{v} = 0\).</div>
    <div class="step-box"><span class="step-num">2</span><strong>Solve for \(\lambda\):</strong> For a non-trivial solution (\(\mathbf{v} \neq 0\)), the matrix \((A - \lambda I)\) must be singular. Therefore, we solve: \(\det(A - \lambda I) = 0\)</div>
    <div class="step-box"><span class="step-num">3</span><strong>Solve for \(\mathbf{v}\):</strong> Once you have the eigenvalues, plug each \(\lambda\) back into \((A - \lambda I)\mathbf{v} = 0\).</div>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: Finding Eigenvalues</h4>
      <p>Find eigenvalues for \(A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}\).</p>
      <ol>
        <li>\(\det\left(\begin{bmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{bmatrix}\right) = (4-\lambda)(3-\lambda) - 2 = 0\).</li>
        <li>\(\lambda^2 - 7\lambda + 12 - 2 = \lambda^2 - 7\lambda + 10 = 0\).</li>
        <li>Factoring: \((\lambda - 5)(\lambda - 2) = 0\).</li>
      </ol>
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> Eigenvalues are \(\lambda_1 = 5,\; \lambda_2 = 2\).</div></div>
    </div>

    <h2 id="pca">2. Principal Component Analysis (PCA)</h2>
    <p>PCA is a dimensionality reduction technique that uses Eigen-decomposition to transform high-dimensional data into a lower-dimensional form while retaining as much variance as possible.</p>

    <h3>The Logic</h3>
    <ol>
      <li>Calculate the <strong>Covariance Matrix</strong> of the data.</li>
      <li>Find the <strong>Eigenvalues</strong> and <strong>Eigenvectors</strong> of this covariance matrix.</li>
      <li>The eigenvector with the <strong>highest eigenvalue</strong> is the <strong>First Principal Component</strong> (the direction of maximum variance).</li>
      <li>Project the data onto these top eigenvectors to reduce dimensions.</li>
    </ol>
    <div class="callout info"><div class="callout-icon">📐</div><div class="callout-body"><strong>ML Context:</strong> PCA reduces 100 features to the 10 most important ones to speed up training and reduce noise without losing critical information.</div></div>

    <h2 id="spectral">3. Spectral Clustering</h2>
    <p>Unlike K-Means, which assumes spherical clusters, <strong>Spectral Clustering</strong> uses the eigenvalues of a similarity matrix to perform dimensionality reduction before clustering in fewer dimensions.</p>

    <h3>The Logic</h3>
    <ol>
      <li>Construct an <strong>Adjacency Matrix</strong> (how close points are).</li>
      <li>Compute the <strong>Graph Laplacian</strong> matrix \(L = D - A\).</li>
      <li>Find the eigenvalues of \(L\). The "spectral" part refers to using the bottom eigenvectors (the ones with the smallest non-zero eigenvalues) to map data into a space where clusters are easily separable.</li>
    </ol>

    <h2 id="factorization">4. Matrix Factorization</h2>
    <p>Matrix Factorization (like <strong>SVD — Singular Value Decomposition</strong>) decomposes a matrix into a product of matrices.</p>

    <h3>The Logic</h3>
    <p>If \(A\) is a symmetric matrix, it can be factored as:</p>
    <div class="math-block">$$A = Q \Lambda Q^T$$</div>
    <p>where \(Q\) is a matrix of eigenvectors and \(\Lambda\) (Capital Lambda) is a diagonal matrix of eigenvalues. In Recommendation Systems (like Netflix), this is used to discover "latent features" (e.g., a user's preference for 'Sci-Fi' or 'Action') by decomposing the User-Movie rating matrix.</p>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

# Define a symmetric matrix (e.g., a covariance matrix)
A = np.array([[4, 2], [2, 3]])

# Calculate Eigenvalues and Eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(A)

print("Eigenvalues:", eigenvalues)
print("Eigenvectors (Columns):\n", eigenvectors)

# Verification: Av = lambda * v
v1 = eigenvectors[:, 0]
lambda1 = eigenvalues[0]
print("\nA @ v1:", np.dot(A, v1))
print("lambda1 * v1:", lambda1 * v1)
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>PCA:</strong> Reducing 100 features to the 10 most important ones to speed up training.</li>
      <li><strong>Computer Vision:</strong> <strong>Eigenfaces</strong> uses eigenvectors of face images for recognition.</li>
      <li><strong>Google PageRank:</strong> The "importance" of a webpage is essentially an eigenvalue problem of the web-link matrix.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Eigenvectors</strong> define the "axes" or directions of a transformation.</li>
      <li><strong>Eigenvalues</strong> define the "strength" or importance of those directions.</li>
      <li>Large eigenvalues in a covariance matrix signify the most important patterns in data.</li>
    </ul>

    <div class="linking-rule">
      <strong>Linking Rule:</strong> Now that we have covered the static properties of data via Linear Algebra, we can transition to <strong>Calculus</strong>, which allows us to understand how these values <em>change</em>, leading us to the heart of ML training: <strong>Gradient Descent</strong>.
    </div>
  `
};
