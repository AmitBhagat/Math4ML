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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In Machine Learning, we have a <strong>Loss Function</strong> that measures exactly how wrong our model's predictions are. Our goal is to find the perfect set of weights \(w\) that minimizes this error. Since we can't solve for the global optimum in one massive step for complex models, we take thousands of tiny, calculated steps downhill. <strong>Gradient Descent</strong> is the mathematical engine that drives this descent, using the local slope of the mountain to decide which direction is the fastest way down. It is the fundamental difference between a model that stares blindly at data and one that actively "Learns" from its mistakes. It is the tactical decision to follow the gravity of the math until the truth is revealed at the bottom of the valley.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: First-Order Empirical Risk Minimization</div>
      <p>Gradient Descent is an iterative optimization algorithm used to minimize a differentiable objective function $J(\theta)$ by updating parameters in the opposite direction of the gradient. The update rule at step $t$ is:</p>
      
      <div class="math-block">
        $$\theta_{t+1} = \theta_t - \eta \nabla_\theta J(\theta_t)$$
      </div>
      
      <p>The components of the update are:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>$\nabla_\theta J(\theta)$ (The Gradient)</strong>: The vector of partial derivatives $\left[ \frac{\partial J}{\partial \theta_1}, \dots, \frac{\partial J}{\partial \theta_d} \right]^\top$. It points in the direction of the steepest local increase.</li>
        <li><strong>$\eta$ (Learning Rate)</strong>: A positive scalar determining the step size. If $\eta$ is too large, the algorithm may overshoot the minimum; if too small, convergence becomes computationally prohibitive.</li>
      </ul>
      
      <p class="text-xs opacity-70 mt-2">For a **Convex** function, gradient descent is guaranteed to reach the global minimum. In deep learning (non-convex surfaces), the algorithm typically converges to a high-quality local minimum or a saddle point.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Gradient Descent as <strong>"The Drunkard on a Foggy Mountain"</strong> or <strong>"The Blindfolded Explorer."</strong> 
        You want to reach the pub at the bottom, but you are blindfolded and can only feel the ground beneath your boots. If the ground slopes up to the North, you move South. You take a cautious, calculated step. 
        Repeat this 10,000 times, and the <strong>Gravity of the Gradient</strong> will eventually pull you to the <strong>Global Minimum</strong>. In AI, your success depends on your <strong>Learning Rate</strong>—step too far and you'll fly off a cliff; step too small and you'll never arrive.
      </div>
    </div>

    <visualizer topic="GradientDescent" />

    <h2 id="example-parabola" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The 1D Parabola</h2>
    
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
    

    <h2 id="example-surface" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Sliding Down a 2D Bowl</h2>
    
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
    

    <h2 id="implementation">Implementation</h2>
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
    <p>Gradient Descent is the "Algorithm of Learning." It is the reason we can turn a random collection of numbers into a "Brain" that improves over time.</p>
    <ul>
      <li><strong>Training Deep Neural Networks</strong>: Every single modern AI, from ChatGPT to autonomous cars, is trained using Gradient Descent. It is the core motor that iteratively fixes the model's mistakes until the error is at its absolute lowest point.</li>
      <li><strong>Feature Transformation (Embedding Tuning)</strong>: When we represent words as vectors, we use Gradient Descent to "Nudge" those vectors closer together if the words are similar. This allows the AI to learn that "King" and "Queen" are related by walking them down the loss surface until they align.</li>
    </ul>
    <p>Teacher's Final Word: Gradient Descent is the fundamental difference between a model that stares blindly at data and one that actively improves. Every step is a small, calculated correction towards the truth.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we have 1 billion data points? We can't wait to calculate the gradient for all of them! Explore <strong><a href="#/mathematics/optimization/sgd">Stochastic Gradient Descent (SGD)</a></strong>.
    </div>
  `
};
