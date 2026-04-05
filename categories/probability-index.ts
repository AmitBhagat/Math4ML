import { CategoryData } from '../src/data/types';
import { probabilityBasicsSection } from './statistics/basics';
import { probabilityEventsSection } from './statistics/events';
import { probabilityRulesSection } from './statistics/rules';
import { jointMarginalConditionalSection } from './statistics/joint-marginal-conditional';
import { bayesTheoremSection } from './statistics/bayes';
import { distributionsSection } from './statistics/distributions';

// =============================================================================
// PROBABILITY (Foundational Content)
// =============================================================================
export const PROBABILITY_DATA: CategoryData = {
  id: "probability",
  title: "Probability",
  description: "Probability is the mathematical framework for quantifying uncertainty. In ML, it allows us to move beyond binary 'Yes/No' logic and embrace the nuanced reality of 'How likely is this?'.",
  keyConcepts: [
    { title: "Probability Basics", description: "Sample spaces, experiments, and simple outcomes (Coins & Dice)." },
    { title: "Types of Events", description: "Impossible, Sure, Independent, and Dependent events." },
    { title: "Probability Rules", description: "Addition, Multiplication, and Complement rules for outcome calculation." },
    { title: "Joint & Marginal", description: "Simultaneous vs. isolated variable probabilities and conditional logic." },
    { title: "Bayes Theorem", description: "Updating beliefs based on evidence, the core of Naive Bayes classifiers." },
    { title: "Distributions", description: "11 distinct distributions (Normal, Binomial, Poisson, etc.) for data modeling." }
  ],
  sections: [
    probabilityBasicsSection,
    probabilityEventsSection,
    probabilityRulesSection,
    jointMarginalConditionalSection,
    bayesTheoremSection,
    distributionsSection
  ]
};
