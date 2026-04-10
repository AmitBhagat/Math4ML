import { CategoryData } from '../src/data/types';
import { 
  vectorExplorerSection, 
  transformationLabSection, 
  matrixCalcSection, 
  eigenSolverSection, 
  systemSolverSection 
} from './math-tools/tools-content';

export const MATH_TOOLS_DATA: CategoryData = {
  id: "math-tools",
  title: "Math Tools",
  description: "High-fidelity interactive utilities for real-time mathematical exploration — from vector arithmetic to eigenvalue solvers.",
  keyConcepts: [
    { title: "Vector Explorer", description: "Visualize vector addition, dot products, and cross products." },
    { title: "Transform Lab", description: "Experiment with 2D linear transformations and basis changes." },
    { title: "Matrix Calc", description: "Perform 2x2 matrix operations: Inverse, Rank, Determinants." },
    { title: "Eigen Solver", description: "Step-by-step characteristic polynomial and eigenvector analysis." },
    { title: "System Solver", description: "Solve and visualize systems of linear equations via Cramer's Rule." }
  ],
  sections: [
    vectorExplorerSection,
    transformationLabSection,
    matrixCalcSection,
    eigenSolverSection,
    systemSolverSection
  ]
};
