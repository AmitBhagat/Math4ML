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

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Objective Function</a>
      <a href="#algorithm">The 4-Step Iteration</a>
      <a href="#elbow">Selecting 'k': The Elbow Method</a>
      <a href="#limitations">The "Spherical" Weakness</a>
      <a href="#analogy">The "Magnetic Centers" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Objective Function</h2>
    <p>k-Means is a **Centroid-Based** algorithm. Its goal is to minimize the <strong>Within-Cluster Sum of Squares (WCSS)</strong>, also known as <strong>Inertia</strong>. We want the points inside each cluster to be as "tight" as possible around their center.</p>
    <div class="math-block">$$WCSS = \sum_{j=1}^K \sum_{x \in C_j} \|x - \mu_j\|^2$$</div>
    <ul>
      <li><strong>\(K\):</strong> The number of clusters (chosen by the user).</li>
      <li><strong>\(\mu_j\):</strong> The mean (centroid) of cluster \(j\).</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Finding the Center of Gravity."</strong> 
        The algorithm doesn't know where the clusters are at first. It just makes a <strong>Guess</strong>, calculates the average location of everyone who "joined" that guess, and then <strong>Moves</strong> the center to that average. It repeats this until the centers stop moving.
      </div>
    </div>

    <h2 id="algorithm">The k-Means Algorithm</h2>
    <div class="example-box">
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
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Convergence:</strong> Stop once the centroids no longer move or a maximum iteration limit is hit.
        </div>
      </div>
    </div>

    <h2 id="elbow">Selecting 'k': The Elbow Method</h2>
    <p>How do you know if there are 3 clusters or 10? If you increase \(K\), your error (WCSS) will <strong>always</strong> go down. The goal is to find the "Elbow"—the point where adding more clusters doesn't give you a significantly better fit. It's the point of <strong>Diminishing Returns</strong>.</p>

    <h2 id="limitations">The "Spherical" Weakness</h2>
    <p><strong>The Gotcha:</strong> k-Means assumes clusters are <strong>Circular (Spherical)</strong> and of similar size. If your data is shaped like a **Crescent Moon** or a **Ring**, k-Means will fail miserably because it only knows how to find "Round Blobs."</p>

    <h2 id="analogy">The "Magnetic Centers" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Standardized Test Room</strong> with 100 students and 3 <strong>Proctors</strong>. 
        The proctors start in random corners. They say: "Everyone, find the proctor closest to you." (Assignment). 
        Once the students are grouped, each proctor walks to the <strong>Exact Center</strong> of their group (Update). 
        The students adjust to the new centers. Eventually, everyone is perfectly grouped around the proctors. **k-Means is those proctors.** 
      </div>
    </div>

    <h2 id="example">Illustrated Example: Pizza Shop Locations</h2>
    <p>Imagine you want to open <strong>3 Pizza Shops</strong> in a city to serve 1,000 customers. You want to minimize the distance customers have to travel.</p>
    <ul>
      <li><strong>Initial Guess:</strong> You put the shops in 3 random neighborhoods. </li>
      <li><strong>The Pull:</strong> Each customer decides which of the 3 shops is closest to them. </li>
      <li><strong>The Optimization:</strong> You calculate the average location of every customer who chose "Shop A" and move Shop A to that <strong>geographic center</strong>.</li>
      <li><strong>The Result:</strong> After a few moves, the shops are perfectly positioned in the centers of the 3 most populated areas. <strong>k-Means is that urban planner.</strong></li>
    </ul>

    <python-code>
from sklearn.cluster import KMeans
import numpy as np

# 1. Customer Coordinates [X, Y]
X = np.array([
    [1, 2], [1, 4], [1, 0],
    [10, 2], [10, 4], [10, 0],
    [5, 8], [6, 8], [7, 8]
])

# 2. Train with K=3 (3 Pizza Shops)
model = KMeans(n_clusters=3, random_state=42)
model.fit(X)

# 3. Check the final locations (Centroids)
print(f"Shop Locations: \n{model.cluster_centers_}")

# 4. Which shop does a new customer at [5, 5] belong to?
new_cust = np.array([[5, 5]])
print(f"Assigned Shop: {model.predict(new_cust)[0]}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if clusters are "Nested" like a family tree? Explore <strong><a href="#/machine-learning/unsupervised-learning/hierarchical">Hierarchical Clustering</a></strong>.
    </div>
  `
};
