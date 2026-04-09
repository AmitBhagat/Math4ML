import { TopicSection } from '../../src/data/types';

export const hypothesisTestingSection: TopicSection = {
  id: "hypothesis-testing",
  title: "Hypothesis Testing Foundations",
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
        <li><strong>Sampling Theory</strong>: How small samples represent large populations.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Everything in statistics starts with the <strong>Null Hypothesis (\(H_0\))</strong>—the annoying, skeptical assumption that "Nothing happened, it's just random noise." We only accept the <strong>Alternative Hypothesis (\(H_1\))</strong> if the evidence (our data) is so overwhelming that it is highly unlikely to have occurred by chance. The <strong>P-Value</strong> is the probability of seeing your specific results if the "Nothing happened" assumption were true. If that probability is tiny (usually less than 5%), we decide that the "Noise" explanation is just too implausible. In Machine Learning, this is the tactical way we prove that our model's improvement is a <strong>Real Signal</strong>, protecting us from wasting time chasing ghosts and accidental patterns in the data that aren't actually there.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Test of Significance</div>
      <p>A <strong>Hypothesis Test</strong> is a formal procedure for determining whether to reject a null hypothesis $H_0$ based on sample evidence. It evaluates two mutually exclusive statements about a population:</p>
      <div class="math-block">
        $$H_0: \theta = \theta_0, \quad H_a: \theta \neq \theta_0$$
      </div>
      <p>The decision is governed by the following analytical components:</p>
      <ul class="mt-2 space-y-1">
        <li><strong>Test Statistic ($T_{obs}$)</strong>: A numerical value calculated from sample data (e.g., $Z$, $t$, or $\chi^2$) that measures the deviation from $H_0$.</li>
        <li><strong>p-value</strong>: $P(T \ge T_{obs} \mid H_0)$. The probability of observing results as extreme as yours if the Null Hypothesis were true.</li>
        <li><strong>Significance Level ($\alpha$)</strong>: The error budget (typically 0.05). If $p < \alpha$, the result is <strong>Statistically Significant</strong>, and $H_0$ is rejected.</li>
      </ul>
    </div>

    <h2 id="errors">Decision Errors: The Cost of Being Wrong</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Type I vs. Type II Errors</div>
      <p>No statistical test is perfect. We always run the risk of making one of two fatal mistakes:</p>
      <ul class="mt-2 space-y-2">
        <li><strong>Type I Error (False Positive)</strong>: Rejecting a Null Hypothesis that is actually TRUE. In ML, this is like claiming a feature is important when it's just noise. We control this with $\alpha$.</li>
        <li><strong>Type II Error (False Negative)</strong>: Failing to reject a Null Hypothesis that is actually FALSE. In ML, this is like missing a breakthrough because your data was too noisy. We measure the ability to avoid this as <strong>Statistical Power</strong> ($1-\beta$).</li>
      </ul>
    </div>

    <h2 id="workflow">The Scientific Workflow</h2>
    <div class="algorithm-steps">
      <div class="algorithm-step">
        <span class="step-badge">1</span>
        <div><strong>State Hypotheses:</strong> Define $H_0$ (Status Quo) and $H_1$ (Your Breakthrough).</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">2</span>
        <div><strong>Select Alpha:</strong> Choose your "Error Budget" (usually 0.05).</div>
      </div>
       <div class="algorithm-step">
        <span class="step-badge">3</span>
        <div><strong>Calculate Statistic:</strong> Run a T-Test, Chi-Square, or ANOVA based on data type.</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">4</span>
        <div><strong>Make Decision:</strong> If $p < \alpha$, accept the breakthrough. Otherwise, stay skeptical.</div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Concept)</h2>
    <python-code>
# Abstract workflow for any statistical test in SciPy
from scipy import stats

# 1. Gather your data
# 2. Choose the appropriate test
# 3. Calculate p-value
# statistic, p_val = stats.[test_name](data_samples)

# Example template logic:
p_val = 0.03
alpha = 0.05

if p_val < alpha:
    print("Conclusion: Reject H0 (The effect is likely Real)")
else:
    print("Conclusion: Fail to Reject H0 (The effect might be Noise)")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Hypothesis Testing is the "Proof of Truth." It asks: "Is this result a Real Signal, or was I just Lucky?"</p>
    <ul>
      <li><strong>Model Ablation Studies</strong>: Proving if a specific layer or component actually contributes to performance.</li>
      <li><strong>A/B Testing</strong>: Determining if a change in model architecture leads to a significant lift in user engagement.</li>
      <li><strong>Feature Significance</strong>: Using p-values to prune non-informative features from complex models.</li>
    </ul>
    <p>Teacher's Final Word: Foundations first. Before you run a test, understand the risk of being wrong. Type I errors lead to over-engineering; Type II errors lead to missed opportunities. Balance them wisely.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Now that you understand the theory, it's time to run your first real test. Start with comparing two group means in the <strong><a href="#/mathematics/statistics/t-test">T-Test</a></strong>.
    </div>
  `
};


