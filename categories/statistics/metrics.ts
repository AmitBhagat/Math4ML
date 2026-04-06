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
      <a href="#classification">1. Classification Metrics (Confusion Matrix)</a>
      <a href="#regression">2. Regression Metrics</a>
      <a href="#cross-entropy">3. Probabilistic Metric: Cross-Entropy</a>
      <a href="#example">Mathematical Example: Precision vs. Recall</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <h2 id="classification">1. Classification Metrics (The Confusion Matrix)</h2>
    <p>Most classification metrics are derived from the <strong>Confusion Matrix</strong>, which compares Predicted vs. Actual labels.</p>
    
    <div class="def-box">
      <div class="def-title">Core Formulas</div>
      <ul style="margin:0">
        <li><strong>Accuracy:</strong> $\frac{TP + TN}{TP + TN + FP + FN}$</li>
        <li><strong>Precision:</strong> Of all predicted positives, how many were actually positive? $\frac{TP}{TP + FP}$</li>
        <li><strong>Recall:</strong> Of all actual positives, how many did we catch? $\frac{TP}{TP + FN}$</li>
        <li><strong>F1-Score:</strong> The harmonic mean of Precision and Recall. $F1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$</li>
      </ul>
    </div>

    <h3>ROC-AUC</h3>
    <ul>
      <li><strong>ROC Curve:</strong> A plot of <strong>True Positive Rate</strong> (Recall) vs. <strong>False Positive Rate</strong> ($FP / (FP + TN)$).</li>
      <li><strong>AUC (Area Under Curve):</strong> Represents the probability that a model will rank a random positive instance higher than a random negative one.</li>
    </ul>

    <h2 id="regression">2. Regression Metrics</h2>
    
    <h3>A. Mean Absolute Error (MAE)</h3>
    <p>The average of the absolute differences between predictions and actual values. It's robust to outliers.</p>
    <div class="math-block">
      $$\text{MAE} = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|$$
    </div>

    <h3>B. Mean Squared Error (MSE)</h3>
    <p>The average of the squared differences. Penalizes large errors more heavily than MAE due to squaring.</p>
    <div class="math-block">
      $$\text{MSE} = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$$
    </div>

    <h2 id="cross-entropy">3. Probabilistic Metric: Cross-Entropy</h2>
    <p>In Deep Learning, we don't just want a label; we want the probability. <strong>Cross-Entropy</strong> measures the performance of a model whose output is a probability between 0 and 1.</p>
    <div class="math-block">
      $$\text{Loss} = -\sum_{i=1}^{M} y_i \log(\hat{y}_i)$$
    </div>
    <ul>
      <li>If predicted probability $\hat{y}_i$ for true class $y_i$ is close to 1, loss is low.</li>
      <li>If it is close to 0, loss approaches infinity.</li>
    </ul>

    <div class="example-box">
      <h4 id="example">Mathematical Example: Precision vs. Recall</h4>
      <p><strong>Problem:</strong> A cancer detection model predicts 100 patients. Actual Cancer: 10. Model predicts Cancer for 15. Correct predictions (TP): 8.</p>
      
      <p><strong>Solution:</strong></p>
      <ol>
        <li><strong>Identify counts:</strong> $TP=8$, $FP=7$ (15-8), $FN=2$ (10-8).</li>
        <li><strong>Precision:</strong> $8 / (8 + 7) = 0.53$ (53%).</li>
        <li><strong>Recall:</strong> $8 / (8 + 2) = 0.80$ (80%).</li>
      </ol>
      <p><strong>Conclusion:</strong> High recall (catches most cancer) but low precision (many false alarms).</p>
    </div>

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
