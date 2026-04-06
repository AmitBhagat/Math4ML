Continuing your **Math4ML** journey on your GitHub Pages project, we now reach **Principal Component Analysis (PCA)**. PCA is the crown jewel of dimensionality reduction, bridging the gap between **Linear Algebra** (SVD/Eigenvectors) and **Statistics** (Variance/Covariance).

---

## 1. Theory
PCA is an unsupervised learning algorithm that transforms a high-dimensional dataset into a lower-dimensional one while retaining as much **variance** (information) as possible. 

### Core Concepts:
* **Dimensionality Reduction:** Reducing the number of features (columns) to simplify models and visualize data.
* **Variance as Information:** PCA assumes that the directions with the highest variance contain the most important patterns.
* **Orthogonality:** The new axes (Principal Components) are perpendicular to each other, meaning they are uncorrelated.



---

## 2. Mathematical Derivation (Step-by-Step)

To perform PCA on a dataset $X$ ($m \times n$), follow these mathematical steps:

### Step 1: Standardize the Data
Mean-center the data so that each feature has a mean of 0.
$$X_{centered} = X - \mu$$

### Step 2: Compute the Covariance Matrix
The Covariance Matrix $C$ represents how features vary together.
$$C = \frac{1}{m-1} X^T X$$

### Step 3: Compute Eigenvectors and Eigenvalues
Find the eigenvectors ($v$) and eigenvalues ($\lambda$) of $C$:
$$Cv = \lambda v$$
* **Eigenvectors:** Define the direction of the new axes (Principal Components).
* **Eigenvalues:** Define the magnitude (amount of variance) explained by each component.

### Step 4: Sort and Select
Sort eigenvalues in descending order. To reduce dimensions to $k$, pick the top $k$ eigenvectors to form a projection matrix $W$.

### Step 5: Project the Data
Transform the original data into the new subspace:
$$X_{new} = X_{centered} \cdot W$$

---

## 3. Example with Solution

**Scenario:** You have 2D data: Age and Income. You want to reduce it to 1D.
* **Step A:** Center the data (subtract mean age and mean income).
* **Step B:** Calculate Covariance. If Age and Income are highly correlated, the Covariance Matrix will show a strong diagonal trend.
* **Step C:** Calculate Eigenvectors. 
    * $v_1$ (PC1) might point along the "Age-Income" trend (Highest Variance).
    * $v_2$ (PC2) points perpendicular to it (Noise/Low Variance).
* **Step D:** Drop $v_2$ and project the points onto the line defined by $v_1$.



---

## 4. Python Implementation

While Scikit-Learn is standard, implementing it with **NumPy** helps you understand the "Math4ML" fundamentals.

```python
import numpy as np
import matplotlib.pyplot as plt

# 1. Create Synthetic Data (2D)
np.random.seed(42)
X = np.dot(np.random.rand(2, 2), np.random.rand(2, 100)).T

# 2. Standardization
X_meaned = X - np.mean(X, axis=0)

# 3. Covariance Matrix
cov_mat = np.cov(X_meaned, rowvar=False)

# 4. Eigen-decomposition
eigen_values, eigen_vectors = np.linalg.eigh(cov_mat)

# 5. Sort Eigenvalues and Eigenvectors
sorted_index = np.argsort(eigen_values)[::-1]
sorted_eigenvalue = eigen_values[sorted_index]
sorted_eigenvectors = eigen_vectors[:, sorted_index]

# 6. Select Top K (K=1)
n_components = 1
eigenvector_subset = sorted_eigenvectors[:, 0:n_components]

# 7. Transform Data
X_reduced = np.dot(eigenvector_subset.transpose(), X_meaned.transpose()).transpose()

print(f"Original shape: {X.shape}")
print(f"Reduced shape: {X_reduced.shape}")
```

---

## 5. Summary Table for PCA

| Concept | Mathematical Tool | Purpose |
| :--- | :--- | :--- |
| **Centering** | Arithmetic Mean | Removes bias; shifts data to origin. |
| **Relationship** | Covariance Matrix | Measures how features change together. |
| **Directions** | Eigenvectors | Defines the "Principal Components." |
| **Importance** | Eigenvalues | Tells us how much variance each PC captures. |
| **Reduction** | Dot Product | Projecting high-dim data onto $k$ vectors. |

Since you've tackled SVD and PCA, you have the foundational tools for **Feature Engineering**. Would you like to explore **Linear Discriminant Analysis (LDA)** (which is like PCA but for supervised learning) or dive into **Information Theory** concepts like **Entropy**?