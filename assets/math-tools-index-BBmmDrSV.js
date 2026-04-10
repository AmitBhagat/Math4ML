const e={id:"vector-explorer",title:"Vector Explorer",description:"Visualize vector addition, dot products, and cross products in a 2D coordinate space.",content:String.raw`
    <p class="text-lg leading-relaxed mb-6">Explore the fundamental properties of vectors.</p>
    <visualizer topic="vector-explorer" />
  `,tags:["Linear Algebra","Vectors"],level:"Foundation"},t={id:"transformation-lab",title:"Transformation Lab",description:"Experiment with 2D linear transformations and basis changes.",content:String.raw`
    <p class="text-lg leading-relaxed mb-6">Visualize how matrices stretch and squish space.</p>
    <visualizer topic="transformation-lab" />
  `,tags:["Linear Algebra","Matrices"],level:"Foundation"},i={id:"matrix-calc",title:"Matrix Calculator",description:"Perform 2x2 matrix operations: Inverse, Rank, Determinants.",content:String.raw`
    <p class="text-lg leading-relaxed mb-6">A precision tool for matrix arithmetic.</p>
    <visualizer topic="matrix-calc" />
  `,tags:["Linear Algebra","Calculator"],level:"Foundation"},a={id:"eigen-solver",title:"Eigenvalues & Eigenvectors",description:"Step-by-step characteristic polynomial and eigenvector analysis.",content:String.raw`
    <p class="text-lg leading-relaxed mb-6">Find the invariant directions of a linear mapping.</p>
    <visualizer topic="eigen-solver" />
  `,tags:["Linear Algebra","Eigenvalues"],level:"Advanced"},r={id:"system-solver",title:"Linear Systems Solver",description:"Solve and visualize systems of linear equations via Cramer's Rule.",content:String.raw`
    <p class="text-lg leading-relaxed mb-6">Resolve Ax = b geometrically and algebraically.</p>
    <visualizer topic="system-solver" />
  `,tags:["Linear Algebra","Systems"],level:"Foundation"},o={id:"math-tools",title:"Math Tools",description:"High-fidelity interactive utilities for real-time mathematical exploration — from vector arithmetic to eigenvalue solvers.",keyConcepts:[{title:"Vector Explorer",description:"Visualize vector addition, dot products, and cross products."},{title:"Transform Lab",description:"Experiment with 2D linear transformations and basis changes."},{title:"Matrix Calc",description:"Perform 2x2 matrix operations: Inverse, Rank, Determinants."},{title:"Eigen Solver",description:"Step-by-step characteristic polynomial and eigenvector analysis."},{title:"System Solver",description:"Solve and visualize systems of linear equations via Cramer's Rule."}],sections:[e,t,i,a,r]};export{o as MATH_TOOLS_DATA};
