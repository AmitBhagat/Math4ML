import { TopicSection } from '../../src/data/types';

export const tTestSection: TopicSection = {
  id: "t-test",
  title: "T-Test",
  description: "The T-Test is the statistical workhorse for comparing the means of two groups. It is the gold standard for A/B testing and model comparison.",
  color: "#D32F2F",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Inference</div>
      <h1>The T-Test: Comparing Two Worlds</h1>
      <p>The <strong>T-Test</strong> is the mathematical tool we use to decide if the difference between two groups is <strong>Real</strong> or just a result of <strong>Sampling Noise</strong>. In Machine Learning, we use it to prove that Model A is actually better than Model B, rather than just getting lucky on a specific test set.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Standard Deviation</strong>: Understanding the spread of your data.</li>
        <li><strong>Normal Distribution</strong>: The assumption that your data forms a bell curve.</li>
        <li><strong>Degrees of Freedom</strong>: The number of values in a calculation that are free to vary.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Imagine you’re testing two different UI designs. Design A gets 5% clicks, and Design B gets 7%. Is Design B "better"? Not necessarily. If you only tested 10 people, that 2% difference is almost certainly noise. If you tested 10,000 people, it’s almost certainly a real signal. The <strong>T-Test</strong> is the tactical way we weigh the <strong>Size of the Difference</strong> against the <strong>Amount of Noise</strong> (variance). It converts the messy reality of data into a single <strong>T-score</strong>. A high T-score means the signal is loud and the noise is quiet—giving you the green light to trust your results. This is the "headache" of statistics: proving that your success wasn't just a fluke of luck.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Scaled Difference & The T-Distribution</div>
      <p>The T-Test is the "Noise Filter." it measures if the gap between two averages is a result of a real difference or just the luck of the draw.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine two "Clouds" of data points. Each cloud has a center (the mean) and a width (the variance). If the clouds are overlapping, they are effectively the same world. If they are pushed apart, they are different worlds. Geometrically, the T-statistic is the <strong>Standardized Distance</strong> between these centers. However, there’s a catch: the smaller your sample size, the "fuzzier" your estimate of the center is. We use the <strong>T-distribution</strong> (which has fatter tails than a Normal curve) to account for this uncertainty. The T-test asks: *Is the signal (distance between peaks) strong enough to override the noise (the width of the clouds)?*</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We start with the <strong>Null Hypothesis ($H_0$)</strong>: that the true population means are equal ($\mu_1 = \mu_2$). We calculate the observed difference $\Delta = \bar{X}_1 - \bar{X}_2$. To turn this raw difference into a "Score," we scale it by the <strong>Estimated Standard Error</strong> of the difference:</p>
      <div class="math-block">
        $$SE_{\Delta} = \sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}$$
      </div>
      <p>The <strong>T-Statistic</strong> is the number of "standard errors" that our observed difference is away from the zero-difference baseline:</p>
      <div class="math-block">
        $$t = \frac{(\bar{X}_1 - \bar{X}_2) - 0}{SE_{\Delta}}$$
      </div>
      <p>We then look up this $t$ value in the Student's T-distribution table (using our degrees of freedom) to find the <strong>p-value</strong>. </p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, the T-test is the <strong>Benchmarking Standard</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Model Comparison</strong>: If Model A has 92% accuracy and Model B has 93% accuracy, you run a Paired T-test across 10 cross-validation folds. If $p < 0.05$, you've proven that the 1% gain is a real architectural advantage, not just a lucky random seed.</li>
        <li><strong>Sample size matters ($n$)</strong>: As your $n$ gets larger, the standard error decreases. This means that even small differences can become "Significant" if you have enough data. </li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: A T-test assumes your data follows a Normal Distribution. If your data is highly skewed (like "Days since last purchase"), the T-test math will lie to you. In those cases, use a non-parametric test like the <strong>Mann-Whitney U Test</strong>.</p>
    </div>
    
    <visualizer topic="mle" />
    

    
    <h2 id="case-study" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> A/B Testing (UI Design)</h2>
    
      <h4>Problem: Does a New UI Increase Clicks?</h4>
      <p>Group A (Old UI) has 5% clicks. Group B (New UI) has 7% clicks. Is the 2% gain "Real"?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Test Strategy:</strong> We use an <strong>Independent 2-Sample T-Test</strong> because the users in Group A are different from the users in Group B.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Calculation:</strong> We don't just look at the 2% gap. We factor in the <strong>Variance</strong>. If Group B's performance is wildly inconsistent, the T-score will drop, warning us not to trust the 7% average.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> If the calculated \(p\)-value is \(0.02\), we reject the "No difference" theory. The UI change is 98% likely to be a genuine improvement in user behavior.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np
from scipy import stats

# Simulate conversion rates for two groups
# Group A: Mean=0.05, StdDev=0.01
group_a = np.random.normal(0.05, 0.01, 100) 
# Group B: Mean=0.07, StdDev=0.01
group_b = np.random.normal(0.07, 0.01, 100) 

# Perform Independent 2-Sample T-Test
t_stat, p_val = stats.ttest_ind(group_a, group_b)

print(f"T-Statistic: {t_stat:.4f}")
print(f"P-Value: {p_val:.4f}")

if p_val < 0.05:
    print("Decision: Reject Null Hypothesis (Statistically Significant)")
else:
    print("Decision: Fail to Reject Null Hypothesis (Not Significant)")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>In Machine Learning, the T-test is our "Lie Detector." It prevents us from over-optimizing for noise.</p>
    <ul>
      <li><strong>Model Comparison</strong>: When comparing two cross-validation scores (e.g., Random Forest vs. XGBoost), we use a <strong>Paired T-Test</strong> to see if the improvement is consistent across all folds or just a fluke on one specific split.</li>
      <li><strong>Feature Selection</strong>: For numeric features, we can use a T-test to see if the feature's distribution differs significantly across different target classes. If there's no difference, the feature likely has no predictive power.</li>
    </ul>
    <p>Teacher's Final Word: Never report a mean without checking its significance. The T-test is the difference between a "hunch" and a "proven result."</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> T-tests work for two groups. But what if you have three or more? Explore <strong><a href="#/mathematics/statistics/anova">ANOVA</a></strong>.
    </div>
  `
};
