import { TopicSection } from '../../src/data/types';

export const probabilityDistributionsSection: TopicSection = {
  id: "probability-distributions",
  title: "Probability Distributions",
  description: "A Probability Distribution is a mathematical function that provides the probabilities of occurrence of different possible outcomes in an experiment.",
  color: "#FF6F00",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Distributions</div>
      <h1>Probability Distributions: The Shapes of Chance</h1>
      <p>A <strong>Probability Distribution</strong> is the "Shape" of a Random Variable. It tells us exactly how likely different outcomes are. In Machine Learning, we almost always assume our data follows some distribution (like the "Bell Curve") to make predictions.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Random Variables</strong>: Discrete vs. Continuous.</li>
        <li><strong>Integrals</strong>: For calculating areas under continuous curves.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A Random Variable is just a placeholder, like a "Potential Weather" or "Future Stock Price." But a <strong>Probability Distribution</strong> is the actual personality or "DNA" of that variable. It doesn't just list what could happen; it tells you exactly how the universe is "loaded." Distributions allow us to quantify <strong>Uncertainty</strong> so we can stop guessing. Instead of a single point-prediction like "This house will sell for $500k," a distribution gives us a full spectrum of likelihood. In ML, every model we train is essentially trying to find the "Shape" that best fits the scattered dots of our training data.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Probability Laws</div>
      <p>A **Probability Distribution** is a mathematical descriptor that provides the likelihood of every possible value of a random variable $X$. It is defined either by its discrete or continuous nature:</p>
      <div class="math-block">
        $$F(x) = P(X \le x), \quad x \in \mathbb{R}$$
      </div>
      <p>The behavior is characterized by two fundamental functional forms:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Mass Function (PMF)</strong>: For discrete $X$, $p(x) = P(X = x)$, satisfying $\sum p(x_i) = 1$.</li>
        <li><strong>Density Function (PDF)</strong>: For continuous $X$, $f(x) = \frac{d}{dx}F(x)$, satisfying $\int_{-\infty}^\infty f(x) dx = 1$.</li>
        <li><strong>Normalization</strong>: Both forms ensure the total "volume" of probability is exactly 1, representing certainty that <em>some</em> outcome must occur.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Machine Learning often involves **Density Estimation**, where we approximate the parameters of a distribution $p(x|\theta)$ that best explains the observed data.</p>
    </div>
    
    <h2 id="example-bernoulli" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Bernoulli (Success vs. Failure)</h2>
    
      <h4>Problem: Tracking a 1-Trial Experiment</h4>
      <p>A "Success" happens with probability \(p=0.7\). What is the PMF?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Let \(X=1\) be success and \(X=0\) be failure.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Mapping:</strong> \(P(X=1) = 0.7\); \(P(X=0) = 0.3\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> This is the simplest possible distribution. It's the building block for <strong>Binary Classification</strong> models (Cat vs. Not Cat).
        </div>
      </div>
    

    <h2 id="example-normal" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Normal (The Bell Curve)</h2>
    
      <h4>Problem: Capturing Collective Data Distributions</h4>
      <p>Heights are Normally distributed with mean \(\mu = 70\) and standard deviation \(\sigma = 3\). Find the probability that someone is exactly 70 inches tall.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> For continuous variables, the probability of an "exact" point is zero! We measure intervals instead.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Measure:</strong> The probability of someone being <strong>between</strong> 67 and 73 inches is 68% (The 1-Sigma Rule).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> In the Real World, most common errors (noise) result from many tiny independent factors. When added together, they almost always form this Bell Curve. This is why we use <strong>Gaussian Naive Bayes</strong>.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np
import matplotlib.pyplot as plt

# Bernoulli trials
successes = np.random.binomial(1, 0.7, size=100)

# Normal distribution
data = np.random.normal(0, 1, 1000)

print(f"Mean of Normal Data: {data.mean():.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Softmax Layer</strong>: The final output of a neural network is a probability distribution over classes.</li>
      <li><strong>Gaussian Models</strong>: In anomaly detection, we model the "Normal" behavior and flag anything that falls too far into the tails.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we have two random variables that affect each other? Explore <strong><a href="#/mathematics/probability/joint-distributions">Joint Distributions</a></strong>.
    </div>
  `
};

