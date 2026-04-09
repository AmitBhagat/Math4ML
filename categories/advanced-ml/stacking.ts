import { TopicSection } from '../../src/data/types';

export const stackingSection: TopicSection = {
  id: "stacking",
  title: "Stacking (Stacked Generalization)",
  description: "An ensemble learning technique that trains multiple base models and a meta-model that learns to combine the base models' predictions into a single final output.",
  color: "#FF9800",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Advanced ML · Meta</div>
      <h1>Stacking: The Council of Experts</h1>
      <p>How do you know whether to trust an <strong>SVM</strong> or a <strong>Random Forest</strong> for a specific data point? You don't just vote (Bagging). You train <strong>Another Model</strong> to learn! <strong>Stacking</strong> uses a "Meta-Learner" that looks at the guesses of other models and learns their <strong>Strengths and Weaknesses</strong>.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>How do you know whether to trust an <strong>SVM</strong> or a <strong>Random Forest</strong> for a specific data point? You don't just vote (Bagging) or weight them based on history (Boosting). You train <strong>Another Model</strong> to learn who to trust! <strong>Stacking</strong> (Stacked Generalization) uses a "Meta-Learner" that looks at the guesses of other models and learns their individual strengths and weaknesses in different contexts. It is the ultimate higher-order integration, treating the outputs of sub-models as features for a final decision. By learning the "Error Profile" of its members, a stacked ensemble can often outperform the best individual model by effectively blending their specific expertises.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Meta-Learning Aggregation</div>
      <p>Stacking is a two-level ensemble architecture. Given a set of base learners $\{h_1, \dots, h_M\}$, we construct a meta-dataset where the features are the predictions of these models. The final output is determined by a meta-learner $H$:</p>
      <div class="math-block">
        $$\hat{y} = H\left( h_1(\mathbf{x}), h_2(\mathbf{x}), \dots, h_M(\mathbf{x}) \right)$$
      </div>
      <p>To prevent overfitting, the meta-features $\mathbf{z}_i$ for training $H$ must be generated using **Out-of-Fold (OOF)** predictions:</p>
      <div class="math-block">
        $$z_{i,m} = h_m^{(-i)}(\mathbf{x}_i)$$
      </div>
      <p class="text-xs opacity-70 mt-2">Where $h_m^{(-i)}$ is the $m$-th model trained on a subset of the data that excludes sample $i$.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Stacking as <strong>"The CEO of a Tech Giant"</strong> or <strong>"The Orchestra Conductor."</strong> 
        Imagine a CEO (the Meta-Learner) in a board meeting. They have three experts: a Statistician, a Marketer, and a Technician. Each expert gives their recommendation. 
        The CEO doesn't just "Average" their advice. Through years of experience (Meta-Training), the CEO knows that the Statistician is 99% right about the budget but 50/50 on customer emotions. 
        <strong>Stacking</strong> is that process of learning who is full of it and who knows their stuff. It doesn’t play an instrument; it signals <strong>which musician</strong> should lead the melody at any given moment. It is the math of finding a sound greater than the sum of its parts.
      </div>
    </div>

    <h2 id="architecture">The 2-Level Architecture</h2>
    <ul>
      <li><strong>Level 0 (Base Models):</strong> A diverse set of models (e.g., KNN, Logistic Regression, CNN). They all see the raw input and make a prediction.</li>
      <li><strong>Level 1 (Meta-Learner):</strong> Usually a simple model (like Logistic Regression or a shallow Tree). It takes the predictions from Level 0 as its input and makes the final call.</li>
    </ul>

    <h2 id="crossval">The Training Secret: Cross-Validation</h2>
    <p><strong>The Gotcha:</strong> You cannot train the Meta-Learner on the same data the Base Models saw! If you do, the Base Models will be "Too Confident," and the Meta-Learner will learn to trust them too much. We use <strong>Out-of-fold</strong> predictions to train the Meta-Learner, ensuring it sees "Honest" guesses.</p>

    <h2 id="analogy">The "Council of Experts" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are a <strong>CEO (Meta-Learner)</strong> in a meeting. 
        You have three experts:
        * <strong>Expert A (Statistician):</strong> He's great at data but misses emotional nuances. 
        * <strong>Expert B (Marketing Guru):</strong> He's great at emotions but bad at math. 
        * <strong>Expert C (Technician):</strong> He's only good at the raw hardware facts. 
        They each give you their recommendation. 
        <strong>You don't just "Average" their advice. You know from 10 years of experience that Expert A is usually right about the budget, while Expert B is right about the customer reaction. You combine their specific strengths to make the perfect decision.</strong> 
      </div>
    </div>

    <h2 id="algorithm">The Stacking Algorithm</h2>
    
      <h4>The Meta-Learning Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Base Training:</strong> Select a set of diverse "Base Models" (e.g., SVM, RNN, Random Forest).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>OOF Predictions:</strong> Use <strong>Out-of-Fold</strong> cross-validation to get predictions from each base model.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Feature Creation:</strong> Combine these predictions to create a new "Meta-Feature" matrix. (The input to the next level).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Meta-Training:</strong> Train a <strong>Meta-Learner</strong> (usually a simple Logistic Regression) to map these meta-features to the true labels.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Inference:</strong> For a new case, get base predictions first, then pass them through the Meta-Learner for the final result.
        </div>
      </div>
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Orchestra Conductor</h2>
    
      <h4>Scenario: Mixing the Perfect Sound</h4>
      <p>Imagine world-class musicians playing together. They are all great in their own right, but they need a Conductor (Meta-Learner) to blend their specific strengths.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Base Musicians (Level 0):</strong> The Violinist, Cellist, and Flutist play the melody. Each has their own style and occasional mistakes.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Conductor (The Meta-Learner):</strong> He doesn't play an instrument. Instead, he listens to the musicians and learns their profiles.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Contextual Awareness:</strong> He learns: "In the fast sections, the Violinist is 99% reliable. In the low, somber sections, trust the Cello more."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Masterpiece:</strong> When a new score comes, he signals the Flute to be quiet and the Violin to lead. The result is a sound <strong>greater than the sum of its parts.</strong></div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Stacking is <strong>Meta-Learning</strong>. While Bagging (Voting) and Boosting (Weighting) use fixed mathematical rules, Stacking uses a <strong>Model of Models</strong>. It's the "Smartest" way to ensemble, but it's the easiest to overfit if you aren't careful with cross-validation.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code static-output="[Scan] Initializing Base Models: Random Forest & Support Vector Machine.\n[Level 0] Base Model 1 (RF) Accuracy: 86.4%\n[Level 0] Base Model 2 (SVM) Accuracy: 84.1%\n[Action] Training Meta-Learner (Logistic Regression) on Out-Of-Fold predictions...\n\n[Result] Stacking Ensemble Accuracy: 92.5%\n[Insight] The Meta-Learner successfully combined RF and SVM to fix individual weaknesses.">
from sklearn.ensemble import StackingClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split

# 1. Level 0: The Diverse Experts
base_models = [
    ('rf', RandomForestClassifier(n_estimators=10, random_state=42)),
    ('svc', SVC(probability=True, random_state=42))
]

# 2. Level 1: The Meta-Learner (The CEO)
# We use a simple model here to avoid overfitting the base predictions
meta_learner = LogisticRegression()

# 3. Assemble the Stack
# cv=5 ensures the meta-learner doesn't 'cheat' by seeing the same data twice
stack = StackingClassifier(
    estimators=base_models,
    final_estimator=meta_learner,
    cv=5
)

# 4. Validation
X, y = make_classification(n_samples=1000, n_features=20, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

stack.fit(X_train, y_train)
score = stack.score(X_test, y_test)
print(f"Stacking Ensemble Accuracy: {score:.1%}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Stacking is the "Meta-Manager" that learns who to trust among a group of experts. It doesn't just average opinions; it learns the mathematical context of when an expert is likely to be right.</p>
    <ul>
      <li><strong>Real Estate Value Aggregation</strong>: Large platforms like Zillow use Stacking to predict home prices. They have a "Base Model" that looks at historical sales, another that looks at current local economic trends, and a third that analyzes high-res photos of the kitchen. A Meta-Learner then learns: "In urban areas, trust the photos more; in rural areas, trust the historical sales."</li>
      <li><strong>Multi-model Weather Forecasting</strong>: Meteorologists use different physics models to predict rainfall. One might be great at cold fronts, another at tropical storms. Stacking is used to combine these models, where the Meta-Learner knows exactly which specialized model to listen to based on the current atmospheric conditions.</li>
    </ul>
    <p>Teacher's Final Word: Don't just vote; learn who the winners are. Stacking is the smartest way to ensemble because it doesn't assume all experts are equal—it assumes that every expert has a "season" where they are king, and it learns to find that season.</p>

    <div class="linking-rule">
      <strong>Congratulations!</strong> You have reached the pinnacle of ensemble theory. Now, let's learn how to prep and "Clean" your raw datasets for these complex systems in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
    </div>
  `
};
