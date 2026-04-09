import { TopicSection } from '../../src/data/types';

export const umapSection: TopicSection = {
  id: "umap",
  title: "Uniform Manifold Approximation and Projection (UMAP)",
  description: "A novel manifold learning technique for dimensionality reduction that is competitive with t-SNE for visualization quality, and arguably preserves more of the global structure with superior run time performance.",
  color: "#bc8cff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧩 Unsupervised · Manifold</div>
      <h1>UMAP: The Topology Map</h1>
      <p>If t-SNE is the current standard, <strong>UMAP</strong> is the <strong>Challenger</strong>. It is faster, more mathematically grounded in <strong>Topology</strong>, and it does a better job of preserving the <strong>Global Structure</strong> of your data. It's the modern way to reduce large-scale high-dimensional data.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>If t-SNE is the current standard for visualization, <strong>UMAP</strong> (Uniform Manifold Approximation and Projection) is the modern challenger that is quickly taking the crown. It is faster, more mathematically rigorous, and handles global structure far better than its predecessors. While t-SNE is obsessed with only your closest neighbors, UMAP looks at the <strong>Global Topology</strong>—the overall "Shape" of the data universe. It assumes your data lives on a smooth, hidden surface (a manifold) and builds a mathematical bridge to represent that surface in 2D. This makes it the definitive choice for large-scale datasets with millions of points.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Fuzzy Simplicial Sets & Cross-Entropy</div>
      <p>UMAP is "Topological Reconstruction." It uses the math of manifolds to translate a high-dimensional universe into a 2D map without losing the soul of its shape.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine your data points are scattered across a complex, multi-dimensional topography—like a crumpled mountain range in 1,000D. <strong>UMAP</strong> (Uniform Manifold Approximation and Projection) assumes that your data lives on a hidden, smooth surface (a manifold). Geometrically, it builds a "Mathematical Skeleton" of this surface called a <strong>Fuzzy Simplicial Set</strong>—a web of connections where every point is linked to its neighbors by "stretchy" edges. UMAP then seeks a low-dimensional layout that preserves the "Connectivity Map" of this skeleton as accurately as possible.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>The algorithm iterates through two primary phases:</p>
      <ul class="mt-2 mb-4 space-y-2">
        <li><strong>Phase 1: High-D Topology</strong>: For each point, we find its nearest neighbors and calculate a local connectivity weight $p_{ij}$. We use a "Local Connectivity" parameter ($\rho$) to ensure every point is connected to at least one neighbor, even in sparse regions.</li>
        <li><strong>Phase 2: Low-D Optimization</strong>: We place the points in 2D and define their similarities $q_{ij}$. We then minimize the <strong>Fuzzy Set Cross-Entropy</strong> between the High-D and Low-D graphs:
          <div class="math-block">
            $$\mathcal{L} = \sum_{e} \left( p_{ij} \log \frac{p_{ij}}{q_{ij}} + (1 - p_{ij}) \log \frac{1 - p_{ij}}{1 - q_{ij}} \right)$$
          </div>
          The first term (the "Attraction") pulls together points that were close in high-D. The second term (the "Repulsion") pushes away points that were far apart.
        </li>
      </ul>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, UMAP is the <strong>Modern Standard</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Global vs. Local</strong>: Unlike t-SNE, which creates beautiful clusters but forgets where they are relative to each other, UMAP preserves both the "Neighborhoods" and the "Global Geography" of your data.</li>
        <li><strong>Performance</strong>: UMAP is built on the math of the <strong>Nearest Neighbor Descent</strong> algorithm, making it drastically faster than t-SNE and capable of handling millions of points on a standard laptop.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: UMAP is non-linear and non-deterministic. While it is more stable than t-SNE, the exact orientation and placement of clusters can still shift between runs. It is a "Stochastic Approximation"—not a rigid solution like PCA.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of UMAP as <strong>"Connecting the Dots in a Constellation"</strong> or the <strong>"Stretchy Net Analogy."</strong> 
        Imagine your data points are high-dimensional stars in a galaxy. <strong>Topology</strong> isn't about exactly where each star is; it's about the <strong>Patterns they form</strong> (Constellations). 
        UMAP is like laying a <strong>Stretchy, Elastic Net</strong> over a crumpled ball of wool (your data). It hooks onto the tight knots (local clusters) but also keeps the tension between the knots (global relationships). When you pull that net flat onto a 2D table, the clusters stay intact, but their relative positions to each other remain meaningful. It is "Information Preservation" at its most sophisticated—fast, efficient, and mathematically beautiful.
      </div>
    </div>

    <h2 id="global-local">Global vs. Local Structure</h2>
    <p>In t-SNE, clusters are perfect, but the distance between clusters is <strong>Mean-ingless</strong>. In UMAP, the distance between groups reflects their true <strong>Dissimilarity</strong>. This makes it a better tool for understanding the <strong>Relationship between Clusters</strong>.</p>

    <h2 id="performance">Performance: Speed and Efficiency</h2>
    <p><strong>The Magic:</strong> UMAP is 10x to 100x faster than t-SNE. While t-SNE struggles with 10,000 points, UMAP can handle <strong>Millions</strong> of points without a sweat. This makes it the only choice for <strong>Single-Cell Genomics</strong> or large-scale NLP embeddings.</p>

    <h2 id="analogy">The "Stretchy Net" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine your high-dimensional data is a <strong>Giant Ball of Wool</strong>. 
        Inside that wool, some threads are tightly knotted (Clusters). 
        <strong>UMAP</strong> is like taking a <strong>High-Stretching Net</strong> and laying it over the wool. 
        It hooks onto the knots (Local) but it also stretches between the knots (Global). 
        Then, you <strong>Pull the Net Flat</strong> onto a table. 
        Because the net is "Stretchy," it doesn't break the knots, and it keeps the <strong>Overall Shape</strong> of the original wool ball. 
      </div>
    </div>

    <h2 id="algorithm">The UMAP Algorithm</h2>
    
      <h4>The Topological Flattening</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Neighbor Search:</strong> Find the $k$-nearest neighbors for every data point in the high-dimensional space.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Graph Construction:</strong> Build a weighted graph where edges represent the probability that two points are connected on a manifold.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Fuzzy Topology:</strong> Create a "Fuzzy Simplicial Complex"—a mathematical model of the data's shape.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Embedding Optimization:</strong> Initialize the 2D layout (usually using Spectral Embedding for stability).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Layout Refinement:</strong> Use Stochastic Gradient Descent to minimize the Cross-Entropy between the High-D and Low-D graphs.
        </div>
      </div>
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Topological Net</h2>
    
      <h4>Scenario: Unrolling a Crumpled Map of the Stars</h4>
      <p>Imagine your data is a crumpled ball of paper with a drawing on it. You want to see the drawing without tearing the paper or losing the relative distances between cities.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Manifold Assumption:</strong> UMAP assumes the "Crumpled Paper" is actually a smooth 2D surface (Manifold) that's just folded up in a 100D cardboard box.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Fuzzy Bridge:</strong> It connects each point to its 15 nearest neighbors, creating a "Fuzzy Simplicial Complex" (a stretchy mathematical net).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Pressure & Tension:</strong> It treats these connections like <strong>Springs</strong>. It tries to find a 2D layout that doesn't break the springs or crush the knots.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Unroll:</strong> It "Unpacks" the crumpled paper. Unlike t-SNE, UMAP preserves the <strong>Global Structure</strong>—the distance between distant clusters stays meaningful.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          UMAP is the modern gold standard. It's 10-100x faster than t-SNE, scales to millions of data points, and is mathematically "Cleaner." If you're looking for clusters in 100,000 dimensions, start with UMAP.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code runnable="false">
import umap
from sklearn.datasets import load_digits

# 1. High-dim data (64 dimensions)
digits = load_digits()
X, y = digits.data, digits.target

# 2. UMAP Projection
# min_dist: how tightly points huddle (0.1 is standard)
# n_neighbors: size of the local neighborhood to preserve
reducer = umap.UMAP(n_neighbors=15, min_dist=0.1, n_components=2)
embedding = reducer.fit_transform(X)

# 3. Shape Analysis
print(f"Original Data Shape: {X.shape}")
print(f"Projected Manifold Shape: {embedding.shape}")
print(f"Status: Local and Global structure successfully preserved.")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>UMAP is like "Connecting the Dots in a Constellation." It assumes your data lives on a smooth, hidden surface (a manifold) and builds a mathematical bridge to represent that shape in 2D.</p>
    <ul>
      <li><strong>Natural Language Processing (Topic Mapping)</strong>: UMAP is the preferred choice for visualizing sentence embeddings from models like BERT or GPT. It preserves the "Global Topology," meaning it won't just group similar words together, but also show how broad topics (like "Politics" vs. "Sports") are related across the data universe.</li>
      <li><strong>Single-Cell Genomics</strong>: Biologists use UMAP to map millions of individual cells. It allows them to identify rare cell types (local clusters) while simultaneously seeing the "differentiation paths" (global structure) of how one cell type evolves into another—at speeds 100x faster than older methods.</li>
    </ul>
    <p>Teacher's Final Word: UMAP is "Information Preservation" at its most sophisticated. It is faster, more stable, and more mathematically rigorous than its predecessors. If you're looking for clusters in 100,000 dimensions, start with UMAP.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Cluster and visualization are classical Tools. But what if we use Neural Networks to "Learn" the reduction? Explore <strong><a href="#/machine-learning/unsupervised-learning/autoencoders">Autoencoders Architecture</a></strong>.
    </div>
  `
};


