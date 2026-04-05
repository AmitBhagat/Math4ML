import { TopicSection } from '../../src/data/types';

export const distributionsSection: TopicSection = {
  id: "probability-distributions",
  title: "Distributions: The Generative Architecture of Data",
  description: "A theoretical framework for understanding the 'shape' of data—using PMFs, PDFs, and CDFs to model the probabilistic behavior of random variables.",
  formula: "F_X(x) = P(X \\leq x) = \\int_{-\\infty}^x f(t) \\, dt",
  details: [
    "Random Variables: Mapping Outcomes to the Real Line",
    "PMF vs. PDF: Discrete Mass vs. Continuous Density",
    "Cumulative Distribution Function (CDF): Probability Accumulation",
    "Expectation and Variance: The Moments of a Distribution",
    "Common Parametric Families: Gaussian, Bernoulli, Poisson, and Exponential",
    "The Likelihood Function: Connecting Data to Parameters"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Distribution Roadmap</div>
      <a href="#lenses">I. Three Lenses of Probability</a>
      <a href="#families">II. Formal Distribution Families</a>
      <a href="#lab">Numerical Scipy Implementation</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="lenses" class="premium-h2">I. The Three Lenses of Probability</h2>
    <p>A <strong>Random Variable</strong> $X$ is a function that assigns a numerical value to each outcome in a sample space. Its behavior is captured through three defining functions that map its likelihood profile.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Function</th><th>Type</th><th>Mathematical Notation</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>PMF</strong></td><td>Discrete</td><td>$P(X=x)$ sum to 1.</td></tr>
          <tr><td><strong>PDF</strong></td><td>Continuous</td><td>$\int f(x)dx=1$ (Area is probability).</td></tr>
          <tr><td><strong>CDF</strong></td><td>Combined</td><td>$F(x) = P(X \leq x)$ (Accumulated probability).</td></tr>
        </tbody>
      </table>
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">🌌</div>
      <div class="premium-callout-body">
        <strong>Generative Modeling:</strong> In ML, we assume that our data is "sampled" from one of these distributions. Training a model typically means finding the parameters (like $\mu$ and $\sigma$) that make the observed data most likely.
      </div>
    </div>

    <!-- SECTION 2 -->
    <h2 id="families" class="premium-h2">II. Formal Distribution Families</h2>
    <p>Parametric distributions provide a structured way to model real-world phenomena, from simple coin flips to the central limit theorem.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">The Gaussian (Normal) Distribution</div>
      <p style="margin:0">Foundational for almost all parametric statistics. Defined entirely by its mean ($\mu$) and variance ($\sigma^2$).</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
      </div>
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">The Poisson Distribution</div>
      <p style="margin:0">Models the number of independent events occurring within a fixed interval (time/space) given an average rate $\lambda$.</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}
      </div>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Numerical Scipy Implementation</h2>
    <python-code>
import numpy as np
from scipy.stats import norm, binom, poisson

# 1. Standard Normal Analysis (Mean=0, Std=1)
# Calculate the peak density at z=0
z_peak = norm.pdf(0, 0, 1)

# 2. Discrete Probability (Binomial)
# 10 Flips, 0.5 fair chance. Prob of exactly 5 heads.
heads_5 = binom.pmf(5, 10, 0.5)

# 3. Rate-based Probability (Poisson)
# Average 3 emails/hour. Prob of getting 2 emails.
emails_2 = poisson.pmf(2, 3)

print(f"Normal Peak (z=0): {z_peak:.4f}")
print(f"Binomial P(H=5): {heads_5:.4f}")
print(f"Poisson P(E=2): {emails_2:.4f}")
    </python-code>
  `
};
