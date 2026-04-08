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

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#curse">The Curse of Dimensionality</a>
      <a href="#feature-selection">Feature Selection vs. Feature Extraction</a>
      <a href="#projections">Projections: The Shadow Metaphor</a>
      <a href="#analogy">The "Shadow Puppet" Analogy</a>
    </div>

    <h2 id="curse">The Curse of Dimensionality</h2>
    <p>In 2D or 3D, our intuition works. In 1,000D, <strong>everything is far away</strong> from everything else. The volume of the space grows exponentially faster than the number of data points. This makes models slow, unstable, and prone to overfitting. We need to <strong>Reduce</strong> the dimensions to make the data "Learnable" again.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Busy Signal."</strong> 
        Imagine 1,000 people talking at you at the same time. That's 1,000 dimensions. It's just <strong>Noise</strong>. 
        If you find the 3 loudest, most informative people and only listen to them, you can actually <strong>understand the message</strong>. That is Dimensionality Reduction. 
      </div>
    </div>

    <h2 id="algorithm">The Reduction Process</h2>
    <div class="example-box">
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
    </div>

    <h2 id="projections">Projections: The Shadow Metaphor</h2>
    <p>We reduce dimensions by <strong>Projecting</strong> the data onto a lower-dimensional subspace. Every project involves some **Loss of Information**. The goal is to find the projection that preserves the most **Variance** or **Local Structure**.</p>

    <h2 id="analogy">The "Shadow Puppet" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a complex **3D Statue of a Dragon**. 
        You want to describe the dragon using only a <strong>2D Shadow on the wall</strong>. 
        If you take a photo from the <strong>Top-Down</strong>, you just get a flat blob. (Bad Projection). 
        If you take it from the <strong>Side</strong>, you see the head, wings, and tail. (Good Projection). 
        **Dimensionality Reduction** is the physics of finding the <strong>Best Angle</strong> for that shadow puppet. 
      </div>
    </div>

    <h2 id="example">Illustrated Example: The 3D Shadow Puppet</h2>
    <p>Imagine you have a complex <strong>3D Model of a Dinosaur</strong>. You want to store its data, but your hard drive only accepts 2D images.</p>
    <ul>
      <li><strong>Poor Reduction:</strong> You take a photo from the <strong>Top-Down</strong>. You get a green blob. You've lost the "Dinosaur-ness." </li>
      <li><strong>Smart Reduction:</strong> You rotate the dinosaur until you see its profile (Head, Tail, legs). </li>
    </ul>
    <p>By finding the <strong>Best Angle</strong>, you've reduced the data from 3D to 2D while keeping the <strong>Essence</strong> of what a dinosaur is. <strong>Dimensionality Reduction is that perfect camera angle.</strong></p>

    <h2 id="python">Python Implementation</h2>
    <python-code>
from sklearn.feature_selection import VarianceThreshold
import numpy as np

# 1. Dataset: [Height, Weight, Constant_Value, Random_Noise]
# Feature 2 is basically the same for everyone
X = np.array([
    [180, 80, 1, 0.1],
    [170, 70, 1, 0.9],
    [160, 60, 1, 0.4],
    [190, 90, 1, 0.2]
])

# 2. Automatically kill features with low variance (The 'Constant' column)
selector = VarianceThreshold(threshold=0) # Kill if variance is exactly 0
X_reduced = selector.fit_transform(X)

print(f"Original shape: {X.shape}")
print(f"Reduced shape: {X_reduced.shape}")
# Feature 2 (Column index 2) was executed because it added ZERO information.
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What is the most famous tool for finding that "Best Side"? Explore <strong><a href="#/machine-learning/unsupervised-learning/pca">Principal Component Analysis (PCA)</a></strong>.
    </div>
  `
};
