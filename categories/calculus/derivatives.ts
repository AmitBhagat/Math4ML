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

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example-tangent">Example 1: Finding Tangent Slopes</a>
      <a href="#example-loss">Example 2: Sensitivity of Loss to Bias</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Functions</strong>: Understanding \(f(x)\).</li>
        <li><strong>Slopes</strong>: Basic Algebra of "Rise over Run."</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>Calculus is the "Language of Sensitivity." It answers the question: <em>"If I nudge this variable by a hair, how much does the result move?"</em> If you are standing on a hill, the derivative at your feet is the <strong>slope</strong>. Positive means uphill, negative means downhill. ML models always want to move "downhill" to find the minimum error.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of a Derivative as an <strong>Instantaneous Speedometer</strong>. 
        If you're driving, the speedometer doesn't tell you where you've been; it tells you exactly how fast you're changing your position <em>right now</em>. 
        In ML, the derivative tells the model how fast the error is changing with respect to its weights <em>at this exact moment</em>.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>The derivative \(f'(x)\) is defined as the limit of the average slope as the "nudge" \(h\) goes to zero:</p>
    <div class="math-block">$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$</div>
    <p><strong>Common Rules:</strong></p>
    <ul>
      <li><strong>Power Rule:</strong> \(\frac{d}{dx}x^n = nx^{n-1}\).</li>
      <li><strong>Constant Rule:</strong> \(\frac{d}{dx}C = 0\).</li>
    </ul>

    <h2 id="example-tangent">Example 1: Finding Tangent Slopes</h2>
    <div class="example-box">
      <h4>Problem: Slope of \(f(x) = x^2\) at \(x = 3\)</h4>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Apply Power Rule:</strong> \(\frac{d}{dx}x^2 = 2x\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Substitute:</strong> Evaluate at \(x = 3 \to 2(3) = 6\).</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> The slope (rate of change) is 6. For every 0.01 unit you increase \(x\), the output \(y\) will increase by approximately 0.06 units.
        </div>
      </div>
    </div>

    <h2 id="example-loss">Example 2: Sensitivity of Loss to Bias</h2>
    <div class="example-box">
      <h4>Problem: Nudging a Single Parameter</h4>
      <p>Assume your Loss \(L = (b - 5)^2\) where \(b\) is a bias term. Calculate the sensitivity at \(b = 2\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Differentiate:</strong> Using the chain/power rule, \(\frac{dL}{db} = 2(b - 5)\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Evaluate:</strong> At \(b = 2 \to 2(2 - 5) = -6\).</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> The derivative is **negative**. This tells the model: "Increasing the bias \(b\) will **decrease** the loss." So the optimization algorithm will nudge \(b\) higher.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
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
  `
};
