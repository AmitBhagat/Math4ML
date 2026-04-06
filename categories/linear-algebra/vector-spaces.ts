import { TopicSection } from '../../src/data/types';

export const vectorSpacesSection: TopicSection = {
  id: "vector-spaces",
  title: "Introduction to Vector Spaces",
  description: "A Vector Space is a collection of vectors that can be added together and multiplied by scalars while remaining within the same space. In Machine Learning, we often work in ℝⁿ (an n-dimensional real space), where each dimension represents a specific feature of our data.",
  html: String.raw`
    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#subspaces">1. Subspaces</a>
      <a href="#independence">2. Linear Independence</a>
      <a href="#orthogonality">3. Orthogonality</a>
      <a href="#projections">4. Orthogonal Projections</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Linear Combinations:</strong> \(c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_n\mathbf{v}_n\).</li>
        <li><strong>Dot Product:</strong> \(\mathbf{a} \cdot \mathbf{b} = \mathbf{a}^T \mathbf{b}\).</li>
      </ul>
    </div>

    <h2 id="subspaces">1. Subspaces</h2>
    <p>A <strong>Subspace</strong> is a subset of a vector space that is itself a vector space.</p>

    <h3>Core Theory</h3>
    <p>For a subset \(S\) of a vector space \(V\) to be a subspace, it must satisfy three conditions:</p>
    <ol>
      <li><strong>Zero Vector:</strong> The zero vector \(\mathbf{0}\) must be in \(S\).</li>
      <li><strong>Closure under Addition:</strong> If \(\mathbf{u}, \mathbf{v} \in S\), then \(\mathbf{u} + \mathbf{v} \in S\).</li>
      <li><strong>Closure under Scalar Multiplication:</strong> If \(\mathbf{u} \in S\) and \(c\) is a scalar, then \(c\mathbf{u} \in S\).</li>
    </ol>
    <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>ML Context:</strong> In PCA, we find a low-dimensional <strong>subspace</strong> that captures the most variance of the original high-dimensional data.</div></div>

    <h2 id="independence">2. Linear Independence</h2>
    <p>A set of vectors is <strong>Linearly Independent</strong> if no vector in the set can be defined as a linear combination of the others.</p>

    <h3>Core Theory</h3>
    <p>Mathematically, the vectors \(\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\}\) are linearly independent if the equation:</p>
    <div class="math-block">$$c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_n\mathbf{v}_n = \mathbf{0}$$</div>
    <p>has <strong>only</strong> the trivial solution \(c_1 = c_2 = \dots = c_n = 0\).</p>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: Independence vs Dependence</h4>
      <ul>
        <li>\(\mathbf{v}_1 = [1, 0]\), \(\mathbf{v}_2 = [0, 1]\) → <strong>Independent</strong> (You can't make \([0, 1]\) using only \([1, 0]\)).</li>
        <li>\(\mathbf{v}_1 = [1, 2]\), \(\mathbf{v}_2 = [2, 4]\) → <strong>Dependent</strong> (\(\mathbf{v}_2 = 2\mathbf{v}_1\)).</li>
      </ul>
    </div>

    <h2 id="orthogonality">3. Orthogonality</h2>
    <p>Two vectors are <strong>Orthogonal</strong> if they are perpendicular to each other.</p>

    <h3>Core Theory</h3>
    <p>In vector algebra, two vectors \(\mathbf{u}\) and \(\mathbf{v}\) are orthogonal if their dot product is zero:</p>
    <div class="math-block">$$\mathbf{u} \cdot \mathbf{v} = 0$$</div>
    <p>If the vectors are also unit vectors (length = 1), they are called <strong>Orthonormal</strong>.</p>

    <h3>Mathematical Derivation</h3>
    <p>Recall \(\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\| \|\mathbf{v}\| \cos(\theta)\). If \(\theta = 90^\circ\), then \(\cos(90^\circ) = 0\), making the dot product zero.</p>
    <div class="math-block">$$\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\| \|\mathbf{v}\| \cos(90^\circ) = \|\mathbf{u}\| \|\mathbf{v}\| \cdot 0 = 0$$</div>

    <h2 id="projections">4. Orthogonal Projections</h2>
    <p>An <strong>Orthogonal Projection</strong> of a vector \(\mathbf{y}\) onto a vector \(\mathbf{u}\) is the "shadow" that \(\mathbf{y}\) casts on the line spanned by \(\mathbf{u}\).</p>

    <h3>Core Theory</h3>
    <p>In ML, projections are used to reduce dimensions or to find the closest point in a subspace to a given vector (the basis of <strong>Linear Regression</strong>). The error vector (the difference between the original and the projection) is always orthogonal to the subspace.</p>

    <h3>Mathematical Derivation</h3>
    <p>The projection of \(\mathbf{y}\) onto \(\mathbf{u}\), denoted \(\text{proj}_{\mathbf{u}}(\mathbf{y})\), is:</p>
    <div class="math-block">$$\text{proj}_{\mathbf{u}}(\mathbf{y}) = \frac{\mathbf{y} \cdot \mathbf{u}}{\mathbf{u} \cdot \mathbf{u}} \mathbf{u}$$</div>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: Projecting y onto u</h4>
      <p>Project \(\mathbf{y} = [2, 3]\) onto \(\mathbf{u} = [4, 0]\).</p>
      <ol>
        <li>\(\mathbf{y} \cdot \mathbf{u} = (2 \times 4) + (3 \times 0) = 8\).</li>
        <li>\(\mathbf{u} \cdot \mathbf{u} = (4 \times 4) + (0 \times 0) = 16\).</li>
        <li>\(\text{Scalar} = 8/16 = 0.5\).</li>
        <li>\(\text{Proj} = 0.5 \times [4, 0] = [2, 0]\).</li>
      </ol>
      <div class="math-block">$$\text{proj}_{\mathbf{u}}(\mathbf{y}) = \frac{8}{16}[4, 0] = 0.5 \times [4, 0] = [2, 0]$$</div>
      <p><strong>Result:</strong> \([2, 0]\). The "height" component \([0, 3]\) was discarded.</p>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

y = np.array([2, 3])
u = np.array([4, 0])

# Orthogonality Check
is_orthogonal = np.dot(y, u) == 0

# Orthogonal Projection
projection = (np.dot(y, u) / np.dot(u, u)) * u

print(f"Are they orthogonal? {is_orthogonal}")
print(f"Projection of y onto u: {projection}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Linear Regression:</strong> Finding the weights \(\mathbf{w}\) is essentially finding the <strong>orthogonal projection</strong> of the target vector \(\mathbf{y}\) onto the column space of the feature matrix \(X\).</li>
      <li><strong>Gram-Schmidt Process:</strong> A method to convert a set of independent vectors into an <strong>orthonormal basis</strong>, used in QR decomposition.</li>
      <li><strong>Word Embeddings:</strong> Orthogonality is often used as a constraint to ensure different features (like "gender" vs "royalty") are captured on independent axes.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Subspaces</strong> define where our models "live."</li>
      <li><strong>Linear Independence</strong> ensures we don't have redundant features (Multicollinearity).</li>
      <li><strong>Orthogonal Projections</strong> find the "best fit" or "closest approximation" in a lower dimension.</li>
    </ul>

    <div class="linking-rule">
      <strong>Linking Rule:</strong> Now that we understand how vectors occupy and project within spaces, we can tackle <strong>Calculus</strong>, specifically <strong>Partial Derivatives</strong>, to see how moving along these axes changes our model's error.
    </div>
  `
};
