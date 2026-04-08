import { TopicSection } from '../../src/data/types';

export const randomVariablesSection: TopicSection = {
  id: "random-variables",
  title: "Random Variables",
  description: "A Random Variable is a mathematical function that maps the outcomes of a random experiment to real numbers. It is the fundamental object of probability.",
  color: "#FF6F00",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Random Variables</div>
      <h1>Random Variables: Quantifying Chance</h1>
      <p>A <strong>Random Variable</strong> (RV) is the bridge between actual physical events (like flipping a coin) and the world of numbers. In Machine Learning, every data point is a realization of some underlying random variable.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Definition</a>
      <a href="#example-coin">Example 1: Discrete (Coin Flips)</a>
      <a href="#example-wait">Example 2: Continuous (Wait Times)</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Sample Space</strong>: The set of all possible outcomes.</li>
        <li><strong>Basic Functions</strong>: Mapping inputs to outputs.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>Math doesn't like "Heads" or "Tails." It likes 0s and 1s. A Random Variable is the "Translator" that takes an outcome from the messy real world and turns it into a number we can actually perform math on. Without them, we couldn't calculate averages, variances, or train any model.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of a Random Variable as a <strong>Scorecard</strong>. 
        The experiment happens behind a curtain (e.g., a customer buys a product). 
        The Random Variable is the number on the scorecard (e.g., the price they paid). 
        Different customers (outcomes) result in different scores.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <p>A Random Variable \(X\) is a function \(X: S \to \mathbb{R}\) that maps every element in the sample space \(S\) to a real number. We categorize them into two types:</p>
    <ul>
      <li><strong>Discrete:</strong> Outcomes you can count (e.g., number of clicks, dice rolls).</li>
      <li><strong>Continuous:</strong> Outcomes you can measure (e.g., height, time, temperature).</li>
    </ul>

    <h2 id="example-coin">Example 1: Discrete (Coin Flips)</h2>
    <div class="example-box">
      <h4>Problem: Mapping Binary Outcomes</h4>
      <p>You flip a coin 3 times. Let \(X\) be the number of Heads. Find the values \(X\) can take.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identify Sample Space:</strong> \(S = \{HHH, HHT, HTH, THH, TTH, THT, HTT, TTT\}\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Mapping:</strong> If outcome is \(TTH\), \(X(TTH) = 1\). If \(HHH\), \(X(HHH) = 3\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Range:</strong> \(X \in \{0, 1, 2, 3\}\).</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We've successfully converted 8 abstract outcomes into a simple set of numbers. This is the first step toward calculating the "Average" number of heads.
        </div>
      </div>
    </div>

    <h2 id="example-wait">Example 2: Continuous (Wait Times)</h2>
    <div class="example-box">
      <h4>Problem: Tracking Continuous Events</h4>
      <p>Let \(Y\) be the time (in minutes) you wait for a bus. What values can \(Y\) take?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identify:</strong> You can wait 2.5 minutes, 2.51 minutes, or forever.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Set:</strong> \(Y \in [0, \infty)\).</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Unlike the coin flip, we can't list every possible wait time. This makes it a **Continuous Random Variable**, which we handle using Probability Density Functions (PDFs) instead of simple lists.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

# Simulate a Discrete RV: Number of Heads in 10 flips
def simulate_coin_flips(n=10):
    return np.random.randint(0, 2, size=n).sum()

print(f"Outcome of X: {simulate_coin_flips()} heads")

# Simulate a Continuous RV: Wait time (Exponential distribution)
wait_time = np.random.exponential(scale=5) # average wait is 5 mins
print(f"Outcome of Y: {wait_time:.2f} minutes")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Target Labels</strong>: In classification, your target \(y\) is a random variable that can take values like \(\{0, 1, 2\}\).</li>
      <li><strong>Feature Realization</strong>: Every feature in your dataset is a realization of a random variable (e.g., House Price).</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Random Variables take values. But how often? Explore <strong><a href="#/mathematics/probability/probability-distributions">Probability Distributions</a></strong>.
    </div>
  `
};
