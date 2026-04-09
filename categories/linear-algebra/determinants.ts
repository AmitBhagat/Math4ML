import { TopicSection } from '../../src/data/types';

export const determinantsSection: TopicSection = {
  id: "determinants",
  title: "Determinants",
  description: "The Determinant is a single number that tells you how much a matrix 'stretches' or 'squashes' space.",
  color: "#FF9800",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Linear Algebra · Determinant</div>
      <h1>Determinants: The Scaling Factor</h1>
      <p>The <strong>Determinant</strong> \(\det(A)\) is a scalar value that tells you how a linear transformation changes the <strong>volume</strong> of space. It’s the "Scale Factor" of the matrix.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Imagine a unit square on a grid (area = 1). When you multiply it by a matrix, that square might stretch into a giant rectangle, tilt into a diamond, or get squashed into a tiny sliver. The <strong>Determinant</strong> is a single number that tells you exactly how much that "Volume" changed. If the determinant is 2, the space doubled in size; if it is 0.5, it shrank by half. More importantly, if it is <strong>Zero</strong>, it means the matrix is non-invertible—it has "deleted" a dimension of your data, like turning a 3D sphere into a flat 2D pancake. You can't undo that kind of damage!</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Leibniz Definition</div>
      <p>For a square matrix $A \in \mathbb{R}^{n \times n}$, the determinant $\det(A)$ is a scalar value defined by the permutation sum:</p>
      <div class="math-block">
        $$\det(A) = \sum_{\sigma \in S_n} \text{sgn}(\sigma) \prod_{i=1}^n A_{i, \sigma(i)}$$
      </div>
      <p>Where $S_n$ is the set of all permutations of $\{1, \dots, n\}$. Geometrically, $\det(A)$ represents the signed **Volume Scaling Factor** of the linear transformation. Essential takeaways include:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Invertibility</strong>: $A$ is invertible $\iff \det(A) \neq 0$.</li>
        <li><strong>Composition</strong>: $\det(AB) = \det(A)\det(B)$.</li>
        <li><strong>Linear Dependence</strong>: $\det(A) = 0$ implies the rows/columns are linearly dependent.</li>
      </ul>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of the Determinant as a <strong>"Scale Factor"</strong> or a <strong>"Dimension Watchdog."</strong> 
        It measures the "Stretching Power" of a matrix. 
        If \(\det = 0\), your transformation is destructive—you're losing information because you're squashing multiple points into the same spot. 
        In Machine Learning, we monitor determinants (like in the Jacobian) to ensure our transformations aren't accidentally "erasing" the very features we are trying to learn.
      </div>
    </div>

    <visualizer topic="Determinants" />

    <h2 id="rules">2. Properties & Meaning</h2>
    <ul>
      <li>\(\det(A) > 0\): Space is stretched/shrunk but keeps its orientation.</li>
      <li>\(\det(A) < 0\): Space is "flipped" inside out (like a reflection in a mirror).</li>
      <li>\(\det(A) = 0\): Matrix is non-invertible (Singular).</li>
    </ul>

    <h2 id="example-area" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Area Scaling of a Unit Square</h2>
    
      <h4>Problem: Finding the Scale Factor</h4>
      <p>For \(A = \begin{bmatrix} 3 & 0 \\ 0 & 2 \end{bmatrix}\), find the determinant and interpret it.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Calculate:</strong> \(\det(A) = (3 \times 2) - (0 \times 0) = 6\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Interpret:</strong> A \(1 \times 1\) unit square becomes a \(3 \times 2\) rectangle. Area increases by 6x.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Any shape you draw in that space will have exactly <strong>6 times</strong> the area after the transformation.
        </div>
      </div>
    

    <h2 id="example-singularity" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Singularity Check (Det = 0)</h2>
    
      <h4>Problem: Is this "Undoable"?</h4>
      <p>Check if \(A = \begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix}\) has an inverse.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Calculate:</strong> \(\det(A) = (1 \times 4) - (2 \times 2) = 0\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Identify:</strong> Notice the second row is just 2x the first row (redundant).</div>
        </div>
      </div>

      <div class="callout error">
        <div class="callout-icon">✕</div>
        <div class="callout-body">
          <strong>Result:</strong> \(\det = 0\). This matrix squashed the 2D plane into a 1D line. No inverse exists. This is why <strong>full rank</strong> data is critical in ML.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

A = np.array([[1, 2], [3, 4]])

# Calculating Determinant
det = np.linalg.det(A)

print(f"Determinant: {det:.2f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Jacobians</strong>: Calculating change in coordinate systems when training Variational Autoencoders (VAEs).</li>
      <li><strong>Probability Distributions</strong>: The "Normalization Constant" in Multivariate Normal distributions involves \(\det(\Sigma)\).</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Determinants tell us if space is squashed. But how *much* space is left? Explore <strong><a href="#/mathematics/linear-algebra/matrix-rank">Matrix Rank</a></strong>.
    </div>
  `
};
