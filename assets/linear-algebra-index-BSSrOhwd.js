const t={id:"vectors",title:"Vectors",description:"In Machine Learning, Vectors are the fundamental building blocks used to represent data. Whether it is a single pixel in an image, a word in a natural language model, or a feature set for a house price prediction, everything is mathematically represented as a vector.",color:"#0D47A1",html:String.raw`
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
  `},e={id:"matrices",title:"Matrices",description:"Matrices are rectangular arrays of numbers that represent linear transformations between vector spaces. They are the workhorses of almost all machine learning operations.",color:"#2E7D32",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Linear Algebra · Matrices</div>
      <h1>Matrices</h1>
      <p>In Machine Learning, a <strong>Matrix</strong> is a rectangular array of numbers arranged in rows and columns. While a vector represents a single data point, a matrix typically represents an entire <strong>Dataset</strong>, where rows correspond to individual samples and columns correspond to features.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#definition">Matrix Definition</a>
      <a href="#playground">Interactive Matrix Playground</a>
      <a href="#mult">1. Matrix Multiplication</a>
      <a href="#transpose">2. Matrix Transpose</a>
      <a href="#identity">3. Identity Matrix</a>
      <a href="#inverse">4. Matrix Inverse</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#important">Important Points to Remember</a>
    </div>

    <h2 id="definition">Matrix Definition</h2>
    <p>A matrix \(A\) with \(m\) rows and \(n\) columns is denoted as \(A \in \mathbb{R}^{m \times n}\):</p>
    <div class="math-block">$$A = \begin{bmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ a_{21} & a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \dots & a_{mn} \end{bmatrix}$$</div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li>Understanding of <strong>Vectors</strong> and the <strong>Dot Product</strong>.</li>
        <li>Familiarity with basic algebraic variables.</li>
      </ul>
    </div>

    <h2 id="playground">Interactive Matrix Playground</h2>
    <p>Experiment with real-time matrix operations. Switch between <strong>Addition</strong>, <strong>Multiplication</strong>, and <strong>Scalar</strong> modes to see how the arithmetic DNA of each operation compositions the final result.</p>
    
    <visualizer topic="MatrixOperations" />

    <h2 id="mult">1. Matrix Multiplication (Composition)</h2>
    <p>Matrix multiplication is not a simple element-wise operation. It is a way of <strong>composing linear transformations</strong>.</p>

    <h3>Core Theory</h3>
    <p>For the product \(C = AB\) to exist, the dimensions must align: \((m \times n) \cdot (n \times p) \to (m \times p)\). The number of columns in the first must equal the number of rows in the second.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Matrix multiplication is <strong>composition</strong>. If \(A\) is a machine that rotates and \(B\) is a machine that scales, \(AB\) is the combined machine that does both. 
        <br/><br/>
        <strong>The 'Gotcha':</strong> Order matters. \(AB \neq BA\). In ML, getting the order wrong between your Weights (\(W\)) and your Data (\(X\)) is the #1 cause of "Shape Mismatch" crashes during training.
      </div>
    </div>

    <h3>Mathematical Derivation</h3>
    <p>The element in the \(i\)-th row and \(j\)-th column of the product is the dot product of the \(i\)-th row of \(A\) and the \(j\)-th column of \(B\):</p>
    <div class="math-block">$$c_{ij} = \sum_{k=1}^{n} a_{ik}b_{kj}$$</div>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Problem: 2×2 Matrix Multiplication</h4>
      <p>Let \(A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}\) and \(B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}\). Calculate \(AB\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Row 1 × Column 1:</strong> \((1 \times 5) + (2 \times 7) = 19\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Row 1 × Column 2:</strong> \((1 \times 6) + (2 \times 8) = 22\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Row 2 × Column 1:</strong> \((3 \times 5) + (4 \times 7) = 43\).</div></div>
      <div class="step-box"><span class="step-num">4</span><div><strong>Row 2 × Column 2:</strong> \((3 \times 6) + (4 \times 8) = 50\).</div></div>

      <div class="math-block">$$AB = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}$$</div>
      
      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Each entry captures how much the rows of the first matrix "align" with the columns of the second.
        </div>
      </div>
    </div>

    <visualizer topic="Matrices" />

    <h2 id="transpose">2. Matrix Transpose</h2>
    <p>The <strong>Transpose</strong> of a matrix flips its rows and columns.</p>

    <h3>Core Theory</h3>
    <p>It is essentially reflecting the matrix over its main diagonal. In ML, we use Transpose to align dimensions for dot products and to calculate gradients during backpropagation.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> The Transpose \(A^\top\) flips the perspective. 
        <br/><br/>
        <strong>Memory Trick:</strong> \((AB)^\top = B^\top A^\top\). When you flip the whole system, the order of the machines reverses too!
      </div>
    </div>

    <h3>Mathematical Derivation</h3>
    <p>If \(A\) has dimensions \(m \times n\), then \(A^\top\) has dimensions \(n \times m\):</p>
    <div class="math-block">$$(A^\top)_{ij} = a_{ji}$$</div>

    <h2 id="identity">3. Identity Matrix (I)</h2>
    <p>The <strong>Identity Matrix</strong> is the "1" of the matrix world.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> It’s the "Do Nothing" transformation. If you multiply any vector by \(I\), nothing changes. It’s the starting point for identity mappings in ResNets (Residual Networks).
      </div>
    </div>

    <div class="math-block">$$I = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$</div>

    <h2 id="inverse">4. Matrix Inverse</h2>
    <p>The <strong>Inverse</strong> is the "Undo" button for linear transformations.</p>

    <h3>Core Theory</h3>
    <p>The inverse \(A^{-1}\) is a matrix such that \(AA^{-1} = I\). Not every matrix has an inverse—singular matrices (where space was squashed) cannot be "unsquashed."</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> If a matrix "flattens" your 2D data into a 1D line, information is lost forever. You can't undo that. That’s why **Singular Matrices** (determinant = 0) have no inverse.
        <br/><br/>
        <strong>The 'Gotcha':</strong> Computing inverses for large matrices is computationally expensive and unstable. In modern ML, we almost always use <strong>Matrix Decomposition</strong> or iterative solvers instead.
      </div>
    </div>

    <h3>Mathematical Derivation (for 2×2)</h3>
    <p>For \(A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}\), the inverse is:</p>
    <div class="math-block">$$A^{-1} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$</div>
    <p>where \(ad - bc\) is the <strong>determinant</strong> \((\det(A))\).</p>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Problem: Finding the Inverse of a 2×2 Matrix</h4>
      <p>Find the inverse of \(A = \begin{bmatrix} 4 & 7 \\ 2 & 6 \end{bmatrix}\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Calculate Determinant:</strong> \((4 \times 6) - (7 \times 2) = 10\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Swap diagonal, negate off-diagonal:</strong> \(\begin{bmatrix} 6 & -7 \\ -2 & 4 \end{bmatrix}\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Scale by \(1/\det\):</strong> \(\frac{1}{10}\begin{bmatrix} 6 & -7 \\ -2 & 4 \end{bmatrix}\).</div></div>

      <div class="math-block">$$A^{-1} = \begin{bmatrix} 0.6 & -0.7 \\ -0.2 & 0.4 \end{bmatrix}$$</div>

      <div class="callout info"><div class="callout-icon">ℹ️</div><div class="callout-body"><strong>Check:</strong> Does \(AA^{-1} = I\)? \([4(0.6) + 7(-0.2)] = 2.4 - 1.4 = 1\). It works!</div></div>
    </div>

    <h2 id="composition">Illustrative Example: Composition of Transformations</h2>
    <div class="example-box">
      <h4>Problem: Consecutive Linear Mappings</h4>
      <p>Transform a vector \(\mathbf{x} = [1, 0]\) using a <strong>90° Rotation</strong> (\(R\)) followed by a <strong>Scaling factor of 2</strong> (\(S\)).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Define Matrices:</strong> \(R = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}\) and \(S = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Compose:</strong> \(C = SR\) (Apply \(R\) first, then \(S\)).</div></div>

      <div class="math-block">$$C = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix} \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} 0 & -2 \\ 2 & 0 \end{bmatrix}$$</div>
      
      <div class="step-box"><span class="step-num">3</span><div><strong>Apply to x:</strong> \(C\mathbf{x} = [0, 2]\)</div></div>
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Final State:</strong> The vector was rotated to \([0, 1]\), then scaled to \([0, 2]\). Matrix multiplication allowed us to collapse these two steps into one single operation.</div></div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Multiplication
C = np.dot(A, B)  # or A @ B

# Transpose
A_T = A.T

# Inverse
A_inv = np.linalg.inv(A)

# Identity
I = np.eye(2)

print(f"Matrix Multiplication:\n{C}")
print(f"Transpose:\n{A_T}")
print(f"Inverse:\n{A_inv}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Matrix Multiplication:</strong> Powering <strong>Forward Propagation</strong> in Deep Learning (Input \(\times\) Weights).</li>
      <li><strong>Transpose:</strong> Used in the <strong>Backpropagation</strong> algorithm to adjust weights.</li>
      <li><strong>Inverse:</strong> Used in the <strong>Ordinary Least Squares (OLS)</strong> method to find the optimal coefficients for Linear Regression: \(\beta = (X^T X)^{-1} X^T y\).</li>
    </ul>

    <h2 id="important">Important Points to Remember</h2>
    <div class="note-box">
      <ul style="margin:0">
        <li>Matrix multiplication is <strong>not commutative</strong>: \(AB \neq BA\) in most cases.</li>
        <li>\((AB)^T = B^T A^T\) (The order reverses).</li>
        <li>\((AB)^{-1} = B^{-1} A^{-1}\) (The order reverses).</li>
      </ul>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> Understanding the "DNA" of a matrix is crucial for model stability. Next, we explore <strong><a href="#/mathematics/linear-algebra/matrix-properties">Matrix Properties</a></strong> like Rank, Determinants, and Trace.
    </div>
  `},i={id:"matrix-properties",title:"Matrix Properties",description:'Matrix properties like Rank, Determinant, Trace, and Positive Definiteness act as the "DNA" of a matrix. They tell us whether a system of equations has a solution, how a transformation scales space, and whether an optimization problem (like training a model) has a stable minimum.',color:"#1976D2",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Linear Algebra · Matrix Properties</div>
      <h1>Matrix Properties</h1>
      <p>Matrix properties like <strong>Rank</strong>, <strong>Determinant</strong>, <strong>Trace</strong>, and <strong>Positive Definiteness</strong> act as the "DNA" of a matrix. They tell us whether a system of equations has a solution, how a transformation scales space, and whether an optimization problem (like training a model) has a stable minimum.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#rank">1. Rank of a Matrix</a>
      <a href="#det">2. Determinant</a>
      <a href="#trace">3. Trace</a>
      <a href="#pd">4. Positive Definiteness</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li>Understanding of <strong>Matrices</strong> (Multiplication and Identity).</li>
        <li>Basic concept of <strong>Linear Independence</strong>.</li>
      </ul>
    </div>

    <h2 id="rank">1. Rank (Information Density)</h2>
    <p>The <strong>Rank</strong> of a matrix represents the number of linearly independent rows or columns.</p>

    <h3>Core Theory</h3>
    <p>Rank tells us the "true dimensionality" of the information. If a \(100 \times 100\) matrix has a rank of 2, it means 98 of your features are redundant junk. The matrix operates in a tiny 2D slice of that 100D space.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Rank is the measure of <em>unique</em> information. It’s like hearing 100 people talk, but only 2 of them are saying anything original.
        <br/><br/>
        <strong>The 'Gotcha':</strong> In the real world, computers struggle with rank. Because of **Floating-Point Noise**, a matrix that is mathematically rank-deficient might look like it has "Full Rank" because of tiny non-zero values (like \(10^{-16}\)). We use **Singular Value Decomposition (SVD)** to find the "Effective Rank."
      </div>
    </div>

    <visualizer topic="Rank" />

    <h2 id="det">2. Determinant (Scaling Factor)</h2>
    <p>The <strong>Determinant</strong> \(\det(A)\) is a scalar that summarizes how a matrix changes space.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Take a unit square; the Determinant is the <strong>Area</strong> of the new shape after transformation. If the determinant is negative, the space has been "flipped" inside out.
        <br/><br/>
        <strong>The 'Gotcha':</strong> If \(\det(A) = 0\), you have "squashed" your data into a flatter dimension. You can't go back. This is why singular matrices are non-invertible—you can't "un-squash" a pancake back into a sphere.
      </div>
    </div>

    <h2 id="trace">3. Trace (The Signature)</h2>
    <p>The <strong>Trace</strong> \(tr(A)\) is the sum of the elements on the main diagonal.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> The Trace is a "signature." No matter how you rotate or change the coordinates (basis change), the trace stays the same. 
        <br/><br/>
        <strong>Technical Fact:</strong> The sum of the **Eigenvalues** always equals the Trace. It’s a quick way to sanity-check your calculations.
      </div>
    </div>

    <div class="math-block">$$tr(A) = \sum_{i=1}^{n} a_{ii}$$</div>

    <h2 id="pd">4. Positive Definiteness (The Bowl)</h2>
    <p>A symmetric matrix \(A\) is <strong>Positive Definite (PD)</strong> if \(\mathbf{x}^\top A \mathbf{x} > 0\) for all non-zero vectors \(\mathbf{x}\).</p>

    <h3>Core Theory</h3>
    <p>This property is the "Gold Standard" for optimization. If the Hessian matrix of a loss function is Positive Definite, the surface is guaranteed to be convex (bowl-shaped).</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of a **Positive Definite** matrix as a perfect "bowl." No matter where you drop a ball, it will roll to the stable bottom (Global Minimum). 
        <br/><br/>
        <strong>The 'Gotcha':</strong> If your matrix is only **Positive Semi-Definite**, your bowl has a "flat bottom" (like a trough). Your optimizer might get lost moving along that flat line instead of finding a single point.
      </div>
    </div>

    <h3>Mathematical Derivation</h3>
    <p>A matrix \(A\) is PD if:</p>
    <ol>
      <li>All its <strong>Eigenvalues</strong> are positive \((\lambda_i > 0)\).</li>
      <li>All its leading principal minors have positive determinants.</li>
    </ol>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Problem: Testing Positive Definiteness</h4>
      <p>Is \(A = \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix}\) Positive Definite?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Expand Quadratic Form \(\mathbf{x}^T A \mathbf{x}\):</strong></div></div>
      <div class="math-block">$$\mathbf{x}^T A \mathbf{x} = [x_1, x_2] \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = 2x_1^2 + 3x_2^2$$</div>
      
      <div class="step-box"><span class="step-num">2</span><div><strong>Evaluate:</strong> Since \(x_1^2, x_2^2 > 0\) for any non-zero \(\mathbf{x}\), the sum \(2x_1^2 + 3x_2^2\) is always strictly positive.</div></div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> Yes, it is Positive Definite. In optimization, this means the loss surface is a local "bowl" (convex).</div></div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

A = np.array([[3, 1], [2, 2]])

# Rank
rank = np.linalg.matrix_rank(A)

# Determinant
det = np.linalg.det(A)

# Trace
trace = np.trace(A)

# Positive Definiteness (Checking eigenvalues)
eigenvalues = np.linalg.eigvals(A)
is_pd = np.all(eigenvalues > 0)

print(f"Rank: {rank}, Det: {det}, Trace: {trace}, Is PD: {is_pd}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Rank:</strong> Used in <strong>Low-Rank Approximation</strong> (SVD) to compress images or recommendation system matrices.</li>
      <li><strong>Determinant:</strong> Used in <strong>Gaussian Mixture Models (GMM)</strong> and calculating the Normal distribution's probability density.</li>
      <li><strong>Positive Definiteness:</strong> Used in <strong>Kernel Methods (SVM)</strong> and ensuring that <strong>Covariance Matrices</strong> are valid.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Rank</strong> = Dimensionality.</li>
      <li><strong>Determinant</strong> = Volume scaling (must be \(\neq 0\) for inversion).</li>
      <li><strong>Positive Definiteness</strong> = Guaranteed "bowl-shaped" (convex) optimization surface.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Matrix properties define a model's stability. Explore where data truly "lives" in <strong><a href="#/mathematics/linear-algebra/vector-spaces">Vector Spaces</a></strong>.
    </div>
  `},a={id:"vector-spaces",title:"Vector Spaces",description:"Beyond individual vectors, we explore the structured environments where they exist — Subspaces, Spans, Bases, and the Dimension of data repositories.",color:"#673AB7",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🌌 Linear Algebra · Vector Spaces</div>
      <h1>Vector Spaces</h1>
      <p>A <strong>Vector Space</strong> is a collection of vectors that can be added together and multiplied by scalars while remaining within the same space. In Machine Learning, we often work in \(\mathbb{R}^n\) (an \(n\)-dimensional real space), where each dimension represents a specific feature of our data.</p>
    </div>

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
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> A <strong>Subspace</strong> is like a "layer" or a "flat slice" of the original space that still goes through the origin. If you add two vectors in that slice, you stay in that slice. PCA works by finding the best 1D or 2D "slice" to represent your 100D data.
      </div>
    </div>

    <h2 id="independence">2. Linear Independence</h2>
    <p>A set of vectors is <strong>Linearly Independent</strong> if no vector in the set can be defined as a linear combination of the others.</p>

    <h3>Core Theory</h3>
    <p>Mathematically, the vectors \(\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\}\) are linearly independent if the equation:</p>
    <div class="math-block">$$c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_n\mathbf{v}_n = \mathbf{0}$$</div>
    <p>has <strong>only</strong> the trivial solution \(c_1 = c_2 = \dots = c_n = 0\).</p>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Problem: Testing Linear Independence</h4>
      <p>Decide if \(\mathbf{v}_1 = [1, 2]\) and \(\mathbf{v}_2 = [2, 4]\) are independent.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Check for Multiples:</strong> Can we find a scalar \(k\) such that \(\mathbf{v}_2 = k\mathbf{v}_1\)?</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Evaluate:</strong> Yes, \(2 \times [1, 2] = [2, 4]\). Since \(\mathbf{v}_2\) is a direct multiple of \(\mathbf{v}_1\), they are <strong>Linearly Dependent</strong>.</div></div>

      <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Independent vectors offer <strong>new information</strong>. If a vector is dependent, it's just "saying the same thing" as the others. <strong>The 'Gotcha':</strong> In ML, redundant features (Multicollinearity) make it impossible for your model to know which feature is actually causing the output, leading to unstable weights.
      </div>
    </div>
    </div>

    <visualizer topic="BasisChange" />

    <h2 id="orthogonality">3. Orthogonality</h2>
    <p>Two vectors are <strong>Orthogonal</strong> if they are perpendicular to each other.</p>

    <h3>Core Theory</h3>
    <p>In vector algebra, two vectors \(\mathbf{u}\) and \(\mathbf{v}\) are orthogonal if their dot product is zero:</p>
    <div class="math-block">$$\mathbf{u} \cdot \mathbf{v} = 0$$</div>
    <p>If the vectors are also unit vectors (length = 1), they are called <strong>Orthonormal</strong>.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> <strong>Orthogonality</strong> is the ultimate independence. If two features are orthogonal, changing one has <em>zero</em> impact on the other. This makes them perfectly "decoupled."
      </div>
    </div>

    <h3>Mathematical Derivation</h3>
    <p>Recall \(\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\| \|\mathbf{v}\| \cos(\theta)\). If \(\theta = 90^\circ\), then \(\cos(90^\circ) = 0\), making the dot product zero.</p>
    <div class="math-block">$$\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\| \|\mathbf{v}\| \cos(90^\circ) = \|\mathbf{u}\| \|\mathbf{v}\| \cdot 0 = 0$$</div>

    <visualizer topic="Orthogonality" />

    <h2 id="projections">4. Orthogonal Projections</h2>
    <p>An <strong>Orthogonal Projection</strong> of a vector \(\mathbf{y}\) onto a vector \(\mathbf{u}\) is the "shadow" that \(\mathbf{y}\) casts on the line spanned by \(\mathbf{u}\).</p>

    <h3>Core Theory</h3>
    <p>In ML, projections are used to reduce dimensions or to find the closest point in a subspace to a given vector (the basis of <strong>Linear Regression</strong>). The error vector (the difference between the original and the projection) is always orthogonal to the subspace.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of a projection as a <strong>simplification</strong>. You're throwing away the "orthogonal noise" to find the version of your data that fits into a simpler model. This is exactly what happens when you "fit" a line to a cloud of points in Linear Regression.
      </div>
    </div>

    <h3>Mathematical Derivation</h3>
    <p>The projection of \(\mathbf{y}\) onto \(\mathbf{u}\), denoted \(\text{proj}_{\mathbf{u}}(\mathbf{y})\), is:</p>
    <div class="math-block">$$\text{proj}_{\mathbf{u}}(\mathbf{y}) = \frac{\mathbf{y} \cdot \mathbf{u}}{\mathbf{u} \cdot \mathbf{u}} \mathbf{u}$$</div>

    <visualizer topic="Projections" />

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Problem: Computing an Orthogonal Projection</h4>
      <p>Project \(\mathbf{y} = [2, 3]\) onto \(\mathbf{u} = [4, 0]\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Calculate Dot Products:</strong> \(\mathbf{y} \cdot \mathbf{u} = 8\) and \(\mathbf{u} \cdot \mathbf{u} = 16\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Find Scalar Projection:</strong> \(\frac{8}{16} = 0.5\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Apply Scalar to u:</strong> \(0.5 \times [4, 0] = [2, 0]\).</div></div>

      <div class="math-block">$$\hat{\mathbf{y}} = \text{proj}_{\mathbf{u}}(\mathbf{y}) = [2, 0]$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> The "shadow" of \(\mathbf{y}\) on the x-axis is \([2, 0]\). The vertical component \([0, 3]\) was orthogonal to \(\mathbf{u}\) and thus removed.</div></div>
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
      <strong>Next Step:</strong> Having mastered the basis and projections of where data lives, we can now factorize these structures into simpler components with <strong><a href="#/mathematics/linear-algebra/matrix-decompositions">Matrix Decompositions</a></strong>.
    </div>
  `},s={id:"matrix-decompositions",title:"Matrix Decompositions",description:"High-dimensional data can be dense and difficult to manage. Decompositions — SVD, LU, Cholesky, and QR — allow us to break complex matrices into simpler, more manageable factors.",color:"#D32F2F",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Linear Algebra · Decompositions</div>
      <h1>Matrix Decompositions</h1>
      <p>In Machine Learning, <strong>Matrix Decomposition</strong> (or Factorization) is the process of breaking down a matrix into a product of simpler, constituent matrices. This is analogous to factoring a number (e.g., \(15 = 3 \times 5\)). Decomposing a matrix makes it easier to solve linear equations, invert matrices, and compress data.</p>
    </div>

    <visualizer topic="Matrices" />

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#lu">1. LU Decomposition</a>
      <a href="#cholesky">2. Cholesky Decomposition</a>
      <a href="#qr">3. QR Decomposition</a>
      <a href="#svd">4. Singular Value Decomposition (SVD)</a>
      <a href="#implementation">Implementation (Python/SciPy)</a>
      <a href="#comparison">Algorithm Complexity & Selection</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Matrix Multiplication:</strong> \(AB = C\).</li>
        <li><strong>Orthonormal Matrices:</strong> \(Q^T Q = I\) (columns are unit vectors and orthogonal).</li>
        <li><strong>Triangular Matrices:</strong> Upper (\(U\)) or Lower (\(L\)) where all elements above/below the diagonal are zero.</li>
      </ul>
    </div>

    <h2 id="lu">1. LU Decomposition</h2>
    <p>LU Decomposition factors a square matrix \(A\) into a <strong>Lower Triangular</strong> matrix (\(L\)) and an <strong>Upper Triangular</strong> matrix (\(U\)). It is primarily used to solve systems of linear equations (\(Ax = b\)) efficiently.</p>
    <div class="math-block">$$A = LU \implies \begin{bmatrix} 1 & 0 \\ l_{21} & 1 \end{bmatrix} \begin{bmatrix} u_{11} & u_{12} \\ 0 & u_{22} \end{bmatrix}$$</div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> LU is essentially <strong>Gaussian Elimination</strong> in disguise. When you perform row operations to get a matrix into upper triangular form ($U$), the "memory" of those operations is stored in the lower triangular matrix ($L$). In ML, we use LU to solve $Ax = b$ because back-substitution with triangular matrices is incredibly fast ($O(n^2)$) compared to inverting the whole matrix.
      </div>
    </div>

    <div class="example-box">
      <h4>Problem: LU Factorization</h4>
      <p>Factor \(A = \begin{bmatrix} 2 & 3 \\ 8 & 15 \end{bmatrix}\) into \(L\) and \(U\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Extract Top Row for U:</strong> The first row of \(U\) is simply the first row of \(A\) if \(l_{11}=1\).</div></div>
      <div class="math-block">$$u_{11} = 2, \quad u_{12} = 3$$</div>
      
      <div class="step-box"><span class="step-num">2</span><div><strong>Calculate Multiplier for L:</strong> Find \(l_{21}\) such that \(l_{21} \times u_{11} = 8\).</div></div>
      <div class="math-block">$$l_{21} = 8/2 = 4$$</div>

      <div class="step-box"><span class="step-num">3</span><div><strong>Solve for Remainder in U:</strong> \((4 \times u_{12}) + u_{22} = 15\).</div></div>
      <div class="math-block">$$12 + u_{22} = 15 \implies u_{22} = 3$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> \(L = \begin{bmatrix} 1 & 0 \\ 4 & 1 \end{bmatrix}, \quad U = \begin{bmatrix} 2 & 3 \\ 0 & 3 \end{bmatrix}\). Multiplying them back recovers \(A\).</div></div>
    </div>

    <h2 id="cholesky">2. Cholesky Decomposition</h2>
    <p>Cholesky Decomposition is a special case of LU for <strong>Symmetric, Positive Definite</strong> matrices. It factors \(A\) into \(LL^T\). Because it exploits symmetry, it is roughly twice as fast as LU decomposition and much more numerically stable.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> If LU is like factoring $15 = 3 \times 5$, Cholesky is like taking the square root: $16 = 4 \times 4$. In ML, we use this to generate <strong>correlated noise</strong> in simulations or to solve <strong>Gaussian Processes</strong> efficiently.
      </div>
    </div>
    <h3>Applications in ML</h3>
    <ul>
      <li><strong>Gaussian Processes:</strong> Used to sample from multivariate normal distributions.</li>
      <li><strong>Kalman Filters:</strong> For state estimation in robotics.</li>
    </ul>

    <h2 id="qr">3. QR Decomposition</h2>
    <p>QR Decomposition factors a matrix into an <strong>Orthogonal</strong> matrix (\(Q\)) and an <strong>Upper Triangular</strong> matrix (\(R\)). Since \(Q\) preserves lengths and angles (\(Q^T Q = I\)), this is used to solve the <strong>Least Squares</strong> problem in Linear Regression.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> QR is about <strong>Orthonormalization</strong>. We take messy columns and turn them into perpendicular unit vectors ($Q$), and a "recipe" matrix ($R$) that tells us how to rebuild the original. In ML, QR is the backbone of <strong>Linear Regression</strong> because $Q$ doesn't amplify numerical errors like basic inversion does.
      </div>
    </div>

    <div class="example-box">
      <h4>Problem: QR Factorization Intuition</h4>
      <p>Factor \(A = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}\) into \(Q\) and \(R\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Orthogonalize columns (Gram-Schmidt):</strong> Column 1 (\(\mathbf{a}_1\)) is already unit length and along the x-axis.</div></div>
      <div class="math-block">$$\mathbf{q}_1 = [1, 0]^T$$</div>
      
      <div class="step-box"><span class="step-num">2</span><div><strong>Project and Subtract:</strong> Keep the part of \(\mathbf{a}_2\) that is perpendicular to \(\mathbf{q}_1\).</div></div>
      <div class="math-block">$$\mathbf{q}_2 = [0, 1]^T$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> \(Q = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}, \quad R = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}\). In this case, \(A\) was already "mostly" orthogonal.</div></div>
    </div>

    <h2 id="svd">4. Singular Value Decomposition (SVD)</h2>
    <p>SVD is the "Swiss Army Knife" of Linear Algebra. Unlike Eigen-decomposition, it works for <strong>any</strong> \(m \times n\) matrix.</p>
    <div class="math-block">$$A = U \Sigma V^T$$</div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> SVD says <strong>any</strong> linear transformation can be broken into three steps: a rotation ($V^\top$), a scaling ($\Sigma$), and another rotation ($U$). It reveals the "true axes" of your data. The values in $\Sigma$ tell you importance—this is how <strong>SVD-based compression</strong> knows which data to keep and which to throw away.
      </div>
    </div>

    <visualizer topic="SVD" />

    <h3>Illustrative Example: SVD Manual Breakdown</h3>
    <div class="example-box">
      <h4>Problem: Decomposing a Scaling Matrix</h4>
      <p>Factor \(A = \begin{bmatrix} 3 & 0 \\ 0 & 2 \end{bmatrix}\) using SVD.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identify Singular Values (\(\Sigma\)):</strong> Since \(A\) is diagonal, the singular values are simply the diagonal elements in descending order.</div></div>
      <div class="math-block">$$\sigma_1 = 3, \quad \sigma_2 = 2 \implies \Sigma = \begin{bmatrix} 3 & 0 \\ 0 & 2 \end{bmatrix}$$</div>
      
      <div class="step-box"><span class="step-num">2</span><div><strong>Left Singular Vectors (U):</strong> These represent the output space rotation. Since no rotation occurred, \(U = I\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Right Singular Vectors (Vᵀ):</strong> These represent the input space rotation. Again, \(V^T = I\).</div></div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> \(A = [I][\text{diag}(3, 2)][I]\). For more complex matrices, \(U\) and \(V\) would contain eigenvectors of \(AA^T\) and \(A^TA\).</div></div>
    </div>

    <h3>Applications in ML</h3>
    <ul>
      <li><strong>Image Compression:</strong> Keeping only the largest \(k\) singular values to reconstruct a smaller image.</li>
      <li><strong>Latent Semantic Analysis (LSA):</strong> Finding hidden relationships in NLP.</li>
      <li><strong>PCA:</strong> Robust implementations typically use SVD for stability.</li>
    </ul>

    <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Key Insight:</strong> The singular values in \(\Sigma\) are the square roots of the eigenvalues of \(A^T A\), linking SVD directly to eigenvalue theory.</div></div>

    <h2 id="implementation">Implementation (Python/SciPy)</h2>
    <python-code>
import numpy as np
from scipy.linalg import lu, qr, cholesky, svd

A = np.array([[4, 12, -16], [12, 37, -43], [-16, -43, 98]])

# LU Decomposition
P, L, U = lu(A)

# Cholesky (Requires Symmetric Positive Definite)
L_chol = cholesky(A, lower=True)

# SVD
U_svd, s, Vh = svd(A)

print(f"SVD Singular Values: {s}")
    </python-code>

    <h2 id="comparison">Algorithm Complexity & Selection</h2>
    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Method</th><th>Complexity</th><th>Requirement</th><th>Best For</th></tr>
        </thead>
        <tbody>
          <tr><td>LU</td><td>\(O(2/3 n^3)\)</td><td>Square</td><td>Systems of Equations</td></tr>
          <tr><td>QR</td><td>\(O(2 n^3)\)</td><td>Any</td><td>Linear Regression</td></tr>
          <tr><td>Cholesky</td><td>\(O(1/3 n^3)\)</td><td>Symm + PD</td><td>Efficient Sampling</td></tr>
          <tr><td>SVD</td><td>\(O(mn^2)\)</td><td>Any</td><td>PCA / NLP / Compression</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>LU/Cholesky</strong> are for efficiency in solving equations.</li>
      <li><strong>QR</strong> is for numerical stability in regression.</li>
      <li><strong>SVD</strong> is for discovering latent structure (latent features) in data.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> SVD directly uses eigenvalues. Now, reach the crown jewel of Linear Algebra: <strong><a href="#/mathematics/linear-algebra/eigenvalues-eigenvectors">Eigenvalues & Eigenvectors</a></strong>.
    </div>
  `},o={id:"eigenvalues-eigenvectors",title:"Eigenvalues and Eigenvectors",description:"Eigen-analysis reveals the internal structure of a matrix — its eigenvalues and eigenvectors — which are the foundations of PCA, Singular Value Decomposition, and spectral analysis.",color:"#FFD600",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🏹 Linear Algebra · Spectral Theory</div>
      <h1>Eigenvalues and Eigenvectors</h1>
      <p>In Linear Algebra, <strong>Eigenvalues</strong> and <strong>Eigenvectors</strong> provide a way to decompose a matrix into its most fundamental components. When a linear transformation (represented by a matrix \(A\)) is applied to most vectors, they change both their magnitude and their direction. However, <strong>Eigenvectors</strong> are special vectors that only change in magnitude (scale) when the transformation is applied; their direction remains the same.</p>
    </div>

    <visualizer topic="Eigenvalues" />

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">1. Core Theory: Scaling & Span</a>
      <a href="#derivation">2. Mathematical Derivation (λ and v)</a>
      <a href="#example">3. Illustrative Example Walkthrough</a>
      <a href="#stability">4. Stability of Neural Networks (Spectral Radius)</a>
      <a href="#pca">5. Application: PCA & Spectral Clustering</a>
      <a href="#factorization">6. Application: Matrix Factorization</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Real-world AI Applications</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Matrix Multiplication:</strong> \(A\mathbf{v}\).</li>
        <li><strong>Determinants:</strong> To solve the characteristic equation.</li>
        <li><strong>Identity Matrix:</strong> \(I\).</li>
      </ul>
    </div>

    <h2 id="theory">1. Core Theory: Scaling & Span</h2>
    <p>For a square matrix \(A\), a non-zero vector \(\mathbf{v}\) is an <strong>Eigenvector</strong> if:</p>
    <div class="math-block">$$A\mathbf{v} = \lambda\mathbf{v}$$</div>
    <p>where \(\lambda\) (Lambda) is a scalar called the <strong>Eigenvalue</strong> corresponding to that eigenvector. This means the vector \(\mathbf{v}\) essentially points in a direction that \(A\) does not rotate; it only stretches or shrinks it by \(\lambda\).</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> Most vectors get knocked off their path in a transformation. <strong>Eigenvectors</strong> are the survivors: they stay on their span. In ML, these are the **principal axes** of your data. The eigenvalue $\lambda$ is the "energy" or variance along that axis.
      </div>
    </div>

    <h2 id="derivation">2. Mathematical Derivation (λ and v)</h2>
    <p>To find \(\lambda\), we rearrange the equation to \((A - \lambda I)\mathbf{v} = 0\). For a non-trivial solution (\(\mathbf{v} \neq 0\)), the matrix \((A - \lambda I)\) must be singular:</p>
    
    <div class="step-box"><span class="step-num">1</span><strong>The Characteristic Equation:</strong> Solve \(\det(A - \lambda I) = 0\) to find the eigenvalues.</div>
    <div class="step-box"><span class="step-num">2</span><strong>Finding Vectors:</strong> For each \(\lambda\), solve the linear system \((A - \lambda I)\mathbf{v} = 0\) to find the corresponding eigenvectors.</div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> To find the eigenvalues, we look for when $(A - \lambda I)$ squashes space (determinant = 0). This polynomial $\det(A - \lambda I)$ is the "DNA" of the matrix. Once you have the roots, you have the spectral map of the transformation.
      </div>
    </div>

    <h2 id="example">3. Illustrative Example Walkthrough</h2>
    <div class="example-box">
      <h4>Problem: Finding Eigenvalues & Eigenvectors</h4>
      <p>Find the eigenpairs for \(A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Solve the Characteristic Equation:</strong> \(\det(A - \lambda I) = 0\).</div></div>
      <div class="math-block">$$(4-\lambda)(3-\lambda) - 2 = \lambda^2 - 7\lambda + 10 = 0$$</div>
      
      <div class="step-box"><span class="step-num">2</span><div><strong>Factor the Quadratic:</strong> \((\lambda - 5)(\lambda - 2) = 0\).</div></div>
      <div class="math-block">$$\lambda_1 = 5, \quad \lambda_2 = 2$$</div>

      <div class="step-box"><span class="step-num">3</span><div><strong>Compute Eigenvector for \(\lambda_1 = 5\):</strong> Solve \((A - 5I)\mathbf{v} = 0\).</div></div>
      <div class="math-block">$$\begin{bmatrix} -1 & 1 \\ 2 & -2 \end{bmatrix} \begin{bmatrix} v_1 \\ v_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \implies \mathbf{v}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> We found two eigenpairs. The most "dominant" eigenvalue is 5, representing the primary direction of scaling.</div></div>
    </div>

    <h2 id="stability">4. Stability of Neural Networks (Spectral Radius)</h2>
    <p>In Deep Learning, the <strong>Spectral Radius</strong> (the largest absolute eigenvalue) of your weight matrices determines if signals will explode or vanish. This is the cornerstone of <strong>Weight Initialization</strong> strategies.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> The Spectral Radius $\rho(A)$ is the "gain" of your layer. If $\rho(A) > 1$, gradients explode after many layers. If $\rho(A) < 1$, they vanish. Modern init strategies like <strong>Xavier/He</strong> keep this near 1 for stability.
      </div>
    </div>
    <div class="callout info">
      <div class="callout-icon">🚀</div>
      <div class="callout-body">
        <strong>The Rule:</strong> If \(\lambda_{max} > 1\), weights grow exponentially (Exploding Gradients). If \(\lambda_{max} << 1\), signals can vanish (Vanishing Gradients).
      </div>
    </div>

    <h2 id="pca">5. Application: PCA & Spectral Clustering</h2>
    <p><strong>PCA</strong> finds the eigenvectors of the data's covariance matrix. This reduces 100 features to the 10 most important ones without losing critical patterns.</p>
    <p><strong>Spectral Clustering</strong> uses the eigenvalues of a Graph Laplacian matrix \(L = D - A\) to map data into a space where clusters are easily separable, outperforming K-Means on non-spherical data.</p>

    <h2 id="factorization">6. Application: Matrix Factorization</h2>
    <p>If \(A\) is a symmetric matrix, it can be factored as \(A = Q \Lambda Q^T\), where \(Q\) is a matrix of eigenvectors and \(\Lambda\) is a diagonal matrix of eigenvalues. This is used in Recommendation Systems (like Netflix) to discover "latent features"—detecting a user's preference for 'Action' vs. 'Sci-Fi' from raw ratings.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> If $A$ is symmetric, it can be perfectly "decoupled" into independent axes. ML uses this to find <strong>hidden factors</strong>. In a movie matrix, $Q$ might represent Genres, and $\Lambda$ tells you how much a person likes each genre.
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

# A symmetric matrix (e.g., a covariance matrix)
A = np.array([[4, 2], [2, 3]])

# Calculate Eigenvalues and Eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(A)

print("Eigenvalues:", eigenvalues)
print("Eigenvectors (Columns):\n", eigenvectors)

# Verification: Av = lambda * v
v1 = eigenvectors[:, 0]
lambda1 = eigenvalues[0]
print("\nMatch Av == lv:", np.allclose(A @ v1, lambda1 * v1))
    </python-code>

    <h2 id="applications">Real-world AI Applications</h2>
    <ul>
      <li><strong>Principal Component Analysis (PCA):</strong> Dimensionality reduction for data visualization and feature engineering.</li>
      <li><strong>Computer Vision:</strong> <strong>Eigenfaces</strong> uses eigenvectors of face images for facial recognition.</li>
      <li><strong>Google PageRank:</strong> The importance of a webpage is calculated as the dominant eigenvalue of the web-link matrix.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Eigenvectors</strong> define the "axes" or directions of a transformation.</li>
      <li><strong>Eigenvalues</strong> define the "strength" or magnitude of scaling along those axes.</li>
      <li>Large eigenvalues in a covariance matrix signify the most important patterns in data.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> With the theory mastered, let's explore practical <strong><a href="#/mathematics/linear-algebra/eigenvalues-eigenvectors-pca">Solved SVD & PCA Examples</a></strong>.
    </div>
    </div>
  `},n={id:"eigenvalues-eigenvectors-pca",title:"Solved Examples: Eigenvalues, Eigenvectors, and PCA",description:"Practical, step-by-step examples to solidify your understanding of Eigenvalues, Eigenvectors, and Principal Component Analysis (PCA). Each example walks through the complete solution with all intermediate steps shown.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📉 Linear Algebra · Principal Component Analysis</div>
      <h1>Principal Component Analysis (PCA) Walkthrough</h1>
      <p>PCA is the crown jewel of dimensionality reduction. It bridges the gap between <strong>Linear Algebra</strong> (SVD/Eigenvectors) and <strong>Statistics</strong> (Variance/Covariance) to simplify high-dimensional data without losing its soul.</p>
    </div>

    <visualizer topic="PCA" />

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">1. The Intuition: Variance as Information</a>
      <a href="#derivation">2. Mathematical Derivation (The 5 Steps)</a>
      <a href="#examples">3. Solved Practice Examples</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#summary-table">Summary Table</a>
    </div>

    <h2 id="theory">1. The Intuition: Variance as Information</h2>
    <p>In Machine Learning, we assume that the directions in which data varies the most are the directions that contain the most <strong>information</strong>. PCA finds these directions (Principal Components) and ignores the noise.</p>
    <div class="example-box">
      <h4>Age vs. Income (2D to 1D)</h4>
      <p>Imagine Age and Income are highly correlated. Instead of using two features, PCA finds the "trend line" (PC1) that explains most of the spread. By projecting data onto this 1D line, we capture the "Age-Income" effect while reducing dimensionality by 50%.</p>
    </div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> PCA works because it assumes <strong>Variance = Information</strong>. If a feature doesn't change much, it's probably noise. PCA rotates the coordinate system until the first axis (PC1) points toward the greatest spread of data.
      </div>
    </div>

    <h2 id="derivation">2. Mathematical Derivation (The 5 Steps)</h2>
    <p>This is the formal process for transforming a high-dimensional dataset \(X\) into a lower-dimensional subspace:</p>
    <div class="step-box"><span class="step-num">1</span><strong>Standardize:</strong> Mean-center the data (\(X_{centered} = X - \mu\)) so the data cloud is centered at the origin.</div>
    <div class="step-box"><span class="step-num">2</span><strong>Covariance Matrix:</strong> Compute \(C = \frac{1}{m-1} X^T X\) to measure how features vary together.</div>
    <div class="step-box"><span class="step-num">3</span><strong>Eigen-decomposition:</strong> Solve the characteristic equation \(Cv = \lambda v\). Eigenvectors define the new axes; eigenvalues define their "strength."</div>
    <div class="step-box"><span class="step-num">4</span><strong>Sort & Select:</strong> Rank eigenvalues in descending order. Pick the top \(k\) (where \(k < n\)) to form a projection matrix \(W\).</div>
    <div class="step-box"><span class="step-num">5</span><strong>Project:</strong> Transform the original data into the new subspace via \(X_{new} = X_{centered} \cdot W\).</div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> The <strong>Covariance Matrix</strong> $C$ is the bridge. It tells us which features move together. By finding the eigenvectors of $C$, we are finding the natural "skeleton" of the data distribution. Rank the eigenvalues, and you've ranked the features by information density.
      </div>
    </div>

    <h2 id="examples">3. Solved Practice Examples</h2>

    <h3>Illustrative Example: Finding Eigenvalues & Eigenvectors</h3>
    <div class="example-box">
      <h4>Problem: Manual Eigen-decomposition</h4>
      <p>Find the eigenvalues and eigenvectors for the matrix \(A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Solve the Characteristic Equation:</strong> \(\det(A - \lambda I) = 0 \implies \lambda^2 - 7\lambda + 10 = 0\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Factor the Quadratic:</strong> \((\lambda - 5)(\lambda - 2) = 0 \implies \lambda_1 = 5, \lambda_2 = 2\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Compute Eigenvector for \(\lambda_1=5\):</strong> Solve \((A-5I)\mathbf{v}=0 \implies \mathbf{v}_1 = [1, 1]^T\).</div></div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body">The <strong>Eigenvalues</strong> are \(\lambda_1 = 5\) and \(\lambda_2 = 2\). The primary axis of variance is the vector \([1, 1]\).</div></div>
    </div>

    <h3>Illustrative Example: Variance Selection</h3>
    <div class="example-box">
      <h4>Problem: Dimensionality Reduction Decision</h4>
      <p>If \(\lambda_1 = 15\), \(\lambda_2 = 4\), and \(\lambda_3 = 1\), how much variance is retained if we reduce to 2D?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Sum All Eigenvalues:</strong> \(\sum \lambda = 15 + 4 + 1 = 20\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Reconstructed Sum:</strong> \(15 + 4 = 19\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Calculate Ratio:</strong> \(\frac{19}{20} = 95\%\).</div></div>

      <div class="callout info"><div class="callout-icon">ℹ️</div><div class="callout-body"><strong>Conclusion:</strong> Keeping the first two components retains <strong>95%</strong> of original info.</div></div>
    </div>

    <h3>Illustrative Example: Interpreting PC Axes</h3>
    <div class="example-box">
      <h4>Problem: The "Size" Component in Height-Weight Data</h4>
      <p>In a dataset measuring Height and Weight, the first PC is \(\mathbf{v}_1 = [0.707, 0.707]\). What is its physical meaning?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Analyze Contributions:</strong> Both components are positive and equal.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Deduce Meaning:</strong> This axis represents a simultaneous increase in both features.</div></div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Interpretation:</strong> PC1 represents the <strong>"Overall Size"</strong> of the person. It captures the shared variance where taller people tend to be heavier.</div></div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

# 1. Create Synthetic 2D Data
X = np.array([[2.5, 2.4], [0.5, 0.7], [2.2, 2.9], [1.9, 2.2], [3.1, 3.0]])

# 2. Standardization & Covariance
X_centered = X - np.mean(X, axis=0)
cov_mat = np.cov(X_centered, rowvar=False)

# 3. Eigen-decomposition
eigen_values, eigen_vectors = np.linalg.eigh(cov_mat)

# 4. Sort and Project (Top 1 PC)
idx = np.argsort(eigen_values)[::-1]
v1 = eigen_vectors[:, idx[0]]
X_pca = X_centered @ v1

print("PCA 1D Projection:", X_pca)
    </python-code>

    <!-- SUMMARY TABLE -->
    <h2 id="summary-table">Summary Table for Quick Revision</h2>
    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Concept</th><th>Math Tool</th><th>Purpose</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Centering</strong></td><td>Arithmetic Mean</td><td>Removes bias; shifts data to origin.</td></tr>
          <tr><td><strong>Relationship</strong></td><td>Covariance Matrix</td><td>Measures how features change together.</td></tr>
          <tr><td><strong>Directions</strong></td><td>Eigenvectors</td><td>Defines the "Principal Components".</td></tr>
          <tr><td><strong>Importance</strong></td><td>Eigenvalues</td><td>Tells us how much variance each PC captures.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> With Linear Algebra mastered, we can move into the world of uncertainty: <strong><a href="#/mathematics/probability/basic-axioms">Basic Axioms of Probability</a></strong>.
    </div>
  `},r={id:"linear-algebra",title:"Linear Algebra",description:"Linear Algebra is the language of Machine Learning. It provides the mathematical framework for representing and processing high-dimensional data, from simple vectors to complex matrix decompositions.",keyConcepts:[{title:"Vectors & Foundations",description:"Dot Product, Norms (L1/L2), Linear Combinations, Span, and Basis."},{title:"Matrix Essentials",description:"Multiplication, Transpose, Inverse, and Identity mappings."},{title:"Matrix Properties",description:"Information metrics: Rank, Determinant, Trace, and Definiteness."},{title:"Vector Spaces",description:"Subspaces, independence, and orthogonal projections."},{title:"Matrix Decompositions",description:"Structural factorization via SVD, LU, Cholesky, and QR."},{title:"Eigen-analysis",description:"Spectral theory behind PCA, Clustering, and Matrix Factorization."},{title:"PCA Solved Examples",description:"Step-by-step walkthroughs of Eigen-decomposition and PCA."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Linear Algebra: <span class="text-accent italic">The Language of Machine Learning</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In the world of Machine Learning, <strong>Linear Algebra</strong> is not just a branch of mathematics; it is the fundamental language we use to communicate with data. If Machine Learning is the engine, Linear Algebra is the fuel and the chassis that holds everything together.
        </p>
        
        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          Everything from a single pixel in an image to the complex weights of a Large Language Model is represented using the concepts of Linear Algebra. By mastering this domain, you transition from someone who simply "uses" ML libraries to someone who understands the geometry of data.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- Why It Matters -->
      <div class="space-y-10">
        <div class="flex items-center gap-4">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Why It Matters</h3>
        </div>
        
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          When you train a model, you aren't just crunching numbers—you are performing <span class="italic text-accent-premium">high-dimensional transformations</span>. 
        </p>

        <ul class="space-y-8 list-none pl-0">
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Data Representation</strong>
              <p class="text-muted-premium font-normal">Almost all data—be it text, images, or audio—is converted into <strong>Vectors</strong> and <strong>Matrices</strong> before a computer can process it.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Dimensionality Reduction</strong>
              <p class="text-muted-premium font-normal">Techniques like <strong>Principal Component Analysis (PCA)</strong> use eigenvalues and eigenvectors to compress massive datasets while keeping the most important information.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Deep Learning</strong>
              <p class="text-muted-premium font-normal">Every "layer" in a neural network is essentially a massive matrix multiplication followed by a transformation.</p>
            </div>
          </li>
        </ul>
      </div>

      <hr class="border-border-premium/50" />

      <!-- Core Concepts -->
      <div class="space-y-10">
        <div class="flex items-center gap-4">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Core Concepts to Master</h3>
        </div>

        <p class="text-lg text-text-premium font-normal leading-relaxed">
          To build a strong intuition for ML, we will focus on these key areas:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Vectors & Spaces</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Understanding data points as coordinates in multi-dimensional space.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Matrix Operations</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Learning how to manipulate data through multiplication, transposition, and inversion.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Linear Transformations</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Visualizing how matrices can stretch, rotate, and compress space.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Eigenvalues & Eigenvectors</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Finding the 'hidden axes' along which data varies the most.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Matrix Decomposition</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Breaking complex matrices into simpler parts (like SVD) for efficient computation.</p>
          </div>
        </div>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <div class="flex items-center gap-4">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-accent">What to Expect</h3>
        </div>

        <p class="text-lg text-text-premium font-normal leading-relaxed">
          On this page, we move beyond rote memorization of formulas. We focus on <strong>geometric intuition</strong>. You will learn to see a matrix not just as a grid of numbers, but as a function that moves space. 
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "Mathematics is the art of giving the same name to different things."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Henri Poincaré</span>
          </div>
        </div>

        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          By the end of this module, you'll see that a recommendation system, a face recognizer, and a language translator all share the same mathematical DNA.
        </p>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to start?</p>
        <a 
          href="/#/mathematics/linear-algebra/vectors" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with The Vector
        </a>
      </div>

    </div>
  `,sections:[t,e,i,a,s,o,n]};export{r as LINEAR_ALGEBRA_DATA};
