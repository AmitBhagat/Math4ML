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
      <div class="premium-def-title">Formalism: The Linear Axioms & Closure</div>
      <p>A Vector Space $V$ is a set that is "computationally stable." If you stay within its rules, you can't be pushed out of the universe.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Think of a vector space as a coordinate system that extends infinitely. A <strong>Subspace</strong> $W$ is a "flat" subset (like a line through the origin in 3D) that maintains the same physical laws as the parent space. For a subset to be a valid subspace, it must be "anchored" at the origin and behave consistently under stress (scaling and addition).</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation of a Subspace</h3>
      <p>To prove a set $W \subseteq V$ is a subspace, we check for <strong>Linear Closure</strong>. For any two vectors $\mathbf{u}, \mathbf{v} \in W$ and any scalar $c \in \mathbb{R}$, we must show:</p>
      <div class="math-block">
        $$\text{1. Additive Closure: } \mathbf{u} + \mathbf{v} \in W$$
        $$\text{2. Scalar Closure: } c\mathbf{u} \in W$$
      </div>
      <p>If these hold, then every linear combination $\sum a_i \mathbf{v}_i$ is also in $W$. This derivation ensures that our transformations (like moving weights in a neural net) never result in an "undefined" state.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>A collection of vectors $V$ is a Vector Space if it satisfies the 8 fundamental axioms, but for ML, the big three are:</p>
      <ul class="mt-2 space-y-2">
        <li><strong>Existence of Zero</strong>: $\exists \mathbf{0} \in V$ such that $\mathbf{v} + \mathbf{0} = \mathbf{v}$. No zero, no subspace.</li>
        <li><strong>Additive Inverse</strong>: $\forall \mathbf{v} \in V, \exists -\mathbf{v} \in V$ such that $\mathbf{v} + (-\mathbf{v}) = \mathbf{0}$.</li>
        <li><strong>Commutativity</strong>: $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: A set that skips the origin (like the line $y=x+1$) is NOT a subspace. Why? Because scaling any vector by zero gives $[0,0]$, which isn't on the line. You've just broken the laws of the universe.</p>
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
    
    <visualizer topic="vector-spaces" />
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

