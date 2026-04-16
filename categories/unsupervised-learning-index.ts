import { CategoryData } from '../src/data/types';
import { kmeansSection } from './unsupervised-learning/kmeans';
import { hierarchicalSection } from './unsupervised-learning/hierarchical';
import { dbscanSection } from './unsupervised-learning/dbscan';
import { gmmSection } from './unsupervised-learning/gmm';
import { dimReductionIntroSection } from './unsupervised-learning/dim-reduction-intro';
import { pcaSection } from './unsupervised-learning/pca';
import { tsneSection } from './unsupervised-learning/tsne';
import { umapSection } from './unsupervised-learning/umap';
import { autoencodersSection } from './unsupervised-learning/autoencoders';
import { anomalyDetectionSection } from './unsupervised-learning/anomaly-detection';

// =============================================================================
// UNSUPERVISED LEARNING (The 9-Topic Advanced Curriculum)
// =============================================================================
export const UNSUPERVISED_LEARNING_DATA: CategoryData = {
  id: "unsupervised-learning",
  title: "Unsupervised Learning",
  description: "Extracting patterns, hidden tribes, and structural essence from data that has no labels.",
  keyConcepts: [
    { title: "Clustering Algorithms", description: "Finding the hidden tribes: k-Means, Hierarchical, DBSCAN, and GMM." },
    { title: "Dimension Reduction", description: "Squashing information: PCA, t-SNE, and UMAP." },
    { title: "Neural Manifolds", description: "Learning latent essentials: Autoencoders and Deep Embeddings." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Unsupervised Learning: <span class="text-accent italic">The Art of Discovery</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In <strong>Unsupervised Learning</strong>, there is no teacher. No labels. No "Right Answer." The machine must look at the raw geometry of the data and find the <strong>Hidden Structure</strong> that defines it. It is the most challenging and creatively expressive field of Machine Learning.
        </p>
      </div>

      <hr class="border-border-premium/50" />

        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This comprehensive curriculum is broken into <strong>10 high-fidelity topics</strong>, starting with simple geometric partitioning (k-Means) and ending with complex neural architectures (Autoencoders). 
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "The goal of unsupervised learning is to create a compact, efficient, and useful representation of the world without the need for manual labels."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Yann LeCun</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Start exploring the hidden patterns of the universe.</p>
        <a 
          href="#/machine-learning/unsupervised-learning/kmeans" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with k-Means Clustering
        </a>
      </div>

    </div>
  `,
  sections: [
    kmeansSection,
    hierarchicalSection,
    dbscanSection,
    gmmSection,
    dimReductionIntroSection,
    pcaSection,
    tsneSection,
    umapSection,
    autoencodersSection,
    anomalyDetectionSection
  ]
};

