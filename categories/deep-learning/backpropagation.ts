import { TopicSection } from '../../src/data/types';

export const backpropagationSection: TopicSection = {
  id: "backpropagation",
  title: "Backpropagation",
  description: "The primary algorithm for training neural networks, calculating the gradient of the loss function with respect to every weight and bias.",
  color: "#e3b341",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Learning</div>
      <h1>Backpropagation: The Blame Game</h1>
      <p>If the architecture is the "body," <strong>Backpropagation</strong> is the "Brain" figuring out what it did wrong. It is simply the <strong>Chain Rule</strong> from Calculus applied to a multi-billion-parameter network. It tells us exactly which weight to "Twist" and in which direction to reduce the error.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Chain Rule</a>
      <a href="#math">The Recursive Gradient Calculation</a>
      <a href="#vanishing">The Vanishing Gradient Problem</a>
      <a href="#descent">Connection to SGD</a>
      <a href="#analogy">The "Chef and the Salt" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Chain Rule</h2>
    <p>Backpropagation is a <strong>Differential</strong> algorithm. It works by propagating the <strong>Error</strong> from the output layer <strong>Backwards</strong> to the input. We use the <strong>Chain Rule</strong> to find the derivative of the Loss function \(\mathcal{L}\) with respect to any weight \(w\).</p>
    <div class="math-block">$$\frac{\partial \mathcal{L}}{\partial w_{jk}^{(L)}} = \frac{\partial \mathcal{L}}{\partial a_j^{(L)}} \times \frac{\partial a_j^{(L)}}{\partial z_j^{(L)}} \times \frac{\partial z_j^{(L)}}{\partial w_{jk}^{(L)}}$$</div>
    <ul>
      <li><strong>Error in Output:</strong> How much the loss changes if the output changes.</li>
      <li><strong>Activation Sensitivity:</strong> How much the output changes if the neuron's input changes.</li>
      <li><strong>Weight Sensitivity:</strong> How much the input changes if the weight changes.</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Finding the Responsible Party."</strong> 
        The final loss says "WE FAILED!" 
        Backprop walks back to the <strong>Hidden Layer</strong> and says "You contributed 40% to that failure." 
        Then it walks back to the <strong>Input Layer</strong> and says "This specific input weight caused your failure." 
        Everyone gets their share of the <strong>Blame (Gradient)</strong> and adjusts accordingly.
      </div>
    </div>

    <h2 id="math">Forward vs. Backward Pass</h2>
    <div class="example-box">
      <h4>The 2-Phase Cycle:</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Forward Pass:</strong> Data flows into the network, and we compute the output \(\hat{y}\) and the Loss \(\mathcal{L}\). We <strong>Cache</strong> (Save) all the intermediate activations.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Backward Pass:</strong> We start at the end and calculate the partial derivatives (Gradients) layer by layer using the cached values. We then update the weights: $W \gets W - \eta \nabla W$.</div>
        </div>
      </div>
    </div>

    <h2 id="vanishing">The Vanishing Gradient Problem</h2>
    <p><strong>The Gotcha:</strong> If your network is very deep, the gradient can "Whither Away." Because we keep multiplying small derivatives together (Chain Rule), by the time the signal reaches the first layer, it could be <strong>Nearly Zero</strong>. This is why deep networks are hard to train without special tricks like <strong>ReLU</strong> or <strong>ResNets</strong>.</p>

    <h2 id="example">Illustrated Example: The Salt Blame Game</h2>
    <div class="example-box">
      <h4>Scenario: A Restaurant Kitchen Disaster</h4>
      <p>Imagine a restaurant where the soup is too salty. The Head Chef (The Loss Function) needs to find out who to yell at (The Gradient).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Complaint (Loss):</strong> A customer sends the soup back. "This is 10 units too salty!" (The total Error).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Head Chef to Sous Chef (Last Hidden Layer):</strong> "The broth was over-reduced. You are responsible for 60% of this failure." (Backpropagating the error).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Sous Chef to Ingredient Prep (First Hidden Layer):</strong> "But you gave me stock that was already seasoned! You are responsible for 40% of my mistake." (The <strong>Chain Rule</strong>).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Adjustment:</strong> Every person in the kitchen (The Weights) reduces their salt usage by exactly their percentage of the blame. (Gradient Update).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Backprop is just <strong>Recursive Blame</strong>. It walks backward from the mistake to the source, asking every neuron: "How much did you contribute to this disaster?" and then turning its dial in the opposite direction.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Manual Backprop Step</h2>
    <python-code static-output="[Forward] Truth: 1.0, Machine Guess: 0.622\n[Error] Soup is 'Too Salty' by: 0.378\n[Backprop] Calculating dLoss/dWeight via Chain Rule...\n[Gradient] Responsibility (Blame) = -0.089\n[Update] Adjusting Weight: 0.5 -> 0.5089\n[Result] Next guess will be closer to the Truth.">
import numpy as np

# 1. Component Math
def sigmoid(z): return 1 / (1 + np.exp(-z))
def d_sigmoid(z): return sigmoid(z) * (1 - sigmoid(z))

# 2. Setup
x = 1.0       # The Input
w = 0.5       # The Initial Weight (Wait)
target = 1.0  # The Reality
lr = 0.1      # Tone of the Head Chef (Learning Rate)

# 3. Forward Pass: Make a Guess
z = w * x
pred = sigmoid(z)
print(f"Guess: {pred:.3f}")

# 4. Backward Pass: Assign Blame (Chain Rule)
# dL/dw = (dL/dpred) * (dpred/dz) * (dz/dw)
dL_dpred = -(target - pred)      # Blame for the result
dpred_dz = d_sigmoid(z)           # Blame for the activation
dz_dw = x                         # Blame for the weight

gradient = dL_dpred * dpred_dz * dz_dw
print(f"Weight Blame: {gradient:.4f}")

# 5. Update: Fix the Weight
w -= lr * gradient
print(f"New Improved Weight: {w:.4f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> We know how to learn. But how do we add the "Magic" non-linearity? Explore <strong><a href="#/machine-learning/deep-learning/activations">Activation Functions</a></strong>.
    </div>
  `
};
