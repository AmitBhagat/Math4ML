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

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Definition</a>
      <a href="#example-bernoulli">Example 1: Bernoulli (Success vs. Failure)</a>
      <a href="#example-normal">Example 2: Normal (The Bell Curve)</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Random Variables</strong>: Discrete vs. Continuous.</li>
        <li><strong>Integrals</strong>: For calculating areas under continuous curves.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>A Random Variable says: <em>"The weather could be 60, 70, or 80 degrees."</em> A Distribution says: <em>"It is 10% likely to be 60, 80% likely to be 70, and 10% likely to be 80."</em> Distributions allow us to model **Uncertainty**. Instead of saying "The house price will be exactly $500k," we say "Prices follow a distribution centered at $500k."</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of a Probability Distribution as a <strong>Heat Map</strong>. 
        Where the map is "hot" (high probability), outcomes are common. 
        Where the map is "cold," outcomes are rare. 
        In ML, we want to find the parameters of this map that best explain the data we've already seen.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <ul>
      <li><strong>Probability Mass Function (PMF)</strong>: For Discrete RVs, \(P(X=x)\). The sum of all probabilities must be 1.</li>
      <li><strong>Probability Density Function (PDF)</strong>: For Continuous RVs, \(f(x)\). The total area under the curve must be 1.</li>
    </ul>

    <h2 id="example-bernoulli">Example 1: Bernoulli (Success vs. Failure)</h2>
    <div class="example-box">
      <h4>Problem: Tracking a 1-Trial Experiment</h4>
      <p>A "Success" happens with probability \(p=0.7\). What is the PMF?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identify:</strong> Let \(X=1\) be success and \(X=0\) be failure.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Mapping:</strong> \(P(X=1) = 0.7\); \(P(X=0) = 0.3\).</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> This is the simplest possible distribution. It's the building block for **Binary Classification** models (Cat vs. Not Cat).
        </div>
      </div>
    </div>

    <h2 id="example-normal">Example 2: Normal (The Bell Curve)</h2>
    <div class="example-box">
      <h4>Problem: Capturing Collective Data Distributions</h4>
      <p>Heights are Normally distributed with mean \(\mu = 70\) and standard deviation \(\sigma = 3\). Find the probability that someone is exactly 70 inches tall.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identify:</strong> For continuous variables, the probability of an "exact" point is zero! We measure intervals instead.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Measure:</strong> The probability of someone being <strong>between</strong> 67 and 73 inches is 68% (The 1-Sigma Rule).</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> In the Real World, most common errors (noise) result from many tiny independent factors. When added together, they almost always form this Bell Curve. This is why we use **Gaussian Naive Bayes**.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
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
