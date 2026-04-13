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

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The First Moment & The Center of Mass</div>
      <p>Expectation is the "Average Truth" of a distribution. It’s the single number that best summarizes where the probability "lives."</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine a probability distribution as a physical object made of variable-density material. If you were to place this object on a see-saw, the <strong>Expected Value</strong> is the exact location of the <strong>Fulcrum</strong> (the balance point). It is the mathematical "Center of Mass" of the probability. If you nudge the fulcrum even slightly to the left or right, the entire distribution would tip over.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We derive the expectation by summing up every possible outcome $x$, weighted by how likely it is to occur. For a discrete variable $X$:</p>
      <div class="math-block">
        $$\mathbb{E}[X] = \sum_{x \in \mathcal{X}} x \cdot P(X = x)$$
      </div>
      <p>As our samples become more granular and the distribution becomes continuous, this sum transforms into a Riemann integral:</p>
      <div class="math-block">
        $$\mathbb{E}[X] = \int_{-\infty}^{\infty} x f(x) dx$$
      </div>
      <p>This is often called the <strong>First Moment</strong> about the origin.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, we live and die by <strong>Linearity of Expectation</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Independence Not Required</strong>: $\mathbb{E}[X + Y] = \mathbb{E}[X] + \mathbb{E}[Y]$. This holds even if the variables are highly correlated—a property we use to simplify complex loss functions.</li>
        <li><strong>Empirical Risk</strong>: Since we don't know the true distribution $f(x)$, we approximate the expectation using the <strong>Sample Mean</strong>: $\hat{\mathbb{E}}[f] = \frac{1}{N} \sum f(x_i)$. This is the foundation of training via Stochastic Gradient Descent.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: The Expected Value is not necessarily the "Most Likely" value. If you roll a die, the expectation is 3.5—a number that is physically impossible to roll. Don't confuse the "Center of Mass" with an individual outcome.</p>
    </div>
    
    <visualizer topic="expectation" />


    
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
      <li><strong>Risk Analysis in FinTech (Loan Defaults)</strong>: When a bank uses AI to decide if you get a loan, it isn't just asking "Will this person pay?" It is calculating the <strong>Expected Loss</strong>. If there is a 5% chance of losing $100,000 and a 95% chance of making $5,000 in interest, the expected value is actually negative (-\$250). Despite the high probability of success, the "Expectation" tells the AI that this is a bad bet in the long run.</li>
      <li><strong>Multi-Armed Bandits (Recommendation Engines)</strong>: Netflix or YouTube use "Expectation" to decide which video to show you next. The algorithm estimates the <strong>Expected Reward</strong> (likelihood you'll click) for several videos. It constantly balances "Exploitation" (showing you what has a high expected reward) and "Exploration" (trying a new video to update its expected reward). This ensures the model doesn't get stuck in a loop of showing you the same three things forever.</li>
    </ul>
    <p>Teacher's Final Word: Expectation is your reality check. In AI, we don't care about the lucky one-off success; we care about the "Aggregate Truth." We build models to maximize the expected good and minimize the expected bad. It's the math of staying in business.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Knowing the average is helpful. But how much do individual results "stray" from that average? Explore <strong><a href="#/mathematics/probability/variance">Variance</a></strong>.
    </div>
  `
};


