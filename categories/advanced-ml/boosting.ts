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
        In school, you don't spend time studying what you already know. You focus on the **Hard Problems**. 
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
        * **1st Round:** You take a practice test. You get the math questions right but miss all the <strong>Grammar</strong> questions. 
        * **2nd Round:** You hire a **Grammar Tutor**. You focus 100% on grammar and learn the rules. 
        * **3rd Round:** You take another test. Now you know grammar, but you miss the <strong>Vocabulary</strong> questions. 
        * **4th Round:** You hire a **Vocabulary Tutor**. 
        **By the end of the semester, you have an "Ensemble" of 3 different skillsets that cover every weakness. Boosting is that relentless focus on what you don't yet understand.** 
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Relentless SAT Tutor</h2>
    <p>Imagine you are a <strong>Student preparing for the SAT</strong>. You have a series of tutors.</p>
    <ul>
      <li><strong>Tutor 1:</strong> He teaches you everything. You're good at Math but fail the <strong>Grammar</strong> section. </li>
      <li><strong>Tutor 2:</strong> He ignores your Math skills and forces you to <strong>Only solve Grammar problems</strong> until you're an expert. </li>
      <li><strong>The Final Exam:</strong> You combine your Math knowledge from Tutor 1 with your Grammar mastery from Tutor 2. </li>
    </ul>
    <p>Because each tutor focused <strong>Only on what was previously wrong</strong>, you have no weak spots left. <strong>Boosting is that relentless improvement cycle.</strong></p>

    <h2 id="python">Python Implementation</h2>
    <div class="code-block">
      <pre><code class="language-python">
from sklearn.ensemble import AdaBoostClassifier
from sklearn.tree import DecisionTreeClassifier
import numpy as np

# 1. Base Model: An extremely 'Weak' tree (Max depth 1)
weak_stump = DecisionTreeClassifier(max_depth=1)

# 2. Train with 50 stages of Boosting
model = AdaBoostClassifier(
    estimator=weak_stump,
    n_estimators=50,
    learning_rate=1.0
)

# 3. Fit on complex non-linear data
X = np.random.rand(100, 2)
y = (X[:, 0] + X[:, 1] > 1).astype(int)
model.fit(X, y)

print(f"Model precision: {model.score(X, y)}")
      </code></pre>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> Voting (Bagging) and Tutoring (Boosting) are great. But what if we train a model how to combine other models? Explore <strong><a href="#/machine-learning/advanced-ml/stacking">Stacking</a></strong>.
    </div>
  `
};
