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
      <a href="#example-weather">Example 1: Weather Prediction</a>
      <a href="#example-asymmetry">Example 2: Asymmetry (P vs Q)</a>
      <a href="#example-uniform">Example 3: Approximation Penalty</a>
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

    <h2 id="example-weather">Example 1: Weather Prediction Accuracy</h2>
    <div class="example-box">
      <h4>Problem: Quantifying Prediction Error</h4>
      <p>True probability $P$: Sunny (0.8), Rainy (0.2). Model $Q$: Sunny (0.5), Rainy (0.5).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Sunny Component:</strong> $0.8 \cdot \log_2(0.8 / 0.5) \approx 0.542 \text{ bits}$</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Rainy Component:</strong> $0.2 \cdot \log_2(0.2 / 0.5) \approx -0.264 \text{ bits}$</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Summation:</strong> $D_{KL}(P \parallel Q) = 0.542 - 0.264 = 0.278 \text{ bits}$</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Interpretation:</strong> Using Model $Q$ to represent the weather results in an "information penalty" of <strong>0.278 bits</strong> per day compared to the optimal distribution $P$.
        </div>
      </div>
    </div>

    <h2 id="example-asymmetry">Example 2: The Asymmetry of Divergence</h2>
    <div class="example-box">
      <h4>Problem: Proving KL is not a Distance Metric</h4>
      <p>Calculate $D_{KL}(Q \parallel P)$ for the same distributions and compare with Example 1.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Sunny:</strong> $0.5 \cdot \log_2(0.5 / 0.8) \approx -0.339 \text{ bits}$</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Rainy:</strong> $0.5 \cdot \log_2(0.5 / 0.2) \approx 0.661 \text{ bits}$</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Total:</strong> $D_{KL}(Q \parallel P) = -0.339 + 0.661 = 0.322 \text{ bits}$</div></div>

      <div class="callout warning">
        <div class="callout-icon">⚠️</div>
        <div class="callout-body">
          <strong>Key Insight:</strong> $0.322 \neq 0.278$. KL Divergence is <strong>not a distance</strong> because it doesn't satisfy the symmetry property. This is why it's called a 'divergence'.
        </div>
      </div>
    </div>

    <h2 id="example-uniform">Example 3: Approximation Penalty</h2>
    <div class="example-box">
      <h4>Problem: Assuming Uniformity in Unbalanced Data</h4>
      <p>Suppose we use a **Uniform Distribution** $U$ to approximate an **unbalanced** True distribution $P = \{0.9, 0.1\}$.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Calculation:</strong> $D_{KL}(P \parallel U) = 0.9 \log_2(0.9/0.5) + 0.1 \log_2(0.1/0.5)$.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Evaluation:</strong> $0.9(0.84) + 0.1(-2.32) = 0.75 - 0.23 = 0.52 \text{ bits}$.</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Interpretation:</strong> The "cost" of assuming everything is equally likely is roughly **half a bit** of extra surprise per sample.
        </div>
      </div>
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
