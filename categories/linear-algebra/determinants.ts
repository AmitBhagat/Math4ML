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
      <div class="premium-def-title">Formalism: The Signed Volume Scaling Factor</div>
      <p>The Determinant isn't just a number; it's the "Stretch Factor" of a matrix. It measures how much the volume of space changes after the transformation.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine a unit "cube" defined by the standard basis vectors. After applying matrix $A$, this cube is warped into a <strong>Parallelepiped</strong> where the edges are the columns of $A$. The <strong>Determinant</strong> $\det(A)$ is the volume of this new shape. If the vectors are dependent, the shape is squashed flat, and the volume is zero.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>For a 2x2 matrix $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$, we derive the area of the parallelogram formed by $[a, c]$ and $[b, d]$. By calculating the area of the surrounding rectangle and subtracting the outer triangles, we arrive at the cross-multiplication rule:</p>
      <div class="math-block">
        $$\text{Area} = ad - bc$$
      </div>
      <p>In $n$-dimensions, we use the <strong>Leibniz Formula</strong>, which sums all possible ways to pick one element from each row and column, adjusted by the sign of the permutation ($\sigma$):</p>
      <div class="math-block">
        $$\det(A) = \sum_{\sigma \in S_n} \text{sgn}(\sigma) \prod_{i=1}^n A_{i, \sigma(i)}$$
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>The Determinant satisfies three critical properties that define its behavior:</p>
      <ul class="mt-2 space-y-2">
        <li><strong>Multiplicativity</strong>: $\det(AB) = \det(A)\det(B)$. Scale factors multiply.</li>
        <li><strong>Inversion</strong>: $\det(A^{-1}) = 1/\det(A)$. "Unwinding" a 2x stretch requires a 0.5x squeeze.</li>
        <li><strong>Singularity</strong>: If $\det(A) = 0$, the matrix is non-invertible. You have squashed space so hard you've deleted a dimension.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: A negative determinant means the transformation "flipped" space inside out (like a reflection). The absolute value is the volume change, but the sign tells you about the orientation.</p>
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
    <p>Think of the Determinant as a "Dimension Watchdog." It monitors how much a transformation "stretches" or "squashes" your information universe, ensuring you aren't accidentally erasing your data.</p>
    <ul>
      <li><strong>Normalizing Multivariate Gaussians</strong>: In statistics and AI, a "Bell Curve" in multiple dimensions is defined by its covariance matrix. The determinant of this matrix tells us the "Volume" of the probability cloud. To make the probability sum to exactly 1.0, we divide by the square root of the determinant. It is the mathematical anchor of probability theory.</li>
      <li><strong>Jacobian Transformations in Deep Learning</strong>: When we use "Normalizing Flows" or "Change of Variables" in a loss function, we need to know how much our model is warping the space. We multiply by the determinant of the <strong>Jacobian Matrix</strong> to "account for the stretch" so the math stays balanced. If we ignore the determinant, our model will literally lose track of where the data is located.</li>
    </ul>
    <p>Teacher's Final Word: If the determinant is zero, your matrix has "erased" a dimension of data forever. In AI, preventing accidental "data erasure" is why we watch the determinant like a hawk. It is the difference between a model that learns and a model that squashes everything into a meaningless pancake.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Determinants tell us if space is squashed. But how *much* space is left? Explore <strong><a href="#/mathematics/linear-algebra/matrix-rank">Matrix Rank</a></strong>.
    </div>
  `
};

