In Machine Learning, **Estimation** is the process of using data to find the most likely parameters ($\theta$) for a model. Whether you are training a Logistic Regression model or a Deep Neural Network, you are essentially performing parameter estimation.

---

## 1. Maximum Likelihood Estimation (MLE)

MLE is a method of estimating the parameters of a probability distribution by maximizing a **likelihood function**, so that under the assumed statistical model, the observed data is most probable.

### Mathematical Derivation
Given a set of independent and identically distributed (i.i.d.) observations $X = \{x_1, x_2, ..., x_n\}$, the likelihood function $L(\theta)$ is:
$$L(\theta) = P(X|\theta) = \prod_{i=1}^{n} P(x_i|\theta)$$
To simplify the calculation (turning products into sums), we take the **Log-Likelihood**:
$$\ell(\theta) = \log L(\theta) = \sum_{i=1}^{n} \log P(x_i|\theta)$$
The MLE estimate $\hat{\theta}_{MLE}$ is found by setting the derivative to zero:
$$\frac{\partial}{\partial \theta} \ell(\theta) = 0$$

### Mathematical Example: Gaussian Mean
**Problem:** Estimate the mean ($\mu$) of a Normal Distribution given data points $\{x_1, x_2, ..., x_n\}$ assuming variance $\sigma^2$ is known.

**Solution:**
1.  **Log-Likelihood for Normal Dist:**
    $$\ell(\mu) = \sum_{i=1}^{n} \log \left( \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x_i-\mu)^2}{2\sigma^2}} \right)$$
2.  **Simplify:**
    $$\ell(\mu) = n \log \left(\frac{1}{\sqrt{2\pi\sigma^2}}\right) - \sum_{i=1}^{n} \frac{(x_i-\mu)^2}{2\sigma^2}$$
3.  **Differentiate w.r.t $\mu$:**
    $$\frac{d}{d\mu} \ell(\mu) = \sum_{i=1}^{n} \frac{(x_i-\mu)}{\sigma^2} = 0$$
4.  **Solve for $\mu$:**
    $$\sum x_i - n\mu = 0 \implies \hat{\mu}_{MLE} = \frac{1}{n} \sum_{i=1}^{n} x_i$$
**Result:** The MLE of the mean is simply the **Sample Mean**.

---

## 2. Maximum A Posteriori (MAP)

MAP is a Bayesian approach. Unlike MLE, which only looks at the data, MAP incorporates a **Prior Distribution** $P(\theta)$, which represents our previous belief about the parameters.

### Mathematical Derivation
Using Bayes' Theorem:
$$P(\theta|X) = \frac{P(X|\theta)P(\theta)}{P(X)}$$
Since $P(X)$ is constant for all $\theta$, we maximize the numerator:
$$\hat{\theta}_{MAP} = \text{argmax}_\theta [ \log P(X|\theta) + \log P(\theta) ]$$
**ML Insight:** In Machine Learning, MAP is the mathematical foundation for **Regularization** (L2 Regularization is equivalent to a Gaussian Prior).

---

## 3. Bias-Variance Tradeoff

This concept explains the "Generalization Error" of a model.

* **Bias:** Error from erroneous assumptions in the learning algorithm (leads to **Underfitting**).
* **Variance:** Error from sensitivity to small fluctuations in the training set (leads to **Overfitting**).

### Mathematical Decomposition of Error
Total Expected Error = $\text{Bias}^2 + \text{Variance} + \text{Irreducible Error}$
$$\text{Error}(x) = E[(f(x) - \hat{f}(x))^2]$$



---

## Python Implementation

We can demonstrate the difference between a high-bias and high-variance model using `scikit-learn`.

```python
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures

# Generate noisy data
np.random.seed(42)
X = np.sort(np.random.rand(20, 1), axis=0)
y = np.sin(2 * np.pi * X) + np.random.randn(20, 1) * 0.1

# 1. High Bias Model (Linear Regression) - Underfitting
model_simple = LinearRegression().fit(X, y)

# 2. High Variance Model (15th Degree Polynomial) - Overfitting
poly = PolynomialFeatures(degree=15)
X_poly = poly.fit_transform(X)
model_complex = LinearRegression().fit(X_poly, y)

print(f"Linear Model Score (Bias): {model_simple.score(X, y):.4f}")
print(f"Complex Model Score (Variance): {model_complex.score(X_poly, y):.4f}")
```

---

## Complexity Analysis
* **Time Complexity:** * MLE/MAP: $O(N)$ for i.i.d data points.
    * Linear Regression: $O(p^2 n + p^3)$ where $p$ is features and $n$ is samples.
* **Space Complexity:** $O(N)$ to store dataset for parameter estimation.

### Key Takeaways
1.  **MLE** chooses $\theta$ that maximizes $P(Data|\theta)$.
2.  **MAP** chooses $\theta$ that maximizes $P(\theta|Data)$.
3.  **Bias-Variance Tradeoff** is the "sweet spot" in model complexity where the sum of bias and variance is minimized.

Would you like to move into **Linear Algebra** now to support your **Math4ML** project, or should we cover **Correlation and Regression** next?