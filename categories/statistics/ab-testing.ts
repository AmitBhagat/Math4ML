import { TopicSection } from '../../src/data/types';

export const abTestingSection: TopicSection = {
  id: "ab-testing",
  title: "A/B Testing",
  description: "A/B Testing is the definitive framework for measuring causality in the real world. It is how we prove that a new model or feature actually 'works' for users.",
  color: "#D32F2F",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Experimentation</div>
      <h1>A/B Testing: The Gold Standard</h1>
      <p>In Machine Learning, we don't just care about "Accuracy" on a test set. We care about <strong>Causality</strong>. <strong>A/B Testing</strong> is the rigorous process of splitting users into two groups—<strong>Control</strong> (Status Quo) and <strong>Treatment</strong> (New Model)—to isolate exactly how much "Lift" our changes actually provide in the real world.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Randomization</strong>: Ensuring users are assigned to groups without bias.</li>
        <li><strong>Hypothesis Testing</strong>: Understanding $p$-values and significance.</li>
        <li><strong>Confidence Intervals</strong>: Measuring the precision of the observed Lift.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Imagine you deploy a new recommendation engine and sales go up by 10%. Did your model work, or was it just a holiday weekend? Without a <strong>Control Group</strong>, you have no way to know. A/B testing is the tactical decision to leave part of your population on the old system so you have a "baseline" for comparison. It is the only way to move from "Correlation" to "Causality." In AI, we use A/B tests to justify months of R&D—proving that the 0.5% gain in AUC actually translates into real dollars or user engagement.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Difference of Estimators & The Z-Test</div>
      <p>A/B testing is "Evidence-Based Decision Making." It quantifies the probability that a perceived "Win" is actually just a statistical fluke.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine two "Sampling Distributions" (bell curves) representing our estimate of the conversion rate for Group A (Control) and Group B (Treatment). Due to the <strong>Central Limit Theorem</strong>, these estimates will be normally distributed around their true values. An A/B test is a measure of the <strong>Overlap</strong> between these two mountains. If the curves are merged, any difference we see is likely noise. If the curves are pulled apart, the "Gap" is significant. Geometrically, we are asking: *Is the distance between the two peaks large enough compared to the width (variance) of the mountains?*</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We start with the <strong>Null Hypothesis ($H_0$)</strong>: that there is zero difference between the groups ($\mu_B - \mu_A = 0$). We calculate the observed difference $\Delta = \bar{X}_B - \bar{X}_A$. To determine if this $\Delta$ is meaningful, we must scale it by the <strong>Pooled Standard Error</strong>:</p>
      <div class="math-block">
        $$SE_{\Delta} = \sqrt{\frac{\sigma_A^2}{n_A} + \frac{\sigma_B^2}{n_B}}$$
      </div>
      <p>This gives us our <strong>Z-Score</strong> (the number of standard deviations our result is from the "no-change" baseline):</p>
      <div class="math-block">
        $$Z = \frac{(\bar{X}_B - \bar{X}_A) - 0}{SE_{\Delta}}$$
      </div>
      <p>The <strong>$p$-value</strong> is the area under the tails of the standard normal distribution beyond this $Z$ score. If $p < 0.05$, the "Gap" is too large to be a coincidence.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, A/B testing is the last line of defense: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Causality</strong>: While MSE and AUC show correlation, only a Randomized Controlled Trial (A/B Test) proves that your model *caused* the increase in revenue.</li>
        <li><strong>Sample Size Power</strong>: The "Sensitivity" of your test depends on $n$. If you have too few users, you might miss a real 1% lift simply because your "mountains" were too fuzzy and overlapping.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Stopping a test as soon as the $p$-value hits 0.05 is the "Cardinal Sin" of statistics. This is called <strong>p-hacking</strong>. You must wait until your pre-calculated sample size is reached, or your "significant" result will likely vanish if you run it again. </p>
    </div>
    
    <h2 id="workflow">The Experimenter's Workflow</h2>
    <div class="algorithm-steps">
      <div class="algorithm-step">
        <span class="step-badge">1</span>
        <div><strong>Design:</strong> Choose your MDE and calculate the required sample size <em>before</em> starting.</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">2</span>
        <div><strong>Run:</strong> Randomly assign users. Do <strong>not</strong> stop early if you see a $p$-value you like (this is called "Peeking" and it ruins the math).</div>
      </div>
       <div class="algorithm-step">
        <span class="step-badge">3</span>
        <div><strong>Analyze:</strong> Use a Z-test (for proportions) or T-test (for means) to calculate the $p$-value of the Lift.</div>
      </div>
    </div>

    <h2 id="pitfalls">The "Gotchas" (Common Pitfalls)</h2>
    <div class="callout error">
      <div class="callout-icon">✕</div>
      <div class="callout-body">
        <strong>Peeking Error:</strong> Checking the results every day and stopping "once it's significant." This drastically increases your False Positive rate. <strong>Stick to the pre-calculated sample size!</strong>
      </div>
    </div>
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Novelty Effect:</strong> Users might click a new button just because it's new. Run the test long enough for the "shiny object" syndrome to wear off.
      </div>
    </div>

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np
from statsmodels.stats.power import TTestIndPower

# 1. Power Analysis: How many users do we need?
effect_size = 0.1  # Cohen's d (Standardized MDE)
alpha = 0.05
power = 0.8

analysis = TTestIndPower()
sample_size = analysis.solve_power(effect_size=effect_size, power=power, alpha=alpha)
print(f"Required Sample Size per Group: {int(np.ceil(sample_size))}")

# 2. Significance: After the test is done
from statsmodels.stats.proportion import proportions_ztest

# Data: [Successes], [Samples]
count = np.array([500, 550]) # Control vs Treatment conversions
nobs = np.array([10000, 10000]) # Control vs Treatment visitations

z_stat, p_val = proportions_ztest(count, nobs)
print(f"Significance (p-value): {p_val:.4f}")

lift = (550/10000 - 500/10000) / (500/10000)
print(f"Measured Lift: {lift*100:.1f}%")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>A/B Testing is the final gatekeeping step in the ML pipeline.</p>
    <ul>
      <li><strong>Canary Deployments</strong>: Sending 5% of traffic to a new "experimental" model (like a Transformer) vs. the old "stable" model (like an XGBoost) to ensure the new big-brain model actually helps users.</li>
      <li><strong>Multi-Armed Bandits</strong>: An advanced form of A/B testing where the system automatically shifts traffic to the "winning" group in real-time, minimizing the "Regret" of showing users the inferior version.</li>
    </ul>
    <p>Teacher's Final Word: In the real world, "Accuracy" is a vanity metric. "Lift" is what pays the bills. Use A/B testing to prove your worth as an AI engineer.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> You've learned how to measure the "Truth." Now learn how to package that truth into a range of certainty. Explore <strong><a href="#/mathematics/statistics/confidence-intervals">Confidence Intervals</a></strong>.
    </div>
  `
};
