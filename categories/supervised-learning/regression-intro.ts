import { TopicSection } from '../../src/data/types';

export const regressionIntroSection: TopicSection = {
  id: "regression-intro",
  title: "Introduction to Regression",
  description: "Regression is the fundamental task of predicting a continuous, numerical output based on input features.",
  color: "#58a6ff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Core</div>
      <h1>Introduction to Regression</h1>
      <p>In Machine Learning, <strong>Regression</strong> is our primary tool for answering "How Much?" questions. It's the art of finding a function $f(x)$ that maps your input features (like house size) to a <strong>continuous</strong> numerical output (like house price).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Core Theory: The Continuous Mapping</a>
      <a href="#analogy">The "Shadow Predictor" Analogy</a>
      <a href="#math">The Objective: Error Minimization</a>
      <a href="#types">Flavors of Regression</a>
    </div>

    <h2 id="theory">Core Theory: The Continuous Mapping</h2>
    <p>Unlike Classification (which deals with buckets), Regression deals with an <strong>infinite spectrum</strong>. If you are predicting the temperature, it could be 20.1°C, 20.11°C, or 20.111°C. The "Learning" in regression is about finding the <strong>Best-Fit Line</strong> (or curve) through your data points.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Finding the Trend."</strong> 
        Regression is like being a <strong>Stock Trader</strong> who looks at a jagged graph of prices and tries to draw a straight line that says: "Overall, it's going up at this rate." You ignore the daily noise to find the <strong>Directional Truth</strong>.
      </div>
    </div>

    <h2 id="analogy">The "Shadow Predictor" Analogy</h2>
    <div class="example-box">
      <h4>Scenario: Predicting the Length of a Shadow</h4>
      <p>Data: [Time of Day (Sun Angle)]. Target: [Length of a Pole's Shadow].</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Observation:</strong> As the sun goes down, the shadow gets longer. It's a smooth, continuous change.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>The Regression Goal:</strong> Find a formula $L = f(\theta)$ so that if I tell you a completely new angle $\theta = 42.5^{\circ}$, you can tell me the exact shadow length in millimeters.
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Key Insight:</strong> Regression allows us to <strong>Interpolate</strong> (guess between points) and <strong>Extrapolate</strong> (guess the future).
        </div>
      </div>
    </div>

    <h2 id="math">The Objective: Error Minimization</h2>
    <p>How do we know if our line is "Good"? We measure the <strong>Residuals</strong> (the distance between our predicted line and the actual data points). We want to find the line where the <strong>Sum of Squared Errors (SSE)</strong> is as small as possible.</p>
    <div class="math-block">$$Loss = \sum_{i=1}^n (y_i - \hat{y}_i)^2$$</div>

    <h2 id="types">Flavors of Regression</h2>
    <ul>
      <li><strong>Linear:</strong> A straight line. Simple but rigid.</li>
      <li><strong>Polynomial:</strong> A curved line. Flexible but dangerous (Overfitting).</li>
      <li><strong>Regularized (Ridge/Lasso):</strong> A line with "Constraints" to keep it from getting too crazy.</li>
    </ul>

    <h2 id="algorithm">The General Regression Algorithm</h2>
    <div class="example-box">
      <h4>Step-by-Step Logic</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Data Collection:</strong> Gather input features $X$ and continuous labels $y$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Model Selection:</strong> Choose a function $f(x, w)$ (e.g., $wx + b$).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Loss Definition:</strong> Define a Cost Function (usually Mean Squared Error) to measure how 'far' $f(x)$ is from $y$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Optimization:</strong> Adjust parameters $w$ to minimize the loss (using Gradient Descent or OLS).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Evaluation:</strong> Measure performance on unseen data using metrics like $R^2$ or RMSE.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Coffee Stall Trend</h2>
    <div class="example-box">
      <h4>Scenario: Predicting Coffee Sales by Temperature</h4>
      <p>Imagine you run a stall and want to know how much milk to buy based on the weather forecast.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Input:</strong> Tomorrow's temperature is 22°C. (The Independent Variable).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Model:</strong> Your historical data shows a trend: $y = -10x + 500$. (The Regression Line).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Calculation:</strong> $-10 \times 22 + 500 = 280$. (The Prediction).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Result:</strong> You buy enough milk for exactly 280 cups. Regression turned a guess into a <strong>Data-Driven Decision</strong>.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Regression is about <strong>Relationship</strong>. It answers: "If I change X by this much, how much will Y change?" It's the most powerful tool for causality in all of science.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Linear Baseline</h2>
    <python-code static-output="[Training] Fitting linear model to 5 historical days...\n[Input] Forecasted Temperature: 22°C\n[Model] y = -10.0x + 500.0\n[Prediction] Predicted cups to sell: 280.00\n[Note] For every 1 degree colder, you sell 10 MORE cups.">
import numpy as np
from sklearn.linear_model import LinearRegression

# 1. Prepare Data (Temperature vs. Cups Sold)
X = np.array([[10], [15], [20], [25], [30]]) # Temps
y = np.array([400, 350, 300, 250, 200])       # Cups sold

# 2. Train the Model (Find the best w and b)
model = LinearRegression()
model.fit(X, y)

# 3. Predict for a new temp (22°C)
new_temp = [[22]]
cups_pred = model.predict(new_temp)

print(f"Predicted cups sold at 22°C: {cups_pred[0]:.2f}")
print(f"Model Equation: y = {model.coef_[0]:.1f}x + {model.intercept_:.1f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Let's start with the classic. Explore <strong><a href="#/machine-learning/supervised-learning/linear-regression">Linear Regression</a></strong>.
    </div>
  `
};
