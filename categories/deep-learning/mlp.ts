import { TopicSection } from '../../src/data/types';

export const mlpSection: TopicSection = {
  id: "mlp",
  title: "Multilayer Perceptron (MLP)",
  description: "A class of feedforward artificial neural network with multiple layers of nodes, each connected to the next layer.",
  color: "#e3b341",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Architecture</div>
      <h1>Multilayer Perceptron (MLP)</h1>
      <p>If a single Perceptron is a lone loan officer, an <strong>MLP</strong> is the <strong>Entire Bank Headquarters</strong>. By stacking "Hidden Layers" between the input and output, we can learn arbitrarily complex functions. This is the <strong>Universal Function Approximator</strong> that solves the XOR crisis and everything beyond.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>If a single Perceptron is a lone loan officer, a <strong>Multilayer Perceptron (MLP)</strong> is the <strong>Entire Bank Headquarters</strong>. By stacking "Hidden Layers" between the input and output, we can learn arbitrarily complex functions that would baffle a single neuron. This is the <strong>Universal Function Approximator</strong>—the catalyst that solved the XOR crisis and paved the way for modern AI. Each layer in an MLP acts as a filter, taking the raw, messy features from the previous layer and transforming them into more abstract, meaningful concepts until the final layer only has to make a simple, clean decision.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Feedforward Neural Network</div>
      <p>A Multilayer Perceptron is a directed graph consisting of multiple layers of nodes. For an input vector $\mathbf{x}$, the activation $\mathbf{a}^{(l)}$ of layer $l$ is determined by the weights $\mathbf{W}^{(l)}$ and biases $\mathbf{b}^{(l)}$ of that layer:</p>
      <div class="math-block">
        $$\mathbf{a}^{(l)} = \sigma\left( \mathbf{W}^{(l)} \mathbf{a}^{(l-1)} + \mathbf{b}^{(l)} \right)$$
      </div>
      <p>Where $\mathbf{a}^{(0)} = \mathbf{x}$ and $\sigma$ is a non-linear activation function. According to the **Universal Approximation Theorem**, a network with a single hidden layer and sufficient width can approximate any continuous function $f: \mathbb{R}^d \to \mathbb{R}^m$ to arbitrary precision.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of an MLP as <strong>"Hierarchical Filtering"</strong> or the <strong>"Multi-Tiered Jury."</strong> 
        Imagine you are trying to recognize a face. The first layer of neurons might only see simple edges. The second layer combines those edges into shapes like circles (eyes) or lines (mouths). The third layer combines shapes into recognized objects (a face). 
        Each level adds a <strong>Layer of Abstraction</strong>. Instead of drawing one straight line (Perceptron), the MLP effectively "warps" and bends the entire space, allowing it to wrap around complex patterns like spirals or circles. It is the machine’s way of saying: "Don’t give me the answer yet; let’s look at this from a few different <strong>perspectives</strong> first."
      </div>
    </div>

    <h2 id="math">Forward Propagation: Affine & Non-Linear</h2>
    <p>In each layer \(L\), we perform two steps for every neuron:</p>
    <div class="math-block">$$z^{(L)} = W^{(L)}a^{(L-1)} + b^{(L)}$$</div>
    <div class="math-block">$$a^{(L)} = \sigma(z^{(L)})$$</div>
    <ul>
      <li><strong>Affine Transformation:</strong> Sum of (Weights \(\times\) Inputs) + Bias. (Linear).</li>
      <li><strong>Activation (\(\sigma\)):</strong> Applying a non-linear function (like ReLU or Sigmoid). This is <strong>Crucial</strong>—without it, 1,000 layers are still just one big linear function.</li>
    </ul>

    <h2 id="approximation">Universal Approximation Theorem</h2>
    <p><strong>The Theory:</strong> It states that a neural network with just <strong>One Hidden Layer</strong> and enough neurons can approximate <strong>Any Continuous Function</strong> to any degree of accuracy. 
    <strong>The Reality:</strong> While one layer is enough in "theory," <strong>Deep Networks</strong> (many layers) are far more efficient in practice because they represent objects as a hierarchy of simpler concepts.</p>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Multi-Tiered Courtroom</h2>
    
      <h4>Scenario: Deciding a Complex 1-Billion-Dollar Case</h4>
      <p>Imagine a legal battle so complex that a single judge is overwhelmed by the noise. We need layers of experts.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Input Layer (Witnesses):</strong> You have 1,000 raw facts (Data points). Individually, they mean nothing.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Hidden Layer 1 (The Jury):</strong> People who look for simple themes (Is the witness lying? Is the video real?). They <strong>transform</strong> raw facts into "Arguments."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Hidden Layer 2 (Appeals Court):</strong> Judges who review the "Arguments" to find legal precedents. They <strong>transform</strong> arguments into "Final Opinions."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Output Layer (Supreme Court):</strong> The final decision—Guilty or Not Guilty.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          An MLP is a <strong>Feature Factory</strong>. Each layer takes the mess from the previous layer and cleans it up until the very last layer only has to make a simple Yes/No call. This is how neural networks solve the XOR problem.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np
from sklearn.neural_network import MLPClassifier

# 1. The XOR Logic (Single line cannot separate these)
X = np.array([[0,0], [0,1], [1,0], [1,1]])
y = np.array([0, 1, 1, 0])

# 2. The 'Brain' Structure
# 1 Hidden layer with 4 neurons
mlp = MLPClassifier(hidden_layer_sizes=(4,), activation='relu', max_iter=2000)

# 3. Training
mlp.fit(X, y)

# 4. Results
test_cases = [[1, 1], [0, 1]]
preds = mlp.predict(test_cases)

for i, test in enumerate(test_cases):
    print(f"Input {test} -> Result {preds[i]}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>The MLP is the "Universal Function Approximator" that turns raw data into tiered abstractions, allowing machines to solve problems that are impossible for linear models.</p>
    <ul>
      <li><strong>Handwriting Recognition (MNIST)</strong>: MLPs were the first "Brains" to accurately read numbers written by humans. By passing the raw pixels through a hidden layer, the model learns to identify "curves" and "loops" (like the circle in an '8' or the hook in a '9') and uses those abstractions to make a final guess.</li>
      <li><strong>Customer Behavior Prediction (Churn)</strong>: Many companies use MLPs to predict if a customer will leave. Instead of just looking at "Price," the MLP combines Age, Usage, and Support Calls in multiple hidden layers to find the "hidden frustration" patterns that lead to a cancellation.</li>
    </ul>
    <p>Teacher's Final Word: Each hidden layer in an MLP is a filter that cleans up the mess from the one before it. It moves from raw features to abstract concepts, eventually making the decision look easy. It's the ultimate "Feature Factory."</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> We built the structure, but how do we "Train" the Jury? Explore the algorithm that powers all AI: <strong><a href="#/machine-learning/deep-learning/backpropagation">Backpropagation</a></strong>.
    </div>
  `
};

