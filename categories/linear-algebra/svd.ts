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

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#formula">2. The SVD Formula</a>
      <a href="#example-reconstruction">Example 1: Rotation-Scaling-Rotation Breakdown</a>
      <a href="#example-compression">Example 2: Image Compression (Rank-k)</a>
      <a href="#implementation">Implementation (Python/SciPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>Every linear transformation can be broken down into three simple steps: Rotate, Stretch, Rotate. SVD allows us to take a "chaos" matrix and find the core directions that contain all the information. In Machine Learning, this helps us find the "structure" in noisy data.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of a lump of **Pizza Dough**. 
        SVD says you can turn it into any final pizza in 3 steps: 
        1. **Rotate** the dough to find the best axis, 
        2. **Stretch** it into a circle (Scaling), 
        3. **Rotate** it again to align it with the box.
        Even the messiest matrix is just a sequence of these 3 clean movements.
      </div>
    </div>

    <h2 id="formula">2. The SVD Formula</h2>
    <div class="math-block">$$A = U \Sigma V^T$$</div>
    <ul>
      <li><strong>U:</strong> Left Singular Vectors (Rotates into the output space).</li>
      <li><strong>Σ:</strong> Singular Values (The scaling factors, in descending order).</li>
      <li><strong>Vᵀ:</strong> Right Singular Vectors (Rotates the input space).</li>
    </ul>

    <h2 id="example-reconstruction">Example 1: Rotation-Scaling-Rotation Breakdown</h2>
    <div class="example-box">
      <h4>Problem: Reconstructing A = [[1, 0], [0, 2]]</h4>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identify:</strong> Since the matrix is already diagonal, \(\Sigma = [1, 2]\) and \(U, V\) are just the Identity!</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Reconstruct:</strong> \(A = I \times \text{diag}(1, 2) \times I\).</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> SVD found the "most important" axis is \([0, 1]\) with a strength of 2. It automatically sorts information by power.
        </div>
      </div>
    </div>

    <h2 id="example-compression">Example 2: Image Compression (Rank-k)</h2>
    <div class="example-box">
      <h4>Problem: Reducing 2D Noise</h4>
      <p>Assume your matrix \(A\) has singular values \(\Sigma = [100, 1]\). Reconstruct it with only the top value.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Threshold:</strong> Keep the "Loudest" signal (\(100\)). Zero out the noise (\(1\)).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Compress:</strong> \(\hat{A} = \mathbf{u}_1 \cdot 100 \cdot \mathbf{v}_1^T\).</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We kept **99%** of the information using only **half** the storage space. This is how high-res photos are transmitted over slow WiFi.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/SciPy)</h2>
    <python-code>
import numpy as np
from scipy.linalg import svd

A = np.array([[1, 2], [3, 4]])

# U: Output rotation, s: Singular values, Vh: Input rotation
U, s, Vh = svd(A)

print(f"Singular values of A: {s}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Principal Component Analysis (PCA)</strong>: Most robust PCA implementations use SVD internally.</li>
      <li><strong>Topic Modeling (LSA)</strong>: SVD finds hidden topics in massive text corpora.</li>
      <li><strong>Low-Rank Recommendation</strong>: Predicting missing ratings by assuming the "Value" matrix is low-rank.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> SVD is the math. Now, let's look at the ultimate application in data science. Explore <strong><a href="#/mathematics/linear-algebra/pca">Principal Component Analysis (PCA)</a></strong>.
    </div>
  `
};
