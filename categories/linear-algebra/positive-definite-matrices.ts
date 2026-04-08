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
    <p>In Optimization (Gradient Descent), we want to reach the minimum of a "loss surface." If the Hessian matrix (\(H\)) at a point is <strong>Positive Definite</strong>, it means the surface is locally curved like a bowl. No matter which way you move, you'll eventually "roll back down" to the center. This is the definition of <strong>Convexity</strong>.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a Positive Definite matrix like a <strong>Trampoline</strong>. 
        No matter where you step on it (\(\mathbf{x}\)), the surface pushes back "Up" toward you (\(\mathbf{x}^T A \mathbf{x} > 0\)). 
        If the matrix were <strong>Indefinite</strong>, it would be like a <strong>Saddle</strong>—it pushes up in one direction but collapses under you in another. 
        Stability is everything in ML.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <p>A symmetric matrix \(A\) is <strong>Positive Definite</strong> if for any non-zero vector \(\mathbf{x}\):</p>
    <div class="math-block">$$\mathbf{x}^T A \mathbf{x} > 0$$</div>
    <p><strong>Shortcut:</strong> All eigenvalues \(\lambda_i\) must be \(> 0\).</p>

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
    <ul>
      <li><strong>Kernel Methods (SVMs)</strong>: The Gram Matrix must be <strong>Positive Semi-Definite</strong> (\(\ge 0\)) to ensure a valid optimization problem.</li>
      <li><strong>Gaussian Processes</strong>: The Covariance Matrix is always Positive Semi-Definite.</li>
      <li><strong>Newton's Method</strong>: Relies on the Hessian being PD to guarantee convergence to a minimum.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> PD matrices are stable. Now, learn the "Swiss Army Knife" that decomposes <em>any</em> matrix into these components. Explore <strong><a href="#/mathematics/linear-algebra/svd">Singular Value Decomposition (SVD)</a></strong>.
    </div>
  `
};
