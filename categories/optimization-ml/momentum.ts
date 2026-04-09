import { TopicSection } from '../../src/data/types';

export const momentumSection: TopicSection = {
  id: "momentum-ml",
  title: "Momentum",
  description: "A method to accelerate gradient descent that uses the moving average of gradients to smooth out updates and navigate the loss surface more efficiently.",
  color: "#F44336",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">⚡ Optimization · ML</div>
      <h1>Momentum: The Heavy Boulder</h1>
      <p>If SGD is a <strong>Drunken Sailor</strong>, <strong>Momentum</strong> is that sailor in a <strong>Heavy Lead Sled</strong>. Once he starts moving down the mountain, he builds up <strong>Speed</strong> and is harder to stop. If he hits a small bump or a "Saddle Point," he just <strong>Rides Over It</strong> because he has momentum. He's faster and more direct.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Standard SGD is like a hiker constantly changing direction based on the very last rock he stepped on—it’s twitchy, inconsistent, and slow. <strong>Momentum</strong> is the decision to give that hiker a <strong>Heavy Lead Sled</strong>. Once it starts moving down the mountain, it builds up velocity and becomes harder to stop. If the hiker hits a small bump or a "Saddle Point," the sled’s momentum simply carries him over it. Mathematically, this is an <strong>Exponentially Weighted Moving Average</strong> of previous steps. It acts as a "Memory for Direction," ensuring that the consistent, downward force of gravity accumulates while the random, left-to-right "noise" of stochasticity cancels itself out. It is the tactical decision to trust the trend over the snapshot, allowing the model to glide through the long, flat ravines of a loss surface that would trap a standard walker.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Velocity Accumulator</div>
      <p>The **Momentum** method accelerates Gradient Descent by introducing a velocity vector $v$ that builds inertia based on the history of previous gradients. The update at step $t$ is defined as:</p>
      <div class="math-block">
        $$v_{t+1} = \gamma v_t + \eta \nabla_\theta J(\theta_t)$$
        $$\theta_{t+1} = \theta_t - v_{t+1}$$
      </div>
      <p>This physical analogy provides the optimizer with two critical capabilities:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Friction ($\gamma$)</strong>: The momentum coefficient (typically 0.9) determines what percentage of the previous velocity is kept. it prevents the "Bolder" from rolling infinitely.</li>
        <li><strong>Oscillation Dampening</strong>: In directions where the gradient changes sign (jitter), the velocity terms cancel out. In consistent directions, the velocity builds up.</li>
        <li><strong>Ravine Navigation</strong>: Many loss functions have narrow "valleys" (high curvature in one dimension). Momentum allows the optimizer to focus on the long-term downward trend rather than bouncing between the valley walls.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Momentum ensures that the optimizer doesn't get "distracted" by the noise of an individual batch, leading to much faster convergence on complex surfaces.</p>
    </div>
    
    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Heavy Boulder</h2>
    
      <h4>Scenario: Pushing a Boulder through a Narrow Ravine</h4>
      <p>Imagine a long, narrow valley that is very steep on the sides but flat in the middle. We want to reach the center of the valley floor.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Standard SGD (The Ping-Pong):</strong> It bounces between the steep walls like a frantic ball. It's moving fast "Up and Down," but not <strong>Forward</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Momentum (Velocity):</strong> We give the boulder <strong>Inertia</strong>. Every bounce against a wall is small and cancels out over time.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Accumulation:</strong> The <strong>Downward Force</strong> (Gravity) is constant. Because it has memory (Velocity), those small forward pushes add up.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Result:</strong> The boulder stops bouncing and builds up speed, "Gliding" straight down the center of the ravine.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Momentum is the <strong>Smoother</strong>. It ignores the jiggles in your gradient and focus exclusively on the <strong>Major Trend</strong>. If your loss is oscillating wildly, you need more momentum.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np

# 1. Surface: Simple Parabola (x^2)
def grad(x): return 2 * x

# 2. Parameters
x_sgd = 10.0
x_mom = 10.0
v = 0.0      # Velocity starts at zero
lr = 0.1     # Learning rate
gamma = 0.9  # Momentum coefficient (0.9 = High Memory)

print("Starting Race...")

for i in range(11):
    # Vanilla SGD update
    x_sgd -= lr * grad(x_sgd)
    
    # Momentum update
    v = (gamma * v) + (lr * grad(x_mom)) # The 'Weighted Average' memory
    x_mom -= v                      # Use velocity, not just current gradient
    
    if i % 5 == 0:
        print(f"Step {i}: SGD={x_sgd:.2f}, Momentum={x_mom:.2f} (Vel={v:.2f})")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Momentum is the "Inertia" of AI. It helps the optimizer ignore the local "noise" of the data and focus on the major, long-term trends required to reach the mathematical truth.</p>
    <ul>
      <li><strong>Training Computer Vision Models (CNNs)</strong>: The loss landscape of an image recognition model is incredibly complex, filled with "Saddle Points"—flat regions where the gradient is almost zero. A standard optimizer might stop here, thinking it has reached the bottom. Momentum ensures the weights keep "Rolling" through these plateaus, giving the model enough inertia to find the deep, global valleys that lead to high accuracy.</li>
      <li><strong>High-Speed Training on Noisy Gradients</strong>: When training on small mini-batches, the individual updates can be very jumpy and erratic. By using momentum, engineers "Smooth Out" these updates. It's like driving a car with good suspension; the momentum prevents the model from feeling every tiny bump in the data, allowing it to maintain a stable, high-speed path toward convergence.</li>
    </ul>
    <p>Teacher's Final Word: Physics isn't just for cars; it's the secret to keeping your model's learning on track. Momentum teaches us that if you want to reach the bottom of a complex mountain, you can't just look at where you are—you have to remember where you've been and use that speed to carry you through the difficult parts.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we give the boulder <strong>Brakes</strong> for every individual wheel? Explore the king of optimizers: <strong><a href="#/machine-learning/optimization-ml/adam">Adam Optimizer</a></strong>.
    </div>
  `
};


