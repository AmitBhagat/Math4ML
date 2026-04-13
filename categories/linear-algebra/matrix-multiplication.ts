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

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Matrix Product</div>
      <p>Let $\mathbf{A}$ be an $m \times n$ matrix and $\mathbf{B}$ be an $n \times p$ matrix. The product $\mathbf{C} = \mathbf{A}\mathbf{B}$ is an $m \times p$ matrix where each entry $\mathbf{C}_{ij}$ is calculated as the dot product of the $i$-th row of $\mathbf{A}$ and the $j$-th column of $\mathbf{B}$.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Inner Product View</h3>
      <p>To compute the entry at row $i$ and column $j$ of the resulting matrix:</p>
      <div class="math-block">
        $$\mathbf{C}_{ij} = \sum_{k=1}^n \mathbf{A}_{ik} \mathbf{B}_{kj} = \mathbf{A}_{i,:} \cdot \mathbf{B}_{:,j}$$
      </div>
      <p>This means you grab the $i$-th row of the first matrix, the $j$-th column of the second, and "dot" them together.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. Dimension Compatibility (The Handshake Rule)</h3>
      <p>Multiplication is only defined if the "inner dimensions" match. If A is $(m \times \color{red}{n})$ and B is $(\color{red}{n} \times p)$, the $n$'s must be identical. Think of it as a handshake: the number of things A "outputs" in its row MUST match the number of things B "expects" in its column.</p>

      <p class="mt-4 italic text-sm">Gotcha: Matrix multiplication is <strong>Linear Transformation Composition</strong>. Calculating $C = AB$ is mathematically identical to applying $B$ first, then $A$. If B's output space doesn't match A's input space, the signal is lost.</p>
    </div>

    <visualizer topic="matrix-multiplication" />

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A matrix-vector product (\(Ax\)) takes a vector and "moves" it to a new location. <strong>Matrix Multiplication</strong> (\(AB\)) takes <strong>all</strong> the vectors that B could possibly move and moves them <strong>again</strong> using A. It is the mathematical way of saying, "Take these results and process them some more." This allows us to collapse multiple complex, sequential steps into a single, unified matrix. In Artificial Intelligence, this is how we go from "Raw Data" to "High-Level Decisions" through layers of stacked influence.</p>
    
    <div class="callout secondary">
      <p class="italic text-sm">Gotcha: Order matters. $AB \neq BA$. In a relay race, the order of the runners changes the final time. In math, rotating then stretching is NOT the same as stretching then rotating. Always keep your transformation sequence in check.</p>
    </div>
    

    
    <h2 id="example-composition" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Chaining Transformations</h2>
    
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
    

    <h2 id="example-shape" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Shape Mismatch Survival Guide</h2>
    
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
    

    <h2 id="implementation">Implementation</h2>
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
    <p>Matrix multiplication is the "Engine" of AI. It is the mathematical way of saying, "Take these results and process them even more," allowing us to stack influence until we reach a decision.</p>
    <ul>
      <li><strong>Neural Network Forward Pass</strong>: Every single layer in a deep network is really just a massive matrix multiplication. It takes the input vector from the previous layer and multiplies it by a "Weight Matrix." This operation mixes the features together, intensifying the signal that matters and killing the noise that doesn't. Without this operation, modern AI simply wouldn't exist.</li>
      <li><strong>3D Coordinate Transformations in AR/VR</strong>: When you move your head while wearing a VR headset, the computer must recalculate every pixel in the 3D world. It uses matrix multiplication to rotate, scale, and translate millions of points in space instantly, ensuring the virtual world moves in perfect sync with your real-world motion.</li>
    </ul>
    <p>Teacher's Final Word: Matrix multiplication isn't just about crunching numbers; it's about <strong>Composition</strong>. It allows us to chain simple rules together to build incredibly complex intelligence, layer by layer. Mastering this is the absolute key to understanding how an AI "thinks" internally.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Multiplication is the forward pass. But how do we work backwards? Explore <strong><a href="#/mathematics/linear-algebra/matrix-inverse">Matrix Inverse</a></strong>.
    </div>
  `
};


