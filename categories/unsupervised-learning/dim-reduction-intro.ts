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

    <h2 id="example">Illustrated Example: The Shadow on the Wall</h2>
    <div class="example-box">
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
          <strong>Teacher's Hint:</strong> Dimension Reduction is about finding the <strong>Best Perspective</strong>. We lose some details (the thickness of the wings), but we keep the patterns that define the object.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Filtering the Noise</h2>
    <python-code static-output="[Scan] Calculating Variance for 4 features...\n[Status] Feature 2 ('Constant_ID') has Variance: 0.0\n[Status] Feature 3 ('Random_Hiss') has Variance: 0.08\n[Action] Dropping Feature 2 (Zero Signal detected).\n[Result] Data reduced from 4D to 3D with ZERO loss of useful information.\n[Insight] Never carry a heavy suitcase full of constant values!">
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

    <div class="linking-rule">
      <strong>Next Step:</strong> What is the most famous tool for finding that "Best Side"? Explore <strong><a href="#/machine-learning/unsupervised-learning/pca">Principal Component Analysis (PCA)</a></strong>.
    </div>
  `
};
