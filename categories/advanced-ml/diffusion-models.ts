import { TopicSection } from '../../src/data/types';

export const diffusionModelsSection: TopicSection = {
  id: "diffusion-models",
  title: "Diffusion Models",
  description: "State-of-the-art generative models that create data by iteratively removing noise from a chaotic signal.",
  color: "#FF9800",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎨 Advanced ML · Generative</div>
      <h1>Diffusion Models: The Art of Denoising</h1>
      <p>How do you create a masterpiece from a pile of static? <strong>Diffusion Models</strong> (the engine behind DALL-E and Midjourney) work by first <strong>Destroying</strong> an image with noise, and then learning the impossible trick of <strong>Recovering</strong> it from the chaos.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Most generative models (like GANs) try to generate an image in one "giant leap." Diffusion Models take a "Slow and Steady" approach. Imagine you drop a drop of ink into a glass of water. Over time, the ink spreads out (Diffuses) until the water is a uniform gray blur. This is easy—it's Entropy. But what if you could record that process and <strong>Play it in Reverse</strong>? What if you could watch the gray water and magically pull the ink back into a single droplet? That is what a Diffusion Model does: it learns to <strong>Un-scramble</strong> the universe.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Reversing Brownian Motion</div>
      <p>Diffusion models learn the data distribution $p(\mathbf{x}_0)$ by reversing a fixed Markov chain that transforms data into noise. The process involves two components:</p>
      <div class="math-block">
        $$\text{Forward Process: } q(\mathbf{x}_t | \mathbf{x}_{t-1}) = \mathcal{N}(\mathbf{x}_t; \sqrt{1 - \beta_t} \mathbf{x}_{t-1}, \beta_t \mathbf{I})$$
        $$\text{Reverse Process: } p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t) = \mathcal{N}(\mathbf{x}_{t-1}; \mu_\theta(\mathbf{x}_t, t), \Sigma_\theta(\mathbf{x}_t, t))$$
      </div>
      <p>The network is trained to optimize the variational upper bound, typically simplified to predicting the noise $\epsilon$ injected at step $t$:</p>
      <div class="math-block">
        $$\mathcal{L}_{\text{simple}}(\theta) = \mathbb{E}_{\mathbf{x}_0, \epsilon, t} \left[ \| \epsilon - \epsilon_\theta(\sqrt{\bar{\alpha}_t} \mathbf{x}_0 + \sqrt{1 - \bar{\alpha}_t}\epsilon, t) \|^2 \right]$$
      </div>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Diffusion Models as <strong>"The Sculptor in the Fog"</strong> or <strong>"The Un-scrambling Egg."</strong> 
        Imagine you have a beautiful sandcastle. A strong wind blows and turns it into a flat, characterless pile of sand (The Forward Process). 
        The Diffusion Model is a genius who looks at the pile of sand and knows exactly where each grain used to be. It gently pushes the grains back, bit by bit, until the castle reappears. 
        It doesn't "know" what a castle is; it just knows <strong>How to remove the Wind</strong> (The Noise) from the sand.
      </div>
    </div>

    <h2 id="forward-process">The Forward Process (Injection)</h2>
    <p>In the Forward Process, we take a clear image $x_0$ and slowly add <strong>Gaussian Noise</strong> in $T$ steps until there is nothing left but pure white noise $x_T$. This is a Markov Chain where each step is predictable.</p>
    
    <div class="premium-def-box">
      <div class="premium-def-title">Noise Addition Formula</div>
      <div class="math-block">$$q(x_t | x_{t-1}) = \mathcal{N}(x_t; \sqrt{1-\beta_t}x_{t-1}, \beta_t \mathbf{I})$$</div>
      <p class="text-xs opacity-70 mt-2">Where $\beta_t$ is the noise schedule that controls how much "static" we add at each step $t$.</p>
    </div>

    <h2 id="reverse-process">The Reverse Process (Recovery)</h2>
    <p>This is where the Deep Learning happens. We train a Neural Network (usually a <strong>U-Net</strong>) to look at a noisy image $x_t$ and predict exactly how much noise was added at that specific step. By subtracting that predicted noise, we get $x_{t-1}$. Repeat this 1,000 times, and a clear image emerges from nothingness.</p>

    <h2 id="guidance">The Magic of Text Guidance</h2>
    <p>How do we tell it to draw an "Astronaut on a Horse"? We "Condition" the denoising process. At every step, the model looks at the noise but also listens to the <strong>Text Embedding</strong>. The text acts like a <strong>Magnetic Pull</strong>, nudging the denoising process toward pixels that match the description.</p>

    <h2 id="gotchas">The "Speed" Gotcha</h2>
    <p><strong>The Headache:</strong> Because Diffusion Models have to run 100+ or 1,000+ steps of a neural network just to get one image, they are <strong>Very Slow</strong> compared to GANs. This is why "Latent Diffusion" (Stable Diffusion) was such a breakthrough—it does the "Un-scrambling" in a compressed Mathematical Space instead of raw pixels.</p>

    <h2 id="analogy">The "Un-scrambling Egg" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you have a <strong>Scrambled Egg</strong>. 
        In the "Forward" process, you watch the egg being stirred into a yellow mush. 
        The Diffusion Model is a <strong>Time-Reversal Machine</strong>. It looks at the mush and says: "At this exact micro-second, the yolk moved 1mm to the left." 
        It undoes a million tiny stir-strokes. By the end, you have a <strong>Perfect, Raw Egg</strong> back in its shell. 
        <strong>Generation is just the art of Undo-ing Chaos.</strong>
      </div>
    </div>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Creating a Digital Portrait</h2>
    
      <h4>Scenario: Generating an Image from Pure Static</h4>
      <p>A user types "A cyberpunk city at night." The model starts with a screen of random "snow" (like an old TV with no signal).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Initialization:</strong> The model generates $x_T$ (pure noise). There is zero information here.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Text Compass:</strong> The text prompt "Cyberpunk City" creates a "Gravity Field." It tells the model: "When you remove noise, favor Neon Blue and Dark Purple shapes."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Iterative Refinement:</strong> Step 999: A few vague blobs appear. Step 500: Lines of buildings emerge. Step 10: Rain and neon reflections become sharp.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Final Render:</strong> Step 0: The noise is gone. We are left with a high-fidelity image that never existed before.</div>
        </div>
      </div>

    <h2 id="python">Implementation</h2>
    <python-code static-output="[Scan] Input: Gaussian Noise (Mean=0, Std=1)\n[Action] Running Reverse Diffusion Markov Chain (T=1000)...\n[Predict] U-Net predicting noise kernel at step t=800...\n[Update] Noise subtracted. Structural SNR increasing...\n\n[Status] Image Manifold reached at t=0.\n[Visual] Signal recovered from 100% entropy.">
import torch
import numpy as np

# Conceptual 'Denoising' Step
def denoise_step(x_t, predicted_noise, beta_t):
    """
    Simulates one step of the Reverse Diffusion process.
    x_{t-1} = 1/sqrt(alpha_t) * (x_t - (beta_t/sqrt(1-alpha_bar_t)) * noise)
    """
    # Simplified logic for visualization
    alpha_t = 1 - beta_t
    x_prev = (1 / np.sqrt(alpha_t)) * (x_t - beta_t * predicted_noise)
    return x_prev

# 1. Start with Total Chaos (Pure Noise)
pure_noise = np.random.normal(0, 1, size=(64, 64))

# 2. Suppose our U-Net predicts the noise in the chaos
# (In a real model, this is a multi-million parameter neural net)
mock_predicted_noise = np.random.normal(0, 0.1, size=(64, 64))

# 3. Take one step back toward 'Reality'
cleaned_image = denoise_step(pure_noise, mock_predicted_noise, beta_t=0.01)

print(f"Noise Variance (Start): {np.var(pure_noise):.4f}")
print(f"Noise Variance (After 1 Step): {np.var(cleaned_image):.4f}")
print("\n[Result] The 'Temperature' of the data is dropping as we find structure.")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Diffusion is the modern king, but how did we get here? Explore the competitive duo: <strong><a href="#/machine-learning/deep-learning/gans">Generative Adversarial Networks (GANs)</a></strong>.
    </div>
  `
};
