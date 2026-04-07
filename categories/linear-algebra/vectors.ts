import { TopicSection } from '../../src/data/types';

export const vectorsSection: TopicSection = {
  id: "vectors",
  title: "Vectors",
  description: "In Machine Learning, Vectors are the fundamental building blocks used to represent data. Whether it is a single pixel in an image, a word in a natural language model, or a feature set for a house price prediction, everything is mathematically represented as a vector.",
  color: "#0D47A1",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Linear Algebra · Vectors</div>
      <h1>Vectors</h1>
      <p>In Machine Learning, <strong>Vectors</strong> are the fundamental building blocks used to represent data. Whether it is a single pixel in an image, a word in a natural language model, or a feature set for a house price prediction, everything is mathematically represented as a vector.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#definition">Vector Definition</a>
      <a href="#dot">1. Dot Product</a>
      <a href="#norms">2. Vector Norms (L₁ and L₂)</a>
      <a href="#span">3. Linear Combinations, Span, and Basis</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <h2 id="definition">Vector Definition</h2>
    <p>A vector is an ordered list of numbers, typically denoted in column form:</p>
    <div class="math-block">$$\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{bmatrix}$$</div>

    <visualizer topic="Vectors" />

    <p>where \(n\) represents the dimensionality of the vector space.</p>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li>Basic understanding of Coordinate Geometry.</li>
        <li>Familiarity with scalar operations (addition, multiplication).</li>
      </ul>
    </div>

    <h2 id="dot">1. Dot Product</h2>
    <p>The <strong>Dot Product</strong> (or inner product) is an algebraic operation that takes two equal-length sequences of numbers and returns a single scalar. It measures how much one vector "aligns" with another.</p>

    <h3>Core Theory</h3>
    <p>Geometrically, the dot product is the projection of one vector onto another. In ML, it is used to calculate the similarity between two vectors (e.g., in Cosine Similarity) and is the core operation in Neural Network layer computations \((z = w \cdot x + b)\).</p>

    <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Teacher's Intuition:</strong> It’s how much of one vector "lives" in the direction of another. <strong>The 'Gotcha':</strong> Remember that the dot product is heavily influenced by the <strong>length</strong> of the vectors. If you want pure direction, you use Cosine Similarity.</div></div>

    <h3>Mathematical Derivation</h3>
    <p>For two vectors \(\mathbf{a}\) and \(\mathbf{b}\) in \(\mathbb{R}^n\):</p>
    <div class="math-block">$$\mathbf{a} \cdot \mathbf{b} = \sum_{i=1}^{n} a_i b_i = a_1b_1 + a_2b_2 + \dots + a_nb_n$$</div>
    <p>Alternatively, using the angle \(\theta\) between them:</p>
    <div class="math-block">$$\mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \|\mathbf{b}\| \cos(\theta)$$</div>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Problem: Dot Product Calculation</h4>
      <p>Calculate the dot product of \(\mathbf{a} = [2, 3]\) and \(\mathbf{b} = [4, -1]\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Multiply corresponding components:</strong> \((2 \times 4)\) and \((3 \times -1)\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Sum the results:</strong> \(8 + (-3) = 5\).</div></div>

      <div class="math-block">$$\mathbf{a} \cdot \mathbf{b} = (2)(4) + (3)(-1) = 8 - 3 = 5$$</div>
      
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Interpretation:</strong> The result is positive, meaning the vectors point in a similar general direction (the angle \(\theta\) is acute).</div></div>
    </div>

    <visualizer topic="DotProduct" />

    <h2 id="norms">2. Vector Norms (L₁ and L₂)</h2>
    <p>A <strong>Norm</strong> is a function that assigns a strictly positive length or size to a vector.</p>

    <h3>Core Theory</h3>
    <ul>
      <li><strong>L₁ Norm (Manhattan Distance):</strong> The sum of the absolute values of the components. It is often used in <strong>Lasso Regularization</strong> to encourage sparsity in models.</li>
      <li><strong>L₂ Norm (Euclidean Distance):</strong> The square root of the sum of squared components. It is the most common distance metric and is used in <strong>Ridge Regularization</strong>.</li>
    </ul>

    <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Teacher's Intuition:</strong> A Norm must satisfy the <strong>Triangle Inequality</strong>: shortcuts shouldn't be longer than the long way around. L₁ is "sharp" (forces zeros), while L₂ is "smooth" (spreads the weight).</div></div>

    <h3>Mathematical Derivation</h3>
    <p>The general \(p\)-norm is given by:</p>
    <div class="math-block">$$\|\mathbf{x}\|_p = \left( \sum_{i=1}^{n} |x_i|^p \right)^{1/p}$$</div>
    <ul>
      <li><strong>L₁ Norm (\(p=1\)):</strong> \(\|\mathbf{x}\|_1 = \sum_{i=1}^{n} |x_i|\)</li>
      <li><strong>L₂ Norm (\(p=2\)):</strong> \(\|\mathbf{x}\|_2 = \sqrt{\sum_{i=1}^{n} x_i^2}\)</li>
    </ul>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Problem: Computing L₁ and L₂ Norms</h4>
      <p>For a vector \(\mathbf{v} = [3, -4]\), calculate its length using different metrics.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>L₁ Norm (Manhattan):</strong> Sum of absolute values.</div></div>
      <div class="math-block">$$\|\mathbf{v}\|_1 = |3| + |-4| = 3 + 4 = 7$$</div>

      <div class="step-box"><span class="step-num">2</span><div><strong>L₂ Norm (Euclidean):</strong> Square root of sum of squares.</div></div>
      <div class="math-block">$$\|\mathbf{v}\|_2 = \sqrt{3^2 + (-4)^2} = \sqrt{9 + 16} = 5$$</div>

      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>ML Insight:</strong> The L₁ norm is larger than the L₂ norm. In regularization, L₁ (Lasso) creates "sharp" constraints that force weights to zero, while L₂ (Ridge) creates "smooth" constraints.</div></div>
    </div>

    <h2 id="span">3. Linear Combinations, Span, and Basis</h2>
    <p>These concepts define how we navigate and construct vector spaces.</p>

    <h3>Core Theory</h3>
    <ul>
      <li><strong>Linear Combination:</strong> A new vector created by multiplying vectors by scalars and adding them together: \(\mathbf{y} = c_1\mathbf{v}_1 + c_2\mathbf{v}_2\).</li>
      <li><strong>Span:</strong> The set of all possible linear combinations of a group of vectors. If the span covers the entire space, those vectors can reach any point in that space.</li>
      <li><strong>Basis:</strong> A set of vectors that are <strong>linearly independent</strong> and whose span covers the entire space. It is the "minimalist" set of directions needed to define a space.</li>
    </ul>

    <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Teacher's Intuition:</strong> A Basis is the minimal toolkit required to reach every point in space without redundant tools. If your features have <strong>Multicollinearity</strong>, you have redundant tools, and your model might get confused.</div></div>

    <h3>Mathematical Derivation</h3>
    <p>If a vector \(\mathbf{b}\) can be written as:</p>
    <div class="math-block">$$\mathbf{b} = x_1\mathbf{a}_1 + x_2\mathbf{a}_2 + \dots + x_n\mathbf{a}_n$$</div>
    <p>then \(\mathbf{b}\) is a linear combination of \(\{\mathbf{a}_1, \dots, \mathbf{a}_n\}\). If this set of \(\mathbf{a}\) vectors is linearly independent and can represent any vector in \(\mathbb{R}^n\), they form a <strong>Basis</strong>.</p>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: Basis for ℝ²</h4>
      <p>Check if \(\mathbf{v}_1 = [1, 0]\) and \(\mathbf{v}_2 = [0, 1]\) span \(\mathbb{R}^2\).</p>
      <p>Any vector \([x, y]\) can be written as \(x[1, 0] + y[0, 1]\). Since these two vectors are independent and can reach any point, they form the standard basis for 2D space.</p>
    </div>

    <visualizer topic="LinearCombinations" />

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

# Define vectors
a = np.array([2, 3])
b = np.array([4, -1])

# Dot Product
dot_prod = np.dot(a, b)

# Norms
l1_norm = np.linalg.norm(a, ord=1)
l2_norm = np.linalg.norm(a, ord=2)

print(f"Dot Product: {dot_prod}")
print(f"L1 Norm: {l1_norm}, L2 Norm: {l2_norm}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Dot Product:</strong> Used in <strong>Support Vector Machines (SVM)</strong> and <strong>Attention Mechanisms</strong> in Transformers to calculate weights.</li>
      <li><strong>Norms:</strong> Essential for <strong>Loss Functions</strong> (Mean Absolute Error vs Mean Squared Error) and preventing overfitting via <strong>Regularization</strong>.</li>
      <li><strong>Span/Basis:</strong> Fundamental to <strong>Principal Component Analysis (PCA)</strong>, where we find a new basis that captures the maximum variance of the data.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li>The <strong>Dot Product</strong> measures direction and alignment.</li>
      <li><strong>L₁</strong> is for sparsity; <strong>L₂</strong> is for magnitude and distance.</li>
      <li>A <strong>Basis</strong> provides the coordinate system for your data features.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Having mastered core vector foundations, let's explore how we grid these vectors into <strong><a href="#/mathematics/linear-algebra/matrices">Matrix Essentials</a></strong>.
    </div>
  `
};
