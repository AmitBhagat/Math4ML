import { CategoryData } from "../src/data/types";
import { mdpSection } from "./reinforcement-learning/mdp";
import { qLearningSection } from "./reinforcement-learning/q-learning";

export const REINFORCEMENT_LEARNING_DATA: CategoryData = {
  id: "reinforcement-learning",
  title: "Reinforcement Learning",
  description: "Training agents to make sequences of decisions by rewarding desired behaviors and punishing undesired ones.",
  keyConcepts: [
    { title: "MDP Foundations", description: "The mathematical 5-tuple defining the learning environment." },
    { title: "Value-based Logic", description: "Bellman updates and Q-Learning for long-term optimization." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Reinforcement Learning: <span class="text-accent italic">The Science of Decisions</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In Reinforcement Learning, we don't just "predict"; we "act." It is the study of how an autonomous agent can learn to achieve goals in a complex world through trial, error, and delayed gratification.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This category covers the core engines of decision science—from the mathematical blueprints of Markov Decision Processes to the value-based algorithms that allow machines to solve mazes and master complex games.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "Reinforcement learning is the closest thing we have to how humans and animals actually learn... through the consequences of their actions."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— RL Maxim</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Start the exploration loop.</p>
        <a 
          href="#/machine-learning/reinforcement-learning/fundamentals" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with MDP Fundamentals
        </a>
      </div>

    </div>
  `,
  sections: [
    mdpSection,
    qLearningSection
  ]
};

