import { TopicSection } from '../../src/data/types';

export const gradientDescentSection: TopicSection = {
  id: "gradient-descent-ml",
  title: "Gradient Descent (Batch)",
  description: "The fundamental iterative algorithm for minimizing a loss function by taking steps in the direction of steepest descent.",
  color: "#F44336",
  html: String.raw`
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
        1. **Direction:** Which way is "Down"? 
        2. **Magnitude:** How "Steep" is the slope? 
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
    **The Upside:** The descent is very smooth and stable. 
    **The Downside:** If you have 1 billion data points, your computer will <strong>Run out of Memory</strong> before you take your first step.</p>

    <h2 id="analogy">The "Downhill Skier" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Skier</strong> in a heavy fog. 
        He can only see the snow <strong>under his skis</strong>. 
        He leans forward and feels where the gravity is pulling him <strong>the most</strong>. 
        He takes a "Step" (\(\alpha\)) in that direction. 
        **Batch Gradient Descent** is like that skier having a **Radio Connection** to 100 other skiers all over the mountain. He waits for ALL of them to tell him their slope, takes the average, and then steps. It's safe, but <strong>incredibly slow</strong>.
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we don't wait for everyone? What if we just start skiing based on what WE see? Explore <strong><a href="#/machine-learning/optimization-ml/sgd">Stochastic Gradient Descent (SGD)</a></strong>.
    </div>
  `
};
