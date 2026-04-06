import { TopicSection } from '../../src/data/types';

export const neuralNetworksSection: TopicSection = {
  id: "neural-networks",
  title: "Calculus in Neural Networks",
  description: "In Deep Learning, multivariate calculus is the engine that powers optimization. Learn how the Chain Rule enables efficient training.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Calculus · Neural Networks</div>
      <h1>Calculus in Neural Networks</h1>
      <p>In the context of Deep Learning, the engine that powers optimization is <strong>Multivariate Calculus</strong>. While a single-variable function changes based on one input, neural networks are massive functions where the output (Loss) depends on millions of parameters (weights and biases).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">1. Multivariate Calculus Concepts</a>
      <a href="#backprop">2. Backpropagation & The Chain Rule</a>
      <a href="#walkthrough">3. Mathematical Walkthrough</a>
      <a href="#conclusion">Conclusion</a>
    </div>

    <h2 id="theory">1. Multivariate Calculus Concepts</h2>
    <p>In a neural network, the Loss function $L$ is a scalar value, but it is a function of many variables: $L(w_1, w_2, \dots, w_n)$. To understand how to minimize this loss, we use two primary tools:</p>
    <ul>
      <li><strong>Partial Derivatives:</strong> These measure how the function changes as we vary one specific variable while keeping all others constant. For a weight $w_i$, the partial derivative is denoted as $\frac{\partial L}{\partial w_i}$.</li>
      <li><strong>The Gradient ($\nabla$):</strong> This is a vector of all partial derivatives. It points in the direction of the steepest ascent. In training, we move in the opposite direction (Gradient Descent).</li>
    </ul>

    <h2 id="backprop">2. How the Chain Rule enables Backpropagation</h2>
    <p>Backpropagation is essentially a recursive application of the <strong>Chain Rule</strong>. In a multi-layered network, the input flows through several nested functions:</p>
    <div class="math-block">$$L(y, \hat{y}) = L(f_n(f_{n-1}(\dots f_1(x)\dots)))$$</div>
    
    <p>To calculate how the Loss changes with respect to a weight in an early layer, we must "chain" the derivatives from the output back to that weight.</p>

    <div class="def-box">
      <div class="def-title">The Chain Rule Formula</div>
      <p style="margin:0">If $z$ depends on $y$, and $y$ depends on $x$, then:</p>
      <div class="math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        $$\frac{\partial z}{\partial x} = \frac{\partial z}{\partial y} \cdot \frac{\partial y}{\partial x}$$
      </div>
    </div>
    
    <p>In a Neural Network, this allows us to calculate the local gradient at each node and multiply it by the gradient flowing from above. This efficiency prevents us from having to re-calculate the entire derivative for every single parameter from scratch.</p>

    <h2 id="walkthrough">3. Mathematical Walkthrough: Updating Weights</h2>
    <p>Let’s look at a single neuron with one input $x$, a weight $w$, a bias $b$, and a sigmoid activation function $\sigma$.</p>

    <div class="example-box">
      <h4>The Forward Pass:</h4>
      <ol>
        <li><strong>Linear Combination:</strong> $z = wx + b$</li>
        <li><strong>Activation:</strong> $a = \sigma(z) = \frac{1}{1 + e^{-z}}$</li>
        <li><strong>Loss (MSE):</strong> $L = \frac{1}{2}(y - a)^2$</li>
      </ol>

      <h4>The Backward Pass (Calculating $\frac{\partial L}{\partial w}$):</h4>
      <p>Using the Chain Rule, we decompose the derivative:</p>
      <div class="math-block">$$\frac{\partial L}{\partial w} = \frac{\partial L}{\partial a} \cdot \frac{\partial a}{\partial z} \cdot \frac{\partial z}{\partial w}$$</div>
      
      <ol style="list-style-type: decimal;">
        <li>Derivative of Loss w.r.t Activation: $\frac{\partial L}{\partial a} = -(y - a)$</li>
        <li>Derivative of Activation w.r.t Linear Sum: $\frac{\partial a}{\partial z} = a(1 - a)$</li>
        <li>Derivative of Linear Sum w.r.t Weight: $\frac{\partial z}{\partial w} = x$</li>
      </ol>

      <p>Combining them:</p>
      <div class="math-block">$$\frac{\partial L}{\partial w} = -(y - a) \cdot a(1 - a) \cdot x$$</div>

      <h4>The Weight Update:</h4>
      <p>Once we have the gradient, we update the weight using a learning rate ($\eta$):</p>
      <div class="math-block">$$w_{new} = w_{old} - \eta \cdot \frac{\partial L}{\partial w}$$</div>
    </div>

    <h2 id="conclusion">Conclusion</h2>
    <p>By calculating these partial derivatives layer-by-layer moving backwards, the network "learns" exactly how much each weight contributed to the total error. This mathematical foundation is what allows complex models to converge toward an optimal solution.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Single-variable chains are simple, but ML involves thousands of simultaneous weights. Explore the geometry of high-dimensional loss surfaces in <strong><a href="#/mathematics/calculus/multivariable">Multivariable Calculus</a></strong>.
    </div>
  `
};
