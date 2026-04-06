import { CategoryData } from '../src/data/types';
import { basicAxiomsSection } from './probability/basic-axioms';
import { bayesTheoremSection } from './probability/bayes-theorem';
import { randomVariablesSection } from './probability/random-variables';
import { expectationVarianceSection } from './probability/expectation-variance';
import { probabilityDistributionsSection } from './probability/probability-distributions';
import { multivariateProbabilitySection } from './probability/multivariate-probability';
import { lawsSection } from './probability/laws';
import { bayesMleSection } from './probability/bayes-mle';
import { bayesMleExamplesSection } from './probability/bayes-mle-examples';

// =============================================================================
// PROBABILITY (Foundational Content)
// =============================================================================
export const PROBABILITY_DATA: CategoryData = {
  id: "probability",
  title: "Probability",
  description: "Probability is the mathematical framework for quantifying uncertainty. In ML, it allows us to move beyond binary 'Yes/No' logic and embrace the nuanced reality of 'How likely is this?'.",
  keyConcepts: [
    { title: "Basic Axioms", description: "Sample spaces, Kolmogorov axioms, and the building blocks of uncertainty." },
    { title: "Bayes' Theorem", description: "Updating beliefs based on evidence: Posterior, Likelihood, and Priors." },
    { title: "Random Variables", description: "Discrete (PMF) vs. Continuous (PDF) mappings of stochastic processes." },
    { title: "Expectation & Variance", description: "Summarizing distributions: Center (Mean) and Spread (Variance/Covariance)." },
    { title: "Common Distributions", description: "Bernoulli, Gaussian, Poisson, and Laplace — the shapes of data." },
    { title: "Multivariate Probability", description: "Joint, Marginal, and Conditional distributions for feature vectors." },
    { title: "LLN & CLT", description: "The Law of Large Numbers and Central Limit Theorem: WHY samples work." },
    { title: "Estimation (MLE/MAP)", description: "Finding the 'best' parameters for a distribution using Likelihood." },
    { title: "Practical Inference", description: "Solved examples: Spam filtering and Bernoulli MLE coin tosses." }
  ],
  sections: [
    basicAxiomsSection,
    bayesTheoremSection,
    randomVariablesSection,
    expectationVarianceSection,
    probabilityDistributionsSection,
    multivariateProbabilitySection,
    lawsSection,
    bayesMleSection,
    bayesMleExamplesSection
  ]
};
