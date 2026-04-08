import { TopicSection } from '../../src/data/types';

export const recallSection: TopicSection = {
  id: "recall",
  title: "Recall (Sensitivity)",
  description: "The proportion of actual positives that were correctly identified, focusing on the ability of a model to find all positive instances.",
  color: "#58a6ff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 ML · Evaluation</div>
      <h1>Recall: The Net of Inclusion</h1>
      <p>If you are testing for a <strong>Deadly Disease</strong>, you don't care if you annoy a few healthy people (FP). You care about finding <strong>Every Single Sick Person</strong>. <strong>Recall</strong> (also called Sensitivity) is the metric that asks: "Of all the actual positives that exist in reality, how many did you <strong>Manage to Find</strong>?"</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Denominator of Reality</a>
      <a href="#math">The Recall Formula</a>
      <a href="#missed">Avoiding Missed Opportunities</a>
      <a href="#use-case">When Recall is King</a>
      <a href="#analogy">The "Security Dog" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Denominator of Reality</h2>
    <p>While <strong>Precision</strong> looks at your guesses, <strong>Recall</strong> looks at <strong>Reality</strong>. It doesn't care about your false alarms (FP). It only cares about the positive cases you <strong>Missed (FN)</strong>.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Thoroughness Score."</strong> 
        If there are 100 criminals in the city, and you catch all 100, your recall is 1.0 (even if you accidentally arrested 50 innocent people along with them). 
        Recall is about <strong>Not leaving anyone behind</strong>.
      </div>
    </div>

    <h2 id="math">The Recall Formula</h2>
    <div class="math-block">$$Recall = \frac{TP}{TP + FN}$$</div>
    <ul>
      <li><strong>TP:</strong> True Positives (Correct 'Yes').</li>
      <li><strong>TP + FN:</strong> **Total Actual Positives** (Everything that is 'Yes' in reality).</li>
    </ul>

    <h2 id="use-case">When Recall is King</h2>
    <p>Recall is the most important metric when the <strong>Cost of a False Negative is HIGH</strong>.</p>
    <ul>
      <li><strong>Example 1:</strong> Cancer Screening. Missing a tumor (FN) is a death sentence. Over-diagnosing (FP) just leads to more tests. </li>
      <li><strong>Example 2:</strong> Fraud Detection. You'd rather flag a legitimate transaction for review than let a hacker steal \$10,000.</li>
    </ul>

    <h2 id="false-alarms">The Tension between P and R</h2>
    <p>There is a natural <strong>Trade-off</strong>. To get 100% Recall, you could just say "Positive" to everyone! You caught all the sick people, but your Precision is now 0.01. Finding the balance is the goal of ML.</p>

    <h2 id="analogy">The "Searching for a Contact Lens" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you dropped your <strong>Contact Lens</strong> in a swimming pool full of <strong>Plastic Rings</strong>. 
        * **Case 1 (High Precision):** You only grab something if you are 100% sure it's the lens. You might leave the lens behind if you aren't sure. 
        * **Case 2 (High Recall):** You use a <strong>Giant Net</strong> and pull out <strong>EVERYTHING</strong> from the pool. You definitely found the lens, but you also found 50 plastic rings. 
        **The Giant Net approach has 100% RECALL. You didn't miss the lens, but your Precision was low because you caught a lot of junk.**
      </div>
    </div>

    <h2 id="algorithm">The Recall Calculation</h2>
    <div class="example-box">
      <h4>The Comprehensive Finder Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify Reality:</strong> Filter for all samples that are actually "Positive" in ground truth.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Count Detections (TP):</strong> Within that group, count how many the model correctly identified.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Count Misses (FN):</strong> Within that group, count how many the model ignored or called "Negative."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Divide:</strong> Divide the TP by the sum of TP and FN (The Total Positive Reality).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <div><strong>Interpret:</strong> A score of 0.99 means the model found 99% of the targets, only missing 1%.</div>
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Giant Net</h2>
    <p>Imagine you dropped your <strong>Diamond Ring</strong> in a swimming pool filled with <strong>1,000 Plastic Toys</strong>.</p>
    <ul>
      <li><strong>The Strategy:</strong> You don't want to reach in and grab things one by one. You use a <strong>Giant Pool Net</strong> and scoop up every single item in the pool. </li>
      <li><strong>The Result:</strong> You definitely have your ring. Your <strong>Recall</strong> is $100\%$. </li>
    </ul>
    <p>However, you also have 1,000 plastic toys to sort through (Low Precision). But in a life-or-death situation (like a medical scan), this "Messy but Thorough" approach is exactly what you want. <strong>Recall is about the cost of missing out.</strong></p>

    <h2 id="python">Python Implementation</h2>
    <div class="code-block">
      <pre><code class="language-python">
from sklearn.metrics import recall_score
import numpy as np

# 1. Reality vs Model
y_true = [1, 1, 1, 1, 1, 0, 0] # 5 Real Positives
y_pred = [1, 1, 0, 1, 1, 0, 0] # Model missed ONE (FN)

# 2. Calculate Recall
recall = recall_score(y_true, y_pred)

print(f"Recall Score: {recall:.2f}")
# Result 0.80: 4 out of 5 were caught.
      </code></pre>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> High Precision makes us too picky. High Recall makes us too messy. How do we find the "Perfect" middle ground? Explore <strong><a href="#/machine-learning/model-evaluation/f1-score">F1 Score</a></strong>.
    </div>
  `
};
