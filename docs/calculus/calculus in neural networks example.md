To solidify your understanding of how the **Chain Rule** and **Partial Derivatives** operate in a computational graph, let's walk through two distinct examples: a simple **Linear Regression** update and a **Sigmoid Neuron** update.

---

### Example 1: Simple Linear Neuron (Mean Squared Error)

**Scenario:** We have a single input $x = 2$, a weight $w = 0.5$, and a bias $b = 0$. The target output is $y = 2$. We use a simple linear activation ($a = z$) and Mean Squared Error (MSE) loss.

#### 1. Forward Pass
* **Linear Combination ($z$):** $z = w \cdot x + b = 0.5 \cdot 2 + 0 = 1.0$
* **Activation ($a$):** Since it's linear, $a = z = 1.0$
* **Loss ($L$):** $L = (y - a)^2 = (2 - 1)^2 = 1.0$

#### 2. Backward Pass (The Deep-Dive)
We need to find $\frac{\partial L}{\partial w}$. By the Chain Rule:
$$\frac{\partial L}{\partial w} = \frac{\partial L}{\partial a} \cdot \frac{\partial a}{\partial w}$$

* **Step A:** $\frac{\partial L}{\partial a}$ (How loss changes with prediction)
    $$\frac{\partial}{\partial a}(y - a)^2 = 2(y - a) \cdot (-1) = -2(2 - 1) = -2$$
* **Step B:** $\frac{\partial a}{\partial w}$ (How prediction changes with weight)
    $$\frac{\partial}{\partial w}(w \cdot x + b) = x = 2$$

#### 3. Result
* **Gradient:** $\frac{\partial L}{\partial w} = (-2) \cdot (2) = -4$
* **Interpretation:** Because the gradient is negative, increasing the weight $w$ will decrease the loss $L$.

---

### Example 2: Logistic Regression (Sigmoid Activation)

**Scenario:** In deep learning, we rarely use linear units. Let’s look at a hidden layer node with a **Sigmoid** activation function.
* **Inputs:** $x = 1.0$, $w = 0.8$, $b = 0.1$
* **Target:** $y = 1.0$
* **Learning Rate ($\eta$):** $0.1$



#### 1. Forward Pass
* **Summation ($z$):** $z = (0.8 \times 1.0) + 0.1 = 0.9$
* **Sigmoid ($a$):** $\sigma(0.9) = \frac{1}{1 + e^{-0.9}} \approx 0.711$
* **Loss ($L$):** $L = \frac{1}{2}(1.0 - 0.711)^2 \approx 0.0417$

#### 2. Backward Pass (Partial Derivatives)
We apply the chain rule: $\frac{\partial L}{\partial w} = \frac{\partial L}{\partial a} \cdot \frac{\partial a}{\partial z} \cdot \frac{\partial z}{\partial w}$

* **$\frac{\partial L}{\partial a}$:** $-(y - a) = -(1.0 - 0.711) = -0.289$
* **$\frac{\partial a}{\partial z}$:** The derivative of $\sigma(z)$ is $a(1 - a)$.
    $$0.711 \times (1 - 0.711) = 0.711 \times 0.289 \approx 0.205$$
* **$\frac{\partial z}{\partial w}$:** This is simply the input $x = 1.0$.

#### 3. Calculating the Total Gradient
$$\frac{\partial L}{\partial w} = (-0.289) \times (0.205) \times (1.0) \approx -0.0592$$

#### 4. Weight Update
Using Gradient Descent:
$$w_{new} = w_{old} - (\eta \cdot \text{Gradient})$$
$$w_{new} = 0.8 - (0.1 \cdot -0.0592) = 0.8 + 0.00592 = 0.80592$$

---

### Key Takeaways for Technical Implementation
* **Vanishing Gradient:** Notice in Example 2 that the derivative of the Sigmoid ($\frac{\partial a}{\partial z}$) is a small decimal (max 0.25). If you chain many of these together in a deep network, the final gradient becomes extremely small, leading to the "Vanishing Gradient" problem.
* **Partial Derivative Efficiency:** In code (like PyTorch or TensorFlow), we don't compute the full symbolic derivative. We compute the **Numerical Gradient** at each step of the chain and pass that value back.



How would you like to proceed? We can explore how this math scales to **Matrix Calculus** (handling multiple weights at once) or look at the **Python/NumPy code** to implement this from scratch.