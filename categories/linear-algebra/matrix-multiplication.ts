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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A matrix-vector product (\(Ax\)) takes a vector and "moves" it to a new location. <strong>Matrix Multiplication</strong> (\(AB\)) takes <strong>all</strong> the vectors that B could possibly move and moves them <strong>again</strong> using A. It is the mathematical way of saying, "Take these results and process them some more." This allows us to collapse multiple complex, sequential steps into a single, unified matrix. In Artificial Intelligence, this is how we go from "Raw Data" to "High-Level Decisions" through layers of stacked influence.</p>
    
    <visualizer topic="MatrixOperations" />

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Matrix Composition & Inner Dimensions</div>
      <p>Matrix Multiplication is the "Relay Race" of mathematics. It chains transformations together so that the output of one becomes the fuel for the next.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Suppose you have two linear maps: $g: \mathbb{R}^n \to \mathbb{R}^p$ (represented by matrix $B$) and $f: \mathbb{R}^p \to \mathbb{R}^m$ (represented by matrix $A$). The <strong>composition</strong> $(f \circ g)$ is a single jump from $\mathbb{R}^n$ directly to $\mathbb{R}^m$. The matrix representing this combined leap is the product $AB$.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>To find the entry at $C_{ij}$, we look at the interaction between the $i$-th row of $A$ and the $j$-th column of $B$. This is because the $j$-th column of $B$ tells us where the $j$-th basis vector lands after the first map, and the rows of $A$ tell us how that new position is transformed by the second map. Algebraically, this is a sum of products:</p>
      <div class="math-block">
        $$c_{ij} = \sum_{k=1}^p a_{ik} b_{kj}$$
      </div>
      <p>Note the <strong>Inner Dimension Match</strong>: The number of columns in $A$ ($p$) must exactly equal the number of rows in $B$ ($p$). If they don't, the "relay baton" is dropped, and the composition is mathematically impossible.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Identity</h3>
      <p>For any $\mathbf{x} \in \mathbb{R}^n$:</p>
      <div class="math-block">
        $$(AB)\mathbf{x} = A(B\mathbf{x})$$
      </div>
      <p class="mt-4 italic text-sm">Gotcha: Order matters. $AB \neq BA$. In a relay race, the order of the runners changes the final time. In math, rotating then stretching is NOT the same as stretching then rotating. Always keep your transformation sequence in check.</p>
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


