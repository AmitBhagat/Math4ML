import { TopicSection } from '../../src/data/types';

export const probabilityDistributionsSection: TopicSection = {
  id: "probability-distributions",
  title: "Probability Distributions",
  description: "A probability distribution is a mathematical function that provides the probabilities of occurrence of different possible outcomes. Choosing the right distribution is the first step in building any probabilistic model.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📉 Probability · Distributions</div>
      <h1>Probability Distributions</h1>
      <p>In Machine Learning, we don't just look at individual data points; we look at the <strong>distribution</strong> they follow. A probability distribution is a mathematical function that provides the probabilities of occurrence of different possible outcomes. Choosing the right distribution is the first step in building any probabilistic model, from <strong>Logistic Regression</strong> to <strong>Variational Autoencoders</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#discrete">Discrete Distributions</a>
      <a href="#discrete" class="sub">↳ 1. Bernoulli · 2. Binomial · 3. Poisson</a>
      <a href="#continuous">Continuous Distributions</a>
      <a href="#continuous" class="sub">↳ 4. Gaussian · 5. Uniform · 6. Exponential · 7. Laplace</a>
      <a href="#derivation">Mathematical Derivation: Gaussian to Standard Normal</a>
      <a href="#binomial-example">3. Illustrative Example: Binomial (Successes)</a>
      <a href="#gaussian-example">4. Illustrative Example: Gaussian (Z-score)</a>
      <a href="#implementation">Implementation in Python (SciPy)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Random Variables:</strong> Knowing the difference between Discrete and Continuous.</li>
        <li><strong>PMF/PDF:</strong> Understanding how we measure probability for different types of variables.</li>
        <li><strong>Expectation &amp; Variance:</strong> These are the "parameters" that define the shape of the distributions below.</li>
      </ul>
    </div>

    <h2 id="discrete">Discrete Distributions</h2>
    <p>These are used when outcomes are countable (e.g., Yes/No, number of clicks).</p>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 20px 0;">
      <div class="premium-def-box">
        <div class="premium-def-title">Discrete · #1</div>
        <h4>Bernoulli Distribution</h4>
        <p>The simplest distribution. Models a single trial with two outcomes: Success \((x=1)\) or Failure \((x=0)\).</p>
        <p><strong>Parameter:</strong> \(p\) (Probability of success).</p>
        <p><strong>PMF:</strong> \(P(x) = p^x(1-p)^{1-x}\)</p>
        <div style="font-size:12.5px; color:var(--muted-premium); margin-top:8px;"><strong>ML Use:</strong> The output of a binary classifier (before thresholding) is a Bernoulli parameter.</div>
      </div>
      <div class="premium-def-box">
        <div class="premium-def-title">Discrete · #2</div>
        <h4>Binomial Distribution</h4>
        <p>Models the number of successes in \(n\) independent Bernoulli trials.</p>
        <p><strong>Parameters:</strong> \(n\) (trials), \(p\) (success probability).</p>
        <p><strong>PMF:</strong> \(P(x) = \binom{n}{x} p^x (1-p)^{n-x}\)</p>
        <div style="font-size:12.5px; color:var(--muted-premium); margin-top:8px;"><strong>ML Use:</strong> Modeling the number of users who will click an ad out of a batch of 100.</div>
      </div>
      <div class="premium-def-box" style="grid-column: span 2;">
        <div class="premium-def-title">Discrete · #3</div>
        <h4>Poisson Distribution</h4>
        <p>Models the number of events occurring in a fixed interval of time or space.</p>
        <p><strong>Parameter:</strong> \(\lambda\) (Average rate of occurrence).</p>
        <p><strong>PMF:</strong> \(P(x) = \dfrac{e^{-\lambda} \lambda^x}{x!}\)</p>
        <div style="font-size:12.5px; color:var(--muted-premium); margin-top:8px;"><strong>ML Use:</strong> Predicting the number of support tickets received per day or web traffic spikes.</div>
      </div>
    </div>

    <h2 id="continuous">Continuous Distributions</h2>
    <p>These model data that can take any real value (e.g., height, time, pixel intensity).</p>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 20px 0;">
      <div class="premium-def-box" style="grid-column: span 2;">
        <div class="premium-def-title">Continuous · #4 — The "King"</div>
        <h4>Gaussian (Normal) Distribution</h4>
        <p>The "King" of distributions due to the <strong>Central Limit Theorem</strong>. It is symmetric and bell-shaped.</p>
        <p><strong>Parameters:</strong> \(\mu\) (mean), \(\sigma^2\) (variance).</p>
        <p><strong>PDF:</strong> \(f(x) = \dfrac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}\)</p>
        <div style="font-size:12.5px; color:var(--muted-premium); margin-top:8px;"><strong>ML Use:</strong> Standardizing features, Gaussian Naive Bayes, and modeling noise in Linear Regression.</div>
      </div>
      <div class="my-10" style="grid-column: span 2;">
        <visualizer topic="Distributions" />
      </div>
      <div class="premium-def-box">
        <div class="premium-def-title">Continuous · #5</div>
        <h4>Uniform Distribution</h4>
        <p>All outcomes in the interval \([a, b]\) are equally likely.</p>
        <p><strong>Parameters:</strong> \(a\) (start), \(b\) (end).</p>
        <div style="font-size:12.5px; color:var(--muted-premium); margin-top:8px;"><strong>ML Use:</strong> Weight initialization in Neural Networks (e.g., Xavier/Glorot initialization).</div>
      </div>
      <div class="premium-def-box">
        <div class="premium-def-title">Continuous · #6</div>
        <h4>Exponential Distribution</h4>
        <p>Models the time between events in a Poisson process (time until the next event).</p>
        <p><strong>Parameter:</strong> \(\lambda\) (rate).</p>
        <div style="font-size:12.5px; color:var(--muted-premium); margin-top:8px;"><strong>ML Use:</strong> Survival analysis, modeling the "Time-to-Click" in marketing.</div>
      </div>
      <div class="premium-def-box" style="grid-column: span 2;">
        <div class="premium-def-title">Continuous · #7</div>
        <h4>Laplace Distribution</h4>
        <p>Similar to Gaussian but with a sharper peak and "heavier tails."</p>
        <p><strong>Parameters:</strong> \(\mu\) (location), \(b\) (scale).</p>
        <div style="font-size:12.5px; color:var(--muted-premium); margin-top:8px;"><strong>ML Use:</strong> Linked to <strong>L1 Regularization (Lasso)</strong>. While Gaussian noise leads to L2, Laplace noise leads to L1, encouraging sparsity in models.</div>
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation: Gaussian to Standard Normal</h2>
    <p>To compare different Gaussian distributions, we transform them into the <strong>Standard Normal Distribution</strong> \((\mu=0, \sigma=1)\) using the <strong>Z-score</strong>:</p>
    <div class="math-block">$$Z = \frac{x - \mu}{\sigma}$$</div>
    <p>If \(X \sim \mathcal{N}(\mu, \sigma^2)\), then \(Z \sim \mathcal{N}(0, 1)\). This is the math behind <code>StandardScaler</code> in Scikit-Learn.</p>

    <h2 id="binomial-example">3. Illustrative Example: Binomial (Binary Successes)</h2>
    <div class="example-box">
      <h4>Problem: Tracking Clicks on Ad Impressions</h4>
      <p>An ad has a Click-Through Rate (CTR) of \(p=0.1\). If we show it to \(n=5\) users, what is the probability that <strong>exactly 2</strong> will click?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Apply Formula:</strong> \(P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Plug in Values:</strong> \(\binom{5}{2} = 10\). Calculated as \(\frac{5!}{2!3!} = 10\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Solve:</strong> \(10 \times (0.1)^2 \times (0.9)^3\).</div></div>

      <div class="math-block">$$P(X=2) = 10 \times 0.01 \times 0.729 = 0.0729$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> There is a ~7.3% chance of getting exactly 2 clicks. Note how the probability drops off as we move away from the expectation of \(np = 0.5\).</div></div>
    </div>

    <h2 id="gaussian-example">4. Illustrative Example: Gaussian (Z-score)</h2>
    <div class="example-box">
      <h4>Problem: Standardizing "Wait Times"</h4>
      <p>A server's response time follows \(\mathcal{N}(500ms, 100^2)\). If a request takes \(650ms\), how many standard deviations from the mean is it?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Recall Formula:</strong> \(Z = \frac{x - \mu}{\sigma}\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Calculate:</strong> \(Z = \frac{650 - 500}{100} = \frac{150}{100} = 1.5\).</div></div>

      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Intuition:</strong> A Z-score of 1.5 means the request was significantly slower than average. In ML, we often <strong>clip</strong> values with Z-scores \(|Z| > 3\) as they are likely outliers.</div></div>
    </div>

    <h2 id="implementation">Implementation in Python (SciPy)</h2>
    <python-code>
import numpy as np
from scipy import stats

# 1. Binomial: 10 tosses, p=0.5. Prob of getting exactly 5 heads?
prob_5_heads = stats.binom.pmf(5, n=10, p=0.5)

# 2. Poisson: Avg 3 emails/hour. Prob of getting 5 emails?
prob_5_emails = stats.poisson.pmf(5, mu=3)

# 3. Gaussian: Mean 100, Std 15 (IQ score). Prob of IQ < 85?
prob_lower_iq = stats.norm.cdf(85, loc=100, scale=15)

print(f"Binomial (5 Heads): {prob_5_heads:.4f}")
print(f"Poisson (5 Emails): {prob_5_emails:.4f}")
print(f"Gaussian (IQ < 85): {prob_lower_iq:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>L1 vs L2 Regularization:</strong> L2 assumes weights follow a Gaussian prior; L1 assumes they follow a Laplace prior.</li>
      <li><strong>Maximum Likelihood Estimation (MLE):</strong> We pick distribution parameters that make the observed data most likely.</li>
      <li><strong>Initialization:</strong> Uniform and Gaussian distributions are the defaults for starting weight values in Deep Learning.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Normal (Gaussian)</strong> is the default for most natural phenomena.</li>
      <li><strong>Bernoulli</strong> is for binary choices \((0/1)\).</li>
      <li><strong>Laplace</strong> is "pointier" than Gaussian and handles outliers differently.</li>
      <li><strong>Poisson</strong> is for counts; <strong>Exponential</strong> is for time between counts.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Understanding single-variable distributions leads directly to <strong><a href="#/mathematics/probability/multivariate-probability">Multivariate Probability</a></strong>, where we model complex feature vectors.
    </div>
  `
};
