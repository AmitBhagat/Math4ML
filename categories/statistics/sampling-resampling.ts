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
      <a href="#bootstrap-example">1.1 Illustrative Example: Mean Variance</a>
      <a href="#cv">2. Cross-Validation (CV)</a>
      <a href="#stratified-example">2.1 Illustrative Example: Stratified Splits</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#conclusions">Key Takeaways</a>
    </div>

    <h2 id="bootstrapping">1. Bootstrapping</h2>
    <p>Bootstrapping is a statistical method involving drawing repeated samples from a dataset <strong>with replacement</strong>.</p>
    
    <div class="premium-def-box">
      <div class="premium-def-title">The "OOB" Ratio</div>
      <p style="margin:0">For a sample of size \(n\), the probability of an item <strong>not</strong> being picked in \(n\) draws is \((1 - \frac{1}{n})^n\).</p>
      <div class="math-block" style="margin-top:10px">\(\lim_{n \to \infty} (1 - \frac{1}{n})^n = \frac{1}{e} \approx 0.368\)</div>
      <p style="margin-top:10px">This leaves ~36.8% of data as <strong>Out-Of-Bag (OOB)</strong>, acting as a "free" validation set.</p>
    </div>

    <h2 id="bootstrap-example">1.1 Illustrative Example: Bootstrap Variance</h2>
    <div class="example-box">
      <h4>Problem: Estimating Mean Uncertainty</h4>
      <p>A dataset has 3 points: \(X = [10, 20, 30]\). Find the probability that the value '10' is excluded from a single bootstrap sample of size 3.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Individual Draw:</strong> Probability of <strong>not</strong> picking 10 is \(2/3\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Independent Draws:</strong> Since we sample with replacement, the probability is \((2/3) \times (2/3) \times (2/3)\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Calculation:</strong> \(8/27 \approx 29.6\%\).</div></div>

      <div class="callout focus"><div class="callout-icon">🎯</div><div class="callout-body"><strong>Analysis:</strong> Even with a tiny dataset, ~30% of it is "hidden" in each bootstrap. In ML, this "hiding" of data across different models (like in Random Forests) is exactly what prevents overfitting.</div></div>
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

    <h2 id="stratified-example">2.1 Illustrative Example: Stratified Splits</h2>
    <div class="example-box">
      <h4>Problem: Sampling from Imbalanced Fraud Data</h4>
      <p>A dataset has 1,000 samples: 990 "Normal" and 10 "Fraud". We want a 50/50 Train/Test split.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>The Risk:</strong> Random split might put 0 Fraud samples in your Test set. You'd have 100% accuracy but 0 value.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>The Fix:</strong> Stratified Sampling ensures each split has exactly 1% Fraud. Train gets 5 Fraud; Test gets 5 Fraud.</div></div>

      <div class="callout focus"><div class="callout-icon">⚖️</div><div class="callout-body"><strong>Judgment:</strong> Always use <strong>StratifiedKFold</strong> in scikit-learn for classification. It's the cheapest insurance policy against "Lucky Folds" that make your model look better than it is.</div></div>
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
