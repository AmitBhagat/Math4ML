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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Unsupervised Learning is the machine equivalent of learning by observation. Imagine walking into a party where you don't know anyone. You don't have their name tags (Labels), but after 30 minutes, you notice that some people are wearing suits and talking in the corner, while another group is laughing by the snacks. You've <strong>clustered</strong> them just by looking at their patterns and behavior. In machine learning, we look for the <strong>Underlying Structure</strong> of the data without any "Teachers" or "Answers." It is about discovering the hidden groups, dimensions, and rules that govern a dataset before we even know what they are. It is the tactical way we find the "Signal" when there are no labels to point the way.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Latent Structure and Representation Learning</div>
      <p>Given an unlabeled dataset $\mathcal{D} = \{\mathbf{x}_1, \dots, \mathbf{x}_N\}$, the objective of **Unsupervised Learning** is to learn a mapping $g: \mathcal{X} \to \mathcal{Z}$ that preserves the essential structure of the input space. The paradigm is operationalized through three mathematical pillars:</p>
      
      <div class="space-y-4">
        <div>
          <h4 class="text-sm font-bold text-green-premium">1. Clustering (Partitioning)</h4>
          <p class="text-xs mb-1">Grouping data into a set of clusters $\mathcal{C}$ such that similarity is maximized within groups and minimized between groups:</p>
          <div class="math-block">
            $$\arg \min_{\mathcal{S}} \sum_{i=1}^k \sum_{\mathbf{x} \in S_i} \|\mathbf{x} - \mu_i\|^2$$
          </div>
        </div>

        <div>
          <h4 class="text-sm font-bold text-green-premium">2. Dimensionality Reduction</h4>
          <p class="text-xs mb-1">Identifying a lower-dimensional subspace $\mathcal{Z} \subset \mathcal{X}$ that retains maximal information (variance) about the original data:</p>
          <div class="math-block">
            $$\mathbf{z} = \mathbf{x} \mathbf{W} \quad \text{s.t.} \quad \text{Tr}(\mathbf{W}^\top \text{Cov}(\mathbf{X}) \mathbf{W}) \text{ is maximized.}$$
          </div>
        </div>
      </div>

      <p class="text-xs opacity-80 mt-2">The success of unsupervised learning is evaluated through measures of **Density Estimation** $P(\mathbf{x})$, **Intrinsic Dimensionality**, and **Manifold Fidelity**, rather than explicit label accuracy.</p>
    </div>
    
    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Secret Society Party</h2>
    
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
          Unsupervised learning is about <strong>Discovery</strong>. It finds patterns in data that you didn't even know were there.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
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

    <h2 id="applications">Applications in ML</h2>
    <p>Unsupervised learning is the "Solo Explorer." It finds structure in chaos without a teacher to tell it the right answer, making it the primary tool for true data discovery.</p>
    <ul>
      <li><strong>Genetics Sequence Clustering</strong>: Biologists use unsupervised clustering to group unknown DNA sequences. By letting the algorithm find the mathematical similarities between millions of raw genetic codes, scientists can discover new species and find common ancestors without needing a labeled database of every organism.</li>
      <li><strong>Market Basket Analysis (Spotify Recommendations)</strong>: When Spotify suggests "Fans of this artist also like...", it's using unsupervised learning. It looks at millions of raw listening sessions and finds that 80% of people who listen to Artist A also listen to Artist B. No human labeled those artists as "similar"—the machine discovered the relationship just by looking at the raw distribution of data.</li>
    </ul>
    <p>Teacher's Final Word: Finding patterns in silence is the hardest—and most rewarding—kind of discovery. Unsupervised learning is where the "New" happens, turning a massive pile of random noise into a structured map of human behavior and natural phenomena.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we have a little bit of help? Explore <strong><a href="#/machine-learning/foundation-ml/semi-supervised">Semi-Supervised Learning</a></strong>.
    </div>
  `
};



