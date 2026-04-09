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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>How do we tell a machine it is failing? We need a single number that captures the <strong>Magnitude of its Mistakes</strong>. <strong>Loss Functions</strong> (or Cost Functions) are the mathematical judges that penalize wrong predictions. They define the "Error Surface"—a high-dimensional valley where the bottom represents perfect truth. The goal of all Gradient Descent is to find the quickest path to that global minimum. By choosing the right loss function, you are effectively telling the machine <strong>what matters</strong>: whether it should be obsessed with outliers, or whether it should prioritize confident class labels above all else.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Empirical Risk</div>
      <p>A loss function $\mathcal{L}(\hat{y}, y)$ maps the distance between the prediction $\hat{y}$ and the ground truth $y$ to a non-negative real value. The optimization objective is to minimize the **Empirical Risk** (the Average Loss):</p>
      <div class="math-block">
        $$J(\theta) = \frac{1}{n} \sum_{i=1}^n \mathcal{L}(f(\mathbf{x}_i; \theta), y_i)$$
      </div>
      <p>The choice of $\mathcal{L}$ is typically dictated by the output distribution of the data:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Gaussian (Regression)</strong>: $\mathcal{L} = (\hat{y} - y)^2$ (Mean Squared Error)</li>
        <li><strong>Bernoulli (Binary)</strong>: $\mathcal{L} = -(y \log \hat{y} + (1-y) \log (1-\hat{y}))$ (Log Loss)</li>
        <li><strong>Multinoulli (Multi-class)</strong>: $\mathcal{L} = -\sum y_k \log \hat{y}_k$ (Cross-Entropy)</li>
      </ul>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a Loss Function as <strong>"The Price of Failure"</strong> or <strong>"The Personal Trainer’s Rulebook."</strong> 
        Different problems have different penalties. If you are predicting house prices (Regression), and you miss by $1,000, <strong>MSE</strong> might say: "That's 10 pushups." But if you miss by $50,000, it screams: "That's 2,500 pushups!" Squaring the error ensures that big mistakes are punished exponentially harder than small ones. 
        In Classification, however, the target is <strong>Confidence</strong>. If you are 99% confident that a dog is a cat, <strong>Cross-Entropy</strong> will hit the "Delete" button on your weights—punishing "Confident Ignorance" with massive gradients. The loss function is the compass that guides the machine's evolution.
      </div>
    </div>

    <h2 id="regression">Mean Squared Error (MSE)</h2>
    <p>Used for Regression. It calculates the <strong>Average of the Squared Differences</strong> between the true value $y$ and predicted $\hat{y}$.</p>
    <div class="math-block">$$MSE = \frac{1}{n} \sum_{i=1}^n (y_i - \hat{y}_i)^2$$</div>
    <p><strong>The Gotcha:</strong> Squaring the error makes <strong>Large Mistakes</strong> much more expensive than small ones. This forces the model to ignore small noise and focus on big outliers.</p>

    <h2 id="classification">Cross-Entropy Loss (Log-Loss)</h2>
    <p>Used for Classification. It measures the <strong>Distance between Probabilities</strong>. If the model predicts a 10% chance of a "Spam" email when it is actually Spam, the loss is huge.</p>
    <div class="math-block">$$L = -\sum y_i \log(\hat{y}_i)$$</div>
    <p><strong>Log-Loss:</strong> Penalizes the model <strong>Exponentially</strong> for being "Confidently Wrong." If you say 99.9% but are wrong, the Log-Loss will destroy your gradient.</p>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Coach's Rulebook</h2>
    
      <h4>Scenario: Training an Athlete for the Olympics</h4>
      <p>The <strong>Loss</strong> is the punishment for a bad result. The 'Judge' (Loss Function) chooses the penalty.</p>
      
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
          Picking the wrong loss is like a coach training a swimmer for a marathon. The math will run, but the results will be a disaster. <strong>MSE for Regression, Cross-Entropy for Classification.</strong> Period.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
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
