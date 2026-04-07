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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> Think of a <strong>Random Variable</strong> as a "Translator." It takes messy real-world outcomes (like "Cloudy" or "Sunny") and translates them into numbers (like 0 or 1) so we can do math with them. It is <strong>not</strong> a variable in the traditional sense; it's a function that measures the world.
      </div>
    </div>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#core">Core Theory: Discrete vs. Continuous</a>
      <a href="#core" class="sub">↳ 1. Discrete Random Variables (PMF)</a>
      <a href="#core" class="sub">↳ 2. Continuous Random Variables (PDF)</a>
      <a href="#cdf">Cumulative Distribution Function (CDF)</a>
      <a href="#derivation">Mathematical Derivation: PDF to Probability</a>
      <a href="#examples">3. Illustrative Example: Bernoulli & Uniform</a>
      <a href="#expectation-example">4. Illustrative Example: Expectation</a>
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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> The <strong>Discrete vs. Continuous</strong> divide is like <strong>Digital vs. Analog</strong>. A discrete RV is like a staircase—you're either on step 1 or step 2. A continuous RV is like a slide—you can be at any height. In ML, binary classification is discrete (0/1), but the confidence score (0.873...) is continuous.
      </div>
    </div>

    <h2 id="cdf">Cumulative Distribution Function (CDF)</h2>
    <p>The <strong>CDF</strong>, denoted as \(F(x)\), is the probability that the random variable \(X\) will take a value less than or equal to \(x\). It is the "running total" of probability.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> The <strong>CDF</strong> is the "Running Score" of your distribution. If probability is a pile of sand, the PDF tells you how high the pile is at one spot, but the CDF tells you the <strong>total weight</strong> of the sand to the left of that spot. It always starts at 0 (nothing) and ends at 1 (everything).
      </div>
    </div>
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

    <h2 id="examples">3. Illustrative Example: Bernoulli & Uniform</h2>

    <div class="example-box">
      <h4>Discrete Case: Bernoulli Trial (Coin Flip)</h4>
      <p>Let \(X = 1\) for Heads and \(X = 0\) for Tails, with \(P(H) = p\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Define PMF:</strong> \(P(X=x) = p^x (1-p)^{1-x}\) for \(x \in \{0, 1\}\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Construct CDF:</strong> The probability "accumulates" at 0 and 1.</div></div>

      <div class="math-block">$$F(x) = \begin{cases} 0 & x < 0 \\ 1-p & 0 \le x < 1 \\ 1 & x \ge 1 \end{cases}$$</div>
      
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> If \(p=0.7\), the CDF "jumps" from 0 to 0.3 at \(x=0\), and from 0.3 to 1.0 at \(x=1\).</div></div>
    </div>

    <div class="example-box">
      <h4>Continuous Case: Uniform Interval</h4>
      <p>A sensor measures temperature between 20°C and 30°C with equal density. What is \(P(22 < X < 25)\)?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Define PDF:</strong> Height must be \(1/(30-20) = 0.1\) to ensure total area = 1.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Set up Integral:</strong> Probability is the area from 22 to 25.</div></div>

      <div class="math-block">$$P(22 < X < 25) = \int_{22}^{25} 0.1 \, dx = [0.1x]_{22}^{25}$$</div>
      
      <div class="step-box"><span class="step-num">3</span><div><strong>Solve:</strong> \(0.1(25) - 0.1(22) = 2.5 - 2.2 = 0.3\).</div></div>
      
      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Intuition:</strong> For a uniform distribution, the probability is simply the <strong>width of the interval</strong> times the <strong>density height</strong>. \(3 \times 0.1 = 0.3\).</div></div>
    </div>

    <h2 id="expectation-example">4. Illustrative Example: Expectation</h2>
    <div class="example-box">
      <h4>Problem: Expected Value of a Weighted Die</h4>
      <p>A "loaded" die has the following probabilities: \(P(6) = 0.5\), and \(P(1) = P(2) = P(3) = P(4) = P(5) = 0.1\). What is the expected roll \(E[X]\)?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Formula:</strong> \(E[X] = \sum x \cdot P(X=x)\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Sum standard faces:</strong> \((1+2+3+4+5) \times 0.1 = 15 \times 0.1 = 1.5\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Add the loaded face:</strong> \(6 \times 0.5 = 3.0\).</div></div>

      <div class="math-block">$$E[X] = 1.5 + 3.0 = 4.5$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> Even though the die only shows integers, the "average" outcome over many trials is 4.5. This is the "center of mass" of the distribution.</div></div>
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
