import { TopicSection } from '../../src/data/types';

export const vectorExplorerSection: TopicSection = {
  id: "vector-explorer",
  title: "Vector Explorer",
  description: "Visualize vector addition, dot products, and cross products in a 2D coordinate space.",
  content: String.raw`
    <p class="text-lg leading-relaxed mb-6">Explore the fundamental properties of vectors.</p>

  `,
  tags: ["Linear Algebra", "Vectors"],
  level: "Foundation"
};

export const transformationLabSection: TopicSection = {
  id: "transformation-lab",
  title: "Transformation Lab",
  description: "Experiment with 2D linear transformations and basis changes.",
  content: String.raw`
    <p class="text-lg leading-relaxed mb-6">Visualize how matrices stretch and squish space.</p>

  `,
  tags: ["Linear Algebra", "Matrices"],
  level: "Foundation"
};

export const matrixCalcSection: TopicSection = {
  id: "matrix-calc",
  title: "Matrix Calculator",
  description: "Perform 2x2 matrix operations: Inverse, Rank, Determinants.",
  content: String.raw`
    <p class="text-lg leading-relaxed mb-6">A precision tool for matrix arithmetic.</p>

  `,
  tags: ["Linear Algebra", "Calculator"],
  level: "Foundation"
};

export const eigenSolverSection: TopicSection = {
  id: "eigen-solver",
  title: "Eigenvalues & Eigenvectors",
  description: "Step-by-step characteristic polynomial and eigenvector analysis.",
  content: String.raw`
    <p class="text-lg leading-relaxed mb-6">Find the invariant directions of a linear mapping.</p>

  `,
  tags: ["Linear Algebra", "Eigenvalues"],
  level: "Advanced"
};

export const systemSolverSection: TopicSection = {
  id: "system-solver",
  title: "Linear Systems Solver",
  description: "Solve and visualize systems of linear equations via Cramer's Rule.",
  content: String.raw`
    <p class="text-lg leading-relaxed mb-6">Resolve Ax = b geometrically and algebraically.</p>

  `,
  tags: ["Linear Algebra", "Systems"],
  level: "Foundation"
};
