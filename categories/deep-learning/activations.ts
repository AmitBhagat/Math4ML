import { TopicSection } from '../../src/data/types';

export const activationsSection: TopicSection = {
  id: "activations",
  title: "Activation Functions",
  description: "The mathematical 'gatekeepers' of a neural network that decide which signals are important enough to be passed on to the next layer.",
  color: "#e3b341",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Components</div>
      <h1>Activation Functions: The Emotional Filter</h1>
      <p>Without an **Activation Function**, a neural network is just a giant linear formula. It can't learn curves, it can't learn logic, and it can't learn reality. Activations are the **Non-Linear Magic** that allow the model to "Squash" and "Shape" the raw data into useful information.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Why Non-Linearity?</a>
      <a href="#sigmoid">Sigmoid & Tanh: The Classics</a>
      <a href="#relu">ReLU: The Modern King</a>
      <a href="#softmax">Softmax: The Final Judge</a>
      <a href="#analogy">The "Emotional Filter" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Why Non-Linearity?</h2>
    <p>A linear function + a linear function = a linear function. No matter how many layers you stack, without activations, your network is just <strong>One Straight Line</strong>. Activation functions "Bend" the space, allowing the network to wrap its decision boundary around complex, non-linear data.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Filter for Significance."</strong> 
        The raw input might be a <strong>Massive Wave</strong> of noise. 
        Activations say: "I only care if the signal is <strong>positive</strong>" (ReLU) or "I'll squash all values between <strong>0 and 1</strong>" (Sigmoid). It's a way to normalize and selectively pass on meaning.
      </div>
    </div>

    <h2 id="sigmoid">Sigmoid & Tanh: The Classics</h2>
    <ul>
      <li><strong>Sigmoid (\(\sigma\)):</strong> \(\frac{1}{1+e^{-x}}\). Squashes everything between <strong>0 and 1</strong>. Great for probability, but it <strong>Saturates</strong> (gradients become zero) if the input is very high or very low.</li>
      <li><strong>Tanh:</strong> Centered at 0, squashes between <strong>-1 and 1</strong>. Generally better than Sigmoid because it tracks deviations from the average zero point.</li>
    </ul>

    <h2 id="relu">ReLU: Rectified Linear Unit</h2>
    <p><strong>The Theory:</strong> \(f(x) = \max(0, x)\). If the input is negative, it's zero. If it's positive, it passes through unchanged. 
    **Why it's King:** ReLU is computationally <strong>very fast</strong> and doesn't suffer from the "Vanishing Gradient" problem as badly as Sigmoid. It is the secret ingredient that made <strong>Deep Learning</strong> possible in the 2010s.</p>

    <h2 id="softmax">Softmax: The Final Judge</h2>
    <p>Used in the <strong>Output Layer</strong> for classification. It takes a vector of raw scores (logits) and converts them into a <strong>Probability Distribution</strong> where the sum of all elements is 1.</p>
    <div class="math-block">$$S(x_i) = \frac{e^{x_i}}{\sum e^{x_k}}$$</div>

    <h2 id="analogy">The "Emotional Filter" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are a <strong>CEO deciding on a new project</strong>. 
        Your employees give you 1,000 facts (Linear Inputs). 
        * **Sigmoid Filter:** You ask, "Are we 0% or 100% confident in this?" 
        * **ReLU Filter:** You say, "Only tell me the <strong>GOOD news</strong>. Forget the bad news." 
        * **Tanh Filter:** You ask, "Is this a positive or a negative deviation from our current plan?" 
        **The Activation Function is your "Gut Feeling" that turns raw data into a meaningful decision.**
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> We filtered the signals. Now how do we measure how "Wrong" the signals are? Explore <strong><a href="#/machine-learning/deep-learning/loss-functions">Loss Functions</a></strong>.
    </div>
  `
};
