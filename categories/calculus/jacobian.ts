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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Matrices</strong>: Understanding rows and columns.</li>
        <li><strong>Partial Derivatives</strong>: How to nudge one input at a time.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A simple derivative is for one input and one output. A Gradient is for many inputs and one output. But in Deep Learning, every layer takes a vector and transforms it into a <strong>new vector</strong>. To track this complex interaction, we need the <strong>Jacobian Matrix</strong>—a complete grid where every row is the gradient of a different output neuron. It tells us exactly how every single input in a layer influences every single output in the next. Without this map, we wouldn't be able to "link" the chain of sensitivities together to train deep neural networks.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Matrix of Sensitivities</div>
      <p>For a vector-valued function $\mathbf{f}: \mathbb{R}^n \to \mathbb{R}^m$, the **Jacobian Matrix** $\mathbf{J}$ (or $\mathbf{Df}$) is the matrix of all first-order partial derivatives. It represents the best linear approximation of the function at a point $\mathbf{x}$:</p>
      <div class="math-block">
        $$\mathbf{J} = \frac{\partial \mathbf{f}}{\partial \mathbf{x}} = \begin{bmatrix} 
        \frac{\partial f_1}{\partial x_1} & \dots & \frac{\partial f_1}{\partial x_n} \\
        \vdots & \ddots & \vdots \\
        \frac{\partial f_m}{\partial x_1} & \dots & \frac{\partial f_m}{\partial x_n} \end{bmatrix}$$
      </div>
      <p>The Jacobian plays three critical roles in advanced mathematical modeling:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Multivariate Chain Rule</strong>: To differentiate $\mathbf{f}(\mathbf{g}(\mathbf{x}))$, we multiply their Jacobians: $\mathbf{J}_{\mathbf{f} \circ \mathbf{g}} = \mathbf{J}_{\mathbf{f}} \cdot \mathbf{J}_{\mathbf{g}}$.</li>
        <li><strong>Local Linearization</strong>: Near $\mathbf{x}$, the change in output is predicted by $\Delta \mathbf{f} \approx \mathbf{J} \Delta \mathbf{x}$.</li>
        <li><strong>Volume Scaling</strong>: If $n=m$, $|\det(\mathbf{J})|$ measures how the transformation expands or shrinks space locally.</li>
      </ul>
    </div>
    
    <div class="callout tip">

    <h2 id="example-jacobian" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Layer-to-Layer Sensitivity</h2>
    
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
    

    <h2 id="example-softmax" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Sensitivity of Softmax Outputs</h2>
    
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
    

    <h2 id="implementation">Implementation</h2>
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

