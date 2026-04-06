In the **GeeksforGeeks** technical pattern, here is a complete deep-dive into the **Bernoulli Distribution**, the fundamental building block for binary classification in Machine Learning.

---

## 1. Theory
The Bernoulli distribution is a **discrete probability distribution** for a random variable which has exactly two possible outcomes:
1.  **Success ($x=1$):** Occurs with probability $p$.
2.  **Failure ($x=0$):** Occurs with probability $q = 1 - p$.

In Deep Learning, the output of a **Sigmoid activation function** $\sigma(z)$ is interpreted as the parameter $p$ of a Bernoulli distribution. When we say a model is 85% sure a digit is a "7", we are defining a Bernoulli distribution with $p=0.85$.

---

## 2. Mathematical Derivation

### Probability Mass Function (PMF)
To represent both outcomes in a single equation, we use:
$$P(X = x) = p^x (1-p)^{1-x} \quad \text{for } x \in \{0, 1\}$$

### Mean (Expected Value)
The mean $E[X]$ is the weighted average of all possible outcomes:
$$E[X] = \sum_{i} x_i P(x_i)$$
$$E[X] = (1 \cdot p) + (0 \cdot (1-p)) = p$$

### Variance
Variance measures the spread of the distribution:
$$Var(X) = E[X^2] - (E[X])^2$$
Since $x$ can only be 0 or 1, $x^2 = x$. Thus, $E[X^2] = E[X] = p$.
$$Var(X) = p - p^2 = p(1-p)$$



[Image of Bernoulli distribution probability mass function plot]


---

## 3. Example with Solution

**Problem:**
A Binary Classifier is used to detect fraudulent transactions. For a specific transaction, the model outputs a probability of **0.02** that the transaction is "Fraud" ($x=1$).
1.  Identify the parameters $p$ and $q$.
2.  Calculate the Variance of this prediction.
3.  What is the probability that the transaction is "Not Fraud"?

**Solution:**
1.  **Parameters:**
    * $p = 0.02$ (Probability of Success/Fraud)
    * $q = 1 - p = 0.98$ (Probability of Failure/Not Fraud)
2.  **Variance:**
    * $Var(X) = p(1-p) = 0.02 \times 0.98 = 0.0196$
3.  **Probability of Not Fraud ($x=0$):**
    * Using PMF: $P(X=0) = 0.02^0 \cdot (1-0.02)^{1-0} = 1 \cdot 0.98 = 0.98$

---

## 4. Python Implementation

This script uses `scipy.stats` for statistical calculations and `matplotlib` to visualize the PMF.

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import bernoulli

# 1. Define the parameter (probability of success)
p = 0.3  # Example: 30% chance of success

# 2. Calculate Mean and Variance
mean, var = bernoulli.stats(p, moments='mv')
print(f"Mean: {mean}, Variance: {var}")

# 3. Probability Mass Function (PMF)
x = [0, 1]
pmf_values = bernoulli.pmf(x, p)

# 4. Visualization
plt.bar(x, pmf_values, color=['red', 'green'], width=0.2)
plt.xticks(x, ['Failure (0)', 'Success (1)'])
plt.ylabel('Probability')
plt.title(f'Bernoulli Distribution (p={p})')
plt.ylim(0, 1)
for i, v in enumerate(pmf_values):
    plt.text(i, v + 0.02, str(v), ha='center')
plt.show()

# 5. Generating Random Samples (Simulating 10 trials)
samples = bernoulli.rvs(p, size=10)
print(f"Random Samples from Distribution: {samples}")
```

---

### Machine Learning Context: Binary Cross-Entropy
The **Log-Loss** (Binary Cross-Entropy) used in training neural networks is derived directly from the Bernoulli PMF. By taking the negative log of the PMF, we get:
$$\text{Loss} = -(y \log(p) + (1-y) \log(1-p))$$
This is the standard loss function for logistic regression and binary classification.

Since you're building your **Math4ML** project, would you like to see the derivation of **Binomial Distribution** next, which is essentially just multiple Bernoulli trials added together?