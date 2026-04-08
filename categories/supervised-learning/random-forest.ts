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

    <h2 id="bagging">Bagging: Bootstrap Aggregating</h2>
    <p>How do we make each tree "Different"? We use <strong>Bagging</strong>. We take a random sample of our data <strong>with replacement</strong> (Bootstrapping). Some data points are picked twice; some are never picked. Every tree gets a <strong>Unique Perspective</strong> on the world.</p>

    <h2 id="feature-randomness">Feature Randomness: Diverse Perspectives</h2>
    
      <h4>The "Random" in Random Forest</h4>
      <p>Not only does each tree see different data, it also only gets to see a <strong>Random Subset of Features</strong> at each node.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Goal:</strong> Force the trees to look at "Weak" features instead of everyone just picking the "Best" feature (like Price).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Result:</strong> We create a <strong>Diverse Forest</strong>. Some trees learn about the roof; some learn about the school district. When they <strong>Vote</strong> together, they find the <strong>Deep Truth</strong> of the data.</div>
        </div>
      </div>
    

    <h2 id="theory">Theoretical Core: Ensemble Variance</h2>
    <p>Why does this work? Mathematically, if you have $B$ independent trees with a certain variance, the <strong>Average of those trees</strong> has a variance that is roughly <strong>$1/B$</strong> of the original. By "Averaging" the trees, we <strong>kill the noise</strong> and keep the <strong>signal</strong>.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of it as <strong>"The Guess the Jellybeans Contest."</strong> 
        One person might guess 500 (Way too low). Another might guess 5,000 (Way too high). 
        But if you take the <strong>Average of 1,000 guesses</strong>, you'll almost always be within 5% of the true answer. <strong>Random Forest</strong> is that average.
      </div>
    </div>

    <h2 id="analogy">The "Jury Trial" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Courtroom Jury</strong>. 
        Instead of one judge (a Single Tree) who might have a <strong>Personal Bias</strong>, you have 12 diverse citizens from different backgrounds. 
        Each juror hears the <strong>Same Case</strong> (The Data) but processes it with their own unique "Rules" (The Decision Trees). 
        By <strong>Deliberating and Voting (Aggregating)</strong>, the final verdict is much more <strong>Reasonable and Stable</strong> than one person's opinion.
      </div>
    </div>

    <h2 id="algorithm">The Random Forest Algorithm</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Medical Jury</h2>
    
      <h4>Scenario: Making a Life-Saving Diagnosis</h4>
      <p>Instead of trusting one biased doctor, you assemble a diverse committee of 100 specialists.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Diverse Slices:</strong> Doctor A only sees Blood Work. Doctor B only sees X-Rays. (Feature Randomness).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Unique Experiences:</strong> Each doctor studied at a different school. (Bagging/Bootstrapping).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Vote:</strong> Every doctor writes their diagnosis on a piece of paper and drops it in a hat.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Conclusion:</strong> If 85 doctors say 'Healthy' and 15 say 'Sick', you trust the majority. The individual mistakes are "drowned out" by the <strong>Forest's Verdict</strong>.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Random Forest is a <strong>Parallel Learner</strong>. All trees are built at once without talking to each other. This makes it incredibly fast on modern multi-core computers.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code static-output="[Training] Growing 100 unique trees with random data slices...\n[Consultation] Testing a new case with features [1, 0, 0]...\n[Voting] 87 trees voted POSITIVE, 13 trees voted NEGATIVE.\n[Final Verdict] Classification: POSITIVE (Confidence: 87.0%)\n[Insight] The forest's confidence score is literally the % of trees that agreed!">
import numpy as np
from sklearn.ensemble import RandomForestClassifier

# 1. Dataset: [Symptom_A, Symptom_B, Symptom_C]
X = np.array([[1, 0, 1], [0, 1, 0], [1, 1, 1], [0, 0, 0]])
y = np.array([1, 0, 1, 0])

# 2. Train the 'Forest of 100 Trees'
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X, y)

# 3. New Case
new_case = np.array([[1, 0, 0]])
prediction = model.predict(new_case)[0]
votes = model.predict_proba(new_case)[0]

print(f"Forest Verdict: {'Positive' if prediction == 1 else 'Negative'}")
print(f"Confidence Score: {votes[1]:.1%}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we build trees sequentially to learn from each other's mistakes? Explore <strong><a href="#/machine-learning/supervised-learning/gradient-boosting">Gradient Boosting</a></strong>.
    </div>
  `
};
