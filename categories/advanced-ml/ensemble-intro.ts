import { TopicSection } from '../../src/data/types';

export const ensembleIntroSection: TopicSection = {
  id: "ensemble-intro",
  title: "Ensemble Learning Theory",
  description: "The mathematical foundation for combining multiple 'weak' learners to create a single high-performance 'strong' learner.",
  color: "#FF9800",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Advanced ML · Architecture</div>
      <h1>Ensemble Learning: The Wisdom of the Crowd</h1>
      <p>Why use one model when you can use 1,000? <strong>Ensemble Learning</strong> is based on one powerful truth: <strong>The collective opinion of a diverse group is often more accurate than any single expert.</strong> By combining models that make different kinds of mistakes, we can "Average out" the errors and find the signal in the noise.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Error Decomposition</a>
      <a href="#diversity">The Importance of Diversity</a>
      <a href="#types">3 Core Strategies: Bagging, Boosting, Stacking</a>
      <a href="#why">Why it Works: The Averaging Effect</a>
      <a href="#analogy">The "Wisdom of the Crowd" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Error Decomposition</h2>
    <p>Total error can be broken down into <strong>Bias</strong>, <strong>Variance</strong>, and <strong>Irreducible Noise</strong>. Ensemble methods focus on reducing one of these two:</p>
    <ul>
      <li><strong>Bagging:</strong> Reduces <strong>Variance</strong>. (Stop the model from being "Jumpy").</li>
      <li><strong>Boosting:</strong> Reduces <strong>Bias</strong>. (Stop the model from being "Stupid").</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Correction through Collaboration."</strong> 
        If Model A thinks a 'Dog' is a 'Cat', but Model B, C, and D all think it's a 'Dog', the majority wins. The ensemble effectively <strong>Filters</strong> individual mistakes.
      </div>
    </div>

    <h2 id="diversity">The Importance of Diversity</h2>
    <p>For an ensemble to work, the models <strong>MUST be different</strong>. If you have 1,000 models that are exactly the same, they will all make the same mistake at the same time. The "Magic" happens when Model A is good at seeing edges, and Model B is good at seeing textures.</p>

    <h2 id="types">The 3 Core Strategies</h2>
    <h2 id="algorithm">The Ensemble Algorithm</h2>
    <div class="example-box">
      <h4>Ensemble Logic</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Member Selection:</strong> Create a diverse set of "Weak Learners" (e.g., small trees, linear models).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Training:</strong> Train each member independently (Bagging) on parallel subsets of data or sequentially (Boosting).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Prediction:</strong> Pass the same input to every member and collect their individual guesses.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Aggregation:</strong> Combine the guesses using a fixed rule (Average/Majority) or a learned rule (Meta-model).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Output:</strong> The final "Strong" prediction is more robust than any individual guess.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Council of Wise Men</h2>
    <p>Imagine a <strong>King</strong> making a decision about the kingdom's budget. He doesn't rely on just one advisor.</p>
    <ul>
      <li><strong>Advisor A (Economic Expert):</strong> Focuses purely on GDP and inflation.</li>
      <li><strong>Advisor B (Military Expert):</strong> Focuses on defense and borders.</li>
      <li><strong>Advisor C (Social Liaison):</strong> Focuses on education and health.</li>
    </ul>
    <p>Each advisor is "Correct" in their own way but biased by their specialty. By listening to the <strong>Concensus</strong> of the whole Council, the King makes a balanced, high-quality decision. <strong>Ensemble learning is that Council.</strong></p>

    <h2 id="python">Python Implementation</h2>
    <div class="code-block">
      <pre><code class="language-python">
from sklearn.ensemble import VotingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
import numpy as np

# 1. Diversity: Three different types of models
clf1 = LogisticRegression()
clf2 = DecisionTreeClassifier()
clf3 = SVC(probability=True)

# 2. Train the Ensemble (The 'Council')
eclf = VotingClassifier(
    estimators=[('lr', clf1), ('dt', clf2), ('svc', clf3)],
    voting='soft'
)

# 3. Simulate Data and Fit
X = np.random.rand(10, 2)
y = np.array([0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
eclf.fit(X, y)

print(f"Ensemble Accuracy usually beats individual models: {eclf.score(X, y)}")
      </code></pre>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> Let's see how many people voting in parallel can reduce variance. Explore <strong><a href="#/machine-learning/advanced-ml/bagging">Bagging</a></strong>.
    </div>
  `
};
