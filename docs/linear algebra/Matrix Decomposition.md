Following the **GFG technical pattern**, here is a deep-dive into the four primary **Matrix Decomposition** techniques used in Machine Learning.

---

## 1. LU Decomposition
**LU** stands for **Lower-Upper** decomposition. It factorizes a square matrix into a lower triangular matrix ($L$) and an upper triangular matrix ($U$).

### Theory
LU decomposition is used to simplify the process of solving linear systems ($Ax = b$). Instead of calculating $A^{-1}$ (which is computationally expensive), we solve two simpler systems: $Ly = b$ and $Ux = y$ via forward and backward substitution.

### Mathematical Derivation
For a $2 \times 2$ matrix $A$:
$$\begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ l_{21} & 1 \end{bmatrix} \begin{bmatrix} u_{11} & u_{12} \\ 0 & u_{22} \end{bmatrix}$$
1. $u_{11} = a_{11}$ and $u_{12} = a_{12}$
2. $l_{21} \cdot u_{11} = a_{21} \implies l_{21} = \frac{a_{21}}{u_{11}}$
3. $l_{21} \cdot u_{12} + u_{22} = a_{22} \implies u_{22} = a_{22} - (l_{21} \cdot u_{12})$

### Example & Solution
**Problem:** Decompose $A = \begin{bmatrix} 4 & 3 \\ 6 & 3 \end{bmatrix}$.
1. $u_{11} = 4, u_{12} = 3$
2. $l_{21} = \frac{6}{4} = 1.5$
3. $u_{22} = 3 - (1.5 \times 3) = 3 - 4.5 = -1.5$
**Result:** $L = \begin{bmatrix} 1 & 0 \\ 1.5 & 1 \end{bmatrix}, U = \begin{bmatrix} 4 & 3 \\ 0 & -1.5 \end{bmatrix}$

### Python Code
```python
import numpy as np
from scipy.linalg import lu

A = np.array([[4, 3], [6, 3]])
P, L, U = lu(A) # P is permutation matrix for stability
print(f"L:\n{L}\nU:\n{U}")
```

---

## 2. QR Decomposition
**QR** factorizes a matrix into an **Orthogonal** matrix ($Q$) and an **Upper Triangular** matrix ($R$).

### Theory
QR is the foundation for finding eigenvalues (the QR algorithm) and solving linear least-squares problems. Because $Q$ is orthogonal ($Q^T = Q^{-1}$), it preserves lengths and is numerically very stable.


### Mathematical Derivation (Gram-Schmidt)
Given columns $a_1, a_2$ of $A$:
1. Find orthogonal vector $u_1 = a_1$. Normalize it: $q_1 = \frac{u_1}{\|u_1\|}$.
2. Find $u_2 = a_2 - \text{proj}_{u_1} a_2$. Normalize it: $q_2 = \frac{u_2}{\|u_2\|}$.
3. $Q = [q_1, q_2]$ and $R = Q^T A$.

### Example & Solution
**Problem:** Decompose $A = \begin{bmatrix} 12 & -51 \\ 6 & 167 \end{bmatrix}$.
1. $\|a_1\| = \sqrt{12^2 + 6^2} \approx 13.41$
2. $q_1 = [12/13.41, 6/13.41]^T = [0.894, 0.447]^T$
3. $R$ is calculated as $Q^T A$, resulting in an upper triangular form.

### Python Code
```python
from scipy.linalg import qr

A = np.array([[12, -51], [6, 167]])
Q, R = qr(A)
print(f"Q (Orthogonal):\n{Q}\nR (Upper Triangular):\n{R}")
```

---

## 3. Cholesky Decomposition
A specialized decomposition for **Symmetric, Positive-Definite** matrices.

### Theory
Cholesky is roughly twice as fast as LU. It factorizes $A$ into $L \cdot L^T$. It is widely used in **Gaussian Processes** and Monte Carlo simulations to transform uncorrelated variables into correlated ones.

### Mathematical Derivation
For $A = LL^T$:
$L = \begin{bmatrix} l_{11} & 0 \\ l_{21} & l_{22} \end{bmatrix}$
1. $l_{11} = \sqrt{a_{11}}$
2. $l_{21} = \frac{a_{21}}{l_{11}}$
3. $l_{22} = \sqrt{a_{22} - l_{21}^2}$

### Example & Solution
**Problem:** Decompose $A = \begin{bmatrix} 4 & 12 \\ 12 & 37 \end{bmatrix}$.
1. $l_{11} = \sqrt{4} = 2$
2. $l_{21} = \frac{12}{2} = 6$
3. $l_{22} = \sqrt{37 - 6^2} = \sqrt{1} = 1$
**Result:** $L = \begin{bmatrix} 2 & 0 \\ 6 & 1 \end{bmatrix}$

### Python Code
```python
from scipy.linalg import cholesky

A = np.array([[4, 12], [12, 37]])
L = cholesky(A, lower=True)
print(f"Cholesky L:\n{L}")
```

---

## 4. Singular Value Decomposition (SVD)
The most robust decomposition that works for **any** $m \times n$ matrix.

### Theory
SVD decomposes $A$ into $U \Sigma V^T$. In ML, it is used for dimensionality reduction (PCA), noise reduction, and latent semantic analysis.


### Mathematical Derivation
1. **$V$ and $\Sigma$:** Find eigenvalues ($\lambda_i$) and eigenvectors of $A^T A$. $V$ contains the eigenvectors; $\Sigma$ contains $\sigma_i = \sqrt{\lambda_i}$.
2. **$U$:** Find eigenvectors of $AA^T$.

### Example & Solution
**Problem:** Decompose $A = \begin{bmatrix} 3 & 2 \\ 2 & 3 \end{bmatrix}$.
1. $A^T A = \begin{bmatrix} 13 & 12 \\ 12 & 13 \end{bmatrix}$. Eigenvalues are $\lambda_1=25, \lambda_2=1$.
2. Singular values: $\sigma_1 = 5, \sigma_2 = 1$. $\Sigma = \begin{bmatrix} 5 & 0 \\ 0 & 1 \end{bmatrix}$.
3. Eigenvectors of $A^T A$ form $V$.

### Python Code
```python
U, s, Vt = np.linalg.svd(np.array([[3, 2], [2, 3]]))
print(f"U:\n{U}\nSingular Values:\n{s}\nVt:\n{Vt}")
```

---

### Comparison Summary Table

| Method | Matrix Type | Complexity | Key Use Case |
| :--- | :--- | :--- | :--- |
| **LU** | Square | $O(2/3 n^3)$ | Solving Linear Systems |
| **QR** | Any | $O(2n^3)$ | Eigenvalue algorithms / Least Squares |
| **Cholesky** | Symm. Pos-Def | $O(1/3 n^3)$ | Gaussian Processes / Efficient Regression |
| **SVD** | Any | $O(mn^2)$ | PCA / Data Compression |

Since you're working on your **Math4ML** project, which of these would you like to implement as a practical tool (e.g., an image compressor or a linear solver) first?