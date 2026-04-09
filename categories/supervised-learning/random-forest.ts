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
    

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A single Decision Tree is prone to <strong>Overfitting</strong>—it’s like a student who memorizes every past exam question but fails to understand the actual subject. <strong>Random Forest</strong> fixes this by building hundreds of <strong>Different, Independent Trees</strong> and having them vote on the final answer. By giving every tree a different slice of the data and a different subset of features, we ensure that the model doesn't get tricked by outliers. It is the gold standard for "Robustness" because the individual mistakes of one tree are drowned out by the collective intelligence of the crowd.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Random Forest</div>
      <p>A Random Forest is an ensemble of $B$ decision trees $\{T_1, \dots, T_B\}$. For a given input $x$, the prediction is the aggregate of all individual tree predictions:</p>
      <div class="math-block">
        $$\hat{y}_{RF} = \frac{1}{B} \sum_{b=1}^B T_b(x, \Theta_b)$$
      </div>
      <p>Where $\Theta_b$ represents the random parameters for the $b$-th tree, generated through:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Bootstrap Aggregating (Bagging)</strong>: Training each tree on a sample drawn with replacement.</li>
        <li><strong>Feature Selection</strong>: Choosing the best split from a random subset of $m \approx \sqrt{d}$ features.</li>
      </ul>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a Random Forest as a <strong>"Jury Trial"</strong> or the <strong>"Wisdom of Crowds."</strong> 
        Imagine you’re trying to guess how many jellybeans are in a jar. One person might guess 100 (Way off), and another might guess 10,000 (Also way off). But if you take the <strong>Average of 1,000 guesses</strong>, you will almost always be within 5% of the truth. 
        In ML, the Forest provides that "Average Verdict." Each juror (Tree) sees a slightly different part of the evidence. When they <strong>Aggregate</strong> their votes, the personal bias of one juror disappears into the <strong>Group Consensus</strong>. It's why Random Forests are nearly impossible to break with messy, real-world data.
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
    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Medical Jury</h2>
    

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
    <python-code>
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

    <h2 id="applications">Applications in ML</h2>
    <p>Random Forest is the "Wisdom of Crowds." It turns a single, biased decision-maker into a diverse jury of 100 specialists, ensuring the final verdict is robust and stable.</p>
    <ul>
      <li><strong>Credit Card Fraud Detection</strong>: Banks use Random Forests to decide if a transaction is fraudulent. Instead of trusting one biased set of rules, the "Forest" combines hundreds of trees—some looking at amount, others at location, others at timing. The majority vote ensures legitimate users aren't blocked by one weird purchase.</li>
      <li><strong>Remote Sensing (Land Cover Mapping)</strong>: Scientists use satellite data to map the earth's surface (forest vs. urban). A Random Forest can handle thousands of subtle light frequencies from the satellite, using its aggregate intelligence to accurately label every pixel on the map.</li>
    </ul>
    <p>Teacher's Final Word: Random Forest is nearly impossible to break with messy, real-world data. It's the "Old Reliable" of machine learning—if you don't know which model to pick, start here.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we build trees sequentially to learn from each other's mistakes? Explore <strong><a href="#/machine-learning/supervised-learning/gradient-boosting">Gradient Boosting</a></strong>.
    </div>
  `
};

