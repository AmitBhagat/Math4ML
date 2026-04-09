import { TopicSection } from '../../src/data/types';

export const kmeansSection: TopicSection = {
  id: "kmeans",
  title: "k-Means Clustering",
  description: "A popular partitioning method that divides data into k clusters by minimizing the distance between points and their cluster centroids.",
  color: "#bc8cff",
  html: String.raw`
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
      <ol class="text-xs opacity-80 mt-2 space-y-1">
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
  `
};

