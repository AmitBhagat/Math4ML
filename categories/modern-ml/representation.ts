import { TopicSection } from '../../src/data/types';

export const representationSection: TopicSection = {
  id: "representation",
  title: "Representation Learning",
  description: "The field of machine learning dedicated to learning meaningful, low-dimensional representations of data that reveal its underlying structure and features.",
  color: "#E91E63",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🚀 Modern ML · Structure</div>
      <h1>Representation: The Art of Simplification</h1>
      <p>A 4K image has 8 million pixels. That is <strong>Too Much Information</strong>. To understand the image, you don't need the exact color of every pixel; you need the <strong>Identity</strong> of the object. <strong>Representation Learning</strong> (Feature Learning) is the process of compressing raw data into a set of <strong>Meaningful Numbers</strong> (Vectors) that capture the "Soul" of the information.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A single 4K image contains over 8 million pixels. For a computer, that is <strong>Too Much Information</strong> to process effectively. To truly understand data, you don't need the exact color of every microscopic pixel; you need the <strong>Identity</strong> and <strong>Context</strong> of the objects within it. <strong>Representation Learning</strong> is the process of compressing high-dimensional raw data into a set of meaningful, low-dimensional numbers—vectors—that capture the "Soul" of the information. It is the art of finding a mapping that honors the semantic truth of the data, ensuring that a "Dog" and a "Wolf" are mapped to nearby coordinates in a "Latent Space," even if their raw pixel values are completely different. It is the tactical decision to trade precision for meaning.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Latent Mapping</div>
      <p>Representation learning aims to find a function $f_\theta: \mathcal{X} \to \mathbb{R}^d$ that maps high-dimensional input $\mathbf{x}$ to a lower-dimensional latent vector $\mathbf{z}$ while preserving task-relevant information. A principal objective is **Disentanglement**, where factors of variation are separated:</p>
      <div class="math-block">
        $$\mathbf{z} = f_\theta(\mathbf{x}), \quad \text{where } \mathbf{x} \approx g_\phi(\mathbf{z})$$
      </div>
      <p>A robust representation satisfies **The Manifold Hypothesis**, assuming that data lies on a low-dimensional topological manifold $\mathcal{M}$. The learning objective often involves minimizing reproduction error or maximizing mutual information:</p>
      <div class="math-block">
        $$\max_{\theta} I(\mathbf{x}; f_\theta(\mathbf{x}))$$
      </div>
      <p class="text-xs opacity-70 mt-2">Where $I$ is the Mutual Information. By learning these "shortcuts," the model avoids the curse of dimensionality.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Representation Learning as <strong>"The Police Sketch Artist"</strong> or <strong>"Lossy but Smart Compression."</strong> 
        Imagine a witness describing a criminal to a sketch artist. The witness has the raw video in their head (the Raw Data). The artist doesn't draw every skin cell; he asks: "Round eyes? Pointy nose? Short hair?" 
        Those specific words are the <strong>Representations</strong>. They are a low-dimensional summary that contains 99% of the important information. In machine learning, we use a <strong>Bottleneck</strong> to force the data through a narrow bridge, stripping away the noise (like the color of a plate) and keeping only the signal (the identity of the food).
      </div>
    </div>

    <h2 id="disentanglement">Disentanglement</h2>
    <p>The "Holy Grail" of this field. We want every dimension in our latent space to represent <strong>One thing</strong>. 
    * Dimension 1: <strong>Color</strong>.
    * Dimension 2: <strong>Rotation</strong>.
    * Dimension 3: <strong>Size</strong>.
    If we change only Dimension 1, only the color should change. This is "Disentangled Representation."</p>

    <h2 id="manifold">The Manifold Hypothesis</h2>
    <p>This is the <strong>Reason SSL works</strong>. High-dimensional data (like images) actually lies on a much lower-dimensional, curvy "Surface" called a <strong>Manifold</strong>. Modern models try to "Unroll" this manifold so that everything becomes linear and logical.</p>

    <h2 id="analogy">The "Police Sketch Artist" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Witness</strong> describing a criminal to a <strong>Police Sketch Artist</strong>. 
        The Witness has the raw video in their head (Raw Data). 
        The Artist doesn't draw the video. He asks: 
        "Eyes? Round." 
        "Nose? Pointy." 
        "Hair? Short." 
        Those <strong>Words</strong> are the <strong>Representations</strong>. They are a low-dimensional summary of the person's identity. 
        <strong>Representation learning is the Artist. He is finding the few 'Features' that allow us to reconstruct the truth without all the noise.</strong> 
      </div>
    </div>

    <h2 id="algorithm">The Representation Algorithm</h2>
    
      <h4>The Feature Extraction Pipeline</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Observation:</strong> Pass high-dimensional raw input (pixels, text tokens) into a deep neural network.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Mapping:</strong> Projected the data through layers with decreasing width to force a "Bottleneck."
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Encoding:</strong> Produce a fixed-length vector (e.g., 512 dimensions) that represents the input.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Distance Learning:</strong> Ensure that similar signatures (two different photos of cats) move closer together in this new vector space.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Downstream Use:</strong> Use these learned vectors as the "Input" for other models, making them 10x more efficient.
        </div>
      </div>
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Chef's Taste Profile</h2>
    
      <h4>Scenario: Describing a 5-course French Dinner to a Friend</h4>
      <p>Imagine you want to tell a friend about a complex meal you just had. You could describe the exact weight of every onion and the chemical formula of the salt (Raw Data), but that's useless. Instead, you use <strong>Features</strong>.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Raw State:</strong> Millions of pixels of "Food Video" in your head. Impossible to transmit or analyze quickly.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Encoding:</strong> Your brain "compresses" the experience into 5 numbers: <strong>[Sweet, Sour, Salty, Bitter, Umami]</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Representation:</strong> You say: "It was a 2/10 Sweet, 8/10 Savory experience." These few numbers (The Representation) capture the <strong>Soul</strong> of the meal.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Utility:</strong> Now you can compare this French dinner to a Street Taco just by comparing their 5-number vectors. This is 1,000x faster than comparing every atom.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          In ML, we call this the <strong>Bottleneck Principle</strong>. By forcing the data through a very narrow bridge (the latent layer), the model is forced to throw away the "Noise" (the pixel color of a plate) and keep only the "Signal" (the identity of the food).
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code runnable="false" static-output="[Action] Mapping Input through Encoder Bottleneck...\n[Layer 1] Flattening 28x28 (784 pixels) -> Tensor\n[Layer 2] Linear Compression (128 units)\n[Output] Final Latent Vector (2 dimensions): [-0.42, 1.89]\n[Result] High-dimensional image successfully mapped to a single coordinate.">
import torch.nn as nn
import torch

# 1. Defining a 'Knowledge Filter' (Encoder)
class Encoder(nn.Module):
    def __init__(self):
        super().__init__()
        self.flatten = nn.Flatten()
        self.compressor = nn.Sequential(
            nn.Linear(784, 128),  # First step of compression
            nn.ReLU(),
            nn.Linear(128, 2)     # The 'Bottleneck' (Representation)
        )
        
    def forward(self, x):
        return self.compressor(self.flatten(x))

# 2. Feeding a 28x28 image (Mock)
img = torch.randn(1, 1, 28, 28)
model = Encoder()

# 3. Get the 'Essence'
essence = model(img)
print(f"Original Data: 784 bits -> Essence: {essence.detach().numpy()[0]}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Representation Learning is the "Internal Translation" of AI. It turns the messy, high-dimensional reality of the world into a clean, geometric point in space, allowing models to compare meanings rather than just raw data bytes.</p>
    <ul>
      <li><strong>Reverse Image Search (Google Lens)</strong>: When you take a photo of a flower to identify it, Google doesn't compare the pixels of your photo to billions of others. Instead, it uses a pre-trained model to extract a "Representation Vector" (the essence of the flower). It then performs a high-speed search in "Latent Space" to find the closest neighbor. This turns a multi-petabyte search problem into a simple geometry problem.</li>
      <li><strong>Recommendation System Embeddings</strong>: Netflix and Spotify don't just see you as a list of movies; they represent your taste as a multi-dimensional coordinate. By mapping you and every movie into the same "Taste Space," the system can find the "Next Best Watch" by simply looking at which movie vectors are sitting right next to your user vector in the dark.</li>
    </ul>
    <p>Teacher's Final Word: Don't show the machine the pixels; show it the meaning. A good representation is worth a million raw bytes. Mastering the latent space is the difference between a model that merely memorizes data and one that truly understands the hidden mechanics of reality.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> How do we force the model to find these good representations? By comparing similar things! Explore <strong><a href="#/machine-learning/modern-ml/contrastive">Contrastive Learning</a></strong>.
    </div>
  `
};

