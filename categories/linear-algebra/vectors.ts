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

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <p style="margin-bottom: 0.5rem">To master vectors, you need at least a baseline grasp of:</p>
      <ul style="margin:0">
        <li><strong>Coordinate Geometry:</strong> Cartesian planes and axes.</li>
        <li><strong>Scalar Math:</strong> Basic arithmetic (addition, multiplication).</li>
      </ul>
    </div>

    <h2 id="definition">Vector Definition</h2>
    <p>A vector is an ordered list of numbers, typically denoted in column form. In Machine Learning, we don't just see them as "points"—we see them as <strong>Features</strong> in a high-dimensional space.</p>
    <div class="math-block">$$\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{bmatrix}$$</div>

    <visualizer topic="Vectors" />

    <p>where \(n\) represents the dimensionality of the vector space.</p>

    <h2 id="dot">1. Dot Product (The Similarity Engine)</h2>
    <p>The <strong>Dot Product</strong> (or inner product) is the mathematical heart of almost every modern ML model, from Linear Regression to Large Language Models (LLMs).</p>

    <h3>Core Theory</h3>
    <p>Geometrically, the dot product is the projection of one vector onto another. It answers the critical question: <em>"How much of vector A is pointing in the direction of vector B?"</em></p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of the Dot Product as a "Compatibility Score." If two vectors are perfectly aligned, the score is maxed out. If they are perpendicular (orthogonal), they have <em>zero</em> in common. 
        <br/><br/>
        <strong>The 'Gotcha':</strong> The result is heavily biased by the <strong>magnitude</strong> (length) of the vectors. If you want to compare "concepts" without letting loud data drown out quiet data, you must normalize the vectors first (this leads us to <strong>Cosine Similarity</strong>).
      </div>
    </div>

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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of the **L₁ Norm** as a taxi in Manhattan—you have to follow the grid of streets. The **L₂ Norm** is how a crow flies—the shortest straight-line distance. 
        <br/><br/>
        <strong>ML Connection:</strong> L₁ creates "sharp" constraints that force model weights to exactly zero (Sparsity), while L₂ creates "smooth" constraints that just keep weights small.
      </div>
    </div>

    <h3>Mathematical Derivation</h3>
    <p>The general \(p\)-norm is given by:</p>
    <div class="math-block">$$\|\mathbf{x}\|_p = \left( \sum_{i=1}^{n} |x_i|^p \right)^{1/p}$$</div>
    <ul>
      <li><strong>L₁ Norm (\(p=1\)):</strong> \(\|\mathbf{x}\|_1 = \sum_{i=1}^{n} |x_i|\) (Sum of absolute values)</li>
      <li><strong>L₂ Norm (\(p=2\)):</strong> \(\|\mathbf{x}\|_2 = \sqrt{\sum_{i=1}^{n} x_i^2}\) (Euclidean length)</li>
    </ul>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Problem: Computing L₁ and L₂ Norms</h4>
      <p>For a vector \(\mathbf{v} = [3, -4]\), calculate its length using different metrics.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>L₁ Norm (Manhattan):</strong> \(|3| + |-4| = 7\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>L₂ Norm (Euclidean):</strong> \(\sqrt{3^2 + (-4)^2} = \sqrt{25} = 5\).</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> The Manhattan distance (7) is always greater than or equal to the Euclidean distance (5). In ML, using L₁ (Lasso) results in features being "turned off," while L₂ (Ridge) just turns down the volume.
        </div>
      </div>
    </div>

    <h2 id="span">3. Linear Combinations, Span, and Basis</h2>
    <p>If vectors are the building blocks, then <strong>Span</strong> and <strong>Basis</strong> are the rules for how high we can build.</p>

    <h3>Core Theory</h3>
    <ul>
      <li><strong>Linear Combination:</strong> Scaling and adding vectors together: \(\mathbf{y} = c_1\mathbf{v}_1 + c_2\mathbf{v}_2\).</li>
      <li><strong>Span:</strong> The entire region of space you can reach using linear combinations of your set.</li>
      <li><strong>Basis:</strong> The "Minimalist Set" of independent vectors needed to span a space.</li>
    </ul>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> A **Basis** is like the primary colors (Red, Green, Blue). You can make any color with them, and you can’t make Blue using just Red and Green. If your basis vectors are dependent, it's like having two shades of Red—one is redundant.
        <br/><br/>
        <strong>The 'Gotcha':</strong> In ML, redundant features (Multicollinearity) are just dependent vectors in your basis. They don't add new info; they just add noise and make your model unstable.
      </div>
    </div>

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
