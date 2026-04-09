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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Invented in 1958, the <strong>Perceptron</strong> is the absolute simplest biological unit of machine intelligence. It is the "First Neuron"—the ancestor of every deep learning model in existence. It works by taking multiple inputs, weighting them by importance, and making a single, binary <strong>Yes/No</strong> decision. Mathematically, it is a <strong>Linear Knife</strong>; it tries to draw a perfectly straight line through your data to separate one group from another. While simple, it represents the foundational shift from static "Expert Systems" to machines that can <strong>Learn</strong> their own rules through trial and error.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Linear Hyperplane & Convergence Logic</div>
      <p>The Perceptron is the "Elementary Judge." It is the atomic unit of a neural network, performing the simplest possible form of classification.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine you have a bowl of red and blue marbles on a table and you want to separate them with a single straight ruler. The <strong>Perceptron</strong> is that ruler. Geometrically, it is a <strong>Linear Hyperplane</strong>—a flat surface that cuts a high-dimensional space into two half-spaces. One side of the ruler is "Yes" (1) and the other is "No" (0). It is the mathematical absolute of binary logic. However, its fatal flaw is that it can only solve problems that are <strong>Linearly Separable</strong>. If the data is mixed like a marble cake, a single ruler can never separate it.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>The Perceptron takes an input vector $\mathbf{x} \in \mathbb{R}^d$ and performs a weighted sum plus a "Level of Grumpiness" (Bias):</p>
      <div class="math-block">
        $$z = \mathbf{w}^T \mathbf{x} + b$$
      </div>
      <p>It then passes this sum through a <strong>Heaviside Step Function</strong> to force a binary decision:</p>
      <div class="math-block">
        $$\hat{y} = \begin{cases} 1 & \text{if } z \geq 0 \\ 0 & \text{if } z < 0 \end{cases}$$
      </div>
      <p>The "Learning" happens through a simple recursive rule. If the prediction $\hat{y}$ is wrong ($y \neq \hat{y}$), we "Nudge" the weights in the direction of the error:</p>
      <div class="math-block">
        $$\mathbf{w}_{t+1} = \mathbf{w}_t + \eta(y - \hat{y})\mathbf{x}$$
      </div>
      <p>The <strong>Perceptron Convergence Theorem</strong> guarantees that if a solution exists (the data is separable), this algorithm *will* find it in a finite number of steps.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Deep Learning, the Perceptron is the <strong>Binary Building Block</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Linear Bound</strong>: It can only model "OR", "AND", and "NOT" logic. It cannot model "XOR" because an OR gate where both inputs can't be true is not a straight-line problem.</li>
        <li><strong>Hard Threshold</strong>: Unlike modern neurons that use smooth curves (Sigmoid/ReLU), the Perceptron is a "Hard Switch." This makes it impossible to use with Backpropagation because its derivative is zero almost everywhere.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Infinite Loops. If your data cannot be separated by a straight line, the Perceptron will cycle through its weights forever, never finding peace. This "Crisis of 1969" almost killed AI research for a decade.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of the Perceptron as <strong>"The Grumpy Loan Officer"</strong> or a <strong>"Binary Digital Switch."</strong> 
        Imagine a single officer at a bank. They look at your Salary and your Credit Score. They multiply each by a "Weight" (Importance) and add them up. Then they compare that sum to their own internal "Grumpiness" (the Bias). 
        If the total is above zero, they shout <strong>"Approved!"</strong>—if not, you're out. 
        When they make a mistake (denying a millionaire), they get yelled at and <strong>Nudge</strong> their weights so they don't repeat the error. It’s the original "A-ha!" moment for AI—it’s not about finding a complex solution; it’s about making a simple decision and <strong>adjusting based on failure</strong>.
      </div>
    </div>
    
    <h2 id="math">The Learning Rule</h2>
    <p>How does a Perceptron learn? It uses a simple update rule based on the <strong>Error</strong> (Target - Prediction):</p>
    <div class="math-block">$$w_i \gets w_i + \eta(y - \hat{y})x_i$$</div>
    <p>If the prediction is correct ($y = \hat{y}$), no change happens. If it's wrong, the weights "Step" towards the correct output. This is the ancestor of Gradient Descent.</p>

    <h2 id="logic">Logic Gates & The XOR Crisis</h2>
    <p>A single Perceptron can perfectly model <strong>AND</strong> and <strong>OR</strong> gates. However, it <strong>cannot</strong> model the <strong>XOR (Exclusive OR)</strong> gate. Why? Because XOR is not <strong>Linearly Separable</strong>. You cannot draw a single straight line to separate the classes. 
    <strong>The Gotcha:</strong> This limitation almost killed Neural Network research in 1969. The solution? Multi-Layer networks.</p>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Binary Voter</h2>
    
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
          A single Perceptron is a <strong>Linear Knife</strong>. It can only split data if there is a perfectly straight line that separates "Yes" from "No." If the data is a spiral or a circle (like XOR), the Perceptron will fail.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
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

    <h2 id="applications">Applications in ML</h2>
    <p>The Perceptron is the "Digital Switch" that proved machines can learn rules through failure. It is the absolute simplest biological unit of machine intelligence.</p>
    <ul>
      <li><strong>Email Routing (Binary Priority)</strong>: While simple, a Perceptron can be used to quickly sort emails into "Urgent" vs. "Normal" based on a few keywords. If (Urgent_Words * Weight > Threshold), it triggers an alert. It is the fastest possible way to make a binary decision in a high-speed data stream.</li>
      <li><strong>Circuit Logic Modeling</strong>: Engineers use Perceptrons to model hardware behavior. Since a Perceptron can mimic AND and OR gates perfectly, it can act as a "Software Twin" for simple electronic circuits, helping in the early stages of chip design and testing.</li>
    </ul>
    <p>Teacher's Final Word: The Perceptron is the "ancestor" of every brain in AI. It taught us that complex behavior doesn't need complex math—it just needs a simple decision that knows how to nudge itself when it's wrong.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> One officer isn't enough for complex decisions. What if we have a whole committee? Explore <strong><a href="#/machine-learning/deep-learning/mlp">Multilayer Perceptron (MLP)</a></strong>.
    </div>
  `
};


