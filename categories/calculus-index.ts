import { CategoryData } from '../src/data/types';
import { derivativesSection } from './calculus/derivatives';
import { partialDerivativesSection } from './calculus/partial-derivatives';
import { gradientSection } from './calculus/gradient';
import { chainRuleSection } from './calculus/chain-rule';
import { jacobianSection } from './calculus/jacobian';
import { hessianSection } from './calculus/hessian';
import { taylorSeriesSection } from './calculus/taylor-series';
import { criticalPointsSection } from './calculus/critical-points';
import { integralsSection } from './calculus/integrals';

// =============================================================================
// CALCULUS (High-Fidelity 9-Topic Edition)
// =============================================================================
export const CALCULUS_DATA: CategoryData = {
  id: "calculus",
  title: "Calculus",
  description: "The mathematical engine for optimization, using derivatives and gradients to minimize model error and power backpropagation.",
  keyConcepts: [
    { title: "Differentiation", description: "Calculating instantaneous rates of change and sensitivity." },
    { title: "Partial Derivatives", description: "Handling variables in multi-dimensional loss surfaces." },
    { title: "The Gradient", description: "The compass that points towards reaching the minimum error." },
    { title: "Chain Rule", description: "Connecting layers for deep network backpropagation." },
    { title: "Jacobian & Hessian", description: "Information grids for sensitivity and curvature." },
    { title: "Optimization", description: "Finding local and global minima at critical points." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Calculus: <span class="text-accent italic">The Engine of Optimization</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In the world of Machine Learning, we don't just "calculate" answers; we "learn" them. <strong>Calculus</strong> provides the mechanism for improvement—the engine that powers Gradient Descent and Backpropagation.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This curriculum is broken into <strong>9 focused topics</strong>, moving from basic differentiation to advanced concepts like Jacobians, Hessians, and Integral Calculus.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "The derivative is the most powerful tool in the arsenal of the mathematician... and the engineer."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Classical Proverb</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to optimize?</p>
        <a 
          href="/#/mathematics/calculus/derivatives" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Differentiation
        </a>
      </div>

    </div>
  `,
  sections: [
    derivativesSection,
    partialDerivativesSection,
    gradientSection,
    chainRuleSection,
    jacobianSection,
    hessianSection,
    taylorSeriesSection,
    criticalPointsSection,
    integralsSection
  ]
};
