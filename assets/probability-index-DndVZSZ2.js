const e={id:"basic-axioms",title:"Basic Axioms of Probability",description:"Probability is the mathematical framework used to quantify uncertainty. In Machine Learning, it is the backbone of algorithms like Naive Bayes, Hidden Markov Models, and even the Softmax function in Deep Learning.",color:"#FF6F00",html:String.raw`
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
  `},i={id:"bayes-theorem",title:"Bayes' Theorem",description:"Bayes' Theorem is a fundamental principle in probability that describes how to update the probability of a hypothesis as more evidence or information becomes available.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔄 Probability · Bayes' Theorem</div>
      <h1>Bayes' Theorem</h1>
      <p><strong>Bayes' Theorem</strong> is a fundamental principle in probability that describes how to update the probability of a hypothesis as more evidence or information becomes available. It transitions us from "prior" knowledge to "posterior" knowledge. In ML, it is the mathematical engine behind everything from simple spam filters to complex uncertainty estimation in Deep Learning.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#why">Core Theory: The "Why"</a>
      <a href="#formula">The Formula &amp; Key Components</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#applications">Core Applications in ML</a>
      <a href="#applications" class="sub">↳ 1. Naive Bayes</a>
      <a href="#applications" class="sub">↳ 2. Bayesian Inference</a>
      <a href="#applications" class="sub">↳ 3. Bayesian Neural Networks (BNNs)</a>
      <a href="#example">4. Illustrative Example: Medical Testing</a>
      <a href="#spam-example">5. Illustrative Example: Spam Filters</a>
      <a href="#implementation">Implementation: Naive Bayes Logic in Python</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Basic Axioms of Probability:</strong> Sample space and events.</li>
        <li><strong>Conditional Probability:</strong> \(P(A|B) = \frac{P(A \cap B)}{P(B)}\).</li>
        <li><strong>Product Rule:</strong> \(P(A \cap B) = P(A|B)P(B) = P(B|A)P(A)\).</li>
      </ul>
    </div>

    <h2 id="why">Core Theory: The "Why"</h2>
    <p>In many real-world scenarios, we know the probability of an effect given a cause, but we want to find the probability of the <strong>cause given the effect</strong>.</p>
    <p>For example, we might know the probability that a patient has a cough given they have the flu, but a doctor needs to know the probability the patient has the flu given they have a cough. Bayes' Theorem provides the exact formula for this "inversion."</p>

    <h2 id="formula">The Formula</h2>
    <div class="premium-math-block" style="text-align: center;">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--accent); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Bayes' Theorem</div>
      $$P(H|E) = \frac{P(E|H) \cdot P(H)}{P(E)}$$
    </div>

    <div class="premium-toc" style="background: transparent; border: none; padding: 0;">
      <div class="perspectives-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 18px 0;">
        <div class="persp-card" style="background: var(--bg-tertiary); border: 1px solid var(--border-premium); border-radius: 8px; padding: 14px 16px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin-bottom: 6px;">P(H|E) — Posterior</div>
          <p style="margin: 0; font-size: 13.5px; font-weight: 300;">The probability of Hypothesis \(H\) <em>after</em> seeing Evidence \(E\).</p>
        </div>
        <div class="persp-card" style="background: var(--bg-tertiary); border: 1px solid var(--border-premium); border-radius: 8px; padding: 14px 16px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin-bottom: 6px;">P(E|H) — Likelihood</div>
          <p style="margin: 0; font-size: 13.5px; font-weight: 300;">The probability of seeing Evidence \(E\) if the Hypothesis \(H\) is true.</p>
        </div>
        <div class="persp-card" style="background: var(--bg-tertiary); border: 1px solid var(--border-premium); border-radius: 8px; padding: 14px 16px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin-bottom: 6px;">P(H) — Prior</div>
          <p style="margin: 0; font-size: 13.5px; font-weight: 300;">Our initial belief about the Hypothesis before seeing any evidence.</p>
        </div>
        <div class="persp-card" style="background: var(--bg-tertiary); border: 1px solid var(--border-premium); border-radius: 8px; padding: 14px 16px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin-bottom: 6px;">P(E) — Evidence / Marginal</div>
          <p style="margin: 0; font-size: 13.5px; font-weight: 300;">The total probability of the evidence occurring under all possible hypotheses.</p>
        </div>
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>The derivation is a direct consequence of the <strong>Definition of Conditional Probability</strong>.</p>
    <div class="step-box"><span class="step-num">1</span><div><strong>Conditional Definition:</strong> \(P(H|E) = \frac{P(H \cap E)}{P(E)}\).</div></div>
    <div class="step-box"><span class="step-num">2</span><div><strong>Product Rule:</strong> \(P(H \cap E) = P(E|H) \cdot P(H)\).</div></div>
    <div class="step-box"><span class="step-num">3</span><div><strong>Substitution:</strong> Combine the two to get the inverted relationship.</div></div>
    <div class="math-block">$$P(H|E) = \frac{P(E|H)P(H)}{P(E)}$$</div>
    <p>To calculate \(P(E)\), we often use the <strong>Law of Total Probability</strong>:</p>
    <div class="math-block">$$P(E) = P(E|H)P(H) + P(E|H^c)P(H^c)$$</div>

    <h2 id="applications">Core Applications in ML</h2>

    <h3>1. Naive Bayes</h3>
    <p>This is a classification algorithm that applies Bayes' Theorem with a "Naive" assumption: <strong>all features are independent of each other</strong> given the class label.</p>
    <div class="callout info"><div class="callout-icon">💡</div><div class="callout-body"><strong>Why use it?</strong> It drastically simplifies the calculation of \(P(E|H)\) by multiplying individual feature probabilities: \(P(x_1, x_2 | H) = P(x_1|H) \cdot P(x_2|H)\).</div></div>

    <h3>2. Bayesian Inference</h3>
    <p>This is the process of using Bayes' Theorem to update a probability distribution for a parameter as more data is collected. Unlike frequentist statistics (which gives a single "best" estimate), Bayesian inference gives a <strong>distribution</strong> showing our uncertainty.</p>

    <h3>3. Bayesian Neural Networks (BNNs)</h3>
    <p>In standard Neural Networks, weights are fixed numbers. In <strong>BNNs</strong>, weights are <strong>probability distributions</strong>.</p>
    <div class="callout info"><div class="callout-icon">🧠</div><div class="callout-body"><strong>Benefit:</strong> The model can tell you "I don't know." If it sees data far from its training set, the variance in the weight distributions leads to high uncertainty in the output.</div></div>

    <h2 id="example">4. Illustrative Example: Medical Testing</h2>
    <div class="example-box">
      <h4>Problem: The Disease Testing Paradox</h4>
      <p>A disease affects <strong>1%</strong> of the population (\(P(H) = 0.01\)). A test is <strong>99% accurate</strong> (\(P(E|H) = 0.99\)) but has a <strong>2% false positive rate</strong> (\(P(E|H^c) = 0.02\)). If you test positive, what is the probability you have the disease?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Calculate Evidence \(P(E)\):</strong> Total probability of a positive test.</div></div>
      <div class="math-block">$$P(E) = (0.99 \times 0.01) + (0.02 \times 0.99) = 0.0297$$</div>
      
      <div class="step-box"><span class="step-num">2</span><div><strong>Apply Bayes:</strong> \(P(H|E) = \frac{0.99 \times 0.01}{0.0297}\).</div></div>

      <div class="math-block">$$P(H|E) \approx 0.333$$</div>

      <div class="callout warn"><div class="callout-icon">⚠️</div><div class="callout-body"><strong>Result:</strong> Despite the "99% accuracy," the posterior is only <strong>33.3%</strong>. This happens because the disease is so rare that the small false positive rate still produces more "false" positives than "true" ones.</div></div>
    </div>

    <h2 id="spam-example">5. Illustrative Example: Spam Filters</h2>
    <div class="example-box">
      <h4>Problem: Classifying "Urgent" Emails</h4>
      <p>40% of your emails are Spam. The word <strong>"Urgent"</strong> appears in 80% of Spam but only 10% of Ham (Normal). You receive an email with "Urgent". Is it Spam?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Define Priors:</strong> \(P(\text{Spam}) = 0.4\), \(P(\text{Ham}) = 0.6\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Likelihoods:</strong> \(P(\text{Urgent}|\text{Spam}) = 0.8\), \(P(\text{Urgent}|\text{Ham}) = 0.1\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Calculate Posterior:</strong> \(P(\text{Spam}|\text{Urgent}) = \frac{0.8 \times 0.4}{(0.8 \times 0.4) + (0.1 \times 0.6)}\).</div></div>

      <div class="math-block">$$P(\text{Spam}|\text{Urgent}) = \frac{0.32}{0.32 + 0.06} = \frac{0.32}{0.38} \approx 0.84$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Decision:</strong> Since the probability (84%) is high, the model correctly flags this as Spam. Knowledge of the word "Urgent" shifted our belief from 40% to 84%.</div></div>
    </div>
    <div class="my-10">
       <visualizer topic="BayesTheorem" />
    </div>

    <h2 id="implementation">Implementation: Naive Bayes Logic in Python</h2>
    <python-code>
import numpy as np

# P(Spam) = 0.4, P(Ham) = 0.6
prior_spam = 0.4
prior_ham = 0.6

# Likelihood of word "Offer" given Spam or Ham
p_offer_given_spam = 0.8
p_offer_given_ham = 0.1

# Evidence: P(Offer)
p_offer = (p_offer_given_spam * prior_spam) + (p_offer_given_ham * prior_ham)

# Posterior: P(Spam | Offer)
p_spam_given_offer = (p_offer_given_spam * prior_spam) / p_offer

print(f"Probability it is Spam given the word 'Offer': {p_spam_given_offer:.2f}")
    </python-code>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Priors Matter:</strong> Your initial belief heavily influences the final result, especially with small amounts of data.</li>
      <li><strong>The "Naive" part:</strong> In Naive Bayes, we assume features don't interact, which makes the math fast but potentially less accurate.</li>
      <li><strong>Uncertainty:</strong> Bayesian methods are the gold standard for quantifying how "sure" a model is about its prediction.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Bayes' Theorem works on events. To handle data, we must map these events to numbers using <strong><a href="#/mathematics/probability/random-variables">Random Variables & Functions</a></strong>.
    </div>
  `},t={id:"random-variables",title:"Random Variables & Functions",description:"A Random Variable (RV) is a functional mapping that assigns a numerical value to each outcome in a sample space. It allows us to use mathematical tools to describe stochastic processes.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Probability · Random Variables &amp; Functions</div>
      <h1>Random Variables &amp; Functions</h1>
      <p>In the previous sections, we looked at fixed events (like rolling a die). However, in Machine Learning, we deal with data that can take a wide range of values. A <strong>Random Variable (RV)</strong> is a functional mapping that assigns a numerical value to each outcome in a sample space. It allows us to use mathematical tools to describe "stochastic" (random) processes.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#core">Core Theory: Discrete vs. Continuous</a>
      <a href="#core" class="sub">↳ 1. Discrete Random Variables (PMF)</a>
      <a href="#core" class="sub">↳ 2. Continuous Random Variables (PDF)</a>
      <a href="#cdf">Cumulative Distribution Function (CDF)</a>
      <a href="#derivation">Mathematical Derivation: PDF to Probability</a>
      <a href="#examples">3. Illustrative Example: Bernoulli & Uniform</a>
      <a href="#expectation-example">4. Illustrative Example: Expectation</a>
      <a href="#implementation">Implementation in Python (SciPy)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Basic Axioms:</strong> Understanding sample spaces and total probability.</li>
        <li><strong>Calculus (for Continuous):</strong> Basic integration is required to find probabilities for continuous ranges.</li>
      </ul>
    </div>

    <h2 id="core">Core Theory: Discrete vs. Continuous</h2>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 18px 0;">
      <div class="premium-def-box">
        <div class="premium-def-title">Type 1</div>
        <h4>Discrete Random Variables</h4>
        <p>Takes on a <strong>countable</strong> number of distinct values (e.g., \(0, 1, 2, \dots\)).</p>
        <p><strong>Examples:</strong> Number of emails received in an hour, number of heads in 10 coin tosses.</p>
        <p><strong>PMF:</strong> \(P(X = x)\) gives the probability that the RV exactly equals a specific value.</p>
        <p><strong>Constraint:</strong> \(\sum P(x) = 1\).</p>
      </div>
      <div class="premium-def-box">
        <div class="premium-def-title">Type 2</div>
        <h4>Continuous Random Variables</h4>
        <p>Can take any value within an interval (e.g., any real number between 0 and 1).</p>
        <p><strong>Examples:</strong> The exact height of a person, the time until a server fails, the weights in a Neural Network.</p>
        <p><strong>PDF:</strong> \(f(x)\) does <strong>not</strong> give the probability of a single point (always 0). The <strong>area under the curve</strong> represents probability.</p>
        <p><strong>Constraint:</strong> \(\int_{-\infty}^{\infty} f(x) dx = 1\).</p>
      </div>
    </div>

    <h2 id="cdf">Cumulative Distribution Function (CDF)</h2>
    <p>The <strong>CDF</strong>, denoted as \(F(x)\), is the probability that the random variable \(X\) will take a value less than or equal to \(x\). It is the "running total" of probability.</p>
    <ul>
      <li><strong>Definition:</strong> \(F(x) = P(X \le x)\)</li>
      <li><strong>For Discrete:</strong> \(F(x) = \sum_{t \le x} P(t)\)</li>
      <li><strong>For Continuous:</strong> \(F(x) = \int_{-\infty}^{x} f(t) dt\)</li>
    </ul>

    <h2 id="derivation">Mathematical Derivation: PDF to Probability</h2>
    <p>Since the probability of a continuous RV at a single point \(P(X = c) = 0\), we calculate the probability over an interval \([a, b]\) using the PDF:</p>
    <div class="math-block">$$P(a \le X \le b) = \int_{a}^{b} f(x) dx$$</div>
    <p>From the fundamental theorem of calculus, if \(F(x)\) is the CDF:</p>
    <div class="math-block">$$P(a \le X \le b) = F(b) - F(a)$$</div>

    <h2 id="examples">3. Illustrative Example: Bernoulli & Uniform</h2>

    <div class="example-box">
      <h4>Discrete Case: Bernoulli Trial (Coin Flip)</h4>
      <p>Let \(X = 1\) for Heads and \(X = 0\) for Tails, with \(P(H) = p\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Define PMF:</strong> \(P(X=x) = p^x (1-p)^{1-x}\) for \(x \in \{0, 1\}\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Construct CDF:</strong> The probability "accumulates" at 0 and 1.</div></div>

      <div class="math-block">$$F(x) = \begin{cases} 0 & x < 0 \\ 1-p & 0 \le x < 1 \\ 1 & x \ge 1 \end{cases}$$</div>
      
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> If \(p=0.7\), the CDF "jumps" from 0 to 0.3 at \(x=0\), and from 0.3 to 1.0 at \(x=1\).</div></div>
    </div>

    <div class="example-box">
      <h4>Continuous Case: Uniform Interval</h4>
      <p>A sensor measures temperature between 20°C and 30°C with equal density. What is \(P(22 < X < 25)\)?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Define PDF:</strong> Height must be \(1/(30-20) = 0.1\) to ensure total area = 1.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Set up Integral:</strong> Probability is the area from 22 to 25.</div></div>

      <div class="math-block">$$P(22 < X < 25) = \int_{22}^{25} 0.1 \, dx = [0.1x]_{22}^{25}$$</div>
      
      <div class="step-box"><span class="step-num">3</span><div><strong>Solve:</strong> \(0.1(25) - 0.1(22) = 2.5 - 2.2 = 0.3\).</div></div>
      
      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Intuition:</strong> For a uniform distribution, the probability is simply the <strong>width of the interval</strong> times the <strong>density height</strong>. \(3 \times 0.1 = 0.3\).</div></div>
    </div>

    <h2 id="expectation-example">4. Illustrative Example: Expectation</h2>
    <div class="example-box">
      <h4>Problem: Expected Value of a Weighted Die</h4>
      <p>A "loaded" die has the following probabilities: \(P(6) = 0.5\), and \(P(1) = P(2) = P(3) = P(4) = P(5) = 0.1\). What is the expected roll \(E[X]\)?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Formula:</strong> \(E[X] = \sum x \cdot P(X=x)\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Sum standard faces:</strong> \((1+2+3+4+5) \times 0.1 = 15 \times 0.1 = 1.5\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Add the loaded face:</strong> \(6 \times 0.5 = 3.0\).</div></div>

      <div class="math-block">$$E[X] = 1.5 + 3.0 = 4.5$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> Even though the die only shows integers, the "average" outcome over many trials is 4.5. This is the "center of mass" of the distribution.</div></div>
    </div>

    <h2 id="implementation">Implementation in Python (SciPy)</h2>
    <p>Machine Learning practitioners use <code>scipy.stats</code> to handle these distributions efficiently.</p>
    <python-code>
import numpy as np
from scipy.stats import norm  # Gaussian/Normal distribution

# Create a continuous distribution (Normal: mean=0, std=1)
mu, sigma = 0, 1
dist = norm(mu, sigma)

# 1. PDF at a point (Density)
print(f"PDF at x=0: {dist.pdf(0):.4f}")

# 2. CDF (P(X <= 0)) -> Should be 0.5 for a symmetric normal distribution
print(f"CDF at x=0: {dist.cdf(0):.4f}")

# 3. Probability between -1 and 1: P(-1 <= X <= 1)
prob_interval = dist.cdf(1) - dist.cdf(-1)
print(f"Probability between -1 and 1: {prob_interval:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Classification:</strong> Softmax output is essentially a <strong>PMF</strong> over the possible classes.</li>
      <li><strong>Anomaly Detection:</strong> We model "normal" data using a <strong>PDF</strong>. If a new data point falls in a region where the PDF value is extremely low (the "tails"), we flag it as an anomaly.</li>
      <li><strong>Generative Models:</strong> GANs and VAEs try to learn the underlying <strong>PDF</strong> of the training data to sample (generate) new images.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>PMF</strong> is for specific outcomes; <strong>PDF</strong> is for intervals.</li>
      <li><strong>CDF</strong> always starts at 0 and ends at 1; it is always non-decreasing.</li>
      <li>In ML, we often assume our error follows a <strong>Continuous Normal Distribution</strong>.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Understanding these variables allows us to summarize data by calculating <strong><a href="#/mathematics/probability/expectation-variance">Expectation and Variance</a></strong>.
    </div>
  `},a={id:"expectation-variance",title:"Expectation & Variance",description:"While Probability Distributions give us the 'shape' of data, Expectation and Variance provide the summary statistics that describe that shape.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📐 Probability · Expectation &amp; Variance</div>
      <h1>Expectation &amp; Variance</h1>
      <p>While Probability Distributions give us the "shape" of data, <strong>Expectation and Variance</strong> provide the summary statistics that describe that shape. In Machine Learning, we use these to understand the "center" of our predictions and how much they "spread" or vary. These concepts are foundational for understanding <strong>Loss Functions</strong>, <strong>Regularization</strong>, and <strong>PCA</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#core">Core Theory: Summarizing Distributions</a>
      <a href="#core" class="sub">↳ 1. Expectation E[X]</a>
      <a href="#core" class="sub">↳ 2. Variance Var(X)</a>
      <a href="#core" class="sub">↳ 3. Covariance Cov(X, Y)</a>
      <a href="#core" class="sub">↳ 4. Correlation ρ</a>
      <a href="#derivation">Mathematical Derivation: Variance Shortcut</a>
      <a href="#example">4. Illustrative Example: Portfolio Risk</a>
      <a href="#scaling-example">5. Illustrative Example: Scaling & Shifts</a>
      <a href="#implementation">Implementation in Python (NumPy)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Random Variables:</strong> Understanding Discrete (PMF) and Continuous (PDF) variables.</li>
        <li><strong>Basic Calculus:</strong> Summation \((\sum)\) and Integration \((\int)\).</li>
      </ul>
    </div>

    <h2 id="core">Core Theory: Summarizing Distributions</h2>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 20px 0;">
      <div class="premium-def-box">
        <div class="premium-def-title">Concept 1</div>
        <h4>Expectation E[X] or μ</h4>
        <p>The weighted average of all possible values. The "center of mass" of the distribution.</p>
        <p style="margin-top:8px"><strong>Discrete:</strong> \(E[X] = \sum x \cdot P(X=x)\)</p>
        <p><strong>Continuous:</strong> \(E[X] = \int_{-\infty}^{\infty} x \cdot f(x) dx\)</p>
      </div>
      <div class="premium-def-box">
        <div class="premium-def-title">Concept 2</div>
        <h4>Variance Var(X) or σ²</h4>
        <p>Measures the spread of the RV around its mean. High variance = far from mean.</p>
        <p style="margin-top:8px"><strong>Formula:</strong> \(Var(X) = E[(X - E[X])^2]\)</p>
        <p><strong>Shortcut:</strong> \(Var(X) = E[X^2] - (E[X])^2\)</p>
      </div>
      <div class="premium-def-box">
        <div class="premium-def-title">Concept 3</div>
        <h4>Covariance Cov(X, Y)</h4>
        <p>Indicates the <em>direction</em> of the linear relationship between two RVs.</p>
        <ul style="margin-top:8px;font-size:13.5px">
          <li><strong>Positive:</strong> Both increase together.</li>
          <li><strong>Negative:</strong> One up, other down.</li>
          <li><strong>Zero:</strong> No linear relationship.</li>
        </ul>
      </div>
      <div class="premium-def-box">
        <div class="premium-def-title">Concept 4</div>
        <h4>Correlation ρ<sub>X,Y</sub></h4>
        <p>The <em>normalized</em> version of covariance. Always between <strong>−1 and 1</strong>, making it easier to interpret.</p>
        <p style="margin-top:8px"><strong>Formula:</strong> \(\rho_{X,Y} = \dfrac{Cov(X, Y)}{\sigma_X \sigma_Y}\)</p>
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation: Variance Shortcut</h2>
    <p>It is often easier to calculate variance using the shortcut formula. Here is the step-by-step derivation:</p>

    <div class="step-box"><span class="step-num">1</span><div><strong>Definition:</strong> \(Var(X) = E[(X - \mu)^2]\) where \(\mu = E[X]\).</div></div>
    <div class="step-box"><span class="step-num">2</span><div><strong>Expand Square:</strong> \(E[X^2 - 2X\mu + \mu^2]\).</div></div>
    <div class="step-box"><span class="step-num">3</span><div><strong>Linearity:</strong> \(E[X^2] - E[2X\mu] + E[\mu^2]\).</div></div>
    <div class="step-box"><span class="step-num">4</span><div><strong>Constants:</strong> \(E[X^2] - 2\mu E[X] + \mu^2 = E[X^2] - 2\mu^2 + \mu^2\).</div></div>
    <div class="step-box"><span class="step-num">5</span><div><strong>Simplify:</strong></div></div>
    <div class="math-block">$$Var(X) = E[X^2] - (E[X])^2$$</div>

    <h2 id="example">4. Illustrative Example: Portfolio Risk</h2>
    <div class="example-box">
      <h4>Problem: Two-Stock Variance</h4>
      <p>Consider two stocks \(X\) and \(Y\) with returns \(E[X] = 10, E[Y] = 12\) and variances \(Var(X) = 4, Var(Y) = 9\). If their covariance is \(2\), what is the variance of a 50/50 portfolio \(P = 0.5X + 0.5Y\)?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Expectation (Linearity):</strong> \(E[P] = 0.5(10) + 0.5(12) = 11\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Variance Rule:</strong> \(Var(aX + bY) = a^2Var(X) + b^2Var(Y) + 2abCov(X, Y)\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Substitute:</strong> \(0.25(4) + 0.25(9) + 2(0.5)(0.5)(2)\).</div></div>

      <div class="math-block">$$Var(P) = 1 + 2.25 + 1 = 4.25$$</div>
      
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Insight:</strong> The portfolio variance (4.25) is lower than simply averaging the individual variances \((4+9)/2 = 6.5\) because the stocks are not perfectly correlated. This is "Diversification" in action.</div></div>
    </div>

    <h2 id="scaling-example">5. Illustrative Example: Scaling & Shifts</h2>
    <div class="example-box">
      <h4>Problem: Mean & Variance Transformations</h4>
      <p>Imagine your data \(X\) has mean \(\mu=5\) and variance \(\sigma^2=16\). You transform the data by multiplying by 3 and adding 10: \(Y = 3X + 10\). What are the new mean and variance?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>New Mean:</strong> \(E[3X + 10] = 3E[X] + 10 = 3(5) + 10 = 25\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>New Variance:</strong> \(Var(3X + 10) = 3^2 Var(X) = 9(16) = 144\).</div></div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> Mean shifts linearly \((25)\). Variance scales by the <strong>square</strong> of the multiplier \((144)\). Added constants (10) change the mean but have <strong>zero effect</strong> on variance (spread).</div></div>
    </div>

    <h2 id="implementation">Implementation in Python (NumPy)</h2>
    <python-code>
import numpy as np

# Sample data: Years of Experience vs Salary (scaled)
experience = np.array([1, 2, 3, 4, 5, 6])
salary = np.array([45, 50, 60, 58, 70, 85])

# Mean
mean_exp = np.mean(experience)

# Variance
var_exp = np.var(experience)

# Covariance Matrix
# Returns [[Var(X), Cov(X,Y)], [Cov(Y,X), Var(Y)]]
cov_matrix = np.cov(experience, salary)
covariance = cov_matrix[0, 1]

# Correlation
correlation = np.corrcoef(experience, salary)[0, 1]

print(f"Correlation: {correlation:.4f}")  # Close to 1 (Strong positive)
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Bias-Variance Tradeoff:</strong> High variance in a model leads to <strong>Overfitting</strong>, where the model captures noise instead of the underlying pattern.</li>
      <li><strong>PCA (Principal Component Analysis):</strong> This technique works by finding the directions (eigenvectors) that maximize the <strong>Variance</strong> of the data.</li>
      <li><strong>Standardization:</strong> We transform features to have <strong>Mean = 0</strong> and <strong>Variance = 1</strong> so that gradient descent converges faster.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Expectation</strong> is the "average" outcome.</li>
      <li><strong>Variance</strong> is the "risk" or uncertainty.</li>
      <li><strong>Covariance/Correlation</strong> tell us how features move together.</li>
      <li><strong>Linearity of Expectation:</strong> \(E[aX + b] = aE[X] + b\). This is extremely useful in simplifying complex ML equations.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Now that we can summarize data using mean and variance, we can dive into <strong><a href="#/mathematics/probability/probability-distributions">Common Distributions</a></strong> to see the mathematical "shapes" of different stochastic processes.
    </div>
  `},s={id:"probability-distributions",title:"Probability Distributions",description:"A probability distribution is a mathematical function that provides the probabilities of occurrence of different possible outcomes. Choosing the right distribution is the first step in building any probabilistic model.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📉 Probability · Distributions</div>
      <h1>Probability Distributions</h1>
      <p>In Machine Learning, we don't just look at individual data points; we look at the <strong>distribution</strong> they follow. A probability distribution is a mathematical function that provides the probabilities of occurrence of different possible outcomes. Choosing the right distribution is the first step in building any probabilistic model, from <strong>Logistic Regression</strong> to <strong>Variational Autoencoders</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#discrete">Discrete Distributions</a>
      <a href="#discrete" class="sub">↳ 1. Bernoulli · 2. Binomial · 3. Poisson</a>
      <a href="#continuous">Continuous Distributions</a>
      <a href="#continuous" class="sub">↳ 4. Gaussian · 5. Uniform · 6. Exponential · 7. Laplace</a>
      <a href="#derivation">Mathematical Derivation: Gaussian to Standard Normal</a>
      <a href="#binomial-example">3. Illustrative Example: Binomial (Successes)</a>
      <a href="#gaussian-example">4. Illustrative Example: Gaussian (Z-score)</a>
      <a href="#implementation">Implementation in Python (SciPy)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Random Variables:</strong> Knowing the difference between Discrete and Continuous.</li>
        <li><strong>PMF/PDF:</strong> Understanding how we measure probability for different types of variables.</li>
        <li><strong>Expectation &amp; Variance:</strong> These are the "parameters" that define the shape of the distributions below.</li>
      </ul>
    </div>

    <h2 id="discrete">Discrete Distributions</h2>
    <p>These are used when outcomes are countable (e.g., Yes/No, number of clicks).</p>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 20px 0;">
      <div class="premium-def-box">
        <div class="premium-def-title">Discrete · #1</div>
        <h4>Bernoulli Distribution</h4>
        <p>The simplest distribution. Models a single trial with two outcomes: Success \((x=1)\) or Failure \((x=0)\).</p>
        <p><strong>Parameter:</strong> \(p\) (Probability of success).</p>
        <p><strong>PMF:</strong> \(P(x) = p^x(1-p)^{1-x}\)</p>
        <div style="font-size:12.5px; color:var(--muted-premium); margin-top:8px;"><strong>ML Use:</strong> The output of a binary classifier (before thresholding) is a Bernoulli parameter.</div>
      </div>
      <div class="premium-def-box">
        <div class="premium-def-title">Discrete · #2</div>
        <h4>Binomial Distribution</h4>
        <p>Models the number of successes in \(n\) independent Bernoulli trials.</p>
        <p><strong>Parameters:</strong> \(n\) (trials), \(p\) (success probability).</p>
        <p><strong>PMF:</strong> \(P(x) = \binom{n}{x} p^x (1-p)^{n-x}\)</p>
        <div style="font-size:12.5px; color:var(--muted-premium); margin-top:8px;"><strong>ML Use:</strong> Modeling the number of users who will click an ad out of a batch of 100.</div>
      </div>
      <div class="premium-def-box" style="grid-column: span 2;">
        <div class="premium-def-title">Discrete · #3</div>
        <h4>Poisson Distribution</h4>
        <p>Models the number of events occurring in a fixed interval of time or space.</p>
        <p><strong>Parameter:</strong> \(\lambda\) (Average rate of occurrence).</p>
        <p><strong>PMF:</strong> \(P(x) = \dfrac{e^{-\lambda} \lambda^x}{x!}\)</p>
        <div style="font-size:12.5px; color:var(--muted-premium); margin-top:8px;"><strong>ML Use:</strong> Predicting the number of support tickets received per day or web traffic spikes.</div>
      </div>
    </div>

    <h2 id="continuous">Continuous Distributions</h2>
    <p>These model data that can take any real value (e.g., height, time, pixel intensity).</p>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 20px 0;">
      <div class="premium-def-box" style="grid-column: span 2;">
        <div class="premium-def-title">Continuous · #4 — The "King"</div>
        <h4>Gaussian (Normal) Distribution</h4>
        <p>The "King" of distributions due to the <strong>Central Limit Theorem</strong>. It is symmetric and bell-shaped.</p>
        <p><strong>Parameters:</strong> \(\mu\) (mean), \(\sigma^2\) (variance).</p>
        <p><strong>PDF:</strong> \(f(x) = \dfrac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}\)</p>
        <div style="font-size:12.5px; color:var(--muted-premium); margin-top:8px;"><strong>ML Use:</strong> Standardizing features, Gaussian Naive Bayes, and modeling noise in Linear Regression.</div>
      </div>
      <div class="my-10" style="grid-column: span 2;">
        <visualizer topic="Distributions" />
      </div>
      <div class="premium-def-box">
        <div class="premium-def-title">Continuous · #5</div>
        <h4>Uniform Distribution</h4>
        <p>All outcomes in the interval \([a, b]\) are equally likely.</p>
        <p><strong>Parameters:</strong> \(a\) (start), \(b\) (end).</p>
        <div style="font-size:12.5px; color:var(--muted-premium); margin-top:8px;"><strong>ML Use:</strong> Weight initialization in Neural Networks (e.g., Xavier/Glorot initialization).</div>
      </div>
      <div class="premium-def-box">
        <div class="premium-def-title">Continuous · #6</div>
        <h4>Exponential Distribution</h4>
        <p>Models the time between events in a Poisson process (time until the next event).</p>
        <p><strong>Parameter:</strong> \(\lambda\) (rate).</p>
        <div style="font-size:12.5px; color:var(--muted-premium); margin-top:8px;"><strong>ML Use:</strong> Survival analysis, modeling the "Time-to-Click" in marketing.</div>
      </div>
      <div class="premium-def-box" style="grid-column: span 2;">
        <div class="premium-def-title">Continuous · #7</div>
        <h4>Laplace Distribution</h4>
        <p>Similar to Gaussian but with a sharper peak and "heavier tails."</p>
        <p><strong>Parameters:</strong> \(\mu\) (location), \(b\) (scale).</p>
        <div style="font-size:12.5px; color:var(--muted-premium); margin-top:8px;"><strong>ML Use:</strong> Linked to <strong>L1 Regularization (Lasso)</strong>. While Gaussian noise leads to L2, Laplace noise leads to L1, encouraging sparsity in models.</div>
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation: Gaussian to Standard Normal</h2>
    <p>To compare different Gaussian distributions, we transform them into the <strong>Standard Normal Distribution</strong> \((\mu=0, \sigma=1)\) using the <strong>Z-score</strong>:</p>
    <div class="math-block">$$Z = \frac{x - \mu}{\sigma}$$</div>
    <p>If \(X \sim \mathcal{N}(\mu, \sigma^2)\), then \(Z \sim \mathcal{N}(0, 1)\). This is the math behind <code>StandardScaler</code> in Scikit-Learn.</p>

    <h2 id="binomial-example">3. Illustrative Example: Binomial (Binary Successes)</h2>
    <div class="example-box">
      <h4>Problem: Tracking Clicks on Ad Impressions</h4>
      <p>An ad has a Click-Through Rate (CTR) of \(p=0.1\). If we show it to \(n=5\) users, what is the probability that <strong>exactly 2</strong> will click?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Apply Formula:</strong> \(P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Plug in Values:</strong> \(\binom{5}{2} = 10\). Calculated as \(\frac{5!}{2!3!} = 10\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Solve:</strong> \(10 \times (0.1)^2 \times (0.9)^3\).</div></div>

      <div class="math-block">$$P(X=2) = 10 \times 0.01 \times 0.729 = 0.0729$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> There is a ~7.3% chance of getting exactly 2 clicks. Note how the probability drops off as we move away from the expectation of \(np = 0.5\).</div></div>
    </div>

    <h2 id="gaussian-example">4. Illustrative Example: Gaussian (Z-score)</h2>
    <div class="example-box">
      <h4>Problem: Standardizing "Wait Times"</h4>
      <p>A server's response time follows \(\mathcal{N}(500ms, 100^2)\). If a request takes \(650ms\), how many standard deviations from the mean is it?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Recall Formula:</strong> \(Z = \frac{x - \mu}{\sigma}\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Calculate:</strong> \(Z = \frac{650 - 500}{100} = \frac{150}{100} = 1.5\).</div></div>

      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Intuition:</strong> A Z-score of 1.5 means the request was significantly slower than average. In ML, we often <strong>clip</strong> values with Z-scores \(|Z| > 3\) as they are likely outliers.</div></div>
    </div>

    <h2 id="implementation">Implementation in Python (SciPy)</h2>
    <python-code>
import numpy as np
from scipy import stats

# 1. Binomial: 10 tosses, p=0.5. Prob of getting exactly 5 heads?
prob_5_heads = stats.binom.pmf(5, n=10, p=0.5)

# 2. Poisson: Avg 3 emails/hour. Prob of getting 5 emails?
prob_5_emails = stats.poisson.pmf(5, mu=3)

# 3. Gaussian: Mean 100, Std 15 (IQ score). Prob of IQ < 85?
prob_lower_iq = stats.norm.cdf(85, loc=100, scale=15)

print(f"Binomial (5 Heads): {prob_5_heads:.4f}")
print(f"Poisson (5 Emails): {prob_5_emails:.4f}")
print(f"Gaussian (IQ < 85): {prob_lower_iq:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>L1 vs L2 Regularization:</strong> L2 assumes weights follow a Gaussian prior; L1 assumes they follow a Laplace prior.</li>
      <li><strong>Maximum Likelihood Estimation (MLE):</strong> We pick distribution parameters that make the observed data most likely.</li>
      <li><strong>Initialization:</strong> Uniform and Gaussian distributions are the defaults for starting weight values in Deep Learning.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Normal (Gaussian)</strong> is the default for most natural phenomena.</li>
      <li><strong>Bernoulli</strong> is for binary choices \((0/1)\).</li>
      <li><strong>Laplace</strong> is "pointier" than Gaussian and handles outliers differently.</li>
      <li><strong>Poisson</strong> is for counts; <strong>Exponential</strong> is for time between counts.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Understanding single-variable distributions leads directly to <strong><a href="#/mathematics/probability/multivariate-probability">Multivariate Probability</a></strong>, where we model complex feature vectors.
    </div>
  `},o={id:"multivariate-probability",title:"Multivariate Probability",description:"Multivariate Probability provides the tools to model multiple related variables simultaneously and understand how they interact, moving beyond single-feature analysis.",color:"#FFA000",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🌐 Probability · Multivariate</div>
      <h1>Multivariate Probability</h1>
      <p>In the previous sections, we looked at a single random variable (e.g., the height of a person). In Machine Learning, however, we deal with <strong>feature vectors</strong> containing multiple related variables (e.g., height, weight, and age). <strong>Multivariate Probability</strong> provides the tools to model these variables simultaneously and understand how they interact.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#perspectives">Core Theory: The Three Perspectives</a>
      <a href="#perspectives" class="sub">↳ 1. Joint Distribution P(X, Y)</a>
      <a href="#perspectives" class="sub">↳ 2. Marginal Distribution P(X)</a>
      <a href="#perspectives" class="sub">↳ 3. Conditional Distribution P(X|Y)</a>
      <a href="#marginal-example">4. Illustrative Example: Marginalization</a>
      <a href="#covariance-example">5. Illustrative Example: Covariance</a>
      <a href="#implementation">Implementation in Python (Multivariate Gaussian)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Basic Probability Axioms:</strong> Rules for single variables.</li>
        <li><strong>Random Variables:</strong> Difference between discrete and continuous.</li>
        <li><strong>Expectation &amp; Variance:</strong> Specifically the concept of <strong>Covariance</strong>.</li>
      </ul>
    </div>

    <h2 id="perspectives">Core Theory: The Three Perspectives</h2>
    <p>When dealing with two variables \(X\) and \(Y\), we look at them in three specific ways:</p>

    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin: 20px 0;">
      <div class="premium-def-box">
        <div class="premium-def-title">Perspective 1</div>
        <h4>Joint Distribution</h4>
        <p>\(P(X, Y)\) or \(f(x, y)\)</p>
        <p style="margin-top:8px">Probability that \(X\) and \(Y\) occur <em>together</em>.</p>
        <p><strong>Discrete:</strong> \(P(X=x, Y=y)\)</p>
        <p><strong>Continuous:</strong> surface in 3D space.</p>
        <p><strong>Constraint:</strong> \(\sum\sum P(x,y) = 1\)</p>
      </div>
      <div class="premium-def-box">
        <div class="premium-def-title">Perspective 2</div>
        <h4>Marginal Distribution</h4>
        <p>\(P(X)\) or \(P(Y)\)</p>
        <p style="margin-top:8px">"Summing out" one variable. Like looking at a 3D object from the side.</p>
        <p><strong>Discrete:</strong> \(P(X=x) = \sum_{y} P(x, y)\)</p>
        <p><strong>Continuous:</strong> \(f_X(x) = \int f(x, y) dy\)</p>
      </div>
      <div class="premium-def-box">
        <div class="premium-def-title">Perspective 3</div>
        <h4>Conditional Distribution</h4>
        <p>\(P(X|Y)\)</p>
        <p style="margin-top:8px">Distribution of \(X\) given \(Y\) has a specific value. A "slice" of the joint, re-normalized.</p>
        <p><strong>Formula:</strong> \(P(X|Y) = \dfrac{P(X, Y)}{P(Y)}\)</p>
      </div>
    </div>

    <h2 id="rules">3. Core Rules of Probability</h2>
    <div class="example-box">
      <h4>The "Laws of Physics" for ML Inference</h4>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>The Sum Rule (Marginalization):</strong> To find \(P(X)\), we "sum out" all \(Y\)'s.</div></div>
      <div class="math-block">$$P(X) = \sum_{Y} P(X, Y)$$</div>
      
      <div class="step-box"><span class="step-num">2</span><div><strong>The Product Rule:</strong> Relates Joint and Conditional.</div></div>
      <div class="math-block">$$P(X, Y) = P(Y|X)P(X)$$</div>
      
      <div class="step-box"><span class="step-num">3</span><div><strong>Combined Form (Bayes):</strong></div></div>
      <div class="math-block">$$P(Y|X) = \frac{P(X|Y)P(Y)}{\sum_{Y} P(X|Y)P(Y)}$$</div>

      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Why?</strong> The denominator is the <strong>Evidence</strong>. It ensures the posterior probabilities sum to 1. In complex ML models, this sum is often impossible to compute directly, leading to <strong>Variational Inference</strong>.</div></div>
    </div>

    <h2 id="marginal-example">4. Illustrative Example: The Weather Dataset</h2>
    <div class="example-box">
      <h4>Problem: Extracting Marginals from Joint Data</h4>
      <p>Consider a simplified joint distribution of Weather (\(X\)) and mood (\(Y\)):</p>
      
      <div class="premium-table-wrap">
        <table class="premium-table">
          <thead><tr><th></th><th>Happy (Y=1)</th><th>Neutral (Y=0)</th></tr></thead>
          <tbody>
            <tr><td><strong>Sunny (X=1)</strong></td><td>0.60</td><td>0.10</td></tr>
            <tr><td><strong>Rainy (X=0)</strong></td><td>0.05</td><td>0.25</td></tr>
          </tbody>
        </table>
      </div>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Find Marginal P(Sunny):</strong> Sum across the first row: \(0.60 + 0.10 = 0.70\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Find Marginal P(Happy):</strong> Sum down the first column: \(0.60 + 0.05 = 0.65\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Conditional P(Happy | Rainy):</strong> Focus only on \(X=0\) row and normalize.</div></div>

      <div class="math-block">$$P(Y=1|X=0) = \frac{0.05}{0.05 + 0.30} = \frac{0.05}{0.35} \approx 0.143$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Interpretation:</strong> While the overall probability of happiness is 65%, seeing "Rainy" weather drops it drastically to ~14%.</div></div>
    </div>

    <h2 id="covariance-example">5. Illustrative Example: Covariance</h2>
    <div class="example-box">
      <h4>Problem: Analyzing Multi-Sensor Data</h4>
      <p>Two sensors \(X\) and \(Y\) measure temperature at different locations. We observe 3 pairs: \((10, 12), (15, 17), (20, 22)\). The means are \(\mu_x = 15, \mu_y = 17\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Covariance:</strong> \(Cov(X, Y) = \frac{1}{n} \sum (x_i - \mu_x)(y_i - \mu_y)\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Calculate:</strong> \((-5 \times -5) + (0 \times 0) + (5 \times 5) = 25 + 0 + 25 = 50\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Result:</strong> \(50 / 3 \approx 16.67\).</div></div>

      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Insight:</strong> The positive covariance tells us the sensors move together (syncronized). In ML, this redundancy is the core principle behind PCA dimension reduction.</div></div>
    </div>

    <h2 id="implementation">Implementation in Python (Multivariate Gaussian)</h2>
    <python-code>
import numpy as np
from scipy.stats import multivariate_normal

# Parameters for two variables (e.g., Height and Weight)
mean = [170, 70]  # Mean height 170cm, mean weight 70kg
# Covariance matrix: Positive correlation between height and weight
cov = [[10, 8],
       [8, 10]]

# Define the Joint Distribution
rv = multivariate_normal(mean, cov)

# 1. Joint PDF at a specific point (175cm, 75kg)
joint_pdf = rv.pdf([175, 75])

# 2. To get Marginal P(Height), we just look at the first mean and first variance
# X ~ N(170, 10)

print(f"Joint Density at [175, 75]: {joint_pdf:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Generative Models:</strong> In models like <strong>GMMs (Gaussian Mixture Models)</strong>, we model the joint distribution of data and cluster assignments.</li>
      <li><strong>Kalman Filters:</strong> Used in robotics/tracking; they update the joint distribution of a robot's position and velocity over time.</li>
      <li><strong>Information Theory:</strong> Concepts like <strong>Mutual Information</strong> are derived from the difference between the joint distribution \(P(X,Y)\) and the product of the marginals \(P(X)P(Y)\).</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Joint:</strong> The whole "world" (\(X\) AND \(Y\)).</li>
      <li><strong>Marginal:</strong> Collapsing the world down to one dimension (\(X\) ONLY).</li>
      <li><strong>Conditional:</strong> Focusing on a specific slice of the world (\(X\) GIVEN \(Y\)).</li>
      <li><strong>Independence:</strong> If \(P(X,Y) = P(X)P(Y)\), then knowing \(Y\) tells you nothing about \(X\).</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Once we can model multiple variables, we need to understand the theoretical safety net of <strong><a href="#/mathematics/probability/laws">Probability Laws (LLN & CLT)</a></strong>.
    </div>
  `},n={id:"laws",title:"Law of Large Numbers & Central Limit Theorem",description:"The Law of Large Numbers (LLN) and the Central Limit Theorem (CLT) explain why we can trust data samples to represent a whole population, justifying model generalization.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">⚖️ Probability · Laws</div>
      <h1>Law of Large Numbers &amp; Central Limit Theorem</h1>
      <p>The <strong>Law of Large Numbers (LLN)</strong> and the <strong>Central Limit Theorem (CLT)</strong> are the two most important pillars of statistics. They explain why we can trust data samples to represent a whole population. In Machine Learning, these laws justify why training a model on a finite dataset (a sample) allows it to generalize to the real world (the population).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#lln">1. Law of Large Numbers (LLN)</a>
      <a href="#clt">2. Central Limit Theorem (CLT)</a>
      <a href="#clt" class="sub">↳ Core Properties</a>
      <a href="#lln-example">4. Illustrative Example: LLN (Coin Flips)</a>
      <a href="#clt-example">5. Illustrative Example: CLT (Dice Sums)</a>
      <a href="#implementation">Implementation in Python (Visualizing CLT)</a>
      <a href="#applications">Applications in ML</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Expectation &amp; Variance:</strong> Mean \((\mu)\) and spread \((\sigma^2)\) of a distribution.</li>
        <li><strong>Random Variables:</strong> Understanding that data points are outcomes of a process.</li>
        <li><strong>Sampling:</strong> The act of selecting a subset of data from a larger set.</li>
      </ul>
    </div>

    <h2 id="lln">1. Law of Large Numbers (LLN)</h2>
    <div class="premium-callout success" style="border-width: 2px;">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; font-weight: 600;">LLN — Law of Large Numbers</div>
      <p>The LLN states that as the number of independent and identically distributed (<strong>i.i.d.</strong>) random trials increases, their observed average (sample mean) will get closer and closer to the theoretical average (population mean).</p>
    </div>

    <h3>The "Why"</h3>
    <p>If you flip a fair coin 10 times, you might get 7 heads (70%). But if you flip it 10,000 times, the percentage of heads will almost certainly be very close to 50%. The "noise" of individual randomness cancels out as the sample size grows.</p>

    <p><strong>Mathematical Definition:</strong></p>
    <p>For a sequence of i.i.d. variables \(X_1, X_2, \dots, X_n\) with mean \(\mu\):</p>
    <div class="math-block">$$\bar{X}_n \to \mu \text{ as } n \to \infty$$</div>

    <h2 id="clt">2. Central Limit Theorem (CLT)</h2>
    <div class="premium-callout info" style="border-width: 2px;">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; font-weight: 600;">CLT — Central Limit Theorem</div>
      <p>The CLT is arguably the most powerful tool in an ML Engineer's toolkit. It states that if you take sufficiently large random samples from <strong>any</strong> population (regardless of the original distribution's shape), the distribution of the <strong>sample means</strong> will be approximately <strong>Gaussian (Normal)</strong>.</p>
    </div>

    <h3>Core Properties</h3>
    <ol>
      <li>The mean of the sample means will be equal to the population mean \((\mu)\).</li>
      <li>The variance of the sample means will be \(\frac{\sigma^2}{n}\) (Standard Error).</li>
      <li>The "shape" becomes a bell curve as \(n\) increases (usually \(n \ge 30\) is sufficient).</li>
    </ol>

    <p><strong>Mathematical Definition:</strong></p>
    <div class="math-block">$$\bar{X}_n \approx \mathcal{N}\!\left(\mu, \frac{\sigma^2}{n}\right)$$</div>
    <div class="my-10">
      <visualizer topic="Distributions" />
    </div>

    <h2 id="se">Mathematical Derivation: Standard Error</h2>
    <p>Why does the spread of our sample mean decrease as we collect more data?</p>

    <div class="step-box"><span class="step-num">1</span><div><strong>Sum of Variables:</strong> Let \(S_n = X_1 + X_2 + \dots + X_n\).</div></div>
    <div class="step-box"><span class="step-num">2</span><div><strong>Summed Variance:</strong> For independent variables, \(Var(S_n) = n\sigma^2\).</div></div>
    <div class="step-box"><span class="step-num">3</span><div><strong>Mean Variable:</strong> We define the sample mean as \(\bar{X}_n = \frac{S_n}{n}\).</div></div>
    <div class="step-box"><span class="step-num">4</span><div><strong>Scaling Variance:</strong> Using \(Var(aX) = a^2 Var(X)\):</div></div>
    <div class="math-block">$$Var\!\left(\frac{1}{n} S_n\right) = \frac{1}{n^2} (n\sigma^2) = \frac{\sigma^2}{n}$$</div>
    
    <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Conclusion:</strong> As \(n \to \infty\), the variance \(\frac{\sigma^2}{n} \to 0\). This proves that the sample mean becomes an increasingly precise estimate of the truth.</div></div>

    <h2 id="lln-example">4. Illustrative Example: LLN (Trial Convergence)</h2>
    <div class="example-box">
      <h4>Problem: Tracking the Mean of a Fair Coin</h4>
      <p>If you flip a coin and record the cumulative fraction of Heads, how does it behave over time?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>At \(n=10\):</strong> You might see 7 Heads (70%). The noise is high.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>At \(n=100\):</strong> You might see 53 Heads (53%). The noise is shrinking.</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>At \(n=10,000\):</strong> You might see 5002 Heads (50.02%).</div></div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> Observed mean stabilizes at the theoretical mean (0.5). In ML, this ensures that training on 1M images gives a representative model of the real world.</div></div>
    </div>

    <h2 id="clt-example">5. Illustrative Example: CLT (Emergence of Normality)</h2>
    <div class="example-box">
      <h4>Problem: Summing Uniform Die Rolls</h4>
      <p>A single die roll is flat (Uniform). What is the distribution of the <strong>average</strong> of 30 rolls?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Single Roll:</strong> Probability of 1, 2, 3, 4, 5, 6 is exactly \(1/6\). (Square/Flat shape).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Sample Mean:</strong> Roll 30 dice and take the average. Repeat this process 1,000 times.</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Observation:</strong> Plotting these 1,000 averages creates a <strong>Gaussian Bell Curve</strong>.</div></div>

      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>ML Insight:</strong> This is why Gaussian noise / Residuals are so common in ML. Most errors are the "sum" of many tiny, independent random effects, which naturally form a Normal distribution.</div></div>
    </div>

    <h2 id="implementation">Implementation in Python (Visualizing CLT)</h2>
    <python-code>
import numpy as np

# 1. Create a highly non-normal population (Exponential)
population = np.random.exponential(scale=2, size=100000)

# 2. Take 1000 samples of size 50 and calculate their means
sample_means = [np.mean(np.random.choice(population, 50)) for _ in range(1000)]

print(f"Sample Means (first 5): {sample_means[:5]}")
# In a real environment, you'd plot these to see the bell curve.
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Confidence Intervals:</strong> Since we know the distribution of sample means is Gaussian (thanks to CLT), we can say with 95% confidence where the true population parameter lies.</li>
      <li><strong>Hypothesis Testing:</strong> A/B testing relies on the CLT to determine if a change in a website's UI actually improved the click-through rate or if the result was just random noise.</li>
      <li><strong>Stochastic Gradient Descent (SGD):</strong> We update model weights using a small "batch" (sample) of data because the LLN guarantees that the average gradient of the batch is a good estimate of the gradient for the entire dataset.</li>
    </ul>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>LLN</strong> guarantees that our estimate is <strong>accurate</strong> (converges to truth).</li>
      <li><strong>CLT</strong> gives us the <strong>distribution of the error</strong> (it will be Gaussian).</li>
      <li><strong>\(n=30\):</strong> The magic number where most distributions start looking Normal.</li>
      <li><strong>Independence:</strong> Both laws require samples to be independent.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> These laws provide the theoretical safety net. Now that we know samples represent populations, move to <strong><a href="#/mathematics/probability/bayes-mle">Maximum Likelihood Estimation (MLE)</a></strong> to find the parameters that best describe your data.
    </div>
  `},r={id:"bayes-mle",title:"Bayes' Theorem & MLE",description:"Maximum Likelihood Estimation (MLE) and Bayesian Inference are two different philosophies for 'training' a model by finding the best parameters for a probability distribution.",color:"#FFC107",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎯 Probability · Bayes' Theorem & MLE</div>
      <h1>Bayes' Theorem &amp; MLE</h1>
      <p>Maximum Likelihood Estimation (MLE) and Bayesian Inference are two different philosophies for "training" a model. While one finds the single "best" parameter, the other treats parameters as uncertainty-filled distributions. This section bridges the gap between <strong>Probability Theory</strong> and <strong>Machine Learning Practice</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#intro">1. The Need for Estimation</a>
      <a href="#bayes">2. Bayes' Theorem Revisited</a>
      <a href="#likelihood">3. Likelihood vs. Probability</a>
      <a href="#mle">4. Maximum Likelihood Estimation (MLE)</a>
      <a href="#mle-example">5. Illustrative Example: MLE (Coin Bias)</a>
      <a href="#map-example">6. Illustrative Example: MAP (Beta Prior)</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Bayes' Theorem:</strong> The formula \(P(H|E) = \frac{P(E|H)P(H)}{P(E)}\).</li>
        <li><strong>Probability Distributions:</strong> Gaussian \(\mathcal{N}(\mu, \sigma^2)\) and Bernoulli.</li>
        <li><strong>Calculus:</strong> Finding the maximum of a function using derivatives.</li>
      </ul>
    </div>

    <h2 id="intro">1. The Need for Estimation</h2>
    <p>In pure probability, we assume we know the parameters (e.g., "The coin is fair, \(p=0.5\)"). In Machine Learning, we have the opposite: we have the <strong>data</strong> (the flips), and we must estimate the <strong>parameters</strong> (is the coin fair?).</p>

    <h2 id="bayes">2. Bayes' Theorem Revisited</h2>
    <p>In estimation, we rewrite Bayes' Theorem using parameters \((\theta)\) and data \((D)\):</p>
    <div class="math-block">$$P(\theta|D) = \frac{P(D|\theta) \cdot P(\theta)}{P(D)}$$</div>

    <div class="premium-toc" style="background: transparent; border: none; padding: 0;">
      <div class="perspectives-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 18px 0;">
        <div class="persp-card" style="background: var(--bg-tertiary); border: 1px solid var(--border-premium); border-radius: 8px; padding: 14px 16px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin-bottom: 6px;">P(θ|D) — Posterior</div>
          <p style="margin: 0; font-size: 13.5px; font-weight: 300;">What we believe about the parameters AFTER seeing the data.</p>
        </div>
        <div class="persp-card" style="background: var(--bg-tertiary); border: 1px solid var(--border-premium); border-radius: 8px; padding: 14px 16px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin-bottom: 6px;">P(D|θ) — Likelihood</div>
          <p style="margin: 0; font-size: 13.5px; font-weight: 300;">How well the parameters explain the observed data.</p>
        </div>
        <div class="persp-card" style="background: var(--bg-tertiary); border: 1px solid var(--border-premium); border-radius: 8px; padding: 14px 16px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin-bottom: 6px;">P(θ) — Prior</div>
          <p style="margin: 0; font-size: 13.5px; font-weight: 300;">What we believed BEFORE seeing the data (e.g., "Most coins are fair").</p>
        </div>
        <div class="persp-card" style="background: var(--bg-tertiary); border: 1px solid var(--border-premium); border-radius: 8px; padding: 14px 16px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin-bottom: 6px;">P(D) — Evidence</div>
          <p style="margin: 0; font-size: 13.5px; font-weight: 300;">A constant that ensures the total probability is 1.</p>
        </div>
      </div>
    </div>

    <h2 id="likelihood">3. Likelihood vs. Probability</h2>
    <div class="example-box">
      <h4>The "Inversion" of Perspective</h4>
      <p>Imagine a coin with success probability \(\theta\). You flip it and get Heads (H).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Probability \(P(H|\theta=0.5)\):</strong> You fix the coin as fair. The chance of H is \(0.5\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Likelihood \(L(\theta=0.5|H)\):</strong> You fix the data (Heads). How well does "fairness" explain this observation?</div></div>

      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Crucially:</strong> Likelihood is <strong>not</strong> a probability distribution. It doesn't sum to 1. It is a "score" of how well parameters fit the facts.</div></div>
    </div>

    <h2 id="mle">4. Maximum Likelihood Estimation (MLE)</h2>
    <p>MLE asks: "Which parameter \(\theta\) makes the observed data \(D\) most probable?" It ignores the Prior \(P(\theta)\) entirely.</p>
    <div class="math-block">$$\hat{\theta}_{MLE} = \arg\max_{\theta} P(D|\theta)$$</div>

    <h2 id="mle-example">5. Illustrative Example: MLE (Estimating Coin Bias)</h2>
    <div class="example-box">
      <h4>Problem: Finding the "Most Likely" \(\theta\)</h4>
      <p>In 10 flips of a mysterious coin, you see 8 Heads and 2 Tails. What is the MLE estimate of \(\theta\)?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Likelihood Function:</strong> \(L(\theta) = \theta^8 (1-\theta)^2\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Log-Likelihood:</strong> \(\ln L(\theta) = 8 \ln \theta + 2 \ln(1-\theta)\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Optimize:</strong> Set derivative to zero: \(\frac{8}{\theta} - \frac{2}{1-\theta} = 0\).</div></div>

      <div class="math-block">$$8(1-\theta) = 2\theta \implies 8 = 10\theta \implies \hat{\theta}_{MLE} = 0.8$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> MLE perfectly matches the observed frequency (8/10). It assumes the data is all that matters.</div></div>
    </div>

    <h2 id="map-example">6. Illustrative Example: MAP (Beta Prior)</h2>
    <div class="example-box">
      <h4>Problem: When Priors Pull Back</h4>
      <p>Using the same 8/10 data, but now we have a <strong>Prior</strong> that the coin is fair (\(\mu=0.5\)). This prior behaves like having seen 2 virtual Heads and 2 virtual Tails previously.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Posterior Logic:</strong> Combine observed (8H, 2T) with prior (2H, 2T).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>New Totals:</strong> 10 Heads, 4 Tails. Total flips = 14.</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>MAP Estimate:</strong> \(\hat{\theta}_{MAP} = \frac{10}{14} \approx 0.71\).</div></div>

      <div class="callout warn"><div class="callout-icon">⚠️</div><div class="callout-body"><strong>Result:</strong> See how the Prior "pulled" the estimate from 0.8 back towards 0.5? This is <strong>Regularization</strong>. It prevents the model from overreacting to a small sample of 10 flips.</div></div>
    </div>

    <h2 id="comparison">MLE vs. MAP</h2>
    <p><strong>MAP (Maximum A Posteriori)</strong> is like MLE but it includes the Prior belief:</p>
    <div class="math-block">$$\hat{\theta}_{MAP} = \arg\max_{\theta} P(D|\theta) \cdot P(\theta)$$</div>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead><tr><th>Feature</th><th>MLE</th><th>MAP</th></tr></thead>
        <tbody>
          <tr><td><strong>Formula</strong></td><td>Maximize Likelihood only.</td><td>Maximize Likelihood \(\times\) Prior.</td></tr>
          <tr><td><strong>ML Analogy</strong></td><td>Standard Training.</td><td>Training with <strong>Regularization</strong>.</td></tr>
          <tr><td><strong>Data Sensitivity</strong></td><td>Can overfit if data is small.</td><td>More robust; pulls towards the Prior.</td></tr>
          <tr><td><strong>Outcome</strong></td><td>A single "best" point estimate.</td><td>A single "best" point estimate.</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Likelihood:</strong> Measures how well parameters fit data.</li>
      <li><strong>MLE:</strong> Picks \(\theta\) that maximizes likelihood \(P(D|\theta)\).</li>
      <li><strong>MAP:</strong> Picks \(\theta\) that maximizes \(P(\theta|D)\) by using a Prior.</li>
      <li><strong>Regularization:</strong> In Machine Learning, adding a penalty (like L2) is mathematically identical to using a <strong>Gaussian Prior</strong> in MAP estimation.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Theory is best solidified through practice. Let's look at <strong><a href="#/mathematics/probability/bayes-mle-examples">Practical Examples</a></strong> of Spam Filtering and Coin Tosses.
    </div>
  `},l={id:"bayes-mle-examples",title:"Practical Examples",description:"Solidify your understanding of Bayes' Theorem and Maximum Likelihood Estimation with practical examples: Spam Filtering and a Bernoulli Coin Toss.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📝 Solved Examples · Bayes' Theorem &amp; MLE</div>
      <h1>Bayes' Theorem &amp; MLE: Practical Examples</h1>
      <p>Solidify your understanding of <strong>Bayes' Theorem</strong> and <strong>Maximum Likelihood Estimation (MLE)</strong> with two of the most famous examples in Machine Learning: Spam Filtering (Bayesian) and the Bernoulli Coin Toss (MLE).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#spam">Example 1: The Bayesian Spam Filter</a>
      <a href="#spam" class="sub">↳ The "Naive" Assumption</a>
      <a href="#coin">Example 2: Bernoulli MLE (Coin Toss)</a>
      <a href="#coin" class="sub">↳ Using the Log-Likelihood Trick</a>
      <a href="#coin" class="sub">↳ Finding the Global Maximum</a>
      <a href="#interpretation">Interpretation for ML</a>
    </div>

    <h2 id="spam">Example 1: The Bayesian Spam Filter</h2>
    <div class="example-box">
      <h4>Problem: Does this email contain spam?</h4>
      <p>Given an email with the subject <strong>"Free Winner"</strong>, we want to calculate the probability it is Spam \((S)\).</p>
      <ul>
        <li><strong>Prior \(P(S)\):</strong> From our history, 40% of emails are Spam \((0.4)\).</li>
        <li><strong>Likelihoods:</strong>
          <ul>
            <li>\(P(\text{"Free"}|S) = 0.8\), \(P(\text{"Winner"}|S) = 0.6\)</li>
            <li>\(P(\text{"Free"}|\text{Not }S) = 0.1\), \(P(\text{"Winner"}|\text{Not }S) = 0.05\)</li>
          </ul>
        </li>
      </ul>

      <p><strong>Step-by-step Solution:</strong></p>
      <div class="step-box"><div class="step-num">1</div><div><strong>Joint Likelihood (Naive Assumption):</strong> We assume "Free" and "Winner" are independent given Spam.
\[P(\text{"Free", "Winner"}|S) = 0.8 \times 0.6 = 0.48\]</div></div>
      <div class="step-box"><div class="step-num">2</div><div><strong>Joint Likelihood (Not Spam):</strong>
\[P(\text{"Free", "Winner"}|\text{Not }S) = 0.1 \times 0.05 = 0.005\]</div></div>
      <div class="step-box"><div class="step-num">3</div><div><strong>Apply Bayes' Theorem (Numerator only for now):</strong>
<ul>
  <li>Posterior for Spam \(\propto 0.48 \times 0.4 = 0.192\)</li>
  <li>Posterior for Not Spam \(\propto 0.005 \times 0.6 = 0.003\)</li>
</ul></div></div>
      <div class="step-box"><div class="step-num">4</div><div><strong>Normalize:</strong>
\[P(S|\text{Data}) = \frac{0.192}{0.192 + 0.003} = \frac{0.192}{0.195} \approx 0.985\]</div></div>
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> There is a <strong>98.5%</strong> chance the email is Spam.</div></div>
    </div>

    <h2 id="coin">Example 2: Bernoulli MLE (Coin Toss)</h2>
    <p>How do we actually <em>calculate</em> the best parameter \(p\) if we flip a coin \(n\) times and get \(k\) heads?</p>

    <div class="example-box">
      <h4>Mathematical Walkthrough</h4>
      <p>Data \(D = \{x_1, x_2, \dots, x_n\}\). For each flip, \(P(x_i) = p^{x_i}(1-p)^{1-x_i}\).</p>

      <div class="step-box"><div class="step-num">1</div><div><strong>Total Likelihood:</strong>
\[L(p) = \prod_{i=1}^n p^{x_i}(1-p)^{1-x_i} = p^k(1-p)^{n-k}\] (where \(k = \sum x_i\) is the number of heads).</div></div>
      <div class="step-box"><div class="step-num">2</div><div><strong>Apply Log-Likelihood trick:</strong>
\[\log(L(p)) = k \log(p) + (n-k) \log(1-p)\]</div></div>
      <div class="step-box"><div class="step-num">3</div><div><strong>Take the derivative with respect to \(p\):</strong>
\[\frac{d}{dp} \log(L(p)) = \frac{k}{p} - \frac{n-k}{1-p}\]</div></div>
      <div class="step-box"><div class="step-num">4</div><div><strong>Set to zero to find the maximum:</strong>
\[\frac{k}{p} = \frac{n-k}{1-p} \implies k(1-p) = p(n-k)\]
\[k - kp = np - kp \implies \hat{p} = \frac{k}{n}\]</div></div>
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Intuitive Result:</strong> The Best MLE for the parameter \(p\) is simply the <strong>fraction of heads</strong> we saw in our sample!</div></div>
    </div>

    <h2 id="interpretation">Interpretation for ML</h2>
    <ul>
      <li><strong>Spam Filter:</strong> Shows how Bayes' Theorem handles "Updating evidence."</li>
      <li><strong>Coin Toss:</strong> Shows how MLE provides the formula for "Learning from data."</li>
      <li>In Linear Regression, the formula for the weights is derived exactly like the Coin Toss example, but using the <strong>Gaussian Likelihood</strong> instead of the Bernoulli Likelihood!</li>
    </ul>

    <div class="linking-rule">
      <strong>Final Step:</strong> Now that you've mastered <strong>Probability</strong>, you can transition into <strong><a href="#/mathematics/statistics/descriptive-statistics">Statistics</a></strong>, where we use these tools to analyze real-world datasets and infer population properties.
    </div>
  `},d={id:"probability",title:"Probability",description:"Probability is the mathematical framework for quantifying uncertainty. In ML, it allows us to move beyond binary 'Yes/No' logic and embrace the nuanced reality of 'How likely is this?'.",keyConcepts:[{title:"Basic Axioms",description:"Sample spaces, Kolmogorov axioms, and the building blocks of uncertainty."},{title:"Bayes' Theorem",description:"Updating beliefs based on evidence: Posterior, Likelihood, and Priors."},{title:"Random Variables",description:"Discrete (PMF) vs. Continuous (PDF) mappings of stochastic processes."},{title:"Expectation & Variance",description:"Summarizing distributions: Center (Mean) and Spread (Variance/Covariance)."},{title:"Common Distributions",description:"Bernoulli, Gaussian, Poisson, and Laplace — the shapes of data."},{title:"Multivariate Probability",description:"Joint, Marginal, and Conditional distributions for feature vectors."},{title:"LLN & CLT",description:"The Law of Large Numbers and Central Limit Theorem: WHY samples work."},{title:"Estimation (MLE/MAP)",description:"Finding the 'best' parameters for a distribution using Likelihood."},{title:"Practical Inference",description:"Solved examples: Spam filtering and Bernoulli MLE coin tosses."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Probability: <span class="text-accent italic">Mastering Uncertainty</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          Data is messy, noisy, and incomplete. <strong>Probability</strong> is the mathematical bridge that allows us to move from binary "Yes/No" thinking to the nuanced reality of modern AI. It’s what allows a model to say "I am 87% sure this is a face."
        </p>
        
        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          Machine Learning is fundamentally about inference—using past evidence to make predictions about the unknown. Probability provides the formal framework to quantify exactly how much we know, how much we don't, and how our beliefs should change as new data arrives.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- Why It Matters -->
      <div class="space-y-10">
        <div class="flex items-center gap-4">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-accent font-semibold">Why It Matters</h3>
        </div>
        
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          Models don't just calculate values; they estimate likelihoods. Uncertainty is the only constant.
        </p>

        <ul class="space-y-8 list-none pl-0">
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Bayesian Reasoning</strong>
              <p class="text-muted-premium font-normal">We use <strong>Prior</strong> knowledge and new <strong>Evidence</strong> to calculate a <strong>Posterior</strong> belief. This is how models "update" their understanding of the world.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Stochastic Processes</strong>
              <p class="text-muted-premium font-normal">Many real-world systems are random. Understand <strong>Random Variables</strong> and <strong>Distributions</strong> to model the "inner life" of these physical and digital systems.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Expectation & Risk</strong>
              <p class="text-muted-premium font-normal">By calculating <strong>Expected Values</strong> and <strong>Variance</strong>, we can measure the potential "risk" or error in our model's predictions.</p>
            </div>
          </li>
        </ul>
      </div>

      <hr class="border-border-premium/50" />

      <!-- Core Concepts -->
      <div class="space-y-10">
        <div class="flex items-center gap-4">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-accent font-semibold">Core Concepts to Master</h3>
        </div>

        <p class="text-lg text-text-premium font-normal leading-relaxed">
          To build a strong probabilistic intuition, we will focus on these key pillars:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Bayes' Theorem</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">The cornerstone of probabilistic updating and belief propagation.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Probability Distributions</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">The "shapes" that data can take, from Normal/Gaussian to Bernoulli.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Joint & Marginal Probability</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Understanding how different features depend on or exclude one another.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Independence</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">The critical assumption that simplifies massive multi-feature models.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Likelihood vs. Probability</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">The distinction that powers Maximum Likelihood Estimation (MLE).</p>
          </div>
        </div>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <div class="flex items-center gap-4">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-accent font-semibold">What to Expect</h3>
        </div>

        <p class="text-lg text-text-premium font-normal leading-relaxed">
          We move beyond rolling dice and flipping coins. You will learn how to update your beliefs—and your model's weights—when new data arrives, transforming from a deterministic coder to a probabilistic master.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "Probability is the very guide of life."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Marcus Cicero</span>
          </div>
        </div>

        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          By the end of this module, you'll see why a spam filter, a face recognizer, and a self-driving car all deal with the same fundamental currency: **Likelihood.**
        </p>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to measure uncertainty?</p>
        <a 
          href="/#/mathematics/probability/basic-axioms" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Basic Axioms
        </a>
      </div>

    </div>
  `,sections:[e,i,t,a,s,o,n,r,l]};export{d as PROBABILITY_DATA};
