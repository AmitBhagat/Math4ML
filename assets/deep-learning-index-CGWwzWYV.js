const e={id:"deep-learning",title:"Neural Networks & Deep Learning",description:"Biologically inspired architectures (ANN, CNN, RNN) that power modern computer vision and natural language processing.",keyConcepts:[{title:"Backpropagation",description:"Efficient weight updates via Chain Rule."},{title:"Layers",description:"Hierarchical feature extraction in deep models."}],sections:[{id:"architectures",title:"Foundational Architectures",description:"Overview of MLP, CNN, and RNN structural patterns for solving diverse ML problems.",html:String.raw`
        <div class="premium-hero">
          <div class="premium-hero-badge">🧠 ML · Deep Learning</div>
          <h1>Foundational Architectures</h1>
          <p>Deep Learning isn't just one algorithm; it's a toolbox of different <strong>Architectures</strong> designed for different types of data—from images to sequences.</p>
        </div>

        <h2 id="mlp">1. Multi-Layer Perceptron (MLP)</h2>
        <p>The "Vanilla" neural network. It's a series of layers where every neuron in one layer is connected to every neuron in the next. It's the ultimate function approximator.</p>

        <div class="callout tip">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <strong>Core Theory:</strong> Each layer $L$ performs an affine transformation followed by a non-linear activation:
            <div class="math-block">$$a^{(L)} = \sigma(z^{(L)}) = \sigma(W^{(L)}a^{(L-1)} + b^{(L)})$$</div>
            This is the <strong>Deep Learning Axiom</strong>: by stacking these transformations, we can learn arbitrarily complex non-linear mappings.
          </div>
        </div>

        <h2 id="cnn-rnn">2. CNNs and RNNs</h2>
        <ul>
          <li><strong>CNN (Convolutional):</strong> Designed for images. It uses <strong>Translation Invariance</strong>—if a feature (like an eye) is in the top-left or bottom-right, the model should still see it.</li>
          <li><strong>RNN (Recurrent):</strong> Designed for sequences (text, audio). It has "memory."</li>
        </ul>

        <div class="callout tip">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <strong>Core Theory:</strong> The hidden state of an RNN at time $t$ is defined recursively:
            <div class="math-block">$$h_t = \tanh(W_{hh}h_{t-1} + W_{xh}x_t + b_h)$$</div>
            This allows information from the <strong>past</strong> ($h_{t-1}$) to influence the <strong>present</strong> prediction ($y_t$), creating a temporal flow of information.
          </div>
        </div>

        <div class="linking-rule">
          <strong>Next Step:</strong> Architectures define the structure, but how do they actually learn? Explore the engine of Deep Learning: <strong><a href="#/machine-learning/deep-learning/optimization">Backpropagation & Optimization</a></strong>.
        </div>
      `,tags:["MLP","CNN","RNN"],color:"#e3b341"},{id:"optimization",title:"Deep Optimization",description:"How models learn using Backpropagation and Gradient Descent to minimize loss.",html:String.raw`
        <div class="premium-hero">
          <div class="premium-hero-badge">⚡ ML · Deep Learning</div>
          <h1>Backpropagation & Optimization</h1>
          <p>If the architecture is the "body" of the network, Backpropagation is the "brain" learning from its mistakes. It's simply the systematic application of the Chain Rule.</p>
        </div>

        <h2 id="backprop">1. The Chain Rule in Action</h2>
        <p>When a network makes an error, we need to know exactly how much each individual weight contributed to that error so we can fix it.</p>

        <div class="callout tip">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <strong>Core Theory:</strong> <strong>Backpropagation</strong> is the calculation of the gradient of the loss function $\mathcal{L}$ with respect to the weights $W$ using the <strong>Chain Rule</strong>:
            <div class="math-block">$$\frac{\partial \mathcal{L}}{\partial w_{jk}^{(L)}} = \frac{\partial \mathcal{L}}{\partial a_j^{(L)}} \cdot \frac{\partial a_j^{(L)}}{\partial z_j^{(L)}} \cdot \frac{\partial z_j^{(L)}}{\partial w_{jk}^{(L)}}$$</div>
            We then update our weights in the <strong>opposite direction</strong> of this gradient to find the minimum of the loss surface.
          </div>
        </div>

        <h2 id="optimizers">2. Modern Optimizers (Adam, SGD)</h2>
        <p>Simple Gradient Descent is often too slow or gets stuck in "valleys." Modern learners use <strong>Momentum</strong> and <strong>Adaptive Learning Rates</strong> (like Adam) to navigate the terrain more efficiently.</p>

        <div class="linking-rule">
          <strong>Next Step:</strong> We've seen how models learn from fixed data. Now, let's explore how agents learn through trial and error in <strong><a href="#/machine-learning/reinforcement-learning">Reinforcement Learning</a></strong>.
        </div>
      `,tags:["Backprop","Adam","SGD"],color:"#e3b341"}]};export{e as DEEP_LEARNING_DATA};
