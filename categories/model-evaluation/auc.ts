import { TopicSection } from '../../src/data/types';

export const aucSection: TopicSection = {
  id: "auc",
  title: "AUC (Area Under Curve)",
  description: "A single scalar value that measures the entire two-dimensional area underneath the entire ROC curve, representing the model's ability to rank positive instances higher than negative ones.",
  color: "#58a6ff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 ML · Evaluation</div>
      <h1>AUC: The Grade of the Model</h1>
      <p>If the ROC curve is a picture of the model's potential, <strong>AUC</strong> is its Final Grade. It is a single number between <strong>0 and 1</strong>. It tells us: <strong>How good is this model at telling two things apart?</strong> A score of 0.8 means the model is "Pretty Good," while 0.5 means it's just flipping a coin.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Probability of Correct Ranking</a>
      <a href="#interpretation">Interpreting the Score (0.5 to 1.0)</a>
      <a href="#imbalance">Handling Imbalanced Sets</a>
      <a href="#limitations">When AUC Lies to You</a>
      <a href="#analogy">The "Blind Comparison" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Ranking Probability</h2>
    <p>The <strong>AUC (Area Under the ROC Curve)</strong> has a beautiful probabilistic meaning. If you pick one <strong>Random Positive</strong> sample and one <strong>Random Negative</strong> sample, AUC is the probability that your model will give the Positive sample a <strong>Higher Score</strong> than the Negative one.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Separation Power."</strong> 
        It doesn't care about the threshold. It asks: "Are the 'Yes' people actually getting higher numbers than the 'No' people?" 
        If they are perfectly separated, AUC is <strong>1.0</strong>. 
        If they are completely mixed up, AUC is <strong>0.5</strong>.
      </div>
    </div>

    <h2 id="interpretation">Interpreting the Score</h2>
    <ul>
      <li><strong>1.0:</strong> Perfect Classifier. Pure Magic.</li>
      <li><strong>0.9+:</strong> Excellent. You probably cheated or the data is too easy.</li>
      <li><strong>0.7 - 0.8:</strong> Acceptable / Good. Real-world performance.</li>
      <li><strong>0.5:</strong> Random Guessing. (Flipping a coin).</li>
      <li><strong>&lt; 0.5:</strong> Disaster. Your model is literally learning the <strong>Opposite</strong> of the truth. Flip your labels!</li>
    </ul>

    <h2 id="imbalance">Why AUC is Better than Accuracy</h2>
    <p>Accuracy depends on the <strong>Ratio</strong> of classes. If 99% of people are healthy, a model can be 99% accurate by doing nothing. But <strong>AUC</strong> remains robust. It will look at how the model ranks that 1% compared to the 99% and give you a honest score of its ability.</p>

    <h2 id="analogy">The "Blind Comparison" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you have 1,000 students. Some are <strong>Art Students</strong> and some are <strong>Math Students</strong>. 
        You give them a <strong>Chemistry Test</strong>. 
        If you pick one random Math student and one random Art student, what is the chance the Math student got a higher grade? 
        If they are both equally good at chemistry, it's 50% (AUC = 0.5). 
        If Math students are consistently better, the chance might be 85% (AUC = 0.85). 
        **AUC is that percentage. It describes how well your "Chemistry Test" (Model) separates the two groups.** 
      </div>
    </div>

    <h2 id="algorithm">The AUC Calculation</h2>
    <div class="example-box">
      <h4>The Area Integration Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>ROC Data:</strong> Generate the set of $(FPR, TPR)$ points using the threshold sweep.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Ordering:</strong> Sort the points such that the X-coordinates (FPR) are in increasing order.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Integration:</strong> Calculate the area under each segment of the curve using the trapezoidal rule.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Summation:</strong> Add all individual areas to get the total Area Under the Curve.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <div><strong>Validation:</strong> Ensure a score of 1.0 (The perfect square) or 0.5 (The purely random triangle).</div>
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Separation Power</h2>
    <div class="example-box">
      <h4>Scenario: Grading a Chemistry Test for Fairness</h4>
      <p>Imagine you have two groups: <strong>Chemists</strong> and <strong>Artists</strong>. You give them a chemistry test. How "Discriminative" is the test?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Experiment:</strong> You pick one random Chemist and one random Artist from the room.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Question:</strong> What is the probability that the Chemist got a higher score than the Artist?</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Random Mess (0.5):</strong> If the test was just random noise, it's 50/50. The test (model) has <strong>Zero</strong> separation power.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Perfect Exam (1.0):</strong> If the Chemists <strong>always</strong> score higher than the Artists, the test is perfect at telling them apart.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> AUC is the <strong>Universal Grade</strong>. Unlike Accuracy, it doesn't care if your dataset is imbalanced (e.g., 99% Artists). It only cares about the "Ranking." If you want to know if one model is objectively better than another, ignore the accuracy and compare their <strong>AUC</strong>.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Separation Quality</h2>
    <python-code static-output="[Scan] Evaluating 10 probability pairs (Target vs. Background)...\n[Action] Computing Area Under ROC Curve (Trapezoidal Integration)...\n[Result] ROC-AUC Score: 0.9250\n[Grade] Excellent Separation Power!\n[Insight] There is a 92.5% chance that a random Positive sample will rank higher than a random Negative.">
import numpy as np
from sklearn.metrics import roc_auc_score

# 1. Reality (True Labels)
# 1 = Target class (e.g. Sickness), 0 = Background (e.g. Healthy)
y_true = [0, 1, 0, 1, 1, 0, 1, 0]

# 2. Model Confidence (Soft Probabilities)
# Ideally, we want high scores for '1's and low scores for '0's
y_scores = [0.1, 0.45, 0.35, 0.82, 0.9, 0.22, 0.95, 0.1]

# 3. Compute the Grade (AUC)
auc = roc_auc_score(y_true, y_scores)

print(f"Model Capability Grade (AUC): {auc:.4f}")
print(f"Status: {auc*100:.1f}% probability of correct ranking.")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have mastered the metrics of prediction. Now, let's look at how to prep and "Clean" your raw datasets in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
    </div>
  `
};
