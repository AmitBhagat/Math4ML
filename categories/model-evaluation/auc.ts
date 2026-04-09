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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>If the ROC curve is a visual representation of your model's potential, <strong>AUC (Area Under the Curve)</strong> is its final grade. It is a single scalar value between 0 and 1 that measures the entire two-dimensional area underneath the ROC curve. More importantly, AUC has a beautiful probabilistic meaning: if you pick one random positive sample and one random negative sample, AUC is the probability that your model will give the positive sample a higher score than the negative one. It is the tactical metric of <strong>Separation Power</strong>. Unlike accuracy, AUC doesn’t care about your classification threshold or how imbalanced your dataset is; it only cares about whether your model is fundamentally good at the "Ranking" game—placing the truth above the noise.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Ranking Probability (Wilcoxon-Mann-Whitney)</div>
      <p>The **Area Under the Curve (AUC)** is the integral of the True Positive Rate (TPR) function with respect to the False Positive Rate (FPR). It represents the aggregate measure of performance across all possible classification thresholds:</p>
      
      <div class="math-block">
        $$\text{AUC} = \int_{0}^{1} TPR(FPR^{-1}(u)) \, du$$
      </div>
      
      <p>Beyond integration, AUC has a critical probabilistic interpretation. Let $f(\mathbf{x}_+)$ be the model's score for a random positive instance and $f(\mathbf{x}_-)$ the score for a random negative instance. Then:</p>
      <div class="math-block">
        $$\text{AUC} = \mathbb{P}(f(\mathbf{x}_+) > f(\mathbf{x}_-))$$
      </div>

      <ul class="mt-2 space-y-1">
        <li><strong>Separation Power</strong>: $\text{AUC} = 1.0$ implies a perfectly separated distribution where the lowest-scoring positive still ranks higher than the highest-scoring negative.</li>
        <li><strong>Random Baseline</strong>: $\text{AUC} = 0.5$ implies the distributions are overlapping and the model has no discriminative power (equivalent to a coin flip).</li>
        <li><strong>Invariance</strong>: AUC is invariant to the classification threshold and invariant to the prior class distribution (class skew).</li>
      </ul>
      <p class="mt-2">Use AUC as the primary "All-Weather" grade when comparing the intrinsic capability of different models, especially on imbalanced datasets.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of AUC as <strong>"The Grade of the Model"</strong> or <strong>"The Blind Comparison."</strong> 
        Imagine you have two groups: <strong>Chemists</strong> and <strong>Artists</strong>. You give them a chemistry test. 
        If you pick one random Chemist and one random Artist, what is the chance the Chemist scored higher? 
        If the test is just random garbage, it's 50/50 (AUC = 0.5). If the Chemists always score higher, the test is perfect at telling them apart (AUC = 1.0). 
        <strong>AUC is that percentage.</strong> It describes how well your model separates the two groups, regardless of how many artists are in the room. It is the "All-Weather" grade of your model’s intelligence.
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
        <strong>AUC is that percentage. It describes how well your "Chemistry Test" (Model) separates the two groups.</strong> 
      </div>
    </div>

    <h2 id="algorithm">The AUC Calculation</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Separation Power</h2>
    
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
          AUC is the <strong>Universal Grade</strong>. Unlike Accuracy, it doesn't care if your dataset is imbalanced (e.g., 99% Artists). It only cares about the "Ranking." If you want to know if one model is objectively better than another, ignore the accuracy and compare their <strong>AUC</strong>.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
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
      <strong>Next Step:</strong> you’ve mastered the metrics of truth. Now, apply them to the first major pillar of ML: <strong><a href="#/machine-learning/supervised-learning/regression-intro">Supervised Learning</a></strong>.
    </div>
  `
};


