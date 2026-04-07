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
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Probability: <span class="text-accent italic">Mastering Uncertainty</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          Data is messy, noisy, and incomplete. <strong>Probability</strong> is the mathematical bridge that allows us to move from binary "Yes/No" thinking to the nuanced reality of modern AI. It’s what allows a model to say "I am 87% sure this is a face."
        </p>
        
        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          Machine Learning is fundamentally about inference—using past evidence to make predictions about the unknown. Probability provides the formal framework to quantify exactly how much we know, how much we don't, and how our beliefs should change as new data arrives.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- Why It Matters -->
      <div class="space-y-10">
        <div class="flex items-center gap-4">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-accent font-semibold">Why It Matters</h3>
        </div>
        
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          Models don't just calculate values; they estimate likelihoods. Uncertainty is the only constant.
        </p>

        <ul class="space-y-8 list-none pl-0">
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Bayesian Reasoning</strong>
              <p class="text-muted-premium font-normal">We use <strong>Prior</strong> knowledge and new <strong>Evidence</strong> to calculate a <strong>Posterior</strong> belief. This is how models "update" their understanding of the world.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Stochastic Processes</strong>
              <p class="text-muted-premium font-normal">Many real-world systems are random. Understand <strong>Random Variables</strong> and <strong>Distributions</strong> to model the "inner life" of these physical and digital systems.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Expectation & Risk</strong>
              <p class="text-muted-premium font-normal">By calculating <strong>Expected Values</strong> and <strong>Variance</strong>, we can measure the potential "risk" or error in our model's predictions.</p>
            </div>
          </li>
        </ul>
      </div>

      <hr class="border-border-premium/50" />

      <!-- Core Concepts -->
      <div class="space-y-10">
        <div class="flex items-center gap-4">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-accent font-semibold">Core Concepts to Master</h3>
        </div>

        <p class="text-lg text-text-premium font-normal leading-relaxed">
          To build a strong probabilistic intuition, we will focus on these key pillars:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Bayes' Theorem</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">The cornerstone of probabilistic updating and belief propagation.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Probability Distributions</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">The "shapes" that data can take, from Normal/Gaussian to Bernoulli.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Joint & Marginal Probability</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Understanding how different features depend on or exclude one another.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Independence</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">The critical assumption that simplifies massive multi-feature models.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Likelihood vs. Probability</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">The distinction that powers Maximum Likelihood Estimation (MLE).</p>
          </div>
        </div>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <div class="flex items-center gap-4">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-accent font-semibold">What to Expect</h3>
        </div>

        <p class="text-lg text-text-premium font-normal leading-relaxed">
          We move beyond rolling dice and flipping coins. You will learn how to update your beliefs—and your model's weights—when new data arrives, transforming from a deterministic coder to a probabilistic master.
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

        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          By the end of this module, you'll see why a spam filter, a face recognizer, and a self-driving car all deal with the same fundamental currency: **Likelihood.**
        </p>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to measure uncertainty?</p>
        <a 
          href="/#/mathematics/probability/basic-axioms" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Basic Axioms
        </a>
      </div>

    </div>
  `,
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
