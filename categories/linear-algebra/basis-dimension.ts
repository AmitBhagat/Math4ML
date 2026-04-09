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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A <strong>Basis</strong> is the "Minimalist Skeleton" of a vector space. It is the absolute smallest set of independent vectors that allows you to reach <strong>every single point</strong> in that space. If you have too few, you can't reach certain areas (the space is incomplete); if you have too many, you have redundancy. The <strong>Dimension</strong> is just the head-count of that minimal team. In Machine Learning, identifying the basis of your data allows you to strip away a thousand "noisy" features and compress them into the few core directions that actually matter.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Spanning Sets & Linear Coordinates</div>
      <p>A Basis is the most efficient "Dictionary" for a space. It allows you to describe any vector without using a single redundant word.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Think of $V$ as a room. A <strong>Basis</strong> $\mathcal{B} = \{\mathbf{b}_1, \dots, \mathbf{b}_n\}$ is a set of "directional arrows" that, when combined, can reach every corner of the room. To be a basis, the arrows must be <strong>Linearly Independent</strong> (no redundant directions) and they must <strong>Span</strong> the space (no dead zones).</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation of Uniqueness</h3>
      <p>If $\mathcal{B}$ is a basis, then every vector $\mathbf{v}$ has a <strong>unique</strong> set of coordinates. We prove this by contradiction. Suppose $\mathbf{v}$ had two different representations:</p>
      <div class="math-block">
        $$\mathbf{v} = \sum a_i \mathbf{b}_i \quad \text{and} \quad \mathbf{v} = \sum d_i \mathbf{b}_i$$
      </div>
      <p>Subtracting them gives: $\mathbf{0} = \sum (a_i - d_i) \mathbf{b}_i$. Since basis vectors are independent, the only way to get $\mathbf{0}$ is if every coefficient $(a_i - d_i) = 0$, meaning $a_i = d_i$. This uniqueness is what allows us to map high-dimensional data like images into a stable, numeric coordinate system.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Parameter</h3>
      <p>The <strong>Dimension</strong> $\dim(V)$ is the number of vectors in its basis. It is the "Degree of Freedom" of the space.</p>
      <ul class="mt-2 space-y-2">
        <li>If you have $n+1$ vectors in an $n$-dimensional space, they <strong>must</strong> be dependent.</li>
        <li>If you have $n-1$ vectors, they <strong>cannot</strong> span the space.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Dimension is a property of the SPACE, not the vectors. $[1,0,0]$ and $[0,1,0]$ are 3D vectors, but they only span a 2D subspace. Context is everything.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a <strong>Basis</strong> like the <strong>Primary Colors</strong> in painting. 
        You only need Red, Blue, and Yellow to create every other shade in the visible universe. 
        Adding a "Light Indigo" doesn't help—it is just a combination of the others, not independent! 
        A basis is the <strong>Atomic Level</strong> of your data. The Dimension tells you how many "Primary Colors" you actually need to perfectly represent your dataset without any waste.
      </div>
    </div>

    <visualizer topic="BasisChange" />

    <h2 id="dimension">2. Dimension vs. Rank</h2>
    <p>The <strong>Dimension</strong> of a space is the number of vectors in any basis for that space. For example, \(\mathbb{R}^3\) has a dimension of 3 because it takes at least 3 vectors to reach every height, width, and depth.</p>

    <h2 id="example-r2" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Standard Basis for ℝ²</h2>
    
      <h4>Problem: Finding the Simplest Basis</h4>
      <p>Prove that \(\mathbf{e}_1 = [1, 0]\) and \(\mathbf{e}_2 = [0, 1]\) form a basis for 2D space.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Check:</strong> Can we reach any point \([x, y]\)? Yes: \(x\mathbf{e}_1 + y\mathbf{e}_2\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Identify:</strong> These are independent directions (Horizontal and Vertical).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> These vectors span the entire 2D plane. Since there are 2 vectors, the <strong>Dimension</strong> of our workspace is 2.
        </div>
      </div>
    

    <h2 id="example-graphics" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Custom Basis in Graphics</h2>
    
      <h4>Problem: Changing Perspective</h4>
      <p>In computer vision, we sometimes use a coordinate system tilted at 45°. Is \(\mathbf{b}_1 = [1, 1]\) and \(\mathbf{b}_2 = [1, -1]\) a valid basis?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Independence:</strong> Neither vector is a multiple of the other. (Pass).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Check:</strong> Two independent vectors in 2D space always span the space.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> YES. You can reach any point using these two directions. This is the foundation of <strong>Basis Change</strong>, which helps models "see" patterns from different angles.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
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
    <p>A Basis is the "Minimalist Skeleton" of your dataset. It’s like the Primary Colors in an art class—you only need a few to build every other shade in the visible universe, stripping away the noise of redundancy.</p>
    <ul>
      <li><strong>Image Compression (Discrete Cosine Transform)</strong>: When you save a photo as a JPEG, the computer doesn't save every pixel. Instead, it finds a "Basis" of sine waves that can reconstruct the image. By representing the picture using only the most important "Basis Coefficients" instead of millions of raw raw bytes, we can shrink files by 90% without the human eye noticing.</li>
      <li><strong>Topic Modeling (Latent Dirichlet Allocation)</strong>: In NLP, we can treat "Topics" as a basis for a document. Instead of seeing a news article as a list of 10,000 words, we see it as a linear combination of a few "Basis Topics" like [0.8 Politics, 0.1 local, 0.1 Sports]. This allows us to organize billions of articles by their "DNA" rather than their raw vocabulary.</li>
    </ul>
    <p>Teacher's Final Word: Identifying the basis of your data lets you ignore the noisy distractions and focus on the few "Atom-level" directions that actually define the shape of your information. The dimension of your basis is the ultimate limit of how much you can simplify your world before you start losing the truth.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Space is defined. Now how do we measure the "Alignment" and "Overlap" between our vectors? Explore <strong><a href="#/mathematics/linear-algebra/dot-product">Dot Product</a></strong>.
    </div>
  `
};

