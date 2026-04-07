import { TopicSection } from '../../src/data/types';

export const eigenvaluesEigenvectorsSection: TopicSection = {
  id: "eigenvalues-eigenvectors",
  title: "Introduction to Eigenvalues and Eigenvectors",
  description: "In Linear Algebra, Eigenvalues and Eigenvectors provide a way to decompose a matrix into its most fundamental components. When a linear transformation (represented by a matrix A) is applied to most vectors, they change both their magnitude and their direction. However, Eigenvectors are special vectors that only change in magnitude (scale) when the transformation is applied; their direction remains the same.",
  color: "#42A5F5",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">λ Linear Algebra · Eigenvalues & Eigenvectors</div>
      <h1>Introduction to Eigenvalues and Eigenvectors</h1>
      <p>In Linear Algebra, <strong>Eigenvalues</strong> and <strong>Eigenvectors</strong> provide a way to decompose a matrix into its most fundamental components. When a linear transformation (represented by a matrix \(A\)) is applied to most vectors, they change both their magnitude and their direction. However, <strong>Eigenvectors</strong> are special vectors that only change in magnitude (scale) when the transformation is applied; their direction remains the same.</p>
    </div>

    <visualizer topic="Eigenvalues" />

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">1. Core Theory: Scaling & Span</a>
      <a href="#derivation">2. Mathematical Derivation (λ and v)</a>
      <a href="#example">3. Illustrative Example Walkthrough</a>
      <a href="#stability">4. Stability of Neural Networks (Spectral Radius)</a>
      <a href="#pca">5. Application: PCA & Spectral Clustering</a>
      <a href="#factorization">6. Application: Matrix Factorization</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Real-world AI Applications</a>
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

    <h2 id="theory">1. Core Theory: Scaling & Span</h2>
    <p>For a square matrix \(A\), a non-zero vector \(\mathbf{v}\) is an <strong>Eigenvector</strong> if:</p>
    <div class="math-block">$$A\mathbf{v} = \lambda\mathbf{v}$$</div>
    <p>where \(\lambda\) (Lambda) is a scalar called the <strong>Eigenvalue</strong> corresponding to that eigenvector. This means the vector \(\mathbf{v}\) essentially points in a direction that \(A\) does not rotate; it only stretches or shrinks it by \(\lambda\).</p>

    <h2 id="derivation">2. Mathematical Derivation (λ and v)</h2>
    <p>To find \(\lambda\), we rearrange the equation to \((A - \lambda I)\mathbf{v} = 0\). For a non-trivial solution (\(\mathbf{v} \neq 0\)), the matrix \((A - \lambda I)\) must be singular:</p>
    
    <div class="step-box"><span class="step-num">1</span><strong>The Characteristic Equation:</strong> Solve \(\det(A - \lambda I) = 0\) to find the eigenvalues.</p></div>
    <div class="step-box"><span class="step-num">2</span><strong>Finding Vectors:</strong> For each \(\lambda\), solve the linear system \((A - \lambda I)\mathbf{v} = 0\) to find the corresponding eigenvectors.</p></div>

    <h2 id="example">3. Illustrative Example Walkthrough</h2>
    <div class="example-box">
      <h4>Problem: Finding Eigenvalues & Eigenvectors</h4>
      <p>Find the eigenpairs for \(A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Solve the Characteristic Equation:</strong> \(\det(A - \lambda I) = 0\).</div></div>
      <div class="math-block">$$(4-\lambda)(3-\lambda) - 2 = \lambda^2 - 7\lambda + 10 = 0$$</div>
      
      <div class="step-box"><span class="step-num">2</span><div><strong>Factor the Quadratic:</strong> \((\lambda - 5)(\lambda - 2) = 0\).</div></div>
      <div class="math-block">$$\lambda_1 = 5, \quad \lambda_2 = 2$$</div>

      <div class="step-box"><span class="step-num">3</span><div><strong>Compute Eigenvector for \(\lambda_1 = 5\):</strong> Solve \((A - 5I)\mathbf{v} = 0\).</div></div>
      <div class="math-block">$$\begin{bmatrix} -1 & 1 \\ 2 & -2 \end{bmatrix} \begin{bmatrix} v_1 \\ v_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \implies \mathbf{v}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> We found two eigenpairs. The most "dominant" eigenvalue is 5, representing the primary direction of scaling.</div></div>
    </div>

    <h2 id="stability">4. Stability of Neural Networks (Spectral Radius)</h2>
    <p>In Deep Learning, the <strong>Spectral Radius</strong> (the largest absolute eigenvalue) of your weight matrices determines if signals will explode or vanish. This is the cornerstone of <strong>Weight Initialization</strong> strategies.</p>
    <div class="callout info">
      <div class="callout-icon">🚀</div>
      <div class="callout-body">
        <strong>The Rule:</strong> If \(\lambda_{max} > 1\), weights grow exponentially (Exploding Gradients). If \(\lambda_{max} << 1\), signals can vanish (Vanishing Gradients).
      </div>
    </div>

    <h2 id="pca">5. Application: PCA & Spectral Clustering</h2>
    <p><strong>PCA</strong> finds the eigenvectors of the data's covariance matrix. This reduces 100 features to the 10 most important ones without losing critical patterns.</p>
    <p><strong>Spectral Clustering</strong> uses the eigenvalues of a Graph Laplacian matrix \(L = D - A\) to map data into a space where clusters are easily separable, outperforming K-Means on non-spherical data.</p>

    <h2 id="factorization">6. Application: Matrix Factorization</h2>
    <p>If \(A\) is a symmetric matrix, it can be factored as \(A = Q \Lambda Q^T\), where \(Q\) is a matrix of eigenvectors and \(\Lambda\) is a diagonal matrix of eigenvalues. This is used in Recommendation Systems (like Netflix) to discover "latent features"—detecting a user's preference for 'Action' vs. 'Sci-Fi' from raw ratings.</p>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

# A symmetric matrix (e.g., a covariance matrix)
A = np.array([[4, 2], [2, 3]])

# Calculate Eigenvalues and Eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(A)

print("Eigenvalues:", eigenvalues)
print("Eigenvectors (Columns):\n", eigenvectors)

# Verification: Av = lambda * v
v1 = eigenvectors[:, 0]
lambda1 = eigenvalues[0]
print("\nMatch Av == lv:", np.allclose(A @ v1, lambda1 * v1))
    </python-code>

    <h2 id="applications">Real-world AI Applications</h2>
    <ul>
      <li><strong>Principal Component Analysis (PCA):</strong> Dimensionality reduction for data visualization and feature engineering.</li>
      <li><strong>Computer Vision:</strong> <strong>Eigenfaces</strong> uses eigenvectors of face images for facial recognition.</li>
      <li><strong>Google PageRank:</strong> The importance of a webpage is calculated as the dominant eigenvalue of the web-link matrix.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Eigenvectors</strong> define the "axes" or directions of a transformation.</li>
      <li><strong>Eigenvalues</strong> define the "strength" or magnitude of scaling along those axes.</li>
      <li>Large eigenvalues in a covariance matrix signify the most important patterns in data.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> With the theory mastered, let's explore practical <strong><a href="#/mathematics/linear-algebra/eigenvalues-eigenvectors-pca">Solved SVD & PCA Examples</a></strong>.
    </div>
    </div>
  `
};
