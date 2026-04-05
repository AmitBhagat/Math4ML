import { CategoryData } from '../src/data/types';
import { inferentialStatisticsSection } from './statistics/inferential-statistics';
import { parameterEstimationSection } from './statistics/estimation';
import { regressionAnalysisSection } from './statistics/regression-analysis';
import { evaluationMetricsSection } from './statistics/metrics';

// =============================================================================
// STATISTICS (Inference, Estimation, and Regression)
// =============================================================================
export const STATISTICS_DATA: CategoryData = {
  id: "statistics",
  title: "Statistics",
  description: "Statistics is the science of learning from data. In Machine Learning, it provides the tools for hypothesis testing, parameter estimation, and rigorous model evaluation.",
  keyConcepts: [
    { title: "Inferential Statistics", description: "The mathematical theory of hypothesis testing, p-values, and confidence intervals." },
    { title: "Estimation Theory", description: "Maximum Likelihood (MLE) vs. Maximum A Posteriori (MAP) and the Bias-Variance tradeoff." },
    { title: "Regression Analysis", description: "The Ordinary Least Squares (OLS) framework, BLUE optimality, and model diagnostics." },
    { title: "Evaluation Metrics", description: "Probabilistic and information-theoretic measures of classification and regression performance." }
  ],
  sections: [
    inferentialStatisticsSection,
    parameterEstimationSection,
    regressionAnalysisSection,
    evaluationMetricsSection
  ]
};
