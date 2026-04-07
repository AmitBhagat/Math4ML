import { TopicSection } from '../../src/data/types';

export const basicAxiomsSection: TopicSection = {
  id: "basic-axioms",
  title: "Basic Axioms of Probability",
  description: "Probability is the mathematical framework used to quantify uncertainty. In Machine Learning, it is the backbone of algorithms like Naive Bayes, Hidden Markov Models, and even the Softmax function in Deep Learning.",
  color: "#FF6F00",
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
      <a href="#example">3. Illustrative Example: Die Roll</a>
      <a href="#union-example">4. Illustrative Example: Union of Events</a>
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
    <visualizer topic="SampleSpace" />
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
    <visualizer topic="ConditionalProbability" />

    <p><strong>Derivation steps:</strong></p>
    <div class="step-box"><span class="step-num">1</span><div>Since \(B\) has occurred, our "new" sample space is restricted to \(B\).</div></div>
    <div class="step-box"><span class="step-num">2</span><div>We look for the part of \(A\) that lives within \(B\), which is \(A \cap B\).</div></div>
    <div class="step-box"><span class="step-num">3</span><div>We normalize this by the total probability of the new sample space, \(P(B)\).</div></div>

    <h3>Independence</h3>
    <p>Two events \(A\) and \(B\) are <strong>independent</strong> if the occurrence of one does not affect the probability of the other. Mathematically, they are independent if:</p>
    <div class="math-block">$$P(A \cap B) = P(A) \cdot P(B)$$</div>
    <p>From the conditional probability formula, if \(A\) and \(B\) are independent:</p>
    <div class="math-block">$$P(A|B) = \frac{P(A) \cdot P(B)}{P(B)} = P(A)$$</div>

    <h2 id="example">3. Illustrative Example: Die Roll</h2>
    <div class="example-box">
      <h4>Problem: Conditional Probability on a Die</h4>
      <p>You roll a fair six-sided die. If I tell you the result is greater than 3, what is the probability that it is an even number?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identify Events:</strong> \(A = \{2, 4, 6\}\) (Even), \(B = \{4, 5, 6\}\) (Greater than 3).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Find Intersection:</strong> \(A \cap B = \{4, 6\}\). Thus, \(P(A \cap B) = 2/6 = 1/3\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Apply Formula:</strong> \(P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{1/3}{1/2}\).</div></div>

      <div class="math-block">$$P(A|B) = \frac{2}{3} \approx 0.67$$</div>
      
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> Knowing that the roll was \(> 3\) increases our confidence that it was even from 50% to 67%.</div></div>
    </div>

    <h2 id="union-example">4. Illustrative Example: Union of Events</h2>
    <div class="example-box">
      <h4>Problem: Non-Mutually Exclusive Events</h4>
      <p>In a standard deck of 52 cards, what is the probability of drawing a <strong>Red Card</strong> (Event R) OR an <strong>Ace</strong> (Event A)?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Individual Probabilities:</strong> \(P(R) = 26/52 = 0.5\), \(P(A) = 4/52 \approx 0.077\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Identify Overlap:</strong> There are 2 Red Aces (Heart and Diamond). \(P(R \cap A) = 2/52 \approx 0.038\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Apply General Addition Rule:</strong> \(P(R \cup A) = P(R) + P(A) - P(R \cap A)\).</div></div>

      <div class="math-block">$$P(R \cup A) = \frac{26}{52} + \frac{4}{52} - \frac{2}{52} = \frac{28}{52} \approx 0.538$$</div>

      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Intuition:</strong> We subtract the intersection because the Red Aces were counted twice — once as Red cards and once as Aces. In ML, ignoring dependencies like this leads to overconfident (and wrong) models.</div></div>
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
