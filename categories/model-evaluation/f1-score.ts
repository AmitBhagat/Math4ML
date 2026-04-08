import { TopicSection } from '../../src/data/types';

export const f1ScoreSection: TopicSection = {
  id: "f1-score",
  title: "F1 Score",
  description: "The harmonic mean of precision and recall, providing a single metric that balances both the quality and thoroughness of a classifier.",
  color: "#58a6ff",
  html: String.raw`
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
    <p>A standard average (Arithmetic Mean) is "Fair." If one value is 100 and the other is 0, the average is 50. In ML, that's <strong>Disastrous</strong>. A model with 0 recall is useless. We use the **Harmonic Mean** because it is sensitive to low values. If <strong>Either</strong> Precision or Recall is low, the F1 Score will be <strong>Dragged Down</strong>.</p>
    
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
        <strong>Analogy:</strong> Imagine a <strong>Diplomat</strong> negotiating between two warring countries: **Country P (Precision)** and **Country R (Recall)**. 
        * **Country P** wants to be perfectly right. 
        * **Country R** wants to be perfectly thorough. 
        If the Diplomat only listens to one side, the treaty fails. 
        **The F1 Score is that treaty. It only "Signs" the deal (reaches 1.0) if both countries are satisfied. If one country feels cheated, the whole F1 Score falls apart.**
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
    <p>Imagine you are hiring a <strong>Lead Developer</strong>. You have two criteria:</p>
    <ul>
      <li><strong>Criterion 1:</strong> Coding Skill (Precision).</li>
      <li><strong>Criterion 2:</strong> Communication Skill (Recall).</li>
    </ul>
    <p>If a candidate is a <strong>Genius Coder</strong> but can't talk to humans, they fail. If they are a <strong>Great Communicator</strong> but can't write a line of code, they fail. You need someone with a high <strong>F1 Score</strong>—someone who is competent in <strong>Both</strong>. A candidate with a score of 95 in one and 5 in the other results in a terrible F1, while two 50s results in a decent F1. <strong>F1 Score is the hiring manager of ML.</strong></p>

    <h2 id="python">Python Implementation</h2>
    <div class="code-block">
      <pre><code class="language-python">
from sklearn.metrics import f1_score
import numpy as np

# 1. High-tension predictions
y_true = [0, 1, 0, 1, 1, 0, 1]
y_pred = [0, 1, 0, 0, 1, 1, 1] # A mix of FN and FP

# 2. Calculate F1
f1 = f1_score(y_true, y_pred)

print(f"F1 Score (Balanced): {f1:.2f}")
# The result accounts for both accuracy and missed targets.
      </code></pre>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> Metrics give us numbers. But how do we visualize the tradeoff across different levels of confidence? Explore <strong><a href="#/machine-learning/model-evaluation/roc-curve">ROC Curves</a></strong>.
    </div>
  `
};
