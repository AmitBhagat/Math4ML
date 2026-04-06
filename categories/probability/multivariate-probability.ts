import { TopicSection } from '../../src/data/types';

export const multivariateProbabilitySection: TopicSection = {
  id: "multivariate-probability",
  title: "Multivariate Probability",
  description: "Multivariate Probability provides the tools to model multiple related variables simultaneously and understand how they interact, moving beyond single-feature analysis.",
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
      <a href="#rules">Mathematical Derivation: Sum &amp; Product Rules</a>
      <a href="#example">Illustrative Example: The Weather Table</a>
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

    <h2 id="rules">Mathematical Derivation: Sum &amp; Product Rules</h2>
    <p>These two rules are the "Laws of Physics" for Machine Learning inference.</p>

    <h3>1. The Sum Rule (Marginalization)</h3>
    <div class="math-block">$$P(X) = \sum_{Y} P(X, Y)$$</div>
    <p><em>This allows us to ignore "nuisance variables" we don't care about.</em></p>

    <h3>2. The Product Rule</h3>
    <div class="math-block">$$P(X, Y) = P(Y|X)P(X)$$</div>
    <p><em>This allows us to break a complex joint distribution into simpler conditional components.</em></p>

    <p>Combining these two gives us <strong>Bayes' Theorem</strong> in a multivariate context:</p>
    <div class="math-block">$$P(Y|X) = \frac{P(X|Y)P(Y)}{\sum_{Y} P(X|Y)P(Y)}$$</div>

    <h2 id="example">Illustrative Example: The Weather Table</h2>
    <div class="example-box">
      <h4>Joint Distribution of Weather and Cavity</h4>
      <p>Imagine a joint distribution of Weather \((X)\) and Cavity \((Y)\) at a dentist's office:</p>
      <div class="premium-table-wrap">
        <table class="premium-table">
          <thead><tr><th></th><th>Cavity (Y=1)</th><th>No Cavity (Y=0)</th><th>Marginal P(X)</th></tr></thead>
          <tbody>
            <tr><td><strong>Sunny (X=1)</strong></td><td>0.06</td><td>0.54</td><td><strong>0.60</strong></td></tr>
            <tr><td><strong>Rainy (X=0)</strong></td><td>0.04</td><td>0.36</td><td><strong>0.40</strong></td></tr>
            <tr><td><strong>Marginal P(Y)</strong></td><td><strong>0.10</strong></td><td><strong>0.90</strong></td><td><strong>1.00</strong></td></tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li><strong>Joint Probability:</strong> \(P(\text{Sunny, Cavity}) = 0.06\).</li>
        <li><strong>Marginal Probability:</strong> What is the probability it is Sunny? \(0.06 + 0.54 = 0.60\).</li>
        <li><strong>Conditional Probability:</strong> If it is Sunny, what is the chance of a Cavity?</li>
      </ul>
      <div class="math-block">$$P(\text{Cavity}|\text{Sunny}) = \frac{P(\text{Sunny, Cavity})}{P(\text{Sunny})} = \frac{0.06}{0.60} = 0.10$$</div>
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
      <strong>The "Linking" Rule:</strong> Understanding multivariate distributions is the final step before entering <strong>Estimation Theory</strong>. Once you can model multiple variables, you can use <strong>Maximum Likelihood Estimation (MLE)</strong> to find the parameters that best fit your observed multi-dimensional data.
    </div>
  `
};
