const t={id:"mle",title:"Maximum Likelihood Estimation (MLE)",description:"MLE is a method of estimating the parameters of a probability distribution by maximizing a likelihood function.",color:"#D32F2F",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Estimation</div>
      <h1>Maximum Likelihood Estimation: Finding the Best Parameters</h1>
      <p><strong>Maximum Likelihood Estimation (MLE)</strong> is the fundamental way we "train" models. It asks a simple question: "Given this data, what are the most likely parameters that could have produced it?" In ML, this is how we find the optimal weights for our models.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Likelihood vs Probability</strong>: Understanding the difference in perspective.</li>
        <li><strong>Logarithms</strong>: Used to turn products into sums.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Probability allows us to predict data if we know the parameters. <strong>Likelihood</strong> works in reverse—we have the data, and we want to find the <strong>Parameters</strong>. <strong>MLE</strong> is the method of picking the parameter \(\theta\) that makes the observed data as "unsurprising" as possible.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of MLE as <strong>"Reverse Engineering."</strong> 
        Imagine you find a machine that occasionally spits out Red or Blue balls. You see it spit out [Red, Red, Blue, Red]. 
        MLE asks: <em>"What is the most likely setting for the 'Red knob' on this machine?"</em> 
        If the knob is at 75%, this sequence is very likely. If the knob is at 10%, this sequence is a miracle. We pick 75%.
      </div>
    </div>

    <h2 id="derivation">Formal Definition</h2>
    <p>For i.i.d data \(x_1, \dots, x_n\), the likelihood is the product of individual probabilities:</p>
    <div class="math-block">$$L(\theta) = \prod_{i=1}^n P(x_i | \theta)$$</div>
    <p>We usually maximize the <strong>Log-Likelihood</strong> (\(\ell(\theta)\)) because it’s mathematically easier (it turns products into sums):</p>
    <div class="math-block">$$\ell(\theta) = \sum_{i=1}^n \log P(x_i | \theta)$$</div>

    <h2 id="example-coin" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Estimating Coin Bias</h2>
    
      <h4>Problem: Finding the "True" Chance of Heads</h4>
      <p>You flip a coin 10 times and get 7 Heads. Estimate the bias \(p\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Likelihood Function:</strong> \(L(p) = p^7 (1-p)^3\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Log-Likelihood:</strong> \(\ell(p) = 7 \log(p) + 3 \log(1-p)\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Optimize:</strong> Set derivative to zero: \(\frac{7}{p} - \frac{3}{1-p} = 0\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Solve:</strong> \(7(1-p) = 3p \to 7 - 7p = 3p \to 10p = 7 \to p = 0.7\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> \(p = 0.7\). Our intuition matches the math: the most likely bias is exactly the observed ratio of successes.
        </div>
      </div>
    

    <h2 id="example-gauss" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Mean of Gaussian Data</h2>
    
      <h4>Problem: Estimating the "Center" of Noise</h4>
      <p>Data: [10, 12, 11]. Assume data is Normal with unknown \(\mu\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> The Log-Likelihood of Gaussian data is proportional to the <strong>Negative Squared Error</strong> (\(-(x - \mu)^2\)).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Conclusion:</strong> To maximize the likelihood, we must <strong>minimize</strong> the squared error.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> This is why we use <strong>MSE (Mean Squared Error)</strong> in Regression! It's not just a random choice; it is mathematically derived from the MLE of a Gaussian distribution. Max Likelihood = Min Error.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np
from scipy.optimize import minimize

# Some data generated from a distribution (e.g. Normal mean=5)
data = np.random.normal(5.2, 1.0, 100)

def neg_log_likelihood(mu):
    # Sum of log of Normal PDF
    # (Since minimize works on 'negative', we negate the log-likelihood)
    return -np.sum(-0.5 * (data - mu)**2)

# Start guess and optimize
res = minimize(neg_log_likelihood, x0=[0.0])
print(f"Estimated Mean (MLE): {res.x[0]:.4f}")
print(f"Sample Mean: {data.mean():.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Logistic Regression</strong>: MLE is used to find the coefficients that maximize the probability of the observed classes.</li>
      <li><strong>Neural Networks</strong>: Training a network is essentially performing MLE on the weights to minimize Cross-Entropy.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we already have a <em>hunch</em> about the parameters before seeing data? Explore <strong><a href="#/mathematics/statistics/map">Maximum a Posteriori (MAP)</a></strong>.
    </div>
  `},e={id:"map",title:"Maximum a Posteriori (MAP)",description:"MAP is a method of estimating parameters that incorporates 'Prior' knowledge or beliefs into the estimation process.",color:"#D32F2F",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Bayesian</div>
      <h1>Maximum a Posteriori: Combining Data and Belief</h1>
      <p><strong>Maximum a Posteriori (MAP)</strong> is the "Smarter" sibling of MLE. While MLE only cares about the current data, MAP allows us to input <strong>Prior Beliefs</strong> (e.g., "Weights should be small"). This is the mathematical foundation for <strong>Regularization</strong> in Machine Learning.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>MLE</strong>: Understanding Likelihood.</li>
        <li><strong>Bayes' Theorem</strong>: Prior, Likelihood, and Posterior.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>MLE asks: <em>"What parameters fit the data best?"</em> MAP asks: <em>"What parameters fit the data best <strong>AND</strong> make sense based on what I already know?"</em> If your dataset is tiny, MLE can be easily fooled by noise. MAP adds a "Brake" to the process, preventing the model from becoming too overconfident about extreme values.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of MAP as <strong>"Expert Advice."</strong> 
        MLE is like an apprentice who only looks at the first 3 trials. If they see 3 heads, they scream "The coin is 100% rigged!" 
        MAP is like the Expert who says: <em>"I hear you, but my 20 years of experience (the Prior) tells me most coins are 50/50. I'll bet it's actually 60/40."</em> 
        MAP balances the data with your past knowledge.
      </div>
    </div>

    <h2 id="derivation">Formal Definition</h2>
    <p>From Bayes' Theorem: \(P(\theta | X) \propto P(X | \theta) \cdot P(\theta)\). We maximize the log of this product:</p>
    <div class="math-block">$$\hat{\theta}_{MAP} = \arg\max_{\theta} \left[ \log L(\theta) + \log P(\theta) \right]$$</div>
    <p>Notice how MAP is just <strong>MLE + a Prior Penalty</strong> (\(\log P(\theta)\)).</p>

    <h2 id="example-coin" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Prior Belief about Coin Bias</h2>
    
      <h4>Problem: Damping the Noise</h4>
      <p>Data: 2 Heads, 1 Tail. Bias from MLE is 66%. But your "Prior" is that coins are 50/50.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> We add "Virtual Trials" based on our belief.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Posterior Estimate:</strong> Add 2 virtual heads and 2 virtual tails (a Beta(2,2) prior).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Updated Data:</strong> (2+2) Heads, (1+2) Tails = 4H, 3T.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Result:</strong> \(\hat{p} = 4/7 \approx 57\%\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> 57%. MAP pulled the wild 66% estimate back toward the 50% reality. It "smoothed" the data.
        </div>
      </div>
    

    <h2 id="example-ridge" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Ridge & Lasso Regularization</h2>
    
      <h4>Problem: Preventing Weights from Exploding</h4>
      <p>In Linear Regression, if you assume your weights follow a Gaussian prior \(\mathcal{N}(0, \sigma)\), what happens to the objective function?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> \(\log L(\theta)\) is the Mean Squared Error.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Penalty:</strong> \(\log P(\theta)\) for a Gaussian is proportional to \(\theta^2\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Combine:</strong> Minimize \(\text{MSE} + \lambda \theta^2\).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> This is exactly <strong>Ridge Regression (L2)</strong>! It's not just a trick to stop overfitting; it is the Bayesian decision to assume your weights are probably close to Zero.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np
from scipy.optimize import minimize

data = np.random.normal(5, 1, 10) # 10 points

def neg_posterior(mu):
    # Likelihood (from data)
    likelihood = -np.sum(-0.5 * (data - mu)**2)
    # Prior belief: mu is close to zero (Gaussian prior)
    prior = 0.5 * (mu - 0)**2 
    return likelihood + prior

res = minimize(neg_posterior, x0=[0.0])
print(f"MLE Estimate: {data.mean():.4f}")
print(f"MAP Estimate: {res.x[0]:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>L2 Regularization (Weight Decay)</strong>: Using a Gaussian prior to keep weights small and controllable.</li>
      <li><strong>L1 Regularization (Lasso)</strong>: Using a Laplace prior to force most weights to be exactly zero (Sparse feature selection).</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Models can fail by being too rigid or too wild. How do we find the "Sweet Spot" between the two? Explore <strong><a href="#/mathematics/statistics/bias-variance">The Bias-Variance Tradeoff</a></strong>.
    </div>
  `},i={id:"bias-variance",title:"Bias-Variance Tradeoff",description:"The Bias-Variance Tradeoff is the fundamental struggle between model simplicity and complexity. It is the key to managing Underfitting and Overfitting.",color:"#D32F2F",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Optimization</div>
      <h1>Bias-Variance Tradeoff: The Model's Struggle</h1>
      <p>The <strong>Bias-Variance Tradeoff</strong> is the mathematical explanation of why our models fail. It decomposes the total error into two competing forces: <strong>Bias</strong> (Simplicity) and <strong>Variance</strong> (Wildness). Finding the "Sweet Spot" between them is the goal of all Machine Learning.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>MSE (Mean Squared Error)</strong>: How to measure residuals.</li>
        <li><strong>Complexity</strong>: Model capacity (e.g., number of parameters).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>If you build a model that is too simple (a straight line for a curvy road), you have <strong>High Bias</strong>—you are consistently wrong in a predictable way. If you build a model that is too complex (a line that touches every single data point), you have <strong>High Variance</strong>—you are reacting to noise, and your predictions will be wild on new data.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of the tradeoff as <strong>"The Storyteller's Dilemma."</strong> 
        A <strong>High Bias</strong> storyteller summarizes too much ("The hero won"). You miss the details. 
        A <strong>High Variance</strong> storyteller tells you every blade of grass the hero walked on. You can't see the Plot. 
        A <strong>Perfect Model</strong> tells you exactly the "General Lessons" (The Plot) without the noise.
      </div>
    </div>

    <h2 id="derivation">Mathematical Decomposition</h2>
    <p>Total Expected Error = \(\text{Bias}^2 + \text{Variance} + \sigma_{noise}^2\).</p>
    <ul>
      <li><strong>Bias:</strong> Error from erroneous assumptions (\(\mathbb{E}[\hat{f}] - f\)).</li>
      <li><strong>Variance:</strong> Sensitivity to small fluctuations in the training set.</li>
      <li><strong>Irreducible Error:</strong> Fundamental noise in the data (\(\sigma^2\)).</li>
    </ul>

    <h2 id="example-under" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Underfitting (High Bias)</h2>
    
      <h4>Problem: Trying to Fit a Parabola with a Line</h4>
      <p>Data: \(y = x^2\). Model: \(\hat{y} = ax + b\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> No matter how you tune \(a\) and \(b\), the "Linear" assumptions can't capture the "Curved" truth.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Result:</strong> High Error on both training <strong>and</strong> testing sets.</div>
        </div>
      </div>

      <div class="callout error">
        <div class="callout-icon">✕</div>
        <div class="callout-body">
          <strong>Result:</strong> This model is <strong>Underfitting</strong>. It is too "Opinionated" (BIASED) to learn from the data.
        </div>
      </div>
    

    <h2 id="example-over" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Overfitting (High Variance)</h2>
    
      <h4>Problem: Fitting 5 Points with a 10th-Degree Polynomial</h4>
      <p>Data: [1, 2, 3, 4, 5]. Model: Complex curve passing through all 5 points exactly.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> The model has <strong>Zero Error</strong> on the training set. It captures every random wiggle.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Predict:</strong> When you give it a 6th point, the curve swings wildly off-target.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> This model is <strong>Overfitting</strong>. It has high <strong>VARIANCE</strong> because even a tiny change in one of the 5 points would completely change the entire curve. It's too sensitive!
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np
import matplotlib.pyplot as plt

# Generate noisy data
x = np.linspace(0, 1, 20)
y = np.sin(x * 6) + np.random.normal(0, 0.2, 20)

# Linear (High Bias)
p1 = np.poly1d(np.polyfit(x, y, 1))

# High-degree (High Variance)
p15 = np.poly1d(np.polyfit(x, y, 15))

# Plotting Comparison
plt.scatter(x, y, label="Data")
plt.plot(x, p1(x), label="High Bias")
plt.plot(x, p15(x), label="High Variance")
plt.legend()
plt.show()
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Bagging (Random Forests)</strong>: Lowers <strong>Variance</strong> by averaging many high-variance trees together.</li>
      <li><strong>Boosting (XGBoost)</strong>: Lowers <strong>Bias</strong> by sequentially correcting the errors of simple models.</li>
      <li><strong>Cross-Validation</strong>: The standard tool to find the "Complexity Point" where bias and variance are perfectly balanced.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> How do we prove that our model's performance isn't just a fluke of luck? Explore <strong><a href="#/mathematics/statistics/hypothesis-testing">Hypothesis Testing</a></strong>.
    </div>
  `},s={id:"hypothesis-testing",title:"Hypothesis Testing",description:"Hypothesis Testing is the statistical process of determining if an observed effect is 'Real' or just a result of random chance.",color:"#D32F2F",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Inference</div>
      <h1>Hypothesis Testing: The Proof of Truth</h1>
      <p><strong>Hypothesis Testing</strong> is the mathematical framework for making decisions. It asks the critical question: "Is the improvement in my model's accuracy a <strong>Real Signal</strong>, or was I just <strong>Lucky</strong> with this specific dataset?" In Machine Learning, we use these tests to validate our experiments and feature importance.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Probability Distributions</strong>: Normal, T, and Chi-Square.</li>
        <li><strong>Central Limit Theorem</strong>: Why sample means form bell curves.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Everything in statistics starts with the <strong>Null Hypothesis (\(H_0\))</strong>—the assumption that "Nothing happened, it's just noise." We only accept the <strong>Alternative Hypothesis (\(H_1\))</strong> if the evidence (the data) is so overwhelming that it's highly unlikely to have occurred by chance. The <strong>P-Value</strong> is the probability of seeing your results if the "Nothing happened" assumption were true.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Hypothesis Testing as a <strong>"Trial in Court."</strong> 
        The Model is <strong>"Innocent"</strong> of having any real effect until proven guilty. 
        The <strong>Evidence</strong> is your Test Data. 
        The <strong>P-Value</strong> is the "Reasonable Doubt." 
        If the doubt is less than 5% (\(\alpha = 0.05\)), we "Convict" the Null and declare the effect <strong>Statistically Significant</strong>.
      </div>
    </div>

    <h2 id="process">The 4-Step Process</h2>
    <div class="algorithm-steps">
      <div class="algorithm-step">
        <span class="step-badge">1</span>
        <div><strong>State Hypotheses:</strong> \(H_0\) (No effect) vs. \(H_1\) (There is an effect).</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">2</span>
        <div><strong>Choose Alpha (\(\alpha\)):</strong> Usually 0.05. This is your "Threshold for Surprise."</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">3</span>
        <div><strong>Calculate Test Statistic:</strong> Compute a score (Z, T, or \(\chi^2\)) based on your data.</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">4</span>
        <div><strong>Compare P-Value:</strong> If \(p < \alpha\), Reject \(H_0\).</div>
      </div>
    </div>

    <h2 id="example-ttest" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> T-Test (A/B Testing)</h2>
    
      <h4>Problem: Does a New UI Increase Clicks?</h4>
      <p>Group A (Old UI) has 5% clicks. Group B (New UI) has 7% clicks. Is the 2% gain "Real"?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Test:</strong> <strong>Independent 2-Sample T-Test</strong>. It compares the means of two independent groups.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Calculation:</strong> Factor in the "Noise" (Variance) of both groups. If the groups are large and consistent, the T-score will be high.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> If \(p=0.02\), we reject the "No difference" theory. The UI change is 98% likely to be a real improvement.
        </div>
      </div>
    

    <h2 id="example-chi" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Chi-Square (Independence)</h2>
    
      <h4>Problem: Is 'Gender' Related to 'Buying a Phone'?</h4>
      <p>Data: 200 people. Does knowing gender change the probability of purchase?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Test:</strong> <strong>Chi-Square Test of Independence</strong>. Best for categorical comparisons.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Logic:</strong> Compare the "Observed" counts in each category vs. "Expected" counts if they were totally independent.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> In ML, we use Chi-Square for <strong>Feature Selection</strong>. If a feature and the target label are "Independent," the feature is useless—we drop it from the model.
        </div>
      </div>
    

    <h2 id="example-anova" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> ANOVA (Comparing 3+ Labs)</h2>
    
      <h4>Problem: Which Optimizer is Best? (Adam vs. SGD vs. RMSprop)</h4>
      <p>You run 10 training sessions with each optimizer. Is there a "Best" one?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Test:</strong> <strong>One-Way ANOVA</strong>. It checks if *at least one* group mean is different from the others.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Mechanism:</strong> It compares the "Variance between groups" vs. the "Variance within groups."</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> ANOVA tells you *if* a difference exists. You then follow up with "Post-hoc" tests to find out exactly which optimizer won.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np
from scipy import stats

# 1. T-Test: UI Comparison
group_a = np.random.normal(0.05, 0.01, 100) # Old UI conversion
group_b = np.random.normal(0.07, 0.01, 100) # New UI conversion
t_stat, p_val = stats.ttest_ind(group_a, group_b)
print(f"T-Test p-value: {p_val:.4f}")

# 2. ANOVA: 3 Model comparison
m1 = [0.8, 0.82, 0.79]
m2 = [0.85, 0.84, 0.86]
m3 = [0.75, 0.72, 0.74]
f_stat, p_val_anova = stats.f_oneway(m1, m2, m3)
print(f"ANOVA p-value: {p_val_anova:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Model Comparison</strong>: Proving that your "New Architecture" is significantly better than the baseline.</li>
      <li><strong>Data Quality</strong>: Checking if the "Validation Set" distribution is significantly different from the "Training Set" (Data Drift).</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Tests give us a "Yes/No" answer. But how do we estimate the <em>Range</em> of possible truths? Explore <strong><a href="#/mathematics/statistics/confidence-intervals">Confidence Intervals</a></strong>.
    </div>
  `},a={id:"confidence-intervals",title:"Confidence Intervals",description:"Confidence Intervals are a range of values that likely contain the true population parameter. They provide a measure of precision for our estimates.",color:"#D32F2F",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Estimation</div>
      <h1>Confidence Intervals: The Margin of Error</h1>
      <p>A <strong>Confidence Interval (CI)</strong> is a mathematical "Safety Net." instead of giving a single point estimate (e.g., "The mean is 5.0"), it gives a range (e.g., "The mean is between 4.8 and 5.2"). In Machine Learning, this tells us exactly how much we should <strong>Trust</strong> our model's predictions.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Standard Error</strong>: Standard deviation of the sample mean.</li>
        <li><strong>Z-Scores / T-Scores</strong>: Critical values from distributions.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A single number is extremely fragile—it can be easily swayed by one outlier in your data. <strong>Confidence Intervals</strong> quantify the <strong>Precision</strong> of your work. A 95% Confidence Interval doesn't mean "The truth is 95% likely to be inside." It means: <em>"If I repeat this entire experiment 100 times, 95 of my calculated intervals will successfully contain the True Answer."</em></p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a Confidence Interval as <strong>"Honesty in Data."</strong> 
        If you predict a house price is $500k, but your interval is [$300k, $700k], your model is saying: <em>"I'm guessing, but don't bet your life on it."</em> 
        If the interval is [$495k, $505k], your model is highly confident. 
        In ML, we want these intervals to be as <strong>Narrow</strong> as possible.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <p>A typical Confidence Interval is: \(\text{Point Estimate} \pm \text{Margin of Error}\).</p>
    <div class="math-block">$$\text{CI} = \overline{X} \pm Z^* \left( \frac{\sigma}{\sqrt{n}} \right)$$</div>
    <ul>
      <li><strong>\(Z^*\)</strong>: Critical value (usually 1.96 for 95%).</li>
      <li><strong>Standard Error</strong>: \(\frac{\sigma}{\sqrt{n}}\). Notice how larger samples (\(n\)) make the interval smaller/narrower!</li>
    </ul>

    <h2 id="example-error" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Error Bars on Predictions</h2>
    
      <h4>Problem: Finding the Range of Accuracy</h4>
      <p>Your model's mean accuracy is 85% with a Standard Error of 1% across 100 trials. What is the 95% Confidence Interval?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> \(\overline{X} = 0.85, SE = 0.01\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Margin:</strong> \(1.96 \times 0.01 = 0.0196\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Range:</strong> \(0.85 \pm 0.0196 \to [83\%, 87\%]\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Your model isn't just "85% accurate." It is <strong>Statistically Proven</strong> to be between 83% and 87%. You are now communicating like a true scientist.
        </div>
      </div>
    

    <h2 id="example-boot" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Bootstrapping for UI Latency</h2>
    
      <h4>Problem: Measuring 'Average' Speed in the Real World</h4>
      <p>Data: 5 Latency points [10ms, 12ms, 15ms, 200ms (Outlier!), 11ms]. How do we get a robust interval?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Test:</strong> <strong>Bootstrap Resampling</strong>. We create 1,000 "Virtual Datasets" by drawing samples with replacement.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Calculation:</strong> For every virtual dataset, we find the median. We then look for the 2.5% and 97.5% marks in our collection of 1,000 medians.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Even with small data or outliers, <strong>Bootstrapping</strong> gives us a reliable confidence interval without assuming the data is Normal. This is the "Gold Standard" for modern data science.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np
import scipy.stats as stats

data = [10.2, 11.5, 9.8, 10.5, 12.1]
confidence = 0.95

# 1. Using the T-Distribution (Best for small data)
mean = np.mean(data)
se = stats.sem(data)
interval = stats.t.interval(confidence, len(data)-1, loc=mean, scale=se)

print(f"95% Confidence Interval: [{interval[0]:.2f}, {interval[1]:.2f}]")

# 2. Bootstrapping (Non-parametric)
bootstrap_means = [np.mean(np.random.choice(data, len(data))) for _ in range(1000)]
ci_low = np.percentile(bootstrap_means, 2.5)
ci_high = np.percentile(bootstrap_means, 97.5)
print(f"Bootstrap 95% CI: [{ci_low:.2f}, {ci_high:.2f}]")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>A/B Testing</strong>: We only implement a change if the 95% confidence interval of the "Lift" doesn't overlap with Zero.</li>
      <li><strong>Feature Importance</strong>: Calculating confidence intervals for coefficients helps us ignore features that are inconsistent.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve completed the core mathematics sequence of <strong>Linear Algebra, Calculus, Probability, & Statistics</strong>. You are now ready to dive into the <strong>Foundations of Information Theory</strong>. Explore <strong><a href="#/mathematics/information-theory/basics">Information Theory Basics</a></strong>.
    </div>
  `},o={id:"statistics",title:"Statistics",description:"Statistics is the science of learning from data. In Machine Learning, it provides the tools for descriptive analysis, hypothesis testing, parameter estimation, and rigorous model evaluation.",keyConcepts:[{title:"MLE & MAP",description:"Finding the 'best' parameters for a distribution using Likelihood and Priors."},{title:"Bias-Variance Tradeoff",description:"The fundamental struggle between underfitting (Simplicity) and overfitting (Wildness)."},{title:"Hypothesis Testing",description:"Proving if an effect is real or just noise using T-Tests, Chi-Square, and ANOVA."},{title:"Confidence Intervals",description:"Measuring the precision of our estimates and the 'Margin of Error'."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Statistics: <span class="text-accent italic">The Science of Evidence</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          If Probability is the logic of future events, <strong>Statistics</strong> is the forensic analysis of past data. It provides the tools to validate whether our models are actually learning meaning or just memorizing noise.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This curriculum is broken into <strong>5 high-density topics</strong>, focused on the transition from "data enthusiast" to "data scientist."
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "Statistical thinking will one day be as necessary for efficient citizenship as the ability to read and write."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— H.G. Wells</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to analyze?</p>
        <a 
          href="/#/mathematics/statistics/mle" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with MLE
        </a>
      </div>

    </div>
  `,sections:[t,e,i,s,a]};export{o as STATISTICS_DATA};
