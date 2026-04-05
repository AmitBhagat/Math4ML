import { CategoryData } from '../src/data/types';
import { vectorsFullSection } from './linear-algebra/vectors-full';
import { matricesFullSection } from './linear-algebra/matrices-full';
import { matrixPropertiesSection } from './linear-algebra/matrix-properties';
import { eigenAdvancedSection } from './linear-algebra/eigen-advanced';
import { decompositionsFullSection } from './linear-algebra/decompositions-full';
import { vectorSpacesFullSection } from './linear-algebra/vector-spaces-full';
import { transformationsFullSection } from './linear-algebra/transformations-full';

// =============================================================================
// LINEAR ALGEBRA (Consolidated Ultimate Edition)
// =============================================================================
export const LINEAR_ALGEBRA_DATA: CategoryData = {
  id: "linear-algebra",
  title: "Linear Algebra",
  description: "Linear Algebra is the language of Machine Learning. It provides the mathematical framework for representing and processing high-dimensional data, from simple vectors to complex matrix decompositions.",
  keyConcepts: [
    { title: "Vectors & Foundations", description: "Dot Product, Norms (L1/L2), Linear Combinations, Span, and Basis." },
    { title: "Matrix Essentials", description: "Multiplication, Transpose, Inverse, and Identity mappings." },
    { title: "Matrix Properties", description: "Information metrics: Rank, Determinant, Trace, and Definiteness." },
    { title: "Eigen-analysis", description: "Spectral theory behind PCA, Clustering, and Matrix Factorization." },
    { title: "Advanced Decompositions", description: "Structural factorization via SVD, LU, Cholesky, and QR." },
    { title: "Vector Spaces & Geometry", description: "Subspaces, Independence, Linear Equations, and Orthogonal Projections." },
    { title: "Linear Transformations", description: "Coordinate mappings: Change of Basis, Kernel (Null Space), and Range." }
  ],
  sections: [
    vectorsFullSection,
    matricesFullSection,
    matrixPropertiesSection,
    eigenAdvancedSection,
    decompositionsFullSection,
    vectorSpacesFullSection,
    transformationsFullSection
  ]
};
