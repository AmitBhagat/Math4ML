import { TopicSection } from '../../src/data/types';

export const regularizationSection: TopicSection = {
  id: "regularization",
  title: "Regularization (L1 / L2)",
  description: "Regularization is a set of techniques used to reduce overfitting by adding a penalty term to the loss function.",
  color: "#F44336",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🏹 Optimization · Penalties</div>
      <h1>Regularization: The Constraints of Simplicity</h1>
      <p><strong>Regularization</strong> is a "Penalty" for being too complex. in most Machine Learning models, weights can grow wildly large as the model tries to memorize every outlier in your training set. <strong>L1 and L2 Regularization</strong> are the mathematical "Brakes" that keep the model honest and its weights small.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">L1 (Lasso) vs. L2 (Ridge)</a>
      <a href="#example-diamond">Example 1: The L1 Diamond (Sparsity)</a>
      <a href="#example-sphere">Example 2: The L2 Sphere (Smoothing)</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Vector Norms</strong>: Understanding L1 and L2 norms.</li>
        <li><strong>MAP Estimation</strong>: The Bayesian origin of regularization.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>A machine that is "Too Smart" will often overfit. It will find tiny, meaningless patterns that only exist in your training set (Noise). <strong>Regularization</strong> works by saying: <em>"I want you to minimize the errors, BUT I will penalize you for using large weights."</em> This forces the model to only use the weights that are <strong>Absolutely Necessary</strong> to explain the data.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of Regularization as <strong>"Anchor Points."</strong> 
        Without it, your model can sail anywhere to fit the data. 
        With it, the model is anchored to the origin (Zero). 
        You only allow it to sail away from the anchor if the <strong>data is strong enough</strong> to pull it there. It keeps the model "Simple" and prevents it from overcomplicating things.
      </div>
    </div>

    <h2 id="derivation">L1 (Lasso) vs. L2 (Ridge)</h2>
    <p>Loss = Error + \(\lambda \times\) Constraint.</p>
    <ul>
      <li><strong>L1 (Lasso):</strong> Constraint is \(\sum |w_i|\). It encourages <strong>Sparsity</strong> (making most weights exactly zero).</li>
      <li><strong>L2 (Ridge):</strong> Constraint is \(\sum w_i^2\). It encourages <strong>Small Weights</strong> (distributing the influence across many features).</li>
    </ul>

    <h2 id="example-diamond">Example 1: The L1 Diamond (Sparsity)</h2>
    <div class="example-box">
      <h4>Problem: Feature Selection</h4>
      <p>Imagine you have 1,000 features, but only 10 are actually useful. How do you find them?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Use <strong>L1 Regularization</strong>. The geometry of L1 is a diamond-shaped surface with sharp "Corners" on the axes.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Observation:</strong> The optimization process is much more likely to hit those corners. This forces the unimportant weights to hit 0 and stay there.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> This is why L1 is used for <strong>Automatic Feature Selection</strong>. It simplifies the model by deleting useless dimensions entirely.
        </div>
      </div>
    </div>

    <h2 id="example-sphere">Example 2: The L2 Sphere (Smoothing)</h2>
    <div class="example-box">
      <h4>Problem: Stability and Smoothing</h4>
      <p>Data: Two highly correlated features (e.g. Height in cm vs. Height in inches). Which one should get the weight?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Use <strong>L2 Regularization</strong>. The geometry of L2 is a smooth sphere centered at zero.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Observation:</strong> Instead of picking one (like L1 might), L2 will gently spread the weight across both. It hates extreme values.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> L2 is used for <strong>Stability</strong>. It ensures that no single feature dominates the model too much. This makes the final model much more robust to small changes in any individual feature.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

# A weight update with Ridge (L2) Regularization
def l2_update(w, grad, lr, lmbda):
    # Loss = Error + (lambda/2) * w^2
    # New grad = Gradient_Error + lambda * w
    w_new = w - lr * (grad + lmbda * w)
    return w_new

# A weight update with Lasso (L1) Regularization
def l1_update(w, grad, lr, lmbda):
    # Loss = Error + lambda * |w|
    # New grad = Gradient_Error + lambda * sign(w)
    w_new = w - lr * (grad + lmbda * np.sign(w))
    return w_new

lmbda = 0.1 # Strong regularization
w = 1.0 # start
grad = 0.05 # tiny gradient
print(f"L2 result: {l2_update(w, grad, 0.1, lmbda):.4f}")
print(f"L1 result: {l1_update(w, grad, 0.1, lmbda):.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Weight Decay</strong>: In Deep Learning, we add L2 regularization to keep weights small and controllable.</li>
      <li><strong>Elastic Net</strong>: Combining both L1 and L2 to get the benefits of sparsity and stability.</li>
      <li><strong>SVM (Support Vector Machines)</strong>: Regularization is a fundamental part of the "Soft Margin" calculation.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have completed the core mathematics foundation. You possess the <strong>Linear Algebra</strong>, <strong>Calculus</strong>, <strong>Probability</strong>, <strong>Statistics</strong>, <strong>Information Theory</strong>, and <strong>Optimization</strong> expertise to master any algorithm. Explore <strong><a href="#/supervised/basics">Supervised Machine Learning</a></strong>.
    </div>
  `
};
