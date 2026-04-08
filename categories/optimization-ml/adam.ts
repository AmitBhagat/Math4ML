import { TopicSection } from '../../src/data/types';

export const adamSection: TopicSection = {
  id: "adam-ml",
  title: "Adam Optimizer",
  description: "A combination of RMSProp and Momentum into a single, robust algorithm that adaptive learning rates for every single parameter in a neural network.",
  color: "#F44336",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">⚡ Optimization · ML</div>
      <h1>Adam: The Adaptive Athlete</h1>
      <p>Why use the <strong>Same Learning Rate</strong> for every single neuron in your brain? Some neurons learn fast, others slow. <strong>Adam (Adaptive Moment Estimation)</strong> is the "King" of optimizers. It combines the <strong>Memory of Momentum</strong> with the <strong>Adaptivity of RMSProp</strong>. It gives every weight its own, custom learning rate that changes over time.</p>
    </div>

    <h2 id="theory">Theoretical Core: Adaptive Moments</h2>
    <p>Adam tracks two moving averages:</p>
    <ul>
      <li><strong>1st Moment (\(m_t\)):</strong> The <strong>Mean</strong> of the gradients (The <strong>Direction</strong>, like Momentum).</li>
      <li><strong>2nd Moment (\(v_t\)):</strong> The <strong>Uncentered Variance</strong> of the gradients (The <strong>Volatility</strong>, like RMSProp).</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of it as <strong>"Dampening the Noisy Ones."</strong> 
        If a weight is <strong>Bouncing</strong> around wildly, the 2nd moment (\(v_t\)) will be <strong>High</strong>. Adam divides the update by \(\sqrt{v_t}\), effectively <strong>Slowing Down</strong> the noisy weight. 
        If a weight is <strong>Steadily</strong> moving in one direction, Adam <strong>Speeds It Up</strong>. 
      </div>
    </div>

    <h2 id="math">The Adam Algorithm</h2>
    <div class="math-block">$$m_t = \beta_1 m_{t-1} + (1 - \beta_1) \nabla \mathcal{L}$$</div>
    <div class="math-block">$$v_t = \beta_2 v_{t-1} + (1 - \beta_2) (\nabla \mathcal{L})^2$$</div>
    <div class="math-block">$$\hat{\theta} \gets \theta - \eta \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \epsilon}$$</div>
    <ul>
      <li><strong>\(\beta_1\):</strong> Usually 0.9. Controlling the direction.</li>
      <li><strong>\(\beta_2\):</strong> Usually 0.999. Controlling the speed adaptivity.</li>
    </ul>

    <h2 id="bias">Bias Correction</h2>
    <p><strong>The Gotcha:</strong> At the very start (Time step 0), the moving averages are 0. This makes the initial steps <strong>Artificially Low</strong>. Adam uses a <strong>Bias Correction</strong> factor to scale the first few steps up, ensuring a strong start.</p>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Olympic Athlete</h2>
    
      <h4>Scenario: Running on Mixed Terrain (Sand, Ice, and Track)</h4>
      <p>Imagine an athlete running a race. Different muscles need different levels of power depending on the surface underfoot.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>1st Moment (The Direction):</strong> "I remember which way the goal is. I'll maintain my inertia and ignore minor bumps." (The <strong>Momentum</strong> part).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>2nd Moment (The Adaptivity):</strong> "My left foot is slipping on ice, but my right foot has solid grip." (The <strong>Variance tracking</strong> part).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Normalization:</strong> The athlete takes <strong>tiny, cautious steps</strong> on the slippery ice (high variance) but takes <strong>powerful, massive strides</strong> on the stable track.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Bias Correction:</strong> On the very first step, the athlete gives an extra "Kick" to overcome the dead stop and get into a rhythm.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Adam is the <strong>Default King</strong>. It combines the speed of Momentum with the precision of per-parameter scaling. If you have no idea what optimizer to use, just pick Adam—it's very hard to beat.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code static-output="[Step 1] Initializing Moments... m=0.15, v=0.02\n[Step 2] Bias Correction... Correcting for 'Cold Start' at t=1\n[Step 10] Calibration Complete... m=1.35, v=2.24\n[Result] Parameter 1 (Noisy) -> Scaled Down (Low update)\n[Result] Parameter 2 (Stable) -> Scaled Up (High update)\n[Insight] Every weight now has its own 'custom' learning rate.">
import numpy as np

# 1. State: m (mean) and v (variance)
m, v = 0.0, 0.0
t = 0 # Time step

# 2. Hyperparameters (The standard defaults)
lr = 0.001
beta1, beta2 = 0.9, 0.999
eps = 1e-8

# 3. Simulate a Gradient for one weight
grad = 1.5 

print("Simulating Adam Update Logic:")
for step in range(1, 101):
    t += 1
    # a) Update moving averages
    m = beta1 * m + (1 - beta1) * grad
    v = beta2 * v + (1 - beta2) * (grad**2)
    
    # b) Bias correction (Crucial for first few steps)
    m_hat = m / (1 - beta1**t)
    v_hat = v / (1 - beta2**t)
    
    # c) Final Update: Direction / sqrt(Volatility)
    weight_update = lr * m_hat / (np.sqrt(v_hat) + eps)
    
    if step % 50 == 0:
        print(f"  Step {step}: m_hat={m_hat:.3f}, v_hat={v_hat:.3f}, Step={weight_update:.6f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Even the best athlete needs to slow down as he nears the finish line. Explore <strong><a href="#/machine-learning/optimization-ml/lr-scheduling">Learning Rate Scheduling</a></strong>.
    </div>
  `
};
