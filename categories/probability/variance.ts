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
    <p>Expectation (Average) tells you where your data is <strong>centered</strong>. Variance tells you how much your data <strong>mistrusts</strong> that center. A high variance model is "noisy" and unpredictable. A low variance model is consistent. In ML, we often trade off some accuracy (Bias) to get a more consistent model (Low Variance).</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Variance as <strong>"Drunkenness."</strong> 
        If you walk in a straight line, your variance is zero. 
        If you stumble randomly back and forth while moving forward, your <strong>average path</strong> might still be a straight line, but your <strong>Variance</strong> is high. 
        In ML, high variance weights mean your model hasn't "converged" and is still stumbling around the solution.
      </div>
    </div>

    <visualizer topic="ExpectationVariance" />

    <h2 id="derivation">Mathematical Definition</h2>
    <p>Variance is the <strong>Expected Squared Deviation</strong> from the mean \(\mu\):</p>
    <div class="math-block">$$\text{Var}[X] = \mathbb{E}[(X - \mu)^2]$$</div>
    <p><strong>Common Shortcut:</strong> \(\text{Var}[X] = \mathbb{E}[X^2] - (\mathbb{E}[X])^2\). (Mean of squares minus square of means).</p>

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
