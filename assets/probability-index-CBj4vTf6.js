const i={id:"probability-basics",title:"Probability Basics: The Mathematical Language of Uncertainty",description:"An essential primer on sample spaces, events, and the classical definition of chance—the bedrock of probabilistic machine learning algorithms.",formula:"P(E) = \\frac{|E|}{|S|}",details:["Sample Space ($S$): The Universal Set of Outcomes","Events as Subsets of Sample Space","Axiomatic Probability: The Kolmogorov Framework","Range of Chance: $0 \\le P(E) \\le 1$","Complementary Events: $P(E^c) = 1 - P(E)$","Frequentist vs. Bayesian Interpretations"],html:String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Foundational Roadmap</div>
      <a href="#sample-spaces">I. Sample Spaces and Experiments</a>
      <a href="#axioms">II. Axiomatic Probability</a>
      <a href="#lab">Computational Implementation: Discrete Sim</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="sample-spaces" class="premium-h2">I. Sample Spaces and Experimental Design</h2>
    <p>Every probabilistic query begins with an <strong>Experiment</strong> and its <strong>Sample Space ($S$)</strong>—the set containing every possible atomic outcome. An <strong>Event ($E$)</strong> is simply a subset of this space.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">The Classical Definition</div>
      <p style="margin:0">If all outcomes in a finite sample space $S$ are equally likely, the probability of an event $E$ is the ratio of favorable outcomes to the total size of the sample space:</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        P(E) = \frac{|E|}{|S|}
      </div>
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">🎲</div>
      <div class="premium-callout-body">
        <strong>The Range of Chance:</strong> Probability is always bounded: $0 \le P(E) \le 1$. An event with $P(E)=0$ is "impossible," while $P(E)=1$ is "certain."
      </div>
    </div>

    <!-- SECTION 2 -->
    <h2 id="axioms" class="premium-h2">II. Axiomatic Probability</h2>
    <p>Beyond simple counting, modern probability rests on the <strong>Kolmogorov Axioms</strong>, which provide the rigorous foundation for processing uncertainty in high-dimensional datasets.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Axiom</th><th>Mathematical Statement</th><th>Intuition</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Non-negativity</strong></td><td>$P(E) \ge 0$</td><td>Chance cannot be negative.</td></tr>
          <tr><td><strong>Normalization</strong></td><td>$P(S) = 1$</td><td>Something must always happen.</td></tr>
          <tr><td><strong>Additivity</strong></td><td>$P(E_1 \cup E_2) = P(E_1) + P(E_2)$</td><td>Sum of disjoint event chances.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Computational Implementation: Discrete Sim</h2>
    <div class="premium-math-block">
      <python-code>
import numpy as np

def simulate_die_roll(event_condition, trials=10000):
    """
    Empirical probability via Monte Carlo simulation.
    """
    # 1. Generate random trials
    rolls = np.random.randint(1, 7, trials)
    
    # 2. Count favorable outcomes
    favorable = np.sum([event_condition(r) for r in rolls])
    
    # 3. Calculate empirical ratio
    return favorable / trials

# Define event: Roll is even
prob_even = simulate_die_roll(lambda x: x % 2 == 0)

print(f"Sample Space S: {set(range(1, 7))}")
print(f"Theoretical P(Even): 0.50")
print(f"Simulated P(Even): {prob_even:.4f}")
      </python-code>
    </div>
  `},t={id:"probability-events",title:"Events: The Taxonomy and Classification of Luck",description:"A theoretical investigation into the structural properties of events—from simple outcomes to mutually exclusive and independent phenomena.",formula:"E \\subseteq S",details:["Definition of an Event as a Subset of Sample Space","Elementary vs. Compound Events","Set Operations in Probability: Union, Intersection, and Complement","Mutual Exclusivity: The Sum Rule Prerequisite","Statistical Independence vs. Causal Correlation","Impossible vs. Certain Events ($P=0$ vs. $P=1$)"],html:String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Event Roadmap</div>
      <a href="#relations">I. Set Operations & Event Relations</a>
      <a href="#categories">II. Critical Event Categories</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="relations" class="premium-h2">I. Set Operations and Event Relations</h2>
    <p>In probability theory, an <strong>Event</strong> is not just an occurrence but a mathematically defined subset of the sample space $S$. Set theory provides the logical operators to describe how these outcomes interact.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Operation</th><th>Notation</th><th>Logical Meaning</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Union</strong></td><td>$A \cup B$</td><td>Event A <strong>OR</strong> event B occurs.</td></tr>
          <tr><td><strong>Intersection</strong></td><td>$A \cap B$</td><td>Event A <strong>AND</strong> event B occur simultaneously.</td></tr>
          <tr><td><strong>Complement</strong></td><td>$A^c$</td><td>Event A <strong>DOES NOT</strong> occur.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">🏗️</div>
      <div class="premium-callout-body">
        <strong>Compound Events:</strong> Most real-world ML problems involve compound events (intersections of many features). Calculating the probability of these intersections is the core of joint probability modeling.
      </div>
    </div>

    <!-- SECTION 2 -->
    <h2 id="categories" class="premium-h2">II. Critical Event Categories</h2>
    <p>Understanding the structural relationship between events allows us to simplify complex probabilistic expressions.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">Mutually Exclusive (Disjoint) Events</div>
      <p style="margin:0">Events that cannot happen at the same time. Their intersection is the empty set ($\emptyset$).</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        A \cap B = \emptyset \implies P(A \cap B) = 0
      </div>
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">Independent Events</div>
      <p style="margin:0">Events where the occurrence of one provides zero information about the other. This is the fundamental assumption of <strong>Naive Bayes</strong> classifiers.</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        P(A | B) = P(A) \iff P(A \cap B) = P(A)P(B)
      </div>
    </div>

    <div class="premium-callout warn">
      <div class="premium-callout-icon">⚠️</div>
      <div class="premium-callout-body">
        <strong>Independence vs. Exclusivity:</strong> These are often confused. Mutually exclusive events are actually <em>highly dependent</em>—if you know one happened, you know for certain the other didn't!
      </div>
    </div>
  `},e={id:"probability-rules",title:"Probability Rules: The Axiomatic Logic of Chance",description:"A formalization of the Sum and Product rules—the dual engines that drive marginalization and conditioning in probabilistic graphical models.",formula:"P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",details:["The General Addition Rule (Inclusion-Exclusion)","The Multiplication Rule for Dependent Outcomes","Marginalization: The Sum Rule in High-Dimensional Spaces","Conditioning: The Product Rule as a Dependency Chain","Law of Total Probability: Partitioning the Sample Space","Application: Propagating Uncertainty in Bayesian Networks"],html:String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Axiomatic Roadmap</div>
      <a href="#addition">I. The General Addition Rule</a>
      <a href="#multiplication">II. The Multiplication Rule</a>
      <a href="#total-prob">III. Law of Total Probability</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="addition" class="premium-h2">I. The General Addition Rule</h2>
    <p>The <strong>Addition Rule</strong> (or Sum Rule) dictates how we combine probabilities of individual events to find the chance of a union ($A$ or $B$).</p>

    <div class="premium-math-block">
      P(A \cup B) = P(A) + P(B) - P(A \cap B)
    </div>

    <div class="premium-callout warn">
      <div class="premium-callout-icon">⚠️</div>
      <div class="premium-callout-body">
        <strong>Inclusion-Exclusion:</strong> We must subtract the intersection $P(A \cap B)$ because those outcomes are counted twice—once in $A$ and once in $B$. If the events are <strong>Mutually Exclusive</strong>, the subtraction term is simply zero.
      </div>
    </div>

    <!-- SECTION 2 -->
    <h2 id="multiplication" class="premium-h2">II. The Multiplication Rule</h2>
    <p>The <strong>Multiplication Rule</strong> (or Product Rule) is the foundational engine for calculating the joint probability ($A$ and $B$) by decomposing it into marginal and conditional parts.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">Joint Probability Decomposition</div>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        P(A \cap B) = P(A|B)P(B)
      </div>
    </div>

    <!-- SECTION 3 -->
    <h2 id="total-prob" class="premium-h2">III. The Law of Total Probability</h2>
    <p>When we want to find the probability of an event $B$ but we only have its conditional probabilities relative to a set of exhaustive and mutually exclusive events $A_i$ (a "partition"), we use the Law of Total Probability.</p>

    <div class="premium-math-block">
      P(B) = \sum_{i} P(B | A_i) P(A_i)
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">🌉</div>
      <div class="premium-callout-body">
        <strong>Bayesian Logic:</strong> This rule acts as the <strong>Evidence</strong> $P(D)$ in Bayes' Theorem. It ensures the posterior probabilities are properly normalized so they sum to 1.
      </div>
    </div>
  `},a={id:"joint-marginal-conditional",title:"Joint, Marginal, and Conditional Probability: The Multidimensional Manifold",description:"A formal investigation into the relationships between dependent random variables, covering marginalization, conditioning, and joint distribution decomposition.",formula:"P(X, Y) = P(Y|X)P(X) = P(X|Y)P(Y)",details:["Joint Probability: Simultaneous Multi-variable Occurrences","Marginalization: Summing Out Undesired Variable Spaces","Conditional Probability: Redefining Sample Spaces with Evidence","Product Rule and the Probability Chain Definition","Independence as a Special Case of Joint Decomposition","Application: Joint Distribution Tables in ML Inference"],html:String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Multidimensional Roadmap</div>
      <a href="#three-pillars">I. Three Pillars of Joint Inference</a>
      <a href="#marginalization">II. Marginalization and The Sum Rule</a>
      <a href="#product-rule">III. Product Rule and The Chain of Probability</a>
      <a href="#lab">Empirical Matrix Analysis</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="three-pillars" class="premium-h2">I. The Three Pillars of Joint Inference</h2>
    <p>In high-dimensional machine learning models, variables are rarely independent. We need to mathematicaly describe how they interact across the <strong>Joint Distribution</strong> and how to isolate specific variables via <strong>Marginalization</strong>.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Pillar</th><th>Notation</th><th>Intuition</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Joint</strong></td><td>$P(X, Y)$</td><td>Probability of $X$ <strong>AND</strong> $Y$ happening together.</td></tr>
          <tr><td><strong>Marginal</strong></td><td>$P(X)$</td><td>Probability of $X$ alone, regardless of $Y$.</td></tr>
          <tr><td><strong>Conditional</strong></td><td>$P(X|Y)$</td><td>Probability of $X$ <strong>GIVEN THAT</strong> we know $Y$ happened.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 2 -->
    <h2 id="marginalization" class="premium-h2">II. Marginalization and The Sum Rule</h2>
    <p>To find the <strong>Marginal Probability</strong> of a variable $X$, we simply sum (or integrate) out every other variable $Y$ from the joint distribution. This is essentially "collapsing" the multi-dimensional space into a single dimension.</p>

    <div class="premium-math-block">
      P(X) = \sum_{y \in Y} P(X, Y)
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">📉</div>
      <div class="premium-callout-body">
        <strong>The Marginalization Trick:</strong> In discrete joint probability tables, calculating the marginal is as simple as summing the rows or columns.
      </div>
    </div>

    <!-- SECTION 3 -->
    <h2 id="product-rule" class="premium-h2">III. Joint Probability and The Product Rule</h2>
    <p>The <strong>Product Rule</strong> allows us to calculate the joint probability from conditional and marginal parts. This is the foundation of the <strong>Chain Rule of Probability</strong> used in deep generative models.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">The Product Rule Identity</div>
      <p style="margin:0">The joint probability is the conditional probability of one variable multiplied by the marginal of the other:</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        P(X, Y) = P(X|Y)P(Y) = P(Y|X)P(X)
      </div>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Empirical Matrix Analysis</h2>
    <div class="premium-math-block">
      <python-code>
import numpy as np

# 1. Define Joint Distribution Table (Rows: Observed, Cols: Predicted)
# joint_table[i, j] = P(Observed=i, Predicted=j)
joint = np.array([[0.1, 0.2], 
                  [0.3, 0.4]])

# 2. Marginalize by summing along axes
marginal_obs = np.sum(joint, axis=1) # Sum rows (P(Obs))
marginal_prd = np.sum(joint, axis=0) # Sum columns (P(Prd))

# 3. Calculate Conditional Probability: P(Obs=0 | Prd=1)
# P(H|D) = P(H,D) / P(D)
cond_prob = joint[0, 1] / marginal_prd[1]

print(f"Joint Matrix:\n{joint}")
print(f"Marginal Observed: {marginal_obs}")
print(f"Marginal Predicted: {marginal_prd}")
print(f"P(Observed=0 | Predicted=1): {cond_prob:.4f}")
      </python-code>
    </div>
  `},o={id:"bayes-theorem",title:"Bayes' Theorem: The Mathematical Engine of Belief Updating",description:"A deep dive into Bayesian inference, transforming initial priors into refined posteriors through the integration of empirical likelihoods.",formula:"P(A|B) = \\frac{P(B|A)P(A)}{P(B)}",details:["The 4 Pillars: Prior, Likelihood, Evidence, and Posterior","Evidence Marginalization: The Law of Total Probability","Bayesian Updating: Sequential Refinement of Hypotheses","Naive Bayes: Assumption of Conditional Independence","Point Estimates: MAP vs. MLE in Bayesian Settings","Case Study: Recursive Diagnosis in Diagnostic Spaces"],html:String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Inference Roadmap</div>
      <a href="#components">I. Components of Bayesian Inference</a>
      <a href="#identity">II. Formal Bayesian Identity</a>
      <a href="#case-study">III. Case Study: Recursive Inference</a>
      <a href="#lab">Computational Bayesian Logic</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="components" class="premium-h2">I. The Components of Bayesian Inference</h2>
    <p>In machine learning, we don't just calculate static probabilities; we update them based on new incoming data. Bayes' Theorem provides the formal mechanism to transform our initial assumptions into refined diagnostic conclusions.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Component</th><th>Notation</th><th>Intuition</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Prior</strong></td><td>$P(H)$</td><td>Belief before observing data.</td></tr>
          <tr><td><strong>Likelihood</strong></td><td>$P(D|H)$</td><td>Probability of data given the hypothesis.</td></tr>
          <tr><td><strong>Evidence</strong></td><td>$P(D)$</td><td>Total probability of the data (Normalizing factor).</td></tr>
          <tr><td><strong>Posterior</strong></td><td>$P(H|D)$</td><td>Belief updated by empirical evidence.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 2 -->
    <h2 id="identity" class="premium-h2">II. Formal Bayesian Identity</h2>
    <p>The core of Bayesian logic is the update mechanism. It allows us to calculate the probability of a hypothesis (like a specific class label) given the observed features.</p>

    <div class="premium-math-block">
      P(H|D) = \frac{P(D|H) P(H)}{P(D)}
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">💡</div>
      <div class="premium-callout-body">
        <strong>The Normalizer:</strong> The evidence $P(D)$ is often calculated via the <strong>Law of Total Probability</strong>: $P(D) = \sum P(D|H_i) P(H_i)$. In complex ML models, this marginalization is the main computational bottleneck.
      </div>
    </div>

    <!-- SECTION 3 -->
    <h2 id="case-study" class="premium-h2">III. Case Study: Recursive Inference</h2>
    <div class="premium-case-study">
      <h4>The Two-Bag Problem</h4>
      <p>Assume two bags of marbles:</p>
      <ul>
        <li><strong>Bag 1:</strong> 3 Red, 2 Blue</li>
        <li><strong>Bag 2:</strong> 4 Red, 1 Blue</li>
      </ul>
      <p style="margin-top:15px">If we draw a <strong>Red</strong> marble, what is the probability it came from Bag 1?</p>
      <div class="premium-math-block" style="background:transparent; border:none; padding:10px 0; margin:15px 0;">
        P(B_1|R) = \frac{P(R|B_1)P(B_1)}{P(R|B_1)P(B_1) + P(R|B_2)P(B_2)} = \frac{(0.6 \times 0.5)}{(0.6 \times 0.5) + (0.8 \times 0.5)} = \frac{0.3}{0.7} \approx 0.428
      </div>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Computational Bayesian Logic</h2>
    <div class="premium-math-block">
      <python-code>
import numpy as np

# 1. Initial Beliefs & Observed Likelihoods
priors = np.array([0.5, 0.5])      # P(B1), P(B2)
likelihoods = np.array([3/5, 4/5]) # P(R|B1), P(R|B2)

# 2. Evidence Normalization
# P(D) = sum(P(D|Hi) * P(Hi))
evidence = np.sum(likelihoods * priors)

# 3. Posterior Calculation
# P(H|D) = (Likelihood * Prior) / Evidence
posteriors = (likelihoods * priors) / evidence

print(f"Initial Priors: {priors}")
print(f"Total Evidence P(Data): {evidence:.4f}")
print(f"Updated Posteriors: {posteriors}")
print(f"P(Bag 1 | Red): {posteriors[0]:.4f}")
      </python-code>
    </div>
  `},n={id:"probability-distributions",title:"Distributions: The Generative Architecture of Data",description:"A theoretical framework for understanding the 'shape' of data—using PMFs, PDFs, and CDFs to model the probabilistic behavior of random variables.",formula:"F_X(x) = P(X \\leq x) = \\int_{-\\infty}^x f(t) \\, dt",details:["Random Variables: Mapping Outcomes to the Real Line","PMF vs. PDF: Discrete Mass vs. Continuous Density","Cumulative Distribution Function (CDF): Probability Accumulation","Expectation and Variance: The Moments of a Distribution","Common Parametric Families: Gaussian, Bernoulli, Poisson, and Exponential","The Likelihood Function: Connecting Data to Parameters"],html:String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Distribution Roadmap</div>
      <a href="#lenses">I. Three Lenses of Probability</a>
      <a href="#families">II. Formal Distribution Families</a>
      <a href="#lab">Numerical Scipy Implementation</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="lenses" class="premium-h2">I. The Three Lenses of Probability</h2>
    <p>A <strong>Random Variable</strong> $X$ is a function that assigns a numerical value to each outcome in a sample space. Its behavior is captured through three defining functions that map its likelihood profile.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Function</th><th>Type</th><th>Mathematical Notation</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>PMF</strong></td><td>Discrete</td><td>$P(X=x)$ sum to 1.</td></tr>
          <tr><td><strong>PDF</strong></td><td>Continuous</td><td>$\int f(x)dx=1$ (Area is probability).</td></tr>
          <tr><td><strong>CDF</strong></td><td>Combined</td><td>$F(x) = P(X \leq x)$ (Accumulated probability).</td></tr>
        </tbody>
      </table>
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">🌌</div>
      <div class="premium-callout-body">
        <strong>Generative Modeling:</strong> In ML, we assume that our data is "sampled" from one of these distributions. Training a model typically means finding the parameters (like $\mu$ and $\sigma$) that make the observed data most likely.
      </div>
    </div>

    <!-- SECTION 2 -->
    <h2 id="families" class="premium-h2">II. Formal Distribution Families</h2>
    <p>Parametric distributions provide a structured way to model real-world phenomena, from simple coin flips to the central limit theorem.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">The Gaussian (Normal) Distribution</div>
      <p style="margin:0">Foundational for almost all parametric statistics. Defined entirely by its mean ($\mu$) and variance ($\sigma^2$).</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
      </div>
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">The Poisson Distribution</div>
      <p style="margin:0">Models the number of independent events occurring within a fixed interval (time/space) given an average rate $\lambda$.</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}
      </div>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Numerical Scipy Implementation</h2>
    <div class="premium-math-block">
      <python-code>
import numpy as np
from scipy.stats import norm, binom, poisson

# 1. Standard Normal Analysis (Mean=0, Std=1)
# Calculate the peak density at z=0
z_peak = norm.pdf(0, 0, 1)

# 2. Discrete Probability (Binomial)
# 10 Flips, 0.5 fair chance. Prob of exactly 5 heads.
heads_5 = binom.pmf(5, 10, 0.5)

# 3. Rate-based Probability (Poisson)
# Average 3 emails/hour. Prob of getting 2 emails.
emails_2 = poisson.pmf(2, 3)

print(f"Normal Peak (z=0): {z_peak:.4f}")
print(f"Binomial P(H=5): {heads_5:.4f}")
print(f"Poisson P(E=2): {emails_2:.4f}")
      </python-code>
    </div>
  `},s={id:"probability",title:"Probability",description:"Probability is the mathematical framework for quantifying uncertainty. In ML, it allows us to move beyond binary 'Yes/No' logic and embrace the nuanced reality of 'How likely is this?'.",keyConcepts:[{title:"Probability Basics",description:"Sample spaces, experiments, and simple outcomes (Coins & Dice)."},{title:"Types of Events",description:"Impossible, Sure, Independent, and Dependent events."},{title:"Probability Rules",description:"Addition, Multiplication, and Complement rules for outcome calculation."},{title:"Joint & Marginal",description:"Simultaneous vs. isolated variable probabilities and conditional logic."},{title:"Bayes Theorem",description:"Updating beliefs based on evidence, the core of Naive Bayes classifiers."},{title:"Distributions",description:"11 distinct distributions (Normal, Binomial, Poisson, etc.) for data modeling."}],sections:[i,t,e,a,o,n]};export{s as PROBABILITY_DATA};
