import { TopicSection } from '../../src/data/types';

export const mleSection: TopicSection = {
  id: "mle",
  title: "Maximum Likelihood Estimation (MLE)",
  description: "MLE is a method of estimating the parameters of a probability distribution by maximizing a likelihood function.",
  color: "#D32F2F",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Estimation</div>
      <h1>Maximum Likelihood Estimation: Finding the Best Parameters</h1>
      <p><strong>Maximum Likelihood Estimation (MLE)</strong> is the fundamental way we "train" models. It asks a simple question: "Given this data, what are the most likely parameters that could have produced it?" In ML, this is how we find the optimal weights for our models.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example-coin">Example 1: Estimating Coin Bias</a>
      <a href="#example-gauss">Example 2: Mean of Gaussian Data</a>
      <a href="#implementation">Implementation (Python/SciPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Likelihood vs Probability</strong>: Understanding the difference in perspective.</li>
        <li><strong>Logarithms</strong>: Used to turn products into sums.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>Probability allows us to predict data if we know the parameters. <strong>Likelihood</strong> works in reverse—we have the data, and we want to find the <strong>Parameters</strong>. <strong>MLE</strong> is the method of picking the parameter \(\theta\) that makes the observed data as "unsurprising" as possible.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of MLE as <strong>"Reverse Engineering."</strong> 
        Imagine you find a machine that occasionally spits out Red or Blue balls. You see it spit out [Red, Red, Blue, Red]. 
        MLE asks: <em>"What is the most likely setting for the 'Red knob' on this machine?"</em> 
        If the knob is at 75%, this sequence is very likely. If the knob is at 10%, this sequence is a miracle. We pick 75%.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>For i.i.d data \(x_1, \dots, x_n\), the likelihood is the product of individual probabilities:</p>
    <div class="math-block">$$L(\theta) = \prod_{i=1}^n P(x_i | \theta)$$</div>
    <p>We usually maximize the <strong>Log-Likelihood</strong> (\(\ell(\theta)\)) because it’s mathematically easier (it turns products into sums):</p>
    <div class="math-block">$$\ell(\theta) = \sum_{i=1}^n \log P(x_i | \theta)$$</div>

    <h2 id="example-coin">Example 1: Estimating Coin Bias</h2>
    <div class="example-box">
      <h4>Problem: Finding the "True" Chance of Heads</h4>
      <p>You flip a coin 10 times and get 7 Heads. Estimate the bias \(p\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Likelihood Function:</strong> \(L(p) = p^7 (1-p)^3\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Log-Likelihood:</strong> \(\ell(p) = 7 \log(p) + 3 \log(1-p)\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Optimize:</strong> Set derivative to zero: \(\frac{7}{p} - \frac{3}{1-p} = 0\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Solve:</strong> \(7(1-p) = 3p \to 7 - 7p = 3p \to 10p = 7 \to p = 0.7\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> \(p = 0.7\). Our intuition matches the math: the most likely bias is exactly the observed ratio of successes.
        </div>
      </div>
    </div>

    <h2 id="example-gauss">Example 2: Mean of Gaussian Data</h2>
    <div class="example-box">
      <h4>Problem: Estimating the "Center" of Noise</h4>
      <p>Data: [10, 12, 11]. Assume data is Normal with unknown \(\mu\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> The Log-Likelihood of Gaussian data is proportional to the <strong>Negative Squared Error</strong> (\(-(x - \mu)^2\)).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Conclusion:</strong> To maximize the likelihood, we must <strong>minimize</strong> the squared error.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> This is why we use <strong>MSE (Mean Squared Error)</strong> in Regression! It's not just a random choice; it is mathematically derived from the MLE of a Gaussian distribution. Max Likelihood = Min Error.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/SciPy)</h2>
    <python-code>
import numpy as np
from scipy.optimize import minimize

# Some data generated from a distribution (e.g. Normal mean=5)
data = np.random.normal(5.2, 1.0, 100)

def neg_log_likelihood(mu):
    # Sum of log of Normal PDF
    # (Since minimize works on 'negative', we negate the log-likelihood)
    return -np.sum(-0.5 * (data - mu)**2)

# Start guess and optimize
res = minimize(neg_log_likelihood, x0=[0.0])
print(f"Estimated Mean (MLE): {res.x[0]:.4f}")
print(f"Sample Mean: {data.mean():.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Logistic Regression</strong>: MLE is used to find the coefficients that maximize the probability of the observed classes.</li>
      <li><strong>Neural Networks</strong>: Training a network is essentially performing MLE on the weights to minimize Cross-Entropy.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we already have a <em>hunch</em> about the parameters before seeing data? Explore <strong><a href="#/mathematics/statistics/map">Maximum a Posteriori (MAP)</a></strong>.
    </div>
  `
};
