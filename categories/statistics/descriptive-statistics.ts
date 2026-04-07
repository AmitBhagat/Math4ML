import { TopicSection } from '../../src/data/types';

export const descriptiveStatisticsSection: TopicSection = {
  id: "descriptive-statistics",
  title: "Descriptive Statistics",
  description: "Understand the core measures of central tendency and spread, and how Information Theory provides the mathematical foundation for measuring uncertainty.",
  color: "#B2EBF2",
  html: String.raw`
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

    <div class="step-box"><span class="step-num">3</span><div><strong>Cross-Entropy \(H(P, Q)\):</strong> Average bits to identify events from \(P\) using code optimized for \(Q\).</div></div>
    <div class="math-block">$$H(P, Q) = -\sum_{i} P(x_i) \log Q(x_i)$$</div>

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
  `
};
