import { TopicSection } from '../../src/data/types';

export const singularValueDecompositionSection: TopicSection = {
  id: "svd",
  title: "Singular Value Decomposition (SVD)",
  description: "The Swiss Army Knife of Linear Algebra. SVD decomposes any matrix into rotation, scaling, and rotation steps.",
  color: "#D32F2F",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Linear Algebra · Decompositions</div>
      <h1>Singular Value Decomposition (SVD)</h1>
      <p>SVD is the <strong>Swiss Army Knife</strong> of Linear Algebra. Unlike Eigen-decomposition, it works for <strong>any</strong> matrix—even the "messy" rectangular ones. It is the core algorithm behind image compression and recommendation systems.</p>
    </div>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Universal Decomposition & Symmetry</div>
      <p>SVD is the most powerful "unraveling" tool in your kit. It breaks <strong>any</strong> linear transformation into its core geometric steps.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Every transformation $A$ can be seen as a three-stage relay: First, a rotation in the input space ($V^T$), then a scaling along some key axes ($\Sigma$), and finally a rotation in the output space ($U$). Unlike Eigendecomposition, which requires a square matrix that doesn't "stretch" space too weirdly, SVD works for every matrix in existence.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation via $A^\top A$</h3>
      <p>To find the singular values, we capitalize on the fact that $A^\top A$ is always a symmetric, positive semi-definite matrix. Its eigenvalues $\lambda_i$ are always non-negative. We derive the components of $A = U\Sigma V^\top$ as follows:</p>
      <div class="math-block">
        $$A^\top A = (U\Sigma V^\top)^\top (U\Sigma V^\top) = V \Sigma^\top U^\top U \Sigma V^\top = V (\Sigma^\top \Sigma) V^\top$$
      </div>
      <p>This reveals that the <strong>Right Singular Vectors</strong> ($V$) are the eigenvectors of $A^\top A$, and the <strong>Singular Values</strong> ($\sigma_i$) are the square roots of the eigenvalues: $\sigma_i = \sqrt{\lambda_i}$. Similarly, the left singular vectors ($U$) are the eigenvectors of $AA^\top$.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Formula</h3>
      <p>For any $A \in \mathbb{R}^{m \times n}$, we have:</p>
      <div class="math-block">
        $$A = U \Sigma V^\top$$
      </div>
      <p>Where $U^\top U = I$ and $V^\top V = I$. $\Sigma$ contains the singular values in descending order, effectively sorting your data's signal from its noise.</p>
      <p class="mt-4 italic text-sm">Gotcha: SVD is "stable" even for singular matrices. While the inverse might explode, SVD just sets the singular value to zero, letting you see exactly *where* the information was lost.</p>
    </div>
    
    <visualizer topic="svd" />


    
    <h2 id="example-reconstruction" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Rotation-Scaling-Rotation Breakdown</h2>
    
      <h4>Problem: Reconstructing A = [[1, 0], [0, 2]]</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Since the matrix is already diagonal, \(\Sigma = [1, 2]\) and \(U, V\) are just the Identity!</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Reconstruct:</strong> \(A = I \times \text{diag}(1, 2) \times I\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> SVD found the "most important" axis is \([0, 1]\) with a strength of 2. It automatically sorts information by power.
        </div>
      </div>
    

    <h2 id="example-compression" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Image Compression (Rank-k)</h2>
    
      <h4>Problem: Reducing 2D Noise</h4>
      <p>Assume your matrix \(A\) has singular values \(\Sigma = [100, 1]\). Reconstruct it with only the top value.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Threshold:</strong> Keep the "Loudest" signal (\(100\)). Zero out the noise (\(1\)).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Compress:</strong> \(\hat{A} = \mathbf{u}_1 \cdot 100 \cdot \mathbf{v}_1^T\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We kept <strong>99%</strong> of the information using only <strong>half</strong> the storage space. This is how high-res photos are transmitted over slow WiFi.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np
from scipy.linalg import svd

A = np.array([[1, 2], [3, 4]])

# U: Output rotation, s: Singular values, Vh: Input rotation
U, s, Vh = svd(A)

print(f"Singular values of A: {s}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>SVD is the ultimate "Noise Filter" for Machine Learning. It allows you to take any messy, complex matrix and unravel it into three elegant steps: <strong>Rotate, Stretch, Rotate.</strong></p>
    <ul>
      <li><strong>Concept Search (Latent Semantic Analysis)</strong>: Google and Bing don't just look for keywords; they look for "Concepts." SVD takes a giant matrix of billions of words and documents and finds the "Hidden Dimensions" (Topics). This allows the system to realize that a paper about "Quantum Computing" and a blog post about "Qubits" are semantically identical, even if they share zero identical words, because they align on the same singular value axis.</li>
      <li><strong>Top-k Image Denoising</strong>: In scientific imaging or astrophotography, pictures are often buried under a haze of sensor "noise." Since the "Real Image" is a high-rank pattern and noise is random jitter, we use SVD to keep only the top-k singular values. This mathematically "kills" the noise while keeping the sharp edges of the galaxy or the cell, essentially distilling the signal from the static.</li>
    </ul>
    <p>Teacher's Final Word: SVD is the "Swiss Army Knife" of math for a reason—it works on every matrix in existence. If you find the singular values, you've found the strength of every signal in your dataset. In the world of AI, if you aren't using SVD, you're probably just drowning in noise.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> SVD is the math. Now, let's look at the ultimate application in data science. Explore <strong><a href="#/mathematics/linear-algebra/pca">Principal Component Analysis (PCA)</a></strong>.
    </div>
  `
};


