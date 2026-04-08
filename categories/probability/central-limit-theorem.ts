import { TopicSection } from '../../src/data/types';

export const centralLimitTheoremSection: TopicSection = {
  id: "central-limit-theorem",
  title: "Central Limit Theorem (CLT)",
  description: "The CLT states that the sum of many independent random variables will follow a Normal Distribution, regardless of the original distribution.",
  color: "#FF6F00",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · CLT</div>
      <h1>Central Limit Theorem: The Universal Bell Curve</h1>
      <p>The <strong>Central Limit Theorem (CLT)</strong> is the "Master Rule" of statistics. It says that if you add together many independent random variables, their <strong>Sum</strong> (and Mean) will always eventually form a <strong>Normal Distribution</strong> (Bell Curve). This is why the Normal distribution is so pervasive in Machine Learning.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Definition</a>
      <a href="#example-uniform">Example 1: Sum of Uniform Distributions</a>
      <a href="#example-noise">Example 2: Why Error is usually Normal</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Random Variables</strong>: Discrete vs. Continuous.</li>
        <li><strong>Probability Distributions</strong>: Understanding the Normal distribution (\(\mu, \sigma\)).</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>Individual random variables can be messy—some are Bernoulli (0 or 1), some are Uniform (flat), some are absolute chaos. But the <strong>CLT</strong> says that when you combine many small independent factors, their collective behavior is predictable. The "Chaos" cancels out, and a smooth Bell Curve emerges from the noise.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of the CLT as <strong>"The Crowd's Wisdom."</strong> 
        If you ask one person to guess the price of a jar of jellybeans, they might be wildly wrong. 
        But if you ask 10,000 people and take their <strong>Average</strong>, that average won't just be accurate—it will also follow a beautiful, symmetrical Normal Distribution. 
        In ML, this is why we can assume that our model's cumulative error is Gaussian.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <p>Let \(X_1, X_2, \dots, X_n\) be independent random variables with mean \(\mu\) and variance \(\sigma^2\). As \(n\) becomes large, the distribution of their mean \(\overline{X}_n\) converges to:</p>
    <div class="math-block">$$\overline{X}_n \sim \mathcal{N}\left(\mu, \frac{\sigma^2}{n}\right)$$</div>
    <p>The <strong>Z-score</strong> of the sample mean is: \(Z = \frac{\overline{X}_n - \mu}{\sigma/\sqrt{n}}\).</p>

    <h2 id="example-uniform">Example 1: Sum of Uniform Distributions</h2>
    <div class="example-box">
      <h4>Problem: Turning Flat space into a Bell Curve</h4>
      <p>A single U(0, 1) distribution is a flat rectangle. What if you sum 100 of them?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Individual:</strong> Each has \(\mu = 0.5\). (Flat).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Cumulative:</strong> Summing 100 results in \(\mu_{total} = 50\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Observation:</strong> The resulting sum will be almost perfectly shaped like a Bell Curve centered at 50.</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> By summing 100 "flat" variables, we birthed a Gaussian one. This is the <strong>CLT</strong> in action.
        </div>
      </div>
    </div>

    <h2 id="example-noise">Example 2: Why Error is usually Normal</h2>
    <div class="example-box">
      <h4>Problem: Tracking Compound Measurement Errors</h4>
      <p>Assume your sensor error is caused by temperature, vibration, and radiation. Each follows a wild distribution.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identify:</strong> The <strong>Total Error</strong> is the sum of all these independent factors.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Conclusion:</strong> Regardless of how weird the individual errors are, the <strong>Aggregate Error</strong> will be Gaussian!</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> This is why we almost always use <strong>MSE (Mean Squared Error)</strong> in ML—it is mathematically the optimal loss function if you assume your data errors follow this CLT-driven Normal distribution.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np
import matplotlib.pyplot as plt

# Sum together 1,000 sets of 100 uniform random variables
n_samples = 1000
sample_size = 100
means = [np.random.uniform(0, 1, sample_size).mean() for _ in range(n_samples)]

# Plotting the result - looks like a Bell Curve!
plt.hist(means, bins=30, density=True)
plt.title(f"Distribution of {n_samples} Sample Means")
plt.show()
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Standardization (Z-Score)</strong>: We shift data (\(x - \mu\)) and divide by StdDev because we assume the features follow the CLT-driven normal pattern.</li>
      <li><strong>Confidence Intervals</strong>: Used in hypothesis testing to tell us if our model improvement is "statistically significant."</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve mastered how to calculate probabilities forward. Now, how do we work <em>backwards</em> to find the cause of an event? Explore <strong><a href="#/mathematics/probability/bayes-theorem">Bayes' Theorem</a></strong>.
    </div>
  `
};
