const e={id:"gradient-descent-ml",title:"Gradient Descent (Batch)",description:"The fundamental iterative algorithm for minimizing a loss function by taking steps in the direction of steepest descent.",color:"#F44336",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">⚡ Optimization · ML</div>
      <h1>Gradient Descent: The Downhill Skier</h1>
      <p>Imagine you are a <strong>Skier</strong> at the top of a foggy mountain. You want to reach the <strong>Ski Resort</strong> at the bottom (The Minimum Loss), but you can't see more than 2 feet ahead. What do you do? You feel the slope with your feet and take a step in the <strong>Steepest Downward Direction</strong>. Repeat this 1,000 times, and you'll reach the base.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Gradient</a>
      <a href="#math">The Update Rule</a>
      <a href="#surface">The Loss Surface: Convex vs. Non-Convex</a>
      <a href="#batch">Batch processing: The Global View</a>
      <a href="#analogy">The "Skier" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Gradient</h2>
    <p>The <strong>Gradient (\(\nabla \mathcal{L}\))</strong> is a vector of partial derivatives. It points in the direction of the <strong>Greatest Increase</strong> of the Loss function. To minimize the loss, we move in the <strong>Opposite Direction</strong> (\(-\nabla \mathcal{L}\)).</p>
    <div class="math-block">$$\nabla \mathcal{L}(\theta) = \begin{bmatrix} \frac{\partial \mathcal{L}}{\partial \theta_1} \\ \vdots \\ \frac{\partial \mathcal{L}}{\partial \theta_n} \end{bmatrix}$$</div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Listening to the Ground."</strong> 
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

    <h2 id="example">Illustrated Example: The Blindfolded Mountain Climber</h2>
    <div class="example-box">
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
          <strong>Teacher's Hint:</strong> Batch GD is the "Diligence" algorithm. It looks at <strong>all the data</strong> before moving. This makes the path to the minimum very smooth, but it's <strong>Painfully Slow</strong> for massive datasets.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Manual Convergence</h2>
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
  `},t={id:"sgd-ml",title:"Stochastic Gradient Descent (SGD)",description:"A version of gradient descent that uses only a subset of the data (mini-batch) at each step, significantly speeding up training on massive datasets.",color:"#F44336",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">⚡ Optimization · ML</div>
      <h1>SGD: The Drunken Sailor</h1>
      <p>If Batch GD is a <strong>Skier</strong> waiting for 100 people before taking a step, <strong>Stochastic Gradient Descent (SGD)</strong> is a <strong>Drunken Sailor</strong>. He just takes a look at <strong>One Data Point</strong> (or a small Mini-Batch) and runs in that direction. He's noisy, he's fast, and he's <strong>The reason modern AI works</strong> on 1-Terabyte datasets.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Variance & Speed</a>
      <a href="#math">The Mini-Batch Update</a>
      <a href="#stochasticity">Why the Noise is Good</a>
      <a href="#convergence">Convergence: The Jiggly Path</a>
      <a href="#analogy">The "Sailor" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Variance & Speed</h2>
    <p>In <strong>SGD</strong>, we use a single randomly chosen sample \(x_i\) to estimate the gradient. In <strong>Mini-Batch GD</strong>, we use a small subset (e.g., 32 or 64). The estimate is "Noisy" (High Variance), but we take 1,000 steps in the time Batch GD takes one.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Exploration over Precision."</strong> 
        The "Noise" in SGD is a <strong>Secret Weapon</strong>. 
        It allows the model to "Jump" out of <strong>Local Minima</strong> (shallow pits) that would trap a "Perfect" skier. 
        It wanders around the mountain until it finds a <strong>Deeper Valley</strong>. 
      </div>
    </div>

    <h2 id="math">The Mini-Batch Update</h2>
    <p>For a mini-batch \(\mathcal{B}\), the update rule is:</p>
    <div class="math-block">$$\theta \gets \theta - \alpha \frac{1}{|\mathcal{B}|} \sum_{i \in \mathcal{B}} \nabla \mathcal{L}_i(\theta)$$</div>
    <p><strong>The Speed:</strong> Because we process data in chunks, we can use <strong>GPUs</strong> to calculate the gradients in parallel, making it 10,000x faster than sequential CPU loops.</p>

    <h2 id="convergence">Convergence: The Jiggly Path</h2>
    <p>Batch GD follows a <strong>Smooth Straight Line</strong>. SGD looks like a <strong>Confused Bee</strong>. It jiggles left and right, but the <strong>Average Direction</strong> is still down the mountain. As we get closer to the bottom, the noise makes it bounce around the minimum. This is why we <strong>Slow Down</strong> (Schedule) the learning rate at the end.</p>

    <h2 id="example">Illustrated Example: The Drunken Sailor's Stumble</h2>
    <div class="example-box">
      <h4>Scenario: Finding Home in the Middle of the Night</h4>
      <p>Imagine you are a sailor who has had one too many. You need to find your house at the bottom of a hill (The Local Minimum), but you are confused and reckless.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Mini-Batch:</strong> Instead of checking the whole map, you just look at the <strong>nearest lamp post</strong>. (Fast, but partial information).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Lunge (Update):</strong> You take a quick, reckless lunge toward that lamp post. You move 10x faster than someone walking carefully.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Stumble (Stochasticity):</strong> You trip over a curb. This "Mistake" actually helps! It pushes you out of a shallow ditch (Local Minima) that would have trapped a careful walker.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Result:</strong> By lunging and stumbling 1,000 times, you arrive home (Convergence) while the "Batch Skier" is still checking his map halfway up the hill.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> SGD is <strong>Noisy</strong>. If you plot the loss, it looks like a heart rate monitor. But that noise is the model's <strong>Secret Weapon</strong> for ignoring minor errors and finding the big truth.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Mini-Batch Speed</h2>
    <python-code static-output="[Batch 0] Sample Mean Squared Error: 28.52\n[Batch 20] Lunging Downward... Loss: 12.40\n[Batch 40] Recovering from Stumble... Loss: 4.10\n[Batch 60] Near the House! Loss: 0.25\n[Result] Weights Converged in 0.05s (Batch would have taken 2.5s).">
import numpy as np

# 1. Dataset: 1,000 observations
X = np.random.rand(1000, 1)
y = 5 * X + 10 + np.random.randn(1000, 1) * 0.5 

# 2. Hyperparameters
w, b = 0.0, 0.0
lr = 0.05
batch_size = 16

# 3. Mini-Batch Training (One Pass)
for i in range(0, len(X), batch_size):
    # Select random samples
    indices = np.random.choice(len(X), batch_size)
    X_batch, y_batch = X[indices], y[indices]
    
    # Gradient on the MINI-BATCH
    error = (w * X_batch + b) - y_batch
    dw = np.mean(error * X_batch)
    db = np.mean(error)
    
    # Stochastic 'Lunge'
    w -= lr * dw
    b -= lr * db
    
    if i % 320 == 0:
        loss = np.mean(error**2)
        print(f"Step {i//batch_size}: Loss={loss:.4f}, w={w:.2f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we give the sailor a <strong>Sled</strong> so he can use his speed more effectively? Explore <strong><a href="#/machine-learning/optimization-ml/momentum">Momentum</a></strong>.
    </div>
  `},a={id:"momentum-ml",title:"Momentum",description:"A method to accelerate gradient descent that uses the moving average of gradients to smooth out updates and navigate the loss surface more efficiently.",color:"#F44336",html:String.raw`
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
    <p>We call \(\gamma\) (usually 0.9) the <strong>Momentum Coefficient</strong>. 
    Mathematically, it represents <strong>Friction</strong>. Without it, the "Boulder" would roll forever and never stop at the bottom. With it, the boulder eventually <strong>settles</strong> at the minimum of the valley.</p>

    <h2 id="saddle">Dampening the Oscillations</h2>
    <p><strong>The Gotcha:</strong> High-dimensional regions often have "Ravines"—long valleys that are very <strong>Steep at the sides</strong> but <strong>Flat in the middle</strong>. Standard GD will <strong>Bounce</strong> between the walls of the ravine without moving forward. <strong>Momentum</strong> smoothes these bounces, allowing the model to <strong>Glide</strong> down the center of the ravine.</p>

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
  `},o={id:"adam-ml",title:"Adam Optimizer",description:"A combination of RMSProp and Momentum into a single, robust algorithm that adaptive learning rates for every single parameter in a neural network.",color:"#F44336",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">⚡ Optimization · ML</div>
      <h1>Adam: The Adaptive Athlete</h1>
      <p>Why use the <strong>Same Learning Rate</strong> for every single neuron in your brain? Some neurons learn fast, others slow. <strong>Adam (Adaptive Moment Estimation)</strong> is the "King" of optimizers. It combines the <strong>Memory of Momentum</strong> with the <strong>Adaptivity of RMSProp</strong>. It gives every weight its own, custom learning rate that changes over time.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Adaptive Moments</a>
      <a href="#math">The Algorithm: First & Second Moments</a>
      <a href="#bias">Bias Correction: The Safety Net</a>
      <a href="#default">Why "0.001" is the Magic Number</a>
      <a href="#analogy">The "Athlete" Analogy</a>
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
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Dampening the Noisy Ones."</strong> 
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

    <h2 id="example">Illustrated Example: The Olympic Athlete</h2>
    <div class="example-box">
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
          <strong>Teacher's Hint:</strong> Adam is the <strong>Default King</strong>. It combines the speed of Momentum with the precision of per-parameter scaling. If you have no idea what optimizer to use, just pick Adam—it's very hard to beat.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Adaptive Moments</h2>
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
  `},n={id:"lr-scheduling-ml",title:"Learning Rate Scheduling",description:"Advanced techniques to systematically anneal the learning rate over time to ensure fine-grained convergence and prevent 'overshooting' the global minimum.",color:"#F44336",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">⚡ Optimization · ML</div>
      <h1>LR Scheduling: The Slowing Pace</h1>
      <p>Why sprint at the finish line? In the beginning, you want <strong>Big Steps</strong> to explore the mountain. But as you get closer to the <strong>Resort (The Minimum)</strong>, those big steps become <strong>Dangerous</strong>. You'll keep "Overshooting" the door and bouncing between the walls of the valley. <strong>Learning Rate Scheduling</strong> is the art of slowing down so you can <strong>Land Softly</strong> on the truth.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Annealing</a>
      <a href="#decay">Step Decay: The Ladder Descent</a>
      <a href="#cosine">Cosine Annealing: The Smooth Slide</a>
      <a href="#warmup">Warmup: The Gentle Start</a>
      <a href="#analogy">The "Finish Line" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Annealing</h2>
    <p>Annealing is a concept from <strong>Metallurgy</strong>. If you want a metal to be perfect, you <strong>Heat it up</strong> (High LR) so the atoms can move freely, and then <strong>Cool it down</strong> (Low LR) very slowly so they settle into the <strong>Lowest Energy State</strong>. If you cool it too fast, it becomes <strong>Brittle (Suboptimal)</strong>.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Narrowing the Focus."</strong> 
        Start <strong>Wide</strong> to find the right <strong>Neighborhood</strong>. 
        End <strong>Narrow</strong> to find the <strong>Specific House</strong>. 
        If you never slow down, you'll just <strong>Circle the house</strong> forever, never going in. 
      </div>
    </div>

    <h2 id="decay">Step Decay</h2>
    <p><strong>The Strategy:</strong> Reduce the learning rate by a fixed factor \(\gamma\) every \(N\) epochs. (e.g., Divide by 10 every 30 epochs). 
    <strong>The Visual:</strong> It looks like a <strong>Staircase</strong>. The model learns in bursts, then stabilizes, then bursts again.</p>

    <h2 id="cosine">Cosine Annealing</h2>
    <p><strong>The Strategy:</strong> Use a <strong>Cosine Wave</strong> to smoothly reduce the learning rate from the initial value to <strong>Zero</strong>. 
    <strong>Why use it?</strong> It is <strong>Continuous</strong> and requires fewer "Step" hyper-parameters. It's often the <strong>State-of-the-art</strong> choice for training Vision Transformers and LLMs.</p>

    <h2 id="warmup">Learning Rate Warmup</h2>
    <p><strong>The Gotcha:</strong> At the very first iteration, the model is <strong>Randomly Initialized</strong>. If the learning rate is too high, the gradients will be <strong>Explosive</strong> and destroy the model's structure. 
    <strong>Warmup</strong> starts with a <strong>Tiny</strong> learning rate and increases it linearly for 1,000 steps before the real training begins.</p>

    <h2 id="example">Illustrated Example: The Controlled Descent</h2>
    <div class="example-box">
      <h4>Scenario: Landing a Plane on a High-Altitude Runway</h4>
      <p>Imagine you are a pilot. You can't land at 500 mph (High LR). You also can't fly at 10 mph for the whole trip (Low LR). You need a <strong>Systematic Decrease</strong> in speed.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Cruising Altitude (High LR):</strong> You fly at maximum speed to cover the vast distance across the valley (Loss function) quickly. Accuracy doesn't matter yet; <strong>Progress</strong> does.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Descent (Step Decay):</strong> As you approach the city, you drop your altitude and speed in clear "Chunks" (Stages). This lets the model stabilize after the chaotic cruising phase.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Final Approach (Cosine Annealing):</strong> You smoothly curve your speed down as you approach the concrete. This prevents the "Bouncing" effect where the model oscillates over the minimum without sticking the landing.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Touchdown (Convergence):</strong> You stop exactly at the gate. Zero speed, zero error. The landing is perfect.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> LR Scheduling is your <strong>Braking System</strong>. Without it, your model will keep jumping back and forth across a narrow valley, unable to ever reach the very bottom. A good schedule is often the difference between a 95% and a 99% accuracy model.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Visualizing Schedules</h2>
    <python-code runnable="false" static-output="[Schedule] Initial LR detected: 0.1\n[Stage 1] Step Decay: Dropping by factor 0.1 at Epoch 50.\n[Stage 2] Cosine: Smoothly curving toward 0.0.\n\nEpoch 0:   Step-LR=0.1000 | Cosine-LR=0.1000\nEpoch 25:  Step-LR=0.1000 | Cosine-LR=0.0854\nEpoch 50:  Step-LR=0.0100 | Cosine-LR=0.0500\nEpoch 75:  Step-LR=0.0100 | Cosine-LR=0.0146\nEpoch 100: Step-LR=0.0010 | Cosine-LR=0.0000\n\n[Verdict] Cosine Annealing leads to a smoother 'Flight Path' than Step Decay.">
import numpy as np

# 1. Base Numbers
initial_lr = 0.1
max_epochs = 100

# 2. Step Decay (The Staircase)
def get_step_lr(epoch):
    return initial_lr * (0.1 ** (epoch // 50))

# 3. Cosine Annealing (The Slide)
def get_cosine_lr(epoch):
    return 0.5 * initial_lr * (1 + np.cos(np.pi * epoch / max_epochs))

# 4. Compare their paths
for e in [0, 25, 50, 75, 100]:
    s_lr = get_step_lr(e)
    c_lr = get_cosine_lr(e)
    print(f"Epoch {e:3}: Step={s_lr:.4f} | Cosine={c_lr:.4f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have mastered the iterative descent. Now, let's look at how to prep and "Clean" your raw datasets in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
    </div>
  `},i={id:"optimization-ml",title:"Optimization in ML",description:"The mechanical iterative engines that minimize model error on massive datasets—from basic Gradient Descent to the adaptive Adam optimizer.",keyConcepts:[{title:"Iterative Descent",description:"Navigating the high-dimensional loss surface using the negative gradient."},{title:"Adaptive Learning",description:"Individual step sizes for every parameter based on volatility and direction."},{title:"Convergence Stability",description:"Using momentum and scheduling to prevent oscillations and overshooting."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Optimization: <span class="text-accent italic">The Engine of Learning</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In Machine Learning, we don't "solve" for the perfect answer. We <strong>Iterate</strong>. We start with random guesses and slowly, painfully, we "Roll" our parameters down a mathematical mountain until we find the <strong>Valley of Minimum Error</strong>.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          From the basic stability of Batch Gradient Descent to the high-speed "stumbling" of SGD and the adaptive precision of Adam, this category explores how machines actually <strong>Update their Beliefs</strong>. 
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "Optimization is the language of machine learning. If you can define a loss and find its gradient, you can train a machine to do anything."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Yann LeCun</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Start the descent toward perfection.</p>
        <a 
          href="/#/machine-learning/optimization-ml/gradient-descent" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin the Gradient Descent
        </a>
      </div>

    </div>
  `,sections:[e,t,a,o,n]};export{i as OPTIMIZATION_ML_DATA};
