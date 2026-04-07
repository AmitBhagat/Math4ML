import { TopicSection } from '../../src/data/types';

export const matrixPropertiesSection: TopicSection = {
  id: "matrix-properties",
  title: "Matrix Properties",
  description: "Matrix properties like Rank, Determinant, Trace, and Positive Definiteness act as the \"DNA\" of a matrix. They tell us whether a system of equations has a solution, how a transformation scales space, and whether an optimization problem (like training a model) has a stable minimum.",
  color: "#1976D2",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Linear Algebra · Matrix Properties</div>
      <h1>Matrix Properties</h1>
      <p>Matrix properties like <strong>Rank</strong>, <strong>Determinant</strong>, <strong>Trace</strong>, and <strong>Positive Definiteness</strong> act as the "DNA" of a matrix. They tell us whether a system of equations has a solution, how a transformation scales space, and whether an optimization problem (like training a model) has a stable minimum.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#rank">1. Rank of a Matrix</a>
      <a href="#det">2. Determinant</a>
      <a href="#trace">3. Trace</a>
      <a href="#pd">4. Positive Definiteness</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li>Understanding of <strong>Matrices</strong> (Multiplication and Identity).</li>
        <li>Basic concept of <strong>Linear Independence</strong>.</li>
      </ul>
    </div>

    <h2 id="rank">1. Rank (Information Density)</h2>
    <p>The <strong>Rank</strong> of a matrix represents the number of linearly independent rows or columns.</p>

    <h3>Core Theory</h3>
    <p>Rank tells us the "true dimensionality" of the information. If a \(100 \times 100\) matrix has a rank of 2, it means 98 of your features are redundant junk. The matrix operates in a tiny 2D slice of that 100D space.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Rank is the measure of <em>unique</em> information. It’s like hearing 100 people talk, but only 2 of them are saying anything original.
        <br/><br/>
        <strong>The 'Gotcha':</strong> In the real world, computers struggle with rank. Because of **Floating-Point Noise**, a matrix that is mathematically rank-deficient might look like it has "Full Rank" because of tiny non-zero values (like \(10^{-16}\)). We use **Singular Value Decomposition (SVD)** to find the "Effective Rank."
      </div>
    </div>

    <visualizer topic="Rank" />

    <h2 id="det">2. Determinant (Scaling Factor)</h2>
    <p>The <strong>Determinant</strong> \(\det(A)\) is a scalar that summarizes how a matrix changes space.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Take a unit square; the Determinant is the <strong>Area</strong> of the new shape after transformation. If the determinant is negative, the space has been "flipped" inside out.
        <br/><br/>
        <strong>The 'Gotcha':</strong> If \(\det(A) = 0\), you have "squashed" your data into a flatter dimension. You can't go back. This is why singular matrices are non-invertible—you can't "un-squash" a pancake back into a sphere.
      </div>
    </div>

    <h2 id="trace">3. Trace (The Signature)</h2>
    <p>The <strong>Trace</strong> \(tr(A)\) is the sum of the elements on the main diagonal.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> The Trace is a "signature." No matter how you rotate or change the coordinates (basis change), the trace stays the same. 
        <br/><br/>
        <strong>Technical Fact:</strong> The sum of the **Eigenvalues** always equals the Trace. It’s a quick way to sanity-check your calculations.
      </div>
    </div>

    <div class="math-block">$$tr(A) = \sum_{i=1}^{n} a_{ii}$$</div>

    <h2 id="pd">4. Positive Definiteness (The Bowl)</h2>
    <p>A symmetric matrix \(A\) is <strong>Positive Definite (PD)</strong> if \(\mathbf{x}^\top A \mathbf{x} > 0\) for all non-zero vectors \(\mathbf{x}\).</p>

    <h3>Core Theory</h3>
    <p>This property is the "Gold Standard" for optimization. If the Hessian matrix of a loss function is Positive Definite, the surface is guaranteed to be convex (bowl-shaped).</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of a **Positive Definite** matrix as a perfect "bowl." No matter where you drop a ball, it will roll to the stable bottom (Global Minimum). 
        <br/><br/>
        <strong>The 'Gotcha':</strong> If your matrix is only **Positive Semi-Definite**, your bowl has a "flat bottom" (like a trough). Your optimizer might get lost moving along that flat line instead of finding a single point.
      </div>
    </div>

    <h3>Mathematical Derivation</h3>
    <p>A matrix \(A\) is PD if:</p>
    <ol>
      <li>All its <strong>Eigenvalues</strong> are positive \((\lambda_i > 0)\).</li>
      <li>All its leading principal minors have positive determinants.</li>
    </ol>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Problem: Testing Positive Definiteness</h4>
      <p>Is \(A = \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix}\) Positive Definite?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Expand Quadratic Form \(\mathbf{x}^T A \mathbf{x}\):</strong></div></div>
      <div class="math-block">$$\mathbf{x}^T A \mathbf{x} = [x_1, x_2] \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = 2x_1^2 + 3x_2^2$$</div>
      
      <div class="step-box"><span class="step-num">2</span><div><strong>Evaluate:</strong> Since \(x_1^2, x_2^2 > 0\) for any non-zero \(\mathbf{x}\), the sum \(2x_1^2 + 3x_2^2\) is always strictly positive.</div></div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> Yes, it is Positive Definite. In optimization, this means the loss surface is a local "bowl" (convex).</div></div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

A = np.array([[3, 1], [2, 2]])

# Rank
rank = np.linalg.matrix_rank(A)

# Determinant
det = np.linalg.det(A)

# Trace
trace = np.trace(A)

# Positive Definiteness (Checking eigenvalues)
eigenvalues = np.linalg.eigvals(A)
is_pd = np.all(eigenvalues > 0)

print(f"Rank: {rank}, Det: {det}, Trace: {trace}, Is PD: {is_pd}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Rank:</strong> Used in <strong>Low-Rank Approximation</strong> (SVD) to compress images or recommendation system matrices.</li>
      <li><strong>Determinant:</strong> Used in <strong>Gaussian Mixture Models (GMM)</strong> and calculating the Normal distribution's probability density.</li>
      <li><strong>Positive Definiteness:</strong> Used in <strong>Kernel Methods (SVM)</strong> and ensuring that <strong>Covariance Matrices</strong> are valid.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Rank</strong> = Dimensionality.</li>
      <li><strong>Determinant</strong> = Volume scaling (must be \(\neq 0\) for inversion).</li>
      <li><strong>Positive Definiteness</strong> = Guaranteed "bowl-shaped" (convex) optimization surface.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Matrix properties define a model's stability. Explore where data truly "lives" in <strong><a href="#/mathematics/linear-algebra/vector-spaces">Vector Spaces</a></strong>.
    </div>
  `
};
