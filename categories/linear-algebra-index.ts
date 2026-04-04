import { CategoryData } from '../src/data/types';
import { vectorsSection } from './linear-algebra/vectors';
import { linearCombinationsSection } from './linear-algebra/linear-combinations';
import { matricesSection } from './linear-algebra/matrices';
import { linearMappingSection } from './linear-algebra/linear-mapping';
import { linearEquationsSection } from './linear-algebra/linear-equations';
import { eigenvaluesSection } from './linear-algebra/eigen';
import { svdSection } from './linear-algebra/svd';
import { normsSection } from './linear-algebra/norms';
import { measuresOfDistanceSection } from './linear-algebra/measures-of-distance';

// =============================================================================
// LINEAR ALGEBRA (Modularized Content)
// =============================================================================
export const LINEAR_ALGEBRA_DATA: CategoryData = {
  id: "linear-algebra",
  title: "Linear Algebra",
  description: "Linear Algebra is important in Data Science as it helps represent and process data efficiently, especially for high-dimensional datasets. It also helps in understanding relationships between variables.",
  keyConcepts: [
    { title: "Vectors for ML", description: "Numerical lists representing features and data points." },
    { title: "Linear Combinations", description: "Weighted sums of features, the basis of regression and neural nets." },
    { title: "Matrix Arithmetic", description: "Efficient manipulation of multi-dimensional arrays and operations." },
    { title: "Linear Mapping", description: "Transformations of space, including rotations and projections." },
    { title: "Solving Linear Equations", description: "Systems analysis from square to overdetermined (Least Squares)." },
    { title: "Eigen-decomposition", description: "Internal structures revealing directions of maximum variance." },
    { title: "Singular Value Decomposition", description: "Factorization for data compression and pseudo-inverses." },
    { title: "Vector Norms", description: "Quantifying magnitude using metrics like L1, L2, and Max." },
    { title: "Measures of Distance", description: "Proximity metrics including Euclidean, Manhattan, and Cosine for similarity." }
  ],
  sections: [
    vectorsSection,
    linearCombinationsSection,
    matricesSection,
    linearMappingSection,
    linearEquationsSection,
    eigenvaluesSection,
    svdSection,
    normsSection,
    measuresOfDistanceSection
  ]
};
