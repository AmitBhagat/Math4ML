import { TopicSection } from '../../src/data/types';

export const informationTheoryExamplesSection: TopicSection = {
  id: "information-theory-examples",
  title: "Practical Examples",
  description: "Master the calculations and logic behind Entropy, Cross-Entropy, KL Divergence, and Perplexity with solved examples.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📝 Solved Examples · Info Theory</div>
      <h1>Information Theory: Practical Examples</h1>
      <p>Continuing with our GeeksforGeeks-style guide, here are practical examples to help you master the calculations and logic behind these concepts.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#entropy">1. Entropy Calculation</a>
      <a href="#cross-entropy">2. Cross-Entropy Loss</a>
      <a href="#kl-divergence">3. KL Divergence Example</a>
      <a href="#perplexity">4. LLM Application: Perplexity</a>
    </div>

    <h2 id="entropy">1. Example of Entropy Calculation</h2>
    <div class="example-box">
      <p><strong>Scenario:</strong> A biased coin has $P(\text{Heads}) = 0.8$ and $P(\text{Tails}) = 0.2$. Calculate the Entropy of this coin toss.</p>
      
      <p><strong>Solution:</strong></p>
      <ol>
        <li>$P(x_1) = 0.8 \rightarrow \log_2(0.8) \approx -0.322$</li>
        <li>$P(x_2) = 0.2 \rightarrow \log_2(0.2) \approx -2.322$</li>
        <li>$H(X) = -[(0.8 \times -0.322) + (0.2 \times -2.322)]$
          <div class="math-block">$$H(X) = -[-0.2576 - 0.4644] = 0.722 \text{ bits}$$</div>
        </li>
      </ol>
      <p><strong>Insight:</strong> If the coin were fair (0.5/0.5), entropy would be 1. Since it's biased, the uncertainty is lower.</p>
    </div>

    <h2 id="cross-entropy">2. Example of Cross-Entropy Loss</h2>
    <div class="example-box">
      <p><strong>Scenario:</strong> Image classifier for [Cat, Dog, Bird]. Target is <strong>Dog</strong>. Predictions: [0.1, 0.7, 0.2].</p>
      
      <p><strong>Solution:</strong></p>
      <ol>
        <li>True ($P$): [0, 1, 0]. Predicted ($Q$): [0.1, 0.7, 0.2].</li>
        <li>$L = -\sum P(x_i) \log Q(x_i) = -[0 \cdot \log(0.1) + 1 \cdot \log(0.7) + 0 \cdot \log(0.2)]$</li>
        <li>$L = -\log(0.7) \approx 0.357$</li>
      </ol>
      <p><strong>Insight:</strong> Only the probability of the *correct* class matters here. Higher confidence in the correct class reduces loss.</p>
    </div>

    <h2 id="kl-divergence">3. Example of KL Divergence</h2>
    <div class="example-box">
      <p><strong>Scenario:</strong> Weather model $Q$ predicts rain with 50% probability. True distribution $P$ shows it rains only 10% of the time.</p>
      <ul>
        <li>$P = [0.1, 0.9]$, $Q = [0.5, 0.5]$</li>
      </ul>
      
      <p><strong>Solution:</strong></p>
      <ol>
        <li>Rain term: $0.1 \cdot \log_2(0.1/0.5) \approx -0.2322$</li>
        <li>No Rain term: $0.9 \cdot \log_2(0.9/0.5) \approx 0.7632$</li>
        <li>$D_{KL} = -0.2322 + 0.7632 = 0.531 \text{ bits}$</li>
      </ol>
      <p><strong>Insight:</strong> This value represents the "penalty" from using the wrong distribution ($Q$) to describe reality ($P$).</p>
    </div>

    <h2 id="perplexity">4. LLM Application: Perplexity Example</h2>
    <div class="example-box">
      <p><strong>Scenario:</strong> Phrase: *"The capital of France is..."*</p>
      <ul>
        <li>Model A predicts **"Paris"** with 0.9 probability.</li>
        <li>Model B predicts **"Paris"** with 0.4 probability.</li>
      </ul>
      
      <p><strong>Solution:</strong></p>
      <ol>
        <li>Perplexity ($PP$) is approximately $1 / P(\text{correct_token})$.</li>
        <li><strong>Model A:</strong> $PP = 1 / 0.9 = 1.11$</li>
        <li><strong>Model B:</strong> $PP = 1 / 0.4 = 2.5$</li>
      </ol>
      <p><strong>Conclusion:</strong> Model A is better; lower perplexity means the model is "less surprised" by the truth.</p>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> Having mastered the information-theoretic foundations, you've completed the <strong>Information Theory</strong> module. Ready to dive into <strong>Discrete Mathematics</strong>?
    </div>
  `
};
