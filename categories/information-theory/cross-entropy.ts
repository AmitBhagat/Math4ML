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

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Core Theory:</strong> <strong>Cross-Entropy</strong> is the "Penalty for Ignorance." It tells you how many average bits you'll need to send if you use the <em>wrong</em> codebook ($Q$) for the <em>actual</em> events ($P$). In AI, your model is trying to synchronized its codebook with reality.
        </div>
      </div>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example-binary">Example 1: Binary Classification</a>
      <a href="#example-multiclass">Example 2: Multi-class Digit Recognition</a>
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
    <h2 id="example-binary">Example 1: Binary Classification (Cat vs. Dog)</h2>
    <div class="example-box">
      <h4>Problem: Penalizing Uncertainty in Predictions</h4>
      <p>True label $P$: $[1, 0]$ (It is 100% a Cat). Model prediction $Q$: $[0.9, 0.1]$ (High confidence Cat).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identify Components:</strong> $P(Cat)=1, P(Dog)=0$ and $Q(Cat)=0.9, Q(Dog)=0.1$.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Calculate:</strong> $H(P, Q) = -(1 \cdot \log_2 0.9 + 0 \cdot \log_2 0.1)$.</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Solve:</strong> $H(P, Q) = -(-0.152) = 0.152 \text{ bits}$.</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>ML Insight:</strong> If the model predicted $[0.6, 0.4]$ (Lower confidence), the cross-entropy would be higher ($\approx 0.737 \text{ bits}$), penalizing the model more for its uncertainty.
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Core Theory:</strong> <strong>Binary Cross-Entropy (BCE)</strong> is the "Sigmoid Match." Since there are only two outcomes, the formula simplifies to measuring how much the model's single $p$ value "misses" the 0 or 1 target. It is the gold standard for binary "Yes/No" classifiers.
        </div>
      </div>
    </div>

    <h2 id="example-multiclass">Example 2: Multi-class (Handwritten Digits)</h2>
    <div class="example-box">
      <h4>Problem: Efficiency in One-Hot Encoded Labels</h4>
      <p>True label for Digit '7': $P = [0, 0, \dots, 1, 0, 0]$ (1 at index 7). Model prediction $Q$ outputs a probability of $0.8$ for '7'.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Observation:</strong> In one-hot encoding, all $P_i = 0$ except for the true label index.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Calculation:</strong> Cross-entropy simplifies to just the negative log of the true class's predicted probability: $-\log_2(0.8)$.</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Result:</strong> $H(P, Q) \approx 0.322 \text{ bits}$.</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Interpretation:</strong> This shows why Cross-Entropy is so efficient for backpropagation—it only cares about the probability assigned to the **correct** answer.
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Core Theory:</strong> <strong>Categorical Cross-Entropy (CCE)</strong> is the "Softmax Alignment." Because of One-Hot encoding (where all labels except one are zero), the entire sum vanishes except for the one term corresponding to the true class. This makes it incredibly fast for training LLMs or Image classifiers with thousands of categories.
        </div>
      </div>
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
      <strong>Next Step:</strong> Having learned how to measure uncertainty and loss, let's look at <strong><a href="#/mathematics/information-theory/mutual-information">Mutual Information</a></strong> to see how variables share information.
    </div>
  `
};
