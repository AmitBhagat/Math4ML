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
        If a weight is <strong>Bouncing</strong> around wildly, the 2nd moment (\(v_t\)) will be **High**. Adam divides the update by \(\sqrt{v_t}\), effectively <strong>Slowing Down</strong> the noisy weight. 
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

    <h2 id="analogy">The "Adaptive Athlete" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine an <strong>Olympic Athlete</strong> running across <strong>Varying Terrain</strong> (Sand, Ice, Road). 
        * **Momentum:** He remembers how fast he ran the last 10 steps. (Inertia). 
        * **RMSProp:** He looks at the <strong>Ground</strong>. If it's **Slippery (Low stability)**, he takes <strong>Smaller, Careful Steps</strong>. If it's <strong>Stable (High stability)**, he takes <strong>Huge strides</strong>. 
        **Adam is that Athlete. He runs as fast as the surface allows, adapting his gait for every single muscle fiber independently.** 
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> Even the best athlete needs to slow down as he nears the finish line. Explore <strong><a href="#/machine-learning/optimization-ml/lr-scheduling">Learning Rate Scheduling</a></strong>.
    </div>
  `
};
