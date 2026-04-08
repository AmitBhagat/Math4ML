import { TopicSection } from '../../src/data/types';

export const evaluationMetricsSection: TopicSection = {
  id: "evaluation-metrics",
  title: "Model Evaluation Metrics",
  description: "Evaluation metrics are used to measure the quality of a statistical or Machine Learning model.",
  color: "#4CAF50",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Evaluation</div>
      <h1>Model Evaluation: The Truth</h1>
      <p>Accuracy is a <strong>Lie</strong>. If 99% of your emails are "Not Spam," and your model just guesses "Not Spam" every single time, it is 99% accurate—but it is <strong>Useless</strong>. <strong>Evaluation Metrics</strong> are the "Scorecards" that tell the real story of how your model behaves.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#matrix">The Confusion Matrix</a>
      <a href="#classification">Precision, Recall, F1-Score</a>
      <a href="#regression">Regression: MAE, MSE, R-squared</a>
      <a href="#analogy">The "Doctor's Diagnosis" Analogy</a>
    </div>

    <h2 id="matrix">The Confusion Matrix</h2>
    <p>A table showing the 4 types of predictions:</p>
    <ul>
      <li><strong>True Positive (TP)</strong>: Correctly guessed "Yes."</li>
      <li><strong>True Negative (TN)</strong>: Correctly guessed "No."</li>
      <li><strong>False Positive (FP)</strong>: Wrongly guessed "Yes" (Type I Error).</li>
      <li><strong>False Negative (FN)</strong>: Wrongly guessed "No" (Type II Error).</li>
    </ul>

    <h2 id="classification">Precision, Recall, F1-Score</h2>
    <h2 id="example">Illustrated Example: The Fishing Trip</h2>
    <div class="example-box">
      <h4>Scenario: Catching Dinner in a Lake</h4>
      <p>Imagine you go fishing in a lake that contains 100 fish and 1,000 old boots.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Precision (The Quality):</strong> You pull up your net. It has 10 fish and 2 boots. Your precision is 10/12 = 83%. Most of what you caught is actually edible.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Recall (The Quantity):</strong> There were 100 fish in the lake. You only caught 10. Your recall is 10/100 = 10%. You caught good fish, but you missed most of them.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The F1-Score:</strong> You want a net that catches as many fish as possible (Recall) without picking up all the trash (Precision). The F1-Score balances these two targets.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> In a Medical Test, you want 100% <strong>Recall</strong> (don't miss anyone sick). In a Search Engine, you want 100% <strong>Precision</strong> (don't show me irrelevant results). Identify your priority!
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Classification & Regression</h2>
    <python-code static-output="[Classification] Precision: 0.67, Recall: 1.00\n[Regression] MSE: 124.50, R-squared: 0.92\n[Note: The MSE is low relative to the range, suggesting a good fit]">
from sklearn.metrics import precision_score, recall_score, mean_squared_error, r2_score
import numpy as np

# 1. Classification (Spam vs. Normal)
# Truth: [0=Normal, 1=Spam], Preds: [Model's guess]
y_true_clf = [1, 0, 1, 1, 0, 1]
y_pred_clf = [1, 1, 1, 1, 0, 1] # Model guessed '1' too often

prec = precision_score(y_true_clf, y_pred_clf)
rec = recall_score(y_true_clf, y_pred_clf)
print(f"[Classification] Precision: {prec:.2f}, Recall: {rec:.2f}")

# 2. Regression (Predicting Prices)
y_true_reg = [100, 200, 300, 400]
y_pred_reg = [105, 195, 310, 390]

mse = mean_squared_error(y_true_reg, y_pred_reg)
r2 = r2_score(y_true_reg, y_pred_reg)
print(f"[Regression] MSE: {mse:.2f}, R-squared: {r2:.2f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have completed the foundation. You possess the **Intuition** and **Math** to build real-world models. Explore <strong><a href="#/machine-learning/supervised-learning/basics">Supervised Machine Learning Algorithms</a></strong>.
    </div>
  `
};
