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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>While Flat Clustering (like k-Means) simply gives you a list of groups, <strong>Hierarchical Clustering</strong> builds a layered map of relationships. It doesn't just ask "What group do you belong to?"; it asks "How closely related are you to every other point in the universe?". By building a <strong>Dendrogram</strong> (a "Family Tree"), the algorithm captures the varying levels of similarity, from identical twins to distant cousins. It is the ultimate tool for exploratory data analysis because it allows you to see the <strong>nested structure</strong> of your data—revealing how sub-communities merge into larger populations.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Agglomerative Linkage & Nested Partitions</div>
      <p>Hierarchical Clustering is "Relational Ancestry." It is the process of building a tree of similarity where every point eventually finds its way to a common root.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine your data points as individual organisms in a high-dimensional room. At the start, everyone is a "Group of One." <strong>Hierarchical Clustering</strong> is the process where the most similar points find each other and "clump" together. These small clumps then search for the next most similar clumps, and so on, until the entire population is merged into a single "Master Cluster." Geometrically, this creates a <strong>Nested hierarchy</strong> of subspaces. Unlike K-Means, which gives you one flat layer of groups, this method gives you the entire "Evolutionary Tree" of how those groups formed.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We typically use the <strong>Agglomerative (Bottom-Up)</strong> approach. We start with $n$ clusters and iteratively merge the pair $(A, B)$ that is "Closest" according to a <strong>Linkage Criterion</strong>. The definition of "Close" changes the entire shape of the tree:</p>
      <ul class="mt-2 mb-4 space-y-2">
        <li><strong>Single Linkage (Min)</strong>: $d(A,B) = \min_{\mathbf{x} \in A, \mathbf{y} \in B} d(\mathbf{x}, \mathbf{y})$. Finds the "Bridge" between groups.</li>
        <li><strong>Complete Linkage (Max)</strong>: $d(A,B) = \max_{\mathbf{x} \in A, \mathbf{y} \in B} d(\mathbf{x}, \mathbf{y})$. Ensures compact, "safe" clusters.</li>
        <li><strong>Ward's Method</strong>: Minimizes the increase in within-cluster variance. This is the "Gold Standard" for creating even, spherical clusters:
          $$d_{Ward}(A, B) = \frac{|A||B|}{|A|+|B|} \|\mu_A - \mu_B\|^2_{2}$$
        </li>
      </ul>
      <p>The result is a <strong>Dendrogram</strong>— a tree where the vertical axis represents the distance $d(A, B)$ at which each merge occurred.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, Hierarchical Clustering is the <strong>Taxonomist</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>No K Required</strong>: You don't need to guess how many clusters exist before you start. You decide where to "Cut" the tree after you see the whole family history.</li>
        <li><strong>Computational Wall</strong>: Because we have to calculate the distance between *every* pair of points/clusters, the algorithm scales at $O(n^3)$ or $O(n^2 \log n)$. If you have a million points, your computer will likely catch fire before the tree is finished.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Once two clusters are merged, they can never be un-merged. One bad decision at the beginning of the algorithm (due to noise) will propagate all the way up the tree, potentially ruining the final hierarchy.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Hierarchical Clustering as a <strong>"DNA Family Tree"</strong> or the <strong>"Global Hand-Holding Game."</strong> 
        Imagine a room full of strangers. In the <strong>Agglomerative</strong> (Bottom-Up) approach, everyone finds their most similar person and holds hands. Now you have pairs. Then those pairs find <em>their</em> closest neighboring pair and form a group of four. 
        Eventually, everyone is holding hands in one giant circle. 
        The <strong>Dendrogram</strong> is the height-map of those handholds—it tells you exactly when two groups felt similar enough to merge. It’s the difference between seeing a crowd and seeing the <strong>history of how that crowd formed</strong>.
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
    <python-code>
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

    <h2 id="applications">Applications in ML</h2>
    <p>Hierarchical Clustering is the "DNA Family Tree." It doesn't just categorize; it asks "How closely related are you to every other point in the universe?".</p>
    <ul>
      <li><strong>Biological Phylogenetics</strong>: Biologists use hierarchical clustering to build "Trees of Life." By comparing DNA sequences, the algorithm creates a dendrogram that shows exactly which species are "Twins" and which are "Distant Cousins," revealing the evolutionary ancestry of an entire ecosystem.</li>
      <li><strong>Document Organization</strong>: News platforms like Google News use hierarchical clustering to group articles. It might first group all "Sports" articles, then split those into "Football" and "Basketball," allowing users to navigate from broad categories down to specific match reports.</li>
    </ul>
    <p>Teacher's Final Word: The dendrogram is the height-map of similarity—it tells you exactly when two groups felt similar enough to merge. It’s the difference between seeing a crowd and seeing the history of how that crowd formed.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if your data is "Messy" and shaped like a Crescent Moon? k-Means and Ward's will fail. Explore <strong><a href="#/machine-learning/unsupervised-learning/dbscan">DBSCAN Analysis</a></strong>.
    </div>
  `
};


