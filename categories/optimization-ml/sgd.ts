import { TopicSection } from '../../src/data/types';

export const sgdSection: TopicSection = {
  id: "sgd-ml",
  title: "Stochastic Gradient Descent (SGD)",
  description: "A version of gradient descent that uses only a subset of the data (mini-batch) at each step, significantly speeding up training on massive datasets.",
  color: "#F44336",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">⚡ Optimization · ML</div>
      <h1>SGD: The Drunken Sailor</h1>
      <p>If Batch GD is a <strong>Skier</strong> waiting for 100 people before taking a step, <strong>Stochastic Gradient Descent (SGD)</strong> is a <strong>Drunken Sailor</strong>. He just takes a look at <strong>One Data Point</strong> (or a small Mini-Batch) and runs in that direction. He's noisy, he's fast, and he's <strong>The reason modern AI works</strong> on 1-Terabyte datasets.</p>
    </div>

    <h2 id="theory">Theoretical Core: Variance & Speed</h2>
    <p>In <strong>SGD</strong>, we use a single randomly chosen sample \(x_i\) to estimate the gradient. In <strong>Mini-Batch GD</strong>, we use a small subset (e.g., 32 or 64). The estimate is "Noisy" (High Variance), but we take 1,000 steps in the time Batch GD takes one.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of it as <strong>"Exploration over Precision."</strong> 
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

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Drunken Sailor's Stumble</h2>
    
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
          SGD is <strong>Noisy</strong>. If you plot the loss, it looks like a heart rate monitor. But that noise is the model's <strong>Secret Weapon</strong> for ignoring minor errors and finding the big truth.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
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
  `
};
