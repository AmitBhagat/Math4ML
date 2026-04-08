import { TopicSection } from '../../src/data/types';

export const precisionSection: TopicSection = {
  id: "precision",
  title: "Precision",
  description: "The proportion of positive identifications that were actually correct, focusing on the quality of a model's positive predictions.",
  color: "#58a6ff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 ML · Evaluation</div>
      <h1>Precision: The Quality of Guesses</h1>
      <p>If your model shouts <strong>"SPAM!"</strong> for every email, it's very effective at finding spam—but it also ruins your inbox. <strong>Precision</strong> is the metric that asks: "Of all the times you yelled 'Positive', how many were <strong>Actually</strong> positive?" It's the measure of your <strong>Credibility</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Denominator of Guesses</a>
      <a href="#math">The Precision Formula</a>
      <a href="#false-alarms">Avoiding False Alarms</a>
      <a href="#use-case">When Precision is King</a>
      <a href="#analogy">The "Detective" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Denominator of Guesses</h2>
    <p>Precision focuses <strong>Only</strong> on your positive predictions. It ignores the things you correctly ignored (TN). It only cares about the times you took <strong>Action</strong> and whether that action was <strong>Right</strong>.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Reliability Score."</strong> 
        If you say "Buy this Stock!", and it goes up, your precision is high. 
        If you say "Buy this Stock!", and it crashes, your precision is low. 
        Precision is about <strong>Not being a False Prophet</strong>.
      </div>
    </div>

    <h2 id="math">The Precision Formula</h2>
    <div class="math-block">$$Precision = \frac{TP}{TP + FP}$$</div>
    <ul>
      <li><strong>TP:</strong> True Positives (Correct 'Yes').</li>
      <li><strong>TP + FP:</strong> **Total Predicted Positives** (Everything you called 'Yes').</li>
    </ul>

    <h2 id="use-case">When Precision is King</h2>
    <p>Precision is the most important metric when the <strong>Cost of a False Positive is HIGH</strong>.</p>
    <ul>
      <li><strong>Example 1:</strong> Sentencing someone to prison. If you are wrong (FP), an innocent person goes to jail. Precision must be <strong>Near 100%</strong>.</li>
      <li><strong>Example 2:</strong> Content Moderation. If you block a harmless YouTube video (FP), the creator loses income. </li>
    </ul>

    <h2 id="analogy">The "Email Spam Filter" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a **Mailroom Clerk** sorting mail. 
        If he marks a simple bill as <strong>"Junk" (FP)</strong>, you miss your payment. 
        If he marks a <strong>"Win a Free Cruise!"</strong> email as "Good" (FN), you just delete it. 
        The "Junk" box mistake is <strong>Much Worse</strong>. 
        **So, the clerk's PRECISION is the most important metric. He must only call something 'Junk' if he is absolutely certain.**
      </div>
    </div>

    <h2 id="algorithm">The Precision Calculation</h2>
    <div class="example-box">
      <h4>The Guess Validation Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify Positives:</strong> Filter for all samples where the model predicted "Positive."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Filter True Positives (TP):</strong> Within that group, count how many were actually correct.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Filter False Positives (FP):</strong> within that group, count how many were actually incorrect.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Divide:</strong> Divide the TP by the sum of TP and FP.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <div><strong>Interpret:</strong> A score of 0.95 means every time the model says "Positive", it's right 95% of the time.</div>
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Honest Witness</h2>
    <div class="example-box">
      <h4>Scenario: Declaring "Urgent" Mail in a Mailroom</h4>
      <p>Imagine a clerk sorting 1,000 envelopes. He only wants to mark an envelope as <strong>"Urgent"</strong> if it definitely contains a time-sensitive check. He is a perfectionist.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Action:</strong> Out of the 1,000 envelopes, he only pulls out 10 as "Urgent". (Total Predicted Positives).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Verification:</strong> You open those 10. You find 9 actual checks (True Positives) and 1 random coupon (False Positive).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Math:</strong> Precision = $9 / (9 + 1) = 90\%$. This is his <strong>Credibility Score</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Result:</strong> When this clerk yells "Urgent!", everyone listens because his "Quality" is elite. He'd rather be quiet than be wrong.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> High precision usually means your model is <strong>Conservative</strong>. It's like a witness who only speaks when they are 100% sure. It's the "Quality" metric—perfect for when the cost of a mistake (False Positive) is high.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Calculating Credibility</h2>
    <python-code static-output="[Scan] Analyzing 10 predictions vs. Reality...\n[Status] Total 'YES' predictions: 4\n[Verification] Correct 'YES' (TP): 3\n[Verification] False Alarms (FP): 1\n[Result] Precision = 3/4 = 75.0%\n[Insight] If this model flags an email as Spam, it's correct 75% of the time.">
import numpy as np
from sklearn.metrics import precision_score

# 1. Truth vs. Model Predictions
# 1 = Spam, 0 = Clean
y_true = [0, 1, 0, 1, 0, 0, 1, 0, 0, 1]
y_pred = [0, 1, 0, 0, 0, 1, 1, 0, 0, 1]

# 2. Calculate Precision (TP / (TP + FP))
# Only cares about the 'Quality' of the '1' predictions
precision = precision_score(y_true, y_pred)

print(f"Model Precision Score: {precision:.2%}")

# 3. Manual Check for Clarity
# TP: indices 1, 6, 9 (Correct Spam)
# FP: index 5 (Clean email marked as Spam)
print(f"Credibility: 3 correct out of 4 positive guesses.")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Precision makes us cautious. But what if we are <em>too</em> cautious and miss something important? Explore <strong><a href="#/machine-learning/model-evaluation/recall">Recall</a></strong>.
    </div>
  `
};
