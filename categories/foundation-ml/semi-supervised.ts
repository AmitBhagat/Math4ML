import { TopicSection } from '../../src/data/types';

export const semiSupervisedLearningSection: TopicSection = {
  id: "semi-supervised",
  title: "Semi-Supervised Learning",
  description: "Semi-Supervised Learning is a type of Machine Learning that uses both labeled and unlabeled data for training.",
  color: "#9C27B0",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Semi-Supervised</div>
      <h1>Semi-Supervised Learning: The Gold Rush</h1>
      <p><strong>Semi-Supervised Learning (SSL)</strong> is the pragmatic middle ground. In the real world, most data is unlabeled and "Messy." Labeling is expensive. SSL is about using a small handful of <strong>Labeled Diamonds</strong> to find the value in a mountain of <strong>Unlabeled Dust</strong>.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p><strong>Semi-Supervised Learning (SSL)</strong> is the pragmatic middle ground between having a perfect teacher and being completely lost in the dark. In the real world, labeling data is expensive and time-consuming (a human has to sit down and do it). However, unlabeled data is cheap and abundant—think of billions of photos on the internet. SSL is about using a small handful of <strong>Labeled Diamonds</strong> to reveal the hidden value in a mountain of <strong>Unlabeled Dust</strong>. It assumes that if two points are close together in space, they probably share the same label. By spreading the "seeds" of known knowledge to nearby neighbors, we can train powerful models with only a fraction of the manual effort required for pure supervised learning.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Hybrid Risk Objective</div>
      <p>Semi-supervised learning involves a training set $\mathcal{D}$ composed of a small labeled subset $\mathcal{L} = \{(\mathbf{x}_i, y_i)\}_{i=1}^l$ and a large unlabeled subset $\mathcal{U} = \{\mathbf{x}_i\}_{i=l+1}^{l+u}$. The objective is to minimize a loss function $J(f)$ that incorporates both supervised and structural components:</p>
      <div class="math-block">
        $$J(f) = \sum_{i=1}^l L(y_i, f(\mathbf{x}_i)) + \lambda \cdot \Omega(f, \mathcal{U})$$
      </div>
      <p>The **Unsupervised Regularizer** $\Omega$ uses the unlabeled data to enforce structural constraints:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Smoothness Assumption</strong>: If $\mathbf{x}_i$ and $\mathbf{x}_j$ are close in high-density regions, their outputs $f(\mathbf{x}_i)$ and $f(\mathbf{x}_j)$ should be similar.</li>
        <li><strong>Low-Density Separation</strong>: The decision boundary should pass through areas where the marginal density $P(\mathbf{x})$ is low, effectively avoiding the "splitting" of natural clusters.</li>
        <li><strong>Manifold Assumption</strong>: Data points are assumed to lie on a low-dimensional manifold $\mathcal{M}$. SSL uses $\mathcal{U}$ to approximate $\mathcal{M}$ and ensures the model varies smoothly only along the manifold's surface.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">By leveraging the underlying geometry of $\mathcal{U}$, we reduce the sample complexity of $f$ significantly compared to pure supervised methods.</p>
    </div>
    
    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Tiny City Map</h2>
    
      <h4>Scenario: Navigating a 1,000-Square-Mile City</h4>
      <p>Imagine you are in a massive city and you only have a <strong>1-page tourist map</strong> (The Labeled Data).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Anchor:</strong> You find "Central Park" on your tiny map. You are standing right there.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Expansion:</strong> You look at the unlabeled streets around you. Since they are physically connected to Central Park, you infer they must be part of the "Manhattan" district.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Result:</strong> You've mapped out 100 blocks of the city even though your map only showed one. Your "Seeds of Knowledge" have sprouted into a forest.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          SSL is about <strong>Leverage</strong>. It uses a few expensive labels to unlock the value of thousands of free ones.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np
from sklearn.semi_supervised import LabelPropagation

# 1. Very Little Labeled Data (0 and 1)
# -1 means 'Unlabeled'
X = np.array([[1, 1], [1, 2], [10, 10], [9, 9], [2, 1], [9, 8]])
y = np.array([0, 0, 1, 1, -1, -1]) # Only 4 points are labeled

# 2. Let the labels 'flow' to the neighbors
lp = LabelPropagation().fit(X, y)
y_pred = lp.predict(X)

print(f"[SSL] Final Labels: {y_pred}")
print(f"Predicted Class for point [2, 1]: Class {y_pred[4]}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Semi-supervised learning is the "Smart Detective" that uses a handful of certain truths to make sense of a massive pile of unknown evidence. It is the gold standard for when data is abundant but human experts are expensive.</p>
    <ul>
      <li><strong>Google Photos Face Labeling</strong>: When you open your photo app and label your "Dad" for the first time, you've provided a single label. The semi-supervised model then looks at 10,000 other photos in your library, clustering the ones that share the same high-fidelity facial features as your "Dad" label. It effectively labels your entire library for you using just one human-provided seed.</li>
      <li><strong>Web Content Categorization</strong>: Internet companies have millions of new web pages every day. It's impossible for humans to label them all as "News," "Sports," or "Spam." By labeling only 1,000 pages manually, a semi-supervised model can look at the text structure and link patterns of the other 100 million pages, correctly categorizing the majority of the web based on that tiny seed of truth.</li>
    </ul>
    <p>Teacher's Final Word: A little bit of truth goes a long way in a sea of data. Semi-supervised learning teaches us that you don't need a map of every single street to find your way through a city; you just need to know where the main landmarks are and how the other streets connect to them.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if there are no labels at all, just a feedback loop? Explore <strong><a href="#/machine-learning/foundation-ml/reinforcement">Reinforcement Learning</a></strong>.
    </div>
  `
};


