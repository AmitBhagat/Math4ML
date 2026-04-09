import { TopicSection } from '../../src/data/types';

export const anovaSection: TopicSection = {
  id: "anova",
  title: "ANOVA",
  description: "ANOVA (Analysis of Variance) is the standard method for comparing the means of three or more groups. It is essential for rigorous Model Selection and Hyperparameter Tuning.",
  color: "#D32F2F",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Multi-Group</div>
      <h1>ANOVA: Comparing Multi-Worlds</h1>
      <p><strong>ANOVA</strong> (Analysis of Variance) is the "Big Brother" of the T-Test. While a T-Test can only handle two groups, ANOVA can compare three, four, or fifty groups simultaneously. In Machine Learning, we use it to definitively answer: "Among these five optimizers, is there actually a winner, or are they all basically the same?"</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Variance</strong>: Measuring how much data points deviate from the mean.</li>
        <li><strong>F-Distribution</strong>: The probability distribution of the ratio of two variances.</li>
        <li><strong>T-Test</strong>: Understanding comparison between two groups.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Imagine you're testing three different optimizers: Adam, SGD, and RMSprop. You run 10 training sessions for each. You see Adam has a slightly higher average accuracy. Is it the "best"? If you did a bunch of T-Tests (Adam vs SGD, Adam vs RMSprop, SGD vs RMSprop), you would increase your chance of a <strong>Type I Error</strong>—essentially "fishing" for a significant result until you find one by luck. <strong>ANOVA</strong> solves this by performing one single "Omnibus" test. It checks the <strong>Variance Between Groups</strong> (how far the group means are from each other) and divides it by the <strong>Variance Within Groups</strong> (the "noise" inside each optimizer's runs). If the group means are far apart and the noise is low, the <strong>F-statistic</strong> will be high. This is the tactical way we prove a specific configuration is superior across many trials.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The One-Way ANOVA</div>
      <p>ANOVA tests the null hypothesis that all group means are equal ($H_0: \mu_1 = \mu_2 = \dots = \mu_k$). It uses the <strong>F-statistic</strong>, which is the ratio of Variance Between Groups to Variance Within Groups:</p>
      <div class="math-block">
        $$F = \frac{\text{MS}_{between}}{\text{MS}_{within}}$$
      </div>
      <p>Where:</p>
      <ul class="mt-2 space-y-1">
        <li>$\text{MS}_{between}$: Mean Square Between groups (Variation due to the "Treatment" or "Category").</li>
        <li>$\text{MS}_{within}$: Mean Square Within groups (Variation due to "Error" or "Noise").</li>
        <li>$\text{MS} = \frac{\text{Sum of Squares}}{\text{Degrees of Freedom}}$.</li>
      </ul>
      <p class="mt-4">If $F$ is significantly greater than 1, we reject $H_0$, meaning *at least one* group is significantly different from the others. To find *which* one, we use <strong>Post-Hoc Tests</strong> (like Tukey's HSD).</p>
    </div>
    
    <h2 id="case-study" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Optimizer Comparison (Deep Learning)</h2>
    
      <h4>Problem: Which Optimizer is Best? (Adam vs. SGD vs. RMSprop)</h4>
      <p>You run 10 training sessions with each optimizer. You want to prove that the differences you see are real.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Test Strategy:</strong> We use <strong>One-Way ANOVA</strong>. It handles all three optimizers in one calculation, protecting us from the statistical pitfalls of multiple T-tests.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Logic:</strong> If the "Gap" between Adam and SGD is huge, but the 10 runs of Adam are also wildly different from each other (High Within-Group Variance), ANOVA will penalize the result. It only gives a "Win" if the groups are clearly separated and internally consistent.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> ANOVA doesn't tell you "Adam is best." It tells you "There IS a difference." You then follow up with a post-hoc test to crown the specific winner.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np
from scipy import stats

# Accuracy scores for 3 models over 10 different random seeds
adam_scores    = [0.85, 0.86, 0.84, 0.85, 0.87, 0.85, 0.86, 0.84, 0.85, 0.86]
sgd_scores     = [0.80, 0.82, 0.79, 0.81, 0.80, 0.81, 0.82, 0.79, 0.81, 0.80]
rmsprop_scores = [0.83, 0.84, 0.82, 0.83, 0.85, 0.83, 0.84, 0.82, 0.83, 0.84]

# Perform One-Way ANOVA
f_stat, p_val = stats.f_oneway(adam_scores, sgd_scores, rmsprop_scores)

print(f"F-Statistic: {f_stat:.4f}")
print(f"P-Value: {p_val:.4f}")

if p_val < 0.05:
    print("\nDecision: Reject H0 (At least one optimizer is significantly different)")
else:
    print("\nDecision: Fail to Reject H0 (No significant difference found)")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>ANOVA is the rigorous way to perform "Model Selection."</p>
    <ul>
      <li><strong>Hyperparameter Optimization</strong>: If you're comparing 5 different values for "Learning Rate," ANOVA can tell you if changing the rate actually affects performance or if it's statistically irrelevant.</li>
      <li><strong>Ablation Studies</strong>: When testing multiple architectural variants of a neural network, ANOVA provides the mathematical foundation to claim that "Variant C" is objectively superior to the others.</li>
    </ul>
    <p>Teacher's Final Word: Don't just pick the highest average. Use ANOVA to prove that your "best" model is actually better and not just lucky on a few seeds.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Tests give us a "Yes/No" answer. But how do we estimate the <em>Precision</em> of our results? Explore <strong><a href="#/mathematics/statistics/confidence-intervals">Confidence Intervals</a></strong>.
    </div>
  `
};
