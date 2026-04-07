import { CategoryData } from '../src/data/types';
import { entropySection } from './information-theory/entropy';
import { shannonEntropySection } from './information-theory/shannon-entropy';
import { klDivergenceSection } from './information-theory/kl-divergence';
import { crossEntropySection } from './information-theory/cross-entropy';
import { mutualInformationSection } from './information-theory/mutual-information';
import { informationTheoryExamplesSection } from './information-theory/examples';

// =============================================================================
// INFORMATION THEORY (Entropy, KL Divergence, and Cross-Entropy)
// =============================================================================
export const INFORMATION_THEORY_DATA: CategoryData = {
  id: "information-theory",
  title: "Information Theory",
  description: "Information Theory provides the mathematical foundation for quantifying uncertainty, measuring information flow, and designing optimal loss functions for Machine Learning models.",
  keyConcepts: [
    { title: "Self-Information", description: "Quantifying the 'surprise' or information in a single event." },
    { title: "Shannon Entropy", description: "The average uncertainty or randomness in a probability distribution." },
    { title: "KL Divergence", description: "Relative Entropy: measuring how much one distribution diverges from another." },
    { title: "Cross-Entropy", description: "The standard loss function for classification and language modeling." },
    { title: "Mutual Information", description: "Quantifying the dependency between different random variables." },
    { title: "Perplexity", description: "A measure of how well a probability model predicts a sample (common in NLP)." }
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
        
        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          Developed by Claude Shannon in 1948, this field provides the mathematical definition of <strong>Entropy</strong>—the foundation of the loss functions (like Cross-Entropy) used to train almost every modern classifier and Large Language Model.
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
          Information is the currency of learning. To maximize learning, we must maximize information gain.
        </p>

        <ul class="space-y-8 list-none pl-0">
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Loss Function Design</strong>
              <p class="text-muted-premium font-normal"><strong>Cross-Entropy</strong> isn't just a formula; it's a measure of the "extra bits" needed when nuestro model's predicted distribution deviates from the true labels.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Model Evaluation</strong>
              <p class="text-muted-premium font-normal">Metrics like <strong>Perplexity</strong> in NLP are directly derived from entropy, telling us how "confused" a model is by a sequence of data.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Information Flow</strong>
              <p class="text-muted-premium font-normal"><strong>Mutual Information</strong> allows us to quantify exactly how much one variable (like a feature) tells us about another (like the target label).</p>
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
          To understand the limits of what can be learned, we focus on these topics:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Shannon Entropy</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">The fundamental measure of uncertainty or "average surprise" in a system.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Kullback-Leibler Divergence</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Relative Entropy: measuring how much one distribution "diverges" from another.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Cross-Entropy Loss</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">The workhorse of classification training across almost all neural architectures.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Mutual Information</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Quantifying the 'dependency' or overlap between random variables.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Self-Information</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Calculating the information content of a single, specific event.</p>
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
          You will learn to measure the "information gain" of your model and understand why certain predictions are more informative than others. We move beyond simple statistics into the realm of **information physics.**
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

        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          By the end of this module, you will see that a neural network is essentially a massive compressor, trying to represent the world with the fewest bits possible while losing the least information.
        </p>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to measure surprise?</p>
        <a 
          href="/#/mathematics/information-theory/entropy" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Entropy Basics
        </a>
      </div>

    </div>
  `,
  sections: [
    entropySection,
    shannonEntropySection,
    klDivergenceSection,
    crossEntropySection,
    mutualInformationSection,
    informationTheoryExamplesSection
  ]
};
