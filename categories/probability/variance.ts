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
      <div class="premium-def-title">Formalism: The Second Central Moment & The Measure of Spread</div>
      <p>Variance is the mathematical "Fear Factor." It measures the volatility and untrustworthiness of a distribution.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine your distribution is balanced on a fulcrum at its mean $\mu$. <strong>Variance</strong> measures the "Inertia" of that mass. If most of the probability density is squeezed tightly against the fulcrum, the variance is low (stable). If the mass is spread out far into the wings, the variance is high (volatile). We measure this by looking at the average <strong>Squared Distance</strong> of every point from the center. We square the distance so that "left-side" and "right-side" deviations don't cancel each other out—they both contribute to the overall chaos.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We define Variance as the expectation of the squared deviation from the mean $\mu = \mathbb{E}[X]$:</p>
      <div class="math-block">
        $$\text{Var}(X) = \mathbb{E}[(X - \mu)^2]$$
      </div>
      <p>To make this easier to calculate, we expand the inner square and apply the <strong>Linearity of Expectation</strong>:</p>
      <div class="math-block">
        $$\text{Var}(X) = \mathbb{E}[X^2 - 2X\mu + \mu^2] = \mathbb{E}[X^2] - 2\mu\mathbb{E}[X] + \mu^2$$
      </div>
      <p>Replacing $\mathbb{E}[X]$ with $\mu$ simplifies the formula into the standard "computational form":</p>
      <div class="math-block">
        $$\text{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2$$
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, Variance is the core of the <strong>Stability Gap</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Overfitting</strong>: A "High Variance" model has memorized the random wiggles of the training data. If you change a single data point, the whole model might warp (low stability).</li>
        <li><strong>Independence of Sums</strong>: One of the most critical rules is that the variance of the sum of *independent* variables is the sum of their variances: $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$. This is why averaging multiple models (Ensembling) reduces total error.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Variance is measured in "Squared Units" (like $meters^2$), which is hard to visualize. We take the square root ($\sigma = \sqrt{\text{Var}}$) to get the <strong>Standard Deviation</strong>, putting the "spread" back into the same units as the original data.</p>
    </div>
    
    <visualizer topic="Variance" />
    
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
    <p>Variance is the mathematical "Fear Factor" of an algorithm. It measures the degree of chaos and inconsistency in your predictions or your feature set.</p>
    <ul>
      <li><strong>Model Robustness & Training Stability</strong>: If you train a model twice on slightly different data and get two completely different results, your model has <strong>High Variance</strong>. It is essentially "Hallucinating" patterns in the random wiggles of the training set. Reducing this variance—through techniques like Dropout or Weight Decay—is the only way to ensure your AI works in the real world, not just on your laptop.</li>
      <li><strong>Information Compression (PCA)</strong>: Principal Component Analysis (PCA) is the ultimate use of variance. It looks at your 1,000 features and asks: "Which direction has the <strong>Maximum Variance</strong>?" It assumes that the axes with the most "Spread" contain the most information. By keeping only the high-variance directions and tossing the low-variance ones, PCA can compress a massive dataset by 90% while keeping almost all the meaning.</li>
    </ul>
    <p>Teacher's Final Word: Expectation tells you where the target is; Variance tells you how much you're "flailing." In ML, consistency is often more valuable than a lucky bullseye. Master the variance, and you master the model's reliability.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What happens to the average when we take more and more samples? Explore <strong><a href="#/mathematics/probability/law-of-large-numbers">The Law of Large Numbers</a></strong>.
    </div>
  `
};


