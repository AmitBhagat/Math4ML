import { TopicSection } from '../../src/data/types';

export const knnSection: TopicSection = {
  id: "knn",
  title: "k-Nearest Neighbors (KNN)",
  description: "A non-parametric, instance-based learning algorithm that classifies objects based on the closest training examples in the feature space.",
  color: "#9C27B0",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Instance-Based</div>
      <h1>k-Nearest Neighbors (KNN): The Social Learner</h1>
      <p><strong>k-Nearest Neighbors (KNN)</strong> is the "Copycat" of Machine Learning. It doesn't build a model or learn any weights; it just <strong>remembers</strong> the training data. When a new point arrives, it looks at its closest neighbors to see what they are. It's the ultimate implementation of the saying: "Show me who your friends are, and I'll tell you who you are."</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Distance Metric</a>
      <a href="#metrics">Common Distances: Euclidean, Manhattan, Minkowski</a>
      <a href="#k-selection">Selecting 'k': Underfitting vs. Overfitting</a>
      <a href="#curse">The "Curse of Dimensionality"</a>
      <a href="#analogy">The "Neighborhood Property Value" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Distance Metric</h2>
    <p>KNN is a **Non-Parametric** algorithm. It assumes that similar things live close together in a high-dimensional space. To classify a new point $X_{new}$, it finds the $k$ points $X_1, \dots, X_k$ that are "nearest" to it. The most common class among those neighbors wins the vote.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Voting by Proximity."</strong> 
        It's like moving to a new city and trying to figure out which political party to join. 
        You don't read the manifesto (Parameters); you just ask the <strong>3 nearest neighbors</strong> whom they voted for. If 2 voted for Party A, you join Party A. 
        **KNN** is purely local—it only cares about what's physically around it.
      </div>
    </div>

    <h2 id="metrics">Common Distances: Euclidean, Manhattan, Minkowski</h2>
    <p>How do we define "Near"? The way we measure distance completely changes the model's behavior.</p>
    <ul>
      <li><strong>Euclidean Distance (\(L_2\)):</strong> The "Straight-line" distance. \(d(p, q) = \sqrt{\sum (p_i - q_i)^2}\). Best for physical spaces.</li>
      <li><strong>Manhattan Distance (\(L_1\)):</strong> The "City-block" distance. \(d(p, q) = \sum |p_i - q_i|\). Best when the path is restricted (like city streets).</li>
      <li><strong>Minkowski Distance:</strong> The generalized form that lets you tune the behavior with a parameter $p$.</li>
    </ul>

    <h2 id="k-selection">Selecting 'k': Underfitting vs. Overfitting</h2>
    <div class="example-box">
      <h4>The Goldilocks Problem for K</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>k = 1:</strong> The model is way too sensitive. Every single outlier in your training set will "Pull" the prediction toward it. Result: <strong>High Variance (Overfitting)</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>k = Total Samples:</strong> The model will always guess the most common class in the whole dataset. Result: <strong>High Bias (Underfitting)</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Fix:</strong> Usually, use an **Odd Number** for $k$ to avoid ties. Use **Cross-Validation** to find the "Sweet Spot" (usually around 3, 5, or 7).</div>
        </div>
      </div>
    </div>

    <h2 id="curse">The "Curse of Dimensionality"</h2>
    <p><strong>The Gotcha:</strong> KNN <strong>dies</strong> in high dimensions. Why? Because in 1,000-dimensional space, everything is "Far Away" from everything else. The concept of "Nearest" becomes meaningless because the volume of the space grows exponentially faster than the number of points.</p>
    
    <h2 id="analogy">The "Neighborhood Property Value" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are an <strong>Appraiser judging a House Price</strong>. 
        You don't have a complicated formula for the whole city. Instead, you look at the <strong>5 most similar houses</strong> that sold recently in that specific neighborhood. 
        If those 5 houses (Your Neighbors) sold for an average of $500k, you'll guess $500k. 
        **KNN** is that appraiser. It's **Simple, Intuitive, and Lazy.** (It only does work when you ask it for a prediction).
      </div>
    </div>

    <h2 id="algorithm">The KNN Algorithm</h2>
    <div class="example-box">
      <h4>The Social Voter Logic</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Select K:</strong> Choose the number of neighbors to consult (e.g., $k=5$).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Distance Calculation:</strong> Calculate the distance (Euclidean or Manhattan) between the new point and all points in the training set.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Find Neighbors:</strong> Sort all training points by distance and pick the $k$ closest ones.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Vote:</strong> Check the labels of those $k$ neighbors.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Classify:</strong> Assign the label that has the <strong>majority vote</strong>.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: Movie Recommendations</h2>
    <p>Imagine <strong>Netflix</strong> trying to decide if you'll like a new movie based on your past behavior.</p>
    <ul>
      <li><strong>Data:</strong> Every movie is rated on 2 axes: [Action vs. Romance].</li>
      <li><strong>The Query:</strong> You just finished a new movie. </li>
      <li><strong>The Neighbors:</strong> KNN looks at the 3 nearest movies you've watched. If 2 of them were Action and 1 was Romance, KNN predicts: **Action**.</li>
    </ul>

    <python-code>
from sklearn.neighbors import KNeighborsClassifier
import numpy as np

# 1. Movie features: [Action_Score, Romance_Score]
X = np.array([[10, 1], [9, 2], [1, 10], [2, 9]])
y = np.array(["Action", "Action", "Romance", "Romance"])

# 2. Train the 'Social Learner'
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X, y)

# 3. New movie: high action, low romance
new_movie = np.array([[8, 3]])
result = model.predict(new_movie)
print(f"Predicted genre: {result[0]}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we want a "Wide Moat" instead of just neighbors? Explore <strong><a href="#/machine-learning/supervised-learning/svm">Support Vector Machines (SVM)</a></strong>.
    </div>
  `
};
