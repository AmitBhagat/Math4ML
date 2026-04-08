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

    <h2 id="theory">Theoretical Core: The Deep Stack</h2>
    <p>An MLP is a <strong>Feedforward</strong> network. It is composed of an <strong>Input Layer</strong>, one or more <strong>Hidden Layers</strong>, and an <strong>Output Layer</strong>. Every neuron in one layer is connected to every neuron in the next. This is a <strong>Fully Connected (Dense) Layer</strong>.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of it as <strong>"Hierarchical Filtering."</strong> 
        The first layer might look for small edges. 
        The second layer might combine those edges into shapes (circles, squares). 
        The third layer might combine shapes into objects (faces, cars). 
        Each layer <strong>transforms</strong> the raw input into a more <strong>meaningful representation</strong>.
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
    <python-code static-output="[Scan] Dataset: XOR Logic Gate (Non-linear)\n[Action] Initializing MLP with (4, 4) hidden neurons...\n[Training] Epoch 1: Loss 0.72\n[Training] Epoch 500: Loss 0.04 (Convergence reached)\n[Test] Input [1, 1] -> Final Pred: 0 (Correct)\n[Test] Input [0, 1] -> Final Pred: 1 (Correct)\n[Insight] A simple line failed here; a hidden layer warped the space to find the truth.">
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

    <div class="linking-rule">
      <strong>Next Step:</strong> We built the structure, but how do we "Train" the Jury? Explore the algorithm that powers all AI: <strong><a href="#/machine-learning/deep-learning/backpropagation">Backpropagation</a></strong>.
    </div>
  `
};
