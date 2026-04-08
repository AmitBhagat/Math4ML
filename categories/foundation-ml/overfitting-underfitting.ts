import { TopicSection } from '../../src/data/types';

export const overfittingUnderfittingSection: TopicSection = {
  id: "overfitting-underfitting",
  title: "Overfitting and Underfitting",
  description: "The two main pitfalls of model performance: memorizing noise (Overfitting) or failing to capture the trend (Underfitting).",
  color: "#F44336",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Model Pitfalls</div>
      <h1>The Over/Under Trap</h1>
      <p>A perfect Machine Learning model is like <strong>Goldilocks</strong>: not too complex, not too simple. <strong>Overfitting</strong> is when the model tries too hard (Memorization). <strong>Underfitting</strong> is when it doesn't try hard enough (Ignorance).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">The Mechanics of Complexity</a>
      <a href="#overfitting">Overfitting: The Memorizer</a>
      <a href="#underfitting">Underfitting: The Simpleton</a>
      <a href="#analogy">The "School Exam" Analogy</a>
    </div>

    <h2 id="theory">The Mechanics of Complexity</h2>
    <p>Every model has a **Capacity** (how many patterns it can fit). High capacity leads to <strong>Overfitting</strong>. Low capacity leads to <strong>Underfitting</strong>. The goal is to find the <strong>Sweet Spot</strong> where the model captures the "Truth" but ignores the "Noise."</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Connecting the Dots."</strong> 
        If you have 10 data points that roughly form a line: 
        <strong>Underfitting</strong> is drawing a straight line that misses most dots. 
        <strong>Overfitting</strong> is drawing a jagged, crazy zig-zag that touches every single dot perfectly. 
        The **Truth** is a slightly wobbly line that catches the general trend.
      </div>
    </div>

    <h2 id="overfitting">Overfitting: The Memorizer</h2>
    <div class="example-box">
      <h4>What it Looks Like:</h4>
      <p>Training Error: **0.1%** | Test Error: **25%**</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Cause:</strong> The model is so powerful it has "Memorized" the random noise in the training set. It thinks it found a pattern, but that pattern doesn't actually exist in the real world.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Correction:</strong> Simplify the model. Use **Regularization** (penalize large weights) or provide <strong>More Data</strong>.</div>
        </div>
      </div>
    </div>

    <h2 id="underfitting">Underfitting: The Simpleton</h2>
    <div class="example-box">
      <h4>What it Looks Like:</h4>
      <p>Training Error: **30%** | Test Error: **31%**</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Cause:</strong> The model is too "Dumb" to see the pattern. For example, using a simple linear line to fit a complex, curved dataset.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Correction:</strong> Increase complexity. Use a more powerful algorithm (like a Deep Neural Net) or <strong>Engineer Better Features</strong>.</div>
        </div>
      </div>
    </div>

    <h2 id="analogy">The "School Exam" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine two students studying for a <strong>History Exam</strong>. 
        <strong>Overfitting Student:</strong> Memorizes the exact dates and typos on the study guide. If the exam question is slightly different, they fail. They memorized the noise. 
        <strong>Underfitting Student:</strong> Only learns "history was about people fighting." They miss all the nuances and details. They fail because they over-simplified. 
        <strong>Best Student:</strong> Understands the **Causes and Effects**. They can answer a new question because they learned the **Concept**, not the words.
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> This trade-off between complexity and simplicity is the most famous conflict in ML. Explore <strong><a href="#/machine-learning/foundation-ml/bias-variance-tradeoff">Bias–Variance Tradeoff</a></strong>.
    </div>
  `
};
