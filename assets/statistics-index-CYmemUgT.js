const t={id:"descriptive-statistics",title:"Descriptive Statistics",description:"Understand the core measures of central tendency and spread, and how Information Theory provides the mathematical foundation for measuring uncertainty.",color:"#B2EBF2",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Basics</div>
      <h1>Descriptive Statistics & Information Theory</h1>
      <p>Information Theory provides the mathematical foundation for quantifying how much "information" is contained in data. In Machine Learning, it is the bedrock for designing loss functions (like Cross-Entropy) and building Decision Trees (using Information Gain).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#entropy-example">3. Illustrative Example: Entropy (Binary Trials)</a>
      <a href="#mean-median-example">4. Illustrative Example: Mean vs. Median</a>
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
    
    <div class="step-box"><span class="step-num">1</span><div><strong>Self-Information \(I(x)\):</strong> Measures surprise. Low probability = high surprise.</div></div>
    <div class="math-block">$$I(x) = -\log_b(P(x))$$</div>

    <div class="step-box"><span class="step-num">2</span><div><strong>Shannon Entropy \(H(X)\):</strong> The expected value (average surprise) across all outcomes.</div></div>
    <div class="math-block">$$H(X) = -\sum_{i=1}^{n} P(x_i) \log_b P(x_i)$$</div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>Entropy</strong> is the measure of "Average Surprise." If an event is certain (e.g., the sun rising), it has zero entropy—it tells you nothing new. If an event is a coin flip, it has high entropy. In Decision Trees, we use this to pick the feature that "reduces chaos" the most.
      </div>
    </div>

    <div class="step-box"><span class="step-num">3</span><div><strong>Cross-Entropy \(H(P, Q)\):</strong> Average bits to identify events from \(P\) using code optimized for \(Q\).</div></div>
    <div class="math-block">$$H(P, Q) = -\sum_{i} P(x_i) \log Q(x_i)$$</div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>Cross-Entropy</strong> is the most important loss function in classification. It measures the "distance" between the truth ($P$) and your model's guess ($Q$). When your model is perfectly confident and correct, Cross-Entropy hits its minimum.
      </div>
    </div>

    <h2 id="entropy-example">3. Illustrative Example: Entropy (Binary Trials)</h2>
    <div class="example-box">
      <h4>Problem: Comparing Surprise in Coin Flips</h4>
      <p>Compare the Entropy of a fair coin \((p=0.5)\) vs. a highly biased coin \((p=0.9)\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Fair Coin:</strong> \(H(X) = -(0.5 \log_2 0.5 + 0.5 \log_2 0.5) = -(0.5 \times -1 \times 2) = 1.0\text{ bit}\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Biased Coin:</strong> \(H(X) = -(0.9 \log_2 0.9 + 0.1 \log_2 0.1) \approx -(0.139 + 0.332) = 0.47\text{ bits}\).</div></div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Intuition:</strong> A fair coin has the <strong>maximum possible entropy</strong> (1 bit) because it is perfectly unpredictable. The biased coin is more predictable, so it contains less information (lower entropy).</div></div>
    </div>

    <h2 id="mean-median-example">4. Illustrative Example: Mean vs. Median</h2>
    <div class="example-box">
      <h4>Problem: Salary Analysis in a Startup</h4>
      <p>A startup has 5 employees with salaries: [40k, 45k, 50k, 55k, 1M]. Which metric better represents the "typical" salary?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Calculate Mean:</strong> \(\mu = \frac{40+45+50+55+1000}{5} = \frac{1190}{5} = 238\text{k}\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Calculate Median:</strong> Middle value in sorted list = \(50\text{k}\).</div></div>

      <div class="callout warn"><div class="callout-icon">⚠️</div><div class="callout-body"><strong>Gotcha:</strong> The <strong>Mean</strong> is heavily pulled by the outlier (1M CEO salary), making the company look richer than it is. In ML, we often use the <strong>Median</strong> for robust statistics when data is skewed or contains anomalies.</div></div>
    </div>

    <h2 id="integration">Descriptive Statistics</h2>
    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr>
            <th>Metric</th>
            <th>Formula / Description</th>
            <th>Use Case in ML</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Mean (\(\mu\))</strong></td>
            <td>\(\mu = \frac{1}{n} \sum x_i\)</td>
            <td>Feature scaling & normalization.</td>
          </tr>
          <tr>
            <td><strong>Std Dev (\(\sigma\))</strong></td>
            <td>\(\sigma = \sqrt{\frac{\sum(x_i-\mu)^2}{n}}\)</td>
            <td>Measuring feature spread; high \(\sigma\) implies high entropy.</td>
          </tr>
          <tr>
            <td><strong>IQR</strong></td>
            <td>\(Q3 - Q1\)</td>
            <td>Robust outlier detection (ignoring tails).</td>
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

# Core Theory: Normalization
# (x - mean) / std_dev
z_scores = (data - np.mean(data)) / np.std(data)
print(f"Standardized Data (Z-scores): {z_scores[:3]}")
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
  `},i={id:"sampling-resampling",title:"Sampling & Resampling",description:"Learn methods to estimate uncertainty and ensure generalization through Bootstrapping, K-Fold Cross-Validation, and Stratified sampling.",color:"#FFE082",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔄 Statistics · Resampling</div>
      <h1>Sampling & Resampling</h1>
      <p>Sampling and Resampling methods allow us to estimate the uncertainty of our models and ensure they generalize well to unseen data, especially when we rarely have access to the entire population of data.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#bootstrapping">1. Bootstrapping</a>
      <a href="#bootstrap-example">1.1 Illustrative Example: Mean Variance</a>
      <a href="#cv">2. Cross-Validation (CV)</a>
      <a href="#stratified-example">2.1 Illustrative Example: Stratified Splits</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#conclusions">Key Takeaways</a>
    </div>

    <h2 id="bootstrapping">1. Bootstrapping</h2>
    <p>Bootstrapping is a statistical method involving drawing repeated samples from a dataset <strong>with replacement</strong>.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>Bootstrapping</strong> is the "Simulated Population" intuition. Since we can't go back and get more real data, we treat our sample as if it <em>is</em> the whole world, and draw many sub-samples from it. This allows us to calculate <strong>Confidence Intervals</strong> and build <strong>Ensemble Models</strong> (like Random Forests).
      </div>
    </div>
    
    <div class="premium-def-box">
      <div class="premium-def-title">The "OOB" Ratio</div>
      <p style="margin:0">For a sample of size \(n\), the probability of an item <strong>not</strong> being picked in \(n\) draws is \((1 - \frac{1}{n})^n\).</p>
      <div class="math-block" style="margin-top:10px">\(\lim_{n \to \infty} (1 - \frac{1}{n})^n = \frac{1}{e} \approx 0.368\)</div>
      <p style="margin-top:10px">This leaves ~36.8% of data as <strong>Out-Of-Bag (OOB)</strong>, acting as a "free" validation set.</p>
    </div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>OOB (Out-of-Bag)</strong> is the "Natural Testing Ground." Because you sample with replacement, about 1/3 of your data is never seen by any individual tree in a Random Forest. This acts as a <strong>Validation Set</strong> that you get "for free" without needing to set data aside manually.
      </div>
    </div>

    <h2 id="bootstrap-example">1.1 Illustrative Example: Bootstrap Variance</h2>
    <div class="example-box">
      <h4>Problem: Estimating Mean Uncertainty</h4>
      <p>A dataset has 3 points: \(X = [10, 20, 30]\). Find the probability that the value '10' is excluded from a single bootstrap sample of size 3.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Individual Draw:</strong> Probability of <strong>not</strong> picking 10 is \(2/3\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Independent Draws:</strong> Since we sample with replacement, the probability is \((2/3) \times (2/3) \times (2/3)\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Calculation:</strong> \(8/27 \approx 29.6\%\).</div></div>

      <div class="callout focus"><div class="callout-icon">🎯</div><div class="callout-body"><strong>Analysis:</strong> Even with a tiny dataset, ~30% of it is "hidden" in each bootstrap. In ML, this "hiding" of data across different models (like in Random Forests) is exactly what prevents overfitting.</div></div>
    </div>

    <div class="callout tip">
      <div class="callout-icon">🌲</div>
      <div class="callout-body">
        <strong>ML Application: Random Forest:</strong> Random Forests use <strong>Bagging</strong> (Bootstrap Aggregating). Each tree is trained on a different bootstrap sample to reduce variance.
      </div>
    </div>

    <h2 id="cv">2. Cross-Validation (CV)</h2>
    <p>Cross-Validation is a resampling procedure used to evaluate machine learning models on a limited data sample.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>Cross-Validation</strong> is the "Fair Rotation" intuition. Instead of trusting a single train/test split (which might be "lucky" or "unlucky"), you rotate through the entire dataset. Every single data point eventually gets a chance to be used for testing, giving you a much more honest measure of your model's <strong>Generalization</strong>.
      </div>
    </div>
    
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

    <h2 id="stratified-example">2.1 Illustrative Example: Stratified Splits</h2>
    <div class="example-box">
      <h4>Problem: Sampling from Imbalanced Fraud Data</h4>
      <p>A dataset has 1,000 samples: 990 "Normal" and 10 "Fraud". We want a 50/50 Train/Test split.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>The Risk:</strong> Random split might put 0 Fraud samples in your Test set. You'd have 100% accuracy but 0 value.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>The Fix:</strong> Stratified Sampling ensures each split has exactly 1% Fraud. Train gets 5 Fraud; Test gets 5 Fraud.</div></div>

      <div class="callout focus"><div class="callout-icon">⚖️</div><div class="callout-body"><strong>Judgment:</strong> Always use <strong>StratifiedKFold</strong> in scikit-learn for classification. It's the cheapest insurance policy against "Lucky Folds" that make your model look better than it is.</div></div>
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
      <a href="#hypothesis-example">1.1 Illustrative Example: The p-value Ritual</a>
      <a href="#error-example">1.2 Illustrative Example: Type I vs. Type II</a>
      <a href="#statistical-tests">2. Common Statistical Tests</a>
      <a href="#confidence-intervals">3. Confidence Intervals (CI)</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#why-it-matters">Why it matters in ML?</a>
    </div>

    <h2 id="hypothesis-testing">1. Hypothesis Testing</h2>
    <p>Hypothesis testing is a formal procedure for investigating our ideas about the world using statistics.</p>
    <div class="premium-def-box">
      <ul style="margin:0">
        <li><strong>Null Hypothesis (\(H_0\)):</strong> The "No Effect" assumption. (e.g., "This feature is noise").</li>
        <li><strong>Alternative Hypothesis (\(H_1\)):</strong> The "Effect Exists" claim. (e.g., "This feature predicts price").</li>
        <li><strong>P-value:</strong> Probability of seeing your result IF the null hypothesis were true.</li>
      </ul>
    </div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> Hypothesis Testing is a <strong>"Criminal Trial."</strong> The Null Hypothesis is <strong>Innocent</strong> (no effect) until the evidence is so overwhelming that "Innocence" becomes impossible. We don't <em>prove</em> the Alternative; we simply provide enough evidence to <em>reject</em> the Null.
      </div>
    </div>

    <h2 id="hypothesis-example">1.1 Illustrative Example: The p-value Ritual</h2>
    <div class="example-box">
      <h4>Problem: Is Feature X Significant?</h4>
      <p>In a housing model, the coefficient for 'Square Footage' has a \(p = 0.002\). Should we keep it?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Threshold (\(\alpha\)):</strong> Usually set to 0.05.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Comparison:</strong> \(0.002 < 0.05\).</div></div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Decision:</strong> Reject \(H_0\). The relationship between square footage and price is <strong>Statistically Significant</strong>. There is only a 0.2% chance this result is due to random noise.</div></div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> The <strong>P-value</strong> is a <strong>"Surprise Score."</strong> If $p$ is tiny, we are very surprised, meaning the Null Hypothesis is likely wrong. If $p$ is large, our result is boring and totally expected under the Null—so we change nothing.
      </div>
    </div>
    </div>

    <h2 id="error-example">1.2 Illustrative Example: Type I vs. Type II</h2>
    <div class="example-box">
      <h4>Problem: Diagnosing a Broken Server</h4>
      <p>A monitoring system alerts if a server is 'Down'. What are the errors?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Type I (False Positive):</strong> Alert says "Down" but server is "Healthy". You woke up for nothing (Alpha Error).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Type II (False Negative):</strong> Alert says "Healthy" but server is "Down". Users are complaining (Beta Error).</div></div>

      <div class="callout focus"><div class="callout-icon">🎯</div><div class="callout-body"><strong>ML Tradeoff:</strong> Decreasing the threshold to catch every "Down" server (Lower Type II) usually increases "False Alarms" (Higher Type I). This is the <strong>Precision-Recall Tradeoff</strong>.</div></div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>Type I Error</strong> is the <strong>"False Alarm"</strong> (crying wolf when there is no wolf). <strong>Type II Error</strong> is the <strong>"Sleeping Guard"</strong> (missing the wolf when it's actually there). In ML, you decide which error is more expensive based on your specific use case.
      </div>
    </div>
    </div>

    <h2 id="statistical-tests">2. Common Statistical Tests</h2>
    <div class="step-box"><span class="step-num">1</span><div><strong>The T-Test:</strong> Compares means of small samples (\(n < 30\)).</div></div>
    <div class="math-block">$$t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}$$</div>

    <div class="step-box"><span class="step-num">2</span><div><strong>The Chi-Square (\(\chi^2\)):</strong> Compares categories for independence (e.g., clicks vs. gender).</div></div>
    <div class="math-block">$$\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$$</div>

    <h2 id="confidence-intervals">3. Confidence Intervals (CI)</h2>
    <p>A Confidence Interval provides a range of values within which we are confident the true population parameter lies (usually 95%).</p>
    <div class="math-block">$$CI = \bar{x} \pm z \left( \frac{\sigma}{\sqrt{n}} \right)$$</div>
    <p>Where \(z\) is the critical value (1.96 for 95% CI) and \(\frac{\sigma}{\sqrt{n}}\) is the <strong>Standard Error</strong>.</p>

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
  `},s={id:"estimation",title:"Estimation Theory",description:"In Machine Learning, Estimation is the process of using data to find the most likely parameters for a model, through MLE, MAP, and the Bias-Variance tradeoff.",html:String.raw`
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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>MLE</strong> is the "Data-Only" perspective. It asks: "If I assume a specific model, which parameters make my actual data look the least surprising?" It's the engine behind <strong>Linear Regression</strong> and <strong>Neural Network</strong> training before you add any penalties.
      </div>
    </div>
    
    <h2 id="mle-derivation">1.1 Mathematical Derivation: Gaussian Mean</h2>
    <div class="example-box">
      <h4>Problem: Finding the "Most Likely" Mean</h4>
      <p>Estimate the mean (\(\mu\)) of a Normal Distribution given data \(X = \{x_1, ..., x_n\}\). Assume variance \(\sigma^2\) is known.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Log-Likelihood:</strong> Take the log of the Gaussian PDF for all points:</div></div>
      <div class="math-block">$$\ell(\mu) = \sum \log \left( \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x_i-\mu)^2}{2\sigma^2}} \right)$$</div>
      
      <div class="step-box"><span class="step-num">2</span><div><strong>Simplify:</strong> Drop constants and focus on the exponent.</div></div>
      <div class="math-block">$$\ell(\mu) = C - \sum \frac{(x_i-\mu)^2}{2\sigma^2}$$</div>
      
      <div class="step-box"><span class="step-num">3</span><div><strong>Optimize:</strong> Set \(\frac{d}{d\mu} \ell(\mu) = 0\).</div></div>
      <div class="math-block">$$\sum \frac{(x_i-\mu)}{\sigma^2} = 0 \implies \sum x_i = n\mu$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> \(\hat{\mu}_{MLE} = \frac{1}{n} \sum x_i\). The sample mean is the Maximum Likelihood Estimator for a Gaussian population.</div></div>
    </div>

    <h2 id="bias-example">1.2 Illustrative Example: Bessel's Correction</h2>
    <div class="example-box">
      <h4>Problem: Why divide by \(n-1\)?</h4>
      <p>The MLE for variance is \(\hat{\sigma}^2 = \frac{1}{n} \sum (x_i - \mu)^2\). However, we almost always use \(s^2 = \frac{1}{n-1} \sum (x_i - \bar{x})^2\). Why?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>The Bias:</strong> When we use the sample mean \(\bar{x}\) instead of the true population mean \(\mu\), we underestimate the total spread.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Correction:</strong> Dividing by \(n-1\) (degrees of freedom) makes the estimator <strong>Unbiased</strong>.</div></div>

      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Intuition:</strong> For very large \(n\), the difference between \(1/n\) and \(1/(n-1)\) vanishes. This is why "Big Data" often ignores Bessel's correction, but it's critical for small-sample statistics.</div></div>
    </div>

    <h2 id="map">2. Maximum A Posteriori (MAP)</h2>
    <p>MAP is a Bayesian approach. Unlike MLE, which only looks at the data, MAP incorporates a <strong>Prior Distribution</strong> $P(\theta)$, which represents our previous belief about the parameters.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>MAP</strong> is the <strong>"Common Sense"</strong> filter. It prevents your model from over-reacting to a few weird data points. In ML, this is <strong>Regularization</strong>. Using a <em>Gaussian Prior</em> is mathematically identical to <strong>L2 Regularization (Weight Decay)</strong>.
      </div>
    </div>
    
    <div class="premium-def-box">
      <div class="premium-def-title">Bayesian MAP Formula</div>
      <div class="math-block">$$P(\theta|X) = \frac{P(X|\theta)P(\theta)}{P(X)}$$</div>
      <p style="margin-top:10px">\(\hat{\theta}_{MAP} = \text{argmax}_\theta [ \log P(X|\theta) + \log P(\theta) ]\)</p>
    </div>

    <h2 id="ctr-example">2.1 Illustrative Example: Confidence Intervals for CTR</h2>
    <div class="example-box">
      <h4>Problem: Evaluating Ad Performance</h4>
      <p>Your ad has 1000 impressions and 20 clicks. What is the 95% Confidence Interval for the Click-Through Rate (CTR)?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Point Estimate:</strong> \(\hat{p} = 20 / 1000 = 0.02\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Standard Error:</strong> \(SE = \sqrt{\frac{p(1-p)}{n}} = \sqrt{\frac{0.02 \times 0.98}{1000}} \approx 0.0044\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Interval:</strong> \(0.02 \pm (1.96 \times 0.0044) = [0.011, 0.029]\).</div></div>

      <div class="callout focus"><div class="callout-icon">🎯</div><div class="callout-body"><strong>Interpretation:</strong> We are 95% confident that the true population CTR is between 1.1% and 2.9%. In A/B testing, these clusters help determine if a new design is statistically superior.</div></div>
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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> The <strong>Tradeoff</strong> is like tuning a radio. <strong>High Bias</strong> is a "lazy" model that ignores the data patterns (Underfitting). <strong>High Variance</strong> is a "hyper-active" model that hallucinates patterns in random noise (Overfitting). Your job is to find the <strong>Sweet Spot</strong>.
      </div>
    </div>
    
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
  `},a={id:"regression-analysis",title:"Regression Analysis",description:"Explore the relationship between independent and dependent variables through Linear Regression, Residuals, and R-Squared.",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📈 Statistics · Regression</div>
      <h1>Regression Analysis</h1>
      <p>Regression Analysis is a supervised learning technique used to model the relationship between a <strong>Dependent Variable</strong> ($Y$) and one or more <strong>Independent Variables</strong> ($X$). It's the foundational algorithm for predictive modeling.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#linear">1. Linear Regression</a>
      <a href="#ols-example">1.1 Illustrative Example: Manual OLS</a>
      <a href="#residuals">2. Residuals & Plotting</a>
      <a href="#r2">3. R-Squared (\(R^2\))</a>
      <a href="#r2-example">3.1 Illustrative Example: Explaining Variance</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#takeaways">Key Takeaways for ML</a>
    </div>

    <h2 id="linear">1. Linear Regression</h2>
    <p>Linear Regression assumes a linear relationship between the input variables and the single output variable.</p>
    
    <div class="premium-def-box">
      <div class="premium-def-title">Model Equation</div>
      <div class="math-block">$$Y = \beta_0 + \beta_1 X + \epsilon$$</div>
      <p style="margin-top:10px">Where \(\beta_0\) is the <strong>Intercept</strong> and \(\beta_1\) is the <strong>Slope</strong>.</p>
    </div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>Linear Regression</strong> is the "Line of Best Fit" intuition. It assumes that nature follows a straight path. While simple, it is incredibly powerful because it is <strong>Interpretable</strong>—you can tell exactly how much $Y$ changes for every unit of $X$.
      </div>
    </div>

    <h2 id="ols-example">1.1 Illustrative Example: Manual OLS</h2>
    <div class="example-box">
      <h4>Problem: Fitting a Line by Hand</h4>
      <p>Given \(X = [1, 2, 3]\) and \(Y = [2, 4, 5]\). Find the regression line \(Y = \beta_0 + \beta_1 X\).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Means:</strong> \(\bar{X} = 2, \bar{Y} = 3.67\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Numerator:</strong> \(\sum (x_i - \bar{X})(y_i - \bar{Y}) = (-1)(-1.67) + (0)(0.33) + (1)(1.33) = 3.0\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Denominator:</strong> \(\sum (x_i - \bar{X})^2 = (-1)^2 + 0^2 + 1^2 = 2\).</div></div>
      <div class="step-box"><span class="step-num">4</span><div><strong>Slope (\(\beta_1\)):</strong> \(3.0 / 2 = 1.5\).</div></div>
      <div class="step-box"><span class="step-num">5</span><div><strong>Intercept (\(\beta_0\)):</strong> \(3.67 - (1.5 \times 2) = 0.67\).</div></div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Equation:</strong> \(\hat{Y} = 0.67 + 1.5X\). This line minimizes the <strong>Sum of Squared Errors</strong> across all three points.</div></div>
    </div>

    <h3>Cost Function: Mean Squared Error (MSE)</h3>
    <p>To find the best $\beta_0$ and $\beta_1$, we minimize the sum of squared differences between predicted and actual values:</p>
    <div class="math-block">
      $$J(\beta_0, \beta_1) = \frac{1}{n} \sum_{i=1}^{n} (y_i - (\beta_0 + \beta_1 x_i))^2$$
    </div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>OLS (Ordinary Least Squares)</strong> is the "Surface Area of Error" intuition. By squaring the differences, we ensure that being "a little off" is okay, but being "very off" is a disaster. It forces the line to stay as close as possible to the majority of your data points.
      </div>
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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>R-Squared</strong> is the "Explained Variance" intuition. If $R^2 = 0.8$, it means your model is 80% better than just guessing the average value for every prediction. It's a measure of how much "chaos" you've managed to turn into "predictable pattern."
      </div>
    </div>
    <p>Where:</p>
    <ul>
      <li><strong>$SS_{res}$ (Sum of Squares of Residuals):</strong> $\sum (y_i - \hat{y}_i)^2$ — The "unexplained" variance.</li>
      <li><strong>$SS_{tot}$ (Total Sum of Squares):</strong> $\sum (y_i - \bar{y})^2$ — The total variance in the data.</li>
    </ul>

    <h2 id="r2-example">3.1 Illustrative Example: Explaining Variance</h2>
    <div class="example-box">
      <h4>Problem: Interpreting \(R^2 = 0.85\)</h4>
      <p>A marketing model predicts sales based on ad spend with an \(R^2\) of 0.85. What does this mean?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>The Meaning:</strong> 85% of the variation in sales can be explained by the variation in ad spend.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>The Leftovers:</strong> The remaining 15% is due to factors not in the model (noise, seasonality, competitor moves).</div></div>

      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Reality Check:</strong> High \(R^2\) doesn't always mean a good model (it could be overfitting). Always check <strong>Residual Plots</strong> for patterns that indicate your linear assumption is failing.</div></div>
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
  `},o={id:"metrics",title:"Evaluation Metrics",description:"Learn to categorize and calculate Classification (Confusion Matrix, Precision, Recall, F1) and Regression metrics (MAE, MSE, Cross-Entropy).",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Metrics</div>
      <h1>Evaluation Metrics</h1>
      <p>Evaluation metrics are the compass for a Machine Learning engineer. They tell us not just "if" a model is working, but <strong>"how"</strong> it is failing. We categorize these into Classification Metrics (for discrete labels) and Regression Metrics (for continuous values).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#classification">1. Classification Metrics</a>
      <a href="#precision-recall-example">2. Illustrative Example: Precision vs. Recall</a>
      <a href="#regression">3. Regression Metrics</a>
      <a href="#mae-mse-example">4. Illustrative Example: MAE vs. MSE</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <h2 id="classification">1. Classification Metrics (The Confusion Matrix)</h2>
    <p>Most classification metrics are derived from the <strong>Confusion Matrix</strong>, which compares Predicted vs. Actual labels.</p>
    
    <div class="step-box"><span class="step-num">1</span><div><strong>Accuracy:</strong> Overall correctness. \((TP + TN) / \text{Total}\). High bias on imbalanced data.</div></div>
    <div class="step-box"><span class="step-num">2</span><div><strong>Precision:</strong> "Is it really positive?" \(\frac{TP}{TP + FP}\). Target when False Alarms are costly.</div></div>
    <div class="step-box"><span class="step-num">3</span><div><strong>Recall (Sensitivity):</strong> "Did we find all positives?" \(\frac{TP}{TP + FN}\). Critical for safety/health.</div></div>
    <div class="step-box"><span class="step-num">4</span><div><strong>F1-Score:</strong> Harmonic mean. \(2 \cdot \frac{\text{Pre} \cdot \text{Rec}}{\text{Pre} + \text{Rec}}\). Balance point.</div></div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>Precision</strong> is the "Quality" metric (low false alarms). <strong>Recall</strong> is the "Quantity" metric (finding everyone). In a cancer screening, <strong>Recall</strong> is life-or-death. In a spam filter, <strong>Precision</strong> is king because you don't want to miss a single boss email.
      </div>
    </div>

    <h2 id="precision-recall-example">2. Illustrative Example: Precision vs. Recall</h2>
    <div class="example-box">
      <h4>Problem: Evaluating a Cancer Model</h4>
      <p>A dataset has 100 patients. 10 have cancer (\(P=10\)). A model predicts "Cancer" for 15 people. Out of those 15, only 8 actually have cancer (\(TP=8\)).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>False Positives (FP):</strong> Predicted 15 - Correct 8 = 7.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>False Negatives (FN):</strong> Actual 10 - Found 8 = 2.</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Precision:</strong> \(8 / (8 + 7) \approx 0.53\) (53%).</div></div>
      <div class="step-box"><span class="step-num">4</span><div><strong>Recall:</strong> \(8 / (8 + 2) = 0.80\) (80%).</div></div>

      <div class="callout warn"><div class="callout-icon">⚠️</div><div class="callout-body"><strong>Analysis:</strong> The model is "Safe" (80% recall catches most cancer) but "Noisy" (53% precision means many healthy people get a scare). In ML, we tune the <strong>Decision Threshold</strong> to slide along this tradeoff.</div></div>
    </div>

    <h3>ROC-AUC</h3>
    <ul>
      <li><strong>ROC Curve:</strong> A plot of <strong>True Positive Rate</strong> (Recall) vs. <strong>False Positive Rate</strong> ($FP / (FP + TN)$).</li>
      <li><strong>AUC (Area Under Curve):</strong> Represents the probability that a model will rank a random positive instance higher than a random negative one.</li>
    </ul>

    <h2 id="regression">2. Regression Metrics</h2>
    
    <div class="step-box"><span class="step-num">1</span><div><strong>MAE (Robust):</strong> Average absolute difference. \(\frac{1}{n} \sum |y - \hat{y}|\).</div></div>
    <div class="step-box"><span class="step-num">2</span><div><strong>MSE (Square Penalty):</strong> Squaring large errors. \(\frac{1}{n} \sum (y - \hat{y})^2\).</div></div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>MSE</strong> is a <strong>Punishment</strong>. Because it squares the error, a single 10-unit mistake costs you 100 points, while 10 one-unit mistakes only cost you 10. If your model <em>must</em> avoid large errors at all costs (like in autonomous driving), MSE is your best friend.
      </div>
    </div>

    <h2 id="mae-mse-example">4. Illustrative Example: MAE vs. MSE</h2>
    <div class="example-box">
      <h4>Problem: Impact of Outliers</h4>
      <p>A model predicts house prices. For 3 houses, errors are: [\$1k, \$2k, \$10k]. Compare metrics.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>MAE:</strong> \((1 + 2 + 10) / 3 = 4.33\text{k}\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>MSE:</strong> \((1^2 + 2^2 + 10^2) / 3 = (1 + 4 + 100) / 3 = 35\text{k}\).</div></div>

      <div class="callout focus"><div class="callout-icon">🎯</div><div class="callout-body"><strong>Insight:</strong> The outlier (10k error) dominates the <strong>MSE</strong> due to the squaring effect (\(100/35\) vs \(10/4.33\)). Use MSE when large errors are unacceptable (e.g., self-driving safety); use MAE when you want to ignore noise.</div></div>
    </div>

    <h2 id="cross-entropy">5. Probabilistic Metric: Cross-Entropy</h2>
    <p>In Deep Learning, we don't just want a label; we want <strong>Confidence</strong>.</p>
    <div class="math-block">$$\text{Loss} = -\sum_{i=1}^{M} y_i \log(\hat{y}_i)$$</div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>Cross-Entropy</strong> doesn't just care <em>if</em> you were right; it cares <em>how sure</em> you were. If your model predicts a 99% probability for a wrong class, this metric will penalize it brutally. It forces the model to be honest about its own uncertainty.
      </div>
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
      <a href="#t-distribution">4. Student's t-Distribution (New)</a>
      <a href="#categorical">5. Categorical Distribution</a>
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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> Bernoulli is the <strong>"Yes/No Bit"</strong> of the universe. It is the simplest possible way to describe uncertainty. In AI, every time your model predicts "Cat" vs "Dog," it is essentially guessing the winning side of a Bernoulli coin flip.
      </div>
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

    <h2 id="bernoulli-example">1. Illustrative Example: Bernoulli Variance</h2>
    <div class="example-box">
      <h4>Problem: Predicting Rare Fraud</h4>
      <p>A binary classifier detects fraudulent transactions. For a specific transaction, the model outputs \(p = 0.02\) (Fraud) and \(q = 0.98\) (Safe). Calculate the variance of this prediction.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identify Parameter:</strong> \(p = 0.02\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Apply Formula:</strong> \(Var(X) = p(1-p)\).</div></div>

      <div class="math-block">$$Var(X) = 0.02 \times 0.98 = 0.0196$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Insight:</strong> Variance is highest at \(p=0.5\) and lowest at the extremes (0 or 1). This means the model is "surest" when probabilities are near 0 or 1.</div></div>
    </div>

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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> If Bernoulli is a single coin flip, Binomial is the <strong>"Stack of Successes."</strong> It tells you the probability of hitting a specific number of goals in $n$ tries. It assumes every trial is independent—an assumption that is the shortcut for most batch processing in ML.
      </div>
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PMF:</strong> $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$</li>
      <li><strong>Mean:</strong> $np$</li>
      <li><strong>Variance:</strong> $np(1-p)$</li>
    </ul>

    <h2 id="binomial-example">2. Illustrative Example: Binomial Batch Logic</h2>
    <div class="example-box">
      <h4>Problem: QA Bug Detection</h4>
      <p>A QA engineer finds that 10% of commits have bugs \((p=0.1)\). If 5 commits are made \((n=5)\), what is the probability that <strong>exactly 2</strong> have bugs?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identify Values:</strong> \(n=5, k=2, p=0.1\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Calculate Combinations:</strong> \(\binom{5}{2} = 10\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Compute PMF:</strong> \(10 \times (0.1)^2 \times (0.9)^3\).</div></div>

      <div class="math-block">$$P(X=2) = 10 \times 0.01 \times 0.729 = 0.0729$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> There is a <strong>7.29%</strong> chance of hitting exactly 2 bugs. This is much lower than the 90% chance of hitting 0 or 1 bug.</div></div>
    </div>

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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> Poisson is the <strong>"Raindrops on a Roof"</strong> intuition. It models counts over continuous time. If you know the average rate ($\lambda$), Poisson tells you how likely it is to see a sudden burst or a strange silence.
      </div>
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PMF:</strong> $P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}$</li>
      <li><strong>Mean:</strong> $\lambda$</li>
      <li><strong>Variance:</strong> $\lambda$</li>
    </ul>

    <h2 id="poisson-example">3. Illustrative Example: Poisson Rate Analysis</h2>
    <div class="example-box">
      <h4>Problem: Server Request Spikes</h4>
      <p>A server receives an average of 4 requests/sec \((\lambda=4)\). What is the probability it receives <strong>exactly 2</strong> requests in the next second?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Identity:</strong> \(\lambda=4, k=2\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Formula:</strong> \(P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Calculate:</strong> \(\frac{16 \times 0.0183}{2}\).</div></div>

      <div class="math-block">$$P(X=2) \approx 0.1464$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Interpretation:</strong> There is a <strong>14.6%</strong> chance of seeing exactly 2 requests. In SRE/MLOps, we use this to set alerting thresholds for "quiet" periods.</div></div>
    </div>

    <h2 id="t-distribution" style="background: linear-gradient(to right, #cf222e, #9a6700); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">4. Student's t-Distribution</h2>
    <p>The Student's t-Distribution is similar to the Normal distribution but has <strong>heavier tails</strong>. It is essential when estimating parameters from small sample sizes where the population variance is unknown.</p>
    <div class="math-block">$$f(t) = \frac{\Gamma(\frac{\nu+1}{2})}{\sqrt{\nu\pi}\Gamma(\frac{\nu}{2})} \left(1 + \frac{t^2}{\nu}\right)^{-\frac{\nu+1}{2}}$$</div>
    
    <div class="example-box">
      <h4>Problem: Uncertainty in Small Samples</h4>
      <p>Why do we use the t-distribution for \(n=10\) instead of a Normal curve?</p>
      <div class="step-box"><span class="step-num">1</span><div><strong>Degrees of Freedom (df):</strong> \(\nu = n - 1 = 9\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Tail Check:</strong> At \(\nu=9\), the tails are much wider than a standard normal.</div></div>
      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>ML Insight:</strong> The t-distribution is more <strong>conservative</strong>. It provides wider confidence intervals, acknowledging that our estimate of the variance might be slightly off due to the small sample size.</div></div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> The Student's t is a <strong>"Cautious Gaussian."</strong> When you have very little data (less than 30 points), you can't be 100% sure about the "spread" ($\sigma$). The t-distribution gives you "heavier tails"—it essentially adds a safety margin for your uncertainty.
      </div>
    </div>
    </div>

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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> Categorical is the <strong>"Multi-sided Die"</strong> of probability. It extends the coin flip to any number of categories. In Deep Learning, your <strong>Final Layer</strong> is almost always a Categorical distribution over your classes.
      </div>
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PMF:</strong> $P(\mathbf{x} | \mathbf{p}) = \prod_{i=1}^{K} p_i^{x_i}$ (using one-hot vector $\mathbf{x}$)</li>
      <li><strong>Mean ($E[x_i]$):</strong> $p_i$</li>
      <li><strong>Variance ($Var(x_i)$):</strong> $p_i(1-p_i)$</li>
    </ul>

    <h2 id="categorical-example">5. Illustrative Example: Softmax Variance</h2>
    <div class="example-box">
      <h4>Problem: Evaluating Label Confidence</h4>
      <p>A Softmax layer outputs \([0.1, 0.7, 0.2]\) for the labels [Cloud, Rain, Sun]. Calculate the variance for the "Cloud" category (\(p_1 = 0.1\)).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Softmax Output:</strong> \(p_1 = 0.1\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Variance Formula:</strong> \(Var(x_i) = p_i(1 - p_i)\).</div></div>

      <div class="math-block">$$Var(x_1) = 0.1 \times (1 - 0.1) = 0.09$$</div>

      <div class="callout focus"><div class="callout-icon">🎯</div><div class="callout-body"><strong>Interpretation:</strong> The low variance (0.09) compared to the higher variance of the "Rain" category (\(0.7 \times 0.3 = 0.21\)) indicates the model is more "certain" about the non-existence of clouds than the presence of rain.</div></div>
    </div>

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

    <h2 id="multinomial-example">6. Illustrative Example: document Mixture</h2>
    <div class="example-box">
      <h4>Problem: Sentiment Model Outcome</h4>
      <p>A sentiment model predicts \(p = [0.4, 0.4, 0.2]\) (Positive, Neutral, Negative). In 10 posts, what is the probability of exactly 5 Positive, 3 Neutral, and 2 Negative posts?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Parameters:</strong> \(n=10, \mathbf{x} = [5, 3, 2], \mathbf{p} = [0.4, 0.4, 0.2]\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Factorials:</strong> \(10! / (5! \times 3! \times 2!) = 3628800 / (120 \times 6 \times 2) = 2520\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Compute:</strong> \(2520 \times 0.4^5 \times 0.4^3 \times 0.2^2\).</div></div>

      <div class="math-block">$$P \approx 0.0665$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Significance:</strong> Even though this is the "expected" distribution, the probability of hitting it <strong>exactly</strong> is only about 6.6%. This highlights the high dimensionality and "spread" of Multinomial outcomes.</div></div>
    </div>

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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> Gaussian is the <strong>"Universal Average."</strong> Due to the CLT, if you sum up enough random effects, life always forms a bell curve. This is why we assume modern "Normal" noise in almost all ML regression models.
      </div>
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PDF:</strong> $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$</li>
      <li><strong>Empirical Rule:</strong> 68% within $1\sigma$, 95% within $2\sigma$, 99.7% within $3\sigma$.</li>
      <li><strong>Z-Score:</strong> $Z = \frac{X - \mu}{\sigma}$ (Standardization)</li>
    </ul>

    <h2 id="gaussian-example">7. Illustrative Example: Standardizing ML Features</h2>
    <div class="example-box">
      <h4>Problem: Comparing CPUs via Z-scores</h4>
      <p>CPUs have clock speeds with \(\mu=3.5, \sigma=0.2\) GHz. What is the probability of a CPU having a speed \(> 3.9\) GHz?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Standardize (Z-score):</strong> \(Z = \frac{X - \mu}{\sigma} = \frac{3.9 - 3.5}{0.2} = 2.0\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Empirical Rule:</strong> 95% of data is within \(\pm 2\sigma\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Tail Calculation:</strong> 5% remains in the tails. Since we want "greater than", we take the upper tail: \(5\% / 2 = 2.5\%\).</div></div>

      <div class="math-block">$$P(X > 3.9) \approx 0.0228$$</div>

      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Why?</strong> This standardization is the exact math behind <strong>StandardScaler</strong> in Scikit-Learn. It ensures features have a mean of 0 and variance of 1, helping gradient descent converge faster.</div></div>
    </div>

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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> Beta is the <strong>"Probability of a Probability."</strong> Unlike other distributions that model data, Beta models your <strong>Confidence</strong> in a Bernoulli $p$. If $\alpha$ is high, you're sure it's a success; if $\beta$ is high, you're sure it's a failure.
      </div>
    </div>

    <h3>Mathematical Derivation</h3>
    <ul>
      <li><strong>PDF:</strong> $f(x; \alpha, \beta) = \frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha, \beta)}$</li>
      <li><strong>Beta Function:</strong> $B(\alpha, \beta) = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)}$</li>
      <li><strong>Mean:</strong> $\frac{\alpha}{\alpha + \beta}$</li>
    </ul>

    <h2 id="beta-example">8. Illustrative Example: Bayesian A/B Testing</h2>
    <div class="example-box">
      <h4>Problem: Predicting Click-Through Rate (CTR)</h4>
      <p>You observe 8 clicks (\(\alpha=8\)) and 2 non-clicks (\(\beta=2\)) on a webpage. What is our expected belief about the true CTR?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Parameters:</strong> \(\alpha = 8, \beta = 2\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Expected Value:</strong> \(E[X] = \frac{\alpha}{\alpha + \beta}\).</div></div>

      <div class="math-block">$$E[X] = \frac{8}{8 + 2} = 0.8 \text{ (80\% CTR)}$$</div>

      <div class="callout focus"><div class="callout-icon">🎯</div><div class="callout-body"><strong>ML Insight:</strong> As we observe more data (e.g., 800 clicks, 200 non-clicks), the Beta distribution becomes "tighter" around 0.8, representing increased confidence in our model's estimate.</div></div>
    </div>

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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> Dirichlet is the <strong>"Sparsity Prior."</strong> It is the big brother of Beta, modeling mixtures of many categories. In Topic Modeling, we use it to force a document to choose just 1-2 main topics rather than being a messy soup of everything.
      </div>
    </div>

    <h3>Mathematical Derivation</h3>
    <div class="math-block">$$f(\mathbf{x}; \mathbf{\alpha}) = \frac{1}{B(\mathbf{\alpha})} \prod_{i=1}^{K} x_i^{\alpha_i - 1}$$</div>
    
    <div class="example-box">
      <h4>Problem: Topic Modeling Prior</h4>
      <p>A document has 3 possible topics. We set a Dirichlet prior with \(\mathbf{\alpha} = [10, 10, 10]\). What is the expected distribution of topics?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Mean Formula:</strong> \(E[x_i] = \alpha_i / \sum \alpha_j\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Calculate:</strong> \(10 / (10+10+10) = 1/3\).</div></div>

      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Insight:</strong> If we set \(\alpha < 1\) (e.g., [0.1, 0.1, 0.1]), the distribution pushes the document to be "sparse"—favoring only one topic. This <strong>Sparsity Prior</strong> is what makes LDA topic modeling effective.</div></div>
    </div>

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
            <td><strong>Student's t</strong></td>
            <td>Continuous</td>
            <td>Small-sample Inference</td>
            <td>Heavier tails for uncertainty</td>
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
  `},r={id:"statistics",title:"Statistics",description:"Statistics is the science of learning from data. In Machine Learning, it provides the tools for descriptive analysis, hypothesis testing, parameter estimation, and rigorous model evaluation.",keyConcepts:[{title:"Descriptive Statistics",description:"Measures of central tendency, spread, and information-theoretic uncertainty."},{title:"Probability Distributions",description:"The mathematical blueprints for Bernoulli, Binomial, Gaussian, and Bayesian priors."},{title:"Sampling & Resampling",description:"Bootstrapping, Cross-Validation, and population inference."},{title:"Inferential Statistics",description:"The mathematical theory of hypothesis testing, p-values, and confidence intervals."},{title:"Estimation Theory",description:"Maximum Likelihood (MLE) vs. Maximum A Posteriori (MAP) and the Bias-Variance tradeoff."},{title:"Regression Analysis",description:"The Ordinary Least Squares (OLS) framework, residuals, and R-squared."},{title:"Evaluation Metrics",description:"Probabilistic and information-theoretic measures of classification and regression performance."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Statistics: <span class="text-accent italic">The Science of Evidence</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          If Probability is the logic of future events, <strong>Statistics</strong> is the forensic analysis of past data. It provides the tools to validate whether nuestro models are actually learning meaningful patterns or just memorizing noise.
        </p>
        
        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          A model that works on your training set is useless if it doesn't generalize to the real world. Statistics gives us the rigor to measure "confidence" in nuestro results, the "significance" of nuestro discoveries, and the framework to evaluate model performance beyond simple accuracy.
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
          In the age of Big Data, the challenge isn't finding patterns—it's finding patterns that are *true*.
        </p>

        <ul class="space-y-8 list-none pl-0">
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Generalization & Inference</strong>
              <p class="text-muted-premium font-normal">We learn from a <strong>Sample</strong> to make statements about a <strong>Population</strong>. Statistics tells us how much we can trust that leap of faith.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Hypothesis Testing</strong>
              <p class="text-muted-premium font-normal">Is your model's 2% improvement real or just luck? Use <strong>p-values</strong> and <strong>Confidence Intervals</strong> to prove your results are statistically significant.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Model Integrity</strong>
              <p class="text-muted-premium font-normal">Techniques like <strong>Bootstrapping</strong> and <strong>Cross-Validation</strong> allow us to estimate the "true" error of nuestro models in the wild.</p>
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
          To perform high-stakes analysis, we will focus on these key areas:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Descriptive Statistics</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Beyond Mean and Median—understanding the spread and "skew" of your data.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Sampling Theory</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Mastering the Central Limit Theorem: WHY the world looks Gaussian at scale.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Hypothesis Testing</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Learning to set up Null Hypotheses and navigate Type I vs Type II errors.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Estimation (MLE/MAP)</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Fitting distributions to data by maximizing the likelihood of observations.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Regression Frameworks</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Analyzing relationships between variables using OLS and residuals analysis.</p>
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
          You will learn to perform rigorous model evaluation, transitioning from a "data enthusiast" to a "data scientist." We focus on the **logic of evidence** and the mathematical safeguards that prevent overfitting.
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

        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          By the end of this module, you redundant will possess the critical eye needed to deconstruct any model's claims and identify the "true" signals within the noise.
        </p>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to analyze?</p>
        <a 
          href="/#/mathematics/statistics/descriptive-statistics" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Descriptive Stats
        </a>
      </div>

    </div>
  `,sections:[t,n,i,e,s,a,o]};export{r as STATISTICS_DATA};
