import { TopicSection } from '../../src/data/types';

export const entropySection: TopicSection = {
  id: "entropy",
  title: "Entropy",
  description: "Entropy is a measure of the average 'Surprise' or 'Uncertainty' in a random variable. It is the fundamental limit of data compression.",
  color: "#9C27B0",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Info Theory · Entropy</div>
      <h1>Entropy: The Measure of Surprise</h1>
      <p><strong>Entropy</strong> (\(H\)) is the mathematical way we measure <strong>Uncertainty</strong>. It tells us how much "New Information" we receive, on average, from an outcome. If an event is 100% predictable, its entropy is zero—it contains no news.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Probability Distributions</strong>: Logarithms and PMFs.</li>
        <li><strong>Binary Units (Bits)</strong>: Information measured in base-2.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p><strong>Entropy</strong> (\(H\)) is the mathematical unit of <strong>Uncertainty</strong>. In the natural world, information is essentially "Surprise." If I tell you it’s sunny in the middle of a desert, I have given you zero information because you already knew that—the outcome had no surprise. But if I tell you it’s snowing in that same desert, the information content is massive because the event is so rare and unexpected. Entropy is the weighted average of this surprise across every possible outcome of a system. It defines the fundamental limit of how much we can compress data; it is the tactical measurement of how much "News" a random variable actually contains. In machine learning, our goal is often to move from a state of high entropy (guessing randomly) to a state of low entropy (confident, accurate predictions).</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Shannon Information Content</div>
      <p>The **Shannon Entropy** $H(X)$ of a discrete random variable $X$ with set of possible outcomes $\mathcal{X}$ and probability mass function $P(x)$ is the expected value of the self-information:</p>
      <div class="math-block">
        $$H(X) = -\sum_{x \in \mathcal{X}} P(x) \log_b P(x)$$
      </div>
      <p>This measurement is defined by the following mathematical axioms:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Self-Information</strong>: The "Surprise" of an individual outcome is $-\log P(x)$. Rare events have high surprise.</li>
        <li><strong>Units</strong>: If $b=2$, the unit is **Bits** (standard in CS). If $b=e$, the unit is **Nats** (standard in physics/continuous math).</li>
        <li><strong>Maximization</strong>: $H(X)$ is maximized when all outcomes are equally likely ($P(x) = 1/|\mathcal{X}|$), indicating total uncertainty.</li>
        <li><strong>Minimization</strong>: $H(X) = 0$ if and only if one outcome has probability 1. The result is perfectly predictable ("No news").</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">In ML, we use entropy to measure the pure "chaos" of a sample. By reducing entropy through splits (Decision Trees), the model extracts information from the noise.</p>
    </div>
    
    <div class="callout tip">

    <h2 id="example-coin" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Fair vs. Biased Coin</h2>
    
      <h4>Problem: Comparing Uncertainty Levels</h4>
      <p>Compare the entropy of a fair coin (\(p=0.5\)) vs. a heavily biased coin (\(p=0.9\)).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Fair Coin:</strong> \(H = -(0.5 \log_2 0.5 + 0.5 \log_2 0.5) = -(0.5(-1) + 0.5(-1)) = 1 \text{ bit}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Biased Coin:</strong> \(H = -(0.9 \log_2 0.9 + 0.1 \log_2 0.1) \approx 0.47 \text{ bits}\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> The fair coin has <strong>Maximum Entropy</strong> (1 bit). The biased coin is more predictable, so it carries less information (~0.47 bits). Prediction is easier when entropy is lower!
        </div>
      </div>
    

    <h2 id="example-surprise" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Surprise of Rare Events</h2>
    
      <h4>Problem: Information in Weather Warnings</h4>
      <p>Outcomes: [Sunny (90%), Rain (9%), Snow (1%)]. Calculate total entropy.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> "Sunny" has low surprise; "Snow" has massive surprise.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Weighted Sum:</strong> Snow contributes \(0.01 \times \log_2(100) \approx 0.06\) bits. Sunny contributes \(0.9 \times \log_2(1.1) \approx 0.13\) bits.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Sum:</strong> Total H \(\approx 0.5\) bits.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Even though the "Snow" event is tiny, its <strong>Information Content</strong> is huge. Entropy balances the impact of a rare event against its low frequency.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

def calculate_entropy(probabilities):
    # Filter out zero probabilities to avoid log(0)
    probs = probabilities[probabilities > 0]
    return -np.sum(probs * np.log2(probs))

fair_coin = np.array([0.5, 0.5])
biased_coin = np.array([0.9, 0.1])

print(f"Fair Coin Entropy: {calculate_entropy(fair_coin):.2f} bits")
print(f"Biased Coin Entropy: {calculate_entropy(biased_coin):.2f} bits")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Decision Trees</strong>: Algorithms like ID3 use <strong>Information Gain</strong> (reduction in entropy) to decide which feature to split on.</li>
      <li><strong>Model Confidence</strong>: We check the entropy of a Softmax output; if it's high, the model is "confused" between many classes.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Entropy measures one distribution. But how do we measure the "Distance" between what our model predicts and the truth? Explore <strong><a href="#/mathematics/information-theory/cross-entropy">Cross-Entropy</a></strong>.
    </div>
  `
};

