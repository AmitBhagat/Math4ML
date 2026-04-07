import { TopicSection } from '../../src/data/types';

export const neuralNetworksExamplesSection: TopicSection = {
  id: "neural-networks-examples",
  title: "Practical Examples",
  description: "Solidify your understanding of how the Chain Rule and Partial Derivatives operate in a computational graph with two distinct examples.",
  color: "#AB47BC",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📝 Solved Examples · Calculus</div>
      <h1>Neural Network Updates: Practical Examples</h1>
      <p>To solidify your understanding of how the <strong>Chain Rule</strong> and <strong>Partial Derivatives</strong> operate in a computational graph, let's walk through two distinct examples: a simple <strong>Linear Regression</strong> update and a <strong>Sigmoid Neuron</strong> update.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#linear">Example 1: Simple Linear Neuron (MSE)</a>
      <a href="#sigmoid">Example 2: Logistic Regression (Sigmoid)</a>
      <a href="#takeaways">Key Takeaways for Implementation</a>
    </div>

    <h2 id="linear">Example 1: Simple Linear Neuron (Mean Squared Error)</h2>
    <div class="example-box">
      <p><strong>Scenario:</strong> We have a single input $x = 2$, a weight $w = 0.5$, and a bias $b = 0$. The target output is $y = 2$. We use a simple linear activation ($a = z$) and Mean Squared Error (MSE) loss.</p>

      <h4>1. Forward Pass</h4>
      <ul>
        <li><strong>Linear Combination ($z$):</strong> $z = w \cdot x + b = 0.5 \cdot 2 + 0 = 1.0$</li>
        <li><strong>Activation ($a$):</strong> Since it's linear, $a = z = 1.0$</li>
        <li><strong>Loss ($L$):</strong> $L = (y - a)^2 = (2 - 1)^2 = 1.0$</li>
      </ul>

      <h4>2. Backward Pass (The Deep-Dive)</h4>
      <p>We need to find $\frac{\partial L}{\partial w}$. By the Chain Rule:</p>
      <div class="math-block">$$\frac{\partial L}{\partial w} = \frac{\partial L}{\partial a} \cdot \frac{\partial a}{\partial w}$$</div>

      <p><strong>Step A:</strong> $\frac{\partial L}{\partial a}$ (How loss changes with prediction)</p>
      <div class="math-block">$$\frac{\partial}{\partial a}(y - a)^2 = 2(y - a) \cdot (-1) = -2(2 - 1) = -2$$</div>

      <p><strong>Step B:</strong> $\frac{\partial a}{\partial w}$ (How prediction changes with weight)</p>
      <div class="math-block">$$\frac{\partial}{\partial w}(w \cdot x + b) = x = 2$$</div>

      <h4>3. Result</h4>
      <ul>
        <li><strong>Gradient:</strong> $\frac{\partial L}{\partial w} = (-2) \cdot (2) = -4$</li>
        <li><strong>Interpretation:</strong> Because the gradient is negative, increasing the weight $w$ will decrease the loss $L$.</li>
      </ul>
    </div>

    <h2 id="sigmoid">Example 2: Logistic Regression (Sigmoid Activation)</h2>
    <div class="example-box">
      <p><strong>Scenario:</strong> In deep learning, we rarely use linear units. Let’s look at a node with a <strong>Sigmoid</strong> activation function.</p>
      <ul>
        <li><strong>Inputs:</strong> $x = 1.0$, $w = 0.8$, $b = 0.1$</li>
        <li><strong>Target:</strong> $y = 1.0$</li>
        <li><strong>Learning Rate ($\eta$):</strong> $0.1$</li>
      </ul>

      <h4>1. Forward Pass</h4>
      <ul>
        <li><strong>Summation ($z$):</strong> $z = (0.8 \times 1.0) + 0.1 = 0.9$</li>
        <li><strong>Sigmoid ($a$):</strong> $\sigma(0.9) = \frac{1}{1 + e^{-0.9}} \approx 0.711$</li>
        <li><strong>Loss ($L$):</strong> $L = \frac{1}{2}(1.0 - 0.711)^2 \approx 0.0417$</li>
      </ul>

      <h4>2. Backward Pass (Partial Derivatives)</h4>
      <p>We apply the chain rule: $\frac{\partial L}{\partial w} = \frac{\partial L}{\partial a} \cdot \frac{\partial a}{\partial z} \cdot \frac{\partial z}{\partial w}$</p>
      <ul>
        <li>$\frac{\partial L}{\partial a}$: $-(y - a) = -(1.0 - 0.711) = -0.289$</li>
        <li>$\frac{\partial a}{\partial z}$: The derivative of $\sigma(z)$ is $a(1 - a) \approx 0.711 \times 0.289 \approx 0.205$</li>
        <li>$\frac{\partial z}{\partial w}$: This is simply the input $x = 1.0$.</li>
      </ul>

      <h4>3. Calculating the Total Gradient</h4>
      <div class="math-block">$$\frac{\partial L}{\partial w} = (-0.289) \times (0.205) \times (1.0) \approx -0.0592$$</div>

      <h4>4. Weight Update</h4>
      <p>Using Gradient Descent:</p>
      <div class="math-block">$$w_{new} = w_{old} - (\eta \cdot \text{Gradient})$$</div>
      <div class="math-block">$$w_{new} = 0.8 - (0.1 \cdot -0.0592) = 0.80592$$</div>
    </div>

    <h2 id="takeaways">Key Takeaways for Implementation</h2>
    <ul>
      <li><strong>Vanishing Gradient:</strong> Notice in Example 2 that the derivative of the Sigmoid ($\frac{\partial a}{\partial z}$) is a small decimal (max 0.25). In deep networks, the final gradient becomes extremely small, leading to the "Vanishing Gradient" problem.</li>
      <li><strong>Partial Derivative Efficiency:</strong> In modern frameworks (like PyTorch or TensorFlow), we don't compute the full symbolic derivative. We compute the <strong>Numerical Gradient</strong> at each step of the chain and pass that value back.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Single-variable chains are simple, but ML involves thousands of simultaneous weights. Explore the geometry of high-dimensional loss surfaces in <strong><a href="#/mathematics/calculus/multivariable">Multivariable Calculus</a></strong>.
    </div>
  `
};
