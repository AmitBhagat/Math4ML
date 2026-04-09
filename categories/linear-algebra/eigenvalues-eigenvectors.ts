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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Normally, when you multiply a vector by a matrix, the vector gets rotated and stretched into a brand-new direction—absolute chaos. But for every matrix, there are a few "Special Directions" that are immune to rotation. They stay perfectly aligned with their original path; they only grow or shrink. These are the <strong>Eigenvectors</strong>. The <strong>Eigenvalue</strong> (\(\lambda\)) is just the scale factor of that growth. If you find these magic axes, you can simplify even the most complex matrix into a set of simple stretches. This is how we find the "Soul" or the "Main Signal" of our data.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The characteristic Equation</div>
      <p>For a square matrix $A \in \mathbb{R}^{n \times n}$, a non-zero vector $\mathbf{v}$ is an **Eigenvector** and $\lambda$ is its corresponding **Eigenvalue** if:</p>
      <div class="math-block">
        $$A \mathbf{v} = \lambda \mathbf{v}$$
      </div>
      <p>This relationship implies that $(A - \lambda I)\mathbf{v} = \mathbf{0}$. For a non-trivial solution to exist, the matrix $(A - \lambda I)$ must be non-invertible, leading to the **Characteristic Equation**:</p>
      <div class="math-block">
        $$\det(A - \lambda I) = 0$$
      </div>
      <p class="text-xs opacity-70 mt-2">The roots of this $n$-th degree polynomial are the eigenvalues. In ML, these reveal the principal axes of data variation and the stability of iterative systems.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Eigenvectors like the <strong>Axes of Rotation</strong> or the <strong>Anchor Points</strong> of a transformation. 
        If you spin a globe, every city on the surface moves to a new location—except for the North and South Poles. 
        The line through those poles is the <strong>Eigenvector</strong>; it stays perfectly in place while the rest of the world transforms around it. 
        In Machine Learning, we use these eigenvectors to find <strong>Principal Components</strong>—the few "Main Directions" where your data is most spread out, allowing us to ignore the less important wiggles.
      </div>
    </div>

    <visualizer topic="Eigenvalues" />

    <h2 id="derivation">Formal Definition</h2>
    <p>A vector \(\mathbf{v}\) is an eigenvector if:</p>
    <div class="math-block">$$A\mathbf{v} = \lambda\mathbf{v}$$</div>
    <p>To find \(\lambda\), we solve the <strong>Characteristic Equation</strong>:</p>
    <div class="math-block">$$\det(A - \lambda I) = 0$$</div>

    <h2 id="example-diagonal" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Finding Hidden Axes</h2>
    
      <h4>Problem: Identifying Eigenvalues for a Diagonal Matrix</h4>
      <p>For \(A = \begin{bmatrix} 3 & 0 \\ 0 & 2 \end{bmatrix}\), find the eigenpairs.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Scaling is 3x on x and 2x on y.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Check:</strong> Multiplying \([1, 0]\) gives \([3, 0]\). Direct 3x scale.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Check:</strong> Multiplying \([0, 1]\) gives \([0, 2]\). Direct 2x scale.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> \(\lambda_1 = 3, \mathbf{v}_1 = [1, 0]\) and \(\lambda_2 = 2, \mathbf{v}_2 = [0, 1]\). Diagonal matrices already show their eigen-secrets!
        </div>
      </div>
    

    <h2 id="example-chareq" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Characteristic Equation Walkthrough</h2>
    
      <h4>Problem: Solxing for λ of A = [[4, 1], [2, 3]]</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Set up:</strong> \(\det(A - \lambda I) = (4-\lambda)(3-\lambda) - 2 = 0\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Factor:</strong> \(\lambda^2 - 7\lambda + 10 = 0 \to (\lambda - 5)(\lambda - 2) = 0\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Result:</strong> \(\lambda = 5, 2\).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> \(\lambda = 5\) is your "Main Signal." The direction corresponding to this eigenvalue contains the most <strong>Variance</strong> in your data.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

A = np.array([[4, 1], [2, 3]])

# Calculating eigenvalues and eigenvectors
vals, vecs = np.linalg.eig(A)

print(f"Eigenvalues: {vals}")
print(f"Eigenvectors:\n{vecs}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Eigenvectors are the "Hidden Axes" of your data. While the rest of the world rotates into chaos during a transformation, these special directions stay perfectly aligned, revealing the underlying structure of the system.</p>
    <ul>
      <li><strong>Principal Component Analysis (PCA)</strong>: In data science, we look for the eigenvectors of the <strong>Covariance Matrix</strong>. The eigenvector with the largest eigenvalue is the direction where your data is most "Spread Out." By focusing only on these top eigenvalues, we can squash a 10,000-dimension dataset into 2 dimensions while keeping 99% of the important information.</li>
      <li><strong>Google PageRank</strong>: The reason Google became a giant is essentially a massive eigenvalue problem. It treats the entire web as a transition matrix and finds the <strong>Principal Eigenvector</strong>. The values in this vector tell the system exactly how "Important" or "Influential" each website is based on its connections, putting the best answers at the top of your search.</li>
    </ul>
    <p>Teacher's Final Word: Finding the eigenpairs of your data is like finding its "Soul." It reveals the core directions where all the real action happens. In the world of Big Data, if you aren't looking at the eigenvectors, you're just looking at the noise.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Some matrices have "Good Behavior" and always produce positive scaling factors. Explore <strong><a href="#/mathematics/linear-algebra/positive-definite">Positive Definite Matrices</a></strong>.
    </div>
  `
};
