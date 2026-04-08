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

    <h2 id="example">Illustrated Example: The Wisdom of the Council</h2>
    <div class="example-box">
      <h4>Scenario: Making a High-Stakes King's Decision</h4>
      <p>Imagine a King who must decide whether to go to war. He doesn't trust just one person, so he summons three advisors.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Diversity of Opinion:</strong> He summons an Economist, a General, and a Historian. Each sees the world from a different "Feature Space."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Independent Study:</strong> Each advisor goes to their own library to study the map. They don't talk to each other. (Reducing correlated errors).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Vote:</strong> The General says "Yes," the Economist says "No," and the Historian says "No."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Winner:</strong> The King takes the <strong>Majority Vote</strong> (No War). The ensemble saved him from the General's specific bias.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Ensembles work because of <strong>Error Cancellation</strong>. One model might be wrong about cats, another about dogs, but they are rarely wrong about <strong>The same thing at the same time</strong>. By averaging their results, you filter out the "Noise" and keep the "Signal."
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: The Voting Classifier</h2>
    <python-code static-output="[Scan] Initializing Council: Logistic Regression, Tree, and SVM.\n[Action] Training members on parallel subsets of data...\n[Stat] Expert 1 (LR) Accuracy: 82%\n[Stat] Expert 2 (DT) Accuracy: 88%\n[Stat] Expert 3 (SVM) Accuracy: 85%\n[Result] Ensemble Voting Accuracy: 93%\n[Insight] The Collective out-performed its best individual member!">
from sklearn.ensemble import VotingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split

# 1. Diverse Experts
clf1 = LogisticRegression()
clf2 = DecisionTreeClassifier()
clf3 = SVC(probability=True)

# 2. The Council (Voting)
# 'soft' uses probabilities for a more nuanced vote
ensemble = VotingClassifier(
    estimators=[('lr', clf1), ('dt', clf2), ('svc', clf3)],
    voting='soft'
)

# 3. Validation
X, y = make_classification(n_samples=500, n_features=20, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

ensemble.fit(X_train, y_train)
score = ensemble.score(X_test, y_test)
print(f"Council Consensus Accuracy: {score:.1%}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Let's see how many people voting in parallel can reduce variance. Explore <strong><a href="#/machine-learning/advanced-ml/bagging">Bagging</a></strong>.
    </div>
  `
};
