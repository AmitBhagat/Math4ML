The **Categorical Distribution**, also known as the **Multinoulli Distribution**, is a generalization of the Bernoulli distribution. While Bernoulli handles two outcomes (Binary), the Categorical distribution handles $K$ possible outcomes (Multiclass). 

In the GFG technical pattern, here is the complete deep-dive.

---

## 1. Theory
The Categorical distribution is a **discrete probability distribution** that describes the result of a random variable that can take on one of $K$ possible categories. 

### Core Characteristics:
* **Single Trial:** Like Bernoulli, it represents a single trial.
* **Mutually Exclusive:** The variable can belong to exactly one category (e.g., an image is either a "Dog", "Cat", or "Bird").
* **Parameters:** It is defined by a vector of probabilities $\mathbf{p} = [p_1, p_2, \dots, p_K]$, where $p_i$ is the probability of the $i$-th category.
* **Constraint:** All probabilities must sum to 1: $\sum_{i=1}^{K} p_i = 1$.

In Deep Learning, the output of a **Softmax activation function** represents the parameters of a Categorical distribution.



---

## 2. Mathematical Derivation

### Probability Mass Function (PMF)
To represent the PMF, we often use **one-hot encoding**. Let $\mathbf{x}$ be a vector where $x_i = 1$ if the outcome is category $i$, and $0$ otherwise.
$$P(\mathbf{x} | \mathbf{p}) = \prod_{i=1}^{K} p_i^{x_i}$$

### Mean and Variance
The Categorical distribution is usually analyzed component-wise:
* **Mean ($E[x_i]$):** $p_i$
* **Variance ($Var(x_i)$):** $p_i(1 - p_i)$

### Connection to Multinomial Distribution
Just as the Binomial distribution is $n$ trials of a Bernoulli, the **Multinomial distribution** is $n$ trials of a Categorical distribution.

---

## 3. Example with Solution

**Problem:**
A Neural Network is classifying an image into three categories: [Cloud, Rain, Sun]. The Softmax layer outputs the probability vector $\mathbf{p} = [0.1, 0.7, 0.2]$. 
1.  Verify if this is a valid Categorical distribution.
2.  What is the probability that the actual label is "Rain"?
3.  Calculate the variance for the "Cloud" category.

**Solution:**
1.  **Verification:** $\sum p_i = 0.1 + 0.7 + 0.2 = 1.0$. It is valid.
2.  **Probability of Rain:** $p_2 = 0.7$ (or 70%).
3.  **Variance of Cloud ($p_1$):**
    $$Var(x_1) = p_1(1 - p_1) = 0.1(0.9) = 0.09$$

---

## 4. Python Implementation

We simulate a multiclass classification output using `numpy` and `scipy`.

```python
import numpy as np
from scipy.stats import multinomial
import matplotlib.pyplot as plt

# 1. Define probabilities for K=4 categories
# Example: [Apple, Banana, Orange, Grape]
p = [0.1, 0.5, 0.3, 0.1]
categories = ['Apple', 'Banana', 'Orange', 'Grape']

# 2. Simulate a single trial (Categorical)
# n=1 makes Multinomial equivalent to Categorical
sample = np.random.multinomial(1, p)
result_index = np.argmax(sample)

print(f"One-hot encoded result: {sample}")
print(f"Selected Category: {categories[result_index]}")

# 3. Visualization of the Distribution
plt.figure(figsize=(8, 5))
plt.bar(categories, p, color='teal')
plt.title('Categorical Distribution (Softmax Output)')
plt.ylabel('Probability')
plt.ylim(0, 1)

for i, val in enumerate(p):
    plt.text(i, val + 0.02, str(val), ha='center')

plt.show()
```

---

## 5. Machine Learning Context: Categorical Cross-Entropy

When training a multiclass model, we use the **Categorical Cross-Entropy (CCE)** loss. This is derived by taking the negative log-likelihood of the Categorical PMF:
$$\text{Loss} = -\sum_{i=1}^{K} y_i \log(\hat{y}_i)$$
Where $y_i$ is the true label (one-hot) and $\hat{y}_i$ is the predicted probability.

| Feature | Bernoulli | Categorical |
| :--- | :--- | :--- |
| **Number of Outcomes** | 2 | $K$ |
| **Activation Function** | Sigmoid | Softmax |
| **Loss Function** | Binary Cross-Entropy | Categorical Cross-Entropy |

Since you are building a website for your **Math4ML** journey, this distribution is essential for explaining how **Transformers** and **CNNs** make final decisions. Would you like to move on to the **Multivariate Gaussian**, or perhaps dive into the **Likelihood** math behind these losses?