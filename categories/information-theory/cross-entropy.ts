import { TopicSection } from '../../src/data/types';

export const crossEntropySection: TopicSection = {
  id: "cross-entropy",
  title: "Cross-Entropy",
  description: "Cross-Entropy measures the difference between two probability distributions and is the standard loss function for multi-class classification.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📏 Info Theory · Cross-Entropy</div>
      <h1>Cross-Entropy</h1>
      <p><strong>Cross-Entropy</strong> measures the difference between two probability distributions: the <strong>true distribution</strong> ($P$) and the <strong>predicted distribution</strong> ($Q$). It is the primary objective function used in Neural Networks for classification.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#relationship">Relationship to KL Divergence</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Shannon Entropy:</strong> Understanding uncertainty in a single distribution.</li>
        <li><strong>KL Divergence:</strong> Measuring the "distance" between two distributions.</li>
        <li><strong>Logarithms:</strong> Specifically the property $\log(a/b) = \log(a) - \log(b)$.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>In Machine Learning, we often have a true distribution $P$ (the labels) and a predicted distribution $Q$ (the model's output). Cross-Entropy tells us how many bits we need to represent events from $P$ using a code optimized for $Q$.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Relationship to KL Divergence:</strong> Since the true distribution $P$ is fixed, minimizing Cross-Entropy is mathematically equivalent to minimizing KL Divergence.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>For discrete probability distributions $P$ and $Q$ defined on the same probability space, the Cross-Entropy $H(P, Q)$ is defined as:</p>
    <div class="math-block">
      $$H(P, Q) = -\sum_{i} P(x_i) \log_2 Q(x_i)$$
    </div>

    <h2 id="relationship">Relationship from Entropy</h2>
    <p>We can also express KL Divergence in terms of Cross-Entropy and Shannon Entropy:</p>
    <div class="math-block">
      $$H(P, Q) = H(P) + D_{KL}(P \parallel Q)$$
    </div>
    <p>In simple terms: <strong>Cross-Entropy = (Actual bits needed for $P$) + (Extra bits required because model $Q$ isn't perfect).</strong></p>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Multi-class Classification:</strong> Standard loss function (with Softmax) for neural networks.</li>
      <li><strong>Language Modeling:</strong> Used in pre-training LLMs for next-token prediction.</li>
      <li><strong>Information Gain:</strong> Related to how decision trees split features.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Having learned how to measure uncertainty and loss, let's look at <strong>Mutual Information</strong> to see how variables share information.
    </div>
  `
};
