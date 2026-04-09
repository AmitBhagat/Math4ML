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

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Restricted Sample Space</div>
      <p>For two events $A$ and $B$ in a probability space, the **Conditional Probability** of $A$ given $B$ is defined as the probability that $A$ occurs, restricted to the subset of the sample space where $B$ has already occurred:</p>
      <div class="math-block">
        $$P(A | B) = \frac{P(A \cap B)}{P(B)}, \quad \text{for } P(B) > 0$$
      </div>
      <p>This definition entails several critical mathematical properties:</p>
      <ul class="mt-2 space-y-1">
        <li><strong>Multiplication Rule</strong>: $P(A \cap B) = P(A | B)P(B)$. This allows for the sequential decomposition of joint events.</li>
        <li><strong>Law of Total Probability</strong>: $P(A) = \sum_i P(A | B_i)P(B_i)$ for a partition $\{B_i\}$ of the sample space.</li>
        <li><strong>Belief Revision</strong>: Conditioning serves as the mathematical engine for updating prior knowledge $P(A)$ with new evidence $B$.</li>
      </ul>
      <p class="mt-2">Discriminative ML models (e.g., Logistic Regression) directly estimate the conditional distribution $P(y | \mathbf{x})$ to predict labels from features.</p>
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
      <li><strong>Contextual Word Embeddings (LLMs)</strong>: In Natural Language Processing, the meaning of a word is almost entirely conditional. Consider the word "Bank." A transformer model calculates the probability of its meaning **Given** the surrounding words. If the context is "Water," the conditional probability of it meaning "River Side" is 99%. If the context is "Loan," the conditional probability of it meaning "Financial Institution" takes over. Without conditional probability, AI would be trapped in a world of literal, one-dimensional definitions.</li>
      <li><strong>Dynamic Fraud Detection</strong>: Banks don't just ask "Is this transaction 0.1% or 99.9% Fraudulent?" They ask: "What is the probability of fraud **Given** that the user is currently in a foreign country and just spent $5,000?" This specific condition "Shrinks" the sample space from "All Customers" to "Travelers in high-risk zones," allowing the AI to spot anomalies that would be invisible in a general dataset.</li>
    </ul>
    <p>Teacher's Final Word: The world is full of noise, but Conditional Probability acts like a spotlight. It tells the model to ignore the dark corners of the universe and focus only on the evidence at hand. Mastering the "Given" is the secret to mastering the context.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Sometimes, knowing B tells you <em>absolutely nothing</em> new about A. Explore <strong><a href="#/mathematics/probability/independence">Independence</a></strong>.
    </div>
  `
};


