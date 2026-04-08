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
  `
};
