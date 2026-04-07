const e={id:"vectors",title:"Introduction to Vectors",description:"In Machine Learning, Vectors are the fundamental building blocks used to represent data. Whether it is a single pixel in an image, a word in a natural language model, or a feature set for a house price prediction, everything is mathematically represented as a vector.",color:"#0D47A1",html:String.raw`
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
  `},t={id:"matrices",title:"Introduction to Matrices",description:"In Machine Learning, a Matrix is a rectangular array of numbers arranged in rows and columns. While a vector represents a single data point, a matrix typically represents an entire Dataset, where rows correspond to individual samples and columns correspond to features.",color:"#1976D2",html:String.raw`
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
      <strong>Next Step:</strong> Understanding the "DNA" of a matrix is crucial for model stability. Next, we explore <strong><a href="#/mathematics/linear-algebra/matrix-properties">Matrix Properties</a></strong> like Rank, Determinants, and Trace.
    </div>
  `},i={id:"matrix-properties",title:"Introduction to Matrix Properties",description:'Matrix properties like Rank, Determinant, Trace, and Positive Definiteness act as the "DNA" of a matrix. They tell us whether a system of equations has a solution, how a transformation scales space, and whether an optimization problem (like training a model) has a stable minimum.',color:"#1976D2",html:String.raw`
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
  `},a={id:"vector-spaces",title:"Introduction to Vector Spaces",description:"A Vector Space is a collection of vectors that can be added together and multiplied by scalars while remaining within the same space. In Machine Learning, we often work in ℝⁿ (an n-dimensional real space), where each dimension represents a specific feature of our data.",color:"#0D47A1",html:String.raw`
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
      <strong>Next Step:</strong> Having mastered the basis and projections of where data lives, we can now factorize these structures into simpler components with <strong><a href="#/mathematics/linear-algebra/matrix-decompositions">Matrix Decompositions</a></strong>.
    </div>
  `},n={id:"matrix-decompositions",title:"Introduction to Matrix Decompositions",description:"In Machine Learning, Matrix Decomposition (or Factorization) is the process of breaking down a matrix into a product of simpler, constituent matrices. This is analogous to factoring a number (e.g., 15 = 3 × 5). Decomposing a matrix makes it easier to solve linear equations, invert matrices, and compress data.",color:"#90CAF9",html:String.raw`
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

    <div class="example-box">
      <h4>Solved Example: LU Factorization</h4>
      <p>Factor \(A = \begin{bmatrix} 2 & 3 \\ 8 & 15 \end{bmatrix}\).</p>
      <ol>
        <li>Set \(u_{11} = 2, u_{12} = 3\).</li>
        <li>Find \(l_{21}\) such that \(l_{21} \times 2 = 8 \implies l_{21} = 4\).</li>
        <li>Find \(u_{22}\) such that \((4 \times 3) + u_{22} = 15 \implies u_{22} = 3\).</li>
      </ol>
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> \(L = \begin{bmatrix} 1 & 0 \\ 4 & 1 \end{bmatrix}, U = \begin{bmatrix} 2 & 3 \\ 0 & 3 \end{bmatrix}\).</div></div>
    </div>

    <h2 id="cholesky">2. Cholesky Decomposition</h2>
    <p>Cholesky Decomposition is a special case of LU for <strong>Symmetric, Positive Definite</strong> matrices. It factors \(A\) into \(LL^T\). Because it exploits symmetry, it is roughly twice as fast as LU decomposition and much more numerically stable.</p>
    <h3>Applications in ML</h3>
    <ul>
      <li><strong>Gaussian Processes:</strong> Used to sample from multivariate normal distributions.</li>
      <li><strong>Kalman Filters:</strong> For state estimation in robotics.</li>
    </ul>

    <h2 id="qr">3. QR Decomposition</h2>
    <p>QR Decomposition factors a matrix into an <strong>Orthogonal</strong> matrix (\(Q\)) and an <strong>Upper Triangular</strong> matrix (\(R\)). Since \(Q\) preserves lengths and angles (\(Q^T Q = I\)), this is used to solve the <strong>Least Squares</strong> problem in Linear Regression.</p>

    <h2 id="svd">4. Singular Value Decomposition (SVD)</h2>
    <p>SVD is the "Swiss Army Knife" of Linear Algebra. Unlike Eigen-decomposition, it works for <strong>any</strong> \(m \times n\) matrix.</p>
    <div class="math-block">$$A = U \Sigma V^T$$</div>
    <div class="def-box">
        <div class="def-title">What the components represent</div>
        <ul style="margin:0">
          <li><strong>\(U\):</strong> Left singular vectors (Rotations in output space).</li>
          <li><strong>\(\Sigma\):</strong> Singular values (Scaling factor for each axis).</li>
          <li><strong>\(V^T\):</strong> Right singular vectors (Rotations in input space).</li>
        </ul>
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
  `},o={id:"eigenvalues-eigenvectors",title:"Introduction to Eigenvalues and Eigenvectors",description:"In Linear Algebra, Eigenvalues and Eigenvectors provide a way to decompose a matrix into its most fundamental components. When a linear transformation (represented by a matrix A) is applied to most vectors, they change both their magnitude and their direction. However, Eigenvectors are special vectors that only change in magnitude (scale) when the transformation is applied; their direction remains the same.",color:"#42A5F5",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">λ Linear Algebra · Eigenvalues & Eigenvectors</div>
      <h1>Introduction to Eigenvalues and Eigenvectors</h1>
      <p>In Linear Algebra, <strong>Eigenvalues</strong> and <strong>Eigenvectors</strong> provide a way to decompose a matrix into its most fundamental components. When a linear transformation (represented by a matrix \(A\)) is applied to most vectors, they change both their magnitude and their direction. However, <strong>Eigenvectors</strong> are special vectors that only change in magnitude (scale) when the transformation is applied; their direction remains the same.</p>
    </div>

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

    <h2 id="derivation">2. Mathematical Derivation (λ and v)</h2>
    <p>To find \(\lambda\), we rearrange the equation to \((A - \lambda I)\mathbf{v} = 0\). For a non-trivial solution (\(\mathbf{v} \neq 0\)), the matrix \((A - \lambda I)\) must be singular:</p>
    
    <div class="step-box"><span class="step-num">1</span><strong>The Characteristic Equation:</strong> Solve \(\det(A - \lambda I) = 0\) to find the eigenvalues.</p></div>
    <div class="step-box"><span class="step-num">2</span><strong>Finding Vectors:</strong> For each \(\lambda\), solve the linear system \((A - \lambda I)\mathbf{v} = 0\) to find the corresponding eigenvectors.</p></div>

    <h2 id="example">3. Illustrative Example Walkthrough</h2>
    <div class="example-box">
      <h4>Problem: Find eigenvalues for \(A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}\)</h4>
      <ol>
        <li>\(\det\left(\begin{bmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{bmatrix}\right) = (4-\lambda)(3-\lambda) - 2 = 0\).</li>
        <li>\(\lambda^2 - 7\lambda + 12 - 2 = \lambda^2 - 7\lambda + 10 = 0\).</li>
        <li>Factoring: \((\lambda - 5)(\lambda - 2) = 0 \implies \lambda_1 = 5, \lambda_2 = 2\).</li>
      </ol>
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body">For \(\lambda_1 = 5\), we solve \((A - 5I)\mathbf{v} = 0 \implies v_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}\).</div></div>
    </div>

    <h2 id="stability">4. Stability of Neural Networks (Spectral Radius)</h2>
    <p>In Deep Learning, the <strong>Spectral Radius</strong> (the largest absolute eigenvalue) of your weight matrices determines if signals will explode or vanish. This is the cornerstone of <strong>Weight Initialization</strong> strategies.</p>
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
  `},s={id:"eigenvalues-eigenvectors-pca",title:"Solved Examples: Eigenvalues, Eigenvectors, and PCA",description:"Practical, step-by-step examples to solidify your understanding of Eigenvalues, Eigenvectors, and Principal Component Analysis (PCA). Each example walks through the complete solution with all intermediate steps shown.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📉 Linear Algebra · Principal Component Analysis</div>
      <h1>Principal Component Analysis (PCA) Walkthrough</h1>
      <p>PCA is the crown jewel of dimensionality reduction. It bridges the gap between <strong>Linear Algebra</strong> (SVD/Eigenvectors) and <strong>Statistics</strong> (Variance/Covariance) to simplify high-dimensional data without losing its soul.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">1. The Intuition: Variance as Information</a>
      <a href="#derivation">2. Mathematical Derivation (The 5 Steps)</a>
      <a href="#ex1">3. Solved Practice Case: Finding Eigen-pairs</a>
      <a href="#ex2">4. Solved Practice Case: Variance Selection</a>
      <a href="#ex3">5. Solved Practice Case: Interpreting PC1</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#summary-table">Summary Table</a>
    </div>

    <h2 id="theory">1. The Intuition: Variance as Information</h2>
    <p>In Machine Learning, we assume that the directions in which data varies the most are the directions that contain the most <strong>information</strong>. PCA finds these directions (Principal Components) and ignores the noise.</p>
    <div class="example-box">
      <h4>Age vs. Income (2D to 1D)</h4>
      <p>Imagine Age and Income are highly correlated. Instead of using two features, PCA finds the "trend line" (PC1) that explains most of the spread. By projecting data onto this 1D line, we capture the "Age-Income" effect while reducing dimensionality by 50%.</p>
    </div>

    <h2 id="derivation">2. Mathematical Derivation (The 5 Steps)</h2>
    <p>This is the formal process for transforming a high-dimensional dataset \(X\) into a lower-dimensional subspace:</p>
    <div class="step-box"><span class="step-num">1</span><strong>Standardize:</strong> Mean-center the data (\(X_{centered} = X - \mu\)) so the data cloud is centered at the origin.</div>
    <div class="step-box"><span class="step-num">2</span><strong>Covariance Matrix:</strong> Compute \(C = \frac{1}{m-1} X^T X\) to measure how features vary together.</div>
    <div class="step-box"><span class="step-num">3</span><strong>Eigen-decomposition:</strong> Solve the characteristic equation \(Cv = \lambda v\). Eigenvectors define the new axes; eigenvalues define their "strength."</div>
    <div class="step-box"><span class="step-num">4</span><strong>Sort & Select:</strong> Rank eigenvalues in descending order. Pick the top \(k\) (where \(k < n\)) to form a projection matrix \(W\).</div>
    <div class="step-box"><span class="step-num">5</span><strong>Project:</strong> Transform the original data into the new subspace via \(X_{new} = X_{centered} \cdot W\).</div>

    <h2 id="examples">3. Solved Practice Examples</h2>

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
        <div class="math-block">$$\det(A - \lambda I) = 0 \implies \begin{vmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{vmatrix} = 0$$</div>

        <div class="step-label">Step 2: Solve the Quadratic Equation</div>
        <div class="math-block">$$\lambda^2 - 7\lambda + 10 = 0 \implies (\lambda - 5)(\lambda - 2) = 0$$</div>
        <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body">The <strong>Eigenvalues</strong> are \(\lambda_1 = 5\) and \(\lambda_2 = 2\).</div></div>

        <div class="step-label">Step 3: Find Eigenvectors for λ₁ = 5</div>
        <div class="math-block">$$(A - 5I)v = 0 \implies \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$</div>
        <p>From the first row: \(-x + y = 0 \implies x = y\). One possible <strong>Eigenvector</strong> is \(v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}\).</p>
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
          If \(\lambda_1 = 15\), \(\lambda_2 = 4\), and \(\lambda_3 = 1\), how much variance is retained in 2D?
        </div>

        <p>Total Variance = \(15 + 4 + 1 = 20\). Sum of top 2 = \(15 + 4 = 19\).</p>
        <div class="math-block">$$\frac{19}{20} \times 100 = 95\%$$</div>

        <div class="conclusion">
          <strong>Conclusion:</strong> By keeping the first two principal components, you retain <strong>95%</strong> of the original information while reducing the dimensionality.
        </div>
      </div>
    </div>

    <!-- EXAMPLE 3 -->
    <div class="solved-card" id="ex3">
      <div class="solved-header">
        <div class="solved-num">3</div>
        <div class="solved-title">PCA Interpretation: The "Size" Axis</div>
      </div>
      <div class="solved-body">
        <div class="problem-box">
          <div class="problem-label">Problem</div>
          In a dataset measuring "Height" and "Weight," \(v_1 = \begin{pmatrix} 0.707 \\ 0.707 \end{pmatrix}\) with \(\lambda_1 = 50\). What does this tell you?
        </div>

        <div class="step-label">Interpretation of Eigenvector (v₁)</div>
        <p>Since both components are positive and equal, this eigenvector represents an axis where Height and Weight increase together. This is the <strong>"Size"</strong> component. It shows the direction of maximum correlation.</p>
        <div class="callout info"><div class="callout-icon">ℹ️</div><div class="callout-body">The equal weighting (\(0.707 \approx 1/\sqrt{2}\)) means both Height and Weight contribute equally — a diagonal axis at 45° in the Height-Weight plane.</div></div>

        <div class="step-label">Interpretation of Eigenvalue (λ₁ = 50)</div>
        <p>A value of 50 indicates that a significant portion of the total spread (variance) is captured along this "Size" axis rather than by looking at height or weight individually.</p>
      </div>
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
  `,sections:[e,t,i,a,n,o,s]};export{r as LINEAR_ALGEBRA_DATA};
