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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>MLE</strong> is the "Data-Only" perspective. It asks: "If I assume a specific model, which parameters make my actual data look the least surprising?" It's the engine behind <strong>Linear Regression</strong> and <strong>Neural Network</strong> training before you add any penalties.
      </div>
    </div>
    
    <h2 id="mle-derivation">1.1 Mathematical Derivation: Gaussian Mean</h2>
    <div class="example-box">
      <h4>Problem: Finding the "Most Likely" Mean</h4>
      <p>Estimate the mean (\(\mu\)) of a Normal Distribution given data \(X = \{x_1, ..., x_n\}\). Assume variance \(\sigma^2\) is known.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Log-Likelihood:</strong> Take the log of the Gaussian PDF for all points:</div></div>
      <div class="math-block">$$\ell(\mu) = \sum \log \left( \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x_i-\mu)^2}{2\sigma^2}} \right)$$</div>
      
      <div class="step-box"><span class="step-num">2</span><div><strong>Simplify:</strong> Drop constants and focus on the exponent.</div></div>
      <div class="math-block">$$\ell(\mu) = C - \sum \frac{(x_i-\mu)^2}{2\sigma^2}$$</div>
      
      <div class="step-box"><span class="step-num">3</span><div><strong>Optimize:</strong> Set \(\frac{d}{d\mu} \ell(\mu) = 0\).</div></div>
      <div class="math-block">$$\sum \frac{(x_i-\mu)}{\sigma^2} = 0 \implies \sum x_i = n\mu$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> \(\hat{\mu}_{MLE} = \frac{1}{n} \sum x_i\). The sample mean is the Maximum Likelihood Estimator for a Gaussian population.</div></div>
    </div>

    <h2 id="bias-example">1.2 Illustrative Example: Bessel's Correction</h2>
    <div class="example-box">
      <h4>Problem: Why divide by \(n-1\)?</h4>
      <p>The MLE for variance is \(\hat{\sigma}^2 = \frac{1}{n} \sum (x_i - \mu)^2\). However, we almost always use \(s^2 = \frac{1}{n-1} \sum (x_i - \bar{x})^2\). Why?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>The Bias:</strong> When we use the sample mean \(\bar{x}\) instead of the true population mean \(\mu\), we underestimate the total spread.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Correction:</strong> Dividing by \(n-1\) (degrees of freedom) makes the estimator <strong>Unbiased</strong>.</div></div>

      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Intuition:</strong> For very large \(n\), the difference between \(1/n\) and \(1/(n-1)\) vanishes. This is why "Big Data" often ignores Bessel's correction, but it's critical for small-sample statistics.</div></div>
    </div>

    <h2 id="map">2. Maximum A Posteriori (MAP)</h2>
    <p>MAP is a Bayesian approach. Unlike MLE, which only looks at the data, MAP incorporates a <strong>Prior Distribution</strong> $P(\theta)$, which represents our previous belief about the parameters.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>MAP</strong> is the <strong>"Common Sense"</strong> filter. It prevents your model from over-reacting to a few weird data points. In ML, this is <strong>Regularization</strong>. Using a <em>Gaussian Prior</em> is mathematically identical to <strong>L2 Regularization (Weight Decay)</strong>.
      </div>
    </div>
    
    <div class="premium-def-box">
      <div class="premium-def-title">Bayesian MAP Formula</div>
      <div class="math-block">$$P(\theta|X) = \frac{P(X|\theta)P(\theta)}{P(X)}$$</div>
      <p style="margin-top:10px">\(\hat{\theta}_{MAP} = \text{argmax}_\theta [ \log P(X|\theta) + \log P(\theta) ]\)</p>
    </div>

    <h2 id="ctr-example">2.1 Illustrative Example: Confidence Intervals for CTR</h2>
    <div class="example-box">
      <h4>Problem: Evaluating Ad Performance</h4>
      <p>Your ad has 1000 impressions and 20 clicks. What is the 95% Confidence Interval for the Click-Through Rate (CTR)?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Point Estimate:</strong> \(\hat{p} = 20 / 1000 = 0.02\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Standard Error:</strong> \(SE = \sqrt{\frac{p(1-p)}{n}} = \sqrt{\frac{0.02 \times 0.98}{1000}} \approx 0.0044\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Interval:</strong> \(0.02 \pm (1.96 \times 0.0044) = [0.011, 0.029]\).</div></div>

      <div class="callout focus"><div class="callout-icon">🎯</div><div class="callout-body"><strong>Interpretation:</strong> We are 95% confident that the true population CTR is between 1.1% and 2.9%. In A/B testing, these clusters help determine if a new design is statistically superior.</div></div>
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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> The <strong>Tradeoff</strong> is like tuning a radio. <strong>High Bias</strong> is a "lazy" model that ignores the data patterns (Underfitting). <strong>High Variance</strong> is a "hyper-active" model that hallucinates patterns in random noise (Overfitting). Your job is to find the <strong>Sweet Spot</strong>.
      </div>
    </div>
    
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
