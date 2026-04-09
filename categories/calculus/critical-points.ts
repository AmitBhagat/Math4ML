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
      <div class="premium-def-title">Formalism: The First-Order Optimality & Curvature Classification</div>
      <p>Critical Points are the "Stationary States" of your loss function. They are the only points where your model stops changing and settles into a solution.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine a smooth surface $z = f(\mathbf{x})$. At most points, there is a clear "uphill" direction defined by the gradient. However, at a <strong>Critical Point</strong>, the surface is locally flat—the tangent plane is perfectly horizontal. In ML, we hunt for these flat spots, hoping they represent a deep valley (minimum) rather than a peak (maximum).</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>A point $\mathbf{x}^*$ is a critical point if the <strong>First-Order Condition</strong> is met: the sensitivity in every direction must be zero.</p>
      <div class="math-block">
        $$\nabla f(\mathbf{x}^*) = \mathbf{0}$$
      </div>
      <p>To classify the behavior at this flat spot, we look at the <strong>Second-Order Condition</strong> via the Hessian matrix $\mathbf{H}$. Near $\mathbf{x}^*$, the function is approximated by the quadratic form:</p>
      <div class="math-block">
        $$f(\mathbf{x}^* + \Delta \mathbf{x}) \approx f(\mathbf{x}^*) + \frac{1}{2} \Delta \mathbf{x}^\top \mathbf{H} \Delta \mathbf{x}$$
      </div>
      <p>The "energy" of this quadratic term determines if the surface curves up or down.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria (Second Derivative Test)</h3>
      <p>We classify the critical point based on the eigenvalues ($\lambda_i$) of the Hessian $\mathbf{H}$ at $\mathbf{x}^*$:</p>
      <ul class="mt-2 space-y-2">
        <li><strong>Local Minimum</strong>: $\lambda_i > 0$ for all $i$ ($\mathbf{H}$ is Positive Definite). Every step away from the point goes uphill.</li>
        <li><strong>Local Maximum</strong>: $\lambda_i < 0$ for all $i$ ($\mathbf{H}$ is Negative Definite). Every step leads downhill.</li>
        <li><strong>Saddle Point</strong>: Mixed eigenvalues. The point is a "Minimum" in some directions and a "Maximum" in others.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Most high-dimensional critical points in AI are <strong>Saddle Points</strong>. The Gradient is zero, so your optimizer stops, but the Loss is still massive. This is why we use "Momentum" and "Noise"—to kick the model out of these flat traps.</p>
    </div>
    
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
    <p>A Critical Point is any location where the ground beneath your feet is perfectly flat. In ML, training is a search for the best "Bottom" point.</p>
    <ul>
      <li><strong>Global vs. Local Minima</strong>: In Deep Learning, the "Error Surface" is a jagged mountain range with billions of pits (local minima). The quest of training is to find the deepest pit possible to minimize error. While we rarely find the *perfect* Global Minimum, we use techniques like "Momentum" to skip over shallow pits and find a good enough spot to stop.</li>
      <li><strong>The Saddle Point Problem</strong>: In high-dimensional models (like LLMs), most critical points aren't actually peaks or pits—they are "Saddle Points" (flat in one direction, sloped in another). Modern optimizers like Adam are designed to "Vibrate" and escape these traps so the model can keep learning.</li>
    </ul>
    <p>Teacher's Final Word: Finding the right critical point is the art of AI. If you stop too early, your model is underdeveloped; if you get trapped on a peak, your model is broken. We want the deepest valley we can find.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve mastered the mechanics of optimization. Now, see how we deal with <strong>Uncertainty</strong> and <strong>Data Distributions</strong>. Explore <strong><a href="#/mathematics/statistics/basics">Probability & Statistics</a></strong>.
    </div>
  `
};


