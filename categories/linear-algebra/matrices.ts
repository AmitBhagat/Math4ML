import { TopicSection } from '../../src/data/types';

export const matricesSection: TopicSection = {
  id: "matrices",
  title: "Introduction to Matrices",
  description: "In Machine Learning, a Matrix is a rectangular array of numbers arranged in rows and columns. While a vector represents a single data point, a matrix typically represents an entire Dataset, where rows correspond to individual samples and columns correspond to features.",
  color: "#1976D2",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🟪 Linear Algebra · Matrices</div>
      <h1>Introduction to Matrices</h1>
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

    <h2 id="mult">1. Matrix Multiplication</h2>
    <p>Matrix multiplication is not a simple element-wise operation. It is a way of composing linear transformations.</p>

    <h3>Core Theory</h3>
    <p>For the product \(C = AB\) to exist, the number of columns in \(A\) must equal the number of rows in \(B\). If \(A\) is \((m \times n)\) and \(B\) is \((n \times p)\), then \(C\) will be \((m \times p)\). Each element \(c_{ij}\) is the <strong>dot product</strong> of the \(i\)-th row of \(A\) and the \(j\)-th column of \(B\).</p>

    <h3>Mathematical Derivation</h3>
    <p>The element in the \(i\)-th row and \(j\)-th column is defined as:</p>
    <div class="math-block">$$c_{ij} = \sum_{k=1}^{n} a_{ik}b_{kj}$$</div>

    <h3>Illustrative Example</h3>
    <div class="example-box">
      <h4>Problem: 2×2 Matrix Multiplication</h4>
      <p>Let \(A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}\) and \(B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}\). Calculate the product \(C = AB\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Row 1 × Column 1:</strong> \((1 \times 5) + (2 \times 7) = 19\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Row 1 × Column 2:</strong> \((1 \times 6) + (2 \times 8) = 22\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Row 2 × Column 1:</strong> \((3 \times 5) + (4 \times 7) = 43\).</div></div>
      <div class="step-box"><span class="step-num">4</span><div><strong>Row 2 × Column 2:</strong> \((3 \times 6) + (4 \times 8) = 50\).</div></div>

      <div class="math-block">$$C = \begin{bmatrix} 1(5)+2(7) & 1(6)+2(8) \\ 3(5)+4(7) & 3(6)+4(8) \end{bmatrix} = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}$$</div>
      
      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Intuition:</strong> Each entry in \(C\) captures how much the \(i\)-th row of the first matrix "aligns" with the \(j\)-th column of the second.</div></div>
    </div>

    <visualizer topic="Matrices" />

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
  `
};
