import { TopicSection } from '../../src/data/types';

export const inferentialStatisticsSection: TopicSection = {
  id: "inferential-statistics",
  title: "Inferential Statistics",
  description: "Learn how to make predictions or 'inferences' about large populations based on representative samples using hypothesis testing and confidence intervals.",
  html: String.raw`
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

    <h2 id="hypothesis-example">1.1 Illustrative Example: The p-value Ritual</h2>
    <div class="example-box">
      <h4>Problem: Is Feature X Significant?</h4>
      <p>In a housing model, the coefficient for 'Square Footage' has a \(p = 0.002\). Should we keep it?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Threshold (\(\alpha\)):</strong> Usually set to 0.05.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Comparison:</strong> \(0.002 < 0.05\).</div></div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Decision:</strong> Reject \(H_0\). The relationship between square footage and price is <strong>Statistically Significant</strong>. There is only a 0.2% chance this result is due to random noise.</div></div>
    </div>

    <h2 id="error-example">1.2 Illustrative Example: Type I vs. Type II</h2>
    <div class="example-box">
      <h4>Problem: Diagnosing a Broken Server</h4>
      <p>A monitoring system alerts if a server is 'Down'. What are the errors?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Type I (False Positive):</strong> Alert says "Down" but server is "Healthy". You woke up for nothing (Alpha Error).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Type II (False Negative):</strong> Alert says "Healthy" but server is "Down". Users are complaining (Beta Error).</div></div>

      <div class="callout focus"><div class="callout-icon">🎯</div><div class="callout-body"><strong>ML Tradeoff:</strong> Decreasing the threshold to catch every "Down" server (Lower Type II) usually increases "False Alarms" (Higher Type I). This is the <strong>Precision-Recall Tradeoff</strong>.</div></div>
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
  `
};
