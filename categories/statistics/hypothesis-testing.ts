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
      <div class="premium-def-title">Formalism: The Rejection Region & The Decision Rule</div>
      <p>Hypothesis Testing is "The Rigorous Disbelief." It is a framework for deciding if your data has enough weight to overthrow the status quo.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine the <strong>Null Distribution</strong>—the bell curve (PDF) that describes how the world behaves if your "Breakthrough" is actually just random noise. Geometrically, we divide this curve into two parts: the <strong>Region of Acceptance</strong> (the fat middle) and the <strong>Region of Rejection</strong> (the thin tails). We set a boundary $\alpha$ (the significance level). If your observed data lands in the tails, you have "crossed the line." You’ve found a result so extreme that the "random noise" explanation becomes mathematically implausible. </p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We start by stating the <strong>Null Hypothesis ($H_0$)</strong> and the <strong>Alternative ($H_1$)</strong>. We then calculate the <strong>Test Statistic</strong> $T$, which scales the difference we saw by the expected noise:</p>
      <div class="math-block">
        $$T = \frac{\text{Effect Size}}{\text{Standard Error}}$$
      </div>
      <p>The <strong>P-Value</strong> is then derived as the area under the Null Distribution curve that is "more extreme" than our observed $T$:</p>
      <div class="math-block">
        $$p = P(|t| > |T| \mid H_0)$$
      </div>
      <p>The <strong>Decision Rule</strong> is binary: If $p < \alpha$, we reject the Null. If $p \ge \alpha$, we "Fail to Reject"—which is a fancy way of saying we don't have enough evidence yet.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, this determines the <strong>Deployment Gate</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Significance vs. Size</strong>: A model might be "Statistically Significant" because you have 10 million users, even if the "Effect Size" (the accuracy lift) is only 0.0001%. You need to balance the math with common sense.</li>
        <li><strong>Consistency</strong>: A hypothesis test tells you how likely your result is to replicate. If $p=0.49$, your "win" will likely disappear next week.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: A high p-value DOES NOT prove the Null Hypothesis is true. It only means you didn't prove it's false. "Absence of evidence is not evidence of absence."</p>
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


