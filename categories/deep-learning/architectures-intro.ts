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
      <p>A "Body" for every "Brain." <strong>Deep Learning</strong> isn't just one giant network; it's a toolbox of <strong>Architectures</strong> designed for different data types. Just as a <strong>Fish</strong> needs fins and a <strong>Bird</strong> needs wings, an <strong>Image Model</strong> needs layers that "See," and a <strong>Speech Model</strong> needs layers that "Listen."</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A "Body" for every "Brain"—that is the core philosophy of <strong>Deep Learning Architectures</strong>. Deep Learning isn't just one giant, generic network; it's a toolbox of specialized structural patterns designed for specific data types. Just as a fish needs fins to navigate water and a bird needs wings for air, an <strong>Image Model</strong> needs layers that can "See" spatial patterns, and a <strong>Speech Model</strong> needs layers that can "Listen" to sequences over time. Architectural design is about <strong>Efficiency and Focus</strong>; it's the art of "Hardwiring" our assumptions (Inductive Bias) into the network so it doesn't drown in the noise of raw, high-dimensional data.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Architectural Inductive Bias</div>
      <p>A deep neural network architecture is a directed graph of layers $f_1, f_2, \dots, f_L$ that compose to form a non-linear mapping $\Phi: \mathcal{X} \to \mathcal{Y}$. The architecture encodes an **Inductive Bias**, making assumptions about the data structure:</p>
      <div class="math-block">
        $$\mathbf{y} = f_L(f_{L-1}(\dots f_1(\mathbf{x}) \dots))$$
      </div>
      <p>Common structural paradigms include:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Feedforward (MLP)</strong>: Dense connectivity; assumes no specific topological relationship.</li>
        <li><strong>Convolutional (CNN)</strong>: Sparse connectivity and weight sharing; assumes **translation invariance** and local spatial correlation.</li>
        <li><strong>Recurrent (RNN)</strong>: Cyclic connectivity; assumes **temporal dependency** and sequential order.</li>
        <li><strong>Attention (Transformer)</strong>: Dynamic weighting; assumes **relational importance** regardless of distance.</li>
      </ul>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Deep Learning Architecture as <strong>"Optimizing the Wiring of a Factory"</strong> or the <strong>"Blueprint of Intelligence."</strong> 
        If you want to understand a <strong>Sentence</strong>, you need wires that carry meaning through <strong>Time</strong> (RNN/LSTM). If you want to recognize a <strong>Face</strong>, you need wires that specialize in <strong>Space</strong> and local textures (CNN). 
        A generic Fully-Connected network is like a factory where every single worker talks to every other worker simultaneously—it’s pure chaos for a 4K video. Specialized architectures like <strong>Transformers</strong> or <strong>CNNs</strong> create an <strong>Assembly Line</strong> or a <strong>Spotlight</strong>, forcing the neurons to pay attention only to the information that actually matters for the task at hand.
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Intelligence Factory</h2>
    
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
          Architecture is <strong>Inductive Bias</strong>. It's the assumptions we "Hardwire" into the network to help it see the world the way we do. Without it, the model would drown in raw data.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
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

    <h2 id="applications">Applications in ML</h2>
    <p>Architectures are the "Skeletons of Intelligence." By picking the right structure, we ensure the brain fits the specific data type we are trying to master.</p>
    <ul>
      <li><strong>Medical Diagnostic Imaging (CNNs)</strong>: When a doctor looks at an X-ray, they look for local patterns (fractures, tumors). CNNs are engineered for this exact task—they ignore distant, unrelated pixels and focus on the spatial relationships in a small area, making them the gold standard for cancer detection and radiology.</li>
      <li><strong>Global Language Translation (Transformers)</strong>: In a long sentence, the first word might be related to the last one. Transformers use "Attention" architectures to see the whole sentence at once, making them capable of translating complex documents or powering ChatGPT by understanding the global context of human language.</li>
    </ul>
    <p>Teacher's Final Word: Modeling is about picking the right tool for the job. Don't build a car when you need a submarine. Choose the architecture that shares the same "intuition" as your data, and the machine will learn twice as fast with half the effort.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Let's look at the assembly line for images. Explore <strong><a href="#/machine-learning/deep-learning/cnn">Convolutional Neural Networks (CNN)</a></strong>.
    </div>
  `
};

