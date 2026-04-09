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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A <strong>Vector Space</strong> is more than just a list of numbers; it is the <strong>Arena</strong> where all your data exists. It is defined by a consistent set of rules that ensure that no matter how much you add or scale your features, you stay within the same logical universe. If your data "falls out" of the space, your math breaks. In Machine Learning, we depend on these spaces to be "Closed"—this guarantees that a model trained on a specific space will produce results that still make sense within that same mathematical framework.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Linear Axioms</div>
      <p>A vector space $V$ over a field $\mathbb{F}$ (usually $\mathbb{R}$) is a set equipped with vector addition and scalar multiplication satisfying the following conditions for all $\mathbf{u}, \mathbf{v} \in V$ and $a, b \in \mathbb{F}$:</p>
      <div class="math-block">
        $$\text{1. Closure: } \mathbf{u} + \mathbf{v} \in V, \quad a\mathbf{u} \in V$$
        $$\text{2. Identity: } \exists \mathbf{0} \in V \text{ s.t. } \mathbf{v} + \mathbf{0} = \mathbf{v}$$
        $$\text{3. Distributivity: } a(\mathbf{u} + \mathbf{v}) = a\mathbf{u} + a\mathbf{v}$$
      </div>
      <p>Crucially, for $V$ to be a **Subspace** of $\mathbb{R}^n$, it must contain the origin $\mathbf{0}$, and any linear combination $\sum \alpha_i \mathbf{v}_i$ must reside within $V$.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a <strong>Vector Space</strong> like a <strong>Gaming Map</strong>. 
        No matter how high your character jumps (scaling) or how far they run (addition), the game physics ensure they never "fall out of the world." 
        If your feature combinations were to lead to a mathematical "dead end," the game would crash. 
        In AI, we use these maps to perform <strong>Dimensionality Reduction</strong>, projecting a giant 1000D world onto a small, navigable 2D "Minimap" (subspace) without losing the essential layout.
      </div>
    </div>

    <h2 id="subspaces">2. Subspaces</h2>
    <p>A <strong>Subspace</strong> is a "flat slice" of the original vector space that still goes through the origin.</p>

    <h2 id="example-subspace" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> A 2D Plane in 3D Space</h2>
    
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
    

    <h2 id="example-closure" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Closure Property Check</h2>
    
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
    

    <h2 id="implementation">Implementation</h2>
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
    <p>A vector space is the "Arena" where your data lives. It defines the playground and the rules that your algorithm must follow to stay logically consistent across billions of operations.</p>
    <ul>
      <li><strong>Latent Space Semantic Search</strong>: In search engines like Pinterest, every image is mapped to a high-dimensional vector space. When you search for "Modern Kitchen," the system doesn't look for those exact words. Instead, it looks for the "Subspace" where images of kitchens reside. This ensures that even if two images are different (one is a sketch, one is a photo), they are "Neighbors" in the same vector space because they share a semantic identity.</li>
      <li><strong>Noise Reduction via Subspace Projection</strong>: Real-world data is noisy (e.g., a recording with background static). We treat the "Clean Signal" as a low-dimensional subspace within a high-dimensional noisy space. By projecting the noisy data onto this "Signal Subspace," we mathematically strip away the dimensions that represent the noise, leaving only the "Essential Truth" of the recording.</li>
    </ul>
    <p>Teacher's Final Word: Think of a vector space as the "Laws of Physics" for your data. By working within these rules, we ensure that no matter how much our algorithms mix, match, or scale the data, the results never exit the boundaries of our mathematical universe.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Space is huge. How do we ensure our vectors aren't redundant? Explore <strong><a href="#/mathematics/linear-algebra/linear-independence">Linear Independence</a></strong>.
    </div>
  `
};
