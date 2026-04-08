import { TopicSection } from '../../src/data/types';

export const dbscanSection: TopicSection = {
  id: "dbscan",
  title: "DBSCAN Clustering",
  description: "Density-Based Spatial Clustering of Applications with Noise. It finds clusters of arbitrary shape and identifies outliers.",
  color: "#bc8cff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧩 Unsupervised · Density</div>
      <h1>DBSCAN Clustering</h1>
      <p>k-Means assumes your data is in nice, round balls. But real data is <strong>Messy</strong>. It can be shaped like a <strong>Crescent Moon</strong>, a <strong>Spiral</strong>, or have <strong>Random Noise</strong>. <strong>DBSCAN</strong> (Density-Based Spatial Clustering) is the only algorithm that can find "The Crowd" in a chaotic room.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Reachability & Density</a>
      <a href="#points">The 3 Types: Core, Border, and Noise</a>
      <a href="#epsilon">Parameters: Epsilon (\(\epsilon\)) and MinPts</a>
      <a href="#shapes">Handling Arbitrary Shapes</a>
      <a href="#analogy">The "Party at the Club" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Reachability & Density</h2>
    <p>DBSCAN defines a cluster as a <strong>High-Density Region</strong>. If you have enough points packed into a small space, you have a cluster. If a point is by itself in a "Silent" region, it is called <strong>Noise</strong>.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Finding the Crowd."</strong> 
        It's not about how many groups you want; it's about <strong>how many people are standing close together</strong>. 
        If 5 people are within 1 meter of each other, that's a <strong>Core Group</strong>. Anyone standing on the edge of that group is a <strong>Border Member</strong>. Anyone 10 meters away is <strong>Noise</strong>. 
      </div>
    </div>

    <h2 id="algorithm">The DBSCAN Algorithm</h2>
    <div class="example-box">
      <h4>Density-Based Logic</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Search:</strong> Choose a point and find all neighbors within radius $\epsilon$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Core Labeling:</strong> If neighbors $\ge$ MinPts, label as a <strong>Core Point</strong> and start a cluster.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Expansion:</strong> Recursively add all $\epsilon$-neighbors of those Core Points to the same cluster.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Border Labeling:</strong> If a point reaches a Core point but isn't one itself, label it as a <strong>Border Point</strong>.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Outlier Removal:</strong> Any point that cannot reach a Core Point is labeled as <strong>Noise</strong>.
        </div>
      </div>
    </div>

    <h2 id="epsilon">Parameters: Epsilon (\(\epsilon\)) and MinPts</h2>
    <p><strong>Epsilon (\(\epsilon\)):</strong> The maximum distance between two points to be considered neighbors. 
    **MinPts:** The minimum number of points required to form a cluster.</p>
    <div class="math-block">$$N_{\epsilon}(p) = \{q \in D \mid d(p, q) \le \epsilon\}$$</div>
    <p><strong>Note:</strong> If you set \(\epsilon\) too small, everything becomes noise. If you set it too large, everything merges into one giant cluster.</p>

    <h2 id="shapes">Handling Arbitrary Shapes</h2>
    <p>Because DBSCAN follows "Density Reachability," it can follow <strong>Curves</strong>. If you have a cluster shaped like a "U," DBSCAN will walk along the U-shape, connecting points as long as they are close enough. This is its <strong>Superpower.</strong></p>

    <h2 id="analogy">The "Party at the Club" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Nightclub</strong> at 2 AM. 
        **k-Means** would try to group everyone into 3 circles (Groups). 
        **DBSCAN** looks for the <strong>Dense Dancefloor</strong> (A Cluster). 
        It doesn't care if the dancefloor is circular or a <strong>Long Line</strong> leading to the bar. 
        As long as people are standing shoulder-to-shoulder, they are part of the "Crowd." 
        The lonely person standing in the <strong>Corner</strong> (Noise) is correctly ignored. 
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Crowded Concert</h2>
    <p>Imagine a <strong>Music Festival</strong> in a giant park. You want to identify different groups of fans.</p>
    <ul>
      <li><strong>Clusters:</strong> Large crowds huddled in front of the 3 main stages. Even if the crowds are long and thin or shaped like a <strong>U-turn</strong>, DBSCAN identifies them as single entities.</li>
      <li><strong>Noise:</strong> People walking alone between stages or looking for the bathroom. They aren't "Dense" enough to be a group.</li>
    </ul>
    <p>Unlike k-Means, DBSCAN doesn't force these lonely people into a category; it recognizes they are <strong>Outliers</strong>. <strong>DBSCAN is that stadium security guard.</strong></p>

    <python-code>
from sklearn.cluster import DBSCAN
import numpy as np

# 1. Messy data [X, Y]
X = np.array([
    [1, 2], [1.1, 2.1], [0.9, 1.9], # Cluster 1
    [10, 10], [10.1, 10.1], [9.9, 9.9], # Cluster 2
    [5, 5] # Noise Point
])

# 2. Train with Epsilon=1.5 and MinPts=2
model = DBSCAN(eps=1.5, min_samples=2)
labels = model.fit_predict(X)

# 3. Check labels
print(f"Cluster IDs: {labels}")
# Expected: [0, 0, 0, 1, 1, 1, -1] -> -1 means Noise!
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we want "Soft" assignments where a point can be 80% Cluster A and 20% Cluster B? Explore <strong><a href="#/machine-learning/unsupervised-learning/gmm">Gaussian Mixture Models (GMM)</a></strong>.
    </div>
  `
};
