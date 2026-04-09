const e={id:"random-variables",title:"Random Variables",description:"A Random Variable is a mathematical function that maps the outcomes of a random experiment to real numbers. It is the fundamental object of probability.",color:"#FF6F00",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Random Variables</div>
      <h1>Random Variables: Quantifying Chance</h1>
      <p>A <strong>Random Variable</strong> (RV) is the bridge between actual physical events (like flipping a coin) and the world of numbers. In Machine Learning, every data point is a realization of some underlying random variable.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Sample Space</strong>: The set of all possible outcomes.</li>
        <li><strong>Basic Functions</strong>: Mapping inputs to outputs.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Math doesn't like abstract concepts like "Red," "Cold," or "Spam." It likes numbers. A <strong>Random Variable</strong> is the "Translator" or "Sensor" that takes an outcome from the messy, fuzzy real world and turns it into a hard real number we can actually perform calculus on. Without this mapping, we couldn't calculate averages, track variances, or feed data into a neural network. It is the fundamental bridge that allows us to turn <strong>Observations</strong> into <strong>Quantities</strong>. Every feature in your ML dataset—whether it's house square footage or pixel brightness—is a realization of a Random Variable.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Numerical Mapping</div>
      <p>Given a probability space $(\Omega, \mathcal{F}, P)$, a **Random Variable** $X$ is a measurable function $X: \Omega \to \mathbb{R}$ that assigns a real number to each outcome in the sample space. Random variables are categorized by the nature of their range:</p>
      <div class="math-block">
        $$X(\omega) = x, \quad \omega \in \Omega, x \in \mathbb{R}$$
      </div>
      <p>The behavior of an RV is described by its probability distribution:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Discrete RV</strong>: Maps to a countable set. Defined by a <strong>PMF</strong> $p(x) = P(X = x)$ where $\sum p(x_i) = 1$.</li>
        <li><strong>Continuous RV</strong>: Maps to an uncountable set (intervals). Defined by a <strong>PDF</strong> $f(x)$ such that $P(a \le X \le b) = \int_a^b f(x) dx$.</li>
        <li><strong>Cumulative Property</strong>: All RVs possess a <strong>CDF</strong> $F(x) = P(X \le x)$, which is non-decreasing and bounded between 0 and 1.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">In ML, we treat features as realizations of underlying random variables $X_1, X_2, \dots, X_n$.</p>
    </div>
    
    <h2 id="example-coin" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Discrete (Coin Flips)</h2>
    
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
    

    <h2 id="example-wait" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Continuous (Wait Times)</h2>
    
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
    

    <h2 id="implementation">Implementation</h2>
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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Random Variables</strong>: Discrete vs. Continuous.</li>
        <li><strong>Integrals</strong>: For calculating areas under continuous curves.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A Random Variable is just a placeholder, like a "Potential Weather" or "Future Stock Price." But a <strong>Probability Distribution</strong> is the actual personality or "DNA" of that variable. It doesn't just list what could happen; it tells you exactly how the universe is "loaded." Distributions allow us to quantify <strong>Uncertainty</strong> so we can stop guessing. Instead of a single point-prediction like "This house will sell for $500k," a distribution gives us a full spectrum of likelihood. In ML, every model we train is essentially trying to find the "Shape" that best fits the scattered dots of our training data.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Probability Laws</div>
      <p>A **Probability Distribution** is a mathematical descriptor that provides the likelihood of every possible value of a random variable $X$. It is defined either by its discrete or continuous nature:</p>
      <div class="math-block">
        $$F(x) = P(X \le x), \quad x \in \mathbb{R}$$
      </div>
      <p>The behavior is characterized by two fundamental functional forms:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Mass Function (PMF)</strong>: For discrete $X$, $p(x) = P(X = x)$, satisfying $\sum p(x_i) = 1$.</li>
        <li><strong>Density Function (PDF)</strong>: For continuous $X$, $f(x) = \frac{d}{dx}F(x)$, satisfying $\int_{-\infty}^\infty f(x) dx = 1$.</li>
        <li><strong>Normalization</strong>: Both forms ensure the total "volume" of probability is exactly 1, representing certainty that <em>some</em> outcome must occur.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Machine Learning often involves **Density Estimation**, where we approximate the parameters of a distribution $p(x|\theta)$ that best explains the observed data.</p>
    </div>
    
    <h2 id="example-bernoulli" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Bernoulli (Success vs. Failure)</h2>
    
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
    

    <h2 id="example-normal" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Normal (The Bell Curve)</h2>
    
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
    

    <h2 id="implementation">Implementation</h2>
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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Probability Distributions</strong>: Scalar PMFs and PDFs.</li>
        <li><strong>Set Intersection</strong>: Understanding \(P(A \cap B)\).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A single distribution for "House Price" or "Number of Bedrooms" is helpful, but in the real world, these things don't live in isolation. They are linked. High bedrooms usually lead to a high price—they interact. <strong>Joint Distributions</strong> allow us to track this multi-dimensional relationship. If we know the joint distribution of our data, we have the "God's Eye View" of the entire dataset. We can see not just the individual traits, but the underlying <strong>Coupling</strong> between variables. In AI, this is the difference between looking at individual pixel colors and seeing an actual object formed by those pixels moving together.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Multi-Dimensional PDF</div>
      <p>For two random variables $X$ and $Y$, the **Joint Distribution** specifies the probability that $X$ and $Y$ fall within any specified range or set of values simultaneously. It is defined by the Joint Cumulative Distribution Function:</p>
      <div class="math-block">
        $$F_{X,Y}(x, y) = P(X \le x, Y \le y)$$
      </div>
      <p>The joint behavior is expressed through two primary functional forms depending on the variable types:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Joint PMF</strong>: For discrete variables, $p(x, y) = P(X=x, Y=y)$, satisfying $\sum_x \sum_y p(x, y) = 1$.</li>
        <li><strong>Joint PDF</strong>: For continuous variables, $f(x, y)$ is the surface such that the volume under it over a region $A$ is $P((X, Y) \in A) = \iint_A f(x, y) dx dy$.</li>
        <li><strong>Marginalization</strong>: The distribution of a single variable $X$ is obtained by "summing out" the other variable: $f_X(x) = \int_{-\infty}^\infty f(x, y) dy$.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Correlation and independence are fundamental properties of the joint distribution: $X \perp Y$ iff $f(x, y) = f_X(x)f_Y(y)$.</p>
    </div>
    
    <h2 id="example-scatter" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Scatter of Binary Features</h2>
    
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
    

    <h2 id="example-marginal" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Marginalizing Out a Variable</h2>
    
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
    

    <h2 id="implementation">Implementation</h2>
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
  `},s={id:"conditional-probability",title:"Conditional Probability",description:"Conditional Probability measures the likelihood of an event occurring given that another event has already happened. It is the key to 'Updating' our knowledge.",color:"#FF6F00",html:String.raw`
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
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Multiplication Rule</strong>: $P(A \cap B) = P(A | B)P(B)$. This allows for the sequential decomposition of joint events.</li>
        <li><strong>Law of Total Probability</strong>: $P(A) = \sum_i P(A | B_i)P(B_i)$ for a partition $\{B_i\}$ of the sample space.</li>
        <li><strong>Belief Revision</strong>: Conditioning serves as the mathematical engine for updating prior knowledge $P(A)$ with new evidence $B$.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Discriminative ML models (e.g., Logistic Regression) directly estimate the conditional distribution $P(y | \mathbf{x})$ to predict labels from features.</p>
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
    <ul>
      <li><strong>Discriminative Models</strong>: Directly model the conditional probability \(P(y|X)\) (e.g., Logistic Regression).</li>
      <li><strong>Precision & Recall</strong>: Metrics used to evaluate how reliable a model's "Positive" predictions actually are.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Sometimes, knowing B tells you <em>absolutely nothing</em> new about A. Explore <strong><a href="#/mathematics/probability/independence">Independence</a></strong>.
    </div>
  `},a={id:"independence",title:"Independence",description:"Two events are Independent if knowing that one occurred does not change the probability of the other. It is the core assumption of Naive Bayes.",color:"#FF6F00",html:String.raw`
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
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Equality of Conditionals</strong>: If $A$ and $B$ are independent, $P(A | B) = P(A)$ and $P(B | A) = P(B)$.</li>
        <li><strong>Mutual Independence</strong>: A set of events $\{A_i\}$ is independent if $P(\bigcap_{i \in S} A_i) = \prod_{i \in S} P(A_i)$ for every subset $S$.</li>
        <li><strong>Conditional Independence</strong>: $X \perp Y \mid Z$ if $P(X, Y | Z) = P(X | Z)P(Y | Z)$. This is the "Naive" assumption in probabilistic modeling.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Independence is the most powerful "Symmetry" in statistics, reducing the complexity of a model from exponential to linear.</p>
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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Random Variables</strong>: Discrete vs. Continuous.</li>
        <li><strong>Probability Distributions</strong>: Understanding weights (PMFs).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A Probability Distribution tells you what *could* happen, but the Expectation tells you what *will* happen if you play the long game. It is the "Balance Point" of your distribution. If a distribution is a see-saw, the Expected Value is exactly where you would place the fulcrum to keep it level. In Machine Learning, we don't care about a single "lucky" training batch; we care about the <strong>Aggregate Truth</strong>. We build models that minimize <strong>Expected Loss</strong> because we want the model to be correct across the entire lifetime of its deployment, not just once.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Weighted Average</div>
      <p>The **Expected Value** (or first moment) of a random variable $X$ represents the long-run average value of repetitions of the experiment. It is calculated by weighing each possible outcome by its probability:</p>
      <div class="math-block">
        $$\mathbb{E}[X] = \int_{\Omega} X(\omega) dP(\omega)$$
      </div>
      <p>In practical settings, this generalizes to discrete and continuous forms:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Discrete</strong>: $\mathbb{E}[X] = \sum_i x_i P(X = x_i)$.</li>
        <li><strong>Continuous</strong>: $\mathbb{E}[X] = \int_{-\infty}^\infty x f(x) dx$.</li>
        <li><strong>Law of the Unconscious Statistician</strong>: $\mathbb{E}[g(X)] = \int g(x) f(x) dx$.</li>
        <li><strong>Linearity</strong>: $\mathbb{E}[aX + bY] = a\mathbb{E}[X] + b\mathbb{E}[Y]$. This property holds even if $X$ and $Y$ are dependent.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">In ML training, the "Risk" we minimize is the expected value of the loss function over the data generating distribution.</p>
    </div>
    
    <h2 id="example-payoff" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Long-term Average Payoff</h2>
    
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
    

    <h2 id="example-weighted" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Weighted Sum of Features</h2>
    
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
    

    <h2 id="implementation">Implementation</h2>
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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Expectation</strong>: Understanding the center of gravity (\(\mu\)).</li>
        <li><strong>Standard Deviation</strong>: The square root of variance (\(\sigma\)).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Expectation (Average) tells you where your data is <strong>centered</strong>, but Variance tells you how much your data <strong>mistrusts</strong> that center. It is a measure of "Spread" or "Chaos." A high variance model is "noisy" and unpredictable—it catches every tiny jitter in the data. A low variance model is consistent but might be too rigid. In ML, this is the ultimate trade-off: do you want a model that hits the bullseye 1% of the time with wild misses, or a model that consistently hits the outer ring? Variance is the mathematical way we quantify that <strong>Reliability</strong>.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Second Central Moment</div>
      <p>The **Variance** (denoted $Var(X)$ or $\sigma^2$) of a random variable $X$ with mean $\mu = \mathbb{E}[X]$ measures the expected squared distance of the variable from its average:</p>
      <div class="math-block">
        $$\text{Var}(X) = \mathbb{E}\left[(X - \mu)^2\right]$$
      </div>
      <p>This quantity provides the foundation for measuring uncertainty and dispersion in data series:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Computational Identity</strong>: $\text{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2$. This is often easier to compute than the definition.</li>
        <li><strong>Scaling Property</strong>: $\text{Var}(aX + b) = a^2 \text{Var}(X)$. Shifts ($b$) do not affect dispersion; resizing ($a$) affects it quadratically.</li>
        <li><strong>Standard Deviation</strong>: $\sigma = \sqrt{\text{Var}(X)}$. This returns the measure to the same units as the original data.</li>
        <li><strong>Additivity</strong>: If $X$ and $Y$ are independent, $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">In the **Bias-Variance Tradeoff**, variance represents the error stemming from a model's sensitivity to specific fluctuations in the training data.</p>
    </div>
    
    <h2 id="example-risk" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Risk in Investment</h2>
    
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
    

    <h2 id="example-error" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Variance of Model Errors</h2>
    
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
    

    <h2 id="implementation">Implementation</h2>
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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Random Variables</strong>: Discrete vs. Continuous.</li>
        <li><strong>Expectation</strong>: Understanding the center of gravity (\(\mu\)).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>If you flip a coin 5 times, you might get 4 heads (80%). This isn't science—it's just a "blip" of luck. But if you flip that coin 5,000,000 times, you will almost certainly land on exactly 50% heads. The <strong>Law of Large Numbers (LLN)</strong> is the "Anchor" that stops the world from being pure chaos. It guarantees that as you collect more data, the individual noise and "lucky streaks" get washed away, leaving only the <strong>Cold, Hard Truth</strong> of the underlying average. In Machine Learning, this is why we can trust our model's performance on a large test set; it ensures that our measured error eventually represents the <strong>True Global Error</strong>.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Convergence of Averages</div>
      <p>The **Law of Large Numbers** governs the behavior of the sample mean as the number of independent trials increases. Let $X_1, X_2, \dots, X_n$ be i.i.d. random variables with finite mean $\mu = \mathbb{E}[X_i]$ and sample mean $\bar{X}_n$. The theorem exists in two primary strengths:</p>
      <div class="math-block">
        $$\bar{X}_n = \frac{1}{n} \sum_{i=1}^n X_i$$
      </div>
      <p>The convergence of this average to the theoretical mean is expressed as:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Weak Law (WLLN)</strong>: $\bar{X}_n \xrightarrow{P} \mu$. For any $\epsilon > 0$, $\lim_{n \to \infty} P(|\bar{X}_n - \mu| > \epsilon) = 0$. This implies convergence in probability.</li>
        <li><strong>Strong Law (SLLN)</strong>: $\bar{X}_n \xrightarrow{a.s.} \mu$. The probability that the limit of the sequence equals $\mu$ is 1. This implies almost sure convergence.</li>
        <li><strong>Implications for Data</strong>: As sample size increases, the influence of individual outliers and noise vanishes, revealing the stable properties of the underlying distribution.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">In ML, LLN justifies the use of finite training sets to estimate the loss over the entire population (Empirical Risk Minimization).</p>
    </div>
    
    <h2 id="example-casino" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Casino's House Edge</h2>
    
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
    

    <h2 id="example-sample" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Sample Mean Convergence</h2>
    
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
    

    <h2 id="implementation">Implementation</h2>
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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Random Variables</strong>: Discrete vs. Continuous.</li>
        <li><strong>Probability Distributions</strong>: Understanding the Normal distribution (\(\mu, \sigma\)).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Individual random variables are usually pure chaos—some are Bernoulli (0 or 1), some are Uniform (flat), and some are just absolute noise. But the <strong>CLT</strong> is the "Master Law" that restores order. It states that when you combine enough small, independent factors, their collective behavior stops being chaotic and starts being perfectly predictable. The "Chaos" cancels itself out, and a smooth, symmetrical Bell Curve emerges. In Machine Learning, this is our saving grace: it allows us to assume that our total prediction error will be Gaussian, no matter how weird the individual data points are.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Universal Convergence</div>
      <p>The **Central Limit Theorem (CLT)** states that given a sufficiently large sample size $n$ from a population with a finite variance, the distribution of the sample mean will be approximately normal, regardless of the population's distribution. Let $X_1, \dots, X_n$ be i.i.d. random variables with $\mathbb{E}[X_i] = \mu$ and $\text{Var}(X_i) = \sigma^2$. As $n \to \infty$:</p>
      <div class="math-block">
        $$\text{The standardized sum } Z = \frac{\sum_{i=1}^n X_i - n\mu}{\sigma \sqrt{n}} \xrightarrow{d} \mathcal{N}(0, 1)$$
      </div>
      <p>This theorem provides three fundamental pillars for statistical modeling:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Distributional Independence</strong>: The result holds whether the underlying $X_i$ are Bernoulli, Poisson, or any other distribution (provided $\sigma^2 < \infty$).</li>
        <li><strong>Sample Mean Distribution</strong>: The sample mean $\bar{X}_n$ follows $\mathcal{N}(\mu, \sigma^2/n)$. The "Standard Error" decreases at a rate of $1/\sqrt{n}$.</li>
        <li><strong>Z-Score Standardization</strong>: The formula $\frac{\bar{X} - \mu}{\sigma/\sqrt{n}}$ is used to calculate probabilities on the standard normal curve.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">CLT is the reason why **Squared Loss** (MSE) is the optimal objective under the assumption of aggregate, independent noise terms.</p>
    </div>
    
    <h2 id="example-uniform" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Sum of Uniform Distributions</h2>
    
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
    

    <h2 id="example-noise" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Why Error is usually Normal</h2>
    
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
    

    <h2 id="implementation">Implementation</h2>
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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Calculating the "Forward" probability (Probability of Effect given Cause) is usually easy, like guessing if it will rain given a dark cloud. But in AI, we want to go <strong>backward</strong>: "Given this input data (Effect), what's the most likely model (Cause)?" Bayes' Theorem is the Bridge that lets us flip these conditional probabilities. It combines what you knew <strong>before</strong> (Prior) with what you see <strong>now</strong> (Evidence) to give you a <strong>Posterior</strong> belief. It is the mathematical engine of "Self-Correction"—it tells us exactly how much to update our worldview when new facts hit the table. Without it, machines couldn't learn from experience; they would just be static calculators.</p>
    
    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Bayesian Inference & Posterior Update</div>
      <p>Bayes' Theorem provides a rigorous method for updating the probability of a hypothesis $\theta$ relative to observed data $\mathcal{D}$. It is the foundation of structural and parameter uncertainty in machine learning.</p>
      
      <p>The posterior probability is given by the relationship:</p>
      <div class="math-block">
        $$P(\theta \mid \mathcal{D}) = \frac{P(\mathcal{D} \mid \theta) P(\theta)}{P(\mathcal{D})}$$
      </div>

      <p>Where the components are characterized as follows:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Posterior ($P(\theta \mid \mathcal{D})$)</strong>: The probability that the hypothesis $\theta$ is true *after* considering data $\mathcal{D}$.</li>
        <li><strong>Likelihood ($P(\mathcal{D} \mid \theta)$)</strong>: The probability that the data $\mathcal{D}$ would have been observed given that $\theta$ is true.</li>
        <li><strong>Prior ($P(\theta)$)</strong>: The probability of $\theta$ before receiving any data, representing initial beliefs or domain knowledge.</li>
        <li><strong>Evidence ($P(\mathcal{D})$)</strong>: The marginal probability of the data, acting as a normalization constant: $P(\mathcal{D}) = \sum_{\theta'} P(\mathcal{D} \mid \theta') P(\theta')$.</li>
      </ul>
      
      <p class="text-xs opacity-70 mt-2">Bayes' Theorem is the mathematical prerequisite for **Naive Bayes Classifiers**, **Bayesian Optimization**, and **Gaussian Processes**.</p>
    </div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Bayes' Theorem as a <strong>"Scientific Tuning Machine"</strong> or a <strong>"Bullshit Detector."</strong> 
        You start with a guess (the Prior: "I think this email might be spam"). 
        You see some evidence (the Data: "It contains the word 'FREE' in all caps"). 
        Bayes' Theorem tells you exactly how much to "correct" your initial guess to arrive at the <strong>Truth</strong> (the Posterior). 
        It is the fundamental rule for how a machine "Learns" from experience. 
        It forces the model to balance its existing knowledge with the cold, hard facts of the new data, preventing it from jumping to conclusions too quickly or ignoring new evidence entirely.
      </div>
    </div>

    <h2 id="example-spam" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Spam Filter (Prior/Posterior)</h2>
    
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
    

    <h2 id="example-monty" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Monty Hall Problem</h2>
    
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
    

    <h2 id="implementation">Implementation</h2>
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
  `,sections:[e,t,i,s,a,o,n,r,l,d]};export{c as PROBABILITY_DATA};
