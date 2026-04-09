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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Precision and Recall are like two warring countries in a diplomatic negotiation. Precision wants to be perfectly right (Quality), while Recall wants to be perfectly thorough (Quantity). A simple average of the two is "Fair," but in machine learning, fairness can be disastrous—a model with zero recall is useless, even if it has 100% precision. The <strong>F1 Score</strong> is the <strong>Harmonic Mean</strong> that forces both values to be high for the score to look good. If either metric fails, the F1 score collapses. It is the tactical decision to prioritize balance over extremes, providing a single "Truth" metric that is especially critical when dealing with imbalanced datasets where accuracy is a lie.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Harmonic Mean Reconciliation</div>
      <p>The F1-Score is the "Balanced Diplomat." It is the metric that refuses to ignore a failure in either quality or quantity.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine you are trying to build a bridge across a massive valley. You have two main cables: <strong>Precision</strong> (how correctly you place each bolt) and <strong>Recall</strong> (how much of the gap you actually span). If one cable is perfectly engineered but the other is missing, the bridge collapses. Geometrically, the <strong>F1-Score</strong> is the <strong>Harmonic Mean</strong> of these two cables. It is the "Anchor of Equilibrium." Unlike a regular average, which can be inflated by one strong value, the F1-Score is pulled down by the "Weakest Link." It is the metric of pure, balanced competence.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>The F1-Score is derived from Precision ($P$) and Recall ($R$). We use the harmonic mean because we are dealing with rates and ratios. The reciprocal of the F1-Score is the average of the reciprocals of $P$ and $R$:</p>
      <div class="math-block">
        $$\frac{1}{F_1} = \frac{1}{2} \left( \frac{1}{P} + \frac{1}{R} \right)$$
      </div>
      <p>Rearranging this gives us the familiar formula:</p>
      <div class="math-block">
        $$F_1 = 2 \cdot \frac{P \cdot R}{P + R}$$
      </div>
      <p>Why not use a simple average (Arithmetic Mean)? Because the Arithmetic Mean is too forgiving. If a model has $1.0$ Precision but $0.0$ Recall, the Arithmetic Mean is $0.5$ (passing grade). But a model that finds *zero* actual cases is useless. The Harmonic Mean correctly identifies this as a failure, yielding an F1-Score of $0$.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Model Evaluation, F1 is the <strong>Sanity Test</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Balance Requirement</strong>: To get a high F1-Score, you *must* have both high Precision and high Recall. You cannot "fake" a good score by excelling in only one area.</li>
        <li><strong>Skew Robustness</strong>: For highly imbalanced datasets (e.g., detecting rare fraud), F1 ignores the "Easy" True Negatives and focuses entirely on how well the model handles the positive class.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Precision-Recall Trade-off. You rarely get both for free. Increasing your threshold usually boosts Precision but kills Recall. F1 helps you find the "Nirvana" point where the two are most harmoniously balanced.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of the F1 Score as <strong>"The Balanced Diplomat"</strong> or <strong>"The Weakest Link"</strong> metric. 
        Imagine hiring a developer. You need someone who is a great coder (Precision) AND a great communicator (Recall). Candidate A is a coding genius but can't talk to humans (F1 = 0). Candidate B is a social butterfly who can't write code (F1 = 0). 
        The F1 Score only "Signs" the deal (reaches 1.0) if both skills are high. It punishes the extremes and rewards the all-rounder. <strong>Accuracy is what you tell your boss; F1 is what you tell your lead engineer.</strong>
      </div>
    </div>

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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The All-Rounder Interview</h2>
    
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
          In the real world, data is messy and classes are imbalanced. If you have 99% 'Negative' cases, a model that always says 'No' is 99% accurate but has 0 F1 Score. <strong>Accuracy is a lie; F1 is the truth.</strong>
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
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
  `
};


