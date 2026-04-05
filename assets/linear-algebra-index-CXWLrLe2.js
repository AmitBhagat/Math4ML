const e={id:"vectors-full",title:"Vectors: Foundations of the Feature Space Manifold",description:"An exhaustive investigation into the multi-dimensional building blocks of machine learning—from algebraic operations and Hilbert space norms to the structural properties of span and basis.",formula:"\\mathbf{x} = [x_1, \\dots, x_n]^T, \\quad \\|\\mathbf{x}\\|_2, \\quad \\text{span}\\{\\mathbf{v}_i\\}",details:["Linear Combinations and the Geometry of Span","Basis and Dimension: Minimum Generating Sets","Inner Products and Hilbert Space Orthogonality","Lp Norms: Manhattan ($L_1$), Euclidean ($L_2$), and Sparsity Priors","The Curse of Dimensionality and Concentration of Measure","Numerical Implementation: Linear Algebra with NumPy"],html:String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Mathematical Roadmap</div>
      <a href="#foundations">I. Foundations of Vector Spaces</a>
      <a href="#orthogonality">II. Inner Products and Orthogonality</a>
      <a href="#norms">III. Vector Norms (Lp Spaces)</a>
      <a href="#curse">IV. The Curse of Dimensionality</a>
      <a href="#lab">Numerical Implementation: NumPy</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="foundations" class="premium-h2">I. Foundations of Vector Spaces</h2>
    <p>A vector $\mathbf{x} \in \mathbb{R}^n$ is an ordered $n$-tuple of real numbers. We define the fundamental operations within this manifold through the lens of linear algebra, where vectors serve as the foundational units for representing feature spaces.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">Span and Basis</div>
      <p style="margin:0">The <strong>Span</strong> is the set of all possible linear combinations of a set of vectors. A <strong>Basis</strong> is the minimum set of linearly independent vectors that spans the entire space, defining its coordinate system.</p>
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">📐</div>
      <div class="premium-callout-body">
        <strong>Dimension:</strong> The number of vectors in any basis for a space. For $\mathbb{R}^n$, the dimension is $n$.
      </div>
    </div>

    <!-- SECTION 2 -->
    <h2 id="orthogonality" class="premium-h2">II. Inner Products and Orthogonality</h2>
    <p>The inner product $\langle \mathbf{x}, \mathbf{y} \rangle$ induces a geometry where we can measure angles, projections, and similarity between data points.</p>

    <div class="premium-math-block">
      \mathbf{x} \cdot \mathbf{y} = \|\mathbf{x}\|_2 \|\mathbf{y}\|_2 \cos(\theta)
    </div>

    <div class="premium-callout warn">
      <div class="premium-callout-icon">⚠️</div>
      <div class="premium-callout-body">
        If the dot product is zero, the vectors are <strong>orthogonal</strong>. In ML, orthogonal features are highly desirable as they provide non-redundant information.
      </div>
    </div>

    <!-- SECTION 3 -->
    <h2 id="norms" class="premium-h2">III. Vector Norms ($L^p$ Spaces)</h2>
    <p>Norms quantify the "length" or "magnitude" of a vector, defining the unit ball of the space and serving as the basis for regularization techniques.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Norm Type</th><th>Formula</th><th>ML Application</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>L1 (Manhattan)</strong></td><td>$\|\mathbf{x}\|_1 = \sum |x_i|$</td><td>Lasso Regularization (Sparsity)</td></tr>
          <tr><td><strong>L2 (Euclidean)</strong></td><td>$\|\mathbf{x}\|_2 = \sqrt{\sum x_i^2}$</td><td>Ridge Regularization (Stability)</td></tr>
          <tr><td><strong>L-Infinity</strong></td><td>$\|\mathbf{x}\|_\infty = \max |x_i|$</td><td>Maximum Absolute Deviation</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 4 -->
    <h2 id="curse" class="premium-h2">IV. The Curse of Dimensionality</h2>
    <div class="premium-case-study">
      <h4>Theoretical Limitation</h4>
      <p>As the number of dimensions $n \to \infty$, the ratio between the nearest and farthest points in Euclidean space converges to zero. This "concentration of measure" phenomenon renders $L_2$ distance metrics less informative in extremely high-dimensional feature spaces.</p>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Numerical Implementation: NumPy</h2>
    <div class="premium-math-block">
      <python-code>
import numpy as np

# 1. Define vectors in R^3
x = np.array([1, 2, 3])
y = np.array([4, 5, 6])

# 2. Geometric Operations
dot_product = np.dot(x, y)
l2_norm = np.linalg.norm(x)
cosine_similarity = dot_product / (np.linalg.norm(x) * np.linalg.norm(y))

print(f"Dot Product: {dot_product}")
print(f"L2 Norm of x: {l2_norm:.4f}")
print(f"Cosine Similarity: {cosine_similarity:.4f}")
      </python-code>
    </div>
  `},t={id:"matrices-full",title:"Matrix Essentials: The Computational Engine of Data Science",description:"A comprehensive analysis of matrices as linear operators—covering multiplication mechanics, transposition, and the numerical stability of inverses in high-dimensional optimization.",formula:"\\mathbf{A} \\in \\mathbb{R}^{m \\times n}, \\quad (AB)_{ij} = \\sum A_{ik}B_{kj}, \\quad A A^{-1} = I",details:["Matrix Multiplication: Non-Commutativity and Transformation Composition","Transposition and the Adjoint: Aligning Weight Matrices","Identity Matrices: The Unit Operator in Linear Algebra","Matrix Inversion: Existence, Singularity, and Determinants","ML Intuition: Solving Normal Equations in Regression","Computational Complexity: $O(n^3)$ vs. Optimized Parallel Solves"],html:String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Module Contents</div>
      <a href="#multiplication">I. Matrix Multiplication Mechanics</a>
      <a href="#transpose">II. Transpose and Identity Mapping</a>
      <a href="#inversion">III. Inversion and Numerical Stability</a>
      <a href="#lab">Numerical Performance Laboratory</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="multiplication" class="premium-h2">I. Matrix Multiplication Mechanics</h2>
    <p>A matrix is more than a grid of numbers; it is a representation of a linear operator that maps one vector space to another. Matrix multiplication is the fundamental operation for composing these transformations.</p>

    <div class="premium-math-block">
      (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj}
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">Core Identities</div>
      <p><strong>Associativity:</strong> $(AB)C = A(BC)$. This allows for efficient re-computation in deep neural networks.</p>
      <p style="margin-top:10px"><strong>Non-Commutativity:</strong> $AB \neq BA$. The order of transformations <strong>matters</strong>. Rotating then scaling a feature space is not the same as scaling then rotating.</p>
    </div>

    <!-- SECTION 2 -->
    <h2 id="transpose" class="premium-h2">II. Transpose and Identity Mapping</h2>
    <p>The <strong>transpose</strong> $A^T$ is obtained by swapping rows and columns ($A^T_{ij} = A_{ji}$). In backpropagation, the transpose of the weight matrix is used to project error signals back into the previous layer's feature space.</p>

    <div class="premium-math-block">
      A I = I A = A
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">🆔</div>
      <div class="premium-callout-body">
        The <strong>Identity Matrix</strong> $I$ acts as the unit operator—it maps every vector to itself. It is a square matrix with ones on the main diagonal and zeros elsewhere.
      </div>
    </div>

    <!-- SECTION 3 -->
    <h2 id="inversion" class="premium-h2">III. Inversion and Numerical Stability</h2>
    <p>For a square matrix $A$, the inverse $A^{-1}$ satisfies $AA^{-1} = I$. The existence of an inverse is contingent on the matrix being <strong>non-singular</strong> (non-zero determinant).</p>

    <div class="premium-math-block">
      A A^-1 = I
    </div>

    <div class="premium-callout warn">
      <div class="premium-callout-icon">⚠️</div>
      <div class="premium-callout-body">
        <strong>Numerical Warning:</strong> Computing $A^{-1}$ directly is computationally expensive ($O(n^3)$) and numerically unstable. In production ML (like solving Normal Equations), <strong>never</strong> use direct inversion; use robust decomposition methods like LU or Cholesky instead.
      </div>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Numerical Performance Laboratory</h2>
    <div class="premium-math-block">
      <python-code>
import numpy as np

A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# 1. High-Performance Multiplication
product = A @ B

# 2. Transpose (View, not copy)
transpose_A = A.T

# 3. Robust Inversion Check
if np.linalg.det(A) != 0:
    A_inv = np.linalg.inv(A)
    # Verification: identity should be [1, 0, 0, 1]
    identity_check = np.round(A @ A_inv, 2)

print(f"Product AB:\n{product}")
print(f"Inverse A:\n{A_inv}")
print(f"Identity Check:\n{identity_check}")
      </python-code>
    </div>
  `},i={id:"matrix-properties",title:"Matrix Properties: Information, Stability, and Convexity",description:"A formal investigation into the intrinsic invariants of matrices—from information capacity (Rank) and volume scaling (Determinant) to the spectral sum (Trace) and the curvature of optimization landscapes (Definiteness).",formula:"\\operatorname{rank}(A), \\quad \\det(A), \\quad \\operatorname{tr}(A), \\quad \\mathbf{x}^T M \\mathbf{x} > 0",details:["Matrix Rank: Quantifying Independent Information","Rank-Nullity Theorem: The Conservation of Dimensions","Determinants: The Volume Scaling Factor in Probability Flows","Matrix Trace: The Rotation-Invariant Spectral Sum","Definiteness and the Hessian: Testing for Model Convexity","Numerical Implementation: Stability and Rank Estimation"],html:String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Spectral Properties</div>
      <a href="#rank">I. Matrix Rank: Information Content</a>
      <a href="#determinant">II. Determinants and Volume Scaling</a>
      <a href="#definiteness">III. Matrix Definiteness and Convexity</a>
      <a href="#lab">Numerical Performance Laboratory</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="rank" class="premium-h2">I. Matrix Rank: Information Content</h2>
    <p>The <strong>rank</strong> of a matrix $A$ represents the maximum number of linearly independent rows or columns. In machine learning, the rank quantifies the intrinsic dimensionality and informational richness of our feature space.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">Rank Cardinality</div>
      <p><strong>Full Rank:</strong> $\operatorname{rank}(A) = \min(m, n)$. No information is lost during the transformation; the mapping is injective or surjective as appropriate.</p>
      <p style="margin-top:10px"><strong>Rank Deficient:</strong> $\operatorname{rank}(A) < \min(m, n)$. Indicates redundant features (multicollinearity), which can lead to numerical instability in optimization.</p>
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">📐</div>
      <div class="premium-callout-body">
        <strong>Rank-Nullity Theorem:</strong> For any linear mapping $A: V \to W$, the sum of the rank and the nullity (dimension of the kernel) is equal to the number of columns: $\operatorname{rank}(A) + \operatorname{null}(A) = n$.
      </div>
    </div>

    <!-- SECTION 2 -->
    <h2 id="determinant" class="premium-h2">II. Determinants and Volume Scaling</h2>
    <p>The <strong>determinant</strong> $\det(A)$ is a scalar value that captures how a linear transformation scales $n$-dimensional volume. A zero determinant implies that the transformation collapses space into a lower dimension, making the matrix singular (non-invertible).</p>

    <div class="premium-math-block">
      \det(A) = \prod_{i=1}^{n} \lambda_i
    </div>

    <p>For a $2 \times 2$ matrix, the determinant represents the area of the parallelogram formed by its column vectors. In probability, the absolute value of the determinant is used as a change-of-variables factor in density transformations.</p>

    <!-- SECTION 3 -->
    <h2 id="definiteness" class="premium-h2">III. Matrix Definiteness and Convexity</h2>
    <p>Definiteness is a property of symmetric matrices that characterizes the curvature of quadratic forms. It is essential for determining the <strong>convexity</strong> of objective functions in machine learning.</p>

    <div class="premium-math-block">
      \mathbf{x}^T M \mathbf{x} > 0 \quad \text{for all } \mathbf{x} \neq \mathbf{0}
    </div>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Definiteness</th><th>Eigenvalue Condition</th><th>Optimization Impact</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Positive Definite (PD)</strong></td><td>All $\lambda_i > 0$</td><td>Global minimum (Strictly Convex)</td></tr>
          <tr><td><strong>Positive Semidefinite (PSD)</strong></td><td>All $\lambda_i \geq 0$</td><td>Local/Global minimum (Convex)</td></tr>
          <tr><td><strong>Negative Definite (ND)</strong></td><td>All $\lambda_i < 0$</td><td>Global maximum (Concave)</td></tr>
          <tr><td><strong>Indefinite</strong></td><td>Mixed $\lambda_i$ signs</td><td>Saddle point</td></tr>
        </tbody>
      </table>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Numerical Performance Laboratory</h2>
    <div class="premium-math-block">
      <python-code>
import numpy as np

# Define a Symmetric Positive Definite Matrix
A = np.array([[4, 2], [2, 3]])

# 1. Scalar Invariants
rank = np.linalg.matrix_rank(A)
determinant = np.linalg.det(A)
trace = np.trace(A)

# 2. Spectral Properties
eigenvalues = np.linalg.eigvals(A)

# 3. Definiteness Check (Cholesky Decomposition)
try:
    np.linalg.cholesky(A)
    is_positive_definite = True
except np.linalg.LinAlgError:
    is_positive_definite = False

print(f"Determinant (Volume Factor): {determinant:.4f}")
print(f"Trace (Spectral Sum): {trace}")
print(f"Eigenvalues: {eigenvalues}")
print(f"Is Positive Definite: {is_positive_definite}")
      </python-code>
    </div>
  `},a={id:"eigen-advanced",title:"Eigen-analysis & Latent Factors: The Spectral Soul of Data",description:"A theoretical deep dive into the hidden axes of data—covering Principal Component Analysis (PCA), Spectral Clustering, and the low-rank approximations that power modern recommendation systems.",formula:"A\\mathbf{v} = \\lambda\\mathbf{v}, \\quad C = Q\\Lambda Q^T, \\quad A \\approx UV^T",details:["Eigen-analysis: Scaling without Rotation","The Spectral Theorem: Orthogonal Decomposition of Symmetric Matrices","PCA: Information Maximization via Variance Capture","Spectral Clustering: Graph Laplacians and Non-Convex Clusters","Matrix Factorization: User-Item Latent Embedding Spaces","Numerical Implementation: Eigen-solvers and Rank-k SVD"],html:String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Spectral Content</div>
      <a href="#eigen">I. Eigen-analysis and Spectral Foundations</a>
      <a href="#pca">II. Principal Component Analysis (PCA)</a>
      <a href="#factorization">III. Latent Factor Models: Matrix Factorization</a>
      <a href="#lab">Spectral Computation: NumPy</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="eigen" class="premium-h2">I. Eigen-analysis and Spectral Foundations</h2>
    <p>Eigen-analysis reveals the hidden structure of a dataset. For a square matrix $A$, an <strong>eigenvector</strong> $\mathbf{v}$ and its corresponding <strong>eigenvalue</strong> $\lambda$ define a direction where the transformation involves only scaling, not rotation.</p>

    <div class="premium-math-block">
      A \mathbf{v} = \lambda \mathbf{v}
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">The Spectral Theorem</div>
      <p style="margin:0">Any symmetric real matrix has a full set of orthonormal eigenvectors, allowing for the diagonal decomposition $A = Q \Lambda Q^T$. This theorem provides the mathematical foundation for Principal Component Analysis and many spectral clustering techniques.</p>
    </div>

    <!-- SECTION 2 -->
    <h2 id="pca" class="premium-h2">II. Principal Component Analysis (PCA)</h2>
    <p>PCA rotates data into a new coordinate system where the first few axes (the Principal Components) capture the maximum possible variance. Geometrically, this means solving the eigenvalue problem for the <strong>Covariance Matrix</strong> $C$.</p>

    <div class="premium-callout info">
      <div class="premium-callout-icon">📊</div>
      <div class="premium-callout-body">
        <strong>Information Maximization:</strong> PCA identifies the directions in the feature space where data 'spread' is greatest. Dropping eigenvectors with small eigenvalues allows for dimensionality reduction while preserving the core informational manifold.
      </div>
    </div>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Technique</th><th>Core Operator</th><th>Primary Application</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>PCA</strong></td><td>Covariance Matrix ($C$)</td><td>Dimensionality Reduction</td></tr>
          <tr><td><strong>Spectral Clustering</strong></td><td>Graph Laplacian ($L$)</td><td>Non-linear / Graph Grouping</td></tr>
          <tr><td><strong>PageRank</strong></td><td>Transition Matrix ($M$)</td><td>Node Importance Ranking</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 3 -->
    <h2 id="factorization" class="premium-h2">III. Latent Factor Models: Matrix Factorization</h2>
    <p>Matrix Factorization decomposes a large, sparse matrix $A$ (such as a user-item rating matrix) into low-rank representations that reveal <strong>Latent Factors</strong>.</p>

    <div class="premium-case-study">
      <h4>Optimization Objective</h4>
      <p>The goal is to find two matrices $U$ and $V$ such that their product approximates the original data while minimizing the Frobenius norm of the error:</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        \min_{U,V} \|A - UV^T\|_F^2
      </div>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Spectral Computation: NumPy</h2>
    <div class="premium-math-block">
      <python-code>
import numpy as np

# 1. Full Spectral Analysis of a Symmetric Matrix
C = np.array([[3, 1], [1, 3]])
eigvals, eigvecs = np.linalg.eigh(C)

# 2. PCA Flow (Data Centering is Critical)
X = np.array([[1, 2], [2, 3], [3, 4]])
X_centered = X - np.mean(X, axis=0)
cov_mat = np.cov(X_centered, rowvar=False)
pc_vals, pc_vecs = np.linalg.eig(cov_mat)

# 3. Explained Variance Ratio
variance_explained = pc_vals / np.sum(pc_vals)

print(f"Spectral Eigenvalues: {eigvals}")
print(f"PCA Variance Captured: {variance_explained}")
print(f"Principal Components (Axes):\n{pc_vecs}")
      </python-code>
    </div>
  `},n={id:"decompositions-full",title:"Matrix Decompositions: The Computational Core of AI",description:"A formalization of the factorizations that power modern machine learning—from the universal SVD to the high-performance Cholesky and LU engines used in solver backends.",formula:"A = U\\Sigma V^T, \\quad PA = LU, \\quad A = LL^T, \\quad A = QR",details:["Singular Value Decomposition (SVD): The Spectral Swiss Army Knife","LU Decomposition: Efficient Solving via Triangular Mappings","Cholesky Factorization: Optimal Solving for Positive-Definite Systems","QR Decomposition: Numerical Stability for Linear Least Squares","Eckart-Young Theorem: Optimal Low-Rank Approximations","Numerical Implementation: Benchmarking SVD vs. LU in SciPy"],html:String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Factorization Engines</div>
      <a href="#svd">I. Singular Value Decomposition (SVD)</a>
      <a href="#solvers">II. Solver Architectures: LU and Cholesky</a>
      <a href="#qr">III. Numerical Stability: QR Decomposition</a>
      <a href="#lab">Numerical Laboratory: NumPy/SciPy</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="svd" class="premium-h2">I. The Universal Singular Value Decomposition (SVD)</h2>
    <p>The SVD is the "Swiss Army Knife" of linear algebra. Unlike the eigen-decomposition, which only applies to square matrices, every real matrix $A$ can be factored into three structured components.</p>

    <div class="premium-math-block">
      A = U \Sigma V^T
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">SVD Components</div>
      <p><strong>U and V:</strong> Orthogonal matrices representing rotations in the input and output spaces.</p>
      <p style="margin-top:10px"><strong>$\Sigma$:</strong> A diagonal matrix of non-negative "singular values" representing scaling factors along the principal axes.</p>
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">🔭</div>
      <div class="premium-callout-body">
        <strong>Eckart-Young Theorem:</strong> SVD provides the unique optimal low-rank approximation of any matrix. By keeping only the top $k$ singular values, we can compress massive datasets while minimizing information loss (Frobenius norm).
      </div>
    </div>

    <!-- SECTION 2 -->
    <h2 id="solvers" class="premium-h2">II. Solver Architectures: LU and Cholesky</h2>
    <p>Behind every <code class="premium-code">np.linalg.solve</code> call lies a decomposition engine. These factorizations split a matrix into triangular forms, reducing computational complexity to $O(n^3)$ for the initial factor and $O(n^2)$ for subsequent solves.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Decomposition</th><th>Matrix Type</th><th>Computational Logic</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>LU ($PA=LU$)</strong></td><td>General Square</td><td>Gaussian Elimination (Pivoted)</td></tr>
          <tr><td><strong>Cholesky ($A=LL^T$)</strong></td><td>Symmetric PD</td><td>$2 \times$ faster than LU (SPD only)</td></tr>
          <tr><td><strong>LDLT</strong></td><td>General Symmetric</td><td>Avoids square roots in Cholesky</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 3 -->
    <h2 id="qr" class="premium-h2">III. Numerical Stability: QR Decomposition</h2>
    <p>The <strong>QR Decomposition</strong> factors $A$ into an orthogonal matrix $Q$ and an upper triangular matrix $R$. It is the standard algorithm for solving Linear Least Squares problems without squaring the condition number of the data matrix.</p>

    <div class="premium-math-block">
      A = Q R
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Numerical Laboratory: NumPy/SciPy</h2>
    <div class="premium-math-block">
      <python-code>
import numpy as np
import scipy.linalg as la

# 1. Universal Factorization (SVD)
A = np.array([[1, 2, 3], [4, 5, 6]])
U, S, Vt = np.linalg.svd(A)

# 2. Performance Solvers (LU)
P, L, U_lu = la.lu(A)

# 3. Cholesky (Requires Symmetric Positive Definite)
SPD = np.array([[2, -1], [-1, 2]])
L_chol = np.linalg.cholesky(SPD)

print(f"Singular Values: {S}")
print(f"LU (L Matrix):\n{L}")
print(f"Cholesky (L Matrix):\n{L_chol}")
      </python-code>
    </div>
  `},o={id:"vector-spaces-full",title:"Vector Spaces: The Geometry of Data Representation",description:"An investigation into the rigorous structure of vector spaces—covering subspaces, linear independence, and the geometric projection mechanics that define regression models.",formula:"V = \\text{span}\\{\\mathbf{v}_i\\}, \\quad A\\mathbf{x}=\\mathbf{b}, \\quad \\mathbf{u} \\perp \\mathbf{v}, \\quad P = Q Q^T",details:["Subspaces and Closure: The Boundaries of Data Manifolds","Linear Independence: Quantifying Feature Redundancy","Solving Linear Systems: Existence and Uniqueness of Solutions","Orthogonal Projections: The Geometric View of Least Squares","Idempotent Operators: The Projective Matrix Identities","Numerical Implementation: Solving Ax=b with NumPy"],html:String.raw`
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
  `},r={id:"transformations-full",title:"Linear Transformations & Mappings: The DNA of Coordinate Movement",description:"An exploration of linear mappings as the fundamental operators of data movement—covering change of basis, kernel/range subspaces, and the conservation of dimensions via the Rank-Nullity Theorem.",formula:"L(\\mathbf{v}) = A\\mathbf{v}, \\quad [v]_{old} = P[v]_{new}, \\quad \\dim(\\ker A) + \\operatorname{rank}(A) = n",details:["Change of Basis: Transition Matrices and Coordinate Shifts","Kernel (Null Space): The Geometry of Information Loss","Range (Column Space): The Expressive Capacity of Mappings","Rank-Nullity Theorem: The Law of Dimensional Conservation","ML Application: Bottlenecks and Manifold Learning in Autoencoders","Numerical Implementation: Subspace Basis via SVD"],html:String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Transformation Logic</div>
      <a href="#basis">I. Change of Basis and Transition Matrices</a>
      <a href="#subspaces">II. Fundamental Subspaces: Kernel and Range</a>
      <a href="#conservation">III. Law of Dimensional Conservation</a>
      <a href="#lab">Numerical Subspace Basis: NumPy</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="basis" class="premium-h2">I. Change of Basis and Transition Matrices</h2>
    <p>Linear transformations describe how data moves between coordinate systems. Changing basis means expressing vectors in one coordinate system in terms of another. If $P$ is the transition matrix whose columns are the new basis vectors, then the mapping is defined as:</p>

    <div class="premium-math-block">
      \mathbf{x}_{old} = P \mathbf{x}_{new}
    </div>

    <div class="premium-case-study">
      <h4>ML Intuition: Data Whitening</h4>
      <p>In data preprocessing, we "whiten" data by changing its basis to the principal components. This ensures features are uncorrelated and have unit variance, effectively 'untangling' the input distribution for the optimizer.</p>
    </div>

    <!-- SECTION 2 -->
    <h2 id="subspaces" class="premium-h2">II. Fundamental Subspaces: Kernel and Range</h2>
    <p>Every linear transformation $A$ is characterized by two fundamental subspaces that define its information capacity and expressive potential.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">Kernel (Null Space)</div>
      <p style="margin:0">The <strong>Kernel</strong>, $\ker(A)$, is the set of all vectors $\mathbf{v}$ that the transformation sends to the zero vector ($\mathbf{0}$). It represents the information <strong>lost</strong> or collapsed by the mapping.</p>
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">Range (Column Space)</div>
      <p style="margin:0">The <strong>Range</strong> is the set of all possible output vectors. It represents the <strong>expressive capacity</strong> or "reach" of the transformation within the target space.</p>
    </div>

    <!-- SECTION 3 -->
    <h2 id="conservation" class="premium-h2">III. The Law of Dimensional Conservation</h2>
    <p>The total number of input dimensions $n$ is always conserved between what is kept (Rank) and what is lost (Nullity). This is the cornerstone of linear subspace analysis.</p>

    <div class="premium-math-block">
      \dim(\ker A) + \operatorname{rank}(A) = n
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">💡</div>
      <div class="premium-callout-body">
        <strong>Rank-Nullity Insight:</strong> In an autoencoder with a bottleneck layer of size $k$, the rank of the encoding transformation is at most $k$. Any information in the original $n$-dimensional input that lies in the null space of the encoder is permanently discarded.
      </div>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Numerical Subspace Basis: NumPy</h2>
    <div class="premium-math-block">
      <python-code>
import numpy as np
import scipy.linalg

# Define a rank-deficient 2x3 matrix
A = np.array([[1, 2, 3], [2, 4, 6]])

# 1. Null Space (Kernel) Basis
null_space_basis = scipy.linalg.null_space(A)

# 2. Dimensional Metrics
rank = np.linalg.matrix_rank(A)
nullity = null_space_basis.shape[1]

print(f"Matrix A:\n{A}")
print(f"Rank (Dim of Range): {rank}")
print(f"Nullity (Dim of Kernel): {nullity}")
print(f"Total Dimensions: {rank + nullity} (Should equal 3)")
      </python-code>
    </div>
  `},s={id:"linear-algebra",title:"Linear Algebra",description:"Linear Algebra is the language of Machine Learning. It provides the mathematical framework for representing and processing high-dimensional data, from simple vectors to complex matrix decompositions.",keyConcepts:[{title:"Vectors & Foundations",description:"Dot Product, Norms (L1/L2), Linear Combinations, Span, and Basis."},{title:"Matrix Essentials",description:"Multiplication, Transpose, Inverse, and Identity mappings."},{title:"Matrix Properties",description:"Information metrics: Rank, Determinant, Trace, and Definiteness."},{title:"Eigen-analysis",description:"Spectral theory behind PCA, Clustering, and Matrix Factorization."},{title:"Advanced Decompositions",description:"Structural factorization via SVD, LU, Cholesky, and QR."},{title:"Vector Spaces & Geometry",description:"Subspaces, Independence, Linear Equations, and Orthogonal Projections."},{title:"Linear Transformations",description:"Coordinate mappings: Change of Basis, Kernel (Null Space), and Range."}],sections:[e,t,i,a,n,o,r]};export{s as LINEAR_ALGEBRA_DATA};
