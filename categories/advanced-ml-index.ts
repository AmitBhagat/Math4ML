import { CategoryData } from '../src/data/types';
import { ensembleIntroSection } from './advanced-ml/ensemble-intro';
import { baggingSection } from './advanced-ml/bagging';
import { boostingSection } from './advanced-ml/boosting';
import { stackingSection } from './advanced-ml/stacking';
import { recommendersSection } from './advanced-ml/recommenders';
import { diffusionModelsSection } from './advanced-ml/diffusion-models';

// =============================================================================
// ADVANCED MACHINE LEARNING (The Power of Ensembles)
// =============================================================================
export const ADVANCED_ML_DATA: CategoryData = {
  id: "advanced-ml",
  title: "Advanced ML Topics",
  description: "Beyond individual algorithms—from the synergy of Ensemble methods to the generative power of Recommenders and Diffusion models.",
  keyConcepts: [
    { title: "Ensemble Synergy", description: "Reducing error by combining models through Bagging, Boosting, and Stacking." },
    { title: "Taste & Preferences", description: "Mapping latent desire through Collaborative Filtering and Matrix Factorization." },
    { title: "Generative Diffusion", description: "Creating high-fidelity data by iteratively un-scrambling chaos from pure noise." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Advanced ML: <span class="text-accent italic">The Synergy of Many</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In Machine Learning, <strong>1 + 1 = 3</strong>. By combining multiple "Weak Learners"—models that are only slightly better than random guessing—we can create "Strong Learners" that are nearly perfect. This is the <strong>Mathematics of Cooperation</strong>.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This category dives into the three pillars of ensemble theory: the parallel safety of Bagging, the sequential intensity of Boosting, and the meta-intelligence of Stacking.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "The best way to get a reliable answer is to ask a hundred experts and let them battle it out."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— The Kaggle Winner's Handbook</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Start building your council of experts.</p>
        <a 
          href="/#/machine-learning/advanced-ml/ensemble-intro" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Ensemble Theory
        </a>
      </div>

    </div>
  `,
  sections: [
    ensembleIntroSection,
    baggingSection,
    boostingSection,
    stackingSection,
    recommendersSection,
    diffusionModelsSection
  ]
};

