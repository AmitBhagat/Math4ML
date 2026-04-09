import { TopicSection } from '../../src/data/types';

export const gansSection: TopicSection = {
  id: "gans",
  title: "Generative Adversarial Networks (GAN)",
  description: "A framework where two neural networks—the Generator and the Discriminator—compete to create realistic synthetic data.",
  color: "#e3b341",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Generative</div>
      <h1>GANs: The Art Forger vs. The Detective</h1>
      <p>How do you teach a machine to paint a masterpiece? You don't give it a brush; you give it an <strong>Enemy</strong>. <strong>Generative Adversarial Networks (GAN)</strong> use a "Digital Duel" between two models to push the boundaries of what is real.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Until GANs arrived, computers were mostly "Analyzers." They could recognize cats, but they couldn't <strong>Imagine</strong> them. GANs changed this by introducing <strong>Competition</strong>. Instead of just trying to minimize an error score, we have two networks fighting each other. One (The Generator) tries to create fake data, while the other (The Discriminator) tries to spot the fakes. It's an <strong>Arms Race</strong>. As the detective gets better at spotting flaws, the forger is forced to become a genius. Eventually, the forger becomes so good that even the detective can't tell the difference between "True Reality" and "Synthetic Perfection."</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Adversarial Minimax Game</div>
      <p>A GAN consists of a Generator $G$ and a Discriminator $D$. $G$ maps a latent noise vector $\mathbf{z}$ to the data space, while $D$ estimates the probability that a sample came from the real data distribution rather than $G$. The training is a zero-sum game with the value function:</p>
      <div class="math-block">
        $$\min_G \max_D \mathcal{V}(D, G) = \mathbb{E}_{\mathbf{x} \sim p_{data}}[\log D(\mathbf{x})] + \mathbb{E}_{\mathbf{z} \sim p_{\mathbf{z}}}[\log(1 - D(G(\mathbf{z})))]$$
      </div>
      <p>At equilibrium, $G$ produces a distribution $p_g = p_{data}$, and $D(\mathbf{x}) = 1/2$ everywhere, meaning the discriminator can no longer distinguish real from fake.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of GANs as <strong>"The Art Forger and the Detective"</strong> or <strong>"Counterfeit Training."</strong> 
        Imagine a forger who starts by painting blobs. The detective says: "This is fake; forgeries don't have blue trees." 
        The forger learns: "Next time, no blue trees." 
        Through this constant feedback loop of rejection and adaptation, the forger learns the <strong>Mathematical Essence</strong> of a masterpiece without ever seeing a single "rule" about how to paint. 
        GANs are the math of <strong>Learning through Conflict.</strong>
      </div>
    </div>

    <h2 id="minimax">The Zero-Sum Game (Minimax)</h2>
    <p>Mathematically, we are solving a <strong>Minimax Game</strong>. The Discriminator tries to maximize its accuracy, while the Generator tries to minimize the chance the Discriminator is right.</p>
    
    <div class="premium-def-box">
      <div class="premium-def-title">The Value Function</div>
      <div class="math-block">$$\min_G \max_D V(D, G) = \mathbb{E}_{x \sim p_{data}}[\log D(x)] + \mathbb{E}_{z \sim p_z}[\log(1 - D(G(z)))]$$</div>
      <p class="text-xs opacity-70 mt-2">Where $D(x)$ is the probability that $x$ is real, and $G(z)$ is the forged image generated from random noise $z$.</p>
    </div>

    <h2 id="components">The Dynamic Duo</h2>
    <ul>
      <li><strong>The Generator (G):</strong> Takes random noise (a "Latent Vector") and transforms it into an image. It wants the Discriminator to output "Real."</li>
      <li><strong>The Discriminator (D):</strong> Takes an image and outputs a score from 0 (Fake) to 1 (Real). It wants to stay accurate.</li>
    </ul>

    <h2 id="gotchas">Mode Collapse: The "One Trick Pony"</h2>
    <p><strong>The Gotcha:</strong> Sometimes the forger finds one "loophole"—like a specific face that always fools the detective—and keeps painting only that face forever. This is <strong>Mode Collapse</strong>. The model stops being creative and becomes a <strong>Repetitive Photocopy Machine</strong>.</p>

    <h2 id="analogy">The "Art Forgery" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Forger</strong> in a dark basement. They've never seen a real $100 bill, but they keep sending samples to a <strong>Bank Teller</strong> (The Discriminator). 
        The Teller says: "Fake! Real bills have watermarks." 
        The Forger adds a watermark. 
        The Teller says: "Fake! The paper texture is wrong." 
        The Forger finds better paper. 
        <strong>Eventually, the Forger creates a bill so perfect the Teller can't distinguish it from the real thing. Both have become masters of their craft through pure competition.</strong>
      </div>
    </div>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Generating Faces</h2>
    
      <h4>Scenario: Training a GAN to imagine human faces</h4>
      <p>We start with a database of 100,000 real faces and a Generator that creates static noise.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Round 1:</strong> The Generator outputs a gray blur. The Discriminator says "FAKE!" instantly. (Loss is high for G).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Adjustment:</strong> The Generator tweaks its weights. It learns that "Skin Tones" are better than "Gray."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Progress:</strong> After 5,000 rounds, the Generator is making shapes that look like Eyes and Noses. The Discriminator has to look closer at the "Pore Texture" to spot the fakes.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Equilibrium:</strong> The Generator creates a HD face of a person who doesn't exist. The Discriminator says "Real." The game has reached a beautiful tie.</div>
        </div>
      </div>

    <h2 id="python">Implementation</h2>
    <python-code runnable="false" static-output="[Action] Initializing Adversarial Duel...\n[Setup] Generator: 784-dim MLP | Discriminator: Binary Classifier\n[Epoch 1] G-Loss: 4.8 | D-Loss: 0.2 (Detective is dominating)\n[Epoch 50] G-Loss: 1.2 | D-Loss: 0.6 (Forger is learning trickery)\n[Epoch 200] Equilibrium reached (p=0.5)\n[Result] High-fidelity synthetic faces successfully generated.">
import torch
import torch.nn as nn

# 1. The 'Art Forger' (Generator)
# Map z (noise) -> Image (e.g., 784 pixels)
generator = nn.Sequential(
    nn.Linear(100, 256),
    nn.ReLU(),
    nn.Linear(256, 784),
    nn.Tanh()
)

# 2. The 'Detective' (Discriminator)
# Map Image -> [0, 1] probability
discriminator = nn.Sequential(
    nn.Linear(784, 256),
    nn.LeakyReLU(0.2),
    nn.Linear(256, 1),
    nn.Sigmoid()
)

# 3. The 'Arms Race' (Training Loop Logic)
# Step A: Update D to be better at spotting reals/fakes
# Step B: Update G to fool the D more often
print("GAN Arms Race Initialized...")
print("Goal: Discriminate(Real) -> 1.0, Discriminate(Generate(Noise)) -> 0.0")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>GANs are the "Digital Duel" that creates synthetic perfection through pure competition. By pitting two models against each other, they push the boundaries of what a machine can imagine.</p>
    <ul>
      <li><strong>Creative Art and Design</strong>: GANs are used by designers to generate thousands of "Dreamscape" concepts for video games or architecture. Because the Generator is constantly trying to fool the Discriminator, it learns to produce images that are not just random noise, but hold the "Mathematical Essence" of real artistic style, lighting, and texture.</li>
      <li><strong>Data Augmentation for Medicine</strong>: In many rare diseases, there isn't enough real patient data (MRIs or X-rays) to train a model. GANs are used to create "Synthetic Patients"—realistic medical images that follow the exact biology of the disease. This anonymous, generated data allows doctors to train powerful AI detectors without compromising patient privacy.</li>
    </ul>
    <p>Teacher's Final Word: Conflict is the fastest route to genius. By giving the machine an "Enemy" to defeat, GANs have transformed AI from a cold analyzer into a creative force capable of imagining things that have never existed before.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Adversarial duels are powerful, but what if you could un-scramble noise instead? Explore <strong><a href="#/machine-learning/advanced-ml/diffusion-models">Diffusion Models</a></strong>.
    </div>
  `
};

