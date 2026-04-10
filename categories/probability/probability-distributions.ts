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
      <div class="premium-def-title">Formalism: The Law of Total Probability Mass & Density</div>
      <p>A Probability Distribution is the "Identity Card" of a random variable. It maps the abstract chaos of "what might happen" into a precise mathematical shape.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine a plot where the horizontal axis represents all possible outcomes $x$ of an experiment. We want to assign a "height" or "weight" to each outcome to show how likely it is. Geometrically, a distribution is a shape that encloses a total area (or volume) of exactly <strong>1.0</strong>. This area represents the "Universe of Certainty"—one of the outcomes *must* happen. If the shape is a tall spike, the outcome is predictable; if it's a flat plateau, the outcome is pure noise.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We define a distribution through its <strong>Cumulative Distribution Function (CDF)</strong>, which tracks the accumulation of probability $P(X \le x)$:</p>
      <div class="math-block">
        $$F_X(x) = P(X \le x)$$
      </div>
      <p>For a <strong>Continuous Distribution</strong>, we derive the "Rate of Change" of this accumulation, which we call the <strong>Probability Density Function (PDF)</strong>. This is the derivative of the CDF:</p>
      <div class="math-block">
        $$f_X(x) = \frac{d}{dx} F_X(x)$$
      </div>
      <p>Because the probability of the entire sample space $\Omega$ must be 1.0, any valid PDF must satisfy the <strong>Normalization Constraint</strong>:</p>
      <div class="math-block">
        $$\int_{-\infty}^{\infty} f_X(x) dx = 1$$
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, we optimize parameters $\theta$ to find the "Best Fit" distribution: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Density Estimation</strong>: We assume a distribution family (like Normal or Bernoulli) and use data to calculate the mean and variance.</li>
        <li><strong>Log-Likelihood</strong>: Instead of maximizing the probability directly (which can be infinitesimally small), we maximize the <strong>Log</strong> of the density, as it turns multiplications into sums and keeps the math stable.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: In a continuous distribution, the probability of any <strong>exact</strong> point is exactly zero ($P(X=5.000...)$). We only care about the probability of falling within a range (an integral). The vertical height $f(x)$ is a density, not a probability—it can actually be greater than 1.0.</p>
    </div>
    
    <visualizer topic="Distributions" />
    
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
    <p>A Probability Distribution is the "DNA" of your dataset. It defines the hidden rules that dictate how often events occur, allowing an AI to move from "Guessing" to "Predicting."</p>
    <ul>
      <li><strong>Zipf’s Law in NLP (LLMs)</strong>: Human language follow a very specific "Power Law" distribution. If you look at every book on Earth, the word "the" appears twice as often as the second most common word, and so on. Large Language Models like GPT-4 must master this distribution to understand which words are "surprising" (high information) and which are "filler." If the distribution was uniform, every word would be equally likely, and communication would be a chaotic soup of noise.</li>
      <li><strong>Gaussian (Normal) Error Modeling</strong>: In almost every regression model, we assume that the "Noise" or the error in the data follows a Normal distribution. This "Bell Curve" assumption is what makes Mean Squared Error (MSE) the mathematically perfect goal for most optimizers. We are essentially betting that most errors will be small and centered around zero, with massive "Outlier" errors being extremely rare.</li>
    </ul>
    <p>Teacher's Final Word: In ML, we don't just learn "numbers," we learn "Shapes." A model's job is to look at your messy data points and figure out which mathematical shape (Gaussian, Poisson, Bernoulli) created them. Once you find the shape, you've found the truth.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we have two random variables that affect each other? Explore <strong><a href="#/mathematics/probability/joint-distributions">Joint Distributions</a></strong>.
    </div>
  `
};


