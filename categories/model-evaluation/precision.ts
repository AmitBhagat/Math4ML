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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Precision is the metric of <strong>Credibility</strong>. It asks a simple, brutal question: "Of all the times you yelled 'Positive!', how many were actually right?" If your spam filter marks an email as junk, <strong>Precision</strong> measures how much you can trust that decision. If your model is a "False Prophet"—constantly sounding the alarm when nothing is wrong—its precision will be miserably low. Precision ignores what you correctly ignored (True Negatives) and only focuses on the quality of your <strong>Actions</strong>. It is the tactical choice to prioritize the "Quality" of your hits over the "Quantity." High precision usually means your model is conservative, preferring to stay quiet rather than making a mistake.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Positive Predictive Value (PPV) & Prediction Purity</div>
      <p>Precision is the metric of "Credibility." It asks a simple, brutal question: Of all the times you yelled 'Positive!', how many times were you actually right?</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine you are a prospector panning for gold in a rushing river. You scoop up a pan full of dirt, silt, and pebbles. <strong>Precision</strong> is the ratio of actual gold nuggets you found to the total amount of "stuff" in your pan. Geometrically, it is a <strong>Venn Diagram</strong> of Overlap: it measures the intersection of your predictions with the ground truth, but it scales that intersection by the size of your *Predicted Positive* circle. It ignores everything you correctly ignored (True Negatives) and only judges the quality of your *Actions*. It is the metric of purity—it tells you how much of your "Signal" is actually "Truth."</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>Precision is formally known as the <strong>Positive Predictive Value (PPV)</strong>. It is defined as the conditional probability that a sample is positive given that the model predicted it as positive:</p>
      <div class="math-block">
        $$\text{Precision} = \mathbb{P}(y=1 \mid \hat{y}=1)$$
      </div>
      <p>Using the tallies from the confusion matrix, we calculate it as:</p>
      <div class="math-block">
        $$\text{Precision} = \frac{TP}{TP + FP}$$
      </div>
      <p>A model with high precision is often described as <strong>Conservative</strong> or <strong>Callous</strong>. It only says "Yes" when it is extremely sure. By raising your classification threshold (being "stricter"), you essentially shrink your "Predicted Positive" circle, which reduces False Positives and boosts Precision—but it usually costs you in terms of Recall.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Model Evaluation, Precision is the <strong>Commitment Test</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Quality over Quantity</strong>: High precision guarantees that your "Positive" labels are trustworthy, even if you miss many positive instances.</li>
        <li><strong>Cost of Error</strong>: Precision is the king of metrics when the cost of a "False Alarm" is high. If you're a judge deciding a sentence, you want precision to be $100\%$. You'd rather let a guilty person go than put an innocent one in jail.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Precision Blindness. You can have $100\%$ precision by predicting "Positive" for only the single most obvious sample in the entire dataset and ignoring the other 9,999. In this case, your model is perfectly "Right" but functionally useless because it has no coverage.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Precision as <strong>"The Reliability Score"</strong> or <strong>"The Honest Mailroom Clerk."</strong> 
        Imagine a clerk sorting mail. If he pulls out an envelope and yells "Urgent!", and it turns out to be a random coupon (a False Positive), his credibility drops. If he only yells "Urgent!" when there is a time-sensitive check inside, his precision is elite. 
        Precision is about <strong>Not being a False Prophet</strong>. It is perfect for situations where the cost of a mistake—like sending an innocent person to jail or blocking a harmless video—is devastatingly high.
      </div>
    </div>

    <h2 id="use-case">When Precision is King</h2>
    <p>Precision is the most important metric when the <strong>Cost of a False Positive is HIGH</strong>.</p>
    <ul>
      <li><strong><span class="text-green-premium font-bold">Case Study:</span> </strong> Sentencing someone to prison. If you are wrong (FP), an innocent person goes to jail. Precision must be <strong>Near 100%</strong>.</li>
      <li><strong><span class="text-green-premium font-bold">Case Study:</span> </strong> Content Moderation. If you block a harmless YouTube video (FP), the creator loses income. </li>
    </ul>

    <h2 id="analogy">The "Email Spam Filter" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Mailroom Clerk</strong> sorting mail. 
        If he marks a simple bill as <strong>"Junk" (FP)</strong>, you miss your payment. 
        If he marks a <strong>"Win a Free Cruise!"</strong> email as "Good" (FN), you just delete it. 
        The "Junk" box mistake is <strong>Much Worse</strong>. 
        <strong>So, the clerk's PRECISION is the most important metric. He must only call something 'Junk' if he is absolutely certain.</strong>
      </div>
    </div>

    <h2 id="algorithm">The Precision Calculation</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Honest Witness</h2>
    
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
          High precision usually means your model is <strong>Conservative</strong>. It's like a witness who only speaks when they are 100% sure. It's the "Quality" metric—perfect for when the cost of a mistake (False Positive) is high.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
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


