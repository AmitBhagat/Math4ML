import { TopicSection } from '../../src/data/types';

export const unsupervisedLearningSection: TopicSection = {
  id: "unsupervised",
  title: "Unsupervised Learning",
  description: "Unsupervised Learning is a type of Machine Learning that looks for previously unknown patterns in a dataset without pre-existing labels.",
  color: "#FF9800",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Unsupervised</div>
      <h1>Unsupervised Learning: The Pattern Finder</h1>
      <p><strong>Unsupervised Learning</strong> is the machine equivalent of learning by observation. There are no "Teachers" and no "Answers." The machine looks for the <strong>Underlying Structure</strong> of the data. It's about finding out how things are related before we even know what they are.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Concepts: Structure over Labels</a>
      <a href="#clustering">Clustering: Finding Groups</a>
      <a href="#dimensionality-reduction">Dimensionality Reduction: Simplifying Space</a>
      <a href="#analogy">The "Blind Archeologist" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Concepts: Structure over Labels</h2>
    <p>In Unsupervised Learning, the input is just \(X\). There is no \(Y\) to predict. The machine's objective is to model the <strong>Probability Density</strong> (\(P(X)\)) or the <strong>Geometric Topology</strong> of the data.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as a <strong>Secret Society</strong>. 
        You walk into a party where you don't know anyone. You don't have their name tags (Labels). But after 30 minutes, you see that some people are wearing suits and talking in the corner, while another group is laughing by the snacks. You've <strong>clustered</strong> them just by looking at their behavior.
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Secret Society Party</h2>
    <div class="example-box">
      <h4>Scenario: Crashing a High-Stakes Gala</h4>
      <p>Imagine you walk into a room of 500 people. You don't know anyone's name, job, or origin (No Labels).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Observation:</strong> You notice 50 people are gathered by the buffet, another 200 are on the dance floor, and 50 are in suits talking in a circle.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Clustering:</strong> Even without labels, your brain has logically grouped them into "Hungry," "Dancers," and "Business."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Takeaway:</strong> You've discovered the hidden social structure of the party just by looking at the <strong>distribution of people</strong>.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Unsupervised learning is about <strong>Discovery</strong>. It finds patterns in data that you didn't even know were there.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Clustering & PCA</h2>
    <python-code static-output="[Clustering] Groups found: [0 0 1 1]\n[PCA] 2D Data reduced to 1D: [2.8, -2.8]">
import numpy as np
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA

# 1. Clustering (K-Means)
# 4 points: 2 near [0,0] and 2 near [10,10]
X_clust = np.array([[0, 0], [1, 1], [10, 10], [9, 9]])
kmeans = KMeans(n_components=2, n_init=10).fit(X_clust)
print(f"[Clustering] Groups found: {kmeans.labels_}")

# 2. Dimensionality Reduction (PCA)
# Reducing 2 features down to 1 big trend
X_pca = np.array([[1, 2], [2, 4], [3, 6], [4, 8]]) # Perfectly linear
pca = PCA(n_components=1).fit(X_pca)
reduced_data = pca.transform([[2, 4]])
print(f"[PCA] Data [2, 4] reduced to 1D: {reduced_data[0]}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we have a little bit of help? Explore <strong><a href="#/machine-learning/foundation-ml/semi-supervised">Semi-Supervised Learning</a></strong>.
    </div>
  `
};
