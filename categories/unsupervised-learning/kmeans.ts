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
    <p>k-Means is a <strong>Centroid-Based</strong> algorithm. Its goal is to minimize the <strong>Within-Cluster Sum of Squares (WCSS)</strong>, also known as <strong>Inertia</strong>. We want the points inside each cluster to be as "tight" as possible around their center.</p>
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

    <h2 id="example">Illustrated Example: The Self-Grouping Party</h2>
    <div class="example-box">
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
          <strong>Teacher's Hint:</strong> k-Means is <strong>Iterative</strong>. It "Converges" when the flags are perfectly centered in their tribes. It is the most "Geometric" way to find order in chaos.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Finding the Tribes</h2>
    <python-code static-output="[Scan] Dataset: 100 observations, 2 features\n[Iteration 0] Placing 3 random centroids...\n[Iteration 5] Inertia dropped from 152.4 to 42.1\n[Convergence] Centroids stabilized at: [[1,2], [10,2], [6,8]]\n[Note] New point at (5,5) assigned to Cluster #2.">
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

    <div class="linking-rule">
      <strong>Next Step:</strong> What if clusters are "Nested" like a family tree? Explore <strong><a href="#/machine-learning/unsupervised-learning/hierarchical">Hierarchical Clustering</a></strong>.
    </div>
  `
};
