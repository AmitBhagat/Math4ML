Following the GFG technical pattern, here is a deep-dive into the four essential distributions. We will bridge the gap between pure statistics and how these are implemented in Machine Learning.

---

## 1. Bernoulli Distribution
**The simplest discrete distribution for binary classification.**

### Theory
A Bernoulli trial is a random experiment with exactly two outcomes: "Success" (1) and "Failure" (0). It is the foundation of the **Sigmoid** output layer in neural networks.

### Mathematical Derivation
* **PMF:** $P(X = x) = p^x (1-p)^{1-x}$ where $x \in \{0, 1\}$.
* **Mean ($E[X]$):** $\sum x \cdot P(x) = (0 \cdot (1-p)) + (1 \cdot p) = p$.
* **Variance ($Var(X)$):** $E[X^2] - (E[X])^2 = p - p^2 = p(1-p)$.

### Example & Solution
**Problem:** A model predicts a 70% chance ($p=0.7$) that an image is a "Cat". What is the probability that the image is actually "Not a Cat"?
**Solution:**
Using PMF for $x=0$:
$P(X=0) = 0.7^0 (1-0.7)^{1-0} = 1 \cdot 0.3 = 0.3$ (or 30%).

### Python Implementation
```python
import numpy as np
from scipy.stats import bernoulli

p = 0.7
# Generate random samples
samples = bernoulli.rvs(p, size=10)
print(f"Bernoulli Samples: {samples}")
# Probability Mass Function at x=1
print(f"P(Success): {bernoulli.pmf(1, p)}")
```

---

## 2. Binomial Distribution
**Multiple independent Bernoulli trials.**

### Theory
If you perform $n$ independent Bernoulli trials, the Binomial distribution tells you the probability of getting exactly $k$ successes.

### Mathematical Derivation
* **PMF:** $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$
* **Mean:** $np$
* **Variance:** $np(1-p)$

### Example & Solution
**Problem:** An AI model has a 90% accuracy ($p=0.9$). In a batch of 10 images ($n=10$), what is the probability that exactly 8 are correct?
**Solution:**
$P(X=8) = \binom{10}{8} (0.9)^8 (0.1)^2 = 45 \cdot 0.4304 \cdot 0.01 \approx 0.1937$ (19.37%).



### Python Implementation
```python
from scipy.stats import binom

n, p = 10, 0.9
# Probability of exactly 8 successes
prob_8 = binom.pmf(8, n, p)
print(f"Probability of 8 correct: {prob_8:.4f}")
```

---

## 3. Poisson Distribution
**Modeling events per unit of time/space.**

### Theory
Used when we know the average rate ($\lambda$) but the timing of events is random. In tech, this models server traffic or packet loss.

### Mathematical Derivation
* **PMF:** $P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}$
* **Mean:** $\lambda$
* **Variance:** $\lambda$

### Example & Solution
**Problem:** A server receives an average of 5 requests/sec ($\lambda=5$). What is the probability it receives exactly 3 requests in the next second?
**Solution:**
$P(X=3) = \frac{5^3 e^{-5}}{3!} = \frac{125 \cdot 0.0067}{6} \approx 0.1404$ (14.04%).



### Python Implementation
```python
from scipy.stats import poisson

lam = 5
# Probability of 3 events
print(f"P(X=3) for lambda=5: {poisson.pmf(3, lam):.4f}")
```

---

## 4. Gaussian (Normal) Distribution
**The most critical distribution for Deep Learning.**

### Theory
Defined by the "Bell Curve." Most natural phenomena (heights, errors) follow this. In ML, we assume residuals (errors) are Gaussian.

### Mathematical Derivation
* **PDF:** $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}(\frac{x-\mu}{\sigma})^2}$
* **Mean:** $\mu$
* **Variance:** $\sigma^2$

### Example & Solution
**Problem:** Standardize a value $x=110$ where the mean $\mu=100$ and $\sigma=10$.
**Solution:**
Using the Z-score formula: $Z = \frac{x - \mu}{\sigma} = \frac{110 - 100}{10} = 1.0$.
This means the value is 1 standard deviation above the mean.



### Python Implementation
```python
import matplotlib.pyplot as plt
from scipy.stats import norm

mu, sigma = 0, 0.1 # Mean and standard deviation
s = np.random.normal(mu, sigma, 1000)

# Verify the mean and variance
print(f"Sample Mean: {np.mean(s):.4f}")
print(f"Sample Std: {np.std(s):.4f}")

# Plotting
count, bins, ignored = plt.hist(s, 30, density=True)
plt.plot(bins, 1/(sigma * np.sqrt(2 * np.pi)) * np.exp( - (bins - mu)**2 / (2 * sigma**2) ), color='r')
plt.show()
```

---

## Comparison Summary Table

| Distribution | Application in ML | Type | Key Feature |
| :--- | :--- | :--- | :--- |
| **Bernoulli** | Binary Classification (Sigmoid) | Discrete | Success/Failure only |
| **Binomial** | Batch Error Analysis | Discrete | Fixed number of trials |
| **Poisson** | Traffic/Event Prediction | Discrete | Events in fixed time |
| **Gaussian** | Weight Init, Linear Regression | Continuous | Central Limit Theorem |

Since you're working on your **Math4ML** project, would you like to see how we use the **Gaussian PDF** to derive the **Maximum Likelihood Estimation (MLE)** for Linear Regression?