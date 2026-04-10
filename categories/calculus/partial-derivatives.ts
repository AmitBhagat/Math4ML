import { TopicSection } from '../../src/data/types';

export const partialDerivativesSection: TopicSection = {
  id: "partial-derivatives",
  title: "Partial Derivatives",
  description: "A Partial Derivative measures the rate of change of a multi-input function with respect to one variable while other inputs are held constant.",
  color: "#1B5E20",
  html: String.raw`
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
    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Directional Slice & Ceteris Paribus</div>
      <p>A Partial Derivative is "Specialized Sensitivity." It isolates the influence of a single variable by freezing the rest of the universe.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine a 3D surface $z = f(x, y)$. To find the partial derivative with respect to $x$, we slice the surface with a vertical plane parallel to the x-axis (fixing $y = y_0$). The intersection of this plane and the surface is a 2D curve. The <strong>Partial Derivative</strong> is simply the slope of the tangent line to that curve at the point $(x_0, y_0)$.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We derive $\frac{\partial f}{\partial x}$ by applying the 1D derivative definition to this "sliced" curve. We treat $y$ as a constant $k$ and nudge only $x$ by an infinitesimal $h$:</p>
      <div class="math-block">
        $$\frac{\partial f}{\partial x}(x, y) = \lim_{h \to 0} \frac{f(x + h, y) - f(x, y)}{h}$$
      </div>
      <p>Similarly, for $\frac{\partial f}{\partial y}$, we fix $x$ as a constant and nudge only $y$:</p>
      <div class="math-block">
        $$\frac{\partial f}{\partial y}(x, y) = \lim_{h \to 0} \frac{f(x, y + h) - f(x, y)}{h}$$
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>A function is differentiable if all its partial derivatives exist and are continuous. In ML, these derivatives are the building blocks of the <strong>Gradient</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Sensitivity</strong>: $\frac{\partial f}{\partial x_i}$ tells us exactly how the Loss depends on $x_i$, ignoring feature interactions.</li>
        <li><strong>Independence</strong>: We use the same rules as 1D calculus (Power Rule, Chain Rule), just treating other vars as static "junk" numbers.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Partial derivatives don't tell the whole story. You can have a function where all partial derivatives exist at a point, but the function isn't even continuous there! To truly understand the "Total Change," you need the <strong>Gradient</strong>.</p>
    </div>
    
    <visualizer topic="PartialDerivatives" />
    
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
    <p>A Partial Derivative is "Specialized Sensitivity." It isolates the influence of a single variable while freezing the rest of the universe.</p>
    <ul>
      <li><strong>Backpropagation in Individual Weights</strong>: When training a massive model, we use partial derivatives to find the "Responsible Weight." It tells the AI exactly how much a tiny nudge to Weight #59,302 affects the final decision, allowing for pinpoint corrections.</li>
      <li><strong>Feature Importance (Sensitivity Analysis)</strong>: In models like house price predictors, partial derivatives allow us to calculate exactly which feature is most vital. By checking the partial derivative for "Square Footage," the model can tell if it's more important than "Year Built."</li>
    </ul>
    <p>Teacher's Final Word: In ML, we often have thousands of variables at once. Partial derivatives allow us to diagnose exactly which specific parameter is helping (or hurting) our predictions without getting lost in the noise.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Individually, partial derivatives tell us slopes along axes. How do we combine them to find the true "upward" direction? Explore <strong><a href="#/mathematics/calculus/gradient">The Gradient</a></strong>.
    </div>
  `
};


