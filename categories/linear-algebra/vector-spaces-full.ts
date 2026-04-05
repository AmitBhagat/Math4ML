import { TopicSection } from '../../src/data/types';

export const vectorSpacesFullSection: TopicSection = {
  id: "vector-spaces-full",
  title: "Vector Spaces: The Geometry of Data Representation",
  description: "An investigation into the rigorous structure of vector spaces—covering subspaces, linear independence, and the geometric projection mechanics that define regression models.",
  formula: "V = \\text{span}\\{\\mathbf{v}_i\\}, \\quad A\\mathbf{x}=\\mathbf{b}, \\quad \\mathbf{u} \\perp \\mathbf{v}, \\quad P = Q Q^T",
  details: [
    "Subspaces and Closure: The Boundaries of Data Manifolds",
    "Linear Independence: Quantifying Feature Redundancy",
    "Solving Linear Systems: Existence and Uniqueness of Solutions",
    "Orthogonal Projections: The Geometric View of Least Squares",
    "Idempotent Operators: The Projective Matrix Identities",
    "Numerical Implementation: Solving Ax=b with NumPy"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Module Roadmap</div>
      <a href="#subspaces">I. Subspaces and Linear Independence</a>
      <a href="#systems">II. Solving Linear Systems: Ax = b</a>
      <a href="#orthogonality">III. Orthogonality and Projections</a>
      <a href="#lab">Numerical Performance Laboratory</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="subspaces" class="premium-h2">I. Subspaces and Linear Independence</h2>
    <p>A <strong>subspace</strong> $W$ is a subset of a vector space that is itself a vector space, meaning it is closed under vector addition and scalar multiplication. In the context of machine learning, the <strong>Column Space</strong> of a feature matrix defines the entire manifold of possible outputs your model can predict.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">Independence Prerequisite</div>
      <p style="margin:0">A set of vectors is <strong>linearly independent</strong> if no vector in the set can be written as a linear combination of the others. This ensures there is no redundancy—every feature adds a new dimension of information to the model's feature space.</p>
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">💡</div>
      <div class="premium-callout-body">
        <strong>Rank Identity:</strong> The rank of a matrix $A$ is the dimension of its column space. If $\text{rank}(A) < k$ (where $k$ is the number of features), we have "multicollinearity," which can lead to unstable model weights.
      </div>
    </div>

    <!-- SECTION 2 -->
    <h2 id="systems" class="premium-h2">II. Solving Linear Systems: Ax = b</h2>
    <p>Training a model often reduces to solving the fundamental equation of linear algebra. Whether we are calculating weights via the Normal Equation or updating gradients, we are navigating the relationship between inputs $A$ and targets $b$.</p>

    <div class="premium-math-block">
      \mathbf{A} \mathbf{x} = \mathbf{b}
    </div>

    <p>There are three possibilities for any linear system:</p>
    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>System Type</th><th>Condition</th><th>Outcome</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Consistent (Unique)</strong></td><td>$\mathbf{b}$ is in $\text{col}(A)$, $A$ is full rank</td><td>Single exact solution</td></tr>
          <tr><td><strong>Consistent (Infinite)</strong></td><td>$\mathbf{b}$ is in $\text{col}(A)$, $A$ has nullspace</td><td>Infinite solution set</td></tr>
          <tr><td><strong>Inconsistent</strong></td><td>$\mathbf{b}$ is NOT in $\text{col}(A)$</td><td>No exact solution (Requires Projection)</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 3 -->
    <h2 id="orthogonality" class="premium-h2">III. Orthogonality and Projections</h2>
    <p>When a system is inconsistent ($\mathbf{b}$ lies outside the column space), we seek the "best possible" solution. This is achieved via <strong>orthogonal projection</strong>, finding the point $\mathbf{p}$ in $\text{col}(A)$ that is closest to $\mathbf{b}$.</p>

    <div class="premium-math-block">
       \text{proj}_{\mathbf{a}}(\mathbf{b}) = \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{a} \cdot \mathbf{a}} \mathbf{a}
    </div>

    <div class="premium-case-study">
      <h4>The Projection Matrix $P$</h4>
      <p>For a subspace spanned by the columns of $A$, the projection matrix is defined as:</p>
      <div class="premium-math-block">
         P = A(A^T A)^{-1} A^T
      </div>
      <p>Applying $P$ to any vector $\mathbf{b}$ effectively filters it, removing any components that are not representable by our features.</p>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Numerical Performance Laboratory</h2>
    <div class="premium-math-block">
      <python-code>
import numpy as np

# 1. Feature Dependency Check
A = np.array([[1, 2], [2, 4]]) # Redundant features
rank = np.linalg.matrix_rank(A)
print(f"Rank of A: {rank}") 

# 2. Solving Stable Systems
# Ax = b -> x = A_inv * b
A_stable = np.array([[1, 2], [3, 4]])
b = np.array([5, 11])
x = np.linalg.solve(A_stable, b) 
print(f"Optimal Weights x: {x}")

# 3. Geometric Projection
a = np.array([1, 1])
y = np.array([4, 2])
proj = (np.dot(a, y) / np.dot(a, a)) * a
print(f"Projected Vector: {proj}")
      </python-code>
    </div>
  `
};
