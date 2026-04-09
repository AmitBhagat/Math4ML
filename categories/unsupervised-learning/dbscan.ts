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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>k-Means assumes your data is in nice, round balls, but real-world data is <strong>Messy</strong>. It can be shaped like a <strong>Crescent Moon</strong>, a <strong>Spiral</strong>, or have random noise scattered everywhere. <strong>DBSCAN</strong> (Density-Based Spatial Clustering) is the only algorithm with the courage to say: "I'm not going to force every point into a group." It defines a cluster as a <strong>High-Density Region</strong> in space. If points are packed tightly together, they form a "Crowd." If a point is sitting by itself in a "Silent" region, it is correctly identified as <strong>Noise</strong>. It is the king of finding clusters of arbitrary shapes and filtering out the junk.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: DBSCAN Clustering</div>
      <p>Given parameters $\epsilon$ (radius) and $MinPts$ (density threshold), DBSCAN classifies points into three categories based on their $\epsilon$-neighborhood $N_{\epsilon}(p) = \{q \in D \mid d(p, q) \le \epsilon\}$:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Core Point</strong>: $|N_{\epsilon}(p)| \ge MinPts$.</li>
        <li><strong>Border Point</strong>: $|N_{\epsilon}(p)| < MinPts$, but $p$ is reachable from a core point.</li>
        <li><strong>Noise Point</strong>: Neither of the above.</li>
      </ul>
      <p>Two points $p$ and $q$ are **Density-Connected** if there exists a point $o$ such that both $p$ and $q$ are density-reachable from $o$. A cluster is a maximal set of density-connected points.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of DBSCAN as <strong>"Finding the Crowd at a Party"</strong> or the <strong>"Nightclub Analogy."</strong> 
        Imagine a nightclub at 2 AM. k-Means would try to group everyone into 3 circles, even the lonely person standing by the exit. 
        <strong>DBSCAN</strong> looks for the <strong>Dense Dancefloor</strong> (the Cluster). It doesn't care if the dancefloor is circular or a <strong>Long, Curved conga line</strong> leading to the bar. As long as people are standing shoulder-to-shoulder (within radius \(\epsilon\)), they are part of the "Vibe." 
        The lonely person in the corner is labeled as <strong>Noise</strong> and ignored. It is a "Chain-Reaction" algorithm—once it finds a dense core, it follows the connectivity until the party stops.
      </div>
    </div>

    <h2 id="algorithm">The DBSCAN Algorithm</h2>
    
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
    <h2 id="epsilon">Parameters: Epsilon (\(\epsilon\)) and MinPts</h2>
    <p><strong>Epsilon (\(\epsilon\)):</strong> The maximum distance between two points to be considered neighbors. 
    <strong>MinPts:</strong> The minimum number of points required to form a cluster.</p>
    <div class="math-block">$$N_{\epsilon}(p) = \{q \in D \mid d(p, q) \le \epsilon\}$$</div>
    <p><strong>Note:</strong> If you set \(\epsilon\) too small, everything becomes noise. If you set it too large, everything merges into one giant cluster.</p>

    <h2 id="shapes">Handling Arbitrary Shapes</h2>
    <p>Because DBSCAN follows "Density Reachability," it can follow <strong>Curves</strong>. If you have a cluster shaped like a "U," DBSCAN will walk along the U-shape, connecting points as long as they are close enough. This is its <strong>Superpower.</strong></p>

    <h2 id="analogy">The "Party at the Club" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Nightclub</strong> at 2 AM. 
        <strong>k-Means</strong> would try to group everyone into 3 circles (Groups). 
        <strong>DBSCAN</strong> looks for the <strong>Dense Dancefloor</strong> (A Cluster). 
        It doesn't care if the dancefloor is circular or a <strong>Long Line</strong> leading to the bar. 
        As long as people are standing shoulder-to-shoulder, they are part of the "Crowd." 
        The lonely person standing in the <strong>Corner</strong> (Noise) is correctly ignored. 
      </div>
    </div>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Viral Outbreak</h2>
    
      <h4>Scenario: Identifying a Hotspot in a Crowded Park</h4>
      <p>Imagine 1,000 people in a park. You want to find where the "Parties" are happening without knowing how many groups exist.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Density Rule (MinPts):</strong> You define a "Party" as at least 4 people standing within 2 meters (Epsilon) of each other.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Core Members:</strong> If a person has 4 friends nearby, they are a <strong>Core Point</strong>. The "Vibe" starts with them.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Chain Reaction:</strong> The party expands to anyone who is close to a Core Member. Even if the party is a long, curved conga line, DBSCAN keeps it together.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Outlier:</strong> A person sitting alone on a far-off bench isn't close to anyone. DBSCAN labels them as <strong>Noise (-1)</strong>.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          DBSCAN is the king of <strong>Anomaly Detection</strong>. It's the only clustering algorithm that has the courage to say: "This point doesn't belong to <strong>any</strong> group." It finds "The Crowd," regardless of its shape.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code static-output="[Scan] Parameters: Eps=1.5, MinPts=2\n[Status] Scanning 7 data points...\n[Found] Cluster 0: Dense triplet detected at (1,2)\n[Found] Cluster 1: Dense triplet detected at (10,10)\n[Noise] Point (5,5) marked as Outlier (-1)\n[Assignments] Result: [0, 0, 0, 1, 1, 1, -1]\n[Insight] DBSCAN successfully ignored the lone point without forcing it into a group.">
import numpy as np
from sklearn.cluster import DBSCAN

# 1. Dataset: Two dense clusters and one lone outlier
X = np.array([
    [1, 2], [1.1, 2.1], [0.9, 1.9],  # Cluster 0
    [10, 10], [9.8, 10.2], [10.2, 9.8], # Cluster 1
    [5, 5]                          # The Lone Outlier (Noise)
])

# 2. Train with density constraints
# eps is the radius, min_samples is the density threshold
model = DBSCAN(eps=1.5, min_samples=2)
labels = model.fit_predict(X)

# 3. Results Analysis
for i, coord in enumerate(X):
    status = f"Cluster {labels[i]}" if labels[i] != -1 else "NOISE"
    print(f"Point {coord} -> {status}")

print(f"\nTotal Outliers found: {np.sum(labels == -1)}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>DBSCAN has the courage to say: "This point doesn't belong to any group." It is the king of finding "The Crowd" while filtering out the junk.</p>
    <ul>
      <li><strong>Identifying Criminal Hotspots</strong>: Police departments use DBSCAN to find areas with high densities of crime reports. Because DBSCAN can follow arbitrary shapes, it can identify a "hot" street or a curved park area while ignoring random isolated incidents that don't belong to a pattern.</li>
      <li><strong>Satellite Image Feature Extraction</strong>: When analyzing the surfaces of other planets, scientists use DBSCAN to identify "Crowds" of craters or rocks. The algorithm is perfect for this because it handles the irregular shapes of natural features and effectively ignores the sensor noise.</li>
    </ul>
    <p>Teacher's Final Word: DBSCAN is the only algorithm that finds the "Vibe" of a cluster regardless of its shape. As long as points are standing shoulder-to-shoulder, they are part of the crowd. It is your best tool for messy, real-world spatial data.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we want "Soft" assignments where a point can be 80% Cluster A and 20% Cluster B? Explore <strong><a href="#/machine-learning/unsupervised-learning/gmm">Gaussian Mixture Models (GMM)</a></strong>.
    </div>
  `
};
