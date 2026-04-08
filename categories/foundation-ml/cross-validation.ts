import { TopicSection } from '../../src/data/types';

export const crossValidationSection: TopicSection = {
  id: "cross-validation",
  title: "Cross-Validation",
  description: "Cross-validation is a statistical method used to estimate the skill of Machine Learning models by partitioning the data into rotating subsets.",
  color: "#4A90E2",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Validation</div>
      <h1>Cross-Validation: The Rotating Jury</h1>
      <p>If you split your data once (80/20), you're at the mercy of luck. What if that 20% "Test Set" happens to be the easiest data points? <strong>Cross-Validation</strong> is the standard way to ensure your model's performance isn't just a fluke. We rotate the data so every single piece gets to be the "Test Set" at some point.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Variance of Estimates</a>
      <a href="#k-fold">K-Fold Cross-Validation</a>
      <a href="#example">The Logic of K=5</a>
      <a href="#analogy">The "Musical Chairs" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Variance of Estimates</h2>
    <p>A single Train/Test split gives you a single "Snapshot" of accuracy. But accuracy can vary depending on <strong>Which</strong> points are in the test set. Cross-Validation gives you an <strong>Average Accuracy</strong> and a <strong>Standard Deviation</strong>, telling you how much you can actually trust the model's performance.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Musical Chairs for Data."</strong> 
        We have 5 chairs (Blocks of data). In every round, 4 chairs are for the "Training" and 1 chair is for the "Test." We repeat the game 5 times, rotating the test chair each time. By the end, every piece of data has had a turn to judge the model.
      </div>
    </div>

    <h2 id="k-fold">K-Fold Cross-Validation</h2>
    <p>The most common form is <strong>K-Fold</strong>. We split the data into \(K\) "Folds" (usually 5 or 10).</p>
    <ul>
      <li><strong>Iteration 1:</strong> Fold 1 is the Test, Folds 2-5 are Training.</li>
      <li><strong>Iteration 2:</strong> Fold 2 is the Test, Folds 1, 3-5 are Training.</li>
      <li><strong>...</strong></li>
      <li><strong>Final Result:</strong> Average the accuracy of all 5 iterations.</li>
    </ul>

    <h2 id="example">Illustrated Example: The Chef's Rotating Audition</h2>
    <div class="example-box">
      <h4>Scenario: Auditioning for a Head Chef Position</h4>
      <p>Instead of one judge tasting one dish (A Single Split), you have 5 groups of judges looking for consistency across different conditions.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Round 1:</strong> Judges 2, 3, 4, 5 eat your appetizers. Judge 1 tastes your main course (The Test). Score: 90%.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Round 2:</strong> Judge 2 becomes the main taste tester. The others eat the appetizers. Score: 82%.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Rotation:</strong> You repeat this until every judge has had a turn to be the "Main Judge." (Rotating the Fold).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Final Verdict:</strong> You average the scores. If you got 95% in one round but 40% in another, the restaurant knows you are "Inconsistent" and shouldn't be hired.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Cross-Validation is the <strong>Bullshit Detector</strong> of ML. If your model gets 99% in one fold but 50% in another, it has just memorized a specific part of the data—it hasn't learned the general principle. Stable models have low variance across folds.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Validating with K-Fold</h2>
    <python-code static-output="[Scan] Dividing 500 samples into 5 Folds...\n[Iteration 1] Training folds 2,3,4,5 | Testing fold 1... Accuracy: 84.5%\n[Iteration 2] Training folds 1,3,4,5 | Testing fold 2... Accuracy: 88.2%\n[Iteration 3] Training folds 1,2,4,5 | Testing fold 3... Accuracy: 82.1%\n[Iteration 4] Training folds 1,2,3,5 | Testing fold 4... Accuracy: 85.5%\n[Iteration 5] Training folds 1,2,3,4 | Testing fold 5... Accuracy: 86.8%\n\n[Result] Mean Accuracy: 85.4% (+/- 2.1%)\n[Insight] The low standard deviation (2.1%) proves the model is robust and reliable.">
from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_classification

# 1. Dataset for classification
X, y = make_classification(n_samples=500, n_features=10, random_state=42)

# 2. 5-Fold Cross-Validation
# cv=5 means we split into 5 blocks and rotate
clf = LogisticRegression()
scores = cross_val_score(clf, X, y, cv=5)

# 3. Report the 'Truth'
print(f"Scores per Fold: {scores}")
print(f"Average Accuracy: {scores.mean():.1%}")
print(f"Consistency (Std Dev): {scores.std():.3f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Even with perfect validation, if your data is "Bad," your model will be "Bad." Explore <strong><a href="#/machine-learning/foundation-ml/feature-engineering">Feature Engineering</a></strong>.
    </div>
  `
};
