To round out the discrete distributions for your **Math4ML** project, the **Multinomial Distribution** is the multi-category extension of the Binomial distribution. If the Categorical distribution is a single roll of a $K$-sided die, the Multinomial distribution describes the outcome of rolling that die $n$ times.

In the GFG technical pattern, here is the complete deep-dive.

---

## 1. Theory
The Multinomial distribution models the probability of counts for each of $K$ categories in $n$ independent trials. Each trial results in exactly one of the $K$ categories, with fixed probabilities $p_1, p_2, \dots, p_K$.

### Core Characteristics:
* **Extension:** It generalizes the Binomial distribution from 2 outcomes to $K$ outcomes.
* **Independent Trials:** Each of the $n$ trials is independent.
* **Sum of Probabilities:** $\sum_{i=1}^{K} p_i = 1$.
* **Sum of Counts:** If $x_i$ is the number of times category $i$ occurs, then $\sum_{i=1}^{K} x_i = n$.

In Machine Learning, this is used in **Natural Language Processing (NLP)**. For example, the "Bag of Words" model treats a document as a Multinomial distribution over a vocabulary of $K$ words.

---

## 2. Mathematical Derivation

### Probability Mass Function (PMF)
The probability of observing a specific set of counts $x_1, x_2, \dots, x_K$ is:
$$P(X_1=x_1, \dots, X_K=x_k) = \frac{n!}{x_1! x_2! \dots x_K!} p_1^{x_1} p_2^{x_2} \dots p_K^{x_K}$$

Where:
* $\frac{n!}{x_1! \dots x_K!}$ is the **Multinomial Coefficient**, representing the number of ways to arrange the outcomes.
* $p_i^{x_i}$ is the probability of category $i$ occurring exactly $x_i$ times.

### Properties:
* **Mean ($E[x_i]$):** $n \cdot p_i$
* **Variance ($Var(x_i)$):** $n \cdot p_i(1 - p_i)$
* **Covariance ($Cov(x_i, x_j)$):** $-n \cdot p_i \cdot p_j$ (This is negative because if one category occurs more often, the others must occur less often to sum to $n$).



---

## 3. Example with Solution

**Problem:**
A sentiment analysis model classifies social media posts into three categories: [Positive, Neutral, Negative] with probabilities $p = [0.4, 0.4, 0.2]$. In a batch of **10 posts** ($n=10$), what is the probability that exactly **5 are Positive, 3 are Neutral, and 2 are Negative**?

**Solution:**
1.  **Identify Parameters:** $n=10, x_1=5, x_2=3, x_3=2, p_1=0.4, p_2=0.4, p_3=0.2$.
2.  **Apply PMF:**
    $$P = \frac{10!}{5! 3! 2!} (0.4)^5 (0.4)^3 (0.2)^2$$
3.  **Calculation:**
    * Multinomial Coefficient: $\frac{3,628,800}{120 \cdot 6 \cdot 2} = 2,520$
    * Probability terms: $(0.01024) \cdot (0.064) \cdot (0.04) \approx 0.0000262$
    $$P = 2,520 \cdot 0.0000262 \approx 0.066$$
4.  **Result:** There is a **6.6%** probability of this exact distribution in the batch.

---

## 4. Python Implementation

Using `numpy` to simulate trials and `scipy.stats` for the PMF calculation.

```python
import numpy as np
from scipy.stats import multinomial

# 1. Define Parameters
n = 10  # Total trials
p = [0.4, 0.4, 0.2]  # Probabilities for Positive, Neutral, Negative

# 2. Calculate the PMF for a specific outcome [5, 3, 2]
target_counts = [5, 3, 2]
prob = multinomial.pmf(target_counts, n, p)
print(f"Probability of outcome {target_counts}: {prob:.4f}")

# 3. Simulate 5 random batches of 10 posts
samples = multinomial.rvs(n, p, size=5)
print("\nRandomly generated batches:")
print("Pos | Neu | Neg")
print("-" * 15)
print(samples)

# 4. Verification: Each row must sum to n
print(f"\nRow sums (should be {n}): {samples.sum(axis=1)}")
```

---

