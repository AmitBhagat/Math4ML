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
  `
};
