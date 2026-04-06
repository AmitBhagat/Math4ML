import { TopicSection } from '../../src/data/types';

export const probabilityDistributionsSection: TopicSection = {
  id: "probability-distributions",
  title: "Probability Distributions",
  description: "The mathematical blueprints of uncertainty. From binary successes in neural networks to traffic modeling and Bayesian priors, understand the distributions that power Modern ML.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Probability</div>
      <h1>Probability Distributions for ML</h1>
      <p>Probability distributions are the fundamental building blocks for modeling data uncertainty. In Machine Learning, they define our loss functions, initialize our weights, and provide the framework for Bayesian inference.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#bernoulli">1. Bernoulli Distribution</a>
      <a href="#binomial">2. Binomial Distribution</a>
      <a href="#poisson">3. Poisson Distribution</a>
      <a href="#categorical">4. Categorical Distribution</a>
      <a href="#multinomial">5. Multinomial Distribution</a>
      <a href="#gaussian">6. Gaussian (Normal) Distribution</a>
      <a href="#beta">7. Beta Distribution</a>
      <a href="#dirichlet">8. Dirichlet Distribution</a>
      <a href="#comparison">Final Summary & Comparison</a>
    </div>

    <h2 id="bernoulli" style="background: linear-gradient(to right, #0969da, #054ada); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">1. Bernoulli Distribution</h2>
    <p>The Bernoulli distribution is the simplest discrete distribution for a random variable with exactly two possible outcomes: Success ($x=1$) with probability $p$, and Failure ($x=0$) with probability $q=1-p$.</p>
    
    <div class="def-box">
      <strong>ML Context:</strong> The output of a **Sigmoid activation function** ($\sigma(z)$) is interpreted as the parameter $p$ of a Bernoulli distribution. This is the bedrock of binary classification.
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PMF:</strong> $P(X = x) = p^x (1-p)^{1-x}$ for $x \in \{0, 1\}$</li>
      <li><strong>Mean ($E[X]$):</strong> $\sum x \cdot P(x) = p$</li>
      <li><strong>Variance ($Var(X)$):</strong> $p(1-p)$</li>
    </ul>

    <div class="callout focus">
      <div class="callout-icon">🎯</div>
      <div class="callout-body">
        The <strong>Binary Cross-Entropy (Log-Loss)</strong> is derived directly from the Bernoulli PMF:
        $$\text{Loss} = -(y \log(p) + (1-y) \log(1-p))$$
      </div>
    </div>

    <h3>Example & Solution</h3>
    <p><strong>Problem:</strong> A Binary Classifier detects fraudulent transactions. For a specific transaction, the model outputs a probability of 0.02 that it is "Fraud" ($p=0.02$). Calculate the variance of this prediction.</p>
    <p><strong>Solution:</strong>
      Identify $p = 0.02, q = 0.98$.
      $$Var(X) = p(1-p) = 0.02 \times 0.98 = 0.0196$$
    </p>

    <python-code>
import numpy as np
from scipy.stats import bernoulli

# Define parameter (30% chance of success)
p = 0.3
mean, var = bernoulli.stats(p, moments='mv')
print(f"Mean: {mean}, Variance: {var}")

# Probability Mass Function at x=1
pmf_success = bernoulli.pmf(1, p)
print(f"P(Success): {pmf_success}")
    </python-code>

    <div style="height: 2rem;"></div>

    <h2 id="binomial" style="background: linear-gradient(to right, #1a7f37, #116329); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">2. Binomial Distribution</h2>
    <p>The Binomial distribution describes the number of successes in a fixed number of independent **Bernoulli trials**. It models the probability of getting $k$ successes in $n$ flips of a coin.</p>
    
    <div class="def-box">
      <strong>ML Context:</strong> Used to model <strong>Batch Accuracy</strong>. If a model has 90% accuracy ($p=0.9$), we can calculate the likelihood of getting exactly $k$ correct predictions in a batch of $n$ images.
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PMF:</strong> $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$</li>
      <li><strong>Mean:</strong> $np$</li>
      <li><strong>Variance:</strong> $np(1-p)$</li>
    </ul>

    <h3>Example & Solution</h3>
    <p><strong>Problem:</strong> A QA engineer finds that 10% of commits have bugs ($p=0.1$). If 5 commits are made ($n=5$), what is the probability that **exactly 2** have bugs?</p>
    <p><strong>Solution:</strong>
      $$P(X=2) = \binom{5}{2} (0.1)^2 (0.9)^3 = 10 \times 0.01 \times 0.729 = 0.0729$$ (7.29%).
    </p>

    <python-code>
from scipy.stats import binom

n, p = 5, 0.1
# Probability of exactly 2 successes
prob_2 = binom.pmf(2, n, p)
print(f"P(X=2): {prob_2:.4f}")
    </python-code>

    <div style="height: 2rem;"></div>

    <h2 id="poisson" style="background: linear-gradient(to right, #9a6700, #7d5300); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">3. Poisson Distribution</h2>
    <p>The Poisson distribution models the number of events occurring in a fixed interval of time or space, given a constant average rate ($\lambda$).</p>
    
    <div class="def-box">
      <strong>ML Context:</strong> Used in **Network Traffic modeling** (packets per second) or **Anomaly Detection** (number of failed login attempts).
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PMF:</strong> $P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}$</li>
      <li><strong>Mean:</strong> $\lambda$</li>
      <li><strong>Variance:</strong> $\lambda$</li>
    </ul>

    <h3>Example & Solution</h3>
    <p><strong>Problem:</strong> A server receives an average of 4 requests/sec ($\lambda=4$). What is the probability it receives **exactly 2** requests in the next second?</p>
    <p><strong>Solution:</strong>
      $$P(X=2) = \frac{4^2 e^{-4}}{2!} = \frac{16 \times 0.0183}{2} = 0.1464$$ (14.64%).
    </p>

    <python-code>
from scipy.stats import poisson

lam = 4
# Probability of exactly 2 events
prob_2 = poisson.pmf(2, lam)
print(f"P(X=2) for lambda=4: {prob_2:.4f}")
    </python-code>

    <div style="height: 2rem;"></div>

    <h2 id="categorical" style="background: linear-gradient(to right, #8250df, #6639ba); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">4. Categorical Distribution</h2>
    <p>Also known as the **Multinoulli Distribution**, it generalizes the Bernoulli distribution from two outcomes to $K$ possible categories for a single trial.</p>
    
    <div class="def-box">
      <strong>ML Context:</strong> The output of a **Softmax activation function** represents the parameters of a Categorical distribution ($\sum p_i = 1$).
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PMF:</strong> $P(\mathbf{x} | \mathbf{p}) = \prod_{i=1}^{K} p_i^{x_i}$ (using one-hot vector $\mathbf{x}$)</li>
      <li><strong>Mean ($E[x_i]$):</strong> $p_i$</li>
      <li><strong>Variance ($Var(x_i)$):</strong> $p_i(1-p_i)$</li>
    </ul>

    <h3>Example & Solution</h3>
    <p><strong>Problem:</strong> A Softmax layer outputs $[0.1, 0.7, 0.2]$ for labels [Cloud, Rain, Sun]. Calculate the variance for the "Cloud" category.</p>
    <p><strong>Solution:</strong>
      $p_1 = 0.1$.
      $$Var(x_1) = 0.1(1 - 0.1) = 0.09$$
    </p>

    <python-code>
import numpy as np

# Simulate a Softmax output (Categorical)
p = [0.1, 0.7, 0.2]
sample = np.random.multinomial(1, p)
print(f"One-hot Sample: {sample}")
    </python-code>

    <div style="height: 2rem;"></div>

    <h2 id="multinomial" style="background: linear-gradient(to right, #bf3989, #9d2d70); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">5. Multinomial Distribution</h2>
    <p>The Multinomial distribution is the multi-category extension of the Binomial distribution. It describes the outcome of $n$ independent trials where each trial follows a Categorical distribution.</p>
    
    <div class="def-box">
      <strong>ML Context:</strong> Integral to **NLP**. The "Bag of Words" model treats a document as a Multinomial distribution over a vocabulary of $K$ words.
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PMF:</strong> $P(x_1, \dots, x_k) = \frac{n!}{x_1! \dots x_k!} p_1^{x_1} \dots p_k^{x_k}$</li>
      <li><strong>Mean ($E[x_i]$):</strong> $n \cdot p_i$</li>
      <li><strong>Variance ($Var(x_i)$):</strong> $n \cdot p_i(1 - p_i)$</li>
    </ul>

    <h3>Example & Solution</h3>
    <p><strong>Problem:</strong> A sentiment model with $p = [0.4, 0.4, 0.2]$ (Pos, Neu, Neg). In 10 posts, what is the probability of exactly 5 Pos, 3 Neu, and 2 Neg?</p>
    <p><strong>Solution:</strong>
      $$P = \frac{10!}{5!3!2!} (0.4)^5 (0.4)^3 (0.2)^2 \approx 0.066$$ (6.6%).
    </p>

    <python-code>
from scipy.stats import multinomial

n, p = 10, [0.4, 0.4, 0.2]
target = [5, 3, 2]
prob = multinomial.pmf(target, n, p)
print(f"Outcome Probability: {prob:.4f}")
    </python-code>

    <div style="height: 2rem;"></div>

    <h2 id="gaussian" style="background: linear-gradient(to right, #d73a49, #b31d28); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">6. Gaussian (Normal) Distribution</h2>
    <p>The most important continuous distribution in ML. Defined by Mean ($\mu$) and Standard Deviation ($\sigma$), it forms the classic "Bell Curve."</p>
    
    <div class="def-box">
      <strong>ML Context:</strong> The **Central Limit Theorem** explains why Gaussian noise is everywhere. Linear Regression assumes errors (residuals) follow a Gaussian distribution.
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PDF:</strong> $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$</li>
      <li><strong>Empirical Rule:</strong> 68% within $1\sigma$, 95% within $2\sigma$, 99.7% within $3\sigma$.</li>
      <li><strong>Z-Score:</strong> $Z = \frac{X - \mu}{\sigma}$ (Standardization)</li>
    </ul>

    <h3>Example & Solution</h3>
    <p><strong>Problem:</strong> CPUs have speed $\mu=3.5, \sigma=0.2$ GHz. What is the probability of a CPU > 3.9 GHz?</p>
    <p><strong>Solution:</strong>
      $$Z = \frac{3.9 - 3.5}{0.2} = 2.0$$
      $P(Z > 2.0)$ is half of the remaining 4.6% outside the $2\sigma$ range = 2.3%.
    </p>

    <python-code>
import matplotlib.pyplot as plt
from scipy.stats import norm

mu, sigma = 0, 1
x = np.linspace(-4, 4, 100)
plt.plot(x, norm.pdf(x, mu, sigma))
plt.title("Standard Normal Distribution")
plt.show()
    </python-code>

    <div style="height: 2rem;"></div>

    <h2 id="beta" style="background: linear-gradient(to right, #0969da, #8250df); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">7. Beta Distribution</h2>
    <p>A continuous distribution on $[0,1]$ often used to model **probabilities themselves**. It is the conjugate prior for Bernoulli/Binomial outcomes.</p>
    
    <div class="def-box">
      <strong>ML Context:</strong> Used in **Bayesian A/B testing**. If $\alpha$ is prior successes and $\beta$ is prior failures, the distribution represents our belief about the success rate.
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PDF:</strong> $f(x; \alpha, \beta) = \frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha, \beta)}$</li>
      <li><strong>Beta Function:</strong> $B(\alpha, \beta) = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)}$</li>
      <li><strong>Mean:</strong> $\frac{\alpha}{\alpha + \beta}$</li>
    </ul>

    <h3>Example & Solution</h3>
    <p><strong>Problem:</strong> You observe 8 clicks ($\alpha$) and 2 non-clicks ($\beta$). What is the expected Click-Through Rate (CTR)?</p>
    <p><strong>Solution:</strong>
      $$E[X] = \frac{8}{8 + 2} = 0.8 \text{ (80\% CTR)}$$
    </p>

    <python-code>
from scipy.stats import beta

alpha, bt = 8, 2
mean = beta.mean(alpha, bt)
print(f"Expected Probability: {mean}")
    </python-code>

    <div style="height: 2rem;"></div>

    <h2 id="dirichlet" style="background: linear-gradient(to right, #cf222e, #9a6700); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">8. Dirichlet Distribution</h2>
    <p>The multivariate generalization of the Beta distribution. It is a "probability of probabilities" for $K$ outcomes, defined over a simplex.</p>
    
    <div class="def-box">
      <strong>ML Context:</strong> The backbone of **Latent Dirichlet Allocation (LDA)** for Topic Modeling. It is the conjugate prior for Categorical/Multinomial distributions.
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PDF:</strong> $f(\mathbf{x}; \mathbf{\alpha}) = \frac{1}{B(\mathbf{\alpha})} \prod_{i=1}^{K} x_i^{\alpha_i - 1}$</li>
      <li><strong>Mean ($E[x_i]$):</strong> $\frac{\alpha_i}{\sum \alpha_j}$</li>
    </ul>

    <python-code>
from scipy.stats import dirichlet

alpha = [10, 10, 10]
sample = dirichlet.rvs(alpha, size=1)
print(f"Simplex Sample (Prob Mixture): {sample}")
    </python-code>

    <h2 id="comparison">Final Summary & Comparison</h2>
    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr>
            <th>Distribution</th>
            <th>Type</th>
            <th>ML Use Case</th>
            <th>Key Feature</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Bernoulli</strong></td>
            <td>Discrete</td>
            <td>Binary Classification</td>
            <td>Sigmoid / Log-Loss basis</td>
          </tr>
          <tr>
            <td><strong>Binomial</strong></td>
            <td>Discrete</td>
            <td>Batch Accuracy</td>
            <td>Multiple Bernoulli trials</td>
          </tr>
          <tr>
            <td><strong>Categorical</strong></td>
            <td>Discrete</td>
            <td>Multiclass Classification</td>
            <td>Softmax / Cross-Entropy basis</td>
          </tr>
          <tr>
            <td><strong>Multinomial</strong></td>
            <td>Discrete</td>
            <td>NLP / Word Counts</td>
            <td>Multiple categories over N trials</td>
          </tr>
          <tr>
            <td><strong>Gaussian</strong></td>
            <td>Continuous</td>
            <td>Weight Init / Regression</td>
            <td>Central Limit Theorem basis</td>
          </tr>
          <tr>
            <td><strong>Beta</strong></td>
            <td>Continuous</td>
            <td>Bayesian Prob Modeling</td>
            <td>Conjugate Prior for Bernoulli</td>
          </tr>
          <tr>
            <td><strong>Dirichlet</strong></td>
            <td>Continuous</td>
            <td>Topic Modeling (LDA)</td>
            <td>Conjugate Prior for Multinomial</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> With these distributions as our tools, we can now master <strong><a href="#/mathematics/statistics/sampling-resampling">Sampling & Resampling</a></strong> to draw conclusions from representative data.
    </div>
  `
};
