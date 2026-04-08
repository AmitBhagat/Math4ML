import { TopicSection } from '../../src/data/types';

export const basisDimensionSection: TopicSection = {
  id: "basis-dimension",
  title: "Basis and Dimension",
  description: "A Basis is the minimal set of vectors needed to build a space. Dimension is just the count of vectors in that set.",
  color: "#9C27B0",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Linear Algebra · Basis</div>
      <h1>Basis and Dimension</h1>
      <p>A <strong>Basis</strong> is the "Minimalist Skeleton" of a vector space. It’s the smallest set of independent vectors that let you reach <strong>every</strong> point in the space. The <strong>Dimension</strong> is just the total number of vectors in that basis.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#basis">1. The Basis Concept</a>
      <a href="#dimension">2. Dimension vs. Rank</a>
      <a href="#example-r2">Example 1: Standard Basis for ℝ²</a>
      <a href="#example-graphics">Example 2: Custom Basis in Graphics</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="basis">1. The Basis Concept</h2>
    <p>A set of vectors \(\mathcal{B} = \{\mathbf{b}_1, \dots, \mathbf{b}_n\}\) is a <strong>Basis</strong> for a space \(V\) if:</p>
    <ul>
      <li>They are <strong>Linearly Independent</strong> (No redundancy).</li>
      <li>They <strong>Span</strong> the entire space (Every vector in \(V\) is a combination of \(\mathcal{B}\)).</li>
    </ul>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of a <strong>Basis</strong> like the <strong>Primary Colors</strong> in painting. 
        You only need Red, Blue, and Yellow to create every other color in existence. 
        Adding a "Light Red" wouldn't help—it’s not independent! A basis is the <strong>absolute minimum</strong> you need to reach every color (data point).
      </div>
    </div>

    <h2 id="dimension">2. Dimension vs. Rank</h2>
    <p>The <strong>Dimension</strong> of a space is the number of vectors in any basis for that space. For example, \(\mathbb{R}^3\) has a dimension of 3 because it takes at least 3 vectors to reach every height, width, and depth.</p>

    <h2 id="example-r2">Example 1: Standard Basis for ℝ²</h2>
    <div class="example-box">
      <h4>Problem: Finding the Simplest Basis</h4>
      <p>Prove that \(\mathbf{e}_1 = [1, 0]\) and \(\mathbf{e}_2 = [0, 1]\) form a basis for 2D space.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Check:</strong> Can we reach any point \([x, y]\)? Yes: \(x\mathbf{e}_1 + y\mathbf{e}_2\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Identify:</strong> These are independent directions (Horizontal and Vertical).</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> These vectors span the entire 2D plane. Since there are 2 vectors, the **Dimension** of our workspace is 2.
        </div>
      </div>
    </div>

    <h2 id="example-graphics">Example 2: Custom Basis in Graphics</h2>
    <div class="example-box">
      <h4>Problem: Changing Perspective</h4>
      <p>In computer vision, we sometimes use a coordinate system tilted at 45°. Is \(\mathbf{b}_1 = [1, 1]\) and \(\mathbf{b}_2 = [1, -1]\) a valid basis?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Independence:</strong> Neither vector is a multiple of the other. (Pass).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Check:</strong> Two independent vectors in 2D space always span the space.</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> YES. You can reach any point using these two directions. This is the foundation of **Basis Change**, which helps models "see" patterns from different angles.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

# Basis vectors
b1 = np.array([1, 1])
b2 = np.array([1, -1])

# Stack into a matrix
Basis = np.column_stack([b1, b2])

# Dimension of the span
dim = np.linalg.matrix_rank(Basis)

print(f"Dimension of the created space: {dim}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Autoencoders</strong>: Try to find a "compressed basis" (Bottleneck layer) that still contains enough information.</li>
      <li><strong>Fourier Transforms</strong>: Decompose signals into a basis of Sine and Cosine waves.</li>
      <li><strong>Compression</strong>: If you have 100 features but the dimension of their span is only 20, you can safely remove 80% of your data.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Space is defined. Now how do we measure the "Alignment" and "Overlap" between our vectors? Explore <strong><a href="#/mathematics/linear-algebra/dot-product">Dot Product</a></strong>.
    </div>
  `
};
