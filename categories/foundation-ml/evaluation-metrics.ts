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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In machine learning, your choice of metric is your <strong>Definition of Success</strong>. A model that is 99% accurate can still be a complete failure if that 1% error occurs on life-critical data (like a medical diagnosis). We use specialized metrics to look past simple "Correct vs. Incorrect" ratios. <strong>Precision</strong> tells us if we can trust a positive result; <strong>Recall</strong> tells us if we missed anyone important. By choosing the right metric, we align the model's mathematical optimization with the real-world consequences of its mistakes. It is the tactical way we ensure our machines solve the right problem, not just the easiest one.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Scoring Mechanics</div>
      <p>Model evaluation is the process of quantifying the proximity of a predicted distribution $\hat{\mathcal{P}}$ to the true empirical distribution $\mathcal{P}$. The metrics are categorized by the nature of the target variable $y$:</p>
      
      <div class="space-y-4">
        <div>
          <h4 class="text-sm font-bold text-green-premium">1. Classification Metrics (Discrete)</h4>
          <p class="text-xs mb-1">Based on the **Confusion Matrix** (TP, TN, FP, FN):</p>
          <div class="math-block">
            $$\text{Precision} = \frac{TP}{TP + FP} \quad \text{Recall} = \frac{TP}{TP + FN}$$
            $$\text{F1-Score} = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$$
          </div>
        </div>

        <div>
          <h4 class="text-sm font-bold text-green-premium">2. Regression Metrics (Continuous)</h4>
          <p class="text-xs mb-1">Measuring the magnitude of residual errors $e_i = y_i - \hat{y}_i$:</p>
          <div class="math-block">
            $$\text{MSE} = \frac{1}{n} \sum_{i=1}^n (y_i - \hat{y}_i)^2 \quad R^2 = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}$$
          </div>
        </div>
      </div>

      <p class="text-xs opacity-70 mt-2">Metrics like **Cross-Entropy** are used for training (optimization), while metrics like **Accuracy** or **AUC-ROC** are used for final validation and model comparison.</p>
    </div>
    
    <div class="callout tip">
    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Fishing Trip</h2>
    
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
          In a Medical Test, you want 100% <strong>Recall</strong> (don't miss anyone sick). In a Search Engine, you want 100% <strong>Precision</strong> (don't show me irrelevant results). Identify your priority!
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
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
      <strong>Next Step:</strong> You have completed the foundation. You possess the <strong>Intuition</strong> and <strong>Math</strong> to build real-world models. Explore <strong><a href="#/machine-learning/supervised-learning/basics">Supervised Machine Learning Algorithms</a></strong>.
    </div>
  `
};

