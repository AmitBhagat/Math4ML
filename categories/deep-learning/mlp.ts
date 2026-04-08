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
      <p>If a single Perceptron is a lone loan officer, an **MLP** is the **Entire Bank Headquarters**. By stacking "Hidden Layers" between the input and output, we can learn arbitrarily complex functions. This is the **Universal Function Approximator** that solves the XOR crisis and everything beyond.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Deep Stack</a>
      <a href="#math">Forward Propagation: Affine & Activation</a>
      <a href="#layers">Hidden Layers: Feature Engineering</a>
      <a href="#approximation">Universal Approximation Theorem</a>
      <a href="#analogy">The "Committee of Experts" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Deep Stack</h2>
    <p>An MLP is a <strong>Feedforward</strong> network. It is composed of an **Input Layer**, one or more <strong>Hidden Layers</strong>, and an **Output Layer**. Every neuron in one layer is connected to every neuron in the next. This is a <strong>Fully Connected (Dense) Layer</strong>.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Hierarchical Filtering."</strong> 
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
    **The Reality:** While one layer is enough in "theory," <strong>Deep Networks</strong> (many layers) are far more efficient in practice because they represent objects as a hierarchy of simpler concepts.</p>

    <h2 id="analogy">The "Committee of Experts" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are a <strong>Judge deciding a complex court case</strong>. 
        You have 3 groups of people:
        * **Witnesses (Input Layer):** They provide the raw data (facts).
        * **Jury (Hidden Layer 1):** They analyze the facts and find <strong>Patterns</strong> (who's lying, who's consistent).
        * **Appeals Court (Hidden Layer 2):** They review the Jury's findings and look for <strong>Legal Nuances</strong>. 
        * **Supreme Court (Output Layer):** They make the final <strong>Guilty/Not Guilty</strong> decision. 
        **The MLP is the entire judicial process.** Each layer filters and abstracts the information until a final decision is unavoidable.
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> We built the structure, but how do we "Train" the Jury? Explore the algorithm that powers all AI: <strong><a href="#/machine-learning/deep-learning/backpropagation">Backpropagation</a></strong>.
    </div>
  `
};
