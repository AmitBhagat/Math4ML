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

    <h2 id="theory">Intuition & Motivation</h2>
    <p><strong>k-Nearest Neighbors (KNN)</strong> is the "Copycat" or the "Social Learner" of Machine Learning. It doesn't bother building a complex mathematical model or learning magic weights; it simply <strong>remembers</strong> every piece of data you've ever shown it. When a new situation arises, it asks: <em>"Who are my closest peers, and what did they do?"</em> It is the ultimate implementation of the saying: "Show me who your friends are, and I'll tell you who you are." It relies on the fundamental assumption that similar things live close together in the feature world.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: k-Nearest Neighbors</div>
      <p>Given a query point $x$, a training set $\mathcal{D} = \{(x_i, y_i)\}_{i=1}^n$, and a distance metric $d(x, x')$, the KNN classification rule is defined as:</p>
      <div class="math-block">
        $$\hat{f}(x) = \text{arg}\max_{c \in \mathcal{Y}} \sum_{i \in \mathcal{N}_k(x)} I(y_i = c)$$
      </div>
      <p class="text-xs opacity-70 mt-2">Where $\mathcal{N}_k(x)$ is the set of $k$ indices $i$ such that $d(x, x_i)$ are the $k$ smallest distances, and $I(\cdot)$ is the indicator function.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of KNN as <strong>"Voting by Proximity"</strong> or the <strong>"Social Bubble."</strong> 
        Imagine you move to a new town and want to know which political party to support. 
        You don't read the party manifestos (Parameters); you just walk over to your <strong>3 nearest neighbors</strong> and ask whom they voted for. If two say "Party A," you join Party A. 
        In ML, KNN is a "Lazy Learner"—it does zero work until you ask for a prediction. While it's simple and intuitive, it can get overwhelmed if your "Town" (the feature space) has 1,000 dimensions where every neighbor feels a million miles away.
      </div>
    </div>

    <h2 id="k-selection">Selecting 'k': Underfitting vs. Overfitting</h2>
    
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
          <div><strong>The Fix:</strong> Usually, use an <strong>Odd Number</strong> for $k$ to avoid ties. Use <strong>Cross-Validation</strong> to find the "Sweet Spot" (usually around 3, 5, or 7).</div>
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
        <strong>KNN</strong> is that appraiser. It's <strong>Simple, Intuitive, and Lazy.</strong> (It only does work when you ask it for a prediction).
      </div>
    </div>

    <h2 id="algorithm">The KNN Algorithm</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Neighborhood Voter</h2>
    
      <h4>Scenario: Predicting if a new Movie is 'Action' or 'Romance'</h4>
      <p>Imagine your movies are plotted on a map based on how many Explosions vs. Kisses they have.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Newcomer:</strong> A new movie arrives. It has 8 Explosions and 2 Kisses.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Search:</strong> The model looks at the 3 closest movies already on the map ($k=3$).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Majority:</strong> It finds 2 'Action' movies and 1 'Romance' movie in that immediate neighborhood.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Decision:</strong> Action wins! The movie is classified as 'Action' because of its social circle.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          KNN is <strong>Memory-Heavy but Calculation-Light</strong> during training. It doesn't "Learn" a concept of what an action movie is; it just looks at what's nearby. This makes it very fast to update with new data!
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code static-output="[Query] New Movie (8 Action, 3 Romance)\n[Computation] Calculating distances to 4 neighbors...\n[Finding] Top 3 neighbors: ['Action', 'Action', 'Romance']\n[Result] Majority Vote: Action\n[Insight] KNN correctly identified the cluster despite 1 outlier neighbor!">
import numpy as np
from sklearn.neighbors import KNeighborsClassifier

# 1. Movie features: [Action_Score, Romance_Score]
X = np.array([[10, 1], [9, 2], [1, 10], [2, 9]])
y = np.array(["Action", "Action", "Romance", "Romance"])

# 2. Train the 'Social Learner' (Lazy training)
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X, y)

# 3. Predict for a new movie
new_movie = np.array([[8, 3]])
result = model.predict(new_movie)
distances, indices = model.kneighbors(new_movie)

print(f"Closest Movie Types: {y[indices][0]}")
print(f"Final Classification: {result[0]}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>KNN is the "Social Learner." It doesn't bother building a complex mathematical model; it simply remembers everything you've ever shown it.</p>
    <ul>
      <li><strong>Recommendation Systems</strong>: When you finish a movie on Netflix and it suggests "Similar Titles," it's often using a version of KNN. It looks at the features (genre, actors, duration) and finds the 5 movies that live closest to the one you just watched in that space.</li>
      <li><strong>Handwriting Recognition</strong>: In digital mail sorting, KNN can identify a zip code digit by comparing the shape of the handwritten ink to thousands of known examples. If the new "7" looks most like 5 other "7s" in the database, the model votes "7."</li>
    </ul>
    <p>Teacher's Final Word: KNN relies on the simple assumption that "Birds of a feather flock together." If you know who someone's closest neighbors are, you can guess exactly who they are without needing a single weight or parameter.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we want a "Wide Moat" instead of just neighbors? Explore <strong><a href="#/machine-learning/supervised-learning/svm">Support Vector Machines (SVM)</a></strong>.
    </div>
  `
};
