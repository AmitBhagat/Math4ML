import { CategoryData } from '../src/data/types';
import { entropySection } from './information-theory/entropy';
import { shannonEntropySection } from './information-theory/shannon-entropy';
import { klDivergenceSection } from './information-theory/kl-divergence';
import { crossEntropySection } from './information-theory/cross-entropy';
import { mutualInformationSection } from './information-theory/mutual-information';
import { informationTheoryExamplesSection } from './information-theory/examples';

// =============================================================================
// INFORMATION THEORY (Entropy, KL Divergence, and Cross-Entropy)
// =============================================================================
export const INFORMATION_THEORY_DATA: CategoryData = {
  id: "information-theory",
  title: "Information Theory",
  description: "Information Theory provides the mathematical foundation for quantifying uncertainty, measuring information flow, and designing optimal loss functions for Machine Learning models.",
  keyConcepts: [
    { title: "Self-Information", description: "Quantifying the 'surprise' or information in a single event." },
    { title: "Shannon Entropy", description: "The average uncertainty or randomness in a probability distribution." },
    { title: "KL Divergence", description: "Relative Entropy: measuring how much one distribution diverges from another." },
    { title: "Cross-Entropy", description: "The standard loss function for classification and language modeling." },
    { title: "Mutual Information", description: "Quantifying the dependency between different random variables." },
    { title: "Perplexity", description: "A measure of how well a probability model predicts a sample (common in NLP)." }
  ],
  sections: [
    entropySection,
    shannonEntropySection,
    klDivergenceSection,
    crossEntropySection,
    mutualInformationSection,
    informationTheoryExamplesSection
  ]
};
