To wrap up your **Math4ML** deep-dive, the **Poisson Distribution** is the go-to model for "event counting" in fixed intervals. In the GeeksforGeeks (GFG) technical pattern, here is the complete breakdown.

---

## 1. Theory
The Poisson distribution is a **discrete probability distribution** that expresses the probability of a given number of events occurring in a fixed interval of time or space. 

### Core Characteristics:
* **Independence:** Events occur independently. The timing of one event does not affect the probability of another.
* **Constant Rate:** The average number of events per interval ($\lambda$) is constant.
* **Discrete Outcomes:** Outcomes are integers ($0, 1, 2, \dots$); you cannot have half an event.

In Machine Learning and DevOps, it is used to model **Server Load** (requests per minute), **Network Traffic** (packets per second), or **Anomaly Detection** (number of failed login attempts).



---

## 2. Mathematical Derivation

### Probability Mass Function (PMF)
If the average number of occurrences per interval is $\lambda$ (Lambda), the probability of observing exactly $k$ events is:
$$P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}$$
Where:
* $e$ is Euler's number ($\approx 2.71828$).
* $k!$ is the factorial of $k$.
* $\lambda$ is both the **mean** and the **variance**.

### Properties:
* **Mean ($E[X]$):** $\lambda$
* **Variance ($Var(X)$):** $\lambda$
* **Skewness:** Always positive (right-skewed), but becomes more symmetric as $\lambda$ increases.

---

## 3. Example with Solution

**Problem:**
A cloud server receives an average of **4 requests per second** ($\lambda = 4$). What is the probability that the server receives **exactly 2 requests** in a given second?

**Solution:**
1.  **Identify Parameters:** $\lambda = 4, k = 2$.
2.  **Apply PMF Formula:**
    $$P(X=2) = \frac{4^2 \cdot e^{-4}}{2!}$$
3.  **Calculation:**
    * $4^2 = 16$
    * $e^{-4} \approx 0.0183$
    * $2! = 2$
    $$P(X=2) = \frac{16 \cdot 0.0183}{2} = 8 \cdot 0.0183 = 0.1464$$
4.  **Result:** There is a **14.64%** chance of receiving exactly 2 requests.

---

## 4. Python Implementation

This script calculates the PMF and visualizes how the distribution spreads as the average rate ($\lambda$) increases.

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import poisson

# 1. Define the average rate (Lambda)
lam = 4

# 2. Calculate Statistics
mean, var = poisson.stats(lam, moments='mv')
print(f"Mean: {mean}, Variance: {var}")

# 3. Generate PMF values for 0 to 15 events
k_values = np.arange(0, 16)
pmf_values = poisson.pmf(k_values, lam)

# 4. Visualization
plt.figure(figsize=(10, 6))
plt.stem(k_values, pmf_values, basefmt=" ", label=f'Poisson (λ={lam})')
plt.title(f'Poisson Distribution PMF (λ={lam})')
plt.xlabel('Number of Events (k)')
plt.ylabel('Probability P(X=k)')
plt.xticks(k_values)
plt.grid(axis='y', alpha=0.3)
plt.legend()
plt.show()

# 5. Real-world Check: Probability of "Overload"
# What is the probability of receiving more than 6 requests?
prob_over_6 = 1 - poisson.cdf(6, lam)
print(f"Probability of >6 requests: {prob_over_6:.4f}")
```

---
