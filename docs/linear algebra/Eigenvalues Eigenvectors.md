Continuing your **Math4ML** deep-dive in the GeeksforGeeks technical pattern, we now move from Probability to the heart of **Linear Algebra**: **Eigenvalues and Eigenvectors**. These are the fundamental tools used for dimensionality reduction (PCA), Google's PageRank, and understanding the stability of Neural Networks.

---

## 1. Theory
In Linear Algebra, a square matrix $A$ acts as a **linear transformation** that maps a vector to a new position. Usually, this transformation rotates and scales the vector.

However, for any matrix $A$, there exist special vectors called **Eigenvectors**. When the matrix $A$ is applied to an eigenvector, the vector **does not rotate**; it only gets scaled (stretched or squashed).

### Core Definitions:
* **Eigenvector ($v$):** A non-zero vector that changes only by a scalar factor when a linear transformation is applied to it.
* **Eigenvalue ($\lambda$):** The scalar factor by which the eigenvector is scaled.



---

## 2. Mathematical Derivation

The fundamental equation is:
$$Av = \lambda v$$

To solve for $\lambda$ and $v$, we rearrange the equation:
$$Av - \lambda v = 0$$
$$(A - \lambda I)v = 0$$
Where $I$ is the Identity matrix. For a non-zero solution for $v$ to exist, the matrix $(A - \lambda I)$ must be **singular** (non-invertible). Therefore, its **determinant** must be zero:

### The Characteristic Equation:
$$\det(A - \lambda I) = 0$$

1.  **Step 1:** Solve the characteristic equation to find the eigenvalues ($\lambda_1, \lambda_2, \dots$).
2.  **Step 2:** For each $\lambda$, solve the system $(A - \lambda I)v = 0$ to find the corresponding eigenvectors.

---

## 3. Example with Solution

**Problem:** Find the eigenvalues and eigenvectors of matrix $A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}$.

**Solution:**
**1. Find Eigenvalues:**
$$\det\left(\begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix} - \begin{bmatrix} \lambda & 0 \\ 0 & \lambda \end{bmatrix}\right) = 0$$
$$\det\begin{bmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{bmatrix} = (4-\lambda)(3-\lambda) - 2 = 0$$
$$\lambda^2 - 7\lambda + 12 - 2 = 0 \implies \lambda^2 - 7\lambda + 10 = 0$$
Factorizing gives: $(\lambda - 5)(\lambda - 2) = 0$. So, **$\lambda_1 = 5, \lambda_2 = 2$**.

**2. Find Eigenvector for $\lambda_1 = 5$:**
$$\begin{bmatrix} 4-5 & 1 \\ 2 & 3-5 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \implies \begin{bmatrix} -1 & 1 \\ 2 & -2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$
This gives $-x_1 + x_2 = 0 \implies x_1 = x_2$.
Eigenvector $v_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$ (or any multiple).

---

## 4. Python Implementation

Using `numpy.linalg`, we can compute these instantly for any $n \times n$ matrix.

```python
import numpy as np

# 1. Define the Matrix
A = np.array([[4, 1],
              [2, 3]])

# 2. Compute Eigenvalues and Eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(A)

print("Eigenvalues:")
print(eigenvalues)

print("\nEigenvectors (Columns):")
print(eigenvectors)

# 3. Verification: Av should equal lambda * v
v = eigenvectors[:, 0]  # First eigenvector
lam = eigenvalues[0]    # First eigenvalue

Av = A @ v
lam_v = lam * v

print(f"\nVerification for lambda={lam}:")
print(f"A * v: {Av}")
print(f"λ * v: {lam_v}")
print(f"Match: {np.allclose(Av, lam_v)}")
```

---

## 5. Machine Learning Context

Why are you learning this for your **AI/ML path**?

1.  **Principal Component Analysis (PCA):** PCA finds the eigenvectors of the data's **Covariance Matrix**. The eigenvectors with the largest eigenvalues represent the "Principal Components" (directions of maximum variance).
2.  **Spectral Clustering:** Uses eigenvalues of the Graph Laplacian to perform dimensionality reduction before clustering.
3.  **Stability of Neural Networks:** The "Spectral Radius" (largest eigenvalue) of a weight matrix determines if gradients will vanish or explode during backpropagation.



Since you are documenting this for your website, would you like to explore **Singular Value Decomposition (SVD)** (which generalizes this for non-square matrices) or look at **Matrix Decomposition** techniques?