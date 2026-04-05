# Theoretical Foundations and Mathematical Frameworks of Inferential Statistics for Machine Learning

The evolution of data science from a descriptive discipline to a
predictive and inferential one represents a critical paradigm shift in
how organizations leverage information to drive strategy and model
development. While descriptive statistics allow researchers to document
observed phenomena through measures of central tendency and dispersion,
inferential statistics provide the mathematical bridge required to
generalize findings from a subset of data to an entire population. In
the context of machine learning, these methods are indispensable for
validating model performance, conducting rigorous A/B testing, and
ensuring that detected patterns represent true underlying relationships
rather than stochastic noise. This report provides an exhaustive
exploration of the theoretical underpinnings, mathematical derivations,
and practical applications of inferential statistics, focusing on
hypothesis testing, p-values, t-tests, chi-square analysis, and
confidence intervals.

## The Epistemology of Statistical Inference

Statistical inference is the process of using data analysis to deduce
properties of an underlying probability distribution. It is predicated
on the assumption that the observed dataset is a sample drawn from a
larger, often unobservable, population. The logic of inference rests on
the relationship between parameters---numerical characteristics of a
population, such as the mean (\\mu) or standard deviation
(\\sigma)---and statistics, which are the corresponding characteristics
calculated from a sample, such as the sample mean (\\bar{x}) or sample
standard deviation (s).

Because measuring an entire population is typically impractical due to
constraints on time, cost, or accessibility, researchers rely on
representative samples to estimate these unknown parameters. A
representative sample mirrors the properties of the parent population, a
condition best achieved through probability sampling methods such as
simple random sampling, stratified sampling, or cluster sampling.
Randomization serves a dual purpose: it ensures that every individual in
the population has an equal probability of selection, thereby minimizing
selection bias, and it provides the probabilistic foundation for
quantifying the uncertainty of the resulting estimates. When samples are
not random, such as in convenience sampling, the internal and external
validity of the study are compromised, leading to biased estimates that
are systematically too high or too low.

The transformation from sample statistics to population inferences is
governed by the Central Limit Theorem (CLT). The CLT posits that for a
sufficiently large sample size (typically n \\geq 30), the sampling
distribution of the sample mean will be approximately normally
distributed, regardless of the shape of the original population
distribution. This convergence allows for the application of normal
probability theory to calculate the likelihood of observing a specific
sample result, forming the basis for both hypothesis testing and the
construction of confidence intervals.

  -----------------------------------------------------------------------
  Concept           Population        Sample            Description
                    (Parameter)       (Statistic)       
  ----------------- ----------------- ----------------- -----------------
  **Mean**          \\mu              \\bar{x}          The central value
                                                        of the data
                                                        distribution.

  **Standard        \\sigma           s                 The average
  Deviation**                                           distance of data
                                                        points from the
                                                        mean.

  **Variance**      \\sigma\^2        s\^2              The average of
                                                        the squared
                                                        deviations from
                                                        the mean.

  **Proportion**    p                 \\hat{p}          The frequency of
                                                        an event divided
                                                        by the total
                                                        count.
  -----------------------------------------------------------------------

## The Mathematical Theory of Hypothesis Testing

Hypothesis testing is a formal statistical framework for deciding
whether sample data provide sufficient evidence to support a specific
claim about a population parameter. The process is fundamentally rooted
in the concept of falsification; as argued by Karl Popper, the goal is
often not to verify a hypothesis but to attempt to refute it through
observation and experiment.

### The Dual Philosophies of Significance and Decisions

Modern hypothesis testing integrates two distinct historical
methodologies: Ronald Fisher's theory of p-values and Jerzy Neyman and
Egon Pearson's theory of decision rules.

Fisher's approach focuses on the p-value as a continuous measure of
evidence against the null hypothesis (H_0). He viewed the p-value as the
probability of obtaining a result at least as extreme as the one
observed, assuming H_0 is true. In this paradigm, the lower the p-value,
the stronger the evidence against the null hypothesis, suggesting that
either a very rare event has occurred or the null hypothesis is
incorrect. Fisher's methodology was primarily *a posteriori*,
calculating evidence after the experiment was conducted.

In contrast, the Neyman-Pearson framework is *a priori* and
decision-oriented. It introduces an alternative hypothesis (H_1 or H_a)
and treats hypothesis testing as a rule of behavior designed to limit
the long-run frequency of errors. Researchers specify a significance
level (\\alpha) and a desired power (1-\\beta) before collecting data,
establishing a critical region. If the test statistic falls within this
region, the null hypothesis is rejected in favor of the alternative.
This approach acknowledges that while any single test might be wrong,
the methodology ensures that errors are bounded over many repeated
experiments.

### Error Rates and Statistical Power

Every hypothesis test involves the risk of two types of errors, which
exist in an inverse relationship controlled by the decision threshold.

- **Type I Error (\\alpha):** This is a false positive, occurring when
  the researcher rejects a null hypothesis that is actually true. The
  probability of this error is set by the significance level, typically
  \\alpha = 0.05, indicating a 5% acceptable risk of falsely concluding
  an effect exists.

- **Type II Error (\\beta):** This is a false negative, occurring when
  the researcher fails to reject a null hypothesis that is actually
  false. This error implies that a real effect or relationship was
  missed due to insufficient data or high noise.

Statistical power (1-\\beta) is the probability of correctly rejecting a
false null hypothesis---essentially the ability of a test to detect an
effect when one exists. Power is influenced by the sample size, the
effect size (the magnitude of the difference being studied), the
significance level, and the measurement error. In machine learning
contexts, such as A/B testing, low power often necessitates larger
sample sizes to detect meaningful improvements in metrics like
conversion rates or click-through rates.

  -----------------------------------------------------------------------
  Decision Result         Null Hypothesis is True Null Hypothesis is
                                                  False
  ----------------------- ----------------------- -----------------------
  **Fail to Reject H_0**  Correct Decision        Type II Error (\\beta -
                          (Confidence Level       False Negative)
                          1-\\alpha)              

  **Reject H_0**          Type I Error (\\alpha - Correct Decision (Power
                          False Positive)         1-\\beta)
  -----------------------------------------------------------------------

## The Student's t-Test: Derivation and Application

The Student's t-test is a cornerstone of inferential statistics,
specifically designed for testing hypotheses about means when the
population standard deviation is unknown. It was developed by William
Sealy Gosset in 1908 while working at the Guinness Brewery, where he
used the pseudonym \"Student\" to publish his findings.

### Mathematical Derivation of the t-Distribution

The t-distribution arises as the sampling distribution of the
t-statistic. If we take n independent and identically distributed
(i.i.d.) samples X_1, X_2, \\dots, X_n from a normal distribution with
mean \\mu and variance \\sigma\^2, the sample mean \\bar{X} is normally
distributed as N(\\mu, \\sigma\^2/n). When \\sigma is known, the
standardized variable Z follows a standard normal distribution:

However, when \\sigma is unknown, we estimate it using the unbiased
sample standard deviation s = \\sqrt{\\sum (X_i - \\bar{X})\^2 / (n-1)}.
The resulting statistic is:

The t-distribution is defined as the ratio of a standard normal random
variable Z \\sim N(0,1) to the square root of a chi-squared random
variable V \\sim \\chi\^2(\\nu) divided by its degrees of freedom \\nu :

The probability density function (PDF) of the t-distribution with \\nu
degrees of freedom is given by:

where \\Gamma is the Gamma function. The t-distribution is symmetric and
bell-shaped like the normal distribution but has \"heavier tails,\"
meaning there is a higher probability of observing values far from the
mean. This increased tail area accounts for the additional uncertainty
introduced by estimating the population variance from a small sample. As
the degrees of freedom \\nu = n-1 increase, the t-distribution
approaches the standard normal distribution, becoming nearly identical
for n \> 300.

### Variations of the t-Test in Experimental Design

Depending on the research design and the nature of the samples,
practitioners utilize three primary versions of the t-test.

1.  **One-Sample t-Test:** This compares the mean of a single sample to
    a known or hypothesized population mean \\mu_0. For example,
    verifying if a batch of chocolate bars meets a weight standard of 50
    grams.

    - Test Statistic: t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}} with df
      = n-1.

2.  **Independent Samples t-Test (Two-Sample t-Test):** This evaluates
    whether the means of two unrelated groups are significantly
    different. It is commonly used in A/B testing to compare a control
    group and a treatment group.

    - **Case A: Equal Variances (Student\'s t-test):** Assumes
      \\sigma_1\^2 = \\sigma_2\^2. It uses a pooled variance s_p\^2 :
      The statistic is t = \\frac{\\bar{x}\_1 -
      \\bar{x}\_2}{\\sqrt{s_p\^2(1/n_1 + 1/n_2)}} with df = n_1+n_2-2.

    - **Case B: Unequal Variances (Welch's t-test):** This is more
      robust when variances or sample sizes differ. The degrees of
      freedom are calculated using the Satterthwaite approximation :

3.  **Paired Samples t-Test (Dependent Samples t-Test):** This compares
    means from the same group at two different times or under two
    different conditions, such as \"before\" and \"after\" an
    intervention. The test is mathematically equivalent to a one-sample
    t-test performed on the differences within each pair.

    - Test Statistic: t = \\frac{\\bar{d}}{s_d/\\sqrt{n}} where \\bar{d}
      is the mean of the differences and n is the number of pairs.

## Pearson's Chi-Square Test: Foundations for Categorical Analysis

While t-tests are appropriate for continuous data, categorical variables
require non-parametric methods that analyze frequency counts. The
chi-square (\\chi\^2) test, developed by Karl Pearson, is the primary
tool for assessing differences between observed frequencies and those
expected under a specific null hypothesis.

### Mathematical Framework and Distribution

The chi-square test statistic is defined as the sum of the normalized
squared differences between observed (O) and expected (E) counts across
k categories :

The derivation of this statistic is linked to the multinomial
distribution. For a set of n observations divided into k mutually
exclusive categories with probabilities p_i, the probability of
observing a configuration \\{n_i\\} is given by the multinomial formula
:

As n \\to \\infty, the distribution of the Pearson statistic approaches
the theoretical \\chi\^2 distribution with \\nu degrees of freedom. The
\\chi\^2 distribution is positively skewed, starts at zero, and its mean
is equal to its degrees of freedom. As degrees of freedom increase, the
\\chi\^2 distribution increasingly resembles a normal distribution.

### Chi-Square Goodness-of-Fit and Independence

Two major applications of the chi-square test dominate statistical
practice.

- **Goodness-of-Fit Test:** This evaluates whether a sample distribution
  follows a hypothesized theoretical distribution. For instance, a
  researcher might test if flavor preferences in candy are evenly
  distributed (uniform distribution).

  - Expected counts are calculated as E_i = n \\times p_i, where p_i is
    the probability specified by H_0.

  - Degrees of Freedom: df = k - 1 - m, where m is the number of
    parameters estimated from the data to fit the distribution.

- **Test of Independence:** This assesses whether two categorical
  variables are related or independent of each other. It is typically
  applied to contingency tables where rows represent categories of one
  variable and columns represent another.

  - Null Hypothesis (H_0): The two variables are independent (no
    association).

  - Expected Frequencies: Under independence, the probability of an
    observation in row r and column c is P(R) \\times P(C). Thus:

  - Degrees of Freedom: df = (r-1)(c-1). This formula reflects the
    number of cells in the grid that can vary freely before the marginal
    totals determine the remaining values.

  ------------------------------------------------------------------------------
  Test Type             Requirement       Data Type            Null Hypothesis
  --------------------- ----------------- -------------------- -----------------
  **Goodness-of-Fit**   One categorical   Frequencies/Counts   Sample matches a
                        variable                               specified
                                                               distribution.

  **Independence**      Two categorical   Contingency Table    No relationship
                        variables                              between the
                                                               variables.
  ------------------------------------------------------------------------------

## The Mathematical Construction of Confidence Intervals

A confidence interval is an inferential procedure used to estimate a
population parameter with a specified level of certainty. Unlike a point
estimate, which provides a single value (such as the sample mean), a
confidence interval provides a range of plausible values that likely
contain the true population parameter.

### Standard Form and Margin of Error

Symmetric confidence intervals based on the normal or t-distribution
generally follow the form:

The Margin of Error (MOE) is the distance from the estimate to the
boundaries of the interval. It is calculated as the product of a
critical value (z\^\* or t\^\*) and the standard error (SE) of the
statistic :

The critical value corresponds to the chosen confidence level
(1-\\alpha). For a 95% confidence level, \\alpha = 0.05, and we seek the
value that captures the central 95% of the distribution. For the
standard normal distribution, this value is z\_{0.025} = 1.96.

### Confidence Interval for a Mean (\\mu)

1.  **Known \\sigma or Large n:** This interval uses the standard normal
    distribution and is justified by the Central Limit Theorem when n
    \\geq 30.

2.  **Unknown \\sigma and Small n:** This interval uses the Student\'s
    t-distribution with n-1 degrees of freedom to account for the
    uncertainty in estimating \\sigma from s.

### Confidence Interval for a Proportion (p)

When estimating the true proportion of a trait in a population (e.g.,
the proportion of users who prefer a new feature), the sample proportion
\\hat{p} = x/n is the point estimate. The standard deviation of a
Bernoulli random variable is \\sqrt{p(1-p)}, making the standard error
of the sampling distribution of proportions :

The standard Wald interval for a proportion is:

This approximation is valid only if the sample size is large enough to
satisfy the success-failure condition: n\\hat{p} \\geq 10 and
n(1-\\hat{p}) \\geq 10. For smaller samples or extreme proportions, the
Wilson score interval or Agresti-Coull interval provides more accurate
coverage.

  -----------------------------------------------------------------------
  Factor                  Change                  Effect on CI Width
  ----------------------- ----------------------- -----------------------
  **Confidence Level**    Increase (e.g., 95% to  Increases (Wider
                          99%)                    interval)

  **Sample Size (n)**     Increase                Decreases (Narrower
                                                  interval)

  **Variability (s or     Increase                Increases (Wider
  \\sigma)**                                      interval)
  -----------------------------------------------------------------------

## Bridging Hypothesis Testing and Estimation

Hypothesis tests and confidence intervals are not isolated procedures;
they are two sides of the same inferential coin. There is a formal
algebraic correspondence between a two-tailed hypothesis test and a
confidence interval for the same parameter.

### The Equivalence Theorem

A null hypothesis H_0: \\mu = \\mu_0 will be rejected at significance
level \\alpha if and only if the hypothesized value \\mu_0 lies outside
the (1-\\alpha)100\\% confidence interval.

For example, if we perform a two-tailed test at \\alpha = 0.05 and find
that the 95% confidence interval for the mean is (34.02, 35.98), and our
hypothesized value was \\mu_0 = 33, we would reject the null hypothesis
because 33 is not contained in the interval. If the confidence interval
contains zero when testing for a difference in means, it implies that we
cannot reject the null hypothesis of \"no difference\" at that
significance level.

This relationship allows researchers to interpret confidence intervals
as a set of all possible null hypothesis values that would *not* be
rejected by the current data. In machine learning model evaluation, this
is particularly useful; rather than just knowing if a model is better
than a baseline (p-value), the confidence interval tells us *how much*
better it might be and whether that difference is practically
significant.

## Case Studies and Explained Solutions

The following examples demonstrate the practical execution of
inferential methods using data structures common in research and
industry.

### Example 1: One-Sample t-Test for Wait Times

A bank manager implements a new system and wants to test if the average
waiting time is now less than the previous standard of 6 minutes.

**Data:** Sample size n = 100. Sample mean \\bar{x} = 5.46 minutes.
Sample standard deviation s = 2.475 minutes.

**Step 1: State Hypotheses:** H_0: \\mu = 6 H_a: \\mu \< 6 (One-sided
lower tail test).

**Step 2: Compute Test Statistic:**

**Step 3: Determine P-value:** Using df = n-1 = 99. For t = -2.18, the
p-value is approximately 0.0146.

**Step 4: Decision:** At \\alpha = 0.05, since 0.0146 \\leq 0.05, we
reject H_0. *Conclusion:* There is sufficient evidence at the 5% level
to conclude that the average waiting time is significantly less than 6
minutes.

### Example 2: Chi-Square Test of Independence for Snack Sales

A theater owner analyzes 600 moviegoers to see if snack purchases are
independent of movie type.

**Observed Contingency Table (O):**

  -----------------------------------------------------------------------
  Movie Type        Snack Bought      No Snack          Row Totals
  ----------------- ----------------- ----------------- -----------------
  **Action**        150               50                200

  **Comedy**        120               80                200

  **Horror**        180               20                200

  **Col Totals**    450               150               600 (Grand Total)
  -----------------------------------------------------------------------

**Step 1: Calculate Expected Frequencies (E):** E = (\\text{Row Total}
\\times \\text{Col Total}) / \\text{Grand Total}. For Action/Snack: (200
\\times 450) / 600 = 150. For Action/No Snack: (200 \\times 150) / 600 =
50. (Calculations repeat for other rows given equal row totals).

**Step 2: Calculate \\chi\^2 Statistic:**

**Step 3: Determine Significance:** df = (3-1) \\times (2-1) = 2. At
\\alpha = 0.05, the critical value for \\chi\^2 with df=2 is 5.991.
*Conclusion:* Since 48 \> 5.991, we reject H_0. Movie type and snack
purchases are significantly associated.

## Implications for Machine Learning and Large-Scale Experiments

In the modern machine learning ecosystem, inferential statistics is
utilized to navigate the \"high variance\" environment of big data and
complex models.

### Experimentation Frameworks and Power Calculations

Companies like Airbnb leverage these concepts to build sophisticated
experimentation platforms. When dealing with low conversion rates (e.g.,
2-3%), detecting a 2% improvement in performance requires massive sample
sizes and long durations to achieve 80% statistical power. Inferential
techniques such as \"interleaving\"---where results from multiple
ranking algorithms are shown simultaneously to a single user---use
probability theory to reduce the required sample size and increase
sensitivity. By applying statistical inference at the session level
rather than the user level, they can determine superior performance far
faster than traditional A/B testing.

### Model Validation and Confidence Intervals

In predictive modeling, the reliability of a model is often more
important than its raw accuracy. Inferential statistics allows data
scientists to construct confidence intervals around model weights or
evaluation metrics (such as the F1-score or RMSE). If a 95% confidence
interval for a model\'s accuracy is broad (e.g., 0.70 to 0.90), it
indicates that the model\'s performance is highly sensitive to the
specific training data, suggesting a risk of overfitting. Conversely, a
narrow interval suggests that the model is stable and likely to
generalize well to new, unseen data.

Furthermore, hypothesis testing is used to compare the performance of a
new model architecture against a baseline. Using tests like the paired
t-test on cross-validation results ensures that an observed increase in
performance is not just a result of a \"lucky\" split of the data but
represents a systematic improvement.

## Summary and Recommendations

The mastery of inferential statistics is a prerequisite for any
data-driven professional seeking to draw valid conclusions from data.
The theoretical pillars of probability sampling and the Central Limit
Theorem provide the foundation for generalizing findings from a sample
to a population. Hypothesis testing offers a rigorous framework for
decision-making under uncertainty, allowing researchers to control error
rates and quantify the strength of evidence through p-values. The
Student's t-test and Pearson's chi-square test provide specialized tools
for analyzing continuous and categorical data, respectively, each
supported by robust mathematical derivations.

Finally, confidence intervals provide a nuanced alternative to binary
decisions, offering a range of plausible values for parameters that
highlight both the magnitude and precision of an effect. By integrating
these methods, machine learning practitioners can move beyond
descriptive documenting to robust, evidence-based prediction and
optimization, ensuring that their models and strategies are grounded in
statistical truth rather than transient noise.

#### Works cited

1\. Chapter 6.2: Introduction to Inferential Statistics and Probability
Foundations,
https://express.excelsior.edu/datascience/chapter/6-2-introduction-to-inferential-statistics-and-probability-foundations/
2. Inferential Statistics - The Decision Lab,
https://thedecisionlab.com/reference-guide/statistics/inferential-statistics
3. Statistical inference - Wikipedia,
https://en.wikipedia.org/wiki/Statistical_inference 4. An Introduction
to t Tests \| Definitions, Formula and Examples - Scribbr,
https://www.scribbr.com/statistics/t-test/ 5. Basic Inferential
Statistics: Theory and Application - Purdue OWL,
https://owl.purdue.edu/owl/research_and_citation/using_research/writing_with_statistics/basic_inferential_statistics.html
6. Populations, Parameters, and Samples in Inferential Statistics,
https://statisticsbyjim.com/basics/populations-parameters-samples-inferential-statistics/
7. Confidence Intervals for Means and Proportions,
http://www.thphys.nuim.ie/Notes/EE304/Notes/LEC12/CISlides.pdf 8.
Confidence Intervals and Levels \| Educational Research Basics by Del
Siegle,
https://researchbasics.education.uconn.edu/confidence-intervals-and-levels/
9. Confidence Intervals - Utah State University,
https://www.usu.edu/math/schneit/StatsStuff/Inference/confidenceintervals
10. Margin of error - Wikipedia,
https://en.wikipedia.org/wiki/Margin_of_error 11. Hypothesis Testing,
https://www.math.wm.edu/\~leemis/statistics/samplepages/page355.pdf 12.
Hypothesis testing, type I and type II errors - PMC - NIH,
https://pmc.ncbi.nlm.nih.gov/articles/PMC2996198/ 13. P Value and the
Theory of Hypothesis Testing: An Explanation for \...,
https://pmc.ncbi.nlm.nih.gov/articles/PMC2816758/ 14. Understanding
P-Values and Statistical Significance - Simply Psychology,
https://www.simplypsychology.org/p-value.html 15. 9 Hypothesis Tests,
https://www.colorado.edu/amath/sites/default/files/attached-files/lesson9_hyptests.pdf
16. Type I & Type II Errors \| Differences, Examples, Visualizations -
Scribbr, https://www.scribbr.com/statistics/type-i-and-type-ii-errors/
17. Type I and type II errors - Wikipedia,
https://en.wikipedia.org/wiki/Type_I_and_type_II_errors 18. Student\'s
t-test - Wikipedia, https://en.wikipedia.org/wiki/Student%27s_t-test 19.
The Differences and Similarities Between Two-Sample T-Test and Paired
T-Test - PMC, https://pmc.ncbi.nlm.nih.gov/articles/PMC5579465/ 20.
Statistical notes for clinical researchers: the independent samples
t-test - PMC - NIH, https://pmc.ncbi.nlm.nih.gov/articles/PMC6713081/
21. Student\'s t-Distribution \-- from Wolfram MathWorld,
https://mathworld.wolfram.com/Studentst-Distribution.html 22. Student\'s
t-distribution - Wikipedia,
https://en.wikipedia.org/wiki/Student%27s_t-distribution 23. Paired
Sample T-Test - Statistics Solutions,
https://www.statisticssolutions.com/free-resources/directory-of-statistical-analyses/paired-sample-t-test/
24. Understanding Confidence Intervals \| Easy Examples & Formulas -
Scribbr, https://www.scribbr.com/statistics/confidence-interval/ 25.
Student\'s t Distribution \| Request PDF - ResearchGate,
https://www.researchgate.net/publication/301991970_Student\'s_t_Distribution
26. t-Test: A Comprehensive Tutorial for Beginners - Statistics
Calculator, https://numiqo.com/tutorial/t-test 27. Paired t-Test - JMP,
https://www.jmp.com/en/statistics-knowledge-portal/inferential-statistics/hypothesis-testing/paired-t-test
28. Lesson 1: Hypothesis tests and Confidence Intervals for 2 \...,
https://uwaterloo.ca/scholar/sites/ca.scholar/files/gydong/files/afm_113_week_9_lessons.pdf
29. 1. Confidence Intervals/Hypothesis tests: - Purdue Department of
Statistics,
https://www.stat.purdue.edu/\~lfindsen/stat503/SASProject2.pdf 30.
Chi-Square Goodness of Fit Test \| Formula, Guide & Examples - Scribbr,
https://www.scribbr.com/statistics/chi-square-goodness-of-fit/ 31. The
Chi-square test of independence - PMC - NIH,
https://pmc.ncbi.nlm.nih.gov/articles/PMC3900058/ 32. Tutorial:
Pearson\'s Chi-square Test for Independence,
https://www.ling.upenn.edu/\~clight/chisquared.htm 33. Chi-Square Test
of Independence \| Formula, Guide & Examples - Scribbr,
https://www.scribbr.com/statistics/chi-square-test-of-independence/ 34.
Pearson\'s chi-squared test - Wikipedia,
https://en.wikipedia.org/wiki/Pearson%27s_chi-squared_test 35.
Chi-Square Test: Formula, Types, & Examples - Simplilearn.com,
https://www.simplilearn.com/tutorials/statistics-tutorial/chi-square-test
36. The Chi-Square Independence Test • SOGA-R • Department of Earth
\...,
https://www.geo.fu-berlin.de/en/v/soga-r/Basics-of-statistics/Hypothesis-Tests/Chi-Square-Tests/Chi-Square-Independence-Test/index.html
37. Chapter 12: Chi-Square Tests of Independence and Goodness-of-Fit,
https://sites.geography.unt.edu/\~wolverton/ChiSquare.pdf 38. Chi-Square
Goodness of Fit Test Introduction to Statistics - JMP,
https://www.jmp.com/en/statistics-knowledge-portal/linear-models/chi-square-test/chi-square-goodness-of-fit-test
39. Chi-Square Test of Independence - JMP,
https://www.jmp.com/en/statistics-knowledge-portal/linear-models/chi-square-test/chi-square-test-of-independence
40. Understanding the Chi-Square Test of Independence - Statistics
Solutions,
https://www.statisticssolutions.com/free-resources/directory-of-statistical-analyses/chi-square/
41. How the Chi-Squared Test of Independence Works - Statistics By Jim,
https://statisticsbyjim.com/hypothesis-testing/chi-squared-independence/
42. Degrees of Freedom in Statistics,
https://statisticsbyjim.com/hypothesis-testing/degrees-freedom-statistics/
43. Using the confidence interval confidently - PMC - NIH,
https://pmc.ncbi.nlm.nih.gov/articles/PMC5723800/ 44. Margin of Error:
Formula and Interpreting - Statistics By Jim,
https://statisticsbyjim.com/hypothesis-testing/margin-of-error/ 45.
Margin of Error - MathBitsNotebook(A2),
https://mathbitsnotebook.com/Algebra2/Statistics/STmarginError.html 46.
Five Confidence Intervals for Proportions That You Should Know About,
https://towardsdatascience.com/five-confidence-intervals-for-proportions-that-you-should-know-about-7ff5484c024f/
47. Confidence Intervals - Department of Mathematics and Statistics,
http://math.bu.edu/people/pseal/Class%20Notes1.pdf 48. Confidence
intervals and margin of error (video) - Khan Academy,
https://www.khanacademy.org/math/ap-statistics/xfb5d8e68:inference-categorical-proportions/introduction-confidence-intervals/v/confidence-intervals-and-margin-of-error
49. Conditions for valid confidence intervals for a proportion (video) -
Khan Academy,
https://www.khanacademy.org/math/ap-statistics/xfb5d8e68:inference-categorical-proportions/one-sample-z-interval-proportion/v/conditions-for-valid-confidence-intervals
50. Confidence Interval and Hypothesis Testing: Exercises and Solutions,
https://faculty.ksu.edu.sa/sites/default/files/Exercises%20CI%20and%20HT.pdf
51. 7.1.5. What is the relationship between a test and a confidence
\..., https://www.itl.nist.gov/div898/handbook/prc/section1/prc15.htm
52. 6.6 - Confidence Intervals & Hypothesis Testing \| STAT 200 -
Statistics Online, https://online.stat.psu.edu/stat200/lesson/6/6.6 53.
The Relationship Between Hypothesis Testing and Confidence Intervals,
https://towardsdatascience.com/the-relationship-between-hypothesis-testing-and-confidence-intervals-43196f1b44bf/
54. Relationship between Hypothesis Testing and Confidence intervals -
math.binghamton.edu,
https://www2.math.binghamton.edu/lib/exe/fetch.php/people/renfrew/448-3-30.pdf
55. Link Between Confidence Intervals and Hypothesis Testing: Videos &
Practice Problems,
https://www.pearson.com/channels/statistics/learn/patrick/9-hypothesis-testing-for-one-sample/link-between-confidence-intervals-and-hypothesis-testing
56. STAT 101: In-class problems on confidence intervals,
https://www2.stat.duke.edu/\~jerry/sta101/confidenceintervalsans.html
