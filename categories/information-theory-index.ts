import { CategoryData } from '../src/data/types';
import { entropySection } from './information-theory/entropy';
import { crossEntropySection } from './information-theory/cross-entropy';
import { klDivergenceSection } from './information-theory/kl-divergence';
import { mutualInformationSection } from './information-theory/mutual-information';

// =============================================================================
// INFORMATION THEORY (High-Fidelity 3-Topic Edition)
// =============================================================================
export const INFORMATION_THEORY_DATA: CategoryData = {
  id: "information-theory",
  title: "Information Theory",
  description: "Information Theory provides the mathematical foundation for quantifying uncertainty, measuring information flow, and designing optimal loss functions for Machine Learning models.",
  keyConcepts: [
    { title: "Entropy", description: "The fundamental measure of uncertainty or 'average surprise' in a system." },
    { title: "Cross-Entropy", description: "Measuring the distance between target and predicted distributions; the standard ML loss." },
    { title: "KL Divergence", description: "Information Loss: quantifying the structural gap between two probability models." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Information Theory: <span class="text-accent italic">The Physics of Data</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          At its core, every machine learning problem is a communication problem. <strong>Information Theory</strong> provides the fundamental limits on how much data can be compressed, how much "surprise" is contained in a prediction, and how we measure the distance between what a model thinks and what is true.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This curriculum is broken into <strong>3 high-density topics</strong>, focusing on the core measures used to train and evaluate modern neural architectures.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Claude Shannon</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to measure surprise?</p>
        <a 
          href="/#/mathematics/information-theory/entropy" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Entropy
        </a>
      </div>

    </div>
  `,
  sections: [
    entropySection,
    mutualInformationSection,
    crossEntropySection,
    klDivergenceSection
  ]
};

