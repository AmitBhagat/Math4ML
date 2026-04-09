import { TopicSection } from '../../src/data/types';

export const whatIsMLSection: TopicSection = {
  id: "what-is-ml",
  title: "What is Machine Learning?",
  description: "Machine Learning is the field of study that gives computers the ability to learn without being explicitly programmed.",
  color: "#4A90E2",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Intro</div>
      <h1>What is Machine Learning?</h1>
      <p>At its simplest, <strong>Machine Learning (ML)</strong> is the shift from "Giving Rules" to "Showing Examples." Instead of telling a computer exactly how to solve a problem, we give it a massive amount of data and let it figure out the patterns for itself.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>At its simplest, <strong>Machine Learning (ML)</strong> is the shift from "Giving Rules" to "Showing Examples." In traditional software engineering, a human writes the logic (If/Then statements) and provides data to get an answer. In Machine Learning, we provide the <strong>Data</strong> and the <strong>Final Answers</strong> (the labels), and the computer's job is to figure out the <strong>Rules</strong> that link them together. It is about automating the discovery of patterns that are too complex, too high-dimensional, or too subtle for a human brain to hardcode. Rules are no longer written; they are <strong>discovered</strong> through the lens of pure mathematics.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Experience-Task-Performance Triad</div>
      <p>A computer program is said to <strong>learn</strong> from experience $E$ with respect to some class of tasks $T$ and performance measure $P$, if its performance at tasks in $T$, as measured by $P$, improves with experience $E$ (Mitchell, 1997). This is mathematically framed as a search over a <strong>Hypothesis Space</strong> $\mathcal{H}$:</p>
      
      <div class="math-block">
        $$\hat{h} = \arg \min_{h \in \mathcal{H}} \frac{1}{n} \sum_{i=1}^n L(y_i, h(\mathbf{x}_i))$$
      </div>
      <p>Where the learning process is defined by:</p>
      <ul class="mt-2 space-y-1">
        <li><strong>Task ($T$)</strong>: The problem being solved (e.g., Image Classification, Price Prediction).</li>
        <li><strong>Experience ($E$)</strong>: The training data $\mathcal{D} = \{(\mathbf{x}_1, y_1), \dots, (\mathbf{x}_n, y_n)\}$ provided to the system.</li>
        <li><strong>Performance Measure ($P$)</strong>: The <strong>Loss Function</strong> $L$ (e.g., MSE or Cross-Entropy) that quantifies how far the model's hypothesis $h$ is from the ground truth.</li>
      </ul>
      <p class="mt-2">The goal of any learning algorithm is <strong>Empirical Risk Minimization (ERM)</strong>: finding the specific rule $h$ that best explains the provided examples while maintaining the ability to generalize to unseen data.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of traditional coding as writing a <strong>Rigid Cookbook</strong>. If a step is missing, the chef fails. 
        <strong>Machine Learning</strong> is like taking a <strong>World-Class Chef</strong> to a 100-course dinner and asking them to <strong>Guess the Ingredients</strong> just by tasting the finished food. 
        We don't tell them how to cook; we show them the final product and let their "Palate" (the algorithm) figure out the hidden recipe. This is how we solve problems like <strong>Face Recognition</strong> or <strong>Spam Detection</strong>—tasks where a human knows the answer instinctively but couldn't possibly write down every "If" statement required to explain it to a machine.
      </div>
    </div>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Hidden Recipe</h2>
    
      <h4>Scenario: Predicting the Price of a House</h4>
      <p>Imagine you have a list of houses, their sizes, and what they sold for. You want to build a program that predicts the price of any new house.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Manual Way (Old):</strong> You sit down and write: "If size > 2000 and the roof is new, then price = size * 500." This is hard because real life has 1,000 variables (schools, neighbors, crime, age). You can't write enough "IF" statements to be accurate.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The ML Way (New):</strong> You dump 50,000 house records into an algorithm. It notices that "distance to the nearest park" and "number of bathrooms" correlate with price in a weird, non-linear way. It finds the <strong>Hidden Recipe</strong> automatically.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Result:</strong> The ML model produces a "Rule" you never could have written yourself. It's more accurate, more robust, and it gets smarter every time you give it more houses.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Machine Learning is essentially <strong>Statistical Pattern Matching</strong> at scale. If a human can't easily explain "How" they know something (like recognizing a face), it's probably a good candidate for ML.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np
from sklearn.linear_model import LinearRegression

# 1. Manual Rule (Traditional Programming)
# Logic is hardcoded by a human
def manual_rule(size):
    return size * 400 

# 2. Machine Learning (Pattern Discovery)
# <span class="text-green-premium font-bold">Case Study:</span> s provided, computer 'discovers' the multiplier
sizes = np.array([[1000], [1500], [2000], [2500]])
# Real prices have noise and neighborhood bonuses
prices = np.array([410000, 580000, 820000, 1050000])

model = LinearRegression()
model.fit(sizes, prices) 

# Compare on a 500 sqft studio
test_size = np.array([[500]])
print("Manual Price: $" + f"{manual_rule(500):,.0f}")
print("ML Price:     $" + f"{model.predict(test_size)[0]:,.2f}")
    </python-code>

    <h2 id="why">Why Use ML?</h2>
    <ul>
      <li><strong>Scale</strong>: Humans can't look at 1 billion images, but machines can.</li>
      <li><strong>Complexity</strong>: Recognizing a face involves millions of pixels; there is no simple "IF" statement for a smile.</li>
      <li><strong>Adaptability</strong>: Models can learn from new data without a programmer rewriting the code.</li>
    </ul>

    <h2 id="workflow">The ML Workflow</h2>
    <div class="algorithm-steps">
      <div class="algorithm-step">
        <span class="step-badge">1</span>
        <div><strong>Data Collection</strong>: Gathering the raw material.</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">2</span>
        <div><strong>Data Cleaning</strong>: Removing the noise and outliers.</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">3</span>
        <div><strong>Model Selection</strong>: Picking the right "brain" (Algorithm) for the task.</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">4</span>
        <div><strong>Training</strong>: The computer finds the patterns.</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">5</span>
        <div><strong>Evaluation</strong>: Testing if the machine actually learned or just memorized.</div>
      </div>
    </div>

    <h2 id="applications">Applications in ML</h2>
    <p>Machine Learning is the pivot from "Rules" to "Examples." Instead of telling a computer exactly how to solve a problem, we provide the data and let the algorithm discover the hidden recipe for itself.</p>
    <ul>
      <li><strong>Email Spam Filtering</strong>: Early spam filters used manual rules (like "If subject contains 'Winner', mark as spam"). Today, ML models look at millions of emails, noticing subtle patterns in sender reputation and word usage that no human could ever hardcode. The computer "learns" what junk looks like by seeing enough of it.</li>
      <li><strong>Financial Credit Scoring</strong>: When you apply for a loan, an ML model predicts your reliability. It doesn't just look at your bank balance; it analyzes thousands of data points—from spending frequency to bill payment history—finding the hidden relationships that determine "Creditworthiness" across a massive population.</li>
    </ul>
    <p>Teacher's Final Word: If you can't write a rule for it, but you have 10,000 examples of it, use Machine Learning. It's the only way to solve problems that are governed by complexity and human intuition rather than fixed logic.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Not all learning is the same. How does the machine actually "learn"? Explore <strong><a href="#/machine-learning/foundation-ml/types-of-ml">Types of Machine Learning</a></strong>.
    </div>
  `
};


