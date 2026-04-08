import { TopicSection } from '../../src/data/types';

export const baggingSection: TopicSection = {
  id: "bagging",
  title: "Bagging (Bootstrap Aggregating)",
  description: "A method to reduce variance by training multiple models independently on different random subsets (with replacement) of the training data and averaging their predictions.",
  color: "#FF9800",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Advanced ML · Parallel</div>
      <h1>Bagging: The Democratic Election</h1>
      <p>How do you stop a model from being "Over-Sensitive"? You let it be part of a <strong>Democratic Election</strong>. <strong>Bagging</strong> (Bootstrap Aggregating) creates many versions of the same model, each trained on a slightly different "Slice" of the world. By <strong>Voting (Parallel processing)</strong>, the errors of any single model are canceled out by the others.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Variance Reduction</a>
      <a href="#bootstrap">Bootstrapping: Sampling with Replacement</a>
      <a href="#averaging">Aggregating: The Final Vote</a>
      <a href="#forest">The Connection: Random Forest</a>
      <a href="#analogy">The "Democratic Election" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Variance Reduction</h2>
    <p>Variance is the error caused by a model being too sensitive to <strong>Small Fluctuations</strong> in the training data. If you change 3 points in your dataset and your model's predictions change completely, you have high variance. Bagging averages these fluctuations away.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Taking Multiple Looks."</strong> 
        If you look at a crime scene once, you might miss a clue. 
        If 100 detectives look at the scene from different angles, and we combine their reports, the final summary will be <strong>much more stable</strong>. 
      </div>
    </div>

    <h2 id="bootstrap">Bootstrapping: The "Bag" of Samples</h2>
    <p>How do we make the models "Different"? We use <strong>Sampling with Replacement</strong>. From a dataset of $N$ points, we pull $N$ points randomly, allowing the same point to be picked twice. Each model gets its own "Bag" of data. On average, each bag contains about **63% of the unique samples**.</p>

    <h2 id="averaging">Aggregating: The Vote</h2>
    <ul>
      <li><strong>Regression:</strong> Take the <strong>Average</strong> of all model outputs.</li>
      <li><strong>Classification:</strong> Take the <strong>Majority Vote</strong> (Mode) of the classes.</li>
    </ul>

    <h2 id="forest">Random Forest: Bagging's Champion</h2>
    <p>A <strong>Random Forest</strong> is just a collection of <strong>Decision Trees</strong> that use Bagging. By combining many high-variance trees, we create a single low-variance, incredibly powerful model.</p>

    <h2 id="analogy">The "Democratic Election" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a **Presidential Election**. 
        If only **One Person** decided the president (Single Model), the choice would be highly volatile and depend on that one person's mood. 
        **Bagging** is the election. We have 100,000,000 people (Models). Each person sees a slightly different part of reality (Bootstrapping). 
        When they all **Vote (Aggregating)**, the final result is <strong>Stable</strong>. The "Crazy" guesses of one individual are drowned out by the collective wisdom of the majority.
      </div>
    </div>

    <h2 id="algorithm">The Bagging Algorithm</h2>
    <div class="example-box">
      <h4>Parallel Diversity Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Bootstrapping:</strong> Create $B$ random subsets of the training data with replacement.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Parallel Training:</strong> Train $B$ identical models (e.g., all Decision Trees) independently on their unique subset.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Prediction:</strong> Pass the same input to all $B$ models.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Aggregating:</strong> Total the results. For classification, use <strong>Majority Vote</strong>; for regression, use <strong>Average</strong>.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Output:</strong> Return the aggregated result, which has significantly lower variance than any individual model.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Multi-Jury Verdict</h2>
    <div class="example-box">
      <h4>Scenario: Deciding a High-Profile Court Case</h4>
      <p>Imagine a court case so complex that a single jury might be overwhelmed by bias or noise. To be safe, you use multiple independent juries.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Bootstrap Sampling:</strong> You create 100 different Juries. Each Jury is given a slightly different set of evidence folders. (Sampling with replacement).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Parallel Thought:</strong> Every Jury deliberates and reaches its own verdict in separate, sound-proof rooms. They don't influence each other.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Aggregation:</strong> You collect all 100 verdicts. 92 say "Guilty," 8 say "Not Guilty."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Stability:</strong> Because of the strong majority, you declare "Guilty." The 8 biased or "noisy" juries were drowned out by the <strong>Collective Consensus.</strong></div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Bagging is a <strong>Variance Killer</strong>. If your model is too "Jumpily" reacting to every outlier in your data, put it in a bag! By averaging many points of view, you smooth those jumps into a stable, reliable prediction.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Training the Forest</h2>
    <python-code static-output="[Scan] Creating noisy dataset with 1,000 samples...\n[Member] Training Single Decision Tree (High Variance)...\n[Ensemble] Training Bagging Forest (50 Trees in Parallel)...\n\n[Result] Single Tree Accuracy: 81.5%\n[Result] Bagging Forest Accuracy: 92.2%\n\n[Insight] Bagging successfully 'Averaged Out' the errors made by individual trees.">
import numpy as np
from sklearn.ensemble import BaggingClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split

# 1. Dataset with a bit of noise
X, y = make_classification(n_samples=1000, n_features=20, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# 2. Single 'Expert' (High Variance)
single_tree = DecisionTreeClassifier()
single_tree.fit(X_train, y_train)

# 3. Bagging 'Council' (Low Variance)
# n_estimators=50 means 50 trees voting in parallel
bagging_model = BaggingClassifier(
    estimator=DecisionTreeClassifier(),
    n_estimators=50,
    random_state=42
)
bagging_model.fit(X_train, y_train)

# 4. Compare
print(f"Single Tree Score: {single_tree.score(X_test, y_test):.1%}")
print(f"Bagging Score: {bagging_model.score(X_test, y_test):.1%}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Voting works for stability. But what if we want to learn from our mistakes sequentially? Explore <strong><a href="#/machine-learning/advanced-ml/boosting">Boosting</a></strong>.
    </div>
  `
};
