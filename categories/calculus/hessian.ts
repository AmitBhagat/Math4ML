import { TopicSection } from '../../src/data/types';

export const hessianSection: TopicSection = {
  id: "hessian",
  title: "Hessian Matrix",
  description: "The Hessian contains all the second-order partial derivatives. It tells us about the 'Curvature' or 'Acceleration' of the loss function.",
  color: "#1B5E20",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📐 Calculus · Second Derivatives</div>
      <h1>Hessian Matrix: The Curvature Grid</h1>
      <p>The <strong>Hessian Matrix</strong> (\(\mathbf{H}\)) is a square grid containing <strong>all second-order partial derivatives</strong>. While the Gradient tells us "Direction" (Velocity), the Hessian tells us "Curvature" (Acceleration). In Machine Learning, it's the key to understanding if we are at a local minimum, a local maximum, or a saddle point.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example-hessian">Example 1: Finding Curvature at a Point</a>
      <a href="#example-newton">Example 2: Second-order Optimization (Newton)</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Partial Derivatives</strong>: How to nudging one variable.</li>
        <li><strong>Matrix Basics</strong>: Understanding square grids.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>A Gradient (\(\nabla f\)) tells you which way to walk to reduce the loss. But it doesn't tell you how <strong>fast</strong> the slope is changing. Are you on a sharp peak? A flat valley? A <strong>Hessian</strong> tells the optimizer: <em>"Slow down, the ground is curving upwards!"</em> or <em>"Speed up, the slope is constant."</em> This is the difference between simple Gradient Descent and advanced "Second-Order" methods.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of the Hessian as <strong>The Road Condition</strong>. 
        The Gradient is your <strong>Steering Wheel</strong>. 
        The Hessian is how much you need to <strong>Brake or Accelerate</strong> because the road is curving. 
        If you are at the bottom of a bowl, the Hessian is "Positive Definite" (all curvas are up). 
        If you are at the top of a hill, it's "Negative Definite" (all curvas are down). 
        If it's a saddle, you're at a "Switchback."
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>For a function \(f(x, y, \dots, z)\), the Hessian \(\mathbf{H}\) is defined by the cross-derivatives:</p>
    <div class="math-block">$$ \mathbf{H} = \begin{bmatrix} 
    \frac{\partial^2 f}{\partial x_1^2} & \dots & \frac{\partial^2 f}{\partial x_1 \partial x_n} \\
    \vdots & \ddots & \vdots \\
    \frac{\partial^2 f}{\partial x_n \partial x_1} & \dots & \frac{\partial^2 f}{\partial x_n^2} \end{bmatrix} $$</div>
    <p>For smooth functions, the matrix is symmetric (\(\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}\)).</p>

    <h2 id="example-hessian">Example 1: Finding Curvature at a Point</h2>
    <div class="example-box">
      <h4>Problem: Finding the Hessian of \(f(x, y) = x^2 + 5xy + 3y^2\)</h4>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Gradient:</strong> \(\nabla f = [2x + 5y, 5x + 6y]\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Second w.r.t \(x\):</strong> \(\frac{\partial}{\partial x}(2x + 5y) = 2\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Cross w.r.t \(y, x\):</strong> \(\frac{\partial}{\partial y}(2x + 5y) = 5\).</div></div>
      <div class="step-box"><span class="step-num">4</span><div><strong>Second w.r.t \(y\):</strong> \(\frac{\partial}{\partial y}(5x + 6y) = 6\).</div></div>
      <div class="step-box"><span class="step-num">5</span><div><strong>Resulting Matrix:</strong> \(\mathbf{H} = \begin{bmatrix} 2 & 5 \\ 5 & 6 \end{bmatrix}\).</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We now have a complete model of how the entire surface is "bending."
        </div>
      </div>
    </div>

    <h2 id="example-newton">Example 2: Second-order Optimization (Newton)</h2>
    <div class="example-box">
      <h4>Problem: Taking a "Full Step" toward the Minimum</h4>
      <p>Given the Gradient \(\mathbf{g}\) and Hessian \(\mathbf{H}\), how does a smart optimizer take a step?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Newton's Update:</strong> \(\mathbf{x}_{new} = \mathbf{x}_{old} - \mathbf{H}^{-1}\mathbf{g}\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Interpret:</strong> We aren't just moving opposite to the gradient; we are <strong>scaling</strong> the step size based on the inverse curvature.</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> If the ground is very curved (large Hessian), we take a smaller, careful step. If the ground is flat, we take a massive, confident step. This is much faster than simple Gradient Descent.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

def f(x_vec):
    return x_vec[0]**2 + 5*x_vec[0]*x_vec[1] + 3*x_vec[1]**2

def compute_hessian(x_vec, h=1e-4):
    # Numerical approximation using double differences
    n = len(x_vec)
    H = np.zeros((n, n))
    f_val = f(x_vec)
    
    for i in range(n):
        for j in range(n):
            if i == j:
                # Second derivative
                x_plus = np.copy(x_vec); x_plus[i] += h
                x_minus = np.copy(x_vec); x_minus[i] -= h
                H[i, i] = (f(x_plus) - 2*f_val + f(x_minus)) / (h**2)
            else:
                # Cross derivative
                xp_yp = np.copy(x_vec); xp_yp[i] += h; xp_yp[j] += h
                xp = np.copy(x_vec); xp[i] += h
                yp = np.copy(x_vec); yp[j] += h
                H[i, j] = (f(xp_yp) - f(xp) - f(yp) + f_val) / (h**2)
    return H

# Point (1,2)
print(f"Numerical Hessian at (1,2):\n{compute_hessian(np.array([1.0, 2.0]))}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Second-Order Optimizers (L-BFGS)</strong>: Approximating the Hessian to find the local minimum much faster than simple Adam/SGD.</li>
      <li><strong>Second-Order Regularization</strong>: Penalizing curvature to ensure the model surface is smooth.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Sometimes a function is too complex to solve exactly. How do we approximate it with a simpler "Flat" or "Parabolic" version? Explore <strong><a href="#/mathematics/calculus/taylor-series">Taylor Series Approximation</a></strong>.
    </div>
  `
};
