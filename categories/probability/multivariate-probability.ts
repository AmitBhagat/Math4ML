import { TopicSection } from '../../src/data/types';

export const multivariateProbabilitySection: TopicSection = {
  id: "multivariate-probability",
  title: "Multivariate Probability",
  description: "Multivariate Probability provides the tools to model multiple related variables simultaneously and understand how they interact, moving beyond single-feature analysis.",
  color: "#FFA000",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🌐 Probability · Multivariate</div>
      <h1>Multivariate Probability</h1>
      <p>In the previous sections, we looked at a single random variable (e.g., the height of a person). In Machine Learning, however, we deal with <strong>feature vectors</strong> containing multiple related variables (e.g., height, weight, and age). <strong>Multivariate Probability</strong> provides the tools to model these variables simultaneously and understand how they interact.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#perspectives">Core Theory: The Three Perspectives</a>
      <a href="#perspectives" class="sub">↳ 1. Joint Distribution P(X, Y)</a>
      <a href="#perspectives" class="sub">↳ 2. Marginal Distribution P(X)</a>
      <a href="#perspectives" class="sub">↳ 3. Conditional Distribution P(X|Y)</a>
      <a href="#marginal-example">4. Illustrative Example: Marginalization</a>
      <a href="#covariance-example">5. Illustrative Example: Covariance</a>
      <a href="#implementation">Implementation in Python (Multivariate Gaussian)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Basic Probability Axioms:</strong> Rules for single variables.</li>
        <li><strong>Random Variables:</strong> Difference between discrete and continuous.</li>
        <li><strong>Expectation &amp; Variance:</strong> Specifically the concept of <strong>Covariance</strong>.</li>
      </ul>
    </div>

    <h2 id="perspectives">Core Theory: The Three Perspectives</h2>
    <p>When dealing with two variables \(X\) and \(Y\), we look at them in three specific ways:</p>

    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin: 20px 0;">
      <div class="premium-def-box">
        <div class="premium-def-title">Perspective 1</div>
        <h4>Joint Distribution</h4>
        <p>\(P(X, Y)\) or \(f(x, y)\)</p>
        <p style="margin-top:8px">Probability that \(X\) and \(Y\) occur <em>together</em>.</p>
        <p><strong>Discrete:</strong> \(P(X=x, Y=y)\)</p>
        <p><strong>Continuous:</strong> surface in 3D space.</p>
        <p><strong>Constraint:</strong> \(\sum\sum P(x,y) = 1\)</p>
      </div>
      <div class="premium-def-box">
        <div class="premium-def-title">Perspective 2</div>
        <h4>Marginal Distribution</h4>
        <p>\(P(X)\) or \(P(Y)\)</p>
        <p style="margin-top:8px">"Summing out" one variable. Like looking at a 3D object from the side.</p>
        <p><strong>Discrete:</strong> \(P(X=x) = \sum_{y} P(x, y)\)</p>
        <p><strong>Continuous:</strong> \(f_X(x) = \int f(x, y) dy\)</p>
      </div>
      <div class="premium-def-box">
        <div class="premium-def-title">Perspective 3</div>
        <h4>Conditional Distribution</h4>
        <p>\(P(X|Y)\)</p>
        <p style="margin-top:8px">Distribution of \(X\) given \(Y\) has a specific value. A "slice" of the joint, re-normalized.</p>
        <p><strong>Formula:</strong> \(P(X|Y) = \dfrac{P(X, Y)}{P(Y)}\)</p>
      </div>
    </div>

    <h2 id="rules">3. Core Rules of Probability</h2>
    <div class="example-box">
      <h4>The "Laws of Physics" for ML Inference</h4>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>The Sum Rule (Marginalization):</strong> To find \(P(X)\), we "sum out" all \(Y\)'s.</div></div>
      <div class="math-block">$$P(X) = \sum_{Y} P(X, Y)$$</div>
      
      <div class="step-box"><span class="step-num">2</span><div><strong>The Product Rule:</strong> Relates Joint and Conditional.</div></div>
      <div class="math-block">$$P(X, Y) = P(Y|X)P(X)$$</div>
      
      <div class="step-box"><span class="step-num">3</span><div><strong>Combined Form (Bayes):</strong></div></div>
      <div class="math-block">$$P(Y|X) = \frac{P(X|Y)P(Y)}{\sum_{Y} P(X|Y)P(Y)}$$</div>

      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Why?</strong> The denominator is the <strong>Evidence</strong>. It ensures the posterior probabilities sum to 1. In complex ML models, this sum is often impossible to compute directly, leading to <strong>Variational Inference</strong>.</div></div>
    </div>

    <h2 id="marginal-example">4. Illustrative Example: The Weather Dataset</h2>
    <div class="example-box">
      <h4>Problem: Extracting Marginals from Joint Data</h4>
      <p>Consider a simplified joint distribution of Weather (\(X\)) and mood (\(Y\)):</p>
      
      <div class="premium-table-wrap">
        <table class="premium-table">
          <thead><tr><th></th><th>Happy (Y=1)</th><th>Neutral (Y=0)</th></tr></thead>
          <tbody>
            <tr><td><strong>Sunny (X=1)</strong></td><td>0.60</td><td>0.10</td></tr>
            <tr><td><strong>Rainy (X=0)</strong></td><td>0.05</td><td>0.25</td></tr>
          </tbody>
        </table>
      </div>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Find Marginal P(Sunny):</strong> Sum across the first row: \(0.60 + 0.10 = 0.70\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Find Marginal P(Happy):</strong> Sum down the first column: \(0.60 + 0.05 = 0.65\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Conditional P(Happy | Rainy):</strong> Focus only on \(X=0\) row and normalize.</div></div>

      <div class="math-block">$$P(Y=1|X=0) = \frac{0.05}{0.05 + 0.30} = \frac{0.05}{0.35} \approx 0.143$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Interpretation:</strong> While the overall probability of happiness is 65%, seeing "Rainy" weather drops it drastically to ~14%.</div></div>
    </div>

    <h2 id="covariance-example">5. Illustrative Example: Covariance</h2>
    <div class="example-box">
      <h4>Problem: Analyzing Multi-Sensor Data</h4>
      <p>Two sensors \(X\) and \(Y\) measure temperature at different locations. We observe 3 pairs: \((10, 12), (15, 17), (20, 22)\). The means are \(\mu_x = 15, \mu_y = 17\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Covariance:</strong> \(Cov(X, Y) = \frac{1}{n} \sum (x_i - \mu_x)(y_i - \mu_y)\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Calculate:</strong> \((-5 \times -5) + (0 \times 0) + (5 \times 5) = 25 + 0 + 25 = 50\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Result:</strong> \(50 / 3 \approx 16.67\).</div></div>

      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Insight:</strong> The positive covariance tells us the sensors move together (syncronized). In ML, this redundancy is the core principle behind PCA dimension reduction.</div></div>
    </div>

    <h2 id="implementation">Implementation in Python (Multivariate Gaussian)</h2>
    <python-code>
import numpy as np
from scipy.stats import multivariate_normal

# Parameters for two variables (e.g., Height and Weight)
mean = [170, 70]  # Mean height 170cm, mean weight 70kg
# Covariance matrix: Positive correlation between height and weight
cov = [[10, 8],
       [8, 10]]

# Define the Joint Distribution
rv = multivariate_normal(mean, cov)

# 1. Joint PDF at a specific point (175cm, 75kg)
joint_pdf = rv.pdf([175, 75])

# 2. To get Marginal P(Height), we just look at the first mean and first variance
# X ~ N(170, 10)

print(f"Joint Density at [175, 75]: {joint_pdf:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Generative Models:</strong> In models like <strong>GMMs (Gaussian Mixture Models)</strong>, we model the joint distribution of data and cluster assignments.</li>
      <li><strong>Kalman Filters:</strong> Used in robotics/tracking; they update the joint distribution of a robot's position and velocity over time.</li>
      <li><strong>Information Theory:</strong> Concepts like <strong>Mutual Information</strong> are derived from the difference between the joint distribution \(P(X,Y)\) and the product of the marginals \(P(X)P(Y)\).</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Joint:</strong> The whole "world" (\(X\) AND \(Y\)).</li>
      <li><strong>Marginal:</strong> Collapsing the world down to one dimension (\(X\) ONLY).</li>
      <li><strong>Conditional:</strong> Focusing on a specific slice of the world (\(X\) GIVEN \(Y\)).</li>
      <li><strong>Independence:</strong> If \(P(X,Y) = P(X)P(Y)\), then knowing \(Y\) tells you nothing about \(X\).</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Once we can model multiple variables, we need to understand the theoretical safety net of <strong><a href="#/mathematics/probability/laws">Probability Laws (LLN & CLT)</a></strong>.
    </div>
  `
};
