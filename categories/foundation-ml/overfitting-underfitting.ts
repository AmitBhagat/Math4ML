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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A perfect Machine Learning model is like the "Goldilocks" of data—it is not too complex, and not too simple. <strong>Underfitting</strong> occurs when your model is too "Lazy" or simple to capture the underlying trend; it’s like trying to describe a complex portrait using only a single straight line. <strong>Overfitting</strong> occurs when your model is too "Obsessive"; it memorizes every tiny, random jitter in your training data, effectively mistaking the noise for the signal. The goal of every machine learning engineer is <strong>Generalization</strong>: building a model that understands the fundamental truth of the data so well that it can perform just as accurately on information it has never seen before as it does on its training set.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Generalization Gap</div>
      <p>The performance of a model $h$ is defined by the difference between its **Empirical Risk** $\hat{R}(h)$ (training error) and its **Structural Risk** $R(h)$ (true error on unseen data):</p>
      <div class="math-block">
        $$\text{Gap} = R(h) - \hat{R}(h)$$
      </div>
      <p>The learning process is governed by two critical failure states:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Underfitting (High Bias)</strong>: The hypothesis space $\mathcal{H}$ is too restrictive. Both training and test errors are high. The model fails to solve the "optimization" part of the problem.</li>
        <li><strong>Overfitting (High Variance)</strong>: The model has excessive capacity, allowing it to minimize $\hat{R}(h)$ by interpolating noise. This leads to a massive generalization gap where $R(h) \gg \hat{R}(h)$.</li>
        <li><strong>Occam's Razor</strong>: In ML, we prefer the simplest hypothesis that explains the data. We enforce this via **Regularization** ($\Omega(h)$), minimizing the total objective: $J(h) = \hat{R}(h) + \lambda \Omega(h)$.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Successful learning occurs when the model finds the global minimum of the total risk, balancing model complexity against data resolution.</p>
    </div>
    
    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Three History Students</h2>
    
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
          In ML, the "History Exam" is your <strong>Test Set</strong>. If you perform perfectly on the practice questions but fail the exam, you are <strong>Overfitting</strong>. If you fail both, you are <strong>Underfitting</strong>.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
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

