## **Introduction to Shannon Entropy**

In Information Theory, **Entropy** (specifically Shannon Entropy) is a mathematical measure of the **uncertainty**, **randomness**, or **disorder** associated with a random variable. Developed by Claude Shannon in 1948, it quantifies the average amount of "information" or "surprise" contained in the outcomes of a process.

High entropy means high uncertainty (hard to predict), while low entropy means high certainty (easy to predict).

---

## **Prerequisites**
To fully grasp Entropy, you should be familiar with:
* **Basic Probability:** $P(X)$—the likelihood of an event occurring.
* **Logarithms:** Specifically $\log_2$, as information is typically measured in **bits**.
* **Expected Value:** The weighted average of all possible values.

---

## **Core Theory: The "Why" behind Entropy**

The core idea is that the "information content" of an event is inversely proportional to its probability.
1.  **Low Probability = High Surprise:** If an unlikely event happens (e.g., "It is snowing in the Sahara"), you gain a lot of information.
2.  **High Probability = Low Surprise:** If a certain event happens (e.g., "The sun rose today"), you gain almost no information.

**Entropy** is simply the **average surprise** across all possible outcomes. If a dataset is "pure" (all one class), the entropy is 0 because there is no uncertainty. If the classes are spread out evenly, the entropy is at its maximum.



---

## **Mathematical Derivation**

For a discrete random variable $X$ with possible outcomes $\{x_1, x_2, ..., x_n\}$ and a probability mass function $P(X)$, the Entropy $H(X)$ is defined as:

$$H(X) = - \sum_{i=1}^{n} P(x_i) \log_2 P(x_i)$$

### **Step-by-Step Breakdown:**
1.  **Individual Information (Self-Information):** The information in a single outcome $x_i$ is $I(x_i) = \log_2 \left( \frac{1}{P(x_i)} \right) = -\log_2 P(x_i)$.
2.  **Weighting by Probability:** We multiply this information by the probability of that outcome occurring: $P(x_i) \log_2 P(x_i)$.
3.  **Summation:** We sum these values across all $n$ outcomes.
4.  **The Negative Sign:** Since probabilities are between 0 and 1, their logarithms are negative. The negative sign at the front ensures that Entropy is a positive value.

---

## **Illustrative Example**

Imagine we have a bag with **4 balls**: 3 are **Red** and 1 is **Blue**. What is the entropy of picking a ball?

* **Step 1: Identify Probabilities**
    * $P(\text{Red}) = \frac{3}{4} = 0.75$
    * $P(\text{Blue}) = \frac{1}{4} = 0.25$

* **Step 2: Apply the Formula**
    $$H(X) = -[P(\text{Red}) \log_2 P(\text{Red}) + P(\text{Blue}) \log_2 P(\text{Blue})]$$
    $$H(X) = -[0.75 \log_2(0.75) + 0.25 \log_2(0.25)]$$

* **Step 3: Solve**
    * $\log_2(0.75) \approx -0.415$
    * $\log_2(0.25) = -2$
    $$H(X) = -[(0.75 \times -0.415) + (0.25 \times -2)]$$
    $$H(X) = -[-0.311 - 0.5] = 0.811 \text{ bits}$$

**Interpretation:** The entropy is relatively low (less than 1 bit) because the distribution is biased toward Red. If there were 2 Red and 2 Blue, entropy would be exactly **1.0 bit** (maximum uncertainty for two classes).

---

## **Implementation in Python**

```python
import numpy as np

def calculate_entropy(probabilities):
    """
    Calculates Shannon Entropy given a list of probabilities.
    """
    # Filter out zero probabilities to avoid log(0) errors
    probabilities = np.array(probabilities)
    probabilities = probabilities[probabilities > 0]
    
    entropy = -np.sum(probabilities * np.log2(probabilities))
    return entropy

# Example usage:
probs = [0.75, 0.25]
print(f"Entropy: {calculate_entropy(probs):.4f} bits")
```

---

## **Applications in ML**

* **Decision Trees:** Used in the **Information Gain** calculation to decide which feature to split on. The goal is to reduce entropy at each node.
* **Loss Functions:** **Cross-Entropy Loss** is the standard loss function for classification tasks, measuring the difference between the predicted and actual probability distributions.
* **Feature Selection:** Identifying which variables provide the most information about the target variable.

---

## **The Linking Rule**
Now that we understand **Entropy** (the measure of uncertainty within a single distribution), we can move to **Kullback-Leibler (KL) Divergence** and **Cross-Entropy**, which measure the "distance" or difference between two different probability distributions.

---

## **Key Takeaways**
* **Entropy = Uncertainty.**
* A **fair coin flip** has an entropy of 1 bit.
* A **biased coin** (always Heads) has an entropy of 0 bits.
* In Machine Learning, we generally aim to **minimize entropy** in our predictions (making them more certain).