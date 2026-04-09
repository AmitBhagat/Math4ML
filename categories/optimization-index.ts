import { CategoryData } from '../src/data/types';
import { gradientDescentSection } from './optimization/gradient-descent';
import { sgdSection } from './optimization/sgd';
import { convexOptimizationSection } from './optimization/convex-optimization';
import { regularizationSection } from './optimization/regularization';

// =============================================================================
// OPTIMIZATION (The Engine of Learning)
// =============================================================================
export const OPTIMIZATION_DATA: CategoryData = {
  id: "optimization",
  title: "Optimization",
  description: "Optimization is the iterative process of finding the optimal parameters for a model by minimizing a loss function on a multi-dimensional surface.",
  keyConcepts: [
    { title: "Gradient Descent", description: "Batch updates following the steepest downward path." },
    { title: "Stochastic Gradients", description: "Frequent, noisy updates using a mini-batch of data." },
    { title: "Convexity", description: "Guarantees of reaching the global minimum without local traps." },
    { title: "Regularization", description: "Geometric constraints to prevent model overfitting (L1, L2)." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Optimization: <span class="text-accent italic">The Path to Performance</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In Machine Learning, we don't just "solve" for the answer; we "search" for it. <strong>Optimization</strong> is the mathematical mechanism of improvement—the engine that powers everything from Linear Regression to Large Language Models.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This curriculum is broken into <strong>4 high-fidelity topics</strong>, moving from the basic mechanics of Gradient Descent to the advanced constraints of Regularization.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "We don't know the truth, but we know which way is down."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Optimization Proverb</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to descent?</p>
        <a 
          href="/#/mathematics/optimization/gradient-descent" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Gradient Descent
        </a>
      </div>

    </div>
  `,
  sections: [
    gradientDescentSection,
    sgdSection,
    convexOptimizationSection,
    regularizationSection
  ]
};

