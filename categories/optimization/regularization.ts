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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A machine that is "Too Smart" will often overfit—it begins to memorize tiny, meaningless patterns that only exist in your specific dataset (Noise). <strong>Regularization</strong> is the mathematical "Surcharge" for complexity. It works by saying: <em>"I want you to minimize the errors, BUT I will penalize you for using large, aggressive weights."</em> This forces the model to only use the features that are <strong>Absolutely Necessary</strong> to explain the data. It is the tactical decision to trade a perfect score on your training data for a high score on the real world. It is the fundamental difference between a student who has understood the "Story" vs. one who has just memorized the page numbers.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Structural Risk Minimization (Complexity Penalty)</div>
      <p>Regularization involves minimizing a modified objective function $\tilde{J}$ that incorporates a penalty term $\Omega(\theta)$ based on model complexity:</p>
      
      <div class="math-block">
        $$\tilde{J}(\theta) = J(\theta) + \lambda \Omega(\theta)$$
      </div>
      
      <p>Two primary paradigms dominate the field:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>L2 Regularization (Ridge)</strong>: $\Omega(\theta) = \frac{1}{2} \|\theta\|_2^2$. This adds a quadratic penalty that discourages high-magnitude weights, equivalent to assuming a Gaussian prior $P(\theta) \sim \mathcal{N}(0, \sigma^2)$. It results in **Weight Decay**.</li>
        <li><strong>L1 Regularization (Lasso)</strong>: $\Omega(\theta) = \|\theta\|_1$. This adds an absolute magnitude penalty, equivalent to a Laplace prior. Because the L1 norm has a singular derivative at zero, it promotes **Sparsity**, effectively zeroing out irrelevant features.</li>
      </ul>
      
      <p class="text-xs opacity-70 mt-2">The hyperparameter $\lambda$ (Lambda) determines the strength of the constraint. High $\lambda$ leads to **Underfitting** (too much bias); low $\lambda$ leads to **Overfitting** (too much variance).</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Regularization as <strong>"The Mechanical Brake"</strong> or a <strong>"Simplicity Tax."</strong> 
        Without it, your model is like a ship that can sail anywhere to fit the data points. With it, the model is physically anchored to the origin (Zero). 
        You only allow the model to move away from the anchor if the <strong>data is loud enough</strong> to justify the extra tax. 
        <strong>L1 (Lasso)</strong> is a harsh tax that completely deletes useless features (Sparsity), while <strong>L2 (Ridge)</strong> is a gentler stabilizer that keeps all weights tiny and evenly distributed. It turns your model from a frantic memorizer into a calm generalizer.
      </div>
    </div>

    <h2 id="example-diamond" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The L1 Diamond (Sparsity)</h2>
    
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
    

    <h2 id="example-sphere" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The L2 Sphere (Smoothing)</h2>
    
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
    

    <h2 id="implementation">Implementation</h2>
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
