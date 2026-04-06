const t={id:"descriptive-statistics",title:"Descriptive Statistics",description:"Understand the core measures of central tendency and spread, and how Information Theory provides the mathematical foundation for measuring uncertainty.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Basics</div>
      <h1>Descriptive Statistics & Information Theory</h1>
      <p>Information Theory provides the mathematical foundation for quantifying how much "information" is contained in data. In Machine Learning, it is the bedrock for designing loss functions (like Cross-Entropy) and building Decision Trees (using Information Gain).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#what-is-it">What is Information Theory?</a>
      <a href="#derivations">Mathematical Derivations</a>
      <a href="#ml-examples">Examples in Machine Learning</a>
      <a href="#integration">Descriptive Statistics Integration</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <h2 id="what-is-it">What is Information Theory?</h2>
    <p>Information Theory is a branch of applied mathematics revolving around quantification, storage, and communication of information. It helps us measure uncertainty in a probability distribution and the "distance" between two distributions.</p>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Self-Information:</strong> Information contained in a single event.</li>
        <li><strong>Entropy:</strong> The average uncertainty in a random variable.</li>
        <li><strong>Kullback-Leibler (KL) Divergence:</strong> A measure of how one probability distribution differs from a second.</li>
        <li><strong>Cross-Entropy:</strong> A common loss function in classification.</li>
      </ul>
    </div>

    <h2 id="derivations">Mathematical Derivations</h2>
    
    <h3>1. Self-Information ($I(x)$)</h3>
    <p>The information in an event is inversely proportional to its probability.</p>
    <div class="math-block">$$I(x) = -\log_b(P(x))$$</div>
    <p>Usually, $b=2$ (bits) or $b=e$ (nats).</p>

    <h3>2. Shannon Entropy ($H(X)$)</h3>
    <p>The expected value (average) of the information of all possible outcomes of a random variable $X$.</p>
    <div class="math-block">$$H(X) = E[I(X)] = -\sum_{i=1}^{n} P(x_i) \log_b P(x_i)$$</div>

    <h3>3. Cross-Entropy ($H(P, Q)$)</h3>
    <p>Measures the average number of bits needed to identify an event from $P$ using code optimized for $Q$.</p>
    <div class="math-block">$$H(P, Q) = -\sum_{i} P(x_i) \log Q(x_i)$$</div>

    <h2 id="ml-examples">Examples in Machine Learning</h2>
    
    <h3>Decision Trees (Information Gain)</h3>
    <p>Used to decide which feature to split on. Information Gain is the reduction in entropy:</p>
    <div class="math-block">$$\text{Gain}(S, A) = \text{Entropy}(S) - \sum_{v \in \text{Values}(A)} \frac{|S_v|}{|S|} \text{Entropy}(S_v)$$</div>

    <h3>Logistic Regression / Neural Networks</h3>
    <p>Cross-entropy is used as the loss function. If $y$ is actual label (0/1) and $\hat{y}$ is predicted probability:</p>
    <div class="math-block">$$\text{Loss} = -(y \log(\hat{y}) + (1-y) \log(1-\hat{y}))$$</div>

    <h2 id="integration">Descriptive Statistics Integration</h2>
    <p>Before applying information-theoretic measures, we look at descriptive statistics to understand the spread and central tendency.</p>

    <div class="def-box">
      <table style="width:100%; border-collapse: collapse;">
        <thead>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <th style="padding: 10px; text-align: left;">Metric</th>
            <th style="padding: 10px; text-align: left;">Formula / Description</th>
            <th style="padding: 10px; text-align: left;">Use Case in ML</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px;"><strong>Mean</strong></td>
            <td style="padding: 10px;">$\mu = \frac{1}{n} \sum x_i$</td>
            <td style="padding: 10px;">Centering data for Gaussian distributions.</td>
          </tr>
          <tr>
            <td style="padding: 10px;"><strong>Std Dev</strong></td>
            <td style="padding: 10px;">$\sigma = \sqrt{\frac{\sum(x_i-\mu)^2}{n}}$</td>
            <td style="padding: 10px;">Measuring spread; high $\sigma$ often implies higher entropy.</td>
          </tr>
          <tr>
            <td style="padding: 10px;"><strong>IQR</strong></td>
            <td style="padding: 10px;">$Q3 - Q1$</td>
            <td style="padding: 10px;">Detecting outliers that might skew probability estimates.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 id="implementation">Python Implementation</h2>
    <python-code>
import numpy as np
from scipy.stats import entropy

def calculate_metrics(probabilities, base=2):
    # Manual Calculation
    ent = -np.sum([p * np.log2(p) for p in probabilities if p > 0])
    return ent

def cross_entropy(p, q):
    return -np.sum([p[i] * np.log2(q[i]) for i in range(len(p))])

# Example Data
true_labels = [1, 0, 0] # Distribution P
predicted_probs = [0.9, 0.05, 0.05] # Distribution Q

print(f"Entropy of True Labels: {calculate_metrics(true_labels):.4f} bits")
print(f"Cross-Entropy (Loss): {cross_entropy(true_labels, predicted_probs):.4f} bits")

# Descriptive Statistics Example
data = np.array([10, 12, 23, 23, 16, 23, 21, 16])
print(f"Mean: {np.mean(data)}, Std Dev: {np.std(data):.2f}")
    </python-code>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Complexity Analysis:</strong>
        <ul>
          <li><strong>Time Complexity:</strong> $O(N)$ where $N$ is classes/data points.</li>
          <li><strong>Space Complexity:</strong> $O(N)$ for storing distributions.</li>
        </ul>
      </div>
    </div>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Entropy</strong> measures chaos or uncertainty.</li>
      <li><strong>Minimize Cross-Entropy</strong> to make predicted distribution $Q$ close to target distribution $P$.</li>
      <li><strong>Descriptive Statistics</strong> provide the initial "shape" of data.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Having analyzed the shape of our data, explore the mathematical patterns behind it in <strong><a href="#/mathematics/statistics/probability-distributions">Probability Distributions</a></strong>.
    </div>
  `},i={id:"sampling-resampling",title:"Sampling & Resampling",description:"Learn methods to estimate uncertainty and ensure generalization through Bootstrapping, K-Fold Cross-Validation, and Stratified sampling.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔄 Statistics · Resampling</div>
      <h1>Sampling & Resampling</h1>
      <p>Sampling and Resampling methods allow us to estimate the uncertainty of our models and ensure they generalize well to unseen data, especially when we rarely have access to the entire population of data.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#bootstrapping">1. Bootstrapping</a>
      <a href="#cv">2. Cross-Validation (CV)</a>
      <a href="#example">Mathematical Example: Bootstrap Mean Estimation</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#conclusions">Key Takeaways</a>
    </div>

    <h2 id="bootstrapping">1. Bootstrapping</h2>
    <p>Bootstrapping is a statistical method involving drawing repeated samples from a dataset <strong>with replacement</strong>.</p>
    
    <div class="def-box">
      <div class="def-title">Core Concept</div>
      <p style="margin:0">If we have a dataset $D$ of size $n$, a bootstrap sample is created by picking $n$ elements from $D$, where each element can be picked more than once.</p>
      
      <p style="margin-top:15px; margin-bottom:0">Probability of an item *not* being picked in a sample of size $n$: $P(\text{not picked}) = \left(1 - \frac{1}{n}\right)^n$</p>
      <ul style="margin-top:10px; margin-bottom:0">
        <li><strong>In-bag samples:</strong> $\approx 63.2\%$ of unique data.</li>
        <li><strong>Out-of-bag (OOB) samples:</strong> $\approx 36.8\%$ of data (used for testing).</li>
      </ul>
    </div>

    <div class="callout tip">
      <div class="callout-icon">🌲</div>
      <div class="callout-body">
        <strong>ML Application: Random Forest:</strong> Random Forests use <strong>Bagging</strong> (Bootstrap Aggregating). Each tree is trained on a different bootstrap sample to reduce variance.
      </div>
    </div>

    <h2 id="cv">2. Cross-Validation (CV)</h2>
    <p>Cross-Validation is a resampling procedure used to evaluate machine learning models on a limited data sample.</p>
    
    <h3>K-Fold Cross-Validation</h3>
    <ol>
      <li>Split the data into $k$ equal-sized folds.</li>
      <li>Train model on $k-1$ folds and test it on the remaining 1 fold.</li>
      <li>Repeat $k$ times, using a different fold as the test set each time.</li>
      <li>The final performance is the average of all $k$ iterations.</li>
    </ol>

    <div class="math-block">
      $$\text{Performance}_{CV} = \frac{1}{k} \sum_{i=1}^{k} \text{Score}_i$$
    </div>

    <h3>Types of CV:</h3>
    <ul>
      <li><strong>LOOCV (Leave-One-Out):</strong> $k=n$. High computational cost but low bias.</li>
      <li><strong>Stratified K-Fold:</strong> Ensures each fold has the same percentage of samples of each target class as the complete set. (Crucial for imbalanced data).</li>
    </ul>

    <div class="example-box">
      <h4 id="example">Mathematical Example: Bootstrap Mean Estimation</h4>
      <p><strong>Problem:</strong> Given a dataset $X = [10, 20, 30]$, calculate the probability that the value '10' is excluded from a sample of size $n=3$.</p>
      
      <p><strong>Solution:</strong></p>
      <ol>
        <li>For $n=3$, the probability of not picking '10' in one draw is $2/3$.</li>
        <li>For 3 draws:
          <div class="math-block">$$P(\text{Exclusion}) = \left(\frac{2}{3}\right)^3 = \frac{8}{27} \approx 0.296 \text{ (29.6%)}$$</div>
        </li>
      </ol>
    </div>

    <h2 id="implementation">Python Implementation</h2>
    <python-code>
import numpy as np
from sklearn.model_selection import KFold, StratifiedKFold
from sklearn.utils import resample

# 1. Bootstrapping Manual Implementation
data = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
boot = resample(data, replace=True, n_samples=5, random_state=1)
print(f"Bootstrap Sample: {boot}")

# 2. K-Fold Cross Validation
X = np.array([[1, 2], [3, 4], [1, 2], [3, 4], [5, 6], [7, 8]])
y = np.array([0, 0, 1, 1, 1, 1])

kf = KFold(n_splits=3)
print("\nK-Fold Iterations:")
for train_index, test_index in kf.split(X):
    print(f"TRAIN: {train_index} TEST: {test_index}")

# 3. Stratified K-Fold
skf = StratifiedKFold(n_splits=2)
print("\nStratified K-Fold Iterations:")
for train_index, test_index in skf.split(X, y):
    print(f"TRAIN: {train_index} TEST: {test_index}")
    </python-code>

    <div class="callout info">
      <div class="callout-icon">📊</div>
      <div class="callout-body">
        <strong>Complexity Analysis:</strong>
        <ul>
          <li><strong>Bootstrap:</strong> $O(n)$ to sample.</li>
          <li><strong>K-Fold:</strong> $O(k \cdot \text{Cost of Training})$.</li>
          <li><strong>Space Complexity:</strong> $O(n)$.</li>
        </ul>
      </div>
    </div>

    <h2 id="conclusions">Key Takeaways</h2>
    <ul>
      <li><strong>Bootstrapping</strong> is best for estimating confidence intervals and building ensembles.</li>
      <li><strong>Cross-Validation</strong> is the gold standard for model selection.</li>
      <li>Use <strong>Stratified K-Fold</strong> for classification tasks to prevent unlucky folds.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Resampling ensures robustness. Move from samples to conclusions with <strong><a href="#/mathematics/statistics/inferential-statistics">Inferential Statistics</a></strong>.
    </div>
  `},e={id:"inferential-statistics",title:"Inferential Statistics",description:"Learn how to make predictions or 'inferences' about large populations based on representative samples using hypothesis testing and confidence intervals.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Inference</div>
      <h1>Inferential Statistics for Machine Learning</h1>
      <p>Inferential statistics allows us to make predictions or "inferences" about a large population based on a representative sample. In Machine Learning, this is crucial for <strong>Feature Selection</strong> (determining if a feature is significant) and <strong>Model Evaluation</strong> (determining if one model is statistically better than another).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#hypothesis-testing">1. Hypothesis Testing</a>
      <a href="#statistical-tests">2. Common Statistical Tests</a>
      <a href="#confidence-intervals">3. Confidence Intervals (CI)</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#why-it-matters">Why it matters in ML?</a>
    </div>

    <h2 id="hypothesis-testing">1. Hypothesis Testing</h2>
    <p>Hypothesis testing is a formal procedure for investigating our ideas about the world using statistics.</p>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Null Hypothesis ($H_0$):</strong> The status quo; assumes no effect or no difference (e.g., "Feature X does not affect the target").</li>
        <li><strong>Alternative Hypothesis ($H_1$):</strong> What you want to prove (e.g., "Feature X significantly affects the target").</li>
        <li><strong>P-value:</strong> The probability of obtaining results at least as extreme as the observed results, assuming $H_0$ is true. 
          <ul>
            <li><strong>$p < 0.05$:</strong> Reject $H_0$ (Statistically Significant).</li>
            <li><strong>$p \ge 0.05$:</strong> Fail to reject $H_0$.</li>
          </ul>
        </li>
      </ul>
    </div>

    <h2 id="statistical-tests">2. Common Statistical Tests</h2>
    
    <h3>A. T-Test</h3>
    <p>Used to compare the means of two groups.</p>
    <ul>
      <li><strong>One-sample T-test:</strong> Compares the mean of a sample to a known population mean.</li>
      <li><strong>Independent Two-sample T-test:</strong> Compares the means of two independent groups.</li>
    </ul>
    <div class="math-block">
      $$t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}$$
    </div>
    <p>Where $\bar{x}$ is the sample mean, $s^2$ is the variance, and $n$ is the sample size.</p>

    <h3>B. Chi-Square Test ($\chi^2$)</h3>
    <p>Used for categorical data to determine if there is a significant association between two variables (Test of Independence).</p>
    <div class="math-block">
      $$\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$$
    </div>
    <p>Where $O_i$ is the observed frequency and $E_i$ is the expected frequency.</p>

    <h2 id="confidence-intervals">3. Confidence Intervals (CI)</h2>
    <p>A Confidence Interval provides a range of values within which we are confident the true population parameter lies (usually 95%).</p>
    <div class="math-block">
      $$CI = \bar{x} \pm z \left( \frac{\sigma}{\sqrt{n}} \right)$$
    </div>
    <p>Where $z$ is the z-score (1.96 for 95% CI) and $\frac{\sigma}{\sqrt{n}}$ is the Standard Error.</p>

    <div class="callout info">
      <div class="callout-icon">📊</div>
      <div class="callout-body">
        <strong>Visualizing CI:</strong> Thinking of the Normal Distribution, a 95% Confidence Interval covers the central 95% of the distribution, leaving 2.5% in each tail.
      </div>
    </div>

    <h2 id="implementation">Python Implementation</h2>
    <p>We use the <code>scipy.stats</code> library to perform these tests efficiently.</p>
    <python-code>
import numpy as np
from scipy import stats

# 1. T-Test (Independent)
# Comparing the performance of two different ML models on 10-fold cross-validation
model_a_scores = [0.85, 0.88, 0.84, 0.86, 0.87, 0.85, 0.89, 0.84, 0.86, 0.87]
model_b_scores = [0.82, 0.83, 0.81, 0.84, 0.82, 0.83, 0.85, 0.81, 0.82, 0.84]

t_stat, p_val = stats.ttest_ind(model_a_scores, model_b_scores)
print(f"T-statistic: {t_stat:.4f}, P-value: {p_val:.4f}")

# 2. Chi-Square Test
# Association between 'Gender' and 'Buying Preference'
observed = np.array([[30, 10], [20, 25]]) # Contingency table
chi2, p, dof, expected = stats.chi2_contingency(observed)
print(f"Chi-Square P-value: {p:.4f}")

# 3. Confidence Interval
data = [10, 12, 12, 13, 15, 14, 13, 15]
mean = np.mean(data)
sem = stats.sem(data) # Standard error of the mean
ci = stats.t.interval(0.95, len(data)-1, loc=mean, scale=sem)
print(f"95% Confidence Interval for the mean: {ci}")
    </python-code>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Complexity Analysis:</strong>
        <ul>
          <li><strong>Time Complexity:</strong> $O(N)$ for calculating means and variances for the tests.</li>
          <li><strong>Space Complexity:</strong> $O(N)$ to store the sample data.</li>
        </ul>
      </div>
    </div>

    <h2 id="why-it-matters">Why it matters in ML?</h2>
    <ul>
      <li><strong>A/B Testing:</strong> To decide if a new model version actually improves user engagement.</li>
      <li><strong>Feature Selection:</strong> P-values help identify features that have a true mathematical relationship with the output, preventing overfitting on "noise."</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Now that we can infer population properties, find the 'best' parameters for your models in <strong><a href="#/mathematics/statistics/estimation">Estimation Theory</a></strong>.
    </div>
  `},a={id:"estimation",title:"Estimation Theory",description:"In Machine Learning, Estimation is the process of using data to find the most likely parameters for a model, through MLE, MAP, and the Bias-Variance tradeoff.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📐 Statistics · Estimation</div>
      <h1>Estimation Theory in Machine Learning</h1>
      <p>Whether you are training a Logistic Regression model or a Deep Neural Network, you are essentially performing parameter estimation — using data to find the most likely parameters ($\theta$) for a model.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#mle">1. Maximum Likelihood Estimation (MLE)</a>
      <a href="#map">2. Maximum A Posteriori (MAP)</a>
      <a href="#bias-variance">3. Bias-Variance Tradeoff</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#conclusions">Key Takeaways</a>
    </div>

    <h2 id="mle">1. Maximum Likelihood Estimation (MLE)</h2>
    <p>MLE is a method of estimating the parameters of a probability distribution by maximizing a <strong>likelihood function</strong>, so that under the assumed statistical model, the observed data is most probable.</p>
    
    <h3>Mathematical Derivation</h3>
    <p>Given a set of i.i.d. observations $X = \{x_1, x_2, ..., x_n\}$, the likelihood function $L(\theta)$ is:</p>
    <div class="math-block">
      $$L(\theta) = P(X|\theta) = \prod_{i=1}^{n} P(x_i|\theta)$$
    </div>
    <p>To simplify the calculation, we take the <strong>Log-Likelihood</strong>:</p>
    <div class="math-block">
      $$\ell(\theta) = \log L(\theta) = \sum_{i=1}^{n} \log P(x_i|\theta)$$
    </div>
    <p>The MLE estimate $\hat{\theta}_{MLE}$ is found by setting the derivative to zero: $\frac{\partial}{\partial \theta} \ell(\theta) = 0$.</p>

    <div class="example-box">
      <h4>Mathematical Example: Gaussian Mean</h4>
      <p><strong>Problem:</strong> Estimate the mean ($\mu$) of a Normal Distribution given data points $\{x_1, ..., x_n\}$ assuming variance $\sigma^2$ is known.</p>
      
      <p><strong>Solution:</strong></p>
      <ol>
        <li><strong>Log-Likelihood:</strong> $\ell(\mu) = \sum \log \left( \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x_i-\mu)^2}{2\sigma^2}} \right)$</li>
        <li><strong>Simplify:</strong> $\ell(\mu) = n \log \left(\frac{1}{\sqrt{2\pi\sigma^2}}\right) - \sum \frac{(x_i-\mu)^2}{2\sigma^2}$</li>
        <li><strong>Differentiate w.r.t $\mu$:</strong> $\frac{d}{d\mu} \ell(\mu) = \sum \frac{(x_i-\mu)}{\sigma^2} = 0$</li>
        <li><strong>Result:</strong> $\hat{\mu}_{MLE} = \frac{1}{n} \sum_{i=1}^{n} x_i$ (The Sample Mean).</li>
      </ol>
    </div>

    <h2 id="map">2. Maximum A Posteriori (MAP)</h2>
    <p>MAP is a Bayesian approach. Unlike MLE, which only looks at the data, MAP incorporates a <strong>Prior Distribution</strong> $P(\theta)$, which represents our previous belief about the parameters.</p>
    
    <div class="def-box">
      <div class="def-title">Bayesian MAP Formula</div>
      <p style="margin:0">Using Bayes' Theorem:</p>
      <div class="math-block" style="margin-top:10px; margin-bottom:10px; background:transparent; border:none; padding:0;">
        $$P(\theta|X) = \frac{P(X|\theta)P(\theta)}{P(X)}$$
      </div>
      <p style="margin:0">$\hat{\theta}_{MAP} = \text{argmax}_\theta [ \log P(X|\theta) + \log P(\theta) ]$</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>ML Insight:</strong> In Machine Learning, MAP is the mathematical foundation for <strong>Regularization</strong> (e.g., L2 Regularization is equivalent to a Gaussian Prior).
      </div>
    </div>

    <h2 id="bias-variance">3. Bias-Variance Tradeoff</h2>
    <p>This explains the "Generalization Error" of a model.</p>
    <ul>
      <li><strong>Bias:</strong> Error from erroneous assumptions in the learning algorithm (leads to <strong>Underfitting</strong>).</li>
      <li><strong>Variance:</strong> Error from sensitivity to small fluctuations in the training set (leads to <strong>Overfitting</strong>).</li>
    </ul>
    
    <div class="math-block">
      $$\text{Total Error} = \text{Bias}^2 + \text{Variance} + \text{Irreducible Error}$$
    </div>

    <h2 id="implementation">Python Implementation</h2>
    <python-code>
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures

# Generate noisy data
np.random.seed(42)
X = np.sort(np.random.rand(20, 1), axis=0)
y = np.sin(2 * np.pi * X) + np.random.randn(20, 1) * 0.1

# 1. High Bias Model (Linear Regression) - Underfitting
model_simple = LinearRegression().fit(X, y)

# 2. High Variance Model (15th Degree Polynomial) - Overfitting
poly = PolynomialFeatures(degree=15)
X_poly = poly.fit_transform(X)
model_complex = LinearRegression().fit(X_poly, y)

print(f"Linear Model Score (Bias): {model_simple.score(X, y):.4f}")
print(f"Complex Model Score (Variance): {model_complex.score(X_poly, y):.4f}")
    </python-code>

    <div class="callout info">
      <div class="callout-icon">📊</div>
      <div class="callout-body">
        <strong>Complexity Analysis:</strong>
        <ul>
          <li><strong>MLE/MAP:</strong> $O(N)$ for i.i.d data points.</li>
          <li><strong>Linear Regression:</strong> $O(p^2 n + p^3)$ where $p$ is features and $n$ is samples.</li>
          <li><strong>Space Complexity:</strong> $O(N)$ for storing datasets.</li>
        </ul>
      </div>
    </div>

    <h2 id="conclusions">Key Takeaways</h2>
    <ol style="margin-left:20px">
      <li><strong>MLE</strong> chooses $\theta$ that maximizes the probability of the data.</li>
      <li><strong>MAP</strong> chooses $\theta$ that maximizes the posterior probability (Data + Prior).</li>
      <li><strong>Bias-Variance Tradeoff</strong> is the "sweet spot" in model complexity.</li>
    </ol>

    <div class="linking-rule">
      <strong>Next Step:</strong> After estimating parameters, apply them to model relationships in <strong><a href="#/mathematics/statistics/regression-analysis">Regression Analysis</a></strong>.
    </div>
  `},o={id:"regression-analysis",title:"Regression Analysis",description:"Explore the relationship between independent and dependent variables through Linear Regression, Residuals, and R-Squared.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📈 Statistics · Regression</div>
      <h1>Regression Analysis</h1>
      <p>Regression Analysis is a supervised learning technique used to model the relationship between a <strong>Dependent Variable</strong> ($Y$) and one or more <strong>Independent Variables</strong> ($X$). It's the foundational algorithm for predictive modeling.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#linear">1. Linear Regression</a>
      <a href="#residuals">2. Residuals & Plotting</a>
      <a href="#r2">3. R-Squared ($R^2$)</a>
      <a href="#example">Mathematical Example & Solution</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#takeaways">Key Takeaways for ML</a>
    </div>

    <h2 id="linear">1. Linear Regression</h2>
    <p>Linear Regression assumes a linear relationship between the input variables and the single output variable.</p>
    
    <div class="def-box">
      <div class="def-title">Mathematical Representation</div>
      <p style="margin:0">The model represented by the following equation:</p>
      <div class="math-block" style="margin-top:10px; margin-bottom:10px; background:transparent; border:none; padding:0;">
        $$Y = \beta_0 + \beta_1 X + \epsilon$$
      </div>
      <ul style="margin-bottom:0">
        <li><strong>$Y$:</strong> Dependent Variable (Target)</li>
        <li><strong>$X$:</strong> Independent Variable (Predictor)</li>
        <li><strong>$\beta_0$:</strong> Intercept (Value of $Y$ when $X=0$)</li>
        <li><strong>$\beta_1$:</strong> Slope (Change in $Y$ for a unit change in $X$)</li>
        <li><strong>$\epsilon$:</strong> Random Error (Noise)</li>
      </ul>
    </div>

    <h3>Cost Function: Mean Squared Error (MSE)</h3>
    <p>To find the best $\beta_0$ and $\beta_1$, we minimize the sum of squared differences between predicted and actual values:</p>
    <div class="math-block">
      $$J(\beta_0, \beta_1) = \frac{1}{n} \sum_{i=1}^{n} (y_i - (\beta_0 + \beta_1 x_i))^2$$
    </div>

    <h2 id="residuals">2. Residuals & Plotting</h2>
    <p>A <strong>Residual</strong> ($e$) is the difference between the observed value ($y$) and the predicted value ($\hat{y}$) from the regression line.</p>
    <div class="math-block">
      $$e_i = y_i - \hat{y}_i$$
    </div>

    <div class="callout info">
      <div class="callout-icon">📊</div>
      <div class="callout-body">
        <strong>Properties of Residuals:</strong>
        <ul>
          <li>The sum of residuals in an OLS (Ordinary Least Squares) model is always zero: $\sum e_i = 0$.</li>
          <li><strong>Residual Plot:</strong> A scatter plot of residuals against predicted values. If a pattern (e.g., a curve) appears, the model is inappropriate (Heteroscedasticity).</li>
        </ul>
      </div>
    </div>

    <h2 id="r2">3. R-Squared ($R^2$) - Coefficient of Determination</h2>
    <p>$R^2$ is a statistical measure that represents the proportion of the variance for a dependent variable that's explained by an independent variable.</p>
    
    <div class="math-block">
      $$R^2 = 1 - \frac{SS_{res}}{SS_{tot}}$$
    </div>
    <p>Where:</p>
    <ul>
      <li><strong>$SS_{res}$ (Sum of Squares of Residuals):</strong> $\sum (y_i - \hat{y}_i)^2$ — The "unexplained" variance.</li>
      <li><strong>$SS_{tot}$ (Total Sum of Squares):</strong> $\sum (y_i - \bar{y})^2$ — The total variance in the data.</li>
    </ul>

    <div class="example-box">
      <h4 id="example">Mathematical Example with Solution</h4>
      <p><strong>Problem:</strong> Given $X = [1, 2, 3]$ and $Y = [2, 4, 5]$. Find the regression line $Y = \beta_0 + \beta_1 X$ and calculate the Residual for $X=2$.</p>
      
      <p><strong>Solution:</strong></p>
      <ol>
        <li><strong>Calculate Means:</strong> $\bar{X} = 2$, $\bar{Y} = 3.67$.</li>
        <li><strong>Calculate Slope ($\beta_1$):</strong> 
          $$\beta_1 = \frac{\sum (x_i - \bar{X})(y_i - \bar{Y})}{\sum (x_i - \bar{X})^2} = \frac{1.67 + 0 + 1.33}{1 + 1} = 1.5$$
        </li>
        <li><strong>Calculate Intercept ($\beta_0$):</strong> $\beta_0 = \bar{Y} - \beta_1 \bar{X} = 3.67 - (1.5 \times 2) = 0.67$.</li>
        <li><strong>Residual for $X=2$:</strong> $\hat{y} = 0.67 + 1.5(2) = 3.67 \implies e = 4 - 3.67 = 0.33$.</li>
      </ol>
    </div>

    <h2 id="implementation">Python Implementation</h2>
    <python-code>
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_squared_error

# Data Preparation
X = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)
y = np.array([2, 4, 5, 4, 5])

# Model Initialization and Training
model = LinearRegression()
model.fit(X, y)

# Predictions
y_pred = model.predict(X)

# Evaluation Metrics
r2 = r2_score(y, y_pred)
residuals = y - y_pred

print(f"Regression Equation: Y = {model.intercept_:.2f} + {model.coef_[0]:.2f}X")
print(f"R-Squared Score: {r2:.4f}")
print(f"Residuals: {residuals}")
    </python-code>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Complexity Analysis:</strong>
        <ul>
          <li><strong>Time Complexity:</strong> $O(p^2 n + p^3)$ for the Normal Equation.</li>
          <li><strong>Space Complexity:</strong> $O(np)$ to store the feature matrix.</li>
        </ul>
      </div>
    </div>

    <h2 id="takeaways">Key Takeaways for ML</h2>
    <ul>
      <li><strong>Linear Regression</strong> is a high-bias, low-variance model.</li>
      <li><strong>R-Squared</strong> can be misleading; <strong>Adjusted R-Squared</strong> is preferred for Multiple Regression.</li>
      <li>Checking <strong>Residuals</strong> is mandatory to ensure the "Linearity" assumption holds.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Regression gives us predictions, but how do we quantify "how wrong" we are? Rigourously assess your model performance with <strong><a href="#/mathematics/statistics/metrics">Evaluation Metrics</a></strong>.
    </div>
  `},s={id:"metrics",title:"Evaluation Metrics",description:"Learn to categorize and calculate Classification (Confusion Matrix, Precision, Recall, F1) and Regression metrics (MAE, MSE, Cross-Entropy).",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Metrics</div>
      <h1>Evaluation Metrics</h1>
      <p>Evaluation metrics are the compass for a Machine Learning engineer. They tell us not just "if" a model is working, but <strong>"how"</strong> it is failing. We categorize these into Classification Metrics (for discrete labels) and Regression Metrics (for continuous values).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#classification">1. Classification Metrics (Confusion Matrix)</a>
      <a href="#regression">2. Regression Metrics</a>
      <a href="#cross-entropy">3. Probabilistic Metric: Cross-Entropy</a>
      <a href="#example">Mathematical Example: Precision vs. Recall</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <h2 id="classification">1. Classification Metrics (The Confusion Matrix)</h2>
    <p>Most classification metrics are derived from the <strong>Confusion Matrix</strong>, which compares Predicted vs. Actual labels.</p>
    
    <div class="def-box">
      <div class="def-title">Core Formulas</div>
      <ul style="margin:0">
        <li><strong>Accuracy:</strong> $\frac{TP + TN}{TP + TN + FP + FN}$</li>
        <li><strong>Precision:</strong> Of all predicted positives, how many were actually positive? $\frac{TP}{TP + FP}$</li>
        <li><strong>Recall:</strong> Of all actual positives, how many did we catch? $\frac{TP}{TP + FN}$</li>
        <li><strong>F1-Score:</strong> The harmonic mean of Precision and Recall. $F1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$</li>
      </ul>
    </div>

    <h3>ROC-AUC</h3>
    <ul>
      <li><strong>ROC Curve:</strong> A plot of <strong>True Positive Rate</strong> (Recall) vs. <strong>False Positive Rate</strong> ($FP / (FP + TN)$).</li>
      <li><strong>AUC (Area Under Curve):</strong> Represents the probability that a model will rank a random positive instance higher than a random negative one.</li>
    </ul>

    <h2 id="regression">2. Regression Metrics</h2>
    
    <h3>A. Mean Absolute Error (MAE)</h3>
    <p>The average of the absolute differences between predictions and actual values. It's robust to outliers.</p>
    <div class="math-block">
      $$\text{MAE} = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|$$
    </div>

    <h3>B. Mean Squared Error (MSE)</h3>
    <p>The average of the squared differences. Penalizes large errors more heavily than MAE due to squaring.</p>
    <div class="math-block">
      $$\text{MSE} = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$$
    </div>

    <h2 id="cross-entropy">3. Probabilistic Metric: Cross-Entropy</h2>
    <p>In Deep Learning, we don't just want a label; we want the probability. <strong>Cross-Entropy</strong> measures the performance of a model whose output is a probability between 0 and 1.</p>
    <div class="math-block">
      $$\text{Loss} = -\sum_{i=1}^{M} y_i \log(\hat{y}_i)$$
    </div>
    <ul>
      <li>If predicted probability $\hat{y}_i$ for true class $y_i$ is close to 1, loss is low.</li>
      <li>If it is close to 0, loss approaches infinity.</li>
    </ul>

    <div class="example-box">
      <h4 id="example">Mathematical Example: Precision vs. Recall</h4>
      <p><strong>Problem:</strong> A cancer detection model predicts 100 patients. Actual Cancer: 10. Model predicts Cancer for 15. Correct predictions (TP): 8.</p>
      
      <p><strong>Solution:</strong></p>
      <ol>
        <li><strong>Identify counts:</strong> $TP=8$, $FP=7$ (15-8), $FN=2$ (10-8).</li>
        <li><strong>Precision:</strong> $8 / (8 + 7) = 0.53$ (53%).</li>
        <li><strong>Recall:</strong> $8 / (8 + 2) = 0.80$ (80%).</li>
      </ol>
      <p><strong>Conclusion:</strong> High recall (catches most cancer) but low precision (many false alarms).</p>
    </div>

    <h2 id="implementation">Python Implementation</h2>
    <python-code>
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, mean_squared_error, log_loss
import numpy as np

# Classification Example
y_true = [1, 0, 1, 1, 0, 1]
y_pred = [1, 0, 1, 0, 0, 1]

print(f"Accuracy: {accuracy_score(y_true, y_pred):.2f}")
print(f"F1-Score: {f1_score(y_true, y_pred):.2f}")

# Regression Example
y_actual = [3.0, -0.5, 2.0, 7.0]
y_predicted = [2.5, 0.0, 2.1, 7.8]
print(f"MSE: {mean_squared_error(y_actual, y_predicted):.2f}")

# Cross-Entropy (Log Loss) Example
y_true_prob = [1, 0]
y_pred_prob = [[0.9, 0.1], [0.2, 0.8]]
print(f"Cross-Entropy Loss: {log_loss(y_true_prob, y_pred_prob):.4f}")
    </python-code>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Complexity Analysis:</strong>
        <ul>
          <li><strong>Time Complexity:</strong> $O(N)$ where $N$ is samples.</li>
          <li><strong>Space Complexity:</strong> $O(N)$ to store true and predicted vectors.</li>
        </ul>
      </div>
    </div>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Accuracy</strong> is dangerous for imbalanced data.</li>
      <li><strong>MSE</strong> is preferred for optimization, but <strong>MAE</strong> is better for reporting if outliers are present.</li>
      <li><strong>Cross-Entropy</strong> is the standard for training Neural Networks.</li>
    </ul>

    <div class="linking-rule">
      <strong>Congratulations!</strong> You have completed the Statistics module. Next, enter the engine of optimization: <strong><a href="#/mathematics/calculus/basics">Calculus</a></strong>.
    </div>
  `},n={id:"probability-distributions",title:"Probability Distributions",description:"The mathematical blueprints of uncertainty. From binary successes in neural networks to traffic modeling and Bayesian priors, understand the distributions that power Modern ML.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Probability</div>
      <h1>Probability Distributions for ML</h1>
      <p>Probability distributions are the fundamental building blocks for modeling data uncertainty. In Machine Learning, they define our loss functions, initialize our weights, and provide the framework for Bayesian inference.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#bernoulli">1. Bernoulli Distribution</a>
      <a href="#binomial">2. Binomial Distribution</a>
      <a href="#poisson">3. Poisson Distribution</a>
      <a href="#categorical">4. Categorical Distribution</a>
      <a href="#multinomial">5. Multinomial Distribution</a>
      <a href="#gaussian">6. Gaussian (Normal) Distribution</a>
      <a href="#beta">7. Beta Distribution</a>
      <a href="#dirichlet">8. Dirichlet Distribution</a>
      <a href="#comparison">Final Summary & Comparison</a>
    </div>

    <h2 id="bernoulli" style="background: linear-gradient(to right, #0969da, #054ada); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">1. Bernoulli Distribution</h2>
    <p>The Bernoulli distribution is the simplest discrete distribution for a random variable with exactly two possible outcomes: Success ($x=1$) with probability $p$, and Failure ($x=0$) with probability $q=1-p$.</p>
    
    <div class="def-box">
      <strong>ML Context:</strong> The output of a **Sigmoid activation function** ($\sigma(z)$) is interpreted as the parameter $p$ of a Bernoulli distribution. This is the bedrock of binary classification.
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PMF:</strong> $P(X = x) = p^x (1-p)^{1-x}$ for $x \in \{0, 1\}$</li>
      <li><strong>Mean ($E[X]$):</strong> $\sum x \cdot P(x) = p$</li>
      <li><strong>Variance ($Var(X)$):</strong> $p(1-p)$</li>
    </ul>

    <div class="callout focus">
      <div class="callout-icon">🎯</div>
      <div class="callout-body">
        The <strong>Binary Cross-Entropy (Log-Loss)</strong> is derived directly from the Bernoulli PMF:
        $$\text{Loss} = -(y \log(p) + (1-y) \log(1-p))$$
      </div>
    </div>

    <h3>Example & Solution</h3>
    <p><strong>Problem:</strong> A Binary Classifier detects fraudulent transactions. For a specific transaction, the model outputs a probability of 0.02 that it is "Fraud" ($p=0.02$). Calculate the variance of this prediction.</p>
    <p><strong>Solution:</strong>
      Identify $p = 0.02, q = 0.98$.
      $$Var(X) = p(1-p) = 0.02 \times 0.98 = 0.0196$$
    </p>

    <python-code>
import numpy as np
from scipy.stats import bernoulli

# Define parameter (30% chance of success)
p = 0.3
mean, var = bernoulli.stats(p, moments='mv')
print(f"Mean: {mean}, Variance: {var}")

# Probability Mass Function at x=1
pmf_success = bernoulli.pmf(1, p)
print(f"P(Success): {pmf_success}")
    </python-code>

    <div style="height: 2rem;"></div>

    <h2 id="binomial" style="background: linear-gradient(to right, #1a7f37, #116329); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">2. Binomial Distribution</h2>
    <p>The Binomial distribution describes the number of successes in a fixed number of independent **Bernoulli trials**. It models the probability of getting $k$ successes in $n$ flips of a coin.</p>
    
    <div class="def-box">
      <strong>ML Context:</strong> Used to model <strong>Batch Accuracy</strong>. If a model has 90% accuracy ($p=0.9$), we can calculate the likelihood of getting exactly $k$ correct predictions in a batch of $n$ images.
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PMF:</strong> $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$</li>
      <li><strong>Mean:</strong> $np$</li>
      <li><strong>Variance:</strong> $np(1-p)$</li>
    </ul>

    <h3>Example & Solution</h3>
    <p><strong>Problem:</strong> A QA engineer finds that 10% of commits have bugs ($p=0.1$). If 5 commits are made ($n=5$), what is the probability that **exactly 2** have bugs?</p>
    <p><strong>Solution:</strong>
      $$P(X=2) = \binom{5}{2} (0.1)^2 (0.9)^3 = 10 \times 0.01 \times 0.729 = 0.0729$$ (7.29%).
    </p>

    <python-code>
from scipy.stats import binom

n, p = 5, 0.1
# Probability of exactly 2 successes
prob_2 = binom.pmf(2, n, p)
print(f"P(X=2): {prob_2:.4f}")
    </python-code>

    <div style="height: 2rem;"></div>

    <h2 id="poisson" style="background: linear-gradient(to right, #9a6700, #7d5300); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">3. Poisson Distribution</h2>
    <p>The Poisson distribution models the number of events occurring in a fixed interval of time or space, given a constant average rate ($\lambda$).</p>
    
    <div class="def-box">
      <strong>ML Context:</strong> Used in **Network Traffic modeling** (packets per second) or **Anomaly Detection** (number of failed login attempts).
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PMF:</strong> $P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}$</li>
      <li><strong>Mean:</strong> $\lambda$</li>
      <li><strong>Variance:</strong> $\lambda$</li>
    </ul>

    <h3>Example & Solution</h3>
    <p><strong>Problem:</strong> A server receives an average of 4 requests/sec ($\lambda=4$). What is the probability it receives **exactly 2** requests in the next second?</p>
    <p><strong>Solution:</strong>
      $$P(X=2) = \frac{4^2 e^{-4}}{2!} = \frac{16 \times 0.0183}{2} = 0.1464$$ (14.64%).
    </p>

    <python-code>
from scipy.stats import poisson

lam = 4
# Probability of exactly 2 events
prob_2 = poisson.pmf(2, lam)
print(f"P(X=2) for lambda=4: {prob_2:.4f}")
    </python-code>

    <div style="height: 2rem;"></div>

    <h2 id="categorical" style="background: linear-gradient(to right, #8250df, #6639ba); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">4. Categorical Distribution</h2>
    <p>Also known as the **Multinoulli Distribution**, it generalizes the Bernoulli distribution from two outcomes to $K$ possible categories for a single trial.</p>
    
    <div class="def-box">
      <strong>ML Context:</strong> The output of a **Softmax activation function** represents the parameters of a Categorical distribution ($\sum p_i = 1$).
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PMF:</strong> $P(\mathbf{x} | \mathbf{p}) = \prod_{i=1}^{K} p_i^{x_i}$ (using one-hot vector $\mathbf{x}$)</li>
      <li><strong>Mean ($E[x_i]$):</strong> $p_i$</li>
      <li><strong>Variance ($Var(x_i)$):</strong> $p_i(1-p_i)$</li>
    </ul>

    <h3>Example & Solution</h3>
    <p><strong>Problem:</strong> A Softmax layer outputs $[0.1, 0.7, 0.2]$ for labels [Cloud, Rain, Sun]. Calculate the variance for the "Cloud" category.</p>
    <p><strong>Solution:</strong>
      $p_1 = 0.1$.
      $$Var(x_1) = 0.1(1 - 0.1) = 0.09$$
    </p>

    <python-code>
import numpy as np

# Simulate a Softmax output (Categorical)
p = [0.1, 0.7, 0.2]
sample = np.random.multinomial(1, p)
print(f"One-hot Sample: {sample}")
    </python-code>

    <div style="height: 2rem;"></div>

    <h2 id="multinomial" style="background: linear-gradient(to right, #bf3989, #9d2d70); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">5. Multinomial Distribution</h2>
    <p>The Multinomial distribution is the multi-category extension of the Binomial distribution. It describes the outcome of $n$ independent trials where each trial follows a Categorical distribution.</p>
    
    <div class="def-box">
      <strong>ML Context:</strong> Integral to **NLP**. The "Bag of Words" model treats a document as a Multinomial distribution over a vocabulary of $K$ words.
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PMF:</strong> $P(x_1, \dots, x_k) = \frac{n!}{x_1! \dots x_k!} p_1^{x_1} \dots p_k^{x_k}$</li>
      <li><strong>Mean ($E[x_i]$):</strong> $n \cdot p_i$</li>
      <li><strong>Variance ($Var(x_i)$):</strong> $n \cdot p_i(1 - p_i)$</li>
    </ul>

    <h3>Example & Solution</h3>
    <p><strong>Problem:</strong> A sentiment model with $p = [0.4, 0.4, 0.2]$ (Pos, Neu, Neg). In 10 posts, what is the probability of exactly 5 Pos, 3 Neu, and 2 Neg?</p>
    <p><strong>Solution:</strong>
      $$P = \frac{10!}{5!3!2!} (0.4)^5 (0.4)^3 (0.2)^2 \approx 0.066$$ (6.6%).
    </p>

    <python-code>
from scipy.stats import multinomial

n, p = 10, [0.4, 0.4, 0.2]
target = [5, 3, 2]
prob = multinomial.pmf(target, n, p)
print(f"Outcome Probability: {prob:.4f}")
    </python-code>

    <div style="height: 2rem;"></div>

    <h2 id="gaussian" style="background: linear-gradient(to right, #d73a49, #b31d28); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">6. Gaussian (Normal) Distribution</h2>
    <p>The most important continuous distribution in ML. Defined by Mean ($\mu$) and Standard Deviation ($\sigma$), it forms the classic "Bell Curve."</p>
    
    <div class="def-box">
      <strong>ML Context:</strong> The **Central Limit Theorem** explains why Gaussian noise is everywhere. Linear Regression assumes errors (residuals) follow a Gaussian distribution.
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PDF:</strong> $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$</li>
      <li><strong>Empirical Rule:</strong> 68% within $1\sigma$, 95% within $2\sigma$, 99.7% within $3\sigma$.</li>
      <li><strong>Z-Score:</strong> $Z = \frac{X - \mu}{\sigma}$ (Standardization)</li>
    </ul>

    <h3>Example & Solution</h3>
    <p><strong>Problem:</strong> CPUs have speed $\mu=3.5, \sigma=0.2$ GHz. What is the probability of a CPU > 3.9 GHz?</p>
    <p><strong>Solution:</strong>
      $$Z = \frac{3.9 - 3.5}{0.2} = 2.0$$
      $P(Z > 2.0)$ is half of the remaining 4.6% outside the $2\sigma$ range = 2.3%.
    </p>

    <python-code>
import matplotlib.pyplot as plt
from scipy.stats import norm

mu, sigma = 0, 1
x = np.linspace(-4, 4, 100)
plt.plot(x, norm.pdf(x, mu, sigma))
plt.title("Standard Normal Distribution")
plt.show()
    </python-code>

    <div style="height: 2rem;"></div>

    <h2 id="beta" style="background: linear-gradient(to right, #0969da, #8250df); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">7. Beta Distribution</h2>
    <p>A continuous distribution on $[0,1]$ often used to model **probabilities themselves**. It is the conjugate prior for Bernoulli/Binomial outcomes.</p>
    
    <div class="def-box">
      <strong>ML Context:</strong> Used in **Bayesian A/B testing**. If $\alpha$ is prior successes and $\beta$ is prior failures, the distribution represents our belief about the success rate.
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PDF:</strong> $f(x; \alpha, \beta) = \frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha, \beta)}$</li>
      <li><strong>Beta Function:</strong> $B(\alpha, \beta) = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)}$</li>
      <li><strong>Mean:</strong> $\frac{\alpha}{\alpha + \beta}$</li>
    </ul>

    <h3>Example & Solution</h3>
    <p><strong>Problem:</strong> You observe 8 clicks ($\alpha$) and 2 non-clicks ($\beta$). What is the expected Click-Through Rate (CTR)?</p>
    <p><strong>Solution:</strong>
      $$E[X] = \frac{8}{8 + 2} = 0.8 \text{ (80\% CTR)}$$
    </p>

    <python-code>
from scipy.stats import beta

alpha, bt = 8, 2
mean = beta.mean(alpha, bt)
print(f"Expected Probability: {mean}")
    </python-code>

    <div style="height: 2rem;"></div>

    <h2 id="dirichlet" style="background: linear-gradient(to right, #cf222e, #9a6700); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">8. Dirichlet Distribution</h2>
    <p>The multivariate generalization of the Beta distribution. It is a "probability of probabilities" for $K$ outcomes, defined over a simplex.</p>
    
    <div class="def-box">
      <strong>ML Context:</strong> The backbone of **Latent Dirichlet Allocation (LDA)** for Topic Modeling. It is the conjugate prior for Categorical/Multinomial distributions.
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PDF:</strong> $f(\mathbf{x}; \mathbf{\alpha}) = \frac{1}{B(\mathbf{\alpha})} \prod_{i=1}^{K} x_i^{\alpha_i - 1}$</li>
      <li><strong>Mean ($E[x_i]$):</strong> $\frac{\alpha_i}{\sum \alpha_j}$</li>
    </ul>

    <python-code>
from scipy.stats import dirichlet

alpha = [10, 10, 10]
sample = dirichlet.rvs(alpha, size=1)
print(f"Simplex Sample (Prob Mixture): {sample}")
    </python-code>

    <h2 id="comparison">Final Summary & Comparison</h2>
    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr>
            <th>Distribution</th>
            <th>Type</th>
            <th>ML Use Case</th>
            <th>Key Feature</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Bernoulli</strong></td>
            <td>Discrete</td>
            <td>Binary Classification</td>
            <td>Sigmoid / Log-Loss basis</td>
          </tr>
          <tr>
            <td><strong>Binomial</strong></td>
            <td>Discrete</td>
            <td>Batch Accuracy</td>
            <td>Multiple Bernoulli trials</td>
          </tr>
          <tr>
            <td><strong>Categorical</strong></td>
            <td>Discrete</td>
            <td>Multiclass Classification</td>
            <td>Softmax / Cross-Entropy basis</td>
          </tr>
          <tr>
            <td><strong>Multinomial</strong></td>
            <td>Discrete</td>
            <td>NLP / Word Counts</td>
            <td>Multiple categories over N trials</td>
          </tr>
          <tr>
            <td><strong>Gaussian</strong></td>
            <td>Continuous</td>
            <td>Weight Init / Regression</td>
            <td>Central Limit Theorem basis</td>
          </tr>
          <tr>
            <td><strong>Beta</strong></td>
            <td>Continuous</td>
            <td>Bayesian Prob Modeling</td>
            <td>Conjugate Prior for Bernoulli</td>
          </tr>
          <tr>
            <td><strong>Dirichlet</strong></td>
            <td>Continuous</td>
            <td>Topic Modeling (LDA)</td>
            <td>Conjugate Prior for Multinomial</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> With these distributions as our tools, we can now master <strong><a href="#/mathematics/statistics/sampling-resampling">Sampling & Resampling</a></strong> to draw conclusions from representative data.
    </div>
  `},r={id:"statistics",title:"Statistics",description:"Statistics is the science of learning from data. In Machine Learning, it provides the tools for descriptive analysis, hypothesis testing, parameter estimation, and rigorous model evaluation.",keyConcepts:[{title:"Descriptive Statistics",description:"Measures of central tendency, spread, and information-theoretic uncertainty."},{title:"Probability Distributions",description:"The mathematical blueprints for Bernoulli, Binomial, Gaussian, and Bayesian priors."},{title:"Sampling & Resampling",description:"Bootstrapping, Cross-Validation, and population inference."},{title:"Inferential Statistics",description:"The mathematical theory of hypothesis testing, p-values, and confidence intervals."},{title:"Estimation Theory",description:"Maximum Likelihood (MLE) vs. Maximum A Posteriori (MAP) and the Bias-Variance tradeoff."},{title:"Regression Analysis",description:"The Ordinary Least Squares (OLS) framework, residuals, and R-squared."},{title:"Evaluation Metrics",description:"Probabilistic and information-theoretic measures of classification and regression performance."}],sections:[t,n,i,e,a,o,s]};export{r as STATISTICS_DATA};
