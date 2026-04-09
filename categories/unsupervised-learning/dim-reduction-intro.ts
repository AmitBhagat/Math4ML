import { TopicSection } from '../../src/data/types';

export const dimReductionIntroSection: TopicSection = {
  id: "dim-reduction-intro",
  title: "Introduction to Dimensionality Reduction",
  description: "Dimensionality reduction is the process of reducing the number of random variables under consideration by obtaining a set of principal variables.",
  color: "#bc8cff",
  html: String.raw`
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
  `
};


