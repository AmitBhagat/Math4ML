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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Why use one model when you can use 1,000? <strong>Ensemble Learning</strong> is based on one powerful truth: the collective opinion of a diverse group is often more accurate than any single expert. In machine learning, every algorithm has a "Blind Spot"—a specific kind of data it struggles with. By combining models that make different kinds of mistakes, we can "Average out" the individual errors and isolate the pure signal. It is the tactical decision to trade simplicity for robustness, ensuring that your final prediction isn't derailed by a single faulty perspective. It is the "Wisdom of the Crowd" translated into pure mathematics.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Multi-Hypothesis Aggregate</div>
      <p>An ensemble model $H(\mathbf{x})$ is a composite function that aggregates the predictions of $m$ base learners $\{h_1, \dots, h_m\}$. The aggregation typically takes the form of a linear combination or a vote:</p>
      <div class="math-block">
        $$H(\mathbf{x}) = \sum_{i=1}^m \alpha_i h_i(\mathbf{x}) \quad \text{or} \quad H(\mathbf{x}) = \text{argmax}_{c \in \mathcal{C}} \sum_{i=1}^m w_i \mathcal{I}(h_i(\mathbf{x}) = c)$$
      </div>
      <p>The core theoretical justification lies in the **Ambiguity Decomposition**, which relates the ensemble error to the average error of individual models and their diversity (covariance):</p>
      <div class="math-block">
        $$\text{Error}_{\text{ens}} = \overline{\text{Error}}_{\text{ind}} - \text{Ambiguity}$$
      </div>
      <p class="text-xs opacity-70 mt-2">Where Ambiguity measures the disagreement between models. This implies that the ensemble is always at least as accurate as the average of its members, provided they are diverse.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Ensemble Learning as <strong>"The Wisdom of the Council"</strong> or <strong>"Correction through Collaboration."</strong> 
        Imagine a King who must decide whether to go to war. He doesn't trust just one advisor, so he summons three: an Economist, a General, and a Historian. Each advisor sees the world through a different lens (Feature Space). 
        The General might be too aggressive, the Economist too cautious. But by taking a <strong>Majority Vote</strong>, the King filters out their individual biases. If Model A thinks a dog is a cat, but Models B, C, and D all agree it’s a dog, the council wins. The ensemble effectively turns a group of "Weak Learners" into a single, high-performance "Strong Learner."
      </div>
    </div>

    <h2 id="diversity">The Importance of Diversity</h2>
    <p>For an ensemble to work, the models <strong>MUST be different</strong>. If you have 1,000 models that are exactly the same, they will all make the same mistake at the same time. The "Magic" happens when Model A is good at seeing edges, and Model B is good at seeing textures.</p>

    <h2 id="types">The 3 Core Strategies</h2>
    <h2 id="algorithm">The Ensemble Algorithm</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Wisdom of the Council</h2>
    
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
          Ensembles work because of <strong>Error Cancellation</strong>. One model might be wrong about cats, another about dogs, but they are rarely wrong about <strong>The same thing at the same time</strong>. By averaging their results, you filter out the "Noise" and keep the "Signal."
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
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
