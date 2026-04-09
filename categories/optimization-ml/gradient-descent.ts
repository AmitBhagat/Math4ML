import { TopicSection } from '../../src/data/types';

export const gradientDescentSection: TopicSection = {
  id: "gradient-descent-ml",
  title: "Gradient Descent (Batch)",
  description: "The fundamental iterative algorithm for minimizing a loss function by taking steps in the direction of steepest descent.",
  color: "#F44336",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">⚡ Optimization · ML</div>
      <h1>Gradient Descent: The Downhill Skier</h1>
      <p>Imagine you are a <strong>Skier</strong> at the top of a foggy mountain. You want to reach the <strong>Ski Resort</strong> at the bottom (The Minimum Loss), but you can't see more than 2 feet ahead. What do you do? You feel the slope with your feet and take a step in the <strong>Steepest Downward Direction</strong>. Repeat this 1,000 times, and you'll reach the base.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Optimization is the heartbeat of machine learning, and <strong>Gradient Descent</strong> is its most fundamental engine. Imagine you are a <strong>Skier</strong> at the peak of a high-dimensional mountain, trapped in a thick fog. You want to reach the <strong>Ski Resort</strong> at the base—the point of minimum loss—but you can’t see more than two feet in front of you. What do you do? You feel the slope with your boots and take a careful step in the <strong>Steepest Downward Direction</strong>. The <strong>Gradient (\(\nabla \mathcal{L}\))</strong> is that invisible slope; it is a vector of partial derivatives that points toward the greatest increase of the loss. By moving in the exact opposite direction, you are guaranteed to move downhill. It is the tactical decision to trade global vision for local precision, trusting that a thousand small, smart steps will lead you to the valley of success.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The First-Order Update Rule</div>
      <p>Given a differentiable objective function $J(\theta)$, **Gradient Descent** iteratively updates the parameter vector $\theta$ by descending along the negative gradient of the function. For a learning rate $\eta > 0$ at step $t$:</p>
      <div class="math-block">
        $$\theta_{t+1} = \theta_t - \eta_t \nabla_\theta J(\theta_t)$$
      </div>
      <p>This update mechanism is based on the following mathematical principles:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>The Gradient ($\nabla J$)</strong>: A vector pointing in the direction of steepest *ascent*. Subtracting it ensures we move toward the steepest *descent*.</li>
        <li><strong>The Step Size ($\eta$)</strong>: Controlled by the Learning Rate. High $\eta$ can lead to divergence (overshooting); low $\eta$ results in slow convergence or entrapment in local minima.</li>
        <li><strong>Convergence</strong>: For convex functions, GD is guaranteed to reach the global minimum given a sufficiently small $\eta$. For non-convex surfaces (DL), it finds a local minimum or stationary point.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">In **Batch Gradient Descent**, the gradient $\nabla J$ is computed by averaging the errors over the *entire dataset*, resulting in a stable but computationally expensive trajectory.</p>
    </div>
    
    <h2 id="batch">Batch Gradient Descent</h2>
    <p>In <strong>Batch GD</strong>, we use <strong>Every Single Data Point</strong> in the dataset to calculate the gradient before taking one step. 
    <strong>The Upside:</strong> The descent is very smooth and stable. 
    <strong>The Downside:</strong> If you have 1 billion data points, your computer will <strong>Run out of Memory</strong> before you take your first step.</p>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Blindfolded Mountain Climber</h2>
    
      <h4>Scenario: Navigating a Foggy Mountain in a Blizzard</h4>
      <p>Imagine you are stranded at the peak of a mountain. You need to reach the village at the base (The Minimum Loss), but you are blindfolded and can only feel the ground with your feet.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Sensitivity (The Gradient):</strong> You tap your foot in a circle. You feel the ground dipping steeply to the South-East. That is your <strong>Gradient</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Step Size (Learning Rate):</strong> You take a 1-meter step. If you take a 10-meter step, you might walk off a cliff. If you take a 1-cm step, you'll freeze before you reach the village.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Batch Tally:</strong> In <strong>Batch GD</strong>, you wait for 1,000 other climbers on the mountain to radio in the slope they feel. You average them and take one perfect, stable step.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Convergence:</strong> You repeat this until every direction feels perfectly flat. You've reached the village center!</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Batch GD is the "Diligence" algorithm. It looks at <strong>all the data</strong> before moving. This makes the path to the minimum very smooth, but it's <strong>Painfully Slow</strong> for massive datasets.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np

# 1. Generate Noisy Data: y = 3x + 2 + noise
X = np.random.rand(100, 1)
y = 3 * X + 2 + np.random.randn(100, 1) * 0.1

# 2. Initialize Parameters
w, b = 0.0, 0.0
lr = 0.1 # Learning Rate

# 3. Batch Gradient Descent Loop
for epoch in range(101):
    # Error = Prediction - Actual
    error = (w * X + b) - y
    
    # Calculate Gradients (Partial Derivatives of MSE)
    dw = np.mean(error * X) 
    db = np.mean(error)
    
    # Update weights (Move OPPOSITE to gradient)
    w -= lr * dw
    b -= lr * db
    
    if epoch % 25 == 0:
        loss = np.mean(error**2)
        print(f"Epoch {epoch}: Loss={loss:.4f}, w={w:.2f}, b={b:.2f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Gradient Descent is the "Compass" of AI. It tells the model which way to walk to find the absolute bottom of the error valley, providing a universal method for optimizing almost any differentiable mathematical model.</p>
    <ul>
      <li><strong>Logistic Regression for Fraud Detection</strong>: When a bank builds a model to flag fraudulent transactions, the goal is to find the perfect weight for variables like "Transaction Amount" and "Location." Gradient Descent minimizes the "Log-Loss" of the model, iteratively adjusting the weights until the boundary between "Normal" and "Fraud" is as accurate as mathematically possible.</li>
      <li><strong>Neural Network Backpropagation</strong>: Every time a deep learning model (like ChatGPT or Midjourney) learns something new, it uses Gradient Descent. The "Gradient" is calculated via backpropagation, and the optimizer takes a tiny step downhill for millions of different weights simultaneously, allowing the network to slowly converge on the complex parameters required for intelligence.</li>
    </ul>
    <p>Teacher's Final Word: You don't need to see the whole world to find the bottom; you just need to feel the slope beneath your feet. Gradient Descent teaches us that even the most complex problems can be solved by a thousand small, smart, and consistent steps in the right direction.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we don't wait for everyone? What if we just start skiing based on what WE see? Explore <strong><a href="#/machine-learning/optimization-ml/sgd">Stochastic Gradient Descent (SGD)</a></strong>.
    </div>
  `
};


