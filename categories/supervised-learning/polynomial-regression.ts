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

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Transformation of Basis</a>
      <a href="#complexity">The Danger of Overfitting</a>
      <a href="#math">The Degree Polynomial</a>
      <a href="#analogy">The "Bent Ruler" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Transformation of Basis</h2>
    <p>Wait, if it has curves (\(x^2, x^3\)), is it still "Linear"? <strong>Yes!</strong> It's linear in the <strong>weights</strong> (\(w\)). We just "Expand" our features. Instead of just having \(x\), we create new features: \(x^2\), \(x^3\), and so on.</p>
    <div class="math-block">$$y = w_0 + w_1 x + w_2 x^2 + w_3 x^3 + \epsilon$$</div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Data Hallucination."</strong> 
        The machine only knows how to draw straight lines. So, we "Trick" it. 
        We take our flat data and <strong>bend it into 3D space</strong>. In that higher-dimensional space, the relationship looks like a straight line again. When we "Project" it back to our 1D world, it looks like a <strong>Beautiful Curve</strong>.
      </div>
    </div>

    <h2 id="complexity">The Danger of Overfitting</h2>
    <div class="example-box">
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
    </div>

    <h2 id="analogy">The "Bent Ruler" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are trying to measure a <strong>Bumpy Hill</strong>. 
        **Linear Regression** is like using a <strong>Rigid Wooden Ruler</strong>. No matter how you tilt it, you can't follow the bumps. 
        **Polynomial Regression** is like using a <strong>Flexible Plastic Ruler</strong>. You can bend it to follow the hills and valleys. 
        But beware: if the ruler is <strong>too flexible (Too high degree)</strong>, you can fold it in half and make it touch any speck of dirt on the hill. It ceases to be a ruler and becomes <strong>Chaos</strong>.
      </div>
    </div>

    <h2 id="algorithm">The Polynomial Regression Algorithm</h2>
    <div class="example-box">
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
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Projection:</strong> The resulting "Straight line" in the expanded space appears as a curve when plotted against the original $x$.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: Stopping Distance</h2>
    <p>Physics tells us that the distance $(d)$ it takes for a car to stop doesn't just grow linearly with speed $(v)$, it grows with the <strong>Square of the Speed</strong>.</p>
    <ul>
      <li><strong>Linear Model:</strong> Might predict that doubling your speed doubles your stopping distance. (Incorrect and Dangerous).</li>
      <li><strong>Polynomial Model:</strong> Corrects this by adding a $v^2$ term. It shows that doubling your speed actually **quadruples** your stopping distance.</li>
    </ul>
    <p>This "Curve of Reality" is what saves lives in automated braking systems.</p>

    <h2 id="python">Python Implementation</h2>
    <python-code>
import numpy as np
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

# 1. Speed (x) vs Stopping Distance (y)
X = np.array([10, 20, 30, 40, 50]).reshape(-1, 1)
y = np.array([5, 20, 45, 80, 125]) # y = 0.05 * x^2

# 2. Transform to degree 2 (The 'Bent Ruler')
poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)

# 3. Fit Linear Regression to the 'Bent' data
model = LinearRegression()
model.fit(X_poly, y)

print(f"Confidence score: {model.score(X_poly, y)*100:.1f}%")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Enough with numbers. How do we build a model that can "Sort" things into buckets? Explore <strong><a href="#/machine-learning/supervised-learning/classification-intro">Introduction to Classification</a></strong>.
    </div>
  `
};
