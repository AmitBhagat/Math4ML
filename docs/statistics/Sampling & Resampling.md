In Machine Learning, we rarely have access to the entire population of data. **Sampling** and **Resampling** methods allow us to estimate the uncertainty of our models and ensure they generalize well to unseen data.

---

## 1. Bootstrapping

Bootstrapping is a statistical method that involves drawing repeated samples from a dataset **with replacement**.

### Core Concept
If we have a dataset $D$ of size $n$, a bootstrap sample is created by picking $n$ elements from $D$, where each element can be picked more than once.

**Mathematical Representation:**
Probability of an item *not* being picked in a bootstrap sample of size $n$:
$$P(\text{not picked}) = \left(1 - \frac{1}{n}\right)^n$$
As $n \to \infty$, this probability approaches $\frac{1}{e} \approx 0.368$.
* **In-bag samples:** $\approx 63.2\%$ of unique data.
* **Out-of-bag (OOB) samples:** $\approx 36.8\%$ of data (used for testing).



### ML Application: Random Forest
Random Forests use **Bagging** (Bootstrap Aggregating). Each tree is trained on a different bootstrap sample to reduce the overall variance of the model.

---

## 2. Cross-Validation (CV)

Cross-Validation is a resampling procedure used to evaluate machine learning models on a limited data sample.

### K-Fold Cross-Validation
1.  Split the data into $k$ equal-sized folds.
2.  Train the model on $k-1$ folds and test it on the remaining $1$ fold.
3.  Repeat this process $k$ times, each time using a different fold as the test set.
4.  The final performance is the average of all $k$ iterations.

**Mathematical Average Performance:**
$$\text{Performance}_{CV} = \frac{1}{k} \sum_{i=1}^{k} \text{Score}_i$$



### Types of CV:
* **LOOCV (Leave-One-Out):** $k=n$ (one data point per fold). High computational cost but low bias.
* **Stratified K-Fold:** Ensures each fold has the same percentage of samples of each target class as the complete set. (Crucial for imbalanced data).

---

## Mathematical Example: Bootstrap Mean Estimation

**Problem:** Given a dataset $X = [10, 20, 30]$, calculate one possible bootstrap sample and the probability that the value '10' is excluded from a sample of size $n=3$.

**Solution:**
1.  **Possible Bootstrap Samples:** Since we sample with replacement, a sample could be $[10, 10, 30]$ or $[20, 10, 30]$, etc.
2.  **Probability of Exclusion:**
    For $n=3$, the probability of not picking '10' in one draw is $2/3$.
    For 3 draws:
    $$P(\text{Exclusion}) = \left(\frac{2}{3}\right)^3 = \frac{8}{27} \approx 0.296 \text{ (29.6%)}$$

---

## Python Implementation

We will use `scikit-learn` to demonstrate a Stratified K-Fold split.

```python
import numpy as np
from sklearn.model_selection import KFold, StratifiedKFold
from sklearn.utils import resample

# 1. Bootstrapping Manual Implementation
data = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
boot = resample(data, replace=True, n_samples=5, random_state=1)
print(f"Bootstrap Sample: {boot}")

# 2. K-Fold Cross Validation
X = np.array([[1, 2], [3, 4], [1, 2], [3, 4], [5, 6], [7, 8]])
y = np.array([0, 0, 1, 1, 1, 1])

kf = KFold(n_splits=3)
print("\nK-Fold Iterations:")
for train_index, test_index in kf.split(X):
    print(f"TRAIN: {train_index} TEST: {test_index}")

# 3. Stratified K-Fold (Preserves Class Balance)
skf = StratifiedKFold(n_splits=2)
print("\nStratified K-Fold Iterations:")
for train_index, test_index in skf.split(X, y):
    print(f"TRAIN: {train_index} TEST: {test_index}")
```

---

## Complexity Analysis
* **Time Complexity:** * Bootstrap: $O(n)$ to sample.
    * K-Fold: $O(k \cdot \text{Cost of Training})$, where $k$ is the number of folds.
* **Space Complexity:** $O(n)$ to store the indices or the resampled data.

### Key Takeaways
* **Bootstrapping** is best for estimating confidence intervals and building ensemble models (Bagging).
* **Cross-Validation** is the gold standard for model selection and hyperparameter tuning.
* Use **Stratified K-Fold** whenever you are dealing with classification to prevent "unlucky" folds that miss an entire class.

Now that we've covered the statistical foundations, shall we transition to **Linear Algebra** (Vectors, Matrices, and Matrix Decomposition) for your **Math4ML** project?