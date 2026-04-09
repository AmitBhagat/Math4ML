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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Probability Distributions</strong>: Normal, T, and Chi-Square.</li>
        <li><strong>Central Limit Theorem</strong>: Why sample means form bell curves.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Everything in statistics starts with the <strong>Null Hypothesis (\(H_0\))</strong>—the annoying, skeptical assumption that "Nothing happened, it's just random noise." We only accept the <strong>Alternative Hypothesis (\(H_1\))</strong> if the evidence (our data) is so overwhelming that it is highly unlikely to have occurred by chance. The <strong>P-Value</strong> is the probability of seeing your specific results if the "Nothing happened" assumption were true. If that probability is tiny (usually less than 5%), we decide that the "Noise" explanation is just too implausible. In Machine Learning, this is the tactical way we prove that our model's improvement is a <strong>Real Signal</strong>, protecting us from wasting time chasing ghosts and accidental patterns in the data that aren't actually there.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Test of Significance</div>
      <p>A **Hypothesis Test** is a formal procedure for determining whether to reject a null hypothesis $H_0$ based on sample evidence. It evaluates two mutually exclusive statements about a population:</p>
      <div class="math-block">
        $$H_0: \theta = \theta_0, \quad H_a: \theta \neq \theta_0$$
      </div>
      <p>The decision is governed by the following analytical components:</p>
      <ul class="mt-2 space-y-1">
        <li><strong>Test Statistic ($T_{obs}$)</strong>: A numerical value calculated from sample data (e.g., $Z$, $t$, or $\chi^2$) that measures the deviation from $H_0$.</li>
        <li><strong>p-value</strong>: $P(T \ge T_{obs} \mid H_0)$. The probability of observing results as extreme as yours if the Null Hypothesis were true.</li>
        <li><strong>Significance Level ($\alpha$)</strong>: The error budget (typically 0.05). If $p < \alpha$, the result is **Statistically Significant**, and $H_0$ is rejected.</li>
        <li><strong>Decision Errors</strong>: **Type I** (rejecting a true $H_0$) and **Type II** (failing to reject a false $H_0$).</li>
      </ul>
      <p class="mt-2">In ML experimentation, we use these tests to ensure that accuracy gains aren't just sampling artifacts (A/B testing) and to prune non-significant features.</p>
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
    <p>Hypothesis Testing is the "Proof of Truth." It asks: "Is this result a Real Signal, or was I just Lucky?"</p>
    <ul>
      <li><strong>Model Ablation Studies</strong>: When we remove a layer from a neural network, the accuracy might drop. We use hypothesis testing to determine if that drop is a "Significant Loss"—meaning the layer was actually doing something useful—or if the change is so small it's likely just random noise.</li>
      <li><strong>Feature Selection (P-value Filtering)</strong>: In clinical models, we might have 1,000 patient vitals. We use tests like ANOVA or Chi-Square to calculate p-values for every feature. If a feature's p-value is high, it means its relationship with the disease is strictly random, so we drop it.</li>
    </ul>
    <p>Teacher's Final Word: In AI, we use tests to protect ourselves from wasting time chasing "ghosts"—patterns in the data that look real but are actually just accidental wiggles of noise. If it's not significant, it's not worth keeping.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Tests give us a "Yes/No" answer. But how do we estimate the <em>Range</em> of possible truths? Explore <strong><a href="#/mathematics/statistics/confidence-intervals">Confidence Intervals</a></strong>.
    </div>
  `
};


