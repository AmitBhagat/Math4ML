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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>MLE</strong>: Understanding Likelihood.</li>
        <li><strong>Bayes' Theorem</strong>: Prior, Likelihood, and Posterior.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>MLE asks: <em>"What parameters fit the current data best?"</em> <strong>Maximum a Posteriori (MAP)</strong> asks: <em>"What parameters fit the data best AND make sense based on everything else I already know?"</em> If your dataset is tiny—say, three coin flips—MLE can be easily fooled by a short streak of noise. MAP provides the mathematical "Brake" to this process, allowing us to incorporate <strong>Prior Knowledge</strong> to keep our estimates grounded. In Machine Learning, this is the foundation for <strong>Regularization</strong>: we assume from the start that our model's weights shouldn't be massive or wild, which stops the model from overfitting to every tiny jitter in the training set. It is the tactical decision to balance the cold facts against the wisdom of experience.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Posterior Maxima</div>
      <p>The **Maximum a Posteriori (MAP)** estimate is the mode of the posterior distribution, combining the evidence from the data with a prior distribution that encodes our existing beliefs or constraints on the parameter space:</p>
      <div class="math-block">
        $$\hat{\theta}_{MAP} = \arg\max_{\theta} P(\theta | \mathbf{X}) = \arg\max_{\theta} \frac{P(\mathbf{X} | \theta) P(\theta)}{P(\mathbf{X})}$$
      </div>
      <p>Since the denominator $P(\mathbf{X})$ is independent of $\theta$, we optimize the product of Likelihood and Prior:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Penalized Log-Likelihood</strong>: In practice, we maximize $\ell_{MAP}(\theta) = \sum \log f(x_i | \theta) + \log \pi(\theta)$. The prior term acts as a "penalty" against improbable parameters.</li>
        <li><strong>Regularization Link</strong>: Setting a Gaussian prior $\pi(\theta) \sim \mathcal{N}(0, \sigma^2)$ is mathematically equivalent to adding an $L_2$ norm penalty ($Ridge$) to the loss function.</li>
        <li><strong>Data Dominance</strong>: As the sample size $n \to \infty$, the likelihood term dominates the prior, and the MAP estimate converges to the MLE estimate.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">MAP is the Bayesian bridge that prevents models from "hallucinating" patterns in small, noisy datasets by anchoring them to reasonable priors.</p>
    </div>
    
    <div class="callout tip">

    <h2 id="example-coin" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Prior Belief about Coin Bias</h2>
    
      <h4>Problem: Damping the Noise</h4>
      <p>Data: 2 Heads, 1 Tail. Bias from MLE is 66%. But your "Prior" is that coins are 50/50.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> We add "Virtual Trials" based on our belief.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Posterior Estimate:</strong> Add 2 virtual heads and 2 virtual tails (a Beta(2,2) prior).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Updated Data:</strong> (2+2) Heads, (1+2) Tails = 4H, 3T.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Result:</strong> \(\hat{p} = 4/7 \approx 57\%\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> 57%. MAP pulled the wild 66% estimate back toward the 50% reality. It "smoothed" the data.
        </div>
      </div>
    

    <h2 id="example-ridge" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Ridge & Lasso Regularization</h2>
    
      <h4>Problem: Preventing Weights from Exploding</h4>
      <p>In Linear Regression, if you assume your weights follow a Gaussian prior \(\mathcal{N}(0, \sigma)\), what happens to the objective function?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> \(\log L(\theta)\) is the Mean Squared Error.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Penalty:</strong> \(\log P(\theta)\) for a Gaussian is proportional to \(\theta^2\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Combine:</strong> Minimize \(\text{MSE} + \lambda \theta^2\).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> This is exactly <strong>Ridge Regression (L2)</strong>! It's not just a trick to stop overfitting; it is the Bayesian decision to assume your weights are probably close to Zero.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
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

