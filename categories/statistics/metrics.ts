import { TopicSection } from '../../src/data/types';

export const evaluationMetricsSection: TopicSection = {
  id: "metrics",
  title: "Evaluation Metrics",
  description: "Learn to categorize and calculate Classification (Confusion Matrix, Precision, Recall, F1) and Regression metrics (MAE, MSE, Cross-Entropy).",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Metrics</div>
      <h1>Evaluation Metrics</h1>
      <p>Evaluation metrics are the compass for a Machine Learning engineer. They tell us not just "if" a model is working, but <strong>"how"</strong> it is failing. We categorize these into Classification Metrics (for discrete labels) and Regression Metrics (for continuous values).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#classification">1. Classification Metrics</a>
      <a href="#precision-recall-example">2. Illustrative Example: Precision vs. Recall</a>
      <a href="#regression">3. Regression Metrics</a>
      <a href="#mae-mse-example">4. Illustrative Example: MAE vs. MSE</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <h2 id="classification">1. Classification Metrics (The Confusion Matrix)</h2>
    <p>Most classification metrics are derived from the <strong>Confusion Matrix</strong>, which compares Predicted vs. Actual labels.</p>
    
    <div class="step-box"><span class="step-num">1</span><div><strong>Accuracy:</strong> Overall correctness. \((TP + TN) / \text{Total}\). High bias on imbalanced data.</div></div>
    <div class="step-box"><span class="step-num">2</span><div><strong>Precision:</strong> "Is it really positive?" \(\frac{TP}{TP + FP}\). Target when False Alarms are costly.</div></div>
    <div class="step-box"><span class="step-num">3</span><div><strong>Recall (Sensitivity):</strong> "Did we find all positives?" \(\frac{TP}{TP + FN}\). Critical for safety/health.</div></div>
    <div class="step-box"><span class="step-num">4</span><div><strong>F1-Score:</strong> Harmonic mean. \(2 \cdot \frac{\text{Pre} \cdot \text{Rec}}{\text{Pre} + \text{Rec}}\). Balance point.</div></div>

    <h2 id="precision-recall-example">2. Illustrative Example: Precision vs. Recall</h2>
    <div class="example-box">
      <h4>Problem: Evaluating a Cancer Model</h4>
      <p>A dataset has 100 patients. 10 have cancer (\(P=10\)). A model predicts "Cancer" for 15 people. Out of those 15, only 8 actually have cancer (\(TP=8\)).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>False Positives (FP):</strong> Predicted 15 - Correct 8 = 7.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>False Negatives (FN):</strong> Actual 10 - Found 8 = 2.</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Precision:</strong> \(8 / (8 + 7) \approx 0.53\) (53%).</div></div>
      <div class="step-box"><span class="step-num">4</span><div><strong>Recall:</strong> \(8 / (8 + 2) = 0.80\) (80%).</div></div>

      <div class="callout warn"><div class="callout-icon">⚠️</div><div class="callout-body"><strong>Analysis:</strong> The model is "Safe" (80% recall catches most cancer) but "Noisy" (53% precision means many healthy people get a scare). In ML, we tune the <strong>Decision Threshold</strong> to slide along this tradeoff.</div></div>
    </div>

    <h3>ROC-AUC</h3>
    <ul>
      <li><strong>ROC Curve:</strong> A plot of <strong>True Positive Rate</strong> (Recall) vs. <strong>False Positive Rate</strong> ($FP / (FP + TN)$).</li>
      <li><strong>AUC (Area Under Curve):</strong> Represents the probability that a model will rank a random positive instance higher than a random negative one.</li>
    </ul>

    <h2 id="regression">2. Regression Metrics</h2>
    
    <div class="step-box"><span class="step-num">1</span><div><strong>MAE (Robust):</strong> Average absolute difference. \(\frac{1}{n} \sum |y - \hat{y}|\).</div></div>
    <div class="step-box"><span class="step-num">2</span><div><strong>MSE (Square Penalty):</strong> Squaring large errors. \(\frac{1}{n} \sum (y - \hat{y})^2\).</div></div>

    <h2 id="mae-mse-example">4. Illustrative Example: MAE vs. MSE</h2>
    <div class="example-box">
      <h4>Problem: Impact of Outliers</h4>
      <p>A model predicts house prices. For 3 houses, errors are: [\$1k, \$2k, \$10k]. Compare metrics.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>MAE:</strong> \((1 + 2 + 10) / 3 = 4.33\text{k}\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>MSE:</strong> \((1^2 + 2^2 + 10^2) / 3 = (1 + 4 + 100) / 3 = 35\text{k}\).</div></div>

      <div class="callout focus"><div class="callout-icon">🎯</div><div class="callout-body"><strong>Insight:</strong> The outlier (10k error) dominates the <strong>MSE</strong> due to the squaring effect (\(100/35\) vs \(10/4.33\)). Use MSE when large errors are unacceptable (e.g., self-driving safety); use MAE when you want to ignore noise.</div></div>
    </div>

    <h2 id="cross-entropy">5. Probabilistic Metric: Cross-Entropy</h2>
    <p>In Deep Learning, we don't just want a label; we want <strong>Confidence</strong>.</p>
    <div class="math-block">$$\text{Loss} = -\sum_{i=1}^{M} y_i \log(\hat{y}_i)$$</div>

    <h2 id="implementation">Python Implementation</h2>
    <python-code>
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, mean_squared_error, log_loss
import numpy as np

# Classification Example
y_true = [1, 0, 1, 1, 0, 1]
y_pred = [1, 0, 1, 0, 0, 1]

print(f"Accuracy: {accuracy_score(y_true, y_pred):.2f}")
print(f"F1-Score: {f1_score(y_true, y_pred):.2f}")

# Regression Example
y_actual = [3.0, -0.5, 2.0, 7.0]
y_predicted = [2.5, 0.0, 2.1, 7.8]
print(f"MSE: {mean_squared_error(y_actual, y_predicted):.2f}")

# Cross-Entropy (Log Loss) Example
y_true_prob = [1, 0]
y_pred_prob = [[0.9, 0.1], [0.2, 0.8]]
print(f"Cross-Entropy Loss: {log_loss(y_true_prob, y_pred_prob):.4f}")
    </python-code>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Complexity Analysis:</strong>
        <ul>
          <li><strong>Time Complexity:</strong> $O(N)$ where $N$ is samples.</li>
          <li><strong>Space Complexity:</strong> $O(N)$ to store true and predicted vectors.</li>
        </ul>
      </div>
    </div>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Accuracy</strong> is dangerous for imbalanced data.</li>
      <li><strong>MSE</strong> is preferred for optimization, but <strong>MAE</strong> is better for reporting if outliers are present.</li>
      <li><strong>Cross-Entropy</strong> is the standard for training Neural Networks.</li>
    </ul>

    <div class="linking-rule">
      <strong>Congratulations!</strong> You have completed the Statistics module. Next, enter the engine of optimization: <strong><a href="#/mathematics/calculus/basics">Calculus</a></strong>.
    </div>
  `
};
