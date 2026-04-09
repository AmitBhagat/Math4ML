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
      <div class="premium-def-title">Formalism: The Partitioning of Variance & The F-Statistic</div>
      <p>ANOVA is the "Signal-to-Noise" ratio for group comparisons. It asks if the differences between groups are larger than the chaos within them.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine $k$ different clusters of data points in a 1D space. Each cluster has its own mean $\bar{x}_i$. ANOVA is a measure of the <strong>Structure</strong> of this data. If the clusters are overlapping messes, you can't distinguish them. If the clusters are "tight" (low within-group variance) and the centers are "far" (high between-group variance), then the groups are distinct. Geometrically, we are partitioning the total "volume" of squared distances into two buckets: the distance <strong>Between</strong> the cluster centers and the distance <strong>Within</strong> each cluster center. </p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We start with the <strong>Sum of Squares Total (SST)</strong>, the squared distance of every point from the "Grand Mean" $\bar{x}_{..}$. We decompose this total into two independent components:</p>
      <div class="math-block">
        $$SS_{total} = SS_{between} + SS_{within}$$
      </div>
      <p>We then calculate the <strong>Mean Squares (MS)</strong> by dividing by the Degrees of Freedom ($k$ groups, $N$ total samples):</p>
      <ul class="mt-2 mb-4 space-y-1">
        <li>$MS_{between} = \frac{\sum n_i (\bar{x}_i - \bar{x}_{..})^2}{k - 1}$ (The Signal)</li>
        <li>$MS_{within} = \frac{\sum \sum (x_{ij} - \bar{x}_i)^2}{N - k}$ (The Noise)</li>
      </ul>
      <p>The <strong>F-Statistic</strong> is the ratio of these two quantities. Under the Null Hypothesis ($H_0$), where all groups are the same, this ratio should be close to 1.0:</p>
      <div class="math-block">
        $$F = \frac{MS_{between}}{MS_{within}}$$
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, ANOVA is the foundation of <strong>Model Validation</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Hyperparameter Comparison</strong>: If you're comparing 3 different learning rates over 10 seeds each, ANOVA tells you if the choice of rate actually matters or if the variations are just seed-dependent noise.</li>
        <li><strong>The F-Test</strong>: The higher the $F$ value, the more evidence we have that the independent variable (e.g., the model type) is actually influencing the outcome.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: ANOVA tells you THAT a difference exists, but not WHERE. It’s an <strong>Omnibus Test</strong>. If you reject the null, you must follow up with a "Post-Hoc" test (like Tukey) to figure out which specific groups are the odd ones out.</p>
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
