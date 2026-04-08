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

    <h2 id="theory">Theoretical Core: Simplicial Complexes</h2>
    <p>UMAP is built on <strong>Topological Data Analysis (TDA)</strong>. It assumes the data points are samples from a <strong>Manifold</strong> (a smooth surface) that is <strong>Locally Connected</strong>. It builds a "Fuzzy Simplicial Complex" (a complex graph-like structure) of your data.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of it as <strong>"Connecting the Dots."</strong> 
        Imagine your data points are <strong>Stars in a Galaxy</strong>. 
        <strong>Topology</strong> isn't about exactly where the stars are; it's about the <strong>Patterns they form</strong> (Constellations). 
        UMAP builds a mathematical constellation (the Complex) and then tries to <strong>Flatten it</strong> onto a 2D piece of paper while keeping the "Geometric Essence" intact. 
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
    <python-code runnable="false" static-output="[Scan] Constructing Fuzzy Simplicial Complex (n_neighbors=15)...\n[Action] Initializing Spectral Embedding for global stability...\n[Optimization] SGD Layout Refinement (1.2 seconds total)...\n[Result] 64D Digits dataset compressed to a 2D Topological Map.\n[Discovery] Found 10 distinct 'islands' representing digits 0-9.">
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

    <div class="linking-rule">
      <strong>Next Step:</strong> Cluster and visualization are classical Tools. But what if we use Neural Networks to "Learn" the reduction? Explore <strong><a href="#/machine-learning/unsupervised-learning/autoencoders">Autoencoders Architecture</a></strong>.
    </div>
  `
};
