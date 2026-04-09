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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>If Batch Gradient Descent is a cautious skier waiting for 1,000 people to report back on the slope before taking a single step, <strong>Stochastic Gradient Descent (SGD)</strong> is a reckless speed demon. Instead of looking at the whole mountain, SGD looks at just <strong>One Data Point</strong> (or a small Mini-Batch) and immediately lunges in that direction. Because it doesn't wait for a consensus, it moves thousands of times faster. Yes, its path is noisy and it "stumbles" constantly—looking more like a confused bee than a skier—but that noise is actually a <strong>Secret Weapon</strong>. The random jolts Allow the model to "jump" out of shallow pits (local minima) that would trap a perfect, cautious optimizer. It is the tactical decision to trade precision for speed and exploration, which is the only way to train modern AI on massive, terabyte-scale datasets.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Unbiased Estimators & Stochastic Finite-Sums</div>
      <p>SGD is "Fast Estimation." It replaces the perfect, slow truth with a fast, noisy guess that averages out to the truth over time.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine a massive mountain range representing your loss function across 1 million data points. <strong>Batch Gradient Descent</strong> waits until it has surveyed every single pebble on every slope before taking one perfect step. <strong>Stochastic Gradient Descent (SGD)</strong> looks at just one pebble (or a small batch) and moves immediately. Geometrically, this transforms the smooth "water-flow" descent into a jittery, zig-zagging <strong>Random Walk</strong>. However, this noise is a feature—the "kinetic energy" from the jittering helps the model vibrate out of shallow local minima (traps) that would have permanently stuck a perfect algorithm.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>Our objective is the average loss over $n$ samples: $J(\theta) = \frac{1}{n} \sum_{i=1}^n Q_i(\theta)$. The true gradient is the average of all individual gradients. In SGD, we sample a random index $i$ and use the gradient of that single point as an approximation:</p>
      <div class="math-block">
        $$\theta_{t+1} = \theta_t - \eta \nabla Q_i(\theta_t)$$
      </div>
      <p>The core mathematical justification is that the stochastic gradient is an <strong>Unbiased Estimator</strong> of the true gradient. In expectation, the "mean" direction is correct:</p>
      <div class="math-block">
        $$\mathbb{E}[\nabla Q_i(\theta)] = \frac{1}{n} \sum_{i=1}^n \nabla Q_i(\theta) = \nabla J(\theta)$$
      </div>
      <p>Even though any individual step might be "wrong," the net movement over many steps converges to the same destination as Batch GD, but millions of times faster.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, we almost always use <strong>Mini-batch SGD</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Batch Size ($B$)</strong>: We average the gradient over a small group (e.g., 32 or 64 samples). This reduces the variance of the estimate while still being fast enough to fit in GPU memory.</li>
        <li><strong>Online Stability</strong>: SGD is the only way to train on data streams that never stop (e.g., social media feeds), as it doesn't requires seeing the "end" of the data to start learning.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: SGD requires a <strong>Decaying Learning Rate</strong>. If you don't slow down as you approach the minimum, the "jitter" will eventually prevent you from ever landing in the center, and you will just orbit the minimum forever.</p>
    </div>
    
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
    <python-code>
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

    <h2 id="applications">Applications in ML</h2>
    <p>Stochastic Gradient Descent is the "Street-Smart" version of model training. It trades the absolute precision of looking at every data point for the speed and agility required to handle massive, real-world datasets.</p>
    <ul>
      <li><strong>Online Real-time Recommendations</strong>: When you click a video on TikTok or YouTube, the recommendation model doesn't wait for the end of the day to update. It uses a form of SGD to take a "Single Point" update based on your specific click, immediately surfacing more relevant content in your next scroll. This "Stochastic" speed is what makes modern feeds feel alive and responsive.</li>
      <li><strong>Deep Learning on Big Data (Mini-batches)</strong>: When training massive models like GPT, the entire dataset (Terabytes of text) cannot possibly fit into a computer's RAM. Engineers use SGD with "Mini-batches"—taking small groups of 16 or 32 sentences at a time to calculate a rough gradient. This allowing the model to learn incrementally without crashing the system, which is the only reason large-scale AI is possible.</li>
    </ul>
    <p>Teacher's Final Word: Sometimes, being fast and messy is better than being slow and perfect. SGD teaches us that in the real world, the "Average" of a thousand fast, noisy guesses is often more powerful than a single, perfectly calculated plan that takes forever to execute.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we give the sailor a <strong>Sled</strong> so he can use his speed more effectively? Explore <strong><a href="#/machine-learning/optimization-ml/momentum">Momentum</a></strong>.
    </div>
  `
};



