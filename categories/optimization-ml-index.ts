import { CategoryData } from '../src/data/types';
import { gradientDescentSection } from './optimization-ml/gradient-descent';
import { sgdSection } from './optimization-ml/sgd';
import { momentumSection } from './optimization-ml/momentum';
import { adamSection } from './optimization-ml/adam';
import { lrSchedulingSection } from './optimization-ml/lr-scheduling';

// =============================================================================
// OPTIMIZATION IN ML (The Engine of Model Convergence)
// =============================================================================
export const OPTIMIZATION_ML_DATA: CategoryData = {
  id: "optimization-ml",
  title: "Optimization in ML",
  description: "The mechanical iterative engines that minimize model error on massive datasets—from basic Gradient Descent to the adaptive Adam optimizer.",
  keyConcepts: [
    { title: "Iterative Descent", description: "Navigating the high-dimensional loss surface using the negative gradient." },
    { title: "Adaptive Learning", description: "Individual step sizes for every parameter based on volatility and direction." },
    { title: "Convergence Stability", description: "Using momentum and scheduling to prevent oscillations and overshooting." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Optimization: <span class="text-accent italic">The Engine of Learning</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In Machine Learning, we don't "solve" for the perfect answer. We <strong>Iterate</strong>. We start with random guesses and slowly, painfully, we "Roll" our parameters down a mathematical mountain until we find the <strong>Valley of Minimum Error</strong>.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          From the basic stability of Batch Gradient Descent to the high-speed "stumbling" of SGD and the adaptive precision of Adam, this category explores how machines actually <strong>Update their Beliefs</strong>. 
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "Optimization is the language of machine learning. If you can define a loss and find its gradient, you can train a machine to do anything."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Yann LeCun</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Start the descent toward perfection.</p>
        <a 
          href="/#/machine-learning/optimization-ml/gradient-descent" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin the Gradient Descent
        </a>
      </div>

    </div>
  `,
  sections: [
    gradientDescentSection,
    sgdSection,
    momentumSection,
    adamSection,
    lrSchedulingSection
  ]
};

