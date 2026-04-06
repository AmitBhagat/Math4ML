The **Gaussian Distribution**, also known as the **Normal Distribution**, is the most important probability distribution in Statistics and Machine Learning. In the GFG technical pattern, here is the complete deep-dive.

---

## 1. Theory
The Gaussian distribution is a **continuous probability distribution** characterized by a symmetric, bell-shaped curve. It is defined by two parameters:
1.  **Mean ($\mu$):** The center or peak of the distribution.
2.  **Standard Deviation ($\sigma$):** The spread or width of the distribution.

### Why is it critical in AI/ML?
* **Central Limit Theorem (CLT):** The sum of many independent random variables tends toward a Gaussian distribution, regardless of the original distribution.
* **Weight Initialization:** Many Neural Networks initialize weights using a "Truncated Normal" distribution to ensure stable gradients.
* **Error Modeling:** Linear Regression assumes that the mapping errors (residuals) follow a Gaussian distribution.



---

## 2. Mathematical Derivation

### Probability Density Function (PDF)
Unlike discrete distributions (PMF), continuous distributions use a PDF. The probability of a single exact point is zero; we instead measure the area under the curve for an interval.
$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$$

### Properties:
* **Symmetry:** The mean, median, and mode are all equal and located at the center.
* **The 68-95-99.7 Rule:** * **68.3%** of data falls within $1\sigma$ of the mean.
    * **95.4%** of data falls within $2\sigma$ of the mean.
    * **99.7%** of data falls within $3\sigma$ of the mean.



[Image of Normal Distribution 68-95-99.7 rule diagram]


### Standard Normal Distribution ($Z$):
When $\mu = 0$ and $\sigma = 1$, it is called the Standard Normal Distribution. Any Gaussian variable $X$ can be converted to a $Z$-score using:
$$Z = \frac{X - \mu}{\sigma}$$

---

## 3. Example with Solution

**Problem:**
A batch of CPUs has an average clock speed ($\mu$) of 3.5 GHz with a standard deviation ($\sigma$) of 0.2 GHz. Assuming a Gaussian distribution, what is the probability that a randomly selected CPU has a clock speed **greater than 3.9 GHz**?

**Solution:**
1.  **Calculate the Z-score:**
    $$Z = \frac{3.9 - 3.5}{0.2} = \frac{0.4}{0.2} = 2.0$$
2.  **Interpret the Z-score:**
    A Z-score of 2.0 means the value is 2 standard deviations above the mean.
3.  **Apply the Empirical Rule:**
    We know 95.4% of data is within $\pm 2\sigma$. Therefore, 4.6% of the data is outside this range (in the tails). Since the distribution is symmetric, only half of that (2.3%) is in the upper tail.
4.  **Result:** There is a **2.3%** probability that the clock speed is greater than 3.9 GHz.

---

## 4. Python Implementation

We use `numpy` for data generation and `scipy.stats` for the PDF and CDF calculations.

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm

# 1. Define Parameters
mu = 0      # Mean
sigma = 1   # Standard Deviation

# 2. Generate data points for the x-axis
x = np.linspace(mu - 4*sigma, mu + 4*sigma, 100)

# 3. Calculate PDF values
y = norm.pdf(x, mu, sigma)

# 4. Visualization
plt.figure(figsize=(10, 6))
plt.plot(x, y, label=f'Normal Dist (μ={mu}, σ={sigma})', color='blue', linewidth=2)
plt.fill_between(x, y, alpha=0.2, color='blue')

# Adding labels for the 68-95-99.7 rule
plt.axvline(mu, color='red', linestyle='--', label='Mean (μ)')
plt.title('Gaussian (Normal) Distribution PDF')
plt.xlabel('Value (x)')
plt.ylabel('Probability Density')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()

# 5. Calculating Cumulative Probability (CDF)
# What is the probability that X <= 1.5?
prob_less_than_1_5 = norm.cdf(1.5, mu, sigma)
print(f"P(X <= 1.5): {prob_less_than_1_5:.4f}")
```

---

### Machine Learning Context: Log-Likelihood
In Linear Regression, when we minimize the **Mean Squared Error (MSE)**, we are actually performing **Maximum Likelihood Estimation (MLE)** under the assumption that the data noise follows a Gaussian distribution. This bridge between calculus (optimization) and probability (modeling) is the core of your **Math4ML** journey.

Would you like to finish this series with the **Poisson Distribution**, which is often used for modeling events like server requests or packet arrivals?