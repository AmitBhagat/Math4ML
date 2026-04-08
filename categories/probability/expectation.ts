import { TopicSection } from '../../src/data/types';

export const expectationSection: TopicSection = {
  id: "expectation",
  title: "Expectation (Expected Value)",
  description: "The Expected Value is the 'Average' outcome of a random variable over an infinite number of trials. It is the center of gravity of a distribution.",
  color: "#FF6F00",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Expectation</div>
      <h1>Expectation: The Long-term Average</h1>
      <p>The <strong>Expected Value</strong> \(\mathbb{E}[X]\) is the average outcome you would get if you repeated a random experiment infinitely many times. In Machine Learning, we optimize models to minimize the <strong>Expected Loss</strong>.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Random Variables</strong>: Discrete vs. Continuous.</li>
        <li><strong>Probability Distributions</strong>: Understanding weights (PMFs).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A Probability Distribution says: <em>"Anything could happen."</em> Expectation says: <em>"On average, this is what will happen."</em> It is the <strong>Balance Point</strong> of your distribution. If a distribution is a see-saw, the Expected Value is exactly where you would place the fulcrum to keep it level. In ML, every prediction is essentially an "Expected Value" calculated from the data.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Expected Value as a <strong>"Fair Bet."</strong> 
        If you play a game 1,000 times, you'll sometimes win big and sometimes lose. 
        Your <strong>Expectation</strong> is the number that tells you if, in the long run, you'll walk away with more money than you started with. 
        In ML, we don't care about a single "lucky" training batch; we care about the <strong>Expected Performance</strong> across all future data.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <p>For a discrete random variable \(X\) with values \(x_i\) and probabilities \(p_i\):</p>
    <div class="math-block">$$\mathbb{E}[X] = \sum_{i} x_i P(X = x_i)$$</div>
    <p><strong>Linearity:</strong> \(\mathbb{E}[aX + b] = a\mathbb{E}[X] + b\). The average of a sum is the sum of the averages!</p>

    <h2 id="example-payoff" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Long-term Average Payoff</h2>
    
      <h4>Problem: Evaluating a Lottery</h4>
      <p>A ticket costs $5. You have a 1% chance to win $400 and a 99% chance to win $0. What is your expectation?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> \(X \in \{400, 0\}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Calculate:</strong> \(\mathbb{E}[X] = (400 \times 0.01) + (0 \times 0.99) = 4\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Interpret:</strong> Your "Expected Payoff" is $4.</div>
        </div>
      </div>

      <div class="callout error">
        <div class="callout-icon">✕</div>
        <div class="callout-body">
          <strong>Result:</strong> Since the ticket costs $5 but only yields $4 on average, you will <strong>lose $1</strong> per ticket in the long run. The Expected Value is your reality check.
        </div>
      </div>
    

    <h2 id="example-weighted" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Weighted Sum of Features</h2>
    
      <h4>Problem: Finding the Center of Data</h4>
      <p>Data shows scores: [10, 10, 10, 50]. What's the expected score?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify Probabilities:</strong> \(P(10) = 0.75\); \(P(50) = 0.25\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Calculate:</strong> \(\mathbb{E}[X] = (10 \times 0.75) + (50 \times 0.25) = 7.5 + 12.5 = 20\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> 20 is the "Average" score. In Linear Regression, your prediction is essentially calculating this weighted expectation from the input features.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

# Outcomes and their probabilities
values = np.array([0, 10, 100])
probs = np.array([0.5, 0.4, 0.1]) # sum = 1.0

# Expected Value: Sum(x * p)
expected_val = np.sum(values * probs)

print(f"Mathematical Expectation: {expected_val}")

# Empirical check through simulation
simulated_trials = np.random.choice(values, size=100000, p=probs)
print(f"Simulated Average: {simulated_trials.mean():.2f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Cost Functions (Risk)</strong>: We minimize the <strong>Expected Loss</strong> (\(MSE\) or Cross-Entropy) because we want a model that is correct <em>on average</em>.</li>
      <li><strong>Reinforcement Learning</strong>: An agent chooses actions that maximize the <strong>Expected Reward</strong> over time.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Knowing the average is helpful. But how much do individual results "stray" from that average? Explore <strong><a href="#/mathematics/probability/variance">Variance</a></strong>.
    </div>
  `
};
