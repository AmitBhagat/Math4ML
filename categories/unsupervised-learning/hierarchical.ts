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

    <h2 id="theory">Theoretical Core: Agglomerative vs. Divisive</h2>
    <p>There are two primary ways to build a hierarchy:</p>
    <ul>
      <li><strong>Agglomerative (Bottom-Up):</strong> Every point starts as its own cluster. You merge the two "closest" clusters iteratively until only one remains. (Most common).</li>
      <li><strong>Divisive (Top-Down):</strong> Everyone starts in one giant cluster. You split it recursively into smaller pieces.</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of it as <strong>"Finding the Closest Friend."</strong> 
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
    <p>The <strong>Dendrogram</strong> is a chart that looks like an upside-down tree. The <strong>Height</strong> of the vertical lines represents the <strong>Distance</strong> at which two clusters were merged. The longer the line, the more "Unlike" the two groups are.</p>

    <h2 id="selection">Cutting the Tree</h2>
    <p><strong>The Beauty:</strong> You don't have to choose $K$ at the start. You build the whole tree, and then you "Cut" it at a specific height. If you cut high, you get 2 huge clusters. If you cut low, you get 20 tiny clusters. You can choose the <strong>level of granularity</strong> AFTER seeing the data.</p>

    <h2 id="analogy">The "Family Reunion" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a huge <strong>Family Reunion</strong>. 
        You have cousins, siblings, and strangers. 
        <strong>Hierarchical Clustering</strong> starts by putting you with your <strong>Twin</strong>. Then it puts you and your twin with your <strong>Siblings</strong>. Then it merges your family with your <strong>Cousins</strong>. 
        By looking at the tree, you can see exactly who is "Direct family" and who is a "Distant relative." It's not just a group; it's a <strong>Historical Record of Similarity.</strong> 
      </div>
    </div>

    <h2 id="algorithm">The Hierarchical Algorithm (Agglomerative)</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Family Reunion</h2>
    
      <h4>Scenario: Tracing the Ancestry of 5 Strangers</h4>
      <p>Imagine 5 people at a park. You want to see their "Relationships" based on their DNA. You don't know the families yet, so you start local.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Bottom-Up Start:</strong> Every person is their own "Cluster" of 1. Alice is a group, Bob is a group, etc.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The First Merge:</strong> Alice and Bob are 99.9% similar (Identical Twins). They hold hands and become one "Mega-Person" for the next calculation.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Expansion:</strong> Charlie sees that Alice/Bob are more similar to him than anyone else. He joins them, forming a 3-person "Family" cluster.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Global Root:</strong> Eventually, everyone is holding hands in one giant "Humanity" cluster. The <strong>Dendrogram</strong> is the map of how those hand-holds happened.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Hierarchical Clustering's greatest power is <strong>Retrospective Cutting</strong>. You don't have to decide if there are 2 families or 4 at the start. You build the whole tree and then "Cut" it with a horizontal line later to get the granularity you need.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code static-output="[Scan] Calculating initial Proximity Matrix...\n[Merge 1] Merging Point 0 & 1 (Distance: 0.1)\n[Merge 2] Merging Point 2 & 3 (Distance: 0.5)\n[Cutting] Applying forest cut at N=2 Clusters...\n[Result] Cluster Assignments: [A, A, B, B, A]\n[Analysis] Points 0, 1, and 4 successfully grouped despite the gap.">
import numpy as np
from sklearn.cluster import AgglomerativeClustering

# 1. Similarity data [DNA_Score_1, DNA_Score_2]
# Alice, Twin_Bob, Charlie, Cousin_Dave, Outlier_Zane
X = np.array([
    [1, 2], [1.1, 2.1], # Alice & Bob
    [10, 8], [10.2, 7.9], # Charlie & Dave
    [1, 1]              # Zane (Closer to A)
])

# 2. Build the 'Family Tree'
# linkage='ward' minimizes variance within the resulting groups
model = AgglomerativeClustering(n_clusters=2, linkage='ward')
labels = model.fit_predict(X)

# 3. Analyze the results
for i, label in enumerate(labels):
    print(f"Subject {i}: DNA {X[i]} -> Assigned Family {label}")

print(f"\n[Family 0 has {np.sum(labels == 0)} members]")
print(f"[Family 1 has {np.sum(labels == 1)} members]")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if your data is "Messy" and shaped like a Crescent Moon? k-Means and Ward's will fail. Explore <strong><a href="#/machine-learning/unsupervised-learning/dbscan">DBSCAN Analysis</a></strong>.
    </div>
  `
};
