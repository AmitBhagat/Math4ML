import { TopicSection } from '../../src/data/types';

export const architecturesIntroSection: TopicSection = {
  id: "architectures-intro",
  title: "Deep Learning Architectures",
  description: "Introduction to the structural patterns and connectivity paradigms that define different types of neural networks.",
  color: "#e3b341",
  html: String.raw`
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
  `
};
