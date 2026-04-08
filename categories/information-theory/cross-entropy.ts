import { TopicSection } from '../../src/data/types';

export const crossEntropySection: TopicSection = {
  id: "cross-entropy",
  title: "Cross-Entropy",
  description: "Cross-Entropy measures the distance between two probability distributions. It is the most common loss function for training classification models.",
  color: "#9C27B0",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Info Theory · Loss</div>
      <h1>Cross-Entropy: The Price of Disbelief</h1>
      <p><strong>Cross-Entropy</strong> (\(H(P, Q)\)) is the measure of how well a predicted distribution \(Q\) matches the target distribution \(P\). In Machine Learning, we minimize cross-entropy to bridge the gap between our model's guesses and the ground truth.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Entropy</strong>: Measuring self-uncertainty.</li>
        <li><strong>Softmax</strong>: Converting model scores into probabilities.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Entropy tells you how much information is in the truth. <strong>Cross-Entropy</strong> tells you how many bits of information you *think* are there because of your model. If your model is wrong, you pay a "penalty" in extra bits. By minimizing this penalty, you force the model's "beliefs" to align with reality.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Cross-Entropy as <strong>"The Wrong Map Penalty."</strong> 
        The terrain is \(P\) (reality), but you're using map \(Q\) (your model). 
        If your map says "Go Left" but the terrain says "Go Right," you pay a price in wasted time (Entropy). 
        Cross-Entropy is the total cost of using your map. Training a model is just <strong>drawing a better map.</strong>
      </div>
    </div>

    <h2 id="derivation">Formal Definition</h2>
    <p>For a true distribution \(P\) and predicted distribution \(Q\):</p>
    <div class="math-block">$$H(P, Q) = -\sum_{i} P(x_i) \log Q(x_i)$$</div>
    <p>In binary classification (Cat vs. Not Cat), this simplifies to the famous Binary Cross-Entropy (BCE) loss:</p>
    <div class="math-block">$$L = -[y \log(\hat{y}) + (1-y) \log(1-\hat{y})]$$</div>

    <h2 id="example-target" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Prediction vs. Target</h2>
    
      <h4>Problem: Measuring the Gap</h4>
      <p>Target: [1, 0] (It is a Cat). Model Guess: [0.8, 0.2]. Calculate Cross-Entropy.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> \(P = [1, 0], Q = [0.8, 0.2]\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Log Guess:</strong> \(\log(0.8) \approx -0.22, \log(0.2) = -1.60\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Sum:</strong> \(H = -(1 \times -0.22 + 0 \times -1.60) = 0.22 \text{ nats}\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> 0.22 nats. If the guess was better [0.99, 0.01], the loss would drop to 0.01. If it was worse [0.1, 0.9], the loss would explode to 2.30!
        </div>
      </div>
    

    <h2 id="example-cat" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Training a Dog Classifier</h2>
    
      <h4>Problem: Exploding Loss on Confident Errors</h4>
      <p>A model is 99% sure an image is a "Dog," but the true label is "Cat."</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Target \(P(\text{Cat})=1\). Model \(Q(\text{Cat})=0.01\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Calculation:</strong> \(H = -1 \log(0.01) \approx 4.6\).</div>
        </div>
      </div>

      <div class="callout error">
        <div class="callout-icon">✕</div>
        <div class="callout-body">
          <strong>Result:</strong> 4.6. This is a very high loss! The model is penalized heavily for being <strong>"Confidently Wrong."</strong> This sends a massive signal during backpropagation for the model to fix its weights immediately.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

def cross_entropy(y_true, y_pred):
    # Clip predictions to avoid log(0)
    y_pred = np.clip(y_pred, 1e-15, 1 - 1e-15)
    return -np.sum(y_true * np.log(y_pred))

# Prediction: 80% confident it's class 0
target = np.array([1, 0, 0])
guess = np.array([0.8, 0.1, 0.1])

print(f"Cross-Entropy Loss: {cross_entropy(target, guess):.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Classification Loss</strong>: Logistic Regression and Neural Networks use Cross-Entropy because it has a smooth gradient that is easy to optimize.</li>
      <li><strong>Softmax Outputs</strong>: We apply cross-entropy to the output of Softmax layers to train multi-class classifiers.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Cross-entropy is the total information cost. What if we just want to know the <strong>pure difference</strong> between two distributions? Explore <strong><a href="#/mathematics/information-theory/kl-divergence">KL Divergence</a></strong>.
    </div>
  `
};
