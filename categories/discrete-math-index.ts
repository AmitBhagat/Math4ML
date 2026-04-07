import { CategoryData } from '../src/data/types';
import { setTheorySection } from './discrete-math/set-theory';
import { logicSection } from './discrete-math/logic';
import { combinatoricsSection } from './discrete-math/combinatorics';
import { graphTheorySection } from './discrete-math/graph-theory';

// =============================================================================
// DISCRETE MATHEMATICS (Sets, Logic, and Counting)
// =============================================================================
export const DISCRETE_MATH_DATA: CategoryData = {
  id: "discrete-math",
  title: "Discrete Mathematics",
  description: "The study of discrete mathematical structures that form the foundation of computer science, algorithms, and symbolic AI.",
  keyConcepts: [
    { title: "Set Theory", description: "Collections of unique data points and their operations (Union, Intersection)." },
    { title: "Mathematical Logic", description: "Propositional and First-Order logic for automated reasoning." },
    { title: "Combinatorics", description: "Permutations, Combinations, and the Fundamental Counting Principle." },
    { title: "Graph Theory", description: "Nodes and Edges representing entities and their relationships." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Discrete Math: <span class="text-accent italic">The Logic of Intelligence</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          While standard neural networks often deal with continuous spaces, much of the world is structured as discrete entities. <strong>Discrete Mathematics</strong> is the language of logic, graphs, and the fundamental structures that govern how data is organized, searched, and connected.
        </p>
        
        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          From the Boolean logic that powers every CPU to the Graph Neural Networks (GNNs) that model social relationships, discrete structures are the bedrock of architectural design in computer science and AI. It provides the tools to move from simple vectors to complex topological networks.
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
          Intelligence requires structure. Discrete math provides the scaffolding for that structure.
        </p>

        <ul class="space-y-8 list-none pl-0">
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Relational Data</strong>
              <p class="text-muted-premium font-normal"><strong>Graph Theory</strong> allows us to model complex entities (like users, molecules, or pixels) as a network of nodes and edges, enabling the next generation of GNNs.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Symbolic Reasoning</strong>
              <p class="text-muted-premium font-normal">Machine Learning is merging with <strong>Symbolic Logic</strong>. Understanding propositional and first-order logic is key to building systems that can explain *why* they made a decision.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Combinatorial Complexity</strong>
              <p class="text-muted-premium font-normal">Algorithms often face "combinatorial explosions." Use <strong>Combinatorics</strong> to understand exactly how many ways a problem can be solved and how to prune the search space.</p>
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
          To build robust architectural logic, we will focus on these discrete pillars:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Set Theory</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">The foundation for all data manipulation, joins, and filtering in the ML pipeline.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Mathematical Logic</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Building the rules and constraints that govern complex decision-making systems.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Graph Theory</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Learning to see data as a network of relationships rather than a flat table.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Combinatorics</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Quantifying the 'possible' to optimize counting and resource allocation in algorithms.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Boolean Algebra</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">The low-level logic of computation that powers feature engineering and circuit design.</p>
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
          You will learn to see data as a network of relationships, moving from simple vectors to complex topological structures. We focus on the **logic of structure** and the fundamental rules of calculation.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "Discrete Mathematics is the backbone of computer science."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Ken Rosen</span>
          </div>
        </div>

        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          By the end of this module, you will understand how to build systems that don't just calculate, but *reason* about the connections within your data.
        </p>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to build structure?</p>
        <a 
          href="/#/mathematics/discrete-math/set-theory" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Set Theory
        </a>
      </div>

    </div>
  `,
  sections: [
    setTheorySection,
    logicSection,
    combinatoricsSection,
    graphTheorySection
  ]
};
