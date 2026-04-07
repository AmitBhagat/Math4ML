import { TopicSection } from '../../src/data/types';

export const regressionAnalysisSection: TopicSection = {
  id: "regression-analysis",
  title: "Regression Analysis",
  description: "Explore the relationship between independent and dependent variables through Linear Regression, Residuals, and R-Squared.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📈 Statistics · Regression</div>
      <h1>Regression Analysis</h1>
      <p>Regression Analysis is a supervised learning technique used to model the relationship between a <strong>Dependent Variable</strong> ($Y$) and one or more <strong>Independent Variables</strong> ($X$). It's the foundational algorithm for predictive modeling.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#linear">1. Linear Regression</a>
      <a href="#ols-example">1.1 Illustrative Example: Manual OLS</a>
      <a href="#residuals">2. Residuals & Plotting</a>
      <a href="#r2">3. R-Squared (\(R^2\))</a>
      <a href="#r2-example">3.1 Illustrative Example: Explaining Variance</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#takeaways">Key Takeaways for ML</a>
    </div>

    <h2 id="linear">1. Linear Regression</h2>
    <p>Linear Regression assumes a linear relationship between the input variables and the single output variable.</p>
    
    <div class="premium-def-box">
      <div class="premium-def-title">Model Equation</div>
      <div class="math-block">$$Y = \beta_0 + \beta_1 X + \epsilon$$</div>
      <p style="margin-top:10px">Where \(\beta_0\) is the <strong>Intercept</strong> and \(\beta_1\) is the <strong>Slope</strong>.</p>
    </div>

    <h2 id="ols-example">1.1 Illustrative Example: Manual OLS</h2>
    <div class="example-box">
      <h4>Problem: Fitting a Line by Hand</h4>
      <p>Given \(X = [1, 2, 3]\) and \(Y = [2, 4, 5]\). Find the regression line \(Y = \beta_0 + \beta_1 X\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Means:</strong> \(\bar{X} = 2, \bar{Y} = 3.67\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Numerator:</strong> \(\sum (x_i - \bar{X})(y_i - \bar{Y}) = (-1)(-1.67) + (0)(0.33) + (1)(1.33) = 3.0\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Denominator:</strong> \(\sum (x_i - \bar{X})^2 = (-1)^2 + 0^2 + 1^2 = 2\).</div></div>
      <div class="step-box"><span class="step-num">4</span><div><strong>Slope (\(\beta_1\)):</strong> \(3.0 / 2 = 1.5\).</div></div>
      <div class="step-box"><span class="step-num">5</span><div><strong>Intercept (\(\beta_0\)):</strong> \(3.67 - (1.5 \times 2) = 0.67\).</div></div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Equation:</strong> \(\hat{Y} = 0.67 + 1.5X\). This line minimizes the <strong>Sum of Squared Errors</strong> across all three points.</div></div>
    </div>

    <h3>Cost Function: Mean Squared Error (MSE)</h3>
    <p>To find the best $\beta_0$ and $\beta_1$, we minimize the sum of squared differences between predicted and actual values:</p>
    <div class="math-block">
      $$J(\beta_0, \beta_1) = \frac{1}{n} \sum_{i=1}^{n} (y_i - (\beta_0 + \beta_1 x_i))^2$$
    </div>

    <h2 id="residuals">2. Residuals & Plotting</h2>
    <p>A <strong>Residual</strong> ($e$) is the difference between the observed value ($y$) and the predicted value ($\hat{y}$) from the regression line.</p>
    <div class="math-block">
      $$e_i = y_i - \hat{y}_i$$
    </div>

    <div class="callout info">
      <div class="callout-icon">📊</div>
      <div class="callout-body">
        <strong>Properties of Residuals:</strong>
        <ul>
          <li>The sum of residuals in an OLS (Ordinary Least Squares) model is always zero: $\sum e_i = 0$.</li>
          <li><strong>Residual Plot:</strong> A scatter plot of residuals against predicted values. If a pattern (e.g., a curve) appears, the model is inappropriate (Heteroscedasticity).</li>
        </ul>
      </div>
    </div>

    <h2 id="r2">3. R-Squared ($R^2$) - Coefficient of Determination</h2>
    <p>$R^2$ is a statistical measure that represents the proportion of the variance for a dependent variable that's explained by an independent variable.</p>
    
    <div class="math-block">
      $$R^2 = 1 - \frac{SS_{res}}{SS_{tot}}$$
    </div>
    <p>Where:</p>
    <ul>
      <li><strong>$SS_{res}$ (Sum of Squares of Residuals):</strong> $\sum (y_i - \hat{y}_i)^2$ — The "unexplained" variance.</li>
      <li><strong>$SS_{tot}$ (Total Sum of Squares):</strong> $\sum (y_i - \bar{y})^2$ — The total variance in the data.</li>
    </ul>

    <h2 id="r2-example">3.1 Illustrative Example: Explaining Variance</h2>
    <div class="example-box">
      <h4>Problem: Interpreting \(R^2 = 0.85\)</h4>
      <p>A marketing model predicts sales based on ad spend with an \(R^2\) of 0.85. What does this mean?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>The Meaning:</strong> 85% of the variation in sales can be explained by the variation in ad spend.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>The Leftovers:</strong> The remaining 15% is due to factors not in the model (noise, seasonality, competitor moves).</div></div>

      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Reality Check:</strong> High \(R^2\) doesn't always mean a good model (it could be overfitting). Always check <strong>Residual Plots</strong> for patterns that indicate your linear assumption is failing.</div></div>
    </div>

    <h2 id="implementation">Python Implementation</h2>
    <python-code>
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_squared_error

# Data Preparation
X = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)
y = np.array([2, 4, 5, 4, 5])

# Model Initialization and Training
model = LinearRegression()
model.fit(X, y)

# Predictions
y_pred = model.predict(X)

# Evaluation Metrics
r2 = r2_score(y, y_pred)
residuals = y - y_pred

print(f"Regression Equation: Y = {model.intercept_:.2f} + {model.coef_[0]:.2f}X")
print(f"R-Squared Score: {r2:.4f}")
print(f"Residuals: {residuals}")
    </python-code>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Complexity Analysis:</strong>
        <ul>
          <li><strong>Time Complexity:</strong> $O(p^2 n + p^3)$ for the Normal Equation.</li>
          <li><strong>Space Complexity:</strong> $O(np)$ to store the feature matrix.</li>
        </ul>
      </div>
    </div>

    <h2 id="takeaways">Key Takeaways for ML</h2>
    <ul>
      <li><strong>Linear Regression</strong> is a high-bias, low-variance model.</li>
      <li><strong>R-Squared</strong> can be misleading; <strong>Adjusted R-Squared</strong> is preferred for Multiple Regression.</li>
      <li>Checking <strong>Residuals</strong> is mandatory to ensure the "Linearity" assumption holds.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Regression gives us predictions, but how do we quantify "how wrong" we are? Rigourously assess your model performance with <strong><a href="#/mathematics/statistics/metrics">Evaluation Metrics</a></strong>.
    </div>
  `
};
