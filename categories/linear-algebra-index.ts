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
