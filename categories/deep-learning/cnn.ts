import { TopicSection } from '../../src/data/types';

export const cnnSection: TopicSection = {
  id: "cnn",
  title: "Convolutional Neural Networks (CNN)",
  description: "Deeper insight into convolutional layers, pooling, and the inductive bias for spatial and translation invariant data.",
  color: "#e3b341",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Vision</div>
      <h1>CNN: The Flashlight in the Dark</h1>
      <p>How do you recognize a <strong>Face</strong> in a 1,000,000-pixel image? An MLP would go insane trying to connect every pixel to every neuron. <strong>Convolutional Neural Networks (CNN)</strong> are the biological "Seeing" machines. They use <strong>Filters</strong> to scan the image for <strong>Edges, Shapes, and Textures</strong>, ignoring the noise and focusing on the <strong>Content</strong>.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>How do you recognize a <strong>Face</strong> in a 1,000,000-pixel image? An MLP would go insane trying to connect every single pixel to every single neuron—it’s too much noise. <strong>Convolutional Neural Networks (CNN)</strong> are the biological "Seeing" machines. They use <strong>Filters</strong> to scan the image for <strong>Edges, Shapes, and Textures</strong>, focusing on local patterns rather than global data. By sliding these mathematical windows across the pixels, the network learns to pay attention only to the "Content" while ignoring irrelevant details. This is the secret to <strong>Computer Vision</strong>: recognizing a cat whether it’s in the top-left or the bottom-right corner of the frame.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Convolution Operation</div>
      <p>A CNN layer computes the dot product between a local region of the input $I$ and a learnable kernel (filter) $K$. For a 2D input, the convolution at $(i, j)$ is:</p>
      <div class="math-block">
        $$(I * K)(i, j) = \sum_{m} \sum_{n} I(i+m, j+n) K(m, n)$$
      </div>
      <p>This is followed by a non-linear activation and a **Pooling** step, which provides **Translation Invariance** by mapping a local region to its maximum or average value:</p>
      <div class="math-block">
        $$y_{p,q} = \max_{i,j \in \mathcal{R}_{p,q}} \{ a_{i,j} \}$$
      </div>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a CNN as a <strong>"Sweeping Flashlight"</strong> or <strong>"Finding the Signature."</strong> 
        Imagine you are in a dark museum with a narrow 3x3 beam. You scan the room systematically. You don't see the whole statue at once; you see <strong>Features</strong>. Your brain notices a curved edge (a shoulder), then a vertical line (a leg), then a specific texture (stone). 
        The <strong>Filters</strong> in a CNN are these beams. They don’t care *where* in the image the feature is; they just scream "Vertical Line!" whenever they cross one. CNNs are built on <strong>Translation Invariance</strong>—the assumption that a signature pattern is meaningful regardless of its specific coordinates.
      </div>
    </div>
    
    <h2 id="pooling">Pooling: Reducing the Resolution</h2>
    <p>After we find the edges, we don't need the exact pixel locations anymore. We just need to know "Was there an edge in this general area?" 
    <strong>Max Pooling</strong> takes the <strong>Largest Value</strong> from a region. This makes the model robust to <strong>Small Shifts</strong> in the image (Translation Invariance).</p>

    <h2 id="bias">Translation Invariance</h2>
    <p>If you see a <strong>Cat in the top-left</strong> or a <strong>Cat in the bottom-right</strong>, it's still a cat. CNNs are specifically designed to ignore the <strong>Where</strong> and focus on the <strong>What</strong>. This is their core "Inductive Bias."</p>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Sweeping Flashlight</h2>
    
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
          CNNs work because they are <strong>Translation Invariant</strong>. A dragon in the left corner is the same as a dragon in the right corner. The filters find the "Pattern," not the specific pixels.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
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
  `
};
