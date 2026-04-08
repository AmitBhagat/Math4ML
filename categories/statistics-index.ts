import { CategoryData } from '../src/data/types';
import { mleSection } from './statistics/mle';
import { mapSection } from './statistics/map';
import { biasVarianceSection } from './statistics/bias-variance';
import { hypothesisTestingSection } from './statistics/hypothesis-testing';
import { confidenceIntervalsSection } from './statistics/confidence-intervals';

// =============================================================================
// STATISTICS (High-Fidelity 5-Topic Edition)
// =============================================================================
export const STATISTICS_DATA: CategoryData = {
  id: "statistics",
  title: "Statistics",
  description: "Statistics is the science of learning from data. In Machine Learning, it provides the tools for descriptive analysis, hypothesis testing, parameter estimation, and rigorous model evaluation.",
  keyConcepts: [
    { title: "MLE & MAP", description: "Finding the 'best' parameters for a distribution using Likelihood and Priors." },
    { title: "Bias-Variance Tradeoff", description: "The fundamental struggle between underfitting (Simplicity) and overfitting (Wildness)." },
    { title: "Hypothesis Testing", description: "Proving if an effect is real or just noise using T-Tests, Chi-Square, and ANOVA." },
    { title: "Confidence Intervals", description: "Measuring the precision of our estimates and the 'Margin of Error'." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Statistics: <span class="text-accent italic">The Science of Evidence</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          If Probability is the logic of future events, <strong>Statistics</strong> is the forensic analysis of past data. It provides the tools to validate whether our models are actually learning meaning or just memorizing noise.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This curriculum is broken into <strong>5 high-density topics</strong>, focused on the transition from "data enthusiast" to "data scientist."
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "Statistical thinking will one day be as necessary for efficient citizenship as the ability to read and write."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— H.G. Wells</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to analyze?</p>
        <a 
          href="/#/mathematics/statistics/mle" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with MLE
        </a>
      </div>

    </div>
  `,
  sections: [
    mleSection,
    mapSection,
    biasVarianceSection,
    hypothesisTestingSection,
    confidenceIntervalsSection
  ]
};
