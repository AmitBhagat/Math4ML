import { TopicSection } from '../../src/data/types';

export const logisticRegressionSection: TopicSection = {
  id: "logistic-regression",
  title: "Logistic Regression",
  description: "Logistic Regression is used for binary classification, predicting the probability of an input matching a specific outcome.",
  color: "#58a6ff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Probability</div>
      <h1>Logistic Regression</h1>
      <p>Wait—if it's classification, why is it called <strong>"Regression"</strong>? Because we start by predicting a continuous number (the log-odds) and then <strong>"Squash"</strong> it into a probability between 0 and 1. It is the gold standard for **Binary Decisions**.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">The Sigmoid: The Probability Filter</a>
      <a href="#loss">Log-Loss: The Penalty for Being Wrong</a>
      <a href="#decision">The Decision Threshold</a>
      <a href="#analogy">The "Water Filter" Analogy</a>
    </div>

    <h2 id="theory">The Sigmoid: The Probability Filter</h2>
    <p>In Linear Regression, your output can be anything (-\(\infty\) to \(\infty\)). That doesn't work for probability. To fix this, we pass the linear output \(z = wx + b\) through the <strong>Sigmoid Function</strong>:</p>
    <div class="math-block">$$\sigma(z) = \frac{1}{1 + e^{-z}}$$</div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Commitment."</strong> 
        The linear part \(z\) is very "Wobbly"—it moves up and down. The Sigmoid is the <strong>S-Curve</strong> that says: "Anything above 0, I'm leaning toward 1 (Yes). Anything below 0, I'm leaning toward 0 (No)." It's the <strong>Soft Fence</strong>.
      </div>
    </div>

    <h2 id="loss">Log-Loss: The Penalty for Being Wrong</h2>
    <p>In classification, we don't use MSE. Because the Sigmoid is non-linear, MSE would lead to a "Bumpy" loss surface. Instead, we use <strong>Binary Cross-Entropy (Log Loss)</strong>:</p>
    <div class="math-block">$$Loss = -\frac{1}{n} \sum [y \log(\hat{y}) + (1-y) \log(1-\hat{y})]$$</div>
    <p><strong>Note:</strong> This loss function is <strong>BRUTAL</strong>. If the model is 99.9% confident that a picture is a Cat, but it's actually a Dog, the penalty is nearly <strong>Infinite</strong>. It forces the model to be honest about its uncertainty.</p>

    <h2 id="decision">The Decision Threshold</h2>
    <div class="example-box">
      <h4>Scenario: Email Filter</h4>
      <p>The model outputs **0.85** from the Sigmoid.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Threshold:</strong> Usually 0.5. Anything \(\ge 0.5\) is Spam. Anything \(< 0.5\) is Not Spam.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Logic:</strong> You can tune this! If you are a <strong>Doctor</strong>, you might set the threshold to 0.1 because you'd rather have a **False Positive** than a **False Negative**.</div>
        </div>
      </div>
    </div>

    <h2 id="analogy">The "Water Filter" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are <strong>Filtering Water</strong>. 
        Raw data (Unfiltered water) is very messy. The Linear model (\(wx + b\)) is your <strong>Pipe</strong>—it moves the water. 
        The **Sigmoid Function** is the <strong>Filter Membrane</strong>. 
        It only lets the "Pure" results through. If the water has enough "Signal" to overcome the membrane's resistance, it comes out as <strong>Clean (1)</strong>. If not, it stays <strong>Dirty (0)</strong>. 
        The "Threshold" is you deciding <strong>how clean</strong> the water has to be before you drink it.
      </div>
    </div>

    <h2 id="algorithm">The Logistic Regression Algorithm</h2>
    <div class="example-box">
      <h4>Probability Mapping</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Linear Mapping:</strong> Calculate $z = w_1x_1 + w_2x_2 + \dots + w_nx_n + b$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Log-Odds Squashing:</strong> Pass $z$ through the Sigmoid function: $\hat{y} = \frac{1}{1 + e^{-z}}$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Error Measurement:</strong> Use Binary Cross-Entropy Loss to compare the predicted probability $\hat{y}$ with the true label $y$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Gradient Update:</strong> Use Gradient Descent to adjust $w$ and $b$ until the loss is minimized.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Thresholding:</strong> Convert the final probability $\hat{y}$ into a label (e.g., if $\hat{y} > 0.5$, class = 1).
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Squeezed Tube of Truth</h2>
    <div class="example-box">
      <h4>Scenario: Predicting if a Gym Member will Churn</h4>
      <p>Imagine your linear prediction is a long, infinite pipe. You need to squash it into a 0-to-1 probability tube.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Linear Score (z):</strong> A member visits 0 times/week. The linear formula says: $z = 10 \times (Months) - 50 \times (Visits) = 5.0$.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Sigmoid Squash:</strong> We pass 5.0 through the S-curve. It comes out as **0.993**.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Decision:</strong> Since 0.993 > 0.5, we are extremely confident this person is about to cancel.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Outcome:</strong> You send them a "Free Shake" coupon to keep them! Logistic regression just saved a customer.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Logistic Regression is the <strong>Basis of Neural Networks</strong>. A single neuron in a brain-like model is often just a logistic regression unit! It's the simplest "Switch" in AI.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Sigmoid Mapping</h2>
    <python-code static-output="[Internal] Linear Score (z) for input: 2.12\n[Sigmoid] Squashing 2.12 into probability space...\n[Result] Probability of Churn: 89.1%\n[Decision] Predicted Class: 1 (Churn)\n[Insight] As visits per week DROPPED, the Sigmoid score CLIMBED.">
import numpy as np
from sklearn.linear_model import LogisticRegression

# 1. Dataset: [Visits_Per_Week, Membership_Months]
X = np.array([[5, 12], [0, 24], [4, 6], [1, 2]])
y = np.array([0, 1, 0, 1]) # 1 = Left (Churned), 0 = Stayed

# 2. Train the Model
model = LogisticRegression()
model.fit(X, y)

# 3. New Customer (Visits 1 time/week, Joined 12 months ago)
new_customer = np.array([[1, 12]])
prob = model.predict_proba(new_customer)[0]

print(f"Prob. of Staying: {prob[0]:.2%}")
print(f"Prob. of Churning: {prob[1]:.2%}")
print(f"Final Decision: {'Churn' if prob[1] > 0.5 else 'Stay'}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we use Probability in a more "Natural" way? Explore <strong><a href="#/machine-learning/supervised-learning/naive-bayes">Naive Bayes Classification</a></strong>.
    </div>
  `
};
