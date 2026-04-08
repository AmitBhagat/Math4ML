import { TopicSection } from '../../src/data/types';

export const lassoRegressionSection: TopicSection = {
  id: "lasso-regression",
  title: "Lasso Regression (L1 Regularization)",
  description: "Lasso Regression adds a penalty proportional to the absolute value of the weights, which can set some weights exactly to zero.",
  color: "#58a6ff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Feature Selection</div>
      <h1>Lasso Regression (L1)</h1>
      <p>While Ridge minimizes every weight slightly, <strong>Lasso (L1)</strong> is more aggressive. It doesn't just "Muffle" noisy features; it <strong>Kills</strong> them. Lasso is your best friend when you have 100 features but suspect only 5 actually matter.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The L1 Absolute Penalty</a>
      <a href="#sparsity">Sparsity: The Zero-Weight Magic</a>
      <a href="#math">The Lasso Loss Function</a>
      <a href="#analogy">The "Brutal Executioner" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The L1 Absolute Penalty</h2>
    <p>Lasso stands for **Least Absolute Shrinkage and Selection Operator**. It adds the <strong>Absolute Value</strong> of weights as a penalty. Unlike the square in Ridge, the absolute value has a "Sharp Edge" at zero, which forces many weights to become <strong>exactly 0.0</strong>.</p>
    <div class="math-block">$$Loss = \sum (y_i - \hat{y}_i)^2 + \lambda \sum |w_j|$$</div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Geometric Constraints."</strong> 
        Ridge is a **Sphere** (it lets you move in any direction smoothly). Lasso is a **Diamond** (it has corners). When you try to find the "Best Fit" inside a diamond, the math naturally pushes you toward the <strong>Corners (Axes)</strong>, where one feature is 1 and the other is 0.
      </div>
    </div>

    <h2 id="sparsity">Sparsity: The Zero-Weight Magic</h2>
    <div class="example-box">
      <h4>Scenario: Predicting Disease from Genes</h4>
      <p>Data: 20,000 genes. Target: [Diabetes Risk].</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>The Goal:</strong> You know only 10-20 genes are actually linked to the disease. The rest are noise.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Result with Lasso:</strong> It sets 19,980 weights to <strong>zero</strong>. It effectively <strong>Selects the Features</strong> for you, giving you a lean, interpretable model.
        </div>
      </div>
    </div>

    <h2 id="analogy">The "Brutal Executioner" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are a <strong>Casing Director</strong> for a movie with a <strong>Tiny Budget</strong>. 
        **Ridge** is like paying every actor a "Minimal Wage" to keep them on set but giving them no lines. 
        **Lasso** is the <strong>Brutal Executioner</strong>. It walks through the set and says: "If you aren't essential to the main plot, you are <strong>Fired</strong>. Hand in your script." 
        By the end, only the **Star Actors (Relevant Features)** are left.
      </div>
    </div>

    <h2 id="algorithm">The Lasso Regression Algorithm</h2>
    <div class="example-box">
      <h4>Mathematical Process</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Cost Function:</strong> Define the objective as $J(w) = MSE + \lambda \sum_{j=1}^p |w_j|$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Coordinate Descent:</strong> Optimize one dimension (weight) at a time while holding others fixed.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Soft Thresholding:</strong> Apply the rule: if the feature's correlation with the residual is less than $\lambda/2$, set the weight to <strong>0</strong>.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Iterate:</strong> Cycle through all features until the weights converge.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Feature Selection:</strong> Review the final model to see which features were "Executed" (killed) by the Lasso.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Gene Hunter</h2>
    <p>Imagine a scientist looking for the cause of a rare disease. They measure 5,000 different <strong>Genes</strong> in 100 patients.</p>
    <ul>
      <li><strong>The Problem:</strong> Most of those genes have nothing to do with the disease. They are just "Noise."</li>
      <li><strong>The Solution:</strong> Lasso Regression treats the 5,000 genes as features. Because it is the "Brutal Executioner," it kills the weights for 4,995 irrelevant genes.</li>
      <li><strong>The Result:</strong> The scientist is left with a list of exactly <strong>5 target genes</strong> to study in the lab.</li>
    </ul>

    <h2 id="python">Python Implementation</h2>
    <python-code>
from sklearn.linear_model import Lasso
import numpy as np

# 1. 5 Features (only the 1st one matters)
X = np.array([
    [10, 0, 0, 0, 0],
    [20, 1, 0, 1, 0],
    [30, 0, 1, 0, 1],
    [40, 1, 1, 1, 1]
])
y = np.array([100, 200, 300, 400]) # Purely based on Feature 0

# 2. Train Lasso (Brutal Executioner)
# alpha=10 is a strong penalty
model = Lasso(alpha=10)
model.fit(X, y)

# 3. Check which features survived
print(f"Weights of the 5 features: {model.coef_}")
# You will see [9.something, 0, 0, 0, 0]
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if a straight line isn't enough, even with regularization? Explore <strong><a href="#/machine-learning/supervised-learning/polynomial-regression">Polynomial Regression</a></strong>.
    </div>
  `
};
