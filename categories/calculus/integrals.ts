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
      <div class="premium-def-title">Formalism: The Limit of Infinite Accumulation</div>
      <p>Integration is the "Global Odometer" of math. It takes local rates of change and reconstructs the total history of a system.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine the area under a curve $f(x)$ between $a$ and $b$. To calculate it, we slice the region into $n$ vertical rectangles of equal width $\Delta x$. The total area is approximately the sum of these rectangles. As we make the slices thinner and thinner ($n \to \infty$), the jagged staircase of rectangles perfectly fits the curve.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We define the <strong>Riemann Sum</strong> $S_n$ as the accumulation of these slices, where $x_i^*$ is a sample point in each sub-interval:</p>
      <div class="math-block">
        $$S_n = \sum_{i=1}^n f(x_i^*) \Delta x$$
      </div>
      <p>The <strong>Definite Integral</strong> is the limit of this sum as the width $\Delta x \to 0$. The <strong>Fundamental Theorem of Calculus</strong> links this accumulation back to differentiation: if $F'(x) = f(x)$, then the total accumulation is just the difference in the "Potential" at the boundaries:</p>
      <div class="math-block">
        $$\int_a^b f(x) dx = F(b) - F(a)$$
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, integrals are the foundation of <strong>Expectation</strong> and <strong>Probability Mass</strong>:</p>
      <ul class="mt-2 space-y-2">
        <li><strong>Continuous Probability</strong>: The probability of a variable falling in a range is the integral of its Density Function.</li>
        <li><strong>Normalization</strong>: We use integrals to ensure that the "Total Reality" (area under the curve) of our predictions always sums to exactly 1.0.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: In high-dimensional AI, we almost never solve integrals analytically—there are too many variables. Instead, we use "Monte Carlo Integration," which is essentially like throwing millions of random darts at the curve and counting how many land inside the area.</p>
    </div>
    
    <visualizer topic="integrals" />
    

    
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
    <p>If derivatives are the "Speedometer" (instant change), then Integrals are the "Odometer" (total distance traveled). They allow us to sum up infinite tiny slices to find a whole reality.</p>
    <ul>
      <li><strong>Expected Value Calculation</strong>: In AI, we don't just want to know what's possible; we want to know what's *likely*. We use integrals to sum up all outcomes of a model, weighted by their probability, to find the "Expected Value"—the core of how AI makes safe, long-term decisions.</li>
      <li><strong>Evidence in Bayesian Inference</strong>: To update an AI's belief, we must calculate the "Evidence"—the total probability of our data across all possible parameter settings. This requires integrating over every single possibility to ensure the model's new belief is mathematically sound.</li>
    </ul>
    <p>Teacher's Final Word: Integrals are the ultimate tool for "Global Understanding." They take the local rules of probability and scale them up to show us the big picture of a dataset or a model's behavior.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Integration measures accumulation. Now, explore the logic of uncertainty in <strong><a href="#/mathematics/probability/random-variables">Probability Theory</a></strong>.
    </div>
  `
};


