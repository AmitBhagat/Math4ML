import { TopicSection } from '../../src/data/types';

export const derivativesSection: TopicSection = {
  id: "derivatives",
  title: "Derivatives",
  description: "The Derivative is the study of how functions change when their inputs change by infinitesimal amounts. It's the primary engine for machine learning optimization.",
  color: "#1B5E20",
  html: String.raw`
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
    <p>Calculus is the "Language of Sensitivity." It answers the core question of Machine Learning: <em>"If I nudge this specific variable by a hair, how much does the final result move?"</em> If you are standing on a landscape of data, the derivative at your feet is the <strong>slope</strong>. Positive means uphill, negative means downhill. By calculating these slopes for every single weight in a neural network, we gain a clear map of how to move. It is the fundamental difference between blind guessing and having a scientific plan to reduce error.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Instantaneous Rate</div>
      <p>For a continuous function $f(x)$, the derivative $f'(x)$ (also denoted $\frac{df}{dx}$) represents the limit of the average rate of change as the interval $\Delta x$ shrinks to zero:</p>
      <div class="math-block">
        $$f'(x) = \lim_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x}$$
      </div>
      <p>A function is **Differentiable** at $x$ if this limit exists. The derivative provides an linear approximation of the function at a specific point, governed by several fundamental rules:</p>
      <ul class="mt-2 space-y-1">
        <li><strong>Power Rule</strong>: $\frac{d}{dx}x^n = nx^{n-1}$.</li>
        <li><strong>Linearity</strong>: $\frac{d}{dx}[af(x) + bg(x)] = af'(x) + bg'(x)$.</li>
        <li><strong>Product Rule</strong>: $\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$.</li>
      </ul>
      <p class="mt-2">In ML, we interpret $f'(x)$ as the sensitivity of the loss $f$ to a specific parameter $x$.</p>
    </div>
    
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
    <p>Calculus is the "Language of Sensitivity." It answers the core question: "If I nudge this variable by a hair, how much does the final error move?"</p>
    <ul>
      <li><strong>Learning Rates</strong>: A derivative tells us the slope, but the "Learning Rate" decides how big a step we take down it. If the derivative is huge (steep hill), the AI knows it's far from the goal and needs to move decisively rather than crawl.</li>
      <li><strong>Gradient Clipping</strong>: Sometimes a derivative becomes massive (an "Exploding Gradient"). We use the derivative's value like a fuse—if it gets too high, we "clip" it to prevent the model from making a wild, unstable jump that ruins the training.</li>
    </ul>
    <p>Teacher's Final Word: In AI, derivatives are the compass that tells the model exactly which way to turn to reach the valley of minimum error. Without them, we're just guessing in the dark.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Single variables are rare in ML. How do we find slopes on multidimensional planes? Explore <strong><a href="#/mathematics/calculus/partial-derivatives">Partial Derivatives</a></strong>.
    </div>
  `
};


