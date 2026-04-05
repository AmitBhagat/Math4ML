import { TopicSection } from '../../src/data/types';

export const inferentialStatisticsSection: TopicSection = {
  id: "inferential-statistics",
  title: "Theoretical Foundations and Mathematical Frameworks of Inferential Statistics for Machine Learning",
  description: "An exhaustive exploration of hypothesis testing, p-values, t-tests, chi-square analysis, and confidence intervals, bridging sample statistics to population parameters with applications in ML validation.",
  formula: "t = \\frac{\\bar{x} - \\mu}{s / \\sqrt{n}}",
  details: [
    "Epistemology of Inference: Population vs Sample Dynamics",
    "Central Limit Theorem (CLT) and sampling distributions",
    "Hypothesis Testing: Fisher vs Neyman-Pearson Philosophies",
    "Error Typology: Type I (alpha) and Type II (beta) errors",
    "Student's t-Test: Full mathematical derivation and PDF",
    "Variations of t-Test: Welch's t-test and Satterthwaite approximation",
    "Pearson’s Chi-Square Test: Goodness-of-Fit and Independence",
    "Mathematical Construction of Confidence Intervals (CI)",
    "Equivalence Theorem: HT-CI Duality",
    "Implications for ML and Large-Scale Experimentation"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Table of Contents</div>
      <a href="#epistemology">The Epistemology of Statistical Inference</a>
      <a href="#hypothesis">The Mathematical Theory of Hypothesis Testing</a>
      <a href="#ttest">The Student's t-Test: Derivation and Application</a>
      <a href="#chisq">Pearson's Chi-Square Test</a>
      <a href="#ci">Mathematical Construction of Confidence Intervals</a>
      <a href="#cases">Case Studies and Explained Solutions</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="epistemology" class="premium-h2">The Epistemology of Statistical Inference</h2>
    <p>Statistical inference is the process of using data analysis to deduce properties of an underlying probability distribution. It is predicated on the assumption that the observed dataset is a sample drawn from a larger, often unobservable, population. The logic of inference rests on the relationship between <strong>parameters</strong> (population characteristics like $\mu$ or $\sigma$) and <strong>statistics</strong> (sample characteristics like $\bar{x}$ or $s$).</p>

    <div class="premium-callout info">
      <div class="premium-callout-icon">📐</div>
      <div class="premium-callout-body">
        <strong>Central Limit Theorem (CLT):</strong> For a sufficiently large sample size (typically $n \geq 30$), the sampling distribution of the sample mean will be approximately normally distributed, regardless of the shape of the original population.
      </div>
    </div>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Concept</th><th>Population (Parameter)</th><th>Sample (Statistic)</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Mean</strong></td><td>$\mu$</td><td>$\bar{x}$</td><td>The central value of the data distribution.</td></tr>
          <tr><td><strong>Standard Deviation</strong></td><td>$\sigma$</td><td>$s$</td><td>The average distance of data points from the mean.</td></tr>
          <tr><td><strong>Variance</strong></td><td>$\sigma^2$</td><td>$s^2$</td><td>The average of the squared deviations.</td></tr>
          <tr><td><strong>Proportion</strong></td><td>$p$</td><td>$\hat{p}$</td><td>The frequency of an event divided by total count.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 2 -->
    <h2 id="hypothesis" class="premium-h2">The Mathematical Theory of Hypothesis Testing</h2>
    <p>Hypothesis testing is a formal statistical framework for deciding whether sample data provide sufficient evidence to support a specific claim about a population parameter. The process is fundamentally rooted in the concept of falsification.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">Fisher's Approach (Significance)</div>
      <p style="margin:0">Focuses on the <strong>p-value</strong> as a continuous measure of evidence against the null hypothesis $H_0$. It calculates the probability of obtaining a result at least as extreme as the one observed, assuming $H_0$ is true.</p>
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">Neyman–Pearson Framework (Decision)</div>
      <p style="margin:0">Treats hypothesis testing as a rule of behavior designed to limit long-run errors. Researchers specify a significance level $\alpha$ and a desired power $1-\beta$ <i>a priori</i>.</p>
    </div>

    <h3 class="premium-h3">Error Rates and Statistical Power</h3>
    <p>Every hypothesis test involves the risk of two types of errors:</p>
    <ul>
      <li><strong>Type I Error ($\alpha$):</strong> False Positive - Rejecting $H_0$ when it is actually true.</li>
      <li><strong>Type II Error ($\beta$):</strong> False Negative - Failing to reject $H_0$ when it is actually false.</li>
    </ul>

    <div class="premium-math-block">
      \text{Power } (1-\beta) \text{ increases with sample size, effect size, and alpha level.}
    </div>

    <!-- SECTION 3 -->
    <h2 id="ttest" class="premium-h2">The Student's t-Test: Derivation and Application</h2>
    <p>Developed by William Sealy Gosset in 1908, the t-test is used for testing hypotheses about means when the population standard deviation is unknown.</p>

    <div class="premium-math-block">
      t = \frac{\bar{X} - \mu}{s/\sqrt{n}}
    </div>

    <p>The probability density function (PDF) of the t-distribution with $\nu$ degrees of freedom is given by:</p>

    <div class="premium-math-block">
      f(t) = \frac{\Gamma\!\left(\frac{\nu+1}{2}\right)}{\sqrt{\nu\pi}\;\Gamma\!\left(\frac{\nu}{2}\right)} \left(1 + \frac{t^2}{\nu}\right)^{-(\nu+1)/2}
    </div>

    <!-- SECTION 4 -->
    <h2 id="chisq" class="premium-h2">Pearson's Chi-Square Test</h2>
    <p>While t-tests are appropriate for continuous data, categorical variables require non-parametric methods. Pearson's chi-square test assesses differences between observed and expected frequencies.</p>

    <div class="premium-math-block">
      \chi^2 = \sum_{i=1}^{k} \frac{(O_i - E_i)^2}{E_i}
    </div>

    <!-- SECTION 5 -->
    <h2 id="ci" class="premium-h2">Mathematical Construction of Confidence Intervals</h2>
    <p>A confidence interval provides a range of plausible values that likely contain the true population parameter with a specified level of certainty.</p>

    <div class="premium-math-block">
      \text{CI} = \hat{\theta} \pm (\text{Critical Value} \times \text{Standard Error})
    </div>

    <!-- SECTION 6 -->
    <h2 id="cases" class="premium-h2">Case Studies and Explained Solutions</h2>
    
    <div class="premium-case-study">
      <h4>Case Study: Wait Time Optimization</h4>
      <p>A bank manager implements a new system and wants to test if the average waiting time is now less than 6 minutes.</p>
      <p><strong>Result:</strong> With $t = -2.18$ and $df = 99$, the p-value $\approx 0.0146$. Since $0.0146 < 0.05$, we reject $H_0$. The system is significantly faster.</p>
    </div>

    <div class="premium-math-block">
      \text{Numerical Lab: Python Implementation}
      <python-code>
import numpy as np
from scipy import stats

# Wait times sample
data = np.random.normal(5.46, 2.47, 100)

# One-sample t-test
t_stat, p_val = stats.ttest_1samp(data, 6)
print(f"t-statistic: {t_stat:.4f}, p-value: {p_val:.4f}")
      </python-code>
    </div>
  `
};
