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

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example-mountain">Example 1: Navigating a Loss Mountain</a>
      <a href="#example-directional">Example 2: Directional Derivative in 2D</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Partial Derivatives</strong>: How to nudge one variable at a time.</li>
        <li><strong>Vector Basics</strong>: Understanding column vectors \([x, y]^T\).</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>A partial derivative tells you how the mountain slopes if you move strictly North or strictly East. The <strong>Gradient</strong> combines these into a single arrow that points exactly "Uphill." In Machine Learning, we want to go "Downhill," so we simply take a step in the <strong>opposite direction</strong> of the gradient.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of the Gradient like a <strong>Treasure Compass</strong>. 
        Except instead of pointing toward North, it points toward where the error is growing fastest. 
        By "negating" the compass (\(-\nabla f\)), we get a direct path to the <strong>Global Minimum</strong> (the treasure). 
        Without this compass, training a neural network would just be blind guessing.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>For a scalar function \(f(x, y, \dots, z)\), the gradient \(\nabla f\) is a vector of its first-order partial derivatives:</p>
    <div class="math-block">$$\nabla f = \left[ \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \dots, \frac{\partial f}{\partial z} \right]^T$$</div>
    <p><strong>Directional Derivative:</strong> To find the slope in any arbitrary direction vector \(\mathbf{v}\), you take the dot product: \(D_{\mathbf{v}}f = \nabla f \cdot \mathbf{v}\).</p>

    <h2 id="example-mountain">Example 1: Navigating a Loss Mountain</h2>
    <div class="example-box">
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
    </div>

    <h2 id="example-directional">Example 2: Directional Derivative in 2D</h2>
    <div class="example-box">
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
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
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
    <ul>
      <li><strong>Gradient Descent</strong>: The backbone of training every modern AI. We follow the negative gradient to lower the error.</li>
      <li><strong>Hyperparameter Optimization</strong>: Finding the best learning rate or architecture size by treating them as axes.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Optimization often requires calculating how deeply nested layers affect the error. This is the <strong><ctrl42> <a href="#/mathematics/calculus/chain-rule">Chain Rule</a></strong>.
    </div>
  `
};
