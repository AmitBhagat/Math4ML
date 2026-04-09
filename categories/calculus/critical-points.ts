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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Gradients</strong>: How to find vectors of slopes.</li>
        <li><strong>Hessians</strong>: How to find curvature grids.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>When you are navigating a landscape of data, a <strong>Critical Point</strong> is any location where the ground beneath your feet is perfectly flat (\(\nabla f = \mathbf{0}\)). In Machine Learning, our entire training process is a high-stakes search for one specific type of critical point: the <strong>Global Minimum</strong>. We want to find the exact combination of weights where the error cannot be lowered any further. However, the path is dangerous—we might get stuck at a local peak, or worse, find ourselves trapped in a flat, endless "Saddle Point" where the model stops learning entirely.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Stationary Conditions</div>
      <p>For a differentiable function $f: \mathbb{R}^n \to \mathbb{R}$, a point $\mathbf{x}^*$ in the domain is a **Critical Point** (or stationary point) if the gradient is zero:</p>
      <div class="math-block">
        $$\nabla f(\mathbf{x}^*) = \mathbf{0}$$
      </div>
      <p>To determine the nature of a critical point, we utilize the **Second Derivative Test** based on the eigenvalues ($\lambda_i$) of the Hessian matrix $\mathbf{H}$ at $\mathbf{x}^*$:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Local Minimum</strong>: $\mathbf{H}$ is positive definite ($\lambda_i > 0$ for all $i$). Geometrically, all directions lead uphill.</li>
        <li><strong>Local Maximum</strong>: $\mathbf{H}$ is negative definite ($\lambda_i < 0$ for all $i$). Geometrically, all directions lead downhill.</li>
        <li><strong>Saddle Point</strong>: $\mathbf{H}$ is indefinite (both positive and negative eigenvalues exist). The point is a minimum in one direction and a maximum in another.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Note: If $\det(\mathbf{H}) = 0$, the test is inconclusive, representing a "flat" region of higher-order complexity.</p>
    </div>
    
    <div class="callout tip">

    <h2 id="example-minimum" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Finding Local Minima</h2>
    
      <h4>Problem: Finding the Bottom of \(f(x, y) = x^2 + y^2 - 4x\)</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Gradient:</strong> \(\nabla f = [2x - 4, 2y]^T\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Set to Zero:</strong> \(2x - 4 = 0 \to x = 2\); \(2y = 0 \to y = 0\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Hessian:</strong> \(\mathbf{H} = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}\). (Both \(\lambda = 2\)).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> \((2, 0)\) is a <strong>Local Minimum</strong>. This is the optimal configuration for this toy model.
        </div>
      </div>
    

    <h2 id="example-saddle" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Detecting Saddle Points in 2D</h2>
    
      <h4>Problem: Finding the Trap in \(f(x, y) = x^2 - y^2\)</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Gradient:</strong> \(\nabla f = [2x, -2y]^T\). (Critical point at \((0, 0)\)).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Hessian:</strong> \(\mathbf{H} = \begin{bmatrix} 2 & 0 \\ 0 & -2 \end{bmatrix}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Check Eigenvalues:</strong> \(\lambda = 2\) and \(\lambda = -2\).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> One eigenvalue is positive (Uphill along x), and one is negative (Downhill along y). This is a <strong>Saddle Point</strong>. In ML training, your optimizer might get stuck here forever because the "Net Gradient" is zero, even though lower points exist nearby.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
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

