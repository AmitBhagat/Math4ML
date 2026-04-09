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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Every linear transformation—no matter how messy or complex—can be broken down into three simple, elegant steps: <strong>Rotate, Stretch, Rotate</strong>. This is the power of <strong>Singular Value Decomposition (SVD)</strong>. Unlike Eigen-decomposition, SVD works for every matrix in existence, whether it is square, rectangular, or full of noise. It allows us to mathematically "unravel" any matrix to find the core directions that contain the most information. In Machine Learning, SVD is the engine that finds the hidden structure in our data, telling us which features are actually "Loud" and which are just background static.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Universal Factorization</div>
      <p>Any matrix $A \in \mathbb{R}^{m \times n}$ can be decomposed into three specialized matrices:</p>
      <div class="math-block">
        $$A = U \Sigma V^\top$$
      </div>
      <p>where the components provide a structural breakdown of the transformation:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>$U \in \mathbb{R}^{m \times m}$</strong>: An orthogonal matrix whose columns (left-singular vectors) represent the geometry of the output space.</li>
        <li><strong>$\Sigma \in \mathbb{R}^{m \times n}$</strong>: A diagonal matrix of singular values $\sigma_i$, representing the "strength" of the transformation along each axis.</li>
        <li><strong>$V \in \mathbb{R}^{n \times n}$</strong>: An orthogonal matrix whose columns (right-singular vectors) represent the geometry of the input space.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">SVD is the foundation of data compression; by retaining only the largest $\sigma_i$ values, we obtain the optimal low-rank approximation of the original data.</p>
    </div>
    
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
    <p>SVD is the "Swiss Army Knife" of data science. It allows you to take any messy, complex matrix and break it down into three simple, elegant steps: **Rotate, Stretch, Rotate.**</p>
    <ul>
      <li><strong>Latent Semantic Analysis (LSA)</strong>: SVD can read 1,000,000 documents and find the "Hidden Topics" inside. By decomposing the matrix, it discovers that words like "Piston" and "Spark" are physically linked to the same latent "Topic" (singular value), even if they never appear on the same page.</li>
      <li><strong>Background Subtraction in Video</strong>: Security systems use SVD to separate "Static" background (low-rank singular values) from "Moving" intruders (high-rank noise). This is how the AI knows to ignore a stationary wall but follow a moving person.</li>
    </ul>
    <p>Teacher's Final Word: SVD is the ultimate "Noise Filter." It allows you to find the signal buried under a mountain of static, ensuring your model focuses only on the high-rank patterns that actually matter.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> SVD is the math. Now, let's look at the ultimate application in data science. Explore <strong><a href="#/mathematics/linear-algebra/pca">Principal Component Analysis (PCA)</a></strong>.
    </div>
  `
};

