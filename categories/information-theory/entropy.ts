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
    <p>Imagine you live in a desert where it never rains. If someone says, <em>"It's sunny today,"</em> you have learned <strong>Zero Information</strong>. You already knew that. But if they say, <em>"It's snowing,"</em> you have received a massive amount of information. <strong>Entropy</strong> is the weighted average of this "Surprise" across all possible outcomes.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Entropy as <strong>"How many Yes/No questions do I need to ask?"</strong> 
        If a variable has high entropy, it is unpredictable, and you need many questions to figure it out. 
        If it has low entropy, it's a "sure thing." 
        In ML, we want our models to move from high-entropy (guessing) to low-entropy (confident predictions).
      </div>
    </div>

    <h2 id="derivation">Formal Definition</h2>
    <p>For a discrete random variable \(X\) with values \(x_i\) and probabilities \(P(x_i)\), Entropy is:</p>
    <div class="math-block">$$H(X) = -\sum_{i} P(x_i) \log_2 P(x_i)$$</div>
    <p>The unit is <strong>Bits</strong> if using base-2, or <strong>Nats</strong> if using natural log (\(e\)).</p>

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
