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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>While Ridge regression "Muffles" your noisy features, <strong>Lasso (L1)</strong> is a much more aggressive auditor. It doesn't just lower the volume on useless variables; it <strong>kills them entirely</strong>. Lasso is your best friend when you have 1,000 features but suspect that only 5 of them actually matter. By adding a penalty based on the <strong>Absolute Value</strong> of the weights, Lasso forces the model to be extremely picky. Any feature that isn't strongly contributing to the prediction gets its weight set to <strong>exactly zero</strong>, leaving you with a lean, interpretable "Best-Hits" list of variables.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Lasso Regression (L1)</div>
      <p>The Least Absolute Shrinkage and Selection Operator (Lasso) adds an $L_1$ regularization term to the least squares objective. Unlike $L_2$, the $L_1$ penalty is non-differentiable at zero, which encourages coefficients to become exactly zero (sparsity):</p>
      <div class="math-block">
        $$\text{arg}\min_{\mathbf{w}} \left\{ \frac{1}{2n} \|\mathbf{y} - \mathbf{X}\mathbf{w}\|_2^2 + \lambda \|\mathbf{w}\|_1 \right\}$$
      </div>
      <p>Where $\|\mathbf{w}\|_1 = \sum_{j=1}^d |w_j|$ is the $L_1$ norm. This optimization problem has no closed-form solution and is typically solved using **Coordinate Descent**.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Lasso Regression as the <strong>"Brutal Executive Auditor"</strong> or the <strong>"Zero-Tolerance Casting Director."</strong> 
        Imagine you are casting a movie with a tiny budget. <strong>Ridge Regression</strong> keeps every actor around but pays them only a dollar, giving them no lines. <strong>Lasso</strong> walks through the room and says: "If you aren't essential to the main plot, you are <strong>Fired</strong>. Hand in your script." 
        Geometrically, because the L1 penalty is a <strong>Diamond</strong> with sharp corners on the axes, the math naturally pushes the "losers" exactly into those corners (zero). It's the ultimate tool for <strong>Automatic Feature Selection</strong>.
      </div>
    </div>

    <h2 id="sparsity">Sparsity: The Zero-Weight Magic</h2>
    
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
    

    <h2 id="analogy">The "Brutal Executioner" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are a <strong>Casing Director</strong> for a movie with a <strong>Tiny Budget</strong>. 
        <strong>Ridge</strong> is like paying every actor a "Minimal Wage" to keep them on set but giving them no lines. 
        <strong>Lasso</strong> is the <strong>Brutal Executioner</strong>. It walks through the set and says: "If you aren't essential to the main plot, you are <strong>Fired</strong>. Hand in your script." 
        By the end, only the <strong>Star Actors (Relevant Features)</strong> are left.
      </div>
    </div>

    <h2 id="algorithm">The Lasso Regression Algorithm</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Brutal Casting Director</h2>
    
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
          Lasso is a <strong>Feature Selector</strong>. Use it when you want to simplify your model and answer the question: "Which of these 1,000 variables actually matter?"
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
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
