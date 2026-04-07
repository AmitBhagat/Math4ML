import { TopicSection } from '../../src/data/types';

export const expectationVarianceSection: TopicSection = {
  id: "expectation-variance",
  title: "Expectation & Variance",
  description: "While Probability Distributions give us the 'shape' of data, Expectation and Variance provide the summary statistics that describe that shape.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📐 Probability · Expectation &amp; Variance</div>
      <h1>Expectation &amp; Variance</h1>
      <p>While Probability Distributions give us the "shape" of data, <strong>Expectation and Variance</strong> provide the summary statistics that describe that shape. In Machine Learning, we use these to understand the "center" of our predictions and how much they "spread" or vary. These concepts are foundational for understanding <strong>Loss Functions</strong>, <strong>Regularization</strong>, and <strong>PCA</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#core">Core Theory: Summarizing Distributions</a>
      <a href="#core" class="sub">↳ 1. Expectation E[X]</a>
      <a href="#core" class="sub">↳ 2. Variance Var(X)</a>
      <a href="#core" class="sub">↳ 3. Covariance Cov(X, Y)</a>
      <a href="#core" class="sub">↳ 4. Correlation ρ</a>
      <a href="#derivation">Mathematical Derivation: Variance Shortcut</a>
      <a href="#example">4. Illustrative Example: Portfolio Risk</a>
      <a href="#scaling-example">5. Illustrative Example: Scaling & Shifts</a>
      <a href="#implementation">Implementation in Python (NumPy)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Random Variables:</strong> Understanding Discrete (PMF) and Continuous (PDF) variables.</li>
        <li><strong>Basic Calculus:</strong> Summation \((\sum)\) and Integration \((\int)\).</li>
      </ul>
    </div>

    <h2 id="core">Core Theory: Summarizing Distributions</h2>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 20px 0;">
      <div class="premium-def-box">
        <div class="premium-def-title">Concept 1</div>
        <h4>Expectation E[X] or μ</h4>
        <p>The weighted average of all possible values. The "center of mass" of the distribution.</p>
        <p style="margin-top:8px"><strong>Discrete:</strong> \(E[X] = \sum x \cdot P(X=x)\)</p>
        <p><strong>Continuous:</strong> \(E[X] = \int_{-\infty}^{\infty} x \cdot f(x) dx\)</p>
      </div>
      <div class="premium-def-box">
        <div class="premium-def-title">Concept 2</div>
        <h4>Variance Var(X) or σ²</h4>
        <p>Measures the spread of the RV around its mean. High variance = far from mean.</p>
        <p style="margin-top:8px"><strong>Formula:</strong> \(Var(X) = E[(X - E[X])^2]\)</p>
        <p><strong>Shortcut:</strong> \(Var(X) = E[X^2] - (E[X])^2\)</p>
      </div>
      <div class="premium-def-box">
        <div class="premium-def-title">Concept 3</div>
        <h4>Covariance Cov(X, Y)</h4>
        <p>Indicates the <em>direction</em> of the linear relationship between two RVs.</p>
        <ul style="margin-top:8px;font-size:13.5px">
          <li><strong>Positive:</strong> Both increase together.</li>
          <li><strong>Negative:</strong> One up, other down.</li>
          <li><strong>Zero:</strong> No linear relationship.</li>
        </ul>
      </div>
      <div class="premium-def-box">
        <div class="premium-def-title">Concept 4</div>
        <h4>Correlation ρ<sub>X,Y</sub></h4>
        <p>The <em>normalized</em> version of covariance. Always between <strong>−1 and 1</strong>, making it easier to interpret.</p>
        <p style="margin-top:8px"><strong>Formula:</strong> \(\rho_{X,Y} = \dfrac{Cov(X, Y)}{\sigma_X \sigma_Y}\)</p>
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation: Variance Shortcut</h2>
    <p>It is often easier to calculate variance using the shortcut formula. Here is the step-by-step derivation:</p>

    <div class="step-box"><span class="step-num">1</span><div><strong>Definition:</strong> \(Var(X) = E[(X - \mu)^2]\) where \(\mu = E[X]\).</div></div>
    <div class="step-box"><span class="step-num">2</span><div><strong>Expand Square:</strong> \(E[X^2 - 2X\mu + \mu^2]\).</div></div>
    <div class="step-box"><span class="step-num">3</span><div><strong>Linearity:</strong> \(E[X^2] - E[2X\mu] + E[\mu^2]\).</div></div>
    <div class="step-box"><span class="step-num">4</span><div><strong>Constants:</strong> \(E[X^2] - 2\mu E[X] + \mu^2 = E[X^2] - 2\mu^2 + \mu^2\).</div></div>
    <div class="step-box"><span class="step-num">5</span><div><strong>Simplify:</strong></div></div>
    <div class="math-block">$$Var(X) = E[X^2] - (E[X])^2$$</div>

    <h2 id="example">4. Illustrative Example: Portfolio Risk</h2>
    <div class="example-box">
      <h4>Problem: Two-Stock Variance</h4>
      <p>Consider two stocks \(X\) and \(Y\) with returns \(E[X] = 10, E[Y] = 12\) and variances \(Var(X) = 4, Var(Y) = 9\). If their covariance is \(2\), what is the variance of a 50/50 portfolio \(P = 0.5X + 0.5Y\)?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Expectation (Linearity):</strong> \(E[P] = 0.5(10) + 0.5(12) = 11\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Variance Rule:</strong> \(Var(aX + bY) = a^2Var(X) + b^2Var(Y) + 2abCov(X, Y)\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Substitute:</strong> \(0.25(4) + 0.25(9) + 2(0.5)(0.5)(2)\).</div></div>

      <div class="math-block">$$Var(P) = 1 + 2.25 + 1 = 4.25$$</div>
      
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Insight:</strong> The portfolio variance (4.25) is lower than simply averaging the individual variances \((4+9)/2 = 6.5\) because the stocks are not perfectly correlated. This is "Diversification" in action.</div></div>
    </div>

    <h2 id="scaling-example">5. Illustrative Example: Scaling & Shifts</h2>
    <div class="example-box">
      <h4>Problem: Mean & Variance Transformations</h4>
      <p>Imagine your data \(X\) has mean \(\mu=5\) and variance \(\sigma^2=16\). You transform the data by multiplying by 3 and adding 10: \(Y = 3X + 10\). What are the new mean and variance?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>New Mean:</strong> \(E[3X + 10] = 3E[X] + 10 = 3(5) + 10 = 25\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>New Variance:</strong> \(Var(3X + 10) = 3^2 Var(X) = 9(16) = 144\).</div></div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> Mean shifts linearly \((25)\). Variance scales by the <strong>square</strong> of the multiplier \((144)\). Added constants (10) change the mean but have <strong>zero effect</strong> on variance (spread).</div></div>
    </div>

    <h2 id="implementation">Implementation in Python (NumPy)</h2>
    <python-code>
import numpy as np

# Sample data: Years of Experience vs Salary (scaled)
experience = np.array([1, 2, 3, 4, 5, 6])
salary = np.array([45, 50, 60, 58, 70, 85])

# Mean
mean_exp = np.mean(experience)

# Variance
var_exp = np.var(experience)

# Covariance Matrix
# Returns [[Var(X), Cov(X,Y)], [Cov(Y,X), Var(Y)]]
cov_matrix = np.cov(experience, salary)
covariance = cov_matrix[0, 1]

# Correlation
correlation = np.corrcoef(experience, salary)[0, 1]

print(f"Correlation: {correlation:.4f}")  # Close to 1 (Strong positive)
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Bias-Variance Tradeoff:</strong> High variance in a model leads to <strong>Overfitting</strong>, where the model captures noise instead of the underlying pattern.</li>
      <li><strong>PCA (Principal Component Analysis):</strong> This technique works by finding the directions (eigenvectors) that maximize the <strong>Variance</strong> of the data.</li>
      <li><strong>Standardization:</strong> We transform features to have <strong>Mean = 0</strong> and <strong>Variance = 1</strong> so that gradient descent converges faster.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Expectation</strong> is the "average" outcome.</li>
      <li><strong>Variance</strong> is the "risk" or uncertainty.</li>
      <li><strong>Covariance/Correlation</strong> tell us how features move together.</li>
      <li><strong>Linearity of Expectation:</strong> \(E[aX + b] = aE[X] + b\). This is extremely useful in simplifying complex ML equations.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Now that we can summarize data using mean and variance, we can dive into <strong><a href="#/mathematics/probability/probability-distributions">Common Distributions</a></strong> to see the mathematical "shapes" of different stochastic processes.
    </div>
  `
};
