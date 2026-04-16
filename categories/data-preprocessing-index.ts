import { CategoryData } from "../src/data/types";
import { dataPreprocessingIntroSection } from "./data-preprocessing/intro";
import { featureScalingSection } from "./data-preprocessing/feature-scaling";
import { categoricalEncodingSection } from "./data-preprocessing/categorical-encoding";
import { missingDataSection } from "./data-preprocessing/missing-data";

export const DATA_PREPROCESSING_DATA: CategoryData = {
  id: "data-preprocessing",
  title: "Data Preprocessing",
  description: "The fine art of data cleaning and transformation required to turn raw noise into high-fidelity mathematical signals.",
  keyConcepts: [
    { title: "Standardization", description: "Leveling the playing field for features of different magnitudes." },
    { title: "Vectorization", description: "Translating human labels and text into a language machines can process." },
    { title: "Signal Recovery", description: "Identifying and repairing holes in the data to maintain integrity." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Data Preprocessing: <span class="text-accent italic">The Invisible Engine</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In Machine Learning, <strong>Garbage In, Garbage Out</strong> is the only law. Before we can build complex neural architectures, we must first master the art of <strong>Refining</strong> our raw ingredients. This is the unglamorous but essential work that defines the ceiling of your model's performance.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          From the geometry of Feature Scaling to the binary logic of Categorical Encoding, this cluster covers the critical steps needed to prepare real-world data for mathematical modeling.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "More data beats a cleverer algorithm, but better data beats more data."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Peter Norvig</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Start refining your data refinery.</p>
        <a 
          href="#/machine-learning/data-preprocessing/intro" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Preprocessing Intro
        </a>
      </div>

    </div>
  `,
  sections: [
    dataPreprocessingIntroSection,
    featureScalingSection,
    categoricalEncodingSection,
    missingDataSection
  ]
};

