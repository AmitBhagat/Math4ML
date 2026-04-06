import { TopicSection } from '../../src/data/types';

export const matricesSection: TopicSection = {
  id: "matrices",
  title: "Introduction to Matrices",
  description: "In Machine Learning, a Matrix is a rectangular array of numbers arranged in rows and columns. While a vector represents a single data point, a matrix typically represents an entire Dataset, where rows correspond to individual samples and columns correspond to features.",
  html: String.raw`
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
      <strong>Linking Rule:</strong> Understanding how matrices transform space leads us to <strong>Eigenvalues and Eigenvectors</strong>, which help us find the most important directions (axes) in our data.
    </div>
  `
};
