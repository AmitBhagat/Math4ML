import { TopicSection } from '../../src/data/types';

export const studentsTDistributionSection: TopicSection = {
  id: "student-t",
  title: "Student's t-Distribution: The Small-Sample Gaussian Alternative",
  description: "A comprehensive analysis of the t-distribution framework, essential for robust inference when population variance is unknown and sample sizes are restrictive ($n < 30$).",
  formula: "t = \\frac{\\bar{x} - \\mu}{s / \\sqrt{n}}",
  details: [
    "Origin: The 'Student' Pseudonym and Guinness Breweries",
    "Tail Density: Accounting for Higher Sampling Uncertainty",
    "Degrees of Freedom ($df = n-1$) and Distribution Shape",
    "The Transition from t-Distribution to Standard Normal ($Z$)",
    "Small-Sample Confidence Intervals and Hypothesis Testing",
    "Application: t-Tests in Experimental Machine Learning"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">t-Distribution Roadmap</div>
      <a href="#geometry">I. The Geometry of Uncertainty</a>
      <a href="#derivation">II. Formal t-Statistic Derivation</a>
      <a href="#convergence">III. Convergence to Standard Normal</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="geometry" class="premium-h2">I. The Geometry of Uncertainty</h2>
    <p>When sample sizes are small ($n < 30$) and population variance ($\sigma^2$) is unknown, the standard normal assumption fails. The <strong>t-distribution</strong> provides a more conservative model that accounts for the added uncertainty of estimating variance from data.</p>

    <div class="premium-callout info">
      <div class="premium-callout-icon">📉</div>
      <div class="premium-callout-body">
        <strong>Heavy Tails:</strong> The t-distribution has "fatter" tails than the Normal distribution. This reflects a higher probability of extreme values (outliers) in small samples, leading to wider, more robust confidence intervals.
      </div>
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">Degrees of Freedom ($df$)</div>
      <p style="margin:0">The shape of the t-distribution is governed solely by the <strong>Degrees of Freedom</strong>, typically $df = n - 1$.</p>
      <ul style="margin-top:10px">
        <li><strong>Low $df$:</strong> Extremely fat tails, maximal uncertainty.</li>
        <li><strong>High $df$:</strong> Tails thin out; distribution looks like a Bell Curve.</li>
      </ul>
    </div>

    <!-- SECTION 2 -->
    <h2 id="derivation" class="premium-h2">II. Formal t-Statistic Derivation</h2>
    <p>The t-statistic is used in place of the Z-score when we must estimate the standard error using the sample standard deviation $s$ instead of the population $\sigma$.</p>

    <div class="premium-math-block">
      t = \frac{\bar{x} - \mu}{s / \sqrt{n}}
    </div>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Component</th><th>Notation</th><th>Intuition</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Sample Mean</strong></td><td>$\bar{x}$</td><td>The point estimate from data.</td></tr>
          <tr><td><strong>Sample Std Dev</strong></td><td>$s$</td><td>Estimated variation within the sample.</td></tr>
          <tr><td><strong>Estimated Error</strong></td><td>$s / \sqrt{n}$</td><td>The uncertainty of the mean estimate.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 3 -->
    <h2 id="convergence" class="premium-h2">III. Convergence to Standard Normal</h2>
    <p>As the sample size $n$ increases, our estimate of the variance ($s^2$) become increasingly accurate. Mathematically, the t-distribution converges to the Standard Normal distribution ($Z$).</p>

    <div class="premium-callout success">
      <div class="premium-callout-icon">🎯</div>
      <div class="premium-callout-body">
        <strong>The Rule of 30:</strong> Typically, for $n \ge 30$, the difference between $t$ and $Z$ becomes negligible. In large-scale ML (billions of samples), we almost always use the Normal assumption.
      </div>
    </div>
  `
};
