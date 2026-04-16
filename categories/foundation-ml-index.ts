import { CategoryData } from '../src/data/types';
import { whatIsMLSection } from './foundation-ml/what-is-ml';
import { typesOfMLSection } from './foundation-ml/types-of-ml';
import { supervisedLearningSection } from './foundation-ml/supervised';
import { unsupervisedLearningSection } from './foundation-ml/unsupervised';
import { semiSupervisedLearningSection } from './foundation-ml/semi-supervised';
import { reinforcementLearningSection } from './foundation-ml/reinforcement';
import { trainTestSplitSection } from './foundation-ml/train-test-split';
import { overfittingUnderfittingSection } from './foundation-ml/overfitting-underfitting';
import { biasVarianceTradeoffSection } from './foundation-ml/bias-variance-tradeoff';
import { crossValidationSection } from './foundation-ml/cross-validation';
import { featureEngineeringSection } from './foundation-ml/feature-engineering';
import { scalingNormalizationSection } from './foundation-ml/scaling-normalization';
import { evaluationMetricsSection } from './foundation-ml/evaluation-metrics';

// =============================================================================
// FOUNDATION OF MACHINE LEARNING (The Essential First Step)
// =============================================================================
export const FOUNDATION_ML_DATA: CategoryData = {
  id: "foundation-ml",
  title: "Foundation of Machine Learning",
  description: "The core principles, types, and fundamental concepts that provide the framework for all Machine Learning systems.",
  keyConcepts: [
    { title: "What is ML?", description: "Learning patterns from data vs. manual rule-based programming." },
    { title: "Learning Paradigms", description: "Supervised, Unsupervised, Semi-supervised, and Reinforcement Learning." },
    { title: "Model Performance", description: "The core trade-offs: Generalization vs. Overfitting and Bias vs. Variance." },
    { title: "Data Preparation", description: "The art of Feature Engineering and Scaling to maximize model insight." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Foundation of Machine Learning: <span class="text-accent italic">The Rules of the Game</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In Artificial Intelligence, we don't code the answers; we code the <strong>Process of Learning</strong>. Before we dive into complex architectures like Neural Networks or Transformers, we must master the <strong>Foundations</strong>—the concepts that govern how any machine learns anything.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This curriculum is broken into <strong>13 high-density topics</strong>, moving from the basic "What is ML?" to the sophisticated strategies we use to prepare data and evaluate accuracy in the real world.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Tom Mitchell (1997)</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to begin your journey?</p>
        <a 
          href="#/machine-learning/foundation-ml/what-is-ml" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Start with What is ML?
        </a>
      </div>

    </div>
  `,
  sections: [
    whatIsMLSection,
    typesOfMLSection,
    supervisedLearningSection,
    unsupervisedLearningSection,
    semiSupervisedLearningSection,
    reinforcementLearningSection,
    trainTestSplitSection,
    overfittingUnderfittingSection,
    biasVarianceTradeoffSection,
    crossValidationSection,
    featureEngineeringSection,
    scalingNormalizationSection,
    evaluationMetricsSection
  ]
};

