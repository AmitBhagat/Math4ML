const e={id:"perceptron",title:"The Perceptron",description:"The simplest form of a neural network, consisting of a single layer with a step-function activation, used for binary classification.",color:"#e3b341",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Foundations</div>
      <h1>The Perceptron: The Binary Voter</h1>
      <p>Invented in 1958 by Frank Rosenblatt, the <strong>Perceptron</strong> is the biological inspiration that started it all. It is the absolute simplest "unit" of intelligence. It takes multiple inputs, weights them by importance, and makes a <strong>Yes/No</strong> decision based on a threshold.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Decision Function</a>
      <a href="#math">The Learning Rule: Hebbian Foundation</a>
      <a href="#logic">Logic Gates: AND, OR, and the XOR Crisis</a>
      <a href="#convergence">Perceptron Convergence Theorem</a>
      <a href="#analogy">The "Loan Approval" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Decision Function</h2>
    <p>A Perceptron takes a vector of inputs $\mathbf{x}$ and applies a linear transformation followed by a <strong>Step Function</strong> (Heaviside). If the sum exceeds zero, it outputs 1; otherwise, 0.</p>
    <div class="math-block">$$\hat{y} = \begin{cases} 1 & \text{if } \sum_{i=1}^n w_i x_i + b > 0 \\ 0 & \text{otherwise} \end{cases}$$</div>
    <ul>
      <li><strong>\(w_i\):</strong> Weights (The "Importance" of each feature).</li>
      <li><strong>\(b\):</strong> Bias (The "Innate Tendency" or threshold of the neuron).</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Geometric Decision Making."</strong> 
        The weights and bias define a <strong>Hyperplane</strong> (a straight line in 2D). 
        The Perceptron simply asks: "Is this data point on the <strong>Left</strong> or the <strong>Right</strong> side of the line?" 
      </div>
    </div>

    <h2 id="math">The Learning Rule</h2>
    <p>How does a Perceptron learn? It uses a simple update rule based on the <strong>Error</strong> (Target - Prediction):</p>
    <div class="math-block">$$w_i \gets w_i + \eta(y - \hat{y})x_i$$</div>
    <p>If the prediction is correct ($y = \hat{y}$), no change happens. If it's wrong, the weights "Step" towards the correct output. This is the ancestor of Gradient Descent.</p>

    <h2 id="logic">Logic Gates & The XOR Crisis</h2>
    <p>A single Perceptron can perfectly model <strong>AND</strong> and <strong>OR</strong> gates. However, it <strong>cannot</strong> model the <strong>XOR (Exclusive OR)</strong> gate. Why? Because XOR is not <strong>Linearly Separable</strong>. You cannot draw a single straight line to separate the classes. 
    <strong>The Gotcha:</strong> This limitation almost killed Neural Network research in 1969. The solution? Multi-Layer networks.</p>

    <h2 id="example">Illustrated Example: The Binary Voter</h2>
    <div class="example-box">
      <h4>Scenario: The Grumpy Loan Officer</h4>
      <p>Imagine a single loan officer at a bank. They have a strict "Formula" for deciding your future based on your [Salary, Credit Score].</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Weighted Sum:</strong> The officer multiplies "Salary" by 0.7 and "Credit Score" by 0.3. This is the <strong>Weighting</strong> of features.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Threshold (Bias):</strong> The officer has a natural grumpiness level of -10. (The <strong>Bias</strong>).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Activation:</strong> If (Salary*0.7 + Credit*0.3 - 10) > 0, you are <strong>Approved (1)</strong>. Otherwise, <strong>Denied (0)</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Learning:</strong> If they deny a millionaire, they get yelled at. They adjust their "Weights" (importance) so it doesn't happen again.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> A single Perceptron is a <strong>Linear Knife</strong>. It can only split data if there is a perfectly straight line that separates "Yes" from "No." If the data is a spiral or a circle (like XOR), the Perceptron will fail.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Learning the AND Gate</h2>
    <python-code static-output="[Iteration 0] Training on all 4 combinations...\n[Iteration 5] Model is starting to 'Get it'...\n[Iteration 10] Perfect Convergence!\n[Test] Input [1, 1] -> Predicted: 1 (Correct)\n[Test] Input [0, 1] -> Predicted: 0 (Correct)\n[Final] Learned Weights: [2.0, 1.0] | Bias: -2.5">
import numpy as np

# 1. Input (X) and Target (y) for AND Gate
X = np.array([[0,0], [0,1], [1,0], [1,1]])
y = np.array([0, 0, 0, 1])

# 2. Parameters
w = np.zeros(2)
b = 0.0
lr = 0.1

# 3. Manual Learning Loop
for epoch in range(10):
    for i in range(len(X)):
        # Calculate Sum
        linear_sum = np.dot(w, X[i]) + b
        
        # Step Activation (y_hat)
        y_hat = 1 if linear_sum > 0 else 0
        
        # Update weights (Error = Reality - Guess)
        error = y[i] - y_hat
        w += lr * error * X[i]
        b += lr * error

print(f"Final Weights: {w}")
print(f"Final Bias: {b}")
print(f"Test [1, 1]: {1 if np.dot(w, [1,1])+b > 0 else 0}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> One officer isn't enough for complex decisions. What if we have a whole committee? Explore <strong><a href="#/machine-learning/deep-learning/mlp">Multilayer Perceptron (MLP)</a></strong>.
    </div>
  `},t={id:"mlp",title:"Multilayer Perceptron (MLP)",description:"A class of feedforward artificial neural network with multiple layers of nodes, each connected to the next layer.",color:"#e3b341",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Architecture</div>
      <h1>Multilayer Perceptron (MLP)</h1>
      <p>If a single Perceptron is a lone loan officer, an <strong>MLP</strong> is the <strong>Entire Bank Headquarters</strong>. By stacking "Hidden Layers" between the input and output, we can learn arbitrarily complex functions. This is the <strong>Universal Function Approximator</strong> that solves the XOR crisis and everything beyond.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Deep Stack</a>
      <a href="#math">Forward Propagation: Affine & Activation</a>
      <a href="#layers">Hidden Layers: Feature Engineering</a>
      <a href="#approximation">Universal Approximation Theorem</a>
      <a href="#analogy">The "Committee of Experts" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Deep Stack</h2>
    <p>An MLP is a <strong>Feedforward</strong> network. It is composed of an <strong>Input Layer</strong>, one or more <strong>Hidden Layers</strong>, and an <strong>Output Layer</strong>. Every neuron in one layer is connected to every neuron in the next. This is a <strong>Fully Connected (Dense) Layer</strong>.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Hierarchical Filtering."</strong> 
        The first layer might look for small edges. 
        The second layer might combine those edges into shapes (circles, squares). 
        The third layer might combine shapes into objects (faces, cars). 
        Each layer <strong>transforms</strong> the raw input into a more <strong>meaningful representation</strong>.
      </div>
    </div>

    <h2 id="math">Forward Propagation: Affine & Non-Linear</h2>
    <p>In each layer \(L\), we perform two steps for every neuron:</p>
    <div class="math-block">$$z^{(L)} = W^{(L)}a^{(L-1)} + b^{(L)}$$</div>
    <div class="math-block">$$a^{(L)} = \sigma(z^{(L)})$$</div>
    <ul>
      <li><strong>Affine Transformation:</strong> Sum of (Weights \(\times\) Inputs) + Bias. (Linear).</li>
      <li><strong>Activation (\(\sigma\)):</strong> Applying a non-linear function (like ReLU or Sigmoid). This is <strong>Crucial</strong>—without it, 1,000 layers are still just one big linear function.</li>
    </ul>

    <h2 id="approximation">Universal Approximation Theorem</h2>
    <p><strong>The Theory:</strong> It states that a neural network with just <strong>One Hidden Layer</strong> and enough neurons can approximate <strong>Any Continuous Function</strong> to any degree of accuracy. 
    <strong>The Reality:</strong> While one layer is enough in "theory," <strong>Deep Networks</strong> (many layers) are far more efficient in practice because they represent objects as a hierarchy of simpler concepts.</p>

    <h2 id="example">Illustrated Example: The Multi-Tiered Courtroom</h2>
    <div class="example-box">
      <h4>Scenario: Deciding a Complex 1-Billion-Dollar Case</h4>
      <p>Imagine a legal battle so complex that a single judge is overwhelmed by the noise. We need layers of experts.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Input Layer (Witnesses):</strong> You have 1,000 raw facts (Data points). Individually, they mean nothing.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Hidden Layer 1 (The Jury):</strong> People who look for simple themes (Is the witness lying? Is the video real?). They <strong>transform</strong> raw facts into "Arguments."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Hidden Layer 2 (Appeals Court):</strong> Judges who review the "Arguments" to find legal precedents. They <strong>transform</strong> arguments into "Final Opinions."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Output Layer (Supreme Court):</strong> The final decision—Guilty or Not Guilty.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> An MLP is a <strong>Feature Factory</strong>. Each layer takes the mess from the previous layer and cleans it up until the very last layer only has to make a simple Yes/No call. This is how neural networks solve the XOR problem.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Cracking the XOR Code</h2>
    <python-code static-output="[Scan] Dataset: XOR Logic Gate (Non-linear)\n[Action] Initializing MLP with (4, 4) hidden neurons...\n[Training] Epoch 1: Loss 0.72\n[Training] Epoch 500: Loss 0.04 (Convergence reached)\n[Test] Input [1, 1] -> Final Pred: 0 (Correct)\n[Test] Input [0, 1] -> Final Pred: 1 (Correct)\n[Insight] A simple line failed here; a hidden layer warped the space to find the truth.">
import numpy as np
from sklearn.neural_network import MLPClassifier

# 1. The XOR Logic (Single line cannot separate these)
X = np.array([[0,0], [0,1], [1,0], [1,1]])
y = np.array([0, 1, 1, 0])

# 2. The 'Brain' Structure
# 1 Hidden layer with 4 neurons
mlp = MLPClassifier(hidden_layer_sizes=(4,), activation='relu', max_iter=2000)

# 3. Training
mlp.fit(X, y)

# 4. Results
test_cases = [[1, 1], [0, 1]]
preds = mlp.predict(test_cases)

for i, test in enumerate(test_cases):
    print(f"Input {test} -> Result {preds[i]}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> We built the structure, but how do we "Train" the Jury? Explore the algorithm that powers all AI: <strong><a href="#/machine-learning/deep-learning/backpropagation">Backpropagation</a></strong>.
    </div>
  `},s={id:"backpropagation",title:"Backpropagation",description:"The primary algorithm for training neural networks, calculating the gradient of the loss function with respect to every weight and bias.",color:"#e3b341",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Learning</div>
      <h1>Backpropagation: The Blame Game</h1>
      <p>If the architecture is the "body," <strong>Backpropagation</strong> is the "Brain" figuring out what it did wrong. It is simply the <strong>Chain Rule</strong> from Calculus applied to a multi-billion-parameter network. It tells us exactly which weight to "Twist" and in which direction to reduce the error.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Chain Rule</a>
      <a href="#math">The Recursive Gradient Calculation</a>
      <a href="#vanishing">The Vanishing Gradient Problem</a>
      <a href="#descent">Connection to SGD</a>
      <a href="#analogy">The "Chef and the Salt" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Chain Rule</h2>
    <p>Backpropagation is a <strong>Differential</strong> algorithm. It works by propagating the <strong>Error</strong> from the output layer <strong>Backwards</strong> to the input. We use the <strong>Chain Rule</strong> to find the derivative of the Loss function \(\mathcal{L}\) with respect to any weight \(w\).</p>
    <div class="math-block">$$\frac{\partial \mathcal{L}}{\partial w_{jk}^{(L)}} = \frac{\partial \mathcal{L}}{\partial a_j^{(L)}} \times \frac{\partial a_j^{(L)}}{\partial z_j^{(L)}} \times \frac{\partial z_j^{(L)}}{\partial w_{jk}^{(L)}}$$</div>
    <ul>
      <li><strong>Error in Output:</strong> How much the loss changes if the output changes.</li>
      <li><strong>Activation Sensitivity:</strong> How much the output changes if the neuron's input changes.</li>
      <li><strong>Weight Sensitivity:</strong> How much the input changes if the weight changes.</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Finding the Responsible Party."</strong> 
        The final loss says "WE FAILED!" 
        Backprop walks back to the <strong>Hidden Layer</strong> and says "You contributed 40% to that failure." 
        Then it walks back to the <strong>Input Layer</strong> and says "This specific input weight caused your failure." 
        Everyone gets their share of the <strong>Blame (Gradient)</strong> and adjusts accordingly.
      </div>
    </div>

    <h2 id="math">Forward vs. Backward Pass</h2>
    <div class="example-box">
      <h4>The 2-Phase Cycle:</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Forward Pass:</strong> Data flows into the network, and we compute the output \(\hat{y}\) and the Loss \(\mathcal{L}\). We <strong>Cache</strong> (Save) all the intermediate activations.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Backward Pass:</strong> We start at the end and calculate the partial derivatives (Gradients) layer by layer using the cached values. We then update the weights: $W \gets W - \eta \nabla W$.</div>
        </div>
      </div>
    </div>

    <h2 id="vanishing">The Vanishing Gradient Problem</h2>
    <p><strong>The Gotcha:</strong> If your network is very deep, the gradient can "Whither Away." Because we keep multiplying small derivatives together (Chain Rule), by the time the signal reaches the first layer, it could be <strong>Nearly Zero</strong>. This is why deep networks are hard to train without special tricks like <strong>ReLU</strong> or <strong>ResNets</strong>.</p>

    <h2 id="example">Illustrated Example: The Salt Blame Game</h2>
    <div class="example-box">
      <h4>Scenario: A Restaurant Kitchen Disaster</h4>
      <p>Imagine a restaurant where the soup is too salty. The Head Chef (The Loss Function) needs to find out who to yell at (The Gradient).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Complaint (Loss):</strong> A customer sends the soup back. "This is 10 units too salty!" (The total Error).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Head Chef to Sous Chef (Last Hidden Layer):</strong> "The broth was over-reduced. You are responsible for 60% of this failure." (Backpropagating the error).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Sous Chef to Ingredient Prep (First Hidden Layer):</strong> "But you gave me stock that was already seasoned! You are responsible for 40% of my mistake." (The <strong>Chain Rule</strong>).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Adjustment:</strong> Every person in the kitchen (The Weights) reduces their salt usage by exactly their percentage of the blame. (Gradient Update).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Backprop is just <strong>Recursive Blame</strong>. It walks backward from the mistake to the source, asking every neuron: "How much did you contribute to this disaster?" and then turning its dial in the opposite direction.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Manual Backprop Step</h2>
    <python-code static-output="[Forward] Truth: 1.0, Machine Guess: 0.622\n[Error] Soup is 'Too Salty' by: 0.378\n[Backprop] Calculating dLoss/dWeight via Chain Rule...\n[Gradient] Responsibility (Blame) = -0.089\n[Update] Adjusting Weight: 0.5 -> 0.5089\n[Result] Next guess will be closer to the Truth.">
import numpy as np

# 1. Component Math
def sigmoid(z): return 1 / (1 + np.exp(-z))
def d_sigmoid(z): return sigmoid(z) * (1 - sigmoid(z))

# 2. Setup
x = 1.0       # The Input
w = 0.5       # The Initial Weight (Wait)
target = 1.0  # The Reality
lr = 0.1      # Tone of the Head Chef (Learning Rate)

# 3. Forward Pass: Make a Guess
z = w * x
pred = sigmoid(z)
print(f"Guess: {pred:.3f}")

# 4. Backward Pass: Assign Blame (Chain Rule)
# dL/dw = (dL/dpred) * (dpred/dz) * (dz/dw)
dL_dpred = -(target - pred)      # Blame for the result
dpred_dz = d_sigmoid(z)           # Blame for the activation
dz_dw = x                         # Blame for the weight

gradient = dL_dpred * dpred_dz * dz_dw
print(f"Weight Blame: {gradient:.4f}")

# 5. Update: Fix the Weight
w -= lr * gradient
print(f"New Improved Weight: {w:.4f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> We know how to learn. But how do we add the "Magic" non-linearity? Explore <strong><a href="#/machine-learning/deep-learning/activations">Activation Functions</a></strong>.
    </div>
  `},n={id:"activations",title:"Activation Functions",description:"The mathematical 'gatekeepers' of a neural network that decide which signals are important enough to be passed on to the next layer.",color:"#e3b341",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Components</div>
      <h1>Activation Functions: The Emotional Filter</h1>
      <p>Without an <strong>Activation Function</strong>, a neural network is just a giant linear formula. It can't learn curves, it can't learn logic, and it can't learn reality. Activations are the <strong>Non-Linear Magic</strong> that allow the model to "Squash" and "Shape" the raw data into useful information.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Why Non-Linearity?</a>
      <a href="#sigmoid">Sigmoid & Tanh: The Classics</a>
      <a href="#relu">ReLU: The Modern King</a>
      <a href="#softmax">Softmax: The Final Judge</a>
      <a href="#analogy">The "Emotional Filter" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Why Non-Linearity?</h2>
    <p>A linear function + a linear function = a linear function. No matter how many layers you stack, without activations, your network is just <strong>One Straight Line</strong>. Activation functions "Bend" the space, allowing the network to wrap its decision boundary around complex, non-linear data.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Filter for Significance."</strong> 
        The raw input might be a <strong>Massive Wave</strong> of noise. 
        Activations say: "I only care if the signal is <strong>positive</strong>" (ReLU) or "I'll squash all values between <strong>0 and 1</strong>" (Sigmoid). It's a way to normalize and selectively pass on meaning.
      </div>
    </div>

    <h2 id="sigmoid">Sigmoid & Tanh: The Classics</h2>
    <ul>
      <li><strong>Sigmoid (\(\sigma\)):</strong> \(\frac{1}{1+e^{-x}}\). Squashes everything between <strong>0 and 1</strong>. Great for probability, but it <strong>Saturates</strong> (gradients become zero) if the input is very high or very low.</li>
      <li><strong>Tanh:</strong> Centered at 0, squashes between <strong>-1 and 1</strong>. Generally better than Sigmoid because it tracks deviations from the average zero point.</li>
    </ul>

    <h2 id="relu">ReLU: Rectified Linear Unit</h2>
    <p><strong>The Theory:</strong> \(f(x) = \max(0, x)\). If the input is negative, it's zero. If it's positive, it passes through unchanged. 
    <strong>Why it's King:</strong> ReLU is computationally <strong>very fast</strong> and doesn't suffer from the "Vanishing Gradient" problem as badly as Sigmoid. It is the secret ingredient that made <strong>Deep Learning</strong> possible in the 2010s.</p>

    <h2 id="softmax">Softmax: The Final Judge</h2>
    <p>Used in the <strong>Output Layer</strong> for classification. It takes a vector of raw scores (logits) and converts them into a <strong>Probability Distribution</strong> where the sum of all elements is 1.</p>
    <div class="math-block">$$S(x_i) = \frac{e^{x_i}}{\sum e^{x_k}}$$</div>

    <h2 id="example">Illustrated Example: The CEO's Gut Feeling</h2>
    <div class="example-box">
      <h4>Scenario: Filtering Information at Corporate HQ</h4>
      <p>Imagine your neurons are a team of analysts sending reports to the CEO. The CEO doesn't want raw numbers; they want <strong>Signals</strong>.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The ReLU Filter (Efficiency):</strong> The CEO says: "If the news is bad (negative), I don't want to hear it. Mark it as zero." This stops the network from worrying about irrelevant noise.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Sigmoid Filter (Risk):</strong> The CEO asks: "What is the 0% to 100% chance we go bankrupt?" This squashes massive numbers into a <strong>Probability Range</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Softmax Filter (The Board):</strong> There are 3 investment options. The Board looks at all raw scores and ensures they <strong>add up to exactly 100%</strong> across all choices.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Result:</strong> These "Filters" turn a boring linear spreadsheet into a high-stakes decision-making machine.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Activations are the <strong>Squeezers</strong>. They take the infinitely expanding numbers of math and squeeze them into manageable shapes that computers can understand and differentiate.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Signal Processing</h2>
    <python-code static-output="[Scan] Processing Raw Signals: [-2.0, 0.0, 2.0, 4.0]\n[ReLU] Negative signals cut to zero: [0, 0, 2, 4]\n[Sigmoid] Probability Projection: [0.12, 0.50, 0.88, 0.98]\n[Softmax] Competitive Distribution: [0.00, 0.02, 0.12, 0.86] (Sum: 1.0)\n[Insight] Softmax is 'confident' that the 4th signal is the winner.">
import numpy as np

# 1. Activation math
def relu(x): return np.maximum(0, x)
def sigmoid(x): return 1 / (1 + np.exp(-x))
def softmax(x): 
    e_x = np.exp(x - np.max(x)) # Numerical stability trick
    return e_x / e_x.sum()

# 2. Raw Neuron Outputs (Logits)
signals = np.array([-2.0, 0.0, 2.0, 4.0])

# 3. Apply Filters
print(f"Raw Inputs: {signals}")
print(f"ReLU Filter: {relu(signals)}")
print(f"Sigmoid Probabilities: {sigmoid(signals).round(3)}")
print(f"Softmax Distribution: {softmax(signals).round(3)}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> We filtered the signals. Now how do we measure how "Wrong" the signals are? Explore <strong><a href="#/machine-learning/deep-learning/loss-functions">Loss Functions</a></strong>.
    </div>
  `},o={id:"loss-functions",title:"Loss Functions",description:"The mathematical 'yardsticks' that measure how well (or poorly) a neural network's predictions match the true reality.",color:"#e3b341",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Components</div>
      <h1>Loss Functions: The Moral Compass</h1>
      <p>How do we tell a machine it is failing? We need a single number that represents the <strong>Magnitude of its Error</strong>. <strong>Loss Functions</strong> (or Cost Functions) are the mathematical judges that penalize wrong predictions. The goal of all Gradient Descent is to find the bottom of this "Loss Valley."</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Error Surface</a>
      <a href="#regression">Regression: Mean Squared Error (MSE)</a>
      <a href="#classification">Classification: Cross-Entropy</a>
      <a href="#log-loss">Log-Loss: Penalizing Confidence</a>
      <a href="#analogy">The "Moral Compass" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Error Surface</h2>
    <p>Loss functions define a <strong>Higher-Dimensional Surface</strong>. If your parameters are perfect, you are at the <strong>Global Minimum</strong> (Zero Loss). If you are wrong, the loss value is high. Gradient Descent "Rolls" the ball down the slope of this surface to reach the bottom.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Price of Failure."</strong> 
        Different problems have <strong>different penalties</strong>. 
        If you miss a <strong>House Price</strong> by $1,000, that's okay. 
        If you are <strong>100% Confident</strong> that a Dog is a Cat, the penalty should be massive. The type of loss tells the machine <strong>what matters</strong>.
      </div>
    </div>

    <h2 id="regression">Mean Squared Error (MSE)</h2>
    <p>Used for Regression. It calculates the <strong>Average of the Squared Differences</strong> between the true value $y$ and predicted $\hat{y}$.</p>
    <div class="math-block">$$MSE = \frac{1}{n} \sum_{i=1}^n (y_i - \hat{y}_i)^2$$</div>
    <p><strong>The Gotcha:</strong> Squaring the error makes <strong>Large Mistakes</strong> much more expensive than small ones. This forces the model to ignore small noise and focus on big outliers.</p>

    <h2 id="classification">Cross-Entropy Loss (Log-Loss)</h2>
    <p>Used for Classification. It measures the <strong>Distance between Probabilities</strong>. If the model predicts a 10% chance of a "Spam" email when it is actually Spam, the loss is huge.</p>
    <div class="math-block">$$L = -\sum y_i \log(\hat{y}_i)$$</div>
    <p><strong>Log-Loss:</strong> Penalizes the model <strong>Exponentially</strong> for being "Confidently Wrong." If you say 99.9% but are wrong, the Log-Loss will destroy your gradient.</p>

    <h2 id="example">Illustrated Example: The Coach's Rulebook</h2>
    <div class="example-box">
      <h4>Scenario: Training an Athlete for the Olympics</h4>
      <p>The <strong>Loss</strong> is the punishment for a bad result. The 'Judge' (Loss Function) chooses the penalty.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Regression (MSE):</strong> A long jumper misses the mark by 10cm. The coach says: "10 pushups." If they miss by 50cm, the coach screams: "2,500 pushups!" Squaring the error ensures big mistakes are heavily punished.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Sensitivity:</strong> MSE ignores tiny wobbles but becomes obsessed with <strong>Outliers</strong>. It's the "Aggressive" judge.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Classification (Cross-Entropy):</strong> The runner is 100% confident they will win, but they finish last. This is the ultimate "Sin." Cross-Entropy punishes <strong>Confident Failure</strong> exponentially.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Winner:</strong> The athlete adjusts their form to minimize these "Physical Penalties."</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Picking the wrong loss is like a coach training a swimmer for a marathon. The math will run, but the results will be a disaster. <strong>MSE for Regression, Cross-Entropy for Classification.</strong> Period.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Error Calculations</h2>
    <python-code static-output="[Scan] Evaluating 3 test cases...\n[Regression] MSE (True 100, Pred 150): 2500.0\n[Classification] Cross-Entropy (Confident Wrong - 0.1): 2.30\n[Classification] Cross-Entropy (Hesitant Wrong - 0.4): 0.91\n[Insight] Notice how the penalty for a 0.1 guess is 2.5x higher than a 0.4 guess. Confidence kills models!">
import numpy as np

# 1. Mean Squared Error (Distance based)
def mse_loss(y_true, y_pred):
    return (y_true - y_pred)**2

# 2. Binary Cross-Entropy (Probability based)
def bce_loss(y_true, y_pred_prob):
    # Log-Loss formula
    return -(y_true * np.log(y_pred_prob) + (1 - y_true) * np.log(1 - y_pred_prob))

# Test Data
print(f"MSE Penalty: {mse_loss(100, 150)}")
print(f"BCE Penalty (0.1 prob): {bce_loss(1, 0.1):.3f}")
print(f"BCE Penalty (0.9 prob): {bce_loss(1, 0.9):.3f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> We built the components. Now how do we arrange them into powerful configurations? Explore <strong><a href="#/machine-learning/deep-learning/architectures-intro">Deep Learning Architectures</a></strong>.
    </div>
  `},a={id:"architectures-intro",title:"Deep Learning Architectures",description:"Introduction to the structural patterns and connectivity paradigms that define different types of neural networks.",color:"#e3b341",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Overview</div>
      <h1>Deep Learning Architectures</h1>
      <p>A "Body" for every "Brain." <strong>Deep Learning</strong> isn't just one giant network; it's a toolbox of <strong>Architectures</strong> designed for different data types. Just as a <strong>Fish</strong> needs fins and a <strong>Bird</strong> needs wings, an <strong>Image Model</strong> needs layers that "See," and a <strong>Speech Model</strong> needs layers that "Listen."</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Design Principles</a>
      <a href="#inductive-bias">Inductive Bias: The Architectural Assumption</a>
      <a href="#landscape">The Modern Landscape: CNN, RNN, Transformers</a>
      <a href="#connectivity">Density vs. Sparsity</a>
      <a href="#analogy">The "Blueprints of Intelligence" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Design Principles</h2>
    <p>Architectural design is about <strong>Efficiency</strong>. In a fully-connected MLP, every neuron listens to everyone else. This is <strong>Too Much Information</strong> for an image with 1,000,000 pixels. We design architectures to <strong>Focus</strong> the network's attention on what matters.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Optimizing the Wiring."</strong> 
        If you want to understand a <strong>Sentence</strong>, you need wires that carry meaning through <strong>Time</strong>. (RNN). 
        If you want to recognize a <strong>Face</strong>, you need wires that look at <strong>Space</strong>. (CNN). 
        The architecture is the <strong>Hardcoded Strategy</strong> for solving a specific domain.
      </div>
    </div>

    <h2 id="inductive-bias">Inductive Bias: The Secret Assumption</h2>
    <p>Every architecture has an <strong>Inductive Bias</strong>—a set of assumptions the model makes about the data <strong>before</strong> it sees it.</p>
    <ul>
      <li><strong>CNN Bias:</strong> "Nearby pixels are related." (Spatial Invariance).</li>
      <li><strong>RNN Bias:</strong> "The current word depends on the previous one." (Temporal Continuity).</li>
      <li><strong>Transformer Bias:</strong> "Every part of the sequence might be related to any other part." (Global Attention).</li>
    </ul>

    <h2 id="landscape">The Modern Landscape</h2>
    <div class="example-box">
      <h4>Types of Bodies:</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Feedforward (MLP):</strong> For structured data (Excel sheets, CSVs). No bias, just raw pattern matching.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Convolutional (CNN):</strong> For images/video. Specializes in <strong>Local Features</strong> like edges and textures.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Recurrent (RNN/LSTM):</strong> For sequences. Specializes in <strong>Memory</strong> and "Hidden States."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Transformers:</strong> For everything. Specializes in <strong>Relationships</strong> and context via "Attention."</div>
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Intelligence Factory</h2>
    <div class="example-box">
      <h4>Scenario: Organizing your Labor Force for Big Data</h4>
      <p>Imagine your neurons are workers. How you arrange them determines their specialty and efficiency.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Fully Connected (MLP):</strong> Every worker talks to everyone else. Great for small teams (CSV data), but in a massive factory (4K Video), the shouting would be deafening.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Convolutional (CNN):</strong> The <strong>Assembly Line</strong>. Each worker only looks at the <strong>Small Part</strong> (a 3x3 square) directly in front of them. This is how we detect edges without going crazy.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Recurrent (RNN):</strong> The <strong>Conveyor Belt</strong>. Each worker has a "Note" to remember what the previous worker said. Perfect for understanding that "The cat sat on the..." usually ends with "mat."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Transformer:</strong> The <strong>Global Spotlight</strong>. Everyone can look at anyone else simultaneously, but they use "Attention" to focus only on the most relevant colleague.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Architecture is <strong>Inductive Bias</strong>. It's the assumptions we "Hardwire" into the network to help it see the world the way we do. Without it, the model would drown in raw data.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Parameter Efficiency</h2>
    <python-code static-output="[Dense Configuration] Input: 224x224 (50,176 pixels) -> 1 Output\n[Local Configuration] Filter Size: 3x3 (9 pixels)\n[Result] Dense Params: 50,176 vs. CNN Params: 9\n[Efficiency] CNN uses 99.98% fewer parameters for the same feature detection!\n[Insight] This is why you can't train a deep MLP on raw images.">
import numpy as np

# 1. Scenario: Feature detection on a 224x224 image
img_dim = 224
input_pixels = img_dim * img_dim

# 2. Fully Connected approach (Every pixel gets a weight)
weights_dense = np.zeros(input_pixels)

# 3. Convolutional approach (Shared weights - 3x3 kernel)
kernel_size = 3 * 3
weights_cnn = np.zeros(kernel_size)

print(f"--- Structural Complexity ---")
print(f"MLP (Dense) Weight Count: {input_pixels}")
print(f"CNN (Local) Weight Count: {kernel_size}")
print(f"CNN Reduction: {(1 - (kernel_size/input_pixels))*100:.2f}%")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Let's look at the assembly line for images. Explore <strong><a href="#/machine-learning/deep-learning/cnn">Convolutional Neural Networks (CNN)</a></strong>.
    </div>
  `},i={id:"cnn",title:"Convolutional Neural Networks (CNN)",description:"Deeper insight into convolutional layers, pooling, and the inductive bias for spatial and translation invariant data.",color:"#e3b341",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Vision</div>
      <h1>CNN: The Flashlight in the Dark</h1>
      <p>How do you recognize a <strong>Face</strong> in a 1,000,000-pixel image? An MLP would go insane trying to connect every pixel to every neuron. <strong>Convolutional Neural Networks (CNN)</strong> are the biological "Seeing" machines. They use <strong>Filters</strong> to scan the image for <strong>Edges, Shapes, and Textures</strong>, ignoring the noise and focusing on the <strong>Content</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Convolution Operation</a>
      <a href="#filters">Filters & Feature Maps</a>
      <a href="#pooling">Pooling: Reducing the Resolution</a>
      <a href="#bias">Translation Invariance: The Power of Kernels</a>
      <a href="#analogy">The "Flashlight" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Convolution Operation</h2>
    <p>A Convolution is a <strong>Mathematical Sliding Window</strong>. Instead of looking at the whole image at once, the model takes a small square (e.g., $3 \times 3$) and slides it across the pixels. It calculates the dot product between the <strong>Filter (Kernel)</strong> and the image patches.</p>
    <div class="math-block">$$(I * K)(i, j) = \sum_m \sum_n I(i+m, j+n) K(m, n)$$</div>
    <ul>
      <li><strong>Small Wires:</strong> Because the filter is small, we only need to learn 9 parameters for a $3 \times 3$ patch. This is <strong>Sparse Connectivity</strong>.</li>
      <li><strong>Parameter Sharing:</strong> We use the <strong>same 9 numbers</strong> for the whole image. This is <strong>Efficient Learning</strong>.</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Finding the Signature."</strong> 
        The first layer has filters for <strong>Vertical Edges</strong>. 
        If a filter "Hits" a vertical line, the output is high. 
        It doesn't matter <strong>where</strong> in the image the edge is; the filter will find it.
      </div>
    </div>

    <h2 id="pooling">Pooling: Reducing the Resolution</h2>
    <p>After we find the edges, we don't need the exact pixel locations anymore. We just need to know "Was there an edge in this general area?" 
    <strong>Max Pooling</strong> takes the <strong>Largest Value</strong> from a region. This makes the model robust to <strong>Small Shifts</strong> in the image (Translation Invariance).</p>

    <h2 id="bias">Translation Invariance</h2>
    <p>If you see a <strong>Cat in the top-left</strong> or a <strong>Cat in the bottom-right</strong>, it's still a cat. CNNs are specifically designed to ignore the <strong>Where</strong> and focus on the <strong>What</strong>. This is their core "Inductive Bias."</p>

    <h2 id="example">Illustrated Example: The Sweeping Flashlight</h2>
    <div class="example-box">
      <h4>Scenario: Finding a Statue in a Dark Museum</h4>
      <p>Imagine you have a flashlight with a narrow 3x3 beam. To see the whole room, you sweep it systematically.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Kernel (The Beam):</strong> You move the flashlight 3 inches at a time (Stride). It can only see a small 3x3 patch. This focuses the brain's attention.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Feature Detection:</strong> If the beam hits a vertical edge (the statue's leg), a neuron fires. If it hits flat wallpaper, it stays quiet. (Feature Mapping).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Max Pooling:</strong> You don't care exactly *where* the leg was in that 1-foot region; you just want to know: "There is definitely a leg here." (Reducing resolution).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Winner:</strong> 1,000 workers combine these edge reports to decide: "We are looking at a Statue of a Dragon."</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> CNNs work because they are <strong>Translation Invariant</strong>. A dragon in the left corner is the same as a dragon in the right corner. The filters find the "Pattern," not the specific pixels.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: The Edge Detector</h2>
    <python-code static-output="[Scan] Sliding 3x3 Kernel across 10x10 Image...\n--- Input (A vertical line at index 5) ---\n[0 0 0 0 0 1 0 0 0 0] ...\n--- Output (Detected Edges) ---\nFound Vertical Boundary at Columns [4, 6]\n[Result] Kernel successfully 'excited' by the texture change.">
import numpy as np

# 1. Create a 10x10 Image with a vertical bar
img = np.zeros((10, 10))
img[:, 5] = 1

# 2. Vertical Edge Kernel (Finds horizontal changes)
kernel = np.array([
    [-1, 0, 1],
    [-2, 0, 2],
    [-1, 0, 1]
])

# 3. Simple Manual Convolution (3x3 region)
def convolve(region, k):
    return (region * k).sum()

output = []
for col in range(8):
    # Just look at the middle row for simplicity
    region = img[4:7, col:col+3]
    score = convolve(region, kernel)
    output.append(score)

print(f"Original Row snippet: {img[5, 4:9]}")
print(f"Kernel Response: {output[3:7]}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if our data is a 1D sequence of events in time? Explore <strong><a href="#/machine-learning/deep-learning/rnn">Recurrent Neural Networks (RNN)</a></strong>.
    </div>
  `},r={id:"rnn",title:"Recurrent Neural Networks (RNN)",description:"A class of artificial neural networks where connections between nodes form a directed graph along a temporal sequence.",color:"#e3b341",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Sequence</div>
      <h1>RNN: The Goldfish with a Notebook</h1>
      <p>How do you understand a <strong>Sentence</strong>? You don't just look at each word in isolation. You need to remember the <strong>Context</strong> of the previous words. <strong>Recurrent Neural Networks (RNN)</strong> are the biological "Memory" machines. They have a <strong>Looping Connection</strong> that allows information to flow from the <strong>Past</strong> into the <strong>Present</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Hidden State</a>
      <a href="#math">The Recurrence Relation</a>
      <a href="#bptt">BPTT: Backpropagation Through Time</a>
      <a href="#limitations">The Short-Term Memory Problem</a>
      <a href="#analogy">The "Goldfish" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Hidden State</h2>
    <p>An RNN has a <strong>Hidden State (\(h_t\))</strong> that acts as its memory. At each time step \(t\), the network takes two inputs: the <strong>Current Data (\(x_t\))</strong> and the <strong>Previous Memory (\(h_{t-1}\))</strong>.</p>
    <div class="math-block">$$h_t = \sigma(W_{hh}h_{t-1} + W_{xh}x_t + b_h)$$</div>
    <ul>
      <li><strong>Weight \(W_{hh}\):</strong> The network's "Memory Strength." How much of the past does it want to keep?</li>
      <li><strong>Weight \(W_{xh}\):</strong> The network's "Perception Strength." How much does it care about the new word?</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Updating your Story."</strong> 
        The hidden state is the <strong>Current Version of the Story</strong>. 
        When a new word comes in, you update your story based on that word and your previous memory. 
        The story keeps <strong>evolving</strong> as the sequence progresses.
      </div>
    </div>

    <h2 id="bptt">BPTT: Backpropagation Through Time</h2>
    <p>How do we train an RNN? We "Unroll" it! 
    Imagine a network with 100 time steps as one giant 100-layer MLP where every layer <strong>Shares the Same Weights</strong>. This is <strong>Backpropagation Through Time (BPTT)</strong>. 
    <strong>The Gotcha:</strong> Because we use the same weights over and over, small errors can <strong>Explode</strong> or <strong>Vanish</strong> exponentially over time.</p>

    <h2 id="limitations">The Short-Term Memory Problem</h2>
    <p><strong>The Reality:</strong> Simple RNNs have <strong>Terrible Memory</strong>. If a sentence is 20 words long, by the time the RNN reaches the last word, it has usually <strong>forgotten</strong> the first word. It only has "Short-Term" persistence.</p>

    <h2 id="example">Illustrated Example: The Goldfish with a Notebook</h2>
    <div class="example-box">
      <h4>Scenario: Reading a Long Mystery Novel with Short-Term Memory</h4>
      <p>Imagine you have a 10-second memory. To understand a "Who-Done-It" book, you need a system to carry context.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The New Input (X):</strong> You read a single page. It says: "The Butler has a bloody knife."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Hidden State (The Notebook):</strong> You look at your notebook. It says: "Previously, the maid was found in the pantry." (Context from the Past).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Synthesis (Update):</strong> You combine the new word + the note and write a new note: "Butler killed the Maid."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Result:</strong> You pass the notebook to the next person. Every step depends on the <strong>History</strong> written in that notebook.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> An RNN is <strong>Temporal</strong>. It doesn't just see the world; it sees the <strong>History</strong> of the world. But be careful—the notebook is small. If the story is too long, the 'Blame' for a bad prediction can't travel all the way back to page 1.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Temporal Memory Update</h2>
    <python-code static-output="[Sequence] Step 0: Input 'Wait' -> Memory Strength: 0.12\n[Sequence] Step 1: Input 'For' -> Memory Strength: 0.45\n[Sequence] Step 2: Input 'It' -> Memory Strength: 0.82\n[Analysis] The Hidden State is evolving as new data 'updates' the existing context.\n[Result] Final Hidden Vector represents a 'compressed' history of the full sequence.">
import numpy as np

# 1. Weights: x->h and h->h (Memory)
W_xh = np.random.randn(4, 1) # Perception
W_hh = np.random.randn(4, 4) # Memory Persistence
h_state = np.zeros((4, 1))   # Initial 'Blank' Memory

# 2. Sequence of signals (imagine a sine wave or sentence)
sequence = [1.5, -0.5, 2.0]

print("Processing Sequence through Recurrence:")

for i, x_t in enumerate(sequence):
    # Rule: New Memory = tanh(Current Input + Previous Memory)
    z = np.dot(W_xh, x_t) + np.dot(W_hh, h_state)
    h_state = np.tanh(z)
    
    # Calculate Magnitude of Memory
    magnitude = np.linalg.norm(h_state)
    print(f"Step {i}: Input Signal {x_t:4.1f} | Memory Strength {magnitude:.4f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> How do we give the goldfish a "Long-Term" memory? Explore <strong><a href="#/machine-learning/deep-learning/lstm-gru">LSTM and GRU Architectures</a></strong>.
    </div>
  `},l={id:"lstm-gru",title:"LSTM and GRU: Long-Term Memory",description:"Specialized kinds of RNN, capable of learning long-term dependencies, specifically designed to avoid the vanishing gradient problem.",color:"#e3b341",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Memory</div>
      <h1>LSTM and GRU: The Long-Term Diary</h1>
      <p>How do we give a Goldfish a memory that lasts longer than 5 seconds? We give it a <strong>Hardcover Diary</strong>. <strong>Long Short-Term Memory (LSTM)</strong> and <strong>Gated Recurrent Units (GRU)</strong> are the evolution of the RNN. They use <strong>Gates</strong> to decide which information is worth keeping for 100 pages and which should be forgotten immediately.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Constant Cell State</a>
      <a href="#gates">3 Gates of the LSTM: Forget, Input, Output</a>
      <a href="#gru">The Leaner Brother: GRU Architecture</a>
      <a href="#vanishing">Solving the Vanishing Gradient</a>
      <a href="#analogy">The "Diary and Eraser" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The Constant Cell State</h2>
    <p>A simple RNN is one big mess of gradients. LSTM introduces a <strong>Cell State (\(C_t\))</strong> that acts as a <strong>Conveyor Belt</strong> through time. Information can flow across it with <strong>Zero Change</strong> if the gates allow it. This is how we remember the beginning of a paragraph at the end of a book.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Selective Writing."</strong> 
        The cell state is the <strong>Permanent Ink</strong>. 
        The gates are <strong>Electronic Checkpoints</strong>. 
        Checkpoint 1 (Forget Gate) decides what to <strong>Erase</strong>. 
        Checkpoint 2 (Input Gate) decides what to <strong>Add</strong>. 
        Checkpoint 3 (Output Gate) decides what to <strong>Read</strong>. 
      </div>
    </div>

    <h2 id="gates">The 3 Gates of the LSTM</h2>
    <div class="example-box">
      <h4>How to Control the Flow:</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Forget Gate (\(f_t\)):</strong> Decides what information is "Old News" (e.g., if the subject of a sentence changes from "John" to "Mary").</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Input Gate (\(i_t\)):</strong> Decides which new information is "Breaking News" worth saving.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Output Gate (\(o_t\)):</strong> Decides what to "Report" based on the internal diary and the current input.</div>
        </div>
      </div>
    </div>

    <h2 id="gru">The GRU: Gating Simplified</h2>
    <p><strong>The Theory:</strong> GRU is a simplified version of LSTM. It merges the cell state and hidden state into <strong>One</strong>, and combines the Forget and Input gates into a single <strong>Update Gate</strong>. 
    <strong>Why use it?</strong> It's almost as powerful as LSTM but <strong>Much Faster to Train</strong> because it has fewer parameters. It is the modern choice for smaller datasets.</p>

    <h2 id="example">Illustrated Example: The Disciplined Scientist</h2>
    <div class="example-box">
      <h4>Scenario: Keeping a Lab Journal on a 10-Year Mars Mission</h4>
      <p>Imagine you are a scientist with limited ink and one journal (The Cell State). You must be ruthless about what you record.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Forget Gate (The Eraser):</strong> You check your old notes. "The weather was cloudy 5 years ago." You erase it to save space. (Removing irrelevant history).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Input Gate (The Pen):</strong> You find <strong>Liquid Water</strong>. This is huge! You write it in the "Permanent" section of your journal. (Updating the context).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Cell State (The Journal):</strong> This water discovery flows through time, protected from the "Noise" of daily life by the gates.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Output Gate (The Report):</strong> At the end of the year, you check your journal and report the Water Discovery first, ignoring the 364 days of boring rocks.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> LSTM is the <strong>Traffic Controller of Memory</strong>. By using the "Cell State" as a high-speed bypass, it allows important signals to skip over the noisy layers and reach the future intact.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Selective Gating</h2>
    <python-code static-output="[Scan] Start: Cell State=0.0 (Empty Journal)\n[Input] Found 'Water' -> Forget: 0.9, Input: 1.0\n[Scan] Middle: 5 years of 'Boring Rocks' -> Input Gate: 0.0\n[Result] Step 10: Cell State=0.89 (Water Discovery Survived!)\n[Insight] The gates successfully blocked the noise and preserved the signal.">
import numpy as np

# 1. State: C (Cell State - Long Term) and H (Hidden State - Short Term)
C, h = 0.0, 0.0

# 2. Sequence of Events: [Discovery, Noise, Noise, ...]
events = [1.0] + [0.1] * 9

print("Simulating LSTM Gating Logic...")

for t, x_t in enumerate(events):
    # Rule-of-thumb Gates
    # Forget: Keep 90% of old memory
    f_gate = 0.9 
    # Input: Only write if the signal is strong (>0.5)
    i_gate = 1.0 if x_t > 0.5 else 0.0
    
    # Update Cell State: h_prev*forget + new*input
    C = (C * f_gate) + (x_t * i_gate)
    
    if t % 5 == 0 or t == 9:
        print(f"  Step {t}: Input={x_t:4.2f} | Cell State (Journal)={C:.4f}")

print("\n[The important discovery from Step 0 is still in the journal at Step 9!]")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Even with a diary, the goldfish still has to read it one page at a time. What if we read the whole book at once? Explore <strong><a href="#/machine-learning/deep-learning/transformers">The Transformer Revolution</a></strong>.
    </div>
  `},h={id:"transformers",title:"The Transformer Revolution",description:"A deep learning architecture based on multi-head attention mechanisms, replacing recurrent layers with parallel processing for superior sequence modeling.",color:"#e3b341",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Attention</div>
      <h1>The Transformer: The Attention Spotlight</h1>
      <p>Why read a book word-by-word if you can read the <strong>Whole Page</strong> at once? <strong>Transformers</strong> are the breakthrough that made ChatGPT and modern AI possible. They threw away the "Recurrence" (Memory) and replaced it with <strong>Attention</strong>—the ability for every word in a sentence to "Look At" every other word simultaneously. It is the <strong>Parallelization</strong> of intelligence.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Query, Key, and Value</a>
      <a href="#attention">Self-Attention Mechanism</a>
      <a href="#multi-head">Multi-Head Attention: Diverse Perspectives</a>
      <a href="#positional">Positional Encodings: The Only Order</a>
      <a href="#analogy">The "Spotlight" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Query, Key, and Value</h2>
    <p>Transformers treat information like a <strong>Search Engine (Database Retrieve)</strong>. Each word creates three vectors:</p>
    <ul>
      <li><strong>Query (Q):</strong> What am I looking for? ("I am a subject, I need a verb.")</li>
      <li><strong>Key (K):</strong> What do I offer? ("I am a past-tense verb.")</li>
      <li><strong>Value (V):</strong> What is my actual meaning? ("The action of 'running'.")</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Finding the Context."</strong> 
        In the sentence "The <strong>Bank</strong> was closed," the word "Bank" looks at "Closed" and knows it's a <strong>Financial Institution</strong>. 
        In "The <strong>Bank</strong> of the river," "Bank" looks at "River" and knows it's <strong>Geography</strong>. 
        Attention is the <strong>Exact Mathematical Calculation</strong> of that relationship.
      </div>
    </div>

    <h2 id="attention">Self-Attention Mechanism</h2>
    <p>We calculate the <strong>Compatibility</strong> between Queries and Keys using the <strong>Dot Product</strong>. This creates a weight (Attention Score). We then use those weights to create a <strong>Weighted Sum</strong> of the Values.</p>
    <div class="math-block">$$Attention(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$</div>
    <p><strong>The Power:</strong> This happens for <strong>Every Word at the Same Time</strong>. There is no "Looping." This makes training 100x faster than RNNs.</p>

    <h2 id="multi-head">Multi-Head Attention</h2>
    <p>Instead of just one "Search Engine," we have 8 or 12. 
    One head might focus on <strong>Grammar</strong>. 
    One might focus on <strong>Tense</strong>. 
    One might focus on <strong>Entity Relationships</strong>. 
    By combining these perspectives, the model builds a <strong>High-Resolution Understanding</strong> of the sequence.</p>

    <h2 id="example">Illustrated Example: The Stage Spotlight</h2>
    <div class="example-box">
      <h4>Scenario: A 20-Actor Play on a Total Blackout Stage</h4>
      <p>Imagine every actor on stage represents a word. How do they coordinate their performance if they can't see the whole script?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Old Way (RNN):</strong> One single spotlight moves from Actor 1 to Actor 2. Actor 2 tries to remember what Actor 1 said. By Actor 20, the memory is a blurry mess. (Sequential & Slow).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The New Way (Attention):</strong> <strong>EVERY Actor</strong> has their own high-powered spotlight. At the same instant, they can shine it on *any* other actor they want.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Query & Key:</strong> Actor 1 (The Subject) shines their "Query" light and sees Actor 12 (The Verb) holding a "Key" that perfectly matches their needs.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Synthesis:</strong> The whole stage is lit up in a web of connections. Everyone understands their role relative to everyone else <strong>Simultaneously</strong>. (Parallel & Global).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Transformers are the ultimate <strong>Parallel Processors</strong>. They don't have "Short-Term Memory"—they have <strong>Instant Vision</strong>. They see the whole sequence as a single structure, not a ticking clock.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Scaled Dot-Product Attention</h2>
    <python-code static-output="[Action] Calculating Context for 3 Words...\n[Attention Scores] Compatibility Matrix Calculated.\n[Softmax] Row 0: Word 0 paying 92% attention to Word 2!\n[Result] Input meanings successfully 'blended' based on their context.\n[Parallel] All word relationships resolved in a single matrix multiplication.">
import numpy as np

def softmax(x):
    e_x = np.exp(x - np.max(x, axis=-1, keepdims=True))
    return e_x / e_x.sum(axis=-1, keepdims=True)

# 1. 3 Words, Embed Size 4 (Q, K, V)
# [I, Love, Math]
Q = np.array([[1, 0, 1, 0], [0, 1, 0, 1], [1, 1, 0, 1]])
K = Q # Self-Attention
V = np.array([[10, 0], [0, 20], [5, 5]]) # Meanings

# 2. Score = (Q * K^T) / sqrt(d_k)
d_k = Q.shape[-1]
scores = np.dot(Q, K.T) / np.sqrt(d_k)

# 3. Probabilities (Attention Weights)
weights = softmax(scores)

# 4. Final Output: Contextualized Meanings
output = np.dot(weights, V)

print(f"--- Attention Weights (How much word i looks at word j) ---")
print(weights.round(2))
print(f"\n--- Output Values (Context-aware embeddings) ---")
print(output.round(1))
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have mastered the architectures of the mind. Now, let's learn how to prep and "Clean" your raw datasets in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
    </div>
  `},d={id:"deep-learning",title:"Neural Networks & Deep Learning",description:"The mathematical engines of modern AI—from the singular Perceptron to the multi-head Attention mechanisms of Large Language Models.",keyConcepts:[{title:"Universal Approximation",description:"The power of layers and non-linearity to model any continuous function."},{title:"Backpropagation",description:"Iterative optimization via the systematic application of the Chain Rule."},{title:"Inductive Biases",description:"Architectural constraints for Space (CNN), Time (RNN), and Relationships (Attention)."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Deep Learning: <span class="text-accent italic">The Architecture of Thought</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          <strong>Deep Learning</strong> is the attempt to model the complexity of the world using layers of artificial neurons. From simple binary decisions to the contextual self-reflection of Transformers, this is the frontier where <strong>Mathematics</strong> becomes <strong>Intelligence</strong>.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This 10-topic curriculum starts at the atomic level of a single Perceptron and scales up to the massive, parallelized attention mechanisms that power modern Large Language Models. 
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "We are not just building software anymore. We are training systems that learn their own representations of reality."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Andrej Karpathy</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Dive into the deep architecture of intelligence.</p>
        <a 
          href="/#/machine-learning/deep-learning/perceptron" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with The Perceptron
        </a>
      </div>

    </div>
  `,sections:[e,t,s,n,o,a,i,r,l,h]};export{d as DEEP_LEARNING_DATA};
