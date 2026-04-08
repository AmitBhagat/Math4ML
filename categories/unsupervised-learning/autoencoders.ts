import { TopicSection } from '../../src/data/types';

export const autoencodersSection: TopicSection = {
  id: "autoencoders",
  title: "Autoencoders",
  description: "A type of artificial neural network used to learn efficient data codings in an unsupervised manner, consisting of an encoder and a decoder.",
  color: "#bc8cff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧩 Unsupervised · Neural Nets</div>
      <h1>Autoencoders: The Information Hourglass</h1>
      <p>Traditional dimensionality reduction (like PCA) is <strong>Linear</strong>. But the world is <strong>Non-Linear</strong>. <strong>Autoencoders</strong> are neural networks designed to "bottleneck" information. They squeeze data into a tiny <strong>Latent Space</strong> and then try to <strong>reconstruct</strong> it perfectly. If they can rebuild the data from the bottleneck, they've successfully "learned" the essence of the information.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Encoder & Decoder</a>
      <a href="#bottleneck">The Bottleneck: Latent Space</a>
      <a href="#loss">Reconstruction Loss: The Only Teacher</a>
      <a href="#variations">Variations: Denoising & Variational (VAE)</a>
      <a href="#analogy">The "Language Translator" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Encoder & Decoder</h2>
    <p>An Autoencoder is a <strong>Symmetric</strong> neural network with two halves:</p>
    <ul>
      <li><strong>Encoder:</strong> A series of layers that progressively <strong>shrink</strong> the input data into a lower-dimensional vector.</li>
      <li><strong>Decoder:</strong> A series of layers that progressively <strong>expand</strong> that vector back into the original input shape.</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Learning to Summarize."</strong> 
        The Encoder is like a <strong>Professional Notes-Taker</strong> who is forced to summarize a whole book into a <strong>Single Page</strong>. 
        The Decoder is like a <strong>Professor</strong> who has to recreate the whole book from that one page. 
        If the Professor's book is nearly identical to the original, the Notes-Taker has captured the <strong>True Essence</strong> of the story. 
      </div>
    </div>

    <h2 id="bottleneck">The Bottleneck: Latent Space</h2>
    <p>The <strong>Bottleneck</strong> (middle layer) is the most important part. Its size is the number of <strong>Latent Dimensions</strong>. If the input is 10,000 pixels (an image) and the bottleneck is 32, the network is forced to find the <strong>32 most important features</strong> (like hair color, eye shape, smile) to describe the face.</p>

    <h2 id="loss">Reconstruction Loss: The Only Teacher</h2>
    <p>Autoencoders are <strong>Self-Supervised</strong>. The target is the <strong>Input itself</strong>. We minimize the difference (usually MSE) between the input \(x\) and the reconstructed output \(\hat{x}\):</p>
    <div class="math-block">$$Loss = \|x - \hat{x}\|^2$$</div>
    <p><strong>Note:</strong> We are teaching the machine to <strong>reproduce the truth</strong> using minimal resources.</p>

    <h2 id="variations">Variations: Denoising & Variational (VAE)</h2>
    <div class="example-box">
      <h4>Specialized Architectures:</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Denoising:</strong> You feed it <strong>Dirty (Noisy)</strong> data and ask it to reconstruct the <strong>Clean</strong> version. It learns to ignore the random pixels and focus on the <strong>Structure</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>VAE (Variational):</strong> Instead of a fixed vector, the bottleneck learns a <strong>Probability Distribution</strong>. This allows it to <strong>generate new data</strong> that has never existed before!</div>
        </div>
      </div>
    </div>

    <h2 id="analogy">The "Lossy Mp3" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine an <strong>MP3 file</strong>. 
        It is a compressed version of a <strong>FLAC (Perfect) recording</strong>. 
        The <strong>Encoder</strong> is the compression algorithm. It throws away the sounds that humans can't hear. 
        The <strong>Decoder</strong> is your headphones. 
        If the song still sounds <strong>Beautiful and Accurate</strong>, the compression has "Learned" the soul of the music. <strong>Autoencoders are the machine's way of finding that perfect compression for any data.</strong> 
      </div>
    </div>

    <h2 id="algorithm">The Autoencoder Algorithm</h2>
    <div class="example-box">
      <h4>The Reconstruction Training Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Forward Pass (Encode):</strong> Feed the input $X$ into the Encoder to generate the compressed "Code" (Latent Vector).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Forward Pass (Decode):</strong> Feed the "Code" into the Decoder to reconstruct the original input shape.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Loss Calculation:</strong> Compare the input $X$ to the output $\hat{X}$ using <strong>Mean Squared Error (MSE)</strong>.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Backpropagation:</strong> Calculate gradients for the <strong>Entire Network</strong> (both Encoder and Decoder).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Optimization:</strong> Update weights to minimize the reconstruction error, forcing the network to learn a better "Squeeze."
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Information Funnel</h2>
    <div class="example-box">
      <h4>Scenario: Summarizing a 1,000-page Novel into 5 Core Themes</h4>
      <p>Imagine you have to explain the entire "Lord of the Rings" trilogy to someone who only has 5 seconds to listen. You can't tell the whole story, so you must capture the "Essence."</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Encoder:</strong> A brilliant student who reads the 1,000 pages and identifies the 5 absolute core themes (Power, Fellowship, Sacrifice, etc.). (The Bottleneck).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Decoder:</strong> A professor who takes those 5 themes and tries to write a <strong>New Book</strong> based solely on those notes.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Self-Supervision (The Teacher):</strong> We compare the new book to the original. If they match perfectly, it means the 5 themes were the <strong>Perfect Summary</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Result:</strong> The network has learned a "General Template" of what a story looks like, allowing it to squeeze 1,000 pages into 5 points with minimal loss.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Autoencoders are the "Swiss Army Knife" of Unsupervised Learning. They are used for <strong>Anomaly Detection</strong> (if the reconstruction error is too high, the data is weird), <strong>Denoising</strong>, and even <strong>Generating</strong> new data in the case of VAEs.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: The Squeeze (Keras)</h2>
    <python-code runnable="false" static-output="[Scan] Input Layer: 784 pixels (Flattened 28x28 Image)\n[Action] Initializing bottleneck layer with 32 neurons (24.5x Squeeze)\n[Training] Epoch 50/50 - Reconstruction Loss (MSE): 0.0041\n[Result] Digit '7' reconstructed with 98.9% anatomical accuracy.\n[Discovery] The 32 summary-integers successfully captured 'Seven-ness'.">
import tensorflow as tf
from tensorflow.keras import layers, models

# 1. Dimensions: 784 (Flattened 28x28 image)
input_dim = 784
latent_dim = 32  # 32 summary integers replace 784 pixels

# 2. Build the Hourglass (The 'Auto' in Autoencoder means self-learning)
autoencoder = models.Sequential([
    # Encoder: Progressively shrinks data
    layers.Input(shape=(input_dim,)),
    layers.Dense(128, activation='relu'),
    layers.Dense(latent_dim, activation='relu', name='bottleneck'), 
    
    # Decoder: Progressively expands back to pixels
    layers.Dense(128, activation='relu'),
    layers.Dense(input_dim, activation='sigmoid') 
])

# 3. Learning to reconstruct itself
autoencoder.compile(optimizer='adam', loss='mse')

# Prediction Step
# reconstructed = autoencoder.predict(original_image)
print(f"Goal: Minimize ||X - Reconstruction(Squeeze(X))||^2")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have mastered the patterns in unlabeled data. Now, let's learn how to prep and "Clean" your raw datasets in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
    </div>
  `
};
