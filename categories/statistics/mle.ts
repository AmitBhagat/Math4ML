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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Likelihood vs Probability</strong>: Understanding the difference in perspective.</li>
        <li><strong>Logarithms</strong>: Used to turn products into sums.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Probability allows us to predict data if we know the parameters—the "Rules" of the world. <strong>Maximum Likelihood Estimation (MLE)</strong> works in reverse: we have the data, and we want to find the parameters. MLE is the method of picking the setting that makes the observed data as "unsurprising" as possible. If the data we see is very likely under setting A but nearly impossible under setting B, MLE tells us to bet on A. In Machine Learning, this is the fundamental way we "train": we hunt for the weights that make our training labels the most probable outcome of our model's logic. It is the tactical decision to trust the data completely, finding the "Ideal Knob Setting" that explains exactly what we have seen.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Likelihood Maxima</div>
      <p>Given an observed dataset $\mathbf{X} = \{x_1, \dots, x_n\}$ assumed to be i.i.d. samples from a distribution $f(x|\theta)$, the **Likelihood Function** $L(\theta)$ represents the probability density of the entire data as a function of the parameter $\theta$:</p>
      <div class="math-block">
        $$L(\theta) = \prod_{i=1}^n f(x_i | \theta)$$
      </div>
      <p>The **Maximum Likelihood Estimate** is the parameter value that produces the highest likelihood for the observed evidence:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Log-Transformation</strong>: Maximizing $L(\theta)$ is equivalent to maximizing the <strong>Log-Likelihood</strong> $\ell(\theta) = \sum \log f(x_i | \theta)$, which simplifies products into sums.</li>
        <li><strong>Numerical Optimization</strong>: In ML, we typically minimize the <strong>Negative Log-Likelihood (NLL)</strong>. This aligns statistical estimation with standard optimization frameworks.</li>
        <li><strong>Sufficient Statistics</strong>: MLE often depends only on a few aggregate metrics of the data (like the sample mean or variance).</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Almost all supervised learning losses (e.g., MSE, Cross-Entropy) are derived by taking the MLE of specific noise distributions.</p>
    </div>
    
    <div class="callout tip">

    <h2 id="example-coin" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Estimating Coin Bias</h2>
    
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
    

    <h2 id="example-gauss" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Mean of Gaussian Data</h2>
    
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
    

    <h2 id="implementation">Implementation</h2>
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

