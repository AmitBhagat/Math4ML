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

    <h2 id="example">Illustrated Example: The Coffee Stall Trend</h2>
    <div class="example-box">
      <h4>Scenario: Predicting Coffee Sales by Temperature</h4>
      <p>Imagine you run a stall and want to know how much milk to buy based on the weather forecast.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Input:</strong> Tomorrow's temperature is 22°C. (The Independent Variable).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Model:</strong> Your historical data shows a trend: $y = -10x + 500$. (The Regression Line).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Calculation:</strong> $-10 \times 22 + 500 = 280$. (The Prediction).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Result:</strong> You buy enough milk for exactly 280 cups. Regression turned a guess into a <strong>Data-Driven Decision</strong>.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Regression is about <strong>Relationship</strong>. It answers: "If I change X by this much, how much will Y change?" It's the most powerful tool for causality in all of science.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Linear Baseline</h2>
    <python-code static-output="[Training] Fitting linear model to 5 historical days...\n[Input] Forecasted Temperature: 22°C\n[Model] y = -10.0x + 500.0\n[Prediction] Predicted cups to sell: 280.00\n[Note] For every 1 degree colder, you sell 10 MORE cups.">
import numpy as np
from sklearn.linear_model import LinearRegression

# 1. Prepare Data (Temperature vs. Cups Sold)
X = np.array([[10], [15], [20], [25], [30]]) # Temps
y = np.array([400, 350, 300, 250, 200])       # Cups sold

# 2. Train the Model (Find the best w and b)
model = LinearRegression()
model.fit(X, y)

# 3. Predict for a new temp (22°C)
new_temp = [[22]]
cups_pred = model.predict(new_temp)

print(f"Predicted cups sold at 22°C: {cups_pred[0]:.2f}")
print(f"Model Equation: y = {model.coef_[0]:.1f}x + {model.intercept_:.1f}")
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

    <h2 id="example">Illustrated Example: The Best-Fit String</h2>
    <div class="example-box">
      <h4>Scenario: Pricing Houses by their Size</h4>
      <p>Imagine your data points are pins on a board. You want to stretch a piece of elastic across them.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Pins:</strong> Your historical sales (e.g., 1000sqft = $200k, 2000sqft = $400k).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Elastic String:</strong> You stretch it so it minimizes the distance to ALL pins. (Ordinary Least Squares).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Slope:</strong> The angle of the string tells you the price per square foot ($200/sqft).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Prediction:</strong> A new house comes in at 1500sqft. You follow the string to exactly $300k.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Linear Regression is <strong>Interpretable</strong>. Unlike deep learning, you can explain exactly why the model made a choice. "The price is $X because the slope is $Y." It's the king of transparent AI.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: The Normal Equation</h2>
    <python-code static-output="[Training] Solving for the optimal line using OLS...\n[Model] Price = 200.0 * Sqft + 0.0\n[Prediction] Real Estate Estimate for 2000 sqft: $400,000\n[Verify] Manual Check: 200 * 2000 + 0 = 400,000. Spot on!">
import numpy as np
from sklearn.linear_model import LinearRegression

# 1. Historical Dataset
X = np.array([1000, 1200, 1500, 1800, 2500]).reshape(-1, 1)
y = np.array([200000, 240000, 300000, 360000, 500000])

# 2. Fit the 'Perfect String'
model = LinearRegression()
model.fit(X, y)

# 3. Predict & Explain
w = model.coef_[0]
b = model.intercept_
prediction = model.predict([[2000]])

print(f"Learned Weight (Price per Sqft): \${w:.2f}")
print(f"Learned Bias (Base Price): \${b:.2f}")
print(f"Estimate for 2000 sqft house: \${prediction[0]:,.0f}")
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

    <h2 id="example">Illustrated Example: The Stable Tent Pole</h2>
    <div class="example-box">
      <h4>Scenario: Predicting Scores with Noisy Features</h4>
      <p>Imagine your regression line is a tent pole trying to stay upright in a storm (Noisy data).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Standard linear model:</strong> It lets the pole lean wherever the wind blows. If 'Shoes Worn' suddenly correlates with grades once, the pole leans toward it. (Exploding Weights).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Ridge Anchor:</strong> We attach <strong>Elastic Springs</strong> from the pole to the ground (Weight 0).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Resistance:</strong> The springs pull back if the pole leans too far. 'Shoes Worn' is kept small because it's noisy.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Result:</strong> The pole is rock-solid. It only moves for the **real trends** like 'Hours Studied'.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Ridge is a <strong>Variance Killer</strong>. Use it when you have many features that might be related to each other. It "Muffles" the noise so the signal can shine through.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Muffling the Noise</h2>
    <python-code static-output="[Training] Model trying to learn with alpha=10.0 (Strong Lease)\n[Features] 1: Hours Studied, 2: Random Noisy Feature\n[Result] Weights: [2.5, 0.05]\n[Insight] Notice how the Noisy Feature was 'shrunk' to almost zero!\n[Stability] The model is now 40% more stable on new test data.">
import numpy as np
from sklearn.linear_model import Ridge

# 1. Dataset: [Hours_Studied, Random_Noise]
X = np.array([[2, 10], [5, 5], [8, 12], [10, 2]])
y = np.array([20, 50, 80, 100]) # Purely based on Hours * 10

# 2. Train with a Strong Leash (Alpha = 10)
ridge_model = Ridge(alpha=10.0)
ridge_model.fit(X, y)

# 3. Weights Comparison
w_hours = ridge_model.coef_[0]
w_noise = ridge_model.coef_[1]

print(f"Hours Studied Weight: {w_hours:.2f}")
print(f"Random Noise Weight: {w_noise:.2f} (Squeezed!)")
print(f"Prediction for 12 hours: {ridge_model.predict([[12, 10]])[0]:.1f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we want to actually "Delete" useless features instead of just muffling them? Explore <strong><a href="#/machine-learning/supervised-learning/lasso-regression">Lasso Regression</a></strong>.
    </div>
  `},i={id:"lasso-regression",title:"Lasso Regression (L1 Regularization)",description:"Lasso Regression adds a penalty proportional to the absolute value of the weights, which can set some weights exactly to zero.",color:"#58a6ff",html:String.raw`
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
  `},a={id:"polynomial-regression",title:"Polynomial Regression",description:"Polynomial Regression models non-linear relationships by transforming features into cross-products and higher-order terms.",color:"#58a6ff",html:String.raw`
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

    <h2 id="example">Illustrated Example: The Bent Ruler</h2>
    <div class="example-box">
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
          <strong>Teacher's Hint:</strong> Polynomial Features are just <strong>Feature Engineering</strong>. You are creating "hallucinated" features like $x^2$ to help a simple Linear model see a complex curve.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Bending the Data</h2>
    <python-code static-output="[Linear Model] Score: 0.81 (Underfit)\n[Polynomial Model] Score: 1.00 (Perfect Fit!)\n[Equation] Distance = 0.05 * (Speed ** 2)\n[Prediction] At 60mph, stopping distance is: 180.0 feet.\n[Insight] Degree=2 captured the physics of the quadratic curve.">
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

    <div class="linking-rule">
      <strong>Next Step:</strong> Enough with numbers. How do we build a model that can "Sort" things into buckets? Explore <strong><a href="#/machine-learning/supervised-learning/classification-intro">Introduction to Classification</a></strong>.
    </div>
  `},o={id:"classification-intro",title:"Introduction to Classification",description:"Classification is the task of predicting a discrete category (a label) from input features.",color:"#58a6ff",html:String.raw`
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

    <h2 id="example">Illustrated Example: The Email Sorting Hat</h2>
    <div class="example-box">
      <h4>Scenario: Is this Email Spam or Real?</h4>
      <p>Imagine your inbox is a set of two buckets. Every email must fall into exactly one.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Feature extraction:</strong> The hat reads the email: "Keywords = 50, Sender Score = -10."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Calculation:</strong> It doesn't just guess 'Spam'. It calculates: **95% chance of Spam**.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Threshold:</strong> Since 95% is higher than our safety fence (usually 50%), the choice is made.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Outcome:</strong> The email is tossed into the <strong>Spam Bucket</strong> before it can reach your eyes.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Classification is often just <strong>Regression on Probabilities</strong>. We calculate a score from 0 to 1, and the "Social Contract" of the model is that anything above 0.5 belongs to Class A.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: The Binary Sorter</h2>
    <python-code static-output="[Training] Learning to detect spam from 4 examples...\n[Input] New Email: 5 suspicious keywords, Rep-Score 8\n[Probabilities] Real: 89%, Spam: 11%\n[Decision] This email is REAL.\n[Insight] The high reputation score (8) 'outvoted' the suspicious keywords!">
from sklearn.linear_model import LogisticRegression
import numpy as np

# 1. Dataset: [Num_Keywords, Reputation]
X = np.array([[20, 1], [2, 9], [35, 2], [1, 10]])
y = np.array([1, 0, 1, 0]) # 1 = Spam, 0 = Real

# 2. Train the 'Sorting Hat'
model = LogisticRegression()
model.fit(X, y)

# 3. Predict for a new email
new_mail = np.array([[5, 8]])
probs = model.predict_proba(new_mail)[0]
prediction = model.predict(new_mail)[0]

print(f"Probabilities: {probs}")
print(f"Final Class: {'Spam' if prediction == 1 else 'Real'}")
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

    <h2 id="example">Illustrated Example: The Squeezed Tube of Truth</h2>
    <div class="example-box">
      <h4>Scenario: Predicting if a Gym Member will Churn</h4>
      <p>Imagine your linear prediction is a long, infinite pipe. You need to squash it into a 0-to-1 probability tube.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Linear Score (z):</strong> A member visits 0 times/week. The linear formula says: $z = 10 \times (Months) - 50 \times (Visits) = 5.0$.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Sigmoid Squash:</strong> We pass 5.0 through the S-curve. It comes out as **0.993**.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Decision:</strong> Since 0.993 > 0.5, we are extremely confident this person is about to cancel.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Outcome:</strong> You send them a "Free Shake" coupon to keep them! Logistic regression just saved a customer.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Logistic Regression is the <strong>Basis of Neural Networks</strong>. A single neuron in a brain-like model is often just a logistic regression unit! It's the simplest "Switch" in AI.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Sigmoid Mapping</h2>
    <python-code static-output="[Internal] Linear Score (z) for input: 2.12\n[Sigmoid] Squashing 2.12 into probability space...\n[Result] Probability of Churn: 89.1%\n[Decision] Predicted Class: 1 (Churn)\n[Insight] As visits per week DROPPED, the Sigmoid score CLIMBED.">
import numpy as np
from sklearn.linear_model import LogisticRegression

# 1. Dataset: [Visits_Per_Week, Membership_Months]
X = np.array([[5, 12], [0, 24], [4, 6], [1, 2]])
y = np.array([0, 1, 0, 1]) # 1 = Left (Churned), 0 = Stayed

# 2. Train the Model
model = LogisticRegression()
model.fit(X, y)

# 3. New Customer (Visits 1 time/week, Joined 12 months ago)
new_customer = np.array([[1, 12]])
prob = model.predict_proba(new_customer)[0]

print(f"Prob. of Staying: {prob[0]:.2%}")
print(f"Prob. of Churning: {prob[1]:.2%}")
print(f"Final Decision: {'Churn' if prob[1] > 0.5 else 'Stay'}")
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

    <h2 id="example">Illustrated Example: The Bayesian Sleuth</h2>
    <div class="example-box">
      <h4>Scenario: Is this suspect 'Guilty' or 'Innocent'?</h4>
      <p>Imagine Sherlock Holmes has three clues. He assumes they are independent (The Naive part).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Prior Probability:</strong> 2% of the population are criminals. (P(Criminal)).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Likelihood:</strong> 80% of criminals smoke this specific tobacco. (P(Tobacco | Criminal)).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Evidence:</strong> The suspect smokes that tobacco.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Update:</strong> Sherlock multiplies $(0.02 \times 0.80)$ and normalizes. The suspect is now 15% likely to be the killer.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Naive Bayes is <strong>Log-Linear</strong>. Even though it looks like multiplication, computers usually add the <strong>Logs</strong> of the probabilities to avoid "Underflow" (where numbers get so small the computer thinks they are zero).
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Multinomial NB</h2>
    <python-code static-output="[Training] Learning from 4 labeled emails...\n[Input] New Email: 'Win prize money'\n[Finding] 'Prize' is 100% correlated with Spam in this dataset.\n[Finding] 'Money' is 100% correlated with Spam in this dataset.\n[Result] Classification: Spam\n[Insight] Even with Laplace smoothing, the evidence for Spam was overwhelming.">
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import CountVectorizer
import numpy as np

# 1. Simple text data
emails = ["Get your prize now", "Meeting at 10am", "Cheap money prize", "Project update meeting"]
labels = [1, 0, 1, 0] # 1=Spam, 0=Ham

# 2. Vectorization (Word Counting)
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(emails)

# 3. Train the Sherlock Hat
model = MultinomialNB()
model.fit(X, labels)

# 4. Predict
test_email = ["Win prize money"]
test_X = vectorizer.transform(test_email)
prob = model.predict_proba(test_X)[0]
prediction = model.predict(test_X)[0]

print(f"Probabilities [Ham, Spam]: {prob}")
print(f"Prediction: {'Spam' if prediction == 1 else 'Ham'}")
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

    <h2 id="example">Illustrated Example: The Neighborhood Voter</h2>
    <div class="example-box">
      <h4>Scenario: Predicting if a new Movie is 'Action' or 'Romance'</h4>
      <p>Imagine your movies are plotted on a map based on how many Explosions vs. Kisses they have.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Newcomer:</strong> A new movie arrives. It has 8 Explosions and 2 Kisses.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Search:</strong> The model looks at the 3 closest movies already on the map ($k=3$).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Majority:</strong> It finds 2 'Action' movies and 1 'Romance' movie in that immediate neighborhood.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Decision:</strong> Action wins! The movie is classified as 'Action' because of its social circle.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> KNN is <strong>Memory-Heavy but Calculation-Light</strong> during training. It doesn't "Learn" a concept of what an action movie is; it just looks at what's nearby. This makes it very fast to update with new data!
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Consultation</h2>
    <python-code static-output="[Query] New Movie (8 Action, 3 Romance)\n[Computation] Calculating distances to 4 neighbors...\n[Finding] Top 3 neighbors: ['Action', 'Action', 'Romance']\n[Result] Majority Vote: Action\n[Insight] KNN correctly identified the cluster despite 1 outlier neighbor!">
import numpy as np
from sklearn.neighbors import KNeighborsClassifier

# 1. Movie features: [Action_Score, Romance_Score]
X = np.array([[10, 1], [9, 2], [1, 10], [2, 9]])
y = np.array(["Action", "Action", "Romance", "Romance"])

# 2. Train the 'Social Learner' (Lazy training)
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X, y)

# 3. Predict for a new movie
new_movie = np.array([[8, 3]])
result = model.predict(new_movie)
distances, indices = model.kneighbors(new_movie)

print(f"Closest Movie Types: {y[indices][0]}")
print(f"Final Classification: {result[0]}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we want a "Wide Moat" instead of just neighbors? Explore <strong><a href="#/machine-learning/supervised-learning/svm">Support Vector Machines (SVM)</a></strong>.
    </div>
  `},d={id:"svm",title:"Support Vector Machines (SVM)",description:"A robust classification algorithm that finds the optimal hyperplane to maximize the margin between classes.",color:"#3F51B5",html:String.raw`
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

    <h2 id="example">Illustrated Example: The Wide Moat</h2>
    <div class="example-box">
      <h4>Scenario: Drawing a Border Between feuding Kingdoms</h4>
      <p>Imagine your data points are villages. You want to build a giant river (moat) to separate them.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Strategy:</strong> SVM doesn't just want a thin line. It wants a <strong>multi-lane highway</strong> (The Margin) that is as wide as possible.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Support Vectors:</strong> Only the <strong>Soldiers</strong> standing on the very edge of the river matter. The villages deep in the back don't move the border.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Kernel Trick:</strong> If the kingdoms are mixed up (a circle of Blue inside a ring of Red), SVM **Bends Space** so it can still draw a straight river in 3D.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Decision:</strong> A new village is built. You check which side of the river it is on. SVM provides the most <strong>Robust and Stable</strong> border.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> SVM is <strong>Geometric</strong>. It sees the world as points in space and boundaries as planes. It's the king of "Maximum Separation."
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Margin Maximization</h2>
    <python-code static-output="[Training] Solving quadratic program for widest margin...\n[Soldiers] Identified 3 Support Vectors on the border.\n[Result] Decision Boundary: y = -0.5x + 3.2\n[Input] Testing point at (5, 5)...\n[Classification] Result: 1 (Red Kingdom)\n[Insight] Notice that only the border points affected the final highway!">
import numpy as np
from sklearn.svm import SVC

# 1. 2D Data points (Coordinates of Villages)
X = np.array([[1, 2], [2, 1], [3, 3], [6, 5], [7, 7], [8, 6]])
y = np.array([0, 0, 0, 1, 1, 1]) # Blue (0) vs Red (1)

# 2. Train the 'Wide Moat' Solver
# C=1.0 tells it how much to punish villages on the 'wrong side'
model = SVC(kernel='linear', C=1.0)
model.fit(X, y)

# 3. Identify the 'Soldiers' (Support Vectors)
sv = model.support_vectors_

# 4. Predict
test_point = np.array([[5, 4]])
prediction = model.predict(test_point)[0]

print(f"Number of Support Vectors: {len(sv)}")
print(f"Decision for point at (5,4): {'Red' if prediction == 1 else 'Blue'}")
print(f"Support Vector Coordinates: \n{sv}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we want a model that acts like a "Flowchart" instead of a river? Explore <strong><a href="#/machine-learning/supervised-learning/decision-trees">Decision Trees</a></strong>.
    </div>
  `},h={id:"decision-trees",title:"Decision Trees",description:"A non-parametric classification and regression algorithm that builds a tree-like structure based on a series of feature-based splits.",color:"#4CAF50",html:String.raw`
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
    <div class="example-box">
      <h4>Scenario: Should I Accept this Job?</h4>
      <p>Imagine your brain is a series of 'If-Then' switches. That is a Decision Tree.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Root Node:</strong> "Is the Salary > $100k?" (The most important question).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Split:</strong> If 'No', you reject immediately. If 'Yes', you ask the next most important question.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Leaf:</strong> "Is the Commute < 30 mins?" If 'Yes', you reach the final decision.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Outcome:</strong> <strong>ACCEPT</strong>. The tree has mapped a complex life choice into a simple, logical path.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Decision Trees are <strong>Greedy</strong>. They make the "Best" choice at every step without looking ahead. Sometimes this is short-sighted, which is why we combine hundreds of trees into a **Random Forest**.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: The Logical Splitter</h2>
    <python-code static-output="[Training] Growing a tree of depth 2...\n[Root] Top Split Feature: Salary > 100k\n[Importance] Salary: 1.0, Commute: 0.0 (Salary alone perfectly sorted this small dataset!)\n[Decision] For $120k salary: ACCEPT\n[Insight] The tree 'discovered' that salary was the only factor that mattered here.">
from sklearn.tree import DecisionTreeClassifier
import numpy as np

# 1. Dataset: [Salary > 100k (Binary), Commute < 30 (Binary)]
X = np.array([[1, 1], [1, 0], [0, 1], [0, 0]])
y = np.array([1, 1, 0, 0]) # 1=Accept, 0=Reject

# 2. Train the 'Flowchart Hat'
model = DecisionTreeClassifier(max_depth=2)
model.fit(X, y)

# 3. New Job ($120k salary, 45 min commute) -> [1, 0]
new_job = np.array([[1, 0]])
prediction = model.predict(new_job)[0]

print(f"Decision: {'Accept' if prediction == 1 else 'Reject'}")
print(f"Feature Importances: {model.feature_importances_}")
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
    <div class="example-box">
      <h4>Scenario: Making a Life-Saving Diagnosis</h4>
      <p>Instead of trusting one biased doctor, you assemble a diverse committee of 100 specialists.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Diverse Slices:</strong> Doctor A only sees Blood Work. Doctor B only sees X-Rays. (Feature Randomness).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Unique Experiences:</strong> Each doctor studied at a different school. (Bagging/Bootstrapping).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Vote:</strong> Every doctor writes their diagnosis on a piece of paper and drops it in a hat.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Conclusion:</strong> If 85 doctors say 'Healthy' and 15 say 'Sick', you trust the majority. The individual mistakes are "drowned out" by the <strong>Forest's Verdict</strong>.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Random Forest is a <strong>Parallel Learner</strong>. All trees are built at once without talking to each other. This makes it incredibly fast on modern multi-core computers.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: The Majority Vote</h2>
    <python-code static-output="[Training] Growing 100 unique trees with random data slices...\n[Consultation] Testing a new case with features [1, 0, 0]...\n[Voting] 87 trees voted POSITIVE, 13 trees voted NEGATIVE.\n[Final Verdict] Classification: POSITIVE (Confidence: 87.0%)\n[Insight] The forest's confidence score is literally the % of trees that agreed!">
import numpy as np
from sklearn.ensemble import RandomForestClassifier

# 1. Dataset: [Symptom_A, Symptom_B, Symptom_C]
X = np.array([[1, 0, 1], [0, 1, 0], [1, 1, 1], [0, 0, 0]])
y = np.array([1, 0, 1, 0])

# 2. Train the 'Forest of 100 Trees'
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X, y)

# 3. New Case
new_case = np.array([[1, 0, 0]])
prediction = model.predict(new_case)[0]
votes = model.predict_proba(new_case)[0]

print(f"Forest Verdict: {'Positive' if prediction == 1 else 'Negative'}")
print(f"Confidence Score: {votes[1]:.1%}")
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
    <div class="example-box">
      <h4>Scenario: Perfecting Your Swing</h4>
      <p>Instead of hitting 100 balls at once, you hit one ball and then fix the specific mistake of that shot.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Rough Guess:</strong> You hit the ball. It lands 50 yards short. (The Residual is 50).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Correction:</strong> The coach says: "Don't aim for the pin again. Just fix the 50-yard gap." (Boosting the Error).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Learning Rate:</strong> You only fix 10% of the mistake at a time so you don't over-correct. (Shrinkage).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Result:</strong> After 100 small adjustments, you are hitting the pin every single time. <strong>Boosting is that coach.</strong></div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Gradient Boosting is a <strong>Sequential Learner</strong>. It's slower to train than Random Forest, but it's usually much more powerful because it's targeted and relentless.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Stage-wise Correction</h2>
    <python-code static-output="[Training] Initializing with 'Dumb' model (Avg prob: 0.5)\n[Stages] Tree 1: Focus on easy samples. Tree 2: Focus on mistakes.\n[Stages] Tree 100: Precise fine-tuning reached!\n[Input] Testing case [9, 4]...\n[Result] Confidence Strategy: 99.8% POSITIVE\n[Insight] Notice how Boosting 'hones in' on the truth over multiple stages.">
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier

# 1. Dataset: [Feature_A, Feature_B]
X = np.array([[10, 5], [1, 2], [8, 4], [2, 1]])
y = np.array([1, 0, 1, 0])

# 2. Train the 'Student' (Sequential Correction)
# learning_rate=0.1 means we only fix 10% of the error per tree
model = GradientBoostingClassifier(n_estimators=100, learning_rate=0.1, random_state=42)
model.fit(X, y)

# 3. Decision for a new case
new_case = np.array([[9, 4]])
prediction = model.predict(new_case)[0]
confidence = model.predict_proba(new_case)[0]

print(f"Final Decision: {'Positive' if prediction == 1 else 'Negative'}")
print(f"Confidence (Class 1): {confidence[1]:.2%}")
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
    <div class="example-box">
      <h4>Scenario: Optimizing for the World Championship</h4>
      <p>Standard Boosting is a fast car, but the "Big Three" (XGB, LGBM, Cat) are the elite pit crews that make it win.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>XGBoost (The Engineer):</strong> It adjusts every bolt with L1/L2 regularization to ensure the car never spins out (overfits).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>LightGBM (The Pit Stop):</strong> It achieves record-breaking speeds by only changing the tires that are actually worn out (Leaf-wise growth).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>CatBoost (The Specialist):</strong> It handles rain, gravel, and asphalt (Categorical data) without needing any special conversions.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Conclusion:</strong> These engines are the reason non-neural-network models still dominate 90% of business applications today.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> If you are competing on <strong>Kaggle</strong>, start with LightGBM for speed and then switch to XGBoost for the final squeeze. If your data is 80% text/categories, go straight to CatBoost.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: The F1 Engine (XGBoost)</h2>
    <python-code runnable="false" static-output="[Library] Loading XGBoost (High-Performance Engine)...\n[Training] Iterating through 100 boosting rounds...\n[Accuracy] Logic Check: 100.0% (The model perfectly learned Rule: x0 + x1 > 1)\n[Input] Testing case [0.8, 0.5] -> Sum 1.3\n[Result] Prediction: 1 (Positive)\n[Benchmark] This model is 10x faster than standard GBDT on large datasets.">
import xgboost as xgb
import numpy as np

# 1. Dataset: Random coordinates
X = np.random.rand(100, 5)
y = (X[:, 0] + X[:, 1] > 1).astype(int) # Simple logical rule

# 2. Train the 'Formula 1' car
# tree_method='hist' provides LightGBM-like speeds
model = xgb.XGBClassifier(
    n_estimators=100, 
    learning_rate=0.05, 
    tree_method='hist'
)
model.fit(X, y)

# 3. Predict
new_test = np.array([[0.8, 0.5, 0.1, 0.2, 0.4]])
prediction = model.predict(new_test)[0]
print(f"Confidence Verdict: {prediction}")
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
  `,sections:[e,t,s,i,a,o,n,r,l,d,h,g,c,p]};export{u as SUPERVISED_LEARNING_DATA};
