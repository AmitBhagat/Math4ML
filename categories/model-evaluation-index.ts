import { CategoryData } from '../src/data/types';
import { confusionMatrixSection } from './model-evaluation/confusion-matrix';
import { precisionSection } from './model-evaluation/precision';
import { recallSection } from './model-evaluation/recall';
import { f1ScoreSection } from './model-evaluation/f1-score';
import { rocCurveSection } from './model-evaluation/roc-curve';
import { aucSection } from './model-evaluation/auc';

// =============================================================================
// MODEL EVALUATION (The Science of Success and Failure)
// =============================================================================
export const MODEL_EVALUATION_DATA: CategoryData = {
  id: "model-evaluation",
  title: "Model Evaluation",
  description: "Rigorous metrics and validation strategies to assess model performance and ensure generalization to new data.",
  keyConcepts: [
    { title: "The Truth Table", description: "Using Confusion Matrices to expose the exact nature of prediction errors." },
    { title: "Precision-Recall Balance", description: "Optimizing the trade-off between false alarms and missed detections." },
    { title: "Separation Power", description: "Quantifying global model performance across all possible thresholds via AUC." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Model Evaluation: <span class="text-accent italic">The Reality Check</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          Accuracy is often a lie. A model that predicts "Healthy" for every patient might be 99% accurate but it is 100% useless. To truly understand if a model works, we must look at <strong>Confusion</strong>, <strong>Precision</strong>, and the <strong>Area Under Curve</strong>.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This category covers the six essential pillars of classification evaluation—moving beyond simple counts into the nuanced world of threshold analysis and diagnostic thoroughness.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "If you only look at accuracy, you are flying blind. Evaluation is the art of knowing exactly how and why your model is failing."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— The Applied ML Rulebook</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Start digging into the truth of your predictions.</p>
        <a 
          href="#/machine-learning/model-evaluation/confusion-matrix" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with the Confusion Matrix
        </a>
      </div>

    </div>
  `,
  sections: [
    confusionMatrixSection,
    precisionSection,
    recallSection,
    f1ScoreSection,
    rocCurveSection,
    aucSection
  ]
};

