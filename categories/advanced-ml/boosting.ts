import { TopicSection } from '../../src/data/types';

export const boostingSection: TopicSection = {
  id: "boosting",
  title: "Boosting",
  description: "A method to reduce bias by training models sequentially, where each new model focuses on the samples that were misclassified or yielded high errors in the previous models.",
  color: "#FF9800",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Advanced ML · Sequential</div>
      <h1>Boosting: The Hardcore Tutor</h1>
      <p>If Bagging is a democratic election (Parallel), <strong>Boosting</strong> is a <strong>Intense Tutoring Session</strong> (Sequential). We don't train all models at once. Instead, we train one, look at its <strong>Mistakes</strong>, and then train the next model to <strong>Specifically Fix those Mistakes</strong>. We turn a "Weak Learner" into an "Unstoppable Expert."</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Bias Reduction</a>
      <a href="#process">The Sequential Loop</a>
      <a href="#weighting">Sample Weighting: Focusing on Errors</a>
      <a href="#algorithms">AdaBoost vs. Gradient Boosting</a>
      <a href="#analogy">The "Hardcore Tutor" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Bias Reduction</h2>
    <p>Bias is the error caused by a model being too <strong>Simple</strong>. If your model thinks 2+2=5, it is biased. Boosting forces the model to <strong>Get Smarter</strong> by iteratively pointing out where it was stupid.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Adaptive Learning."</strong> 
        In school, you don't spend time studying what you already know. You focus on the <strong>Hard Problems</strong>. 
        Boosting does the same. It "Gives more weight" to the <strong>Difficult Samples</strong> so the next model is forced to solve them.
      </div>
    </div>

    <h2 id="algorithm">The Boosting Algorithm (AdaBoost)</h2>
    <div class="example-box">
      <h4>The Error Focus Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Equal Starts:</strong> Give every data point an equal weight (importance).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Weak Learning:</strong> Train a very simple model (like a 1-split "Stump") on the weighted data.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Error Check:</strong> See which points the model missed. Calculate the model's "Say" (importance) in the final vote.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Up-Weighting:</strong> Increase the weights of the missed points so they become "Huge" in the eyes of the next model.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Completion:</strong> Repeat $M$ times. The final answer is a weighted vote of all your tutors.
        </div>
      </div>
    </div>

    <h2 id="algorithms">Core Algorithms</h2>
    <ul>
      <li><strong>AdaBoost:</strong> The original. It tweaks sample weights.</li>
      <li><strong>Gradient Boosting (XGBoost):</strong> The modern king. Instead of weights, it trains the next model to predict the <strong>Residuals</strong> (the leftover error) of the previous model.</li>
    </ul>

    <h2 id="analogy">The "Hardcore Tutor" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are a <strong>Student preparing for the SAT</strong>. 
        * <strong>1st Round:</strong> You take a practice test. You get the math questions right but miss all the <strong>Grammar</strong> questions. 
        * <strong>2nd Round:</strong> You hire a <strong>Grammar Tutor</strong>. You focus 100% on grammar and learn the rules. 
        * <strong>3rd Round:</strong> You take another test. Now you know grammar, but you miss the <strong>Vocabulary</strong> questions. 
        * <strong>4th Round:</strong> You hire a <strong>Vocabulary Tutor</strong>. 
        <strong>By the end of the semester, you have an "Ensemble" of 3 different skillsets that cover every weakness. Boosting is that relentless focus on what you don't yet understand.</strong> 
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Relentless SAT Tutor</h2>
    <div class="example-box">
      <h4>Scenario: Preparing for the SAT with 5 Sequential Tutors</h4>
      <p>Imagine you have 5 weeks to study. Instead of reading the same book over and over, you hire a sequence of specialist tutors.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Tutor 1 (The Baseline):</strong> He teaches you everything. You learn the Math perfectly, but you fail the <strong>Grammar</strong> section miserably. (The Weak Learner).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Tutor 2 (The Correcter):</strong> He ignores your Math skills (since you already know them) and forces you to <strong>only solve Grammar problems</strong> for a week.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Focus:</strong> You now know Math and Grammar, but you are too slow. <strong>Tutor 3</strong> focuses 100% on your time management (Speed).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Exam:</strong> You take the test combining the specific corrections and specialized knowledge of all tutors. You achieve a perfect score.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Boosting is a <strong>Bias Killer</strong>. If your model is too "Simple" (like a 1-level decision tree stump), boosting forces it to get smarter by repeatedly hammering it with the samples it got wrong. It's the ultimate "Grinder" algorithm.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: From Stumps to Experts</h2>
    <python-code static-output="[Scan] Generating complex 'Moons' dataset (Non-linear boundaries)...\n[Baseline] Training 1-level Decision Stump...\n[Action] Training AdaBoost (Sequential correction of 50 stumps)...\n\n[Result] Single Stump Score: 56.4% (Basically guessing)\n[Result] AdaBoost Ensemble Score: 94.2% (The Expert learner)\n\n[Insight] By focusing on mistakes, we combined 50 'dumb' models into one 'genius'.">
from sklearn.ensemble import AdaBoostClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import make_moons
from sklearn.model_selection import train_test_split

# 1. Non-linear dataset that a single line can't solve
X, y = make_moons(n_samples=1000, noise=0.2, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# 2. The 'Weak' baseline: 1-level Decision Tree (A Stump)
weak_stump = DecisionTreeClassifier(max_depth=1)
weak_stump.fit(X_train, y_train)

# 3. The 'Strong' Ensemble: AdaBoost
# It trains stumps one by one, focusing on the ones the previous stump missed
boosting_model = AdaBoostClassifier(
    estimator=weak_stump,
    n_estimators=50,
    learning_rate=0.5
)
boosting_model.fit(X_train, y_train)

# 4. Compare
print(f"Single Stump Score: {weak_stump.score(X_test, y_test):.1%}")
print(f"AdaBoost Score: {boosting_model.score(X_test, y_test):.1%}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Voting (Bagging) and Tutoring (Boosting) are great. But what if we train a model how to combine other models? Explore <strong><a href="#/machine-learning/advanced-ml/stacking">Stacking</a></strong>.
    </div>
  `
};
