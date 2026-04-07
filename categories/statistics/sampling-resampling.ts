import { TopicSection } from '../../src/data/types';

export const samplingResamplingSection: TopicSection = {
  id: "sampling-resampling",
  title: "Sampling & Resampling",
  description: "Learn methods to estimate uncertainty and ensure generalization through Bootstrapping, K-Fold Cross-Validation, and Stratified sampling.",
  color: "#FFE082",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔄 Statistics · Resampling</div>
      <h1>Sampling & Resampling</h1>
      <p>Sampling and Resampling methods allow us to estimate the uncertainty of our models and ensure they generalize well to unseen data, especially when we rarely have access to the entire population of data.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#bootstrapping">1. Bootstrapping</a>
      <a href="#cv">2. Cross-Validation (CV)</a>
      <a href="#example">Mathematical Example: Bootstrap Mean Estimation</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#conclusions">Key Takeaways</a>
    </div>

    <h2 id="bootstrapping">1. Bootstrapping</h2>
    <p>Bootstrapping is a statistical method involving drawing repeated samples from a dataset <strong>with replacement</strong>.</p>
    
    <div class="def-box">
      <div class="def-title">Core Concept</div>
      <p style="margin:0">If we have a dataset $D$ of size $n$, a bootstrap sample is created by picking $n$ elements from $D$, where each element can be picked more than once.</p>
      
      <p style="margin-top:15px; margin-bottom:0">Probability of an item *not* being picked in a sample of size $n$: $P(\text{not picked}) = \left(1 - \frac{1}{n}\right)^n$</p>
      <ul style="margin-top:10px; margin-bottom:0">
        <li><strong>In-bag samples:</strong> $\approx 63.2\%$ of unique data.</li>
        <li><strong>Out-of-bag (OOB) samples:</strong> $\approx 36.8\%$ of data (used for testing).</li>
      </ul>
    </div>

    <div class="callout tip">
      <div class="callout-icon">🌲</div>
      <div class="callout-body">
        <strong>ML Application: Random Forest:</strong> Random Forests use <strong>Bagging</strong> (Bootstrap Aggregating). Each tree is trained on a different bootstrap sample to reduce variance.
      </div>
    </div>

    <h2 id="cv">2. Cross-Validation (CV)</h2>
    <p>Cross-Validation is a resampling procedure used to evaluate machine learning models on a limited data sample.</p>
    
    <h3>K-Fold Cross-Validation</h3>
    <ol>
      <li>Split the data into $k$ equal-sized folds.</li>
      <li>Train model on $k-1$ folds and test it on the remaining 1 fold.</li>
      <li>Repeat $k$ times, using a different fold as the test set each time.</li>
      <li>The final performance is the average of all $k$ iterations.</li>
    </ol>

    <div class="math-block">
      $$\text{Performance}_{CV} = \frac{1}{k} \sum_{i=1}^{k} \text{Score}_i$$
    </div>

    <h3>Types of CV:</h3>
    <ul>
      <li><strong>LOOCV (Leave-One-Out):</strong> $k=n$. High computational cost but low bias.</li>
      <li><strong>Stratified K-Fold:</strong> Ensures each fold has the same percentage of samples of each target class as the complete set. (Crucial for imbalanced data).</li>
    </ul>

    <div class="example-box">
      <h4 id="example">Mathematical Example: Bootstrap Mean Estimation</h4>
      <p><strong>Problem:</strong> Given a dataset $X = [10, 20, 30]$, calculate the probability that the value '10' is excluded from a sample of size $n=3$.</p>
      
      <p><strong>Solution:</strong></p>
      <ol>
        <li>For $n=3$, the probability of not picking '10' in one draw is $2/3$.</li>
        <li>For 3 draws:
          <div class="math-block">$$P(\text{Exclusion}) = \left(\frac{2}{3}\right)^3 = \frac{8}{27} \approx 0.296 \text{ (29.6%)}$$</div>
        </li>
      </ol>
    </div>

    <h2 id="implementation">Python Implementation</h2>
    <python-code>
import numpy as np
from sklearn.model_selection import KFold, StratifiedKFold
from sklearn.utils import resample

# 1. Bootstrapping Manual Implementation
data = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
boot = resample(data, replace=True, n_samples=5, random_state=1)
print(f"Bootstrap Sample: {boot}")

# 2. K-Fold Cross Validation
X = np.array([[1, 2], [3, 4], [1, 2], [3, 4], [5, 6], [7, 8]])
y = np.array([0, 0, 1, 1, 1, 1])

kf = KFold(n_splits=3)
print("\nK-Fold Iterations:")
for train_index, test_index in kf.split(X):
    print(f"TRAIN: {train_index} TEST: {test_index}")

# 3. Stratified K-Fold
skf = StratifiedKFold(n_splits=2)
print("\nStratified K-Fold Iterations:")
for train_index, test_index in skf.split(X, y):
    print(f"TRAIN: {train_index} TEST: {test_index}")
    </python-code>

    <div class="callout info">
      <div class="callout-icon">📊</div>
      <div class="callout-body">
        <strong>Complexity Analysis:</strong>
        <ul>
          <li><strong>Bootstrap:</strong> $O(n)$ to sample.</li>
          <li><strong>K-Fold:</strong> $O(k \cdot \text{Cost of Training})$.</li>
          <li><strong>Space Complexity:</strong> $O(n)$.</li>
        </ul>
      </div>
    </div>

    <h2 id="conclusions">Key Takeaways</h2>
    <ul>
      <li><strong>Bootstrapping</strong> is best for estimating confidence intervals and building ensembles.</li>
      <li><strong>Cross-Validation</strong> is the gold standard for model selection.</li>
      <li>Use <strong>Stratified K-Fold</strong> for classification tasks to prevent unlucky folds.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Resampling ensures robustness. Move from samples to conclusions with <strong><a href="#/mathematics/statistics/inferential-statistics">Inferential Statistics</a></strong>.
    </div>
  `
};
