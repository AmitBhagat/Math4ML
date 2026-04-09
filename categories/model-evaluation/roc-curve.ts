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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A classifier doesn’t just output a "Yes" or "No"—it outputs a <strong>Probability</strong> (e.g., 0.72). You, the engineer, must choose where to draw the line: do you flag everything above 0.5, or do you wait until you are 90% sure? the <strong>ROC (Receiver Operating Characteristic) Curve</strong> is a visual map of how that choice affects your performance. It plots your ability to find the truth (True Positive Rate) against your tendency to cry wolf (False Positive Rate) as you slide your "line in the sand" from 0 to 1. The ROC curve allows you to see the <strong>Global Profile</strong> of your model’s capability before you ever pick a side. It is the tactical decision to understand the full range of your model’s potential rather than just looking at a single, static snapshot of accuracy.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Threshold Sweep Function</div>
      <p>An **ROC Curve** represents the diagnostic ability of a binary classifier as its discrimination threshold is varied. Let $f(\mathbf{x})$ be the score assigned to an input $\mathbf{x}$. For a threshold $\tau$, the prediction is $\hat{y} = 1$ if $f(\mathbf{x}) \ge \tau$. The curve is the set of points defined by:</p>
      
      <div class="math-block">
        $$\text{ROC} = \{ (FPR(\tau), TPR(\tau)) \mid \tau \in (-\infty, \infty) \}$$
      </div>
      
      <p>The axes are defined by conditional probabilities:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>True Positive Rate (TPR)</strong>: $\mathbb{P}(f(\mathbf{X}) \ge \tau \mid Y=1)$. This measures the probability of detecting a positive instance correctly.</li>
        <li><strong>False Positive Rate (FPR)</strong>: $\mathbb{P}(f(\mathbf{X}) \ge \tau \mid Y=0)$. This measures the probability of a "False Alarm" in the negative class.</li>
      </ul>
      
      <p class="text-xs opacity-70 mt-2">The curve illustrates the fundamental **information-theoretic trade-off**: to capture more signal (higher TPR), one must generally accept more noise (higher FPR). A perfect classifier creates a curve that passes through the "Ideal Point" $(0, 1)$.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of the ROC Curve as <strong>"The Sensitivity Slider"</strong> or <strong>"The Metal Detector Knob."</strong> 
        Imagine a security guard at a stadium with a knob that controls the metal detector’s sensitivity. 
        If he turns it to <strong>Max Sensitivity</strong> (Low Threshold), he catches every weapon (100% TPR) but also annoys every passenger with a belt buckle (100% FPR). 
        If he turns it to <strong>Min Sensitivity</strong> (High Threshold), he annoys no one but misses almost every threat. 
        The ROC Curve is the chart of every possible knob setting. The "Sweet Spot" is the "Knee" of the curve—the setting that catches 98% of the threats with only 2% annoyance.
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
        * <strong>Max Sensitivity:</strong> The alarm goes off for zippers, coins, and belt buckles. You catch every weapon (100% TPR), but you annoy everyone (100% FPR). 
        * <strong>Min Sensitivity:</strong> The alarm only goes off for a giant sword. You annoy no one (0% FPR), but you miss smaller weapons (0% TPR). 
        <strong>The ROC Curve is the chart of the security guard's options. He looks at the curve and picks the knob setting that is 'Safe' but not 'Annoying.'</strong>
      </div>
    </div>

    <h2 id="algorithm">The ROC Curve Plotting Process</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Confidence Slider</h2>
    
      <h4>Scenario: Tuning an Airport Metal Detector Knob</h4>
      <p>Imagine you are a security guard with a sensitivity knob. You need to find a setting that catches dangerous objects (Positives) but doesn't beep at every belt buckle (Negatives).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Max Sensitivity (Low Threshold):</strong> The knob is at 0.1. The alarm beeps for everything—even the iron in your blood. You caught every weapon (100% TPR), but you also annoyed every passenger (100% FPR).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Min Sensitivity (High Threshold):</strong> The knob is at 0.9. The alarm only beeps for a giant broadsword. You annoyed no one (0% FPR), but you missed almost all smaller threats (0% TPR).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Sweep:</strong> As you slowly turn the knob from 0 to 1.0, you trace out a curve on a graph. This is the <strong>ROC Curve</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Sweet Spot:</strong> You look for the "Knee" of the curve—the setting that gives you 98% security with only 2% annoyance.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          The ROC Curve shows the "Capability" of your model regardless of the classification threshold. If your curve is a straight diagonal line, your model is basically a coin flip. The closer the curve peaks toward the <strong>top-left corner</strong>, the better your "Knob" is at distinguishing signal from noise.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np
from sklearn.metrics import roc_curve

# 1. Prediction Probabilities (Confidence scores from a model)
# In reality, these come from model.predict_proba()
y_true = [0, 0, 1, 1, 0, 1, 1, 0]
y_scores = [0.1, 0.4, 0.35, 0.8, 0.2, 0.9, 0.5, 0.1]

# 2. Compute ROC points
# fpr = False Positive Rate, tpr = True Positive Rate
fpr, tpr, thresholds = roc_curve(y_true, y_scores)

# 3. Analyze the Trade-off Map
print(f"{'Threshold':<12} | {'FPR':<10} | {'TPR (Recall)':<12}")
print("-" * 40)
for i in range(len(thresholds)):
    # Note: Scikit-learn adds a +1 threshold as a starting point
    if i == 0: continue 
    print(f"{thresholds[i]:.2f}        | {fpr[i]:.2f}       | {tpr[i]:.2f}")

print(f"\nModel Capability: Distinguishing power across all settings.")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> The curve is a picture. How do we turn that picture into a single, objective grade? Explore <strong><a href="#/machine-learning/model-evaluation/auc">AUC (Area Under Curve)</a></strong>.
    </div>
  `
};

