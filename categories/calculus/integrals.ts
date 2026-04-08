import { TopicSection } from '../../src/data/types';

export const integralsSection: TopicSection = {
  id: "integrals",
  title: "Integral Calculus",
  description: "Integral Calculus is the inverse of differentiation. While derivatives measure rate of change, integrals measure accumulation and area under a curve.",
  html: String.raw`
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

    <h2 id="example">Illustrative Example</h2>
    <div class="example-box">
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
    <visualizer topic="AreaUnderCurve" />
    <ul>
      <li><strong>Expectation and Variance</strong>: Computing the average value of a continuous distribution: $E[X] = \int x f(x) \, dx$.</li>
      <li><strong>Bayesian Inference</strong>: Calculating the "Evidence" (the denominator in Bayes' Rule) often requires integrating over all possible parameter values.</li>
      <li><strong>Gaussian Distributions</strong>: The Bell Curve is defined by an integral that ensures its total area equals 1.</li>
      <li><strong>Kernel Density Estimation (KDE)</strong>: Used in data visualization and non-parametric modeling.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Integration measures accumulation. Now, find the 'best' possible values by exploring <strong><a href="#/mathematics/calculus/optimization">Optimization Theory</a></strong>.
    </div>
  `
};
