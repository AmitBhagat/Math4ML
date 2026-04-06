## Introduction
**Multivariable Calculus** extends the concepts of single-variable calculus to functions of several variables. In Machine Learning, we rarely deal with a single weight; instead, we optimize millions of parameters simultaneously. This field provides the mathematical tools to navigate high-dimensional "landscapes" of loss functions to find the optimal set of parameters.

---

## Prerequisites
* **Differential Calculus**: Understanding basic derivatives and the Chain Rule.
* **Linear Algebra**: Familiarity with vectors, matrices, and the dot product.

---

## Core Theory: The "Why"
When a model has multiple inputs, we need to understand how they interact. 
* A **Gradient** tells us the direction of the steepest increase in a multidimensional space.
* A **Jacobian** helps us handle vector-valued functions (multiple outputs).
* A **Hessian** describes the "curvature" of the surface, telling us if we are at a minimum, maximum, or a saddle point.

---

## Mathematical Derivation

### 1. The Gradient ($\nabla f$)
For a scalar function $f(x_1, x_2, ..., x_n)$, the gradient is a vector of all its partial derivatives:
$$\nabla f = \left[ \frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}, \dots, \frac{\partial f}{\partial x_n} \right]^T$$
**Directional Derivative**: To find the slope in any arbitrary direction vector $\mathbf{v}$, we use: $D_{\mathbf{v}}f = \nabla f \cdot \mathbf{v}$.

### 2. The Jacobian ($J$)
When we have a function $\mathbf{f}$ that maps $\mathbb{R}^n$ to $\mathbb{R}^m$, the Jacobian is a matrix of all first-order partial derivatives:
$$J = \begin{bmatrix} \frac{\partial f_1}{\partial x_1} & \dots & \frac{\partial f_1}{\partial x_n} \\ \vdots & \ddots & \vdots \\ \frac{\partial f_m}{\partial x_1} & \dots & \frac{\partial f_m}{\partial x_n} \end{bmatrix}$$

### 3. The Hessian ($H$)
The Hessian is a square matrix of **second-order** partial derivatives of a scalar-valued function. It describes the local curvature:
$$H_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}$$


---

## Illustrative Example
**Problem:** Find the Gradient and Hessian of $f(x, y) = 3x^2 + 2xy + y^2$.

**Step-by-Step Solution:**
1.  **First Partial Derivatives**:
    * $\frac{\partial f}{\partial x} = 6x + 2y$
    * $\frac{\partial f}{\partial y} = 2x + 2y$
2.  **Gradient Vector**: $\nabla f = [6x + 2y, 2x + 2y]^T$.
3.  **Second Partial Derivatives**:
    * $\frac{\partial^2 f}{\partial x^2} = 6$
    * $\frac{\partial^2 f}{\partial y^2} = 2$
    * $\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x} = 2$
4.  **Hessian Matrix**:
    $$H = \begin{bmatrix} 6 & 2 \\ 2 & 2 \end{bmatrix}$$

---

## Implementation (Python/NumPy)
Using `Autograd` or `PyTorch` is standard for gradients, but here is a conceptual look at computing a Jacobian for a simple vector function.

```python
import numpy as np

def compute_jacobian(x_vec):
    # Function f(x,y) = [x^2 + y, y^2 + x]
    x, y = x_vec[0], x_vec[1]
    
    # Jacobian matrix components
    df1_dx, df1_dy = 2*x, 1
    df2_dx, df2_dy = 1, 2*y
    
    jacobian = np.array([
        [df1_dx, df1_dy],
        [df2_dx, df2_dy]
    ])
    return jacobian

point = np.array([1.0, 2.0])
print("Jacobian Matrix at (1,2):\n", compute_jacobian(point))
```

---

## Applications in ML
* **Gradient Descent**: The negative gradient $-\nabla f$ points directly toward the local minimum of the loss.
* **Neural Network Training**: The Jacobian is used when calculating the derivatives of a layer output (vector) with respect to its inputs (vector).
* **Second-Order Optimization**: Algorithms like **Newton’s Method** use the Hessian to find the minimum faster by accounting for the surface curvature.

---

## The "Linking" Rule
Now that we can handle functions with multiple variables, we can move into **Linear Regression and Optimization**, where we apply these gradients to find the "best-fit" line for a dataset by minimizing a multivariable Mean Squared Error (MSE) function.

### Key Takeaways
* **Gradient**: First-order derivative (vector), used for direction.
* **Jacobian**: First-order derivatives for vector-valued functions (matrix).
* **Hessian**: Second-order derivatives, used to understand the "shape" (concavity/convexity) of the loss function.