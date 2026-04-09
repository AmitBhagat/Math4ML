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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Recall (also known as Sensitivity) is the metric of <strong>Thoroughness</strong>. While Precision asks if your guesses are correct, <strong>Recall</strong> looks at reality and asks: "Of all the actual positives that exist in the world, how many did you manage to find?" If you are building a model to detect a deadly disease, you don't care about annoying a few healthy people (False Positives)—you care about catching every single sick person (True Positives). A model with high recall is "Aggressive"; it’s a dragnet that refuses to let anything escape, even if it catches some junk in the process. It is the tactical decision to prioritize the "Quantity" of your hits over the purity of your results. High recall is your primary defense against <strong>False Negatives</strong>, which in many fields are much more dangerous than false alarms.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Sensitivity / True Positive Rate (TPR)</div>
      <p>In binary classification, **Recall** is defined as the probability that a sample is predicted as positive given that it truly belongs to the positive class. It is a measure of the model's "Completeness":</p>
      <div class="math-block">
        $$\text{Recall} = \mathbb{P}(\hat{y}=1 \mid y=1) = \frac{TP}{TP + FN}$$
      </div>
      <p>The components of the recall estimate are:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>TP (True Positives)</strong>: Actual positive samples correctly identified as such.</li>
        <li><strong>FN (False Negatives)</strong>: Actual positive samples incorrectly labeled as negative (Type II Error).</li>
        <li><strong>Inclusion Property</strong>: Recall is independent of the number of **False Positives**. It strictly focuses on the "Inclusion" of all positive samples, even at the cost of capturing irrelevant noise (mislabeling negatives).</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Recall is the primary metric in safety-critical domains like medical diagnostics and fraud detection, where **Missing a Signal** (a false negative) carries extreme risk.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Recall as <strong>"The Thoroughness Score"</strong> or <strong>"The Giant Net."</strong> 
        Imagine you dropped your <strong>Contact Lens</strong> in a swimming pool full of <strong>Plastic Toys</strong>. 
        If you only grab something when you are 100% sure it’s the lens, you might leave the lens behind (Low Recall). 
        If you use a <strong>Giant Net</strong> and scoop up every single item in the pool, you definitely found the lens, but you also caught 50 toys. 
        The Giant Net has 100% <strong>Recall</strong>. You didn't "Miss" the target (Zero False Negatives). This is what matters in life-or-death situations where missing a tumor or a fraudster is a catastrophic failure.
      </div>
    </div>

    <h2 id="use-case">When Recall is King</h2>
    <p>Recall is the most important metric when the <strong>Cost of a False Negative is HIGH</strong>.</p>
    <ul>
      <li><strong><span class="text-green-premium font-bold">Case Study:</span> </strong> Cancer Screening. Missing a tumor (FN) is a death sentence. Over-diagnosing (FP) just leads to more tests. </li>
      <li><strong><span class="text-green-premium font-bold">Case Study:</span> </strong> Fraud Detection. You'd rather flag a legitimate transaction for review than let a hacker steal \$10,000.</li>
    </ul>

    <h2 id="false-alarms">The Tension between P and R</h2>
    <p>There is a natural <strong>Trade-off</strong>. To get 100% Recall, you could just say "Positive" to everyone! You caught all the sick people, but your Precision is now 0.01. Finding the balance is the goal of ML.</p>

    <h2 id="analogy">The "Searching for a Contact Lens" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you dropped your <strong>Contact Lens</strong> in a swimming pool full of <strong>Plastic Rings</strong>. 
        * <strong>Case 1 (High Precision):</strong> You only grab something if you are 100% sure it's the lens. You might leave the lens behind if you aren't sure. 
        * <strong>Case 2 (High Recall):</strong> You use a <strong>Giant Net</strong> and pull out <strong>EVERYTHING</strong> from the pool. You definitely found the lens, but you also found 50 plastic rings. 
        <strong>The Giant Net approach has 100% RECALL. You didn't miss the lens, but your Precision was low because you caught a lot of junk.</strong>
      </div>
    </div>

    <h2 id="algorithm">The Recall Calculation</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Net of Inclusion</h2>
    
      <h4>Scenario: Searching for an Engagement Ring in a Swimming Pool</h4>
      <p>Imagine you dropped your diamond ring in a public pool filled with 1,000 random plastic toys. You <strong>cannot</strong> leave without it.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Action:</strong> You use a giant industrial net and scoop up every single item in the pool. You are being "Aggressive."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Verification:</strong> You sift through the pile. You found the ring (True Positive)!</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Hidden Truth:</strong> Even though you also caught 1,000 toys (False Positives), your <strong>Recall</strong> is a perfect $1 / 1 = 100\%$.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Result:</strong> You are 100% "Thorough." You didn't "Miss" the target (Zero False Negatives). This is what matters in life-or-death situations.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          High recall usually means your model is <strong>Aggressive</strong>. It's like a paranoid security guard who checks everyone. It's the "Quantity" metric—perfect for when the cost of a miss (False Negative) is catastrophic, like cancer or fraud.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np
from sklearn.metrics import recall_score

# 1. Reality vs. Model Predictions
# 1 = Sick, 0 = Healthy
y_true = [0, 1, 0, 1, 0, 0, 1, 0, 0, 1]
y_pred = [0, 1, 0, 0, 0, 1, 1, 0, 0, 1]

# 2. Calculate Recall (TP / (TP + FN))
# Only cares about how much of the REAL '1's were found
recall = recall_score(y_true, y_pred)

print(f"Model Recall Score: {recall:.2%}")

# 3. Manual Check for Clarity
# Total Reality: indices 1, 3, 6, 9 are '1'
# Model found 1, 6, 9. It missed 3 (False Negative).
print(f"Thoroughness: {recall*100:.0f}% of actual targets found.")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> High Precision makes us too picky. High Recall makes us too messy. How do we find the "Perfect" middle ground? Explore <strong><a href="#/machine-learning/model-evaluation/f1-score">F1 Score</a></strong>.
    </div>
  `
};

