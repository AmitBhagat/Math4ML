import { TopicSection } from '../../src/data/types';

export const descriptiveStatisticsSection: TopicSection = {
  id: "descriptive-statistics",
  title: "Descriptive Statistics",
  description: "Understand the core measures of central tendency and spread, and how Information Theory provides the mathematical foundation for measuring uncertainty.",
  html: String.raw`
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
  `
};
