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
  sections: [
    setTheorySection,
    logicSection,
    combinatoricsSection,
    graphTheorySection
  ]
};
