import { TopicSection } from '../../src/data/types';

export const gradientBoostingSection: TopicSection = {
  id: "gradient-boosting",
  title: "Gradient Boosting",
  description: "An ensemble technique that builds models sequentially, each one correcting the errors of its predecessor.",
  color: "#4CAF50",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Sequential</div>
      <h1>Gradient Boosting: Learning from Mistakes</h1>
      <p>While <strong>Random Forest</strong> builds trees in parallel (Bagging), <strong>Gradient Boosting</strong> builds them <strong>In Sequence</strong>. Each new tree has one goal: <strong>Fix the Mistakes</strong> of the previous group. It's the most powerful way to extract the "Hard Patterns" from complex data.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Negative Gradients</a>
      <a href="#residuals">Residuals: The Target Shift</a>
      <a href="#learning-rate">Shrinkage: The Learning Rate</a>
      <a href="#analogy">The "Golf Course" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Negative Gradients</h2>
    <p>Think of Gradient Boosting as <strong>Gradient Descent in Function Space</strong>. We have an existing model \(F_{t-1}(x)\). We want a new model \(F_t(x) = F_{t-1}(x) + h_t(x)\) where \(h_t(x)\) minimizes the loss function. The "Answer" to this problem is to make \(h_t(x)\) follow the <strong>Negative Gradient</strong> of the Loss.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Layering the Model."</strong> 
        The first tree makes a <strong>Rough Guess</strong>. 
        The second tree doesn't look at the original data; it looks at the <strong>Error (The Residual)</strong> of the first tree. 
        It says: "I see Tree 1 missed these 10 samples. I'll focus <strong>only</strong> on them." 
        **Boosting** builds a "Tower of Guesses" that get more and more precise.
      </div>
    </div>

    <h2 id="residuals">Residuals: The Target Shift</h2>
    <div class="example-box">
      <h4>Scenario: Predicting Age</h4>
      <p>Target Age: 30. Tree 1 Guess: 22.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Residual:</strong> \(30 - 22 = 8\)</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Tree 2 Goal:</strong> Don't predict 30. **Predict 8**.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Result:</strong> Combine them. \(22 + 8 = 30\). We've reached the Truth by <strong>Incremental Correction</strong>.</div>
        </div>
      </div>
    </div>

    <h2 id="learning-rate">Shrinkage: The Learning Rate</h2>
    <p><strong>The Gotcha:</strong> If you add 100% of the new tree's guess every time, the model will **Overfit** instantly. 
    **Shrinkage** means we only add a tiny fraction (\(\eta = 0.1\)) of the new tree. This is the **Learning Rate**. It forces the model to take 1,000 "Small Steps" toward the truth rather than 10 "Giant Leaps" into chaos.</p>

    <h2 id="analogy">The "Golf Course" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you're playing <strong>Golf</strong>. 
        **Random Forest** is like 10 people hitting 1 ball at the same time and taking the <strong>Average</strong> of where it lands. 
        **Gradient Boosting** is like <strong>One Person playing multiple shots</strong>. 
        * **Shot 1 (Tree 1):** You hit the ball 200 yards. 
        * **Shot 2 (Tree 2):** You don't aim for the pin again from the tee; you look at the <strong>Residual Distance</strong> (remaining 50 yards) and hit a smaller shot. 
        * **Shot 3 (Tree 3):** You look at the final 5 yards and hit a <strong>Putter shot</strong>. 
        **Boosting** is that final, perfect putt.
      </div>
    </div>

    <h2 id="algorithm">The Gradient Boosting Algorithm</h2>
    <div class="example-box">
      <h4>The Iterative Correction Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Initial Guess:</strong> Start with a dumb model (e.g., the average value of all targets).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Residual Calculation:</strong> Calculate the difference between the actual value and the current prediction (the "Mistake").
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Weak Learner:</strong> Build a new Decision Tree to predict those <strong>Mistakes</strong> (Residuals).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Shrink and Update:</strong> Add a small fraction (Learning Rate) of the new tree's guess to the existing model.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Repeat:</strong> Continue until the mistakes are tiny or you reach the tree limit.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Relentless Golf Coach</h2>
    <p>Think of your model as a <strong>Golf Student</strong> and Gradient Boosting as a **Coach** who never stops correcting you.</p>
    <ul>
      <li><strong>The First Swing:</strong> You hit the ball wildly. It lands 100 yards to the left.</li>
      <li><strong>The Correction:</strong> The coach doesn't say "Swing again." He says: "Ignore the ball; just fix the 100-yard mistake."</li>
      <li><strong>The Result:</strong> Next swing is 90% fixed. You keep making smaller and smaller "Corrections" until you are hitting the pin every time. <strong>Boosting is that coach.</strong></li>
    </ul>

    <python-code>
from sklearn.ensemble import GradientBoostingClassifier
import numpy as np

# 1. Complex data: [Feature_A, Feature_B]
X = np.array([[10, 5], [1, 2], [8, 4], [2, 1]])
y = np.array([1, 0, 1, 0])

# 2. Train the 'Student' with 100 trees
model = GradientBoostingClassifier(n_estimators=100, learning_rate=0.1)
model.fit(X, y)

# 3. Predict for a new case
new_case = np.array([[9, 4]])
result = "Positive" if model.predict(new_case)[0] == 1 else "Negative"
print(f"Confidence result: {result}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> How do we take this to the Extremes? Explore <strong><a href="#/machine-learning/supervised-learning/advanced-boosting">XGBoost, LightGBM, and CatBoost</a></strong>.
    </div>
  `
};
