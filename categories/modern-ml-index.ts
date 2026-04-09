import { CategoryData } from '../src/data/types';
import { selfSupervisedSection } from './modern-ml/self-supervised';
import { transferLearningSection } from './modern-ml/transfer-learning';
import { representationSection } from './modern-ml/representation';
import { contrastiveSection } from './modern-ml/contrastive';

// =============================================================================
// MODERN ML TOPICS (The Frontiers of AI)
// =============================================================================
export const MODERN_ML_DATA: CategoryData = {
  id: "modern-ml",
  title: "Modern ML Topics",
  description: "Beyond traditional architectures—exploring the paradigms of Self-Supervised, Transfer, and Contrastive learning.",
  keyConcepts: [
    { title: "Self-Supervision", description: "Learning without human labels by solving innovative 'pretext' puzzles." },
    { title: "Knowledge Transfer", description: "Repurposing pre-trained global intelligence for specific downstream expertise." },
    { title: "Latent Embeddings", description: "The art of compressing high-dimensional reality into meaningful semantic vectors." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Modern ML: <span class="text-accent italic">The New Learning Paradigms</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          The era of labeling millions of images is ending. Modern AI learns from <strong>Existence</strong>. It solves puzzles, transfers its experience across domains, and organizes ideas in high-dimensional <strong>Latent Spaces</strong>.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This category covers the state-of-the-art techniques that power foundation models, from self-teaching through pretext tasks to the "jealous rivalry" of contrastive distancing.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "We don't need a teacher to learn to see. We need a way to find the structure that was already there. That is the essence of modern representation learning."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— The Modern Research Log</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Explore the frontiers of artificial intelligence.</p>
        <a 
          href="/#/machine-learning/modern-ml/self-supervised" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Self-Supervised Learning
        </a>
      </div>

    </div>
  `,
  sections: [
    selfSupervisedSection,
    transferLearningSection,
    representationSection,
    contrastiveSection
  ]
};

