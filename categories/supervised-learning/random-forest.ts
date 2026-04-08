import { TopicSection } from '../../src/data/types';

export const randomForestSection: TopicSection = {
  id: "random-forest",
  title: "Random Forest",
  description: "An ensemble learning method that fits multiple decision trees on various sub-samples of the dataset and uses averaging to improve predictive accuracy.",
  color: "#4CAF50",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Ensemble</div>
      <h1>Random Forest: The Wisdom of Crowds</h1>
      <p>A single Decision Tree is prone to <strong>Overfitting</strong>. It memorizes the noise. <strong>Random Forest</strong> fixes this by building hundreds of <strong>Different Trees</strong> from different pieces of the data. It's the ultimate implementation of the "Jury Trial"—where many diverse opinions lead to a much <strong>Better and More Robust Verdict</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#bagging">Bagging: Bootstrap Aggregating</a>
      <a href="#feature-randomness">Feature Randomness: Diverse Perspectives</a>
      <a href="#theory">Theoretical Core: Ensemble Variance</a>
      <a href="#analogy">The "Corporate Committee" Analogy</a>
    </div>

    <h2 id="bagging">Bagging: Bootstrap Aggregating</h2>
    <p>How do we make each tree "Different"? We use **Bagging**. We take a random sample of our data <strong>with replacement</strong> (Bootstrapping). Some data points are picked twice; some are never picked. Every tree gets a <strong>Unique Perspective</strong> on the world.</p>

    <h2 id="feature-randomness">Feature Randomness: Diverse Perspectives</h2>
    <div class="example-box">
      <h4>The "Random" in Random Forest</h4>
      <p>Not only does each tree see different data, it also only gets to see a <strong>Random Subset of Features</strong> at each node.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Goal:</strong> Force the trees to look at "Weak" features instead of everyone just picking the "Best" feature (like Price).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Result:</strong> We create a <strong>Diverse Forest</strong>. Some trees learn about the roof; some learn about the school district. When they <strong>Vote</strong> together, they find the **Deep Truth** of the data.</div>
        </div>
      </div>
    </div>

    <h2 id="theory">Theoretical Core: Ensemble Variance</h2>
    <p>Why does this work? Mathematically, if you have $B$ independent trees with a certain variance, the <strong>Average of those trees</strong> has a variance that is roughly **$1/B$** of the original. By "Averaging" the trees, we **kill the noise** and keep the **signal**.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Guess the Jellybeans Contest."</strong> 
        One person might guess 500 (Way too low). Another might guess 5,000 (Way too high). 
        But if you take the <strong>Average of 1,000 guesses</strong>, you'll almost always be within 5% of the true answer. **Random Forest** is that average.
      </div>
    </div>

    <h2 id="analogy">The "Jury Trial" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Courtroom Jury</strong>. 
        Instead of one judge (a Single Tree) who might have a <strong>Personal Bias</strong>, you have 12 diverse citizens from different backgrounds. 
        Each juror hears the <strong>Same Case</strong> (The Data) but processes it with their own unique "Rules" (The Decision Trees). 
        By **Deliberating and Voting (Aggregating)**, the final verdict is much more **Reasonable and Stable** than one person's opinion.
      </div>
    </div>

    <h2 id="algorithm">The Random Forest Algorithm</h2>
    <div class="example-box">
      <h4>The Collective Intelligence Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Bootstrapping:</strong> Create $B$ random sub-samples of the training data with replacement.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Tree Growth:</strong> For each sub-sample, grow a deep Decision Tree.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Feature Randomness:</strong> At each node split, only consider a random subset of all available features.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Independence:</strong> Ensure each tree is grown independently of the others.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Aggregating:</strong> For a new point, total the votes from all $B$ trees and pick the winner.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Medical Jury</h2>
    <p>Imagine a patient with a rare symptom. Instead of asking one doctor, we assemble a <strong>Medical Jury</strong> of 100 specialists.</p>
    <ul>
      <li><strong>The Randomness:</strong> Doctor 1 only sees the Blood Work. Doctor 2 only sees the X-Rays. Doctor 3 only sees the Family History.</li>
      <li><strong>The Debate:</strong> Each doctor makes a diagnosis based on their "Specific Slice" of the truth.</li>
      <li><strong>The Verdict:</strong> If 85 doctors say "Condition A" and 15 say "Condition B," the Forest confidently predicts **Condition A**. The individual errors of any one doctor are "Drowned out" by the collective wisdom.</li>
    </ul>

    <python-code>
from sklearn.ensemble import RandomForestClassifier
import numpy as np

# 1. Complex data: [Feature_A, Feature_B, Feature_C]
X = np.array([[1, 0, 1], [0, 1, 0], [1, 1, 1], [0, 0, 0]])
y = np.array([1, 0, 1, 0])

# 2. Train the 'Forest of 100 Trees'
model = RandomForestClassifier(n_estimators=100)
model.fit(X, y)

# 3. Predict for a new case
new_case = np.array([[1, 0, 0]])
result = "Positive" if model.predict(new_case)[0] == 1 else "Negative"
print(f"Forest Verdict: {result}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we build trees sequentially to learn from each other's mistakes? Explore <strong><a href="#/machine-learning/supervised-learning/gradient-boosting">Gradient Boosting</a></strong>.
    </div>
  `
};
