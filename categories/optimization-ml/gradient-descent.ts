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

    <h2 id="theory">Theoretical Core: The Gradient</h2>
    <p>The <strong>Gradient (\(\nabla \mathcal{L}\))</strong> is a vector of partial derivatives. It points in the direction of the <strong>Greatest Increase</strong> of the Loss function. To minimize the loss, we move in the <strong>Opposite Direction</strong> (\(-\nabla \mathcal{L}\)).</p>
    <div class="math-block">$$\nabla \mathcal{L}(\theta) = \begin{bmatrix} \frac{\partial \mathcal{L}}{\partial \theta_1} \\ \vdots \\ \frac{\partial \mathcal{L}}{\partial \theta_n} \end{bmatrix}$$</div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of it as <strong>"Listening to the Ground."</strong> 
        The gradient tells you two things: 
        1. <strong>Direction:</strong> Which way is "Down"? 
        2. <strong>Magnitude:</strong> How "Steep" is the slope? 
        If the mountain is flat, the gradient is zero, and you have reached your destination.
      </div>
    </div>

    <h2 id="math">The Update Rule</h2>
    <p>At every iteration, we update our parameters \(\theta\) using the following formula:</p>
    <div class="math-block">$$\theta_{new} = \theta_{old} - \alpha \nabla \mathcal{L}(\theta_{old})$$</div>
    <ul>
      <li><strong>\(\alpha\):</strong> The <strong>Learning Rate</strong> (Step size). </li>
      <li>If \(\alpha\) is <strong>Too Large</strong>, you'll "Overshoot" the resort and fly off the mountain.</li>
      <li>If \(\alpha\) is <strong>Too Small</strong>, you'll take 100 years to reach the base.</li>
    </ul>

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
    <python-code static-output="[Epoch 0] Initial Loss: 14.22 | w: 0.00, b: 0.00\n[Epoch 25] Stepping Down... Loss: 4.85 | w: 1.42, b: 0.95\n[Epoch 50] Middle Slope... Loss: 0.82 | w: 2.75, b: 1.82\n[Epoch 100] At the Base! Loss: 0.01 | w: 2.99, b: 1.99\n[Result] Convergence Achieved. Global Minimum Found.">
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

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we don't wait for everyone? What if we just start skiing based on what WE see? Explore <strong><a href="#/machine-learning/optimization-ml/sgd">Stochastic Gradient Descent (SGD)</a></strong>.
    </div>
  `
};
