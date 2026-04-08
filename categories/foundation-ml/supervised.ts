import { TopicSection } from '../../src/data/types';

export const supervisedLearningSection: TopicSection = {
  id: "supervised",
  title: "Supervised Learning",
  description: "Supervised Learning is the most common form of Machine Learning, where a model is trained on a labeled dataset.",
  color: "#4CAF50",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Supervised</div>
      <h1>Supervised Learning: The Guided Path</h1>
      <p><strong>Supervised Learning</strong> is the machine equivalent of learning with a tutor. Every data point you feed the model comes with the <strong>"Right Answer"</strong> (the Label). The goal is for the model to learn a general mapping so it can guess the answers for data it has never seen before.</p>
    </div>

    <h2 id="theory">The Mechanics: Mapping Inputs to Outputs</h2>
    <p>In Supervised Learning, we have an input vector \(X\) and a known target \(Y\). We want to find a function \(f\) such that:</p>
    <div class="math-block">$$Y = f(X) + \epsilon$$</div>
    <p>Where \(\epsilon\) is the noise we can't explain. The "Learning" happens as we minimize the difference between the model's prediction (\(\hat{Y}\)) and the actual truth (\(Y\)).</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of it as a <strong>"Flashcard Simulator."</strong> 
        The machine sees a picture (Input), guesses "Cow" (Output), looks at the back of the card (Label), sees it says "Dog," and slightly tweaks its internal neural weights to be more "Dog-like" next time. Done 10,000 times, it builds a robust mapping.
      </div>
    </div>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Flashcard Challenge</h2>
    
      <h4>Scenario: Training a Medical Assistant</h4>
      <p>Imagine you have 10,000 X-rays. 5,000 are "Healthy" and 5,000 have "Pneumonia."</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Input (X):</strong> The raw pixels of the X-ray images.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Label (Y):</strong> The doctor's handwritten note: "Sick" or "Healthy."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Process:</strong> The model guesses. If it says "Healthy" for a sick patient, the loss function screams at it. The model adjusts its weights (its 'brain') to not make that mistake again.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Supervised learning is <strong>Feedback-Driven</strong>. No label = No feedback = No learning.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code static-output="[Regression] Predicted House Price: $352,450\n[Classification] Predicted Email: Spam">
import numpy as np
from sklearn.linear_model import LinearRegression, LogisticRegression

# 1. Regression (Predicting a Number)
# Input: [Square Footage], Output: [Price]
X_reg = np.array([[1200], [1500], [1800], [2200]])
y_reg = np.array([250000, 300000, 350000, 450000])

reg_model = LinearRegression().fit(X_reg, y_reg)
price_pred = reg_model.predict([[1810]])[0]
print("[Regression] Predicted House Price: $" + f"{price_pred:,.0f}")

# 2. Classification (Predicting a Category)
# Input: [Word Count, 'Win' count], Output: [0=Normal, 1=Spam]
X_clf = np.array([[100, 0], [150, 0], [50, 10], [40, 8]])
y_clf = np.array([0, 0, 1, 1])

clf_model = LogisticRegression().fit(X_clf, y_clf)
label_pred = clf_model.predict([[45, 9]])[0]
print(f"[Classification] Predicted Email: {'Spam' if label_pred == 1 else 'Normal'}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we have no labels? How can a machine find patterns on its own? Explore <strong><a href="#/machine-learning/foundation-ml/unsupervised">Unsupervised Learning</a></strong>.
    </div>
  `
};
