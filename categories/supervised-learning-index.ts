import { CategoryData } from '../src/data/types';
import { regressionIntroSection } from './supervised-learning/regression-intro';
import { linearRegressionSection } from './supervised-learning/linear-regression';
import { ridgeRegressionSection } from './supervised-learning/ridge-regression';
import { lassoRegressionSection } from './supervised-learning/lasso-regression';
import { polynomialRegressionSection } from './supervised-learning/polynomial-regression';
import { classificationIntroSection } from './supervised-learning/classification-intro';
import { logisticRegressionSection } from './supervised-learning/logistic-regression';
import { naiveBayesSection } from './supervised-learning/naive-bayes';
import { knnSection } from './supervised-learning/knn';
import { svmSection } from './supervised-learning/svm';
import { decisionTreesSection } from './supervised-learning/decision-trees';
import { randomForestSection } from './supervised-learning/random-forest';
import { gradientBoostingSection } from './supervised-learning/gradient-boosting';
import { advancedBoostingSection } from './supervised-learning/advanced-boosting';

// =============================================================================
// SUPERVISED LEARNING (The 14-Topic Advanced Curriculum)
// =============================================================================
export const SUPERVISED_LEARNING_DATA: CategoryData = {
  id: "supervised-learning",
  title: "Supervised Learning",
  description: "Learn how machines use labeled data to predict continuous values and classify objects into discrete categories.",
  keyConcepts: [
    { title: "Regression Analysis", description: "Predicting continuous numbers: Linear, Ridge, Lasso, and Polynomial." },
    { title: "Classification Theory", description: "Sorting into groups: Logistic, Naive Bayes, KNN, and SVM." },
    { title: "Tree & Ensemble", description: "Combined wisdom: Decision Trees, Random Forests, and Gradient Boosting." },
    { title: "State-of-the-Art", description: "The heavyweight trio: XGBoost, LightGBM, and CatBoost." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Supervised Learning: <span class="text-accent italic">The Teacher's Path</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In <strong>Supervised Learning</strong>, every piece of data comes with a "Label" (the Answer). The machine's job is to build a mapping from <strong>Features</strong> to <strong>Targets</strong>, so it can solve the same problem later for data it has never seen. It is the most powerful and widely used branch of modern AI.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This comprehensive curriculum is broken into <strong>14 high-fidelity topics</strong>, covering classic statistics like Linear Regression to "Black Box" winners like XGBoost and CatBoost.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "The teacher's business is to help the learner to see the connections that unify knowledge into a coherent whole."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Alfred North Whitehead</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Start your journey through the 14 pillars of Supervised ML.</p>
        <a 
          href="/#/machine-learning/supervised-learning/regression-intro" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Regression Intro
        </a>
      </div>

    </div>
  `,
  sections: [
    regressionIntroSection,
    linearRegressionSection,
    ridgeRegressionSection,
    lassoRegressionSection,
    polynomialRegressionSection,
    classificationIntroSection,
    logisticRegressionSection,
    naiveBayesSection,
    knnSection,
    svmSection,
    decisionTreesSection,
    randomForestSection,
    gradientBoostingSection,
    advancedBoostingSection
  ]
};

