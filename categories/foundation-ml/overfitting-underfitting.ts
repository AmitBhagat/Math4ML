import { TopicSection } from '../../src/data/types';

export const overfittingUnderfittingSection: TopicSection = {
  id: "overfitting-underfitting",
  title: "Overfitting and Underfitting",
  description: "The two main pitfalls of model performance: memorizing noise (Overfitting) or failing to capture the trend (Underfitting).",
  color: "#F44336",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Model Pitfalls</div>
      <h1>The Over/Under Trap</h1>
      <p>A perfect Machine Learning model is like <strong>Goldilocks</strong>: not too complex, not too simple. <strong>Overfitting</strong> is when the model tries too hard (Memorization). <strong>Underfitting</strong> is when it doesn't try hard enough (Ignorance).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">The Mechanics of Complexity</a>
      <a href="#overfitting">Overfitting: The Memorizer</a>
      <a href="#underfitting">Underfitting: The Simpleton</a>
      <a href="#analogy">The "School Exam" Analogy</a>
    </div>

    <h2 id="theory">The Mechanics of Complexity</h2>
    <p>Every model has a <strong>Capacity</strong> (how many patterns it can fit). High capacity leads to <strong>Overfitting</strong>. Low capacity leads to <strong>Underfitting</strong>. The goal is to find the <strong>Sweet Spot</strong> where the model captures the "Truth" but ignores the "Noise."</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Connecting the Dots."</strong> 
        If you have 10 data points that roughly form a line: 
        <strong>Underfitting</strong> is drawing a straight line that misses most dots. 
        <strong>Overfitting</strong> is drawing a jagged, crazy zig-zag that touches every single dot perfectly. 
        The <strong>Truth</strong> is a slightly wobbly line that catches the general trend.
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Three History Students</h2>
    <div class="example-box">
      <h4>Scenario: Studying for a 1,000-page History Exam using only 5 Practice Questions</h4>
      <p>Imagine three students trying different strategies to pass the final exam. Their results on the real test determine their "Bias" and "Variance."</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Underfitter (Student A):</strong> Only reads the table of contents. On the exam, they guess "War" for every question. They are too simple to see the detail. (High Bias).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Overfitter (Student B):</strong> Memorizes the exact page numbers, font sizes, and coffee stains on the 5 practice questions. If the real exam has a different font, they fail. They memorized the individual noise. (High Variance).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Master (Student C):</strong> Learns the underlying <strong>Concepts</strong> (Cause and Effect). They understand <em>why</em> the events happened. They can answer a new question because they learned the <strong>Truth</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Moral:</strong> Underfitting is being too lazy (Simplicity). Overfitting is being too obsessive (Complexity). Machine Learning is the search for the "Balanced Score."</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> In ML, the "History Exam" is your <strong>Test Set</strong>. If you perform perfectly on the practice questions but fail the exam, you are <strong>Overfitting</strong>. If you fail both, you are <strong>Underfitting</strong>.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Visualizing the Pitfalls</h2>
    <python-code static-output="[Scan] Fitting models to a curved Sine-Wave dataset...\n[Underfit] Linear: Struggles to even touch the trend. (MSE: 0.45)\n[Overfit] Degree-15: Chases every single noise point. (MSE-Train: 0.01, MSE-Test: 12.5)\n[Balanced] Degree-3: Smoothly follows the curve. (MSE-Test: 0.08)\n\n[Insight] Complexity is a power tool. Use too little and you can't build. Use too much and you destroy the project.">
import numpy as np
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

# 1. Truth: A Curve + Random Jitter (Noise)
X = np.sort(np.random.rand(20, 1) * 2 * np.pi, axis=0)
y = np.sin(X).ravel() + np.random.randn(20) * 0.15

# 2. Underfit (Too Linear)
underfit = LinearRegression().fit(X, y)

# 3. Overfit (Too Complex)
# 20 degrees for 20 points means it can hit EVERY point perfectly
overfit = make_pipeline(PolynomialFeatures(20), LinearRegression()).fit(X, y)

# 4. Balanced (Just right)
balanced = make_pipeline(PolynomialFeatures(3), LinearRegression()).fit(X, y)

print(f"X=Pi Evaluation:")
print(f"Underfit Prediction: {underfit.predict([[3.14]])[0]:.2f}")
print(f"Overfit Prediction:  {overfit.predict([[3.14]])[0]:.2f}")
print(f"Balanced Prediction: {balanced.predict([[3.14]])[0]:.2f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> This trade-off between complexity and simplicity is the most famous conflict in ML. Explore <strong><a href="#/machine-learning/foundation-ml/bias-variance-tradeoff">Bias–Variance Tradeoff</a></strong>.
    </div>
  `
};
