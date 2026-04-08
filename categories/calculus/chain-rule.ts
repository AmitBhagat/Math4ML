import { TopicSection } from '../../src/data/types';

export const chainRuleSection: TopicSection = {
  id: "chain-rule",
  title: "The Chain Rule",
  description: "The Chain Rule is the secret sauce of Backpropagation. It allows us to calculate how a weight in the first layer of a deep network affects the final error.",
  color: "#1B5E20",
  html: String.raw`
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
  `
};
