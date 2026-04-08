import { TopicSection } from '../../src/data/types';

export const convexOptimizationSection: TopicSection = {
  id: "convex-optimization",
  title: "Convex Optimization",
  description: "Convex Optimization studies the problem of minimizing convex functions over convex sets, guaranteeing that any local minimum is global.",
  color: "#F44336",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🏹 Optimization · Convexity</div>
      <h1>Convex Optimization: The Global Guarantee</h1>
      <p><strong>Convex Optimization</strong> is the statistical "Insurance Policy." in most Machine Learning problems, finding the absolute best solution is impossible. <strong>Convexity</strong> is the mathematical property that guarantees any local minimum you find is also the <strong>Global Minimum</strong>. It’s why Linear Regression and SVMs are so reliable.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Gradient Descent</strong>: Understanding minimization.</li>
        <li><strong>Jensen's Inequality</strong>: The mathematical foundation of convexity.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A function is <strong>Convex</strong> if you can draw a straight line between any two points on its curve and that line is always above the curve. If a loss surface is convex, it has no "Hidden Valleys" (Local Minima) that can trap your optimizer. No matter where you start, Gradient Descent will eventually roll down to the same single, perfect solution.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of the difference as <strong>"Finding the Restaurant in a Bowl vs. a Maze."</strong> 
        A <strong>Convex Space</strong> is like a perfectly smooth cereal bowl. If you drop a marble anywhere, it 100% will end up in the center. 
        A <strong>Non-Convex Space</strong> is a maze with dozens of "Fake" restaurants (Local Minima). You might get stuck in one and never know that a better one exists just over the next wall.
      </div>
    </div>

    <h2 id="definition">Convex Sets vs. Convex Functions</h2>
    <ul>
      <li><strong>Convex Set:</strong> If you pick any two points in the set, the entire line segment between them is also in the set. (A circle is convex; a donut is not).</li>
      <li><strong>Convex Function:</strong> The "Epigraph" (the space above the curve) is a convex set.</li>
    </ul>

    <h2 id="example-bowl" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Bowl vs. The Rollercoaster</h2>
    
      <h4>Problem: Identifying Guaranteed Solutions</h4>
      <p>Compare \(f(x) = x^2\) (Convex) vs. \(f(x) = \sin(x)\) (Non-Convex).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Parabola (\(x^2\)):</strong> Gradient Descent will always reach \(x=0\), the absolute global minimum.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Sine (\(\sin x\)):</strong> Depending on where you start, you might get trapped at \(x = 3\pi/2\) or \(7\pi/2\). You have no way of knowing if there is a "Better" minimum elsewhere.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Deep Learning is almost <strong>never</strong> convex, which is why it's so hard to train. Linear Regression is <strong>always</strong> convex, which is why it works every time.
        </div>
      </div>
    

    <h2 id="example-linear" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Convex vs. Non-Convex ML</h2>
    
      <h4>Problem: Comparing Two Algorithms</h4>
      <p>Support Vector Machines (SVM) vs. Neural Networks (NN).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>SVM:</strong> Uses a Quadratic Programming (Convex) objective. Finding the "Best Margin" is a solved problem with one answer.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>NN:</strong> The loss surface is a chaotic landscape with billions of parameters. Finding the "Best" weights is a never-ending quest.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Why do we use NN instead of SVM if they aren't convex? Because <strong>Capacity</strong> is more important than <strong>Guarantees</strong>. A chaotic NN can learn features that a "Guaranteed" SVM never could.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import cvxpy as cp
import numpy as np

# Solve a convex problem: Minimize x^2 + y^2 subject to x + y = 1
x = cp.Variable()
y = cp.Variable()

# Create objective and constraints
objective = cp.Minimize(cp.square(x) + cp.square(y))
constraints = [x + y == 1]

# Solve
prob = cp.Problem(objective, constraints)
prob.solve()

print(f"Optimal Value (Global): {prob.value:.4f}")
print(f"Optimal x: {x.value:.4f}, Optimal y: {y.value:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Linear Regression/OLS</strong>: The solution is a convex quadratic form.</li>
      <li><strong>Logan Elastic Net / Lasso</strong>: Regularized regression uses convex penalties.</li>
      <li><strong>Constrained Optimization</strong>: Optimization with boundaries (e.g. Budget constraints).</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if the global minimum is "too good"? What if the model simply memorizes the data? Explore <strong><a href="#/mathematics/optimization/regularization">Regularization (L1 & L2)</a></strong>.
    </div>
  `
};
