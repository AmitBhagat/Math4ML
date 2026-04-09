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
  `
};

