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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In machine learning, Accuracy is a seductive but dangerous metric. If you are testing for a rare disease that only affects 1% of the population, a model that simply says "Healthy" to everyone will be 99% accurate—yet it is a total, potentially fatal failure. The <strong>Confusion Matrix</strong> is the "Truth Table" that exposes the nuance of our errors. It doesn't just ask if the model was wrong; it asks <strong>Exactly How</strong> it was wrong. Did it cry wolf (a False Positive) or did it sleep through the attack (a False Negative)? Every classification problem requires a tactical decision about which type of mistake is more acceptable. The confusion matrix provides the raw, unvarnished inventory of these mistakes, allowing us to choose our poison wisely.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Error Distribution Matrix</div>
      <p>A **Confusion Matrix** is a square matrix used to describe the performance of a classifier on a set of test data. For binary classification, it is defined as a $2 \times 2$ contingency table:</p>
      <div class="math-block">
        $$\mathbf{C} = \begin{bmatrix} TN & FP \\ FN & TP \end{bmatrix}$$
      </div>
      <p>The four quadrants represent the possible outcomes of a binary test:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>TP (True Positive)</strong>: The model correctly predicted the positive class.</li>
        <li><strong>TN (True Negative)</strong>: The model correctly predicted the negative class.</li>
        <li><strong>FP (False Positive)</strong>: The model predicted positive for an actual negative (Type I Error).</li>
        <li><strong>FN (False Negative)</strong>: The model predicted negative for an actual positive (Type II Error).</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">The **Main Diagonal** (top-left to bottom-right) represents correct predictions, while the off-diagonal elements indicate where the model is "Confused." This matrix is the raw material from which Precision, Recall, and the F1-Score are derived.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of the Confusion Matrix as <strong>"The Story of Your Mistakes"</strong> or <strong>"The Security Guard."</strong> 
        Imagine a guard at an airport. A <strong>True Positive</strong> is stopping a terrorist (Success). A <strong>True Negative</strong> is letting a grandma through (Success). 
        A <strong>False Positive</strong> is stopping the innocent grandma for a 4-hour search—annoying, but safe. 
        A <strong>False Negative</strong> is letting a terrorist onboard—catastrophic. 
        The Confusion Matrix is the boss’s report card that tells them exactly how many grandmas were annoyed versus how many terrorists were missed. It’s the difference between being <strong>Over-Cautious</strong> and <strong>Over-Trusting</strong>.
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
        * <strong>True Positive:</strong> He stops a terrorist. (Success!) 
        * <strong>True Negative:</strong> He lets a regular passenger through. (Success!) 
        * <strong>False Positive:</strong> He stops an innocent grandmother for a 4-hour search. (Inconvenient, but safe). 
        * <strong>False Negative:</strong> He lets a terrorist onto the plane. (Catastrophic Failure). 
        <strong>The Confusion Matrix tells the Guard's boss exactly how many grandmothers were annoyed and how many terrorists were missed.</strong>
      </div>
    </div>

    <h2 id="algorithm">The Confusion Matrix Process</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Truth Table</h2>
    
      <h4>Scenario: Testing for a Rare Disease</h4>
      <p>Imagine you test 100 people for a disease. 10 actually have it, 90 do not. Your model makes some mistakes.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>True Positive (TP):</strong> You tell a sick person they are sick. (9 cases). They get the help they need. (Success!)</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>True Negative (TN):</strong> You tell a healthy person they are fine. (85 cases). No unnecessary stress. (Success!)</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>False Positive (FP):</strong> You tell a healthy person they are sick. (5 cases). (Type I Error: False Alarm). Frustration and wasted resources.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>False Negative (FN):</strong> You tell a sick person they are healthy. (1 case). (Type II Error: Dangerous Miss). This person goes home without treatment.</div>
        </div>
      </div>

      <div class="callout warning">
        <div class="callout-icon">⚠️</div>
        <div class="callout-body">
          The Matrix forces you to choose your poison. For a <strong>rare cancer</strong>, you'd rather have a few False Positives (over-testing) than a single False Negative (death). For a <strong>spam filter</strong>, you'd rather let spam in (FN) than delete a job offer (FP).
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np
from sklearn.metrics import confusion_matrix

# 1. Ground Truth (Real) vs. Predictions (Model)
# 1 = Spam/Sick, 0 = Clean/Healthy
y_true = [0, 1, 0, 1, 0, 0, 1, 0, 0, 1]
y_pred = [0, 1, 0, 0, 0, 1, 1, 0, 0, 1]

# 2. Extract the 4 Quadrants
# By default, rows are Actual, columns are Predicted
cm = confusion_matrix(y_true, y_pred)
tn, fp, fn, tp = cm.ravel()

# 3. Report the 'Confusion'
print(f"Confusion Matrix:\n{cm}")
print(f"\nBreakdown:")
print(f"- Correct Rejections (TN): {tn}")
print(f"- False Alarms (FP): {fp}")
print(f"- Dangerous Misses (FN): {fn}")
print(f"- Successful Hits (TP): {tp}")

accuracy = (tp + tn) / (tp + tn + fp + fn)
print(f"\nFinal Accuracy: {accuracy:.1%}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Now that we have the counts, how do we calculate the "Quality" of our guesses? Explore <strong><a href="#/machine-learning/model-evaluation/precision">Precision</a></strong>.
    </div>
  `
};

