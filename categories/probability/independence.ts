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
    <p>If you tell me "It is raining," my probability of "Someone buying an umbrella" increases. These events are <strong>Dependent</strong>. But if you tell me "My coin land on Heads," does that affect the probability of "It raining"? No. Those events are <strong>Independent</strong>. Understanding independence allows us to simplify complex joint probabilities into simple products.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Independence as <strong>"Emotional Distance."</strong> 
        If two variables are independent, they don't care about each other. 
        They don't share any secrets. 
        In ML, we love independence because it lets us calculate massive joint probabilities by just <strong>multiplying</strong> them (\(P(A) \times P(B) \times P(C)\)).
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <div class="math-block">$$P(A \cap B) = P(A) \cdot P(B)$$</div>
    <p>...which also implies that the conditional probability doesn't move: \(P(A|B) = P(A)\).</p>

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
    <ul>
      <li><strong>Naive Bayes Classifier</strong>: Assumes that given the class label, all input features are <strong>Independently</strong> distributed. This turns a complex 100D problem into 100 simple 1D problems.</li>
      <li><strong>Bag of Words</strong>: In NLP, early models assume that the probability of "Wait" appearing is independent of "Bus" appearing in the same sentence.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> What's the "Typical" outcome of these random events? Explore <strong><a href="#/mathematics/probability/expectation">Expectation (Expected Value)</a></strong>.
    </div>
  `
};
