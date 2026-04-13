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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Sample Space</strong>: The set of all possible outcomes.</li>
        <li><strong>Basic Functions</strong>: Mapping inputs to outputs.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Math doesn't like abstract concepts like "Red," "Cold," or "Spam." It likes numbers. A <strong>Random Variable</strong> is the "Translator" or "Sensor" that takes an outcome from the messy, fuzzy real world and turns it into a hard real number we can actually perform calculus on. Without this mapping, we couldn't calculate averages, track variances, or feed data into a neural network. It is the fundamental bridge that allows us to turn <strong>Observations</strong> into <strong>Quantities</strong>. Every feature in your ML dataset—whether it's house square footage or pixel brightness—is a realization of a Random Variable.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Measurable Mapping & The Numerical Proxy</div>
      <p>A Random Variable is the "Bridge" between the abstract world of outcomes and the concrete world of arithmetic.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Think of the <strong>Sample Space</strong> $\Omega$ as a chaotic collection of every possible outcome of an experiment (e.g., "The weather is cloudy," "The stock crashed," "The user clicked"). These aren't numbers; they're events. A <strong>Random Variable</strong> $X$ acts as a "Sensor" or "Probe" that reaches into this chaotic space and assigns a specific real number to each event. Geometrically, it’s a mapping that projects the high-dimensional, non-numerical reality onto the simple, 1D number line $\mathbb{R}$.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>Given a probability space $(\Omega, \mathcal{F}, P)$, a Random Variable $X$ is a function that maps outcomes $\omega$ to real numbers:</p>
      <div class="math-block">
        $$X: \Omega \to \mathbb{R}$$
      </div>
      <p>For this to be mathematically useful, it must be <strong>Measurable</strong>. This means that for any interval $B$ on the number line, the set of outcomes that map into $B$ must be an "Event" that we actually know the probability of. We define the probability of $X$ taking a certain value by looking at its "Pre-image" in the original sample space:</p>
      <div class="math-block">
        $$P(X \in B) = P(\{ \omega \in \Omega : X(\omega) \in B \})$$
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, Random Variables are the <strong>Features</strong> and <strong>Labels</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Realizations</strong>: A single data point (e.g., $x = 0.85$) is not the random variable itself; it is a "Realization" or "Sample" ($X(\omega)$) of that variable.</li>
        <li><strong>Expectation & Variance</strong>: Because $X$ is a number, we can now calculate its "Center of Mass" (Expectation) and its "Spread" (Variance), which would be impossible with abstract outcomes like "Cloudy."</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: A "Random Variable" is neither random nor a variable—it is a deterministic function. The randomness comes entirely from the underlying sample space $\Omega$, not the mapping itself.</p>
    </div>
    
    <visualizer topic="random-variables" />
    

    
    <h2 id="example-coin" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Discrete (Coin Flips)</h2>
    
      <h4>Problem: Mapping Binary Outcomes</h4>
      <p>You flip a coin 3 times. Let \(X\) be the number of Heads. Find the values \(X\) can take.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify Sample Space:</strong> \(S = \{HHH, HHT, HTH, THH, TTH, THT, HTT, TTT\}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Mapping:</strong> If outcome is \(TTH\), \(X(TTH) = 1\). If \(HHH\), \(X(HHH) = 3\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Range:</strong> \(X \in \{0, 1, 2, 3\}\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We've successfully converted 8 abstract outcomes into a simple set of numbers. This is the first step toward calculating the "Average" number of heads.
        </div>
      </div>
    

    <h2 id="example-wait" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Continuous (Wait Times)</h2>
    
      <h4>Problem: Tracking Continuous Events</h4>
      <p>Let \(Y\) be the time (in minutes) you wait for a bus. What values can \(Y\) take?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> You can wait 2.5 minutes, 2.51 minutes, or forever.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Set:</strong> \(Y \in [0, \infty)\).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Unlike the coin flip, we can't list every possible wait time. This makes it a <strong>Continuous Random Variable</strong>, which we handle using Probability Density Functions (PDFs) instead of simple lists.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
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
    <p>A Random Variable is the "Translator" of the universe. It takes the messy, fuzzy interactions of the real world and maps them to hard numbers that a neural network can actually chew on.</p>
    <ul>
      <li><strong>Bernoulli Targets in Binary Classification</strong>: When you build a "Cat Detector," the presence of a cat is a Random Variable \(Y\). We map the abstract concept of "Cat" to the number 1 and "Not Cat" to 0. This simple numerical mapping is what allows us to calculate things like "Accuracy" or "Loss." Without Random Variables, your model would just be staring at a picture with no way to quantify "Correctness."</li>
      <li><strong>IoT Sensor Noise Modeling</strong>: Raw data from a temperature sensor isn't a single perfect number; it's a <strong>Continuous Random Variable</strong>. Due to electrical interference, a sensor might read 22.1°C one second and 22.15°C the next. We treat these fluctuations as realizations of a random variable, allowing us to use statistical "Denoising" filters (like Kalman Filters) to find the true temperature hidden in the noise.</li>
    </ul>
    <p>Teacher's Final Word: Math doesn't care about "concepts"; it cares about coordinates. Random Variables are the sensors that turn the chaotic reality of your data into a coordinate system we can optimize. No mapping, no learning.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Random Variables take values. But how often? Explore <strong><a href="#/mathematics/probability/probability-distributions">Probability Distributions</a></strong>.
    </div>
  `
};


