import { TopicSection } from '../../src/data/types';

export const inferentialStatisticsSection: TopicSection = {
  id: "inferential-statistics",
  title: "Foundations of Inferential Statistics",
  description: "A comprehensive exploration of hypothesis testing, p-values, t-tests, chi-square analysis, and confidence intervals, bridging sample statistics to population parameters with applications in ML validation.",
  formula: "t = \\frac{\\bar{x} - \\mu}{s / \\sqrt{n}}",
  details: [
    "Epistemology of Inference: Population vs Sample Dynamics",
    "Hypothesis Testing: Fisher vs Neyman-Pearson Philosophies",
    "Error Typology: Type I (alpha) and Type II (beta) errors",
    "Student's t-Test: Derivation and Experimental Variations",
    "Pearson’s Chi-Square Test: Goodness-of-Fit and Independence",
    "Mathematical Construction of Confidence Intervals (CI)",
    "HT-CI Duality: The Equivalence Theorem",
    "Machine Learning Implications: Power Calculations and A/B Testing"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Table of Contents</div>
      <a href="#epistemology">The Epistemology of Statistical Inference</a>
      <a href="#hypothesis">The Mathematical Theory of Hypothesis Testing</a>
      <a href="#hypothesis-philosophies" class="sub">↳ Fisher vs. Neyman–Pearson Philosophies</a>
      <a href="#errors" class="sub">↳ Error Rates and Statistical Power</a>
      <a href="#ttest">The Student's t-Test: Derivation and Application</a>
      <a href="#chisq">Pearson's Chi-Square Test</a>
      <a href="#ci">The Mathematical Construction of Confidence Intervals</a>
      <a href="#bridge">Bridging Hypothesis Testing and Estimation</a>
      <a href="#cases">Case Studies and Explained Solutions</a>
      <a href="#ml-implications">Implications for ML and Large-Scale Experiments</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="epistemology" class="premium-h2">The Epistemology of Statistical Inference</h2>
    <p>Statistical inference is the process of using data analysis to deduce properties of an underlying probability distribution. It is predicated on the assumption that the observed dataset is a sample drawn from a larger, often unobservable, population. The logic of inference rests on the relationship between <strong>parameters</strong>—numerical characteristics of a population, such as the mean $\mu$ or standard deviation $\sigma$—and <strong>statistics</strong>, which are the corresponding characteristics calculated from a sample, such as the sample mean $\bar{x}$ or sample standard deviation $s$.</p>

    <p>Because measuring an entire population is typically impractical due to constraints on time, cost, or accessibility, researchers rely on representative samples to estimate these unknown parameters. A representative sample mirrors the properties of the parent population, a condition best achieved through probability sampling methods such as simple random sampling, stratified sampling, or cluster sampling. Randomization serves a dual purpose: it ensures that every individual in the population has an equal probability of selection, thereby minimizing selection bias, and it provides the probabilistic foundation for quantifying the uncertainty of the resulting estimates.</p>

    <div class="premium-callout info">
      <div class="premium-callout-icon">📐</div>
      <div class="premium-callout-body"><strong>Central Limit Theorem (CLT):</strong> For a sufficiently large sample size (typically $n \geq 30$), the sampling distribution of the sample mean will be approximately normally distributed, regardless of the shape of the original population distribution. This convergence forms the basis for hypothesis testing and confidence intervals.</div>
    </div>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Concept</th><th>Population (Parameter)</th><th>Sample (Statistic)</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Mean</strong></td><td>$\mu$</td><td>$\bar{x}$</td><td>The central value of the data distribution.</td></tr>
          <tr><td><strong>Standard Deviation</strong></td><td>$\sigma$</td><td>$s$</td><td>The average distance of data points from the mean.</td></tr>
          <tr><td><strong>Variance</strong></td><td>$\sigma^2$</td><td>$s^2$</td><td>The average of the squared deviations from the mean.</td></tr>
          <tr><td><strong>Proportion</strong></td><td>$p$</td><td>$\hat{p}$</td><td>The frequency of an event divided by the total count.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 2 -->
    <h2 id="hypothesis" class="premium-h2">The Mathematical Theory of Hypothesis Testing</h2>
    <p>Hypothesis testing is a formal statistical framework for deciding whether sample data provide sufficient evidence to support a specific claim about a population parameter. The process is fundamentally rooted in the concept of falsification; as argued by Karl Popper, the goal is often not to verify a hypothesis but to attempt to refute it through observation and experiment.</p>

    <h3 id="hypothesis-philosophies" class="premium-h3">The Dual Philosophies of Significance and Decisions</h3>
    <p>Modern hypothesis testing integrates two distinct historical methodologies: Ronald Fisher's theory of p-values and Jerzy Neyman and Egon Pearson's theory of decision rules.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">Fisher's Approach</div>
      <p style="margin:0">Fisher's approach focuses on the <strong>p-value</strong> as a continuous measure of evidence against the null hypothesis $H_0$. He viewed the p-value as the probability of obtaining a result at least as extreme as the one observed, assuming $H_0$ is true. In this paradigm, the lower the p-value, the stronger the evidence against the null hypothesis. Fisher's methodology was primarily <em>a posteriori</em>, calculating evidence after the experiment was conducted.</p>
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">Neyman–Pearson Framework</div>
      <p style="margin:0">The Neyman–Pearson framework is <em>a priori</em> and decision-oriented. It introduces an alternative hypothesis $H_1$ (or $H_a$) and treats hypothesis testing as a rule of behavior designed to limit the long-run frequency of errors. Researchers specify a significance level $\alpha$ and a desired power $1-\beta$ before collecting data, establishing a critical region. If the test statistic falls within this region, the null hypothesis is rejected in favor of the alternative.</p>
    </div>

    <h3 id="errors" class="premium-h3">Error Rates and Statistical Power</h3>
    <p>Every hypothesis test involves the risk of two types of errors, which exist in an inverse relationship controlled by the decision threshold.</p>

    <ul>
      <li><strong>Type I Error ($\alpha$):</strong> This is a false positive, occurring when the researcher rejects a null hypothesis that is actually true. The probability of this error is set by the significance level, typically $\alpha = 0.05$, indicating a 5% acceptable risk of falsely concluding an effect exists.</li>
      <li><strong>Type II Error ($\beta$):</strong> This is a false negative, occurring when the researcher fails to reject a null hypothesis that is actually false. This error implies that a real effect or relationship was missed due to insufficient data or high noise.</li>
    </ul>

    <p><strong>Statistical power</strong> $(1-\beta)$ is the probability of correctly rejecting a false null hypothesis—essentially the ability of a test to detect an effect when one exists. Power is influenced by the sample size, the effect size (the magnitude of the difference being studied), the significance level, and the measurement error. In machine learning contexts, such as A/B testing, low power often necessitates larger sample sizes to detect meaningful improvements in metrics like conversion rates or click-through rates.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Decision Result</th><th>Null Hypothesis is True</th><th>Null Hypothesis is False</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Fail to Reject $H_0$</strong></td><td>Correct Decision (Confidence Level $1-\alpha$)</td><td>Type II Error ($\beta$ — False Negative)</td></tr>
          <tr><td><strong>Reject $H_0$</strong></td><td>Type I Error ($\alpha$ — False Positive)</td><td>Correct Decision (Power $1-\beta$)</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 3 -->
    <h2 id="ttest" class="premium-h2">The Student's t-Test: Derivation and Application</h2>
    <p>The Student's t-test is a cornerstone of inferential statistics, specifically designed for testing hypotheses about means when the population standard deviation is unknown. It was developed by William Sealy Gosset in 1908 while working at the Guinness Brewery, where he used the pseudonym "Student" to publish his findings.</p>

    <h3 class="premium-h3">Mathematical Derivation of the t-Distribution</h3>
    <p>The t-distribution arises as the sampling distribution of the t-statistic. If we take $n$ independent and identically distributed (i.i.d.) samples $X_1, X_2, \dots, X_n$ from a normal distribution with mean $\mu$ and variance $\sigma^2$, the sample mean $\bar{X}$ is normally distributed as $N(\mu, \sigma^2/n)$. When $\sigma$ is known, the standardized variable $Z$ follows a standard normal distribution:</p>

    <div class="premium-math-block">
      \[ Z = \frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \sim N(0,1) \]
    </div>

    <p>When $\sigma$ is unknown, we estimate it using the unbiased sample standard deviation $s = \sqrt{\sum (X_i - \bar{X})^2 / (n-1)}$. The resulting statistic is:</p>

    <div class="premium-math-block">
      \[ t = \frac{\bar{X} - \mu}{s/\sqrt{n}} \]
    </div>

    <p>The t-distribution is defined as the ratio of a standard normal random variable $Z \sim N(0,1)$ to the square root of a chi-squared random variable $V \sim \chi^2(\nu)$ divided by its degrees of freedom $\nu$:</p>

    <div class="premium-math-block">
      \[ t = \frac{Z}{\sqrt{V/\nu}} \]
    </div>

    <p>The probability density function (PDF) of the t-distribution with $\nu$ degrees of freedom is given by:</p>

    <div class="premium-math-block">
      \[ f(t) = \frac{\Gamma\!\left(\frac{\nu+1}{2}\right)}{\sqrt{\nu\pi}\;\Gamma\!\left(\frac{\nu}{2}\right)} \left(1 + \frac{t^2}{\nu}\right)^{-(\nu+1)/2} \]
    </div>

    <p>where $\Gamma$ is the Gamma function. The t-distribution is symmetric and bell-shaped like the normal distribution but has "heavier tails," meaning there is a higher probability of observing values far from the mean. This increased tail area accounts for the additional uncertainty introduced by estimating the population variance from a small sample. As the degrees of freedom $\nu = n-1$ increase, the t-distribution approaches the standard normal distribution, becoming nearly identical for $n > 300$.</p>

    <h3 class="premium-h3">Variations of the t-Test in Experimental Design</h3>
    <p>Depending on the research design and the nature of the samples, practitioners utilize three primary versions of the t-test.</p>

    <h4 class="premium-h4">1. One-Sample t-Test</h4>
    <p>Compares the mean of a single sample to a known or hypothesized population mean $\mu_0$. For example, verifying if a batch of chocolate bars meets a weight standard of 50 grams.</p>
    
    \[ t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}, \quad df = n-1 \]

    <h4 class="premium-h4">2. Independent Samples t-Test (Two-Sample t-Test)</h4>
    <p>Evaluates whether the means of two unrelated groups are significantly different. It is commonly used in A/B testing to compare a control group and a treatment group.</p>
    <p><strong>Case A: Equal Variances (Student's t-test)</strong> — Assumes $\sigma_1^2 = \sigma_2^2$. It uses a pooled variance $s_p^2$:</p>
    <div class="premium-math-block">
      \[ s_p^2 = \frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2} \]
      \[ t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{s_p^2(1/n_1 + 1/n_2)}}, \quad df = n_1+n_2-2 \]
    </div>
    <p><strong>Case B: Unequal Variances (Welch's t-test)</strong> — More robust when variances or sample sizes differ. The degrees of freedom are calculated using the Satterthwaite approximation:</p>
    <div class="premium-math-block">
      \[ df = \frac{\left(\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}\right)^2}{\frac{(s_1^2/n_1)^2}{n_1-1}+\frac{(s_2^2/n_2)^2}{n_2-1}} \]
    </div>

    <h4 class="premium-h4">3. Paired Samples t-Test (Dependent Samples t-Test)</h4>
    <p>Compares means from the same group at two different times or under two different conditions, such as "before" and "after" an intervention. The test is mathematically equivalent to a one-sample t-test performed on the differences within each pair.</p>
    <div class="premium-math-block">
      \[ t = \frac{\bar{d}}{s_d/\sqrt{n}} \]
    </div>
    <p>where $\bar{d}$ is the mean of the differences and $n$ is the number of pairs.</p>

    <!-- SECTION 4 -->
    <h2 id="chisq" class="premium-h2">Pearson's Chi-Square Test: Foundations for Categorical Analysis</h2>
    <p>While t-tests are appropriate for continuous data, categorical variables require non-parametric methods that analyze frequency counts. The chi-square $(\chi^2)$ test, developed by Karl Pearson, is the primary tool for assessing differences between observed frequencies and those expected under a specific null hypothesis.</p>

    <h3 class="premium-h3">Mathematical Framework and Distribution</h3>
    <p>The chi-square test statistic is defined as the sum of the normalized squared differences between observed $(O)$ and expected $(E)$ counts across $k$ categories:</p>

    <div class="premium-math-block">
      \[ \chi^2 = \sum_{i=1}^{k} \frac{(O_i - E_i)^2}{E_i} \]
    </div>

    <p>The derivation of this statistic is linked to the multinomial distribution. For a set of $n$ observations divided into $k$ mutually exclusive categories with probabilities $p_i$, the probability of observing a configuration $\{n_i\}$ is given by the multinomial formula:</p>

    <div class="premium-math-block">
      \[ P(n_1, n_2, \dots, n_k) = \frac{n!}{n_1! n_2! \dots n_k!} \prod_{i=1}^{k} p_i^{n_i} \]
    </div>

    <p>As $n \to \infty$, the distribution of the Pearson statistic approaches the theoretical $\chi^2$ distribution with $\nu$ degrees of freedom. The $\chi^2$ distribution is positively skewed, starts at zero, and its mean is equal to its degrees of freedom. As degrees of freedom increase, the $\chi^2$ distribution increasingly resembles a normal distribution.</p>

    <h3 class="premium-h3">Chi-Square Goodness-of-Fit and Independence</h3>

    <div class="premium-def-box">
      <div class="premium-def-title">Goodness-of-Fit Test</div>
      <p style="margin:0">Evaluates whether a sample distribution follows a hypothesized theoretical distribution. For instance, a researcher might test if flavor preferences in candy are evenly distributed (uniform distribution).</p>
      <ul style="margin-top:10px">
        <li>Expected counts: $E_i = n \times p_i$, where $p_i$ is the probability specified by $H_0$.</li>
        <li>Degrees of Freedom: $df = k - 1 - m$, where $m$ is the number of parameters estimated from the data.</li>
      </ul>
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">Test of Independence</div>
      <p style="margin:0">Assesses whether two categorical variables are related or independent of each other. Typically applied to contingency tables where rows represent categories of one variable and columns represent another.</p>
      <ul style="margin-top:10px">
        <li><strong>Null Hypothesis $H_0$:</strong> The two variables are independent (no association).</li>
        <li><strong>Expected Frequencies:</strong> $E_{rc} = \frac{(\text{Row Total}_r)\times(\text{Col Total}_c)}{\text{Grand Total}}$</li>
        <li><strong>Degrees of Freedom:</strong> $df = (r-1)(c-1)$. This formula reflects the number of cells in the grid that can vary freely before the marginal totals determine the remaining values.</li>
      </ul>
    </div>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Test Type</th><th>Requirement</th><th>Data Type</th><th>Null Hypothesis</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Goodness-of-Fit</strong></td><td>One categorical variable</td><td>Frequencies/Counts</td><td>Sample matches a specified distribution.</td></tr>
          <tr><td><strong>Independence</strong></td><td>Two categorical variables</td><td>Contingency Table</td><td>No relationship between the variables.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 5 -->
    <h2 id="ci" class="premium-h2">The Mathematical Construction of Confidence Intervals</h2>
    <p>A confidence interval is an inferential procedure used to estimate a population parameter with a specified level of certainty. Unlike a point estimate, which provides a single value (such as the sample mean), a confidence interval provides a range of plausible values that likely contain the true population parameter.</p>

    <h3 class="premium-h3">Standard Form and Margin of Error</h3>
    <p>Symmetric confidence intervals based on the normal or t-distribution generally follow the form:</p>

    <div class="premium-math-block">
      \[ \text{CI} = \hat{\theta} \pm \text{MOE} \]
    </div>

    <p>The Margin of Error (MOE) is the distance from the estimate to the boundaries of the interval. It is calculated as the product of a critical value $(z^*$ or $t^*)$ and the standard error (SE) of the statistic:</p>

    <div class="premium-math-block">
      \[ \text{MOE} = z^* \cdot SE \quad \text{or} \quad \text{MOE} = t^* \cdot SE \]
    </div>

    <p>The critical value corresponds to the chosen confidence level $(1-\alpha)$. For a 95% confidence level, $\alpha = 0.05$, and we seek the value that captures the central 95% of the distribution. For the standard normal distribution, this value is $z_{0.025} = 1.96$.</p>

    <h3 class="premium-h3">Confidence Interval for a Mean $(\mu)$</h3>

    <h4 class="premium-h4">Known $\sigma$ or Large $n$</h4>
    <p>This interval uses the standard normal distribution and is justified by the Central Limit Theorem when $n \geq 30$.</p>
    <div class="premium-math-block">
      \[ \bar{x} \pm z^* \cdot \frac{\sigma}{\sqrt{n}} \]
    </div>

    <h4 class="premium-h4">Unknown $\sigma$ and Small $n$</h4>
    <p>This interval uses the Student's t-distribution with $n-1$ degrees of freedom to account for the uncertainty in estimating $\sigma$ from $s$.</p>
    <div class="premium-math-block">
      \[ \bar{x} \pm t^*_{n-1} \cdot \frac{s}{\sqrt{n}} \]
    </div>

    <h3 class="premium-h3">Confidence Interval for a Proportion $(p)$</h3>
    <p>When estimating the true proportion of a trait in a population, the sample proportion $\hat{p} = x/n$ is the point estimate. The standard deviation of a Bernoulli random variable is $\sqrt{p(1-p)}$, making the standard error of the sampling distribution of proportions:</p>
    <div class="premium-math-block">
      \[ SE(\hat{p}) = \sqrt{\frac{\hat{p}(1-\hat{p})}{n}} \]
    </div>

    <p>The standard Wald interval for a proportion is:</p>
    <div class="premium-math-block">
      \[ \hat{p} \pm z^* \sqrt{\frac{\hat{p}(1-\hat{p})}{n}} \]
    </div>

    <div class="premium-callout warn">
      <div class="premium-callout-icon">⚠️</div>
      <div class="premium-callout-body">This approximation is valid only if the sample size is large enough to satisfy the success-failure condition: $n\hat{p} \geq 10$ and $n(1-\hat{p}) \geq 10$. For smaller samples or extreme proportions, the Wilson score interval or Agresti–Coull interval provides more accurate coverage.</div>
    </div>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Factor</th><th>Change</th><th>Effect on CI Width</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Confidence Level</strong></td><td>Increase (e.g., 95% to 99%)</td><td>Increases (Wider interval)</td></tr>
          <tr><td><strong>Sample Size $(n)$</strong></td><td>Increase</td><td>Decreases (Narrower interval)</td></tr>
          <tr><td><strong>Variability $(s$ or $\sigma)$</strong></td><td>Increase</td><td>Increases (Wider interval)</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 6 -->
    <h2 id="bridge" class="premium-h2">Bridging Hypothesis Testing and Estimation</h2>
    <p>Hypothesis tests and confidence intervals are not isolated procedures; they are two sides of the same inferential coin. There is a formal algebraic correspondence between a two-tailed hypothesis test and a confidence interval for the same parameter.</p>

    <h3 class="premium-h3">The Equivalence Theorem</h3>
    <div class="premium-callout info">
      <div class="premium-callout-icon">🔁</div>
      <div class="premium-callout-body">A null hypothesis $H_0: \mu = \mu_0$ will be <strong>rejected</strong> at significance level $\alpha$ if and only if the hypothesized value $\mu_0$ lies <strong>outside</strong> the $(1-\alpha)100\%$ confidence interval.</div>
    </div>

    <p>For example, if we perform a two-tailed test at $\alpha = 0.05$ and find that the 95% confidence interval for the mean is $(34.02, 35.98)$, and our hypothesized value was $\mu_0 = 33$, we would reject the null hypothesis because 33 is not contained in the interval. If the confidence interval contains zero when testing for a difference in means, it implies that we cannot reject the null hypothesis of "no difference" at that significance level.</p>
    <p>This relationship allows researchers to interpret confidence intervals as a set of all possible null hypothesis values that would <em>not</em> be rejected by the current data. In machine learning model evaluation, this is particularly useful; rather than just knowing if a model is better than a baseline (p-value), the confidence interval tells us <em>how much</em> better it might be and whether that difference is practically significant.</p>

    <!-- SECTION 7 -->
    <h2 id="cases" class="premium-h2">Case Studies and Explained Solutions</h2>
    <p>The following examples demonstrate the practical execution of inferential methods using data structures common in research and industry.</p>

    <div class="premium-case-study">
      <h4>Example 1: One-Sample t-Test for Wait Times</h4>
      <p>A bank manager implements a new system and wants to test if the average waiting time is now less than the previous standard of 6 minutes.</p>
      <p><strong>Data:</strong> Sample size $n = 100$. Sample mean $\bar{x} = 5.46$ minutes. Sample standard deviation $s = 2.475$ minutes.</p>

      <p><strong>Step 1: State Hypotheses</strong></p>
      <div class="premium-math-block">
        \[ H_0: \mu = 6 \qquad H_a: \mu < 6 \quad\text{(One-sided lower tail test)} \]
      </div>

      <p><strong>Step 2: Compute Test Statistic</strong></p>
      <div class="premium-math-block">
        \[ t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}} = \frac{5.46 - 6}{2.475/\sqrt{100}} = \frac{-0.54}{0.2475} \approx -2.18 \]
      </div>

      <p><strong>Step 3: Determine P-value</strong></p>
      <p>Using $df = n-1 = 99$. For $t = -2.18$, the p-value is approximately $0.0146$.</p>

      <p><strong>Step 4: Decision</strong></p>
      <div class="premium-callout success">
        <div class="premium-callout-icon">✓</div>
        <div class="premium-callout-body">At $\alpha = 0.05$, since $0.0146 \leq 0.05$, we <strong>reject $H_0$</strong>. There is sufficient evidence at the 5% level to conclude that the average waiting time is significantly less than 6 minutes.</div>
      </div>
    </div>

    <div class="premium-case-study">
      <h4>Example 2: Chi-Square Test of Independence for Snack Sales</h4>
      <p>A theater owner analyzes 600 moviegoers to see if snack purchases are independent of movie type.</p>

      <p><strong>Observed Contingency Table $(O)$:</strong></p>
      <div class="premium-table-wrap">
        <table class="premium-table">
          <thead><tr><th>Movie Type</th><th>Snack Bought</th><th>No Snack</th><th>Row Totals</th></tr></thead>
          <tbody>
            <tr><td><strong>Action</strong></td><td>150</td><td>50</td><td>200</td></tr>
            <tr><td><strong>Comedy</strong></td><td>120</td><td>80</td><td>200</td></tr>
            <tr><td><strong>Horror</strong></td><td>180</td><td>20</td><td>200</td></tr>
            <tr><td><strong>Col Totals</strong></td><td>450</td><td>150</td><td>600 (Grand Total)</td></tr>
          </tbody>
        </table>
      </div>

      <p><strong>Step 1: Calculate Expected Frequencies $(E)$:</strong><br>
      $E = (\text{Row Total} \times \text{Col Total}) / \text{Grand Total}$. For Action/Snack: $(200 \times 450) / 600 = 150$. For Action/No Snack: $(200 \times 150) / 600 = 50$.</p>

      <p><strong>Step 2: Calculate $\chi^2$ Statistic:</strong></p>
      <div class="premium-math-block">
        \[ \chi^2 = \sum \frac{(O-E)^2}{E} = \frac{(150-150)^2}{150} + \frac{(50-50)^2}{50} + \frac{(120-150)^2}{150} + \frac{(80-50)^2}{50} + \frac{(180-150)^2}{150} + \frac{(20-50)^2}{50} = 0 + 0 + 6 + 18 + 6 + 18 = 48 \]
      </div>

      <p><strong>Step 3: Determine Significance:</strong></p>
      <div class="premium-callout success">
        <div class="premium-callout-icon">✓</div>
        <div class="premium-callout-body">$df = (3-1) \times (2-1) = 2$. At $\alpha = 0.05$, the critical value for $\chi^2$ with $df=2$ is $5.991$. Since $48 > 5.991$, we <strong>reject $H_0$</strong>. Movie type and snack purchases are significantly associated.</div>
      </div>
    </div>

    <!-- SECTION 8 -->
    <h2 id="ml-implications" class="premium-h2">Implications for Machine Learning and Large-Scale Experiments</h2>
    <p>In the modern machine learning ecosystem, inferential statistics is utilized to navigate the "high variance" environment of big data and complex models.</p>

    <h3 class="premium-h3">Experimentation Frameworks and Power Calculations</h3>
    <p>Companies like Airbnb leverage these concepts to build sophisticated experimentation platforms. When dealing with low conversion rates (e.g., 2–3%), detecting a 2% improvement in performance requires massive sample sizes and long durations to achieve 80% statistical power. Inferential techniques such as "interleaving"—where results from multiple ranking algorithms are shown simultaneously to a single user—use probability theory to reduce the required sample size and increase sensitivity. By applying statistical inference at the session level rather than the user level, they can determine superior performance far faster than traditional A/B testing.</p>

    <h3 class="premium-h3">Model Validation and Confidence Intervals</h3>
    <p>In predictive modeling, the reliability of a model is often more important than its raw accuracy. Inferential statistics allows data scientists to construct confidence intervals around model weights or evaluation metrics (such as the F1-score or RMSE). If a 95% confidence interval for a model's accuracy is broad (e.g., 0.70 to 0.90), it indicates that the model's performance is highly sensitive to the specific training data, suggesting a risk of overfitting. Conversely, a narrow interval suggests that the model is stable and likely to generalize well to new, unseen data.</p>
    <p>Furthermore, hypothesis testing is used to compare the performance of a new model architecture against a baseline. Using tests like the paired t-test on cross-validation results ensures that an observed increase in performance is not just a result of a "lucky" split of the data but represents a systematic improvement.</p>
    <h3 class="premium-h3">Numerical Lab: Python Implementation</h3>
    <python-code>
import numpy as np
from scipy import stats

# Wait times sample
data = np.random.normal(5.46, 2.47, 100)

# One-sample t-test
t_stat, p_val = stats.ttest_1samp(data, 6)
print(f"t-statistic: {t_stat:.4f}, p-value: {p_val:.4f}")
    </python-code>
  `,
};
