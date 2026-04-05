import { TopicSection } from '../../src/data/types';

export const samplingDistributionsSection: TopicSection = {
  id: "sampling-distributions",
  title: "Sampling Distributions: The Statistical Bridge to Population Inference",
  description: "A rigorous exploration of how samples represent populations, the mechanics of estimators, and the foundational role of the Central Limit Theorem in machine learning data pipelines.",
  formula: "\\mu_{\\bar{x}} = \\mu, \\quad \\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}}",
  details: [
    "Population vs. Sample Parameterization",
    "Mechanics of Simple Random and Stratified Sampling",
    "The Sampling Distribution of the Mean",
    "Standard Error and the Law of Large Numbers",
    "Central Limit Theorem: Convergence to Normality",
    "Sampling Bias and Selection Effects in ML Datasets"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Sampling Roadmap</div>
      <a href="#fundamentals">I. Population vs. Sample Fundamentals</a>
      <a href="#standard-error">II. The Standard Error Formula</a>
      <a href="#clt">III. The Central Limit Theorem (CLT)</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="fundamentals" class="premium-h2">I. Population vs. Sample Fundamentals</h2>
    <p>A <strong>Population</strong> is the theoretical set of all possible observations, while a <strong>Sample</strong> is a finite subset used for analysis. The core goal of statistical inference is to use sample statistics to estimate population parameters.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Concept</th><th>Notation</th><th>Intuition</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Population Parameter</strong></td><td>$\mu, \sigma$</td><td>The true, universal "ground truth."</td></tr>
          <tr><td><strong>Sample Statistic</strong></td><td>$\bar{x}, s$</td><td>An estimate derived from observed data.</td></tr>
          <tr><td><strong>Sampling Bias</strong></td><td>-</td><td>Error when the sample doesn't represent the population.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">🌉</div>
      <div class="premium-callout-body">
        <strong>The Estimator:</strong> A sample statistic (like the mean $\bar{x}$) serves as a <strong>Point Estimator</strong> for the population parameter. Our goal is to minimize the bias and variance of this estimator.
      </div>
    </div>

    <!-- SECTION 2 -->
    <h2 id="standard-error" class="premium-h2">II. The Standard Error Formula</h2>
    <p>A <strong>Sampling Distribution</strong> is the distribution of a statistic calculated from all possible samples of a fixed size $n$. Its spread is governed by the <strong>Standard Error</strong>.</p>

    <div class="premium-math-block">
      \sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}
    </div>

    <div class="premium-callout success">
      <div class="premium-callout-icon">📈</div>
      <div class="premium-callout-body">
        <strong>The Square Root Law:</strong> To cut the standard error in half, you must quadruple the sample size ($n$). High-volume data naturally produces more stable estimates.
      </div>
    </div>

    <!-- SECTION 3 -->
    <h2 id="clt" class="premium-h2">III. The Central Limit Theorem (CLT)</h2>
    <p>The CLT is perhaps the most important theorem in statistics. It provides a universal bridge between arbitrary data and the Normal distribution.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">Convergence to Normality</div>
      <p style="margin:0">Regardless of the population's underlying distribution (skewed, uniform, etc.), the sampling distribution of the mean will converge toward a <strong>Normal Distribution</strong> as $n$ increases.</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        \bar{X} \sim N\left(\mu, \frac{\sigma^2}{n}\right)
      </div>
    </div>

    <div class="premium-case-study">
      <h4>Applied Inference Example</h4>
      <p>If you take 1,000 samples of size $n=100$ from a highly skewed dataset of user heights:</p>
      <ul>
        <li>The distribution of individual heights is skewed.</li>
        <li>The distribution of the <strong>1,000 sample means</strong> will be a perfect Bell Curve.</li>
      </ul>
    </div>
  `
};
