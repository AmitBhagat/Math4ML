import { TopicSection } from '../../src/data/types';

export const confusionMatrixSection: TopicSection = {
  id: "confusion-matrix",
  title: "Confusion Matrix",
  description: "A summary of prediction results on a classification problem, showing the counts of True Positives, True Negatives, False Positives, and False Negatives.",
  color: "#58a6ff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 ML · Evaluation</div>
      <h1>Confusion Matrix: The Truth Table</h1>
      <p>Accuracy is a dangerous metric. If you are testing for a <strong>Rare Disease</strong> that affects 1% of the population, a model that simply says "Healthy" to everyone is <strong>99% Accurate</strong>—but it's a <strong>Total Failure</strong>. The <strong>Confusion Matrix</strong> is the "Truth Table" that exposes exactly where your model is being fooled.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The 4 Quadrants</a>
      <a href="#math">TP, TN, FP, FN</a>
      <a href="#errors">Type I vs. Type II Errors</a>
      <a href="#interpretation">Reading the Grid</a>
      <a href="#analogy">The "Security Guard" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The 4 Quadrants</h2>
    <p>A Confusion Matrix is a \(2 \times 2\) grid (for binary classification) that compares <strong>Reality</strong> (Rows) vs. <strong>Perception</strong> (Columns).</p>
    <div class="math-block">
      $$\begin{array}{|c|c|c|}
      \hline
      & \text{Predicted: YES} & \text{Predicted: NO} \\
      \hline
      \text{Actual: YES} & \text{True Positive (TP)} & \text{False Negative (FN)} \\
      \hline
      \text{Actual: NO} & \text{False Positive (FP)} & \text{True Negative (TN)} \\
      \hline
      \end{array}$$
    </div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Story of Your Mistakes."</strong> 
        It's not just that you were <strong>Wrong</strong>; it's <strong>HOW</strong> you were wrong. 
        Did you cry wolf when there was no wolf? (FP). Or did you sleep while the wolf attacked? (FN). Real-world problems often care <strong>Much More</strong> about one type of mistake than the other.
      </div>
    </div>

    <h2 id="errors">Type I and Type II Errors</h2>
    <ul>
      <li><strong>False Positive (Type I Error):</strong> The model says "Positive" but it's "Negative." (The false alarm).</li>
      <li><strong>False Negative (Type II Error):</strong> The model says "Negative" but it's "Positive." (The missed detection).</li>
    </ul>

    <h2 id="interpretation">Reading the Grid</h2>
    <p>A <strong>Perfection Model</strong> has values only on the <strong>Main Diagonal</strong> (TP and TN). Any values on the <strong>Anti-Diagonal</strong> (FP and FN) represent the "Confusion" of the model. By looking at these numbers, you can tell if your model is biased toward being <strong>Over-Cautious</strong> or <strong>Over-Trusting</strong>.</p>

    <h2 id="analogy">The "Security Guard" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Security Guard</strong> at an airport. 
        * **True Positive:** He stops a terrorist. (Success!) 
        * **True Negative:** He lets a regular passenger through. (Success!) 
        * **False Positive:** He stops an innocent grandmother for a 4-hour search. (Inconvenient, but safe). 
        * **False Negative:** He lets a terrorist onto the plane. (Catastrophic Failure). 
        **The Confusion Matrix tells the Guard's boss exactly how many grandmothers were annoyed and how many terrorists were missed.**
      </div>
    </div>

    <h2 id="algorithm">The Confusion Matrix Process</h2>
    <div class="example-box">
      <h4>The Reality Check Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Prediction Gathering:</strong> Run your trained model on the test set and collect the predicted classes.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Truth Comparison:</strong> Compare each prediction to the actual ground-truth label.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Tallying:</strong> For each sample, increment the count in the corresponding cell (TP, TN, FP, or FN).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Visualization:</strong> Arrange the counts into a $2 \times 2$ (or $N \times N$) grid.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <div><strong>Analysis:</strong> Use the counts to derive higher-level metrics like Precision and Recall.</div>
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Airport Security Check</h2>
    <p>Think of an <strong>Airport X-Ray Machine</strong> scanning 1,000 bags for "Prohibited Items."</p>
    <ul>
      <li><strong>True Positive:</strong> The machine beeps for a knife. (Great!) </li>
      <li><strong>True Negative:</strong> The machine stays silent for a toothbrush. (Great!) </li>
      <li><strong>False Positive:</strong> The machine beeps for a metal spoon. (The "Inconvenience" cost).</li>
      <li><strong>False Negative:</strong> The machine stays silent for a ceramic blade. (The "Safety" cost). </li>
    </ul>
    <p>A "Highly Sensitive" machine will have high FP (too many beeps), while a "Lazy" machine will have high FN (danger!). <strong>The Confusion Matrix is the report card for that machine.</strong></p>

    <h2 id="python">Python Implementation</h2>
    <div class="code-block">
      <pre><code class="language-python">
from sklearn.metrics import confusion_matrix
import numpy as np

# 1. Mock Data: Actual Truth vs. Model's Guesses
# 1 = Spam, 0 = Not Spam
y_true = [0, 1, 0, 1, 0, 0, 1, 0, 0, 1]
y_pred = [0, 1, 0, 0, 0, 1, 1, 0, 0, 1]

# 2. Compute the Matrix
labels = [0, 1]
cm = confusion_matrix(y_true, y_pred, labels=labels)

tn, fp, fn, tp = cm.ravel()

print(f"Confusion Matrix Grid:\n{cm}")
print(f"False Alarms (FP): {fp}")
print(f"Missed Detections (FN): {fn}")
      </code></pre>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> Now that we have the counts, how do we calculate the "Quality" of our guesses? Explore <strong><a href="#/machine-learning/model-evaluation/precision">Precision</a></strong>.
    </div>
  `
};
