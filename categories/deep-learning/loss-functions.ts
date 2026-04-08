import { TopicSection } from '../../src/data/types';

export const lossFunctionsSection: TopicSection = {
  id: "loss-functions",
  title: "Loss Functions",
  description: "The mathematical 'yardsticks' that measure how well (or poorly) a neural network's predictions match the true reality.",
  color: "#e3b341",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Components</div>
      <h1>Loss Functions: The Moral Compass</h1>
      <p>How do we tell a machine it is failing? We need a single number that represents the <strong>Magnitude of its Error</strong>. <strong>Loss Functions</strong> (or Cost Functions) are the mathematical judges that penalize wrong predictions. The goal of all Gradient Descent is to find the bottom of this "Loss Valley."</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Error Surface</a>
      <a href="#regression">Regression: Mean Squared Error (MSE)</a>
      <a href="#classification">Classification: Cross-Entropy</a>
      <a href="#log-loss">Log-Loss: Penalizing Confidence</a>
      <a href="#analogy">The "Moral Compass" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Error Surface</h2>
    <p>Loss functions define a <strong>Higher-Dimensional Surface</strong>. If your parameters are perfect, you are at the <strong>Global Minimum</strong> (Zero Loss). If you are wrong, the loss value is high. Gradient Descent "Rolls" the ball down the slope of this surface to reach the bottom.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Price of Failure."</strong> 
        Different problems have <strong>different penalties</strong>. 
        If you miss a <strong>House Price</strong> by \$1,000, that's okay. 
        If you are <strong>100% Confident</strong> that a Dog is a Cat, the penalty should be massive. The type of loss tells the machine <strong>what matters</strong>.
      </div>
    </div>

    <h2 id="regression">Mean Squared Error (MSE)</h2>
    <p>Used for Regression. It calculates the <strong>Average of the Squared Differences</strong> between the true value $y$ and predicted $\hat{y}$.</p>
    <div class="math-block">$$MSE = \frac{1}{n} \sum_{i=1}^n (y_i - \hat{y}_i)^2$$</div>
    <p>**The Gotcha:** Squaring the error makes <strong>Large Mistakes</strong> much more expensive than small ones. This forces the model to ignore small noise and focus on big outliers.</p>

    <h2 id="classification">Cross-Entropy Loss (Log-Loss)</h2>
    <p>Used for Classification. It measures the <strong>Distance between Probabilities</strong>. If the model predicts a 10% chance of a "Spam" email when it is actually Spam, the loss is huge.</p>
    <div class="math-block">$$L = -\sum y_i \log(\hat{y}_i)$$</div>
    <p><strong>Log-Loss:</strong> Penalizes the model <strong>Exponentially</strong> for being "Confidently Wrong." If you say 99.9% but are wrong, the Log-Loss will destroy your gradient.</p>

    <h2 id="analogy">The "Moral Compass" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are a <strong>Coach training an Archer</strong>. 
        * **MSE Coach:** He measures how many <strong>Inches</strong> each arrow is from the bullseye. 
        * **Cross-Entropy Coach:** He cares about <strong>HOW SURE</strong> the archer was. 
        If the archer yells "I'M PERFECT!" and misses, the coach makes him do 1,000 pushups. 
        **The Loss Function is the Coach's Rulebook. It tells the archer exactly how much suffering each mistake costs.**
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> We built the components. Now how do we arrange them into powerful configurations? Explore <strong><a href="#/machine-learning/deep-learning/architectures-intro">Deep Learning Architectures</a></strong>.
    </div>
  `
};
