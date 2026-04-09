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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In Machine Learning, <strong>Regression</strong> is our primary tool for answering "How Much?" questions. While classification sorts things into buckets, regression deals with the <strong>infinite spectrum</strong> of reality. If you are predicting the temperature, it could be 20.1°C or 20.111°C—there is no fixed set of categories. Regression is the art of finding the "Directional Truth" or the underlying law that connects features to a continuous output. In Machine Learning, we use this to turn messy historical observations into a clear, mathematical path that can forecast the future with high precision.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Regression Analysis</div>
      <p>Regression is the process of estimating the relationship between a dependent variable $y \in \mathbb{R}$ and a feature vector $\mathbf{x} \in \mathbb{R}^d$. Formally, we seek to find a function $f$ that approximates the conditional expectation of $y$ given $\mathbf{x}$:</p>
      <div class="math-block">
        $$f(\mathbf{x}) = \mathbb{E}[y \mid \mathbf{x}]$$
      </div>
      <p>The observed response is typically modeled as $y = f(\mathbf{x}) + \varepsilon$, where $\varepsilon$ is an irreducible error term (noise) such that $\mathbb{E}[\varepsilon \mid \mathbf{x}] = 0$.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Regression as <strong>"Finding the Perfect Trend-Line"</strong> or the <strong>"Shadow Predictor."</strong> 
        Imagine you are watching a pole's shadow grow as the sun set. It’s a smooth, continuous change. Regression is the formula that tells you exactly how long that shadow will be at a microscopic angle $42.53^\circ$. 
        It’s like being a <strong>Stock Trader</strong> who looks at a jagged graph of prices and draws a single, clean line that says: "Overall, the value is growing at this specific rate." 
        You are ignoring the daily "Noise" to capture the <strong>Essence</strong> of the relationship. It is the most powerful tool in science for understanding how one change in the world forces another change to happen.
      </div>
    </div>

    <h2 id="analogy">The "Shadow Predictor" Analogy</h2>
    
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
    

    <h2 id="types">Flavors of Regression</h2>
    <ul>
      <li><strong>Linear:</strong> A straight line. Simple but rigid.</li>
      <li><strong>Polynomial:</strong> A curved line. Flexible but dangerous (Overfitting).</li>
      <li><strong>Regularized (Ridge/Lasso):</strong> A line with "Constraints" to keep it from getting too crazy.</li>
    </ul>

    <h2 id="algorithm">The General Regression Algorithm</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Coffee Stall Trend</h2>
    
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
          Regression is about <strong>Relationship</strong>. It answers: "If I change X by this much, how much will Y change?" It's the most powerful tool for causality in all of science.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
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

    <h2 id="applications">Applications in ML</h2>
    <p>Regression answers the question "How Much?". While classification sorts things into buckets, regression deals with the infinite, continuous spectrum of physical reality.</p>
    <ul>
      <li><strong>Real Estate Valuation</strong>: Companies like Zillow use regression to estimate the price of your home. They take features like square footage, neighborhood safety, and house age to output a single, continuous dollar amount that reflects the market reality.</li>
      <li><strong>Demand Forecasting</strong>: Global retailers like Amazon use regression to predict exactly how many units of a product will sell in the next week. This allows them to manage inventory perfectly, ensuring they never run out of stock while minimizing wasted shelf space.</li>
    </ul>
    <p>Teacher's Final Word: Regression is the art of finding the "Directional Truth." It turns messy historical observations into a clear, mathematical path that can forecast the future with high precision.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Let's start with the classic. Explore <strong><a href="#/machine-learning/supervised-learning/linear-regression">Linear Regression</a></strong>.
    </div>
  `
};


