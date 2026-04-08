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
      <p>Without an <strong>Activation Function</strong>, a neural network is just a giant linear formula. It can't learn curves, it can't learn logic, and it can't learn reality. Activations are the <strong>Non-Linear Magic</strong> that allow the model to "Squash" and "Shape" the raw data into useful information.</p>
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
    <strong>Why it's King:</strong> ReLU is computationally <strong>very fast</strong> and doesn't suffer from the "Vanishing Gradient" problem as badly as Sigmoid. It is the secret ingredient that made <strong>Deep Learning</strong> possible in the 2010s.</p>

    <h2 id="softmax">Softmax: The Final Judge</h2>
    <p>Used in the <strong>Output Layer</strong> for classification. It takes a vector of raw scores (logits) and converts them into a <strong>Probability Distribution</strong> where the sum of all elements is 1.</p>
    <div class="math-block">$$S(x_i) = \frac{e^{x_i}}{\sum e^{x_k}}$$</div>

    <h2 id="example">Illustrated Example: The CEO's Gut Feeling</h2>
    <div class="example-box">
      <h4>Scenario: Filtering Information at Corporate HQ</h4>
      <p>Imagine your neurons are a team of analysts sending reports to the CEO. The CEO doesn't want raw numbers; they want <strong>Signals</strong>.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The ReLU Filter (Efficiency):</strong> The CEO says: "If the news is bad (negative), I don't want to hear it. Mark it as zero." This stops the network from worrying about irrelevant noise.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Sigmoid Filter (Risk):</strong> The CEO asks: "What is the 0% to 100% chance we go bankrupt?" This squashes massive numbers into a <strong>Probability Range</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Softmax Filter (The Board):</strong> There are 3 investment options. The Board looks at all raw scores and ensures they <strong>add up to exactly 100%</strong> across all choices.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Result:</strong> These "Filters" turn a boring linear spreadsheet into a high-stakes decision-making machine.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Activations are the <strong>Squeezers</strong>. They take the infinitely expanding numbers of math and squeeze them into manageable shapes that computers can understand and differentiate.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Signal Processing</h2>
    <python-code static-output="[Scan] Processing Raw Signals: [-2.0, 0.0, 2.0, 4.0]\n[ReLU] Negative signals cut to zero: [0, 0, 2, 4]\n[Sigmoid] Probability Projection: [0.12, 0.50, 0.88, 0.98]\n[Softmax] Competitive Distribution: [0.00, 0.02, 0.12, 0.86] (Sum: 1.0)\n[Insight] Softmax is 'confident' that the 4th signal is the winner.">
import numpy as np

# 1. Activation math
def relu(x): return np.maximum(0, x)
def sigmoid(x): return 1 / (1 + np.exp(-x))
def softmax(x): 
    e_x = np.exp(x - np.max(x)) # Numerical stability trick
    return e_x / e_x.sum()

# 2. Raw Neuron Outputs (Logits)
signals = np.array([-2.0, 0.0, 2.0, 4.0])

# 3. Apply Filters
print(f"Raw Inputs: {signals}")
print(f"ReLU Filter: {relu(signals)}")
print(f"Sigmoid Probabilities: {sigmoid(signals).round(3)}")
print(f"Softmax Distribution: {softmax(signals).round(3)}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> We filtered the signals. Now how do we measure how "Wrong" the signals are? Explore <strong><a href="#/machine-learning/deep-learning/loss-functions">Loss Functions</a></strong>.
    </div>
  `
};
