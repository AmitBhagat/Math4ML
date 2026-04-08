import { TopicSection } from '../../src/data/types';

export const criticalPointsSection: TopicSection = {
  id: "critical-points",
  title: "Critical Points",
  description: "A Critical Point is where the gradient is zero. It the mathematical location of a minimum, maximum, or a saddle point in your loss function.",
  color: "#1B5E20",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📐 Calculus · Optimization</div>
      <h1>Critical Points: The Search for the Bottom</h1>
      <p>A <strong>Critical Point</strong> is any point where the gradient of a function is exactly zero (\(\nabla f = \mathbf{0}\)). In Machine Learning, our entire training process is a struggle to find a specific type of critical point: the <strong>Global Minimum</strong> of our error function.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example-minimum">Example 1: Finding Local Minima</a>
      <a href="#example-saddle">Example 2: Detecting Saddle Points in 2D</a>
      <a href="#implementation">Implementation (Python/SciPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Gradients</strong>: How to find vectors of slopes.</li>
        <li><strong>Hessians</strong>: How to find curvature grids.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>When you are hiking, you are at a "Critical Point" if the ground at your feet is perfectly flat. This could mean you are at the <strong>Top of a Peak</strong> (Maximize Reward), the <strong>Bottom of a Valley</strong> (Minimize Loss), or on a <strong>Saddle Point</strong> (Flat from one side, steep from another). To build a model that actually works, we need to distinguish between these cases.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of a Critical Point like <strong>The End of a Path</strong>. 
        If you arrive at a flat spot and the ground curves up in all directions, you've found a <strong>Minimum</strong> (Success!). 
        If it curves down everyone, you've found a <strong>Maximum</strong> (Reverse success!). 
        In Deep Learning, we often find <strong>Saddle Points</strong>—frustrating flat areas that trap our models and slow down training.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>We find critical points by solving the equation:</p>
    <div class="math-block">$$\nabla f(\mathbf{x}) = \mathbf{0}$$</div>
    <p>To classify the point, we examine the <strong>Eigenvalues</strong> of the Hessian matrix \(\mathbf{H}\):</p>
    <ul>
      <li><strong>All \(\lambda > 0\):</strong> (PD) -> <strong>Local Minimum</strong>.</li>
      <li><strong>All \(\lambda < 0\):</strong> (ND) -> <strong>Local Maximum</strong>.</li>
      <li><strong>Mixed \(\lambda\):</strong> -> <strong>Saddle Point</strong>.</li>
    </ul>

    <h2 id="example-minimum">Example 1: Finding Local Minima</h2>
    <div class="example-box">
      <h4>Problem: Finding the Bottom of \(f(x, y) = x^2 + y^2 - 4x\)</h4>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Gradient:</strong> \(\nabla f = [2x - 4, 2y]^T\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Set to Zero:</strong> \(2x - 4 = 0 \to x = 2\); \(2y = 0 \to y = 0\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Hessian:</strong> \(\mathbf{H} = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}\). (Both \(\lambda = 2\)).</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> \((2, 0)\) is a <strong>Local Minimum</strong>. This is the optimal configuration for this toy model.
        </div>
      </div>
    </div>

    <h2 id="example-saddle">Example 2: Detecting Saddle Points in 2D</h2>
    <div class="example-box">
      <h4>Problem: Finding the Trap in \(f(x, y) = x^2 - y^2\)</h4>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Gradient:</strong> \(\nabla f = [2x, -2y]^T\). (Critical point at \((0, 0)\)).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Hessian:</strong> \(\mathbf{H} = \begin{bmatrix} 2 & 0 \\ 0 & -2 \end{bmatrix}\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Check Eigenvalues:</strong> \(\lambda = 2\) and \(\lambda = -2\).</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> One eigenvalue is positive (Uphill along x), and one is negative (Downhill along y). This is a <strong>Saddle Point</strong>. In ML training, your optimizer might get stuck here forever because the "Net Gradient" is zero, even though lower points exist nearby.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/SciPy)</h2>
    <python-code>
import numpy as np
from scipy.optimize import minimize

def f(x):
    # Scalar bowl: (x-3)^2 + 5
    return (x[0] - 3)**2 + 5

# Starting guess
x0 = np.array([0.0])

# Solve for the local minimum automatically
res = minimize(f, x0)

print(f"Computed Critical Point: {res.x[0]:.4f}")
print(f"Value at Min: {res.fun}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Cost Function Optimization</strong>: Everything in ML is about finding the weights that reach the lowest critical point.</li>
      <li><strong>Convergence Analysis</strong>: Understanding why models stop improving—often because they are trapped at a saddle point or a local minimum.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve mastered the mechanics of optimization. Now, see how we deal with <strong>Uncertainty</strong> and <strong>Data Distributions</strong>. Explore <strong><a href="#/mathematics/statistics/basics">Probability & Statistics</a></strong>.
    </div>
  `
};
