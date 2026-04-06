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
      <a href="#residuals">2. Residuals & Plotting</a>
      <a href="#r2">3. R-Squared ($R^2$)</a>
      <a href="#example">Mathematical Example & Solution</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#takeaways">Key Takeaways for ML</a>
    </div>

    <h2 id="linear">1. Linear Regression</h2>
    <p>Linear Regression assumes a linear relationship between the input variables and the single output variable.</p>
    
    <div class="def-box">
      <div class="def-title">Mathematical Representation</div>
      <p style="margin:0">The model represented by the following equation:</p>
      <div class="math-block" style="margin-top:10px; margin-bottom:10px; background:transparent; border:none; padding:0;">
        $$Y = \beta_0 + \beta_1 X + \epsilon$$
      </div>
      <ul style="margin-bottom:0">
        <li><strong>$Y$:</strong> Dependent Variable (Target)</li>
        <li><strong>$X$:</strong> Independent Variable (Predictor)</li>
        <li><strong>$\beta_0$:</strong> Intercept (Value of $Y$ when $X=0$)</li>
        <li><strong>$\beta_1$:</strong> Slope (Change in $Y$ for a unit change in $X$)</li>
        <li><strong>$\epsilon$:</strong> Random Error (Noise)</li>
      </ul>
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

    <div class="example-box">
      <h4 id="example">Mathematical Example with Solution</h4>
      <p><strong>Problem:</strong> Given $X = [1, 2, 3]$ and $Y = [2, 4, 5]$. Find the regression line $Y = \beta_0 + \beta_1 X$ and calculate the Residual for $X=2$.</p>
      
      <p><strong>Solution:</strong></p>
      <ol>
        <li><strong>Calculate Means:</strong> $\bar{X} = 2$, $\bar{Y} = 3.67$.</li>
        <li><strong>Calculate Slope ($\beta_1$):</strong> 
          $$\beta_1 = \frac{\sum (x_i - \bar{X})(y_i - \bar{Y})}{\sum (x_i - \bar{X})^2} = \frac{1.67 + 0 + 1.33}{1 + 1} = 1.5$$
        </li>
        <li><strong>Calculate Intercept ($\beta_0$):</strong> $\beta_0 = \bar{Y} - \beta_1 \bar{X} = 3.67 - (1.5 \times 2) = 0.67$.</li>
        <li><strong>Residual for $X=2$:</strong> $\hat{y} = 0.67 + 1.5(2) = 3.67 \implies e = 4 - 3.67 = 0.33$.</li>
      </ol>
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
