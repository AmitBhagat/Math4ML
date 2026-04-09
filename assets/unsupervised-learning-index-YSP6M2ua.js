const e={id:"kmeans",title:"k-Means Clustering",description:"A popular partitioning method that divides data into k clusters by minimizing the distance between points and their cluster centroids.",color:"#bc8cff",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧩 Unsupervised · Clustering</div>
      <h1>k-Means Clustering</h1>
      <p>Imagine you have a giant pile of unlabeled data points. You know there are groups inside, but you don't know where. <strong>k-Means</strong> is the simplest way to find these "hidden tribes" by placing <strong>Magnetic Centers</strong> (Centroids) into the pile and letting them pull in the closest points.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Imagine you have a giant pile of unlabeled data—no categories, no right answers, just a cloud of points. You suspect there are "Hidden Tribes" within this chaos, but you don't know where they live. <strong>k-Means</strong> is the ultimate tool for finding these groups by placing <strong>Magnetic Centers</strong> (Centroids) into the pile and letting them pull in the closest points. It is a "Self-Organizing" algorithm that uses simple geometry to find order. By minimizing the "Chaos" (Variance) within each group, it forces the data to reveal its natural structure without any human guidance.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: K-Means Clustering</div>
      <p>Given a set of observations $(\mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_n)$, k-means clustering aims to partition the $n$ observations into $k \le n$ sets $\mathbf{S} = \{S_1, S_2, \dots, S_k\}$ so as to minimize the **Within-Cluster Sum of Squares (WCSS)**:</p>
      <div class="math-block">
        $$\text{arg}\min_{\mathbf{S}} \sum_{i=1}^k \sum_{\mathbf{x} \in S_i} \|\mathbf{x} - \mu_i\|^2$$
      </div>
      <p>Where $\mu_i$ is the mean of points in $S_i$. The algorithm iteratively performs two steps:</p>
      <ol class="mt-2 space-y-1">
        <li><strong>Assignment</strong>: Assign each observation to the cluster with the nearest mean: $S_i^{(t)} = \{x_p : \|x_p - \mu_i^{(t)}\|^2 \le \|x_p - \mu_j^{(t)}\|^2 \forall j \}$.</li>
        <li><strong>Update</strong>: Calculate the new means (centroids) of the observations in the new clusters: $\mu_i^{(t+1)} = \frac{1}{|S_i^{(t)}|} \sum_{x_j \in S_i^{(t)}} x_j$.</li>
      </ol>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of k-Means as <strong>"Finding the Center of Gravity"</strong> or <strong>"The Proctor in a Test Room."</strong> 
        Imagine a gym full of 100 students and 3 Proctors standing in random corners. The proctors shout: "Everyone, run to the proctor closest to you!" (Assignment). Once the groups are formed, each proctor walks to the <strong>Exact Average Location</strong> of their group (Update). 
        The students see the proctors have moved and swap groups if a different proctor is now closer. 
        This "Dance of the Centroids" continues until everyone is perfectly grouped around their leader. 
        k-Means is the machine's way of saying: "Even if nobody labeled this data, these points belong together because they look at the world from the same <strong>Center</strong>."
      </div>
    </div>

    <h2 id="algorithm">The k-Means Algorithm</h2>
    
      <h4>Centroid Convergence Logic</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Initialization:</strong> Randomly place $K$ centroids in the feature space (or use k-means++ for smarter placement).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Assignment:</strong> Every data point "joins" the cluster of the centroid nearest to it (using Euclidean distance).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Update:</strong> Calculate the <strong>Mean Position</strong> (Average) of all points currently assigned to each cluster. Move the centroid to this new mean.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Iterate:</strong> Repeat the Assignment and Update steps.
        </div>
    <h2 id="elbow">Selecting 'k': The Elbow Method</h2>
    <p>How do you know if there are 3 clusters or 10? If you increase \(K\), your error (WCSS) will <strong>always</strong> go down. The goal is to find the "Elbow"—the point where adding more clusters doesn't give you a significantly better fit. It's the point of <strong>Diminishing Returns</strong>.</p>

    <h2 id="limitations">The "Spherical" Weakness</h2>
    <p><strong>The Gotcha:</strong> k-Means assumes clusters are <strong>Circular (Spherical)</strong> and of similar size. If your data is shaped like a <strong>Crescent Moon</strong> or a <strong>Ring</strong>, k-Means will fail miserably because it only knows how to find "Round Blobs."</p>

    <h2 id="analogy">The "Magnetic Centers" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Standardized Test Room</strong> with 100 students and 3 <strong>Proctors</strong>. 
        The proctors start in random corners. They say: "Everyone, find the proctor closest to you." (Assignment). 
        Once the students are grouped, each proctor walks to the <strong>Exact Center</strong> of their group (Update). 
        The students adjust to the new centers. Eventually, everyone is perfectly grouped around the proctors. <strong>k-Means is those proctors.</strong> 
      </div>
    </div>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Self-Grouping Party</h2>
    
      <h4>Scenario: Organizing 100 Strangers into 3 Teams</h4>
      <p>Imagine 100 people in a gym. You want them to form 3 compact groups. You don't have a list of who belongs where, so you let geometry do the work.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Initial Flags:</strong> You throw 3 colored flags (Centroids) into random spots on the floor.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Rush (Assignment):</strong> Everyone runs to the flag closest to them. Now you have 3 "Tentative" teams.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Flag Move (Update):</strong> Each flag-holder walks to the <strong>Exact Center</strong> of their team. (Mean Calculation).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Realignment:</strong> People see the flags have moved. Some realize they are now closer to a <strong>Different</strong> flag and switch teams. This repeats until nobody moves.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          k-Means is <strong>Iterative</strong>. It "Converges" when the flags are perfectly centered in their tribes. It is the most "Geometric" way to find order in chaos.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np
from sklearn.cluster import KMeans

# 1. Dataset: 100 synthetic 2D points
# Simplified to 9 points for illustration
X = np.array([
    [1, 2], [1, 4], [1, 0],    # Group A
    [10, 2], [10, 4], [10, 0],  # Group B
    [5, 8], [6, 8], [7, 8]      # Group C
])

# 2. The Algorithmic 'Proctors' (K=3)
kmeans = KMeans(n_clusters=3, n_init='auto', random_state=42)
kmeans.fit(X)

# 3. Final Locations (Centroids)
centers = kmeans.cluster_centers_
print(f"Centroids: \n{centers.round(1)}")

# 4. Sorting a new datapoint
new_point = np.array([[5, 5]])
print(f"Point (5,5) belongs to Cluster: {kmeans.predict(new_point)[0]}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>K-Means is the simplest way to find "Hidden Tribes" in a cloud of data. It uses the "Gravity" of the points themselves to discover order without any human labels.</p>
    <ul>
      <li><strong>Customer Persona Segmentation</strong>: E-commerce giants like Amazon use K-Means to group millions of shoppers into distinct "Personas." By clustering users based on spending habits and browsing history, they can identify the "Budget Students" vs. the "Luxury Travelers" automatically.</li>
      <li><strong>Image Compression (Vector Quantization)</strong>: K-Means handles photo shrinking by finding the few most dominant colors in an image. It replaces every pixel with the nearest dominant color center, allowing you to store a rich photo using only a tiny fraction of the original disk space.</li>
    </ul>
    <p>Teacher's Final Word: K-Means is the ultimate self-organizing tool. Even if nobody labeled your data, these points belong together because they look at the world from the same center of gravity. It is the gold standard for finding "Round Blobs" of similarity.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if clusters are "Nested" like a family tree? Explore <strong><a href="#/machine-learning/unsupervised-learning/hierarchical">Hierarchical Clustering</a></strong>.
    </div>
  `},t={id:"hierarchical",title:"Hierarchical Clustering",description:"A method of cluster analysis which seeks to build a hierarchy of clusters using Agglomerative or Divisive approaches.",color:"#bc8cff",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧩 Unsupervised · Clustering</div>
      <h1>Hierarchical Clustering</h1>
      <p>k-Means is a "Flat" algorithm—it just gives you $K$ groups. <strong>Hierarchical Clustering</strong> is different. It builds a <strong>Dendrogram</strong> (a tree) that shows how every single data point is related to every other. It's the "Family Tree" of your dataset.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>While Flat Clustering (like k-Means) simply gives you a list of groups, <strong>Hierarchical Clustering</strong> builds a layered map of relationships. It doesn't just ask "What group do you belong to?"; it asks "How closely related are you to every other point in the universe?". By building a <strong>Dendrogram</strong> (a "Family Tree"), the algorithm captures the varying levels of similarity, from identical twins to distant cousins. It is the ultimate tool for exploratory data analysis because it allows you to see the <strong>nested structure</strong> of your data—revealing how sub-communities merge into larger populations.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Hierarchical Clustering</div>
      <p>Hierarchical clustering builds a nested hierarchy of clusters. In **Agglomerative** (bottom-up) clustering, we start with $n$ clusters and sequentially merge the closest pair $(A, B)$ by minimizing a linkage criterion $d(A, B)$. For **Ward's Method**, the merge cost is the increase in the total **Within-Cluster Sum of Squares**:</p>
      <div class="math-block">
        $$d_{Ward}(A, B) = \frac{|A||B|}{|A|+|B|} \|\mu_A - \mu_B\|^2$$
      </div>
      <p>The resulting tree structure is visualized as a **Dendrogram**, where the horizontal position represents the merge and the vertical axis represents the distance $d(A, B)$ at which the merge occurred.</p>
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
  `},s={id:"dbscan",title:"DBSCAN Clustering",description:"Density-Based Spatial Clustering of Applications with Noise. It finds clusters of arbitrary shape and identifies outliers.",color:"#bc8cff",html:String.raw`
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
      <ul class="mt-2 space-y-1">
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
    <python-code>
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
  `},i={id:"gmm",title:"Gaussian Mixture Models (GMM)",description:"A probabilistic model that assumes all data points are generated from a mixture of a finite number of Gaussian distributions with unknown parameters.",color:"#bc8cff",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧩 Unsupervised · Probability</div>
      <h1>Gaussian Mixture Models (GMM)</h1>
      <p>k-Means is "Hard"—every point belongs 100% to one cluster or 0% to another. <strong>Gaussian Mixture Models (GMM)</strong> are "Soft." They don't just find centers; they find <strong>Overlapping Distribution Clouds</strong>. A point can be 70% Cluster A and 30% Cluster B. It's a more realistic way to model the <strong>Uncertainty</strong> of data.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>k-Means is a "Hard" algorithm—every point belongs 100% to one cluster or 0% to another. But the real world is rarely that black and white. <strong>Gaussian Mixture Models (GMM)</strong> represent a "Soft" approach to clustering. Instead of just finding centers, GMM finds <strong>Overlapping Distribution Clouds</strong>. It assumes that every group in your data is a natural "Mist" of probability. A single data point can be 70% Cluster A and 30% Cluster B. This probabilistic approach is far more realistic for modeling the <strong>Uncertainty</strong> and overlapping boundaries of real-world phenomena.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Gaussian Mixture Model</div>
      <p>A Gaussian Mixture Model represents the probability distribution of observations as a weighted sum of $K$ multivariate Gaussian densities:</p>
      <div class="math-block">
        $$p(\mathbf{x}) = \sum_{k=1}^K \pi_k \mathcal{N}(\mathbf{x} \mid \mu_k, \boldsymbol{\Sigma}_k)$$
      </div>
      <p>Where $\pi_k$ are the mixing coefficients satisfying $\sum_{k=1}^K \pi_k = 1$. The model is typically solved using the **Expectation-Maximization (EM)** algorithm, which iteratively calculates the **Responsibility** (posterior probability) $\gamma_{ik}$:</p>
      <div class="math-block">
        $$\gamma_{ik} = \frac{\pi_k \mathcal{N}(\mathbf{x}_i \mid \mu_k, \boldsymbol{\Sigma}_k)}{\sum_{j=1}^K \pi_j \mathcal{N}(\mathbf{x}_i \mid \mu_j, \boldsymbol{\Sigma}_j)}$$
      </div>
    </div>

    <h2 id="soft">Soft Clustering: Membership Probability</h2>
    <p>Unlike k-Means, which just says "Cluster 1," GMM gives you the <strong>Posterior Probability</strong> (Responsibilities). This is incredibly useful for finding points that live on the <strong>Edge</strong> of two groups.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of it as <strong>"The Guessing Game."</strong> 
        Instead of a proctor pointing a finger, imagine the room is filled with <strong>3 Smells</strong> (Coffee, Pizza, and Flowers). 
        You stand in a spot. You smell 80% Coffee and 20% Pizza. You belong mostly to the "Coffee Cluster," but you acknowledge the "Pizza influence." 
      </div>
    </div>

    <h2 id="algorithm">The GMM Algorithm (Expectation-Maximization)</h2>
    
      <h4>The Probability Update Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Initialization:</strong> Create $K$ random Gaussian distributions (Mean, Variance, and Weight).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Expectation (E-Step):</strong> For every point, calculate its "Responsibility"—how likely it is to belong to each Gaussian.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Maximization (M-Step):</strong> Update the Gaussians. Move the means and stretch the covariances to better fit the points that claimed them.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Log-Likelihood:</strong> Calculate the total probability of the entire dataset.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Convergence:</strong> Stop when the total probability stops improving significantly.
        </div>
      </div>
    

    <h2 id="covariance">Covariance Types</h2>
    <p>GMM's superpower is its flexibility. It can find <strong>Oblong (Elliptical)</strong> clusters. 
    <strong>Spherical:</strong> Clusters must be circles. 
    <strong>Full:</strong> Clusters can be stretched and rotated in any direction.</p>

    <h2 id="analogy">The "Overlapping Fog" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine looking at <strong>3 Clouds of Fog</strong> on a dark night. 
        Where the clouds meet, the air is thick with moisture. 
        One cloud is a <strong>Tall, Thin Pillar</strong> (Narrow Covariance). One is a <strong>Flat, Wide Carpet</strong> (Wide Covariance). 
        <strong>GMM</strong> is the physics that describes those clouds. It doesn't draw a line where one ends; it tells you exactly how "Damp" every spot is from each cloud. 
      </div>
    </div>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Overlapping Fog</h2>
    
      <h4>Scenario: Walking through a room with mixed smells</h4>
      <p>Imagine a coffee shop where the smell of Fresh Coffee (Cloud A) and Fresh Cinnamon Rolls (Cloud B) are drifting through the air.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Clouds (Distribution):</strong> Instead of hard circles, GMM sees two <strong>Gaussian Clouds</strong> of scent probability. Each has a center (Mean) and a shape (Covariance).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Soft Membership:</strong> You stand in the "Neutral Zone." You aren't 100% in one group or the other. You are <strong>70% Coffee</strong> and <strong>30% Cinnamon</strong>. (Probabilistic Assignment).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Expectation (E-Step):</strong> The model guesses how much each scent contributed to the smell at your current location.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Maximization (M-Step):</strong> The model moves and stretches the "Scent Clouds" to better explain all the smells detected by all the people in the room.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          GMM is <strong>Generative</strong>. It doesn't just categorize; it tries to learn the <strong>Template</strong> for how each group was created. This allows it to handle overlapping groups and "uncertain" data points that would confuse k-Means.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np
from sklearn.mixture import GaussianMixture

# 1. Dataset: Two overlapping clusters (synthetic)
# Group 0: Centered at (0,0), Group 1: Centered at (3,3)
X = np.concatenate([
    np.random.normal(0, 1, (50, 2)), 
    np.random.normal(3, 1, (50, 2))
])

# 2. The GMM Proctors 
# n_components=2 means we expect 2 distributions
gmm = GaussianMixture(n_components=2, random_state=42)
gmm.fit(X)

# 3. Soft Assignment for a point in the 'Neutral Zone'
test_point = np.array([[1.5, 1.5]])
probs = gmm.predict_proba(test_point)[0]

print(f"Scent Analysis for Point (1.5, 1.5):")
for i, p in enumerate(probs):
    print(f"- Component {i}: {p:.2%} Confidence")

print(f"\nFinal Verdict: Most likely Cluster {gmm.predict(test_point)[0]}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>GMM is the "Soft Guessing Game." It doesn't just draw a hard line; it finds overlapping fog clouds of probability, which is the only realistic way to model real-world uncertainty.</p>
    <ul>
      <li><strong>Automated Speech Recognition</strong>: Voice assistants use GMMs to model the "distribution" of your distinct vocal frequencies. Because GMMs handle overlapping clouds, they can distinguish your voice from a TV in the background by modeling the unique "mist" of your speech patterns.</li>
      <li><strong>Tissue Classification in Medical Imaging</strong>: In CT scans, a pixel might fall on the edge between two organs. GMMs allow doctors to calculate the probability of a pixel belonging to "Liver" vs "Stomach," providing a "Soft" map that accounts for the blurred boundaries of the body.</li>
    </ul>
    <p>Teacher's Final Word: Unlike k-Means, which just says "Cluster 1," GMM gives you the confidence of the assignment. It's the difference between guessing and knowing exactly how much you are guessing.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Clustering is about grouping. But what if we have too many dimensions (features)? Explore <strong><a href="#/machine-learning/unsupervised-learning/dim-reduction-intro">Introduction to Dimensionality Reduction</a></strong>.
    </div>
  `},o={id:"dim-reduction-intro",title:"Introduction to Dimensionality Reduction",description:"Dimensionality reduction is the process of reducing the number of random variables under consideration by obtaining a set of principal variables.",color:"#bc8cff",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧩 Unsupervised · Projection</div>
      <h1>Introduction to Dimensionality Reduction</h1>
      <p>Modern datasets have <strong>Thousands</strong> of features. But many of them are <strong>Redundant</strong>. If you know a person's Height and Weight, you can guess their T-shirt size. You don't need all three. <strong>Dimensionality Reduction</strong> is the art of simplifying the data without losing the <strong>Soul</strong> of the information.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Modern datasets often have thousands of features, but most of them are <strong>Redundant</strong>. If you know a person's Height and Weight, you can probably guess their T-shirt size—the third piece of info doesn't add much "New" value. <strong>Dimensionality Reduction</strong> is the art of simplifying data without losing its "Soul." In 2D or 3D, our human brains work well; in 1,000D, we are blind. By "Squashing" the data down to its most informative axes, we make it "Learnable" again, allowing our models to run faster, stay stable, and ignore the meaningless noise that clutters high-dimensional space.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Dimensionality Reduction</div>
      <p>Dimensionality reduction is the transformation of data from a high-dimensional space $\mathbb{R}^d$ into a low-dimensional space $\mathbb{R}^k$ ($k < d$). Formally, we seek a mapping function $f: \mathbf{x} \to \mathbf{z}$ that preserves specific properties of the original data:</p>
      <div class="math-block">
        $$\mathbf{z}_i = f(\mathbf{x}_i) \in \mathbb{R}^k$$
      </div>
      <p>The choice of $f$ depends on what the algorithm prioritizes:</p>
      <ul class="mt-2 space-y-1">
        <li><strong>Linear (PCA)</strong>: Preserves maximum variance via orthogonal projection.</li>
        <li><strong>Manifold (t-SNE/UMAP)</strong>: Preserves the local/topological structure of the data.</li>
        <li><strong>Feature Selection</strong>: Prunes redundant or zero-variance dimensions from the set.</li>
      </ul>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Dimensionality Reduction as <strong>"Finding the Shadow Puppet"</strong> or <strong>"The Busy Signal."</strong> 
        Imagine a complex 3D statue of a dragon. You want to describe it using only a 2D shadow on the wall. If you take a photo from the top-down, you just get a flat blob—you lost the "Essence" of the dragon. But if you rotate the statue to the <strong>Best Angle</strong>, you can see the head, wings, and tail clearly in 2D. 
        ML is just a giant search for that "Best Side." We are listening to 1,000 people talking at once (1,000 dimensions) and finding the 3 loudest, most informative voices to listen to. It’s about <strong>Information Compression</strong>: keeping the signal and killing the noise.
      </div>
    </div>

    <h2 id="algorithm">The Reduction Process</h2>
    
      <h4>Simplification Workflow</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Relevance Audit:</strong> Identify which features have high variance and which are nearly constant.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Correlation Check:</strong> Find pairs of features that tell the "same story" (e.g., Temperature in C and F).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Transformation:</strong> Apply a projection (like PCA) to rotate the data toward its most informative axes.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Granularity Selection:</strong> Decide how many dimensions to keep based on the "Information/Complexity" trade-off.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Validation:</strong> Ensure that the simplified data still performs well in your ML model.
        </div>
      </div>
    

    <h2 id="projections">Projections: The Shadow Metaphor</h2>
    <p>We reduce dimensions by <strong>Projecting</strong> the data onto a lower-dimensional subspace. Every project involves some <strong>Loss of Information</strong>. The goal is to find the projection that preserves the most <strong>Variance</strong> or <strong>Local Structure</strong>.</p>

    <h2 id="analogy">The "Shadow Puppet" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a complex <strong>3D Statue of a Dragon</strong>. 
        You want to describe the dragon using only a <strong>2D Shadow on the wall</strong>. 
        If you take a photo from the <strong>Top-Down</strong>, you just get a flat blob. (Bad Projection). 
        If you take it from the <strong>Side</strong>, you see the head, wings, and tail. (Good Projection). 
        <strong>Dimensionality Reduction</strong> is the physics of finding the <strong>Best Angle</strong> for that shadow puppet. 
      </div>
    </div>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Shadow on the Wall</h2>
    
      <h4>Scenario: Describing a 3D Dragon with a 2D Shadow</h4>
      <p>Imagine you have a complex 3D statue. You want to store its data, but your paper only has 2 dimensions. You have to "Squeeze" the complexity.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Problem:</strong> Storing every 3D coordinate (Height, Width, Depth) is expensive. You need to drop one dimension.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Projection:</strong> You shine a light on the statue to create a shadow on a flat sheet. This is <strong>Dimension Reduction</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Bad Angle:</strong> If you shine the light from above, you just get a flat, circular blob. You lost the wings and the head! (High Information Loss).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Strategy:</strong> You rotate the statue until the shadow clearly shows the head, wings, and tail. (Good Projection). You've kept the "Soul" of the dragon in 2D.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Dimension Reduction is about finding the <strong>Best Perspective</strong>. We lose some details (the thickness of the wings), but we keep the patterns that define the object.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np
from sklearn.feature_selection import VarianceThreshold

# 1. Dataset: [Height, Weight, Constant_ID, Micro_Noise]
# Constant_ID is identical for everyone (Zero Information)
X = np.array([
    [180, 80, 1, 0.01],
    [175, 75, 1, 0.05],
    [160, 60, 1, 0.02],
    [195, 95, 1, 0.09]
])

# 2. Filter out 'Dead' columns (0 variance)
# Any feature that never changes is useless for learning
selector = VarianceThreshold(threshold=0.0)
X_reduced = selector.fit_transform(X)

# 3. Audit the simplification
print(f"Original Dimensions: {X.shape[1]}")
print(f"Reduced Dimensions: {X_reduced.shape[1]}")
print(f"Kept Features (Mask): {selector.get_support()}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Dimensionality Reduction is the art of "Finding the Shadow Puppet." It simplifies data without losing its soul, keeping the signal and killing the noise.</p>
    <ul>
      <li><strong>High-Dimensional Data Visualization</strong>: Human brains can't see in 100 dimensions. Reducers "squash" complex data—like gene expressions or word embeddings—down to 2D so we can plot it and visually spot the clusters that the computer is finding.</li>
      <li><strong>Speeding up Model Training</strong>: Deep Neural Networks can take weeks to train on thousands of features. By reducing the data into its most informative "essence" first, you can often achieve 95% of the accuracy while cutting training time by 90%.</li>
    </ul>
    <p>Teacher's Final Word: In 2D or 3D, our brains work well; in 1,000D, we are blind. By "Squashing" the data toward its most informative axes, we make the universe learnable again.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What is the most famous tool for finding that "Best Side"? Explore <strong><a href="#/machine-learning/unsupervised-learning/pca">Principal Component Analysis (PCA)</a></strong>.
    </div>
  `},n={id:"pca",title:"Principal Component Analysis (PCA)",description:"A statistical procedure that uses an orthogonal transformation to convert a set of observations of possibly correlated variables into a set of values of linearly uncorrelated variables called principal components.",color:"#bc8cff",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧩 Unsupervised · Variance</div>
      <h1>Principal Component Analysis (PCA)</h1>
      <p><strong>PCA</strong> is the most widely used Dimensionality Reduction algorithm. It doesn't delete features; it <strong>Squashes</strong> them into a new set of orthogonal axes that maximize the <strong>Variance</strong>. It's the ultimate "Signal vs. Noise" filter for your data.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p><strong>PCA</strong> is the most widely used Dimensionality Reduction algorithm because of its mathematical elegance. It doesn't simply delete features; it <strong>Squashes</strong> them into a new set of dimensions that maximize the <strong>Variance</strong>. Variance is just another word for "Information." PCA finds the directions where the data is most spread out and preserves those, while discarding the "Thin" directions where nothing much happens. It is the ultimate "Signal vs. Noise" filter, allowing you to find the skeleton of your data hidden within a high-dimensional cloud of features.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Principal Component Analysis</div>
      <p>PCA identifies the orthogonal axes (principal components) that maximize the variance of the projected data. For a centered data matrix $\mathbf{X} \in \mathbb{R}^{n \times d}$, the first principal component $\mathbf{w}_1$ is defined as:</p>
      <div class="math-block">
        $$\mathbf{w}_1 = \arg\max_{\|\mathbf{w}\|=1} \text{Var}(\mathbf{Xw}) = \arg\max_{\|\mathbf{w}\|=1} \mathbf{w}^T \mathbf{X}^T \mathbf{X} \mathbf{w}$$
      </div>
      <p>The solution is found via the **SVD** of $\mathbf{X}$ or the **Eigen-Decomposition** of the covariance matrix $\boldsymbol{\Sigma}$. The $k$-th principal component is the eigenvector corresponding to the $k$-th largest eigenvalue $\lambda_k$:</p>
      <div class="math-block">
        $$\boldsymbol{\Sigma} \mathbf{v}_k = \lambda_k \mathbf{v}_k$$
      </div>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of PCA as <strong>"Finding the Axis of Change"</strong> or the <strong>"Best Photograph Analogy."</strong> 
        Imagine a **Rugby Ball** floating in space. It has 3 dimensions, but its most important feature is its "Length." PC1 is that long axis. If you only had one dimension to describe that ball, you’d pick the long axis because it captures 80% of the shape. 
        Or think of it as taking a 2D picture of a 100D alien. <strong>PCA</strong> is the algorithm that calculates the <strong>Exact Orbital Position</strong> for your camera so that the 2D photo captures the most detail (the widest spread) of the alien's complex, many-dimensional body. It is about finding the **Perspective** that kills the redundant noise and keeps the pure signal.
      </div>
    </div>
    
    <h2 id="variance">The "First" Component: Maximum Variance</h2>
    <p>Variance is <strong>Information</strong>. If a feature has zero variance (all points are the same), it tells you nothing. PCA finds the direction where the data is <strong>most spread out</strong>. PC1 is the strongest signal, PC2 is the second strongest, and so on.</p>

    <h2 id="preprocessing">Requirement: Scaling & Mean Centering</h2>
    <p><strong>The Gotcha:</strong> PCA is hypersensitive to <strong>Scale</strong>. If your "Income" is in Millions and "Age" is in 10s, PCA will spend 100% of its energy on Income. You <strong>MUST</strong> scale your data (Standardization) so that every feature has a <strong>Fair Chance</strong> to be a Principal Component.</p>

    <h2 id="svd">Computational Trick: SVD</h2>
    <p>In modern libraries (like Scikit-Learn), we don't actually calculate the Covariance Matrix. We use <strong>Singular Value Decomposition (SVD)</strong> directly on the data matrix \(X\). It is numerically more stable and much faster for huge datasets.</p>

    <h2 id="analogy">The "Best Photograph" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are a <strong>Photographer taking a 2D picture</strong> of a 100D alien. 
        Where do you stand? 
        If you stand 100 meters away at a random angle, you just get a flat blob. (Information loss). 
        <strong>PCA</strong> is the algorithm that calculates the <strong>exact orbital position</strong> to stand so that your 2D photo shows the <strong>most detail</strong> (the most spread) of the alien's 100D body. 
      </div>
    </div>

    <h2 id="algorithm">The PCA Algorithm</h2>
    
      <h4>The Variance Extraction Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Standardization:</strong> Shift data so the mean is 0 and scale so variance is 1. (Crucial!).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Covariance Matrix:</strong> Calculate how every feature varies in relation to every other feature.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Eigen-Decomposition:</strong> Find the Eigenvectors (Directions) and Eigenvalues (Magnitude of Variance) of that matrix.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Selection:</strong> Pick the top $k$ eigenvectors with the largest eigenvalues.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Projection:</strong> Multiply the original data by these eigenvectors to project it into the new, lower-dimensional space.
        </div>
      </div>
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Most Informative Angle</h2>
    
      <h4>Scenario: Photographing a 100-Armed Alien</h4>
      <p>Imagine you meet an Alien with 100 arms and 4 heads. You only have a 2D piece of paper to draw it. Where do you stand?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Random Angle:</strong> You stand directly in front. 80 arms are hidden behind the body. You only capture 20% of the information. (Low Variance).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The PCA Calculation:</strong> The algorithm calculates the <strong>exact orbital position</strong> of the 100 dimensions to find the widest spread.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>PC1 (The Long Axis):</strong> It finds the direction where the alien's arms are most spread out. This becomes your new X-axis.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The 2D Result:</strong> Your 2D sketch now shows 95 arms and all 4 heads clearly. You've captured 98% of the signal on a flat page.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          PCA is <strong>Lossy</strong>. You throw away the "Thin" dimensions to save space. Usually, keeping the top 2 or 3 components is enough to visualize clusters that were invisible in 100D.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

# 1. High-dim data: [Feature1, Feature2, Feature3, RedundantFeature4]
X = np.array([
    [10, 20, 5, 10.1],
    [11, 21, 5.1, 10.9],
    [50, 80, 2, 49.5],
    [52, 82, 2.1, 51.0]
])

# 2. Scaling (PCA is useless without this!)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 3. Principal Component Transformation
pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X_scaled)

# 4. Check 'How much did we keep?'
ratios = pca.explained_variance_ratio_
print(f"Contribution of PC1: {ratios[0]:.2%}")
print(f"Contribution of PC2: {ratios[1]:.2%}")
print(f"Total Info Retained: {np.sum(ratios):.2%}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>PCA is the "Signal vs. Noise" filter. It doesn't just cut features; it squashes them into a new perspective that maximizes the capture of information (variance).</p>
    <ul>
      <li><strong>Facial Recognition (Eigenfaces)</strong>: Before deep learning, engineers used PCA to represent human faces. By finding the "Principal Components" of face images, they could represent a high-res photo using just a few numbers (Eigenfaces), allowing computers to compare faces 1,000x faster by ignoring pixel-noise.</li>
      <li><strong>Genetic Population Mapping</strong>: In DNA research, individual variations are often drowned out by massive amounts of biological noise. Researchers use PCA to find the "Main Signal" of genetic variation, allowing them to see the true structure of an ethnic population on a simple 2D map.</li>
    </ul>
    <p>Teacher's Final Word: PCA is the most mathematically elegant way to find the skeleton of your data hidden within a high-dimensional cloud. It is your first and best defense against the "Curse of Dimensionality."</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> PCA captures "Global" variance. But what if we want to visualize "Local" clusters of points? Explore <strong><a href="#/machine-learning/unsupervised-learning/tsne">t-SNE Visualization</a></strong>.
    </div>
  `},a={id:"tsne",title:"t-Distributed Stochastic Neighbor Embedding (t-SNE)",description:"A non-linear dimensionality reduction technique well-suited for embedding high-dimensional data for visualization in a low-dimensional space of two or three dimensions.",color:"#bc8cff",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧩 Unsupervised · Visualization</div>
      <h1>t-SNE: The Neighborhood Plot</h1>
      <p>PCA looks for <strong>Global Variance</strong>—the big picture. <strong>t-SNE</strong> looks for <strong>Local Neighborhoods</strong>. It's the standard tool for "Sanity Checking" your high-dimensional data. If your data points are related (like handwritten '7's), t-SNE will huddle them together in a <strong>2D Map</strong>.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>PCA looks for <strong>Global Variance</strong>—the "Big Picture" skeleton of the data. <strong>t-SNE</strong> (t-Distributed Stochastic Neighbor Embedding), however, is obsessed with <strong>Local Neighborhoods</strong>. It is the gold standard for "Sanity Checking" high-dimensional data by squashing it into a 2D map. If points were close neighbors in the original 100D space, t-SNE will fight to keep them huddling together in 2D. It doesn't care about the total distance between far-off points; it only cares that your closest friends stay beside you on the map. It is a "Social Mapmaker" that unrolls complex, curved datasets that simple linear tools would just flatten.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: t-SNE</div>
      <p>t-SNE converts high-dimensional Euclidean distances into conditional probabilities representing similarities. For point $x_j$ given $x_i$, the similarity is:</p>
      <div class="math-block">
        $$p_{j|i} = \frac{\exp(-\|x_i - x_j\|^2 / 2\sigma_i^2)}{\sum_{k \ne i} \exp(-\|x_i - x_k\|^2 / 2\sigma_i^2)}$$
      </div>
      <p>In the low-dimensional space, t-SNE uses a Student's t-distribution to model similarities $q_{ij}$. The embedding is found by minimizing the **KL Divergence** via gradient descent:</p>
      <div class="math-block">
        $$\mathcal{C} = KL(P \| Q) = \sum_i \sum_j p_{ij} \log \frac{p_{ij}}{q_{ij}}$$
      </div>
      <p class="mt-2">The 't-distribution' handles the 'crowding problem' by having heavier tails than a Gaussian.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of t-SNE as <strong>"Optimizing Friendships in a Small Room"</strong> or the <strong>"Social Mapmaker Analogy."</strong> 
        Imagine you have 1,000 people who are friends in a massive 1,000-dimensional world. You want to put them all in a small 2D room (the screen). 
        <strong>t-SNE</strong> says: "If Person A and B were best friends in that 1,000D world, I will do whatever it takes to keep them <strong>side-by-side</strong> in this room." 
        It ignores global factors like height or wealth and focuses purely on <strong>Local Closeness</strong>. The result is a chart where "Cliques" (Handwritten '7's, similar DNA, or related words) are clustered perfectly. 
        But remember: the distance between the "Jocks" corner and the "Geeks" corner means <strong>nothing</strong>. In t-SNE, only the huddle matters.
      </div>
    </div>

    <h2 id="gaussians">Gaussian-t Comparison</h2>
    <p>The "t" in t-SNE stands for the <strong>Student's t-Distribution</strong>. This distribution has <strong>Fatter Tails</strong> than a normal Gaussian. This is its secret weapon. 
    <strong>The Gotcha:</strong> Normal Gaussians are too "Tight." In 2D, points get "Crowded" in the middle. The fatter tails of the t-distribution allow clusters to <strong>Spread Out</strong>, making them easier to see in your plot.</p>

    <h2 id="perplexity">The Perplexity Parameter</h2>
    <p><strong>Perplexity</strong> is the "Density" of the neighbors. If you set it to 5, t-SNE only cares about your 5 closest neighbors. If you set it to 50, it tries to keep larger groups together. It's the <strong>Number of Friends</strong> each point tries to keep close.</p>

    <h2 id="analogy">The "Friendship Map" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a huge <strong>1,000D Party</strong>. 
        You want to draw a <strong>2D Seating Chart</strong> for the afterlife. 
        <strong>PCA</strong> would try to put people based on their <strong>Height or Wealth</strong> (Global Variance). 
        <strong>t-SNE</strong> ignores height and wealth. It only asks: "Who was Person A talking to?" 
        If Person A was talking to Person B, they get the <strong>Same Table</strong>. 
        The result is a chart where <strong>Cliques (Clusters)</strong> are perfectly clear, but the "Distance" between tables doesn't mean much. 
      </div>
    </div>

    <h2 id="algorithm">The t-SNE Algorithm</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Crowd Compression</h2>
    
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
          t-SNE is a <strong>Non-Linear</strong> transformer. It can "Unroll" complex manifolds that PCA would just flatten. But beware: the distance between the "Jock" corner and the "Band" corner means <strong>nothing</strong>. Only the local huddles are real.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
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

    <h2 id="applications">Applications in ML</h2>
    <p>t-SNE is like "Optimizing Friendships in a Small Room." It ignores global factors and focuses purely on local closeness to find hidden cliques in your data.</p>
    <ul>
      <li><strong>Visualizing Neural Network Hidden Layers</strong>: AI engineers use t-SNE to "see" inside deep models. By taking high-dimensional data from the middle of an Image Classifier and squashing it into 2D, they can visually check if the model is correctly grouping "Dogs" vs. "Cats" in its imagination.</li>
      <li><strong>Genetic Disease Cluster Identification</strong>: t-SNE is used in bioinformatics to map similarities between thousands of patients. It can visually pull apart groups of people with similar medical conditions into "Islands," allowing doctors to see which patients react similarly to a specific treatment.</li>
    </ul>
    <p>Teacher's Final Word: Remember, in t-SNE, the "distances" between far-away islands are meaningless. Only the "huddles" are real. Use it as your primary tool for sanity-checking high-dimensional clusters.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> t-SNE is great for visualization, but it's slow. What if we want speed AND global structure? Explore <strong><a href="#/machine-learning/unsupervised-learning/umap">UMAP Analysis</a></strong>.
    </div>
  `},r={id:"umap",title:"Uniform Manifold Approximation and Projection (UMAP)",description:"A novel manifold learning technique for dimensionality reduction that is competitive with t-SNE for visualization quality, and arguably preserves more of the global structure with superior run time performance.",color:"#bc8cff",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧩 Unsupervised · Manifold</div>
      <h1>UMAP: The Topology Map</h1>
      <p>If t-SNE is the current standard, <strong>UMAP</strong> is the <strong>Challenger</strong>. It is faster, more mathematically grounded in <strong>Topology</strong>, and it does a better job of preserving the <strong>Global Structure</strong> of your data. It's the modern way to reduce large-scale high-dimensional data.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>If t-SNE is the current standard for visualization, <strong>UMAP</strong> (Uniform Manifold Approximation and Projection) is the modern challenger that is quickly taking the crown. It is faster, more mathematically rigorous, and handles global structure far better than its predecessors. While t-SNE is obsessed with only your closest neighbors, UMAP looks at the <strong>Global Topology</strong>—the overall "Shape" of the data universe. It assumes your data lives on a smooth, hidden surface (a manifold) and builds a mathematical bridge to represent that surface in 2D. This makes it the definitive choice for large-scale datasets with millions of points.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: UMAP (Topological Reconstruction)</div>
      <p>UMAP is founded on the assumption that data is uniformly distributed on a locally connected Riemannian manifold. It constructs a fuzzy simplicial complex representation of the data. For two points $x_i$ and $x_j$, the membership strength is:</p>
      <div class="math-block">
        $$p_{ij} = \exp\left(-\frac{d(x_i, x_j) - \rho_i}{\sigma_i}\right)$$
      </div>
      <p>Where $\rho_i$ is the distance to the nearest neighbor. The low-dimensional embedding is optimized by minimizing the **Fuzzy Set Cross-Entropy**:</p>
      <div class="math-block">
        $$\text{CE}(P, Q) = \sum_{e} \left[ p_e \log\left(\frac{p_e}{q_e}\right) + (1-p_e) \log\left(\frac{1-p_e}{1-q_e}\right) \right]$$
      </div>
      <p class="mt-2">Where $p_e$ and $q_e$ represent the high- and low-dimensional edge weights in the topological graph.</p>
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
  `},l={id:"autoencoders",title:"Autoencoders",description:"A type of artificial neural network used to learn efficient data codings in an unsupervised manner, consisting of an encoder and a decoder.",color:"#bc8cff",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧩 Unsupervised · Neural Nets</div>
      <h1>Autoencoders: The Information Hourglass</h1>
      <p>Traditional dimensionality reduction (like PCA) is <strong>Linear</strong>. But the world is <strong>Non-Linear</strong>. <strong>Autoencoders</strong> are neural networks designed to "bottleneck" information. They squeeze data into a tiny <strong>Latent Space</strong> and then try to <strong>reconstruct</strong> it perfectly. If they can rebuild the data from the bottleneck, they've successfully "learned" the essence of the information.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Traditional dimensionality reduction like PCA is linear, but the data we find in the real world is messy and non-linear. <strong>Autoencoders</strong> are neural networks designed to solve this by creating an "Information Hourglass." They force the data through a tiny <strong>Bottleneck</strong> (the Latent Space) and then try to reconstruct it perfectly on the other side. If the network can rebuild the original image or text from that tiny summary, it has successfully "Learned" the absolute essence of the information. It is a self-supervised process where the only teacher is the <strong>Reconstruction Error</strong>—forcing the machine to find the most efficient compression possible.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Autoencoder Architecture</div>
      <p>An autoencoder is a neural network trained to approximate the identity function, $g_{\phi}(f_{\theta}(\mathbf{x})) \approx \mathbf{x}$. It consists of two joint mappings:</p>
      <div class="math-block">
        $$\text{Encoder: } \mathbf{z} = f_{\theta}(\mathbf{x}) \in \mathbb{R}^k \mid k < d$$
        $$\text{Decoder: } \mathbf{\hat{x}} = g_{\phi}(\mathbf{z}) \in \mathbb{R}^d$$
      </div>
      <p>The objective is to minimize a loss function $\mathcal{L}$ that penalizes the reconstruction distance. For continuous data, we typically minimize the **Mean Squared Error (MSE)**:</p>
      <div class="math-block">
        $$\mathcal{L}(\theta, \phi) = \arg\min_{\theta, \phi} \frac{1}{n} \sum_{i=1}^n \|\mathbf{x}_i - g_{\phi}(f_{\theta}(\mathbf{x}_i))\|^2$$
      </div>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of an Autoencoder as <strong>"Learning to Summarize a Novel"</strong> or the <strong>"Xerox of the Soul."</strong> 
        Imagine you have a 1,000-page book. The <strong>Encoder</strong> is a brilliant student who is forced to summarize that entire book into just <strong>one page</strong> of notes (The Bottleneck). The <strong>Decoder</strong> is a professor who has to reconstruct the entire 1,000-page book using only that one page. 
        If the reconstructed book is nearly identical to the original, the student has captured the <strong>True Essence</strong> of the story. 
        It is the "Swiss Army Knife" of unsupervised learning: use it to denoise grainy photos, find anomalies in bank transactions, or even generate entirely new data that mimics the "Soul" of the original training set.
      </div>
    </div>
    
    <h2 id="bottleneck">The Bottleneck: Latent Space</h2>
    <p>The <strong>Bottleneck</strong> (middle layer) is the most important part. Its size is the number of <strong>Latent Dimensions</strong>. If the input is 10,000 pixels (an image) and the bottleneck is 32, the network is forced to find the <strong>32 most important features</strong> (like hair color, eye shape, smile) to describe the face.</p>

    <h2 id="loss">Reconstruction Loss: The Only Teacher</h2>
    <p>Autoencoders are <strong>Self-Supervised</strong>. The target is the <strong>Input itself</strong>. We minimize the difference (usually MSE) between the input \(x\) and the reconstructed output \(\hat{x}\):</p>
    <div class="math-block">$$Loss = \|x - \hat{x}\|^2$$</div>
    <p><strong>Note:</strong> We are teaching the machine to <strong>reproduce the truth</strong> using minimal resources.</p>

    <h2 id="variations">Variations: Denoising & Variational (VAE)</h2>
    
      <h4>Specialized Architectures:</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Denoising:</strong> You feed it <strong>Dirty (Noisy)</strong> data and ask it to reconstruct the <strong>Clean</strong> version. It learns to ignore the random pixels and focus on the <strong>Structure</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>VAE (Variational):</strong> Instead of a fixed vector, the bottleneck learns a <strong>Probability Distribution</strong>. This allows it to <strong>generate new data</strong> that has never existed before!</div>
        </div>
      </div>
    

    <h2 id="analogy">The "Lossy Mp3" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine an <strong>MP3 file</strong>. 
        It is a compressed version of a <strong>FLAC (Perfect) recording</strong>. 
        The <strong>Encoder</strong> is the compression algorithm. It throws away the sounds that humans can't hear. 
        The <strong>Decoder</strong> is your headphones. 
        If the song still sounds <strong>Beautiful and Accurate</strong>, the compression has "Learned" the soul of the music. <strong>Autoencoders are the machine's way of finding that perfect compression for any data.</strong> 
      </div>
    </div>

    <h2 id="algorithm">The Autoencoder Algorithm</h2>
    
      <h4>The Reconstruction Training Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Forward Pass (Encode):</strong> Feed the input $X$ into the Encoder to generate the compressed "Code" (Latent Vector).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Forward Pass (Decode):</strong> Feed the "Code" into the Decoder to reconstruct the original input shape.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Loss Calculation:</strong> Compare the input $X$ to the output $\hat{X}$ using <strong>Mean Squared Error (MSE)</strong>.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Backpropagation:</strong> Calculate gradients for the <strong>Entire Network</strong> (both Encoder and Decoder).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Optimization:</strong> Update weights to minimize the reconstruction error, forcing the network to learn a better "Squeeze."
        </div>
      </div>
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Information Funnel</h2>
    
      <h4>Scenario: Summarizing a 1,000-page Novel into 5 Core Themes</h4>
      <p>Imagine you have to explain the entire "Lord of the Rings" trilogy to someone who only has 5 seconds to listen. You can't tell the whole story, so you must capture the "Essence."</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Encoder:</strong> A brilliant student who reads the 1,000 pages and identifies the 5 absolute core themes (Power, Fellowship, Sacrifice, etc.). (The Bottleneck).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Decoder:</strong> A professor who takes those 5 themes and tries to write a <strong>New Book</strong> based solely on those notes.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Self-Supervision (The Teacher):</strong> We compare the new book to the original. If they match perfectly, it means the 5 themes were the <strong>Perfect Summary</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Result:</strong> The network has learned a "General Template" of what a story looks like, allowing it to squeeze 1,000 pages into 5 points with minimal loss.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Autoencoders are the "Swiss Army Knife" of Unsupervised Learning. They are used for <strong>Anomaly Detection</strong> (if the reconstruction error is too high, the data is weird), <strong>Denoising</strong>, and even <strong>Generating</strong> new data in the case of VAEs.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code runnable="false">
import tensorflow as tf
from tensorflow.keras import layers, models

# 1. Dimensions: 784 (Flattened 28x28 image)
input_dim = 784
latent_dim = 32  # 32 summary integers replace 784 pixels

# 2. Build the Hourglass (The 'Auto' in Autoencoder means self-learning)
autoencoder = models.Sequential([
    # Encoder: Progressively shrinks data
    layers.Input(shape=(input_dim,)),
    layers.Dense(128, activation='relu'),
    layers.Dense(latent_dim, activation='relu', name='bottleneck'), 
    
    # Decoder: Progressively expands back to pixels
    layers.Dense(128, activation='relu'),
    layers.Dense(input_dim, activation='sigmoid') 
])

# 3. Learning to reconstruct itself
autoencoder.compile(optimizer='adam', loss='mse')

# Prediction Step
# reconstructed = autoencoder.predict(original_image)
print(f"Goal: Minimize ||X - Reconstruction(Squeeze(X))||^2")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>An Autoencoder is the "Information Hourglass." It forces data through a tiny bottleneck and then tries to rebuild it on the other side to find the most efficient compression possible.</p>
    <ul>
      <li><strong>Image Denoising</strong>: Autoencoders are used to clean "noisy" images. By feeding the network a grainy photo and telling it to reconstruct the clean version, the model learns to ignore the random "speckles" and focus exclusively on the core structural essence.</li>
      <li><strong>Generative Drug Discovery</strong>: Variational Autoencoders (VAEs) are used to summarize the chemical properties of thousands of molecules into a latent space. Scientists can then find an "empty spot" in that space and decode it to generate an entirely new molecule that follows the laws of chemistry.</li>
    </ul>
    <p>Teacher's Final Word: It is the "Swiss Army Knife" of unsupervised learning. If the network can rebuild the original from a tiny summary, it has successfully captured the "Soul" of the information.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have mastered the patterns in unlabeled data. Now, let's learn how to prep and "Clean" your raw datasets in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
    </div>
  `},d={id:"anomaly-detection",title:"Anomaly Detection",description:"Identifying outliers and strange patterns that deviate from the expected 'normal' behavior.",color:"#ff7b72",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🕵️ Unsupervised · Outliers</div>
      <h1>Anomaly Detection: The Fraud Detective</h1>
      <p>In a world of trillions of transactions, how do you find the one <strong>stolen credit card</strong>? How do you spot a <strong>failing engine</strong> before it explodes? Anomaly Detection is the art of defining "Normal" so clearly that anything "Strange" stands out like a flare in the dark.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Anomaly Detection is the "Needle in the Haystack" problem. Unlike Clustering—where we find groups of similar points—Anomaly Detection focuses on the <strong>Loner</strong>. In high-dimensional data, "Normal" is a dense, predictable crowd. An "Anomaly" is a point that wanders off into the lonely, empty regions of the feature space. It's not just "different"; it's <strong>Mathematically Isotropic</strong>—it doesn't belong to any distribution. Whether it's a hacker's unique signature or a sensor glitch, these points tell us that something in our system has <strong>Broken the Rules</strong>.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Outlier Detection</div>
      <p>Anomaly detection is the task of identifying data points $\{\mathbf{x}_i\}$ that do not conform to an expected pattern or "normal" distribution $P(\mathbf{x})$. Formally, for a threshold $\tau$, a point is an anomaly if its density score is sufficiently low:</p>
      <div class="math-block">
        $$f(\mathbf{x}) < \tau$$
      </div>
      <p>Where $f(\mathbf{x})$ can be a likelihood $P(\mathbf{x} \mid \theta)$, a distance-based metric $1/d(\mathbf{x}, \text{nn}(\mathbf{x}))$, or a reconstruction error $\| \mathbf{x} - g(h(\mathbf{x})) \|^2$.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Anomaly Detection as <strong>"The Airport Security Scanner"</strong> or <strong>"The Immune System."</strong> 
        Your body knows exactly what "Self" looks like. When a virus (Anomaly) enters, it doesn't need to know the name of the virus; it just needs to know: <strong>"This is NOT Self."</strong> 
        Similarly, an Anomaly Detector learns the <strong>Manifold of Normalcy</strong>. It's like drawing a tight fence around a sheep herd. If a wolf appears, it's not because the wolf is blue or big; it's because the wolf is <strong>Outside the Fence</strong>.
      </div>
    </div>

    <h2 id="isolation-forest">Isolation Forest: The "Tree of Loneliness"</h2>
    <p>One of the most powerful ways to find anomalies is to try to <strong>Isolate</strong> them. If a point is normal, it lives in a crowd. You'd have to draw many lines to separate it from its neighbors. But if a point is an anomaly, it's alone. It only takes a few random slices to cut it off from the rest of the world.</p>
    
    <div class="premium-def-box">
      <div class="premium-def-title">Isolation Depth Multiplier</div>
      <p>The shorter the path length from the root of a random tree to a point, the more likely that point is an anomaly.</p>
      <div class="math-block">$$s(x, n) = 2^{-\frac{E(h(x))}{c(n)}}$$</div>
      <p class="mt-2">Where $E(h(x))$ is the average path length and $c(n)$ is the average path length of unsuccessful search in BST.</p>
    </div>

    <h2 id="one-class-svm">One-Class SVM: The Frontier</h2>
    <p>Instead of finding two classes (Apples vs. Oranges), the <strong>One-Class SVM</strong> learns the boundary of a single class (Apples). It tries to find the smallest possible "bubble" that contains the data. Anything falling outside that bubble is rejected as an anomaly.</p>

    <h2 id="gotchas">The "Masking" Gotcha</h2>
    <p><strong>The Headache:</strong> If anomalies come in <strong>groups</strong>, they can "mask" each other. The algorithm might think a group of 5 hackers is just a "new normal" cluster. Dealing with <strong>Clustered Anomalies</strong> is one of the biggest challenges in the field.</p>

    <h2 id="analogy">The "Blind Folded Slicing" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a room full of people. Most are standing in a tight circle in the center. One person is standing in the far corner. 
        Now, imagine you start drawing <strong>Random Lines</strong> across the floor. 
        How many lines does it take to <strong>Isolate</strong> the person in the corner? Maybe just one or two. 
        How many for someone in the middle of the crowd? You'd have to draw dozens to snip them out uniquely. 
        <strong>Isolation Forest</strong> uses this "Ease of Isolation" to score how strange a point is.
      </div>
    </div>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Bank Fraud Watchdogs</h2>
    
      <h4>Scenario: Spotting a Stolen Credit Card</h4>
      <p>A user typically spends $20 at Starbucks, $50 at the grocery store, and $100 on gas. Suddenly, there is a transaction for <strong>$5,000 at a Jewelry Store in Paris</strong>.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Normal Manifold:</strong> The model has "fenced in" the user's spending habits (Small amounts, local zip codes, specific categories).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Collision:</strong> The $5,000 transaction hits the model. In the High-Dimensional space of (Location, Amount, Time), this point is light-years away from the "Sheep Herd."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Score:</strong> The Isolation Forest cuts this point off in just 3 random splits. It triggers a "High Anomaly Score" ($> 0.8$).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Action:</strong> The transaction is blocked instantly. The "Normal" was preserved, and the "Strange" was isolated.</div>
        </div>
      </div>

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np
from sklearn.ensemble import IsolationForest

# 1. Generate 'Normal' Data (Cluster around center)
rng = np.random.RandomState(42)
X_normal = 0.3 * rng.randn(100, 2)
X_train = np.r_[X_normal + 2, X_normal - 2]

# 2. Generate 'Anomalous' Data (Outliers)
X_outliers = rng.uniform(low=-4, high=4, size=(5, 2))

# 3. The 'Fraud Detective' (Isolation Forest)
clf = IsolationForest(max_samples=100, random_state=rng, contamination=0.1)
clf.fit(X_train)

# 4. Score the data
y_pred_train = clf.predict(X_train)
y_pred_outliers = clf.predict(X_outliers)

print(f"Normal points detected as normal: {list(y_pred_train).count(1)} / 200")
print(f"Anomalies successfully isolated: {list(y_pred_outliers).count(-1)} / 5")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Anomaly Detection is the "Immune System" of AI. It doesn't need to know every possible threat; it just needs to know what "Normal" looks like so anything strange can be flagged.</p>
    <ul>
      <li><strong>Credit Card Fraud Prevention</strong>: Banks use anomaly detection to spot the "Loner" transaction. If your typical spending is small and local, a $5,000 purchase in a foreign country stands out as mathematically isolated and triggers an instant alert.</li>
      <li><strong>Industrial Equipment Maintenance</strong>: In factories, sensors track heat and vibration. An anomaly detector learns the "Manifold of Normalcy" for a healthy machine. When a bearing starts to fail, the sensor data wanders off into empty regions of space, flagging the problem before the machine actually breaks.</li>
    </ul>
    <p>Teacher's Final Word: Anomaly Detection focuses on the loner. It's the art of defining the "fence" around a sheep herd so clearly that a wolf stands out simply because it is outside the boundary.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve mastered the art of Discovery. Now, move into the frontier of complex modeling with <strong><a href="#/machine-learning/deep-learning/perceptron">Deep Learning & Neural Networks</a></strong>.
    </div>
  `},h={id:"unsupervised-learning",title:"Unsupervised Learning",description:"Extracting patterns, hidden tribes, and structural essence from data that has no labels.",keyConcepts:[{title:"Clustering Algorithms",description:"Finding the hidden tribes: k-Means, Hierarchical, DBSCAN, and GMM."},{title:"Dimension Reduction",description:"Squashing information: PCA, t-SNE, and UMAP."},{title:"Neural Manifolds",description:"Learning latent essentials: Autoencoders and Deep Embeddings."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Unsupervised Learning: <span class="text-accent italic">The Art of Discovery</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In <strong>Unsupervised Learning</strong>, there is no teacher. No labels. No "Right Answer." The machine must look at the raw geometry of the data and find the <strong>Hidden Structure</strong> that defines it. It is the most challenging and creatively expressive field of Machine Learning.
        </p>
      </div>

      <hr class="border-border-premium/50" />

        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This comprehensive curriculum is broken into <strong>10 high-fidelity topics</strong>, starting with simple geometric partitioning (k-Means) and ending with complex neural architectures (Autoencoders). 
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "The goal of unsupervised learning is to create a compact, efficient, and useful representation of the world without the need for manual labels."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Yann LeCun</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Start exploring the hidden patterns of the universe.</p>
        <a 
          href="/#/machine-learning/unsupervised-learning/kmeans" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with k-Means Clustering
        </a>
      </div>

    </div>
  `,sections:[e,t,s,i,o,n,a,r,l,d]};export{h as UNSUPERVISED_LEARNING_DATA};
