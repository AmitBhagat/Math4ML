import { CategoryData } from '../src/data/types';
import { descriptiveStatisticsSection } from './statistics/descriptive-statistics';
import { samplingResamplingSection } from './statistics/sampling-resampling';
import { inferentialStatisticsSection } from './statistics/inferential-statistics';
import { parameterEstimationSection } from './statistics/estimation';
import { regressionAnalysisSection } from './statistics/regression-analysis';
import { evaluationMetricsSection } from './statistics/metrics';
import { probabilityDistributionsSection } from './statistics/distributions';

// =============================================================================
// STATISTICS (Basics, Inference, Estimation, and Regression)
// =============================================================================
export const STATISTICS_DATA: CategoryData = {
  id: "statistics",
  title: "Statistics",
  description: "Statistics is the science of learning from data. In Machine Learning, it provides the tools for descriptive analysis, hypothesis testing, parameter estimation, and rigorous model evaluation.",
  keyConcepts: [
    { title: "Descriptive Statistics", description: "Measures of central tendency, spread, and information-theoretic uncertainty." },
    { title: "Probability Distributions", description: "The mathematical blueprints for Bernoulli, Binomial, Gaussian, and Bayesian priors." },
    { title: "Sampling & Resampling", description: "Bootstrapping, Cross-Validation, and population inference." },
    { title: "Inferential Statistics", description: "The mathematical theory of hypothesis testing, p-values, and confidence intervals." },
    { title: "Estimation Theory", description: "Maximum Likelihood (MLE) vs. Maximum A Posteriori (MAP) and the Bias-Variance tradeoff." },
    { title: "Regression Analysis", description: "The Ordinary Least Squares (OLS) framework, residuals, and R-squared." },
    { title: "Evaluation Metrics", description: "Probabilistic and information-theoretic measures of classification and regression performance." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Statistics: <span class="text-accent italic">The Science of Evidence</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          If Probability is the logic of future events, <strong>Statistics</strong> is the forensic analysis of past data. It provides the tools to validate whether nuestro models are actually learning meaningful patterns or just memorizing noise.
        </p>
        
        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          A model that works on your training set is useless if it doesn't generalize to the real world. Statistics gives us the rigor to measure "confidence" in nuestro results, the "significance" of nuestro discoveries, and the framework to evaluate model performance beyond simple accuracy.
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
          In the age of Big Data, the challenge isn't finding patterns—it's finding patterns that are *true*.
        </p>

        <ul class="space-y-8 list-none pl-0">
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Generalization & Inference</strong>
              <p class="text-muted-premium font-normal">We learn from a <strong>Sample</strong> to make statements about a <strong>Population</strong>. Statistics tells us how much we can trust that leap of faith.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Hypothesis Testing</strong>
              <p class="text-muted-premium font-normal">Is your model's 2% improvement real or just luck? Use <strong>p-values</strong> and <strong>Confidence Intervals</strong> to prove your results are statistically significant.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Model Integrity</strong>
              <p class="text-muted-premium font-normal">Techniques like <strong>Bootstrapping</strong> and <strong>Cross-Validation</strong> allow us to estimate the "true" error of nuestro models in the wild.</p>
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
          To perform high-stakes analysis, we will focus on these key areas:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Descriptive Statistics</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Beyond Mean and Median—understanding the spread and "skew" of your data.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Sampling Theory</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Mastering the Central Limit Theorem: WHY the world looks Gaussian at scale.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Hypothesis Testing</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Learning to set up Null Hypotheses and navigate Type I vs Type II errors.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Estimation (MLE/MAP)</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Fitting distributions to data by maximizing the likelihood of observations.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Regression Frameworks</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Analyzing relationships between variables using OLS and residuals analysis.</p>
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
          You will learn to perform rigorous model evaluation, transitioning from a "data enthusiast" to a "data scientist." We focus on the **logic of evidence** and the mathematical safeguards that prevent overfitting.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "Statistical thinking will one day be as necessary for efficient citizenship as the ability to read and write."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— H.G. Wells</span>
          </div>
        </div>

        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          By the end of this module, you redundant will possess the critical eye needed to deconstruct any model's claims and identify the "true" signals within the noise.
        </p>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to analyze?</p>
        <a 
          href="/#/mathematics/statistics/descriptive-statistics" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Descriptive Stats
        </a>
      </div>

    </div>
  `,
  sections: [
    descriptiveStatisticsSection,
    probabilityDistributionsSection,
    samplingResamplingSection,
    inferentialStatisticsSection,
    parameterEstimationSection,
    regressionAnalysisSection,
    evaluationMetricsSection
  ]
};
