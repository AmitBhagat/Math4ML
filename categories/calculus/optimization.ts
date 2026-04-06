import { TopicSection } from '../../src/data/types';

export const optimizationSection: TopicSection = {
  id: "optimization",
  title: "Optimization Theory",
  description: "Optimization Theory is the study of finding the 'best' solution. In ML, this means finding weights that minimize the Loss Function.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🏹 Calculus · Optimization</div>
      <h1>Optimization Theory: Finding the Best Parameters</h1>
      <p><strong>Optimization Theory</strong> is the study of finding the "best" solution from a set of available alternatives. In Machine Learning, "best" means the set of model weights that result in the lowest possible value of a <strong>Loss Function</strong>. Understanding the geometry of these functions—whether they are "well-behaved" (convex) or "treacherous" (non-convex)—is the difference between a model that learns effectively and one that gets stuck.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example">Illustrative Example</a>
      <a href="#implementation">Implementation (Python/SciPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Multivariable Calculus</strong>: Understanding the <strong>Gradient</strong> ($\nabla f$) and the <strong>Hessian</strong> ($H$).</li>
        <li><strong>Linear Algebra</strong>: Eigenvalues and positive definiteness.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>Optimization is the process of "walking down a hill" to find the lowest valley.</p>
    <ul>
      <li><strong>Convex Functions</strong>: Like a simple bowl. No matter where you start, walking down always leads to the same bottom point.</li>
      <li><strong>Non-Convex Functions</strong>: Like a mountain range. There are many small valleys (local minima) and flat ridges (saddle points) that can trick an optimization algorithm into stopping before it reaches the true lowest point (global minimum).</li>
    </ul>

    <h2 id="derivation">Mathematical Derivation</h2>

    <h3>1. Convexity Defined</h3>
    <p>A function $f$ is <strong>convex</strong> if the line segment between any two points on the graph lies above or on the graph. Mathematically, for $\lambda \in [0, 1]$:</p>
    <div class="math-block">$$f(\lambda x_1 + (1-\lambda)x_2) \leq \lambda f(x_1) + (1-\lambda)f(x_2)$$</div>
    <p><strong>Hessian Test:</strong> A twice-differentiable function is convex if its Hessian matrix $H$ is <strong>Positive Semi-Definite</strong> ($H \succeq 0$) for all $x$. This means all its eigenvalues are $\geq 0$.</p>

    <h3>2. Critical Points</h3>
    <p>We find candidates for the minimum by setting the gradient to zero: $\nabla f(x) = 0$. We then use the <strong>Second Derivative Test</strong> (Hessian) to classify them:</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Point Type</th><th>Gradient ($\nabla f$)</th><th>Hessian Eigenvalues ($\lambda_i$)</th><th>Geometry</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Local Minimum</strong></td><td>$0$</td><td>All $\lambda_i > 0$</td><td>Bottom of a valley</td></tr>
          <tr><td><strong>Local Maximum</strong></td><td>$0$</td><td>All $\lambda_i < 0$</td><td>Top of a peak</td></tr>
          <tr><td><strong>Saddle Point</strong></td><td>$0$</td><td>Some $\lambda_i > 0$, some $\lambda_i < 0$</td><td>Like a horse saddle</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="example">Illustrative Example</h2>
    <div class="example-box">
      <h4>Scenario: Analyzing Critical Points</h4>
      <p>Analyze $f(x, y) = x^2 - y^2$.</p>
      
      <p><strong>Step-by-Step Analysis:</strong></p>
      <ol>
        <li><strong>Find Gradient</strong>: $\nabla f = [2x, -2y]^T$.</li>
        <li><strong>Find Critical Point</strong>: Set $2x=0, -2y=0$. The only critical point is $(0, 0)$.</li>
        <li><strong>Find Hessian</strong>:
          <div class="math-block" style="background:transparent; border:none; padding:0; margin-top:10px;">
            $$H = \begin{bmatrix} 2 & 0 \\ 0 & -2 \end{bmatrix}$$
          </div>
        </li>
        <li><strong>Evaluate Eigenvalues</strong>: The eigenvalues are $\lambda_1 = 2$ and $\lambda_2 = -2$.</li>
      </ol>
      <p><strong>Result:</strong> Because one is positive and one is negative, $(0,0)$ is a <strong>Saddle Point</strong>.</p>
    </div>

    <h2 id="implementation">Implementation (Python/SciPy)</h2>
    <p>We can use <code>scipy.optimize</code> to see how different starting points affect the result in non-convex functions.</p>
    <python-code>
import numpy as np
from scipy.optimize import minimize

# A non-convex function: f(x) = x^4 - 2x^2 + 0.5x
def non_convex_func(x):
    return x**4 - 2*x**2 + 0.5*x

# Try different starting points
starts = [-2.0, 2.0]
for start in starts:
    res = minimize(non_convex_func, x0=start)
    print(f"Started at {start}, found minimum at {res.x[0]:.4f} with value {res.fun:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Linear/Logistic Regression</strong>: These result in <strong>Convex</strong> loss functions. Gradient Descent is guaranteed to find the global optimum.</li>
      <li><strong>Deep Learning (Neural Networks)</strong>: These are highly <strong>Non-Convex</strong>. They have billions of parameters and countless local minima and saddle points.</li>
      <li><strong>Optimization Strategies</strong>: Techniques like <strong>Stochastic Gradient Descent (SGD)</strong>, <strong>Momentum</strong>, and <strong>Adam</strong> are designed to handle non-convex landscapes and speed through flat regions.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Optimization landscapes often involve <strong>Vector Fields</strong>. Let's step into <strong>Vector Calculus</strong> to see how AI simulates reality by obeying laws like zero divergence.
    </div>
  `
};
