import { TopicSection } from '../../src/data/types';

export const polynomialRegressionSection: TopicSection = {
  id: "polynomial-regression",
  title: "Polynomial Regression",
  description: "Polynomial Regression models non-linear relationships by transforming features into cross-products and higher-order terms.",
  color: "#58a6ff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Non-Linear</div>
      <h1>Polynomial Regression</h1>
      <p>Sometimes, a straight line is just too <strong>dumb</strong>. If you're predicting the growth of a virus or the trajectory of a ball, the relationship is a <strong>Curve</strong>. <strong>Polynomial Regression</strong> is the trick we use to make a linear tool fit a non-linear world.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Sometimes, a straight line is just too <strong>dumb</strong> to capture the reality of the world. If you are predicting the trajectory of a ball, the growth of a virus, or the complex curves of a stock market trend, the relationship isn't a line—it's a <strong>Curve</strong>. <strong>Polynomial Regression</strong> is the mathematical trick we use to make a linear tool fit a non-linear world. We don't change the algorithm; we just "Expand" the features. By treating \(x^2\) and \(x^3\) as entirely new dimensions, we allow a simple linear model to "Bend" and follow the bumps of the data.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Polynomial Regression</div>
      <p>Polynomial regression is a special case of multiple linear regression where the features are $d$-th degree polynomials of the original input $x$. The hypothesis function is:</p>
      <div class="math-block">
        $$\hat{y} = w_0 + w_1 x + w_2 x^2 + \dots + w_d x^d$$
      </div>
      <p>This is formally a linear model because the weights $w_j$ are linear. The feature space is transformed via a **Basis Expansion** mapping $\phi(x) = [1, x, x^2, \dots, x^d]^T$, and the objective remains the minimization of the squared error:</p>
      <div class="math-block">
        $$\mathcal{L}(\mathbf{w}) = \sum_{i=1}^n (y_i - \mathbf{w}^T \phi(x_i))^2$$
      </div>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Polynomial Regression as the <strong>"Flexible Tape Measure"</strong> or the <strong>"Bent Ruler."</strong> 
        Imagine you are trying to measure a bumpy hill. <strong>Linear Regression</strong> is like using a rigid wooden ruler—it misses the valleys and peaks entirely. 
        <strong>Polynomial Regression</strong> is like using a flexible plastic ruler that you can bend to fit the landscape. 
        But beware: if that ruler is <strong>too flexible (Too high degree)</strong>, you can fold it in half to touch every tiny speck of dirt on the hill. In ML, we call this "Overfitting"—the model stops learning the path and starts memorizing the dust (the noise).
      </div>
    </div>

    <h2 id="complexity">The Danger of Overfitting</h2>
    
      <h4>Scenario: The Complexity Trap</h4>
      <p>Data: 5 points. Goal: Predict the 6th point.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Degree 1:</strong> A straight line that misses most points. (Underfitting).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Degree 10:</strong> A wild, wavy line that touches every point perfectly. (Overfitting).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Result:</strong> If you use a degree that is too high, the model "Hallucinates" patterns that aren't there. It catches the <strong>Noise</strong>, not the <strong>Signal</strong>.</div>
        </div>
      </div>
    

    <h2 id="analogy">The "Bent Ruler" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are trying to measure a <strong>Bumpy Hill</strong>. 
        <strong>Linear Regression</strong> is like using a <strong>Rigid Wooden Ruler</strong>. No matter how you tilt it, you can't follow the bumps. 
        <strong>Polynomial Regression</strong> is like using a <strong>Flexible Plastic Ruler</strong>. You can bend it to follow the hills and valleys. 
        But beware: if the ruler is <strong>too flexible (Too high degree)</strong>, you can fold it in half and make it touch any speck of dirt on the hill. It ceases to be a ruler and becomes <strong>Chaos</strong>.
      </div>
    </div>

    <h2 id="algorithm">The Polynomial Regression Algorithm</h2>
    
      <h4>Linearity in Higher Dimensions</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Select Degree:</strong> Choose the maximum power ($n$) for your features.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Feature Expansion:</strong> Transform each feature $x$ into multiple columns: $[x^1, x^2, \dots, x^n]$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Matrix Construction:</strong> Append a column of 1s (intercept) and construct the design matrix $X_{poly}$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Linear Mapping:</strong> Use standard Ordinary Least Squares (OLS) to find the coefficients $w$ for these new features.
        </div>
    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Bent Ruler</h2>
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Bent Ruler</h2>
    
      <h4>Scenario: Measuring the Trajectory of a Ball</h4>
      <p>Imagine a ball flying through the air. Its height follows a curve, not a straight line.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Degree 1 (Linear):</strong> You try to use a wooden ruler. It misses the curve completely. "High Bias."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Degree 2 (Quadratic):</strong> You use a plastic ruler and bend it into a <strong>Parabola</strong>. It fits perfectly!</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Degree 20 (The Danger):</strong> You use a wet noodle. It jiggles and twists to touch every tiny speck of dust. "High Variance."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Conclusion:</strong> Polynomial regression gives you a <strong>Bendy Ruler</strong>. Use just enough bend to fit the path, but not enough to catch the wind.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Polynomial Features are just <strong>Feature Engineering</strong>. You are creating "hallucinated" features like $x^2$ to help a simple Linear model see a complex curve.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

# 1. Dataset: Speed (x) vs Stopping Distance (y)
X = np.array([10, 20, 30, 40, 50]).reshape(-1, 1)
y = np.array([5, 20, 45, 80, 125]) # Target: y = 0.05 * x^2

# 2. Linear Baseline
lin_model = LinearRegression().fit(X, y)
print(f"Linear R2 Score: {lin_model.score(X, y):.2f}")

# 3. Polynomial Expansion (The 'Bent Ruler')
poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)

# 4. Fit Linear Regression to Poly Features
poly_model = LinearRegression().fit(X_poly, y)
print(f"Polynomial R2 Score: {poly_model.score(X_poly, y):.2f}")

# 5. Predict for 60mph
X_new = poly.transform([[60]])
pred = poly_model.predict(X_new)
print(f"Prediction for 60mph: {pred[0]:.1f} feet")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Polynomial Regression is the "Flexible Ruler." It is the trick we use to make a simple linear tool fit the complex, curved reality of the physical world.</p>
    <ul>
      <li><strong>Robotic Trajectory Tracking</strong>: In robotics, a moving arm or a flying projectile doesn't follow a straight line—it follows a curve. Polynomial regression allows the AI to predict the landing spot by fitting a parabola to its motion data.</li>
      <li><strong>Economic Seasonality Modeling</strong>: Businesses don't grow in straight lines; they have "Cycles." Polynomial features allow a model to capture these bends, helping companies predict when their sales will peak or crash during the year.</li>
    </ul>
    <p>Teacher's Final Word: Sometimes a straight line is just too "Dumb." Use a bendy ruler to capture the hills and valleys of the real world, but be careful not to make it so flexible that it starts memorizing the dust.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Enough with numbers. How do we build a model that can "Sort" things into buckets? Explore <strong><a href="#/machine-learning/supervised-learning/classification-intro">Introduction to Classification</a></strong>.
    </div>
  `
};


