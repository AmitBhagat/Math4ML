## Introduction
**Differential Calculus** is the study of how functions change when their inputs change by infinitesimal amounts. In the context of Machine Learning, it is the primary engine used to optimize models. By calculating the **derivative**, we determine the direction and magnitude to adjust model weights to minimize error (loss).

---

## Prerequisites
Before diving in, ensure you are comfortable with:
* **Functions and Graphs**: Understanding $f(x)$ and slopes.
* **Algebraic Limits**: The foundation of the derivative.
* **Basic Matrix Operations**: Essential for moving from scalar to vector calculus.

---

## Core Theory: The "Why"
In ML, we define a **Loss Function** that measures how "wrong" our model is. To improve the model, we need to know: *"If I increase this weight slightly, will the error go up or down?"*

The derivative provides exactly this answer. It represents the **instantaneous rate of change**. If the derivative is positive, increasing the input increases the output; if negative, increasing the input decreases the output. We use this to "descend" the gradient toward the minimum error.

---

## Mathematical Derivation

### 1. The Simple Derivative (Scalar)
The derivative of a function $f(x)$ at point $x$ is defined as:
$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

### 2. Partial Derivatives
In ML, functions usually have thousands of inputs (weights). A **Partial Derivative** measures how the function changes with respect to *one* variable while holding all others constant.
For a function $f(x, y)$:
$$\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h}$$

### 3. The Chain Rule
This is the "secret sauce" of **Backpropagation**. If a variable $z$ depends on $y$, and $y$ depends on $x$, then $z$ depends on $x$ via the chain:
$$\frac{dz}{dx} = \frac{dz}{dy} \cdot \frac{dy}{dx}$$

---

## Illustrative Example


**Problem:** Find the partial derivatives of $f(x, w) = (xw - y)^2$ with respect to $w$. (This is a simple squared error loss).

**Step-by-Step Solution:**
1.  Let $u = (xw - y)$. Then $f = u^2$.
2.  By Chain Rule: $\frac{\partial f}{\partial w} = \frac{\partial f}{\partial u} \cdot \frac{\partial u}{\partial w}$.
3.  $\frac{\partial f}{\partial u} = 2u = 2(xw - y)$.
4.  $\frac{\partial u}{\partial w} = x$ (since $x$ and $y$ are treated as constants).
5.  **Result:** $\frac{\partial f}{\partial w} = 2(xw - y) \cdot x$.

If $x=2, w=3, y=5$:
* $f(2, 3) = (2 \cdot 3 - 5)^2 = 1^2 = 1$.
* $\frac{\partial f}{\partial w} = 2(6-5) \cdot 2 = 4$.
* **Interpretation:** Increasing $w$ by a tiny bit will increase the error by approximately 4 times that bit.

---

## Implementation (Python/NumPy)
Modern libraries like PyTorch do this automatically (Autograd), but here is how you calculate a gradient manually using NumPy.

```python
import numpy as np

def manual_gradient_descent(x, y, w, learning_rate=0.01):
    # Forward pass: prediction
    pred = x * w
    # Loss: (pred - y)^2
    loss = (pred - y)**2
    
    # Calculate gradient (from our derivation above)
    # df/dw = 2 * (x*w - y) * x
    grad_w = 2 * (pred - y) * x
    
    # Update weight
    new_w = w - (learning_rate * grad_w)
    
    return new_w, loss

# Example usage
x_val, y_true, w_val = 2.0, 5.0, 3.0
new_w, current_loss = manual_gradient_descent(x_val, y_true, w_val)
print(f"Current Loss: {current_loss}, Updated Weight: {new_w}")
```

---

## Applications in ML
* **Backpropagation:** The Chain Rule is used to propagate the error from the output layer back to the hidden layers to update weights.
* **Gradient Descent:** Uses partial derivatives to find the local minimum of the cost function.
* **Activation Functions:** Derivatives of functions like **Sigmoid** or **ReLU** are needed to calculate gradients during training.

---

## The "Linking" Rule
Now that we understand **Differential Calculus** and how to find the slope of a loss function, we can move to **Optimization Algorithms (like Gradient Descent)**, which use these slopes to actually update the model parameters iteratively.

### Key Takeaways
* **Derivatives** tell us the direction of the steepest ascent.
* **Partial Derivatives** allow us to handle multiple weights individually.
* **Chain Rule** allows us to calculate gradients in deep, multi-layer networks.