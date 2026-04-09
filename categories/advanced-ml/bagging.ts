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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>How do you stop a model from being "Over-Sensitive"? You let it be part of a <strong>Democratic Election</strong>. <strong>Bagging</strong> (Bootstrap Aggregating) is a parallel strategy that creates many versions of the same model, each trained on a slightly different "Slice" of the world. By having these models vote on the final answer, the unique errors and hallucinations of any single model are canceled out by the others. It is the ultimate "Variance Killer," ensuring that your final prediction is stable and robust rather than jumping around every time a few data points change. It is the tactical decision to trust the <strong>Collective Consensus</strong> over a single, volatile expert.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Ensemble Aggregation</div>
      <p>Bagging reduces variance by averaging $m$ independent models. Given a dataset $\mathcal{D}$ of size $n$, we generate $m$ bootstrap samples $\{\mathcal{D}_1, \dots, \mathcal{D}_m\}$ by sampling $n$ points with replacement. The bagged predictor $\hat{f}_{bag}$ is defined as:</p>
      <div class="math-block">
        $$\text{Regression: } \hat{f}_{bag}(\mathbf{x}) = \frac{1}{m} \sum_{i=1}^m \hat{f}_i(\mathbf{x})$$
        $$\text{Classification: } \hat{f}_{bag}(\mathbf{x}) = \text{mode}\{ \hat{f}_1(\mathbf{x}), \dots, \hat{f}_m(\mathbf{x}) \}$$
      </div>
      <p class="text-xs opacity-70 mt-2">Where $\hat{f}_i$ is the model trained on the $i$-th bootstrap sample. This process reduces the expected error by decreasing the variance component without significantly increasing bias.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Bagging as <strong>"Taking Multiple Independent Looks"</strong> or <strong>"The Democratic Jury."</strong> 
        Imagine a complex crime scene. If only <strong>one detective</strong> looks at the evidence, their conclusion might be biased by their own history. 
        <strong>Bagging</strong> is like sending in 100 independent detectives. Through <strong>Bootstrapping</strong>, each detective studies a slightly different folder of evidence (sampling with replacement). They then go into separate, soundproof rooms to deliberate. 
        When they all <strong>Vote (Aggregating)</strong>, the result is much more stable. The "Crazy" theories of one or two detectives are drowned out by the stable, shared evidence found by the majority. It is the math of finding stability through parallel diversity.
      </div>
    </div>

    <h2 id="bootstrap">Bootstrapping: The "Bag" of Samples</h2>
    <p>How do we make the models "Different"? We use <strong>Sampling with Replacement</strong>. From a dataset of $N$ points, we pull $N$ points randomly, allowing the same point to be picked twice. Each model gets its own "Bag" of data. On average, each bag contains about <strong>63% of the unique samples</strong>.</p>

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
        <strong>Analogy:</strong> Imagine a <strong>Presidential Election</strong>. 
        If only <strong>One Person</strong> decided the president (Single Model), the choice would be highly volatile and depend on that one person's mood. 
        <strong>Bagging</strong> is the election. We have 100,000,000 people (Models). Each person sees a slightly different part of reality (Bootstrapping). 
        When they all <strong>Vote (Aggregating)</strong>, the final result is <strong>Stable</strong>. The "Crazy" guesses of one individual are drowned out by the collective wisdom of the majority.
      </div>
    </div>

    <h2 id="algorithm">The Bagging Algorithm</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Multi-Jury Verdict</h2>
    
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
          Bagging is a <strong>Variance Killer</strong>. If your model is too "Jumpily" reacting to every outlier in your data, put it in a bag! By averaging many points of view, you smooth those jumps into a stable, reliable prediction.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
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
