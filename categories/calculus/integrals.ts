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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Differential Calculus</strong>: Understanding that $\frac{d}{dx}(\text{Integral}) = \text{Function}$.</li>
        <li><strong>Functions and Limits</strong>: Knowledge of how continuous functions behave.</li>
        <li><strong>Basic Summation</strong>: Integrals are essentially "infinite sums" of infinitesimal parts.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>If derivatives are the "Speedometer" (measuring instant change), then <strong>Integrals</strong> are the "Odometer" (measuring total distance traveled). In Machine Learning, we often know the local rules or probabilities, and we need to find the <strong>Total Result</strong>. Whether it's calculating the total probability of an event or finding the expected value across a continuous range, integrals allow us to sum up an infinite number of tiny, infinitesimal slices to reconstruct a whole reality. It is the mathematical bridge between local slope and global accumulation.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Limit of Accumulation</div>
      <p>For a continuous function $f(x)$, the **Definite Integral** over the interval $[a, b]$ is defined as the signed area between the $x$-axis and the graph, calculated as the limit of Riemann sums:</p>
      <div class="math-block">
        $$\int_a^b f(x) dx = \lim_{\Delta x \to 0} \sum_{i} f(x_i^*) \Delta x_i$$
      </div>
      <p>The relationship between integration and differentiation is codified by the **Fundamental Theorem of Calculus**:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Antidifferentiation</strong>: If $F(x) = \int f(x) dx$, then $F'(x) = f(x)$.</li>
        <li><strong>Definite Integral Calculation</strong>: $\int_a^b f(x) dx = F(b) - F(a)$.</li>
        <li><strong>ML Utility</strong>: In probability theory, the area under a density function $p(x)$ determines the cumulative mass: $P(X \le k) = \int_{-\infty}^k p(x) dx$.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Integrals enable the transition from discrete sets to continuous distributions, a requirement for high-fidelity modeling in Statistics and Bayesian Inference.</p>
    </div>
    
    <div class="callout tip">

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
  `
};

