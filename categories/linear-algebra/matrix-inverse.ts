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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In standard algebra, if you multiply by 5, you undo it by dividing by 5. In Linear Algebra, the <strong>Inverse</strong> is that numerical "Undo" button. We don't have a division sign for matrices, so we multiply by the Inverse to cancel out a transformation and return to the starting point. It is the mathematical bridge that allows us to find the original <strong>Input</strong> when we only know the <strong>Output</strong>. However, beware: not every transformation can be undone. If a matrix squashes your 3D world into a 2D sheet, that information is lost forever, and the matrix is said to be "Singular."</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Matrix Reciprocal</div>
      <p>A square matrix $A \in \mathbb{R}^{n \times n}$ is **Invertible** if there exists a matrix $A^{-1}$ such that:</p>
      <div class="math-block">
        $$A A^{-1} = A^{-1} A = I$$
      </div>
      <p>Where $I$ is the identity matrix. A matrix is invertible if and only if it is **Non-singular**, meaning its determinant is non-zero ($\det(A) \neq 0$). For a $2 \times 2$ matrix, the inverse is calculated as:</p>
      <div class="math-block">
        $$A^{-1} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$
      </div>
      <p class="text-xs opacity-70 mt-2">The inverse represents the reverse transformation. In higher dimensions, it is often computed via Gaussian Elimination or the Adjugate Matrix.</p>
    </div>
    
    <h2 id="example-undo" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The "Undo" Walkthrough</h2>
    
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
    

    <h2 id="example-system" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Solving a 2×2 System</h2>
    
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
    

    <h2 id="implementation">Implementation</h2>
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
    <p>The Inverse is your mathematical "Undo Button." It allows you to work backwards from an output to find the hidden original input that caused it.</p>
    <ul>
      <li><strong>The Normal Equation for Linear Regression</strong>: When we want the absolute best-fit line through a cloud of data points, we don't always have to use Gradient Descent. We can use the <strong>Normal Equation</strong> $(X^TX)^{-1}X^Ty$. By inverting the feature matrix, we solve for the model's weights in a single, surgical mathematical stroke, finding the global minimum instantly.</li>
      <li><strong>Cryptographic Decoding</strong>: Many encryption schemes (like the Hill Cipher) treat a message as a vector and multiply it by a secret "Key Matrix." To read the message, the receiver must calculate the inverse of that key matrix to "un-scramble" the data and return it to its readable form. Without the inverse, the noise is permanent.</li>
    </ul>
    <p>Teacher's Final Word: In real-world ML, we often avoid calculating the inverse of massive matrices directly because it’s computationally heavy (O(n³)). Instead, we use "Solvers" like LU decomposition that give us the same result with 10x more efficiency. But whether we calculate it or not, the theory of the inverse is what keeps the back-and-forth door of math open.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What happens when a matrix *can't* be inverted? What is that number that decides? Explore <strong><a href="#/mathematics/linear-algebra/determinants">Determinants</a></strong>.
    </div>
  `
};

