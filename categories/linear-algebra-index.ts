import { CategoryData } from '../src/data/types';
import { vectorsSection } from './linear-algebra/vectors';
import { vectorSpacesSection } from './linear-algebra/vector-spaces';
import { linearIndependenceSection } from './linear-algebra/linear-independence';
import { basisDimensionSection } from './linear-algebra/basis-dimension';
import { dotProductSection } from './linear-algebra/dot-product';
import { vectorNormsSection } from './linear-algebra/vector-norms';
import { matricesSection } from './linear-algebra/matrices';
import { matrixMultiplicationSection } from './linear-algebra/matrix-multiplication';
import { matrixInverseSection } from './linear-algebra/matrix-inverse';
import { determinantsSection } from './linear-algebra/determinants';
import { matrixRankSection } from './linear-algebra/matrix-rank';
import { orthogonalityProjectionsSection } from './linear-algebra/orthogonality-projections';
import { eigenvaluesEigenvectorsSection } from './linear-algebra/eigenvalues-eigenvectors';
import { positiveDefiniteSection } from './linear-algebra/positive-definite-matrices';
import { singularValueDecompositionSection } from './linear-algebra/svd';
import { pcaSection } from './linear-algebra/pca';

// =============================================================================
// LINEAR ALGEBRA (High-Fidelity 16-Topic Edition)
// =============================================================================
export const LINEAR_ALGEBRA_DATA: CategoryData = {
  id: "linear-algebra",
  title: "Linear Algebra",
  description: "Linear Algebra is the language of Machine Learning. It provides the mathematical framework for representing and processing high-dimensional data.",
  keyConcepts: [
    { title: "Vectors & Spaces", description: "The arena where data lives, defined by basis and independence." },
    { title: "Matrix Operations", description: "Transforming space through multiplication, inversion, and determinants." },
    { title: "Decompositions", description: "Breaking complex transformations into Eigenvalues and SVD." },
    { title: "Applications", description: "Dimension reduction (PCA) and regression optimization." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Linear Algebra: <span class="text-accent italic">The Language of Machine Learning</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In the world of Machine Learning, <strong>Linear Algebra</strong> is not just a branch of mathematics; it is the fundamental language we use to communicate with data.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This curriculum is broken into <strong>16 focused topics</strong>, moving from the basic mechanics of vectors to advanced decompositions like SVD and Principal Component Analysis (PCA).
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "Mathematics is the art of giving the same name to different things."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Henri Poincaré</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to start?</p>
        <a 
          href="/#/mathematics/linear-algebra/vectors" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with The Vector
        </a>
      </div>

    </div>
  `,
  sections: [
    vectorsSection,
    vectorSpacesSection,
    linearIndependenceSection,
    basisDimensionSection,
    dotProductSection,
    vectorNormsSection,
    matricesSection,
    matrixMultiplicationSection,
    matrixInverseSection,
    determinantsSection,
    matrixRankSection,
    orthogonalityProjectionsSection,
    eigenvaluesEigenvectorsSection,
    positiveDefiniteSection,
    singularValueDecompositionSection,
    pcaSection
  ]
};

