import { TopicSection } from '../../src/data/types';

export const basicsSection: TopicSection = {
  id: "basics",
  title: "Introduction to Calculus",
  description: "Differential Calculus is the study of how functions change when their inputs change by infinitesimal amounts. In Machine Learning, it's the primary engine for optimization.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📐 Calculus · Introduction</div>
      <h1>Introduction to Calculus</h1>
      <p><strong>Differential Calculus</strong> is the study of how functions change when their inputs change by infinitesimal amounts. In Machine Learning, it is the primary engine used to optimize models. By calculating the <strong>derivative</strong>, we determine the direction and magnitude to adjust model weights to minimize error (loss).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example">Illustrative Example</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <p>Before diving in, ensure you are comfortable with:</p>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Functions and Graphs</strong>: Understanding $f(x)$ and slopes.</li>
        <li><strong>Algebraic Limits</strong>: The foundation of the derivative.</li>
        <li><strong>Basic Matrix Operations</strong>: Essential for moving from scalar to vector calculus.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>In ML, we define a <strong>Loss Function</strong> that measures how "wrong" our model is. To improve the model, we need to know: <em>"If I increase this weight slightly, will the error go up or down?"</em></p>
    
    <div class="callout info">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        The derivative represents the <strong>instantaneous rate of change</strong>. If the derivative is positive, increasing the input increases the output; if negative, increasing the input decreases the output. We use this to "descend" the gradient toward the minimum error.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>

    <h3>1. The Simple Derivative (Scalar)</h3>
    <p>The derivative of a function $f(x)$ at point $x$ is defined as:</p>
    <div class="math-block">$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$</div>

    <h3>2. Partial Derivatives</h3>
    <p>In ML, functions usually have thousands of inputs (weights). A <strong>Partial Derivative</strong> measures how the function changes with respect to <em>one</em> variable while holding all others constant.</p>
    <p>For a function $f(x, y)$:</p>
    <div class="math-block">$$\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h}$$</div>

    <h3>3. The Chain Rule</h3>
    <p>This is the "secret sauce" of <strong>Backpropagation</strong>. If a variable $z$ depends on $y$, and $y$ depends on $x$, then $z$ depends on $x$ via the chain:</p>
    <div class="math-block">$$\frac{dz}{dx} = \frac{dz}{dy} \cdot \frac{dy}{dx}$$</div>

    <h2 id="example">Illustrative Example</h2>
    <div class="example-box">
      <h4>Problem: Finding Error Gradients</h4>
      <p>Find the partial derivatives of $f(x, w) = (xw - y)^2$ with respect to $w$. (This is a simple squared error loss).</p>
      
      <p><strong>Step-by-Step Solution:</strong></p>
      <ol>
        <li>Let $u = (xw - y)$. Then $f = u^2$.</li>
        <li>By Chain Rule: $\frac{\partial f}{\partial w} = \frac{\partial f}{\partial u} \cdot \frac{\partial u}{\partial w}$.</li>
        <li>$\frac{\partial f}{\partial u} = 2u = 2(xw - y)$.</li>
        <li>$\frac{\partial u}{\partial w} = x$ (since $x$ and $y$ are treated as constants).</li>
        <li><strong>Result:</strong> $\frac{\partial f}{\partial w} = 2(xw - y) \cdot x$.</li>
      </ol>

      <p>If $x=2, w=3, y=5$:</p>
      <ul>
        <li>$f(2, 3) = (2 \cdot 3 - 5)^2 = 1^2 = 1$.</li>
        <li>$\frac{\partial f}{\partial w} = 2(6-5) \cdot 2 = 4$.</li>
      </ul>
      <p><strong>Interpretation:</strong> Increasing $w$ by a tiny bit will increase the error by approximately 4 times that bit.</p>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <p>Modern libraries like PyTorch do this automatically (Autograd), but here is how you calculate a gradient manually using NumPy.</p>
    <python-code>
import numpy as np

def manual_gradient_descent(x, y, w, learning_rate=0.01):
    # Forward pass: prediction
    pred = x * w
    # Loss: (pred - y)^2
    loss = (pred - y)**2
    
    # Calculate gradient (from our derivation above)
    # df/dw = 2 * (x*w - y) * x
    grad_w = 2 * (pred - y) * x
    
    # Update weight
    new_w = w - (learning_rate * grad_w)
    
    return new_w, loss

# Example usage
x_val, y_true, w_val = 2.0, 5.0, 3.0
new_w, current_loss = manual_gradient_descent(x_val, y_true, w_val)
print(f"Current Loss: {current_loss}, Updated Weight: {new_w}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Backpropagation</strong>: The Chain Rule is used to propagate the error from the output layer back to the hidden layers to update weights.</li>
      <li><strong>Gradient Descent</strong>: Uses partial derivatives to find the local minimum of the cost function.</li>
      <li><strong>Activation Functions</strong>: Derivatives of functions like <strong>Sigmoid</strong> or <strong>ReLU</strong> are needed to calculate gradients during training.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Derivatives</strong> tell us the direction of the steepest ascent.</li>
      <li><strong>Partial Derivatives</strong> allow us to handle multiple weights individually.</li>
      <li><strong>Chain Rule</strong> allows us to calculate gradients in deep, multi-layer networks.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Now that we understand the basics, explore how this scales to <strong><a href="#/mathematics/calculus/neural-networks">Neural Networks</a></strong> and see the Chain Rule in action.
    </div>
  `
};
