import { TopicSection } from '../../src/data/types';

export const jacobianSection: TopicSection = {
  id: "jacobian",
  title: "Jacobian Matrix",
  description: "The Jacobian is the ultimate 'Sensitivity Grid.' It contains all the partial derivatives for a vector-valued function with multiple inputs and multiple outputs.",
  color: "#1B5E20",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📐 Calculus · Vector Functions</div>
      <h1>Jacobian Matrix: The Sensitivity Grid</h1>
      <p>The <strong>Jacobian Matrix</strong> (\(\mathbf{J}\)) is a rectangular grid containing <strong>all possible partial derivatives</strong> between a set of inputs and a set of outputs. In Machine Learning, it tells us exactly how every single neuron in one layer affects every single neuron in the next.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example-jacobian">Example 1: Layer-to-Layer Sensitivity</a>
      <a href="#example-softmax">Example 2: Softmax Sensitivity (Overview)</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Matrices</strong>: Understanding rows and columns.</li>
        <li><strong>Partial Derivatives</strong>: How to nudge one input at a time.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>A simple derivative (\(df/dx\)) is for one input and one output. A Gradient (\(\nabla f\)) is for many inputs and one output. But in Deep Learning, every layer takes a vector and spits out a <strong>new vector</strong>. To track the sensitivity of this transformation, we need a grid where every row is the gradient of a different output.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of the Jacobian as a <strong>"Responsibility Matrix."</strong> 
        The row tells you: <em>"How much does Output #1 care about Input #1, #2, #3?"</em> 
        The column tells you: <em>"How much does Input #1 affect Output #1, #2, #3?"</em> 
        Without this grid, we couldn't pass gradients through complex "Vector Layers" like Softmax or fully connected layers.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>For a function \(\mathbf{f}(\mathbf{x}) = [f_1, f_2, \dots, f_m]^T\) of input \(\mathbf{x} = [x_1, x_2, \dots, x_n]^T\), the Jacobian is:</p>
    <div class="math-block">$$ \mathbf{J} = \begin{bmatrix} 
    \frac{\partial f_1}{\partial x_1} & \dots & \frac{\partial f_1}{\partial x_n} \\
    \vdots & \ddots & \vdots \\
    \frac{\partial f_m}{\partial x_1} & \dots & \frac{\partial f_m}{\partial x_n} \end{bmatrix} $$</div>

    <h2 id="example-jacobian">Example 1: Layer-to-Layer Sensitivity</h2>
    <div class="example-box">
      <h4>Problem: Finding the Jacobian of \(\mathbf{f}(x, y) = [x^2y, 5x + \sin(y)]^T\)</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Output 1 Gradient:</strong> \(\nabla f_1 = [2xy, x^2]\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Output 2 Gradient:</strong> \(\nabla f_2 = [5, \cos(y)]\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Stack:</strong> \(\mathbf{J} = \begin{bmatrix} 2xy & x^2 \\ 5 & \cos(y) \end{bmatrix}\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We now have a complete "Map" of how the entire output vector responds to any change in the input vector.
        </div>
      </div>
    </div>

    <h2 id="example-softmax">Example 2: Sensitivity of Softmax Outputs</h2>
    <div class="example-box">
      <h4>Problem: The Jacobian of a Probability Layer</h4>
      <p>Softmax turns scores into probabilities. If you increase Score #1, Probability #1 goes up, but #2 and #3 <strong>must</strong> go down to keep the sum at 100%.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Diagonal Elements:</strong> \(P_i(1 - P_i)\). (Self-sensitivity).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Off-Diagonal Elements:</strong> \(-P_i P_j\). (Cross-sensitivity).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> The Jacobian of Softmax is <strong>huge</strong> in modern LLMs. It ensures that when the model decides "Cat" is more likely, it also correctly decides "Dog" is less likely.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

def f_vector(x_vec):
    # f(x, y) = [x*y, x+y]
    return np.array([x_vec[0] * x_vec[1], x_vec[0] + x_vec[1]])

def compute_jacobian(x_vec, h=1e-5):
    # Approximate Jacobian column-by-column
    n = len(x_vec)
    m = len(f_vector(x_vec))
    J = np.zeros((m, n))
    
    for j in range(n):
        x_plus_h = np.copy(x_vec)
        x_plus_h[j] += h
        J[:, j] = (f_vector(x_plus_h) - f_vector(x_vec)) / h
    return J

point = np.array([1.0, 2.0])
print(f"Jacobian matrix at (1,2):\n{compute_jacobian(point)}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Backpropagation through Vector Layers</strong>: Passing gradients through Softmax or batch normalization layers.</li>
      <li><strong>Automatic Differentiation</strong>: Libraries like PyTorch build these Jacobians internally to solve the network.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Jacobians tell us about "first-order" velocity. What about the "Acceleration" or the curvature of the loss? Explore <strong><a href="#/mathematics/calculus/hessian">The Hessian Matrix</a></strong>.
    </div>
  `
};
