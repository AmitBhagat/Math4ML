import { TopicSection } from '../../src/data/types';

export const matrixInverseSection: TopicSection = {
  id: "matrix-inverse",
  title: "Matrix Inverse",
  description: "The Matrix Inverse is the 'Undo' button for linear transformations. It's the mathematical way to find original inputs from outputs.",
  color: "#1E88E5",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Linear Algebra · Inverse</div>
      <h1>Matrix Inverse: The Undo Button</h1>
      <p>The <strong>Inverse</strong> of a Matrix \(A\) is denoted by \(A^{-1}\). If Matrix A transforms Vector \(\mathbf{x}\) into Vector \(\mathbf{y}\), then Matrix \(A^{-1}\) reverses that process, bringing you right back to \(\mathbf{x}\).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example-undo">Example 1: The "Undo" Walkthrough</a>
      <a href="#example-system">Example 2: Solving a 2×2 System</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>In algebra, if you multiply by 5, you undo it by dividing by 5. In Linear Algebra, the <strong>Inverse</strong> is that "division." We don't have a division sign for matrices, so we multiply by the Inverse to cancel out a transformation.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of a Matrix Inverse as <strong>Unraveling a Knot</strong>. 
        Matrix A tied the knot (mixed the data). 
        The Inverse \(A^{-1}\) is the precise set of movements needed to untie it. 
        But beware: not every knot can be untied—if the matrix squashed the data into 0, that info is gone forever!
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>The matrix \(A^{-1}\) is defined by the property:</p>
    <div class="math-block">$$AA^{-1} = A^{-1}A = I$$</div>
    <p>where \(I\) is the <strong>Identity Matrix</strong> (the "1" of matrices). For a 2x2 matrix, the formula is:</p>
    <div class="math-block">$$A^{-1} = \frac{1}{\det(A)} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$</div>

    <h2 id="example-undo">Example 1: The "Undo" Walkthrough</h2>
    <div class="example-box">
      <h4>Problem: Finding the Inverse of A = [[4, 7], [2, 6]]</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Determinant:</strong> \((4 \times 6) - (7 \times 2) = 10\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Rearrange:</strong> Swap diagonals (4 & 6), negate off-diagonals (7 & 2).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Resulting Matrix:</strong> \(\begin{bmatrix} 6 & -7 \\ -2 & 4 \end{bmatrix}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Final Scale:</strong> Divide all elements by 10.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> \(A^{-1} = \begin{bmatrix} 0.6 & -0.7 \\ -0.2 & 0.4 \end{bmatrix}\). Multiplying this with original A will give you back the Identity!
        </div>
      </div>
    </div>

    <h2 id="example-system">Example 2: Solving a 2×2 System</h2>
    <div class="example-box">
      <h4>Problem: Finding Inputs x given Outputs y</h4>
      <p>Assume \(A\mathbf{x} = \mathbf{b}\). If \(\mathbf{b} = [1, 2]\) and you have \(A^{-1}\), find \(\mathbf{x}\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Equation:</strong> Multiply both sides by \(A^{-1}\) from the left: \(\mathbf{x} = A^{-1}\mathbf{b}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Substitute:</strong> If \(A^{-1} = [[0.6, -0.7], [-0.2, 0.4]]\) and \(\mathbf{b} = [1, 2]\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Result:</strong> \(\mathbf{x} = [0.6 - 1.4, -0.2 + 0.8] = [-0.8, 0.6]\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We solved for the unknown inputs by simply "multiplying back." This is how many statistics algorithms find the best-fit line.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

A = np.array([[4, 7], [2, 6]])

# Finding Inverse
if np.linalg.det(A) != 0:
    A_inv = np.linalg.inv(A)
    print(f"Inverse:\n{A_inv}")
else:
    print("Matrix is Singular (No Undo Button!)")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Linear Regression (Normal Equation)</strong>: \(\beta = (X^T X)^{-1} X^T y\) relies on inverting the feature correlation matrix.</li>
      <li><strong>Optimization</strong>: Newton’s Method uses the inverse of the Hessian to find the local minimum faster.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> What happens when a matrix *can't* be inverted? What is that number that decides? Explore <strong><a href="#/mathematics/linear-algebra/determinants">Determinants</a></strong>.
    </div>
  `
};
