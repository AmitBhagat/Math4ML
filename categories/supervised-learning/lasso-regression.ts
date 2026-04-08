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

    <h2 id="example">Illustrated Example: The Brutal Casting Director</h2>
    <div class="example-box">
      <h4>Scenario: Reducing a Cast of 100 to 5 Essential Stars</h4>
      <p>Imagine your data features are actors auditioning for a movie. You have a tiny budget.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Standard linear model:</strong> It hires every single person who shows up, giving them all tiny 'Background' roles. (Dense Weights).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Lasso Director:</strong> He walks through the set and says: "If you aren't essential to the main plot, you are <strong>Fired</strong>."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Zero-Constraint (L1):</strong> Because the penalty is on the <strong>Absolute Value</strong>, weights are pushed hard against the '0' floor.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Result:</strong> The director hands in a script with only 5 names. The other 95 are <strong>Exactly zero</strong>. (Sparse Weights).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Lasso is a <strong>Feature Selector</strong>. Use it when you want to simplify your model and answer the question: "Which of these 1,000 variables actually matter?"
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: The Weight Killer</h2>
    <python-code static-output="[Training] Model trying to learn with alpha=5.0 (Brutal Executioner)\n[Input] 1 Useful Feature, 4 Random Noisy Features\n[Result] Learned Weights: [8.5, 0.0, 0.0, 0.0, 0.0]\n[Discovery] Lasso killed all 4 junk features exactly!\n[Interpretation] Feature 0 is the only one 'worth' the L1 penalty.">
import numpy as np
from sklearn.linear_model import Lasso

# 1. Dataset: 1 useful feature and 4 random junk ones
X = np.array([
    [10, 5, 2, 8, 1],
    [20, 1, 9, 3, 5],
    [30, 4, 1, 6, 9],
    [40, 2, 5, 7, 3]
])
y = np.array([100, 200, 300, 400]) # Depends ONLY on Feature 0 (Target: w=10)

# 2. Train with Lasso (Alpha = 5.0)
lasso_model = Lasso(alpha=5.0)
lasso_model.fit(X, y)

# 3. Check survival
weights = lasso_model.coef_
print(f"Feature Weights: {weights}")
print(f"Number of Useless Features Killed (w=0): {np.sum(weights == 0)}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if a straight line isn't enough, even with regularization? Explore <strong><a href="#/machine-learning/supervised-learning/polynomial-regression">Polynomial Regression</a></strong>.
    </div>
  `
};
