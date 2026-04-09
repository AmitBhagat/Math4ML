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
      <p>The **F1 Score** is a single-number measure of classification performance that reconciles the trade-off between Precision ($P$) and Recall ($R$). It is defined as the harmonic mean of the two:</p>
      <div class="math-block">
        $$F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$$
      </div>
      <p>The mathematical properties that make F1 superior to a simple average include:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Sensitivity to Extremes</strong>: The harmonic mean is closer to the minimum of the two values. If either $P$ or $R$ drops to zero, the $F_1$ score drops to zero, correctly signaling a total failure of the model.</li>
        <li><strong>Robustness to Skew</strong>: In imbalanced datasets where one class dominates, F1 measures performance on the "Case of Interest" (the positive class) without being inflated by the "Easy" negative predictions.</li>
        <li><strong>Generalized Form ($F_\beta$)</strong>: The score can be weighted to emphasize one metric over the other using a $\beta$ parameter:
          $$F_\beta = (1 + \beta^2) \cdot \frac{P \cdot R}{(\beta^2 \cdot P) + R}$$
        </li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Use $F_1$ when you need a balanced representative of both model purity and model completeness.</p>
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

