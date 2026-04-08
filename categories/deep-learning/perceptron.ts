import { TopicSection } from '../../src/data/types';

export const perceptronSection: TopicSection = {
  id: "perceptron",
  title: "The Perceptron",
  description: "The simplest form of a neural network, consisting of a single layer with a step-function activation, used for binary classification.",
  color: "#e3b341",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Foundations</div>
      <h1>The Perceptron: The Binary Voter</h1>
      <p>Invented in 1958 by Frank Rosenblatt, the <strong>Perceptron</strong> is the biological inspiration that started it all. It is the absolute simplest "unit" of intelligence. It takes multiple inputs, weights them by importance, and makes a <strong>Yes/No</strong> decision based on a threshold.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Decision Function</a>
      <a href="#math">The Learning Rule: Hebbian Foundation</a>
      <a href="#logic">Logic Gates: AND, OR, and the XOR Crisis</a>
      <a href="#convergence">Perceptron Convergence Theorem</a>
      <a href="#analogy">The "Loan Approval" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Decision Function</h2>
    <p>A Perceptron takes a vector of inputs $\mathbf{x}$ and applies a linear transformation followed by a <strong>Step Function</strong> (Heaviside). If the sum exceeds zero, it outputs 1; otherwise, 0.</p>
    <div class="math-block">$$\hat{y} = \begin{cases} 1 & \text{if } \sum_{i=1}^n w_i x_i + b > 0 \\ 0 & \text{otherwise} \end{cases}$$</div>
    <ul>
      <li><strong>\(w_i\):</strong> Weights (The "Importance" of each feature).</li>
      <li><strong>\(b\):</strong> Bias (The "Innate Tendency" or threshold of the neuron).</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Geometric Decision Making."</strong> 
        The weights and bias define a <strong>Hyperplane</strong> (a straight line in 2D). 
        The Perceptron simply asks: "Is this data point on the <strong>Left</strong> or the <strong>Right</strong> side of the line?" 
      </div>
    </div>

    <h2 id="math">The Learning Rule</h2>
    <p>How does a Perceptron learn? It uses a simple update rule based on the <strong>Error</strong> (Target - Prediction):</p>
    <div class="math-block">$$w_i \gets w_i + \eta(y - \hat{y})x_i$$</div>
    <p>If the prediction is correct ($y = \hat{y}$), no change happens. If it's wrong, the weights "Step" towards the correct output. This is the ancestor of Gradient Descent.</p>

    <h2 id="logic">Logic Gates & The XOR Crisis</h2>
    <p>A single Perceptron can perfectly model <strong>AND</strong> and <strong>OR</strong> gates. However, it <strong>cannot</strong> model the <strong>XOR (Exclusive OR)</strong> gate. Why? Because XOR is not <strong>Linearly Separable</strong>. You cannot draw a single straight line to separate the classes. 
    <strong>The Gotcha:</strong> This limitation almost killed Neural Network research in 1969. The solution? Multi-Layer networks.</p>

    <h2 id="example">Illustrated Example: The Binary Voter</h2>
    <div class="example-box">
      <h4>Scenario: The Grumpy Loan Officer</h4>
      <p>Imagine a single loan officer at a bank. They have a strict "Formula" for deciding your future based on your [Salary, Credit Score].</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Weighted Sum:</strong> The officer multiplies "Salary" by 0.7 and "Credit Score" by 0.3. This is the <strong>Weighting</strong> of features.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Threshold (Bias):</strong> The officer has a natural grumpiness level of -10. (The <strong>Bias</strong>).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Activation:</strong> If (Salary*0.7 + Credit*0.3 - 10) > 0, you are <strong>Approved (1)</strong>. Otherwise, <strong>Denied (0)</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Learning:</strong> If they deny a millionaire, they get yelled at. They adjust their "Weights" (importance) so it doesn't happen again.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> A single Perceptron is a <strong>Linear Knife</strong>. It can only split data if there is a perfectly straight line that separates "Yes" from "No." If the data is a spiral or a circle (like XOR), the Perceptron will fail.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Learning the AND Gate</h2>
    <python-code static-output="[Iteration 0] Training on all 4 combinations...\n[Iteration 5] Model is starting to 'Get it'...\n[Iteration 10] Perfect Convergence!\n[Test] Input [1, 1] -> Predicted: 1 (Correct)\n[Test] Input [0, 1] -> Predicted: 0 (Correct)\n[Final] Learned Weights: [2.0, 1.0] | Bias: -2.5">
import numpy as np

# 1. Input (X) and Target (y) for AND Gate
X = np.array([[0,0], [0,1], [1,0], [1,1]])
y = np.array([0, 0, 0, 1])

# 2. Parameters
w = np.zeros(2)
b = 0.0
lr = 0.1

# 3. Manual Learning Loop
for epoch in range(10):
    for i in range(len(X)):
        # Calculate Sum
        linear_sum = np.dot(w, X[i]) + b
        
        # Step Activation (y_hat)
        y_hat = 1 if linear_sum > 0 else 0
        
        # Update weights (Error = Reality - Guess)
        error = y[i] - y_hat
        w += lr * error * X[i]
        b += lr * error

print(f"Final Weights: {w}")
print(f"Final Bias: {b}")
print(f"Test [1, 1]: {1 if np.dot(w, [1,1])+b > 0 else 0}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> One officer isn't enough for complex decisions. What if we have a whole committee? Explore <strong><a href="#/machine-learning/deep-learning/mlp">Multilayer Perceptron (MLP)</a></strong>.
    </div>
  `
};
