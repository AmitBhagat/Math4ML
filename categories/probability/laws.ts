import { TopicSection } from '../../src/data/types';

export const lawsSection: TopicSection = {
  id: "laws",
  title: "Law of Large Numbers & Central Limit Theorem",
  description: "The Law of Large Numbers (LLN) and the Central Limit Theorem (CLT) explain why we can trust data samples to represent a whole population, justifying model generalization.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">⚖️ Probability · Laws</div>
      <h1>Law of Large Numbers &amp; Central Limit Theorem</h1>
      <p>The <strong>Law of Large Numbers (LLN)</strong> and the <strong>Central Limit Theorem (CLT)</strong> are the two most important pillars of statistics. They explain why we can trust data samples to represent a whole population. In Machine Learning, these laws justify why training a model on a finite dataset (a sample) allows it to generalize to the real world (the population).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#lln">1. Law of Large Numbers (LLN)</a>
      <a href="#clt">2. Central Limit Theorem (CLT)</a>
      <a href="#clt" class="sub">↳ Core Properties</a>
      <a href="#lln-example">4. Illustrative Example: LLN (Coin Flips)</a>
      <a href="#clt-example">5. Illustrative Example: CLT (Dice Sums)</a>
      <a href="#implementation">Implementation in Python (Visualizing CLT)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Expectation &amp; Variance:</strong> Mean \((\mu)\) and spread \((\sigma^2)\) of a distribution.</li>
        <li><strong>Random Variables:</strong> Understanding that data points are outcomes of a process.</li>
        <li><strong>Sampling:</strong> The act of selecting a subset of data from a larger set.</li>
      </ul>
    </div>

    <h2 id="lln">1. Law of Large Numbers (LLN)</h2>
    <div class="premium-callout success" style="border-width: 2px;">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; font-weight: 600;">LLN — Law of Large Numbers</div>
      <p>The LLN states that as the number of independent and identically distributed (<strong>i.i.d.</strong>) random trials increases, their observed average (sample mean) will get closer and closer to the theoretical average (population mean).</p>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Core Theory:</strong> LLN is the <strong>"Stability from Chaos"</strong> intuition. While a single coin flip is unpredictable, 10,000 flips are perfectly predictable. In ML, this is why training on a large dataset (Big Data) works—the individual "weirdness" of outliers cancels out, leaving only the true signal.
        </div>
      </div>
    </div>
    </div>

    <h3>The "Why"</h3>
    <p>If you flip a fair coin 10 times, you might get 7 heads (70%). But if you flip it 10,000 times, the percentage of heads will almost certainly be very close to 50%. The "noise" of individual randomness cancels out as the sample size grows.</p>

    <p><strong>Mathematical Definition:</strong></p>
    <p>For a sequence of i.i.d. variables \(X_1, X_2, \dots, X_n\) with mean \(\mu\):</p>
    <div class="math-block">$$\bar{X}_n \to \mu \text{ as } n \to \infty$$</div>

    <h2 id="clt">2. Central Limit Theorem (CLT)</h2>
    <div class="premium-callout info" style="border-width: 2px;">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; font-weight: 600;">CLT — Central Limit Theorem</div>
      <p>The CLT is arguably the most powerful tool in an ML Engineer's toolkit. It states that if you take sufficiently large random samples from <strong>any</strong> population (regardless of the original distribution's shape), the distribution of the <strong>sample means</strong> will be approximately <strong>Gaussian (Normal)</strong>.</p>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Core Theory:</strong> CLT is the <strong>"Natural Magnetism"</strong> of probability. It doesn't matter how weird your data starts (flat, skewed, or sharp)—once you start taking averages, the result is <em>always</em> a bell curve. This is why we can use Gaussian tools (like Linear Regression) even if the underlying data isn't perfectly normal.
        </div>
      </div>
    </div>
    </div>

    <h3>Core Properties</h3>
    <ol>
      <li>The mean of the sample means will be equal to the population mean \((\mu)\).</li>
      <li>The variance of the sample means will be \(\frac{\sigma^2}{n}\) (Standard Error).</li>
      <li>The "shape" becomes a bell curve as \(n\) increases (usually \(n \ge 30\) is sufficient).</li>
    </ol>

    <p><strong>Mathematical Definition:</strong></p>
    <div class="math-block">$$\bar{X}_n \approx \mathcal{N}\!\left(\mu, \frac{\sigma^2}{n}\right)$$</div>
    <div class="my-10">
      <visualizer topic="Distributions" />
    </div>

    <h2 id="se">Mathematical Derivation: Standard Error</h2>
    <p>Why does the spread of our sample mean decrease as we collect more data?</p>

    <div class="step-box"><span class="step-num">1</span><div><strong>Sum of Variables:</strong> Let \(S_n = X_1 + X_2 + \dots + X_n\).</div></div>
    <div class="step-box"><span class="step-num">2</span><div><strong>Summed Variance:</strong> For independent variables, \(Var(S_n) = n\sigma^2\).</div></div>
    <div class="step-box"><span class="step-num">3</span><div><strong>Mean Variable:</strong> We define the sample mean as \(\bar{X}_n = \frac{S_n}{n}\).</div></div>
    <div class="step-box"><span class="step-num">4</span><div><strong>Scaling Variance:</strong> Using \(Var(aX) = a^2 Var(X)\):</div></div>
    <div class="math-block">$$Var\!\left(\frac{1}{n} S_n\right) = \frac{1}{n^2} (n\sigma^2) = \frac{\sigma^2}{n}$$</div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> This $1/n$ scaling is the <strong>"Precision Guarantee."</strong> It tells you exactly how much your uncertainty shrinks as you collect more data. If you want to be twice as precise, you need four times as much data (because of the square root when you take the standard deviation).
      </div>
    </div>
    
    <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Conclusion:</strong> As \(n \to \infty\), the variance \(\frac{\sigma^2}{n} \to 0\). This proves that the sample mean becomes an increasingly precise estimate of the truth.</div></div>

    <h2 id="lln-example">4. Illustrative Example: LLN (Trial Convergence)</h2>
    <div class="example-box">
      <h4>Problem: Tracking the Mean of a Fair Coin</h4>
      <p>If you flip a coin and record the cumulative fraction of Heads, how does it behave over time?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>At \(n=10\):</strong> You might see 7 Heads (70%). The noise is high.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>At \(n=100\):</strong> You might see 53 Heads (53%). The noise is shrinking.</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>At \(n=10,000\):</strong> You might see 5002 Heads (50.02%).</div></div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> Observed mean stabilizes at the theoretical mean (0.5). In ML, this ensures that training on 1M images gives a representative model of the real world.</div></div>
    </div>

    <h2 id="clt-example">5. Illustrative Example: CLT (Emergence of Normality)</h2>
    <div class="example-box">
      <h4>Problem: Summing Uniform Die Rolls</h4>
      <p>A single die roll is flat (Uniform). What is the distribution of the <strong>average</strong> of 30 rolls?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Single Roll:</strong> Probability of 1, 2, 3, 4, 5, 6 is exactly \(1/6\). (Square/Flat shape).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Sample Mean:</strong> Roll 30 dice and take the average. Repeat this process 1,000 times.</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Observation:</strong> Plotting these 1,000 averages creates a <strong>Gaussian Bell Curve</strong>.</div></div>

      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>ML Insight:</strong> This is why Gaussian noise / Residuals are so common in ML. Most errors are the "sum" of many tiny, independent random effects, which naturally form a Normal distribution.</div></div>
    </div>

    <h2 id="implementation">Implementation in Python (Visualizing CLT)</h2>
    <python-code>
import numpy as np

# 1. Create a highly non-normal population (Exponential)
population = np.random.exponential(scale=2, size=100000)

# 2. Take 1000 samples of size 50 and calculate their means
sample_means = [np.mean(np.random.choice(population, 50)) for _ in range(1000)]

print(f"Sample Means (first 5): {sample_means[:5]}")
# In a real environment, you'd plot these to see the bell curve.
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Confidence Intervals:</strong> Since we know the distribution of sample means is Gaussian (thanks to CLT), we can say with 95% confidence where the true population parameter lies.</li>
      <li><strong>Hypothesis Testing:</strong> A/B testing relies on the CLT to determine if a change in a website's UI actually improved the click-through rate or if the result was just random noise.</li>
      <li><strong>Stochastic Gradient Descent (SGD):</strong> We update model weights using a small "batch" (sample) of data because the LLN guarantees that the average gradient of the batch is a good estimate of the gradient for the entire dataset.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>LLN</strong> guarantees that our estimate is <strong>accurate</strong> (converges to truth).</li>
      <li><strong>CLT</strong> gives us the <strong>distribution of the error</strong> (it will be Gaussian).</li>
      <li><strong>\(n=30\):</strong> The magic number where most distributions start looking Normal.</li>
      <li><strong>Independence:</strong> Both laws require samples to be independent.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> These laws provide the theoretical safety net. Now that we know samples represent populations, move to <strong><a href="#/mathematics/probability/bayes-mle">Maximum Likelihood Estimation (MLE)</a></strong> to find the parameters that best describe your data.
    </div>
  `
};
