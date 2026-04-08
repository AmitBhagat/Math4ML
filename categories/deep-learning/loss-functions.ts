import { TopicSection } from '../../src/data/types';

export const lossFunctionsSection: TopicSection = {
  id: "loss-functions",
  title: "Loss Functions",
  description: "The mathematical 'yardsticks' that measure how well (or poorly) a neural network's predictions match the true reality.",
  color: "#e3b341",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Components</div>
      <h1>Loss Functions: The Moral Compass</h1>
      <p>How do we tell a machine it is failing? We need a single number that represents the <strong>Magnitude of its Error</strong>. <strong>Loss Functions</strong> (or Cost Functions) are the mathematical judges that penalize wrong predictions. The goal of all Gradient Descent is to find the bottom of this "Loss Valley."</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Error Surface</a>
      <a href="#regression">Regression: Mean Squared Error (MSE)</a>
      <a href="#classification">Classification: Cross-Entropy</a>
      <a href="#log-loss">Log-Loss: Penalizing Confidence</a>
      <a href="#analogy">The "Moral Compass" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Error Surface</h2>
    <p>Loss functions define a <strong>Higher-Dimensional Surface</strong>. If your parameters are perfect, you are at the <strong>Global Minimum</strong> (Zero Loss). If you are wrong, the loss value is high. Gradient Descent "Rolls" the ball down the slope of this surface to reach the bottom.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Price of Failure."</strong> 
        Different problems have <strong>different penalties</strong>. 
        If you miss a <strong>House Price</strong> by \$1,000, that's okay. 
        If you are <strong>100% Confident</strong> that a Dog is a Cat, the penalty should be massive. The type of loss tells the machine <strong>what matters</strong>.
      </div>
    </div>

    <h2 id="regression">Mean Squared Error (MSE)</h2>
    <p>Used for Regression. It calculates the <strong>Average of the Squared Differences</strong> between the true value $y$ and predicted $\hat{y}$.</p>
    <div class="math-block">$$MSE = \frac{1}{n} \sum_{i=1}^n (y_i - \hat{y}_i)^2$$</div>
    <p>**The Gotcha:** Squaring the error makes <strong>Large Mistakes</strong> much more expensive than small ones. This forces the model to ignore small noise and focus on big outliers.</p>

    <h2 id="classification">Cross-Entropy Loss (Log-Loss)</h2>
    <p>Used for Classification. It measures the <strong>Distance between Probabilities</strong>. If the model predicts a 10% chance of a "Spam" email when it is actually Spam, the loss is huge.</p>
    <div class="math-block">$$L = -\sum y_i \log(\hat{y}_i)$$</div>
    <p><strong>Log-Loss:</strong> Penalizes the model <strong>Exponentially</strong> for being "Confidently Wrong." If you say 99.9% but are wrong, the Log-Loss will destroy your gradient.</p>

    <h2 id="example">Illustrated Example: The Coach's Rulebook</h2>
    <div class="example-box">
      <h4>Scenario: Training an Athlete for the Olympics</h4>
      <p>The **Loss** is the punishment for a bad result. The 'Judge' (Loss Function) chooses the penalty.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Regression (MSE):</strong> A long jumper misses the mark by 10cm. The coach says: "10 pushups." If they miss by 50cm, the coach screams: "2,500 pushups!" Squaring the error ensures big mistakes are heavily punished.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Sensitivity:</strong> MSE ignores tiny wobbles but becomes obsessed with <strong>Outliers</strong>. It's the "Aggressive" judge.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Classification (Cross-Entropy):</strong> The runner is 100% confident they will win, but they finish last. This is the ultimate "Sin." Cross-Entropy punishes <strong>Confident Failure</strong> exponentially.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Winner:</strong> The athlete adjusts their form to minimize these "Physical Penalties."</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Picking the wrong loss is like a coach training a swimmer for a marathon. The math will run, but the results will be a disaster. <strong>MSE for Regression, Cross-Entropy for Classification.</strong> Period.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Error Calculations</h2>
    <python-code static-output="[Scan] Evaluating 3 test cases...\n[Regression] MSE (True 100, Pred 150): 2500.0\n[Classification] Cross-Entropy (Confident Wrong - 0.1): 2.30\n[Classification] Cross-Entropy (Hesitant Wrong - 0.4): 0.91\n[Insight] Notice how the penalty for a 0.1 guess is 2.5x higher than a 0.4 guess. Confidence kills models!">
import numpy as np

# 1. Mean Squared Error (Distance based)
def mse_loss(y_true, y_pred):
    return (y_true - y_pred)**2

# 2. Binary Cross-Entropy (Probability based)
def bce_loss(y_true, y_pred_prob):
    # Log-Loss formula
    return -(y_true * np.log(y_pred_prob) + (1 - y_true) * np.log(1 - y_pred_prob))

# Test Data
print(f"MSE Penalty: {mse_loss(100, 150)}")
print(f"BCE Penalty (0.1 prob): {bce_loss(1, 0.1):.3f}")
print(f"BCE Penalty (0.9 prob): {bce_loss(1, 0.9):.3f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> We built the components. Now how do we arrange them into powerful configurations? Explore <strong><a href="#/machine-learning/deep-learning/architectures-intro">Deep Learning Architectures</a></strong>.
    </div>
  `
};
