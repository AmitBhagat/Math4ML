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
    <p>**The Speed:** Because we process data in chunks, we can use <strong>GPUs</strong> to calculate the gradients in parallel, making it 10,000x faster than sequential CPU loops.</p>

    <h2 id="convergence">Convergence: The Jiggly Path</h2>
    <p>Batch GD follows a <strong>Smooth Straight Line</strong>. SGD looks like a <strong>Confused Bee</strong>. It jiggles left and right, but the <strong>Average Direction</strong> is still down the mountain. As we get closer to the bottom, the noise makes it bounce around the minimum. This is why we <strong>Slow Down</strong> (Schedule) the learning rate at the end.</p>

    <h2 id="analogy">The "Drunken Sailor" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Drunken Sailor</strong> trying to find his **Home (The Minimum)**. 
        He can't walk straight. 
        He takes one step, stumbles, looks at <strong>ONE landmark</strong> (One data point), and lunges toward it. 
        Because he lunges so fast and so often, he eventually <strong>Stumbles</strong> into his house. 
        If he walked slowly and perfectly (Batch GD), he might have gotten stuck in a <strong>Pothole</strong> (Local Minima). 
        **SGD is that Sailor. The stumbling is the noise, and the speed is the advantage.** 
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we give the sailor a <strong>Sled</strong> so he can use his speed more effectively? Explore <strong><a href="#/machine-learning/optimization-ml/momentum">Momentum</a></strong>.
    </div>
  `
};
