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
    **The Gotcha:** This limitation almost killed Neural Network research in 1969. The solution? Multi-Layer networks.</p>

    <h2 id="analogy">The "Loan Officer" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Loan Officer</strong> deciding to approve a mortgage. 
        Inputs: [Income, Credit Score, Debt]. 
        Weights: Income is <strong>High Importance</strong> ($w=0.8$), Credit Score is <strong>Medium</strong> ($w=0.5$), Debt is <strong>Negative</strong> ($w=-0.7$). 
        The officer sums them up. If the final score is > 10, the loan is <strong>Approved (1)</strong>. If not, it is <strong>Rejected (0)</strong>. 
        **The Perceptron is that single officer making one binary choice.**
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> One officer isn't enough for complex decisions. What if we have a whole committee? Explore <strong><a href="#/machine-learning/deep-learning/mlp">Multilayer Perceptron (MLP)</a></strong>.
    </div>
  `},t={id:"mlp",title:"Multilayer Perceptron (MLP)",description:"A class of feedforward artificial neural network with multiple layers of nodes, each connected to the next layer.",color:"#e3b341",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Architecture</div>
      <h1>Multilayer Perceptron (MLP)</h1>
      <p>If a single Perceptron is a lone loan officer, an **MLP** is the **Entire Bank Headquarters**. By stacking "Hidden Layers" between the input and output, we can learn arbitrarily complex functions. This is the **Universal Function Approximator** that solves the XOR crisis and everything beyond.</p>
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
    <p>An MLP is a <strong>Feedforward</strong> network. It is composed of an **Input Layer**, one or more <strong>Hidden Layers</strong>, and an **Output Layer**. Every neuron in one layer is connected to every neuron in the next. This is a <strong>Fully Connected (Dense) Layer</strong>.</p>
    
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
    **The Reality:** While one layer is enough in "theory," <strong>Deep Networks</strong> (many layers) are far more efficient in practice because they represent objects as a hierarchy of simpler concepts.</p>

    <h2 id="analogy">The "Committee of Experts" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are a <strong>Judge deciding a complex court case</strong>. 
        You have 3 groups of people:
        * **Witnesses (Input Layer):** They provide the raw data (facts).
        * **Jury (Hidden Layer 1):** They analyze the facts and find <strong>Patterns</strong> (who's lying, who's consistent).
        * **Appeals Court (Hidden Layer 2):** They review the Jury's findings and look for <strong>Legal Nuances</strong>. 
        * **Supreme Court (Output Layer):** They make the final <strong>Guilty/Not Guilty</strong> decision. 
        **The MLP is the entire judicial process.** Each layer filters and abstracts the information until a final decision is unavoidable.
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> We built the structure, but how do we "Train" the Jury? Explore the algorithm that powers all AI: <strong><a href="#/machine-learning/deep-learning/backpropagation">Backpropagation</a></strong>.
    </div>
  `},o={id:"backpropagation",title:"Backpropagation",description:"The primary algorithm for training neural networks, calculating the gradient of the loss function with respect to every weight and bias.",color:"#e3b341",html:String.raw`
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
    <p>Backpropagation is a <strong>Differential</strong> algorithm. It works by propagating the <strong>Error</strong> from the output layer <strong>Backwards</strong> to the input. We use the **Chain Rule** to find the derivative of the Loss function \(\mathcal{L}\) with respect to any weight \(w\).</p>
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

    <h2 id="analogy">The "Head Chef and the Salt" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Head Chef</strong> tasting a final dish (The Loss). 
        The dish is <strong>Too Salty</strong>. 
        The Head Chef goes to the **Soup Maker** (Hidden Layer) and says "Too salty!" 
        The Soup Maker goes to the <strong>Salt Supplier</strong> (Input Weight) and says "You gave me too much salt!" 
        The Salt Supplier adjusts the next batch. 
        **Backpropagation is that feedback loop from the final taste back to the source of the salt.**
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> We know how to learn. But how do we add the "Magic" non-linearity? Explore <strong><a href="#/machine-learning/deep-learning/activations">Activation Functions</a></strong>.
    </div>
  `},n={id:"activations",title:"Activation Functions",description:"The mathematical 'gatekeepers' of a neural network that decide which signals are important enough to be passed on to the next layer.",color:"#e3b341",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Components</div>
      <h1>Activation Functions: The Emotional Filter</h1>
      <p>Without an **Activation Function**, a neural network is just a giant linear formula. It can't learn curves, it can't learn logic, and it can't learn reality. Activations are the **Non-Linear Magic** that allow the model to "Squash" and "Shape" the raw data into useful information.</p>
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
    **Why it's King:** ReLU is computationally <strong>very fast</strong> and doesn't suffer from the "Vanishing Gradient" problem as badly as Sigmoid. It is the secret ingredient that made <strong>Deep Learning</strong> possible in the 2010s.</p>

    <h2 id="softmax">Softmax: The Final Judge</h2>
    <p>Used in the <strong>Output Layer</strong> for classification. It takes a vector of raw scores (logits) and converts them into a <strong>Probability Distribution</strong> where the sum of all elements is 1.</p>
    <div class="math-block">$$S(x_i) = \frac{e^{x_i}}{\sum e^{x_k}}$$</div>

    <h2 id="analogy">The "Emotional Filter" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are a <strong>CEO deciding on a new project</strong>. 
        Your employees give you 1,000 facts (Linear Inputs). 
        * **Sigmoid Filter:** You ask, "Are we 0% or 100% confident in this?" 
        * **ReLU Filter:** You say, "Only tell me the <strong>GOOD news</strong>. Forget the bad news." 
        * **Tanh Filter:** You ask, "Is this a positive or a negative deviation from our current plan?" 
        **The Activation Function is your "Gut Feeling" that turns raw data into a meaningful decision.**
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> We filtered the signals. Now how do we measure how "Wrong" the signals are? Explore <strong><a href="#/machine-learning/deep-learning/loss-functions">Loss Functions</a></strong>.
    </div>
  `},a={id:"loss-functions",title:"Loss Functions",description:"The mathematical 'yardsticks' that measure how well (or poorly) a neural network's predictions match the true reality.",color:"#e3b341",html:String.raw`
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
        If you miss a <strong>House Price</strong> by \$1,000, that's okay. 
        If you are <strong>100% Confident</strong> that a Dog is a Cat, the penalty should be massive. The type of loss tells the machine <strong>what matters</strong>.
      </div>
    </div>

    <h2 id="regression">Mean Squared Error (MSE)</h2>
    <p>Used for Regression. It calculates the <strong>Average of the Squared Differences</strong> between the true value $y$ and predicted $\hat{y}$.</p>
    <div class="math-block">$$MSE = \frac{1}{n} \sum_{i=1}^n (y_i - \hat{y}_i)^2$$</div>
    <p>**The Gotcha:** Squaring the error makes <strong>Large Mistakes</strong> much more expensive than small ones. This forces the model to ignore small noise and focus on big outliers.</p>

    <h2 id="classification">Cross-Entropy Loss (Log-Loss)</h2>
    <p>Used for Classification. It measures the <strong>Distance between Probabilities</strong>. If the model predicts a 10% chance of a "Spam" email when it is actually Spam, the loss is huge.</p>
    <div class="math-block">$$L = -\sum y_i \log(\hat{y}_i)$$</div>
    <p><strong>Log-Loss:</strong> Penalizes the model <strong>Exponentially</strong> for being "Confidently Wrong." If you say 99.9% but are wrong, the Log-Loss will destroy your gradient.</p>

    <h2 id="analogy">The "Moral Compass" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are a <strong>Coach training an Archer</strong>. 
        * **MSE Coach:** He measures how many <strong>Inches</strong> each arrow is from the bullseye. 
        * **Cross-Entropy Coach:** He cares about <strong>HOW SURE</strong> the archer was. 
        If the archer yells "I'M PERFECT!" and misses, the coach makes him do 1,000 pushups. 
        **The Loss Function is the Coach's Rulebook. It tells the archer exactly how much suffering each mistake costs.**
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> We built the components. Now how do we arrange them into powerful configurations? Explore <strong><a href="#/machine-learning/deep-learning/architectures-intro">Deep Learning Architectures</a></strong>.
    </div>
  `},s={id:"architectures-intro",title:"Deep Learning Architectures",description:"Introduction to the structural patterns and connectivity paradigms that define different types of neural networks.",color:"#e3b341",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Overview</div>
      <h1>Deep Learning Architectures</h1>
      <p>A "Body" for every "Brain." <strong>Deep Learning</strong> isn't just one giant network; it's a toolbox of <strong>Architectures</strong> designed for different data types. Just as a <strong>Fish</strong> needs fins and a <strong>Bird</strong> needs wings, an **Image Model** needs layers that "See," and a **Speech Model** needs layers that "Listen."</p>
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
    <p>Every architecture has an **Inductive Bias**—a set of assumptions the model makes about the data <strong>before</strong> it sees it.</p>
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

    <h2 id="analogy">The "Blueprints of Intelligence" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are building a <strong>Factory</strong>. 
        * **MLP Factory:** Every worker talks to every other worker. (Chaos for big tasks). 
        * **CNN Factory:** An **Assembly Line**. Each worker only looks at the **Small Part** in front of them and passes it on. 
        * **RNN Factory:** A <strong>Conveyor Belt</strong> that loops back. Everyone remembers what the previous person did. 
        **The Architecture is the Floor Plan of the factory. It determines how fast and how well the final product is built.**
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> Let's look at the assembly line for images. Explore <strong><a href="#/machine-learning/deep-learning/cnn">Convolutional Neural Networks (CNN)</a></strong>.
    </div>
  `},i={id:"cnn",title:"Convolutional Neural Networks (CNN)",description:"Deeper insight into convolutional layers, pooling, and the inductive bias for spatial and translation invariant data.",color:"#e3b341",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Vision</div>
      <h1>CNN: The Flashlight in the Dark</h1>
      <p>How do you recognize a <strong>Face</strong> in a 1,000,000-pixel image? An MLP would go insane trying to connect every pixel to every neuron. <strong>Convolutional Neural Networks (CNN)</strong> are the biological "Seeing" machines. They use **Filters** to scan the image for <strong>Edges, Shapes, and Textures</strong>, ignoring the noise and focusing on the <strong>Content</strong>.</p>
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
        The first layer has filters for **Vertical Edges**. 
        If a filter "Hits" a vertical line, the output is high. 
        It doesn't matter <strong>where</strong> in the image the edge is; the filter will find it.
      </div>
    </div>

    <h2 id="pooling">Pooling: Reducing the Resolution</h2>
    <p>After we find the edges, we don't need the exact pixel locations anymore. We just need to know "Was there an edge in this general area?" 
    **Max Pooling** takes the <strong>Largest Value</strong> from a region. This makes the model robust to <strong>Small Shifts</strong> in the image (Translation Invariance).</p>

    <h2 id="bias">Translation Invariance</h2>
    <p>If you see a <strong>Cat in the top-left</strong> or a <strong>Cat in the bottom-right</strong>, it's still a cat. CNNs are specifically designed to ignore the <strong>Where</strong> and focus on the <strong>What</strong>. This is their core "Inductive Bias."</p>

    <h2 id="analogy">The "Flashlight" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are in a <strong>Pitch-Black Room</strong> trying to find a **Hidden Statue**. 
        You have a <strong>Small, Powerful Flashlight</strong>. 
        You don't just stand back and hope to see it (MLP). You <strong>Sweep</strong> (Convolve) the flashlight beam across the walls. 
        When the light hits an **Edge**, you yell "Got one!" 
        When it hits a <strong>Curve</strong>, you yell "Found a curve!" 
        Once you've swept the whole room and found 10 edges and 4 curves in the same place, you say "That's the statue!" 
        **The CNN is that sweeping flashlight beam.** 
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if our data is a 1D sequence of events in time? Explore <strong><a href="#/machine-learning/deep-learning/rnn">Recurrent Neural Networks (RNN)</a></strong>.
    </div>
  `},r={id:"rnn",title:"Recurrent Neural Networks (RNN)",description:"A class of artificial neural networks where connections between nodes form a directed graph along a temporal sequence.",color:"#e3b341",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Sequence</div>
      <h1>RNN: The Goldfish with a Notebook</h1>
      <p>How do you understand a **Sentence**? You don't just look at each word in isolation. You need to remember the <strong>Context</strong> of the previous words. <strong>Recurrent Neural Networks (RNN)</strong> are the biological "Memory" machines. They have a <strong>Looping Connection</strong> that allows information to flow from the <strong>Past</strong> into the <strong>Present</strong>.</p>
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
    **The Gotcha:** Because we use the same weights over and over, small errors can <strong>Explode</strong> or <strong>Vanish</strong> exponentially over time.</p>

    <h2 id="limitations">The Short-Term Memory Problem</h2>
    <p><strong>The Reality:</strong> Simple RNNs have <strong>Terrible Memory</strong>. If a sentence is 20 words long, by the time the RNN reaches the last word, it has usually <strong>forgotten</strong> the first word. It only has "Short-Term" persistence.</p>

    <h2 id="analogy">The "Goldfish with a Notebook" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Goldfish</strong> with a 5-second memory. 
        It is trying to read a <strong>Mystery Novel</strong>. 
        Every time it turns a page, it forgets everything that happened before. 
        So, it keeps a <strong>Small Notebook (Hidden State)</strong>. 
        On each page, it looks at the new text, reads its notebook, and then <strong>Scribbles</strong> a summary for the next page. 
        **The RNN is that Goldfish. The "Notebook" is its hidden state. The "Short-Term" problem is the notebook being too small to hold the whole story.** 
      </div>
    </div>

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
        The cell state is the **Permanent Ink**. 
        The gates are **Electronic Checkpoints**. 
        Checkpoint 1 (Forget Gate) decides what to **Erase**. 
        Checkpoint 2 (Input Gate) decides what to **Add**. 
        Checkpoint 3 (Output Gate) decides what to **Read**. 
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
    <p><strong>The Theory:</strong> GRU is a simplified version of LSTM. It merges the cell state and hidden state into **One**, and combines the Forget and Input gates into a single <strong>Update Gate</strong>. 
    **Why use it?** It's almost as powerful as LSTM but <strong>Much Faster to Train</strong> because it has fewer parameters. It is the modern choice for smaller datasets.</p>

    <h2 id="analogy">The "Diary and Eraser" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are keeping a <strong>Strict Journal</strong> for a 1-year research trip. 
        * **Forget Gate:** Every Sunday, you go through your notes and <strong>Erase</strong> things that turned out to be boring. 
        * **Input Gate:** You only <strong>Write</strong> into your journal if something <strong>Crucial</strong> happens. 
        * **Output Gate:** When someone asks you, "What's the status?", you read your journal and <strong>Tell them the highlights</strong>. 
        **The LSTM/GRU is that disciplined scientist. It doesn't let its memory get clogged with garbage.** 
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> Even with a diary, the goldfish still has to read it one page at a time. What if we read the whole book at once? Explore <strong><a href="#/machine-learning/deep-learning/transformers">The Transformer Revolution</a></strong>.
    </div>
  `},h={id:"transformers",title:"The Transformer Revolution",description:"A deep learning architecture based on multi-head attention mechanisms, replacing recurrent layers with parallel processing for superior sequence modeling.",color:"#e3b341",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Attention</div>
      <h1>The Transformer: The Attention Spotlight</h1>
      <p>Why read a book word-by-word if you can read the <strong>Whole Page</strong> at once? <strong>Transformers</strong> are the breakthrough that made ChatGPT and modern AI possible. They threw away the "Recurrence" (Memory) and replaced it with **Attention**—the ability for every word in a sentence to "Look At" every other word simultaneously. It is the **Parallelization** of intelligence.</p>
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
        In the sentence "The **Bank** was closed," the word "Bank" looks at "Closed" and knows it's a <strong>Financial Institution</strong>. 
        In "The **Bank** of the river," "Bank" looks at "River" and knows it's <strong>Geography</strong>. 
        Attention is the <strong>Exact Mathematical Calculation</strong> of that relationship.
      </div>
    </div>

    <h2 id="attention">Self-Attention Mechanism</h2>
    <p>We calculate the <strong>Compatibility</strong> between Queries and Keys using the <strong>Dot Product</strong>. This creates a weight (Attention Score). We then use those weights to create a <strong>Weighted Sum</strong> of the Values.</p>
    <div class="math-block">$$Attention(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$</div>
    <p>**The Power:** This happens for <strong>Every Word at the Same Time</strong>. There is no "Looping." This makes training 100x faster than RNNs.</p>

    <h2 id="multi-head">Multi-Head Attention</h2>
    <p>Instead of just one "Search Engine," we have 8 or 12. 
    One head might focus on <strong>Grammar</strong>. 
    One might focus on <strong>Tense</strong>. 
    One might focus on <strong>Entity Relationships</strong>. 
    By combining these perspectives, the model builds a <strong>High-Resolution Understanding</strong> of the sequence.</p>

    <h2 id="analogy">The "Attention Spotlight" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Dark Stage</strong> with 20 actors (Words). 
        * **RNN Approach:** You have one <strong>Single Spotlight</strong> that follows the actors one by one from left to right. 
        * **Transformer Approach:** **EVERY ACTOR** has their own <strong>Moveable Spotlight</strong>. 
        Each actor is shining their light on the <strong>Other Actors</strong> they need to talk to. 
        If Actor 1 (Subject) needs a verb, they shine their light on Actor 5 (Verb). 
        The stage is <strong>Flooded with Light</strong>. Everyone sees the **Whole Scene** at once. 
        **The Transformer is that flood of light. It's not a sequence; it's a simultaneous connection.** 
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have mastered the architectures of the mind. Now, let's learn how to prep and "Clean" your raw datasets in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
    </div>
  `},g={id:"deep-learning",title:"Neural Networks & Deep Learning",description:"The mathematical engines of modern AI—from the singular Perceptron to the multi-head Attention mechanisms of Large Language Models.",keyConcepts:[{title:"Universal Approximation",description:"The power of layers and non-linearity to model any continuous function."},{title:"Backpropagation",description:"Iterative optimization via the systematic application of the Chain Rule."},{title:"Inductive Biases",description:"Architectural constraints for Space (CNN), Time (RNN), and Relationships (Attention)."}],introHtml:String.raw`
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
  `,sections:[e,t,o,n,a,s,i,r,l,h]};export{g as DEEP_LEARNING_DATA};
