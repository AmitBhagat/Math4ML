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
      <a href="#se">Mathematical Derivation: Standard Error</a>
      <a href="#example">Illustrative Example: Die Rolls</a>
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
    </div>

    <h3>Core Properties</h3>
    <ol>
      <li>The mean of the sample means will be equal to the population mean \((\mu)\).</li>
      <li>The variance of the sample means will be \(\frac{\sigma^2}{n}\) (Standard Error).</li>
      <li>The "shape" becomes a bell curve as \(n\) increases (usually \(n \ge 30\) is sufficient).</li>
    </ol>

    <p><strong>Mathematical Definition:</strong></p>
    <div class="math-block">$$\bar{X}_n \approx \mathcal{N}\!\left(\mu, \frac{\sigma^2}{n}\right)$$</div>

    <h2 id="se">Mathematical Derivation: Standard Error</h2>
    <p>Why does the spread of our sample mean decrease as we collect more data?</p>

    <div class="step-box"><div class="step-num">1</div><div>Let \(S_n = X_1 + X_2 + \dots + X_n\).</div></div>
    <div class="step-box"><div class="step-num">2</div><div>The variance of the sum of independent variables is the sum of their variances: \(Var(S_n) = n\sigma^2\)</div></div>
    <div class="step-box"><div class="step-num">3</div><div>We are interested in the mean \(\bar{X}_n = \frac{S_n}{n}\).</div></div>
    <div class="step-box"><div class="step-num">4</div><div>Using the property \(Var(aX) = a^2 Var(X)\):</div></div>
    <div class="math-block">$$Var\!\left(\frac{S_n}{n}\right) = \frac{1}{n^2} Var(S_n) = \frac{1}{n^2} (n\sigma^2) = \frac{\sigma^2}{n}$$</div>
    <div class="step-box"><div class="step-num">5</div><div><strong>Conclusion:</strong> As \(n\) grows, the variance \(\frac{\sigma^2}{n}\) shrinks toward zero, concentrating our estimate around the true mean.</div></div>

    <h2 id="example">Illustrative Example: Die Rolls</h2>
    <div class="example-box">
      <h4>LLN and CLT in Action</h4>
      <ul>
        <li><strong>Original Distribution:</strong> A single die roll is <strong>Uniform</strong> (flat), with \(\mu = 3.5\).</li>
        <li><strong>LLN Application:</strong> If you roll a die 1,000 times and average them, you will get a value very close to 3.5.</li>
        <li><strong>CLT Application:</strong> If you ask 500 people to each roll a die 30 times and report their average, and then you plot those 500 averages, you will see a perfect <strong>Bell Curve</strong> centered at 3.5, even though the die itself isn't "bell-shaped."</li>
      </ul>
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
