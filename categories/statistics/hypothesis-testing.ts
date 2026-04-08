import { TopicSection } from '../../src/data/types';

export const hypothesisTestingSection: TopicSection = {
  id: "hypothesis-testing",
  title: "Hypothesis Testing",
  description: "Hypothesis Testing is the statistical process of determining if an observed effect is 'Real' or just a result of random chance.",
  color: "#D32F2F",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Inference</div>
      <h1>Hypothesis Testing: The Proof of Truth</h1>
      <p><strong>Hypothesis Testing</strong> is the mathematical framework for making decisions. It asks the critical question: "Is the improvement in my model's accuracy a <strong>Real Signal</strong>, or was I just <strong>Lucky</strong> with this specific dataset?" In Machine Learning, we use these tests to validate our experiments and feature importance.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#process">The 4-Step Process</a>
      <a href="#example-ttest">Example 1: T-Test (A/B Testing)</a>
      <a href="#example-chi">Example 2: Chi-Square (Independence)</a>
      <a href="#example-anova">Example 3: ANOVA (Comparing 3+ Labs)</a>
      <a href="#implementation">Implementation (Python/SciPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Probability Distributions</strong>: Normal, T, and Chi-Square.</li>
        <li><strong>Central Limit Theorem</strong>: Why sample means form bell curves.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>Everything in statistics starts with the **Null Hypothesis (\(H_0\))**—the assumption that "Nothing happened, it's just noise." We only accept the <strong>Alternative Hypothesis (\(H_1\))</strong> if the evidence (the data) is so overwhelming that it's highly unlikely to have occurred by chance. The <strong>P-Value</strong> is the probability of seeing your results if the "Nothing happened" assumption were true.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of Hypothesis Testing as a <strong>"Trial in Court."</strong> 
        The Model is **"Innocent"** of having any real effect until proven guilty. 
        The **Evidence** is your Test Data. 
        The **P-Value** is the "Reasonable Doubt." 
        If the doubt is less than 5% (\(\alpha = 0.05\)), we "Convict" the Null and declare the effect **Statistically Significant**.
      </div>
    </div>

    <h2 id="process">The 4-Step Process</h2>
    <div class="step-box"><span class="step-num">1</span><div><strong>State Hypotheses:</strong> \(H_0\) (No effect) vs. \(H_1\) (There is an effect).</div></div>
    <div class="step-box"><span class="step-num">2</span><div><strong>Choose Alpha (\(\alpha\)):</strong> Usually 0.05. This is your "Threshold for Surprise."</div></div>
    <div class="step-box"><span class="step-num">3</span><div><strong>Calculate Test Statistic:</strong> Compute a score (Z, T, or \(\chi^2\)) based on your data.</div></div>
    <div class="step-box"><span class="step-num">4</span><div><strong>Compare P-Value:</strong> If \(p < \alpha\), Reject \(H_0\).</div></div>

    <h2 id="example-ttest">Example 1: T-Test (A/B Testing)</h2>
    <div class="example-box">
      <h4>Problem: Does a New UI Increase Clicks?</h4>
      <p>Group A (Old UI) has 5% clicks. Group B (New UI) has 7% clicks. Is the 2% gain "Real"?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Test:</strong> **Independent 2-Sample T-Test**. It compares the means of two independent groups.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Calculation:</strong> Factor in the "Noise" (Variance) of both groups. If the groups are large and consistent, the T-score will be high.</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> If \(p=0.02\), we reject the "No difference" theory. The UI change is 98% likely to be a real improvement.
        </div>
      </div>
    </div>

    <h2 id="example-chi">Example 2: Chi-Square (Independence)</h2>
    <div class="example-box">
      <h4>Problem: Is 'Gender' Related to 'Buying a Phone'?</h4>
      <p>Data: 200 people. Does knowing gender change the probability of purchase?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Test:</strong> **Chi-Square Test of Independence**. Best for categorical comparisons.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Logic:</strong> Compare the "Observed" counts in each category vs. "Expected" counts if they were totally independent.</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> In ML, we use Chi-Square for **Feature Selection**. If a feature and the target label are "Independent," the feature is useless—we drop it from the model.
        </div>
      </div>
    </div>

    <h2 id="example-anova">Example 3: ANOVA (Comparing 3+ Labs)</h2>
    <div class="example-box">
      <h4>Problem: Which Optimizer is Best? (Adam vs. SGD vs. RMSprop)</h4>
      <p>You run 10 training sessions with each optimizer. Is there a "Best" one?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Test:</strong> **One-Way ANOVA**. It checks if *at least one* group mean is different from the others.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Mechanism:</strong> It compares the "Variance between groups" vs. the "Variance within groups."</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> ANOVA tells you *if* a difference exists. You then follow up with "Post-hoc" tests to find out exactly which optimizer won.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/SciPy)</h2>
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
  `
};
