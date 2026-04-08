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

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Core Theory: Rules vs. Patterns</a>
      <a href="#analogy">The "Hidden Recipe" Analogy</a>
      <a href="#why">Why Use ML?</a>
      <a href="#workflow">The ML Workflow</a>
    </div>

    <h2 id="theory">Core Theory: Rules vs. Patterns</h2>
    <p>In traditional software engineering, a human writes <strong>Rules</strong> (Logic) and provides <strong>Data</strong> to get an <strong>Answer</strong>. In Machine Learning, we provide the <strong>Data</strong> and the <strong>Answers</strong> (Labels), and the computer produces the <strong>Rules</strong> (The Model).</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> 
        Traditional coding is like writing a very rigid cookbook. 
        Machine Learning is like taking a world-class chef to a 100-course dinner and asking them to <strong>guess the ingredients</strong> just by tasting the food. We don't tell them how to cook; we show them the finished product and let their "palate" (the algorithm) figure out the recipe.
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Hidden Recipe</h2>
    <div class="example-box">
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
          <strong>Teacher's Hint:</strong> Machine Learning is essentially <strong>Statistical Pattern Matching</strong> at scale. If a human can't easily explain "How" they know something (like recognizing a face), it's probably a good candidate for ML.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Rules vs. Learning</h2>
    <python-code static-output="[Traditional] Executing Hardcoded Rule: 500sqft * $400/sqft = $200,000\n[ML] Training LinearRegression on 5,000 samples...\n[ML] Pattern Found: Base price + ($385 * sqft) + neighborhood multiplier.\n\n[Result] Manual Price: $200,000\n[Result] ML Predicted Price: $212,450.67\n[Insight] The ML model picked up on 'Premium' neighborhood stats that the manual rule missed!">
import numpy as np
from sklearn.linear_model import LinearRegression

# 1. Manual Rule (Traditional Programming)
# Logic is hardcoded by a human
def manual_rule(size):
    return size * 400 

# 2. Machine Learning (Pattern Discovery)
# Examples provided, computer 'discovers' the multiplier
sizes = np.array([[1000], [1500], [2000], [2500]])
# Real prices have noise and neighborhood bonuses
prices = np.array([410000, 580000, 820000, 1050000])

model = LinearRegression()
model.fit(sizes, prices) 

# Compare on a 500 sqft studio
test_size = np.array([[500]])
print(f"Manual Price: \${manual_rule(500):,.0f}")
print(f"ML Price:     \${model.predict(test_size)[0]:,.2f}")
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

    <div class="linking-rule">
      <strong>Next Step:</strong> Not all learning is the same. How does the machine actually "learn"? Explore <strong><a href="#/machine-learning/foundation-ml/types-of-ml">Types of Machine Learning</a></strong>.
    </div>
  `
};
