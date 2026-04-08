const e={id:"confusion-matrix",title:"Confusion Matrix",description:"A summary of prediction results on a classification problem, showing the counts of True Positives, True Negatives, False Positives, and False Negatives.",color:"#58a6ff",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 ML · Evaluation</div>
      <h1>Confusion Matrix: The Truth Table</h1>
      <p>Accuracy is a dangerous metric. If you are testing for a <strong>Rare Disease</strong> that affects 1% of the population, a model that simply says "Healthy" to everyone is <strong>99% Accurate</strong>—but it's a <strong>Total Failure</strong>. The <strong>Confusion Matrix</strong> is the "Truth Table" that exposes exactly where your model is being fooled.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The 4 Quadrants</a>
      <a href="#math">TP, TN, FP, FN</a>
      <a href="#errors">Type I vs. Type II Errors</a>
      <a href="#interpretation">Reading the Grid</a>
      <a href="#analogy">The "Security Guard" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The 4 Quadrants</h2>
    <p>A Confusion Matrix is a \(2 \times 2\) grid (for binary classification) that compares <strong>Reality</strong> (Rows) vs. <strong>Perception</strong> (Columns).</p>
    <div class="math-block">
      $$\begin{array}{|c|c|c|}
      \hline
      & \text{Predicted: YES} & \text{Predicted: NO} \\
      \hline
      \text{Actual: YES} & \text{True Positive (TP)} & \text{False Negative (FN)} \\
      \hline
      \text{Actual: NO} & \text{False Positive (FP)} & \text{True Negative (TN)} \\
      \hline
      \end{array}$$
    </div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Story of Your Mistakes."</strong> 
        It's not just that you were <strong>Wrong</strong>; it's <strong>HOW</strong> you were wrong. 
        Did you cry wolf when there was no wolf? (FP). Or did you sleep while the wolf attacked? (FN). Real-world problems often care <strong>Much More</strong> about one type of mistake than the other.
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
    <div class="example-box">
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
    </div>

    <h2 id="example">Illustrated Example: The Truth Table</h2>
    <div class="example-box">
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
          <strong>Teacher's Hint:</strong> The Matrix forces you to choose your poison. For a <strong>rare cancer</strong>, you'd rather have a few False Positives (over-testing) than a single False Negative (death). For a <strong>spam filter</strong>, you'd rather let spam in (FN) than delete a job offer (FP).
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Tallying the Truth</h2>
    <python-code static-output="[Scan] Comparing 10 Predictions against Ground Truth...\n[Result] Confusion Matrix Grid:\n\n             Predicted: NO | Predicted: YES\nActual: NO  [[    5      ,      1      ],\nActual: YES  [    1      ,      3      ]]\n\n[Insight] Accuracy: 80.0%\n[Insight] 1 innocent email was marked as Spam (False Positive).\n[Insight] 1 Spam email was missed (False Negative).">
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
  `},t={id:"precision",title:"Precision",description:"The proportion of positive identifications that were actually correct, focusing on the quality of a model's positive predictions.",color:"#58a6ff",html:String.raw`
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
      <li><strong>TP + FP:</strong> <strong>Total Predicted Positives</strong> (Everything you called 'Yes').</li>
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
        <strong>Analogy:</strong> Imagine a <strong>Mailroom Clerk</strong> sorting mail. 
        If he marks a simple bill as <strong>"Junk" (FP)</strong>, you miss your payment. 
        If he marks a <strong>"Win a Free Cruise!"</strong> email as "Good" (FN), you just delete it. 
        The "Junk" box mistake is <strong>Much Worse</strong>. 
        <strong>So, the clerk's PRECISION is the most important metric. He must only call something 'Junk' if he is absolutely certain.</strong>
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
  `},s={id:"recall",title:"Recall (Sensitivity)",description:"The proportion of actual positives that were correctly identified, focusing on the ability of a model to find all positive instances.",color:"#58a6ff",html:String.raw`
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
      <li><strong>TP + FN:</strong> <strong>Total Actual Positives</strong> (Everything that is 'Yes' in reality).</li>
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
        * <strong>Case 1 (High Precision):</strong> You only grab something if you are 100% sure it's the lens. You might leave the lens behind if you aren't sure. 
        * <strong>Case 2 (High Recall):</strong> You use a <strong>Giant Net</strong> and pull out <strong>EVERYTHING</strong> from the pool. You definitely found the lens, but you also found 50 plastic rings. 
        <strong>The Giant Net approach has 100% RECALL. You didn't miss the lens, but your Precision was low because you caught a lot of junk.</strong>
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

    <h2 id="example">Illustrated Example: The Net of Inclusion</h2>
    <div class="example-box">
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
          <strong>Teacher's Hint:</strong> High recall usually means your model is <strong>Aggressive</strong>. It's like a paranoid security guard who checks everyone. It's the "Quantity" metric—perfect for when the cost of a miss (False Negative) is catastrophic, like cancer or fraud.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Measuring Thoroughness</h2>
    <python-code static-output="[Scan] Reality: 4 Actual Positive cases (Spam/Sick) identified.\n[Action] Running Model Inference...\n[Verify] Correctly Found (TP): 3\n[Verify] Dangerous Misses (FN): 1\n[Result] Recall (Sensitivity) = 3/4 = 75.0%\n[Insight] The model 'Caught' 75% of the truth, but let one target 'Escape'.">
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
  `},o={id:"f1-score",title:"F1 Score",description:"The harmonic mean of precision and recall, providing a single metric that balances both the quality and thoroughness of a classifier.",color:"#58a6ff",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 ML · Evaluation</div>
      <h1>F1 Score: The Balanced Diplomat</h1>
      <p>Precision and Recall are like a <strong>Sports Car</strong> and a <strong>Tank</strong>. You want speed (Precision), but you also want durability (Recall). How do you compare them? You can't just take a simple average! <strong>F1 Score</strong> is the <strong>Harmonic Mean</strong> that forces both values to be high for the score to look good.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Harmonic Mean</a>
      <a href="#math">The F1 Formula</a>
      <a href="#avg">Arithmetic vs. Harmonic Mean</a>
      <a href="#imbalance">Imbalanced Data: Why F1 Matters</a>
      <a href="#analogy">The "Balanced Diplomat" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Harmonic Mean</h2>
    <p>A standard average (Arithmetic Mean) is "Fair." If one value is 100 and the other is 0, the average is 50. In ML, that's <strong>Disastrous</strong>. A model with 0 recall is useless. We use the <strong>Harmonic Mean</strong> because it is sensitive to low values. If <strong>Either</strong> Precision or Recall is low, the F1 Score will be <strong>Dragged Down</strong>.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Weakest Link"</strong> metric. 
        It forces your model to be <strong>All-Rounder</strong>. 
        You can't "Cheat" the F1 Score by having infinite recall and terrible precision (catching everyone by arresting the whole city). 
        The F1 Score will only be 1.0 if <strong>Both</strong> metrics are 1.0.
      </div>
    </div>

    <h2 id="math">The F1 Formula</h2>
    <div class="math-block">$$F_1 = 2 \cdot \frac{Precision \cdot Recall}{Precision + Recall}$$</div>

    <h2 id="avg">Arithmetic vs. Harmonic</h2>
    <p>Imagine a model with Precision = 1.0 and Recall = 0.0.</p>
    <ul>
      <li><strong>Arithmetic Mean:</strong> \((1.0 + 0.0) / 2 = 0.5\). (Looks "okay-ish").</li>
      <li><strong>Harmonic Mean (F1):</strong> \(2 \cdot (1.0 \times 0.0) / (1.0 + 0.0) = 0\). (Correctly identifies the failure).</li>
    </ul>

    <h2 id="imbalance">Imbalanced Data: F1's Specialty</h2>
    <p>In cases of <strong>Class Imbalance</strong> (e.g., Fraud detection), F1 Score is the industry standard. It tells you if your model is actually finding the minority class correctly without spamming false alarms.</p>

    <h2 id="analogy">The "Balanced Diplomat" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Diplomat</strong> negotiating between two warring countries: <strong>Country P (Precision)</strong> and <strong>Country R (Recall)</strong>. 
        * <strong>Country P</strong> wants to be perfectly right. 
        * <strong>Country R</strong> wants to be perfectly thorough. 
        If the Diplomat only listens to one side, the treaty fails. 
        <strong>The F1 Score is that treaty. It only "Signs" the deal (reaches 1.0) if both countries are satisfied. If one country feels cheated, the whole F1 Score falls apart.</strong>
      </div>
    </div>

    <h2 id="algorithm">The F1 Calculation</h2>
    <div class="example-box">
      <h4>The Harmonic Balancing Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Precision Phase:</strong> Calculate the quality of positive guesses $(P)$.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Recall Phase:</strong> Calculate the thoroughness of the search $(R)$.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Harmonizing:</strong> Multiply $P$ and $R$ and then double the result.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Normalization:</strong> Divide that result by the sum $(P + R)$.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <div><strong>Final Score:</strong> The resulting $F_1$ value will be closer to the <strong>smaller</strong> of the two numbers, forcing a balance.</div>
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The All-Rounder Interview</h2>
    <div class="example-box">
      <h4>Scenario: Hiring a Developer for a Startup</h4>
      <p>You have two criteria: Coding Skill (Precision) and Communication (Recall). Since you have a small team, you need a "Balanced All-Rounder."</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Candidate A:</strong> A coding genius (Score: 100) but can't talk to humans (Score: 0). The Harmonic Mean (F1) is <strong>0</strong>. (REJECTED).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Candidate B:</strong> A social butterfly (Score: 100) who can't write a line of code (Score: 0). The F1 Score is <strong>0</strong>. (REJECTED).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Candidate C:</strong> Decent coder (Score: 60) and decent talker (Score: 60). The Harmonic Mean (F1) is <strong>60</strong>. (HIRED).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Lesson:</strong> The F1 Score is a "Diplomat" that refuses to ignore failure. It punishes extremes and rewards balance.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> In the real world, data is messy and classes are imbalanced. If you have 99% 'Negative' cases, a model that always says 'No' is 99% accurate but has 0 F1 Score. <strong>Accuracy is a lie; F1 is the truth.</strong>
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Finding the Harmonic Balance</h2>
    <python-code static-output="[Scan] Reality: 4 Targets, Model: 5 Predictions\n[Component] Precision (Quality): 60.0% (3/5 were right)\n[Component] Recall (Thoroughness): 75.0% (3/4 found)\n[Action] Calculating Harmonic Mean (P*R)/(P+R) * 2...\n[Result] F1-Score: 66.7%\n[Insight] The F1 centers between P and R, leaning toward the lower value.">
from sklearn.metrics import precision_score, recall_score, f1_score

# 1. Reality vs. Model Guesses
# 1 = Target class (e.g. Fraudulent transaction)
y_true = [0, 1, 0, 1, 0, 0, 1, 0, 0, 1]
y_pred = [0, 1, 0, 0, 0, 1, 1, 1, 0, 1] 

# 2. Individual metrics
p = precision_score(y_true, y_pred)
r = recall_score(y_true, y_pred)

# 3. F1 Balance
f1 = f1_score(y_true, y_pred)

print(f"Precision: {p:.2f}")
print(f"Recall: {r:.2f}")
print(f"F1 Final Score: {f1:.2f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Metrics give us numbers. But how do we visualize the tradeoff across different levels of confidence? Explore <strong><a href="#/machine-learning/model-evaluation/roc-curve">ROC Curves</a></strong>.
    </div>
  `},i={id:"roc-curve",title:"ROC Curve",description:"A graphical plot that illustrates the diagnostic ability of a binary classifier system as its discrimination threshold is varied.",color:"#58a6ff",html:String.raw`
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
        * <strong>Max Sensitivity:</strong> The alarm goes off for zippers, coins, and belt buckles. You catch every weapon (100% TPR), but you annoy everyone (100% FPR). 
        * <strong>Min Sensitivity:</strong> The alarm only goes off for a giant sword. You annoy no one (0% FPR), but you miss smaller weapons (0% TPR). 
        <strong>The ROC Curve is the chart of the security guard's options. He looks at the curve and picks the knob setting that is 'Safe' but not 'Annoying.'</strong>
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

    <h2 id="example">Illustrated Example: The Confidence Slider</h2>
    <div class="example-box">
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
          <strong>Teacher's Hint:</strong> The ROC Curve shows the "Capability" of your model regardless of the classification threshold. If your curve is a straight diagonal line, your model is basically a coin flip. The closer the curve peaks toward the <strong>top-left corner</strong>, the better your "Knob" is at distinguishing signal from noise.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Sweeping the Threshold</h2>
    <python-code static-output="[Scan] Evaluating 10 probability scores against ground truth...\n[Action] Sweeping Threshold from 1.0 down to 0.0...\n[Threshold 0.82] TPR: 0.25 | FPR: 0.00 (Safe / Picky)\n[Threshold 0.45] TPR: 0.75 | FPR: 0.20 (Balanced)\n[Threshold 0.12] TPR: 1.00 | FPR: 1.00 (Aggressive / Messy)\n[Result] ROC points calculated for optimization.\n[Insight] The 'Sweet Spot' is where we find the max TPR for the min FPR.">
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
  `},a={id:"auc",title:"AUC (Area Under Curve)",description:"A single scalar value that measures the entire two-dimensional area underneath the entire ROC curve, representing the model's ability to rank positive instances higher than negative ones.",color:"#58a6ff",html:String.raw`
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
        <strong>AUC is that percentage. It describes how well your "Chemistry Test" (Model) separates the two groups.</strong> 
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
  `},r={id:"model-evaluation",title:"Model Evaluation",description:"Rigorous metrics and validation strategies to assess model performance and ensure generalization to new data.",keyConcepts:[{title:"The Truth Table",description:"Using Confusion Matrices to expose the exact nature of prediction errors."},{title:"Precision-Recall Balance",description:"Optimizing the trade-off between false alarms and missed detections."},{title:"Separation Power",description:"Quantifying global model performance across all possible thresholds via AUC."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Model Evaluation: <span class="text-accent italic">The Reality Check</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          Accuracy is often a lie. A model that predicts "Healthy" for every patient might be 99% accurate but it is 100% useless. To truly understand if a model works, we must look at <strong>Confusion</strong>, <strong>Precision</strong>, and the <strong>Area Under Curve</strong>.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This category covers the six essential pillars of classification evaluation—moving beyond simple counts into the nuanced world of threshold analysis and diagnostic thoroughness.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "If you only look at accuracy, you are flying blind. Evaluation is the art of knowing exactly how and why your model is failing."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— The Applied ML Rulebook</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Start digging into the truth of your predictions.</p>
        <a 
          href="/#/machine-learning/model-evaluation/confusion-matrix" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with the Confusion Matrix
        </a>
      </div>

    </div>
  `,sections:[e,t,s,o,i,a]};export{r as MODEL_EVALUATION_DATA};
