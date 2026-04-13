import { TopicSection } from '../../src/data/types';

export const linearIndependenceSection: TopicSection = {
  id: "linear-independence",
  title: "Linear Independence",
  description: "A set of vectors is independent if no vector can be built from the others. It's the key to avoid redundancy.",
  color: "#673AB7",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Linear Algebra · Independence</div>
      <h1>Linear Independence: Zero Redundancy</h1>
      <p>In Machine Learning, we want our features to be unique. <strong>Linear Independence</strong> is the formal way of saying: "Every vector in this set brings something new to the table."</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Why do we care about independence? Because every piece of data in Machine Learning has a "Price"—in memory, in computation, and in complexity. <strong>Linear Independence</strong> is the rule that tells us whether a new feature is actually adding a new "Direction" to our knowledge, or if it is just a noisy echo of something we already know. If your features are independent, your model is clean and efficient. If they are dependent, your weights can become unstable, and your model might "hallucinate" relationships that aren't there. It is the filter that separates unique insights from redundant clutter.</p>



    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Non-Trivial Zero Combination</div>
      <p>Linear independence is defined by whether we can force a set of vectors to cancel each other out to exactly zero without cheating ($c_i = 0$).</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>If you have two vectors $\mathbf{v}$ and $\mathbf{w}$ in 2D space, they are dependent if they lie on the same line. If you have three vectors in 2D, they <strong>must</strong> be dependent because you've run out of "freedom" in that space. Independence means every new vector "breaks out" into a new dimension.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Test</h3>
      <p>A set $\{\mathbf{v}_1, \dots, \mathbf{v}_n\}$ is <strong>Linearly Independent</strong> if the only solution to the equation below is the <strong>Trivial Solution</strong> (every $c_i = 0$):</p>
      <div class="math-block">
        $$c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \dots + c_n \mathbf{v}_n = \mathbf{0}$$
      </div>
      <p>If there is <strong>any</strong> other way to reach zero using non-zero weights, then at least one vector is just a "combination" of the others—rendering it redundant.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Rule</h3>
      <p>Linear Independence is binary: either a set is independent, or it's not. There is no "mostly" independent in formal algebra.</p>
      <ul class="mt-2 space-y-2">
        <li><strong>Independent</strong>: No vector is in the span of the others.</li>
        <li><strong>Dependent</strong>: At least one vector can be deleted without losing any "reach."</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: If the zero vector $\mathbf{0}$ is in your set, the set is <strong>always</strong> dependent. Why? Because you can give $\mathbf{0}$ a weight of 1,000,000 and the sum stays zero!</p>
    </div>
    
    <visualizer topic="rank" />
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Linear Independence like a <strong>"Team of Experts."</strong> 
        If you have a Python coder and a Math expert, they are independent—each brings a unique skill. 
        But if you add a second Python coder, they are "Dependent" because their skills overlap. 
        In ML, we want a "Team" of independent features so we get the most info for the least number of variables. 
        Redundant features just make the "Salary" (Computation) of the model higher without doing more work.
      </div>
    </div>

    <h2 id="example-2d" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Visualizing Redundancy</h2>
    
      <h4>Problem: Dependency of [1, 2] and [2, 4]</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Analyze:</strong> Notice that \([2, 4] = 2 \times [1, 2]\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Combine:</strong> \(2\mathbf{v}_1 - 1\mathbf{v}_2 = [2-2, 4-4] = [0, 0]\).</div>
        </div>
      </div>

      <div class="callout warning">
        <div class="callout-icon">⚠</div>
        <div class="callout-body">
          <strong>Result:</strong> These vectors are <strong>Dependent</strong>. They lie on the same line and span only a 1D subspace of the 2D plane.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

# Column vectors
v1 = np.array([1, 2, 0])
v2 = np.array([0, 1, 1])
v3 = np.array([1, 3, 1]) # v3 = v1 + v2 (dependent!)

# Check stack rank
matrix = np.column_stack([v1, v2, v3])
rank = np.linalg.matrix_rank(matrix)

print(f"Number of vectors: {matrix.shape[1]}")
print(f"Rank (Independent dimensions): {rank}")
print("Dependent!" if rank < 3 else "Independent!")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Linear Independence is the ultimate filter for data efficiency. It tells you whether you're collecting "New Information" or just expensive "Echoes" of what you already have.</p>
    <ul>
      <li><strong>The Multicollinearity Trap</strong>: In Linear Regression, if two features (like "Size in sq ft" and "Size in sq meters") are linearly dependent, the math inside the model will literally break. The matrix becomes "Singular," and the computer can't figure out which feature is responsible for the result. We use independence tests to "Clean" our data so the model stays stable.</li>
      <li><strong>Feature Selection</strong>: Modern models use algorithms to find the most "Independent" subset of thousands of variables. By keeping only the unique directions and throwing away the "Copycats," we can train models 10x faster with the same accuracy. Independence is the bridge between a "Fat and Slow" model and a "Lean and Fast" one.</li>
    </ul>
    <p>Teacher's Final Word: You want every feature in your model to be a unique voice. Linear Independence is the gatekeeper that makes sure you aren't paying for redundancy, ensuring that your logic is as lean and sharp as the universe allows.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Independence tells us we have unique voices. But how many voices do we actually need? Explore <strong><a href="#/mathematics/linear-algebra/basis-dimension">Basis and Dimension</a></strong>.
    </div>
  `
};
