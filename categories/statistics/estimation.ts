import { TopicSection } from '../../src/data/types';

export const parameterEstimationSection: TopicSection = {
  id: "estimation",
  title: "Estimation Theory",
  description: "In Machine Learning, Estimation is the process of using data to find the most likely parameters for a model, through MLE, MAP, and the Bias-Variance tradeoff.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📐 Statistics · Estimation</div>
      <h1>Estimation Theory in Machine Learning</h1>
      <p>Whether you are training a Logistic Regression model or a Deep Neural Network, you are essentially performing parameter estimation — using data to find the most likely parameters ($\theta$) for a model.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#mle">1. Maximum Likelihood Estimation (MLE)</a>
      <a href="#map">2. Maximum A Posteriori (MAP)</a>
      <a href="#bias-variance">3. Bias-Variance Tradeoff</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#conclusions">Key Takeaways</a>
    </div>

    <h2 id="mle">1. Maximum Likelihood Estimation (MLE)</h2>
    <p>MLE is a method of estimating the parameters of a probability distribution by maximizing a <strong>likelihood function</strong>, so that under the assumed statistical model, the observed data is most probable.</p>
    
    <h3>Mathematical Derivation</h3>
    <p>Given a set of i.i.d. observations $X = \{x_1, x_2, ..., x_n\}$, the likelihood function $L(\theta)$ is:</p>
    <div class="math-block">
      $$L(\theta) = P(X|\theta) = \prod_{i=1}^{n} P(x_i|\theta)$$
    </div>
    <p>To simplify the calculation, we take the <strong>Log-Likelihood</strong>:</p>
    <div class="math-block">
      $$\ell(\theta) = \log L(\theta) = \sum_{i=1}^{n} \log P(x_i|\theta)$$
    </div>
    <p>The MLE estimate $\hat{\theta}_{MLE}$ is found by setting the derivative to zero: $\frac{\partial}{\partial \theta} \ell(\theta) = 0$.</p>

    <div class="example-box">
      <h4>Mathematical Example: Gaussian Mean</h4>
      <p><strong>Problem:</strong> Estimate the mean ($\mu$) of a Normal Distribution given data points $\{x_1, ..., x_n\}$ assuming variance $\sigma^2$ is known.</p>
      
      <p><strong>Solution:</strong></p>
      <ol>
        <li><strong>Log-Likelihood:</strong> $\ell(\mu) = \sum \log \left( \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x_i-\mu)^2}{2\sigma^2}} \right)$</li>
        <li><strong>Simplify:</strong> $\ell(\mu) = n \log \left(\frac{1}{\sqrt{2\pi\sigma^2}}\right) - \sum \frac{(x_i-\mu)^2}{2\sigma^2}$</li>
        <li><strong>Differentiate w.r.t $\mu$:</strong> $\frac{d}{d\mu} \ell(\mu) = \sum \frac{(x_i-\mu)}{\sigma^2} = 0$</li>
        <li><strong>Result:</strong> $\hat{\mu}_{MLE} = \frac{1}{n} \sum_{i=1}^{n} x_i$ (The Sample Mean).</li>
      </ol>
    </div>

    <h2 id="map">2. Maximum A Posteriori (MAP)</h2>
    <p>MAP is a Bayesian approach. Unlike MLE, which only looks at the data, MAP incorporates a <strong>Prior Distribution</strong> $P(\theta)$, which represents our previous belief about the parameters.</p>
    
    <div class="def-box">
      <div class="def-title">Bayesian MAP Formula</div>
      <p style="margin:0">Using Bayes' Theorem:</p>
      <div class="math-block" style="margin-top:10px; margin-bottom:10px; background:transparent; border:none; padding:0;">
        $$P(\theta|X) = \frac{P(X|\theta)P(\theta)}{P(X)}$$
      </div>
      <p style="margin:0">$\hat{\theta}_{MAP} = \text{argmax}_\theta [ \log P(X|\theta) + \log P(\theta) ]$</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>ML Insight:</strong> In Machine Learning, MAP is the mathematical foundation for <strong>Regularization</strong> (e.g., L2 Regularization is equivalent to a Gaussian Prior).
      </div>
    </div>

    <h2 id="bias-variance">3. Bias-Variance Tradeoff</h2>
    <p>This explains the "Generalization Error" of a model.</p>
    <ul>
      <li><strong>Bias:</strong> Error from erroneous assumptions in the learning algorithm (leads to <strong>Underfitting</strong>).</li>
      <li><strong>Variance:</strong> Error from sensitivity to small fluctuations in the training set (leads to <strong>Overfitting</strong>).</li>
    </ul>
    
    <div class="math-block">
      $$\text{Total Error} = \text{Bias}^2 + \text{Variance} + \text{Irreducible Error}$$
    </div>

    <h2 id="implementation">Python Implementation</h2>
    <python-code>
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures

# Generate noisy data
np.random.seed(42)
X = np.sort(np.random.rand(20, 1), axis=0)
y = np.sin(2 * np.pi * X) + np.random.randn(20, 1) * 0.1

# 1. High Bias Model (Linear Regression) - Underfitting
model_simple = LinearRegression().fit(X, y)

# 2. High Variance Model (15th Degree Polynomial) - Overfitting
poly = PolynomialFeatures(degree=15)
X_poly = poly.fit_transform(X)
model_complex = LinearRegression().fit(X_poly, y)

print(f"Linear Model Score (Bias): {model_simple.score(X, y):.4f}")
print(f"Complex Model Score (Variance): {model_complex.score(X_poly, y):.4f}")
    </python-code>

    <div class="callout info">
      <div class="callout-icon">📊</div>
      <div class="callout-body">
        <strong>Complexity Analysis:</strong>
        <ul>
          <li><strong>MLE/MAP:</strong> $O(N)$ for i.i.d data points.</li>
          <li><strong>Linear Regression:</strong> $O(p^2 n + p^3)$ where $p$ is features and $n$ is samples.</li>
          <li><strong>Space Complexity:</strong> $O(N)$ for storing datasets.</li>
        </ul>
      </div>
    </div>

    <h2 id="conclusions">Key Takeaways</h2>
    <ol style="margin-left:20px">
      <li><strong>MLE</strong> chooses $\theta$ that maximizes the probability of the data.</li>
      <li><strong>MAP</strong> chooses $\theta$ that maximizes the posterior probability (Data + Prior).</li>
      <li><strong>Bias-Variance Tradeoff</strong> is the "sweet spot" in model complexity.</li>
    </ol>

    <div class="linking-rule">
      <strong>Next Step:</strong> After estimating parameters, apply them to model relationships in <strong><a href="#/mathematics/statistics/regression-analysis">Regression Analysis</a></strong>.
    </div>
  `
};
