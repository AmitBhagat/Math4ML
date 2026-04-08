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

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#rules">2. Properties & Meaning</a>
      <a href="#example-area">Example 1: Area Scaling of a Unit Square</a>
      <a href="#example-singularity">Example 2: Singularity Check (Det = 0)</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>Imagine a unit square on a grid (area = 1). When you multiply it by a matrix, it might stretch into a larger rectangle or rotate into a diamond. The <strong>Determinant</strong> is the area of that new shape. If \(\det = 2\), the space doubled; if \(\det = 0\), the space was squashed into a flat line.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of the Determinant as a <strong>"Dimension Watchdog."</strong> 
        If the determinant is zero, your matrix has "deleted" a dimension. 
        It’s like turning a 3D sphere into a 2D pancake—you can't go back! 
        That’s why matrices with zero determinant have no inverse (Singular Matrices).
      </div>
    </div>

    <h2 id="rules">2. Properties & Meaning</h2>
    <ul>
      <li>\(\det(A) > 0\): Space is stretched/shrunk but keeps its orientation.</li>
      <li>\(\det(A) < 0\): Space is "flipped" inside out (like a reflection in a mirror).</li>
      <li>\(\det(A) = 0\): Matrix is non-invertible (Singular).</li>
    </ul>

    <h2 id="example-area">Example 1: Area Scaling of a Unit Square</h2>
    <div class="example-box">
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
    </div>

    <h2 id="example-singularity">Example 2: Singularity Check (Det = 0)</h2>
    <div class="example-box">
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
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
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
