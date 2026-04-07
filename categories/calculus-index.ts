import { CategoryData } from '../src/data/types';
import { basicsSection } from './calculus/basics';
import { neuralNetworksSection } from './calculus/neural-networks';
import { neuralNetworksExamplesSection } from './calculus/neural-networks-examples';
import { multivariableSection } from './calculus/multivariable';
import { integralsSection } from './calculus/integrals';
import { optimizationSection } from './calculus/optimization';
import { vectorCalculusSection } from './calculus/vector-calculus';

export const CALCULUS_DATA: CategoryData = {
  id: "calculus",
  title: "Calculus",
  description: "The mathematical engine for optimization, using derivatives and gradients to minimize model error and power backpropagation.",
  keyConcepts: [
    { title: "Differentiation", description: "Calculating instantaneous rates of change." },
    { title: "Partial Derivatives", description: "Handling variables in multi-dimensional space." },
    { title: "Gradients", description: "Vectors of change used in optimization." },
    { title: "Gradient Descent", description: "Iterative minimization of loss functions." },
    { title: "Chain Rule", description: "The foundation of neural network backpropagation." },
    { title: "Jacobian & Hessian", description: "Coordinate transforms and second-order optimization." },
    { title: "Area Under Curve", description: "Integration and model evaluation (AUC-ROC)." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Calculus: <span class="text-accent italic">The Engine of Optimization</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In the world of Machine Learning, we don't just "calculate" answers; we "learn" them. If Linear Algebra provides the coordinate system for nuestro data, <strong>Calculus</strong> provides the mechanism for improvement. It is the mathematical engine that powers Gradient Descent and Backpropagation.
        </p>
        
        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          Training a neural network is essentially a massive optimization problem—finding the minimum point of a complex, high-dimensional surface. Calculus allows us to navigate this surface, determining exactly how to adjust millions of weights to minimize error.
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
          Optimization is the heart of learning. Without Calculus, we would be guessing in the dark. 
        </p>

        <ul class="space-y-8 list-none pl-0">
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Loss Minimization</strong>
              <p class="text-muted-premium font-normal">We define a "Loss Function" to measure error. Calculus tells us the <strong>Gradient</strong>—the direction of steepest ascent—so we can move in the opposite direction to reduce error.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Backpropagation</strong>
              <p class="text-muted-premium font-normal">The <strong>Chain Rule</strong> is the secret sauce of deep learning. It allows us to calculate how a small change in an early weight affects the final output across hundreds of layers.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Model Convergence</strong>
              <p class="text-muted-premium font-normal">Understanding second-order derivatives (Hessians) helps us navigate "saddle points" and ensure our models actually reach their optimal states.</p>
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
          To master the mechanics of AI training, we focus on these critical areas:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Partial Derivatives</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Handling millions of variables simultaneously while focusing on one at a time.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">The Gradient Vector</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Visualizing the compass that points toward the "peak" of a function.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Chain Rule</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">The mathematical backbone for training deep architectural structures.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Jacobian Matrices</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Scaling derivatives to vector-valued functions for complex layers.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Hessian & Curvature</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Understanding the "shape" of the loss surface to speed up learning.</p>
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
          On this page, we move beyond the rote memorization of derivative tables. We focus on the <strong>geometry of change</strong>. You will learn to see a loss function not just as a formula, but as a landscape that your model must navigate.
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

        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          By the end of this module, you will understand exactly why models learn, why they fail, and how to tune the "learning rate" by reading the landscape of error.
        </p>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to optimize?</p>
        <a 
          href="/#/mathematics/calculus/basics" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Differentiation
        </a>
      </div>

    </div>
  `,
  sections: [
    basicsSection,
    neuralNetworksSection,
    neuralNetworksExamplesSection,
    multivariableSection,
    integralsSection,
    optimizationSection,
    vectorCalculusSection
  ]
};
