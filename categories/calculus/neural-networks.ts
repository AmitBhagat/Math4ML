import { TopicSection } from '../../src/data/types';

export const neuralNetworksSection: TopicSection = {
  id: "neural-networks",
  title: "Calculus in Neural Networks",
  description: "In Deep Learning, multivariate calculus is the engine that powers optimization. Learn how the Chain Rule enables efficient training.",
  color: "#4A148C",
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
      <a href="#example-nested">Example 1: Nested Functions</a>
      <a href="#example-backprop">Example 2: Backprop Step</a>
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

    <h2 id="example-nested">Example 1: The Chain of Influence (Nested Functions)</h2>
    <div class="example-box">
      <h4>Problem: Differentiating $\sin(x^2)$</h4>
      <p>Find the derivative of $f(x) = \sin(x^2)$ with respect to $x$.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identify Layers:</strong> Outer function $g(u) = \sin(u)$, inner function $h(x) = x^2$.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Differentiate Layers:</strong> $g'(u) = \cos(u)$ and $h'(x) = 2x$.</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Apply Chain Rule:</strong> $f'(x) = g'(h(x)) \cdot h'(x) = \cos(x^2) \cdot 2x$.</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Logic:</strong> The change in $f$ is the change in the 'sine' layer <strong>multiplied</strong> by the change inside the 'squared' layer. This is how gradients flow through network layers.
        </div>
      </div>
    </div>

    <h2 id="example-backprop">Example 2: Backpropagation Step (Single Neuron)</h2>
    <div class="example-box">
      <h4>Problem: Calculating Weight Gradients</h4>
      <p>Given a hidden neuron output $a = \sigma(wx + b)$ and a loss $L = \frac{1}{2}(y - a)^2$. Find $\frac{\partial L}{\partial w}$.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Local Gradient (Loss):</strong> $\frac{\partial L}{\partial a} = -(y - a)$.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Local Gradient (Activation):</strong> $\frac{\partial a}{\partial z} = a(1 - a)$, where $z = wx+b$.</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Local Gradient (Weight):</strong> $\frac{\partial z}{\partial w} = x$.</div></div>
      <div class="step-box"><span class="step-num">4</span><div><strong>Chain Rule Result:</strong> $\frac{\partial L}{\partial w} = \frac{\partial L}{\partial a} \cdot \frac{\partial a}{\partial z} \cdot \frac{\partial z}{\partial w} = -(y-a) \cdot a(1-a) \cdot x$.</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>ML Insight:</strong> This formula tells the optimizer exactly how to tweak $w$ to reduce the error. Each term is a "local" derivative that we multiply together.
        </div>
      </div>
    </div>

    <h2 id="conclusion">Conclusion</h2>
    <p>By calculating these partial derivatives layer-by-layer moving backwards, the network "learns" exactly how much each weight contributed to the total error. This mathematical foundation is what allows complex models to converge toward an optimal solution.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Single-variable chains are simple, but ML involves thousands of simultaneous weights. Let's see <strong><a href="#/mathematics/calculus/neural-networks-examples">Practical Examples</a></strong> of the Chain Rule in action.
    </div>
  `
};
