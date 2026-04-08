import { TopicSection } from '../../src/data/types';

export const perceptronSection: TopicSection = {
  id: "perceptron",
  title: "The Perceptron",
  description: "The simplest form of a neural network, consisting of a single layer with a step-function activation, used for binary classification.",
  color: "#e3b341",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Foundations</div>
      <h1>The Perceptron: The Binary Voter</h1>
      <p>Invented in 1958 by Frank Rosenblatt, the <strong>Perceptron</strong> is the biological inspiration that started it all. It is the absolute simplest "unit" of intelligence. It takes multiple inputs, weights them by importance, and makes a <strong>Yes/No</strong> decision based on a threshold.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Decision Function</a>
      <a href="#math">The Learning Rule: Hebbian Foundation</a>
      <a href="#logic">Logic Gates: AND, OR, and the XOR Crisis</a>
      <a href="#convergence">Perceptron Convergence Theorem</a>
      <a href="#analogy">The "Loan Approval" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Decision Function</h2>
    <p>A Perceptron takes a vector of inputs $\mathbf{x}$ and applies a linear transformation followed by a <strong>Step Function</strong> (Heaviside). If the sum exceeds zero, it outputs 1; otherwise, 0.</p>
    <div class="math-block">$$\hat{y} = \begin{cases} 1 & \text{if } \sum_{i=1}^n w_i x_i + b > 0 \\ 0 & \text{otherwise} \end{cases}$$</div>
    <ul>
      <li><strong>\(w_i\):</strong> Weights (The "Importance" of each feature).</li>
      <li><strong>\(b\):</strong> Bias (The "Innate Tendency" or threshold of the neuron).</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Geometric Decision Making."</strong> 
        The weights and bias define a <strong>Hyperplane</strong> (a straight line in 2D). 
        The Perceptron simply asks: "Is this data point on the <strong>Left</strong> or the <strong>Right</strong> side of the line?" 
      </div>
    </div>

    <h2 id="math">The Learning Rule</h2>
    <p>How does a Perceptron learn? It uses a simple update rule based on the <strong>Error</strong> (Target - Prediction):</p>
    <div class="math-block">$$w_i \gets w_i + \eta(y - \hat{y})x_i$$</div>
    <p>If the prediction is correct ($y = \hat{y}$), no change happens. If it's wrong, the weights "Step" towards the correct output. This is the ancestor of Gradient Descent.</p>

    <h2 id="logic">Logic Gates & The XOR Crisis</h2>
    <p>A single Perceptron can perfectly model <strong>AND</strong> and <strong>OR</strong> gates. However, it <strong>cannot</strong> model the <strong>XOR (Exclusive OR)</strong> gate. Why? Because XOR is not <strong>Linearly Separable</strong>. You cannot draw a single straight line to separate the classes. 
    **The Gotcha:** This limitation almost killed Neural Network research in 1969. The solution? Multi-Layer networks.</p>

    <h2 id="analogy">The "Loan Officer" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Loan Officer</strong> deciding to approve a mortgage. 
        Inputs: [Income, Credit Score, Debt]. 
        Weights: Income is <strong>High Importance</strong> ($w=0.8$), Credit Score is <strong>Medium</strong> ($w=0.5$), Debt is <strong>Negative</strong> ($w=-0.7$). 
        The officer sums them up. If the final score is > 10, the loan is <strong>Approved (1)</strong>. If not, it is <strong>Rejected (0)</strong>. 
        **The Perceptron is that single officer making one binary choice.**
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> One officer isn't enough for complex decisions. What if we have a whole committee? Explore <strong><a href="#/machine-learning/deep-learning/mlp">Multilayer Perceptron (MLP)</a></strong>.
    </div>
  `
};
