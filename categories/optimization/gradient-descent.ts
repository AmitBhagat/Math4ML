import { TopicSection } from '../../src/data/types';

export const gradientDescentSection: TopicSection = {
  id: "gradient-descent",
  title: "Gradient Descent",
  description: "Gradient Descent is the primary optimization algorithm used to minimize a function by iteratively moving in the direction of steepest descent.",
  color: "#F44336",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🏹 Optimization · Descent</div>
      <h1>Gradient Descent: The Path Downward</h1>
      <p><strong>Gradient Descent</strong> is the fundamental "Algorithm of Learning." It is how a machine moves from a random guess to a perfectly tuned model. By calculating the <strong>Gradient</strong> (the direction of steepest ascent) and moving the opposite way, we "slide" down the loss surface toward the minimum error.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Definition</a>
      <a href="#example-parabola">Example 1: The 1D Parabola</a>
      <a href="#example-surface">Example 2: Sliding Down a 2D Bowl</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>The Gradient</strong>: Understanding \(\nabla f\).</li>
        <li><strong>Loss Functions</strong>: Defining what you want to minimize.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>In Machine Learning, we have a <strong>Loss Function</strong> that measures how wrong our model is. We want to find the parameter weights \(w\) that make this error as small as possible. Since we can't solve for the perfect \(w\) in one step for complex models (like Neural Networks), we take many tiny steps downhill. Each step is guided by the <strong>Gradient</strong>, which tells us exactly which way is "Down."</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Imagine you are a <strong>Drunkard on a Foggy Mountain</strong>. 
        You want to reach the pub at the bottom, but you can only see the ground directly beneath your feet. 
        You feel the slope with your boots. If the ground slopes up to the North, you take a step South. 
        Repeat this 1,000 times, and eventually, you'll be having a drink at the <strong>Local Minimum</strong>.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <p>To update the weights \(\theta\), we use the update rule:</p>
    <div class="math-block">$$\theta_{new} = \theta_{old} - \eta \nabla J(\theta)$$</div>
    <ul>
      <li><strong>\(\nabla J(\theta)\)</strong>: The Gradient (the vector of partial derivatives).</li>
      <li><strong>\(\eta\) (Eta)</strong>: The <strong>Learning Rate</strong>. This determines how big of a "step" we take.</li>
    </ul>

    <h2 id="example-parabola">Example 1: The 1D Parabola</h2>
    <div class="example-box">
      <h4>Problem: Minimizing \(f(x) = x^2\)</h4>
      <p>Start at \(x = 4\). Use learning rate \(\eta = 0.1\). Find the next two positions.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Gradient:</strong> \(f'(x) = 2x\). At \(x=4\), the gradient is \(2(4) = 8\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Update 1:</strong> \(x_1 = 4 - 0.1(8) = 3.2\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Update 2:</strong> New gradient is \(2(3.2) = 6.4\). \(x_2 = 3.2 - 0.1(6.4) = 2.56\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Notice how the steps (\(0.8, 0.64, \dots\)) get smaller as we get closer to the bottom (\(x=0\)). The gradient naturally slows down as the slope flattens.
        </div>
      </div>
    </div>

    <h2 id="example-surface">Example 2: Sliding Down a 2D Bowl</h2>
    <div class="example-box">
      <h4>Problem: Optimizing Two Weights simultaneously</h4>
      <p>Loss surface: \(J(w_1, w_2) = w_1^2 + 5w_2^2\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Gradient:</strong> \(\nabla J = \begin{bmatrix} 2w_1 \\ 10w_2 \end{bmatrix}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Observation:</strong> The gradient in the \(w_2\) direction is much steeper (10 vs 2).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> In 2D, the model will "zig-zag" more aggressively in the direction of the steeper slope. This is why <strong>Feature Scaling</strong> is so important—it makes the bowl "round" instead of an "elongated oval," helping Gradient Descent move straight to the center.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

# f(x) = x^2, f'(x) = 2x
def gradient(x):
    return 2 * x

x = 4.0
learning_rate = 0.1

for i in range(10):
    grad = gradient(x)
    x = x - learning_rate * grad
    print(f"Iteration {i+1}: x = {x:.4f}, grad = {grad:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Linear Regression</strong>: Fitting the "Best Fit Line" by minimizing the sum of rounded errors.</li>
      <li><strong>Neural Network Training</strong>: Backpropagation is just a clever way to calculate the massive gradient for millions of weights so we can run Gradient Descent on them.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we have 1 billion data points? We can't wait to calculate the gradient for all of them! Explore <strong><a href="#/mathematics/optimization/sgd">Stochastic Gradient Descent (SGD)</a></strong>.
    </div>
  `
};
