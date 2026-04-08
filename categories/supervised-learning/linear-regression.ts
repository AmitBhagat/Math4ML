import { TopicSection } from '../../src/data/types';

export const linearRegressionSection: TopicSection = {
  id: "linear-regression",
  title: "Linear Regression",
  description: "The simplest and most interpretable Regression model, assuming a linear relationship between features and output.",
  color: "#58a6ff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Linear</div>
      <h1>Linear Regression</h1>
      <p>Imagine you have a cloud of data points and you want to draw a <strong>single straight line</strong> that passes as close to all of them as possible. That is <strong>Linear Regression</strong>. It's the "Hello World" of Machine Learning.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Line Equation</a>
      <a href="#ols">Ordinary Least Squares (OLS)</a>
      <a href="#assumptions">The "Linear" Assumptions</a>
      <a href="#analogy">The "Perfect String" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Line Equation</h2>
    <p>In Simple Linear Regression (one feature), we model the relationship as:</p>
    <div class="math-block">$$y = w \cdot x + b + \epsilon$$</div>
    <ul>
      <li><strong>\(w\) (Weight/Slope):</strong> How much \(y\) changes for every unit of \(x\).</li>
      <li><strong>\(b\) (Bias/Intercept):</strong> Where the line hits the \(y\)-axis.</li>
      <li><strong>\(\epsilon\) (Error):</strong> The "Noise" the model can't explain.</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Finding the Relationship."</strong> 
        If \(w = 2\), the model says: "For every 1 extra room in a house, the price goes up by $2,000." It's a simple, logical rule that humans and machines can both understand.
      </div>
    </div>

    <h2 id="ols">Ordinary Least Squares (OLS)</h2>
    <p>How do we find the "Best" \(w\) and \(b\)? We minimize the **Mean Squared Error (MSE)**. In simple cases, there is a **Closed-Form Solution** (The Normal Equation) that gives us the answer instantly without needing Gradient Descent:</p>
    <div class="math-block">$$w = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2}$$</div>

    <h2 id="assumptions">The "Linear" Assumptions</h2>
    <p>Linear Regression is powerful but <strong>fragile</strong>. It assumes:</p>
    <ul>
      <li><strong>Linearity:</strong> The relationship is actually a line (not a curve).</li>
      <li><strong>Independence:</strong> Observations don't influence each other.</li>
      <li><strong>Homoscedasticity:</strong> The "Noise" is constant across all data.</li>
    </ul>

    <h2 id="analogy">The "Perfect String" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine your data points are <strong>Metal Pegs</strong> on a board. 
        You have a <strong>Long Elastic String</strong>. You want to stretch the string so it passes through the pegs. 
        **Ordinary Least Squares** is the "Tension" in the string pulling it toward the average position of all the pegs. The string ends up in the **Optimal Position** where the total pulling force (Squared Error) is balanced.
      </div>
    </div>

    <h2 id="algorithm">The Linear Regression Algorithm (OLS)</h2>
    <div class="example-box">
      <h4>Closed-Form Solution Steps</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Initialize:</strong> Calculate the mean of input $\bar{x}$ and target $\bar{y}$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Numerator:</strong> Calculate the sum of products of differences: $\sum (x_i - \bar{x})(y_i - \bar{y})$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Denominator:</strong> Calculate the sum of squares of differences: $\sum (x_i - \bar{x})^2$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Coefficient:</strong> Compute $w = \text{Numerator} / \text{Denominator}$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Intercept:</strong> Compute $b = \bar{y} - w\bar{x}$.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: House Pricing</h2>
    <p>Consider a neighborhood where you want to predict house prices based on size:</p>
    <ul>
      <li><strong>Input:</strong> Square Footage (e.g., 1200, 1500, 1800 sqft).</li>
      <li><strong>Target:</strong> Price (e.g., $240k, $300k, $360k).</li>
    </ul>
    <p>A Linear Regression model might find the rule: <strong>Price = $200 \times \text{Sqft} + 0$</strong>. 
    This allows a real estate agent to instantly estimate that a 2000 sqft house should cost around $400,000.</p>

    <python-code>
from sklearn.linear_model import LinearRegression
import numpy as np

# 1. Square footage (1D array reshaped to 2D)
X = np.array([1200, 1500, 1800, 2100, 2400]).reshape(-1, 1)
y = np.array([240000, 300000, 360000, 420000, 480000])

# 2. Train the 'Perfect String'
model = LinearRegression()
model.fit(X, y)

# 3. Predict for a 2000 sqft house
price_2000 = model.predict([[2000]])
print(f"Estimated Price: \${price_2000[0]:,.0f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if our line is too sensitive to noise? Explore <strong><a href="#/machine-learning/supervised-learning/ridge-regression">Ridge Regression</a></strong>.
    </div>
  `
};
