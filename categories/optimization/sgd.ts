import { TopicSection } from '../../src/data/types';

export const sgdSection: TopicSection = {
  id: "sgd",
  title: "Stochastic Gradient Descent (SGD)",
  description: "SGD is an iterative method for optimizing an objective function with suitable smoothness properties, using only one (or a few) samples at a time.",
  color: "#F44336",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🏹 Optimization · SGD</div>
      <h1>Stochastic Gradient Descent: The Noisy Hustle</h1>
      <p><strong>Stochastic Gradient Descent (SGD)</strong> is the engine of Deep Learning. While Batch Gradient Descent waits to see all 1 million data points before taking a single step, SGD takes a step after seeing just one (or a few). It is <strong>Fast</strong>, <strong>Noisy</strong>, and surprisingly effective at avoiding local traps.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Calculating the perfect gradient for 1 billion data samples takes a massive amount of time. <strong>Stochastic Gradient Descent (SGD)</strong> replaces that long wait with "Noisy Speed." Instead of calculating the "True Gradient" for the whole city, we calculate a "Noisy Estimate" using just one random person (data point). This estimate is "wrong" in the short term, but on average, it points exactly the same way as the true gradient. It’s the difference between waiting for a full committee vote before taking a step and just asking the person nearest to you. It turns out that moving <strong>constantly</strong> is much better than moving <strong>perfectly</strong>. It is the tactical engine of modern deep learning, allowing us to navigate vast datasets with incredible speed.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Stochastic Finite-Sum Optimization</div>
      <p>Stochastic Gradient Descent (SGD) is a version of gradient descent where the gradient of the objective function $J(\theta) = \frac{1}{n} \sum_{i=1}^n f_i(\theta)$ is approximated using a single randomly selected sample $i_t$ at each iteration:</p>
      
      <div class="math-block">
        $$\theta_{t+1} = \theta_t - \eta \nabla_\theta f_{i_t}(\theta_t)$$
      </div>
      
      <p>The mathematical properties that distinguish SGD from Batch GD include:</p>
      <ul class="mt-2 space-y-1">
        <li><strong>Unbiased Estimation</strong>: The stochastic gradient is an unbiased estimator of the true gradient, meaning $\mathbb{E}[\nabla f_{i_t}(\theta_t)] = \nabla J(\theta_t)$. On average, the algorithm moves in the correct direction.</li>
        <li><strong>Stochastic Noise</strong>: The variance in the gradient estimate introduces "jitter" into the optimization path. This noise acts as a natural regularizer, allowing the model to "jump" out of shallow local minima and find flatter, more generalizable minima.</li>
        <li><strong>Convergence</strong>: Convergence to a stationary point is guaranteed under the **Robbins-Monro conditions** (e.g., using a decaying learning rate).</li>
      </ul>
      
      <p class="mt-2">In practice, we use **Mini-batch SGD**, which averages the gradient over $B$ samples ($1 < B < n$) to achieve a hardware-efficient balance between noise and stability.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of SGD as <strong>"The Noisy Hustle"</strong> or <strong>"Traveling by Drunkard's Walk."</strong> 
        If you are a drunkard trying to reach the bottom of a hill, you might stumble left and right, but since the "Slope" is pulling you down, every misstep eventually averages out toward the goal. 
        In Machine Learning, this "Noise" is actually a feature, not a bug—the random stumbles help the model "jump out" of shallow traps (local minima) that would catch a "perfect" but rigid Batch Gradient Descent. It is the reason why we can train massive models like <strong>LLMs</strong> on trillions of tokens without waiting for eternity. It is the "Dynamic Agility" of the optimization world.
      </div>
    </div>

    <h2 id="example-noise" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Noisy Gradient</h2>
    
      <h4>Problem: Comparing Step Quality</h4>
      <p>Population: [100, 150, 200]. Loss: Aiming for \(\mu\). Correct gradient for \(\mu=100\) is -100.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Batch GD:</strong> \(\nabla = -100\) (Correct direction).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>SGD (Sample 1):</strong> \(\nabla = 0\) (No movement).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>SGD (Sample 2):</strong> \(\nabla = -50\) (Partial movement).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>SGD (Sample 3):</strong> \(\nabla = -100\) (Correct movement).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Over time, the sum of SGD steps averages out to the Batch GD step. We trade <strong>Accuracy per Step</strong> for <strong>Speed of Iteration</strong>.
        </div>
      </div>
    

    <h2 id="example-mini" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Mini-batch Training</h2>
    
      <h4>Problem: The Best of Both Worlds</h4>
      <p>Instead of 1 sample (Pure SGD) or all samples (Batch GD), we use a <strong>Mini-batch</strong> of 32 samples.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Logic:</strong> We average the gradients of 32 points. This dramatically reduces the noise compared to pure SGD.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Speed:</strong> GPU hardware is optimized for processing 32 or 64 points simultaneously.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Mini-batch SGD is the "Standard" for all Neural Networks (Adam, RMSProp, etc.). It gives us the <strong>Stability</strong> of Batch GD and the <strong>Computational Speed</strong> of SGD.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

# Simple regression: y = 2x
data = np.random.uniform(0, 10, (1000, 1))
labels = 2 * data + np.random.normal(0, 1, (1000, 1))

w = 0.0 # random start
lr = 0.01

# SGD loop
for epoch in range(10):
    # Shuffle data
    indices = np.random.permutation(1000)
    for i in indices:
        x_i, y_i = data[i], labels[i]
        # Loss = (wx - y)^2, dL/dw = 2(wx-y)x
        grad = 2 * (w * x_i - y_i) * x_i
        w -= lr * grad

print(f"Final Weights: {w[0]:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>SGD is the "Noisy Hustle." It replaces a long, slow wait for the "Perfect Map" with a fast, jittery "Estimate" that actually helps you train faster.</p>
    <ul>
      <li><strong>Large-scale Deep Learning</strong>: Training models like GPT-4 on trillions of tokens is literally impossible with standard Gradient Descent—it would take years to calculate a single step. SGD allows us to start moving after seeing just a tiny fraction of the data, speeding up the process by millions.</li>
      <li><strong>Online Learning (Continuous Streams)</strong>: For apps like TikTok or Netflix, the data never stops coming. SGD allows the recommendation engine to update its "knobs" in real-time as you click on a video, rather than waiting for the end of the day to process every user at once.</li>
    </ul>
    <p>Teacher's Final Word: Moving constantly is much better than moving perfectly. The "jitter" in SGD is actually a feature—it helps the model jump out of shallow traps that would catch a "perfect" but rigid algorithm. It is the engine of the AI revolution.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Does the descent always land on the global minimum? How can we be sure? Explore <strong><a href="#/mathematics/optimization/convex-optimization">Convex Optimization</a></strong>.
    </div>
  `
};

