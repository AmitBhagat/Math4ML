import { TopicSection } from '../../src/data/types';

export const mapSection: TopicSection = {
  id: "map",
  title: "Maximum a Posteriori (MAP)",
  description: "MAP is a method of estimating parameters that incorporates 'Prior' knowledge or beliefs into the estimation process.",
  color: "#D32F2F",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Bayesian</div>
      <h1>Maximum a Posteriori: Combining Data and Belief</h1>
      <p><strong>Maximum a Posteriori (MAP)</strong> is the "Smarter" sibling of MLE. While MLE only cares about the current data, MAP allows us to input <strong>Prior Beliefs</strong> (e.g., "Weights should be small"). This is the mathematical foundation for <strong>Regularization</strong> in Machine Learning.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example-coin">Example 1: Prior Belief about Coin Bias</a>
      <a href="#example-ridge">Example 2: Ridge & Lasso Regularization</a>
      <a href="#implementation">Implementation (Python/SciPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>MLE</strong>: Understanding Likelihood.</li>
        <li><strong>Bayes' Theorem</strong>: Prior, Likelihood, and Posterior.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>MLE asks: <em>"What parameters fit the data best?"</em> MAP asks: <em>"What parameters fit the data best <strong>AND</strong> make sense based on what I already know?"</em> If your dataset is tiny, MLE can be easily fooled by noise. MAP adds a "Brake" to the process, preventing the model from becoming too overconfident about extreme values.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of MAP as <strong>"Expert Advice."</strong> 
        MLE is like an apprentice who only looks at the first 3 trials. If they see 3 heads, they scream "The coin is 100% rigged!" 
        MAP is like the Expert who says: <em>"I hear you, but my 20 years of experience (the Prior) tells me most coins are 50/50. I'll bet it's actually 60/40."</em> 
        MAP balances the data with your past knowledge.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>From Bayes' Theorem: \(P(\theta | X) \propto P(X | \theta) \cdot P(\theta)\). We maximize the log of this product:</p>
    <div class="math-block">$$\hat{\theta}_{MAP} = \arg\max_{\theta} \left[ \log L(\theta) + \log P(\theta) \right]$$</div>
    <p>Notice how MAP is just <strong>MLE + a Prior Penalty</strong> (\(\log P(\theta)\)).</p>

    <h2 id="example-coin">Example 1: Prior Belief about Coin Bias</h2>
    <div class="example-box">
      <h4>Problem: Damping the Noise</h4>
      <p>Data: 2 Heads, 1 Tail. Bias from MLE is 66%. But your "Prior" is that coins are 50/50.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identify:</strong> We add "Virtual Trials" based on our belief.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Posterior Estimate:</strong> Add 2 virtual heads and 2 virtual tails (a Beta(2,2) prior).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Updated Data:</strong> (2+2) Heads, (1+2) Tails = 4H, 3T.</div></div>
      <div class="step-box"><span class="step-num">4</span><div><strong>Result:</strong> \(\hat{p} = 4/7 \approx 57\%\).</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> 57%. MAP pulled the wild 66% estimate back toward the 50% reality. It "smoothed" the data.
        </div>
      </div>
    </div>

    <h2 id="example-ridge">Example 2: Ridge & Lasso Regularization</h2>
    <div class="example-box">
      <h4>Problem: Preventing Weights from Exploding</h4>
      <p>In Linear Regression, if you assume your weights follow a Gaussian prior \(\mathcal{N}(0, \sigma)\), what happens to the objective function?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identify:</strong> \(\log L(\theta)\) is the Mean Squared Error.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Penalty:</strong> \(\log P(\theta)\) for a Gaussian is proportional to \(\theta^2\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Combine:</strong> Minimize \(\text{MSE} + \lambda \theta^2\).</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> This is exactly <strong>Ridge Regression (L2)</strong>! It's not just a trick to stop overfitting; it is the Bayesian decision to assume your weights are probably close to Zero.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/SciPy)</h2>
    <python-code>
import numpy as np
from scipy.optimize import minimize

data = np.random.normal(5, 1, 10) # 10 points

def neg_posterior(mu):
    # Likelihood (from data)
    likelihood = -np.sum(-0.5 * (data - mu)**2)
    # Prior belief: mu is close to zero (Gaussian prior)
    prior = 0.5 * (mu - 0)**2 
    return likelihood + prior

res = minimize(neg_posterior, x0=[0.0])
print(f"MLE Estimate: {data.mean():.4f}")
print(f"MAP Estimate: {res.x[0]:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>L2 Regularization (Weight Decay)</strong>: Using a Gaussian prior to keep weights small and controllable.</li>
      <li><strong>L1 Regularization (Lasso)</strong>: Using a Laplace prior to force most weights to be exactly zero (Sparse feature selection).</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Models can fail by being too rigid or too wild. How do we find the "Sweet Spot" between the two? Explore <strong><a href="#/mathematics/statistics/bias-variance">The Bias-Variance Tradeoff</a></strong>.
    </div>
  `
};
