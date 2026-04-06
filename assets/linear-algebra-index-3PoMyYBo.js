const e={id:"vectors",title:"Introduction to Vectors",description:"In Machine Learning, Vectors are the fundamental building blocks used to represent data. Whether it is a single pixel in an image, a word in a natural language model, or a feature set for a house price prediction, everything is mathematically represented as a vector.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Linear Algebra · Vectors</div>
      <h1>Introduction to Vectors</h1>
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

    <h3>Mathematical Derivation</h3>
    <p>For two vectors \(\mathbf{a}\) and \(\mathbf{b}\) in \(\mathbb{R}^n\):</p>
    <div class="math-block">$$\mathbf{a} \cdot \mathbf{b} = \sum_{i=1}^{n} a_i b_i = a_1b_1 + a_2b_2 + \dots + a_nb_n$$</div>
    <p>Alternatively, using the angle \(\theta\) between them:</p>
    <div class="math-block">$$\mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \|\mathbf{b}\| \cos(\theta)$$</div>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: Dot Product Calculation</h4>
      <p>Calculate the dot product of \(\mathbf{a} = [2, 3]\) and \(\mathbf{b} = [4, -1]\).</p>
      <ol>
        <li>Multiply corresponding components: \((2 \times 4) + (3 \times -1)\)</li>
        <li>Sum them: \(8 - 3 = 5\)</li>
      </ol>
      <div class="math-block">$$\mathbf{a} \cdot \mathbf{b} = (2)(4) + (3)(-1) = 8 - 3 = 5$$</div>
      <p><strong>Result:</strong> 5. Since the value is positive, the vectors point in a similar general direction.</p>
    </div>

    <h2 id="norms">2. Vector Norms (L₁ and L₂)</h2>
    <p>A <strong>Norm</strong> is a function that assigns a strictly positive length or size to a vector.</p>

    <h3>Core Theory</h3>
    <ul>
      <li><strong>L₁ Norm (Manhattan Distance):</strong> The sum of the absolute values of the components. It is often used in <strong>Lasso Regularization</strong> to encourage sparsity in models.</li>
      <li><strong>L₂ Norm (Euclidean Distance):</strong> The square root of the sum of squared components. It is the most common distance metric and is used in <strong>Ridge Regularization</strong>.</li>
    </ul>

    <h3>Mathematical Derivation</h3>
    <p>The general \(p\)-norm is given by:</p>
    <div class="math-block">$$\|\mathbf{x}\|_p = \left( \sum_{i=1}^{n} |x_i|^p \right)^{1/p}$$</div>
    <ul>
      <li><strong>L₁ Norm (\(p=1\)):</strong> \(\|\mathbf{x}\|_1 = \sum_{i=1}^{n} |x_i|\)</li>
      <li><strong>L₂ Norm (\(p=2\)):</strong> \(\|\mathbf{x}\|_2 = \sqrt{\sum_{i=1}^{n} x_i^2}\)</li>
    </ul>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: Computing Norms</h4>
      <p>For \(\mathbf{v} = [3, -4]\):</p>
      <div class="math-block">$$\|\mathbf{v}\|_1 = |3| + |-4| = 3 + 4 = 7$$</div>
      <div class="math-block">$$\|\mathbf{v}\|_2 = \sqrt{3^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$</div>
    </div>

    <h2 id="span">3. Linear Combinations, Span, and Basis</h2>
    <p>These concepts define how we navigate and construct vector spaces.</p>

    <h3>Core Theory</h3>
    <ul>
      <li><strong>Linear Combination:</strong> A new vector created by multiplying vectors by scalars and adding them together: \(\mathbf{y} = c_1\mathbf{v}_1 + c_2\mathbf{v}_2\).</li>
      <li><strong>Span:</strong> The set of all possible linear combinations of a group of vectors. If the span covers the entire space, those vectors can reach any point in that space.</li>
      <li><strong>Basis:</strong> A set of vectors that are <strong>linearly independent</strong> and whose span covers the entire space. It is the "minimalist" set of directions needed to define a space.</li>
    </ul>

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
  `},t={id:"matrices",title:"Introduction to Matrices",description:"In Machine Learning, a Matrix is a rectangular array of numbers arranged in rows and columns. While a vector represents a single data point, a matrix typically represents an entire Dataset, where rows correspond to individual samples and columns correspond to features.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🟪 Linear Algebra · Matrices</div>
      <h1>Introduction to Matrices</h1>
      <p>In Machine Learning, a <strong>Matrix</strong> is a rectangular array of numbers arranged in rows and columns. While a vector represents a single data point, a matrix typically represents an entire <strong>Dataset</strong>, where rows correspond to individual samples and columns correspond to features.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#definition">Matrix Definition</a>
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

    <h2 id="mult">1. Matrix Multiplication</h2>
    <p>Matrix multiplication is not a simple element-wise operation. It is a way of composing linear transformations.</p>

    <h3>Core Theory</h3>
    <p>For the product \(C = AB\) to exist, the number of columns in \(A\) must equal the number of rows in \(B\). If \(A\) is \((m \times n)\) and \(B\) is \((n \times p)\), then \(C\) will be \((m \times p)\). Each element \(c_{ij}\) is the <strong>dot product</strong> of the \(i\)-th row of \(A\) and the \(j\)-th column of \(B\).</p>

    <h3>Mathematical Derivation</h3>
    <p>The element in the \(i\)-th row and \(j\)-th column is defined as:</p>
    <div class="math-block">$$c_{ij} = \sum_{k=1}^{n} a_{ik}b_{kj}$$</div>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: 2×2 Matrix Multiplication</h4>
      <p>Let \(A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}\) and \(B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}\).</p>
      <ul>
        <li>\(c_{11} = (1 \times 5) + (2 \times 7) = 5 + 14 = 19\)</li>
        <li>\(c_{12} = (1 \times 6) + (2 \times 8) = 6 + 16 = 22\)</li>
        <li>\(c_{21} = (3 \times 5) + (4 \times 7) = 15 + 28 = 43\)</li>
        <li>\(c_{22} = (3 \times 6) + (4 \times 8) = 18 + 32 = 50\)</li>
      </ul>
      <div class="math-block">$$C = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}$$</div>
    </div>

    <h2 id="transpose">2. Matrix Transpose</h2>
    <p>The transpose of a matrix is an operator which flips a matrix over its diagonal.</p>

    <h3>Core Theory</h3>
    <p>Transposing switches the row and column indices. It is frequently used in ML to align dimensions for matrix multiplication, especially when calculating the gradient or handling weights.</p>

    <h3>Mathematical Derivation</h3>
    <p>If \(A\) has elements \(a_{ij}\), then \(A^T\) has elements \(a_{ji}\):</p>
    <div class="math-block">$$(A^T)_{ij} = A_{ji}$$</div>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: Transpose of a 2×3 Matrix</h4>
      <p>If \(A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}\), then \(A^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix}\).</p>
      <div class="callout info"><div class="callout-icon">ℹ️</div><div class="callout-body"><strong>Note:</strong> The shape changes from \((2 \times 3)\) to \((3 \times 2)\).</div></div>
    </div>

    <h2 id="identity">3. Identity Matrix (I)</h2>
    <p>The <strong>Identity Matrix</strong> is a square matrix with ones on the main diagonal and zeros elsewhere.</p>

    <h3>Core Theory</h3>
    <p>It acts as the number "1" in matrix algebra. Multiplying any matrix \(A\) by the identity matrix \(I\) results in the original matrix \(A\):</p>
    <div class="math-block">$$AI = IA = A$$</div>

    <h3>Mathematical Representation</h3>
    <p>For a \(3 \times 3\) space:</p>
    <div class="math-block">$$I_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$</div>

    <h2 id="inverse">4. Matrix Inverse</h2>
    <p>The inverse of a square matrix \(A\) is a matrix \(A^{-1}\) such that their product is the identity matrix.</p>

    <h3>Core Theory</h3>
    <p>Not all matrices have an inverse. A matrix must be <strong>square</strong> and <strong>non-singular</strong> (its determinant \(\neq 0\)). In ML, inverses are used to solve systems of linear equations, such as in the <strong>Normal Equation</strong> for Linear Regression.</p>

    <h3>Mathematical Derivation (for 2×2)</h3>
    <p>For \(A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}\), the inverse is:</p>
    <div class="math-block">$$A^{-1} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$</div>
    <p>where \(ad - bc\) is the <strong>determinant</strong> \((\det(A))\).</p>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: Finding the Inverse of a 2×2 Matrix</h4>
      <p>Find the inverse of \(A = \begin{bmatrix} 4 & 7 \\ 2 & 6 \end{bmatrix}\).</p>
      <ol>
        <li><strong>Determinant:</strong> \((4 \times 6) - (7 \times 2) = 24 - 14 = 10\)</li>
        <li><strong>Swap and Negate:</strong> \(\begin{bmatrix} 6 & -7 \\ -2 & 4 \end{bmatrix}\)</li>
        <li><strong>Multiply by \(1/10\):</strong></li>
      </ol>
      <div class="math-block">$$A^{-1} = \frac{1}{10}\begin{bmatrix} 6 & -7 \\ -2 & 4 \end{bmatrix} = \begin{bmatrix} 0.6 & -0.7 \\ -0.2 & 0.4 \end{bmatrix}$$</div>
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
      <strong>Next Step:</strong> Matrix properties define a model's stability. Next, we explore the geometry of where data "lives" in <strong><a href="#/mathematics/linear-algebra/vector-spaces">Vector Spaces</a></strong>.
    </div>
  `},i={id:"matrix-properties",title:"Introduction to Matrix Properties",description:'Matrix properties like Rank, Determinant, Trace, and Positive Definiteness act as the "DNA" of a matrix. They tell us whether a system of equations has a solution, how a transformation scales space, and whether an optimization problem (like training a model) has a stable minimum.',html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Linear Algebra · Matrix Properties</div>
      <h1>Introduction to Matrix Properties</h1>
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

    <h2 id="rank">1. Rank of a Matrix</h2>
    <p>The <strong>Rank</strong> of a matrix represents the number of linearly independent rows or columns in the matrix.</p>

    <h3>Core Theory</h3>
    <p>Rank tells us the "true dimensionality" of the information contained in a matrix. If a \(3 \times 3\) matrix has a rank of 2, it means one row is a redundant combination of the others, and the matrix effectively operates in 2D space.</p>
    <ul>
      <li><strong>Full Rank:</strong> When \(\text{rank}(A) = \min(m, n)\).</li>
      <li><strong>Rank Deficient:</strong> When \(\text{rank}(A) < \min(m, n)\).</li>
    </ul>

    <h3>Mathematical Derivation</h3>
    <p>The rank is often found by converting a matrix to <strong>Row Echelon Form (REF)</strong> using Gaussian elimination. The number of non-zero rows in REF is the rank.</p>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: Computing the Rank</h4>
      <p>Find the rank of \(A = \begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix}\).</p>
      <ol>
        <li>Perform row operation: \(R_2 \to R_2 - 2R_1\).</li>
        <li>\(A \to \begin{bmatrix} 1 & 2 \\ 0 & 0 \end{bmatrix}\).</li>
      </ol>
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> Rank is 1. (The rows are linearly dependent).</div></div>
    </div>

    <h2 id="det">2. Determinant (det(A) or |A|)</h2>
    <p>The <strong>Determinant</strong> is a scalar value that can be calculated from a square matrix.</p>

    <h3>Core Theory</h3>
    <p>Geometrically, the determinant represents the <strong>scaling factor</strong> of the linear transformation described by the matrix.</p>
    <ul>
      <li>If \(\det(A) = 0\), the matrix is <strong>singular</strong> (non-invertible) and "squashes" space into a lower dimension.</li>
      <li>If \(\det(A) = 1\), the transformation preserves volume.</li>
    </ul>

    <h3>Mathematical Derivation (for 2×2)</h3>
    <p>For \(A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}\):</p>
    <div class="math-block">$$\det(A) = ad - bc$$</div>
    <p>For a \(3 \times 3\) matrix, use cofactor expansion.</p>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: Computing the Determinant</h4>
      <p>\(A = \begin{bmatrix} 3 & 1 \\ 2 & 2 \end{bmatrix}\).</p>
      <div class="math-block">$$\det(A) = (3 \times 2) - (1 \times 2) = 6 - 2 = 4$$</div>
      <p><strong>Interpretation:</strong> This transformation increases the area of any shape by a factor of 4.</p>
    </div>

    <h2 id="trace">3. Trace (tr(A))</h2>
    <p>The <strong>Trace</strong> of a square matrix is the sum of its diagonal elements.</p>

    <h3>Core Theory</h3>
    <p>The trace is invariant under a change of basis. In ML, it is often used in the context of <strong>Matrix Derivatives</strong> and is related to the sum of the matrix's eigenvalues.</p>

    <h3>Mathematical Derivation</h3>
    <p>For \(A \in \mathbb{R}^{n \times n}\):</p>
    <div class="math-block">$$tr(A) = \sum_{i=1}^{n} a_{ii}$$</div>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: Computing the Trace</h4>
      <p>\(A = \begin{bmatrix} 5 & 2 & 1 \\ 0 & -1 & 4 \\ 3 & 1 & 10 \end{bmatrix}\).</p>
      <div class="math-block">$$tr(A) = 5 + (-1) + 10 = 14$$</div>
    </div>

    <h2 id="pd">4. Positive Definiteness</h2>
    <p>A symmetric matrix \(A\) is <strong>Positive Definite (PD)</strong> if for every non-zero vector \(\mathbf{x}\), the scalar \(\mathbf{x}^T A \mathbf{x}\) is strictly positive.</p>

    <h3>Core Theory</h3>
    <p>This property is critical in <strong>Optimization</strong>. If the Hessian matrix (matrix of second derivatives) of a loss function is Positive Definite, the function is locally convex, meaning any local minimum is a global minimum.</p>
    <ul>
      <li><strong>Positive Semi-Definite (PSD):</strong> \(\mathbf{x}^T A \mathbf{x} \geq 0\).</li>
    </ul>

    <h3>Mathematical Derivation</h3>
    <p>A matrix \(A\) is PD if:</p>
    <ol>
      <li>All its <strong>Eigenvalues</strong> are positive \((\lambda_i > 0)\).</li>
      <li>All its leading principal minors have positive determinants.</li>
    </ol>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: Testing Positive Definiteness</h4>
      <p>Is \(A = \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix}\) Positive Definite?</p>
      <p>Let \(\mathbf{x} = [x_1, x_2]^T\):</p>
      <div class="math-block">$$\mathbf{x}^T A \mathbf{x} = [x_1, x_2] \begin{bmatrix} 2x_1 \\ 3x_2 \end{bmatrix} = 2x_1^2 + 3x_2^2$$</div>
      <p>Since squares are always non-negative and \(\mathbf{x}\) is non-zero, the result is always \(> 0\).</p>
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> Yes, it is Positive Definite.</div></div>
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
  `},a={id:"vector-spaces",title:"Introduction to Vector Spaces",description:"A Vector Space is a collection of vectors that can be added together and multiplied by scalars while remaining within the same space. In Machine Learning, we often work in ℝⁿ (an n-dimensional real space), where each dimension represents a specific feature of our data.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🌐 Linear Algebra · Vector Spaces</div>
      <h1>Introduction to Vector Spaces</h1>
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
      <strong>Next Step:</strong> Having mastered decompositions like SVD, we reach the crown jewel of Linear Algebra: <strong><a href="#/mathematics/linear-algebra/eigenvalues-eigenvectors">Eigenvalues & Eigenvectors</a></strong>.
    </div>
  `},n={id:"matrix-decompositions",title:"Introduction to Matrix Decompositions",description:"In Machine Learning, Matrix Decomposition (or Factorization) is the process of breaking down a matrix into a product of simpler, constituent matrices. This is analogous to factoring a number (e.g., 15 = 3 × 5). Decomposing a matrix makes it easier to solve linear equations, invert matrices, and compress data.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔀 Linear Algebra · Matrix Decompositions</div>
      <h1>Introduction to Matrix Decompositions</h1>
      <p>In Machine Learning, <strong>Matrix Decomposition</strong> (or Factorization) is the process of breaking down a matrix into a product of simpler, constituent matrices. This is analogous to factoring a number (e.g., \(15 = 3 \times 5\)). Decomposing a matrix makes it easier to solve linear equations, invert matrices, and compress data.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#lu">1. LU Decomposition</a>
      <a href="#cholesky">2. Cholesky Decomposition</a>
      <a href="#qr">3. QR Decomposition</a>
      <a href="#svd">4. Singular Value Decomposition (SVD)</a>
      <a href="#implementation">Implementation (Python/NumPy/SciPy)</a>
      <a href="#summary">Summary Table</a>
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
    <p>LU Decomposition factors a square matrix \(A\) into a <strong>Lower Triangular</strong> matrix (\(L\)) and an <strong>Upper Triangular</strong> matrix (\(U\)).</p>

    <h3>Core Theory</h3>
    <p>It is primarily used to solve systems of linear equations (\(Ax = b\)). Instead of calculating a costly inverse, we solve two simpler triangular systems: \(Ly = b\) and then \(Ux = y\).</p>

    <h3>Mathematical Derivation</h3>
    <p>For \(A \in \mathbb{R}^{n \times n}\):</p>
    <div class="math-block">$$A = LU$$</div>
    <p>Where:</p>
    <div class="math-block">$$L = \begin{bmatrix} 1 & 0 \\ l_{21} & 1 \end{bmatrix} \quad \text{and} \quad U = \begin{bmatrix} u_{11} & u_{12} \\ 0 & u_{22} \end{bmatrix}$$</div>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: LU Factorization</h4>
      <p>Factor \(A = \begin{bmatrix} 2 & 3 \\ 8 & 15 \end{bmatrix}\).</p>
      <ol>
        <li>Set \(u_{11} = 2, u_{12} = 3\).</li>
        <li>Find \(l_{21}\) such that \(l_{21} \times 2 = 8 \implies l_{21} = 4\).</li>
        <li>Find \(u_{22}\) such that \((4 \times 3) + u_{22} = 15 \implies u_{22} = 3\).</li>
      </ol>
      <div class="math-block">$$L = \begin{bmatrix} 1 & 0 \\ 4 & 1 \end{bmatrix}, \quad U = \begin{bmatrix} 2 & 3 \\ 0 & 3 \end{bmatrix}$$</div>
    </div>

    <h2 id="cholesky">2. Cholesky Decomposition</h2>
    <p>Cholesky Decomposition is a special case of LU for <strong>Symmetric, Positive Definite</strong> matrices.</p>

    <h3>Core Theory</h3>
    <p>It factors \(A\) into \(LL^T\). Because it exploits symmetry, it is roughly twice as fast as LU decomposition and much more numerically stable.</p>

    <h3>Mathematical Derivation</h3>
    <div class="math-block">$$A = LL^T$$</div>
    <p>Where \(L\) is a lower triangular matrix with positive diagonal entries.</p>

    <h3>Applications in ML</h3>
    <ul>
      <li><strong>Gaussian Processes:</strong> Used to sample from multivariate normal distributions.</li>
      <li><strong>Kalman Filters:</strong> For state estimation in robotics.</li>
    </ul>

    <h2 id="qr">3. QR Decomposition</h2>
    <p>QR Decomposition factors a matrix into an <strong>Orthogonal</strong> matrix (\(Q\)) and an <strong>Upper Triangular</strong> matrix (\(R\)).</p>

    <h3>Core Theory</h3>
    <p>\(Q\) contains orthonormal columns (\(Q^T Q = I\)), meaning it preserves lengths and angles. \(R\) contains the "coefficients" of the transformation. This is widely used to solve the <strong>Least Squares</strong> problem in Linear Regression.</p>

    <h3>Mathematical Derivation</h3>
    <div class="math-block">$$A = QR$$</div>
    <p>Usually computed using the <strong>Gram-Schmidt process</strong> or <strong>Householder reflections</strong>.</p>

    <h2 id="svd">4. Singular Value Decomposition (SVD)</h2>
    <p>SVD is the "Swiss Army Knife" of Linear Algebra. Unlike Eigen-decomposition, it works for <strong>any</strong> \(m \times n\) matrix.</p>

    <h3>Core Theory</h3>
    <p>SVD decomposes a matrix into three parts:</p>
    <ol>
      <li><strong>\(U\):</strong> Left singular vectors (Orthogonal — represents rotations in the output space).</li>
      <li><strong>\(\Sigma\) (Sigma):</strong> Singular values (Diagonal — represents scaling factors).</li>
      <li><strong>\(V^T\):</strong> Right singular vectors (Orthogonal — represents rotations in the input space).</li>
    </ol>

    <h3>Mathematical Derivation</h3>
    <div class="math-block">$$A = U \Sigma V^T$$</div>
    <p>The singular values in \(\Sigma\) are the square roots of the eigenvalues of \(A^T A\).</p>

    <h3>Applications in ML</h3>
    <ul>
      <li><strong>Image Compression:</strong> Keeping only the largest \(k\) singular values to reconstruct a lower-quality but smaller image.</li>
      <li><strong>Latent Semantic Analysis (LSA):</strong> Finding hidden relationships between documents and terms.</li>
      <li><strong>PCA:</strong> Modern PCA implementations typically use SVD for better numerical stability.</li>
    </ul>

    <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Key Insight:</strong> The singular values in \(\Sigma\) are the square roots of the eigenvalues of \(A^T A\), linking SVD directly to eigenvalue theory.</div></div>

    <h2 id="implementation">Implementation (Python/NumPy/SciPy)</h2>
    <python-code>
import numpy as np
from scipy.linalg import lu, cholesky, qr, svd

A = np.array([[4, 12, -16], [12, 37, -43], [-16, -43, 98]])

# LU Decomposition
P, L, U = lu(A)

# Cholesky (Requires Symmetric Positive Definite)
L_chol = cholesky(A, lower=True)

# QR Decomposition
Q, R = qr(A)

# SVD
U_svd, s, Vh = svd(A)

print(f"SVD Singular Values: {s}")
    </python-code>

    <h2 id="summary">Summary Table</h2>
    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead><tr><th>Decomposition</th><th>Requirements</th><th>Main Use Case</th></tr></thead>
        <tbody>
          <tr><td><strong>LU</strong></td><td>Square Matrix</td><td>Solving linear systems (\(Ax=b\))</td></tr>
          <tr><td><strong>Cholesky</strong></td><td>Symmetric + PD</td><td>Fast optimization, Gaussian sampling</td></tr>
          <tr><td><strong>QR</strong></td><td>Any Matrix</td><td>Linear Regression (Least Squares)</td></tr>
          <tr><td><strong>SVD</strong></td><td>Any Matrix</td><td>Data Compression, PCA, NLP</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>LU/Cholesky</strong> are for efficiency in solving equations.</li>
      <li><strong>QR</strong> is for numerical stability in regression.</li>
      <li><strong>SVD</strong> is for discovering the underlying structure (latent features) of data.</li>
    </ul>

    <div class="linking-rule">
      <strong>Linking Rule:</strong> Having mastered how to decompose data structures, we now have the foundation for <strong>Optimization</strong>. Specifically, we can use these tools to solve for the weights of a model where the "change" in error is minimized using <strong>Calculus</strong>.
    </div>
  `},o={id:"eigenvalues-eigenvectors",title:"Introduction to Eigenvalues and Eigenvectors",description:"In Linear Algebra, Eigenvalues and Eigenvectors provide a way to decompose a matrix into its most fundamental components. When a linear transformation (represented by a matrix A) is applied to most vectors, they change both their magnitude and their direction. However, Eigenvectors are special vectors that only change in magnitude (scale) when the transformation is applied; their direction remains the same.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">λ Linear Algebra · Eigenvalues & Eigenvectors</div>
      <h1>Introduction to Eigenvalues and Eigenvectors</h1>
      <p>In Linear Algebra, <strong>Eigenvalues</strong> and <strong>Eigenvectors</strong> provide a way to decompose a matrix into its most fundamental components. When a linear transformation (represented by a matrix \(A\)) is applied to most vectors, they change both their magnitude and their direction. However, <strong>Eigenvectors</strong> are special vectors that only change in magnitude (scale) when the transformation is applied; their direction remains the same.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#core">1. Core Theory &amp; Mathematical Derivation</a>
      <a href="#core" class="sub">↳ How to Find Eigenvalues &amp; Eigenvectors</a>
      <a href="#core" class="sub">↳ Illustrative Example</a>
      <a href="#pca">2. Principal Component Analysis (PCA)</a>
      <a href="#spectral">3. Spectral Clustering</a>
      <a href="#factorization">4. Matrix Factorization</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
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

    <h2 id="core">1. Core Theory &amp; Mathematical Derivation</h2>
    <p>For a square matrix \(A\), a non-zero vector \(\mathbf{v}\) is an <strong>Eigenvector</strong> if:</p>
    <div class="math-block">$$A\mathbf{v} = \lambda\mathbf{v}$$</div>
    <p>where \(\lambda\) (Lambda) is a scalar called the <strong>Eigenvalue</strong> corresponding to that eigenvector.</p>

    <h3>How to Find Them (Step-by-Step)</h3>
    <div class="step-box"><span class="step-num">1</span><strong>The Characteristic Equation:</strong> Rearrange the equation to \((A - \lambda I)\mathbf{v} = 0\).</div>
    <div class="step-box"><span class="step-num">2</span><strong>Solve for \(\lambda\):</strong> For a non-trivial solution (\(\mathbf{v} \neq 0\)), the matrix \((A - \lambda I)\) must be singular. Therefore, we solve: \(\det(A - \lambda I) = 0\)</div>
    <div class="step-box"><span class="step-num">3</span><strong>Solve for \(\mathbf{v}\):</strong> Once you have the eigenvalues, plug each \(\lambda\) back into \((A - \lambda I)\mathbf{v} = 0\).</div>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Example: Finding Eigenvalues</h4>
      <p>Find eigenvalues for \(A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}\).</p>
      <ol>
        <li>\(\det\left(\begin{bmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{bmatrix}\right) = (4-\lambda)(3-\lambda) - 2 = 0\).</li>
        <li>\(\lambda^2 - 7\lambda + 12 - 2 = \lambda^2 - 7\lambda + 10 = 0\).</li>
        <li>Factoring: \((\lambda - 5)(\lambda - 2) = 0\).</li>
      </ol>
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> Eigenvalues are \(\lambda_1 = 5,\; \lambda_2 = 2\).</div></div>
    </div>

    <h2 id="pca">2. Principal Component Analysis (PCA)</h2>
    <p>PCA is a dimensionality reduction technique that uses Eigen-decomposition to transform high-dimensional data into a lower-dimensional form while retaining as much variance as possible.</p>

    <h3>The Logic</h3>
    <ol>
      <li>Calculate the <strong>Covariance Matrix</strong> of the data.</li>
      <li>Find the <strong>Eigenvalues</strong> and <strong>Eigenvectors</strong> of this covariance matrix.</li>
      <li>The eigenvector with the <strong>highest eigenvalue</strong> is the <strong>First Principal Component</strong> (the direction of maximum variance).</li>
      <li>Project the data onto these top eigenvectors to reduce dimensions.</li>
    </ol>
    <div class="callout info"><div class="callout-icon">📐</div><div class="callout-body"><strong>ML Context:</strong> PCA reduces 100 features to the 10 most important ones to speed up training and reduce noise without losing critical information.</div></div>

    <h2 id="spectral">3. Spectral Clustering</h2>
    <p>Unlike K-Means, which assumes spherical clusters, <strong>Spectral Clustering</strong> uses the eigenvalues of a similarity matrix to perform dimensionality reduction before clustering in fewer dimensions.</p>

    <h3>The Logic</h3>
    <ol>
      <li>Construct an <strong>Adjacency Matrix</strong> (how close points are).</li>
      <li>Compute the <strong>Graph Laplacian</strong> matrix \(L = D - A\).</li>
      <li>Find the eigenvalues of \(L\). The "spectral" part refers to using the bottom eigenvectors (the ones with the smallest non-zero eigenvalues) to map data into a space where clusters are easily separable.</li>
    </ol>

    <h2 id="factorization">4. Matrix Factorization</h2>
    <p>Matrix Factorization (like <strong>SVD — Singular Value Decomposition</strong>) decomposes a matrix into a product of matrices.</p>

    <h3>The Logic</h3>
    <p>If \(A\) is a symmetric matrix, it can be factored as:</p>
    <div class="math-block">$$A = Q \Lambda Q^T$$</div>
    <p>where \(Q\) is a matrix of eigenvectors and \(\Lambda\) (Capital Lambda) is a diagonal matrix of eigenvalues. In Recommendation Systems (like Netflix), this is used to discover "latent features" (e.g., a user's preference for 'Sci-Fi' or 'Action') by decomposing the User-Movie rating matrix.</p>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

# Define a symmetric matrix (e.g., a covariance matrix)
A = np.array([[4, 2], [2, 3]])

# Calculate Eigenvalues and Eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(A)

print("Eigenvalues:", eigenvalues)
print("Eigenvectors (Columns):\n", eigenvectors)

# Verification: Av = lambda * v
v1 = eigenvectors[:, 0]
lambda1 = eigenvalues[0]
print("\nA @ v1:", np.dot(A, v1))
print("lambda1 * v1:", lambda1 * v1)
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>PCA:</strong> Reducing 100 features to the 10 most important ones to speed up training.</li>
      <li><strong>Computer Vision:</strong> <strong>Eigenfaces</strong> uses eigenvectors of face images for recognition.</li>
      <li><strong>Google PageRank:</strong> The "importance" of a webpage is essentially an eigenvalue problem of the web-link matrix.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Eigenvectors</strong> define the "axes" or directions of a transformation.</li>
      <li><strong>Eigenvalues</strong> define the "strength" or importance of those directions.</li>
      <li>Large eigenvalues in a covariance matrix signify the most important patterns in data.</li>
    </ul>

    <div class="linking-rule">
      <strong>Linking Rule:</strong> Now that we have covered the static properties of data via Linear Algebra, we can transition to <strong>Calculus</strong>, which allows us to understand how these values <em>change</em>, leading us to the heart of ML training: <strong>Gradient Descent</strong>.
    </div>
  `},s={id:"eigenvalues-eigenvectors-pca",title:"Solved Examples: Eigenvalues, Eigenvectors, and PCA",description:"Practical, step-by-step examples to solidify your understanding of Eigenvalues, Eigenvectors, and Principal Component Analysis (PCA). Each example walks through the complete solution with all intermediate steps shown.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📝 Solved Examples · Eigenvalues, Eigenvectors & PCA</div>
      <h1>Solved Examples: Eigenvalues, Eigenvectors, and PCA</h1>
      <p>Following the GeeksforGeeks pattern, here are practical, step-by-step examples to solidify your understanding of the concepts discussed. Each example walks through the complete solution with all intermediate steps shown.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Examples in This Page</div>
      <a href="#ex1">Example 1 — Finding Eigenvalues and Eigenvectors</a>
      <a href="#ex2">Example 2 — PCA Selection (Variance Explained)</a>
      <a href="#ex3">Example 3 — PCA Interpretation</a>
      <a href="#summary-table">Summary Table for Quick Revision</a>
    </div>

    <!-- EXAMPLE 1 -->
    <div class="solved-card" id="ex1">
      <div class="solved-header">
        <div class="solved-num">1</div>
        <div class="solved-title">Finding Eigenvalues and Eigenvectors</div>
      </div>
      <div class="solved-body">
        <div class="problem-box">
          <div class="problem-label">Problem</div>
          Find the eigenvalues and eigenvectors for the matrix \(A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}\).
        </div>

        <div class="step-label">Step 1: Set up the Characteristic Equation</div>
        <div class="math-block">$$\det(A - \lambda I) = 0$$
$$\begin{vmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{vmatrix} = 0$$</div>

        <div class="step-label">Step 2: Solve the Quadratic Equation</div>
        <div class="math-block">$$(4-\lambda)(3-\lambda) - (2)(1) = 0$$
$$\lambda^2 - 7\lambda + 12 - 2 = 0 \implies \lambda^2 - 7\lambda + 10 = 0$$</div>
        <p>Factoring the quadratic: \((\lambda - 5)(\lambda - 2) = 0\).</p>
        <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body">The <strong>Eigenvalues</strong> are \(\lambda_1 = 5\) and \(\lambda_2 = 2\).</div></div>

        <div class="step-label">Step 3: Find Eigenvectors for λ₁ = 5</div>
        <div class="math-block">$$(A - 5I)v = 0 \implies \begin{pmatrix} 4-5 & 1 \\ 2 & 3-5 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$
$$\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$</div>
        <p>From the first row: \(-x + y = 0 \implies x = y\).</p>
        <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body">One possible <strong>Eigenvector</strong> is \(v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}\).</div></div>

        <div class="step-label">Step 4: Find Eigenvectors for λ₂ = 2</div>
        <div class="math-block">$$(A - 2I)v = 0 \implies \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$</div>
        <p>From the first row: \(2x + y = 0 \implies y = -2x\).</p>
        <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body">One possible <strong>Eigenvector</strong> is \(v_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}\).</div></div>
      </div>
    </div>

    <!-- EXAMPLE 2 -->
    <div class="solved-card" id="ex2">
      <div class="solved-header">
        <div class="solved-num">2</div>
        <div class="solved-title">PCA Selection (Variance Explained)</div>
      </div>
      <div class="solved-body">
        <div class="problem-box">
          <div class="problem-label">Problem</div>
          Suppose you perform PCA on a dataset with 3 features. You calculate the eigenvalues of the covariance matrix as \(\lambda_1 = 15\), \(\lambda_2 = 4\), and \(\lambda_3 = 1\). How much variance is retained if you reduce the data to 2 dimensions?
        </div>

        <div class="step-label">Step 1: Calculate Total Variance</div>
        <p>Total Variance = Sum of all eigenvalues:</p>
        <div class="math-block">$$\text{Total} = 15 + 4 + 1 = 20$$</div>

        <div class="step-label">Step 2: Calculate Variance of Top 2 Components</div>
        <p>Sum of \(\lambda_1\) and \(\lambda_2\) (the highest values):</p>
        <div class="math-block">$$\text{Sum} = 15 + 4 = 19$$</div>

        <div class="step-label">Step 3: Calculate Percentage</div>
        <div class="math-block">$$\frac{19}{20} \times 100 = 95\%$$</div>

        <div class="conclusion">
          <strong>Conclusion:</strong> By keeping the first two principal components, you retain <strong>95%</strong> of the original information while reducing the dimensionality by 33%.
        </div>
      </div>
    </div>

    <!-- EXAMPLE 3 -->
    <div class="solved-card" id="ex3">
      <div class="solved-header">
        <div class="solved-num">3</div>
        <div class="solved-title">PCA Interpretation</div>
      </div>
      <div class="solved-body">
        <div class="problem-box">
          <div class="problem-label">Problem</div>
          In a dataset measuring "Height" and "Weight," the first Eigenvector (Principal Component 1) is found to be \(v_1 = \begin{pmatrix} 0.707 \\ 0.707 \end{pmatrix}\) with \(\lambda_1 = 50\). What does this tell you?
        </div>

        <div class="step-label">Interpretation of Eigenvector (v₁)</div>
        <p>Since both components are positive and equal, this eigenvector represents an axis where Height and Weight increase together. This is the "Size" component. It shows the direction of maximum correlation.</p>
        <div class="math-block">$$v_1 = \begin{pmatrix} 0.707 \\ 0.707 \end{pmatrix} \approx \begin{pmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{pmatrix}$$</div>
        <div class="callout info"><div class="callout-icon">ℹ️</div><div class="callout-body">The equal weighting (\(0.707 \approx 1/\sqrt{2}\)) means both Height and Weight contribute equally to this principal component — a diagonal axis at 45° in the Height-Weight plane.</div></div>

        <div class="step-label">Interpretation of Eigenvalue (λ₁ = 50)</div>
        <p>A value of 50 indicates that a significant portion of the total spread (variance) in the population is captured along this "Size" axis rather than by looking at height or weight individually.</p>
        <div class="math-block">$$\lambda_1 = 50 \implies \text{Variance along PC1} = 50 \text{ units}^2$$</div>

        <div class="conclusion">
          <strong>Conclusion:</strong> The first principal component captures a "Size" effect where Height and Weight move together. The eigenvalue of 50 quantifies how much of the total dataset variance is explained by this single axis.
        </div>
      </div>
    </div>

    <!-- SUMMARY TABLE -->
    <h2 id="summary-table">Summary Table for Quick Revision</h2>
    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Eigenvalue (\(\lambda\))</th>
            <th>Eigenvector (\(v\))</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Physical Meaning</strong></td>
            <td>Magnitude / Scaling factor</td>
            <td>Direction / Axis</td>
          </tr>
          <tr>
            <td><strong>In PCA</strong></td>
            <td>Amount of Variance captured</td>
            <td>The Principal Component itself</td>
          </tr>
          <tr>
            <td><strong>Selection Criteria</strong></td>
            <td>Keep the largest values</td>
            <td>Keep corresponding vectors</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout tip">
      <div class="callout-icon">🎯</div>
      <div class="callout-body">
        <strong>Key Insight:</strong> In PCA, you always sort eigenvalues in descending order. The eigenvector corresponding to the largest eigenvalue is the <strong>First Principal Component</strong> — the direction of greatest variance in your data.
      </div>
    </div>

    <div class="linking-rule">
      <strong>Linking Rule:</strong> Now that we have covered the static properties of data via Linear Algebra, we can transition to <strong>Calculus</strong>, which allows us to understand how these values <em>change</em>, leading us to the heart of ML training: <strong>Gradient Descent</strong>.
    </div>
  `},r={id:"linear-algebra",title:"Linear Algebra",description:"Linear Algebra is the language of Machine Learning. It provides the mathematical framework for representing and processing high-dimensional data, from simple vectors to complex matrix decompositions.",keyConcepts:[{title:"Vectors & Foundations",description:"Dot Product, Norms (L1/L2), Linear Combinations, Span, and Basis."},{title:"Matrix Essentials",description:"Multiplication, Transpose, Inverse, and Identity mappings."},{title:"Matrix Properties",description:"Information metrics: Rank, Determinant, Trace, and Definiteness."},{title:"Vector Spaces",description:"Subspaces, independence, and orthogonal projections."},{title:"Matrix Decompositions",description:"Structural factorization via SVD, LU, Cholesky, and QR."},{title:"Eigen-analysis",description:"Spectral theory behind PCA, Clustering, and Matrix Factorization."},{title:"PCA Solved Examples",description:"Step-by-step walkthroughs of Eigen-decomposition and PCA."}],sections:[e,t,i,a,n,o,s]};export{r as LINEAR_ALGEBRA_DATA};
