import { TopicSection } from '../../src/data/types';

export const biasVarianceTradeoffSection: TopicSection = {
  id: "bias-variance-tradeoff",
  title: "Bias–Variance Tradeoff",
  description: "The fundamental conflict in Machine Learning: minimizing error by balancing model simplicity (Bias) against model sensitivity (Variance).",
  color: "#F44336",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Errors</div>
      <h1>The Bias–Variance Tradeoff</h1>
      <p>Every Machine Learning model's error is made of three things: <strong>Bias</strong>, <strong>Variance</strong>, and <strong>Irreducible Noise</strong>. To build a great model, you have to find the <strong>Goldilocks Balance</strong> between being too "Stubborn" (Bias) and too "Dramatic" (Variance).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#bias">Bias: The Stubborn Model</a>
      <a href="#variance">Variance: The Over-Sensitive Model</a>
      <a href="#tradeoff">The Tradeoff Curve</a>
      <a href="#analogy">The "Bullseye" Analogy</a>
    </div>

    <h2 id="bias">Bias: The Stubborn Model</h2>
    <p><strong>Bias</strong> is the error from <strong>Incorrect Assumptions</strong>. A high-bias model is too simple. It thinks the world is a straight line when it's actually a curve. It "Ignores" the data because its brain isn't powerful enough to see the complexity.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as a <strong>Rigid Professor</strong>. 
        They've been teaching the same thing for 40 years. Even when you show them new evidence (the data), they refuse to change their mind. They are <strong>Underfitting</strong> because their internal "Rules" are too strong.
      </div>
    </div>

    <h2 id="variance">Variance: The Over-Sensitive Model</h2>
    <p><strong>Variance</strong> is the error from <strong>Being Too Sensitive</strong> to the training data. A high-variance model "Panics" when it sees a tiny outlier. It changes its entire shape just to fit one weird data point. It doesn't learn the trend; it learns the <strong>Randomness</strong>.</p>
    
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as an <strong>Anxious Student</strong>. 
        They study so hard that they memorize the specific font and page numbers of the textbook. If the exam font is different, they fail. They are <strong>Overfitting</strong> because they are too reactive to minor details.
      </div>
    </div>

    <h2 id="tradeoff">The Tradeoff Curve</h2>
    <div class="example-box">
      <h4>Mathematical Goal: Minimize Total Error</h4>
      <p>Error = \(\text{Bias}^2 + \text{Variance} + \text{Noise}\)</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Simple Models:</strong> High Bias, Low Variance. (e.g., Linear Regression).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Complex Models:</strong> Low Bias, High Variance. (e.g., Deep Neural Networks).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Goal:</strong> Find the <strong>Minimum Total Error</strong> halfway between the two extremes.</div>
        </div>
      </div>
    </div>

    <h2 id="analogy">The "Bullseye" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine <strong>Darts hitting a Target</strong>. 
        * **Low Bias, Low Variance (The Goal):** All darts hit the bullseye reliably. 
        * **High Bias, Low Variance:** All darts hit the same spot, but it's <strong>Far Away</strong> from the bullseye. (Consistently wrong). 
        * **Low Bias, High Variance:** Darts are scattered all over the board, but the <strong>Average</strong> of the shots is the bullseye. (Inconsistent but correct on average).
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> How can we measure where we are on this scale? Explore <strong><a href="#/machine-learning/foundation-ml/cross-validation">Cross-Validation</a></strong>.
    </div>
  `
};
