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

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Instantaneous Limit of Change</div>
      <p>The Derivative is the limit of "Average Change" as the measurement interval collapses into a single, instantaneous point.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine a curve $f(x)$ and a <strong>Secant Line</strong> connecting two points: $(x, f(x))$ and a slightly shifted point $(x+h, f(x+h))$. The slope of this secant line is the average rate of change over the interval $h$. As we slide the second point closer to the first ($h \to 0$), the secant line gracefully transforms into the <strong>Tangent Line</strong>.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>The slope of the secant line is the classic "Rise over Run":</p>
      <div class="math-block">
        $$m_{\text{secant}} = \frac{\Delta y}{\Delta x} = \frac{f(x+h) - f(x)}{h}$$
      </div>
      <p>To find the <strong>Instantaneous</strong> slope (the Derivative), we apply a limit. We analyze what happens to this ratio as $h$ becomes infinitesimally small. If the limit exists, it is the exact slope at point $x$.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Formula</h3>
      <div class="math-block">
        $$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$$
      </div>
      <p>In Machine Learning, this $f'(x)$ is the <strong>Sensitivity</strong>. It tells us exactly how the Loss function will react to a microscopic nudge in weight $x$.</p>
      <p class="mt-4 italic text-sm">Gotcha: Not every function is differentiable. Sharp "corners" (like in a ReLU activation) have no unique tangent at the point—the limit is different depending on whether $h$ approaches from the left or right. We call these "non-smooth" points.</p>
    </div>

    <visualizer topic="Differentiation" />
    
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


