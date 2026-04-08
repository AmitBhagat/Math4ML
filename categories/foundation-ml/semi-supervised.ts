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

    <h2 id="theory">Theoretical Core: Smoothing and Manifolds</h2>
    <p>SSL relies on the <strong>Continuity Assumption</strong>: If two points \(x_1\) and \(x_2\) are close in space, they should probably have the same label. If we label 10 points, the machine "Spreads" those labels to nearby neighbors in the unlabeled set.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of it as <strong>"Infection of Knowledge."</strong> 
        You have 1,000 photos of cats and dogs. You only label 10. The machine looks at the 990 unlabeled photos. It notices that "Photo 11" looks almost exactly like "Labeled Dog 1." It decides to <strong>re-label</strong> Photo 11 as a dog. Now it has 11 dogs to help find more.
      </div>
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
    <python-code static-output="[SSL] Labeling the mountain of unknown data...\nPredicted Class for unlabeled point [2, 1]: Class 1 (Red)">
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

    <div class="linking-rule">
      <strong>Next Step:</strong> What if there are no labels at all, just a feedback loop? Explore <strong><a href="#/machine-learning/foundation-ml/reinforcement">Reinforcement Learning</a></strong>.
    </div>
  `
};
