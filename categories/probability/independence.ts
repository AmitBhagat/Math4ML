import { TopicSection } from '../../src/data/types';

export const independenceSection: TopicSection = {
  id: "independence",
  title: "Independence",
  description: "Two events are Independent if knowing that one occurred does not change the probability of the other. It is the core assumption of Naive Bayes.",
  color: "#FF6F00",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Independence</div>
      <h1>Independence: Zero Information</h1>
      <p>Two events \(A\) and \(B\) are <strong>Independent</strong> if the occurrence of one provides <strong>Zero Information</strong> about the probability of the other. In Machine Learning, we often assume features are independent—this is known as the "Naive" assumption in Naive Bayes.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Conditional Probability</strong>: Understanding \(P(A|B)\).</li>
        <li><strong>Joint Probability</strong>: Understanding \(P(A \cap B)\).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>If you tell me "It is raining," my probability of "Someone buying an umbrella" increases significantly. These events are <strong>Dependent</strong>. But if you tell me "My coin landed on Heads," does that affect the probability of "It raining"? No. Those events are <strong>Independent</strong>. Independence is the mathematical way of saying two things have zero overlap in their underlying causes. Understanding independence allows us to simplify the massive, messy joint probabilities of the real world into simple, bite-sized products. In Machine Learning, we often *force* independence through assumptions (like Naive Bayes) just so our computers don't crash trying to handle every possible cross-correlation.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Factorization of Probability</div>
      <p>Two events $A$ and $B$ are **Independent** if the occurrence of one does not alter the probability of the other. Formally, this is defined by the product rule of their joint probability:</p>
      <div class="math-block">
        $$P(A \cap B) = P(A) \cdot P(B)$$
      </div>
      <p>For random variables $X$ and $Y$, independence implies the factorization of their density or mass functions:</p>
      <ul class="mt-2 space-y-1">
        <li><strong>Equality of Conditionals</strong>: If $A$ and $B$ are independent, $P(A | B) = P(A)$ and $P(B | A) = P(B)$.</li>
        <li><strong>Mutual Independence</strong>: A set of events $\{A_i\}$ is independent if $P(\bigcap_{i \in S} A_i) = \prod_{i \in S} P(A_i)$ for every subset $S$.</li>
        <li><strong>Conditional Independence</strong>: $X \perp Y \mid Z$ if $P(X, Y | Z) = P(X | Z)P(Y | Z)$. This is the "Naive" assumption in probabilistic modeling.</li>
      </ul>
      <p class="mt-2">Independence is the most powerful "Symmetry" in statistics, reducing the complexity of a model from exponential to linear.</p>
    </div>
    
    <h2 id="example-coin" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Independent Coin Tosses</h2>
    
      <h4>Problem: Successive Binary Trials</h4>
      <p>I toss a coin twice. Let \(A\) be 'Heads on 1st' and \(B\) be 'Heads on 2nd'. Are they independent?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Joint:</strong> The probability of \(P(A \cap B)\) (HH) is \(1/4\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Individual:</strong> \(P(A) = 1/2\) and \(P(B) = 1/2\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Check:</strong> \(1/2 \times 1/2 = 1/4\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> YES. They are independent. The coin does not have "memory" of the previous toss.
        </div>
      </div>
    

    <h2 id="example-exclusive" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Mutually Exclusive vs. Independent</h2>
    
      <h4>Problem: Clearing Up a Common Confusion</h4>
      <p>If two events are Mutually Exclusive (\(A\) and \(B\) can't both happen), can they be Independent?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> If \(A\) happens, \(P(B)\) <strong>instantly becomes zero</strong> because they can't both occur.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Interpret:</strong> Knowing \(A\) tells you a <strong>lot</strong> about \(B\) (that it is now impossible!).</div>
        </div>
      </div>

      <div class="callout error">
        <div class="callout-icon">✕</div>
        <div class="callout-body">
          <strong>Result:</strong> NO. Mutually exclusive events are actually highly <strong>Dependent</strong> because they are perfect opposites! This is a classic exam trap.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

# Simulate two independent events
n = 100000
# Event A: Height > 70 in (p=0.2)
a = np.random.binomial(1, 0.2, n)
# Event B: Coin flip (p=0.5)
b = np.random.binomial(1, 0.5, n)

# Joint probability: P(A & B)
p_a_b = np.mean(a & b)

# Multiplication check: P(A) * P(B)
check = 0.2 * 0.5

print(f"P(A & B) Simulated: {p_a_b:.4f}")
print(f"P(A) * P(B): {check:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Independence is the ultimate "Simplifier." It allows us to break down a massive, overwhelming problem into tiny, manageable pieces that a computer can actually solve in a fraction of a second.</p>
    <ul>
      <li><strong>The "Naive" assumption in Naive Bayes</strong>: If you are building a Spam Filter with 10,000 possible words, calculating the "Joint Probability" of every word combination is mathematically impossible (it would require more data than exists in the universe). Instead, we assume that every word appears **Independently**. This "Naive" lie turns a crushing 10,000D problem into 10,000 simple 1D problems, allowing your email app to sort your inbox instantly.</li>
      <li><strong>Feature Disentanglement in Generative Models</strong>: When we train a model to "Imagine" a human face, we want the "Independence" of features. We want the "Hair Color" variable to be independent of the "Eye Shape" variable. If they are dependent (entangled), the model can't change one without accidentally warping the other. Total independence in the model's brain is what gives us the power to "edit" reality with precision.</li>
    </ul>
    <p>Teacher's Final Word: Independence is the art of "Not Repeating Yourself." In ML, we crave independence because it means every feature is giving us a fresh piece of the truth, rather than just echoing what we already know. It’s what keeps our models lean and our computations fast.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What's the "Typical" outcome of these random events? Explore <strong><a href="#/mathematics/probability/expectation">Expectation (Expected Value)</a></strong>.
    </div>
  `
};


