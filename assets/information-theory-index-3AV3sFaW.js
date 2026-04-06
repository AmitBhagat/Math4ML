const i={id:"entropy",title:"Information Theory Basics",description:"Introduction to Information Theory, Entropy, Cross-Entropy Loss, and KL Divergence in Machine Learning.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Info Theory · Introduction</div>
      <h1>Information Theory in Machine Learning</h1>
      <p><strong>Information Theory</strong>, originally developed by Claude Shannon, is a mathematical framework for quantifying information. In Machine Learning, it provides the foundational principles for understanding how models learn and optimize loss functions.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#what-is-entropy">What is Entropy?</a>
      <a href="#cross-entropy">Cross-Entropy Loss</a>
      <a href="#kl-divergence">KL Divergence (Relative Entropy)</a>
      <a href="#applications">Real-world Application: LLMs</a>
    </div>

    <h2 id="what-is-entropy">What is Entropy?</h2>
    <p>Entropy is a measure of the <strong>uncertainty</strong> or <strong>randomness</strong> associated with a random variable. In ML, it quantifies the amount of "information" or "surprise" contained in a dataset.</p>
    
    <div class="def-box">
      <div class="def-title">The Mathematical Formula $H(X)$</div>
      <p style="margin:0">For a discrete random variable $X$ with possible outcomes $x_1, \dots, x_n$ and probability mass function $P(X)$, Entropy is defined as:</p>
      <div class="math-block" style="margin-top:15px; margin-bottom:10px; background:transparent; border:none; padding:0;">
        $$H(X) = -\sum_{i=1}^{n} P(x_i) \log P(x_i)$$
      </div>
      <ul style="margin-bottom:0">
        <li><strong>Low Entropy:</strong> Occurs when one outcome is highly likely (low uncertainty).</li>
        <li><strong>High Entropy:</strong> Occurs when all outcomes are equally likely (maximum uncertainty).</li>
      </ul>
    </div>

    <h2 id="cross-entropy">Cross-Entropy Loss</h2>
    <p>Cross-Entropy measures the difference between two probability distributions: the <strong>true distribution</strong> ($P$) and the <strong>predicted distribution</strong> ($Q$).</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Why it is the standard for Multi-class Classification:</strong>
        <ol style="margin-top:5px; margin-bottom:0">
          <li><strong>Probability-Based:</strong> Naturally penalizes models based on how far the predicted probability of the correct class is from 1.0.</li>
          <li><strong>Steep Gradients:</strong> Unlike MSE, it provides steeper gradients when the model is very wrong, preventing vanishing gradients during initial training.</li>
          <li><strong>Maximum Likelihood:</strong> Minimizing Cross-Entropy is mathematically equivalent to maximizing the likelihood of the training data.</li>
        </ol>
      </div>
    </div>

    <h2 id="kl-divergence">KL Divergence (Kullback-Leibler Divergence)</h2>
    <p>KL Divergence, often called "Relative Entropy," measures how much one probability distribution $Q$ (approximation) diverges from a second, reference distribution $P$ (truth).</p>
    <div class="math-block">
      $$D_{KL}(P || Q) = \sum_{i} P(x_i) \log \frac{P(x_i)}{Q(x_i)}$$
    </div>
    <div class="callout info">
      <div class="callout-icon">📊</div>
      <div class="callout-body">
        <strong>Key Characteristics:</strong>
        <ul>
          <li><strong>Non-Symmetric:</strong> It's not a true distance metric ($D_{KL}(P || Q) \neq D_{KL}(Q || P)$).</li>
          <li><strong>Information Loss:</strong> Quantifies extra bits required to represent $P$ using a code optimized for $Q$.</li>
          <li><strong>Optimization:</strong> In ML, we minimize KL Divergence to make our model's distribution close to the target.</li>
        </ul>
      </div>
    </div>

    <h2 id="applications">Real-world Application: Training Large Language Models (LLMs)</h2>
    <p>Information theory is the backbone of how models like GPT-4 or Llama are trained.</p>
    <ul>
      <li><strong>Pre-training:</strong> LLMs use <strong>Cross-Entropy Loss</strong> for next-token prediction across the entire vocabulary.</li>
      <li><strong>RLHF:</strong> During alignment, <strong>KL Divergence</strong> is used as a penalty term to ensure the model doesn't diverge too far from the pre-trained base.</li>
      <li><strong>Evaluation:</strong> Metrics like <strong>Perplexity</strong> are directly derived from Entropy.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Understanding entropy within a distribution allows us to explore <strong><a href="#/mathematics/information-theory/kl-divergence">KL Divergence</a></strong> and measure differences between distributions.
    </div>
  `},t={id:"shannon-entropy",title:"Shannon Entropy",description:"Shannon Entropy measures the average amount of 'information' or 'surprise' in a process.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📏 Info Theory · Shannon</div>
      <h1>Shannon Entropy</h1>
      <p>Developed by Claude Shannon in 1948, <strong>Shannon Entropy</strong> is a mathematical measure of the <strong>uncertainty</strong>, <strong>randomness</strong>, or <strong>disorder</strong> associated with a random variable. It quantifies the average amount of "information" or "surprise" contained in the outcomes of a process.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example">Illustrative Example</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Basic Probability:</strong> $P(X)$—the likelihood of an event occurring.</li>
        <li><strong>Logarithms:</strong> Specifically $\log_2$, as information is typically measured in <strong>bits</strong>.</li>
        <li><strong>Expected Value:</strong> The weighted average of all possible values.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>The core idea is that the "information content" of an event is inversely proportional to its probability.</p>
    <ul>
      <li><strong>Low Probability = High Surprise:</strong> Unlikely events (e.g., "It is snowing in the Sahara") carry a lot of information.</li>
      <li><strong>High Probability = Low Surprise:</strong> Certain events (e.g., "The sun rose today") carry almost no information.</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Entropy</strong> is simply the <strong>average surprise</strong> across all possible outcomes. If a dataset is "pure" (all one class), the entropy is 0. If classes are spread evenly, entropy is at its maximum.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>For a discrete random variable $X$ with possible outcomes $\{x_1, \dots, x_n\}$, the Entropy $H(X)$ is defined as:</p>
    <div class="math-block">
      $$H(X) = - \sum_{i=1}^{n} P(x_i) \log_2 P(x_i)$$
    </div>

    <div class="def-box">
      <div class="def-title">Step-by-Step Breakdown</div>
      <ol style="margin-top:20px; margin-bottom:0">
        <li><strong>Self-Information:</strong> The information in a single outcome is $I(x_i) = \log_2 \left( 1/P(x_i) \right) = -\log_2 P(x_i)$.</li>
        <li><strong>Weighting:</strong> Multiply this information by the probability of its occurrence: $P(x_i) \log_2 P(x_i)$.</li>
        <li><strong>Summation:</strong> Sum these values across all $n$ outcomes.</li>
        <li><strong>The Negative Sign:</strong> Probabilities are between 0 and 1, their logs are negative; the negative sign at the front ensures positive Entropy.</li>
      </ol>
    </div>

    <h2 id="example">Illustrative Example</h2>
    <div class="example-box">
      <h4>Scenario: Picking Balls from a Bag</h4>
      <p>A bag with <strong>4 balls</strong>: 3 are <strong>Red</strong> and 1 is <strong>Blue</strong>.</p>
      
      <p><strong>Step-by-Step Solution:</strong></p>
      <ol>
        <li><strong>Probabilities:</strong> $P(\text{Red}) = 0.75$, $P(\text{Blue}) = 0.25$.</li>
        <li><strong>Formulation:</strong> $H(X) = -[P(\text{Red}) \log_2 P(\text{Red}) + P(\text{Blue}) \log_2 P(\text{Blue})]$</li>
        <li><strong>Solve:</strong> $H(X) = -[0.75 \log_2(0.75) + 0.25 \log_2(0.25)]$
          <div class="math-block">$$H(X) = -[-0.311 - 0.5] = 0.811 \text{ bits}$$</div>
        </li>
      </ol>
      <p><strong>Interpretation:</strong> Low entropy because the distribution is biased toward Red. If there were 2 Red and 2 Blue, entropy would be exactly **1.0 bit**.</p>
    </div>

    <h2 id="implementation">Python Implementation</h2>
    <python-code>
import numpy as np

def calculate_entropy(probabilities):
    # Filter out zero probabilities to avoid log(0) errors
    probabilities = np.array(probabilities)
    probabilities = probabilities[probabilities > 0]
    
    entropy = -np.sum(probabilities * np.log2(probabilities))
    return entropy

# Example usage:
probs = [0.75, 0.25]
print(f"Entropy: {calculate_entropy(probs):.4f} bits")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Decision Trees:</strong> Used in <strong>Information Gain</strong> to decide feature splits.</li>
      <li><strong>Loss Functions:</strong> <strong>Cross-Entropy Loss</strong> is standard for classification tasks.</li>
      <li><strong>Feature Selection:</strong> Identifying which variables provide the most information about the target.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Minimizing KL Divergence is mathematically equivalent to minimizing <strong><a href="#/mathematics/information-theory/cross-entropy">Cross-Entropy Loss</a></strong>, our next topic.
    </div>
  `},e={id:"kl-divergence",title:"KL Divergence",description:"KL Divergence, or Relative Entropy, measures how much one probability distribution differs from a reference distribution.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📏 Info Theory · KL Divergence</div>
      <h1>Kullback-Leibler (KL) Divergence</h1>
      <p><strong>Kullback-Leibler (KL) Divergence</strong>, often called <strong>Relative Entropy</strong>, is a statistical measure that quantifies how much one probability distribution (often the predicted distribution) differs from a second, reference probability distribution (the true distribution).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example">Illustrative Example</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Shannon Entropy:</strong> Understanding uncertainty in a single distribution.</li>
        <li><strong>Cross-Entropy:</strong> Total bits to represent $P$ using distribution $Q$.</li>
        <li><strong>Logarithms:</strong> Specifically the property $\log(a/b) = \log(a) - \log(b)$.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>While <strong>Entropy</strong> measures uncertainty of a single distribution, <strong>KL Divergence</strong> measures "distance" between two.</p>
    <ul>
      <li><strong>If $P = Q$:</strong> Divergence is <strong>0</strong>.</li>
      <li><strong>If $P \neq Q$:</strong> Divergence is <strong>positive</strong>.</li>
    </ul>
    
    <div class="callout warning">
      <div class="callout-icon">⚠️</div>
      <div class="callout-body">
        <strong>Asymmetry:</strong> KL Divergence is <strong>asymmetric</strong>: $D_{KL}(P || Q) \neq D_{KL}(Q || P)$. It is a "divergence," not a true distance metric.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>For discrete distributions $P$ and $Q$, KL Divergence from $Q$ to $P$ is:</p>
    <div class="math-block">
      $$D_{KL}(P \parallel Q) = \sum_{i} P(x_i) \log_2 \left( \frac{P(x_i)}{Q(x_i)} \right)$$
    </div>

    <div class="def-box">
      <div class="def-title">Relationship with Entropy</div>
      <p style="margin:0">KL Divergence is the difference between Cross-Entropy and Shannon Entropy:</p>
      <div class="math-block" style="margin-top:10px; margin-bottom:10px; background:transparent; border:none; padding:0;">
        $$D_{KL}(P \parallel Q) = H(P, Q) - H(P)$$
      </div>
      <p style="margin:0">It represents the "extra" bits required because our model $Q$ isn't perfect.</p>
    </div>

    <h2 id="example">Illustrative Example</h2>
    <div class="example-box">
      <h4>Scenario: Weather Prediction</h4>
      <p>True probability $P$: Sunny (0.8), Rainy (0.2). Model $Q$: Sunny (0.5), Rainy (0.5).</p>
      
      <p><strong>Step-by-Step Solution:</strong></p>
      <ol>
        <li><strong>Sunny:</strong> $0.8 \cdot \log_2(0.8 / 0.5) \approx 0.542$</li>
        <li><strong>Rainy:</strong> $0.2 \cdot \log_2(0.2 / 0.5) \approx -0.264$</li>
        <li><strong>Total:</strong> $D_{KL}(P \parallel Q) = 0.542 - 0.264 = 0.278 \text{ bits}$</li>
      </ol>
    </div>

    <h2 id="implementation">Python Implementation (NumPy)</h2>
    <python-code>
import numpy as np

def kl_divergence(p, q):
    """
    Computes KL Divergence D_KL(P || Q)
    """
    p = np.asarray(p)
    q = np.asarray(q)
    return np.sum(p * np.log2(p / q))

# True vs Predicted
P = [0.8, 0.2]
Q = [0.5, 0.5]

print(f"KL Divergence: {kl_divergence(P, Q):.4f} bits")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>VAEs:</strong> Forces latent space to be close to a Standard Normal distribution.</li>
      <li><strong>t-SNE:</strong> Minimizes difference between high and low dimensional distance distributions.</li>
      <li><strong>RL (PPO):</strong> Ensures new policy doesn't deviate too far from the old one.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Minimizing <strong>KL Divergence</strong> is mathematically equivalent to minimizing <strong>Cross-Entropy Loss</strong>, our next topic.
    </div>
  `},o={id:"cross-entropy",title:"Cross-Entropy",description:"Cross-Entropy measures the difference between two probability distributions and is the standard loss function for multi-class classification.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📏 Info Theory · Cross-Entropy</div>
      <h1>Cross-Entropy</h1>
      <p><strong>Cross-Entropy</strong> measures the difference between two probability distributions: the <strong>true distribution</strong> ($P$) and the <strong>predicted distribution</strong> ($Q$). It is the primary objective function used in Neural Networks for classification.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#relationship">Relationship to KL Divergence</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Shannon Entropy:</strong> Understanding uncertainty in a single distribution.</li>
        <li><strong>KL Divergence:</strong> Measuring the "distance" between two distributions.</li>
        <li><strong>Logarithms:</strong> Specifically the property $\log(a/b) = \log(a) - \log(b)$.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>In Machine Learning, we often have a true distribution $P$ (the labels) and a predicted distribution $Q$ (the model's output). Cross-Entropy tells us how many bits we need to represent events from $P$ using a code optimized for $Q$.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Relationship to KL Divergence:</strong> Since the true distribution $P$ is fixed, minimizing Cross-Entropy is mathematically equivalent to minimizing KL Divergence.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>For discrete probability distributions $P$ and $Q$ defined on the same probability space, the Cross-Entropy $H(P, Q)$ is defined as:</p>
    <div class="math-block">
      $$H(P, Q) = -\sum_{i} P(x_i) \log_2 Q(x_i)$$
    </div>

    <h2 id="relationship">Relationship from Entropy</h2>
    <p>We can also express KL Divergence in terms of Cross-Entropy and Shannon Entropy:</p>
    <div class="math-block">
      $$H(P, Q) = H(P) + D_{KL}(P \parallel Q)$$
    </div>
    <p>In simple terms: <strong>Cross-Entropy = (Actual bits needed for $P$) + (Extra bits required because model $Q$ isn't perfect).</strong></p>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Multi-class Classification:</strong> Standard loss function (with Softmax) for neural networks.</li>
      <li><strong>Language Modeling:</strong> Used in pre-training LLMs for next-token prediction.</li>
      <li><strong>Information Gain:</strong> Related to how decision trees split features.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Having learned how to measure uncertainty and loss, let's look at <strong>Mutual Information</strong> to see how variables share information.
    </div>
  `},n={id:"mutual-information",title:"Mutual Information",description:"Mutual Information (MI) quantifies the amount of information obtained about one random variable through another, capturing any kind of statistical dependency.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📏 Info Theory · MI</div>
      <h1>Mutual Information (MI)</h1>
      <p><strong>Mutual Information</strong> is a statistical measure that quantifies the amount of information obtained about one random variable through another random variable. It measures how much knowing one variable reduces uncertainty about the other.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example">Illustrative Example</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Shannon Entropy $H(X)$:</strong> The average uncertainty in variable $X$.</li>
        <li><strong>Joint Entropy $H(X, Y)$:</strong> The total uncertainty of a pair of variables.</li>
        <li><strong>Conditional Entropy $H(X|Y)$:</strong> The uncertainty remaining in $X$ after $Y$ is known.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>If two variables $X$ and $Y$ are independent, knowing $Y$ tells you nothing about $X$; their Mutual Information is <strong>zero</strong>. If they are highly dependent, knowing $Y$ tells you a lot about $X$.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Reduction in Entropy:</strong> MI is the intersection of information between two variables. It is the reduction in the entropy of $X$ achieved by learning $Y$: $I(X; Y) = H(X) - H(X|Y)$.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>For two discrete random variables $X$ and $Y$, Mutual Information is defined as:</p>
    <div class="math-block">
      $$I(X; Y) = \sum_{X, Y} P(x, y) \log_2 \left( \frac{P(x, y)}{P(x)P(y)} \right)$$
    </div>

    <div class="def-box">
      <div class="def-title">Key Properties</div>
      <ul style="margin-top:10px; margin-bottom:0">
        <li><strong>Symmetry:</strong> $I(X; Y) = I(Y; X)$. Information $X$ gives about $Y$ is the same as $Y$ gives about $X$.</li>
        <li><strong>Non-negativity:</strong> $I(X; Y) \geq 0$. Information gained cannot be negative.</li>
        <li><strong>Relationship to KL Divergence:</strong> $I(X; Y) = D_{KL}(P(x, y) \parallel P(x)P(y))$. It measures how far the variables are from independent.</li>
      </ul>
    </div>

    <h2 id="example">Illustrative Example</h2>
    <div class="example-box">
      <h4>Scenario: Predict if a Fruit is an Orange based on its Color</h4>
      <p>Data: 2 samples [Orange, Orange], 1 [Apple, Red], 1 [Apple, Green].</p>
      <ul>
        <li><strong>Entropy of Fruit $H(X)$:</strong> $P(\text{Orange})=0.5, P(\text{Apple})=0.5 \implies H(X) = 1$ bit.</li>
        <li><strong>Conditional Entropy $H(X|Y)$:</strong> If Color is Orange, we are 100% sure it's Orange. If Red or Green, 100% sure it's Apple. $H(X|Y) = 0$.</li>
        <li><strong>MI Calculation:</strong> $I(X; Y) = 1 - 0 = 1$ bit.</li>
      </ul>
      <p><strong>Conclusion:</strong> Knowing the color completely removes the uncertainty about the fruit.</p>
    </div>

    <h2 id="implementation">Python Implementation (Scikit-Learn)</h2>
    <python-code>
from sklearn.feature_selection import mutual_info_classif
import pandas as pd

# Sample Data
data = pd.DataFrame({
    'Feature_A': [1, 2, 1, 2],
    'Feature_B': [5, 5, 5, 5]  # Constant feature, MI should be 0
})
target = [0, 1, 0, 1]

# Calculate scores
mi_scores = mutual_info_classif(data, target)

for name, score in zip(data.columns, mi_scores):
    print(f"Mutual Information for {name}: {score:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Feature Selection:</strong> A powerful filter method that detects <strong>non-linear</strong> relationships that correlation would miss.</li>
      <li><strong>Bayesian Networks:</strong> Used in structure learning to determine whether edges should exist between nodes.</li>
    </ul>

    <div class="linking-rule">
      <strong>Final Step:</strong> Having mastered the bridge of <strong>Mutual Information</strong> between variables, let's look at <strong>Entropy Examples</strong> to solidify our understanding of these core calculations.
    </div>
  `},r={id:"information-theory-examples",title:"Practical Examples",description:"Master the calculations and logic behind Entropy, Cross-Entropy, KL Divergence, and Perplexity with solved examples.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📝 Solved Examples · Info Theory</div>
      <h1>Information Theory: Practical Examples</h1>
      <p>Continuing with our GeeksforGeeks-style guide, here are practical examples to help you master the calculations and logic behind these concepts.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#entropy">1. Entropy Calculation</a>
      <a href="#cross-entropy">2. Cross-Entropy Loss</a>
      <a href="#kl-divergence">3. KL Divergence Example</a>
      <a href="#perplexity">4. LLM Application: Perplexity</a>
    </div>

    <h2 id="entropy">1. Example of Entropy Calculation</h2>
    <div class="example-box">
      <p><strong>Scenario:</strong> A biased coin has $P(\text{Heads}) = 0.8$ and $P(\text{Tails}) = 0.2$. Calculate the Entropy of this coin toss.</p>
      
      <p><strong>Solution:</strong></p>
      <ol>
        <li>$P(x_1) = 0.8 \rightarrow \log_2(0.8) \approx -0.322$</li>
        <li>$P(x_2) = 0.2 \rightarrow \log_2(0.2) \approx -2.322$</li>
        <li>$H(X) = -[(0.8 \times -0.322) + (0.2 \times -2.322)]$
          <div class="math-block">$$H(X) = -[-0.2576 - 0.4644] = 0.722 \text{ bits}$$</div>
        </li>
      </ol>
      <p><strong>Insight:</strong> If the coin were fair (0.5/0.5), entropy would be 1. Since it's biased, the uncertainty is lower.</p>
    </div>

    <h2 id="cross-entropy">2. Example of Cross-Entropy Loss</h2>
    <div class="example-box">
      <p><strong>Scenario:</strong> Image classifier for [Cat, Dog, Bird]. Target is <strong>Dog</strong>. Predictions: [0.1, 0.7, 0.2].</p>
      
      <p><strong>Solution:</strong></p>
      <ol>
        <li>True ($P$): [0, 1, 0]. Predicted ($Q$): [0.1, 0.7, 0.2].</li>
        <li>$L = -\sum P(x_i) \log Q(x_i) = -[0 \cdot \log(0.1) + 1 \cdot \log(0.7) + 0 \cdot \log(0.2)]$</li>
        <li>$L = -\log(0.7) \approx 0.357$</li>
      </ol>
      <p><strong>Insight:</strong> Only the probability of the *correct* class matters here. Higher confidence in the correct class reduces loss.</p>
    </div>

    <h2 id="kl-divergence">3. Example of KL Divergence</h2>
    <div class="example-box">
      <p><strong>Scenario:</strong> Weather model $Q$ predicts rain with 50% probability. True distribution $P$ shows it rains only 10% of the time.</p>
      <ul>
        <li>$P = [0.1, 0.9]$, $Q = [0.5, 0.5]$</li>
      </ul>
      
      <p><strong>Solution:</strong></p>
      <ol>
        <li>Rain term: $0.1 \cdot \log_2(0.1/0.5) \approx -0.2322$</li>
        <li>No Rain term: $0.9 \cdot \log_2(0.9/0.5) \approx 0.7632$</li>
        <li>$D_{KL} = -0.2322 + 0.7632 = 0.531 \text{ bits}$</li>
      </ol>
      <p><strong>Insight:</strong> This value represents the "penalty" from using the wrong distribution ($Q$) to describe reality ($P$).</p>
    </div>

    <h2 id="perplexity">4. LLM Application: Perplexity Example</h2>
    <div class="example-box">
      <p><strong>Scenario:</strong> Phrase: *"The capital of France is..."*</p>
      <ul>
        <li>Model A predicts **"Paris"** with 0.9 probability.</li>
        <li>Model B predicts **"Paris"** with 0.4 probability.</li>
      </ul>
      
      <p><strong>Solution:</strong></p>
      <ol>
        <li>Perplexity ($PP$) is approximately $1 / P(\text{correct_token})$.</li>
        <li><strong>Model A:</strong> $PP = 1 / 0.9 = 1.11$</li>
        <li><strong>Model B:</strong> $PP = 1 / 0.4 = 2.5$</li>
      </ol>
      <p><strong>Conclusion:</strong> Model A is better; lower perplexity means the model is "less surprised" by the truth.</p>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> Having mastered the information-theoretic foundations, you've completed the <strong>Information Theory</strong> module. Ready to dive into <strong>Discrete Mathematics</strong>?
    </div>
  `},s={id:"information-theory",title:"Information Theory",description:"Information Theory provides the mathematical foundation for quantifying uncertainty, measuring information flow, and designing optimal loss functions for Machine Learning models.",keyConcepts:[{title:"Self-Information",description:"Quantifying the 'surprise' or information in a single event."},{title:"Shannon Entropy",description:"The average uncertainty or randomness in a probability distribution."},{title:"KL Divergence",description:"Relative Entropy: measuring how much one distribution diverges from another."},{title:"Cross-Entropy",description:"The standard loss function for classification and language modeling."},{title:"Mutual Information",description:"Quantifying the dependency between different random variables."},{title:"Perplexity",description:"A measure of how well a probability model predicts a sample (common in NLP)."}],sections:[i,t,e,o,n,r]};export{s as INFORMATION_THEORY_DATA};
