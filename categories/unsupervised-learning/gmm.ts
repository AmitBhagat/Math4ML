import { TopicSection } from '../../src/data/types';

export const gmmSection: TopicSection = {
  id: "gmm",
  title: "Gaussian Mixture Models (GMM)",
  description: "A probabilistic model that assumes all data points are generated from a mixture of a finite number of Gaussian distributions with unknown parameters.",
  color: "#bc8cff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧩 Unsupervised · Probability</div>
      <h1>Gaussian Mixture Models (GMM)</h1>
      <p>k-Means is "Hard"—every point belongs 100% to one cluster or 0% to another. <strong>Gaussian Mixture Models (GMM)</strong> are "Soft." They don't just find centers; they find <strong>Overlapping Distribution Clouds</strong>. A point can be 70% Cluster A and 30% Cluster B. It's a more realistic way to model the <strong>Uncertainty</strong> of data.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Probability Density</a>
      <a href="#soft">Soft Clustering: Membership Probability</a>
      <a href="#em">The Algorithm: Expectation-Maximization (EM)</a>
      <a href="#covariance">Covariance Types: Spherical, Tied, Diagonal, Full</a>
      <a href="#analogy">The "Overlapping Fog" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Probability Density</h2>
    <p>GMM assumes that the data is generated from a mixture of <strong>Normal (Gaussian) Distributions</strong>. For every point $x$, we calculate the probability that it belongs to each of the $K$ Gaussians:</p>
    <div class="math-block">$$P(x) = \sum_{k=1}^K \pi_k \mathcal{N}(x \mid \mu_k, \Sigma_k)$$</div>
    <ul>
      <li><strong>\(\pi_k\):</strong> The "Weight" of the $k$-th Gaussian.</li>
      <li><strong>\(\mu_k, \Sigma_k\):</strong> The mean and covariance of the $k$-th Gaussian.</li>
    </ul>

    <h2 id="soft">Soft Clustering: Membership Probability</h2>
    <p>Unlike k-Means, which just says "Cluster 1," GMM gives you the <strong>Posterior Probability</strong> (Responsibilities). This is incredibly useful for finding points that live on the **Edge** of two groups.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Guessing Game."</strong> 
        Instead of a proctor pointing a finger, imagine the room is filled with <strong>3 Smells</strong> (Coffee, Pizza, and Flowers). 
        You stand in a spot. You smell 80% Coffee and 20% Pizza. You belong mostly to the "Coffee Cluster," but you acknowledge the "Pizza influence." 
      </div>
    </div>

    <h2 id="algorithm">The GMM Algorithm (Expectation-Maximization)</h2>
    <div class="example-box">
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
    </div>

    <h2 id="covariance">Covariance Types</h2>
    <p>GMM's superpower is its flexibility. It can find <strong>Oblong (Elliptical)</strong> clusters. 
    **Spherical:** Clusters must be circles. 
    **Full:** Clusters can be stretched and rotated in any direction.</p>

    <h2 id="analogy">The "Overlapping Fog" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine looking at <strong>3 Clouds of Fog</strong> on a dark night. 
        Where the clouds meet, the air is thick with moisture. 
        One cloud is a <strong>Tall, Thin Pillar</strong> (Narrow Covariance). One is a <strong>Flat, Wide Carpet</strong> (Wide Covariance). 
        **GMM** is the physics that describes those clouds. It doesn't draw a line where one ends; it tells you exactly how "Damp" every spot is from each cloud. 
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Overlapping Fog Clouds</h2>
    <p>Imagine a field with two <strong>Fog Machines</strong>. One machine makes a thick, round cloud; the other makes a long, thin horizontal cloud. They overlap in the middle.</p>
    <ul>
      <li><strong>Soft Data:</strong> You walk into the middle. You are <strong>covered in moisture</strong> from both clouds. </li>
      <li><strong>The Measurement:</strong> GMM calculates that you are 60% wet from the "Round Cloud" and 40% wet from the "Thin Cloud." </li>
    </ul>
    <p>Instead of forcing you into one "Cloud Group," it acknowledges the reality of the <strong>Atmospheric Mixture</strong>. <strong>GMM is that moisture sensor.</strong></p>

    <h2 id="python">Python Implementation</h2>
    <python-code>
from sklearn.mixture import GaussianMixture
import numpy as np

# 1. Generate 2 overlapping clusters
X = np.concatenate([
    np.random.normal(0, 1, (50, 2)), # High density center
    np.random.normal(3, 1.5, (50, 2)) # Wide, loose cluster
])

# 2. Train with 2 components
model = GaussianMixture(n_components=2)
model.fit(X)

# 3. Predict 'Soft' probabilities for a new point exactly at [1.5, 1.5]
new_point = np.array([[1.5, 1.5]])
probs = model.predict_proba(new_point)
print(f"Probabilities (Cluster 0 vs 1): {probs[0]}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Clustering is about grouping. But what if we have too many dimensions (features)? Explore <strong><a href="#/machine-learning/unsupervised-learning/dim-reduction-intro">Introduction to Dimensionality Reduction</a></strong>.
    </div>
  `
};
