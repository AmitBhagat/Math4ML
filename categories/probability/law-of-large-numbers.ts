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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Random Variables</strong>: Discrete vs. Continuous.</li>
        <li><strong>Expectation</strong>: Understanding the center of gravity (\(\mu\)).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>If you flip a coin 5 times, you might get 4 heads (80%). This isn't science—it's just a "blip" of luck. But if you flip that coin 5,000,000 times, you will almost certainly land on exactly 50% heads. The <strong>Law of Large Numbers (LLN)</strong> is the "Anchor" that stops the world from being pure chaos. It guarantees that as you collect more data, the individual noise and "lucky streaks" get washed away, leaving only the <strong>Cold, Hard Truth</strong> of the underlying average. In Machine Learning, this is why we can trust our model's performance on a large test set; it ensures that our measured error eventually represents the <strong>True Global Error</strong>.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Convergence of Averages</div>
      <p>The **Law of Large Numbers** governs the behavior of the sample mean as the number of independent trials increases. Let $X_1, X_2, \dots, X_n$ be i.i.d. random variables with finite mean $\mu = \mathbb{E}[X_i]$ and sample mean $\bar{X}_n$. The theorem exists in two primary strengths:</p>
      <div class="math-block">
        $$\bar{X}_n = \frac{1}{n} \sum_{i=1}^n X_i$$
      </div>
      <p>The convergence of this average to the theoretical mean is expressed as:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Weak Law (WLLN)</strong>: $\bar{X}_n \xrightarrow{P} \mu$. For any $\epsilon > 0$, $\lim_{n \to \infty} P(|\bar{X}_n - \mu| > \epsilon) = 0$. This implies convergence in probability.</li>
        <li><strong>Strong Law (SLLN)</strong>: $\bar{X}_n \xrightarrow{a.s.} \mu$. The probability that the limit of the sequence equals $\mu$ is 1. This implies almost sure convergence.</li>
        <li><strong>Implications for Data</strong>: As sample size increases, the influence of individual outliers and noise vanishes, revealing the stable properties of the underlying distribution.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">In ML, LLN justifies the use of finite training sets to estimate the loss over the entire population (Empirical Risk Minimization).</p>
    </div>
    
    <h2 id="example-casino" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Casino's House Edge</h2>
    
      <h4>Problem: Tracking Profit over Time</h4>
      <p>A casino game has a 51% chance for the house to win $1 and a 49% chance to lose $1.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Expectation (\(\mu\)):</strong> \((1 \times 0.51) + (-1 \times 0.49) = 0.02\). The house expects to make 2 cents per game.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>LLN:</strong> If they play 1,000,000 games, they will almost certainly be within a tiny fraction of $20,000 profit.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Individual players can win (Luck), but the <strong>Law of Large Numbers</strong> means the casino <strong>never loses in the long run</strong>. It is mathematically impossible for them to lose over millions of trials.
        </div>
      </div>
    

    <h2 id="example-sample" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Sample Mean Convergence</h2>
    
      <h4>Problem: Measuring Error Stability</h4>
      <p>Data: Errors are drawn from a distribution with \(\mu = 0\) and \(\sigma = 10\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Small Sample (n=5):</strong> Average error might be 5.2. (Looks bad!).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Large Sample (n=10,000):</strong> Average error will be something like 0.001.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> This is why we need <strong>Large Datasets</strong> in Deep Learning. If we only have 10 data points, our "Accuracy" is just noise. If we have 1,000,000, the LLN gives us the <strong>Scientific Confidence</strong> that our model is actually working.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
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

