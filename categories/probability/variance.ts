import { TopicSection } from '../../src/data/types';

export const varianceSection: TopicSection = {
  id: "variance",
  title: "Variance",
  description: "Variance measures the 'Spread' or 'Volatility' of a random variable. It tells us how far individual values typically are from the average.",
  color: "#FF6F00",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Spread</div>
      <h1>Variance: Measuring Volatility</h1>
      <p><strong>Variance</strong> (\(\sigma^2\) or \(\text{Var}[X]\)) is the mathematical measure of <strong>Discrepancy</strong>. It tells us if our model's predictions are tightly clustered around the target or if they are wildly inconsistent.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Expectation</strong>: Understanding the center of gravity (\(\mu\)).</li>
        <li><strong>Standard Deviation</strong>: The square root of variance (\(\sigma\)).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Expectation (Average) tells you where your data is <strong>centered</strong>, but Variance tells you how much your data <strong>mistrusts</strong> that center. It is a measure of "Spread" or "Chaos." A high variance model is "noisy" and unpredictable—it catches every tiny jitter in the data. A low variance model is consistent but might be too rigid. In ML, this is the ultimate trade-off: do you want a model that hits the bullseye 1% of the time with wild misses, or a model that consistently hits the outer ring? Variance is the mathematical way we quantify that <strong>Reliability</strong>.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Second Central Moment</div>
      <p>The **Variance** (denoted $Var(X)$ or $\sigma^2$) of a random variable $X$ with mean $\mu = \mathbb{E}[X]$ measures the expected squared distance of the variable from its average:</p>
      <div class="math-block">
        $$\text{Var}(X) = \mathbb{E}\left[(X - \mu)^2\right]$$
      </div>
      <p>This quantity provides the foundation for measuring uncertainty and dispersion in data series:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Computational Identity</strong>: $\text{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2$. This is often easier to compute than the definition.</li>
        <li><strong>Scaling Property</strong>: $\text{Var}(aX + b) = a^2 \text{Var}(X)$. Shifts ($b$) do not affect dispersion; resizing ($a$) affects it quadratically.</li>
        <li><strong>Standard Deviation</strong>: $\sigma = \sqrt{\text{Var}(X)}$. This returns the measure to the same units as the original data.</li>
        <li><strong>Additivity</strong>: If $X$ and $Y$ are independent, $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">In the **Bias-Variance Tradeoff**, variance represents the error stemming from a model's sensitivity to specific fluctuations in the training data.</p>
    </div>
    
    <div class="callout tip">

    <h2 id="example-risk" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Risk in Investment</h2>
    
      <h4>Problem: Comparing Two Stocks</h4>
      <p>Stock A pays $5 every day. Stock B pays $20 half the time and -$10 the other half.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Stock A:</strong> \(\mathbb{E}[A] = 5\). Variance = 0. (Safe, consistent).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Stock B:</strong> \(\mathbb{E}[B] = (20 \times 0.5) + (-10 \times 0.5) = 5\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Variance B:</strong> \((20-5)^2 \times 0.5 + (-10-5)^2 \times 0.5 = 15^2 \times 0.5 + (-15)^2 \times 0.5 = 225\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Both stocks have an <strong>Expectation of $5</strong>. But Stock B has high <strong>Variance (225)</strong>. This is why we use variance as a proxy for "Risk."
        </div>
      </div>
    

    <h2 id="example-error" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Variance of Model Errors</h2>
    
      <h4>Problem: Measuring Reliability</h4>
      <p>Data: Predictions are off by [-1, 2, 0, -1]. Calculate the variance of the error.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Mean Error:</strong> \(\mu = (-1+2+0-1)/4 = 0\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Sum Squares:</strong> \((-1-0)^2 + (2-0)^2 + (0-0)^2 + (-1-0)^2 = 1 + 4 + 0 + 1 = 6\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Variance:</strong> \(6 / 4 = 1.5\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> 1.5. This tells us our "Expected deviation" from the correct answer is fairly small. This is the foundation of <strong>Least Squares Regression</strong>.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

# Sample data
data = np.array([10, 20, 20, 30, 70])

# Mean
mu = data.mean()

# Variance
var = data.var() # default is population variance

# Standard Deviation (the square root)
std = data.std()

print(f"Variance: {var}, Std Dev: {std:.2f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Overfitting (Bias-Variance Tradeoff)</strong>: Models that are too complex have very low bias but extremely high <strong>Variance</strong> on new data (they "memorize" the noise).</li>
      <li><strong>Principal Component Analysis (PCA)</strong>: PCA works by finding the directions (eigenvectors) that have the <strong>Maximum Variance</strong>.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> What happens to the average when we take more and more samples? Explore <strong><a href="#/mathematics/probability/law-of-large-numbers">The Law of Large Numbers</a></strong>.
    </div>
  `
};

