import { CategoryData } from '../src/data/types';
import { bayesianNetworksSection } from './pgm/bayesian-networks';
import { hmmSection } from './pgm/hmm';
import { emAlgorithmSection } from './pgm/em-algorithm';

// =============================================================================
// PROBABILISTIC & GRAPHICAL MODELS (The Marriage of Geometry and Probability)
// =============================================================================
export const PGM_DATA: CategoryData = {
  id: "pgm",
  title: "Probabilistic & Graphical Models",
  description: "The marriage of graph theory and probability to model complex conditional dependencies and latent structures.",
  keyConcepts: [
    { title: "Network Representation", description: "Directed Acyclic Graphs (DAGs) for modeling influence and causality." },
    { title: "Sequence Modeling", description: "Markovian transitions and observable symptoms over time." },
    { title: "Likelihood Inference", description: "Solving 'Chicken and Egg' problems via Expectation-Maximization." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Probabilistic & Graphical Models: <span class="text-accent italic">The Web of Uncertainty</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In Machine Learning, variables are rarely independent. If a person has a cough, it might be the flu. If they have the flu, they might have a fever. <strong>Graphical Models</strong> allow us to map these <strong>Conditional Dependencies</strong> using the language of networks and graphs.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This category covers the core engines of structured probability—how to model causality, how to guess the "Hidden Reality" of sequences, and how to optimize models that depend on unobserved information. 
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "Graphical models are a marriage between probability theory and graph theory. They provide a natural tool for dealing with two problems that occur throughout applied mathematics... uncertainty and complexity."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Michael I. Jordan (1998)</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Start mapping the web of influence.</p>
        <a 
          href="/#/machine-learning/pgm/bayesian-networks" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Bayesian Networks
        </a>
      </div>

    </div>
  `,
  sections: [
    bayesianNetworksSection,
    hmmSection,
    emAlgorithmSection
  ]
};
