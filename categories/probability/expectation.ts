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
    <p>A Probability Distribution tells you what *could* happen, but the Expectation tells you what *will* happen if you play the long game. It is the "Balance Point" of your distribution. If a distribution is a see-saw, the Expected Value is exactly where you would place the fulcrum to keep it level. In Machine Learning, we don't care about a single "lucky" training batch; we care about the <strong>Aggregate Truth</strong>. We build models that minimize <strong>Expected Loss</strong> because we want the model to be correct across the entire lifetime of its deployment, not just once.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Weighted Average</div>
      <p>The **Expected Value** (or first moment) of a random variable $X$ represents the long-run average value of repetitions of the experiment. It is calculated by weighing each possible outcome by its probability:</p>
      <div class="math-block">
        $$\mathbb{E}[X] = \int_{\Omega} X(\omega) dP(\omega)$$
      </div>
      <p>In practical settings, this generalizes to discrete and continuous forms:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Discrete</strong>: $\mathbb{E}[X] = \sum_i x_i P(X = x_i)$.</li>
        <li><strong>Continuous</strong>: $\mathbb{E}[X] = \int_{-\infty}^\infty x f(x) dx$.</li>
        <li><strong>Law of the Unconscious Statistician</strong>: $\mathbb{E}[g(X)] = \int g(x) f(x) dx$.</li>
        <li><strong>Linearity</strong>: $\mathbb{E}[aX + bY] = a\mathbb{E}[X] + b\mathbb{E}[Y]$. This property holds even if $X$ and $Y$ are dependent.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">In ML training, the "Risk" we minimize is the expected value of the loss function over the data generating distribution.</p>
    </div>
    
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
    <p>The Expected Value is the "North Star" of Machine Learning. It represents the outcome we can count on when we play the long game over millions of data points.</p>
    <ul>
      <li><strong>Risk Analysis in FinTech (Loan Defaults)</strong>: When a bank uses AI to decide if you get a loan, it isn't just asking "Will this person pay?" It is calculating the **Expected Loss**. If there is a 5% chance of losing $100,000 and a 95% chance of making $5,000 in interest, the expected value is actually negative (-\$250). Despite the high probability of success, the "Expectation" tells the AI that this is a bad bet in the long run.</li>
      <li><strong>Multi-Armed Bandits (Recommendation Engines)</strong>: Netflix or YouTube use "Expectation" to decide which video to show you next. The algorithm estimates the **Expected Reward** (likelihood you'll click) for several videos. It constantly balances "Exploitation" (showing you what has a high expected reward) and "Exploration" (trying a new video to update its expected reward). This ensures the model doesn't get stuck in a loop of showing you the same three things forever.</li>
    </ul>
    <p>Teacher's Final Word: Expectation is your reality check. In AI, we don't care about the lucky one-off success; we care about the "Aggregate Truth." We build models to maximize the expected good and minimize the expected bad. It's the math of staying in business.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Knowing the average is helpful. But how much do individual results "stray" from that average? Explore <strong><a href="#/mathematics/probability/variance">Variance</a></strong>.
    </div>
  `
};

