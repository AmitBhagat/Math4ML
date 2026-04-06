import { TopicSection } from '../../src/data/types';

export const basicAxiomsSection: TopicSection = {
  id: "basic-axioms",
  title: "Basic Axioms of Probability",
  description: "Probability is the mathematical framework used to quantify uncertainty. In Machine Learning, it is the backbone of algorithms like Naive Bayes, Hidden Markov Models, and even the Softmax function in Deep Learning.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Basic Axioms</div>
      <h1>Basic Axioms of Probability</h1>
      <p>Probability is the mathematical framework used to quantify uncertainty. In Machine Learning, it is the backbone of algorithms like <strong>Naive Bayes</strong>, <strong>Hidden Markov Models</strong>, and even the <strong>Softmax</strong> function in Deep Learning. By understanding how to measure the likelihood of events, we can make informed predictions based on data.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#blocks">Core Theory: The Building Blocks</a>
      <a href="#blocks" class="sub">↳ 1. Sample Space</a>
      <a href="#blocks" class="sub">↳ 2. Events</a>
      <a href="#blocks" class="sub">↳ 3. The Three Axioms (Kolmogorov)</a>
      <a href="#conditional">Mathematical Derivation: Conditional Probability &amp; Independence</a>
      <a href="#example">Illustrative Example: Die Roll</a>
      <a href="#implementation">Implementation in Python (NumPy)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Set Theory Basics:</strong> Unions \((\cup)\), Intersections \((\cap)\), and Complements \((A^c)\).</li>
        <li><strong>Basic Arithmetic:</strong> Working with fractions and decimals between 0 and 1.</li>
      </ul>
    </div>

    <h2 id="blocks">Core Theory: The Building Blocks</h2>
    <p>Probability begins with a few fundamental definitions that define the "world" we are operating in.</p>

    <h3>1. Sample Space (S)</h3>
    <p>The <strong>Sample Space</strong> is the set of all possible outcomes of a random experiment.</p>
    <ul>
      <li><strong>Example:</strong> If you toss a coin, \(S = \{H, T\}\). If you roll a six-sided die, \(S = \{1, 2, 3, 4, 5, 6\}\).</li>
    </ul>

    <h3>2. Events (A, B)</h3>
    <p>An <strong>Event</strong> is a subset of the sample space. It represents one or more outcomes that we are interested in.</p>
    <ul>
      <li><strong>Example:</strong> Rolling an even number on a die is an event \(E = \{2, 4, 6\}\).</li>
    </ul>

    <h3>3. The Three Axioms of Probability (Kolmogorov Axioms)</h3>
    <p>For any event \(A\) in the sample space \(S\):</p>
    <ol>
      <li><strong>Non-negativity:</strong> The probability of an event is always a non-negative real number: \(P(A) \ge 0\).</li>
      <li><strong>Certainty:</strong> The probability of the entire sample space is 1: \(P(S) = 1\).</li>
      <li><strong>Additivity:</strong> For any two mutually exclusive events (where \(A \cap B = \emptyset\)), the probability of their union is the sum of their individual probabilities: \(P(A \cup B) = P(A) + P(B)\).</li>
    </ol>

    <h2 id="conditional">Mathematical Derivation: Conditional Probability &amp; Independence</h2>

    <h3>Conditional Probability</h3>
    <p>This measures the probability of an event \(A\) occurring, <strong>given</strong> that event \(B\) has already occurred. This is critical in ML for updating our "beliefs" as new data arrives.</p>
    <p>The formula is defined as:</p>
    <div class="math-block">$$P(A|B) = \frac{P(A \cap B)}{P(B)}, \text{ where } P(B) > 0$$</div>

    <p><strong>Derivation steps:</strong></p>
    <div class="step-box"><span class="step-num">1</span><div>Since \(B\) has occurred, our "new" sample space is restricted to \(B\).</div></div>
    <div class="step-box"><span class="step-num">2</span><div>We look for the part of \(A\) that lives within \(B\), which is \(A \cap B\).</div></div>
    <div class="step-box"><span class="step-num">3</span><div>We normalize this by the total probability of the new sample space, \(P(B)\).</div></div>

    <h3>Independence</h3>
    <p>Two events \(A\) and \(B\) are <strong>independent</strong> if the occurrence of one does not affect the probability of the other. Mathematically, they are independent if:</p>
    <div class="math-block">$$P(A \cap B) = P(A) \cdot P(B)$$</div>
    <p>From the conditional probability formula, if \(A\) and \(B\) are independent:</p>
    <div class="math-block">$$P(A|B) = \frac{P(A) \cdot P(B)}{P(B)} = P(A)$$</div>

    <h2 id="example">Illustrative Example: Die Roll</h2>
    <div class="example-box">
      <h4>Problem: Conditional Probability on a Die</h4>
      <p>You roll a fair six-sided die.</p>
      <ul>
        <li>Event \(A\): Rolling an even number \(\{2, 4, 6\}\).</li>
        <li>Event \(B\): Rolling a number greater than 3 \(\{4, 5, 6\}\).</li>
      </ul>
      <p><strong>Step-by-step Solution:</strong></p>
      <ol>
        <li><strong>Total Outcomes \((S)\):</strong> \(\{1, 2, 3, 4, 5, 6\} \implies n(S) = 6\).</li>
        <li><strong>Probability of \(A\):</strong> \(P(A) = \frac{3}{6} = 0.5\).</li>
        <li><strong>Probability of \(B\):</strong> \(P(B) = \frac{3}{6} = 0.5\).</li>
        <li><strong>Find \(A \cap B\):</strong> Outcomes that are both even AND \(> 3\) are \(\{4, 6\}\). So, \(P(A \cap B) = \frac{2}{6} = \frac{1}{3}\).</li>
        <li><strong>Calculate \(P(A|B)\):</strong></li>
      </ol>
      <div class="math-block">$$P(A|B) = \frac{1/3}{1/2} = \frac{2}{3} \approx 0.67$$</div>
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Interpretation:</strong> If I tell you the roll was greater than 3, the chance it is even increases from 50% to 67%.</div></div>
    </div>

    <h2 id="implementation">Implementation in Python (NumPy)</h2>
    <p>We can simulate these probabilities using random sampling.</p>
    <python-code>
import numpy as np

# Simulate 100,000 die rolls
rolls = np.random.randint(1, 7, size=100000)

# Event A: Even numbers
event_a = (rolls % 2 == 0)
# Event B: Greater than 3
event_b = (rolls > 3)

# P(B)
prob_b = np.mean(event_b)

# P(A and B)
prob_a_and_b = np.mean(event_a & event_b)

# P(A | B) = P(A and B) / P(B)
conditional_prob = prob_a_and_b / prob_b

print(f"P(A|B) Simulated: {conditional_prob:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Naive Bayes Classifier:</strong> Relies heavily on the assumption of <strong>Independence</strong> between features to simplify \(P(\text{Features}|\text{Class})\).</li>
      <li><strong>Bayesian Networks:</strong> Use <strong>Conditional Probability</strong> to model complex relationships between variables.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Probability Range:</strong> Always between 0 and 1.</li>
      <li><strong>Sample Space:</strong> The "Universe" of your experiment.</li>
      <li><strong>Conditional Probability:</strong> Limits your focus to a specific subset of data.</li>
      <li><strong>Independence:</strong> \(P(A|B) = P(A)\); knowing \(B\) tells you nothing new about \(A\).</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Having mastered the basic axioms, move toward <strong><a href="#/mathematics/probability/bayes-theorem">Bayes' Theorem</a></strong> to calculate the probability of causes given their effects.
    </div>
  `
};
