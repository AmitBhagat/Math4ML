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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Imagine you have a chaotic cloud of data points—maybe house prices vs. square footage—and you want to find the "Universal Rule" that connects them. <strong>Linear Regression</strong> is the search for that one perfect, straight path that passes as close to every point as possible. It is the mathematical bridge between "Observations" and "Predictions." In Machine Learning, we use this simple line to turn messy history into a clear, logical forecast about the future. It is the "Hello World" of AI because it proves that even with millions of data points, a simple, interpretable rule can often be more powerful than a complex black box.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Linear Regression</div>
      <p>Linear regression models the relationship between a dependent variable $y \in \mathbb{R}$ and a feature vector $\mathbf{x} \in \mathbb{R}^d$. The relationship is assumed to be linear:</p>
      <div class="math-block">
        $$\hat{y} = \mathbf{w}^T \mathbf{x} + b$$
      </div>
      <p>The optimal parameters $(\mathbf{w}^*, b^*)$ are found by minimizing the **Residual Sum of Squares (RSS)**:</p>
      <div class="math-block">
        $$\mathcal{L}(\mathbf{w}, b) = \sum_{i=1}^n (y_i - (\mathbf{w}^T \mathbf{x}_i + b))^2$$
      </div>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Linear Regression as <strong>"Finding the Weighted Average Path"</strong> or the <strong>"Elastic String."</strong> 
        If your data points are metal pegs on a board, Linear Regression is a long elastic string stretched through them. 
        The string doesn't touch every peg perfectly, but the <strong>Tension</strong> (Sum of Squared Errors) pulls it into the most balanced position possible. 
        In ML, the <strong>Weight</strong> (\(w\)) is the "Sensitivity" (e.g., "how much does one extra room move the price?"), and the <strong>Bias</strong> (\(b\)) is the starting point. 
        It's the ultimate tool for transparent, high-stakes decisions where you need to explain <em>exactly</em> why the model said "Yes."
      </div>
    </div>

    <h2 id="ols">Ordinary Least Squares (OLS)</h2>
    <p>How do we find the "Best" \(w\) and \(b\)? We minimize the <strong>Mean Squared Error (MSE)</strong>. In simple cases, there is a <strong>Closed-Form Solution</strong> (The Normal Equation) that gives us the answer instantly without needing Gradient Descent:</p>
    <div class="math-block">$$w = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2}$$</div>

    <h2 id="analogy">The "Perfect String" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine your data points are <strong>Metal Pegs</strong> on a board. 
        You have a <strong>Long Elastic String</strong>. You want to stretch the string so it passes through the pegs. 
        <strong>Ordinary Least Squares</strong> is the "Tension" in the string pulling it toward the average position of all the pegs. The string ends up in the <strong>Optimal Position</strong> where the total pulling force (Squared Error) is balanced.
      </div>
    </div>

    <h2 id="algorithm">The Linear Regression Algorithm (OLS)</h2>
    
      <h4>Closed-Form Solution Steps</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Initialize:</strong> Calculate the mean of input \(\bar{x}\) and target \(\bar{y}\).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Numerator:</strong> Calculate the sum of products of differences: \(\sum (x_i - \bar{x})(y_i - \bar{y})\).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Denominator:</strong> Calculate the sum of squares of differences: \(\sum (x_i - \bar{x})^2\).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Coefficient:</strong> Compute \(w = \text{Numerator} / \text{Denominator}\).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Intercept:</strong> Compute \(b = \bar{y} - w\bar{x}\).
        </div>
      </div>
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Best-Fit String</h2>
    
      <h4>Scenario: Pricing Houses by their Size</h4>
      <p>Imagine your data points are pins on a board. You want to stretch a piece of elastic across them.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Pins:</strong> Your historical sales (e.g., 1000sqft = $200k, 2000sqft = $400k).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Elastic String:</strong> You stretch it so it minimizes the distance to ALL pins. (Ordinary Least Squares).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Slope:</strong> The angle of the string tells you the price per square foot ($200/sqft).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Prediction:</strong> A new house comes in at 1500sqft. You follow the string to exactly $300k.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Linear Regression is <strong>Interpretable</strong>. Unlike deep learning, you can explain exactly why the model made a choice. "The price is $X because the slope is $Y." It's the king of transparent AI.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np
from sklearn.linear_model import LinearRegression

# 1. Historical Dataset
X = np.array([1000, 1200, 1500, 1800, 2500]).reshape(-1, 1)
y = np.array([200000, 240000, 300000, 360000, 500000])

# 2. Fit the 'Perfect String'
model = LinearRegression()
model.fit(X, y)

# 3. Predict & Explain
w = model.coef_[0]
b = model.intercept_
prediction = model.predict([[2000]])

print("Learned Weight (Price per Sqft): $" + f"{w:.2f}")
print("Learned Bias (Base Price): $" + f"{b:.2f}")
print("Estimate for 2000 sqft house: $" + f"{prediction[0]:,.0f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Linear Regression is the "Search for the Perfect String." It is the simplest and most transparent way to turn history into a categorical forecast.</p>
    <ul>
      <li><strong>House Price Estimation</strong>: This is the classic use case. We take a house's square footage, factor in its age, and find the "Price per Square Foot" (the weight). This allows us to draw a line that predicts the value of any house with simple, explainable math.</li>
      <li><strong>CPU Performance Prediction</strong>: Hardware engineers use linear regression to predict how much power a chip will consume based on its clock speed. By fitting a line to previous test data, they can ensure new designs don't overheat before they are even built.</li>
    </ul>
    <p>Teacher's Final Word: Linear Regression is the king of transparent AI. Unlike deep learning "black boxes," you can always explain exactly why the model made its choice. "The price is $X because the slope is $Y."</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if our line is too sensitive to noise? Explore <strong><a href="#/machine-learning/supervised-learning/ridge-regression">Ridge Regression</a></strong>.
    </div>
  `
};


