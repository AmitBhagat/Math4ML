Evaluation metrics are the compass for a Machine Learning engineer. They tell us not just "if" a model is working, but "how" it is failing. We categorize these into **Classification Metrics** (for discrete labels) and **Regression Metrics** (for continuous values).

---

## 1. Classification Metrics (The Confusion Matrix)

Most classification metrics are derived from the **Confusion Matrix**, which compares Predicted vs. Actual labels.



### A. Core Formulas
1.  **Accuracy:** The ratio of correct predictions to total predictions.
    $$\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}$$
2.  **Precision (Exactness):** Of all predicted positives, how many were actually positive?
    $$\text{Precision} = \frac{TP}{TP + FP}$$
3.  **Recall (Completeness):** Of all actual positives, how many did we catch?
    $$\text{Recall} = \frac{TP}{TP + FN}$$
4.  **F1-Score:** The harmonic mean of Precision and Recall. Use this when you have an imbalanced dataset.
    $$F1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$$

### B. ROC-AUC
* **ROC Curve:** A plot of **True Positive Rate** (Recall) vs. **False Positive Rate** ($FP / (FP + TN)$) at various threshold settings.
* **AUC (Area Under Curve):** Represents the probability that a model will rank a random positive instance higher than a random negative one.



---

## 2. Regression Metrics

### A. Mean Absolute Error (MAE)
The average of the absolute differences between predictions and actual values. It is robust to outliers.
$$\text{MAE} = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|$$

### B. Mean Squared Error (MSE)
The average of the squared differences. It penalizes large errors more heavily than MAE due to the squaring term.
$$\text{MSE} = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$$

---

## 3. Probabilistic Metric: Cross-Entropy

In Deep Learning, we don't just want a label; we want the probability. **Cross-Entropy** measures the performance of a classification model whose output is a probability value between 0 and 1.

$$\text{Loss} = -\sum_{i=1}^{M} y_i \log(\hat{y}_i)$$

* If the predicted probability $\hat{y}_i$ for the true class $y_i$ is close to 1, the loss is low.
* If it is close to 0, the loss approaches infinity.

---

## Mathematical Example: Precision vs. Recall

**Problem:** A cancer detection model predicts 100 patients.
* Actual Cancer: 10 patients.
* Model predicts Cancer for: 15 patients.
* Correct Cancer predictions (TP): 8.

**Solution:**
1.  **Identify counts:** $TP=8$, $FP=7$ (15 total predicted - 8 correct), $FN=2$ (10 total actual - 8 caught).
2.  **Calculate Precision:** $8 / (8 + 7) = 0.53$ (53%).
3.  **Calculate Recall:** $8 / (8 + 2) = 0.80$ (80%).
4.  **Conclusion:** The model has high recall (catches most cancer) but low precision (many false alarms).

---

## Python Implementation

```python
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, mean_squared_error, log_loss
import numpy as np

# Classification Example
y_true = [1, 0, 1, 1, 0, 1]
y_pred = [1, 0, 1, 0, 0, 1] # Model missed one positive (FN)

print(f"Accuracy: {accuracy_score(y_true, y_pred):.2f}")
print(f"F1-Score: {f1_score(y_true, y_pred):.2f}")

# Regression Example
y_actual = [3.0, -0.5, 2.0, 7.0]
y_predicted = [2.5, 0.0, 2.1, 7.8]

print(f"MSE: {mean_squared_error(y_actual, y_predicted):.2f}")

# Cross-Entropy (Log Loss) Example
y_true_prob = [1, 0]
y_pred_prob = [[0.9, 0.1], [0.2, 0.8]] # Probabilities for Class 0 and Class 1
print(f"Cross-Entropy Loss: {log_loss(y_true_prob, y_pred_prob):.4f}")
```

---

## Complexity Analysis
* **Time Complexity:** $O(N)$ where $N$ is the number of samples.
* **Space Complexity:** $O(N)$ to store the true and predicted vectors.

### Key Takeaways
* **Accuracy** is dangerous for imbalanced data (e.g., fraud detection).
* **MSE** is preferred for optimization (differentiation is easier), but **MAE** is better for reporting if outliers are present.
* **Cross-Entropy** is the standard for training Neural Networks.

Since we have finished the core **Statistics and Metrics** module, would you like to move into **Linear Algebra** (Matrices, Vectors, SVD) for your **Math4ML** project?