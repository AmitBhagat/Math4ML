## Examples and Solutions for Information Theory Concepts

Continuing with our GeeksforGeeks-style guide, here are practical examples to help you master the calculations and logic behind these concepts.

---

### 1. Example of Entropy Calculation
**Scenario:** A biased coin has a probability $P(\text{Heads}) = 0.8$ and $P(\text{Tails}) = 0.2$. Calculate the Entropy of this coin toss.

**Solution:**
Using the formula: $H(X) = - \sum P(x_i) \log_2 P(x_i)$ (We use base 2 for bits).

1.  $P(x_1) = 0.8 \rightarrow \log_2(0.8) \approx -0.322$
2.  $P(x_2) = 0.2 \rightarrow \log_2(0.2) \approx -2.322$
3.  $H(X) = -[(0.8 \times -0.322) + (0.2 \times -2.322)]$
4.  $H(X) = -[-0.2576 - 0.4644] = \mathbf{0.722 \text{ bits}}$

**Insight:** If the coin were fair ($0.5/0.5$), the entropy would be **1 bit** (maximum uncertainty). Since this coin is biased, we have less uncertainty, resulting in lower entropy.

---

### 2. Example of Cross-Entropy Loss
**Scenario:** You are building an image classifier for three classes: **[Cat, Dog, Bird]**. 
For a specific image of a **Dog**, the model outputs the following probabilities:
* Predicted ($Q$): `[0.1, 0.7, 0.2]`
* True ($P$): `[0, 1, 0]` (One-hot encoded)

**Solution:**
The formula for Cross-Entropy is: $L = -\sum P(x_i) \log Q(x_i)$

1.  For Cat: $0 \times \log(0.1) = 0$
2.  For Dog: $1 \times \log(0.7) = -(-0.357) = 0.357$
3.  For Bird: $0 \times \log(0.2) = 0$
4.  **Total Loss** = $\mathbf{0.357}$

**Insight:** Notice that only the probability of the *correct* class matters in the calculation. If the model predicted $0.9$ for Dog, the loss would drop to $0.105$. If it predicted $0.1$ for Dog, the loss would spike to $2.302$.

---

### 3. Example of KL Divergence
**Scenario:** A weather station uses a simple model ($Q$) that predicts rain with $50\%$ probability. However, the true historical distribution ($P$) shows it actually rains only $10\%$ of the time. 

* $P = [\text{Rain: } 0.1, \text{No Rain: } 0.9]$
* $Q = [\text{Rain: } 0.5, \text{No Rain: } 0.5]$

**Solution:**
Using $D_{KL}(P || Q) = \sum P(x) \log \frac{P(x)}{Q(x)}$

1.  Rain term: $0.1 \times \log_2(\frac{0.1}{0.5}) = 0.1 \times \log_2(0.2) \approx 0.1 \times (-2.322) = -0.2322$
2.  No Rain term: $0.9 \times \log_2(\frac{0.9}{0.5}) = 0.9 \times \log_2(1.8) \approx 0.9 \times (0.848) = 0.7632$
3.  $D_{KL} = -0.2322 + 0.7632 = \mathbf{0.531 \text{ bits}}$

**Insight:** This value represents the "penalty" or extra information required because we used the wrong distribution ($Q$) to describe the reality ($P$).

---

### 4. LLM Application: Perplexity Example
**Scenario:** An LLM is predicting the next word in the phrase: *"The capital of France is..."*
* Model A predicts **"Paris"** with $0.9$ probability.
* Model B predicts **"Paris"** with $0.4$ probability.

**Solution:**
Perplexity ($PP$) is defined as $2^{H(P,Q)}$ (where $H$ is the Cross-Entropy). Effectively, it is the inverse of the probability assigned to the correct word.

* **Model A:** $PP = \frac{1}{0.9} = \mathbf{1.11}$
* **Model B:** $PP = \frac{1}{0.4} = \mathbf{2.5}$

**Conclusion:** **Model A** is much better. In LLM training, we want the Perplexity to be as close to $1$ as possible, meaning the model is "not surprised" by the correct answer.



Does this breakdown help clarify how these formulas translate into actual ML training steps?