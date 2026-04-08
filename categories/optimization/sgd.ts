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

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Definition</a>
      <a href="#example-noise">Example 1: The Noisy Gradient</a>
      <a href="#example-mini">Example 2: Mini-batch Training</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Gradient Descent</strong>: Understanding \(\nabla f\).</li>
        <li><strong>Stochasticity</strong>: The element of random chance.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>Calculating the gradient of 1 billion samples takes a lot of time. <strong>SGD</strong> replaces wait with "Noise." Instead of the perfect "True Gradient," we use a "Noisy Estimate" from a single random data point. The estimate is wrong in the short term, but on average, it points exactly the same way as the true gradient. It’s like traveling by <strong>Drunkard's Walk</strong>—you stumble, but you still end up at the bottom of the hill.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of SGD as <strong>"Finding the Restaurant by Asking One Person."</strong> 
        Batch Gradient Descent is like asking everyone in the city and taking the average direction. It's accurate, but it takes forever. 
        SGD is like asking the first person you see and walking that way. They might be wrong, but you're moving <strong>Right Now</strong>. If you ask someone new every 10 meters, eventually you'll reach the restaurant.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <p>The update rule for a single data point \(x_i\):</p>
    <div class="math-block">$$\theta_{new} = \theta_{old} - \eta \nabla J(\theta; x_i, y_i)$$</div>
    <ul>
      <li><strong>\(\nabla J(\theta; x_i, y_i)\)</strong>: The gradient calculated on only ONE sample.</li>
      <li><strong>Noise Benefit</strong>: Because SGD is noisy, it can "jump out" of small, shallow local minima that would trap the smooth Batch Gradient Descent.</li>
    </ul>

    <h2 id="example-noise">Example 1: The Noisy Gradient</h2>
    <div class="example-box">
      <h4>Problem: Comparing Step Quality</h4>
      <p>Population: [100, 150, 200]. Loss: Aiming for \(\mu\). Correct gradient for \(\mu=100\) is -100.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Batch GD:</strong> \(\nabla = -100\) (Correct direction).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>SGD (Sample 1):</strong> \(\nabla = 0\) (No movement).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>SGD (Sample 2):</strong> \(\nabla = -50\) (Partial movement).</div></div>
      <div class="step-box"><span class="step-num">4</span><div><strong>SGD (Sample 3):</strong> \(\nabla = -100\) (Correct movement).</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Over time, the sum of SGD steps averages out to the Batch GD step. We trade <strong>Accuracy per Step</strong> for <strong>Speed of Iteration</strong>.
        </div>
      </div>
    </div>

    <h2 id="example-mini">Example 2: Mini-batch Training</h2>
    <div class="example-box">
      <h4>Problem: The Best of Both Worlds</h4>
      <p>Instead of 1 sample (Pure SGD) or all samples (Batch GD), we use a <strong>Mini-batch</strong> of 32 samples.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Logic:</strong> We average the gradients of 32 points. This dramatically reduces the noise compared to pure SGD.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Speed:</strong> GPU hardware is optimized for processing 32 or 64 points simultaneously.</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Mini-batch SGD is the "Standard" for all Neural Networks (Adam, RMSProp, etc.). It gives us the <strong>Stability</strong> of Batch GD and the <strong>Computational Speed</strong> of SGD.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
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
    <ul>
      <li><strong>Online Learning</strong>: Updating models in real-time as individual users interact with a website.</li>
      <li><strong>Large-scale Deep Learning</strong>: Training models like GPT on trillions of tokens—literally impossible without SGD.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Does the descent always land on the global minimum? How can we be sure? Explore <strong><a href="#/mathematics/optimization/convex-optimization">Convex Optimization</a></strong>.
    </div>
  `
};
