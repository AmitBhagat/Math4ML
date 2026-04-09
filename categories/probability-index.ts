import { CategoryData } from '../src/data/types';
import { randomVariablesSection } from './probability/random-variables';
import { probabilityDistributionsSection } from './probability/probability-distributions';
import { jointDistributionsSection } from './probability/joint-distributions';
import { conditionalProbabilitySection } from './probability/conditional-probability';
import { independenceSection } from './probability/independence';
import { expectationSection } from './probability/expectation';
import { varianceSection } from './probability/variance';
import { lawOfLargeNumbersSection } from './probability/law-of-large-numbers';
import { centralLimitTheoremSection } from './probability/central-limit-theorem';
import { bayesTheoremSection } from './probability/bayes-theorem';

// =============================================================================
// PROBABILITY (High-Fidelity 10-Topic Edition)
// =============================================================================
export const PROBABILITY_DATA: CategoryData = {
  id: "probability",
  title: "Probability",
  description: "Probability is the mathematical framework for quantifying uncertainty. In ML, it allows us to move beyond binary 'Yes/No' logic and embrace the nuanced reality of 'How likely is this?'.",
  keyConcepts: [
    { title: "Random Variables", description: "Discrete (PMF) vs. Continuous (PDF) mappings of stochastic processes." },
    { title: "Distributions", description: "Bernoulli, Gaussian, and Poisson — the shapes of data." },
    { title: "Conditional Probability", description: "Updating beliefs based on evidence: Posterior, Likelihood, and Priors." },
    { title: "Independence", description: "The critical assumption that simplifies massive multi-feature models." },
    { title: "Expectation & Variance", description: "Summarizing distributions: Center (Mean) and Spread (Variance)." },
    { title: "LLN & CLT", description: "The Law of Large Numbers and Central Limit Theorem: WHY samples work." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Probability: <span class="text-accent italic">Mastering Uncertainty</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          Data is messy, noisy, and incomplete. <strong>Probability</strong> is the mathematical bridge that allows us to move from binary "Yes/No" thinking to the nuanced reality of modern AI.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This curriculum is broken into <strong>10 focused topics</strong>, moving from basic random variables to advanced inference with Bayes' Theorem and the Central Limit Theorem.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "Probability is the very guide of life."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Marcus Cicero</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to measure uncertainty?</p>
        <a 
          href="/#/mathematics/probability/random-variables" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Random Variables
        </a>
      </div>

    </div>
  `,
  sections: [
    randomVariablesSection,
    probabilityDistributionsSection,
    jointDistributionsSection,
    conditionalProbabilitySection,
    independenceSection,
    expectationSection,
    varianceSection,
    lawOfLargeNumbersSection,
    centralLimitTheoremSection,
    bayesTheoremSection
  ]
};

