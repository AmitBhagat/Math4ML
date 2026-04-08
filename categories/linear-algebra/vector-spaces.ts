import { TopicSection } from '../../src/data/types';

export const vectorSpacesSection: TopicSection = {
  id: "vector-spaces",
  title: "Vector Spaces",
  description: "A Vector Space is the playground where vectors exist. It's defined by the rules of addition and scaling.",
  color: "#3F51B5",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🌌 Linear Algebra · Vector Spaces</div>
      <h1>Vector Spaces: The Arena</h1>
      <p>A <strong>Vector Space</strong> is a set of vectors that follows a consistent set of rules. It ensures that when you add or scale vectors, you stay within the "playground" and don't exit the mathematical universe.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#rules">1. Axioms: The Rules</a>
      <a href="#subspaces">2. Subspaces</a>
      <a href="#example-subspace">Example 1: A 2D Plane in 3D Space</a>
      <a href="#example-closure">Example 2: Closure Property Check</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="rules">1. Axioms: The Rules</h2>
    <p>A set of vectors \(V\) is a <strong>Vector Space</strong> if it is "closed" under addition and scalar multiplication. <strong>Closure</strong> means:</p>
    <ul>
      <li>If \(\mathbf{u}, \mathbf{v} \in V\), then \(\mathbf{u} + \mathbf{v} \in V\).</li>
      <li>If \(\mathbf{u} \in V\) and \(c \in \mathbb{R}\), then \(c\mathbf{u} \in V\).</li>
    </ul>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of a <strong>Vector Space</strong> like a <strong>Gaming World</strong>. No matter where you move your character or how high they jump (scale), you should never "fall out of the map." 
        If you can navigate any combination of features without hitting a mathematical "dead end," you're in a vector space.
      </div>
    </div>

    <h2 id="subspaces">2. Subspaces</h2>
    <p>A <strong>Subspace</strong> is a "flat slice" of the original vector space that still goes through the origin.</p>

    <h2 id="example-subspace">Example 1: A 2D Plane in 3D Space</h2>
    <div class="example-box">
      <h4>Problem: Visualizing Subspaces</h4>
      <p>Is the set of vectors \([x, y, 0]\) in \(\mathbb{R}^3\) a subspace?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> This set describes the "floor" (\(xy\)-plane) of a 3D room.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Check Origin:</strong> \([0, 0, 0]\) is in the set. (Pass).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Check Addition:</strong> Adding any two "floor" vectors keeps you on the floor. (Pass).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> YES. It's a valid subspace. In ML, when we perform <strong>Dimensionality Reduction</strong>, we're often projecting high-dimensional data onto a lower-dimensional subspace like this.
        </div>
      </div>
    </div>

    <h2 id="example-closure">Example 2: Closure Property Check</h2>
    <div class="example-box">
      <h4>Problem: Finding the "Exit"</h4>
      <p>Is the set of vectors \([x, 1]\) where \(x \in \mathbb{R}\) a vector space?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Test Scale:</strong> Take \(\mathbf{v} = [2, 1]\). Now scale it by 2.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Result:</strong> \(2\mathbf{v} = [4, 2]\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Check:</strong> The second component is now 2, not 1.</div>
        </div>
      </div>

      <div class="callout error">
        <div class="callout-icon">✕</div>
        <div class="callout-body">
          <strong>Result:</strong> NO. Addition/Scaling "pushed us out" of the set. This set doesn't form a vector space.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

# Subspace check (XY-plane)
def is_in_subspace(v):
    # Vector must be in [x, y, 0] format
    return v[2] == 0

v1 = np.array([3, 4, 0])
v2 = np.array([1, 1, 1])

print(f"Is v1 in subspace? {is_in_subspace(v1)}")
print(f"Is v2 in subspace? {is_in_subspace(v2)}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Principal Component Analysis (PCA)</strong>: PCA find the best Lower-dimensional <strong>Subspace</strong> to represent your data.</li>
      <li><strong>Subspace Learning</strong>: Many domain adaptation techniques assume that different datasets live on the same "Manifold" (Subspace).</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Space is huge. How do we ensure our vectors aren't redundant? Explore <strong><a href="#/mathematics/linear-algebra/linear-independence">Linear Independence</a></strong>.
    </div>
  `
};
