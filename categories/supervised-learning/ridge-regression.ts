import { TopicSection } from '../../src/data/types';

export const ridgeRegressionSection: TopicSection = {
  id: "ridge-regression",
  title: "Ridge Regression (L2 Regularization)",
  description: "Ridge Regression adds a penalty proportional to the square of the weights to prevent overfitting.",
  color: "#58a6ff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Regularization</div>
      <h1>Ridge Regression (L2)</h1>
      <p>Sometimes, Linear Regression is <strong>too eager to please</strong>. If you have noise in your data, the model might try to follow it so closely that it overfits. <strong>Ridge Regression</strong> is like putting a "Leash" on the model's weights to keep them under control.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The L2 Penalty</a>
      <a href="#benefit">The Variance Reduction</a>
      <a href="#math">The Ridge Loss Function</a>
      <a href="#analogy">The "Elastic Anchor" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The L2 Penalty</h2>
    <p>In standard OLS, we just minimize the error. In Ridge, we minimize the error <strong>PLUS</strong> a penalty for how large our weights are. We want the model to be accurate, but we also want the weights (\(w\)) to be small.</p>
    <div class="math-block">$$Loss = \sum (y_i - \hat{y}_i)^2 + \lambda \sum w_j^2$$</div>
    <ul>
      <li><strong>\(\lambda\) (Lambda):</strong> The "Strength" of the leash. If \(\lambda = 0\), it's just OLS. If \(\lambda\) is huge, all weights become almost zero.</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Shrinkage Effect."</strong> 
        Ridge doesn't delete features; it just <strong>muffles</strong> them. It says: "You can use this feature, but don't rely too much on it." It forces the model to spread its "trust" across all features rather than betting everything on one.
      </div>
    </div>

    <h2 id="benefit">The Variance Reduction</h2>
    <p>Ridge is especially useful when features are **Correlated** (Multicollinearity). In standard OLS, the weights become unstable and explode. Ridge "Stabilizes" the weights, making the model more robust to new data.</p>
    
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Key Result:</strong> Higher Bias (slightly less accurate on training), but <strong>Lower Variance</strong> (much more stable on test data).
      </div>
    </div>

    <h2 id="analogy">The "Elastic Anchor" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine your line is a <strong>Tent Pole</strong> trying to stay upright in a storm. 
        **Standard OLS** is just let the pole lean wherever the wind (Noise) blows it. 
        **Ridge Regression** is like attaching <strong>Elastic Cords (Springs)</strong> from the pole to the ground. 
        The cords pull the pole back toward the center (Weight 0). The pole can still move if the wind is <strong>Truly Strong (Real Data)</strong>, but it won't wiggle for every tiny breeze (Noise).
      </div>
    </div>

    <h2 id="algorithm">The Ridge Regression Algorithm</h2>
    <div class="example-box">
      <h4>Mathematical Process</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Parameter Selection:</strong> Choose a regularization strength $\lambda$ (alpha in scikit-learn).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Loss Formulation:</strong> Define the objective function as the sum of Mean Squared Error and the L2 norm of weights: $MSE + \lambda ||w||_2^2$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Gradient Calculation:</strong> Derive the gradient with respect to $w$: $2X^T(Xw - y) + 2\lambda w$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Optimization:</strong> Solve for $w$ using the closed-form solution: $w = (X^T X + \lambda I)^{-1} X^T y$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Shrinkage:</strong> Observe that weights are pulled toward zero, effectively stabilizing the model against collinearity.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: Predicting Exam Scores</h2>
    <p>Imagine you are predicting a student's final score based on 100 different features: hours studied, water drunk, shoes worn, room temperature, etc.</p>
    <ul>
      <li><strong>Standard Linear Regression:</strong> Might find a "weird" pattern where 'Shoes Worn' suddenly becomes very important just by chance, leading to a crazy prediction.</li>
      <li><strong>Ridge Regression:</strong> Adds a the "Elastic Cords." It realizes 'Shoes Worn' is noisy and shrinks its importance to near-zero, while keeping 'Hours Studied' as the main driver.</li>
    </ul>
    <p>The result is a model that won't give a student a 150% score just because they wore red shoes.</p>

    <h2 id="python">Python Implementation</h2>
    <python-code>
from sklearn.linear_model import Ridge
import numpy as np

# 1. Messy data with a dummy feature (Shoes)
# [Hours, Shoes]
X = np.array([[5, 10], [10, 12], [15, 8], [20, 15]])
y = np.array([50, 65, 80, 95]) # Scores

# 2. Train with Ridge (Leash on)
# alpha=1.0 is our lambda
model = Ridge(alpha=1.0)
model.fit(X, y)

# 3. Predict for 12 hours of study
test_point = np.array([[12, 10]])
score = model.predict(test_point)
print(f"Predicted Score: {score[0]:.2f}")
print(f"Weights (Hours, Shoes): {model.coef_}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we want to actually "Delete" useless features instead of just muffling them? Explore <strong><a href="#/machine-learning/supervised-learning/lasso-regression">Lasso Regression</a></strong>.
    </div>
  `
};
