import { TopicSection } from '../../src/data/types';

export const shannonEntropySection: TopicSection = {
  id: "shannon-entropy",
  title: "Shannon Entropy",
  description: "Shannon Entropy measures the average amount of 'information' or 'surprise' in a process.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📏 Info Theory · Shannon</div>
      <h1>Shannon Entropy</h1>
      <p>Developed by Claude Shannon in 1948, <strong>Shannon Entropy</strong> is a mathematical measure of the <strong>uncertainty</strong>, <strong>randomness</strong>, or <strong>disorder</strong> associated with a random variable. It quantifies the average amount of "information" or "surprise" contained in the outcomes of a process.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example-balls">Example 1: Picking Balls</a>
      <a href="#example-coins">Example 2: Fair vs. Biased Coins</a>
      <a href="#example-passwords">Example 3: Password Entropy</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Basic Probability:</strong> $P(X)$—the likelihood of an event occurring.</li>
        <li><strong>Logarithms:</strong> Specifically $\log_2$, as information is typically measured in <strong>bits</strong>.</li>
        <li><strong>Expected Value:</strong> The weighted average of all possible values.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>The core idea is that the "information content" of an event is inversely proportional to its probability.</p>
    <ul>
      <li><strong>Low Probability = High Surprise:</strong> Unlikely events (e.g., "It is snowing in the Sahara") carry a lot of information.</li>
      <li><strong>High Probability = Low Surprise:</strong> Certain events (e.g., "The sun rose today") carry almost no information.</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Entropy</strong> is simply the <strong>average surprise</strong> across all possible outcomes. If a dataset is "pure" (all one class), the entropy is 0. If classes are spread evenly, entropy is at its maximum.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>For a discrete random variable $X$ with possible outcomes $\{x_1, \dots, x_n\}$, the Entropy $H(X)$ is defined as:</p>
    <div class="math-block">
      $$H(X) = - \sum_{i=1}^{n} P(x_i) \log_2 P(x_i)$$
    </div>

    <div class="def-box">
      <div class="def-title">Step-by-Step Breakdown</div>
      <ol style="margin-top:20px; margin-bottom:0">
        <li><strong>Self-Information:</strong> The information in a single outcome is $I(x_i) = \log_2 \left( 1/P(x_i) \right) = -\log_2 P(x_i)$.</li>
        <li><strong>Weighting:</strong> Multiply this information by the probability of its occurrence: $P(x_i) \log_2 P(x_i)$.</li>
        <li><strong>Summation:</strong> Sum these values across all $n$ outcomes.</li>
        <li><strong>The Negative Sign:</strong> Probabilities are between 0 and 1, their logs are negative; the negative sign at the front ensures positive Entropy.</li>
      </ol>
    </div>

    <h2 id="example-balls">Example 1: Picking Balls from a Bag</h2>
    <div class="example-box">
      <h4>Problem: Non-Uniform Outcome Probability</h4>
      <p>A bag with <strong>4 balls</strong>: 3 are <strong>Red</strong> and 1 is <strong>Blue</strong>. Calculate the entropy of the picking process.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identify Probabilities:</strong> $P(\text{Red}) = 0.75$, $P(\text{Blue}) = 0.25$.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Apply Formula:</strong> $H(X) = -[0.75 \log_2(0.75) + 0.25 \log_2(0.25)]$.</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Solve:</strong> $H(X) \approx -[-0.311 - 0.5] = 0.811 \text{ bits}$.</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Interpretation:</strong> Low entropy because the distribution is biased toward Red. If there were 2 Red and 2 Blue, entropy would be exactly **1.0 bit** (maximum uncertainty).
        </div>
      </div>
    </div>

    <h2 id="example-coins">Example 2: Fair vs. Biased Coins</h2>
    <div class="example-box">
      <h4>Problem: Comparing Degrees of Uncertainty</h4>
      <p><strong>Coin A (Fair):</strong> $P(H) = 0.5, P(T) = 0.5$.</p>
      <p><strong>Coin B (Double-Headed):</strong> $P(H) = 1.0, P(T) = 0.0$.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Entropy A:</strong> $H(A) = -(0.5 \log_2 0.5 + 0.5 \log_2 0.5) = 1.0 \text{ bit}$.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Entropy B:</strong> $H(B) = -(1.0 \log_2 1.0 + 0 \log_2 0) = 0 \text{ bits}$.</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Geometric Insight:</strong> A fair coin flip provides exactly 1 bit of information. A double-headed coin provides <strong>zero</strong> information because the outcome is certain (zero surprise).
        </div>
      </div>
    </div>

    <h2 id="example-passwords">Example 3: Password Entropy</h2>
    <div class="example-box">
      <h4>Problem: Measuring Information Security</h4>
      <p>Compare the entropy of a 4-digit PIN ($0-9$) vs. a 4-character password (A-Z).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>PIN (Digits):</strong> Total $N = 10^4 = 10,000$. $H = \log_2(10,000) \approx 13.3 \text{ bits}$.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Password (Letters):</strong> Total $N = 26^4 = 456,976$. $H = \log_2(456,976) \approx 18.8 \text{ bits}$.</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Security Tip:</strong> Increasing the complexity of the character set (adding symbols) increases the <strong>Entropy per character</strong>, making the password statistically harder to brute-force.
        </div>
      </div>
    </div>

    <h2 id="implementation">Python Implementation</h2>
    <python-code>
import numpy as np

def calculate_entropy(probabilities):
    # Filter out zero probabilities to avoid log(0) errors
    probabilities = np.array(probabilities)
    probabilities = probabilities[probabilities > 0]
    
    entropy = -np.sum(probabilities * np.log2(probabilities))
    return entropy

# Example usage:
probs = [0.75, 0.25]
print(f"Entropy: {calculate_entropy(probs):.4f} bits")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Decision Trees:</strong> Used in <strong>Information Gain</strong> to decide feature splits.</li>
      <li><strong>Loss Functions:</strong> <strong>Cross-Entropy Loss</strong> is standard for classification tasks.</li>
      <li><strong>Feature Selection:</strong> Identifying which variables provide the most information about the target.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Shannon Entropy measures uncertainty in one variable. Now, explore how we compare distributions using <strong><a href="#/mathematics/information-theory/kl-divergence">KL Divergence</a></strong>.
    </div>
  `
};
