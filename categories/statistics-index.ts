import { CategoryData } from '../src/data/types';
import { descriptiveStatisticsSection } from './statistics/descriptive-statistics';
import { samplingResamplingSection } from './statistics/sampling-resampling';
import { inferentialStatisticsSection } from './statistics/inferential-statistics';
import { parameterEstimationSection } from './statistics/estimation';
import { regressionAnalysisSection } from './statistics/regression-analysis';
import { evaluationMetricsSection } from './statistics/metrics';
import { probabilityDistributionsSection } from './statistics/distributions';

// =============================================================================
// STATISTICS (Basics, Inference, Estimation, and Regression)
// =============================================================================
export const STATISTICS_DATA: CategoryData = {
  id: "statistics",
  title: "Statistics",
  description: "Statistics is the science of learning from data. In Machine Learning, it provides the tools for descriptive analysis, hypothesis testing, parameter estimation, and rigorous model evaluation.",
  keyConcepts: [
    { title: "Descriptive Statistics", description: "Measures of central tendency, spread, and information-theoretic uncertainty." },
    { title: "Probability Distributions", description: "The mathematical blueprints for Bernoulli, Binomial, Gaussian, and Bayesian priors." },
    { title: "Sampling & Resampling", description: "Bootstrapping, Cross-Validation, and population inference." },
    { title: "Inferential Statistics", description: "The mathematical theory of hypothesis testing, p-values, and confidence intervals." },
    { title: "Estimation Theory", description: "Maximum Likelihood (MLE) vs. Maximum A Posteriori (MAP) and the Bias-Variance tradeoff." },
    { title: "Regression Analysis", description: "The Ordinary Least Squares (OLS) framework, residuals, and R-squared." },
    { title: "Evaluation Metrics", description: "Probabilistic and information-theoretic measures of classification and regression performance." }
  ],
  sections: [
    descriptiveStatisticsSection,
    probabilityDistributionsSection,
    samplingResamplingSection,
    inferentialStatisticsSection,
    parameterEstimationSection,
    regressionAnalysisSection,
    evaluationMetricsSection
  ]
};
