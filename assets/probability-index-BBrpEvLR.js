const e={id:"random-variables",title:"Random Variables",description:"A Random Variable is a mathematical function that maps the outcomes of a random experiment to real numbers. It is the fundamental object of probability.",color:"#FF6F00",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Random Variables</div>
      <h1>Random Variables: Quantifying Chance</h1>
      <p>A <strong>Random Variable</strong> (RV) is the bridge between actual physical events (like flipping a coin) and the world of numbers. In Machine Learning, every data point is a realization of some underlying random variable.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Definition</a>
      <a href="#example-coin">Example 1: Discrete (Coin Flips)</a>
      <a href="#example-wait">Example 2: Continuous (Wait Times)</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Sample Space</strong>: The set of all possible outcomes.</li>
        <li><strong>Basic Functions</strong>: Mapping inputs to outputs.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>Math doesn't like "Heads" or "Tails." It likes 0s and 1s. A Random Variable is the "Translator" that takes an outcome from the messy real world and turns it into a number we can actually perform math on. Without them, we couldn't calculate averages, variances, or train any model.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of a Random Variable as a <strong>Scorecard</strong>. 
        The experiment happens behind a curtain (e.g., a customer buys a product). 
        The Random Variable is the number on the scorecard (e.g., the price they paid). 
        Different customers (outcomes) result in different scores.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <p>A Random Variable \(X\) is a function \(X: S \to \mathbb{R}\) that maps every element in the sample space \(S\) to a real number. We categorize them into two types:</p>
    <ul>
      <li><strong>Discrete:</strong> Outcomes you can count (e.g., number of clicks, dice rolls).</li>
      <li><strong>Continuous:</strong> Outcomes you can measure (e.g., height, time, temperature).</li>
    </ul>

    <h2 id="example-coin">Example 1: Discrete (Coin Flips)</h2>
    <div class="example-box">
      <h4>Problem: Mapping Binary Outcomes</h4>
      <p>You flip a coin 3 times. Let \(X\) be the number of Heads. Find the values \(X\) can take.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify Sample Space:</strong> \(S = \{HHH, HHT, HTH, THH, TTH, THT, HTT, TTT\}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Mapping:</strong> If outcome is \(TTH\), \(X(TTH) = 1\). If \(HHH\), \(X(HHH) = 3\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Range:</strong> \(X \in \{0, 1, 2, 3\}\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We've successfully converted 8 abstract outcomes into a simple set of numbers. This is the first step toward calculating the "Average" number of heads.
        </div>
      </div>
    </div>

    <h2 id="example-wait">Example 2: Continuous (Wait Times)</h2>
    <div class="example-box">
      <h4>Problem: Tracking Continuous Events</h4>
      <p>Let \(Y\) be the time (in minutes) you wait for a bus. What values can \(Y\) take?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> You can wait 2.5 minutes, 2.51 minutes, or forever.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Set:</strong> \(Y \in [0, \infty)\).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Unlike the coin flip, we can't list every possible wait time. This makes it a <strong>Continuous Random Variable</strong>, which we handle using Probability Density Functions (PDFs) instead of simple lists.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

# Simulate a Discrete RV: Number of Heads in 10 flips
def simulate_coin_flips(n=10):
    return np.random.randint(0, 2, size=n).sum()

print(f"Outcome of X: {simulate_coin_flips()} heads")

# Simulate a Continuous RV: Wait time (Exponential distribution)
wait_time = np.random.exponential(scale=5) # average wait is 5 mins
print(f"Outcome of Y: {wait_time:.2f} minutes")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Target Labels</strong>: In classification, your target \(y\) is a random variable that can take values like \(\{0, 1, 2\}\).</li>
      <li><strong>Feature Realization</strong>: Every feature in your dataset is a realization of a random variable (e.g., House Price).</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Random Variables take values. But how often? Explore <strong><a href="#/mathematics/probability/probability-distributions">Probability Distributions</a></strong>.
    </div>
  `},t={id:"probability-distributions",title:"Probability Distributions",description:"A Probability Distribution is a mathematical function that provides the probabilities of occurrence of different possible outcomes in an experiment.",color:"#FF6F00",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Distributions</div>
      <h1>Probability Distributions: The Shapes of Chance</h1>
      <p>A <strong>Probability Distribution</strong> is the "Shape" of a Random Variable. It tells us exactly how likely different outcomes are. In Machine Learning, we almost always assume our data follows some distribution (like the "Bell Curve") to make predictions.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Definition</a>
      <a href="#example-bernoulli">Example 1: Bernoulli (Success vs. Failure)</a>
      <a href="#example-normal">Example 2: Normal (The Bell Curve)</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Random Variables</strong>: Discrete vs. Continuous.</li>
        <li><strong>Integrals</strong>: For calculating areas under continuous curves.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>A Random Variable says: <em>"The weather could be 60, 70, or 80 degrees."</em> A Distribution says: <em>"It is 10% likely to be 60, 80% likely to be 70, and 10% likely to be 80."</em> Distributions allow us to model <strong>Uncertainty</strong>. Instead of saying "The house price will be exactly $500k," we say "Prices follow a distribution centered at $500k."</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of a Probability Distribution as a <strong>Heat Map</strong>. 
        Where the map is "hot" (high probability), outcomes are common. 
        Where the map is "cold," outcomes are rare. 
        In ML, we want to find the parameters of this map that best explain the data we've already seen.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <ul>
      <li><strong>Probability Mass Function (PMF)</strong>: For Discrete RVs, \(P(X=x)\). The sum of all probabilities must be 1.</li>
      <li><strong>Probability Density Function (PDF)</strong>: For Continuous RVs, \(f(x)\). The total area under the curve must be 1.</li>
    </ul>

    <h2 id="example-bernoulli">Example 1: Bernoulli (Success vs. Failure)</h2>
    <div class="example-box">
      <h4>Problem: Tracking a 1-Trial Experiment</h4>
      <p>A "Success" happens with probability \(p=0.7\). What is the PMF?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Let \(X=1\) be success and \(X=0\) be failure.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Mapping:</strong> \(P(X=1) = 0.7\); \(P(X=0) = 0.3\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> This is the simplest possible distribution. It's the building block for <strong>Binary Classification</strong> models (Cat vs. Not Cat).
        </div>
      </div>
    </div>

    <h2 id="example-normal">Example 2: Normal (The Bell Curve)</h2>
    <div class="example-box">
      <h4>Problem: Capturing Collective Data Distributions</h4>
      <p>Heights are Normally distributed with mean \(\mu = 70\) and standard deviation \(\sigma = 3\). Find the probability that someone is exactly 70 inches tall.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> For continuous variables, the probability of an "exact" point is zero! We measure intervals instead.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Measure:</strong> The probability of someone being <strong>between</strong> 67 and 73 inches is 68% (The 1-Sigma Rule).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> In the Real World, most common errors (noise) result from many tiny independent factors. When added together, they almost always form this Bell Curve. This is why we use <strong>Gaussian Naive Bayes</strong>.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np
import matplotlib.pyplot as plt

# Bernoulli trials
successes = np.random.binomial(1, 0.7, size=100)

# Normal distribution
data = np.random.normal(0, 1, 1000)

print(f"Mean of Normal Data: {data.mean():.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Softmax Layer</strong>: The final output of a neural network is a probability distribution over classes.</li>
      <li><strong>Gaussian Models</strong>: In anomaly detection, we model the "Normal" behavior and flag anything that falls too far into the tails.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we have two random variables that affect each other? Explore <strong><a href="#/mathematics/probability/joint-distributions">Joint Distributions</a></strong>.
    </div>
  `},i={id:"joint-distributions",title:"Joint Distributions",description:"A Joint Distribution allows us to model a multi-dimensional random variable. It tells us the probability of two or more events occurring together.",color:"#FF6F00",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Joint</div>
      <h1>Joint Distributions: Modeling Multiple Variables</h1>
      <p>A <strong>Joint Distribution</strong> (\(P(X, Y)\)) is a mathematical function that models the probability of two or more random variables occurring at the same time. In Machine Learning, we don't just care about one feature; we care about the <strong>Interaction</strong> between all our features.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Definition</a>
      <a href="#example-scatter">Example 1: Scatter of Features</a>
      <a href="#example-marginal">Example 2: Marginalizing Out a Variable</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Probability Distributions</strong>: Scalar PMFs and PDFs.</li>
        <li><strong>Set Intersection</strong>: Understanding \(P(A \cap B)\).</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>A single distribution for "Heads/Tails" is simple. But what if you are modeling "House Price" <strong>and</strong> "Number of Bedrooms"? They aren't independent—high bedrooms usually mean high price. <strong>Joint Distributions</strong> allow us to track this relationship. If we know the joint distribution of our data, we have the "God's Eye View" of the entire dataset.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of a Joint Distribution like a <strong>2D Histogram</strong>. 
        Instead of just one axis of data, you have two. 
        The "peaks" on this map tell you which combinations of (X, Y) are most common. 
        In ML, we use this to find out if features are correlated or if they are "moving" together in predictable ways.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <ul>
      <li><strong>Joint Probability Mass Function (PMF):</strong> \(P(X=x, Y=y)\). The sum over all x and y must be 1.</li>
      <li><strong>Marginal Distribution:</strong> To find the probability of just one variable, you "sum out" (marginalize) the others: \(P(X=x) = \sum_{y} P(x, y)\).</li>
    </ul>

    <h2 id="example-scatter">Example 1: Scatter of Binary Features</h2>
    <div class="example-box">
      <h4>Problem: Tracking Clicks and Purchases</h4>
      <p>Let \(X=1\) be a customer who clicked a link, and \(Y=1\) be a customer who made a purchase. The joint probabilities are:</p>
      <table>
        <tr><th></th><th>Y=0 (No)</th><th>Y=1 (Yes)</th></tr>
        <tr><th>X=0 (No Click)</th><td>0.6</td><td>0.1</td></tr>
        <tr><th>X=1 (Click)</th><td>0.05</td><td>0.25</td></tr>
      </table>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Find the probability that a customer clicks <strong>and</strong> purchases. \(P(1, 1) = 0.25\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Summing:</strong> The total must be 1: \(0.6 + 0.1 + 0.05 + 0.25 = 1.0\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Most customers don't click and don't buy (0.6). But knowing the click (\(X=1\)) significantly shifts our expectation that they might buy.
        </div>
      </div>
    </div>

    <h2 id="example-marginal">Example 2: Marginalizing Out a Variable</h2>
    <div class="example-box">
      <h4>Problem: Finding the Overall Click-Rate</h4>
      <p>Given the table above, what is the probability that a customer clicks, regardless of whether they buy?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Formula:</strong> \(P(X=1) = P(1, 0) + P(1, 1)\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Calculate:</strong> \(0.05 + 0.25 = 0.30\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> 30% of our customers click. By "Marginalizing" out the purchase variable, we simplified a 2D problem back down to a 1D problem.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

# A joint probability table (2x2)
# Rows: Income (Low, High)
# Cols: Default (No, Yes)
joint_table = np.array([
    [0.7, 0.1],  # Low income
    [0.15, 0.05] # High income
])

# Marginalizing to find "Overall Default Rate" (Sum over rows)
marginal_default = joint_table.sum(axis=0)

print(f"Overall Default Rate: {marginal_default[1]*100}%")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Generative Models</strong>: Models like GANs try to learn the "Joint Distribution" \(P(X, Y)\) to create new, realistic data points from scratch.</li>
      <li><strong>Feature Selection</strong>: We check the joint distribution to see if two features are redundant.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we already <em>know</em> one variable? How does that change the probability of the other? Explore <strong><a href="#/mathematics/probability/conditional-probability">Conditional Probability</a></strong>.
    </div>
  `},a={id:"conditional-probability",title:"Conditional Probability",description:"Conditional Probability measures the likelihood of an event occurring given that another event has already happened. It is the key to 'Updating' our knowledge.",color:"#FF6F00",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Conditional</div>
      <h1>Conditional Probability: Updated Beliefs</h1>
      <p><strong>Conditional Probability</strong> (\(P(A|B)\)) measures the likelihood of Event A occurring, <strong>given</strong> that Event B is already known to have happened. In Machine Learning, this is the "Secret Sauce" that allows us to refine a prediction as we receive new data.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example-die">Example 1: Die Roll Given > 3</a>
      <a href="#example-test">Example 2: Diagnostic Test Accuracy</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Joint Probability</strong>: Understanding \(P(A, B)\).</li>
        <li><strong>Sample Space</strong>: The set of all possibilities.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>Normally, your perspective covers the entire universe. But once I tell you "Condition B is true," your world shrinks. You are no longer interested in the parts of the universe that don't satisfy B. <strong>Conditional Probability</strong> is the "Shrinking Universe" intuition—it forces us to focus only on the survivors of that condition.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of Conditional Probability as a <strong>"Filter."</strong> 
        Imagine a pool of 1,000 customers. You want to know if someone will buy. 
        Once I tell you "They put an item in the cart" (Condition B), you <strong>filter out</strong> everyone who didn't. 
        Your universe is now smaller, and the likelihood of a purchase is much higher. 
        In ML, we use this "filter" to calculate the odds of a class given the input features.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <div class="math-block">$$P(A|B) = \frac{P(A \cap B)}{P(B)}, \text{ where } P(B) > 0$$</div>
    <p>This says the "New Probability" is the ratio of people who did <strong>both</strong> to people who did <strong>at least B</strong>.</p>

    <h2 id="example-die">Example 1: Die Roll Given > 3</h2>
    <div class="example-box">
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
    </div>

    <h2 id="example-test">Example 2: Diagnostic Test Accuracy</h2>
    <div class="example-box">
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
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
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
  `},s={id:"independence",title:"Independence",description:"Two events are Independent if knowing that one occurred does not change the probability of the other. It is the core assumption of Naive Bayes.",color:"#FF6F00",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Independence</div>
      <h1>Independence: Zero Information</h1>
      <p>Two events \(A\) and \(B\) are <strong>Independent</strong> if the occurrence of one provides <strong>Zero Information</strong> about the probability of the other. In Machine Learning, we often assume features are independent—this is known as the "Naive" assumption in Naive Bayes.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Definition</a>
      <a href="#example-coin">Example 1: Independent Coin Tosses</a>
      <a href="#example-exclusive">Example 2: Mutually Exclusive vs. Independent</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Conditional Probability</strong>: Understanding \(P(A|B)\).</li>
        <li><strong>Joint Probability</strong>: Understanding \(P(A \cap B)\).</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>If you tell me "It is raining," my probability of "Someone buying an umbrella" increases. These events are <strong>Dependent</strong>. But if you tell me "My coin land on Heads," does that affect the probability of "It raining"? No. Those events are <strong>Independent</strong>. Understanding independence allows us to simplify complex joint probabilities into simple products.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of Independence as <strong>"Emotional Distance."</strong> 
        If two variables are independent, they don't care about each other. 
        They don't share any secrets. 
        In ML, we love independence because it lets us calculate massive joint probabilities by just <strong>multiplying</strong> them (\(P(A) \times P(B) \times P(C)\)).
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <div class="math-block">$$P(A \cap B) = P(A) \cdot P(B)$$</div>
    <p>...which also implies that the conditional probability doesn't move: \(P(A|B) = P(A)\).</p>

    <h2 id="example-coin">Example 1: Independent Coin Tosses</h2>
    <div class="example-box">
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
    </div>

    <h2 id="example-exclusive">Example 2: Mutually Exclusive vs. Independent</h2>
    <div class="example-box">
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
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
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
  `},o={id:"expectation",title:"Expectation (Expected Value)",description:"The Expected Value is the 'Average' outcome of a random variable over an infinite number of trials. It is the center of gravity of a distribution.",color:"#FF6F00",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Expectation</div>
      <h1>Expectation: The Long-term Average</h1>
      <p>The <strong>Expected Value</strong> \(\mathbb{E}[X]\) is the average outcome you would get if you repeated a random experiment infinitely many times. In Machine Learning, we optimize models to minimize the <strong>Expected Loss</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Definition</a>
      <a href="#example-payoff">Example 1: Long-term Average Payoff</a>
      <a href="#example-weighted">Example 2: Weighted Sum of Features</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Random Variables</strong>: Discrete vs. Continuous.</li>
        <li><strong>Probability Distributions</strong>: Understanding weights (PMFs).</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>A Probability Distribution says: <em>"Anything could happen."</em> Expectation says: <em>"On average, this is what will happen."</em> It is the <strong>Balance Point</strong> of your distribution. If a distribution is a see-saw, the Expected Value is exactly where you would place the fulcrum to keep it level. In ML, every prediction is essentially an "Expected Value" calculated from the data.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of Expected Value as a <strong>"Fair Bet."</strong> 
        If you play a game 1,000 times, you'll sometimes win big and sometimes lose. 
        Your <strong>Expectation</strong> is the number that tells you if, in the long run, you'll walk away with more money than you started with. 
        In ML, we don't care about a single "lucky" training batch; we care about the <strong>Expected Performance</strong> across all future data.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <p>For a discrete random variable \(X\) with values \(x_i\) and probabilities \(p_i\):</p>
    <div class="math-block">$$\mathbb{E}[X] = \sum_{i} x_i P(X = x_i)$$</div>
    <p><strong>Linearity:</strong> \(\mathbb{E}[aX + b] = a\mathbb{E}[X] + b\). The average of a sum is the sum of the averages!</p>

    <h2 id="example-payoff">Example 1: Long-term Average Payoff</h2>
    <div class="example-box">
      <h4>Problem: Evaluating a Lottery</h4>
      <p>A ticket costs $5. You have a 1% chance to win $400 and a 99% chance to win $0. What is your expectation?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> \(X \in \{400, 0\}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Calculate:</strong> \(\mathbb{E}[X] = (400 \times 0.01) + (0 \times 0.99) = 4\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Interpret:</strong> Your "Expected Payoff" is $4.</div>
        </div>
      </div>

      <div class="callout error">
        <div class="callout-icon">✕</div>
        <div class="callout-body">
          <strong>Result:</strong> Since the ticket costs $5 but only yields $4 on average, you will <strong>lose $1</strong> per ticket in the long run. The Expected Value is your reality check.
        </div>
      </div>
    </div>

    <h2 id="example-weighted">Example 2: Weighted Sum of Features</h2>
    <div class="example-box">
      <h4>Problem: Finding the Center of Data</h4>
      <p>Data shows scores: [10, 10, 10, 50]. What's the expected score?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify Probabilities:</strong> \(P(10) = 0.75\); \(P(50) = 0.25\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Calculate:</strong> \(\mathbb{E}[X] = (10 \times 0.75) + (50 \times 0.25) = 7.5 + 12.5 = 20\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> 20 is the "Average" score. In Linear Regression, your prediction is essentially calculating this weighted expectation from the input features.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

# Outcomes and their probabilities
values = np.array([0, 10, 100])
probs = np.array([0.5, 0.4, 0.1]) # sum = 1.0

# Expected Value: Sum(x * p)
expected_val = np.sum(values * probs)

print(f"Mathematical Expectation: {expected_val}")

# Empirical check through simulation
simulated_trials = np.random.choice(values, size=100000, p=probs)
print(f"Simulated Average: {simulated_trials.mean():.2f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Cost Functions (Risk)</strong>: We minimize the <strong>Expected Loss</strong> (\(MSE\) or Cross-Entropy) because we want a model that is correct <em>on average</em>.</li>
      <li><strong>Reinforcement Learning</strong>: An agent chooses actions that maximize the <strong>Expected Reward</strong> over time.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Knowing the average is helpful. But how much do individual results "stray" from that average? Explore <strong><a href="#/mathematics/probability/variance">Variance</a></strong>.
    </div>
  `},n={id:"variance",title:"Variance",description:"Variance measures the 'Spread' or 'Volatility' of a random variable. It tells us how far individual values typically are from the average.",color:"#FF6F00",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Spread</div>
      <h1>Variance: Measuring Volatility</h1>
      <p><strong>Variance</strong> (\(\sigma^2\) or \(\text{Var}[X]\)) is the mathematical measure of <strong>Discrepancy</strong>. It tells us if our model's predictions are tightly clustered around the target or if they are wildly inconsistent.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Definition</a>
      <a href="#example-risk">Example 1: Risk in Investment</a>
      <a href="#example-error">Example 2: Variance of Model Errors</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Expectation</strong>: Understanding the center of gravity (\(\mu\)).</li>
        <li><strong>Standard Deviation</strong>: The square root of variance (\(\sigma\)).</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>Expectation (Average) tells you where your data is <strong>centered</strong>. Variance tells you how much your data <strong>mistrusts</strong> that center. A high variance model is "noisy" and unpredictable. A low variance model is consistent. In ML, we often trade off some accuracy (Bias) to get a more consistent model (Low Variance).</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of Variance as <strong>"Drunkenness."</strong> 
        If you walk in a straight line, your variance is zero. 
        If you stumble randomly back and forth while moving forward, your <strong>average path</strong> might still be a straight line, but your <strong>Variance</strong> is high. 
        In ML, high variance weights mean your model hasn't "converged" and is still stumbling around the solution.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <p>Variance is the <strong>Expected Squared Deviation</strong> from the mean \(\mu\):</p>
    <div class="math-block">$$\text{Var}[X] = \mathbb{E}[(X - \mu)^2]$$</div>
    <p><strong>Common Shortcut:</strong> \(\text{Var}[X] = \mathbb{E}[X^2] - (\mathbb{E}[X])^2\). (Mean of squares minus square of means).</p>

    <h2 id="example-risk">Example 1: Risk in Investment</h2>
    <div class="example-box">
      <h4>Problem: Comparing Two Stocks</h4>
      <p>Stock A pays $5 every day. Stock B pays $20 half the time and -$10 the other half.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Stock A:</strong> \(\mathbb{E}[A] = 5\). Variance = 0. (Safe, consistent).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Stock B:</strong> \(\mathbb{E}[B] = (20 \times 0.5) + (-10 \times 0.5) = 5\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Variance B:</strong> \((20-5)^2 \times 0.5 + (-10-5)^2 \times 0.5 = 15^2 \times 0.5 + (-15)^2 \times 0.5 = 225\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Both stocks have an <strong>Expectation of $5</strong>. But Stock B has high <strong>Variance (225)</strong>. This is why we use variance as a proxy for "Risk."
        </div>
      </div>
    </div>

    <h2 id="example-error">Example 2: Variance of Model Errors</h2>
    <div class="example-box">
      <h4>Problem: Measuring Reliability</h4>
      <p>Data: Predictions are off by [-1, 2, 0, -1]. Calculate the variance of the error.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Mean Error:</strong> \(\mu = (-1+2+0-1)/4 = 0\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Sum Squares:</strong> \((-1-0)^2 + (2-0)^2 + (0-0)^2 + (-1-0)^2 = 1 + 4 + 0 + 1 = 6\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Variance:</strong> \(6 / 4 = 1.5\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> 1.5. This tells us our "Expected deviation" from the correct answer is fairly small. This is the foundation of <strong>Least Squares Regression</strong>.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

# Sample data
data = np.array([10, 20, 20, 30, 70])

# Mean
mu = data.mean()

# Variance
var = data.var() # default is population variance

# Standard Deviation (the square root)
std = data.std()

print(f"Variance: {var}, Std Dev: {std:.2f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Overfitting (Bias-Variance Tradeoff)</strong>: Models that are too complex have very low bias but extremely high <strong>Variance</strong> on new data (they "memorize" the noise).</li>
      <li><strong>Principal Component Analysis (PCA)</strong>: PCA works by finding the directions (eigenvectors) that have the <strong>Maximum Variance</strong>.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> What happens to the average when we take more and more samples? Explore <strong><a href="#/mathematics/probability/law-of-large-numbers">The Law of Large Numbers</a></strong>.
    </div>
  `},r={id:"law-of-large-numbers",title:"Law of Large Numbers (LLN)",description:"The Law of Large Numbers states that as the number of trials increases, the sample average will converge to the true theoretical average.",color:"#FF6F00",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · LLN</div>
      <h1>Law of Large Numbers: The Anchor</h1>
      <p>The <strong>Law of Large Numbers (LLN)</strong> is the "Anchor" of probability. It mathematically guarantees that if you take enough samples, the <strong>Sample Mean</strong> will eventually land on the <strong>True Theoretical Mean</strong> of the population.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Definition</a>
      <a href="#example-casino">Example 1: The Casino's House Edge</a>
      <a href="#example-sample">Example 2: Sample Mean Convergence</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Random Variables</strong>: Discrete vs. Continuous.</li>
        <li><strong>Expectation</strong>: Understanding the center of gravity (\(\mu\)).</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>If you flip a coin 5 times, you might get 4 heads (80%). This is just "luck." But if you flip a coin 5,000,000 times, you will almost certainly have extremely close to 50% heads. The <strong>LLN</strong> says that individual "luck" (Variability) gets washed away as the sample size grows. This is why we can trust our model's performance on a large test set.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of LLN as <strong>"The Truth Coming to Light."</strong> 
        In the short term, anyone can look like a genius (High Accuracy). 
        But in the long term, your <strong>True Average Skill</strong> will be revealed. 
        In ML, we use this to justify that our "Sample Average Loss" on the training set eventually represents the <strong>True Error</strong> of the model on the data distribution.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <p>Let \(X_1, X_2, \dots, X_n\) be independent identically distributed (i.i.d) random variables with mean \(\mu\). The Sample Mean \(\overline{X}_n\) is defined as:</p>
    <div class="math-block">$$\overline{X}_n = \frac{1}{n} \sum_{i=1}^n X_i$$</div>
    <p>The <strong>Strong LLN</strong> states:</p>
    <div class="math-block">$$\overline{X}_n \xrightarrow{a.s.} \mu \text{ as } n \to \infty$$</div>

    <h2 id="example-casino">Example 1: The Casino's House Edge</h2>
    <div class="example-box">
      <h4>Problem: Tracking Profit over Time</h4>
      <p>A casino game has a 51% chance for the house to win $1 and a 49% chance to lose $1.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Expectation (\(\mu\)):</strong> \((1 \times 0.51) + (-1 \times 0.49) = 0.02\). The house expects to make 2 cents per game.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>LLN:</strong> If they play 1,000,000 games, they will almost certainly be within a tiny fraction of $20,000 profit.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Individual players can win (Luck), but the <strong>Law of Large Numbers</strong> means the casino <strong>never loses in the long run</strong>. It is mathematically impossible for them to lose over millions of trials.
        </div>
      </div>
    </div>

    <h2 id="example-sample">Example 2: Sample Mean Convergence</h2>
    <div class="example-box">
      <h4>Problem: Measuring Error Stability</h4>
      <p>Data: Errors are drawn from a distribution with \(\mu = 0\) and \(\sigma = 10\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Small Sample (n=5):</strong> Average error might be 5.2. (Looks bad!).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Large Sample (n=10,000):</strong> Average error will be something like 0.001.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> This is why we need <strong>Large Datasets</strong> in Deep Learning. If we only have 10 data points, our "Accuracy" is just noise. If we have 1,000,000, the LLN gives us the <strong>Scientific Confidence</strong> that our model is actually working.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np
import matplotlib.pyplot as plt

# Coin flip simulation (0, 1)
n_trials = 1000
flips = np.random.randint(0, 2, size=n_trials)

# Running average
running_avg = np.cumsum(flips) / np.arange(1, n_trials + 1)

print(f"Final Average: {running_avg[-1]:.4f}")
# Notice how the avg starts chaotic but flattens out around 0.5!
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Monte Carlo Simulation</strong>: We use LLN to approximate complex integrals by sampling thousands of points and averaging them.</li>
      <li><strong>Batch Gradient Descent</strong>: Averaging the gradients over more samples gives us the "True Gradient" of the entire dataset.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> The average converges, but what does the <strong>Distribution</strong> of those averages look like? Explore <strong><a href="#/mathematics/probability/central-limit-theorem">The Central Limit Theorem (CLT)</a></strong>.
    </div>
  `},l={id:"central-limit-theorem",title:"Central Limit Theorem (CLT)",description:"The CLT states that the sum of many independent random variables will follow a Normal Distribution, regardless of the original distribution.",color:"#FF6F00",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · CLT</div>
      <h1>Central Limit Theorem: The Universal Bell Curve</h1>
      <p>The <strong>Central Limit Theorem (CLT)</strong> is the "Master Rule" of statistics. It says that if you add together many independent random variables, their <strong>Sum</strong> (and Mean) will always eventually form a <strong>Normal Distribution</strong> (Bell Curve). This is why the Normal distribution is so pervasive in Machine Learning.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Definition</a>
      <a href="#example-uniform">Example 1: Sum of Uniform Distributions</a>
      <a href="#example-noise">Example 2: Why Error is usually Normal</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Random Variables</strong>: Discrete vs. Continuous.</li>
        <li><strong>Probability Distributions</strong>: Understanding the Normal distribution (\(\mu, \sigma\)).</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>Individual random variables can be messy—some are Bernoulli (0 or 1), some are Uniform (flat), some are absolute chaos. But the <strong>CLT</strong> says that when you combine many small independent factors, their collective behavior is predictable. The "Chaos" cancels out, and a smooth Bell Curve emerges from the noise.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of the CLT as <strong>"The Crowd's Wisdom."</strong> 
        If you ask one person to guess the price of a jar of jellybeans, they might be wildly wrong. 
        But if you ask 10,000 people and take their <strong>Average</strong>, that average won't just be accurate—it will also follow a beautiful, symmetrical Normal Distribution. 
        In ML, this is why we can assume that our model's cumulative error is Gaussian.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <p>Let \(X_1, X_2, \dots, X_n\) be independent random variables with mean \(\mu\) and variance \(\sigma^2\). As \(n\) becomes large, the distribution of their mean \(\overline{X}_n\) converges to:</p>
    <div class="math-block">$$\overline{X}_n \sim \mathcal{N}\left(\mu, \frac{\sigma^2}{n}\right)$$</div>
    <p>The <strong>Z-score</strong> of the sample mean is: \(Z = \frac{\overline{X}_n - \mu}{\sigma/\sqrt{n}}\).</p>

    <h2 id="example-uniform">Example 1: Sum of Uniform Distributions</h2>
    <div class="example-box">
      <h4>Problem: Turning Flat space into a Bell Curve</h4>
      <p>A single U(0, 1) distribution is a flat rectangle. What if you sum 100 of them?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Individual:</strong> Each has \(\mu = 0.5\). (Flat).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Cumulative:</strong> Summing 100 results in \(\mu_{total} = 50\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Observation:</strong> The resulting sum will be almost perfectly shaped like a Bell Curve centered at 50.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> By summing 100 "flat" variables, we birthed a Gaussian one. This is the <strong>CLT</strong> in action.
        </div>
      </div>
    </div>

    <h2 id="example-noise">Example 2: Why Error is usually Normal</h2>
    <div class="example-box">
      <h4>Problem: Tracking Compound Measurement Errors</h4>
      <p>Assume your sensor error is caused by temperature, vibration, and radiation. Each follows a wild distribution.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> The <strong>Total Error</strong> is the sum of all these independent factors.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Conclusion:</strong> Regardless of how weird the individual errors are, the <strong>Aggregate Error</strong> will be Gaussian!</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> This is why we almost always use <strong>MSE (Mean Squared Error)</strong> in ML—it is mathematically the optimal loss function if you assume your data errors follow this CLT-driven Normal distribution.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np
import matplotlib.pyplot as plt

# Sum together 1,000 sets of 100 uniform random variables
n_samples = 1000
sample_size = 100
means = [np.random.uniform(0, 1, sample_size).mean() for _ in range(n_samples)]

# Plotting the result - looks like a Bell Curve!
plt.hist(means, bins=30, density=True)
plt.title(f"Distribution of {n_samples} Sample Means")
plt.show()
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Standardization (Z-Score)</strong>: We shift data (\(x - \mu\)) and divide by StdDev because we assume the features follow the CLT-driven normal pattern.</li>
      <li><strong>Confidence Intervals</strong>: Used in hypothesis testing to tell us if our model improvement is "statistically significant."</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve mastered how to calculate probabilities forward. Now, how do we work <em>backwards</em> to find the cause of an event? Explore <strong><a href="#/mathematics/probability/bayes-theorem">Bayes' Theorem</a></strong>.
    </div>
  `},d={id:"bayes-theorem",title:"Bayes Theorem",description:"Bayes Theorem is the ultimate tool for Updating Beliefs in the face of new evidence. It allows us to calculate the probability of a cause given its effect.",color:"#FF6F00",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Bayesian Inference</div>
      <h1>Bayes' Theorem: The Logic of Science</h1>
      <p><strong>Bayes' Theorem</strong> (\(P(A|B)\)) is a mathematical formula used to determine the probability of an event based on prior knowledge of conditions that might be related to the event. In Machine Learning, it's the core of everything from <strong>Naive Bayes Classifiers</strong> to <strong>Bayesian Neural Networks</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example-spam">Example 1: Spam Filter (Prior/Posterior)</a>
      <a href="#example-monty">Example 2: The Monty Hall Problem</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Conditional Probability</strong>: Understanding \(P(A|B)\).</li>
        <li><strong>Joint Probability</strong>: Understanding \(P(A \cap B)\).</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>Calculating the "Forward" probability (Probability of Effect given Cause) is usually easy. But in AI, we want to go <strong>backward</strong>: "Given this input data (Effect), what's the most likely model (Cause)?" Bayes' Theorem is the Bridge that lets us flip these conditional probabilities. It combines what you knew <strong>before</strong> (Prior) with what you see <strong>now</strong> (Evidence) to give you a <strong>Posterior</strong> belief.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of Bayes' Theorem as a <strong>"Learning Machine."</strong> 
        You start with a guess (the Prior). 
        You see some evidence (the Data). 
        Bayes' Theorem tells you exactly how much to "correct" your initial guess to arrive at the <strong>Truth</strong> (the Posterior). 
        It is the fundamental rule for how a machine "Learns" from experience.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <div class="math-block">$$P(A|B) = \frac{P(B|A) P(A)}{P(B)}$$</div>
    <ul>
      <li><strong>\(P(A|B)\)</strong>: Posterior (Belief after seeing data).</li>
      <li><strong>\(P(B|A)\)</strong>: Likelihood (How well the data fits the cause).</li>
      <li><strong>\(P(A)\)</strong>: Prior (Initial belief).</li>
      <li><strong>\(P(B)\)</strong>: Evidence (Normalization constant).</li>
    </ul>

    <h2 id="example-spam">Example 1: Spam Filter (Prior/Posterior)</h2>
    <div class="example-box">
      <h4>Problem: Identifying Junk Emails</h4>
      <p>10% of emails are Spam. 80% of Spam contains the word "Free." Only 1% of ham (good emails) contains "Free." If an email has "Free," is it spam?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> \(P(S) = 0.1, P(F|S) = 0.8, P(F|H) = 0.01\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Filter:</strong> \(P(\text{Spam} | \text{Free}) = \frac{P(\text{Free}|\text{Spam}) P(\text{Spam})}{P(\text{Free})}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Calculate:</strong> \(\frac{0.8 \times 0.1}{ (0.8 \times 0.1) + (0.01 \times 0.9) } = \frac{0.08}{0.089} \approx 0.89\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Your belief that the email is spam shot up from <strong>10%</strong> to <strong>89%</strong> just by seeing one word. This is how basic Spam filters function.
        </div>
      </div>
    </div>

    <h2 id="example-monty">Example 2: The Monty Hall Problem</h2>
    <div class="example-box">
      <h4>Problem: Updating Knowledge with Evidence</h4>
      <p>You choose Door #1. The host opens Door #3 (Evidence). Should you switch to Door #2?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Initial:</strong> \(P(1)=1/3, P(2)=1/3, P(3)=1/3\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>New Info:</strong> The host *can't* open the door with the car. So \(P(\text{Evidence} | \text{Car at 2})\) is 1, while \(P(\text{Evidence} | \text{Car at 1})\) is 0.5.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Bayes' Theorem shows that <strong>Door #2</strong> now has a <strong>2/3</strong> chance! Switching doubles your odds because the host's action provided <strong>Information</strong> that updated your Bayesian state.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
def bayes_inference(prior, likelihood_pos, likelihood_neg):
    # P(Cause|Effect) = (P(Effect|Cause) * P(Cause)) / P(Effect)
    evidence = (likelihood_pos * prior) + (likelihood_neg * (1 - prior))
    posterior = (likelihood_pos * prior) / evidence
    return posterior

prior_spam = 0.1
l_spam = 0.8 # P("Free" | Spam)
l_ham = 0.01 # P("Free" | Ham)

print(f"Prob(Spam | 'Free'): {bayes_inference(prior_spam, l_spam, l_ham):.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Naive Bayes Classifier</strong>: The most famous application of this theorem in supervised learning for text classification.</li>
      <li><strong>A/B Testing</strong>: Bayesian methods help companies decide if a "Change" (Evidence) actually caused an "Improvement" (Cause).</li>
      <li><strong>Kalman Filters</strong>: Predicting the trajectory of self-driving cars by combining sensor data (Evidence) with the previous physics state (Prior).</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve mastered how to calculate probabilities within models. Now, see how we apply this to the <strong>Rigid Statistics</strong> of Large Scale Data. Explore <strong><a href="#/mathematics/statistics/basics">Probability & Statistics</a></strong>.
    </div>
  `},c={id:"probability",title:"Probability",description:"Probability is the mathematical framework for quantifying uncertainty. In ML, it allows us to move beyond binary 'Yes/No' logic and embrace the nuanced reality of 'How likely is this?'.",keyConcepts:[{title:"Random Variables",description:"Discrete (PMF) vs. Continuous (PDF) mappings of stochastic processes."},{title:"Distributions",description:"Bernoulli, Gaussian, and Poisson — the shapes of data."},{title:"Conditional Probability",description:"Updating beliefs based on evidence: Posterior, Likelihood, and Priors."},{title:"Independence",description:"The critical assumption that simplifies massive multi-feature models."},{title:"Expectation & Variance",description:"Summarizing distributions: Center (Mean) and Spread (Variance)."},{title:"LLN & CLT",description:"The Law of Large Numbers and Central Limit Theorem: WHY samples work."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Probability: <span class="text-accent italic">Mastering Uncertainty</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          Data is messy, noisy, and incomplete. <strong>Probability</strong> is the mathematical bridge that allows us to move from binary "Yes/No" thinking to the nuanced reality of modern AI.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This curriculum is broken into <strong>10 focused topics</strong>, moving from basic random variables to advanced inference with Bayes' Theorem and the Central Limit Theorem.
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
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to measure uncertainty?</p>
        <a 
          href="/#/mathematics/probability/random-variables" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Random Variables
        </a>
      </div>

    </div>
  `,sections:[e,t,i,a,s,o,n,r,l,d]};export{c as PROBABILITY_DATA};
