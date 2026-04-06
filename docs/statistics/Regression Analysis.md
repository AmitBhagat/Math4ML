Regression Analysis is a supervised learning technique used to model the relationship between a **Dependent Variable** ($Y$) and one or more **Independent Variables** ($X$). In the GeeksforGeeks pattern, this is the foundational algorithm for predictive modeling.

---

## 1. Linear Regression

Linear Regression assumes a linear relationship between the input variables and the single output variable.

### Mathematical Representation
The model represented by the following equation:
$$Y = \beta_0 + \beta_1 X + \epsilon$$

* $Y$: Dependent Variable (Target)
* $X$: Independent Variable (Predictor)
* $\beta_0$: Intercept (Value of $Y$ when $X=0$)
* $\beta_1$: Slope (Change in $Y$ for a unit change in $X$)
* $\epsilon$: Random Error (Noise)

### Cost Function: Mean Squared Error (MSE)
To find the best $\beta_0$ and $\beta_1$, we minimize the sum of squared differences between predicted and actual values:
$$J(\beta_0, \beta_1) = \frac{1}{n} \sum_{i=1}^{n} (y_i - (\beta_0 + \beta_1 x_i))^2$$



---

## 2. Residuals

A **Residual** ($e$) is the difference between the observed value ($y$) and the predicted value ($\hat{y}$) from the regression line.

### Mathematical Formula
$$e_i = y_i - \hat{y}_i$$

**Properties of Residuals:**
1.  The sum of residuals in an OLS (Ordinary Least Squares) model is always zero: $\sum e_i = 0$.
2.  **Residual Plot:** A scatter plot of residuals against the predicted values. If the plot shows a pattern (e.g., a curve), the linear model is inappropriate for the data (**Heteroscedasticity**).



---

## 3. R-Squared ($R^2$) - Coefficient of Determination

$R^2$ is a statistical measure that represents the proportion of the variance for a dependent variable that's explained by an independent variable.

### Mathematical Derivation
$$R^2 = 1 - \frac{SS_{res}}{SS_{tot}}$$

Where:
* **$SS_{res}$ (Sum of Squares of Residuals):** $\sum (y_i - \hat{y}_i)^2$ — The "unexplained" variance.
* **$SS_{tot}$ (Total Sum of Squares):** $\sum (y_i - \bar{y})^2$ — The total variance in the data.

**Interpretation:**
* $R^2 = 1$: The model explains all the variability.
* $R^2 = 0$: The model explains none of the variability (equivalent to predicting the mean).

---

## Mathematical Example with Solution

**Problem:** Given the dataset: $X = [1, 2, 3]$ and $Y = [2, 4, 5]$. Find the regression line $Y = \beta_0 + \beta_1 X$ and calculate the Residual for $X=2$.

**Solution:**
1.  **Calculate Means:** $\bar{X} = 2$, $\bar{Y} = 3.67$.
2.  **Calculate Slope ($\beta_1$):**
    $$\beta_1 = \frac{\sum (x_i - \bar{X})(y_i - \bar{Y})}{\sum (x_i - \bar{X})^2} = \frac{(1-2)(2-3.67) + (2-2)(4-3.67) + (3-2)(5-3.67)}{(1-2)^2 + (0)^2 + (3-2)^2}$$
    $$\beta_1 = \frac{1.67 + 0 + 1.33}{1 + 1} = \frac{3}{2} = 1.5$$
3.  **Calculate Intercept ($\beta_0$):**
    $$\beta_0 = \bar{Y} - \beta_1 \bar{X} = 3.67 - (1.5 \times 2) = 0.67$$
4.  **Prediction for $X=2$:** $\hat{y} = 0.67 + 1.5(2) = 3.67$.
5.  **Residual for $X=2$:** $e = y - \hat{y} = 4 - 3.67 = 0.33$.

---

## Python Implementation

Using `scikit-learn` and `numpy` for regression analysis.

```python
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_squared_error

# Data Preparation
X = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)
y = np.array([2, 4, 5, 4, 5])

# Model Initialization and Training
model = LinearRegression()
model.fit(X, y)

# Predictions
y_pred = model.predict(X)

# Evaluation Metrics
r2 = r2_score(y, y_pred)
residuals = y - y_pred

print(f"Regression Equation: Y = {model.intercept_:.2f} + {model.coef_[0]:.2f}X")
print(f"R-Squared Score: {r2:.4f}")
print(f"Residuals: {residuals}")
```

---

## Complexity Analysis
* **Time Complexity:** $O(p^2 n + p^3)$ for the Normal Equation, where $n$ is the number of samples and $p$ is the number of features.
* **Space Complexity:** $O(np)$ to store the feature matrix.

### Key Takeaways for ML
* **Linear Regression** is a high-bias, low-variance model (usually).
* **R-Squared** can be misleading in Multiple Regression; use **Adjusted R-Squared** instead to penalize unnecessary features.
* Checking **Residuals** is a mandatory step in model validation to ensure the "Linearity" assumption holds.