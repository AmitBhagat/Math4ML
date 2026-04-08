import { TopicSection } from '../../src/data/types';

export const rocCurveSection: TopicSection = {
  id: "roc-curve",
  title: "ROC Curve",
  description: "A graphical plot that illustrates the diagnostic ability of a binary classifier system as its discrimination threshold is varied.",
  color: "#58a6ff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 ML · Evaluation</div>
      <h1>ROC Curve: The Sensitivity Slider</h1>
      <p>A classifier doesn't just say "Yes" or "No." It gives a <strong>Probability</strong> (e.g., 0.72). You choose where to draw the line. <strong>ROC (Receiver Operating Characteristic)</strong> curves show us the <strong>Trade-off</strong> between capturing more positives and crying wolf more often as we slide that line from 0 to 1.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: TPR vs. FPR</a>
      <a href="#math">The Axis: Sensitivity & 1-Specificity</a>
      <a href="#threshold">The Threshold Slide</a>
      <a href="#optimal">The "Knee" of the Curve</a>
      <a href="#analogy">The "Security Door" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: TPR vs. FPR</h2>
    <p>The ROC curve plots two things against each other:</p>
    <ul>
      <li><strong>Y-Axis: True Positive Rate (Recall/Sensitivity):</strong> How many of the <strong>Actual Positives</strong> did we catch?</li>
      <li><strong>X-Axis: False Positive Rate (1 - Specificity):</strong> How many of the <strong>Actual Negatives</strong> did we accidentally call positive?</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Trade-off Map."</strong> 
        Every point on the curve represents a different <strong>Threshold</strong> (e.g., "Only flag if probability > 0.3" vs. "Only flag if > 0.9"). 
        If you are <strong>Lenient</strong> (Low Threshold), you get 100% Recall but also 100% False Positives. 
        If you are <strong>Strict</strong> (High Threshold), you get 0% Recall but also 0% False Positives.
      </div>
    </div>

    <h2 id="threshold">The Threshold Slide</h2>
    <p>Most models default to <strong>0.5</strong>. But if you are a bank checking for fraud, you might lower it to <strong>0.1</strong> to be extra safe. The ROC Curve allows you to see the <strong>Global Profile</strong> of your model before you pick a threshold.</p>

    <h2 id="optimal">The Random Line (\(y=x\))</h2>
    <p>A <strong>Random Classifier</strong> is a straight diagonal line. If your curve is below this line, your model is <strong>Worse than Random</strong>. A perfect model hugs the <strong>Top-Left Corner</strong> (Catching 100% of positives with 0% false alarms).</p>

    <h2 id="analogy">The "Sensitivity Slider" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Security Metal Detector</strong> at a stadium. 
        There is a <strong>Knob (Threshold)</strong> that controls sensitivity. 
        * **Max Sensitivity:** The alarm goes off for zippers, coins, and belt buckles. You catch every weapon (100% TPR), but you annoy everyone (100% FPR). 
        * **Min Sensitivity:** The alarm only goes off for a giant sword. You annoy no one (0% FPR), but you miss smaller weapons (0% TPR). 
        **The ROC Curve is the chart of the security guard's options. He looks at the curve and picks the knob setting that is 'Safe' but not 'Annoying.'**
      </div>
    </div>

    <h2 id="algorithm">The ROC Curve Plotting Process</h2>
    <div class="example-box">
      <h4>The Threshold Sweep</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Soft Predictions:</strong> Get the probability scores (not the class labels) from your model for the test set.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Threshold List:</strong> Create a sorted list of all unique probability scores in your data.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Incremental Loop:</strong> For every score in the list, use it as the "Line in the Sand" (Threshold).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Metric Calculation:</strong> Calculate the True Positive Rate (TPR) and False Positive Rate (FPR) for each threshold.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Plotting:</strong> Map every (FPR, TPR) pair to a dot on the grid and connect them to form the curve.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Metal Detector</h2>
    <p>Imagine a <strong>Metal Detector</strong> at a concert. You can turn a <strong>Sensitivity Knob</strong> from 0 to 10.</p>
    <ul>
      <li><strong>Setting 0:</strong> The alarm never goes off. (0% True Positives, 0% False Positives). </li>
      <li><strong>Setting 5:</strong> It finds guns and knives but also beeps for belt buckles. (High TPR, Moderate FPR). </li>
      <li><strong>Setting 10:</strong> It beeps for the iron in your blood. (100% TPR, 100% FPR). </li>
    </ul>
    <p>The **ROC Curve** is the map of every possible setting. It tells you: "If you want to catch 99% of weapons, how many innocent people will you have to search?" <strong>ROC is the decision map for the Security Guard.</strong></p>

    <h2 id="python">Python Implementation</h2>
    <div class="code-block">
      <pre><code class="language-python">
from sklearn.metrics import roc_curve
import numpy as np

# 1. Probabilities (not classes!) and True Labels
y_true = [0, 0, 1, 1]
y_scores = [0.1, 0.4, 0.35, 0.8]

# 2. Compute the ROC curve points
fpr, tpr, thresholds = roc_curve(y_true, y_scores)

# 3. View the trade-offs
for i in range(len(thresholds)):
    print(f"Threshold: {thresholds[i]:.2f} -> FPR: {fpr[i]:.2f}, TPR: {tpr[i]:.2f}")

# Normally you'd plot(fpr, tpr) here!
      </code></pre>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> The curve is a picture. How do we turn that picture into a single, objective grade? Explore <strong><a href="#/machine-learning/model-evaluation/auc">AUC (Area Under Curve)</a></strong>.
    </div>
  `
};
