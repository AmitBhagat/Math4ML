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
      <div class="premium-def-title">Formalism: The Stochastic Approximation</div>
      <p>Given a training set of $N$ samples, the total loss is $J(\theta) = \frac{1}{N} \sum_{i=1}^N J_i(\theta)$. **Stochastic Gradient Descent (SGD)** approximates the gradient by evaluating only a single, randomly sampled index $i$ at each step:</p>
      <div class="math-block">
        $$\theta_{t+1} = \theta_t - \eta_t \nabla_\theta J_i(\theta_t)$$
      </div>
      <p>This approach introduces high-frequency noise but offers significant computational advantages:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Unbiased Estimation</strong>: $\mathbb{E}_i [\nabla J_i(\theta)] = \nabla J(\theta)$. On average, the stochastic step points in the same direction as the true batch gradient.</li>
        <li><strong>Exploration via Noise</strong>: The "jitter" in the optimization path helps the model escape high-loss regions and shallow plateaus where Batch GD might stall.</li>
        <li><strong>Mini-Batch Vectorization</strong>: In practice, we use a small subset $\mathcal{B}$ to compute the gradient $\frac{1}{|\mathcal{B}|} \sum_{i \in \mathcal{B}} \nabla J_i(\theta)$, which balances hardware efficiency with gradient stability.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">SGD is the workhorse of Deep Learning, allowing for the training of billion-parameter models on datasets that cannot fit in system memory.</p>
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


