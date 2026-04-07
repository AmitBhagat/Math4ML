import { TopicSection } from '../../src/data/types';

export const randomVariablesSection: TopicSection = {
  id: "random-variables",
  title: "Random Variables & Functions",
  description: "A Random Variable (RV) is a functional mapping that assigns a numerical value to each outcome in a sample space. It allows us to use mathematical tools to describe stochastic processes.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Probability · Random Variables &amp; Functions</div>
      <h1>Random Variables &amp; Functions</h1>
      <p>In the previous sections, we looked at fixed events (like rolling a die). However, in Machine Learning, we deal with data that can take a wide range of values. A <strong>Random Variable (RV)</strong> is a functional mapping that assigns a numerical value to each outcome in a sample space. It allows us to use mathematical tools to describe "stochastic" (random) processes.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#core">Core Theory: Discrete vs. Continuous</a>
      <a href="#core" class="sub">↳ 1. Discrete Random Variables (PMF)</a>
      <a href="#core" class="sub">↳ 2. Continuous Random Variables (PDF)</a>
      <a href="#cdf">Cumulative Distribution Function (CDF)</a>
      <a href="#derivation">Mathematical Derivation: PDF to Probability</a>
      <a href="#examples">Illustrative Examples</a>
      <a href="#implementation">Implementation in Python (SciPy)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Basic Axioms:</strong> Understanding sample spaces and total probability.</li>
        <li><strong>Calculus (for Continuous):</strong> Basic integration is required to find probabilities for continuous ranges.</li>
      </ul>
    </div>

    <h2 id="core">Core Theory: Discrete vs. Continuous</h2>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 18px 0;">
      <div class="premium-def-box">
        <div class="premium-def-title">Type 1</div>
        <h4>Discrete Random Variables</h4>
        <p>Takes on a <strong>countable</strong> number of distinct values (e.g., \(0, 1, 2, \dots\)).</p>
        <p><strong>Examples:</strong> Number of emails received in an hour, number of heads in 10 coin tosses.</p>
        <p><strong>PMF:</strong> \(P(X = x)\) gives the probability that the RV exactly equals a specific value.</p>
        <p><strong>Constraint:</strong> \(\sum P(x) = 1\).</p>
      </div>
      <div class="premium-def-box">
        <div class="premium-def-title">Type 2</div>
        <h4>Continuous Random Variables</h4>
        <p>Can take any value within an interval (e.g., any real number between 0 and 1).</p>
        <p><strong>Examples:</strong> The exact height of a person, the time until a server fails, the weights in a Neural Network.</p>
        <p><strong>PDF:</strong> \(f(x)\) does <strong>not</strong> give the probability of a single point (always 0). The <strong>area under the curve</strong> represents probability.</p>
        <p><strong>Constraint:</strong> \(\int_{-\infty}^{\infty} f(x) dx = 1\).</p>
      </div>
    </div>

    <h2 id="cdf">Cumulative Distribution Function (CDF)</h2>
    <p>The <strong>CDF</strong>, denoted as \(F(x)\), is the probability that the random variable \(X\) will take a value less than or equal to \(x\). It is the "running total" of probability.</p>
    <ul>
      <li><strong>Definition:</strong> \(F(x) = P(X \le x)\)</li>
      <li><strong>For Discrete:</strong> \(F(x) = \sum_{t \le x} P(t)\)</li>
      <li><strong>For Continuous:</strong> \(F(x) = \int_{-\infty}^{x} f(t) dt\)</li>
    </ul>

    <h2 id="derivation">Mathematical Derivation: PDF to Probability</h2>
    <p>Since the probability of a continuous RV at a single point \(P(X = c) = 0\), we calculate the probability over an interval \([a, b]\) using the PDF:</p>
    <div class="math-block">$$P(a \le X \le b) = \int_{a}^{b} f(x) dx$$</div>
    <p>From the fundamental theorem of calculus, if \(F(x)\) is the CDF:</p>
    <div class="math-block">$$P(a \le X \le b) = F(b) - F(a)$$</div>

    <h2 id="examples">Illustrative Examples</h2>

    <div class="example-box">
      <h4>Discrete Case: Bernoulli Trial</h4>
      <p>Imagine a single coin flip where Heads \((H) = 1\) and Tails \((T) = 0\).</p>
      <p><strong>PMF:</strong> \(P(X=1) = p\), \(P(X=0) = 1-p\).</p>
      <p><strong>CDF:</strong></p>
      <ul>
        <li>If \(x < 0,\; F(x) = 0\)</li>
        <li>If \(0 \le x < 1,\; F(x) = 1-p\)</li>
        <li>If \(x \ge 1,\; F(x) = 1\)</li>
      </ul>
    </div>

    <div class="example-box">
      <h4>Continuous Case: Uniform Distribution</h4>
      <p>Suppose a random number generator picks any value between 0 and 10. The PDF is constant: \(f(x) = \frac{1}{10}\).</p>
      <p><strong>What is \(P(2 \le X \le 5)\)?</strong></p>
      <div class="math-block">$$P = \int_{2}^{5} \frac{1}{10} dx = \left[\frac{x}{10}\right]_{2}^{5} = \frac{5}{10} - \frac{2}{10} = 0.3$$</div>
    </div>

    <h2 id="implementation">Implementation in Python (SciPy)</h2>
    <p>Machine Learning practitioners use <code>scipy.stats</code> to handle these distributions efficiently.</p>
    <python-code>
import numpy as np
from scipy.stats import norm  # Gaussian/Normal distribution

# Create a continuous distribution (Normal: mean=0, std=1)
mu, sigma = 0, 1
dist = norm(mu, sigma)

# 1. PDF at a point (Density)
print(f"PDF at x=0: {dist.pdf(0):.4f}")

# 2. CDF (P(X <= 0)) -> Should be 0.5 for a symmetric normal distribution
print(f"CDF at x=0: {dist.cdf(0):.4f}")

# 3. Probability between -1 and 1: P(-1 <= X <= 1)
prob_interval = dist.cdf(1) - dist.cdf(-1)
print(f"Probability between -1 and 1: {prob_interval:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Classification:</strong> Softmax output is essentially a <strong>PMF</strong> over the possible classes.</li>
      <li><strong>Anomaly Detection:</strong> We model "normal" data using a <strong>PDF</strong>. If a new data point falls in a region where the PDF value is extremely low (the "tails"), we flag it as an anomaly.</li>
      <li><strong>Generative Models:</strong> GANs and VAEs try to learn the underlying <strong>PDF</strong> of the training data to sample (generate) new images.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>PMF</strong> is for specific outcomes; <strong>PDF</strong> is for intervals.</li>
      <li><strong>CDF</strong> always starts at 0 and ends at 1; it is always non-decreasing.</li>
      <li>In ML, we often assume our error follows a <strong>Continuous Normal Distribution</strong>.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Understanding these variables allows us to summarize data by calculating <strong><a href="#/mathematics/probability/expectation-variance">Expectation and Variance</a></strong>.
    </div>
  `
};
