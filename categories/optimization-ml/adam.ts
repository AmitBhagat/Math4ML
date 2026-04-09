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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In a standard neural network with millions of parameters, why would you use the same learning rate for every single neuron? Some weights are dealing with sparse data and only see a signal once in a blue moon, while others are bombarded with constant, noisy updates. <strong>Adam (Adaptive Moment Estimation)</strong> is the "King" of optimizers because it treats every parameter as an individual. It combines the <strong>Memory of Momentum</strong> (the 1st moment) with the <strong>Adaptivity of RMSProp</strong> (the 2nd moment). It essentially gives every weight its own, custom-tuned learning rate that changes dynamically over time. It is the tactical decision to trust the specific context of each parameter rather than forcing a one-size-fits-all strategy on the entire model.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Adaptive Moment Estimation</div>
      <p>The **Adam** optimizer maintains exponentially moving averages of the gradient ($m_t$) and the squared gradient ($v_t$) to provide per-parameter adaptive updates. At each step $t$:</p>
      <div class="math-block">
        $$m_t = \beta_1 m_{t-1} + (1 - \beta_1) g_t$$
        $$v_t = \beta_2 v_{t-1} + (1 - \beta_2) g_t^2$$
      </div>
      <p>where $g_t$ is the current gradient. To account for initialization at zero, these moments are bias-corrected:</p>
      <div class="math-block">
        $$\hat{m}_t = \frac{m_t}{1 - \beta_1^t}, \quad \hat{v}_t = \frac{v_t}{1 - \beta_2^t}$$
      </div>
      <p>The final parameter update utilizes these corrected estimates:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Update Rule</strong>: $\theta_{t+1} = \theta_t - \eta \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \epsilon}$. The step size is effectively normalized by the local volatility.</li>
        <li><strong>Robustness</strong>: $\beta_1$ (typically 0.9) acts as Momentum, while $\beta_2$ (typically 0.999) acts as an adaptive scaling factor (RMSProp).</li>
        <li><strong>Bias Correction</strong>: Crucial during the initial steps when $m_t$ and $v_t$ are heavily biased towards the origin.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Adam is the de facto standard for Deep Learning, as it offers the fastest convergence and is most resilient to hyperparameter choices.</p>
    </div>
    
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

