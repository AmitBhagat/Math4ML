## Inferential Statistics for Machine Learning

Inferential statistics allows us to make predictions or "inferences" about a large population based on a representative sample. In Machine Learning, this is crucial for **Feature Selection** (determining if a feature is significant) and **Model Evaluation** (determining if one model is statistically better than another).

---

## 1. Hypothesis Testing

Hypothesis testing is a formal procedure for investigating our ideas about the world using statistics.

### Key Components:
* **Null Hypothesis ($H_0$):** The status quo; assumes no effect or no difference (e.g., "Feature X does not affect the target").
* **Alternative Hypothesis ($H_1$):** What you want to prove (e.g., "Feature X significantly affects the target").
* **P-value:** The probability of obtaining results at least as extreme as the observed results, assuming $H_0$ is true. 
    * **$p < 0.05$**: Reject $H_0$ (Statistically Significant).
    * **$p \ge 0.05$**: Fail to reject $H_0$.

---

## 2. Common Statistical Tests

### A. T-Test
Used to compare the means of two groups.
* **One-sample T-test:** Compares the mean of a sample to a known population mean.
* **Independent Two-sample T-test:** Compares the means of two independent groups.

**Mathematical Formula:**
$$t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}$$
Where $\bar{x}$ is the sample mean, $s^2$ is the variance, and $n$ is the sample size.



### B. Chi-Square Test ($\chi^2$)
Used for categorical data to determine if there is a significant association between two variables (Test of Independence).

**Mathematical Formula:**
$$\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$$
Where $O_i$ is the observed frequency and $E_i$ is the expected frequency.

---

## 3. Confidence Intervals (CI)

A Confidence Interval provides a range of values within which we are confident the true population parameter lies (usually 95%).

**Formula for Population Mean:**
$$CI = \bar{x} \pm z \left( \frac{\sigma}{\sqrt{n}} \right)$$
Where $z$ is the z-score (1.96 for 95% CI) and $\frac{\sigma}{\sqrt{n}}$ is the Standard Error.



[Image of Normal Distribution showing 95% Confidence Interval]


---

## Python Implementation

We use the `scipy.stats` library to perform these tests efficiently.

```python
import numpy as np
from scipy import stats

# 1. T-Test (Independent)
# Comparing the performance of two different ML models on 10-fold cross-validation
model_a_scores = [0.85, 0.88, 0.84, 0.86, 0.87, 0.85, 0.89, 0.84, 0.86, 0.87]
model_b_scores = [0.82, 0.83, 0.81, 0.84, 0.82, 0.83, 0.85, 0.81, 0.82, 0.84]

t_stat, p_val = stats.ttest_ind(model_a_scores, model_b_scores)
print(f"T-statistic: {t_stat:.4f}, P-value: {p_val:.4f}")

# 2. Chi-Square Test
# Association between 'Gender' and 'Buying Preference'
observed = np.array([[30, 10], [20, 25]]) # Contingency table
chi2, p, dof, expected = stats.chi2_contingency(observed)
print(f"Chi-Square P-value: {p:.4f}")

# 3. Confidence Interval
data = [10, 12, 12, 13, 15, 14, 13, 15]
mean = np.mean(data)
sem = stats.sem(data) # Standard error of the mean
ci = stats.t.interval(0.95, len(data)-1, loc=mean, scale=sem)
print(f"95% Confidence Interval for the mean: {ci}")
```

---

## Complexity Analysis

* **Time Complexity:** $O(N)$ for calculating means and variances for the tests.
* **Space Complexity:** $O(N)$ to store the sample data.

## Why it matters in ML?
* **A/B Testing:** To decide if a new model version actually improves user engagement.
* **Feature Selection:** P-values help identify features that have a true mathematical relationship with the output, preventing overfitting on "noise."