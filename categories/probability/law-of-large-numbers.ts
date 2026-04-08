import { TopicSection } from '../../src/data/types';

export const lawOfLargeNumbersSection: TopicSection = {
  id: "law-of-large-numbers",
  title: "Law of Large Numbers (LLN)",
  description: "The Law of Large Numbers states that as the number of trials increases, the sample average will converge to the true theoretical average.",
  color: "#FF6F00",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · LLN</div>
      <h1>Law of Large Numbers: The Anchor</h1>
      <p>The <strong>Law of Large Numbers (LLN)</strong> is the "Anchor" of probability. It mathematically guarantees that if you take enough samples, the <strong>Sample Mean</strong> will eventually land on the <strong>True Theoretical Mean</strong> of the population.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Definition</a>
      <a href="#example-casino">Example 1: The Casino's House Edge</a>
      <a href="#example-sample">Example 2: Sample Mean Convergence</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Random Variables</strong>: Discrete vs. Continuous.</li>
        <li><strong>Expectation</strong>: Understanding the center of gravity (\(\mu\)).</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>If you flip a coin 5 times, you might get 4 heads (80%). This is just "luck." But if you flip a coin 5,000,000 times, you will almost certainly have extremely close to 50% heads. The <strong>LLN</strong> says that individual "luck" (Variability) gets washed away as the sample size grows. This is why we can trust our model's performance on a large test set.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of LLN as <strong>"The Truth Coming to Light."</strong> 
        In the short term, anyone can look like a genius (High Accuracy). 
        But in the long term, your <strong>True Average Skill</strong> will be revealed. 
        In ML, we use this to justify that our "Sample Average Loss" on the training set eventually represents the <strong>True Error</strong> of the model on the data distribution.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <p>Let \(X_1, X_2, \dots, X_n\) be independent identically distributed (i.i.d) random variables with mean \(\mu\). The Sample Mean \(\overline{X}_n\) is defined as:</p>
    <div class="math-block">$$\overline{X}_n = \frac{1}{n} \sum_{i=1}^n X_i$$</div>
    <p>The <strong>Strong LLN</strong> states:</p>
    <div class="math-block">$$\overline{X}_n \xrightarrow{a.s.} \mu \text{ as } n \to \infty$$</div>

    <h2 id="example-casino">Example 1: The Casino's House Edge</h2>
    <div class="example-box">
      <h4>Problem: Tracking Profit over Time</h4>
      <p>A casino game has a 51% chance for the house to win $1 and a 49% chance to lose $1.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Expectation (\(\mu\)):</strong> \((1 \times 0.51) + (-1 \times 0.49) = 0.02\). The house expects to make 2 cents per game.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>LLN:</strong> If they play 1,000,000 games, they will almost certainly be within a tiny fraction of $20,000 profit.</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Individual players can win (Luck), but the <strong>Law of Large Numbers</strong> means the casino <strong>never loses in the long run</strong>. It is mathematically impossible for them to lose over millions of trials.
        </div>
      </div>
    </div>

    <h2 id="example-sample">Example 2: Sample Mean Convergence</h2>
    <div class="example-box">
      <h4>Problem: Measuring Error Stability</h4>
      <p>Data: Errors are drawn from a distribution with \(\mu = 0\) and \(\sigma = 10\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Small Sample (n=5):</strong> Average error might be 5.2. (Looks bad!).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Large Sample (n=10,000):</strong> Average error will be something like 0.001.</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> This is why we need <strong>Large Datasets</strong> in Deep Learning. If we only have 10 data points, our "Accuracy" is just noise. If we have 1,000,000, the LLN gives us the <strong>Scientific Confidence</strong> that our model is actually working.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np
import matplotlib.pyplot as plt

# Coin flip simulation (0, 1)
n_trials = 1000
flips = np.random.randint(0, 2, size=n_trials)

# Running average
running_avg = np.cumsum(flips) / np.arange(1, n_trials + 1)

print(f"Final Average: {running_avg[-1]:.4f}")
# Notice how the avg starts chaotic but flattens out around 0.5!
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Monte Carlo Simulation</strong>: We use LLN to approximate complex integrals by sampling thousands of points and averaging them.</li>
      <li><strong>Batch Gradient Descent</strong>: Averaging the gradients over more samples gives us the "True Gradient" of the entire dataset.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> The average converges, but what does the <strong>Distribution</strong> of those averages look like? Explore <strong><a href="#/mathematics/probability/central-limit-theorem">The Central Limit Theorem (CLT)</a></strong>.
    </div>
  `
};
