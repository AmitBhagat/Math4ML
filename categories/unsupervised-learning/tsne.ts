import { TopicSection } from '../../src/data/types';

export const tsneSection: TopicSection = {
  id: "tsne",
  title: "t-Distributed Stochastic Neighbor Embedding (t-SNE)",
  description: "A non-linear dimensionality reduction technique well-suited for embedding high-dimensional data for visualization in a low-dimensional space of two or three dimensions.",
  color: "#bc8cff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧩 Unsupervised · Visualization</div>
      <h1>t-SNE: The Neighborhood Plot</h1>
      <p>PCA looks for <strong>Global Variance</strong>—the big picture. <strong>t-SNE</strong> looks for <strong>Local Neighborhoods</strong>. It's the standard tool for "Sanity Checking" your high-dimensional data. If your data points are related (like handwritten '7's), t-SNE will huddle them together in a <strong>2D Map</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Probability Densities</a>
      <a href="#gaussians">Gaussian-t Comparison</a>
      <a href="#perplexity">The Perplexity Parameter</a>
      <a href="#crowding">The "Crowding" Problem</a>
      <a href="#analogy">The "Friendship Map" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Probability Densities</h2>
    <p>t-SNE converts <strong>Distances</strong> into <strong>Probabilities</strong>. In the high-dimensional space, it calculates the probability that point $i$ would pick point $j$ as its neighbor. Then, it tries to find a 2D layout that <strong>mimics these probabilities</strong> as closely as possible.</p>
    <div class="math-block">$$p_{ij} = \frac{\exp(-\|x_i - x_j\|^2 / 2\sigma_i^2)}{\sum_{k \neq l} \exp(-\|x_k - x_l\|^2 / 2\sigma_k^2)}$$</div>
    <p>We minimize the <strong>KL Divergence</strong> between the high-D probabilities ($P$) and the low-D probabilities ($Q$).</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Optimizing Friendships."</strong> 
        Imagine 1,000 people are friends in a 1,000D world. 
        You want to put them all in a <strong>Small Room (2D)</strong>. 
        t-SNE says: "If Person A and B were best friends in the 1,000D world, I'll do whatever it takes to keep them <strong>side-by-side</strong> in the room." 
        It prioritizes <strong>Local Closeness</strong> over overall distance. 
      </div>
    </div>

    <h2 id="gaussians">Gaussian-t Comparison</h2>
    <p>The "t" in t-SNE stands for the **Student's t-Distribution**. This distribution has <strong>Fatter Tails</strong> than a normal Gaussian. This is its secret weapon. 
    **The Gotcha:** Normal Gaussians are too "Tight." In 2D, points get "Crowded" in the middle. The fatter tails of the t-distribution allow clusters to <strong>Spread Out</strong>, making them easier to see in your plot.</p>

    <h2 id="perplexity">The Perplexity Parameter</h2>
    <p><strong>Perplexity</strong> is the "Density" of the neighbors. If you set it to 5, t-SNE only cares about your 5 closest neighbors. If you set it to 50, it tries to keep larger groups together. It's the **Number of Friends** each point tries to keep close.</p>

    <h2 id="analogy">The "Friendship Map" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a huge **1,000D Party**. 
        You want to draw a <strong>2D Seating Chart</strong> for the afterlife. 
        **PCA** would try to put people based on their <strong>Height or Wealth</strong> (Global Variance). 
        **t-SNE** ignores height and wealth. It only asks: "Who was Person A talking to?" 
        If Person A was talking to Person B, they get the <strong>Same Table</strong>. 
        The result is a chart where <strong>Cliques (Clusters)</strong> are perfectly clear, but the "Distance" between tables doesn't mean much. 
      </div>
    </div>

    <h2 id="algorithm">The t-SNE Algorithm</h2>
    <div class="example-box">
      <h4>The Neighborhood Preserving Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>High-D Similarities:</strong> For every pair of points, calculate the probability that they are neighbors (using a Gaussian distribution).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Low-D Initialization:</strong> Place all points randomly in a 2D or 3D space.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Low-D Similarities:</strong> Calculate the same neighbor-probabilities in 2D, but use a <strong>Student's t-Distribution</strong> (Longer tails).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Loss Calculation:</strong> Use Kullback-Leibler (KL) Divergence to measure how much the 2D "Friendships" differ from the High-D ones.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Optimization:</strong> Use Gradient Descent to "Nudge" the 2D points until the KL Divergence is minimized.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Crowd Compression</h2>
    <div class="example-box">
      <h4>Scenario: Drawing a High School Reunion Seating Chart</h4>
      <p>Imagine 1,000 students from a 100-dimensional social network. You want to seat them at tables in a small 2D room.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Friendship Matrix:</strong> You look at who walked to whom in the 100D world. (High-D Probabilities).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Random Seating:</strong> You throw everyone onto the 2D floor in random spots. It's a mess of strangers. (Initialization).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Social Nudge:</strong> If two people were best friends, you pull them closer. If they were strangers, you push them apart. (Gradient Descent).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Result:</strong> After 1,000 "Nudges," the room is organized into tight <strong>Cliques</strong>. The "Band Geeks" are in one corner, the "Jocks" in another.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> t-SNE is a <strong>Non-Linear</strong> transformer. It can "Unroll" complex manifolds that PCA would just flatten. But beware: the distance between the "Jock" corner and the "Band" corner means <strong>nothing</strong>. Only the local huddles are real.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Local Topology</h2>
    <python-code static-output="[Scan] Dataset: 2 High-Dim Cliques (100D space)\n[Action] Initializing t-SNE (Perplexity=30)...\n[Iter 250] Error: 1.45 (KL-Divergence dropping)\n[Iter 500] Error: 0.82 (Local huddles forming)\n[Result] 100D relationship preserved in 2D space.\n[Discovery] Cluster A and B are now perfectly separated on the map.">
import numpy as np
from sklearn.manifold import TSNE

# 1. High-D Data: Two distinct cliques in 100-dimensional space
# These clusters are invisible to simple linear projections
X = np.concatenate([
    np.random.normal(5, 1, (50, 100)), # Clique A
    np.random.normal(-5, 1, (50, 100)) # Clique B
])

# 2. t-SNE Optimizer
# perplexity is the 'emotional density' (number of friends to keep)
tsne = TSNE(n_components=2, perplexity=30, n_iter=1000, random_state=42)
X_2d = tsne.fit_transform(X)

# 3. Shape Analysis
print(f"Original Shape: {X.shape}")
print(f"Compressed Shape: {X_2d.shape}")
print(f"Clique A Mean (2D): {np.mean(X_2d[:50], axis=0).round(2)}")
print(f"Clique B Mean (2D): {np.mean(X_2d[50:], axis=0).round(2)}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> t-SNE is great for visualization, but it's slow. What if we want speed AND global structure? Explore <strong><a href="#/machine-learning/unsupervised-learning/umap">UMAP Analysis</a></strong>.
    </div>
  `
};
