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
  `
};
