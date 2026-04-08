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

    <h2 id="analogy">The "Heavy Boulder" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a **Heavy Boulder** being pushed down a hill of **Bumpy Ground**. 
        Every "Lump" (noise) or "Pothole" (local minima) won't stop it. 
        Because it is <strong>Heavy</strong>, it has <strong>Inertia</strong>. 
        It ignores the tiny vibrations and only responds to the <strong>Main Gravity Vector</strong>. 
        **Momentum is that Inertia. It keeps the model moving forward when the gradients are confusing.** 
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we give the boulder <strong>Brakes</strong> for every individual wheel? Explore the king of optimizers: <strong><a href="#/machine-learning/optimization-ml/adam">Adam Optimizer</a></strong>.
    </div>
  `
};
