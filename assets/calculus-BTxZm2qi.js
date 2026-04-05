const t={id:"differentiation",title:"Calculus: The Optimization Engine of Gradient Descent",description:"A formal investigation into the mathematics of continuous change—from univariate derivatives and the Chain Rule to multidimensional gradients and the Jacobian matrices of deep learning.",formula:"f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",details:["The Derivative: Instantaneous Rate of Change","Chain Rule: The Backbone of Backpropagation","Partial Derivatives: Understanding Multidimensional Impact","The Gradient Vector: Direction of Steepest Ascent","Jacobian Matrices: Derivatives of Vector-Valued Functions","Numerical Implementation: Symbolic Differentiation with SymPy"],html:String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Mathematical Roadmap</div>
      <a href="#derivative">I. The Fundamental Derivative</a>
      <a href="#chainrule">II. Backpropagation and the Chain Rule</a>
      <a href="#gradients">III. Gradients and Optimization</a>
      <a href="#lab">Numerical Laboratory: SymPy</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="derivative" class="premium-h2">I. The Fundamental Derivative</h2>
    <p>The derivative $f'(x)$ represents the instantaneous rate of change of a function. In the domain of machine learning, this derivative tells us exactly how much the loss (error) will change if we tweak a specific weight by an infinitesimal amount.</p>

    <div class="premium-math-block">
      f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">📉</div>
      <div class="premium-callout-body">
        <strong>Optimization Insight:</strong> If $f'(x) > 0$, the function is increasing; to minimize it, we must decrease $x$. If $f'(x) < 0$, the function is decreasing; we should increase $x$.
      </div>
    </div>

    <!-- SECTION 2 -->
    <h2 id="chainrule" class="premium-h2">II. Backpropagation and the Chain Rule</h2>
    <p>Neural networks are essentially deeply nested composite functions. To calculate how a weight in the first layer affects the final loss, we use the <strong>Chain Rule</strong> to propagate error signals backwards through the computational graph.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">Differential Composition</div>
      <p style="margin:0">If $y = f(u)$ and $u = g(x)$, then the derivative of $y$ with respect to $x$ is the product of the local derivatives:</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}
      </div>
    </div>

    <!-- SECTION 3 -->
    <h2 id="gradients" class="premium-h2">III. Gradients and Optimization</h2>
    <p>In multi-dimensional spaces, we deal with vectors of partial derivatives. These vectors, known as <strong>Gradients</strong>, point in the direction of the steepest ascent on the loss surface.</p>

    <div class="premium-math-block">
      \nabla f = \left[ \frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}, \dots, \frac{\partial f}{\partial x_n} \right]^T
    </div>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Operator</th><th>Notation</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Partial Derivative</strong></td><td>$\partial f / \partial x_i$</td><td>Rate of change along a single axis.</td></tr>
          <tr><td><strong>Gradient</strong></td><td>$\nabla f$</td><td>Vector pointing to steepest ascent.</td></tr>
          <tr><td><strong>Jacobian</strong></td><td>$\mathbf{J}$</td><td>Matrix of first-order partial derivatives.</td></tr>
          <tr><td><strong>Hessian</strong></td><td>$\mathbf{H}$</td><td>Matrix of second-order partial derivatives (Curvature).</td></tr>
        </tbody>
      </table>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Numerical Laboratory: SymPy</h2>
    <div class="premium-math-block">
      <python-code>
import sympy as sp

# 1. Define symbolic variable and function
x = sp.Symbol('x')
f = x**2 + 5*x + 6

# 2. Compute symbolic derivative (The Gradient)
gradient_expr = sp.diff(f, x)

# 3. Evaluate gradient at a specific weight point
slope_at_2 = gradient_expr.subs(x, 2)

print(f"Target Loss Function: {f}")
print(f"Gradient Formula: {gradient_expr}")
print(f"Calculated Gradient at x=2: {slope_at_2}")
      </python-code>
    </div>
  `};export{t as calculusSection};
