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

    <h2 id="example">Illustrated Example: The Grading Machine</h2>
    <p>Imagine you have a machine that grades <strong>Math Tests</strong> across the whole country. You want to know if the test is "Fair" or just "Luck."</p>
    <ul>
      <li><strong>The Experiment:</strong> You pick one student who actually <strong>knows math</strong> and one student who <strong>doesn't</strong>. </li>
      <li><strong>The Question:</strong> What is the chance the machine gives the "Knowledgeable" student a higher score? </li>
    </ul>
    <p>If the test is just random noise, the chance is 50% (AUC = 0.5). If the test is perfectly designed, the chance is 100% (AUC = 1.0). <strong>AUC is the quality score for the test itself, not for any single student.</strong></p>

    <h2 id="python">Python Implementation</h2>
    <div class="code-block">
      <pre><code class="language-python">
from sklearn.metrics import roc_auc_score
import numpy as np

# 1. Probabilities and Actual Labels
y_true = [0, 1, 0, 1, 1, 0, 1]
y_scores = [0.1, 0.4, 0.35, 0.8, 0.9, 0.2, 0.95]

# 2. Compute the ROC-AUC Score
auc = roc_auc_score(y_true, y_scores)

print(f"Model AUC Grade: {auc:.2f}")
# A score of 0.9+ signals excellent separation power.
      </code></pre>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have mastered the metrics of prediction. Now, let's look at how to prep and "Clean" your raw datasets in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
    </div>
  `
};
