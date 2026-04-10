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
    <p>Normally, your perspective covers the entire universe of possibilities. But once I tell you "Condition B is true," your world shrinks instantly. You are no longer interested in the parts of the universe that don't satisfy B. <strong>Conditional Probability</strong> is the "Shrinking Universe" intuition—it forces us to focus only on the survivors of that condition. In Machine Learning, this is the "Secret Sauce." When we ask a model, "Is this a cat?", we are really asking for the probability of 'Cat' <strong>given</strong> the features we see. We are filtering out every other possible object and looking only at the slice of reality that matches the image pixels.</p>
    
    <visualizer topic="ConditionalProbability" />

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Restricted Universe & Normalization</div>
      <p>Conditional Probability is "Contextual Math." It redefines your understanding of the world by filtering out every possibility that contradicts current evidence.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine a sample space $\Omega$ with total probability mass 1.0. Within $\Omega$ lives event $B$. Normally, any event $A$ is measured against the whole box $\Omega$. However, once we know $B$ has occurred, our universe "collapses" into the boundaries of $B$. Any part of $A$ that exists outside of $B$ is now impossible. The only surviving part of $A$ is the intersection $A \cap B$. To make our new world mathematically consistent, we must "Recalibrate" the mass of $B$ so it becomes our new total (1.0).</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>To find the new probability of $A$, we take the surviving "Mass" of $A$ (the intersection $A \cap B$) and divide it by the "New Universe Mass" ($P(B)$). This is essentially a normalization step:</p>
      <div class="math-block">
        $$P(A | B) = \frac{\text{Surviving Mass}}{\text{New Total Mass}} = \frac{P(A \cap B)}{P(B)}$$
      </div>
      <p>This formula only holds if $P(B) > 0$. If $P(B) = 0$, the condition is impossible, and the conditional probability is undefined.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, this is the engine of <strong>Discriminative Learning</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Supervised Learning</strong>: We don't model $P(\mathbf{x}, y)$; we model $P(y | \mathbf{x})$. We assume the features $\mathbf{x}$ are given and try to find the label distribution in that specific slice of reality.</li>
        <li><strong>Chain Rule of Probability</strong>: Conditioning allows us to break complex joint distributions into a series of easier, conditional ones: $P(A, B, C) = P(A)P(B|A)P(C|A,B)$.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Correlation is not Conditioning. Just because $P(A|B)$ is high doesn't mean $B$ caused $A$. It just means that in the sub-universe where $B$ exists, $A$ happens to show up often. To prove "Cause," you need deeper tools like Do-Calculus or Randomized Control Trials.</p>
    </div>
    
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
    <p>Conditional Probability is the "Context Filter" of AI. It allows a model to refine its world-view by looking only at the slice of reality that matches the current evidence.</p>
    <ul>
      <li><strong>Contextual Word Embeddings (LLMs)</strong>: In Natural Language Processing, the meaning of a word is almost entirely conditional. Consider the word "Bank." A transformer model calculates the probability of its meaning <strong>Given</strong> the surrounding words. If the context is "Water," the conditional probability of it meaning "River Side" is 99%. If the context is "Loan," the conditional probability of it meaning "Financial Institution" takes over. Without conditional probability, AI would be trapped in a world of literal, one-dimensional definitions.</li>
      <li><strong>Dynamic Fraud Detection</strong>: Banks don't just ask "Is this transaction 0.1% or 99.9% Fraudulent?" They ask: "What is the probability of fraud <strong>Given</strong> that the user is currently in a foreign country and just spent $5,000?" This specific condition "Shrinks" the sample space from "All Customers" to "Travelers in high-risk zones," allowing the AI to spot anomalies that would be invisible in a general dataset.</li>
    </ul>
    <p>Teacher's Final Word: The world is full of noise, but Conditional Probability acts like a spotlight. It tells the model to ignore the dark corners of the universe and focus only on the evidence at hand. Mastering the "Given" is the secret to mastering the context.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Sometimes, knowing B tells you <em>absolutely nothing</em> new about A. Explore <strong><a href="#/mathematics/probability/independence">Independence</a></strong>.
    </div>
  `
};


