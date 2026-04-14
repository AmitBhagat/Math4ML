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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Derivatives</strong>: How to find slopes.</li>
        <li><strong>Factorials</strong>: Understanding \(n!\).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Calculating a 100-layer neural network's exact output at every possible point is a mathematical nightmare. But if we are currently at a specific set of weights, we only need to know what the loss surface looks like <strong>nearby</strong>. A <strong>Taylor Series</strong> is a tool that allows us to approximate any complex, curvy function with a simple polynomial like a line or a parabola.</p>
    
    <p>These approximations are the foundation of almost all numerical solvers. Even if we don't know the "Whole World" of the loss function, the Taylor expansion gives us a reliable "Local Map" to decide our next step.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Polynomial Approximation & Derivative Matching</div>
      <p>A Taylor Series is the ultimate "Mimicry." It allows us to clone a complex function's behavior in a local neighborhood using only simple polynomials.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine a complex, non-linear function $f(x)$. We want to find a polynomial $P(x)$ that "looks" exactly like $f(x)$ near a specific point $a$. For this to happen, the polynomial must match the function's value, its slope (velocity), its curvature (acceleration), and every higher-order sensitivity at that point.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We assume an $n$-th degree polynomial of the form $P(x) = \sum_{k=0}^n c_k (x - a)^k$. To find the coefficients $c_k$, we enforce the condition that the $k$-th derivative of $P$ must match the $k$-th derivative of $f$ at point $a$:</p>
      <div class="math-block">
        $$P^{(k)}(a) = f^{(k)}(a)$$
      </div>
      <p>When we differentiate $(x-a)^k$ exactly $k$ times, the power rule brings down the exponents $k, k-1, \dots, 1$, resulting in $k!$. All other terms go to zero at $x=a$. Solving for the coefficients:</p>
      <div class="math-block">
        $$c_k \cdot k! = f^{(k)}(a) \implies c_k = \frac{f^{(k)}(a)}{k!}$$
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Formula</h3>
      <div class="math-block">
        $$f(x) \approx \sum_{k=0}^n \frac{f^{(k)}(a)}{k!}(x - a)^k$$
      </div>
      <p>In Deep Learning, we usually stop at the first order (Gradient Descent) or second order (Newton's Method). This "Local Map" provides the mathematical bedrock for almost all numerical optimization.</p>
      <p class="mt-4 italic text-sm">Gotcha: This approximation is only valid locally. The further you move from the center $a$, the more the polynomial "drifts" away from the truth. In ML, this is why we limit our update steps—if we step too far, our Taylor-based map becomes a lie.</p>
    </div>
    
    <visualizer topic="taylor-series" />
    

    
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
        term = (1 / np.math.factorial(k)) * (x - a)<strong>k
        approx += term
    return approx

val = 0.2
print(f"True e^{val}: {np.exp(val)}")
print(f"2-term approximation: {taylor_exp_approx(val, 0, 2)}")
print(f"4-term approximation: {taylor_exp_approx(val, 0, 4)}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>A Taylor Series is the "Ultimate Simplifier." It allows us to take a complex, "bumpy" loss function and mimic it using simpler pieces like lines and parabolas.</p>
    <ul>
      <li><strong>Fast Kernel Approximations (RFF)</strong>: Training on millions of data points with complex math is too slow. We use Taylor Series to approximate these complex functions with simple polynomials. This allows "Support Vector Machines" (SVMs) to scale to massive datasets without crashing your computer.</li>
      <li><strong>Trust-Region Optimization</strong>: In safety-critical AI, we don't just follow the gradient blindly. We create a Taylor expansion and define a "Trust Region"—a safe zone where our approximation is guaranteed to be accurate. The model only moves within this zone to avoid disastrous, unpredictable jumps in logic.</li>
    </ul>
    <p>Teacher's Final Word: Even if we don't know the "Whole Universe" of the loss function, the Taylor expansion gives us a reliable </strong>Local Map** to decide our next step. It's how we navigate the unknown with scientific precision.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Approximations help us find the "Low points" on a curve. But how do we identify them exactly? Explore <strong><a href="#/mathematics/calculus/critical-points">Critical Points</a></strong>.
    </div>
  `
};


