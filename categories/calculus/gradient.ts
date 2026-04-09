import { TopicSection } from '../../src/data/types';

export const gradientSection: TopicSection = {
  id: "gradient",
  title: "The Gradient",
  description: "The Gradient is a vector of all partial derivatives. It points in the direction of the steepest ascent on a high-dimensional surface.",
  color: "#1B5E20",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📐 Calculus · Gradient</div>
      <h1>The Gradient: The Compass of Optimization</h1>
      <p>The <strong>Gradient</strong> (\(\nabla f\)) is a vector containing all the partial derivatives of a function. It is a mathematical "compass" that always points directly in the direction of the <strong>steepest uphill</strong> slope.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Partial Derivatives</strong>: How to nudge one variable at a time.</li>
        <li><strong>Vector Basics</strong>: Understanding column vectors \([x, y]^T\).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A partial derivative tells you how the mountain slopes if you move strictly North or strictly East—but the real world (and real data) is rarely that simple. The <strong>Gradient</strong> (\(\nabla f\)) combines all these individual slopes into a single, powerful arrow that points exactly in the direction of the <strong>steepest ascent</strong>. It is the mathematical "North Star" for optimization. In Machine Learning, our goal is to decrease error as fast as possible, so we simply take our current position and move in the <strong>exact opposite direction</strong> of the gradient.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Multi-Dimensional Slope Vector</div>
      <p>For a differentiable scalar function $f: \mathbb{R}^n \to \mathbb{R}$, the **Gradient** $\nabla f$ (pronounced "del f") is a vector-valued function defined as the collection of all its partial derivatives:</p>
      <div class="math-block">
        $$\nabla f(\mathbf{x}) = \left[ \frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}, \dots, \frac{\partial f}{\partial x_n} \right]^\top$$
      </div>
      <p>The gradient possesses three properties that make it the engine of machine learning optimization:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Steepest Ascent</strong>: $\nabla f$ points in the direction of the maximum rate of increase of $f$ at $\mathbf{x}$.</li>
        <li><strong>Directional Derivative</strong>: The slope in any arbitrary direction $\mathbf{v}$ (unit vector) is given by $D_{\mathbf{v}}f = \nabla f \cdot \mathbf{v}$.</li>
        <li><strong>Geometry</strong>: The gradient vector is always orthogonal to the level set (contour line) of the function at that point.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Optimization via **Gradient Descent** involves iteratively updating parameters in the direction of $-\nabla f$ to find the local minimum of a loss function.</p>
    </div>
    
    <h2 id="example-mountain" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Navigating a Loss Mountain</h2>
    
      <h4>Problem: Finding the Steering Direction</h4>
      <p>Let \(f(x, y) = x^2 + 3xy + 2y^2\). Find the gradient at the point \((1, 2)\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Partial w.r.t \(x\):</strong> \(\frac{\partial f}{\partial x} = 2x + 3y\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Partial w.r.t \(y\):</strong> \(\frac{\partial f}{\partial y} = 3x + 4y\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Evaluate:</strong> At \((1, 2) \to \nabla f = [2(1)+3(2), 3(1)+4(2)]^T = [8, 11]^T\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> To increase the function value as quickly as possible from \((1, 2)\), move in the direction of \([8, 11]\). In ML optimization, we would move toward \([-8, -11]\) to minimize error.
        </div>
      </div>
    

    <h2 id="example-directional" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Directional Derivative in 2D</h2>
    
      <h4>Problem: Slope Toward the Horizon</h4>
      <p>Find the slope of \(f(x, y) = x^2 + y^2\) at \((3, 4)\) in the direction of \(\mathbf{v} = [1, 1]\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Find Gradient:</strong> \(\nabla f = [2x, 2y]^T = [6, 8]^T\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Normalize Direction (v):</strong> \(\mathbf{v} = \frac{[1,1]}{\sqrt{2}}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Dot Product:</strong> \(\nabla f \cdot \mathbf{v} = (6 \times \frac{1}{\sqrt{2}}) + (8 \times \frac{1}{\sqrt{2}}) = \frac{14}{\sqrt{2}} \approx 9.9\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Moving diagonally at \((3, 4)\) results in a slope of ~9.9. This tells us the <strong>Directional Sensitivity</strong> of our model along a custom feature axis.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

def f(x_vec):
    x, y = x_vec[0], x_vec[1]
    return x<strong>2 + y</strong>2

def compute_gradient(x_vec, h=1e-5):
    # Finite difference approximation of the entire gradient
    grad = np.zeros_like(x_vec)
    for i in range(len(x_vec)):
        x_plus_h = np.copy(x_vec)
        x_plus_h[i] += h
        grad[i] = (f(x_plus_h) - f(x_vec)) / h
    return grad

point = np.array([3.0, 4.0])
print(f"Gradient at (3,4): {compute_gradient(point)}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>The Gradient is the "Compass of Optimization." It combines all your individual partial slopes into a single, powerful arrow that points exactly "Uphill."</p>
    <ul>
      <li><strong>Stochastic Gradient Descent (SGD)</strong>: In massive datasets, calculating the gradient for all 1,000,000 rows at once is too slow. Instead, we calculate an "Approximate Gradient" using just a tiny random batch. This "Noisy Compass" is the secret to how AI trains on the entire internet in a reasonable amount of time.</li>
      <li><strong>Adversarial Attacks</strong>: Hackers can use the gradient of an image-recognition AI to find its "Most Sensitive Pixels." By subtly changing pixels in the direction of the gradient, they can trick an AI into seeing a "Toaster" instead of a "Stop Sign," while the image still looks perfect to human eyes.</li>
    </ul>
    <p>Teacher's Final Word: In AI, we simply look where the gradient is pointing and run the other way to find the valley of minimum error. It is the most fundamental tool in the entire machine learning toolkit.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Optimization often requires calculating how deeply nested layers affect the error. This is the <strong><ctrl42> <a href="#/mathematics/calculus/chain-rule">Chain Rule</a></strong>.
    </div>
  `
};

