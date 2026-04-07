const e={id:"basics",title:"Introduction to Calculus",description:"Differential Calculus is the study of how functions change when their inputs change by infinitesimal amounts. In Machine Learning, it's the primary engine for optimization.",color:"#1B5E20",html:String.raw`
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
  `},t={id:"neural-networks",title:"Calculus in Neural Networks",description:"In Deep Learning, multivariate calculus is the engine that powers optimization. Learn how the Chain Rule enables efficient training.",color:"#4A148C",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Calculus · Neural Networks</div>
      <h1>Calculus in Neural Networks</h1>
      <p>In the context of Deep Learning, the engine that powers optimization is <strong>Multivariate Calculus</strong>. While a single-variable function changes based on one input, neural networks are massive functions where the output (Loss) depends on millions of parameters (weights and biases).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">1. Multivariate Calculus Concepts</a>
      <a href="#backprop">2. Backpropagation & The Chain Rule</a>
      <a href="#walkthrough">3. Mathematical Walkthrough</a>
      <a href="#conclusion">Conclusion</a>
    </div>

    <h2 id="theory">1. Multivariate Calculus Concepts</h2>
    <p>In a neural network, the Loss function $L$ is a scalar value, but it is a function of many variables: $L(w_1, w_2, \dots, w_n)$. To understand how to minimize this loss, we use two primary tools:</p>
    <ul>
      <li><strong>Partial Derivatives:</strong> These measure how the function changes as we vary one specific variable while keeping all others constant. For a weight $w_i$, the partial derivative is denoted as $\frac{\partial L}{\partial w_i}$.</li>
      <li><strong>The Gradient ($\nabla$):</strong> This is a vector of all partial derivatives. It points in the direction of the steepest ascent. In training, we move in the opposite direction (Gradient Descent).</li>
    </ul>

    <h2 id="backprop">2. How the Chain Rule enables Backpropagation</h2>
    <p>Backpropagation is essentially a recursive application of the <strong>Chain Rule</strong>. In a multi-layered network, the input flows through several nested functions:</p>
    <div class="math-block">$$L(y, \hat{y}) = L(f_n(f_{n-1}(\dots f_1(x)\dots)))$$</div>
    
    <p>To calculate how the Loss changes with respect to a weight in an early layer, we must "chain" the derivatives from the output back to that weight.</p>

    <div class="def-box">
      <div class="def-title">The Chain Rule Formula</div>
      <p style="margin:0">If $z$ depends on $y$, and $y$ depends on $x$, then:</p>
      <div class="math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        $$\frac{\partial z}{\partial x} = \frac{\partial z}{\partial y} \cdot \frac{\partial y}{\partial x}$$
      </div>
    </div>
    
    <p>In a Neural Network, this allows us to calculate the local gradient at each node and multiply it by the gradient flowing from above. This efficiency prevents us from having to re-calculate the entire derivative for every single parameter from scratch.</p>

    <h2 id="walkthrough">3. Mathematical Walkthrough: Updating Weights</h2>
    <p>Let’s look at a single neuron with one input $x$, a weight $w$, a bias $b$, and a sigmoid activation function $\sigma$.</p>

    <div class="example-box">
      <h4>The Forward Pass:</h4>
      <ol>
        <li><strong>Linear Combination:</strong> $z = wx + b$</li>
        <li><strong>Activation:</strong> $a = \sigma(z) = \frac{1}{1 + e^{-z}}$</li>
        <li><strong>Loss (MSE):</strong> $L = \frac{1}{2}(y - a)^2$</li>
      </ol>

      <h4>The Backward Pass (Calculating $\frac{\partial L}{\partial w}$):</h4>
      <p>Using the Chain Rule, we decompose the derivative:</p>
      <div class="math-block">$$\frac{\partial L}{\partial w} = \frac{\partial L}{\partial a} \cdot \frac{\partial a}{\partial z} \cdot \frac{\partial z}{\partial w}$$</div>
      
      <ol style="list-style-type: decimal;">
        <li>Derivative of Loss w.r.t Activation: $\frac{\partial L}{\partial a} = -(y - a)$</li>
        <li>Derivative of Activation w.r.t Linear Sum: $\frac{\partial a}{\partial z} = a(1 - a)$</li>
        <li>Derivative of Linear Sum w.r.t Weight: $\frac{\partial z}{\partial w} = x$</li>
      </ol>

      <p>Combining them:</p>
      <div class="math-block">$$\frac{\partial L}{\partial w} = -(y - a) \cdot a(1 - a) \cdot x$$</div>

      <h4>The Weight Update:</h4>
      <p>Once we have the gradient, we update the weight using a learning rate ($\eta$):</p>
      <div class="math-block">$$w_{new} = w_{old} - \eta \cdot \frac{\partial L}{\partial w}$$</div>
    </div>

    <h2 id="conclusion">Conclusion</h2>
    <p>By calculating these partial derivatives layer-by-layer moving backwards, the network "learns" exactly how much each weight contributed to the total error. This mathematical foundation is what allows complex models to converge toward an optimal solution.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Single-variable chains are simple, but ML involves thousands of simultaneous weights. Let's see <strong><a href="#/mathematics/calculus/neural-networks-examples">Practical Examples</a></strong> of the Chain Rule in action.
    </div>
  `},a={id:"neural-networks-examples",title:"Practical Examples",description:"Solidify your understanding of how the Chain Rule and Partial Derivatives operate in a computational graph with two distinct examples.",color:"#AB47BC",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📝 Solved Examples · Calculus</div>
      <h1>Neural Network Updates: Practical Examples</h1>
      <p>To solidify your understanding of how the <strong>Chain Rule</strong> and <strong>Partial Derivatives</strong> operate in a computational graph, let's walk through two distinct examples: a simple <strong>Linear Regression</strong> update and a <strong>Sigmoid Neuron</strong> update.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#linear">Example 1: Simple Linear Neuron (MSE)</a>
      <a href="#sigmoid">Example 2: Logistic Regression (Sigmoid)</a>
      <a href="#takeaways">Key Takeaways for Implementation</a>
    </div>

    <h2 id="linear">Example 1: Simple Linear Neuron (Mean Squared Error)</h2>
    <div class="example-box">
      <p><strong>Scenario:</strong> We have a single input $x = 2$, a weight $w = 0.5$, and a bias $b = 0$. The target output is $y = 2$. We use a simple linear activation ($a = z$) and Mean Squared Error (MSE) loss.</p>

      <h4>1. Forward Pass</h4>
      <ul>
        <li><strong>Linear Combination ($z$):</strong> $z = w \cdot x + b = 0.5 \cdot 2 + 0 = 1.0$</li>
        <li><strong>Activation ($a$):</strong> Since it's linear, $a = z = 1.0$</li>
        <li><strong>Loss ($L$):</strong> $L = (y - a)^2 = (2 - 1)^2 = 1.0$</li>
      </ul>

      <h4>2. Backward Pass (The Deep-Dive)</h4>
      <p>We need to find $\frac{\partial L}{\partial w}$. By the Chain Rule:</p>
      <div class="math-block">$$\frac{\partial L}{\partial w} = \frac{\partial L}{\partial a} \cdot \frac{\partial a}{\partial w}$$</div>

      <p><strong>Step A:</strong> $\frac{\partial L}{\partial a}$ (How loss changes with prediction)</p>
      <div class="math-block">$$\frac{\partial}{\partial a}(y - a)^2 = 2(y - a) \cdot (-1) = -2(2 - 1) = -2$$</div>

      <p><strong>Step B:</strong> $\frac{\partial a}{\partial w}$ (How prediction changes with weight)</p>
      <div class="math-block">$$\frac{\partial}{\partial w}(w \cdot x + b) = x = 2$$</div>

      <h4>3. Result</h4>
      <ul>
        <li><strong>Gradient:</strong> $\frac{\partial L}{\partial w} = (-2) \cdot (2) = -4$</li>
        <li><strong>Interpretation:</strong> Because the gradient is negative, increasing the weight $w$ will decrease the loss $L$.</li>
      </ul>
    </div>

    <h2 id="sigmoid">Example 2: Logistic Regression (Sigmoid Activation)</h2>
    <div class="example-box">
      <p><strong>Scenario:</strong> In deep learning, we rarely use linear units. Let’s look at a node with a <strong>Sigmoid</strong> activation function.</p>
      <ul>
        <li><strong>Inputs:</strong> $x = 1.0$, $w = 0.8$, $b = 0.1$</li>
        <li><strong>Target:</strong> $y = 1.0$</li>
        <li><strong>Learning Rate ($\eta$):</strong> $0.1$</li>
      </ul>

      <h4>1. Forward Pass</h4>
      <ul>
        <li><strong>Summation ($z$):</strong> $z = (0.8 \times 1.0) + 0.1 = 0.9$</li>
        <li><strong>Sigmoid ($a$):</strong> $\sigma(0.9) = \frac{1}{1 + e^{-0.9}} \approx 0.711$</li>
        <li><strong>Loss ($L$):</strong> $L = \frac{1}{2}(1.0 - 0.711)^2 \approx 0.0417$</li>
      </ul>

      <h4>2. Backward Pass (Partial Derivatives)</h4>
      <p>We apply the chain rule: $\frac{\partial L}{\partial w} = \frac{\partial L}{\partial a} \cdot \frac{\partial a}{\partial z} \cdot \frac{\partial z}{\partial w}$</p>
      <ul>
        <li>$\frac{\partial L}{\partial a}$: $-(y - a) = -(1.0 - 0.711) = -0.289$</li>
        <li>$\frac{\partial a}{\partial z}$: The derivative of $\sigma(z)$ is $a(1 - a) \approx 0.711 \times 0.289 \approx 0.205$</li>
        <li>$\frac{\partial z}{\partial w}$: This is simply the input $x = 1.0$.</li>
      </ul>

      <h4>3. Calculating the Total Gradient</h4>
      <div class="math-block">$$\frac{\partial L}{\partial w} = (-0.289) \times (0.205) \times (1.0) \approx -0.0592$$</div>

      <h4>4. Weight Update</h4>
      <p>Using Gradient Descent:</p>
      <div class="math-block">$$w_{new} = w_{old} - (\eta \cdot \text{Gradient})$$</div>
      <div class="math-block">$$w_{new} = 0.8 - (0.1 \cdot -0.0592) = 0.80592$$</div>
    </div>

    <h2 id="takeaways">Key Takeaways for Implementation</h2>
    <ul>
      <li><strong>Vanishing Gradient:</strong> Notice in Example 2 that the derivative of the Sigmoid ($\frac{\partial a}{\partial z}$) is a small decimal (max 0.25). In deep networks, the final gradient becomes extremely small, leading to the "Vanishing Gradient" problem.</li>
      <li><strong>Partial Derivative Efficiency:</strong> In modern frameworks (like PyTorch or TensorFlow), we don't compute the full symbolic derivative. We compute the <strong>Numerical Gradient</strong> at each step of the chain and pass that value back.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Single-variable chains are simple, but ML involves thousands of simultaneous weights. Explore the geometry of high-dimensional loss surfaces in <strong><a href="#/mathematics/calculus/multivariable">Multivariable Calculus</a></strong>.
    </div>
  `},i={id:"multivariable",title:"Multivariable Calculus",description:"Multivariable Calculus extends the concepts of single-variable differentiation to functions of several variables. In ML, we optimize millions of parameters simultaneously.",color:"#388E3C",html:String.raw`
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
      <a href="#example">Illustrative Example</a>
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

    <h2 id="example">Illustrative Example</h2>
    <div class="example-box">
      <h4>Problem: Gradient and Hessian Analysis</h4>
      <p>Find the Gradient and Hessian of $f(x, y) = 3x^2 + 2xy + y^2$.</p>
      
      <p><strong>Step-by-Step Solution:</strong></p>
      <ol>
        <li><strong>First Partial Derivatives</strong>:
          <ul>
            <li>$\frac{\partial f}{\partial x} = 6x + 2y$</li>
            <li>$\frac{\partial f}{\partial y} = 2x + 2y$</li>
          </ul>
        </li>
        <li><strong>Gradient Vector</strong>: $\nabla f = [6x + 2y, 2x + 2y]^T$.</li>
        <li><strong>Second Partial Derivatives</strong>:
          <ul>
            <li>$\frac{\partial^2 f}{\partial x^2} = 6$, $\frac{\partial^2 f}{\partial y^2} = 2$</li>
            <li>$\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x} = 2$</li>
          </ul>
        </li>
        <li><strong>Hessian Matrix</strong>: 
          <div class="math-block" style="background:transparent; border:none; padding:0; margin-top:10px;">
            $$H = \begin{bmatrix} 6 & 2 \\ 2 & 2 \end{bmatrix}$$
          </div>
        </li>
      </ol>
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
  `},n={id:"integrals",title:"Integral Calculus",description:"Integral Calculus is the inverse of differentiation. While derivatives measure rate of change, integrals measure accumulation and area under a curve.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Calculus · Integration</div>
      <h1>Integral Calculus: The Math of Accumulation</h1>
      <p><strong>Integral Calculus</strong> is the inverse of differential calculus. While derivatives measure the rate of change (the slope), integrals measure the <strong>accumulation</strong> of quantities (the area under a curve). In Machine Learning and Data Science, integration is the fundamental tool used to compute probabilities, expectations, and normalize complex distributions.</p>
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
        <li><strong>Differential Calculus</strong>: Understanding that $\frac{d}{dx}(\text{Integral}) = \text{Function}$.</li>
        <li><strong>Functions and Limits</strong>: Knowledge of how continuous functions behave.</li>
        <li><strong>Basic Summation</strong>: Integrals are essentially "infinite sums" of infinitesimal parts.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>In ML, we often deal with <strong>Probability Density Functions (PDFs)</strong>. A PDF $f(x)$ tells us the relative likelihood of a continuous random variable. However, the probability of a single exact point (e.g., "What is the probability a person is exactly 175.0000... cm tall?") is zero.</p>
    
    <div class="callout tip">
      <div class="callout-icon">🏗️</div>
      <div class="callout-body">
        We use <strong>Integration</strong> to find the probability over a range (e.g., "between 170 and 180 cm").
        <ul>
          <li><strong>Indefinite Integral</strong>: Finds the "Antiderivative"—the general form of the accumulation function.</li>
          <li><strong>Definite Integral</strong>: Calculates the actual "Net Area" between two specific points.</li>
        </ul>
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>

    <h3>1. The Indefinite Integral</h3>
    <p>If $F'(x) = f(x)$, then:</p>
    <div class="math-block">$$\int f(x) \, dx = F(x) + C$$</div>
    <p>where $C$ is the constant of integration (representing the fact that shifting a graph vertically doesn't change its slope).</p>

    <h3>2. The Definite Integral (Fundamental Theorem of Calculus)</h3>
    <p>To find the area under $f(x)$ from $a$ to $b$:</p>
    <div class="math-block">$$\int_{a}^{b} f(x) \, dx = F(b) - F(a)$$</div>

    <h3>3. Integration in Probability</h3>
    <p>For a continuous random variable $X$ to be a valid probability distribution, the total area under its PDF must be 1:</p>
    <div class="math-block">$$\int_{-\infty}^{\infty} f(x) \, dx = 1$$</div>
    <p>The probability that $X$ falls between $a$ and $b$ is:</p>
    <div class="math-block">$$P(a \leq X \leq b) = \int_{a}^{b} f(x) \, dx$$</div>

    <h2 id="example">Illustrative Example</h2>
    <div class="example-box">
      <h4>Problem: Finding Range Probabilities</h4>
      <p>Given a simple PDF $f(x) = \frac{3}{8}x^2$ defined on the interval $[0, 2]$, find the probability that $x$ is between 1 and 2.</p>
      
      <p><strong>Step-by-Step Solution:</strong></p>
      <ol>
        <li><strong>Set up the integral</strong>: $P(1 \leq x \leq 2) = \int_{1}^{2} \frac{3}{8}x^2 \, dx$.</li>
        <li><strong>Find the antiderivative</strong>: $\int \frac{3}{8}x^2 \, dx = \frac{3}{8} \cdot \frac{x^3}{3} = \frac{1}{8}x^3$.</li>
        <li><strong>Apply limits</strong>:
          <ul>
            <li>$F(2) = \frac{1}{8}(2)^3 = 1$.</li>
            <li>$F(1) = \frac{1}{8}(1)^3 = 0.125$.</li>
          </ul>
        </li>
        <li><strong>Subtract</strong>: $1 - 0.125 = 0.875$.</li>
      </ol>
      <p><strong>Result:</strong> There is an <strong>87.5%</strong> probability that $x$ falls in the range $[1, 2]$.</p>
    </div>

    <h2 id="implementation">Implementation (Python/SciPy)</h2>
    <p>While we use integrals theoretically, in AI we often perform <strong>Numerical Integration</strong> when the function is too complex to solve by hand.</p>
    <python-code>
import numpy as np
from scipy.integrate import quad

# Define the PDF function: f(x) = 3/8 * x^2
def pdf(x):
    return (3/8) * (x**2)

# Calculate definite integral from 1 to 2
# quad returns (result, estimated_error)
probability, error = quad(pdf, 1, 2)

print(f"Probability P(1 <= X <= 2): {probability:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Expectation and Variance</strong>: Computing the average value of a continuous distribution: $E[X] = \int x f(x) \, dx$.</li>
      <li><strong>Bayesian Inference</strong>: Calculating the "Evidence" (the denominator in Bayes' Rule) often requires integrating over all possible parameter values.</li>
      <li><strong>Gaussian Distributions</strong>: The Bell Curve is defined by an integral that ensures its total area equals 1.</li>
      <li><strong>Kernel Density Estimation (KDE)</strong>: Used in data visualization and non-parametric modeling.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Integration measures accumulation. Now, find the 'best' possible values by exploring <strong><a href="#/mathematics/calculus/optimization">Optimization Theory</a></strong>.
    </div>
  `},r={id:"optimization",title:"Optimization Theory",description:"Optimization Theory is the study of finding the 'best' solution. In ML, this means finding weights that minimize the Loss Function.",color:"#A5D6A7",html:String.raw`
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
  `},o={id:"vector-calculus",title:"Vector Calculus",description:"Vector Calculus deals with the differentiation and integration of vector fields. Learn how divergence and curl are used to constrain AI simulations.",color:"#66BB6A",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🌀 Calculus · Vector Fields</div>
      <h1>Vector Calculus: The Geometry of Flow</h1>
      <p><strong>Vector Calculus</strong> deals with the differentiation and integration of <strong>vector fields</strong>—regions where every point is associated with a vector (like wind speed in the atmosphere or force in an electromagnetic field). While standard calculus focuses on how single values change, Vector Calculus describes how these fields flow, rotate, and spread.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example">Illustrative Example</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Multivariable Calculus</strong>: Understanding the <strong>Gradient</strong> ($\nabla$) operator.</li>
        <li><strong>Linear Algebra</strong>: Dot products and Cross products.</li>
        <li><strong>Vector Fields</strong>: Visualizing functions that map $\mathbb{R}^n \to \mathbb{R}^n$.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>In AI, we use vector calculus to constrain models. For example, if we are training an AI to simulate water flow, we must enforce that the <strong>Divergence is zero</strong> (incompressibility).</p>
    <ul>
      <li><strong>Divergence</strong>: Measures the "outward flow." Does a point in the field act as a <strong>source</strong> (stuff moving away) or a <strong>sink</strong> (stuff moving toward it)?</li>
      <li><strong>Curl</strong>: Measures the "rotation." If you placed a tiny paddlewheel in the field, would it spin?</li>
    </ul>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>The "Del" operator $\nabla$ is defined as:</p>
    <div class="math-block">$$\nabla = \left[ \frac{\partial}{\partial x}, \frac{\partial}{\partial y}, \frac{\partial}{\partial z} \right]$$</div>

    <h3>1. Divergence ($\text{div } \mathbf{F}$ or $\nabla \cdot \mathbf{F}$)</h3>
    <p>Divergence is the <strong>dot product</strong> of the Del operator and the vector field $\mathbf{F} = [P, Q, R]$. It results in a <strong>scalar</strong>.</p>
    <div class="math-block">$$\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$$</div>

    <h3>2. Curl ($\text{curl } \mathbf{F}$ or $\nabla \times \mathbf{F}$)</h3>
    <p>Curl is the <strong>cross product</strong> of the Del operator and the vector field. It results in a <strong>vector</strong> that represents the axis of rotation.</p>
    <div class="math-block">
      $$\nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix}$$
    </div>

    <h2 id="example">Illustrative Example</h2>
    <div class="example-box">
      <h4>Problem: Finding Field Divergence</h4>
      <p>Given a 2D vector field $\mathbf{F} = [x^2, y^2]$, find the divergence at point $(2, 3)$.</p>
      
      <p><strong>Step-by-Step Solution:</strong></p>
      <ol>
        <li>Identify components: $P = x^2$, $Q = y^2$.</li>
        <li>Calculate partials: $\frac{\partial P}{\partial x} = 2x$, $\frac{\partial Q}{\partial y} = 2y$.</li>
        <li>Sum them for Divergence: $\nabla \cdot \mathbf{F} = 2x + 2y$.</li>
        <li>Evaluate at $(2, 3)$: $2(2) + 2(3) = 4 + 6 = 10$.</li>
      </ol>
      <p><strong>Result:</strong> Since $10 > 0$, the point $(2, 3)$ is a source where the field is "expanding."</p>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <p>While we usually use symbolic math libraries like <code>SymPy</code> for these, we can approximate divergence on a grid for AI applications.</p>
    <python-code>
import numpy as np

def numerical_divergence(F_x, F_y, dx, dy):
    """
    Computes the divergence of a 2D vector field numerically.
    """
    # Use numpy gradient to get partial derivatives
    dFx_dx = np.gradient(F_x, axis=1) / dx
    dFy_dy = np.gradient(F_y, axis=0) / dy
    
    return dFx_dx + dFy_dy

# Create a sample coordinate grid
x = np.linspace(-5, 5, 10)
y = np.linspace(-5, 5, 10)
X, Y = np.meshgrid(x, y)

# Define field F = [X**2, Y**2]
Fx = X**2
Fy = Y**2

div = numerical_divergence(Fx, Fy, 1, 1)
print(f"Divergence at center index [5,5]: {div[5, 5]}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>PINNs</strong>: Loss functions are designed to penalize the model if the Divergence or Curl violates physical laws (e.g., Maxwell's equations).</li>
      <li><strong>Generative Models</strong>: Divergence is used in Normalizing Flows to track how probability density "spreads" as data is transformed.</li>
      <li><strong>Fluid Dynamics AI</strong>: Simulating weather, aerodynamics, or medical blood flow simulations.</li>
    </ul>

    <div class="linking-rule">
      <strong>Final Step:</strong> Having mastered vector fields and flow, you've completed the <strong>Calculus</strong> foundations. You are now equipped to step into <strong><a href="#/mathematics/information-theory/entropy">Information Theory</a></strong>, where we measure "Surprise" and "Entropy".
    </div>
  `},s={id:"calculus",title:"Calculus",description:"The mathematical engine for optimization, using derivatives and gradients to minimize model error and power backpropagation.",keyConcepts:[{title:"Differentiation",description:"Calculating instantaneous rates of change."},{title:"Partial Derivatives",description:"Handling variables in multi-dimensional space."},{title:"Gradients",description:"Vectors of change used in optimization."},{title:"Gradient Descent",description:"Iterative minimization of loss functions."},{title:"Chain Rule",description:"The foundation of neural network backpropagation."},{title:"Jacobian & Hessian",description:"Coordinate transforms and second-order optimization."},{title:"Area Under Curve",description:"Integration and model evaluation (AUC-ROC)."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Calculus: <span class="text-accent italic">The Engine of Optimization</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In the world of Machine Learning, we don't just "calculate" answers; we "learn" them. If Linear Algebra provides the coordinate system for nuestro data, <strong>Calculus</strong> provides the mechanism for improvement. It is the mathematical engine that powers Gradient Descent and Backpropagation.
        </p>
        
        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          Training a neural network is essentially a massive optimization problem—finding the minimum point of a complex, high-dimensional surface. Calculus allows us to navigate this surface, determining exactly how to adjust millions of weights to minimize error.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- Why It Matters -->
      <div class="space-y-10">
        <div class="flex items-center gap-4">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-accent font-semibold">Why It Matters</h3>
        </div>
        
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          Optimization is the heart of learning. Without Calculus, we would be guessing in the dark. 
        </p>

        <ul class="space-y-8 list-none pl-0">
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Loss Minimization</strong>
              <p class="text-muted-premium font-normal">We define a "Loss Function" to measure error. Calculus tells us the <strong>Gradient</strong>—the direction of steepest ascent—so we can move in the opposite direction to reduce error.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Backpropagation</strong>
              <p class="text-muted-premium font-normal">The <strong>Chain Rule</strong> is the secret sauce of deep learning. It allows us to calculate how a small change in an early weight affects the final output across hundreds of layers.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Model Convergence</strong>
              <p class="text-muted-premium font-normal">Understanding second-order derivatives (Hessians) helps us navigate "saddle points" and ensure our models actually reach their optimal states.</p>
            </div>
          </li>
        </ul>
      </div>

      <hr class="border-border-premium/50" />

      <!-- Core Concepts -->
      <div class="space-y-10">
        <div class="flex items-center gap-4">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-accent font-semibold">Core Concepts to Master</h3>
        </div>

        <p class="text-lg text-text-premium font-normal leading-relaxed">
          To master the mechanics of AI training, we focus on these critical areas:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Partial Derivatives</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Handling millions of variables simultaneously while focusing on one at a time.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">The Gradient Vector</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Visualizing the compass that points toward the "peak" of a function.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Chain Rule</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">The mathematical backbone for training deep architectural structures.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Jacobian Matrices</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Scaling derivatives to vector-valued functions for complex layers.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Hessian & Curvature</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Understanding the "shape" of the loss surface to speed up learning.</p>
          </div>
        </div>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <div class="flex items-center gap-4">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-accent font-semibold">What to Expect</h3>
        </div>

        <p class="text-lg text-text-premium font-normal leading-relaxed">
          On this page, we move beyond the rote memorization of derivative tables. We focus on the <strong>geometry of change</strong>. You will learn to see a loss function not just as a formula, but as a landscape that your model must navigate.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "The derivative is the most powerful tool in the arsenal of the mathematician... and the engineer."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Classical Proverb</span>
          </div>
        </div>

        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          By the end of this module, you will understand exactly why models learn, why they fail, and how to tune the "learning rate" by reading the landscape of error.
        </p>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to optimize?</p>
        <a 
          href="/#/mathematics/calculus/basics" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Differentiation
        </a>
      </div>

    </div>
  `,sections:[e,t,a,i,n,r,o]};export{s as CALCULUS_DATA};
