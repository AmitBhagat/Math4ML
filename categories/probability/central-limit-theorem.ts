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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Random Variables</strong>: Discrete vs. Continuous.</li>
        <li><strong>Probability Distributions</strong>: Understanding the Normal distribution (\(\mu, \sigma\)).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Individual random variables are usually pure chaos—some are Bernoulli (0 or 1), some are Uniform (flat), and some are just absolute noise. But the <strong>CLT</strong> is the "Master Law" that restores order. It states that when you combine enough small, independent factors, their collective behavior stops being chaotic and starts being perfectly predictable. The "Chaos" cancels itself out, and a smooth, symmetrical Bell Curve emerges. In Machine Learning, this is our saving grace: it allows us to assume that our total prediction error will be Gaussian, no matter how weird the individual data points are.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Universal Convergence</div>
      <p>The **Central Limit Theorem (CLT)** states that given a sufficiently large sample size $n$ from a population with a finite variance, the distribution of the sample mean will be approximately normal, regardless of the population's distribution. Let $X_1, \dots, X_n$ be i.i.d. random variables with $\mathbb{E}[X_i] = \mu$ and $\text{Var}(X_i) = \sigma^2$. As $n \to \infty$:</p>
      <div class="math-block">
        $$\text{The standardized sum } Z = \frac{\sum_{i=1}^n X_i - n\mu}{\sigma \sqrt{n}} \xrightarrow{d} \mathcal{N}(0, 1)$$
      </div>
      <p>This theorem provides three fundamental pillars for statistical modeling:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Distributional Independence</strong>: The result holds whether the underlying $X_i$ are Bernoulli, Poisson, or any other distribution (provided $\sigma^2 < \infty$).</li>
        <li><strong>Sample Mean Distribution</strong>: The sample mean $\bar{X}_n$ follows $\mathcal{N}(\mu, \sigma^2/n)$. The "Standard Error" decreases at a rate of $1/\sqrt{n}$.</li>
        <li><strong>Z-Score Standardization</strong>: The formula $\frac{\bar{X} - \mu}{\sigma/\sqrt{n}}$ is used to calculate probabilities on the standard normal curve.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">CLT is the reason why **Squared Loss** (MSE) is the optimal objective under the assumption of aggregate, independent noise terms.</p>
    </div>
    
    <h2 id="example-uniform" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Sum of Uniform Distributions</h2>
    
      <h4>Problem: Turning Flat space into a Bell Curve</h4>
      <p>A single U(0, 1) distribution is a flat rectangle. What if you sum 100 of them?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Individual:</strong> Each has \(\mu = 0.5\). (Flat).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Cumulative:</strong> Summing 100 results in \(\mu_{total} = 50\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Observation:</strong> The resulting sum will be almost perfectly shaped like a Bell Curve centered at 50.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> By summing 100 "flat" variables, we birthed a Gaussian one. This is the <strong>CLT</strong> in action.
        </div>
      </div>
    

    <h2 id="example-noise" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Why Error is usually Normal</h2>
    
      <h4>Problem: Tracking Compound Measurement Errors</h4>
      <p>Assume your sensor error is caused by temperature, vibration, and radiation. Each follows a wild distribution.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> The <strong>Total Error</strong> is the sum of all these independent factors.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Conclusion:</strong> Regardless of how weird the individual errors are, the <strong>Aggregate Error</strong> will be Gaussian!</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> This is why we almost always use <strong>MSE (Mean Squared Error)</strong> in ML—it is mathematically the optimal loss function if you assume your data errors follow this CLT-driven Normal distribution.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
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

