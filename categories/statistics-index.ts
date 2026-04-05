import { CategoryData } from '../src/data/types';
import { samplingDistributionsSection } from './statistics/sampling';
import { studentsTDistributionSection } from './statistics/student-t';
import { inferentialStatisticsSection } from './statistics/inferential-statistics';
import { parameterEstimationSection } from './statistics/estimation';
import { regressionAnalysisSection } from './statistics/regression-analysis';
import { metricsSection } from './statistics/metrics';

// =============================================================================
// STATISTICS (Inference, Estimation, and Regression)
// =============================================================================
export const STATISTICS_DATA: CategoryData = {
  id: "statistics",
  title: "Statistics",
  description: "Statistics is the science of learning from data. In Machine Learning, it provides the tools for hypothesis testing, parameter estimation, and rigorous model evaluation.",
  keyConcepts: [
    { title: "Sampling Theory", description: "Inferring population properties from subset data and the CLT." },
    { title: "Hypothesis Testing", description: "Rigorous framework for decision making using p-values and t-tests." },
    { title: "Estimation", description: "Finding the best-fitting parameters via MLE and MAP." },
    { title: "Regression", description: "Modeling relationships between variables and quantifying fit." },
    { title: "Evaluation Metrics", description: "Probabilistic and statistical measures of model performance." }
  ],
  sections: [
    samplingDistributionsSection,
    studentsTDistributionSection,
    inferentialStatisticsSection,
    parameterEstimationSection,
    regressionAnalysisSection,
    metricsSection
  ]
};
