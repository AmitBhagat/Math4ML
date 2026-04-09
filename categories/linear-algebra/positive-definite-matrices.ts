import { TopicSection } from '../../src/data/types';

export const positiveDefiniteSection: TopicSection = {
  id: "positive-definite",
  title: "Positive Definite Matrices",
  description: "Positive Definite matrices are the 'Stability Kings' of optimization. They always point 'Up' or produce positive scales.",
  color: "#3F51B5",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Linear Algebra · Stability</div>
      <h1>Positive Definite Matrices</h1>
      <p>A <strong>Positive Definite (PD)</strong> matrix is a symmetric matrix where all eigenvalues are strictly positive (\(\lambda > 0\)). It is the mathematical guarantee that a "multivariate bowl" always has a unique bottom point.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In Machine Learning, we are constantly hunting for the "Bottom of the Bowl"—the minimum loss point. A <strong>Positive Definite (PD)</strong> matrix is the mathematical guarantee that the surface you are walking on is actually a stable bowl and not a trap. It ensures that no matter which way you move, the curvature of the "loss surface" is always pointing back up toward a stable center. This property is known as <strong>Convexity</strong>, and it is the single most important factor in whether your model can actually finish its training or if it will wander forever in a "flat" or "volatile" nightmare.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Quadratic Stability</div>
      <p>A symmetric matrix $A \in \mathbb{R}^{n \times n}$ is **Positive Definite** if the quadratic form resulting from any non-zero vector $\mathbf{x}$ is strictly positive:</p>
      <div class="math-block">
        $$\mathbf{x}^\top A \mathbf{x} > 0, \quad \forall \mathbf{x} \in \mathbb{R}^n \setminus \{\mathbf{0}\}$$
      </div>
      <p>This definition implies several strictly equivalent properties that are easier to check in practice:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Eigenvalue Test</strong>: Each eigenvalue $\lambda_i$ of $A$ satisfies $\lambda_i > 0$.</li>
        <li><strong>Determinant Test</strong>: Every leading principal minor (top-left sub-matrices) has a positive determinant.</li>
        <li><strong>Factorization</strong>: $A$ can be decomposed as $L L^\top$ (Cholesky Factorization), where $L$ is lower triangular.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">If $\mathbf{x}^\top A \mathbf{x} \ge 0$, the matrix is **Positive Semi-Definite**, a condition crucial for valid Kernels and Covariance matrices.</p>
    </div>
    
    <h2 id="example-minimum" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Global Minimum Stability Check</h2>
    
      <h4>Problem: Is this Surface Stable?</h4>
      <p>For \(A = \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix}\), check if it's PD.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify Eigenvalues:</strong> \(\lambda_1 = 2, \lambda_2 = 3\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Check:</strong> Both are strictly positive.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> YES. It's a "Bowl." Any optimization starting in this space will naturally find the center.
        </div>
      </div>
    

    <h2 id="example-hessian" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Hessian of a Quadratic Form</h2>
    
      <h4>Problem: Checking Convexity of f(x, y) = x² + 4y²</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Find Hessian:</strong> \(\nabla^2 f = \begin{bmatrix} 2 & 0 \\ 0 & 8 \end{bmatrix}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Eigenvalues:</strong> 2 and 8.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> The Hessian is Positive Definite. This means the loss function is <strong>Globally Convex</strong> and we can find the perfect weights using Gradient Descent.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

A = np.array([[2, 1], [1, 2]])

# PD Check: Are all eigenvalues > 0?
vals = np.linalg.eigvals(A)
is_pd = np.all(vals > 0)

print(f"Is Matrix Positive Definite? {is_pd}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Think of a Positive Definite matrix as a "Stability Guarantee." It ensures that your optimization surface is a stable bowl rather than a volatile mountain range.</p>
    <ul>
      <li><strong>Optimization Stability</strong>: For a model to converge, its "Loss Surface" needs to be convex (a bowl). A Positive Definite Hessian matrix is the math that guarantees this stability, ensuring Gradient Descent always finds the unique bottom point.</li>
      <li><strong>Gaussian Processes & Kernels</strong>: In SVMs and GP regression, we use "Kernel Matrices" to measure data relationships. These must be Positive Semi-Definite to ensure that the model's "Uncertainty" calculations are logically valid and never result in impossible negative probabilities.</li>
    </ul>
    <p>Teacher's Final Word: Positive Definiteness is the difference between a model that finishes its training and one that wanders forever in a mathematical fog. If you want a stable AI, you need PD matrices.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> PD matrices are stable. Now, learn the "Swiss Army Knife" that decomposes <em>any</em> matrix into these components. Explore <strong><a href="#/mathematics/linear-algebra/svd">Singular Value Decomposition (SVD)</a></strong>.
    </div>
  `
};

