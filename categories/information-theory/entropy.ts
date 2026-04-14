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
      <div class="premium-def-title">Formalism: The Expectation of Surprisal & The Boundary of Information</div>
      <p>Entropy is the mathematical "Chaos Meter." it quantifies the average amount of "Newness" or "Shock" in a stream of data.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine your probability distribution as a landscape. If there is a massive spike at one outcome (e.g., $P(A) = 0.99$), the landscape is highly predictable—when the event happens, you aren't surprised. Entropy in this state is near zero. However, if the landscape is perfectly flat (Uniform Distribution), your uncertainty is maximized. You have no idea where the next point will land, so every outcome provides the maximum possible "News." Geometrically, Entropy measures the "Spread" or "Smoothness" of your probability mass.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We start by defining the <strong>Information Content</strong> (or "Surprisal") of an individual event $x$. An event that is guaranteed ($p=1$) has 0 surprise, while an event that is impossible ($p \approx 0$) has infinite surprise. We use the negative log to model this relationship:</p>
      <div class="math-block">
        $$I(x) = -\log_2 P(x)$$
      </div>
      <p><strong>Entropy</strong> $H(X)$ is simply the <strong>Expected Value</strong> of this surprise across all possible outcomes. We calculate the sum of each outcome's surprise, weighted by how often it actually happens:</p>
      <div class="math-block">
        $$H(X) = \mathbb{E}[I(X)] = -\sum_{x \in \mathcal{X}} P(x) \log_2 P(x)$$
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, Entropy is our target for <strong>Reduction</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Decision Trees</strong>: A split is "Good" if it reduces the entropy of the child nodes. We want the nodes to be as "Pure" (low entropy) as possible.</li>
        <li><strong>Regularization</strong>: Sometimes we actually <strong>maximize</strong> entropy to keep a model from getting too overconfident too quickly (Maximum Entropy Principle).</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Entropy is units-dependent. If you use $\log_2$, you're measuring in <strong>Bits</strong>. If you use the natural log $\ln$ (common in deep learning math), you're measuring in <strong>Nats</strong>. Don't mix them up or your gradients will be scaled incorrectly.</p>
    </div>

    <visualizer topic="shannon-entropy" />
    
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
    <p>Entropy is the "Surprise Meter" of the universe. It measures how much "new" information is contained in a message, or how much uncertainty we have about a random event.</p>
    <ul>
      <li><strong>Decision Tree Splitting (Information Gain)</strong>: When a Decision Tree is trying to classify data, it uses entropy to find the most "Informative" question to ask. By calculating how much a split (e.g., "Is Salary > $50k?") reduces the total entropy of the dataset, the algorithm identifies the features that provide the most "Information Gain," allowing it to reach a correct prediction with the fewest possible questions.</li>
      <li><strong>Lossless Data Compression (ZIP files)</strong>: Entropy defines the absolute mathematical limit of how much we can shrink a file. If a file has 1 bit of entropy per character, you can never compress it smaller than 1 bit per character without losing information. It sets the "Floor" for every compression algorithm in existence, from JPEG images to simple text files.</li>
    </ul>
    <p>Teacher's Final Word: If you already know what's going to happen, there's no information there. Information is the measure of the unexpected. In AI, our job is to squeeze the chaos of the world through a model until only the predictable truths remain.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Entropy measures one distribution. But how do we measure the "Distance" between what our model predicts and the truth? Explore <strong><a href="#/mathematics/information-theory/cross-entropy">Cross-Entropy</a></strong>.
    </div>
  `
};


