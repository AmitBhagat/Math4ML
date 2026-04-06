import { CategoryData } from '../src/data/types';
import { basicsSection } from './calculus/basics';
import { neuralNetworksSection } from './calculus/neural-networks';
import { neuralNetworksExamplesSection } from './calculus/neural-networks-examples';
import { multivariableSection } from './calculus/multivariable';
import { integralsSection } from './calculus/integrals';
import { optimizationSection } from './calculus/optimization';
import { vectorCalculusSection } from './calculus/vector-calculus';

export const CALCULUS_DATA: CategoryData = {
  id: "calculus",
  title: "Calculus",
  description: "The mathematical engine for optimization, using derivatives and gradients to minimize model error and power backpropagation.",
  keyConcepts: [
    { title: "Differentiation", description: "Calculating instantaneous rates of change." },
    { title: "Partial Derivatives", description: "Handling variables in multi-dimensional space." },
    { title: "Gradients", description: "Vectors of change used in optimization." },
    { title: "Gradient Descent", description: "Iterative minimization of loss functions." },
    { title: "Chain Rule", description: "The foundation of neural network backpropagation." },
    { title: "Jacobian & Hessian", description: "Coordinate transforms and second-order optimization." },
    { title: "Area Under Curve", description: "Integration and model evaluation (AUC-ROC)." }
  ],
  sections: [
    basicsSection,
    neuralNetworksSection,
    neuralNetworksExamplesSection,
    multivariableSection,
    integralsSection,
    optimizationSection,
    vectorCalculusSection
  ]
};
