Continuing your **Math4ML** deep-dive in the GeeksforGeeks technical pattern, we now explore **Singular Value Decomposition (SVD)**. While Eigenvalues/Eigenvectors only work for square matrices ($n \times n$), SVD is the "Superpower" of Linear Algebra because it works for **any** matrix ($m \times n$).

---

## 1. Theory
SVD is a matrix factorization method that decomposes any matrix $A$ into three specific matrices. Geometrically, it breaks down any linear transformation into three steps: a **rotation**, a **scaling**, and another **rotation**.

### The SVD Equation:
$$A = U \Sigma V^T$$

Where:
* **$A$ ($m \times n$):** The original data matrix.
* **$U$ ($m \times m$):** Left Singular Vectors (Orthonormal). They represent the "eigenvectors" of $AA^T$.
* **$\Sigma$ ($m \times n$):** Singular Values (Diagonal). These are positive square roots of eigenvalues, sorted in descending order. They represent the "strength" of each dimension.
* **$V^T$ ($n \times n$):** Right Singular Vectors (Orthonormal). They represent the "eigenvectors" of $A^T A$.



---

## 2. Mathematical Derivation

To find the components of SVD for a matrix $A$:

1.  **Find $V$ and $\Sigma$:** Compute the eigenvalues and eigenvectors of the symmetric matrix $A^T A$. The eigenvectors are the columns of $V$, and the square roots of the eigenvalues are the singular values $\sigma_i$ in $\Sigma$.
2.  **Find $U$:** Compute the eigenvectors of $AA^T$, or use the relation $u_i = \frac{1}{\sigma_i} A v_i$.
3.  **Construct $A$:** $A = \sum_{i=1}^{r} \sigma_i u_i v_i^T$, where $r$ is the rank of the matrix.

### Why is this better than Eigen-decomposition?
Eigen-decomposition requires the matrix to be square and diagonalizable. SVD exists for **every** matrix, even if it is tall, wide, or singular.

---

## 3. Example with Solution

**Problem:** Find the SVD of $A = \begin{bmatrix} 3 & 2 & 2 \\ 2 & 3 & -2 \end{bmatrix}$.

**Solution (Simplified Steps):**
1.  **Compute $A^T A$:** Result is a $3 \times 3$ matrix.
2.  **Find Eigenvalues of $A^T A$:** $\lambda_1 = 25, \lambda_2 = 9, \lambda_3 = 0$.
3.  **Find Singular Values ($\Sigma$):** $\sigma_1 = \sqrt{25}=5, \sigma_2 = \sqrt{9}=3, \sigma_3 = 0$.
    $$\Sigma = \begin{bmatrix} 5 & 0 & 0 \\ 0 & 3 & 0 \end{bmatrix}$$
4.  **Find $V$:** Normalize the eigenvectors of $A^T A$.
5.  **Find $U$:** Use $u_i = \frac{Av_i}{\sigma_i}$.

---

## 4. Python Implementation

In practice, we use `numpy.linalg.svd`. This is highly optimized for large datasets.

```python
import numpy as np

# 1. Define a non-square matrix
A = np.array([[3, 2, 2],
              [2, 3, -2]])

# 2. Perform SVD
U, s, Vt = np.linalg.svd(A)

# 3. Format Sigma into a matrix (it's returned as a 1D array)
Sigma = np.zeros(A.shape)
np.fill_diagonal(Sigma, s)

print("Matrix U (Left Singular Vectors):")
print(U)
print("\nSingular Values (s):")
print(s)
print("\nMatrix V Transpose:")
print(Vt)

# 4. Verification: Reconstruct A
A_reconstructed = U @ Sigma @ Vt
print("\nReconstructed Matrix A:")
print(A_reconstructed)
print(f"Match: {np.allclose(A, A_reconstructed)}")
```

---

## 5. Machine Learning Context

SVD is the engine under the hood for several major ML tasks:

* **Principal Component Analysis (PCA):** Most robust PCA implementations (like Scikit-Learn's) use SVD rather than eigen-decomposition of the covariance matrix because it is numerically more stable.
* **Image Compression:** By keeping only the top $k$ singular values and their corresponding vectors, you can represent an image with much less data.
* **Recommender Systems:** SVD was made famous by the Netflix Prize. It is used for **Latent Semantic Indexing** to find hidden relationships between users and movies.
* **Pseudo-Inverse:** Used to solve linear regression $Ax=b$ when $A$ is not square or invertible.



Since you are hosting your **Math4ML** project on GitHub, documenting SVD is a huge milestone. Would you like to see a practical **Image Compression** script using SVD, or should we move into **Matrix Calculus** (the math behind updating weights in Neural Networks)?