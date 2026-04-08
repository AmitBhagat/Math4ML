import { TopicSection } from '../../src/data/types';

export const taylorSeriesSection: TopicSection = {
  id: "taylor-series",
  title: "Taylor Series Approximation",
  description: "A Taylor Series is a way to approximate a complex, curvy function with a simple polynomial like a line or a parabola.",
  color: "#1B5E20",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📐 Calculus · Approximation</div>
      <h1>Taylor Series: The Simplifier</h1>
      <p>A <strong>Taylor Series</strong> is a mathematical tool that takes a complex, "bumpy" function and mimics it using simpler pieces (lines, curves, etc.). In Machine Learning, we almost never solve the full loss function exactly—we approximate it with a "Local" Taylor expansion to decide our next step.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example-linear">Example 1: Linear Approximation of \(e^x\)</a>
      <a href="#example-quadratic">Example 2: Quadratic Approximation of Loss</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Derivatives</strong>: How to find slopes.</li>
        <li><strong>Factorials</strong>: Understanding \(n!\).</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>Calculating a 100-layer neural network's exact output at every possible point is impossible. But if we are currently at weights \(\mathbf{w}_0\), we only need to know what the loss surface looks like <strong>nearby</strong>. A "First-order" Taylor expansion is just a <strong>Tangent Line</strong>. A "Second-order" expansion is a <strong>Parabola</strong>. These approximations are the foundation of almost all numerical solvers.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of the Taylor Series as <strong>"Drawing a Map from Memory."</strong> 
        If you are at point A, you know the height (Value), the slope (1st Derivative), and how the ground is curving (2nd Derivative). 
        By combining these, you can guess what point B looks like without actually going there. 
        The more derivatives you use (\(n\)-th degree), the more <strong>accurate</strong> your map becomes.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>The \(n\)-th order Taylor polynomial of \(f(x)\) around a center point \(a\) is:</p>
    <div class="math-block">$$P_n(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \dots + \frac{f^{(n)}(a)}{n!}(x-a)^n$$</div>
    <p><strong>First Order (Linear):</strong> \(f(x) \approx f(a) + f'(a)(x-a)\).</p>
    <p><strong>Second Order (Quadratic):</strong> \(f(x) \approx f(a) + f'(a)(x-a) + \frac{1}{2}f''(a)(x-a)^2\).</p>

    <h2 id="example-linear">Example 1: Linear Approximation of \(e^x\)</h2>
    <div class="example-box">
      <h4>Problem: Tracking Error of Current Model (A Proxy for exp)</h4>
      <p>Estimate \(e^{0.1}\) using a Taylor expansion centered at \(a = 0\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identify:</strong> \(f(x) = e^x, f(0) = 1, f'(0) = 1\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Linear Guess:</strong> \(f(0.1) \approx 1 + 1(0.1 - 0) = 1.1\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Check:</strong> Exact value is ~1.105.</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We got within **0.5%** of the true value with just a single derivative! This is why "First-order" optimizers like SGD are so effective.
        </div>
      </div>
    </div>

    <h2 id="example-quadratic">Example 2: Quadratic Approximation of Loss</h2>
    <div class="example-box">
      <h4>Problem: Finding the "Bowl" near our current weights</h4>
      <p>Given \(L(w) = w^4\) at \(w = 1\), find the quadratic approximation (\(n=2\)).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Value:</strong> \(L(1) = 1\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>First Deriv:</strong> \(4w^3 \to 4\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Second Deriv:</strong> \(12w^2 \to 12\).</div></div>
      <div class="step-box"><span class="step-num">4</span><div><strong>Expansion:</strong> \(P_2(w) = 1 + 4(w-1) + \frac{12}{2}(w-1)^2 = 1 + 4(w-1) + 6(w-1)^2\).</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We’ve turned a complex fourth-degree function into a simple parabola. Optimizers can find the exact minimum of this parabola in 1 step.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
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
  `
};
