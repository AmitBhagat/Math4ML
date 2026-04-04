import { CategoryData } from '../types';

// =============================================================================
// STATISTICS & PROBABILITY (Merged for Data Science Curriculum)
// =============================================================================
export const STATISTICS_DATA: CategoryData = {
  id: "statistics-probability",
  title: "Statistics & Probability",
  description: "The mathematical science of assessing uncertainty and drawing meaningful inferences from data distributions. It acts as the definitive backbone for predictive modeling and rigorous hypothesis validation.",
  keyConcepts: [
    { title: "Bayesian Inference", description: "Conditional probability and belief updating." },
    { title: "Probability Distributions", description: "Normal, Binomial, and Poisson variations." },
    { title: "Descriptive Stats", description: "Mean, variance, skewness, and kurtosis." },
    { title: "Inferential Stats", description: "Central Limit Theorem and population predictions." },
    { title: "Hypothesis Testing", description: "p-values, Significance, and Error Types." },
    { title: "Statistical Tests", description: "T-test, Z-test, ANOVA, and Chi-square." }
  ],
  sections: [
    {
      id: "BayesianInference",
      title: "Bayesian Inference",
      description: "Bayesian inference allows us to update the probability for a hypothesis as more evidence or information becomes available. It is the logical engine for Naive Bayes and probabilistic modeling.",
      formula: "P(H|E) = [P(E|H) P(H)] / P(E)",
      details: [
        "Conditional Probability: The likelihood of an event given another (P(A|B)).",
        "Bayes' Theorem: Reverses conditional probability for belief updating.",
        "Prior vs. Posterior: Initial belief vs. updated belief after seeing data."
      ],
      contentSections: [
        {
          heading: "Conditional Probability",
          paragraphs: [
            "P(A|B) measures the probability of A occurring, given that B has already happened. It effectively restricts the sample space to only outcomes where B is true.",
            "Formula: $P(A|B) = P(A \\cap B) / P(B)$",
            "In ML, this is used for classification: What is the probability a point belongs to Class X given its features?"
          ],
          code: "P_A_and_B = 0.1\nP_B = 0.4\nP_A_given_B = P_A_and_B / P_B\nprint('P(A|B):', P_A_given_B)",
          output: "P(A|B): 0.25"
        },
        {
          heading: "The Power of Bayes' Theorem",
          paragraphs: [
            "Bayes' Theorem provides a rigorous way to update probabilities as new evidence becomes available. It is the foundation of Bayesian machine learning.",
            "Components:",
            "- Posterior $P(H|E)$: Belief after seeing evidence.",
            "- Likelihood $P(E|H)$: Probability of evidence given hypothesis.",
            "- Prior $P(H)$: Initial belief before evidence.",
            "- Evidence $P(E)$: Total probability of the observed data."
          ],
          code: "# Medical Diagnosis Example\nP_D = 0.01  # Disease probability\nP_pos_given_D = 0.99  # True positive rate\nP_pos_given_notD = 0.05 # False positive rate\n\nP_notD = 1 - P_D\nP_pos = (P_pos_given_D * P_D) + (P_pos_given_notD * P_notD)\nP_D_given_pos = (P_pos_given_D * P_D) / P_pos\nprint('P(Disease|Positive Test):', round(P_D_given_pos, 4))",
          output: "P(Disease|Positive Test): 0.1664"
        }
      ],
      tags: ["Bayes", "Conditional", "Prior", "Inference"],
      level: "Advanced"
    },
    {
      id: "ProbabilityDistributions",
      title: "Probability Distributions",
      description: "Mathematical functions that provide the probabilities of occurrence of different possible outcomes in an experiment, essential for modeling uncertainty.",
      formula: "f(x) for PDF / p(x) for PMF",
      details: [
        "Normal (Gaussian): The bell curve, central to the Central Limit Theorem.",
        "Binomial: Discrete counts of successes in fixed trials.",
        "Poisson: Frequency of events occurring in fixed intervals."
      ],
      contentSections: [
        {
          heading: "The Bell Curve: Normal Distribution",
          paragraphs: [
            "The Normal (Gaussian) distribution is characterized by its mean ($\\mu$) and standard deviation ($\\sigma$). Because of the Central Limit Theorem, many natural phenomena and ML errors follow this distribution.",
            "The standard normal distribution features $\\mu=0$ and $\\sigma=1$."
          ],
          code: "from scipy.stats import norm\nimport numpy as np\n\n# Probability X < 1.96 standard deviations\nprint('P(X < 1.96):', round(norm.cdf(1.96), 4))",
          output: "P(X < 1.96): 0.975"
        },
        {
          heading: "Discrete Distributions (Binomial & Poisson)",
          paragraphs: [
            "Binomial: Used when there are exactly two outcomes (success/failure) over $n$ trials.",
            "Poisson: Used for count-based data (e.g., number of clicks on an ad) over time or space."
          ]
        }
      ],
      tags: ["Normal", "Gaussian", "Binomial", "Poisson"],
      level: "Intermediate"
    },
    {
      id: "DescriptiveStatistics",
      title: "Descriptive Statistics",
      description: "Summarizes the characteristics of a dataset without making predictions. Encompasses metrics for central tendency and dispersion.",
      formula: "Mean = \Sigma x/N, Variance = \Sigma(x-\mu)^2/N",
      details: [
        "Central Tendency: Mean, Median, Mode.",
        "Dispersion: Standard Deviation, Variance, IQR.",
        "Quantiles: Dividing data into intervals (quartiles, percentiles)."
      ],
      contentSections: [
        {
          heading: "Measures of Central Tendency",
          paragraphs: [
            "Mean: Average value, sensitive to outliers.",
            "Median: Middle value, robust to outliers.",
            "Mode: Most frequent outcome, useful for categorical labels."
          ],
          code: "import numpy as np\ndata = [10, 2, 38, 23, 38, 23, 21]\nprint('Mean:', np.mean(data))\nprint('Median:', np.median(data))",
          output: "Mean: 25.0, Median: 23.0"
        }
      ],
      tags: ["Mean", "Median", "Variance", "Quartiles"],
      level: "Beginner"
    },
    {
      id: "InferentialStatistics",
      title: "Inferential Statistics",
      description: "Enables drawing conclusions about a large population based on a smaller sample using probability theory.",
      formula: "Parameter \approx Statistic",
      details: [
        "Population: All objects of interest (e.g., all users).",
        "Sample: A representing subset (e.g., 1000 users).",
        "Central Limit Theorem: Ensures normality for large sample means."
      ],
      contentSections: [
        {
          heading: "Central Limit Theorem (CLT)",
          paragraphs: [
            "The CLT states that the distribution of sample means approaches a normal distribution as the sample size $n$ increases, even if the underlying population distribution is skewed.",
            "This property is why we can use Z-tests and T-tests on diverse datasets."
          ]
        }
      ],
      tags: ["Population", "Sample", "CLT"],
      level: "Intermediate"
    },
    {
      id: "ConfidenceIntervals",
      title: "Confidence Intervals",
      description: "A range of values that likely contains the true population parameter, providing a measure of estimation uncertainty.",
      formula: "CI = x\u0304 \pm Z(\sigma/\u221an)",
      details: [
        "95% Confidence: If we sample 100 times, 95 produced intervals would contain the true mean.",
        "Margin of Error: Quantifies the uncertainty of the sample mean estimate."
      ],
      contentSections: [
        {
          heading: "Constructing Intervals",
          paragraphs: [
            "The width of the interval depends on the sample size and the variance. Higher confidence (e.g., 99%) results in a wider interval."
          ],
          code: "from scipy import stats\ndata = [1, 2, 3, 2, 1, 2, 3, 4, 3, 2]\nmean, se = np.mean(data), stats.sem(data)\nci = stats.t.interval(0.95, len(data)-1, loc=mean, scale=se)\nprint('95% CI:', ci)",
          output: "95% CI: (1.64, 2.96)"
        }
      ],
      tags: ["Margin of Error", "Estimation", "t-dist"],
      level: "Intermediate"
    },
    {
      id: "SkewnessKurtosis",
      title: "Skewness and Kurtosis",
      description: "Measures that define the shape of a distribution and the weight of its tails (outliers).",
      formula: "Skew: \mu_3/\sigma^3, Kurtosis: \mu_4/\sigma^4",
      details: [
        "Skewness: Measures asymmetry (Left vs Right tailed).",
        "Kurtosis: Measures tail-heaviness (Leptokurtic vs Platykurtic)."
      ],
      contentSections: [
        {
          heading: "Asymmetry and Tails",
          paragraphs: [
            "Skewness tells us if data is concentrated on one side. Kurtosis tells us if outliers are rare or frequent (fat tails)."
          ],
          code: "from scipy.stats import skew, kurtosis\ndata = np.random.normal(0, 1, 1000)\nprint('Skew:', round(skew(data), 2), 'Kurt:', round(kurtosis(data), 2))",
          output: "Skew: 0.01, Kurt: -0.05"
        }
      ],
      tags: ["Asymmetry", "Tails", "Shape"],
      level: "Intermediate"
    },
    {
      id: "HypothesisTesting",
      title: "Hypothesis Testing",
      description: "A formal procedure for evaluating whether sample results support a claim about the population at large.",
      formula: "p-value \le \alpha \rightarrow Reject H_0",
      details: [
        "Null Hypothesis ($H_0$): Status quo/No effect.",
        "Significance Level ($\\alpha$): Tolerance for errors (usually 0.05).",
        "p-value: Probability of seeing the data if $H_0$ is true.",
        "Type I/II Errors: False Positives vs False Negatives."
      ],
      contentSections: [
        {
          heading: "p-values in Practice",
          paragraphs: [
            "A p-value < 0.05 indicates that the observed effect is statistically significant and unlikely to have occurred by chance alone."
          ]
        }
      ],
      tags: ["Significance", "p-value", "Errors"],
      level: "Advanced"
    },
    {
      id: "StatisticalTests",
      title: "Statistical Tests",
      description: "Standardized tests used to compare groups and identify relationships between variables.",
      formula: "T, Z, F, \chi^2",
      details: [
        "T-test: Compares means of two groups.",
        "Z-test: Compares means (large sample, known variance).",
        "ANOVA: Compares means across 3+ groups.",
        "Chi-square: Tests relationships between categorical features."
      ],
      contentSections: [
        {
          heading: "Choosing the Right Test",
          paragraphs: [
            "- T-test: Small samples (n < 30).",
            "- Z-test: Large samples.",
            "- ANOVA: Multi-group numeric data.",
            "- Chi-Square: Categorically dependent data."
          ],
          code: "from scipy.stats import ttest_ind\ng1 = [3, 4, 3, 2, 4]\ng2 = [10, 11, 12, 11, 10]\nprint('p-value:', ttest_ind(g1, g2).pvalue)",
          output: "p-value: 1.23e-07"
        }
      ],
      tags: ["T-test", "Z-test", "ANOVA", "Chi-square"],
      level: "Advanced"
    },
    {
      id: "Correlation",
      title: "Correlation",
      description: "Measures the strength and direction of the linear relationship between two variables.",
      formula: "\rho = Cov(X,Y) / (\sigma_x \sigma_y)",
      details: [
        "Pearson ($r$): Linear relationship strength (-1 to +1).",
        "Spearman ($\\rho$): Rank-based non-linear but monotonic relationships.",
        "Correlation \neq Causation: The golden rule of data analysis."
      ],
      contentSections: [
        {
          heading: "Pearson vs Spearman",
          paragraphs: [
            "Pearson is sensitive to outliers and linear trends. Spearman is robust and captures any increasing/decreasing trend."
          ],
          code: "from scipy.stats import pearsonr\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 5, 4, 5]\nprint('Pearson r:', round(pearsonr(x, y)[0], 3))",
          output: "Pearson r: 0.872"
        }
      ],
      tags: ["Pearson", "Spearman", "Causation"],
      level: "Intermediate"
    }
  ]
};
