import { TopicSection } from '../../src/data/types';

export const vectorsFullSection: TopicSection = {
  id: "vectors-full",
  title: "Vectors: Foundations of the Feature Space Manifold",
  description: "An exhaustive investigation into the multi-dimensional building blocks of machine learning—from algebraic operations and Hilbert space norms to the structural properties of span and basis.",
  formula: "\\mathbf{x} = [x_1, \\dots, x_n]^T, \\quad \\|\\mathbf{x}\\|_2, \\quad \\text{span}\\{\\mathbf{v}_i\\}",
  details: [
    "Linear Combinations and the Geometry of Span",
    "Basis and Dimension: Minimum Generating Sets",
    "Inner Products and Hilbert Space Orthogonality",
    "Lp Norms: Manhattan ($L_1$), Euclidean ($L_2$), and Sparsity Priors",
    "The Curse of Dimensionality and Concentration of Measure",
    "Numerical Implementation: Linear Algebra with NumPy"
  ],
  html: String.raw`
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
    <python-code>
import numpy as np

# 1. Define vectors in R^3
x = np.array([1, 2, 3])
y = np.array([4, 5, 6])

# 2. Geometric Operations
dot_product = np.dot(x, y)
l2_norm = np.linalg.norm(x)
cosine_similarity = dot_product / (np.linalg.norm(x) * np.linalg.norm(y))

# 3. Validation Insights
print(f"Dot Product: {dot_product}")
print(f"L2 Norm of x: {l2_norm:.4f}")
print(f"Cosine Similarity: {cosine_similarity:.4f}")
    </python-code>
  `
};
