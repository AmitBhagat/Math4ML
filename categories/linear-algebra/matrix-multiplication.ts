import { TopicSection } from '../../src/data/types';

export const matrixMultiplicationSection: TopicSection = {
  id: "matrix-multiplication",
  title: "Matrix Multiplication",
  description: "Matrix Multiplication is the engine that drives neural networks. It combines linear transformations into one.",
  color: "#D32F2F",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Linear Algebra · Multiplication</div>
      <h1>Matrix Multiplication: Chaining Influence</h1>
      <p>Combining two matrices (\(AB\)) is not just multiplication—it's <strong>Composition</strong>. It's the mathematical way of saying, "Do Transformation B, then do Transformation A." This is exactly what happens in every layer of a Neural Network.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example-composition">Example 1: Chaining Transformations</a>
      <a href="#example-shape">Example 2: Shape Mismatch Survival Guide</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>A matrix-vector product (\(Ax\)) takes a vector and "moves" it to a new location. Matrix multiplication (\(AB\)) takes <strong>all</strong> the vectors that B could possibly move and moves them <strong>again</strong> using A. This allows us to collapse multiple complex steps into a single matrix.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of Matrix Multiplication as a <strong>Relay Race</strong>. 
        Matrix B runs the first leg (processes the input), then hands the baton to Matrix A (processes B's output). 
        The product \(AB\) is the <strong>entire race</strong> condensed into one motion. 
        In ML, this is how a model goes from "Raw Image Pixels" to "Cat or Dog."
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>For \(C = AB\), the element \(c_{ij}\) is the <strong>dot product</strong> of the \(i\)-th row of A and the \(j\)-th column of B:</p>
    <div class="math-block">$$c_{ij} = \sum_{k=1}^{n} a_{ik}b_{kj}$$</div>
    <p><strong>Crucial Rule:</strong> The number of <strong>columns</strong> in A must match the number of <strong>rows</strong> in B.</p>

    <h2 id="example-composition">Example 1: Chaining Transformations</h2>
    <div class="example-box">
      <h4>Problem: Finding the Combined Rule</h4>
      <p>Let \(A = \begin{bmatrix} 1 & 2 \\ 3 & 1 \end{bmatrix}, B = \begin{bmatrix} 1 & 0 \\ 0 & 2 \end{bmatrix}\). Calculate \(AB\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Inner Product:</strong> Row 1 of A \(\cdot\) Col 1 of B = \((1 \times 1) + (2 \times 0) = 1\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Complete:</strong> Repeat for all Row-Col pairs.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Final Matrix:</strong> \(AB = \begin{bmatrix} 1 & 4 \\ 3 & 2 \end{bmatrix}\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Multiplication is <strong>not commutative</strong> (\(AB \neq BA\)). In the relay race, the order of runners matters!
        </div>
      </div>
    </div>

    <h2 id="example-shape">Example 2: Shape Mismatch Survival Guide</h2>
    <div class="example-box">
      <h4>Problem: Can they Multiply?</h4>
      <p>Check if \(A (3 \times 2)\) can multiply \(B (2 \times 5)\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Map:</strong> (Rows \(\times\) <strong>Cols</strong>) for A and (<strong>Rows</strong> \(\times\) Cols) for B.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Match:</strong> The inner numbers must be identical: (3 \(\times\) <strong>2</strong>) and (<strong>2</strong> \(\times\) 5).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Predict:</strong> The resulting matrix will have the outer dimensions (3 \(\times\) 5).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> YES. They align. This is the #1 debugging skill in building Neural Networks.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

A = np.array([[1, 2], [3, 4]])
b = np.array([5, 6])

# Matrix-Vector
y = A @ b 

# Matrix-Matrix
B = np.array([[1, 0], [0, 1]])
C = A @ B

print(f"Product: {C}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Neural Networks</strong>: Each layer \(y = \sigma(Wx + b)\) is a massive matrix multiplication (\(W \times x\)).</li>
      <li><strong>Attention Mechanisms</strong>: Query, Key, and Value interactions in LLMs.</li>
      <li><strong>Linear Transforms</strong>: Rotating, scaling, and shearing image data for augmentation.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Multiplication is the forward pass. But how do we work backwards? Explore <strong><a href="#/mathematics/linear-algebra/matrix-inverse">Matrix Inverse</a></strong>.
    </div>
  `
};
