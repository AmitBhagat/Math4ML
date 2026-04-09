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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>If the architecture of a neural network is the "body," <strong>Backpropagation</strong> is the process of the brain figuring out exactly what it did wrong. It is simply the <strong>Chain Rule</strong> from Calculus applied to a multi-billion-parameter system. After a forward pass makes a guess, Backpropagation walks backwards through the network, layer by layer, calculating exactly how much each specific weight contributed to the final error. It is a systematic way of assigning "Blame" so that every single dial in the machine can be "Twisted" in the right direction to reduce failure. Without this mechanism of self-correction, deep learning would be nothing more than a series of random, uncoordinated guesses.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Gradient of the Chain Rule</div>
      <p>Backpropagation computes the gradient of the loss function $\mathcal{L}$ with respect to the weights $\mathbf{W}$ of the network. For a weight $w_{ij}^{(l)}$ in layer $l$, the gradient is the product of the input $a_i^{(l-1)}$ and the local error term $\delta_j^{(l)}$:</p>
      <div class="math-block">
        $$\frac{\partial \mathcal{L}}{\partial w_{ij}^{(l)}} = \delta_j^{(l)} a_i^{(l-1)}$$
      </div>
      <p>The error signal $\delta^{(l)}$ is computed recursively, moving backward from the output layer $L$:</p>
      <div class="math-block">
        $$\delta^{(l)} = \left( (\mathbf{W}^{(l+1)})^T \delta^{(l+1)} \right) \odot \sigma'(\mathbf{z}^{(l)})$$
      </div>
      <p class="text-xs opacity-70 mt-2">Where $\odot$ represents the Hadamard product (element-wise multiplication).</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Backpropagation as <strong>"Finding the Responsible Party"</strong> or the <strong>"Restaurant Kitchen Disaster."</strong> 
        Imagine a restaurant where a customer sends back a soup for being too salty. The Head Chef (The Loss Function) doesn't just yell at everyone. They walk back to the Sous Chef (the last hidden layer) and say: "The broth was over-reduced; you're responsible for 60% of this failure." 
        Then the Sous Chef walks back to the Prep Cook (the first hidden layer) and says: "But you gave me stock that was already salty; you’re responsible for 40% of my mistake." 
        By the time the signals reach the raw ingredients (the Input Weights), <strong>everyone</strong> knows their exact share of the <strong>Blame (Gradient)</strong> and adjusts their behavior accordingly. Backpropagation is that recursive conversation that turns failure into precise improvement.
      </div>
    </div>
    
    <h2 id="math">Forward vs. Backward Pass</h2>
    
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
    

    <h2 id="vanishing">The Vanishing Gradient Problem</h2>
    <p><strong>The Gotcha:</strong> If your network is very deep, the gradient can "Whither Away." Because we keep multiplying small derivatives together (Chain Rule), by the time the signal reaches the first layer, it could be <strong>Nearly Zero</strong>. This is why deep networks are hard to train without special tricks like <strong>ReLU</strong> or <strong>ResNets</strong>.</p>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Salt Blame Game</h2>
    
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
          Backprop is just <strong>Recursive Blame</strong>. It walks backward from the mistake to the source, asking every neuron: "How much did you contribute to this disaster?" and then turning its dial in the opposite direction.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
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
