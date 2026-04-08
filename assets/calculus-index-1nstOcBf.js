const t={id:"derivatives",title:"Derivatives",description:"The Derivative is the study of how functions change when their inputs change by infinitesimal amounts. It's the primary engine for machine learning optimization.",color:"#1B5E20",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📐 Calculus · Derivatives</div>
      <h1>Derivatives: The Rate of Change</h1>
      <p>A <strong>Derivative</strong> measures how "sensitive" a function is to a tiny change in its input. In Machine Learning, we use derivatives to determine exactly how small adjustments to model weights will affect our error (loss).</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Functions</strong>: Understanding \(f(x)\).</li>
        <li><strong>Slopes</strong>: Basic Algebra of "Rise over Run."</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Calculus is the "Language of Sensitivity." It answers the question: <em>"If I nudge this variable by a hair, how much does the result move?"</em> If you are standing on a hill, the derivative at your feet is the <strong>slope</strong>. Positive means uphill, negative means downhill. ML models always want to move "downhill" to find the minimum error.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a Derivative as an <strong>Instantaneous Speedometer</strong>. 
        If you're driving, the speedometer doesn't tell you where you've been; it tells you exactly how fast you're changing your position <em>right now</em>. 
        In ML, the derivative tells the model how fast the error is changing with respect to its weights <em>at this exact moment</em>.
      </div>
    </div>

    <visualizer topic="Differentiation" />

    <h2 id="derivation">Formal Definition</h2>
    <p>The derivative \(f'(x)\) is defined as the limit of the average slope as the "nudge" \(h\) goes to zero:</p>
    <div class="math-block">$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$</div>
    <p><strong>Common Rules:</strong></p>
    <ul>
      <li><strong>Power Rule:</strong> \(\frac{d}{dx}x^n = nx^{n-1}\).</li>
      <li><strong>Constant Rule:</strong> \(\frac{d}{dx}C = 0\).</li>
    </ul>

    <h2 id="example-tangent" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Finding Tangent Slopes</h2>
    
      <h4>Problem: Slope of \(f(x) = x^2\) at \(x = 3\)</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Apply Power Rule:</strong> \(\frac{d}{dx}x^2 = 2x\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Substitute:</strong> Evaluate at \(x = 3 \to 2(3) = 6\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> The slope (rate of change) is 6. For every 0.01 unit you increase \(x\), the output \(y\) will increase by approximately 0.06 units.
        </div>
      </div>
    

    <h2 id="example-loss" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Sensitivity of Loss to Bias</h2>
    
      <h4>Problem: Nudging a Single Parameter</h4>
      <p>Assume your Loss \(L = (b - 5)^2\) where \(b\) is a bias term. Calculate the sensitivity at \(b = 2\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Differentiate:</strong> Using the chain/power rule, \(\frac{dL}{db} = 2(b - 5)\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Evaluate:</strong> At \(b = 2 \to 2(2 - 5) = -6\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> The derivative is <strong>negative</strong>. This tells the model: "Increasing the bias \(b\) will <strong>decrease</strong> the loss." So the optimization algorithm will nudge \(b\) higher.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
def f(x):
    return x**2

def derivative(x, h=1e-5):
    # Numerical approximation (the limit definition)
    return (f(x + h) - f(x)) / h

x_val = 3.0
print(f"Approximated slope at x=3: {derivative(x_val):.4f}")
print(f"Exact slope (2x) at x=3: {2*x_val}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Activation Functions</strong>: We calculate derivatives of sigmoid or ReLU to update network weights.</li>
      <li><strong>Optimizer Steps</strong>: Calculating how small parameter changes reduce total error.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Single variables are rare in ML. How do we find slopes on multidimensional planes? Explore <strong><a href="#/mathematics/calculus/partial-derivatives">Partial Derivatives</a></strong>.
    </div>
  `},i={id:"partial-derivatives",title:"Partial Derivatives",description:"A Partial Derivative measures the rate of change of a multi-input function with respect to one variable while other inputs are held constant.",color:"#1B5E20",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📐 Calculus · Multivariable</div>
      <h1>Partial Derivatives: The Specialized Slope</h1>
      <p>A <strong>Partial Derivative</strong> measures how a function changes when we "nudge" only <strong>one</strong> specific input, while freezing all other variables. In Machine Learning, where models have millions of weights, these allow us to isolate the influence of each individual parameter.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Simple Derivatives</strong>: How a 1D function changes.</li>
        <li><strong>Multivariable Functions</strong>: Understanding \(f(x, y)\).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Imagine you are standing on a mountain (the Loss Surface). To optimize your model, you need to know: <em>"If I step strictly North (towards Weight A), does it go up? If I step strictly East (towards Weight B), does it go down?"</em> A partial derivative is that <strong>directional "step"</strong> along a single axis.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Partial Derivatives as <strong>Selective Vision</strong>. 
        If you have a function with 10 variables, the partial derivative w.r.t \(x_1\) "blurs out" everyone else. 
        It treats \(x_2, x_3, \dots\) as if they were fixed constant numbers like 5 or 10. 
        This is how a neural network isolates exactly which of its millions of weights is causing the most error.
      </div>
    </div>

    <visualizer topic="PartialDerivatives" />

    <h2 id="derivation">Formal Definition</h2>
    <p>For a function \(f(x, y)\), the partial derivative with respect to \(x\) is defined by the limit where <strong>only \(x\)</strong> receives a nudge:</p>
    <div class="math-block">$$\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h}$$</div>
    <p>Notice that \(y\) stays exactly the same in both parts of the fraction.</p>

    <h2 id="example-bowl" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Surface Slope of a Bowl</h2>
    
      <h4>Problem: Finding Slopes on \(f(x, y) = x^2 + y^2\)</h4>
      <p>Evaluate the partial derivatives at the point \((1, 2)\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Differentiate w.r.t \(x\):</strong> Treat \(y^2\) as a constant. Derivative of \(x^2 + \text{constant}\) is \(2x\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Differentiate w.r.t \(y\):</strong> Treat \(x^2\) as a constant. Derivative is \(2y\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Evaluate:</strong> At \((1, 2)\) \(\to \frac{\partial f}{\partial x} = 2(1) = 2\) and \(\frac{\partial f}{\partial y} = 2(2) = 4\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Moving toward x is a slope of 2; moving toward y is a slope of 4. Therefore, the function is <strong>more sensitive</strong> to changes in \(y\) at this specific point.
        </div>
      </div>
    

    <h2 id="example-features" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Feature Sensitivity in a Model</h2>
    
      <h4>Problem: Evaluating the Impact of Features</h4>
      <p>A simple model predicts house prices: \(P = 50x + 20y + 10\), where \(x\) is sq-footage and \(y\) is year-built. Calculate the "Partial Impact" of sq-footage.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> We want to know how much one unit of \(x\) moves the price, ignoring the year built.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Differentiate w.r.t \(x\):</strong> \(\frac{\partial P}{\partial x} = \frac{\partial}{\partial x}(50x) + \frac{\partial}{\partial x}(20y) + \frac{\partial}{\partial x}(10) = 50 + 0 + 0 = 50\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> The partial derivative is 50. This means for every unit \(x\) increases, the price \(P\) increases by 50, regardless of the year built (\(y\)).
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

def f(x, y):
    return x<strong>2 + y</strong>2

def partial_derivative_x(x, y, h=1e-5):
    # Only nudge x, keep y fixed
    return (f(x + h, y) - f(x, y)) / h

x_val, y_val = 1.0, 2.0
grad_x = partial_derivative_x(x_val, y_val)

print(f"Partial derivative w.r.t x at (1,2): {grad_x:.4f}")
print(f"Exact derivative (2x): {2*x_val}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Building Gradient Vectors</strong>: All partial derivatives are stacked to create the "Gradient compass."</li>
      <li><strong>Weight Isolation</strong>: Calculating how one specific weight in a layer contributes to the total error.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Individually, partial derivatives tell us slopes along axes. How do we combine them to find the true "upward" direction? Explore <strong><a href="#/mathematics/calculus/gradient">The Gradient</a></strong>.
    </div>
  `},e={id:"gradient",title:"The Gradient",description:"The Gradient is a vector of all partial derivatives. It points in the direction of the steepest ascent on a high-dimensional surface.",color:"#1B5E20",html:String.raw`
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
    <p>A partial derivative tells you how the mountain slopes if you move strictly North or strictly East. The <strong>Gradient</strong> combines these into a single arrow that points exactly "Uphill." In Machine Learning, we want to go "Downhill," so we simply take a step in the <strong>opposite direction</strong> of the gradient.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of the Gradient like a <strong>Treasure Compass</strong>. 
        Except instead of pointing toward North, it points toward where the error is growing fastest. 
        By "negating" the compass (\(-\nabla f\)), we get a direct path to the <strong>Global Minimum</strong> (the treasure). 
        Without this compass, training a neural network would just be blind guessing.
      </div>
    </div>

    <visualizer topic="Gradient" />

    <h2 id="derivation">Formal Definition</h2>
    <p>For a scalar function \(f(x, y, \dots, z)\), the gradient \(\nabla f\) is a vector of its first-order partial derivatives:</p>
    <div class="math-block">$$\nabla f = \left[ \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \dots, \frac{\partial f}{\partial z} \right]^T$$</div>
    <p><strong>Directional Derivative:</strong> To find the slope in any arbitrary direction vector \(\mathbf{v}\), you take the dot product: \(D_{\mathbf{v}}f = \nabla f \cdot \mathbf{v}\).</p>

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
    <ul>
      <li><strong>Gradient Descent</strong>: The backbone of training every modern AI. We follow the negative gradient to lower the error.</li>
      <li><strong>Hyperparameter Optimization</strong>: Finding the best learning rate or architecture size by treating them as axes.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Optimization often requires calculating how deeply nested layers affect the error. This is the <strong><ctrl42> <a href="#/mathematics/calculus/chain-rule">Chain Rule</a></strong>.
    </div>
  `},a={id:"chain-rule",title:"The Chain Rule",description:"The Chain Rule is the secret sauce of Backpropagation. It allows us to calculate how a weight in the first layer of a deep network affects the final error.",color:"#1B5E20",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📐 Calculus · Deep Learning</div>
      <h1>The Chain Rule: The Secret Sauce</h1>
      <p>The <strong>Chain Rule</strong> is the mathematical "telephone wire" that connects every layer of a neural network. It allows us to calculate how <strong>sensitive</strong> the final error is to a weight deep inside the model by multiplying the local sensitivities of every intermediate step.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Simple Derivatives</strong>: How to differentiate individual terms.</li>
        <li><strong>Function Composition</strong>: Understanding \(f(g(x))\).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In Machine Learning, we don't just have one function mapping input to output. We have a <strong>Chain</strong> of functions: Input \(\to\) Layer 1 \(\to\) Layer 2 \(\to\) Error. To train the network, we need to know: <em>"How much does that deep weight \(w\) affect the Final Error?"</em> The Chain Rule says we can just multiply the slopes of every connection along the path to find the answer.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of the Chain Rule as <strong>Passing a Secret</strong>. 
        If Person A whispers to B, and B whispers to C, and C screams at D—how does A's whisper affect D's scream? 
        The Chain Rule multiplies the "loudness" (slope) of every person in the chain. 
        In ML, this is why we can train 100-layer "Deep" networks: we just keep multiplying the local gradients backwards!
      </div>
    </div>

    <visualizer topic="ChainRule" />

    <h2 id="derivation">Formal Definition</h2>
    <p>If \(z = f(y)\) and \(y = g(x)\), then the derivative of the "composed" function \(z = f(g(x))\) with respect to \(x\) is:</p>
    <div class="math-block">$$\frac{dz}{dx} = \frac{dz}{dy} \cdot \frac{dy}{dx}$$</div>
    <p>For multivariable functions, you sum the paths: \(\frac{\partial f}{\partial t} = \sum_{i} \frac{\partial f}{\partial x_i} \cdot \frac{\partial x_i}{\partial t}\).</p>

    <h2 id="example-composite" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Composite Functions</h2>
    
      <h4>Problem: Derivative of \(f(x) = (3x^2 + 1)^4\)</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Let \(u = 3x^2 + 1\) (inner) and \(f = u^4\) (outer).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Inner Slope:</strong> \(\frac{du}{dx} = 6x\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Outer Slope:</strong> \(\frac{df}{du} = 4u^3\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Chain:</strong> Multiply: \(4(3x^2 + 1)^3 \times 6x = 24x(3x^2 + 1)^3\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We solved a complex problem by breaking it into two simple "linked" parts.
        </div>
      </div>
    

    <h2 id="example-backprop" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Backpropagation in a 2-Layer NN</h2>
    
      <h4>Problem: Error Sensitivity Flow</h4>
      <p>Let Loss \(L = e^a\) and activation \(a = wx\). Find how the loss changes with weight \(w\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Local Gradient 1:</strong> \(\frac{\partial L}{\partial a} = e^a\). (How the error cares about the activation).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Local Gradient 2:</strong> \(\frac{\partial a}{\partial w} = x\). (How the activation cares about the weight).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Final Gradient:</strong> \(\frac{\partial L}{\partial w} = e^a \cdot x\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> This is exactly how <strong>Neural Network Training</strong> works. We calculate the local impact at each step and multiply them to get the "Global" impact of the weight.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

# f(g(x)) where g(x) = x**2 and f(u) = np.sin(u)
x = 3.0

# g'(x) = 2x
dg_dx = 2 * x

# f'(u) = np.cos(u) where u = x**2
df_du = np.cos(x**2)

# Chain Rule: df/dx = df/du * dg/dx
df_dx = df_du * dg_dx

print(f"Derivative of sin(x^2) at x=3: {df_dx:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Backpropagation</strong>: Calculating gradients through 50+ layers of weights.</li>
      <li><strong>Optimization</strong>: Ensuring that updates to early layers move in sync with the error at the end.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we have multiple inputs <em>and</em> multiple outputs? How do we track <strong>all</strong> the sensitivities? Explore <strong><a href="#/mathematics/calculus/jacobian">The Jacobian Matrix</a></strong>.
    </div>
  `},s={id:"jacobian",title:"Jacobian Matrix",description:"The Jacobian is the ultimate 'Sensitivity Grid.' It contains all the partial derivatives for a vector-valued function with multiple inputs and multiple outputs.",color:"#1B5E20",html:String.raw`
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
    <p>A simple derivative (\(df/dx\)) is for one input and one output. A Gradient (\(\nabla f\)) is for many inputs and one output. But in Deep Learning, every layer takes a vector and spits out a <strong>new vector</strong>. To track the sensitivity of this transformation, we need a grid where every row is the gradient of a different output.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of the Jacobian as a <strong>"Responsibility Matrix."</strong> 
        The row tells you: <em>"How much does Output #1 care about Input #1, #2, #3?"</em> 
        The column tells you: <em>"How much does Input #1 affect Output #1, #2, #3?"</em> 
        Without this grid, we couldn't pass gradients through complex "Vector Layers" like Softmax or fully connected layers.
      </div>
    </div>

    <visualizer topic="JacobianHessian" />

    <h2 id="derivation">Formal Definition</h2>
    <p>For a function \(\mathbf{f}(\mathbf{x}) = [f_1, f_2, \dots, f_m]^T\) of input \(\mathbf{x} = [x_1, x_2, \dots, x_n]^T\), the Jacobian is:</p>
    <div class="math-block">$$ \mathbf{J} = \begin{bmatrix} 
    \frac{\partial f_1}{\partial x_1} & \dots & \frac{\partial f_1}{\partial x_n} \\
    \vdots & \ddots & \vdots \\
    \frac{\partial f_m}{\partial x_1} & \dots & \frac{\partial f_m}{\partial x_n} \end{bmatrix} $$</div>

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
  `},n={id:"hessian",title:"Hessian Matrix",description:"The Hessian contains all the second-order partial derivatives. It tells us about the 'Curvature' or 'Acceleration' of the loss function.",color:"#1B5E20",html:String.raw`
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
    <p>A Gradient (\(\nabla f\)) tells you which way to walk to reduce the loss. But it doesn't tell you how <strong>fast</strong> the slope is changing. Are you on a sharp peak? A flat valley? A <strong>Hessian</strong> tells the optimizer: <em>"Slow down, the ground is curving upwards!"</em> or <em>"Speed up, the slope is constant."</em> This is the difference between simple Gradient Descent and advanced "Second-Order" methods.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of the Hessian as <strong>The Road Condition</strong>. 
        The Gradient is your <strong>Steering Wheel</strong>. 
        The Hessian is how much you need to <strong>Brake or Accelerate</strong> because the road is curving. 
        If you are at the bottom of a bowl, the Hessian is "Positive Definite" (all curvas are up). 
        If you are at the top of a hill, it's "Negative Definite" (all curvas are down). 
        If it's a saddle, you're at a "Switchback."
      </div>
    </div>

    <visualizer topic="JacobianHessian" />

    <h2 id="derivation">Formal Definition</h2>
    <p>For a function \(f(x, y, \dots, z)\), the Hessian \(\mathbf{H}\) is defined by the cross-derivatives:</p>
    <div class="math-block">$$ \mathbf{H} = \begin{bmatrix} 
    \frac{\partial^2 f}{\partial x_1^2} & \dots & \frac{\partial^2 f}{\partial x_1 \partial x_n} \\
    \vdots & \ddots & \vdots \\
    \frac{\partial^2 f}{\partial x_n \partial x_1} & \dots & \frac{\partial^2 f}{\partial x_n^2} \end{bmatrix} $$</div>
    <p>For smooth functions, the matrix is symmetric (\(\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}\)).</p>

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
  `},o={id:"taylor-series",title:"Taylor Series Approximation",description:"A Taylor Series is a way to approximate a complex, curvy function with a simple polynomial like a line or a parabola.",color:"#1B5E20",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📐 Calculus · Approximation</div>
      <h1>Taylor Series: The Simplifier</h1>
      <p>A <strong>Taylor Series</strong> is a mathematical tool that takes a complex, "bumpy" function and mimics it using simpler pieces (lines, curves, etc.). In Machine Learning, we almost never solve the full loss function exactly—we approximate it with a "Local" Taylor expansion to decide our next step.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Derivatives</strong>: How to find slopes.</li>
        <li><strong>Factorials</strong>: Understanding \(n!\).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Calculating a 100-layer neural network's exact output at every possible point is impossible. But if we are currently at weights \(\mathbf{w}_0\), we only need to know what the loss surface looks like <strong>nearby</strong>. A "First-order" Taylor expansion is just a <strong>Tangent Line</strong>. A "Second-order" expansion is a <strong>Parabola</strong>. These approximations are the foundation of almost all numerical solvers.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of the Taylor Series as <strong>"Drawing a Map from Memory."</strong> 
        If you are at point A, you know the height (Value), the slope (1st Derivative), and how the ground is curving (2nd Derivative). 
        By combining these, you can guess what point B looks like without actually going there. 
        The more derivatives you use (\(n\)-th degree), the more <strong>accurate</strong> your map becomes.
      </div>
    </div>

    <h2 id="derivation">Formal Definition</h2>
    <p>The \(n\)-th order Taylor polynomial of \(f(x)\) around a center point \(a\) is:</p>
    <div class="math-block">$$P_n(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \dots + \frac{f^{(n)}(a)}{n!}(x-a)^n$$</div>
    <p><strong>First Order (Linear):</strong> \(f(x) \approx f(a) + f'(a)(x-a)\).</p>
    <p><strong>Second Order (Quadratic):</strong> \(f(x) \approx f(a) + f'(a)(x-a) + \frac{1}{2}f''(a)(x-a)^2\).</p>

    <h2 id="example-linear" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Linear Approximation of \(e^x\)</h2>
    
      <h4>Problem: Tracking Error of Current Model (A Proxy for exp)</h4>
      <p>Estimate \(e^{0.1}\) using a Taylor expansion centered at \(a = 0\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> \(f(x) = e^x, f(0) = 1, f'(0) = 1\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Linear Guess:</strong> \(f(0.1) \approx 1 + 1(0.1 - 0) = 1.1\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Check:</strong> Exact value is ~1.105.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We got within <strong>0.5%</strong> of the true value with just a single derivative! This is why "First-order" optimizers like SGD are so effective.
        </div>
      </div>
    

    <h2 id="example-quadratic" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Quadratic Approximation of Loss</h2>
    
      <h4>Problem: Finding the "Bowl" near our current weights</h4>
      <p>Given \(L(w) = w^4\) at \(w = 1\), find the quadratic approximation (\(n=2\)).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Value:</strong> \(L(1) = 1\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>First Deriv:</strong> \(4w^3 \to 4\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Second Deriv:</strong> \(12w^2 \to 12\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Expansion:</strong> \(P_2(w) = 1 + 4(w-1) + \frac{12}{2}(w-1)^2 = 1 + 4(w-1) + 6(w-1)^2\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We’ve turned a complex fourth-degree function into a simple parabola. Optimizers can find the exact minimum of this parabola in 1 step.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

def taylor_exp_approx(x, a, n_terms=3):
    # Taylor series for e^x at center a
    # e^x = sum (D^k e^x / k!) * (x-a)^k
    approx = 0
    for k in range(n_terms):
        # f^(k)(a) for e^x is always 1 if a=0
        term = (1 / np.math.factorial(k)) * (x - a)**k
        approx += term
    return approx

val = 0.2
print(f"True e^{val}: {np.exp(val)}")
print(f"2-term approximation: {taylor_exp_approx(val, 0, 2)}")
print(f"4-term approximation: {taylor_exp_approx(val, 0, 4)}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Optimization</strong>: All second-order optimizers assume the loss function can be represented by a local quadratic Taylor expansion.</li>
      <li><strong>Model Interpretation</strong>: Local Surrogate models (LIME) use first-order Taylor expansions to explain why a black-box model made a prediction.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Approximations help us find the "Low points" on a curve. But how do we identify them exactly? Explore <strong><a href="#/mathematics/calculus/critical-points">Critical Points</a></strong>.
    </div>
  `},r={id:"critical-points",title:"Critical Points",description:"A Critical Point is where the gradient is zero. It the mathematical location of a minimum, maximum, or a saddle point in your loss function.",color:"#1B5E20",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📐 Calculus · Optimization</div>
      <h1>Critical Points: The Search for the Bottom</h1>
      <p>A <strong>Critical Point</strong> is any point where the gradient of a function is exactly zero (\(\nabla f = \mathbf{0}\)). In Machine Learning, our entire training process is a struggle to find a specific type of critical point: the <strong>Global Minimum</strong> of our error function.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Gradients</strong>: How to find vectors of slopes.</li>
        <li><strong>Hessians</strong>: How to find curvature grids.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>When you are hiking, you are at a "Critical Point" if the ground at your feet is perfectly flat. This could mean you are at the <strong>Top of a Peak</strong> (Maximize Reward), the <strong>Bottom of a Valley</strong> (Minimize Loss), or on a <strong>Saddle Point</strong> (Flat from one side, steep from another). To build a model that actually works, we need to distinguish between these cases.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a Critical Point like <strong>The End of a Path</strong>. 
        If you arrive at a flat spot and the ground curves up in all directions, you've found a <strong>Minimum</strong> (Success!). 
        If it curves down everyone, you've found a <strong>Maximum</strong> (Reverse success!). 
        In Deep Learning, we often find <strong>Saddle Points</strong>—frustrating flat areas that trap our models and slow down training.
      </div>
    </div>

    <h2 id="derivation">Formal Definition</h2>
    <p>We find critical points by solving the equation:</p>
    <div class="math-block">$$\nabla f(\mathbf{x}) = \mathbf{0}$$</div>
    <p>To classify the point, we examine the <strong>Eigenvalues</strong> of the Hessian matrix \(\mathbf{H}\):</p>
    <ul>
      <li><strong>All \(\lambda > 0\):</strong> (PD) -> <strong>Local Minimum</strong>.</li>
      <li><strong>All \(\lambda < 0\):</strong> (ND) -> <strong>Local Maximum</strong>.</li>
      <li><strong>Mixed \(\lambda\):</strong> -> <strong>Saddle Point</strong>.</li>
    </ul>

    <h2 id="example-minimum" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Finding Local Minima</h2>
    
      <h4>Problem: Finding the Bottom of \(f(x, y) = x^2 + y^2 - 4x\)</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Gradient:</strong> \(\nabla f = [2x - 4, 2y]^T\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Set to Zero:</strong> \(2x - 4 = 0 \to x = 2\); \(2y = 0 \to y = 0\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Hessian:</strong> \(\mathbf{H} = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}\). (Both \(\lambda = 2\)).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> \((2, 0)\) is a <strong>Local Minimum</strong>. This is the optimal configuration for this toy model.
        </div>
      </div>
    

    <h2 id="example-saddle" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Detecting Saddle Points in 2D</h2>
    
      <h4>Problem: Finding the Trap in \(f(x, y) = x^2 - y^2\)</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Gradient:</strong> \(\nabla f = [2x, -2y]^T\). (Critical point at \((0, 0)\)).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Hessian:</strong> \(\mathbf{H} = \begin{bmatrix} 2 & 0 \\ 0 & -2 \end{bmatrix}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Check Eigenvalues:</strong> \(\lambda = 2\) and \(\lambda = -2\).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> One eigenvalue is positive (Uphill along x), and one is negative (Downhill along y). This is a <strong>Saddle Point</strong>. In ML training, your optimizer might get stuck here forever because the "Net Gradient" is zero, even though lower points exist nearby.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np
from scipy.optimize import minimize

def f(x):
    # Scalar bowl: (x-3)^2 + 5
    return (x[0] - 3)**2 + 5

# Starting guess
x0 = np.array([0.0])

# Solve for the local minimum automatically
res = minimize(f, x0)

print(f"Computed Critical Point: {res.x[0]:.4f}")
print(f"Value at Min: {res.fun}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Cost Function Optimization</strong>: Everything in ML is about finding the weights that reach the lowest critical point.</li>
      <li><strong>Convergence Analysis</strong>: Understanding why models stop improving—often because they are trapped at a saddle point or a local minimum.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve mastered the mechanics of optimization. Now, see how we deal with <strong>Uncertainty</strong> and <strong>Data Distributions</strong>. Explore <strong><a href="#/mathematics/statistics/basics">Probability & Statistics</a></strong>.
    </div>
  `},l={id:"integrals",title:"Integral Calculus",description:"Integral Calculus is the inverse of differentiation. While derivatives measure rate of change, integrals measure accumulation and area under a curve.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Calculus · Integration</div>
      <h1>Integral Calculus: The Math of Accumulation</h1>
      <p><strong>Integral Calculus</strong> is the inverse of differential calculus. While derivatives measure the rate of change (the slope), integrals measure the <strong>accumulation</strong> of quantities (the area under a curve). In Machine Learning and Data Science, integration is the fundamental tool used to compute probabilities, expectations, and normalize complex distributions.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Differential Calculus</strong>: Understanding that $\frac{d}{dx}(\text{Integral}) = \text{Function}$.</li>
        <li><strong>Functions and Limits</strong>: Knowledge of how continuous functions behave.</li>
        <li><strong>Basic Summation</strong>: Integrals are essentially "infinite sums" of infinitesimal parts.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In ML, we often deal with <strong>Probability Density Functions (PDFs)</strong>. A PDF $f(x)$ tells us the relative likelihood of a continuous random variable. However, the probability of a single exact point (e.g., "What is the probability a person is exactly 175.0000... cm tall?") is zero.</p>
    
    <div class="callout tip">
      <div class="callout-icon">🏗️</div>
      <div class="callout-body">
        We use <strong>Integration</strong> to find the probability over a range (e.g., "between 170 and 180 cm").
        <ul>
          <li><strong>Indefinite Integral</strong>: Finds the "Antiderivative"—the general form of the accumulation function.</li>
          <li><strong>Definite Integral</strong>: Calculates the actual "Net Area" between two specific points.</li>
          <li><strong>Visualizing the Area Under the Curve:</strong></li>
        </ul>
      </div>
    </div>

    <visualizer topic="AreaUnderCurve" />

    <h2 id="derivation">Formal Definition</h2>

    <h3>1. The Indefinite Integral</h3>
    <p>If $F'(x) = f(x)$, then:</p>
    <div class="math-block">$$\int f(x) \, dx = F(x) + C$$</div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> The <strong>Indefinite Integral</strong> is like a "Reverse Engineering" process. If you know how fast a car is accelerating at every moment (the derivative), the integral helps you reconstruct its position. In ML, if we have the gradient of a loss function, the integral helps us understand the global "shape" of the loss surface.
      </div>
    </div>
    <p>where $C$ is the constant of integration (representing the fact that shifting a graph vertically doesn't change its slope).</p>

    <h3>2. The Definite Integral (Fundamental Theorem of Calculus)</h3>
    <p>To find the area under $f(x)$ from $a$ to $b$:</p>
    <div class="math-block">$$\int_{a}^{b} f(x) \, dx = F(b) - F(a)$$</div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> This is the <strong>Fundamental Theorem of Calculus</strong>. It bridges the gap between slopes and areas. By simply subtracting the values of the antiderivative at two points, we can find the total area (accumulation) without having to sum up infinite infinitesimal rectangles manually.
      </div>
    </div>

    <h3>3. Integration in Probability</h3>
    <p>For a continuous random variable $X$ to be a valid probability distribution, the total area under its PDF must be 1:</p>
    <div class="math-block">$$\int_{-\infty}^{\infty} f(x) \, dx = 1$$</div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> In probability, <strong>Integration = Normalization</strong>. We integrate over all possible outcomes to ensure the total probability space captures everything. If the area isn't exactly 1, your model isn't a valid probability distribution.
      </div>
    </div>
    <p>The probability that $X$ falls between $a$ and $b$ is:</p>
    <div class="math-block">$$P(a \leq X \leq b) = \int_{a}^{b} f(x) \, dx$$</div>

    <h2 id="example" class="mb-8">Illustrative <span class="text-green-premium font-bold">Case Study:</span> </h2>
    
      <h4>Problem: Finding Range Probabilities</h4>
      <p>Given a simple PDF $f(x) = \frac{3}{8}x^2$ defined on the interval $[0, 2]$, find the probability that $x$ is between 1 and 2.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Set up the integral</strong>: \(P(1 \leq x \leq 2) = \int_{1}^{2} \frac{3}{8}x^2 \, dx\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Find the antiderivative</strong>: \(\int \frac{3}{8}x^2 \, dx = \frac{3}{8} \cdot \frac{x^3}{3} = \frac{1}{8}x^3\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Apply limits</strong>:
            <ul>
              <li>\(F(2) = \frac{1}{8}(2)^3 = 1\).</li>
              <li>\(F(1) = \frac{1}{8}(1)^3 = 0.125\).</li>
            </ul>
          </div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Subtract</strong>: \(1 - 0.125 = 0.875\).</div>
        </div>
      </div>
      <p><strong>Result:</strong> There is an <strong>87.5%</strong> probability that $x$ falls in the range $[1, 2]$.</p>
    

    <h2 id="implementation">Implementation</h2>
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
  `},d={id:"calculus",title:"Calculus",description:"The mathematical engine for optimization, using derivatives and gradients to minimize model error and power backpropagation.",keyConcepts:[{title:"Differentiation",description:"Calculating instantaneous rates of change and sensitivity."},{title:"Partial Derivatives",description:"Handling variables in multi-dimensional loss surfaces."},{title:"The Gradient",description:"The compass that points towards reaching the minimum error."},{title:"Chain Rule",description:"Connecting layers for deep network backpropagation."},{title:"Jacobian & Hessian",description:"Information grids for sensitivity and curvature."},{title:"Optimization",description:"Finding local and global minima at critical points."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Calculus: <span class="text-accent italic">The Engine of Optimization</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In the world of Machine Learning, we don't just "calculate" answers; we "learn" them. <strong>Calculus</strong> provides the mechanism for improvement—the engine that powers Gradient Descent and Backpropagation.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This curriculum is broken into <strong>9 focused topics</strong>, moving from basic differentiation to advanced concepts like Jacobians, Hessians, and Integral Calculus.
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
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to optimize?</p>
        <a 
          href="/#/mathematics/calculus/derivatives" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Differentiation
        </a>
      </div>

    </div>
  `,sections:[t,i,e,a,s,n,o,r,l]};export{d as CALCULUS_DATA};
