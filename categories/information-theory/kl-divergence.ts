import { TopicSection } from '../../src/data/types';

export const klDivergenceSection: TopicSection = {
  id: "kl-divergence",
  title: "KL Divergence",
  description: "KL Divergence measures the 'Information Loss' or 'Gap' between two probability distributions. It is an asymmetric measure of distance.",
  color: "#9C27B0",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Info Theory · Distance</div>
      <h1>KL Divergence: The Distribution Gap</h1>
      <p><strong>Kullback-Leibler (KL) Divergence</strong> (\(D_{KL}(P || Q)\)) measures how much information is lost when we use a "Surrogate" distribution \(Q\) to approximate the true distribution \(P\). In Machine Learning, it's the "Compass" that tells us how far our model's predictions are from reality.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Entropy</strong>: Measuring self-uncertainty.</li>
        <li><strong>Cross-Entropy</strong>: Measuring total information cost.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Cross-Entropy tells you the <strong>Total Cost</strong> of using a model to describe reality, but not all of that cost is your model’s fault. Some of it is just the inherent chaos (Entropy) of the data itself. <strong>KL Divergence</strong> (\(D_{KL}(P || Q)\)) is the <strong>Extra Cost</strong>—the pure, unadulterated inefficiency of your approximation. It acts as the mathematical compass that measures the "Information Loss" or the gap between your model's beliefs (\(Q\)) and the ground truth (\(P\)). If KL is zero, your model is a perfect clone of reality. If KL is high, your model is a poor surrogate. Critically, KL is <strong>Asymmetric</strong>; being surprised that a rare event is common is fundamentally different from being surprised that a common event is rare. It is the tactical measurement of how much "Inefficiency Tax" you pay for using a simplified model.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Relative Entropy & Distributional Divergence</div>
      <p>The **KL Divergence** $D_{KL}(P \parallel Q)$ measures the relative entropy of distribution $P$ with respect to $Q$. It quantifies how one probability distribution is different from a second, reference distribution:</p>
      <div class="math-block">
        $$D_{KL}(P \parallel Q) = \sum_{x \in \mathcal{X}} P(x) \log \frac{P(x)}{Q(x)}$$
      </div>
      <p>This measure is governed by the following core mathematical constraints:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Gibbs' Inequality</strong>: $D_{KL}(P \parallel Q) \ge 0$. The information loss is never negative. It is exactly zero if and only if $P = Q$.</li>
        <li><strong>Non-Symmetry</strong>: $D_{KL}(P \parallel Q) \neq D_{KL}(Q \parallel P)$. Approximating a complex reality with a simple model is not the same as the reverse. Thus, KL is a **Divergence**, not a metric.</li>
        <li><strong>Relation to Loss</strong>: $D_{KL}(P \parallel Q) = H(P, Q) - H(P)$. It is the "pure" inaccuracy of the model, stripped of the data's inherent entropy.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">In ML, we use KL divergence to force latent spaces to follow specific shapes (VAEs) and to transfer knowledge between models (Distillation).</p>
    </div>
    
    <h2 id="example-gap" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Normal vs. Uniform</h2>
    
      <h4>Problem: Comparing Two Global Shapes</h4>
      <p>True distribution \(P\) is centralized (Normal). Proxy \(Q\) is flat (Uniform). Calculate the "Gap."</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> For points where \(P(x)\) is high but \(Q(x)\) is low, \(\log(P/Q)\) is a large positive number.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Interpret:</strong> The KL Divergence will be high because the "Flat" proxy is a bad guess for the "Peaked" reality.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> KL Divergence provides a single number that summarizes the <strong>Structural Difference</strong> between these two shapes.
        </div>
      </div>
    

    <h2 id="example-compress" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Information Loss in Compression</h2>
    
      <h4>Problem: Downsampling High-Res Predictions</h4>
      <p>You have a 100-class Softmax layer, but you compress it into 10 buckets for efficiency.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> \(P\) is the original 100-class distribution. \(Q\) is the 10-bucket approximation.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Measure:</strong> The KL Divergence tells the engineer exactly how much "Information Resolution" they lost during compression.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> This is a key metric in <strong>Model Distillation</strong>. We try to force a small "Student" model's output to have a low KL Divergence with a large "Teacher" model's output.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

def calculate_kl(p, q):
    # p = True, q = Approximation
    # Filter out zeros to avoid log(0) or division by zero
    mask = (p > 0) & (q > 0)
    return np.sum(p[mask] * np.log(p[mask] / q[mask]))

p = np.array([0.4, 0.6]) # Reality
q = np.array([0.1, 0.9]) # Bad approximation

print(f"KL Divergence: {calculate_kl(p, q):.4f}")
print(f"Asymmetry check: {calculate_kl(q, p):.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>VAE (Variational Autoencoders)</strong>: Loss = Reconstruction + <strong>KL Divergence</strong>. The KL term forces the model to stay close to a "Normal" latent space.</li>
      <li><strong>Knowledge Distillation</strong>: Training smaller models to mimic the "Soft" probabilities of larger models.</li>
      <li><strong>T-SNE Visualization</strong>: Uses KL Divergence to match the high-dimensional neighborhood of data to a 2D map.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve completed the core mathematics sequence of <strong>Linear Algebra, Calculus, Probabilty, Statistics, & Information Theory</strong>. Ready to move into <strong>Machine Learning Architectures</strong>? Explore <strong><a href="#/supervised/basics">Supervised Learning</a></strong>.
    </div>
  `
};

