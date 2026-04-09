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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Without an <strong>Activation Function</strong>, a neural network is nothing more than a giant linear formula—a series of straight lines that can never model the complex, curvy reality of the world. Activations are the "Magic Gates" that decide which signals are important enough to be passed on to the next layer. They introduce <strong>Non-Linearity</strong>, allowing the model to "Squash" and "Shape" raw data into meaningful patterns. It’s the difference between a rigid spreadsheet and an emotional filter that knows when to fire up and when to stay quiet. By selectively activating neurons, we transform a simple calculator into a high-dimensional pattern-matching engine.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Non-Linear Mappings</div>
      <p>An activation function $\sigma(z)$ is applied element-wise to the weighted sum $z$ to introduce non-linearity. Without this, a multi-layer network collapses into a single linear transformation. Key formal signatures include:</p>
      <div class="math-block">
        $$\text{ReLU: } \max(0, z)$$
        $$\text{Sigmoid: } \frac{1}{1 + e^{-z}}$$
        $$\text{Softmax: } \frac{e^{z_j}}{\sum_{k=1}^K e^{z_k}}$$
      </div>
      <p class="text-xs opacity-70 mt-2">The choice of activation affects the gradient flow during backpropagation. For example, **ReLU** helps mitigate the vanishing gradient problem by keeping the derivative as 1 for all $z > 0$.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Activation Functions as <strong>"The Gatekeeper of Significance"</strong> or the <strong>"CEO's Emotional Filter."</strong> 
        Imagine a team of analysts sending reports to a CEO. The CEO doesn't want thousands of raw numbers; they want a <strong>Signal</strong>. 
        <strong>ReLU</strong> is the "Efficiency Gate": if the news is bad (negative), the CEO doesn't even want to hear it—it gets cut to zero. <strong>Sigmoid</strong> is the "Risk Gate": it squashes massive numbers into a simple 0% to 100% probability range. 
        Without these squeezers, the numbers would explode out of control. Activations provide the <strong>Non-Linear Bending</strong> that allows a network to "Wrap" its logic around complicated data like spirals, images, or human language.
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

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The CEO's Gut Feeling</h2>
    
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
          Activations are the <strong>Squeezers</strong>. They take the infinitely expanding numbers of math and squeeze them into manageable shapes that computers can understand and differentiate.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
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

    <h2 id="applications">Applications in ML</h2>
    <p>Activations are the "Emotional Gatekeepers." They are the non-linear magic that allows a network to "bend" its logic to fit the complex reality of the world.</p>
    <ul>
      <li><strong>Medical Risk Probability (Sigmoid)</strong>: When a model predicts whether a patient has a condition, it uses Sigmoid in the final layer. It squashes the raw signals into a 0% to 100% "Risk Score." This allows doctors to set a threshold—for example, if the risk is >80%, trigger an immediate alert.</li>
      <li><strong>Efficient Face Detection (ReLU)</strong>: Modern face-detection systems in your phone use thousands of ReLU activations. Because ReLU is "Off" for negative signals, it allows the model to ignore 90% of the background noise in a photo and focus all its "energy" on the features that actually look like a human face.</li>
    </ul>
    <p>Teacher's Final Word: Without bending, you're just a rigid calculator. Activation functions give the machine the "flexibility" to learn curves, patterns, and categories that a straight line could never see.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> We filtered the signals. Now how do we measure how "Wrong" the signals are? Explore <strong><a href="#/machine-learning/deep-learning/loss-functions">Loss Functions</a></strong>.
    </div>
  `
};

