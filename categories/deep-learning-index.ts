import { CategoryData } from '../src/data/types';
import { perceptronSection } from './deep-learning/perceptron';
import { mlpSection } from './deep-learning/mlp';
import { backpropagationSection } from './deep-learning/backpropagation';
import { activationsSection } from './deep-learning/activations';
import { lossFunctionsSection } from './deep-learning/loss-functions';
import { architecturesIntroSection } from './deep-learning/architectures-intro';
import { cnnSection } from './deep-learning/cnn';
import { rnnSection } from './deep-learning/rnn';
import { lstmGruSection } from './deep-learning/lstm-gru';
import { transformersSection } from './deep-learning/transformers';
import { gansSection } from './deep-learning/gans';

// =============================================================================
// NEURAL NETWORKS & DEEP LEARNING (The 11-Topic Advanced Curriculum)
// =============================================================================
export const DEEP_LEARNING_DATA: CategoryData = {
  id: "deep-learning",
  title: "Neural Networks & Deep Learning",
  description: "The mathematical engines of modern AI—from the singular Perceptron to the multi-head Attention mechanisms of Large Language Models.",
  keyConcepts: [
    { title: "Universal Approximation", description: "The power of layers and non-linearity to model any continuous function." },
    { title: "Backpropagation", description: "Iterative optimization via the systematic application of the Chain Rule." },
    { title: "Inductive Biases", description: "Architectural constraints for Space (CNN), Time (RNN), and Relationships (Attention)." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Deep Learning: <span class="text-accent italic">The Architecture of Thought</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          <strong>Deep Learning</strong> is the attempt to model the complexity of the world using layers of artificial neurons. From simple binary decisions to the contextual self-reflection of Transformers, this is the frontier where <strong>Mathematics</strong> becomes <strong>Intelligence</strong>.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This 11-topic curriculum starts at the atomic level of a single Perceptron and scales up to the massive, parallelized attention mechanisms that power modern Large Language Models. 
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "We are not just building software anymore. We are training systems that learn their own representations of reality."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Andrej Karpathy</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Dive into the deep architecture of intelligence.</p>
        <a 
          href="#/machine-learning/deep-learning/perceptron" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with The Perceptron
        </a>
      </div>

    </div>
  `,
  sections: [
    perceptronSection,
    mlpSection,
    backpropagationSection,
    activationsSection,
    lossFunctionsSection,
    architecturesIntroSection,
    cnnSection,
    rnnSection,
    lstmGruSection,
    transformersSection,
    gansSection
  ]
};

