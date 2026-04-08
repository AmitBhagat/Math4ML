const e={id:"regression-intro",title:"Introduction to Regression",description:"Regression is the fundamental task of predicting a continuous, numerical output based on input features.",color:"#58a6ff",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Core</div>
      <h1>Introduction to Regression</h1>
      <p>In Machine Learning, <strong>Regression</strong> is our primary tool for answering "How Much?" questions. It's the art of finding a function $f(x)$ that maps your input features (like house size) to a <strong>continuous</strong> numerical output (like house price).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Core Theory: The Continuous Mapping</a>
      <a href="#analogy">The "Shadow Predictor" Analogy</a>
      <a href="#math">The Objective: Error Minimization</a>
      <a href="#types">Flavors of Regression</a>
    </div>

    <h2 id="theory">Core Theory: The Continuous Mapping</h2>
    <p>Unlike Classification (which deals with buckets), Regression deals with an <strong>infinite spectrum</strong>. If you are predicting the temperature, it could be 20.1°C, 20.11°C, or 20.111°C. The "Learning" in regression is about finding the <strong>Best-Fit Line</strong> (or curve) through your data points.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Finding the Trend."</strong> 
        Regression is like being a <strong>Stock Trader</strong> who looks at a jagged graph of prices and tries to draw a straight line that says: "Overall, it's going up at this rate." You ignore the daily noise to find the <strong>Directional Truth</strong>.
      </div>
    </div>

    <h2 id="analogy">The "Shadow Predictor" Analogy</h2>
    <div class="example-box">
      <h4>Scenario: Predicting the Length of a Shadow</h4>
      <p>Data: [Time of Day (Sun Angle)]. Target: [Length of a Pole's Shadow].</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Observation:</strong> As the sun goes down, the shadow gets longer. It's a smooth, continuous change.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>The Regression Goal:</strong> Find a formula $L = f(\theta)$ so that if I tell you a completely new angle $\theta = 42.5^{\circ}$, you can tell me the exact shadow length in millimeters.
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Key Insight:</strong> Regression allows us to <strong>Interpolate</strong> (guess between points) and <strong>Extrapolate</strong> (guess the future).
        </div>
      </div>
    </div>

    <h2 id="math">The Objective: Error Minimization</h2>
    <p>How do we know if our line is "Good"? We measure the <strong>Residuals</strong> (the distance between our predicted line and the actual data points). We want to find the line where the <strong>Sum of Squared Errors (SSE)</strong> is as small as possible.</p>
    <div class="math-block">$$Loss = \sum_{i=1}^n (y_i - \hat{y}_i)^2$$</div>

    <h2 id="types">Flavors of Regression</h2>
    <ul>
      <li><strong>Linear:</strong> A straight line. Simple but rigid.</li>
      <li><strong>Polynomial:</strong> A curved line. Flexible but dangerous (Overfitting).</li>
      <li><strong>Regularized (Ridge/Lasso):</strong> A line with "Constraints" to keep it from getting too crazy.</li>
    </ul>

    <h2 id="algorithm">The General Regression Algorithm</h2>
    <div class="example-box">
      <h4>Step-by-Step Logic</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Data Collection:</strong> Gather input features $X$ and continuous labels $y$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Model Selection:</strong> Choose a function $f(x, w)$ (e.g., $wx + b$).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Loss Definition:</strong> Define a Cost Function (usually Mean Squared Error) to measure how 'far' $f(x)$ is from $y$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Optimization:</strong> Adjust parameters $w$ to minimize the loss (using Gradient Descent or OLS).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Evaluation:</strong> Measure performance on unseen data using metrics like $R^2$ or RMSE.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Coffee Stall</h2>
    <p>Imagine you run a <strong>Coffee Stall</strong> in the park. You want to know how much milk to buy for tomorrow. You have data for the last 30 days:</p>
    <ul>
      <li><strong>Input (\(x\)):</strong> Tomorrow's Temperature Forecast.</li>
      <li><strong>Target (\(y\)):</strong> Total Cups of Coffee Sold.</li>
    </ul>
    <p>A regression model finds that $y = -10x + 500$. This means for every 1°C increase in temperature, you sell 10 fewer coffees (people want iced drinks instead). Now you can <strong>Predict</strong> your sales and minimize waste!</p>

    <python-code>
import numpy as np
from sklearn.linear_model import LinearRegression

# 1. Prepare Data (Temp vs. Cups Sold)
X = np.array([[10], [15], [20], [25], [30]]) # Temps
y = np.array([400, 350, 300, 250, 200]) # Cups sold

# 2. Initialize and Train Model
model = LinearRegression()
model.fit(X, y)

# 3. Predict for a new temp (22°C)
prediction = model.predict([[22]])
print(f"Predicted cups sold at 22°C: {prediction[0]:.2f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Let's start with the classic. Explore <strong><a href="#/machine-learning/supervised-learning/linear-regression">Linear Regression</a></strong>.
    </div>
  `},t={id:"linear-regression",title:"Linear Regression",description:"The simplest and most interpretable Regression model, assuming a linear relationship between features and output.",color:"#58a6ff",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Linear</div>
      <h1>Linear Regression</h1>
      <p>Imagine you have a cloud of data points and you want to draw a <strong>single straight line</strong> that passes as close to all of them as possible. That is <strong>Linear Regression</strong>. It's the "Hello World" of Machine Learning.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Line Equation</a>
      <a href="#ols">Ordinary Least Squares (OLS)</a>
      <a href="#assumptions">The "Linear" Assumptions</a>
      <a href="#analogy">The "Perfect String" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Line Equation</h2>
    <p>In Simple Linear Regression (one feature), we model the relationship as:</p>
    <div class="math-block">$$y = w \cdot x + b + \epsilon$$</div>
    <ul>
      <li><strong>\(w\) (Weight/Slope):</strong> How much \(y\) changes for every unit of \(x\).</li>
      <li><strong>\(b\) (Bias/Intercept):</strong> Where the line hits the \(y\)-axis.</li>
      <li><strong>\(\epsilon\) (Error):</strong> The "Noise" the model can't explain.</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Finding the Relationship."</strong> 
        If \(w = 2\), the model says: "For every 1 extra room in a house, the price goes up by $2,000." It's a simple, logical rule that humans and machines can both understand.
      </div>
    </div>

    <h2 id="ols">Ordinary Least Squares (OLS)</h2>
    <p>How do we find the "Best" \(w\) and \(b\)? We minimize the **Mean Squared Error (MSE)**. In simple cases, there is a **Closed-Form Solution** (The Normal Equation) that gives us the answer instantly without needing Gradient Descent:</p>
    <div class="math-block">$$w = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2}$$</div>

    <h2 id="assumptions">The "Linear" Assumptions</h2>
    <p>Linear Regression is powerful but <strong>fragile</strong>. It assumes:</p>
    <ul>
      <li><strong>Linearity:</strong> The relationship is actually a line (not a curve).</li>
      <li><strong>Independence:</strong> Observations don't influence each other.</li>
      <li><strong>Homoscedasticity:</strong> The "Noise" is constant across all data.</li>
    </ul>

    <h2 id="analogy">The "Perfect String" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine your data points are <strong>Metal Pegs</strong> on a board. 
        You have a <strong>Long Elastic String</strong>. You want to stretch the string so it passes through the pegs. 
        **Ordinary Least Squares** is the "Tension" in the string pulling it toward the average position of all the pegs. The string ends up in the **Optimal Position** where the total pulling force (Squared Error) is balanced.
      </div>
    </div>

    <h2 id="algorithm">The Linear Regression Algorithm (OLS)</h2>
    <div class="example-box">
      <h4>Closed-Form Solution Steps</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Initialize:</strong> Calculate the mean of input $\bar{x}$ and target $\bar{y}$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Numerator:</strong> Calculate the sum of products of differences: $\sum (x_i - \bar{x})(y_i - \bar{y})$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Denominator:</strong> Calculate the sum of squares of differences: $\sum (x_i - \bar{x})^2$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Coefficient:</strong> Compute $w = \text{Numerator} / \text{Denominator}$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Intercept:</strong> Compute $b = \bar{y} - w\bar{x}$.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: House Pricing</h2>
    <p>Consider a neighborhood where you want to predict house prices based on size:</p>
    <ul>
      <li><strong>Input:</strong> Square Footage (e.g., 1200, 1500, 1800 sqft).</li>
      <li><strong>Target:</strong> Price (e.g., $240k, $300k, $360k).</li>
    </ul>
    <p>A Linear Regression model might find the rule: <strong>Price = $200 \times \text{Sqft} + 0$</strong>. 
    This allows a real estate agent to instantly estimate that a 2000 sqft house should cost around $400,000.</p>

    <python-code>
from sklearn.linear_model import LinearRegression
import numpy as np

# 1. Square footage (1D array reshaped to 2D)
X = np.array([1200, 1500, 1800, 2100, 2400]).reshape(-1, 1)
y = np.array([240000, 300000, 360000, 420000, 480000])

# 2. Train the 'Perfect String'
model = LinearRegression()
model.fit(X, y)

# 3. Predict for a 2000 sqft house
price_2000 = model.predict([[2000]])
print(f"Estimated Price: \${price_2000[0]:,.0f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if our line is too sensitive to noise? Explore <strong><a href="#/machine-learning/supervised-learning/ridge-regression">Ridge Regression</a></strong>.
    </div>
  `},s={id:"ridge-regression",title:"Ridge Regression (L2 Regularization)",description:"Ridge Regression adds a penalty proportional to the square of the weights to prevent overfitting.",color:"#58a6ff",html:String.raw`
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
  `},o={id:"lasso-regression",title:"Lasso Regression (L1 Regularization)",description:"Lasso Regression adds a penalty proportional to the absolute value of the weights, which can set some weights exactly to zero.",color:"#58a6ff",html:String.raw`
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
  `},i={id:"polynomial-regression",title:"Polynomial Regression",description:"Polynomial Regression models non-linear relationships by transforming features into cross-products and higher-order terms.",color:"#58a6ff",html:String.raw`
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
  `},a={id:"classification-intro",title:"Introduction to Classification",description:"Classification is the task of predicting a discrete category (a label) from input features.",color:"#58a6ff",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Core</div>
      <h1>Introduction to Classification</h1>
      <p>If Regression answers "How Much?", <strong>Classification</strong> answers "What is it?". Whether it's telling a Cat from a Dog or identifying Fraudent credit card transactions, Classification is the art of <strong>Drawing Boundaries</strong> in data space.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">The Mechanics: Mapping to Discrete Buckets</a>
      <a href="#binary">Binary vs. Multi-class</a>
      <a href="#analogy">The "Sorting Hat" Analogy</a>
      <a href="#objective">The Goal: Decision Boundaries</a>
    </div>

    <h2 id="theory">The Mechanics: Mapping to Discrete Buckets</h2>
    <p>In Classification, your output \(Y\) is a <strong>Category</strong>. For a machine, we usually encode these as integers (0, 1, 2...). Our model doesn't just guess a number; it calculates the <strong>Probability</strong> that an input belongs to each bucket.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Drawing a Line in the Sand."</strong> 
        Classification is like an <strong>Apple Sorter</strong>. You see a fruit. You check its weight and color. Is it a "Fuji" or a "Granny Smith"? Unlike regression, there is no "in-between." You have to commit to <strong>one bucket</strong>.
      </div>
    </div>

    <h2 id="binary">Binary vs. Multi-class</h2>
    <div class="example-box">
      <h4>Scenario: The Complexity of Buckets</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Binary (0 or 1):</strong> The classic "Yes or No" (e.g. Spam vs. Not Spam). <strong>The Goal:</strong> Find one boundary.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Multi-class:</strong> Choosing one from many. (e.g. Recognizing digits 0-9). <strong>The Goal:</strong> Partition the space into multiple "Regions of Influence."</div>
        </div>
      </div>
    </div>

    <h2 id="analogy">The "Sorting Hat" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine the <strong>Sorting Hat from Harry Potter</strong>. 
        It has a <strong>Decision Boundary</strong> for each House (Gryffindor, Slytherin, etc.). 
        It "Reads" your features (Brave, Ambitious, Loyal). It doesn't say you are "40% Gryffindor." It says "You belong in **Gryffindor!**" 
        **Classification** is that hat. The "Learning" was the hat looking at 1,000 years of students to find the <strong>Patterns of Personality</strong> that define each house.
      </div>
    </div>

    <h2 id="objective">The Goal: Decision Boundaries</h2>
    <p>The core objective of any classification algorithm is to find the <strong>Decision Boundary</strong>. This is the "Fence" that separates classes. If a new data point lands on the left side of the fence, it's a cat. Right side? A dog. The "Better" the algorithm, the more **robust and accurate** that fence is.</p>

    <h2 id="algorithm">The Classification Algorithm</h2>
    <div class="example-box">
      <h4>The Sorting Process</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Feature Extraction:</strong> Convert raw data (images, text) into numerical vectors.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Model Definition:</strong> Choose an algorithm (e.g., Logistic Regression, SVM) to define the probability space.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Training:</strong> Adjust the model weights to maximize the probability of the correct labels (Minimizing Cross-Entropy Loss).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Boundary Estimation:</strong> Find the line or surface that separates the classes in N-dimensional space.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Inference:</strong> For a new point, calculate the probability of each class and choose the <strong>Maximum Probability</strong> bucket.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Spam Filter</h2>
    <p>Think about your email inbox. Every incoming mail is <strong>Classified</strong> before you see it.</p>
    <ul>
      <li><strong>Features:</strong> Keywords (e.g., "Win", "Prize", "Account"), Sender reputation, Number of attachments.</li>
      <li><strong>The Boundary:</strong> The "Sorting Hat" checks the email. If the "Spamminess" score $> 0.8$, it goes to the **Spam Bucket**. Otherwise, it goes to **Inbox**.</li>
    </ul>
    <p>A good classifier learns that "Meeting" is safe, but "CONGRATULATIONS!" in all caps is high-risk.</p>

    <h2 id="python">Python Implementation</h2>
    <python-code>
from sklearn.linear_model import LogisticRegression
import numpy as np

# 1. Email features: [Num_Keywords, Reputation_Score]
X = np.array([[20, 1], [2, 9], [30, 0], [1, 10]])
y = np.array([1, 0, 1, 0]) # 1 = Spam, 0 = Real

# 2. Train the 'Sorting Hat'
model = LogisticRegression()
model.fit(X, y)

# 3. Predict for a new email (5 keywords, 8 reputation)
new_mail = np.array([[5, 8]])
label = "Spam" if model.predict(new_mail)[0] == 1 else "Real"
print(f"Classification result: {label}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What's the most common tool for building this "Fence"? Explore <strong><a href="#/machine-learning/supervised-learning/logistic-regression">Logistic Regression</a></strong>.
    </div>
  `},n={id:"logistic-regression",title:"Logistic Regression",description:"Logistic Regression is used for binary classification, predicting the probability of an input matching a specific outcome.",color:"#58a6ff",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Probability</div>
      <h1>Logistic Regression</h1>
      <p>Wait—if it's classification, why is it called <strong>"Regression"</strong>? Because we start by predicting a continuous number (the log-odds) and then <strong>"Squash"</strong> it into a probability between 0 and 1. It is the gold standard for **Binary Decisions**.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">The Sigmoid: The Probability Filter</a>
      <a href="#loss">Log-Loss: The Penalty for Being Wrong</a>
      <a href="#decision">The Decision Threshold</a>
      <a href="#analogy">The "Water Filter" Analogy</a>
    </div>

    <h2 id="theory">The Sigmoid: The Probability Filter</h2>
    <p>In Linear Regression, your output can be anything (-\(\infty\) to \(\infty\)). That doesn't work for probability. To fix this, we pass the linear output \(z = wx + b\) through the <strong>Sigmoid Function</strong>:</p>
    <div class="math-block">$$\sigma(z) = \frac{1}{1 + e^{-z}}$$</div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Commitment."</strong> 
        The linear part \(z\) is very "Wobbly"—it moves up and down. The Sigmoid is the <strong>S-Curve</strong> that says: "Anything above 0, I'm leaning toward 1 (Yes). Anything below 0, I'm leaning toward 0 (No)." It's the <strong>Soft Fence</strong>.
      </div>
    </div>

    <h2 id="loss">Log-Loss: The Penalty for Being Wrong</h2>
    <p>In classification, we don't use MSE. Because the Sigmoid is non-linear, MSE would lead to a "Bumpy" loss surface. Instead, we use <strong>Binary Cross-Entropy (Log Loss)</strong>:</p>
    <div class="math-block">$$Loss = -\frac{1}{n} \sum [y \log(\hat{y}) + (1-y) \log(1-\hat{y})]$$</div>
    <p><strong>Note:</strong> This loss function is <strong>BRUTAL</strong>. If the model is 99.9% confident that a picture is a Cat, but it's actually a Dog, the penalty is nearly <strong>Infinite</strong>. It forces the model to be honest about its uncertainty.</p>

    <h2 id="decision">The Decision Threshold</h2>
    <div class="example-box">
      <h4>Scenario: Email Filter</h4>
      <p>The model outputs **0.85** from the Sigmoid.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Threshold:</strong> Usually 0.5. Anything \(\ge 0.5\) is Spam. Anything \(< 0.5\) is Not Spam.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Logic:</strong> You can tune this! If you are a <strong>Doctor</strong>, you might set the threshold to 0.1 because you'd rather have a **False Positive** than a **False Negative**.</div>
        </div>
      </div>
    </div>

    <h2 id="analogy">The "Water Filter" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are <strong>Filtering Water</strong>. 
        Raw data (Unfiltered water) is very messy. The Linear model (\(wx + b\)) is your <strong>Pipe</strong>—it moves the water. 
        The **Sigmoid Function** is the <strong>Filter Membrane</strong>. 
        It only lets the "Pure" results through. If the water has enough "Signal" to overcome the membrane's resistance, it comes out as <strong>Clean (1)</strong>. If not, it stays <strong>Dirty (0)</strong>. 
        The "Threshold" is you deciding <strong>how clean</strong> the water has to be before you drink it.
      </div>
    </div>

    <h2 id="algorithm">The Logistic Regression Algorithm</h2>
    <div class="example-box">
      <h4>Probability Mapping</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Linear Mapping:</strong> Calculate $z = w_1x_1 + w_2x_2 + \dots + w_nx_n + b$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Log-Odds Squashing:</strong> Pass $z$ through the Sigmoid function: $\hat{y} = \frac{1}{1 + e^{-z}}$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Error Measurement:</strong> Use Binary Cross-Entropy Loss to compare the predicted probability $\hat{y}$ with the true label $y$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Gradient Update:</strong> Use Gradient Descent to adjust $w$ and $b$ until the loss is minimized.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Thresholding:</strong> Convert the final probability $\hat{y}$ into a label (e.g., if $\hat{y} > 0.5$, class = 1).
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: Predicting Customer Churn</h2>
    <p>Imagine you run a <strong>Gym</strong>. You want to know if a member is about to cancel their subscription (Churn) based on their behavior.</p>
    <ul>
      <li><strong>Features:</strong> Times visited per week, Number of months as a member.</li>
      <li><strong>The Logic:</strong> If someone visits 0 times a week but has been a member for 2 years, the Sigmoid score might be **0.9** (High probability of churn).</li>
      <li><strong>The Result:</strong> You can automatically send a **"We Miss You"** discount code to everyone with a Churn Probability $> 0.7$.</li>
    </ul>

    <python-code>
from sklearn.linear_model import LogisticRegression
import numpy as np

# 1. Customer data: [Visits_Per_Week, Membership_Months]
X = np.array([[5, 12], [0, 24], [4, 6], [1, 2]])
y = np.array([0, 1, 0, 1]) # 1 = Left (Churned), 0 = Stayed

# 2. Initialize and Train
model = LogisticRegression()
model.fit(X, y)

# 3. Predict for a member who visits 1 time/week and joined 12 months ago
new_customer = np.array([[1, 12]])
probability = model.predict_proba(new_customer)[0][1]
print(f"Prob. of churn: {probability:.1%}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we use Probability in a more "Natural" way? Explore <strong><a href="#/machine-learning/supervised-learning/naive-bayes">Naive Bayes Classification</a></strong>.
    </div>
  `},r={id:"naive-bayes",title:"Naive Bayes Classification",description:"A probabilistic classifier based on Bayes' Theorem with a strong (naive) independence assumption between features.",color:"#FF9800",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Bayesian</div>
      <h1>Naive Bayes: The Probabilistic Sleuth</h1>
      <p><strong>Naive Bayes</strong> is one of the most efficient and surprisingly effective classifiers in Machine Learning. It doesn't look for geometric boundaries; it calculates the <strong>Probability</strong> of a class given a set of clues. It is "Naive" because it assumes every clue is independent of the others—a simplify-to-win strategy.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">The Foundation: Bayes' Theorem</a>
      <a href="#naive">Why "Naive"? The Independence Assumption</a>
      <a href="#formula">The Mathematical Derivation</a>
      <a href="#laplace">Smoothing: The Zero-Frequency Fix</a>
      <a href="#analogy">The "Sherlock Holmes" Analogy</a>
    </div>

    <h2 id="theory">The Foundation: Bayes' Theorem</h2>
    <p>At its heart, Naive Bayes uses the most famous formula in probability to update our belief about a class based on new evidence:</p>
    <div class="math-block">$$P(C|x) = \frac{P(x|C) \cdot P(C)}{P(x)}$$</div>
    <ul>
      <li><strong>\(P(C|x)\) (Posterior):</strong> Probability of Class $C$ given feature $x$. (Goal)</li>
      <li><strong>\(P(x|C)\) (Likelihood):</strong> Probability of feature $x$ appearing in Class $C$. (Learned from data)</li>
      <li><strong>\(P(C)\) (Prior):</strong> General probability of Class $C$. (Common sense / Statistics)</li>
      <li><strong>\(P(x)\) (Evidence):</strong> Total probability of feature $x$. (Normalizer)</li>
    </ul>

    <h2 id="naive">Why "Naive"? The Independence Assumption</h2>
    <p>In the real world, features often correlate (e.g., if you see "Rain," you're likely to see "Clouds"). Naive Bayes <strong>ignores</strong> this. It assumes every feature is <strong>Independent</strong>. This is a massive mathematical shortcut that makes the calculation incredibly fast.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Logic says we should look at how features interact. But Naive Bayes says: "I don't care about the drama between features. I'm just going to <strong>multiply</strong> all their individual probabilities and see what's left." 
        Even though this assumption is technically "Wrong," the resulting classifier is often <strong>95% as good</strong> as complex models but 1,000x faster.
      </div>
    </div>

    <h2 id="formula">The Mathematical Derivation</h2>
    <p>Because we assume independence, the Likelihood \(P(x|C)\) becomes the product of individual feature likelihoods:</p>
    <div class="math-block">$$P(C | x_1, \dots, x_n) \propto P(C) \prod_{i=1}^n P(x_i | C)$$</div>
    <p>To predict, we simply pick the Class $C$ that results in the <strong>Maximum A Posteriori (MAP)</strong> value.</p>

    <h2 id="laplace">Laplace Smoothing: The Zero-Frequency Fix</h2>
    <p><strong>The Gotcha:</strong> If you see a word in a test email that <strong>never</strong> appeared in your training set for "Spam," the probability becomes **0**. Since everything is multiplied, the whole class probability becomes 0! 
    <strong>The Fix:</strong> We add 1 to every count (Laplace Smoothing) so that nothing is ever truly impossible.</p>

    <h2 id="analogy">The "Sherlock Holmes" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine <strong>Sherlock Holmes solving a crime</strong>. 
        He has three clues: [Mud on shoes, Smell of tobacco, Left-handedness]. 
        **Naive Bayes** assumes these clues happened completely separately. 
        It asks: "Out of 100 criminals, how many have mud? How many smoke tobacco? How many are lefties?" 
        Then it <strong>multiplies</strong> those chances together to see if the suspect is "Guilty" or "Innocent." It ignores the fact that a leftie smoker might be more likely to have mud. It's **Simple, Fast, and often gets the Killer.**
      </div>
    </div>

    <h2 id="algorithm">The Naive Bayes Algorithm</h2>
    <div class="example-box">
      <h4>The Bayesian Workflow</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Prior Probability:</strong> Calculate $P(C)$, the overall percentage of each class in the training data.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Likelihood Calculation:</strong> For every feature $x_i$, calculate $P(x_i|C)$ (how often that feature appears in that class).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Smoothing:</strong> Apply Laplace smoothing ($+1$) to ensure no probability is ever zero.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Joint Probability:</strong> For a new data point, calculate the score for each class: $Score(C) = P(C) \times P(x_1|C) \times \dots \times P(x_n|C)$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Normalization:</strong> Pick the class with the <strong>Highest Score</strong>.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Sleuth's Email Filter</h2>
    <p>Imagine Sherlock Holmes is classifying an email as **Spam** or **Ham** based on three words: "Prize", "Money", and "Meeting".</p>
    <ul>
      <li><strong>The Clues:</strong> "Prize" appears in 80% of Spam but only 1% of Ham. "Meeting" appears in 50% of Ham but only 2% of Spam.</li>
      <li><strong>The Detection:</strong> An email arrives with "Prize" and "Meeting". </li>
      <li><strong>The Bayes Calculation:</strong> Even though "Meeting" sounds safe, the 80% weight of "Prize" combined with the rare overlap makes the **Spam** probability win out.</li>
    </ul>

    <python-code>
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import CountVectorizer

# 1. Simple text data
emails = ["Get your prize now", "Meeting at 10am", "Cheap money prize", "Project update meeting"]
labels = [1, 0, 1, 0] # 1=Spam, 0=Ham

# 2. Convert text to 'Word Counts'
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(emails)

# 3. Train the Sherlock Hat
model = MultinomialNB()
model.fit(X, labels)

# 4. Predict for a new email
test_email = ["Win prize money"]
test_X = vectorizer.transform(test_email)
prediction = "Spam" if model.predict(test_X)[0] == 1 else "Ham"
print(f"Classification result: {prediction}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we look at physical "Closeness" instead of probability? Explore <strong><a href="#/machine-learning/supervised-learning/knn">k-Nearest Neighbors (KNN)</a></strong>.
    </div>
  `},l={id:"knn",title:"k-Nearest Neighbors (KNN)",description:"A non-parametric, instance-based learning algorithm that classifies objects based on the closest training examples in the feature space.",color:"#9C27B0",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Instance-Based</div>
      <h1>k-Nearest Neighbors (KNN): The Social Learner</h1>
      <p><strong>k-Nearest Neighbors (KNN)</strong> is the "Copycat" of Machine Learning. It doesn't build a model or learn any weights; it just <strong>remembers</strong> the training data. When a new point arrives, it looks at its closest neighbors to see what they are. It's the ultimate implementation of the saying: "Show me who your friends are, and I'll tell you who you are."</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Distance Metric</a>
      <a href="#metrics">Common Distances: Euclidean, Manhattan, Minkowski</a>
      <a href="#k-selection">Selecting 'k': Underfitting vs. Overfitting</a>
      <a href="#curse">The "Curse of Dimensionality"</a>
      <a href="#analogy">The "Neighborhood Property Value" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Distance Metric</h2>
    <p>KNN is a **Non-Parametric** algorithm. It assumes that similar things live close together in a high-dimensional space. To classify a new point $X_{new}$, it finds the $k$ points $X_1, \dots, X_k$ that are "nearest" to it. The most common class among those neighbors wins the vote.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Voting by Proximity."</strong> 
        It's like moving to a new city and trying to figure out which political party to join. 
        You don't read the manifesto (Parameters); you just ask the <strong>3 nearest neighbors</strong> whom they voted for. If 2 voted for Party A, you join Party A. 
        **KNN** is purely local—it only cares about what's physically around it.
      </div>
    </div>

    <h2 id="metrics">Common Distances: Euclidean, Manhattan, Minkowski</h2>
    <p>How do we define "Near"? The way we measure distance completely changes the model's behavior.</p>
    <ul>
      <li><strong>Euclidean Distance (\(L_2\)):</strong> The "Straight-line" distance. \(d(p, q) = \sqrt{\sum (p_i - q_i)^2}\). Best for physical spaces.</li>
      <li><strong>Manhattan Distance (\(L_1\)):</strong> The "City-block" distance. \(d(p, q) = \sum |p_i - q_i|\). Best when the path is restricted (like city streets).</li>
      <li><strong>Minkowski Distance:</strong> The generalized form that lets you tune the behavior with a parameter $p$.</li>
    </ul>

    <h2 id="k-selection">Selecting 'k': Underfitting vs. Overfitting</h2>
    <div class="example-box">
      <h4>The Goldilocks Problem for K</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>k = 1:</strong> The model is way too sensitive. Every single outlier in your training set will "Pull" the prediction toward it. Result: <strong>High Variance (Overfitting)</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>k = Total Samples:</strong> The model will always guess the most common class in the whole dataset. Result: <strong>High Bias (Underfitting)</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Fix:</strong> Usually, use an **Odd Number** for $k$ to avoid ties. Use **Cross-Validation** to find the "Sweet Spot" (usually around 3, 5, or 7).</div>
        </div>
      </div>
    </div>

    <h2 id="curse">The "Curse of Dimensionality"</h2>
    <p><strong>The Gotcha:</strong> KNN <strong>dies</strong> in high dimensions. Why? Because in 1,000-dimensional space, everything is "Far Away" from everything else. The concept of "Nearest" becomes meaningless because the volume of the space grows exponentially faster than the number of points.</p>
    
    <h2 id="analogy">The "Neighborhood Property Value" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are an <strong>Appraiser judging a House Price</strong>. 
        You don't have a complicated formula for the whole city. Instead, you look at the <strong>5 most similar houses</strong> that sold recently in that specific neighborhood. 
        If those 5 houses (Your Neighbors) sold for an average of $500k, you'll guess $500k. 
        **KNN** is that appraiser. It's **Simple, Intuitive, and Lazy.** (It only does work when you ask it for a prediction).
      </div>
    </div>

    <h2 id="algorithm">The KNN Algorithm</h2>
    <div class="example-box">
      <h4>The Social Voter Logic</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Select K:</strong> Choose the number of neighbors to consult (e.g., $k=5$).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Distance Calculation:</strong> Calculate the distance (Euclidean or Manhattan) between the new point and all points in the training set.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Find Neighbors:</strong> Sort all training points by distance and pick the $k$ closest ones.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Vote:</strong> Check the labels of those $k$ neighbors.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Classify:</strong> Assign the label that has the <strong>majority vote</strong>.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: Movie Recommendations</h2>
    <p>Imagine <strong>Netflix</strong> trying to decide if you'll like a new movie based on your past behavior.</p>
    <ul>
      <li><strong>Data:</strong> Every movie is rated on 2 axes: [Action vs. Romance].</li>
      <li><strong>The Query:</strong> You just finished a new movie. </li>
      <li><strong>The Neighbors:</strong> KNN looks at the 3 nearest movies you've watched. If 2 of them were Action and 1 was Romance, KNN predicts: **Action**.</li>
    </ul>

    <python-code>
from sklearn.neighbors import KNeighborsClassifier
import numpy as np

# 1. Movie features: [Action_Score, Romance_Score]
X = np.array([[10, 1], [9, 2], [1, 10], [2, 9]])
y = np.array(["Action", "Action", "Romance", "Romance"])

# 2. Train the 'Social Learner'
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X, y)

# 3. New movie: high action, low romance
new_movie = np.array([[8, 3]])
result = model.predict(new_movie)
print(f"Predicted genre: {result[0]}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we want a "Wide Moat" instead of just neighbors? Explore <strong><a href="#/machine-learning/supervised-learning/svm">Support Vector Machines (SVM)</a></strong>.
    </div>
  `},h={id:"svm",title:"Support Vector Machines (SVM)",description:"A robust classification algorithm that finds the optimal hyperplane to maximize the margin between classes.",color:"#3F51B5",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Geometry</div>
      <h1>Support Vector Machines (SVM): The Wide Moat</h1>
      <p><strong>Support Vector Machines (SVM)</strong> is perhaps the most Elegant and Mathematically beautiful classification algorithm. It doesn't just want a "Decision Boundary" (a line). It wants the <strong>Widest Possible Road</strong> (The Margin) between two classes. It's the most robust way to draw a line in the sand.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">The "Max-Margin" Hyperplane</a>
      <a href="#support-vectors">The Pivot Points: Support Vectors</a>
      <a href="#slack">Soft Margin & Slack Variables</a>
      <a href="#kernel">The Kernel Trick: Folding Space</a>
      <a href="#analogy">The "Moat & Castle" Analogy</a>
    </div>

    <h2 id="theory">The "Max-Margin" Hyperplane</h2>
    <p>A standard classifier just wants a line that separates the dots. But there are <strong>infinite</strong> lines that can do that. SVM says: "I want the unique line that is <strong>as far as possible</strong> from the nearest dots of both classes." This is called the <strong>Optimal Hyperplane</strong>.</p>
    <div class="math-block">$$y = w \cdot x + b = 0$$</div>
    <p>The goal is to maximize the margin $M = \frac{2}{\|w\|}$, which is equivalent to <strong>minimizing</strong> \(\frac{1}{2} \|w\|^2\).</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Building a Super-Highway."</strong> 
        It's not just a narrow painted line. It's a <strong>multi-lane road</strong>. The highway has to be as wide as possible without hitting any "House" (a data point) on either side. SVM is the <strong>Civic Engineer</strong> who finds the perfect path for that highway.
      </div>
    </div>

    <h2 id="support-vectors">The Pivot Points: Support Vectors</h2>
    <p>The most important discovery of SVM is that <strong>only a few points matter.</strong> The points that are "Almost on the highway" are called **Support Vectors**. If you move any other point in the dataset, the highway doesn't move. These points are the <strong>scaffolding</strong> that holds up the whole model.</p>

    <h2 id="slack">Soft Margin & Slack Variables</h2>
    <p>What if your data is <strong>Messy</strong>? What if one rogue "Dog" is deep inside "Cat Territory"? If you try to build a perfect highway, you'll fail. <strong>Soft Margin SVM</strong> introduces "Slack Variables" (\(\xi\)). It allows some points to "Cheat" (be on the wrong side) for a small penalty. This makes the model much more **Stable and Generalizable.**</p>

    <h2 id="kernel">The Kernel Trick: Folding Space</h2>
    <p><strong>The Magic:</strong> What if the data isn't a line? What if it's a <strong>Circle</strong>? 
    Instead of complex math, SVM uses a <strong>Kernel</strong>. It "Projects" the data into a <strong>Higher-Dimensional Space</strong> (like 3D). In that higher space, the data becomes separable by a flat "Hyperplane." Then, we project it back down to the 2D world. From our perspective, the line looks like a <strong>Bendy Curve</strong>.</p>
    
    <h2 id="analogy">The "Wide-Moat Boundary" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine two <strong>Feuding Kingdoms (Cats vs. Dogs)</strong>. 
        Instead of just a fence, you want a <strong>Giant River (The Moat)</strong>. 
        You want the river to be <strong>as wide as possible</strong> to prevent any random person from accidentally crossing over (The Noise). 
        The only things the river cares about are the <strong>Soldiers (Support Vectors)</strong> standing right on the edge of the water. If the king of Cats moves his palace in the back, the river doesn't change. It only moves if the Soldiers on the edge move. **SVM is the Architect of the River.**
      </div>
    </div>

    <h2 id="algorithm">The SVM Algorithm</h2>
    <div class="example-box">
      <h4>The Geometric Solver</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Select Kernel:</strong> Choose how to "Fold" the space (Linear, Radial Basis Function, etc.).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Constraint Formulation:</strong> Set up the rule: all points in Class A must be on one side of the road, Class B on the other.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Margin Maximization:</strong> Use Quadratic Programming to find the weights $w$ that create the <strong>widest possible gap</strong> (road) between the classes.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Identify Support Vectors:</strong> Find the critical points that are exactly on the edge of the road. All other points are ignored.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Inference:</strong> For a new point, check which side of the "Road Center" it falls on.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Border Patrol</h2>
    <p>Imagine you are a diplomat drawing the border between two kingdoms: **The Blues** and **The Reds**.</p>
    <ul>
      <li><strong>The Strategy:</strong> You don't just want a thin line. You want a <strong>No-Man's Land</strong> (The Margin) as wide as possible to avoid accidental conflict.</li>
      <li><strong>The Result:</strong> You only care about the **Soldiers (Support Vectors)** standing at the very edge of their respective territories. If the King of the Blues builds a new palace 50 miles away from the border, the border doesn't change. <strong>SVM is that diplomat.</strong></li>
    </ul>

    <python-code>
from sklearn.svm import SVC
import numpy as np

# 1. 2D Data points (Coordinates)
X = np.array([[1, 2], [2, 3], [3, 3], [6, 5], [7, 7], [8, 6]])
y = np.array([0, 0, 0, 1, 1, 1]) # Class 0 vs Class 1

# 2. Train the 'Wide Moat' Solver
# C=1.0 is the slack penalty
model = SVC(kernel='linear', C=1.0)
model.fit(X, y)

# 3. Check the Support Vectors (The Soldiers)
print(f"Support Vectors: \n{model.support_vectors_}")

# 4. Predict
test_point = np.array([[5, 5]])
print(f"Classification result: {model.predict(test_point)[0]}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we want a model that acts like a "Flowchart" instead of a river? Explore <strong><a href="#/machine-learning/supervised-learning/decision-trees">Decision Trees</a></strong>.
    </div>
  `},d={id:"decision-trees",title:"Decision Trees",description:"A non-parametric classification and regression algorithm that builds a tree-like structure based on a series of feature-based splits.",color:"#4CAF50",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Logic</div>
      <h1>Decision Trees: The Flowchart</h1>
      <p>A <strong>Decision Tree</strong> is the most intuitive and human-like classification algorithm. It doesn't use math like lines or moats. It just asks a <strong>series of questions</strong>. If you want a model that can explain <strong>Exactly Why</strong> an email was marked as Spam, it's the 1st choice.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The "Best Split"</a>
      <a href="#entropy">The Chaos Metric: Entropy & Gini</a>
      <a href="#gain">Information Gain: Reducing Disorder</a>
      <a href="#overfitting">The Danger: Growing Too Deep</a>
      <a href="#analogy">The "20 Questions Game" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The "Best Split"</h2>
    <p>A Decision Tree works by <strong>Partitioning</strong> the feature space into buckets. At each step (Node), it picks the feature that "Splits" the data into the <strong>Purest Possible Piles</strong>. The more pure the piles, the easier it is to make a final decision.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Sorting Laundry."</strong> 
        You have a huge pile of white socks and black shirts. 
        Your 1st question: "Is it a sock or a shirt?" 
        If you get this right, you've solved 90% of the problem. That's a <strong>Deep Information Gain</strong> because your piles are now mostly "Pure."
      </div>
    </div>

    <h2 id="entropy">The Chaos Metric: Entropy & Gini</h2>
    <p>How does the machine know which question is "Best"? It measures **Order**. Two main formulas are used:</p>
    <ul>
      <li><strong>Entropy (\(H\)):</strong> A measure of randomness or disorder level. If a pile is 50/50, \(H=1\) (Max Chaos). If it's 100% pure, \(H=0\) (Perfect Order).</li>
      <div class="math-block">$$H(D) = -\sum_{i} p_i \log_2(p_i)$$</div>
      <li><strong>Gini Impurity (\(G\)):</strong> A measure of how often a random point would be wrongly labeled. It is faster to calculate than Entropy.</li>
    </ul>

    <h2 id="gain">Information Gain: Reducing Disorder</h2>
    <p><strong>Information Gain (IG)</strong> is the "Value" of a question. It is the change in Entropy before and after the split. The algorithm tries to find the feature that provides the <strong>Max IG</strong> at every node.</p>

    <h2 id="overfitting">The Danger: Growing Too Deep</h2>
    <div class="example-box">
      <h4>What happens when a tree is too tall?</h4>
      <p>If you don't stop a tree from growing, it will keep asking questions until every single data point is in its own "Leaf."</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Problem:</strong> The tree has <strong>Memorized the Noise</strong>. It has a leaf for "Customer #123 who lived in TX and wore red shoes." This doesn't help with new data!</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Fix:</strong> <strong>Pruning</strong> (cutting back branches) and <strong>Max-Depth</strong> (limiting the number of questions).</div>
        </div>
      </div>
    </div>

    <h2 id="analogy">The "20 Questions Game" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you're playing <strong>"20 Questions"</strong> with a friend who is thinking of an animal. 
        Instead of asking random questions, you ask the <strong>Smartest 1st Question</strong>: "Is it a Mammal?" 
        By asking that one question, you've <strong>Cut the World in Half</strong>. 
        The machine does the same. It's built to be the <strong>Worlds Best Questioner</strong>, reducing the universe to an answer with as few steps as possible.
      </div>
    </div>

    <h2 id="algorithm">The Decision Tree Algorithm</h2>
    <div class="example-box">
      <h4>The Flowchart Logic</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Select Feature:</strong> Calculate the Information Gain (Entropy reduction) for all features.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Branching:</strong> Split the data based on the feature that provides the <strong>Maximum Order</strong> (Purest subsets).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Recursion:</strong> Repeat the process for each "Child Node" using the remaining features.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Stopping:</strong> Stop growing if a node is pure, the 'max_depth' is reached, or the improvement is too small.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Leaf Assignment:</strong> Each final node (leaf) represents the majority class of the data that landed there.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Job Offer Flowchart</h2>
    <p>Imagine you just received a <strong>Job Offer</strong> and need to decide whether to accept it. You use a mental Decision Tree:</p>
    <ul>
      <li><strong>Node 1:</strong> Is the Salary > $100k? 
        <ul>
          <li><strong>Yes:</strong> Go to Node 2.</li>
          <li><strong>No:</strong> REJECT.</li>
        </ul>
      </li>
      <li><strong>Node 2:</strong> Is the Commute < 30 minutes?
        <ul>
          <li><strong>Yes:</strong> ACCEPT.</li>
          <li><strong>No:</strong> Go to Node 3.</li>
        </ul>
      </li>
      <li><strong>Node 3:</strong> Does it offer free coffee? ... and so on.</li>
    </ul>

    <python-code>
from sklearn.tree import DecisionTreeClassifier
import numpy as np

# 1. Features: [Salary > 100k (1/0), Commute < 30 (1/0)]
X = np.array([[1, 1], [1, 0], [0, 1], [0, 0]])
y = np.array([1, 1, 0, 0]) # 1=Accept, 0=Reject

# 2. Train the 'Flowchart Hat'
model = DecisionTreeClassifier(max_depth=2)
model.fit(X, y)

# 3. Predict for a job: 90k salary, 15 min commute [0, 1]
new_job = np.array([[0, 1]])
result = "Accept" if model.predict(new_job)[0] == 1 else "Reject"
print(f"Decision: {result}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we use a whole "Grave of Trees"? Explore <strong><a href="#/machine-learning/supervised-learning/random-forest">Random Forest Classification</a></strong>.
    </div>
  `},g={id:"random-forest",title:"Random Forest",description:"An ensemble learning method that fits multiple decision trees on various sub-samples of the dataset and uses averaging to improve predictive accuracy.",color:"#4CAF50",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Ensemble</div>
      <h1>Random Forest: The Wisdom of Crowds</h1>
      <p>A single Decision Tree is prone to <strong>Overfitting</strong>. It memorizes the noise. <strong>Random Forest</strong> fixes this by building hundreds of <strong>Different Trees</strong> from different pieces of the data. It's the ultimate implementation of the "Jury Trial"—where many diverse opinions lead to a much <strong>Better and More Robust Verdict</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#bagging">Bagging: Bootstrap Aggregating</a>
      <a href="#feature-randomness">Feature Randomness: Diverse Perspectives</a>
      <a href="#theory">Theoretical Core: Ensemble Variance</a>
      <a href="#analogy">The "Corporate Committee" Analogy</a>
    </div>

    <h2 id="bagging">Bagging: Bootstrap Aggregating</h2>
    <p>How do we make each tree "Different"? We use **Bagging**. We take a random sample of our data <strong>with replacement</strong> (Bootstrapping). Some data points are picked twice; some are never picked. Every tree gets a <strong>Unique Perspective</strong> on the world.</p>

    <h2 id="feature-randomness">Feature Randomness: Diverse Perspectives</h2>
    <div class="example-box">
      <h4>The "Random" in Random Forest</h4>
      <p>Not only does each tree see different data, it also only gets to see a <strong>Random Subset of Features</strong> at each node.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Goal:</strong> Force the trees to look at "Weak" features instead of everyone just picking the "Best" feature (like Price).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Result:</strong> We create a <strong>Diverse Forest</strong>. Some trees learn about the roof; some learn about the school district. When they <strong>Vote</strong> together, they find the **Deep Truth** of the data.</div>
        </div>
      </div>
    </div>

    <h2 id="theory">Theoretical Core: Ensemble Variance</h2>
    <p>Why does this work? Mathematically, if you have $B$ independent trees with a certain variance, the <strong>Average of those trees</strong> has a variance that is roughly **$1/B$** of the original. By "Averaging" the trees, we **kill the noise** and keep the **signal**.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Guess the Jellybeans Contest."</strong> 
        One person might guess 500 (Way too low). Another might guess 5,000 (Way too high). 
        But if you take the <strong>Average of 1,000 guesses</strong>, you'll almost always be within 5% of the true answer. **Random Forest** is that average.
      </div>
    </div>

    <h2 id="analogy">The "Jury Trial" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Courtroom Jury</strong>. 
        Instead of one judge (a Single Tree) who might have a <strong>Personal Bias</strong>, you have 12 diverse citizens from different backgrounds. 
        Each juror hears the <strong>Same Case</strong> (The Data) but processes it with their own unique "Rules" (The Decision Trees). 
        By **Deliberating and Voting (Aggregating)**, the final verdict is much more **Reasonable and Stable** than one person's opinion.
      </div>
    </div>

    <h2 id="algorithm">The Random Forest Algorithm</h2>
    <div class="example-box">
      <h4>The Collective Intelligence Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Bootstrapping:</strong> Create $B$ random sub-samples of the training data with replacement.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Tree Growth:</strong> For each sub-sample, grow a deep Decision Tree.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Feature Randomness:</strong> At each node split, only consider a random subset of all available features.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Independence:</strong> Ensure each tree is grown independently of the others.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Aggregating:</strong> For a new point, total the votes from all $B$ trees and pick the winner.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Medical Jury</h2>
    <p>Imagine a patient with a rare symptom. Instead of asking one doctor, we assemble a <strong>Medical Jury</strong> of 100 specialists.</p>
    <ul>
      <li><strong>The Randomness:</strong> Doctor 1 only sees the Blood Work. Doctor 2 only sees the X-Rays. Doctor 3 only sees the Family History.</li>
      <li><strong>The Debate:</strong> Each doctor makes a diagnosis based on their "Specific Slice" of the truth.</li>
      <li><strong>The Verdict:</strong> If 85 doctors say "Condition A" and 15 say "Condition B," the Forest confidently predicts **Condition A**. The individual errors of any one doctor are "Drowned out" by the collective wisdom.</li>
    </ul>

    <python-code>
from sklearn.ensemble import RandomForestClassifier
import numpy as np

# 1. Complex data: [Feature_A, Feature_B, Feature_C]
X = np.array([[1, 0, 1], [0, 1, 0], [1, 1, 1], [0, 0, 0]])
y = np.array([1, 0, 1, 0])

# 2. Train the 'Forest of 100 Trees'
model = RandomForestClassifier(n_estimators=100)
model.fit(X, y)

# 3. Predict for a new case
new_case = np.array([[1, 0, 0]])
result = "Positive" if model.predict(new_case)[0] == 1 else "Negative"
print(f"Forest Verdict: {result}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we build trees sequentially to learn from each other's mistakes? Explore <strong><a href="#/machine-learning/supervised-learning/gradient-boosting">Gradient Boosting</a></strong>.
    </div>
  `},c={id:"gradient-boosting",title:"Gradient Boosting",description:"An ensemble technique that builds models sequentially, each one correcting the errors of its predecessor.",color:"#4CAF50",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Sequential</div>
      <h1>Gradient Boosting: Learning from Mistakes</h1>
      <p>While <strong>Random Forest</strong> builds trees in parallel (Bagging), <strong>Gradient Boosting</strong> builds them <strong>In Sequence</strong>. Each new tree has one goal: <strong>Fix the Mistakes</strong> of the previous group. It's the most powerful way to extract the "Hard Patterns" from complex data.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Negative Gradients</a>
      <a href="#residuals">Residuals: The Target Shift</a>
      <a href="#learning-rate">Shrinkage: The Learning Rate</a>
      <a href="#analogy">The "Golf Course" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Negative Gradients</h2>
    <p>Think of Gradient Boosting as <strong>Gradient Descent in Function Space</strong>. We have an existing model \(F_{t-1}(x)\). We want a new model \(F_t(x) = F_{t-1}(x) + h_t(x)\) where \(h_t(x)\) minimizes the loss function. The "Answer" to this problem is to make \(h_t(x)\) follow the <strong>Negative Gradient</strong> of the Loss.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Layering the Model."</strong> 
        The first tree makes a <strong>Rough Guess</strong>. 
        The second tree doesn't look at the original data; it looks at the <strong>Error (The Residual)</strong> of the first tree. 
        It says: "I see Tree 1 missed these 10 samples. I'll focus <strong>only</strong> on them." 
        **Boosting** builds a "Tower of Guesses" that get more and more precise.
      </div>
    </div>

    <h2 id="residuals">Residuals: The Target Shift</h2>
    <div class="example-box">
      <h4>Scenario: Predicting Age</h4>
      <p>Target Age: 30. Tree 1 Guess: 22.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Residual:</strong> \(30 - 22 = 8\)</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Tree 2 Goal:</strong> Don't predict 30. **Predict 8**.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Result:</strong> Combine them. \(22 + 8 = 30\). We've reached the Truth by <strong>Incremental Correction</strong>.</div>
        </div>
      </div>
    </div>

    <h2 id="learning-rate">Shrinkage: The Learning Rate</h2>
    <p><strong>The Gotcha:</strong> If you add 100% of the new tree's guess every time, the model will **Overfit** instantly. 
    **Shrinkage** means we only add a tiny fraction (\(\eta = 0.1\)) of the new tree. This is the **Learning Rate**. It forces the model to take 1,000 "Small Steps" toward the truth rather than 10 "Giant Leaps" into chaos.</p>

    <h2 id="analogy">The "Golf Course" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you're playing <strong>Golf</strong>. 
        **Random Forest** is like 10 people hitting 1 ball at the same time and taking the <strong>Average</strong> of where it lands. 
        **Gradient Boosting** is like <strong>One Person playing multiple shots</strong>. 
        * **Shot 1 (Tree 1):** You hit the ball 200 yards. 
        * **Shot 2 (Tree 2):** You don't aim for the pin again from the tee; you look at the <strong>Residual Distance</strong> (remaining 50 yards) and hit a smaller shot. 
        * **Shot 3 (Tree 3):** You look at the final 5 yards and hit a <strong>Putter shot</strong>. 
        **Boosting** is that final, perfect putt.
      </div>
    </div>

    <h2 id="algorithm">The Gradient Boosting Algorithm</h2>
    <div class="example-box">
      <h4>The Iterative Correction Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Initial Guess:</strong> Start with a dumb model (e.g., the average value of all targets).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Residual Calculation:</strong> Calculate the difference between the actual value and the current prediction (the "Mistake").
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Weak Learner:</strong> Build a new Decision Tree to predict those <strong>Mistakes</strong> (Residuals).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Shrink and Update:</strong> Add a small fraction (Learning Rate) of the new tree's guess to the existing model.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Repeat:</strong> Continue until the mistakes are tiny or you reach the tree limit.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Relentless Golf Coach</h2>
    <p>Think of your model as a <strong>Golf Student</strong> and Gradient Boosting as a **Coach** who never stops correcting you.</p>
    <ul>
      <li><strong>The First Swing:</strong> You hit the ball wildly. It lands 100 yards to the left.</li>
      <li><strong>The Correction:</strong> The coach doesn't say "Swing again." He says: "Ignore the ball; just fix the 100-yard mistake."</li>
      <li><strong>The Result:</strong> Next swing is 90% fixed. You keep making smaller and smaller "Corrections" until you are hitting the pin every time. <strong>Boosting is that coach.</strong></li>
    </ul>

    <python-code>
from sklearn.ensemble import GradientBoostingClassifier
import numpy as np

# 1. Complex data: [Feature_A, Feature_B]
X = np.array([[10, 5], [1, 2], [8, 4], [2, 1]])
y = np.array([1, 0, 1, 0])

# 2. Train the 'Student' with 100 trees
model = GradientBoostingClassifier(n_estimators=100, learning_rate=0.1)
model.fit(X, y)

# 3. Predict for a new case
new_case = np.array([[9, 4]])
result = "Positive" if model.predict(new_case)[0] == 1 else "Negative"
print(f"Confidence result: {result}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> How do we take this to the Extremes? Explore <strong><a href="#/machine-learning/supervised-learning/advanced-boosting">XGBoost, LightGBM, and CatBoost</a></strong>.
    </div>
  `},p={id:"advanced-boosting",title:"XGBoost, LightGBM, and CatBoost",description:"The three giants of modern Gradient Boosting, each optimized for speed, scale, and performance in Kaggle-level competitions.",color:"#E91E63",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Advanced</div>
      <h1>The Boosting Trio: XGBoost, LightGBM, CatBoost</h1>
      <p>In the world of <strong>Tabular Data</strong> (Excel sheets, SQL tables), Deep Learning is often beaten by <strong>Gradient Boosting Engines</strong>. These are the "Formula 1" cars of Machine Learning. They take the core concept of Boosting and add advanced engineering to make it <strong>Blazing Fast</strong> and <strong>Incredibly Accurate</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#xgboost">XGBoost: The Extensible Optimizer</a>
      <a href="#lightgbm">LightGBM: The Speed Demon</a>
      <a href="#catboost">CatBoost: The Categorical King</a>
      <a href="#analogy">The "Race Car" Analogy</a>
    </div>

    <h2 id="xgboost">XGBoost: The Extensible Optimizer</h2>
    <p><strong>XGBoost</strong> became famous by winning almost every Kaggle competition. It adds <strong>L1/L2 Regularized Loss</strong> directly into the tree-building process. It doesn't just grow trees; it <strong>Prunes</strong> them using the "Systematic Gain" (Similarity Score).</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Sharpest Mind."</strong> 
        It is very clever. It calculates exactly how much "Information" it's gaining at every split and <strong>prunes</strong> branches that don't help much. It handles missing values for you and is mathematically very "Clean."
      </div>
    </div>

    <h2 id="lightgbm">LightGBM: The Speed Demon</h2>
    <p><strong>LightGBM</strong> was built for <strong>Scale</strong>. It uses "Leaf-wise" growth instead of "Level-wise." It also uses <strong>GOSS (Gradient-based One-Side Sampling)</strong> and <strong>EFB (Exclusive Feature Bundling)</strong> to reduce the amount of data it has to look at.</p>
    
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Shortcut Expert."</strong> 
        It says: "Why look at all 1,000,000 samples? I'll look only at the ones where I'm <strong>most wrong (High Gradient)</strong>." It doesn't grow trees layer-by-layer; it just grows the **Most Promising Leaf** until it's done.
      </div>
    </div>

    <h2 id="catboost">CatBoost: The Categorical King</h2>
    <p><strong>CatBoost</strong> is designed for <strong>Categorical Features</strong> (words like "Red", "Blue", "London"). Most models need "One-Hot Encoding" which creates thousands of columns. CatBoost uses <strong>Ordered Boosting</strong> to handle these values automatically and avoids "Target Leakage."</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Expert Translator."</strong> 
        It understands that "City Name" is important. It uses <strong>Symmetric Trees</strong> (the same split at each level) which makes it incredibly fast at <strong>Inference Time</strong> (running the model for customers).
      </div>
    </div>

    <h2 id="analogy">The "Race Car" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are building a <strong>Race Car</strong>. 
        * **Standard GBDT (Gradient Boost):** A fast street car. 
        * **XGBoost:** An <strong>F1 Car</strong> with advanced aerodynamics (Regularization) to keep it stable at high speeds. 
        * **LightGBM:** A <strong>Drag Racer</strong>. It is built purely for <strong>Acceleration (Speed)</strong> and can handle a 100-mile long track in seconds. 
        * **CatBoost:** The <strong>Rally Car</strong>. It can go through "Muddy Data" (Categorical values) that would make other cars spin out of control.
      </div>
    </div>

    <h2 id="algorithm">The Advanced Boosting Algorithm</h2>
    <div class="example-box">
      <h4>The High-Performance Engineering</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Categorical Encoding:</strong> Automatically handle text features (especially in CatBoost).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Hessian Calculation:</strong> Use second-order derivatives to calculate the "Similarity Score" for more precise splits.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Search Strategy:</strong> Find the best leaf to grow (LightGBM) or use histograms to speed up the split search.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Regularized Pruning:</strong> Penalize leaf weights ($L1/L2$) to ensure the trees don't become too complex.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Ensemble Summation:</strong> Combine thousands of trees into a single, high-dimensional decision engine.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The F1 Pit Crew</h2>
    <p>Think of an <strong>F1 Race</strong>. A standard model is a fast car, but an Advanced Boosting model is the **Pit Crew** behind it.</p>
    <ul>
      <li><strong>XGBoost:</strong> Is the **Engineer** adjusting every single bolt (Regularization) to ensure the car doesn't break down mid-race.</li>
      <li><strong>LightGBM:</strong> Is the **Pit Stop** that happens in 1.9 seconds (Extreme Speed). It only changes the tires that are actually worn out (Leaf-wise).</li>
      <li><strong>CatBoost:</strong> Is the **Tire Specialist** who knows exactly which compound to use for rain, gravel, or asphalt (Categorical Data).</li>
    </ul>

    <python-code>
import xgboost as xgb
import numpy as np

# 1. Complex dataset
X = np.random.rand(100, 5)
y = (X[:, 0] + X[:, 1] > 1).astype(int)

# 2. Train the 'Formula 1' car
# Set tree method to 'hist' for speed (similar to LightGBM)
model = xgb.XGBClassifier(n_estimators=100, learning_rate=0.05, tree_method='hist')
model.fit(X, y)

# 3. Predict with top-tier performance
new_test = np.random.rand(1, 5)
print(f"Prediction: {model.predict(new_test)[0]}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have mastered the "Teachers" (Supervised). What happens when the machine has to learn on its own? Explore <strong><a href="#/machine-learning/unsupervised-learning/">Unsupervised Learning Paradigms</a></strong>.
    </div>
  `},u={id:"supervised-learning",title:"Supervised Learning",description:"Learn how machines use labeled data to predict continuous values and classify objects into discrete categories.",keyConcepts:[{title:"Regression Analysis",description:"Predicting continuous numbers: Linear, Ridge, Lasso, and Polynomial."},{title:"Classification Theory",description:"Sorting into groups: Logistic, Naive Bayes, KNN, and SVM."},{title:"Tree & Ensemble",description:"Combined wisdom: Decision Trees, Random Forests, and Gradient Boosting."},{title:"State-of-the-Art",description:"The heavyweight trio: XGBoost, LightGBM, and CatBoost."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Supervised Learning: <span class="text-accent italic">The Teacher's Path</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In <strong>Supervised Learning</strong>, every piece of data comes with a "Label" (the Answer). The machine's job is to build a mapping from <strong>Features</strong> to <strong>Targets</strong>, so it can solve the same problem later for data it has never seen. It is the most powerful and widely used branch of modern AI.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This comprehensive curriculum is broken into <strong>14 high-fidelity topics</strong>, covering classic statistics like Linear Regression to "Black Box" winners like XGBoost and CatBoost.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "The teacher's business is to help the learner to see the connections that unify knowledge into a coherent whole."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Alfred North Whitehead</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Start your journey through the 14 pillars of Supervised ML.</p>
        <a 
          href="/#/machine-learning/supervised-learning/regression-intro" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Regression Intro
        </a>
      </div>

    </div>
  `,sections:[e,t,s,o,i,a,n,r,l,h,d,g,c,p]};export{u as SUPERVISED_LEARNING_DATA};
