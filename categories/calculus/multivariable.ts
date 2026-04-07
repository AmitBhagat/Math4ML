import { TopicSection } from '../../src/data/types';

export const multivariableSection: TopicSection = {
  id: "multivariable",
  title: "Multivariable Calculus",
  description: "Multivariable Calculus extends the concepts of single-variable differentiation to functions of several variables. In ML, we optimize millions of parameters simultaneously.",
  color: "#388E3C",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🌐 Calculus · Multivariable</div>
      <h1>Multivariable Calculus: Navigating Feature Landscapes</h1>
      <p><strong>Multivariable Calculus</strong> extends the concepts of single-variable calculus to functions of several variables. In Machine Learning, we rarely deal with a single weight; instead, we optimize millions of parameters simultaneously. This field provides the mathematical tools to navigate high-dimensional "landscapes" of loss functions to find the optimal set of parameters.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example-gradient">Example 1: Computing Gradients</a>
      <a href="#example-hessian">Example 2: Analyzing Curvature</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Differential Calculus</strong>: Understanding basic derivatives and the Chain Rule.</li>
        <li><strong>Linear Algebra</strong>: Familiarity with vectors, matrices, and the dot product.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>When a model has multiple inputs, we need to understand how they interact.</p>
    <ul>
      <li>A <strong>Gradient</strong> tells us the direction of the steepest increase in a multidimensional space.</li>
      <li>A <strong>Jacobian</strong> helps us handle vector-valued functions (multiple outputs).</li>
      <li>A <strong>Hessian</strong> describes the "curvature" of the surface, telling us if we are at a minimum, maximum, or a saddle point.</li>
    </ul>
    <div class="my-8">
      <visualizer topic="PartialDerivatives" />
    </div>
    <div class="my-8">
      <visualizer topic="JacobianHessian" />
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>

    <h3>1. The Gradient ($\nabla f$)</h3>
    <p>For a scalar function $f(x_1, x_2, ..., x_n)$, the gradient is a vector of all its partial derivatives:</p>
    <div class="math-block">$$\nabla f = \left[ \frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}, \dots, \frac{\partial f}{\partial x_n} \right]^T$$</div>
    <p><strong>Directional Derivative</strong>: To find the slope in any arbitrary direction vector $\mathbf{v}$, we use: $D_{\mathbf{v}}f = \nabla f \cdot \mathbf{v}$.</p>

    <h3>2. The Jacobian ($J$)</h3>
    <p>When we have a function $\mathbf{f}$ that maps $\mathbb{R}^n$ to $\mathbb{R}^m$, the Jacobian is a matrix of all first-order partial derivatives:</p>
    <div class="math-block">$$J = \begin{bmatrix} \frac{\partial f_1}{\partial x_1} & \dots & \frac{\partial f_1}{\partial x_n} \\ \vdots & \ddots & \vdots \\ \frac{\partial f_m}{\partial x_1} & \dots & \frac{\partial f_m}{\partial x_n} \end{bmatrix}$$</div>

    <h3>3. The Hessian ($H$)</h3>
    <p>The Hessian is a square matrix of <strong>second-order</strong> partial derivatives of a scalar-valued function. It describes the local curvature:</p>
    <div class="math-block">$$H_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}$$</div>

    <h2 id="example-gradient">Example 1: Navigating a 2D Gradient</h2>
    <div class="example-box">
      <h4>Problem: Computing the Direction of Steepest Ascent</h4>
      <p>Find the gradient of $f(x, y) = x^2 + 3xy + 2y^2$ at the point $(1, 2)$.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Partial w.r.t $x$:</strong> $\frac{\partial f}{\partial x} = 2x + 3y$.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Partial w.r.t $y$:</strong> $\frac{\partial f}{\partial y} = 3x + 4y$.</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Evaluate at $(1, 2)$:</strong> $\frac{\partial f}{\partial x} = 2(1) + 3(2) = 8$ and $\frac{\partial f}{\partial y} = 3(1) + 4(2) = 11$.</div></div>
      <div class="step-box"><span class="step-num">4</span><div><strong>Resulting Gradient:</strong> $\nabla f(1, 2) = [8, 11]^T$.</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Interpretation:</strong> To increase the function value as quickly as possible from $(1, 2)$, you should move in the direction of the vector $[8, 11]$. In ML, we move in the <strong>opposite</strong> direction $(-[8, 11])$ to minimize loss.
        </div>
      </div>
    </div>

    <h2 id="example-hessian">Example 2: Detecting Surface Curvature (Hessian)</h2>
    <div class="example-box">
      <h4>Problem: Analyzing the Local Shape of $f(x, y) = x^2 + y^2$</h4>
      <p>Calculate the Hessian matrix and use its eigenvalues to describe the curvature.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>First Derivatives:</strong> $f_x = 2x$, $f_y = 2y$.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Second Derivatives:</strong> $f_{xx} = 2$, $f_{yy} = 2$, $f_{xy} = f_{yx} = 0$.</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Construct Hessian:</strong> 
        <div class="math-block" style="background:transparent; border:none; padding:0; margin-top:10px;">
          $$H = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$$
        </div>
      </div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Interpretation:</strong> Both eigenvalues are positive ($\lambda = 2$). This indicates the surface is <strong>locally bowl-shaped (convex)</strong>, and any critical point found here will be a local minimum.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <p>Using <code>Autograd</code> or <code>PyTorch</code> is standard for gradients, but here is a conceptual look at computing a Jacobian for a simple vector function.</p>
    <python-code>
import numpy as np

def compute_jacobian(x_vec):
    # Function f(x,y) = [x^2 + y, y^2 + x]
    x, y = x_vec[0], x_vec[1]
    
    # Jacobian matrix components
    df1_dx, df1_dy = 2*x, 1
    df2_dx, df2_dy = 1, 2*y
    
    jacobian = np.array([
        [df1_dx, df1_dy],
        [df2_dx, df2_dy]
    ])
    return jacobian

point = np.array([1.0, 2.0])
print("Jacobian Matrix at (1,2):\n", compute_jacobian(point))
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Gradient Descent</strong>: The negative gradient $-\nabla f$ points directly toward the local minimum of the loss.</li>
      <li><strong>Neural Network Training</strong>: The Jacobian is used when calculating the derivatives of a layer output (vector) with respect to its inputs (vector).</li>
      <li><strong>Second-Order Optimization</strong>: Algorithms like <strong>Newton’s Method</strong> use the Hessian to find the minimum faster by accounting for the surface curvature.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Multivariable terrains define where we can move. Now, learn how to calculate "area under the curve" and probability accumulates in <strong><a href="#/mathematics/calculus/integrals">Integral Calculus</a></strong>.
    </div>
  `
};
