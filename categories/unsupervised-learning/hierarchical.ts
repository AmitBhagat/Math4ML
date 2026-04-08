import { TopicSection } from '../../src/data/types';

export const hierarchicalSection: TopicSection = {
  id: "hierarchical",
  title: "Hierarchical Clustering",
  description: "A method of cluster analysis which seeks to build a hierarchy of clusters using Agglomerative or Divisive approaches.",
  color: "#bc8cff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧩 Unsupervised · Clustering</div>
      <h1>Hierarchical Clustering</h1>
      <p>k-Means is a "Flat" algorithm—it just gives you $K$ groups. <strong>Hierarchical Clustering</strong> is different. It builds a <strong>Dendrogram</strong> (a tree) that shows how every single data point is related to every other. It's the "Family Tree" of your dataset.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Agglomerative vs. Divisive</a>
      <a href="#linkage">Linkage Methods: Ward, Complete, Single</a>
      <a href="#dendrogram">The Dendrogram: Visualizing Relationships</a>
      <a href="#selection">Cutting the Tree</a>
      <a href="#analogy">The "Family Reunion" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Agglomerative vs. Divisive</h2>
    <p>There are two primary ways to build a hierarchy:</p>
    <ul>
      <li><strong>Agglomerative (Bottom-Up):</strong> Every point starts as its own cluster. You merge the two "closest" clusters iteratively until only one remains. (Most common).</li>
      <li><strong>Divisive (Top-Down):</strong> Everyone starts in one giant cluster. You split it recursively into smaller pieces.</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Finding the Closest Friend."</strong> 
        In the Agglomerative approach, everyone in the room finds their <strong>most similar twin</strong> and holds hands. Now there are 50 pairs. Then those pairs find <strong>their</strong> closest pair, and they hold hands, forming 25 groups of 4. Eventually, everyone is holding hands in one giant circle.
      </div>
    </div>

    <h2 id="linkage">Linkage Methods: Ward, Complete, Single</h2>
    <p>How do we measure distance between <strong>Groups</strong> (not just points)? The "Linkage" method is the secret sauce:</p>
    <ul>
      <li><strong>Ward's Linkage:</strong> Minimizes the variance within the cluster. (Creates even, round clusters).</li>
      <li><strong>Single Linkage:</strong> Distance between the <strong>closest</strong> two points in the groups. (Good for "Chaining" but bad for noise).</li>
      <li><strong>Complete Linkage:</strong> Distance between the <strong>farthest</strong> two points. (Creates compact, reliable clusters).</li>
    </ul>

    <h2 id="dendrogram">The Dendrogram: Visualizing Relationships</h2>
    <p>The <strong>Dendrogram</strong> is a chart that looks like an upside-down tree. The **Height** of the vertical lines represents the <strong>Distance</strong> at which two clusters were merged. The longer the line, the more "Unlike" the two groups are.</p>

    <h2 id="selection">Cutting the Tree</h2>
    <p><strong>The Beauty:</strong> You don't have to choose $K$ at the start. You build the whole tree, and then you "Cut" it at a specific height. If you cut high, you get 2 huge clusters. If you cut low, you get 20 tiny clusters. You can choose the **level of granularity** AFTER seeing the data.</p>

    <h2 id="analogy">The "Family Reunion" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a huge **Family Reunion**. 
        You have cousins, siblings, and strangers. 
        **Hierarchical Clustering** starts by putting you with your **Twin**. Then it puts you and your twin with your **Siblings**. Then it merges your family with your **Cousins**. 
        By looking at the tree, you can see exactly who is "Direct family" and who is a "Distant relative." It's not just a group; it's a <strong>Historical Record of Similarity.</strong> 
      </div>
    </div>

    <h2 id="algorithm">The Hierarchical Algorithm (Agglomerative)</h2>
    <div class="example-box">
      <h4>The Bottom-Up Build</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Proximity Matrix:</strong> Calculate the distance between every pair of data points.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Individual Seeds:</strong> Treat each data point as its own cluster (Cluster size = 1).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>The Merge:</strong> Find the two clusters with the shortest distance (based on Linkage) and combine them.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Update:</strong> Recalculate the distance between the new "Mega-Cluster" and all other existing clusters.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Completion:</strong> Repeat until everyone is merged into one single root cluster.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Evolution of Languages</h2>
    <p>Think of how <strong>Languages</strong> are related. They don't just exist in isolation; they branched off from each other over centuries.</p>
    <ul>
      <li><strong>Small Clusters:</strong> Spanish and Italian are very close (The "Dialect" merge).</li>
      <li><strong>Medium Clusters:</strong> Romance languages merge with Germanic languages (The "European" merge).</li>
      <li><strong>The Root:</strong> Eventually, everything traces back to a "Proto-Indo-European" root.</li>
    </ul>
    <p>By looking at the <strong>Dendrogram</strong> of languages, you can see not just the groups, but the <strong>History</strong> of how they split. <strong>Hierarchical Clustering is that linguistic historian.</strong></p>

    <python-code>
from sklearn.cluster import AgglomerativeClustering
import numpy as np

# 1. Similarity data [Dimension_A, Dimension_B]
X = np.array([[1, 2], [1, 3], [5, 8], [6, 9], [1, 1]])

# 2. Train with 2 Clusters
# linkage='ward' minimizes variance within clusters
model = AgglomerativeClustering(n_clusters=2, linkage='ward')
labels = model.fit_predict(X)

# 3. Check which points are grouped together
print(f"Cluster Assignments: {labels}")
# Expected: [0, 0, 1, 1, 0]
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if your data is "Messy" and shaped like a Crescent Moon? k-Means and Ward's will fail. Explore <strong><a href="#/machine-learning/unsupervised-learning/dbscan">DBSCAN Analysis</a></strong>.
    </div>
  `
};
