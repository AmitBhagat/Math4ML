import { CategoryData } from '../src/data/types';
import { vectorsSection } from './linear-algebra/vectors';
import { matricesSection } from './linear-algebra/matrices';
import { matrixPropertiesSection } from './linear-algebra/matrix-properties';
import { vectorSpacesSection } from './linear-algebra/vector-spaces';
import { matrixDecompositionsSection } from './linear-algebra/matrix-decompositions';
import { eigenvaluesEigenvectorsSection } from './linear-algebra/eigenvalues-eigenvectors';
import { eigenvaluesEigenvectorsPcaSection } from './linear-algebra/eigenvalues-eigenvectors-pca';

// =============================================================================
// LINEAR ALGEBRA (High-Fidelity HTML Edition)
// =============================================================================
export const LINEAR_ALGEBRA_DATA: CategoryData = {
  id: "linear-algebra",
  title: "Linear Algebra",
  description: "Linear Algebra is the language of Machine Learning. It provides the mathematical framework for representing and processing high-dimensional data, from simple vectors to complex matrix decompositions.",
  keyConcepts: [
    { title: "Vectors & Foundations", description: "Dot Product, Norms (L1/L2), Linear Combinations, Span, and Basis." },
    { title: "Matrix Essentials", description: "Multiplication, Transpose, Inverse, and Identity mappings." },
    { title: "Matrix Properties", description: "Information metrics: Rank, Determinant, Trace, and Definiteness." },
    { title: "Vector Spaces", description: "Subspaces, independence, and orthogonal projections." },
    { title: "Matrix Decompositions", description: "Structural factorization via SVD, LU, Cholesky, and QR." },
    { title: "Eigen-analysis", description: "Spectral theory behind PCA, Clustering, and Matrix Factorization." },
    { title: "PCA Solved Examples", description: "Step-by-step walkthroughs of Eigen-decomposition and PCA." }
  ],
  introHtml: String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Linear Algebra: <span class="text-accent italic">The Language of Machine Learning</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In the world of Machine Learning, <strong>Linear Algebra</strong> is not just a branch of mathematics; it is the fundamental language we use to communicate with data. If Machine Learning is the engine, Linear Algebra is the fuel and the chassis that holds everything together.
        </p>
        
        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          Everything from a single pixel in an image to the complex weights of a Large Language Model is represented using the concepts of Linear Algebra. By mastering this domain, you transition from someone who simply "uses" ML libraries to someone who understands the geometry of data.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- Why It Matters -->
      <div class="space-y-10">
        <div class="flex items-center gap-4">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Why It Matters</h3>
        </div>
        
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          When you train a model, you aren't just crunching numbers—you are performing <span class="italic text-accent-premium">high-dimensional transformations</span>. 
        </p>

        <ul class="space-y-8 list-none pl-0">
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Data Representation</strong>
              <p class="text-muted-premium font-normal">Almost all data—be it text, images, or audio—is converted into <strong>Vectors</strong> and <strong>Matrices</strong> before a computer can process it.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Dimensionality Reduction</strong>
              <p class="text-muted-premium font-normal">Techniques like <strong>Principal Component Analysis (PCA)</strong> use eigenvalues and eigenvectors to compress massive datasets while keeping the most important information.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Deep Learning</strong>
              <p class="text-muted-premium font-normal">Every "layer" in a neural network is essentially a massive matrix multiplication followed by a transformation.</p>
            </div>
          </li>
        </ul>
      </div>

      <hr class="border-border-premium/50" />

      <!-- Core Concepts -->
      <div class="space-y-10">
        <div class="flex items-center gap-4">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Core Concepts to Master</h3>
        </div>

        <p class="text-lg text-text-premium font-normal leading-relaxed">
          To build a strong intuition for ML, we will focus on these key areas:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Vectors & Spaces</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Understanding data points as coordinates in multi-dimensional space.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Matrix Operations</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Learning how to manipulate data through multiplication, transposition, and inversion.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Linear Transformations</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Visualizing how matrices can stretch, rotate, and compress space.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Eigenvalues & Eigenvectors</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Finding the 'hidden axes' along which data varies the most.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Matrix Decomposition</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Breaking complex matrices into simpler parts (like SVD) for efficient computation.</p>
          </div>
        </div>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <div class="flex items-center gap-4">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-accent">What to Expect</h3>
        </div>

        <p class="text-lg text-text-premium font-normal leading-relaxed">
          On this page, we move beyond rote memorization of formulas. We focus on <strong>geometric intuition</strong>. You will learn to see a matrix not just as a grid of numbers, but as a function that moves space. 
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

        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          By the end of this module, you'll see that a recommendation system, a face recognizer, and a language translator all share the same mathematical DNA.
        </p>
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
    matricesSection,
    matrixPropertiesSection,
    vectorSpacesSection,
    matrixDecompositionsSection,
    eigenvaluesEigenvectorsSection,
    eigenvaluesEigenvectorsPcaSection
  ]
};
