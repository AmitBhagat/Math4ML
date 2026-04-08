const t={id:"gradient-descent",title:"Gradient Descent",description:"Gradient Descent is the primary optimization algorithm used to minimize a function by iteratively moving in the direction of steepest descent.",color:"#F44336",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🏹 Optimization · Descent</div>
      <h1>Gradient Descent: The Path Downward</h1>
      <p><strong>Gradient Descent</strong> is the fundamental "Algorithm of Learning." It is how a machine moves from a random guess to a perfectly tuned model. By calculating the <strong>Gradient</strong> (the direction of steepest ascent) and moving the opposite way, we "slide" down the loss surface toward the minimum error.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>The Gradient</strong>: Understanding \(\nabla f\).</li>
        <li><strong>Loss Functions</strong>: Defining what you want to minimize.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In Machine Learning, we have a <strong>Loss Function</strong> that measures how wrong our model is. We want to find the parameter weights \(w\) that make this error as small as possible. Since we can't solve for the perfect \(w\) in one step for complex models (like Neural Networks), we take many tiny steps downhill. Each step is guided by the <strong>Gradient</strong>, which tells us exactly which way is "Down."</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Imagine you are a <strong>Drunkard on a Foggy Mountain</strong>. 
        You want to reach the pub at the bottom, but you can only see the ground directly beneath your feet. 
        You feel the slope with your boots. If the ground slopes up to the North, you take a step South. 
        Repeat this 1,000 times, and eventually, you'll be having a drink at the <strong>Local Minimum</strong>.
      </div>
    </div>

    <visualizer topic="GradientDescent" />

    <h2 id="derivation">Mathematical Definition</h2>
    <p>To update the weights \(\theta\), we use the update rule:</p>
    <div class="math-block">$$\theta_{new} = \theta_{old} - \eta \nabla J(\theta)$$</div>
    <ul>
      <li><strong>\(\nabla J(\theta)\)</strong>: The Gradient (the vector of partial derivatives).</li>
      <li><strong>\(\eta\) (Eta)</strong>: The <strong>Learning Rate</strong>. This determines how big of a "step" we take.</li>
    </ul>

    <h2 id="example-parabola" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The 1D Parabola</h2>
    
      <h4>Problem: Minimizing \(f(x) = x^2\)</h4>
      <p>Start at \(x = 4\). Use learning rate \(\eta = 0.1\). Find the next two positions.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Gradient:</strong> \(f'(x) = 2x\). At \(x=4\), the gradient is \(2(4) = 8\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Update 1:</strong> \(x_1 = 4 - 0.1(8) = 3.2\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Update 2:</strong> New gradient is \(2(3.2) = 6.4\). \(x_2 = 3.2 - 0.1(6.4) = 2.56\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Notice how the steps (\(0.8, 0.64, \dots\)) get smaller as we get closer to the bottom (\(x=0\)). The gradient naturally slows down as the slope flattens.
        </div>
      </div>
    

    <h2 id="example-surface" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Sliding Down a 2D Bowl</h2>
    
      <h4>Problem: Optimizing Two Weights simultaneously</h4>
      <p>Loss surface: \(J(w_1, w_2) = w_1^2 + 5w_2^2\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Gradient:</strong> \(\nabla J = \begin{bmatrix} 2w_1 \\ 10w_2 \end{bmatrix}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Observation:</strong> The gradient in the \(w_2\) direction is much steeper (10 vs 2).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> In 2D, the model will "zig-zag" more aggressively in the direction of the steeper slope. This is why <strong>Feature Scaling</strong> is so important—it makes the bowl "round" instead of an "elongated oval," helping Gradient Descent move straight to the center.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

# f(x) = x^2, f'(x) = 2x
def gradient(x):
    return 2 * x

x = 4.0
learning_rate = 0.1

for i in range(10):
    grad = gradient(x)
    x = x - learning_rate * grad
    print(f"Iteration {i+1}: x = {x:.4f}, grad = {grad:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Linear Regression</strong>: Fitting the "Best Fit Line" by minimizing the sum of rounded errors.</li>
      <li><strong>Neural Network Training</strong>: Backpropagation is just a clever way to calculate the massive gradient for millions of weights so we can run Gradient Descent on them.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we have 1 billion data points? We can't wait to calculate the gradient for all of them! Explore <strong><a href="#/mathematics/optimization/sgd">Stochastic Gradient Descent (SGD)</a></strong>.
    </div>
  `},e={id:"sgd",title:"Stochastic Gradient Descent (SGD)",description:"SGD is an iterative method for optimizing an objective function with suitable smoothness properties, using only one (or a few) samples at a time.",color:"#F44336",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🏹 Optimization · SGD</div>
      <h1>Stochastic Gradient Descent: The Noisy Hustle</h1>
      <p><strong>Stochastic Gradient Descent (SGD)</strong> is the engine of Deep Learning. While Batch Gradient Descent waits to see all 1 million data points before taking a single step, SGD takes a step after seeing just one (or a few). It is <strong>Fast</strong>, <strong>Noisy</strong>, and surprisingly effective at avoiding local traps.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Gradient Descent</strong>: Understanding \(\nabla f\).</li>
        <li><strong>Stochasticity</strong>: The element of random chance.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Calculating the gradient of 1 billion samples takes a lot of time. <strong>SGD</strong> replaces wait with "Noise." Instead of the perfect "True Gradient," we use a "Noisy Estimate" from a single random data point. The estimate is wrong in the short term, but on average, it points exactly the same way as the true gradient. It’s like traveling by <strong>Drunkard's Walk</strong>—you stumble, but you still end up at the bottom of the hill.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of SGD as <strong>"Finding the Restaurant by Asking One Person."</strong> 
        Batch Gradient Descent is like asking everyone in the city and taking the average direction. It's accurate, but it takes forever. 
        SGD is like asking the first person you see and walking that way. They might be wrong, but you're moving <strong>Right Now</strong>. If you ask someone new every 10 meters, eventually you'll reach the restaurant.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <p>The update rule for a single data point \(x_i\):</p>
    <div class="math-block">$$\theta_{new} = \theta_{old} - \eta \nabla J(\theta; x_i, y_i)$$</div>
    <ul>
      <li><strong>\(\nabla J(\theta; x_i, y_i)\)</strong>: The gradient calculated on only ONE sample.</li>
      <li><strong>Noise Benefit</strong>: Because SGD is noisy, it can "jump out" of small, shallow local minima that would trap the smooth Batch Gradient Descent.</li>
    </ul>

    <h2 id="example-noise" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Noisy Gradient</h2>
    
      <h4>Problem: Comparing Step Quality</h4>
      <p>Population: [100, 150, 200]. Loss: Aiming for \(\mu\). Correct gradient for \(\mu=100\) is -100.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Batch GD:</strong> \(\nabla = -100\) (Correct direction).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>SGD (Sample 1):</strong> \(\nabla = 0\) (No movement).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>SGD (Sample 2):</strong> \(\nabla = -50\) (Partial movement).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>SGD (Sample 3):</strong> \(\nabla = -100\) (Correct movement).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Over time, the sum of SGD steps averages out to the Batch GD step. We trade <strong>Accuracy per Step</strong> for <strong>Speed of Iteration</strong>.
        </div>
      </div>
    

    <h2 id="example-mini" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Mini-batch Training</h2>
    
      <h4>Problem: The Best of Both Worlds</h4>
      <p>Instead of 1 sample (Pure SGD) or all samples (Batch GD), we use a <strong>Mini-batch</strong> of 32 samples.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Logic:</strong> We average the gradients of 32 points. This dramatically reduces the noise compared to pure SGD.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Speed:</strong> GPU hardware is optimized for processing 32 or 64 points simultaneously.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Mini-batch SGD is the "Standard" for all Neural Networks (Adam, RMSProp, etc.). It gives us the <strong>Stability</strong> of Batch GD and the <strong>Computational Speed</strong> of SGD.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

# Simple regression: y = 2x
data = np.random.uniform(0, 10, (1000, 1))
labels = 2 * data + np.random.normal(0, 1, (1000, 1))

w = 0.0 # random start
lr = 0.01

# SGD loop
for epoch in range(10):
    # Shuffle data
    indices = np.random.permutation(1000)
    for i in indices:
        x_i, y_i = data[i], labels[i]
        # Loss = (wx - y)^2, dL/dw = 2(wx-y)x
        grad = 2 * (w * x_i - y_i) * x_i
        w -= lr * grad

print(f"Final Weights: {w[0]:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Online Learning</strong>: Updating models in real-time as individual users interact with a website.</li>
      <li><strong>Large-scale Deep Learning</strong>: Training models like GPT on trillions of tokens—literally impossible without SGD.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Does the descent always land on the global minimum? How can we be sure? Explore <strong><a href="#/mathematics/optimization/convex-optimization">Convex Optimization</a></strong>.
    </div>
  `},i={id:"convex-optimization",title:"Convex Optimization",description:"Convex Optimization studies the problem of minimizing convex functions over convex sets, guaranteeing that any local minimum is global.",color:"#F44336",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🏹 Optimization · Convexity</div>
      <h1>Convex Optimization: The Global Guarantee</h1>
      <p><strong>Convex Optimization</strong> is the statistical "Insurance Policy." in most Machine Learning problems, finding the absolute best solution is impossible. <strong>Convexity</strong> is the mathematical property that guarantees any local minimum you find is also the <strong>Global Minimum</strong>. It’s why Linear Regression and SVMs are so reliable.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Gradient Descent</strong>: Understanding minimization.</li>
        <li><strong>Jensen's Inequality</strong>: The mathematical foundation of convexity.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A function is <strong>Convex</strong> if you can draw a straight line between any two points on its curve and that line is always above the curve. If a loss surface is convex, it has no "Hidden Valleys" (Local Minima) that can trap your optimizer. No matter where you start, Gradient Descent will eventually roll down to the same single, perfect solution.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of the difference as <strong>"Finding the Restaurant in a Bowl vs. a Maze."</strong> 
        A <strong>Convex Space</strong> is like a perfectly smooth cereal bowl. If you drop a marble anywhere, it 100% will end up in the center. 
        A <strong>Non-Convex Space</strong> is a maze with dozens of "Fake" restaurants (Local Minima). You might get stuck in one and never know that a better one exists just over the next wall.
      </div>
    </div>

    <h2 id="definition">Convex Sets vs. Convex Functions</h2>
    <ul>
      <li><strong>Convex Set:</strong> If you pick any two points in the set, the entire line segment between them is also in the set. (A circle is convex; a donut is not).</li>
      <li><strong>Convex Function:</strong> The "Epigraph" (the space above the curve) is a convex set.</li>
    </ul>

    <h2 id="example-bowl" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Bowl vs. The Rollercoaster</h2>
    
      <h4>Problem: Identifying Guaranteed Solutions</h4>
      <p>Compare \(f(x) = x^2\) (Convex) vs. \(f(x) = \sin(x)\) (Non-Convex).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Parabola (\(x^2\)):</strong> Gradient Descent will always reach \(x=0\), the absolute global minimum.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Sine (\(\sin x\)):</strong> Depending on where you start, you might get trapped at \(x = 3\pi/2\) or \(7\pi/2\). You have no way of knowing if there is a "Better" minimum elsewhere.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Deep Learning is almost <strong>never</strong> convex, which is why it's so hard to train. Linear Regression is <strong>always</strong> convex, which is why it works every time.
        </div>
      </div>
    

    <h2 id="example-linear" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Convex vs. Non-Convex ML</h2>
    
      <h4>Problem: Comparing Two Algorithms</h4>
      <p>Support Vector Machines (SVM) vs. Neural Networks (NN).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>SVM:</strong> Uses a Quadratic Programming (Convex) objective. Finding the "Best Margin" is a solved problem with one answer.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>NN:</strong> The loss surface is a chaotic landscape with billions of parameters. Finding the "Best" weights is a never-ending quest.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Why do we use NN instead of SVM if they aren't convex? Because <strong>Capacity</strong> is more important than <strong>Guarantees</strong>. A chaotic NN can learn features that a "Guaranteed" SVM never could.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import cvxpy as cp
import numpy as np

# Solve a convex problem: Minimize x^2 + y^2 subject to x + y = 1
x = cp.Variable()
y = cp.Variable()

# Create objective and constraints
objective = cp.Minimize(cp.square(x) + cp.square(y))
constraints = [x + y == 1]

# Solve
prob = cp.Problem(objective, constraints)
prob.solve()

print(f"Optimal Value (Global): {prob.value:.4f}")
print(f"Optimal x: {x.value:.4f}, Optimal y: {y.value:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Linear Regression/OLS</strong>: The solution is a convex quadratic form.</li>
      <li><strong>Logan Elastic Net / Lasso</strong>: Regularized regression uses convex penalties.</li>
      <li><strong>Constrained Optimization</strong>: Optimization with boundaries (e.g. Budget constraints).</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if the global minimum is "too good"? What if the model simply memorizes the data? Explore <strong><a href="#/mathematics/optimization/regularization">Regularization (L1 & L2)</a></strong>.
    </div>
  `},s={id:"regularization",title:"Regularization (L1 / L2)",description:"Regularization is a set of techniques used to reduce overfitting by adding a penalty term to the loss function.",color:"#F44336",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🏹 Optimization · Penalties</div>
      <h1>Regularization: The Constraints of Simplicity</h1>
      <p><strong>Regularization</strong> is a "Penalty" for being too complex. in most Machine Learning models, weights can grow wildly large as the model tries to memorize every outlier in your training set. <strong>L1 and L2 Regularization</strong> are the mathematical "Brakes" that keep the model honest and its weights small.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Vector Norms</strong>: Understanding L1 and L2 norms.</li>
        <li><strong>MAP Estimation</strong>: The Bayesian origin of regularization.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A machine that is "Too Smart" will often overfit. It will find tiny, meaningless patterns that only exist in your training set (Noise). <strong>Regularization</strong> works by saying: <em>"I want you to minimize the errors, BUT I will penalize you for using large weights."</em> This forces the model to only use the weights that are <strong>Absolutely Necessary</strong> to explain the data.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Regularization as <strong>"Anchor Points."</strong> 
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
  `},a={id:"optimization",title:"Optimization",description:"Optimization is the iterative process of finding the optimal parameters for a model by minimizing a loss function on a multi-dimensional surface.",keyConcepts:[{title:"Gradient Descent",description:"Batch updates following the steepest downward path."},{title:"Stochastic Gradients",description:"Frequent, noisy updates using a mini-batch of data."},{title:"Convexity",description:"Guarantees of reaching the global minimum without local traps."},{title:"Regularization",description:"Geometric constraints to prevent model overfitting (L1, L2)."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Optimization: <span class="text-accent italic">The Path to Performance</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In Machine Learning, we don't just "solve" for the answer; we "search" for it. <strong>Optimization</strong> is the mathematical mechanism of improvement—the engine that powers everything from Linear Regression to Large Language Models.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This curriculum is broken into <strong>4 high-fidelity topics</strong>, moving from the basic mechanics of Gradient Descent to the advanced constraints of Regularization.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "We don't know the truth, but we know which way is down."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Optimization Proverb</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to descent?</p>
        <a 
          href="/#/mathematics/optimization/gradient-descent" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Gradient Descent
        </a>
      </div>

    </div>
  `,sections:[t,e,i,s]};export{a as OPTIMIZATION_DATA};
