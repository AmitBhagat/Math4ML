The **Dirichlet Distribution** is a multivariate continuous probability distribution that generalizes the **Beta distribution**. If the Beta distribution is a "probability of probabilities" for two outcomes (Success/Failure), the Dirichlet is a "probability of probabilities" for $K$ outcomes.

In the GFG technical pattern, here is the complete deep-dive.

---

## 1. Theory
The Dirichlet distribution is defined over a **simplex**, which is a high-dimensional generalization of a triangle. Specifically, it models a vector of probabilities $\mathbf{p} = [p_1, p_2, \dots, p_K]$ where each $p_i \in [0, 1]$ and $\sum p_i = 1$.

### Core Characteristics:
* **Conjugate Prior:** It is the conjugate prior for the **Categorical** and **Multinomial** distributions. 
* **Parameters:** It is defined by a vector of concentration parameters $\mathbf{\alpha} = [\alpha_1, \alpha_2, \dots, \alpha_K]$.
* **Physical Intuition:** Think of $\alpha_i$ as "prior counts" for category $i$. If $\alpha_i$ is large, the distribution concentrates around a high probability for that category.

In Machine Learning, this is the backbone of **Latent Dirichlet Allocation (LDA)**, a popular algorithm for **Topic Modeling**, where a document is seen as a mixture of different topics.



---

## 2. Mathematical Derivation

### Probability Density Function (PDF)
For a probability vector $\mathbf{x} = (x_1, \dots, x_K)$, the PDF is:
$$f(x_1, \dots, x_K; \alpha_1, \dots, \alpha_K) = \frac{1}{B(\mathbf{\alpha})} \prod_{i=1}^{K} x_i^{\alpha_i - 1}$$

Where $B(\mathbf{\alpha})$ is the multivariate Beta function:
$$B(\mathbf{\alpha}) = \frac{\prod_{i=1}^{K} \Gamma(\alpha_i)}{\Gamma(\sum_{i=1}^{K} \alpha_i)}$$

### Properties:
* **Mean of $x_i$:** $E[x_i] = \frac{\alpha_i}{\alpha_0}$ where $\alpha_0 = \sum \alpha_j$.
* **Variance of $x_i$:** $Var(x_i) = \frac{\alpha_i(\alpha_0 - \alpha_i)}{\alpha_0^2 (\alpha_0 + 1)}$.
* **Symmetry:** If all $\alpha_i$ are equal, the distribution is "Symmetric Dirichlet."

---

## 3. Example with Solution

**Scenario:**
A News AI model categorizes articles into [Politics, Sports, Tech]. You use a Dirichlet prior $\mathbf{\alpha} = [10, 10, 10]$ (meaning you expect them to be equally likely).

**Problem:**
1.  What is the expected probability for "Tech"?
2.  If you observe 20 Politics articles, 5 Sports, and 5 Tech, what is your updated "belief" (Posterior)?

**Solution:**
1.  **Expected Probability:**
    $$\alpha_0 = 10 + 10 + 10 = 30$$
    $$E[x_{tech}] = \frac{10}{30} = 0.33 \text{ (or 33.3%)}$$
2.  **Posterior Update:**
    In Bayesian inference, you simply add the observed counts to the prior $\alpha$:
    $$\mathbf{\alpha}_{post} = [10+20, 10+5, 10+5] = [30, 15, 15]$$
    * **New Expected Politics:** $\frac{30}{60} = 0.5$ (or 50%).
    * **New Expected Sports/Tech:** $\frac{15}{60} = 0.25$ (or 25%).

---

## 4. Python Implementation

This script visualizes samples from a Dirichlet distribution, showing how different $\alpha$ values lead to different "probability mixtures."

```python
import numpy as np
from scipy.stats import dirichlet
import matplotlib.pyplot as plt

# 1. Define Alpha vectors
# alpha < 1: sparse (prefers one category)
# alpha = 1: uniform
# alpha > 1: dense (prefers equal mixture)
alphas = [[0.5, 0.5, 0.5], [1, 1, 1], [10, 10, 10]]

plt.figure(figsize=(12, 4))

for i, alpha in enumerate(alphas):
    # Generate 5 random probability vectors from the distribution
    samples = dirichlet.rvs(alpha, size=5)
    
    plt.subplot(1, 3, i+1)
    for j, sample in enumerate(samples):
        plt.bar(np.arange(3) + j*0.15, sample, width=0.15, alpha=0.7)
    
    plt.title(f'α = {alpha}')
    plt.xticks([0.5, 1.5, 2.5], ['Cat 1', 'Cat 2', 'Cat 3'])
    plt.ylim(0, 1)

plt.tight_layout()
plt.show()
```

---

## 5. Comparison: Beta vs. Dirichlet

| Feature | Beta Distribution | Dirichlet Distribution |
| :--- | :--- | :--- |
| **Outcomes** | Binary ($K=2$) | Multiclass ($K \ge 2$) |
| **Space** | Line segment [0, 1] | $(K-1)$-dimensional Simplex |
| **ML Use** | Prior for Bernoulli/Binomial | Prior for Categorical/Multinomial |
| **Context** | A/B Testing | Topic Modeling / Mixture Models |

Since you've covered the major probability distributions for your **Math4ML** project, would you like to move into **Information Theory** (Entropy, KL Divergence) or jump back into **Multivariate Calculus** to see how these distributions are optimized during training?