import { TopicSection } from '../../src/data/types';

export const klDivergenceSection: TopicSection = {
  id: "kl-divergence",
  title: "KL Divergence",
  description: "KL Divergence, or Relative Entropy, measures how much one probability distribution differs from a reference distribution.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📏 Info Theory · KL Divergence</div>
      <h1>Kullback-Leibler (KL) Divergence</h1>
      <p><strong>Kullback-Leibler (KL) Divergence</strong>, often called <strong>Relative Entropy</strong>, is a statistical measure that quantifies how much one probability distribution (often the predicted distribution) differs from a second, reference probability distribution (the true distribution).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example">Illustrative Example</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Shannon Entropy:</strong> Understanding uncertainty in a single distribution.</li>
        <li><strong>Cross-Entropy:</strong> Total bits to represent $P$ using distribution $Q$.</li>
        <li><strong>Logarithms:</strong> Specifically the property $\log(a/b) = \log(a) - \log(b)$.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>While <strong>Entropy</strong> measures uncertainty of a single distribution, <strong>KL Divergence</strong> measures "distance" between two.</p>
    <ul>
      <li><strong>If $P = Q$:</strong> Divergence is <strong>0</strong>.</li>
      <li><strong>If $P \neq Q$:</strong> Divergence is <strong>positive</strong>.</li>
    </ul>
    
    <div class="callout warning">
      <div class="callout-icon">⚠️</div>
      <div class="callout-body">
        <strong>Asymmetry:</strong> KL Divergence is <strong>asymmetric</strong>: $D_{KL}(P || Q) \neq D_{KL}(Q || P)$. It is a "divergence," not a true distance metric.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>For discrete distributions $P$ and $Q$, KL Divergence from $Q$ to $P$ is:</p>
    <div class="math-block">
      $$D_{KL}(P \parallel Q) = \sum_{i} P(x_i) \log_2 \left( \frac{P(x_i)}{Q(x_i)} \right)$$
    </div>

    <div class="def-box">
      <div class="def-title">Relationship with Entropy</div>
      <p style="margin:0">KL Divergence is the difference between Cross-Entropy and Shannon Entropy:</p>
      <div class="math-block" style="margin-top:10px; margin-bottom:10px; background:transparent; border:none; padding:0;">
        $$D_{KL}(P \parallel Q) = H(P, Q) - H(P)$$
      </div>
      <p style="margin:0">It represents the "extra" bits required because our model $Q$ isn't perfect.</p>
    </div>

    <h2 id="example">Illustrative Example</h2>
    <div class="example-box">
      <h4>Scenario: Weather Prediction</h4>
      <p>True probability $P$: Sunny (0.8), Rainy (0.2). Model $Q$: Sunny (0.5), Rainy (0.5).</p>
      
      <p><strong>Step-by-Step Solution:</strong></p>
      <ol>
        <li><strong>Sunny:</strong> $0.8 \cdot \log_2(0.8 / 0.5) \approx 0.542$</li>
        <li><strong>Rainy:</strong> $0.2 \cdot \log_2(0.2 / 0.5) \approx -0.264$</li>
        <li><strong>Total:</strong> $D_{KL}(P \parallel Q) = 0.542 - 0.264 = 0.278 \text{ bits}$</li>
      </ol>
    </div>

    <h2 id="implementation">Python Implementation (NumPy)</h2>
    <python-code>
import numpy as np

def kl_divergence(p, q):
    """
    Computes KL Divergence D_KL(P || Q)
    """
    p = np.asarray(p)
    q = np.asarray(q)
    return np.sum(p * np.log2(p / q))

# True vs Predicted
P = [0.8, 0.2]
Q = [0.5, 0.5]

print(f"KL Divergence: {kl_divergence(P, Q):.4f} bits")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>VAEs:</strong> Forces latent space to be close to a Standard Normal distribution.</li>
      <li><strong>t-SNE:</strong> Minimizes difference between high and low dimensional distance distributions.</li>
      <li><strong>RL (PPO):</strong> Ensures new policy doesn't deviate too far from the old one.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Minimizing KL Divergence is mathematically equivalent to minimizing <strong><a href="#/mathematics/information-theory/cross-entropy">Cross-Entropy Loss</a></strong>, our next topic.
    </div>
  `
};
