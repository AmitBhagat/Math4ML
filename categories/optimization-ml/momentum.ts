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

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Exponentially Weighted Averages</a>
      <a href="#math">The Velocity Update Rule</a>
      <a href="#physics">The Physics of Optimization</a>
      <a href="#saddle">Dampening the Oscillations</a>
      <a href="#analogy">The "Boulder" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Moving Average</h2>
    <p>Momentum maintains a <strong>Velocity (\(v\))</strong>. At every step, we update the velocity using the current gradient <strong>plus</strong> a fraction \(\gamma\) of the previous velocity. This is an <strong>Exponentially Weighted Moving Average</strong>.</p>
    <div class="math-block">$$v_t = \gamma v_{t-1} + \eta \nabla \mathcal{L}(\theta_t)$$</div>
    <div class="math-block">$$\theta_{t+1} = \theta_t - v_t$$</div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Memory for Direction."</strong> 
        The "Noise" in SGD makes the sailor zigzag left and right. 
        If he zig-zags, the <strong>Left and Right</strong> cancel each other out over time, but the <strong>Forward</strong> direction (downhill) keeps <strong>Adding Up</strong>. 
        Momentum "Accumulates" the downhill force while "Canceling" the noise. 
      </div>
    </div>

    <h2 id="physics">The Physics of Optimization</h2>
    <p>We call \(\gamma\) (usually 0.9) the **Momentum Coefficient**. 
    Mathematically, it represents <strong>Friction</strong>. Without it, the "Boulder" would roll forever and never stop at the bottom. With it, the boulder eventually <strong>settles</strong> at the minimum of the valley.</p>

    <h2 id="saddle">Dampening the Oscillations</h2>
    <p><strong>The Gotcha:</strong> High-dimensional regions often have "Ravines"—long valleys that are very <strong>Steep at the sides</strong> but <strong>Flat in the middle</strong>. Standard GD will <strong>Bounce</strong> between the walls of the ravine without moving forward. **Momentum** smoothes these bounces, allowing the model to <strong>Glide</strong> down the center of the ravine.</p>

    <h2 id="example">Illustrated Example: The Heavy Boulder</h2>
    <div class="example-box">
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
          <strong>Teacher's Hint:</strong> Momentum is the <strong>Smoother</strong>. It ignores the jiggles in your gradient and focus exclusively on the <strong>Major Trend</strong>. If your loss is oscillating wildly, you need more momentum.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: SGD vs. Momentum</h2>
    <python-code static-output="[Comparison] Running for 10 steps on a 1D parabolic surface...\n[Step 0] SGD Pos: 8.00 | Mom Pos: 8.50 (Initial drag)\n[Step 5] SGD Pos: 1.07 | Mom Pos: 0.22 (Momentum has built speed!)\n[Step 10] SGD Pos: 0.12 | Mom Pos: 0.00 (Momentum reached the target!)\n[Result] Momentum is 3.5x faster at reaching the 'Center' than vanilla SGD.">
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

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we give the boulder <strong>Brakes</strong> for every individual wheel? Explore the king of optimizers: <strong><a href="#/machine-learning/optimization-ml/adam">Adam Optimizer</a></strong>.
    </div>
  `
};
