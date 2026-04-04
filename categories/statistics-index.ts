import { CategoryData } from '../src/data/types';
import { probabilityBasicsSection } from './statistics/basics';
import { probabilityEventsSection } from './statistics/events';
import { probabilityRulesSection } from './statistics/rules';
import { jointMarginalConditionalSection } from './statistics/joint-marginal-conditional';
import { bayesTheoremSection } from './statistics/bayes';
import { distributionsSection } from './statistics/distributions';
import { samplingDistributionsSection } from './statistics/sampling';
import { studentsTDistributionSection } from './statistics/student-t';

// =============================================================================
// STATISTICS & PROBABILITY (Modularized Content)
// =============================================================================
export const STATISTICS_DATA: CategoryData = {
  id: "statistics-probability",
  title: "Probability & Statistics",
  description: "Probability and Statistics are the foundation of machine learning, enabling models to handle uncertainty and make data-driven predictions.",
  keyConcepts: [
    { title: "Probability Basics", description: "Sample spaces, experiments, and simple outcomes (Coins & Dice)." },
    { title: "Types of Events", description: "Impossible, Sure, Independent, and Dependent events." },
    { title: "Probability Rules", description: "Addition, Multiplication, and Complement rules for outcome calculation." },
    { title: "Joint & Marginal", description: "Simultaneous vs. isolated variable probabilities and conditional logic." },
    { title: "Bayes Theorem", description: "Updating beliefs based on evidence, the core of Naive Bayes classifiers." },
    { title: "Data Distributions", description: "11 distinct distributions (Normal, Binomial, Poisson, etc.) for data modeling." },
    { title: "Sampling Theory", description: "Estimation of population parameters and the Central Limit Theorem." },
    { title: "Student's t-test", description: "Statistical inference for small samples with unknown variance." }
  ],
  sections: [
    probabilityBasicsSection,
    probabilityEventsSection,
    probabilityRulesSection,
    jointMarginalConditionalSection,
    bayesTheoremSection,
    distributionsSection,
    samplingDistributionsSection,
    studentsTDistributionSection
  ]
};
