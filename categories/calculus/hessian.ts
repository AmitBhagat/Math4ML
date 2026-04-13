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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Partial Derivatives</strong>: How to nudging one variable.</li>
        <li><strong>Matrix Basics</strong>: Understanding square grids.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In Machine Learning, we use the Hessian to determine the stability of our current position: if the Hessian is <strong>Positive Definite</strong>, we’ve found a stable "bowl" (a minimum). If it's mixed, we're likely in a <strong>Saddle Point</strong>, and we need to be careful not to get trapped.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Matrix of Second-Order Sensitivities</div>
      <p>The Hessian is the "Acceleration" of your loss function. It measures how the slope itself is changing as you move through parameter space.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine the Gradient $\nabla f$ as your velocity vector. If you move, does that velocity stay the same, or does it rotate and stretch? The <strong>Hessian Matrix</strong> is the "Curvature Grid" that describes the local shape of the surface. It tells you if you're in a stable bowl (positive curvature), at a peak (negative curvature), or on a treacherous saddle point.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>Mathematically, the Hessian is the <strong>Jacobian of the Gradient</strong>. We track how each component of the gradient $\frac{\partial f}{\partial x_i}$ changes with respect to every input $x_j$:</p>
      <div class="math-block">
        $$\mathbf{H} = \nabla(\nabla f) = \begin{bmatrix} 
        \frac{\partial^2 f}{\partial x_1^2} & \dots & \frac{\partial^2 f}{\partial x_1 \partial x_n} \\
        \vdots & \ddots & \vdots \\
        \frac{\partial^2 f}{\partial x_n \partial x_1} & \dots & \frac{\partial^2 f}{\partial x_n^2} \end{bmatrix}$$
      </div>
      <p>This matrix appears in the second-order <strong>Taylor Expansion</strong>. For a small step $\Delta \mathbf{x}$, the change in function value is modeled as a quadratic surface:</p>
      <div class="math-block">
        $$f(\mathbf{x} + \Delta \mathbf{x}) \approx f(\mathbf{x}) + \nabla f^\top \Delta \mathbf{x} + \frac{1}{2} \Delta \mathbf{x}^\top \mathbf{H} \Delta \mathbf{x}$$
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>The Hessian's eigenvalues (the <strong>Principal Curvatures</strong>) determine local stability:</p>
      <ul class="mt-2 space-y-2">
        <li><strong>Positive Definite ($\mathbf{H} \succ 0$)</strong>: Local Minimum (The "Bowl").</li>
        <li><strong>Negative Definite ($\mathbf{H} \prec 0$)</strong>: Local Maximum (The "Mountain").</li>
        <li><strong>Indefinite</strong>: Saddle Point (The "Trap").</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: In high-dimensional ML (like LLMs), we almost never calculate the full Hessian—it would require petabytes of memory. Instead, we use "Hessian-Free" optimizers or diagonal approximations to get the curvature benefits without the system-crashing cost.</p>
    </div>
    
    <visualizer topic="hessian" />
    

    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <p>For smooth functions, the matrix is symmetric (\(\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}\)).</p>
      </div>
    </div>

    <h2 id="example-hessian" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Finding Curvature at a Point</h2>
    
      <h4>Problem: Finding the Hessian of \(f(x, y) = x^2 + 5xy + 3y^2\)</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Gradient:</strong> \(\nabla f = [2x + 5y, 5x + 6y]\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Second w.r.t \(x\):</strong> \(\frac{\partial}{\partial x}(2x + 5y) = 2\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Cross w.r.t \(y, x\):</strong> \(\frac{\partial}{\partial y}(2x + 5y) = 5\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Second w.r.t \(y\):</strong> \(\frac{\partial}{\partial y}(5x + 6y) = 6\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <div><strong>Resulting Matrix:</strong> \(\mathbf{H} = \begin{bmatrix} 2 & 5 \\ 5 & 6 \end{bmatrix}\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We now have a complete model of how the entire surface is "bending."
        </div>
      </div>
    

    <h2 id="example-newton" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Second-order Optimization (Newton)</h2>
    
      <h4>Problem: Taking a "Full Step" toward the Minimum</h4>
      <p>Given the Gradient \(\mathbf{g}\) and Hessian \(\mathbf{H}\), how does a smart optimizer take a step?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Newton's Update:</strong> \(\mathbf{x}_{new} = \mathbf{x}_{old} - \mathbf{H}^{-1}\mathbf{g}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Interpret:</strong> We aren't just moving opposite to the gradient; we are <strong>scaling</strong> the step size based on the inverse curvature.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> If the ground is very curved (large Hessian), we take a smaller, careful step. If the ground is flat, we take a massive, confident step. This is much faster than simple Gradient Descent.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
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
                H[i, i] = (f(x_plus) - 2*f_val + f(x_minus)) / (h<strong>2)
            else:
                # Cross derivative
                xp_yp = np.copy(x_vec); xp_yp[i] += h; xp_yp[j] += h
                xp = np.copy(x_vec); xp[i] += h
                yp = np.copy(x_vec); yp[j] += h
                H[i, j] = (f(xp_yp) - f(xp) - f(yp) + f_val) / (h</strong>2)
    return H

# Point (1,2)
print(f"Numerical Hessian at (1,2):\n{compute_hessian(np.array([1.0, 2.0]))}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>If the Gradient is "Velocity" (which way am I moving?), the Hessian is "Acceleration" (how is the road bending?). It tells you if you are in a stable valley, a volatile sharp peak, or a tricky saddle point.</p>
    <ul>
      <li><strong>Newton’s Method Optimization</strong>: Standard Gradient Descent is like walking blindly downhill. Newton's Method uses the Hessian to see the *curvature* of the mountain. It allows the AI to take a massive, confident step if the ground is flat and a small, cautious step if the ground is sharply curved.</li>
      <li><strong>Model Pruning (OBD)</strong>: In "Optimal Brain Damage," we use the Hessian to determine which weights in a neural network are the least important. If the second-order sensitivity is near zero, it means removing that weight won't affect the model's accuracy, allowing us to shrink the AI for mobile phones.</li>
    </ul>
    <p>Teacher's Final Word: In real ML, we rarely calculate the full Hessian because it's too big—we use clever "second-order approximations" instead to get most of the benefits without the massive computational cost.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Sometimes a function is too complex to solve exactly. How do we approximate it with a simpler "Flat" or "Parabolic" version? Explore <strong><a href="#/mathematics/calculus/taylor-series">Taylor Series Approximation</a></strong>.
    </div>
  `
};

