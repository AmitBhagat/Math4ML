import { TopicSection } from '../../src/data/types';

export const conditionalProbabilitySection: TopicSection = {
  id: "conditional-probability",
  title: "Conditional Probability",
  description: "Conditional Probability measures the likelihood of an event occurring given that another event has already happened. It is the key to 'Updating' our knowledge.",
  color: "#FF6F00",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Conditional</div>
      <h1>Conditional Probability: Updated Beliefs</h1>
      <p><strong>Conditional Probability</strong> (\(P(A|B)\)) measures the likelihood of Event A occurring, <strong>given</strong> that Event B is already known to have happened. In Machine Learning, this is the "Secret Sauce" that allows us to refine a prediction as we receive new data.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Joint Probability</strong>: Understanding \(P(A, B)\).</li>
        <li><strong>Sample Space</strong>: The set of all possibilities.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Normally, your perspective covers the entire universe. But once I tell you "Condition B is true," your world shrinks. You are no longer interested in the parts of the universe that don't satisfy B. <strong>Conditional Probability</strong> is the "Shrinking Universe" intuition—it forces us to focus only on the survivors of that condition.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Conditional Probability as a <strong>"Filter."</strong> 
        Imagine a pool of 1,000 customers. You want to know if someone will buy. 
        Once I tell you "They put an item in the cart" (Condition B), you <strong>filter out</strong> everyone who didn't. 
        Your universe is now smaller, and the likelihood of a purchase is much higher. 
        In ML, we use this "filter" to calculate the odds of a class given the input features.
      </div>
    </div>

    <visualizer topic="ConditionalProbability" />

    <h2 id="derivation">Formal Definition</h2>
    <div class="math-block">$$P(A|B) = \frac{P(A \cap B)}{P(B)}, \text{ where } P(B) > 0$$</div>
    <p>This says the "New Probability" is the ratio of people who did <strong>both</strong> to people who did <strong>at least B</strong>.</p>

    <h2 id="example-die" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Die Roll Given > 3</h2>
    
      <h4>Problem: Narrowing Down Outcomes</h4>
      <p>I roll a fair six-sided die. If I tell you the result is \(> 3\), what is the probability that it is an even number?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify Condition (B):</strong> \(B = \{4, 5, 6\}\). \(P(B) = 3/6 = 0.5\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Identify Target (A \(\cap\) B):</strong> Even numbers that are also \(> 3\): \(\{4, 6\}\). \(P(A \cap B) = 2/6 = 0.33\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Apply Formula:</strong> \(0.33 / 0.5 = 0.66\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Knowing the roll was \(> 3\) increased our confidence from 50% to <strong>66%</strong>. The world shrunk!
        </div>
      </div>
    

    <h2 id="example-test" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Diagnostic Test Accuracy</h2>
    
      <h4>Problem: The Sensitivity of Models</h4>
      <p>A test for a disease is 90% accurate (if you have it, the test is positive). 1% of the population has it. If you test positive, how likely are you to actually have the disease?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> We want \(P(\text{Disease} | \text{Pos})\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Formula:</strong> Requires Bayes' Rule (an extension of conditional probability).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Even if the test is "accurate," if the disease is extremely rare, most positives will still be <strong>False Positives</strong>. Conditional probability helps us spot these biases in our ML models (like Spam filters).
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

# Simulate 1,000,000 customers
n = 1000000
# Event B: Clicked Ad (20%)
clicked = np.random.binomial(1, 0.2, n)
# Event A: Purchased (5% of overall, but 50% of those who clicked)
purchased = np.zeros(n)
purchased[clicked == 1] = np.random.binomial(1, 0.5, clicked.sum())

# P(Purchase | Click) = sum(clicked and purchased) / sum(clicked)
cond_prob = purchased[clicked == 1].mean()

print(f"P(Purchase | Click) Simulated: {cond_prob:.2f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Discriminative Models</strong>: Directly model the conditional probability \(P(y|X)\) (e.g., Logistic Regression).</li>
      <li><strong>Precision & Recall</strong>: Metrics used to evaluate how reliable a model's "Positive" predictions actually are.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Sometimes, knowing B tells you <em>absolutely nothing</em> new about A. Explore <strong><a href="#/mathematics/probability/independence">Independence</a></strong>.
    </div>
  `
};
