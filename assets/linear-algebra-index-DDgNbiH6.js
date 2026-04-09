const e={id:"vectors",title:"Vectors",description:"A vector is a collection of numbers that represents a point or a magnitude in space. In ML, every data point is a vector.",color:"#3F51B5",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Linear Algebra · Vectors</div>
      <h1>Vectors: The Foundations of Data</h1>
      <p>A <strong>Vector</strong> is the most fundamental object in modern mathematics. In Machine Learning, we don't see "objects"—we see vectors. An image is a vector of pixels; a house is a vector of features like size and price.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Basic Arithmetic</strong>: Summing and multiplying numbers.</li>
        <li><strong>Coordinate Geometry</strong>: Plotting points on an (x, y) grid.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Why do we care about vectors? Because they allow us to treat <strong>Qualities</strong> as <strong>Quantities</strong>. In the real world, things are messy—a house has an age, a size, and a location. In math, we treat each of these as a unique <strong>Direction</strong> in space. A single vector is just a point in that multidimensional space, representing one specific "version" of reality. This allows us to calculate the "distance" between house prices or find the "direction" that leads to the highest profit. It is the language that turns our fuzzy observations into a concrete coordinate system that a computer can actually navigate.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The $n$-tuplet</div>
      <p>A vector $\mathbf{v} \in \mathbb{R}^n$ is an ordered sequence of $n$ real numbers. Geometrically, it represents a directed line segment from the origin to a point in $\mathbb{R}^n$:</p>
      <div class="math-block">
        $$\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{bmatrix}$$
      </div>
      <p>Vectors are defined by two primary operations:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Addition</strong>: $\mathbf{u} + \mathbf{v} = [u_1+v_1, \dots, u_n+v_n]^T$ (Combining directions).</li>
        <li><strong>Scaling</strong>: $c\mathbf{v} = [cv_1, \dots, cv_n]^T$ (Altering magnitude while preserving or reversing direction).</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">In ML, these operations allow us to mix features and traverse the loss landscape during optimization.</p>
    </div>
    
    <h2 id="example-data" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Data Representation</h2>
    
      <h4>Problem: Real Estate Vectorization</h4>
      <p>A house has 3 bedrooms, 2 bathrooms, and is 1500 sq ft. Represent this as a vector \(\mathbf{h}\) and find the vector for a "double-sized" house.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Let bedrooms be \(v_1\), bathrooms \(v_2\), and sq ft \(v_3\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Represent:</strong> \(\mathbf{h} = [3, 2, 1500]^T\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Scale:</strong> To double the house, calculate \(2\mathbf{h} = [6, 4, 3000]^T\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We've mathematically represented a physical object. This is "Feature Engineering" in its purest form.
        </div>
      </div>
    

    <h2 id="example-navigation" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Vector Navigation</h2>
    
      <h4>Problem: Chaining Movements</h4>
      <p>You walk 3 units North (\(\mathbf{a} = [0, 3]\)) then 4 units East (\(\mathbf{b} = [4, 0]\)). Find your total displacement.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Sum:</strong> Add the components: \(\mathbf{a} + \mathbf{b} = [0+4, 3+0] = [4, 3]\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Interpretation:</strong> You are 5 units away from the start at an angle defined by this vector.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Addition is like <strong>Step-by-Step Directions</strong>. The total movement is the result of taking every advice in order.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

# Creating vectors
a = np.array([1, 2])
b = np.array([3, 4])

# Addition
add = a + b

# Scaling
scaled = 2 * a

print(f"Sum: {add}, Scaled: {scaled}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>In Machine Learning, vectors are the DNA of data—they are the way we encode real-world complexity into a geometric language that a computer can actually process.</p>
    <ul>
      <li><strong>Computer Vision</strong>: Every image is treated as a massive vector where each number represents a pixel's brightness. By mapping an image to a single point in high-dimensional space, we can mathematically compare two photos to see how "close" they are, which is how Face ID identifies you.</li>
      <li><strong>Natural Language (NLP)</strong>: Words are converted into "Embeddings"—vectors in a 300D space. This geometry allows the computer to calculate relationships; for example, if you move from "King" in the same direction and distance that separates "Man" and "Woman," you land on the "Queen" vector.</li>
      <li><strong>Self-Driving Cars</strong>: LiDAR sensors see a "Cloud of Points," where each point is a 3D vector. The car navigates by performing vector addition and subtraction to calculate trajectories and avoid obstacles in real-time.</li>
    </ul>
    <p>Ultimately, vectorization is the tactical process of turning messy reality into a neat coordinate system, allowing our models to use the raw geometry of space to discover patterns.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Individually, vectors are points. Where do these points "live"? Explore <strong><a href="#/mathematics/linear-algebra/vector-spaces">Vector Spaces</a></strong>.
    </div>
  `},t={id:"vector-spaces",title:"Vector Spaces",description:"A Vector Space is the playground where vectors exist. It's defined by the rules of addition and scaling.",color:"#3F51B5",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🌌 Linear Algebra · Vector Spaces</div>
      <h1>Vector Spaces: The Arena</h1>
      <p>A <strong>Vector Space</strong> is a set of vectors that follows a consistent set of rules. It ensures that when you add or scale vectors, you stay within the "playground" and don't exit the mathematical universe.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A <strong>Vector Space</strong> is more than just a list of numbers; it is the <strong>Arena</strong> where all your data exists. It is defined by a consistent set of rules that ensure that no matter how much you add or scale your features, you stay within the same logical universe. If your data "falls out" of the space, your math breaks. In Machine Learning, we depend on these spaces to be "Closed"—this guarantees that a model trained on a specific space will produce results that still make sense within that same mathematical framework.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Linear Axioms</div>
      <p>A vector space $V$ over a field $\mathbb{F}$ (usually $\mathbb{R}$) is a set equipped with vector addition and scalar multiplication satisfying the following conditions for all $\mathbf{u}, \mathbf{v} \in V$ and $a, b \in \mathbb{F}$:</p>
      <div class="math-block">
        $$\text{1. Closure: } \mathbf{u} + \mathbf{v} \in V, \quad a\mathbf{u} \in V$$
        $$\text{2. Identity: } \exists \mathbf{0} \in V \text{ s.t. } \mathbf{v} + \mathbf{0} = \mathbf{v}$$
        $$\text{3. Distributivity: } a(\mathbf{u} + \mathbf{v}) = a\mathbf{u} + a\mathbf{v}$$
      </div>
      <p>Crucially, for $V$ to be a **Subspace** of $\mathbb{R}^n$, it must contain the origin $\mathbf{0}$, and any linear combination $\sum \alpha_i \mathbf{v}_i$ must reside within $V$.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a <strong>Vector Space</strong> like a <strong>Gaming Map</strong>. 
        No matter how high your character jumps (scaling) or how far they run (addition), the game physics ensure they never "fall out of the world." 
        If your feature combinations were to lead to a mathematical "dead end," the game would crash. 
        In AI, we use these maps to perform <strong>Dimensionality Reduction</strong>, projecting a giant 1000D world onto a small, navigable 2D "Minimap" (subspace) without losing the essential layout.
      </div>
    </div>

    <h2 id="subspaces">2. Subspaces</h2>
    <p>A <strong>Subspace</strong> is a "flat slice" of the original vector space that still goes through the origin.</p>

    <h2 id="example-subspace" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> A 2D Plane in 3D Space</h2>
    
      <h4>Problem: Visualizing Subspaces</h4>
      <p>Is the set of vectors \([x, y, 0]\) in \(\mathbb{R}^3\) a subspace?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> This set describes the "floor" (\(xy\)-plane) of a 3D room.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Check Origin:</strong> \([0, 0, 0]\) is in the set. (Pass).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Check Addition:</strong> Adding any two "floor" vectors keeps you on the floor. (Pass).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> YES. It's a valid subspace. In ML, when we perform <strong>Dimensionality Reduction</strong>, we're often projecting high-dimensional data onto a lower-dimensional subspace like this.
        </div>
      </div>
    

    <h2 id="example-closure" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Closure Property Check</h2>
    
      <h4>Problem: Finding the "Exit"</h4>
      <p>Is the set of vectors \([x, 1]\) where \(x \in \mathbb{R}\) a vector space?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Test Scale:</strong> Take \(\mathbf{v} = [2, 1]\). Now scale it by 2.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Result:</strong> \(2\mathbf{v} = [4, 2]\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Check:</strong> The second component is now 2, not 1.</div>
        </div>
      </div>

      <div class="callout error">
        <div class="callout-icon">✕</div>
        <div class="callout-body">
          <strong>Result:</strong> NO. Addition/Scaling "pushed us out" of the set. This set doesn't form a vector space.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

# Subspace check (XY-plane)
def is_in_subspace(v):
    # Vector must be in [x, y, 0] format
    return v[2] == 0

v1 = np.array([3, 4, 0])
v2 = np.array([1, 1, 1])

print(f"Is v1 in subspace? {is_in_subspace(v1)}")
print(f"Is v2 in subspace? {is_in_subspace(v2)}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>In Machine Learning, a vector space is the "Arena" where all your data exists. It defines the playground and the rules that your algorithm must follow to stay logically consistent.</p>
    <ul>
      <li><strong>Generative AI (Latent Spaces)</strong>: In models like Midjourney or Stable Diffusion, the AI doesn't store a library of images. Instead, it creates a "Latent Space"—a high-dimensional vector space where every coordinate is a unique potential image. Moving through this space is how the AI morphs one concept into another.</li>
      <li><strong>Word Embeddings (NLP)</strong>: Every word we use is mapped to a vector space. Because the space follows specific rules (Axioms), it ensures that if you start at the vector for "Apple" and add "Technology," the result stays in the logical "Subspace" of electronics rather than fruit.</li>
    </ul>
    <p>Teacher's Final Word: Think of a vector space as the "Laws of Physics" for your data. By setting these rules, we ensure that no matter how much our algorithms mix, match, or scale the data, the results still make sense within our mathematical universe.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Space is huge. How do we ensure our vectors aren't redundant? Explore <strong><a href="#/mathematics/linear-algebra/linear-independence">Linear Independence</a></strong>.
    </div>
  `},i={id:"linear-independence",title:"Linear Independence",description:"Linear Independence ensures your vectors aren't redundant. If a vector can be written as a combination of others, it adds no new information.",color:"#FF9800",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🏹 Linear Algebra · Linear Independence</div>
      <h1>Linear Independence: Zero Redundancy</h1>
      <p>Linear Independence is a way to measure the <strong>uniqueness</strong> of information. In Machine Learning, if two features are linearly dependent, you have redundant info that could slow down your model or cause errors.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Linear Independence is the ultimate measure of <strong>Efficiency</strong>. If a vector can be built by combining other vectors you already have, then it is "Dependent"—it adds exactly zero new information to your system. In Machine Learning, we strive for independence because redundant features (like "Temp in Celsius" and "Temp in Fahrenheit") just add noise and computational weight without helping the model learn anything new. Ensuring independence is the first step toward a lean, fast, and stable model.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Trivial Solution Requirement</div>
      <p>A set of vectors $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ is **Linearly Independent** if the vector equation:</p>
      <div class="math-block">
        $$\sum_{i=1}^k c_i \mathbf{v}_i = \mathbf{0}$$
      </div>
      <p>is satisfied **only** when $c_1 = c_2 = \dots = c_k = 0$. If there exists a non-trivial solution (where at least one $c_i \neq 0$), the set is **Linearly Dependent**.</p>
      <p class="text-xs opacity-70 mt-2">Geometrically, this means that every independent vector adds a new dimension to the span. Dependent vectors are redundant because they lie within the span of the others.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of vectors as <strong>Speakers in a Room</strong>. 
        If Speaker A says something new, they are <strong>Independent</strong>. 
        But if Speaker B just repeats a mix of what Speaker A and Speaker C already said, then Speaker B is <strong>Linearly Dependent</strong>. 
        They are a "copycat" who adds no new insight (news) to the conversation. 
        In AI, we want a team of "Independent Experts" where every feature brings a unique perspective to the table, rather than having a thousand voices all saying the same thing.
      </div>
    </div>

    <h2 id="example-redundancy" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Redundant Feature Check</h2>
    
      <h4>Problem: Identifying Noise</h4>
      <p>Are \(\mathbf{v}_1 = [1, 2]\) and \(\mathbf{v}_2 = [2, 4]\) independent?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Look for a scaling factor.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Calculate:</strong> \(\mathbf{v}_2 = 2 \times \mathbf{v}_1\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Check:</strong> \(\mathbf{v}_2\) is just a double of \(\mathbf{v}_1\).</div>
        </div>
      </div>

      <div class="callout error">
        <div class="callout-icon">✕</div>
        <div class="callout-body">
          <strong>Result:</strong> Dependent. They are just the same line. In ML, this could be like having "Temperature in Celsius" and "Temperature in Kelvin" as two separate features—they are mathematically redundant.
        </div>
      </div>
    

    <h2 id="example-zero" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Zero Solution Test</h2>
    
      <h4>Problem: Checking ℝ² Independence</h4>
      <p>Are \(\mathbf{v}_1 = [1, 0]\) and \(\mathbf{v}_2 = [0, 1]\) independent?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Equation:</strong> \(c_1[1, 0] + c_2[0, 1] = [0, 0]\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Solve:</strong> \(c_1 = 0, c_2 = 0\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Check:</strong> There is <strong>no other way</strong> to get zero except by using zero.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> YES. Independent. They point in completely different directions.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

# A set of vectors in a matrix
A = np.array([[1, 2], [2, 4]])

# If the Rank < Number of columns, they are dependent.
rank = np.linalg.matrix_rank(A)
is_independent = rank == A.shape[1]

print(f"Is Independent? {is_independent}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Linear Independence is the ultimate measure of "Efficiency." It asks your data: "Are you actually telling me something new, or are you just a remix of what I already know?"</p>
    <ul>
      <li><strong>Signal De-noising</strong>: When processing audio or sensor data, we look for independent signals. If two sensors give you the same data stream, they are dependent; one is just redundancy. We use linear independence to strip away the "copycats" and keep only the raw, unique signal.</li>
      <li><strong>Feature Selection</strong>: In predictive modeling, having independent features is the key to stability. If your model uses both "Total Sales" and "Tax Paid" where tax is a fixed percentage, the features are dependent. This can cause the math to "explode" during training (Singular Matrix).</li>
    </ul>
    <p>Teacher's Final Word: In AI, we want a lean team of "Independent Experts." Every feature should bring a unique perspective to the table, rather than having a thousand voices all saying the same thing in different languages.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Independence is great. But how many independent vectors do we need to build an entire world? Explore <strong><a href="#/mathematics/linear-algebra/basis-dimension">Basis and Dimension</a></strong>.
    </div>
  `},a={id:"basis-dimension",title:"Basis and Dimension",description:"A Basis is the minimal set of vectors needed to build a space. Dimension is just the count of vectors in that set.",color:"#9C27B0",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Linear Algebra · Basis</div>
      <h1>Basis and Dimension</h1>
      <p>A <strong>Basis</strong> is the "Minimalist Skeleton" of a vector space. It’s the smallest set of independent vectors that let you reach <strong>every</strong> point in the space. The <strong>Dimension</strong> is just the total number of vectors in that basis.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A <strong>Basis</strong> is the "Minimalist Skeleton" of a vector space. It is the absolute smallest set of independent vectors that allows you to reach <strong>every single point</strong> in that space. If you have too few, you can't reach certain areas (the space is incomplete); if you have too many, you have redundancy. The <strong>Dimension</strong> is just the head-count of that minimal team. In Machine Learning, identifying the basis of your data allows you to strip away a thousand "noisy" features and compress them into the few core directions that actually matter.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Spanning Sets and Cardinality</div>
      <p>A set of vectors $\mathcal{B} = \{\mathbf{b}_1, \mathbf{b}_2, \dots, \mathbf{b}_n\}$ is a **Basis** for a vector space $V$ if it satisfies two conditions:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Independence</strong>: No vector in $\mathcal{B}$ can be expressed as a linear combination of the others.</li>
        <li><strong>Span</strong>: Every vector $\mathbf{v} \in V$ can be uniquely expressed as: $\mathbf{v} = \sum_{i=1}^n c_i \mathbf{b}_i$.</li>
      </ul>
      <p>The **Dimension** $\dim(V)$ is defined as the cardinality $n$ of the basis. Any two bases for the same vector space must have the same number of elements.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a <strong>Basis</strong> like the <strong>Primary Colors</strong> in painting. 
        You only need Red, Blue, and Yellow to create every other shade in the visible universe. 
        Adding a "Light Indigo" doesn't help—it is just a combination of the others, not independent! 
        A basis is the <strong>Atomic Level</strong> of your data. The Dimension tells you how many "Primary Colors" you actually need to perfectly represent your dataset without any waste.
      </div>
    </div>

    <visualizer topic="BasisChange" />

    <h2 id="dimension">2. Dimension vs. Rank</h2>
    <p>The <strong>Dimension</strong> of a space is the number of vectors in any basis for that space. For example, \(\mathbb{R}^3\) has a dimension of 3 because it takes at least 3 vectors to reach every height, width, and depth.</p>

    <h2 id="example-r2" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Standard Basis for ℝ²</h2>
    
      <h4>Problem: Finding the Simplest Basis</h4>
      <p>Prove that \(\mathbf{e}_1 = [1, 0]\) and \(\mathbf{e}_2 = [0, 1]\) form a basis for 2D space.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Check:</strong> Can we reach any point \([x, y]\)? Yes: \(x\mathbf{e}_1 + y\mathbf{e}_2\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Identify:</strong> These are independent directions (Horizontal and Vertical).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> These vectors span the entire 2D plane. Since there are 2 vectors, the <strong>Dimension</strong> of our workspace is 2.
        </div>
      </div>
    

    <h2 id="example-graphics" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Custom Basis in Graphics</h2>
    
      <h4>Problem: Changing Perspective</h4>
      <p>In computer vision, we sometimes use a coordinate system tilted at 45°. Is \(\mathbf{b}_1 = [1, 1]\) and \(\mathbf{b}_2 = [1, -1]\) a valid basis?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Independence:</strong> Neither vector is a multiple of the other. (Pass).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Check:</strong> Two independent vectors in 2D space always span the space.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> YES. You can reach any point using these two directions. This is the foundation of <strong>Basis Change</strong>, which helps models "see" patterns from different angles.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

# Basis vectors
b1 = np.array([1, 1])
b2 = np.array([1, -1])

# Stack into a matrix
Basis = np.column_stack([b1, b2])

# Dimension of the span
dim = np.linalg.matrix_rank(Basis)

print(f"Dimension of the created space: {dim}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>A Basis is the "Minimalist Skeleton" of your dataset. It’s like the Primary Colors in an art class—you only need a few to build every other shade in the visible universe.</p>
    <ul>
      <li><strong>Image Compression</strong>: When you save a photo as a JPEG, the computer finds a "Basis" of sine waves that can build the image. By using only the 100 most important "Basis Waves" instead of 1,000,000 raw pixels, we shrink the file by 90% almost invisibly.</li>
      <li><strong>Matrix Factorization (RecSys)</strong>: Streaming services like Spotify find a small set of "Basis Genres" (like Calm, Upbeat, Acoustic). Your taste is just a linear combination of these few dimensions, making it possible to recommend music to millions of people without tracking every single song.</li>
    </ul>
    <p>Teacher's Final Word: Identifying the basis of your data lets you ignore the noisy distractions and focus on the few "Atom-level" directions that actually define the shape of your information.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Space is defined. Now how do we measure the "Alignment" and "Overlap" between our vectors? Explore <strong><a href="#/mathematics/linear-algebra/dot-product">Dot Product</a></strong>.
    </div>
  `},s={id:"dot-product",title:"Dot Product",description:"The Dot Product measures the 'overlap' or 'alignment' between two vectors. It's the engine behind similarity and attention.",color:"#D32F2F",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Linear Algebra · Dot Product</div>
      <h1>Dot Product: The Similarity Engine</h1>
      <p>The <strong>Dot Product</strong> (or inner product) is the mathematical heart of almost every modern ML model, from Linear Regression to Large Language Models (LLMs).</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Vector Basics</strong>: Multiplying and summing components.</li>
        <li><strong>Trigonometry</strong>: Understanding the Cosine (\(\cos\)) of an angle.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>At its core, the <strong>Dot Product</strong> answers one critical question: <em>"How much are these two vectors pointing in the same direction?"</em> It is the fundamental measure of <strong>Similarity</strong>. If two vectors are perfectly aligned, the dot product is maximized. If they have nothing in common (orthogonal), it is zero. This simple operation allows us to transform high-dimensional data into a single "compatibility score." In modern AI, when you hear about "Attention" or "Similarity Search," you are essentially hearing about billions of dot products happening simultaneously as the model looks for the most relevant information.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Inner Product</div>
      <p>For two vectors $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$, the **Dot Product** is a scalar value defined algebraically as the sum of the products of their components:</p>
      <div class="math-block">
        $$\mathbf{u} \cdot \mathbf{v} = \sum_{i=1}^n u_i v_i = \mathbf{u}^\top \mathbf{v}$$
      </div>
      <p>Geometrically, the dot product represents the product of the magnitudes and the cosine of the angle $\theta$ between them:</p>
      <div class="math-block">
        $$\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\| \|\mathbf{v}\| \cos(\theta)$$
      </div>
      <p class="text-xs opacity-70 mt-2">This duality allows us to use coordinate-wise multiplication to solve geometric problems of alignment and projection in high-dimensional space.</p>
    </div>
    
    <h2 id="example-nlp" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Word Similarity in NLP</h2>
    
      <h4>Problem: Comparing Sentiments</h4>
      <p>Compare \(\mathbf{v}_1 = [1, 1]\) (Positive) and \(\mathbf{v}_2 = [1, -1]\) (Negative).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Calculate Dot Product:</strong> \((1 \times 1) + (1 \times -1) = 0\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Interpretation:</strong> The dot product is zero. These two vectors have no overlap.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Zero indicates <strong>Orthogonality</strong>. In NLP, this means these two concepts are completely independent or "on different planets."
        </div>
      </div>
    

    <h2 id="example-orthogonality" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Alignment Check</h2>
    
      <h4>Problem: Similarity of [3, 4] and [4, 3]</h4>
      <p>Are these two vectors pointing in roughly the same direction?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Summing:</strong> \((3 \times 4) + (4 \times 3) = 12 + 12 = 24\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Result:</strong> High positive number.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> YES. High dot product means high alignment. They share most of their "energy" in the same directions.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

a = np.array([1, 2])
b = np.array([3, 4])

# Dot product
dot = np.dot(a, b) # or a @ b

print(f"Dot Product: {dot}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Think of the Dot Product as a "Similarity Radar." It tells you exactly how much two vectors are "pointing in the same direction."</p>
    <ul>
      <li><strong>Semantic Search</strong>: When you search for "Healthy Recipes," Google converts your query and millions of web pages into vectors. It then calculates the Dot Product between them. A high dot product means the "Directions" align, signalling a perfect match.</li>
      <li><strong>Cosine Similarity (RecSys)</strong>: E-commerce sites use the dot product to find "People like you." If your shopping-habit vector and another user's vector have a massive dot product, the system assumes you have the same taste and recommends their favorites to you.</li>
    </ul>
    <p>Teacher's Final Word: In AI, we use this simple calculation to measure the conceptual overlap between words, images, or even customer personalities. It is the fundamental way computers understand "Similarity."</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Dot product is affected by vector length. How do we measure that length individually? Explore <strong><a href="#/mathematics/linear-algebra/vector-norms">Vector Norms (L1, L2)</a></strong>.
    </div>
  `},n={id:"vector-norms",title:"Vector Norms (L1, L2)",description:"A Norm is a function that measures the 'length' or 'magnitude' of a vector. Different norms tell different stories about the distance.",color:"#D32F2F",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Linear Algebra · Vector Norms</div>
      <h1>Vector Norms: Measuring Magnitude</h1>
      <p>A <strong>Norm</strong> is a mathematical function that assigns a strictly positive "length" to a vector. In Machine Learning, we use norms to prevent models from "overfitting" by penalizing large weights.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A single number in a vector doesn't tell you much—but its <strong>Norm</strong> tells you its total "Weight" or "Magnitude." In Machine Learning, we don't just care about the direction of our weights; we care about their size. If weights become too large, the model becomes hypersensitive to noise (overfitting). <strong>Vector Norms</strong> allow us to quantify this "Mass" and penalize it. Each norm tells a different story: some care about the absolute total mass (L1), while others care about the straight-line distance (L2). Choosing the right norm is the difference between a model that is "Sparse and Selective" vs. "Small and Stable."</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The $p$-norm Metric</div>
      <p>A **Norm** $\|\cdot\|$ is a function that maps a vector to a non-negative scalar, satisfying the triangle inequality and absolute homogeneity. In $\mathbb{R}^n$, we define the family of $L^p$ norms as:</p>
      <div class="math-block">
        $$\|\mathbf{x}\|_p = \left( \sum_{i=1}^n |x_i|^p \right)^{1/p}$$
      </div>
      <p>The three most critical variations in Machine Learning are:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>$L^1$ Norm</strong>: $\sum |x_i|$. Promotes sparsity (Lasso).</li>
        <li><strong>$L^2$ Norm</strong>: $\sqrt{\sum x_i^2}$. Promotes small, distributed weights (Ridge).</li>
        <li><strong>$L^\infty$ Norm</strong>: $\max_i |x_i|$. Measures the maximum deviation.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Norms provide the mathematical basis for regularization, ensuring that model complexity remains bounded during the learning process.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of norms as <strong>"Travel Rules."</strong> 
        <strong>L2 Norm</strong> is the "As the Crow Flies" distance—it's the shortest straight path. 
        <strong>L1 Norm</strong> is the "Taxicab" distance—it's walking through a city grid where you can't cut corners; you must take every street. 
        In AI, we use L1 to act like a <strong>"Liar Detector"</strong> for noise, forcing useless weights to exactly zero, and L2 to act like a <strong>"Stabilizer"</strong> that keeps our model's predictions from exploding into wild numbers.
      </div>
    </div>

    <visualizer topic="VectorNorms" />

    <h2 id="example-distance" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Manhattan vs. Euclidean</h2>
    
      <h4>Problem: Comparing Distances for [3, 4]</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>L₂ (Crow):</strong> \(\sqrt{3^2 + 4^2} = \sqrt{25} = 5\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>L₁ (Taxi):</strong> \(3 + 4 = 7\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> L₁ distance is always \(\ge\) L₂. L₁ is "harsher" and easier for models to interpret as binary decisions.
        </div>
      </div>
    

    <h2 id="example-reg" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Lasso vs. Ridge Regularization</h2>
    
      <h4>Problem: Penalizing Large Weights</h4>
      <p>Assume your model weights are \(\mathbf{w} = [1, 0.01]\). Find the L₁ and L₂ penalties.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>L₁:</strong> \(|1| + |0.01| = 1.01\). (The "noisy" 0.01 is still heavily penalized).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>L₂:</strong> \(\sqrt{1^2 + 0.01^2} \approx 1\). (The small weight is almost ignored).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> L₁ (Lasso) will often force small weights to exactly 0, effectively deleting irrelevant features. L₂ (Ridge) just keeps all weights tiny.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

v = np.array([3, 4])

# L2 Norm
l2 = np.linalg.norm(v) # default is p=2

# L1 Norm
l1 = np.linalg.norm(v, ord=1)

print(f"L2: {l2}, L1: {l1}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Norms are the "Police Officers" of Machine Learning. They measure the total "Mass" of your weights to keep them from growing out of control.</p>
    <ul>
      <li><strong>Lasso and Ridge Regularization</strong>: When training a model, we add the L1 or L2 norm of the weights to our error function. This "Penalty" prevents the model from relying too heavily on any single feature, keeping it from "Overfitting" to random noise.</li>
      <li><strong>K-Nearest Neighbors (k-NN)</strong>: To classify an object, the k-NN algorithm calculates the L2 norm (straight-line distance) between that object and every other labeled point. The "Length" provided by the norm tells the AI exactly who the closest neighbors are.</li>
    </ul>
    <p>Teacher's Final Word: A Norm is a **"Magnitude Meter."** It takes a multi-dimensional vector and boils it down to a single number. In AI, this is our most power tool for keeping models lean, stable, and accurate.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Vectors are building blocks. Let's arrange them into grids. Explore <strong><a href="#/mathematics/linear-algebra/matrices">Matrices</a></strong>.
    </div>
  `},o={id:"matrices",title:"Matrices",description:"A Matrix is an array of numbers representing a multi-dimensional transformation. They are the spreadsheets of the math world.",color:"#FF9800",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Linear Algebra · Matrices</div>
      <h1>Matrices: The Data Spreadsheets</h1>
      <p>A <strong>Matrix</strong> is a rectangular grid of numbers organized into rows and columns. In Machine Learning, matrices are used to represent everything from image pixel values to the weights of a neural network.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>If a vector is a single physical point, a <strong>Matrix</strong> is a way of organizing an entire universe of points. Each row might represent a different house, and each column a different feature—this is the "Spreadsheet" view. But matrices aren't just for storage; they are for <strong>Action</strong>. A matrix represents a <strong>Linear Transformation</strong>—a rule that tells every vector in the space how to move, rotate, or stretch. In Machine Learning, matrices allow us to process thousands of inputs in a single mathematical "pulse," transforming raw data into high-level intelligence through layer-by-layer computation.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Linear Operator</div>
      <p>A matrix $A \in \mathbb{R}^{m \times n}$ is a rectangular array of $m \cdot n$ real numbers. It represents a linear map $f: \mathbb{R}^n \to \mathbb{R}^m$:</p>
      <div class="math-block">
        $$A = \begin{bmatrix} a_{1,1} & \dots & a_{1,n} \\ \vdots & \ddots & \vdots \\ a_{m,1} & \dots & a_{m,n} \end{bmatrix}$$
      </div>
      <p>Key algebraic operations include:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Matrix Addition</strong>: $(A + B)_{ij} = A_{ij} + B_{ij}$.</li>
        <li><strong>Scalar Scaling</strong>: $(c A)_{ij} = c A_{ij}$.</li>
        <li><strong>Transpose</strong>: $(A^\top)_{ij} = A_{ji}$ (Swapping rows and columns).</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">In the context of data, $A$ often represents $m$ observations each with $n$ features, or the synaptic weights connecting two layers in a neural network.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a Matrix as a <strong>Batch Processor</strong> or an <strong>Industrial Spreadsheet</strong>. 
        Instead of calculating the price of one house at a time, you pack all the data into a matrix and perform a single operation. 
        It’s the shift from a "Handcrafted" approach to "Mass Production." 
        In Deep Learning, a matrix isn't just a list of numbers; it's the <strong>Total Collective Knowledge</strong> of a neural network layer, waiting to filter and transform whatever signal passes through it.
      </div>
    </div>

    <visualizer topic="Matrices" />

    <h2 id="operations">Mathematical Operations</h2>
    <p>A matrix \(A \in \mathbb{R}^{m \times n}\) has \(m\) rows and \(n\) columns.</p>
    <ul>
      <li><strong>Addition:</strong> Matrices must have the same dimensions. \(C = A + B\) where \(c_{ij} = a_{ij} + b_{ij}\).</li>
      <li><strong>Transpose (\(A^T\)):</strong> Flips the matrix over its diagonal, switching rows and columns.</li>
    </ul>

    <h2 id="example-image" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Grayscale Image Representation</h2>
    
      <h4>Problem: Visualizing Pixels</h4>
      <p>Represent a 2x2 grayscale image where the top-left pixel is white (255), bottom-right is black (0), and others are gray (128).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify Rows/Cols:</strong> Two rows, two columns.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Fill Values:</strong> \(A = \begin{bmatrix} 255 & 128 \\ 128 & 0 \end{bmatrix}\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We've converted a visual concept into a matrix. Computer vision models "see" by reading these matrix values.
        </div>
      </div>
    

    <h2 id="example-transpose" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Matrix Transpose in Data Alignment</h2>
    
      <h4>Problem: Pivoting Features</h4>
      <p>A dataset \(D = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}\) has 2 samples (rows) and 2 features (cols). Find \(D^T\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Rotate:</strong> Turn the first row \([1, 2]\) into the first column.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Repeat:</strong> Turn the second row \([3, 4]\) into the second column.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Result:</strong> \(D^T = \begin{bmatrix} 1 & 3 \\ 2 & 4 \end{bmatrix}\).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Transposing is like <strong>Rotating a Map</strong>. The info is the same, but the perspective changes—now features are rows and samples are columns. This is essential for calculating Correlation Matrices.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

# Creating a 2x2 matrix
A = np.array([[1, 2], [3, 4]])

# Transpose
A_t = A.T

print(f"Original:\n{A}")
print(f"Transpose:\n{A_t}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>In Machine Learning, matrices are the "Industrial Spreadsheets" that organize and transform entire universes of data in a single operation.</p>
    <ul>
      <li><strong>Synaptic Weight Storage</strong>: In a Neural Network, every connection between layers has a specific "weight." We store these millions of weights in a matrix. As data passes through, the matrix decides which features to amplify and which to ignore.</li>
      <li><strong>Covariance Analysis</strong>: Matrices are used to calculate "Covariance." This tells the algorithm if features like "Customer Age" and "Spending Power" move together, helping it discover hidden relationships in massive datasets.</li>
    </ul>
    <p>Teacher's Final Word: Think of a Matrix as a **Batch Processor**. Instead of calculating one data point at a time, you pack everything into a matrix and perform a single transformation. It’s the shift from "Handcrafted" to "Mass Production," allowing AI to process millions of inputs in an instant.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Individually, matrices are static. How do we make them interact? Explore <strong><a href="#/mathematics/linear-algebra/matrix-multiplication">Matrix Multiplication</a></strong>.
    </div>
  `},r={id:"matrix-multiplication",title:"Matrix Multiplication",description:"Matrix Multiplication is the engine that drives neural networks. It combines linear transformations into one.",color:"#D32F2F",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Linear Algebra · Multiplication</div>
      <h1>Matrix Multiplication: Chaining Influence</h1>
      <p>Combining two matrices (\(AB\)) is not just multiplication—it's <strong>Composition</strong>. It's the mathematical way of saying, "Do Transformation B, then do Transformation A." This is exactly what happens in every layer of a Neural Network.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A matrix-vector product (\(Ax\)) takes a vector and "moves" it to a new location. <strong>Matrix Multiplication</strong> (\(AB\)) takes <strong>all</strong> the vectors that B could possibly move and moves them <strong>again</strong> using A. It is the mathematical way of saying, "Take these results and process them some more." This allows us to collapse multiple complex, sequential steps into a single, unified matrix. In Artificial Intelligence, this is how we go from "Raw Data" to "High-Level Decisions" through layers of stacked influence.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Composition Product</div>
      <p>For two matrices $A \in \mathbb{R}^{m \times p}$ and $B \in \mathbb{R}^{p \times n}$, the product $C = AB \in \mathbb{R}^{m \times n}$ is defined by the entry-wise dot products:</p>
      <div class="math-block">
        $$c_{ij} = \sum_{k=1}^p a_{ik} b_{kj}$$
      </div>
      <p>This operation is defined **only** when the number of columns in $A$ matches the number of rows in $B$. Geometrically, if $A$ represents mapping $f$ and $B$ represents mapping $g$, then $AB$ represents the composition:</p>
      <div class="math-block">
        $$(f \circ g)(\mathbf{x}) = A(B\mathbf{x})$$
      </div>
      <p class="text-xs opacity-70 mt-2">Note: Matrix multiplication is non-commutative ($AB \neq BA$), as the order of transformations determines the final state of the space.</p>
    </div>
    
    <h2 id="example-composition" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Chaining Transformations</h2>
    
      <h4>Problem: Finding the Combined Rule</h4>
      <p>Let \(A = \begin{bmatrix} 1 & 2 \\ 3 & 1 \end{bmatrix}, B = \begin{bmatrix} 1 & 0 \\ 0 & 2 \end{bmatrix}\). Calculate \(AB\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Inner Product:</strong> Row 1 of A \(\cdot\) Col 1 of B = \((1 \times 1) + (2 \times 0) = 1\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Complete:</strong> Repeat for all Row-Col pairs.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Final Matrix:</strong> \(AB = \begin{bmatrix} 1 & 4 \\ 3 & 2 \end{bmatrix}\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Multiplication is <strong>not commutative</strong> (\(AB \neq BA\)). In the relay race, the order of runners matters!
        </div>
      </div>
    

    <h2 id="example-shape" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Shape Mismatch Survival Guide</h2>
    
      <h4>Problem: Can they Multiply?</h4>
      <p>Check if \(A (3 \times 2)\) can multiply \(B (2 \times 5)\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Map:</strong> (Rows \(\times\) <strong>Cols</strong>) for A and (<strong>Rows</strong> \(\times\) Cols) for B.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Match:</strong> The inner numbers must be identical: (3 \(\times\) <strong>2</strong>) and (<strong>2</strong> \(\times\) 5).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Predict:</strong> The resulting matrix will have the outer dimensions (3 \(\times\) 5).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> YES. They align. This is the #1 debugging skill in building Neural Networks.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

A = np.array([[1, 2], [3, 4]])
b = np.array([5, 6])

# Matrix-Vector
y = A @ b 

# Matrix-Matrix
B = np.array([[1, 0], [0, 1]])
C = A @ B

print(f"Product: {C}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Matrix multiplication is the "Engine" of AI. It is the mathematical way of saying, "Take these results and process them even more."</p>
    <ul>
      <li><strong>Neural Network Inference</strong>: Each "Layer" in a deep network is really just a massive matrix multiplication. It takes the pattern discovered in the previous layer and mixes it with its own weights to find an even deeper pattern.</li>
      <li><strong>Attention Mechanisms (LLMs)</strong>: The brain of models like ChatGPT is built on multiplying "Query" and "Key" matrices. This multiplication decides exactly which words in a long sentence should "pay attention" to each other to understand context.</li>
    </ul>
    <p>Teacher's Final Word: Matrix multiplication isn't just about crunching numbers; it's about **Composition**. It allows us to chain simple rules together to build incredibly complex intelligence, layer by layer.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Multiplication is the forward pass. But how do we work backwards? Explore <strong><a href="#/mathematics/linear-algebra/matrix-inverse">Matrix Inverse</a></strong>.
    </div>
  `},l={id:"matrix-inverse",title:"Matrix Inverse",description:"The Matrix Inverse is the 'Undo' button for linear transformations. It's the mathematical way to find original inputs from outputs.",color:"#1E88E5",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Linear Algebra · Inverse</div>
      <h1>Matrix Inverse: The Undo Button</h1>
      <p>The <strong>Inverse</strong> of a Matrix \(A\) is denoted by \(A^{-1}\). If Matrix A transforms Vector \(\mathbf{x}\) into Vector \(\mathbf{y}\), then Matrix \(A^{-1}\) reverses that process, bringing you right back to \(\mathbf{x}\).</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In standard algebra, if you multiply by 5, you undo it by dividing by 5. In Linear Algebra, the <strong>Inverse</strong> is that numerical "Undo" button. We don't have a division sign for matrices, so we multiply by the Inverse to cancel out a transformation and return to the starting point. It is the mathematical bridge that allows us to find the original <strong>Input</strong> when we only know the <strong>Output</strong>. However, beware: not every transformation can be undone. If a matrix squashes your 3D world into a 2D sheet, that information is lost forever, and the matrix is said to be "Singular."</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Matrix Reciprocal</div>
      <p>A square matrix $A \in \mathbb{R}^{n \times n}$ is **Invertible** if there exists a matrix $A^{-1}$ such that:</p>
      <div class="math-block">
        $$A A^{-1} = A^{-1} A = I$$
      </div>
      <p>Where $I$ is the identity matrix. A matrix is invertible if and only if it is **Non-singular**, meaning its determinant is non-zero ($\det(A) \neq 0$). For a $2 \times 2$ matrix, the inverse is calculated as:</p>
      <div class="math-block">
        $$A^{-1} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$
      </div>
      <p class="text-xs opacity-70 mt-2">The inverse represents the reverse transformation. In higher dimensions, it is often computed via Gaussian Elimination or the Adjugate Matrix.</p>
    </div>
    
    <h2 id="example-undo" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The "Undo" Walkthrough</h2>
    
      <h4>Problem: Finding the Inverse of A = [[4, 7], [2, 6]]</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Determinant:</strong> \((4 \times 6) - (7 \times 2) = 10\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Rearrange:</strong> Swap diagonals (4 & 6), negate off-diagonals (7 & 2).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Resulting Matrix:</strong> \(\begin{bmatrix} 6 & -7 \\ -2 & 4 \end{bmatrix}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Final Scale:</strong> Divide all elements by 10.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> \(A^{-1} = \begin{bmatrix} 0.6 & -0.7 \\ -0.2 & 0.4 \end{bmatrix}\). Multiplying this with original A will give you back the Identity!
        </div>
      </div>
    

    <h2 id="example-system" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Solving a 2×2 System</h2>
    
      <h4>Problem: Finding Inputs x given Outputs y</h4>
      <p>Assume \(A\mathbf{x} = \mathbf{b}\). If \(\mathbf{b} = [1, 2]\) and you have \(A^{-1}\), find \(\mathbf{x}\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Equation:</strong> Multiply both sides by \(A^{-1}\) from the left: \(\mathbf{x} = A^{-1}\mathbf{b}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Substitute:</strong> If \(A^{-1} = [[0.6, -0.7], [-0.2, 0.4]]\) and \(\mathbf{b} = [1, 2]\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Result:</strong> \(\mathbf{x} = [0.6 - 1.4, -0.2 + 0.8] = [-0.8, 0.6]\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We solved for the unknown inputs by simply "multiplying back." This is how many statistics algorithms find the best-fit line.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

A = np.array([[4, 7], [2, 6]])

# Finding Inverse
if np.linalg.det(A) != 0:
    A_inv = np.linalg.inv(A)
    print(f"Inverse:\n{A_inv}")
else:
    print("Matrix is Singular (No Undo Button!)")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>The Inverse is your mathematical "Undo Button." It allows you to work backwards from an output to find the original input.</p>
    <ul>
      <li><strong>Newton’s Method (Optimization)</strong>: When an AI is trying to find the absolute lowest point of an error curve, it uses the Inverse of the "Hessian" matrix to calculate the perfect step size, cutting down training time significantly.</li>
      <li><strong>Image Deblurring</strong>: If an image is blurred by a known lens distortion, we can find the Inverse of that transformation to "un-blur" the photo and recover the original high-resolution details.</li>
    </ul>
    <p>Teacher's Final Word: In real-world ML, we often avoid calculating the inverse directly because it’s computationally heavy. Instead, we use "Solver" algorithms that give us the same result with 10x more efficiency.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What happens when a matrix *can't* be inverted? What is that number that decides? Explore <strong><a href="#/mathematics/linear-algebra/determinants">Determinants</a></strong>.
    </div>
  `},d={id:"determinants",title:"Determinants",description:"The Determinant is a single number that tells you how much a matrix 'stretches' or 'squashes' space.",color:"#FF9800",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Linear Algebra · Determinant</div>
      <h1>Determinants: The Scaling Factor</h1>
      <p>The <strong>Determinant</strong> \(\det(A)\) is a scalar value that tells you how a linear transformation changes the <strong>volume</strong> of space. It’s the "Scale Factor" of the matrix.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Imagine a unit square on a grid (area = 1). When you multiply it by a matrix, that square might stretch into a giant rectangle, tilt into a diamond, or get squashed into a tiny sliver. The <strong>Determinant</strong> is a single number that tells you exactly how much that "Volume" changed. If the determinant is 2, the space doubled in size; if it is 0.5, it shrank by half. More importantly, if it is <strong>Zero</strong>, it means the matrix is non-invertible—it has "deleted" a dimension of your data, like turning a 3D sphere into a flat 2D pancake. You can't undo that kind of damage!</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Leibniz Definition</div>
      <p>For a square matrix $A \in \mathbb{R}^{n \times n}$, the determinant $\det(A)$ is a scalar value defined by the permutation sum:</p>
      <div class="math-block">
        $$\det(A) = \sum_{\sigma \in S_n} \text{sgn}(\sigma) \prod_{i=1}^n A_{i, \sigma(i)}$$
      </div>
      <p>Where $S_n$ is the set of all permutations of $\{1, \dots, n\}$. Geometrically, $\det(A)$ represents the signed **Volume Scaling Factor** of the linear transformation. Essential takeaways include:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Invertibility</strong>: $A$ is invertible $\iff \det(A) \neq 0$.</li>
        <li><strong>Composition</strong>: $\det(AB) = \det(A)\det(B)$.</li>
        <li><strong>Linear Dependence</strong>: $\det(A) = 0$ implies the rows/columns are linearly dependent.</li>
      </ul>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of the Determinant as a <strong>"Scale Factor"</strong> or a <strong>"Dimension Watchdog."</strong> 
        It measures the "Stretching Power" of a matrix. 
        If \(\det = 0\), your transformation is destructive—you're losing information because you're squashing multiple points into the same spot. 
        In Machine Learning, we monitor determinants (like in the Jacobian) to ensure our transformations aren't accidentally "erasing" the very features we are trying to learn.
      </div>
    </div>

    <visualizer topic="Determinants" />

    <h2 id="rules">2. Properties & Meaning</h2>
    <ul>
      <li>\(\det(A) > 0\): Space is stretched/shrunk but keeps its orientation.</li>
      <li>\(\det(A) < 0\): Space is "flipped" inside out (like a reflection in a mirror).</li>
      <li>\(\det(A) = 0\): Matrix is non-invertible (Singular).</li>
    </ul>

    <h2 id="example-area" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Area Scaling of a Unit Square</h2>
    
      <h4>Problem: Finding the Scale Factor</h4>
      <p>For \(A = \begin{bmatrix} 3 & 0 \\ 0 & 2 \end{bmatrix}\), find the determinant and interpret it.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Calculate:</strong> \(\det(A) = (3 \times 2) - (0 \times 0) = 6\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Interpret:</strong> A \(1 \times 1\) unit square becomes a \(3 \times 2\) rectangle. Area increases by 6x.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Any shape you draw in that space will have exactly <strong>6 times</strong> the area after the transformation.
        </div>
      </div>
    

    <h2 id="example-singularity" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Singularity Check (Det = 0)</h2>
    
      <h4>Problem: Is this "Undoable"?</h4>
      <p>Check if \(A = \begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix}\) has an inverse.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Calculate:</strong> \(\det(A) = (1 \times 4) - (2 \times 2) = 0\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Identify:</strong> Notice the second row is just 2x the first row (redundant).</div>
        </div>
      </div>

      <div class="callout error">
        <div class="callout-icon">✕</div>
        <div class="callout-body">
          <strong>Result:</strong> \(\det = 0\). This matrix squashed the 2D plane into a 1D line. No inverse exists. This is why <strong>full rank</strong> data is critical in ML.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

A = np.array([[1, 2], [3, 4]])

# Calculating Determinant
det = np.linalg.det(A)

print(f"Determinant: {det:.2f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Think of the Determinant as a "Dimension Watchdog." It monitors how much a transformation "stretches" or "squashes" your information universe.</p>
    <ul>
      <li><strong>Change of Variables (Flow Models)</strong>: In generative models like "Normalizing Flows" (which create realistic data), the determinant of the Jacobian ensures that as we warp a simple distribution into a complex one, the total probability still sums to 1.</li>
      <li><strong>Outlier & Anomaly Detection</strong>: The "Volume" of a dataset can be measured using the determinant of its covariance matrix. If a new data point falls way outside this volume, the determinant helps flag it as a potential fraud or error.</li>
    </ul>
    <p>Teacher's Final Word: If the determinant is zero, your matrix has "erased" a dimension of data forever. In AI, preventing accidental "data erasure" is why we watch the determinant like a hawk.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Determinants tell us if space is squashed. But how *much* space is left? Explore <strong><a href="#/mathematics/linear-algebra/matrix-rank">Matrix Rank</a></strong>.
    </div>
  `},c={id:"matrix-rank",title:"Matrix Rank",description:"Rank measures the number of linearly independent rows or columns in a matrix. It tells you the true 'Information Density' of your data.",color:"#FF9800",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Linear Algebra · Rank</div>
      <h1>Matrix Rank: Information Density</h1>
      <p>The <strong>Rank</strong> of a Matrix is the maximum number of linearly independent rows or columns. It tells you the <strong>true dimension</strong> of the data hidden within the grid.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>You might have a dataset with 100 features (columns), but if 80 of them are just duplicates or simple combinations of others, your <strong>Matrix Rank</strong> is only 20. Rank is the "Reality Check" of Linear Algebra. It tells you the <strong>True Information Density</strong> of your data—the actual number of dimensions you are working with once you strip away all the fluff and redundancy. In Machine Learning, high rank means you have a diverse set of independent sensors, while low rank means your model is essentially listening to the same gossip repeated multiple times.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Dimension of the Span</div>
      <p>The **Rank** of a matrix $A$, denoted $\text{rank}(A)$, is defined as the dimension of the vector space spanned by its columns (or rows). Formally:</p>
      <div class="math-block">
        $$\text{rank}(A) = \dim(\text{col}(A)) = \dim(\text{row}(A))$$
      </div>
      <p>Crucially, $\text{rank}(A) \le \min(m, n)$. A matrix is called **Full Rank** if its rank equals the smaller of its two dimensions. Key implications include:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Invertibility</strong>: A square $n \times n$ matrix is invertible iff $\text{rank}(A) = n$.</li>
        <li><strong>Redundancy</strong>: If $\text{rank}(A) < n$, then there exist linearly dependent columns (i.e., redundant features).</li>
        <li><strong>Rank-Nullity Theorem</strong>: $\text{rank}(A) + \dim(\text{null}(A)) = n$.</li>
      </ul>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Matrix Rank as <strong>"Unique Witnesses"</strong> in a courtroom. 
        If five people testify but four of them are just repeating exactly what the first person said, you only have <strong>Rank 1</strong> evidence. 
        No matter how many spreadsheets you fill, the Rank tells you how many <strong>Independent Stories</strong> your data is actually telling. 
        In AI, we use this to compress data (SVD) by throwing away the "Copycats" and keeping only the high-rank signals.
      </div>
    </div>

    <visualizer topic="Rank" />

    <h2 id="rules">2. Properties of Rank</h2>
    <ul>
      <li><strong>Full Rank:</strong> If an \(n \times n\) matrix has \(\text{rank} = n\), it is invertible.</li>
      <li><strong>Rank-Deficient:</strong> If \(\text{rank} < n\), the matrix is singular (squashes space).</li>
      <li><strong>Column Rank = Row Rank:</strong> The number of unique columns always equals the number of unique rows!</li>
    </ul>

    <h2 id="example-redundant" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Detecting Rank-Deficient Data</h2>
    
      <h4>Problem: Finding the Hidden Dimension</h4>
      <p>For \(A = \begin{bmatrix} 1 & 2 \\ 2 & 4 \\ 3 & 6 \end{bmatrix}\), find the rank.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify Rows:</strong> Row 2 is \(2 \times \text{Row 1}\). Row 3 is \(3 \times \text{Row 1}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Count Unique:</strong> Only Row 1 is independent.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> \(\text{Rank} = 1\). Despite having 3 rows, this matrix only contains information along a single 1D line in 3D space.
        </div>
      </div>
    

    <h2 id="example-density" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Rank as Information Density</h2>
    
      <h4>Problem: Checking for Invertibility</h4>
      <p>Is \(A = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}\) full rank?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> These are the standard basis vectors for \(\mathbb{R}^2\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Check Independence:</strong> Neither is a multiple of the other.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> \(\text{Rank} = 2\). Since it's a 2x2 matrix, it's "Full Rank" and fully invertible. No data is being squashed here.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

A = np.array([[1, 2], [2, 4], [3, 6]])

# Calculating Matrix Rank
rank = np.linalg.matrix_rank(A)

print(f"Matrix Rank: {rank}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Rank is the "Reality Check" of your data. It tells you the **True Information Density**—the actual number of independent stories your data is telling once you strip away all the duplicates.</p>
    <ul>
      <li><strong>Collaborative Filtering (RecSys)</strong>: Streaming services like Netflix use "Low-Rank Matrix Factorization." They assume that among 10,000 movies, there are only about 20 "Rank" dimensions (like Action, Romance, or Nostalgia) that actually explain everyone's taste.</li>
      <li><strong>Multicollinearity Detection</strong>: If your feature matrix has a low rank relative to its width, your model will be unstable. We use rank to detect "copycat" features so we can prune them for a faster, more reliable model.</li>
    </ul>
    <p>Teacher's Final Word: Rank is what separates a rich, diverse dataset from a loud but repetitive one. In AI, find the rank to find the truth.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Rank ensures our directions are unique. How do we find the "Distance" between those directions? Explore <strong><a href="#/mathematics/linear-algebra/orthogonality-projections">Orthogonality & Projections</a></strong>.
    </div>
  `},h={id:"orthogonality-projections",title:"Orthogonality and Projections",description:"Orthogonality is the mathematical way of saying 'Zero Correlation.' Projections are how we find the closest distance between vectors and subspaces.",color:"#9C27B0",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📐 Linear Algebra · Projections</div>
      <h1>Orthogonality & Projections</h1>
      <p>Two vectors are <strong>Orthogonal</strong> if they have zero in common (angle = 90°). A <strong>Projection</strong> is the "shadow" that one vector casts onto another. In ML, this is how we filter out noise from our features.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In Machine Learning, we often have massive, high-dimensional data that we want to simplify without losing the core signal. <strong>Orthogonal Projections</strong> are the mathematical way to find that "Best Approximation." By projecting a complex vector onto a simpler subspace, we effectively "filter out" the noise that doesn't align with our chosen features. The key is <strong>Orthogonality</strong>—the idea that the difference between our original data and our prediction should be 100% independent of the features we used. It’s how we ensure our models aren't "hallucinating" patterns that aren't really there.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Closest Vector Property</div>
      <p>Two vectors $\mathbf{u}, \mathbf{v}$ are **Orthogonal** if their inner product is zero ($\mathbf{u} \cdot \mathbf{v} = 0$). The **Orthogonal Projection** of a vector $\mathbf{x}$ onto a subspace $W$ is the unique vector $\hat{\mathbf{x}} \in W$ such that $(\mathbf{x} - \hat{\mathbf{x}})$ is orthogonal to every vector in $W$.</p>
      <p>Algebraically, the projection of $\mathbf{x}$ onto a non-zero vector $\mathbf{v}$ is:</p>
      <div class="math-block">
        $$\text{proj}_{\mathbf{v}} \mathbf{x} = \frac{\mathbf{x} \cdot \mathbf{v}}{\|\mathbf{v}\|^2} \mathbf{v}$$
      </div>
      <p>Properties of the projection include:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Optimality</strong>: $\hat{\mathbf{x}}$ is the vector in $W$ that minimizes the distance $\|\mathbf{x} - \mathbf{v}\|$ for all $\mathbf{v} \in W$.</li>
        <li><strong>Linearity</strong>: $\text{proj}_W (c_1\mathbf{x}_1 + c_2\mathbf{x}_2) = c_1\text{proj}_W \mathbf{x}_1 + c_2\text{proj}_W \mathbf{x}_2$.</li>
        <li><strong>Residual</strong>: The vector $\mathbf{e} = \mathbf{x} - \hat{\mathbf{x}}$ represents the component of $\mathbf{x}$ orthogonal to $W$.</li>
      </ul>
    </div>
    
    <h2 id="example-projection" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> 1D Projection (Searching for Shadows)</h2>
    
      <h4>Problem: Shadow of [3, 4] on X-axis</h4>
      <p>Project vector \(\mathbf{y} = [3, 4]\) onto the vector \(\mathbf{u} = [1, 0]\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Overlap:</strong> \(\mathbf{y} \cdot \mathbf{u} = (3 \times 1) + (4 \times 0) = 3\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Normalization:</strong> \(\mathbf{u} \cdot \mathbf{u} = (1 \times 1) = 1\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Result:</strong> \(\hat{\mathbf{y}} = 3 \times [1, 0] = [3, 0]\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We discarded the "Vertical" information (4) as noise. The result stays in the \(\mathbf{u}\) direction.
        </div>
      </div>
    

    <h2 id="example-least-squares" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Least Squares (Simple Regression)</h2>
    
      <h4>Problem: Fitting a Line</h4>
      <p>Least Squares is just a projection. We project our target vector \(\mathbf{y}\) onto the column space of our features \(X\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Calculate:</strong> \(\mathbf{x} = (X^T X)^{-1} X^T \mathbf{y}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Interpret:</strong> The result \(\hat{\mathbf{y}} = X\mathbf{x}\) is the orthogonal projection of \(\mathbf{y}\).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Your "prediction" is the best approximation allowed by your data. The difference (Residual) is always 100% independent of your features.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

y = np.array([3, 4])
u = np.array([1, 0])

# Projection formula
proj_y_u = (np.dot(y, u) / np.dot(u, u)) * u

print(f"Shadow of y on u: {proj_y_u}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Projections are the mathematical way to find the "Best Approximation." They allow us to filter out the noise that doesn't align with our chosen features.</p>
    <ul>
      <li><strong>Gram-Schmidt Preprocessing</strong>: When training models, highly correlated (parallel) features can cause the weights to "explode." We use projections to "orthogonalize" the features—stripping away their mutual overlap so the model sees 100% unique info from every input.</li>
      <li><strong>SVM Margin Calculation</strong>: In Support Vector Machines, we need to find the "Gap" between two classes. The algorithm uses vertical projections to find the absolute closest distance from a data point to the decision boundary, ensuring we maximize the safety margin.</li>
    </ul>
    <p>Teacher's Final Word: A projection is like casting a shadow to see the core shape of an object while ignoring the distracting glare. In AI, it's how we find the "Truth" hidden within a noisy spreadsheet.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Projections give us "shadows." But what about the vectors that *never* move? Explore <strong><a href="#/mathematics/linear-algebra/eigenvalues-eigenvectors">Eigenvalues & Eigenvectors</a></strong>.
    </div>
  `},m={id:"eigenvalues-eigenvectors",title:"Eigenvalues and Eigenvectors",description:"Eigenvectors are the 'Hidden Axes' of a matrix that don't rotate when transformed. Eigenvalues tell you how much they stretch.",color:"#3F51B5",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Linear Algebra · Eigenpairs</div>
      <h1>Eigenvalues & Eigenvectors</h1>
      <p>An <strong>Eigenvector</strong> is a vector that, when multiplied by a matrix, <strong>never changes direction</strong>—it only scales. The <strong>Eigenvalue</strong> \(\lambda\) is the scaling factor. They are the "Fingerprints" of a linear transformation.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Normally, when you multiply a vector by a matrix, the vector gets rotated and stretched into a brand-new direction—absolute chaos. But for every matrix, there are a few "Special Directions" that are immune to rotation. They stay perfectly aligned with their original path; they only grow or shrink. These are the <strong>Eigenvectors</strong>. The <strong>Eigenvalue</strong> (\(\lambda\)) is just the scale factor of that growth. If you find these magic axes, you can simplify even the most complex matrix into a set of simple stretches. This is how we find the "Soul" or the "Main Signal" of our data.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The characteristic Equation</div>
      <p>For a square matrix $A \in \mathbb{R}^{n \times n}$, a non-zero vector $\mathbf{v}$ is an **Eigenvector** and $\lambda$ is its corresponding **Eigenvalue** if:</p>
      <div class="math-block">
        $$A \mathbf{v} = \lambda \mathbf{v}$$
      </div>
      <p>This relationship implies that $(A - \lambda I)\mathbf{v} = \mathbf{0}$. For a non-trivial solution to exist, the matrix $(A - \lambda I)$ must be non-invertible, leading to the **Characteristic Equation**:</p>
      <div class="math-block">
        $$\det(A - \lambda I) = 0$$
      </div>
      <p class="text-xs opacity-70 mt-2">The roots of this $n$-th degree polynomial are the eigenvalues. In ML, these reveal the principal axes of data variation and the stability of iterative systems.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Eigenvectors like the <strong>Axes of Rotation</strong> or the <strong>Anchor Points</strong> of a transformation. 
        If you spin a globe, every city on the surface moves to a new location—except for the North and South Poles. 
        The line through those poles is the <strong>Eigenvector</strong>; it stays perfectly in place while the rest of the world transforms around it. 
        In Machine Learning, we use these eigenvectors to find <strong>Principal Components</strong>—the few "Main Directions" where your data is most spread out, allowing us to ignore the less important wiggles.
      </div>
    </div>

    <visualizer topic="Eigenvalues" />

    <h2 id="derivation">Formal Definition</h2>
    <p>A vector \(\mathbf{v}\) is an eigenvector if:</p>
    <div class="math-block">$$A\mathbf{v} = \lambda\mathbf{v}$$</div>
    <p>To find \(\lambda\), we solve the <strong>Characteristic Equation</strong>:</p>
    <div class="math-block">$$\det(A - \lambda I) = 0$$</div>

    <h2 id="example-diagonal" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Finding Hidden Axes</h2>
    
      <h4>Problem: Identifying Eigenvalues for a Diagonal Matrix</h4>
      <p>For \(A = \begin{bmatrix} 3 & 0 \\ 0 & 2 \end{bmatrix}\), find the eigenpairs.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Scaling is 3x on x and 2x on y.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Check:</strong> Multiplying \([1, 0]\) gives \([3, 0]\). Direct 3x scale.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Check:</strong> Multiplying \([0, 1]\) gives \([0, 2]\). Direct 2x scale.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> \(\lambda_1 = 3, \mathbf{v}_1 = [1, 0]\) and \(\lambda_2 = 2, \mathbf{v}_2 = [0, 1]\). Diagonal matrices already show their eigen-secrets!
        </div>
      </div>
    

    <h2 id="example-chareq" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Characteristic Equation Walkthrough</h2>
    
      <h4>Problem: Solxing for λ of A = [[4, 1], [2, 3]]</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Set up:</strong> \(\det(A - \lambda I) = (4-\lambda)(3-\lambda) - 2 = 0\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Factor:</strong> \(\lambda^2 - 7\lambda + 10 = 0 \to (\lambda - 5)(\lambda - 2) = 0\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Result:</strong> \(\lambda = 5, 2\).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> \(\lambda = 5\) is your "Main Signal." The direction corresponding to this eigenvalue contains the most <strong>Variance</strong> in your data.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

A = np.array([[4, 1], [2, 3]])

# Calculating eigenvalues and eigenvectors
vals, vecs = np.linalg.eig(A)

print(f"Eigenvalues: {vals}")
print(f"Eigenvectors:\n{vecs}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Eigenvectors are the "Hidden Axes" of your data. While the rest of the world rotates into chaos, these special directions stay perfectly aligned.</p>
    <ul>
      <li><strong>Google PageRank</strong>: The reason Google became a giant is an eigenvalue problem. It treats the entire web as a matrix and finds the "Principal Eigenvector." The values in this vector tell the system exactly which websites are the most influential and deserve to be at the top of your search.</li>
      <li><strong>Spectral Clustering</strong>: When data moves in complex "Swirls" that standard algorithms can't handle, we use eigenvalues to find the hidden gaps in the network. This allows the AI to successfully group data points even when they are physically tangled together.</li>
    </ul>
    <p>Teacher's Final Word: Finding the eigenpairs of your data is like finding its "Soul." It reveals the core directions where all the real action happens, allowing you to ignore the noisy wiggles and focus on the main signal.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Some matrices have "Good Behavior" and always produce positive scaling factors. Explore <strong><a href="#/mathematics/linear-algebra/positive-definite">Positive Definite Matrices</a></strong>.
    </div>
  `},p={id:"positive-definite",title:"Positive Definite Matrices",description:"Positive Definite matrices are the 'Stability Kings' of optimization. They always point 'Up' or produce positive scales.",color:"#3F51B5",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Linear Algebra · Stability</div>
      <h1>Positive Definite Matrices</h1>
      <p>A <strong>Positive Definite (PD)</strong> matrix is a symmetric matrix where all eigenvalues are strictly positive (\(\lambda > 0\)). It is the mathematical guarantee that a "multivariate bowl" always has a unique bottom point.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In Machine Learning, we are constantly hunting for the "Bottom of the Bowl"—the minimum loss point. A <strong>Positive Definite (PD)</strong> matrix is the mathematical guarantee that the surface you are walking on is actually a stable bowl and not a trap. It ensures that no matter which way you move, the curvature of the "loss surface" is always pointing back up toward a stable center. This property is known as <strong>Convexity</strong>, and it is the single most important factor in whether your model can actually finish its training or if it will wander forever in a "flat" or "volatile" nightmare.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Quadratic Stability</div>
      <p>A symmetric matrix $A \in \mathbb{R}^{n \times n}$ is **Positive Definite** if the quadratic form resulting from any non-zero vector $\mathbf{x}$ is strictly positive:</p>
      <div class="math-block">
        $$\mathbf{x}^\top A \mathbf{x} > 0, \quad \forall \mathbf{x} \in \mathbb{R}^n \setminus \{\mathbf{0}\}$$
      </div>
      <p>This definition implies several strictly equivalent properties that are easier to check in practice:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Eigenvalue Test</strong>: Each eigenvalue $\lambda_i$ of $A$ satisfies $\lambda_i > 0$.</li>
        <li><strong>Determinant Test</strong>: Every leading principal minor (top-left sub-matrices) has a positive determinant.</li>
        <li><strong>Factorization</strong>: $A$ can be decomposed as $L L^\top$ (Cholesky Factorization), where $L$ is lower triangular.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">If $\mathbf{x}^\top A \mathbf{x} \ge 0$, the matrix is **Positive Semi-Definite**, a condition crucial for valid Kernels and Covariance matrices.</p>
    </div>
    
    <h2 id="example-minimum" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Global Minimum Stability Check</h2>
    
      <h4>Problem: Is this Surface Stable?</h4>
      <p>For \(A = \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix}\), check if it's PD.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify Eigenvalues:</strong> \(\lambda_1 = 2, \lambda_2 = 3\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Check:</strong> Both are strictly positive.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> YES. It's a "Bowl." Any optimization starting in this space will naturally find the center.
        </div>
      </div>
    

    <h2 id="example-hessian" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Hessian of a Quadratic Form</h2>
    
      <h4>Problem: Checking Convexity of f(x, y) = x² + 4y²</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Find Hessian:</strong> \(\nabla^2 f = \begin{bmatrix} 2 & 0 \\ 0 & 8 \end{bmatrix}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Eigenvalues:</strong> 2 and 8.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> The Hessian is Positive Definite. This means the loss function is <strong>Globally Convex</strong> and we can find the perfect weights using Gradient Descent.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

A = np.array([[2, 1], [1, 2]])

# PD Check: Are all eigenvalues > 0?
vals = np.linalg.eigvals(A)
is_pd = np.all(vals > 0)

print(f"Is Matrix Positive Definite? {is_pd}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Think of a Positive Definite matrix as a "Stability Guarantee." It ensures that your optimization surface is a stable bowl rather than a volatile mountain range.</p>
    <ul>
      <li><strong>Optimization Stability</strong>: For a model to converge, its "Loss Surface" needs to be convex (a bowl). A Positive Definite Hessian matrix is the math that guarantees this stability, ensuring Gradient Descent always finds the unique bottom point.</li>
      <li><strong>Gaussian Processes & Kernels</strong>: In SVMs and GP regression, we use "Kernel Matrices" to measure data relationships. These must be Positive Semi-Definite to ensure that the model's "Uncertainty" calculations are logically valid and never result in impossible negative probabilities.</li>
    </ul>
    <p>Teacher's Final Word: Positive Definiteness is the difference between a model that finishes its training and one that wanders forever in a mathematical fog. If you want a stable AI, you need PD matrices.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> PD matrices are stable. Now, learn the "Swiss Army Knife" that decomposes <em>any</em> matrix into these components. Explore <strong><a href="#/mathematics/linear-algebra/svd">Singular Value Decomposition (SVD)</a></strong>.
    </div>
  `},g={id:"svd",title:"Singular Value Decomposition (SVD)",description:"The Swiss Army Knife of Linear Algebra. SVD decomposes any matrix into rotation, scaling, and rotation steps.",color:"#D32F2F",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Linear Algebra · Decompositions</div>
      <h1>Singular Value Decomposition (SVD)</h1>
      <p>SVD is the <strong>Swiss Army Knife</strong> of Linear Algebra. Unlike Eigen-decomposition, it works for <strong>any</strong> matrix—even the "messy" rectangular ones. It is the core algorithm behind image compression and recommendation systems.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Every linear transformation—no matter how messy or complex—can be broken down into three simple, elegant steps: <strong>Rotate, Stretch, Rotate</strong>. This is the power of <strong>Singular Value Decomposition (SVD)</strong>. Unlike Eigen-decomposition, SVD works for every matrix in existence, whether it is square, rectangular, or full of noise. It allows us to mathematically "unravel" any matrix to find the core directions that contain the most information. In Machine Learning, SVD is the engine that finds the hidden structure in our data, telling us which features are actually "Loud" and which are just background static.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Universal Factorization</div>
      <p>Any matrix $A \in \mathbb{R}^{m \times n}$ can be decomposed into three specialized matrices:</p>
      <div class="math-block">
        $$A = U \Sigma V^\top$$
      </div>
      <p>where the components provide a structural breakdown of the transformation:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>$U \in \mathbb{R}^{m \times m}$</strong>: An orthogonal matrix whose columns (left-singular vectors) represent the geometry of the output space.</li>
        <li><strong>$\Sigma \in \mathbb{R}^{m \times n}$</strong>: A diagonal matrix of singular values $\sigma_i$, representing the "strength" of the transformation along each axis.</li>
        <li><strong>$V \in \mathbb{R}^{n \times n}$</strong>: An orthogonal matrix whose columns (right-singular vectors) represent the geometry of the input space.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">SVD is the foundation of data compression; by retaining only the largest $\sigma_i$ values, we obtain the optimal low-rank approximation of the original data.</p>
    </div>
    
    <h2 id="example-reconstruction" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Rotation-Scaling-Rotation Breakdown</h2>
    
      <h4>Problem: Reconstructing A = [[1, 0], [0, 2]]</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Since the matrix is already diagonal, \(\Sigma = [1, 2]\) and \(U, V\) are just the Identity!</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Reconstruct:</strong> \(A = I \times \text{diag}(1, 2) \times I\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> SVD found the "most important" axis is \([0, 1]\) with a strength of 2. It automatically sorts information by power.
        </div>
      </div>
    

    <h2 id="example-compression" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Image Compression (Rank-k)</h2>
    
      <h4>Problem: Reducing 2D Noise</h4>
      <p>Assume your matrix \(A\) has singular values \(\Sigma = [100, 1]\). Reconstruct it with only the top value.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Threshold:</strong> Keep the "Loudest" signal (\(100\)). Zero out the noise (\(1\)).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Compress:</strong> \(\hat{A} = \mathbf{u}_1 \cdot 100 \cdot \mathbf{v}_1^T\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We kept <strong>99%</strong> of the information using only <strong>half</strong> the storage space. This is how high-res photos are transmitted over slow WiFi.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np
from scipy.linalg import svd

A = np.array([[1, 2], [3, 4]])

# U: Output rotation, s: Singular values, Vh: Input rotation
U, s, Vh = svd(A)

print(f"Singular values of A: {s}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>SVD is the "Swiss Army Knife" of data science. It allows you to take any messy, complex matrix and break it down into three simple, elegant steps: **Rotate, Stretch, Rotate.**</p>
    <ul>
      <li><strong>Latent Semantic Analysis (LSA)</strong>: SVD can read 1,000,000 documents and find the "Hidden Topics" inside. By decomposing the matrix, it discovers that words like "Piston" and "Spark" are physically linked to the same latent "Topic" (singular value), even if they never appear on the same page.</li>
      <li><strong>Background Subtraction in Video</strong>: Security systems use SVD to separate "Static" background (low-rank singular values) from "Moving" intruders (high-rank noise). This is how the AI knows to ignore a stationary wall but follow a moving person.</li>
    </ul>
    <p>Teacher's Final Word: SVD is the ultimate "Noise Filter." It allows you to find the signal buried under a mountain of static, ensuring your model focuses only on the high-rank patterns that actually matter.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> SVD is the math. Now, let's look at the ultimate application in data science. Explore <strong><a href="#/mathematics/linear-algebra/pca">Principal Component Analysis (PCA)</a></strong>.
    </div>
  `},u={id:"pca",title:"Principal Component Analysis (PCA)",description:"PCA is the ultimate dimensionality reduction tool. It finds the axes of maximum variance to compress data without losing its soul.",color:"#D32F2F",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Data Science · PCA</div>
      <h1>Principal Component Analysis (PCA)</h1>
      <p><strong>PCA</strong> is the most popular technique for <strong>Dimensionality Reduction</strong>. It uses the power of Eigenvalues and SVD to find the absolute best "Perspective" for looking at high-dimensional data.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In Machine Learning, "More Features" is often a curse. Features can be redundant, highly correlated, or just plain noisy. <strong>Principal Component Analysis (PCA)</strong> is the ultimate tool for finding the "Signal" within that noise. It mathematically rotates your data to find the <strong>Principal Components</strong>—the few directions where your data points are most spread out. By projecting your complex dataset onto these components, you can keep the "Soul" of your data while deleting the irrelevant jitter. It's the difference between memorizing a thousand details and understanding the one main story.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Variance Maximization Problem</div>
      <p>Given a centered data matrix $X \in \mathbb{R}^{n \times d}$, PCA seeks an orthogonal projection onto a $k$-dimensional subspace that captures the maximum variance. The first principal component $\mathbf{w}_1$ is the unit vector that satisfies:</p>
      <div class="math-block">
        $$\mathbf{w}_1 = \arg\max_{\|\mathbf{w}\|=1} \|X\mathbf{w}\|^2 = \arg\max_{\|\mathbf{w}\|=1} \mathbf{w}^\top \Sigma \mathbf{w}$$
      </div>
      <p>Where $\Sigma = \frac{1}{n} X^\top X$ is the covariance matrix. The solution to this optimization problem leads to several critical properties:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Spectral Theorem</strong>: The principal components are the eigenvectors of $\Sigma$.</li>
        <li><strong>Variance Capture</strong>: The eigenvalue $\lambda_i$ represents the variance captured by the $i$-th component.</li>
        <li><strong>Decoupling</strong>: The transformed features (scores) are linearly uncorrelated.</li>
      </ul>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of PCA as <strong>"Finding the Best Camera Angle."</strong> 
        Imagine a clear 3D statue of a horse. If you take a picture from the front, you might just see a vague circle. But if you take it from the side (the direction of maximum spread), you capture the whole essence of the horse in 2D. 
        PCA calculates that perfect <strong>"Side View"</strong> automatically for your data. 
        In AI, we use this to plot 500-dimensional data on a 2D screen or to speed up training by throwing away features that don't actually vary much.
      </div>
    </div>

    <visualizer topic="PCA" />

    <h2 id="steps">2. The 5 Steps of PCA</h2>
    <div class="algorithm-steps">
      <div class="algorithm-step">
        <span class="step-badge">1</span>
        <div><strong>Standardize:</strong> Center the data (Mean = 0).</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">2</span>
        <div><strong>Covariance Matrix:</strong> Find how features vary together.</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">3</span>
        <div><strong>Eigen-analysis:</strong> Get eigenvalues/vectors of Covariance.</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">4</span>
        <div><strong>Sort:</strong> Rank vectors by eigenvalues (Variance).</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">5</span>
        <div><strong>Project:</strong> Multiply data by top-k vectors.</div>
      </div>
    </div>

    <h2 id="example-3d2d" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Reducing 3D Data to 2D</h2>
    
      <h4>Problem: Visualizing a High-D Cluster</h4>
      <p>Data has features: [Height, Weight, Age]. If Age and Height are 100% correlated, can we simplify?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Correlation exists. One axis is redundant.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>PCA:</strong> Finds two axes that capture 99% of the variance.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We can plot this 3D data on a 2D screen without losing any important trends.
        </div>
      </div>
    

    <h2 id="example-variance" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Covariance Matrix Eigen-analysis</h2>
    
      <h4>Problem: Finding the PC for Cov = [[2, 1], [1, 2]]</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Calculate:</strong> \(\det(Cov - \lambda I) = \lambda^2 - 4\lambda + 3 = 0\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Roots:</strong> \(\lambda = 3, 1\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Interpret:</strong> PC1 has 3x more variance than PC2.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> By choosing PC1, you capture <strong>75%</strong> of the total variance (\(3 / (3+1)\)) with just one feature!
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
from sklearn.decomposition import PCA
import numpy as np

# Sample Data (3 features)
X = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])

# Initialize PCA to 2 components
pca = PCA(n_components=2)

# Fit and Transform
X_reduced = pca.fit_transform(X)

print(f"Explained Variance Ratio: {pca.explained_variance_ratio_}")
print(f"Reduced Shape: {X_reduced.shape}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>PCA is like "Finding the Best Camera Angle." It identifies the directions of maximum spread in your data so you can capture its essence without the weight of unnecessary details.</p>
    <ul>
      <li><strong>Genomics Visualization</strong>: Scientists often work with 10,000 genes per patient. PCA projects that massive data onto a 2D plot. Suddenly, patients with similar diseases "Cluster" together on the screen, revealing patterns that were invisible in the raw numbers.</li>
      <li><strong>Real-time Face Detection</strong>: Your phone doesn't look at every single pixel. It uses PCA to find the 50 most important "Eigenfaces"—the primary directions of variation in human features. By looking only at these 50 values, the AI can recognize you in milliseconds.</li>
    </ul>
    <p>Teacher's Final Word: PCA is the ultimate "Noise Cancellation" for your data. It separates the "Soul" of the story from the irrelevant details, allowing your models to run faster and see clearer.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> You've mastered the building blocks of data models. Now, let's explore how we use these models to predict the future in <strong><a href="#/mathematics/statistics/basics">Probability & Statistics</a></strong>.
    </div>
  `},v={id:"linear-algebra",title:"Linear Algebra",description:"Linear Algebra is the language of Machine Learning. It provides the mathematical framework for representing and processing high-dimensional data.",keyConcepts:[{title:"Vectors & Spaces",description:"The arena where data lives, defined by basis and independence."},{title:"Matrix Operations",description:"Transforming space through multiplication, inversion, and determinants."},{title:"Decompositions",description:"Breaking complex transformations into Eigenvalues and SVD."},{title:"Applications",description:"Dimension reduction (PCA) and regression optimization."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Linear Algebra: <span class="text-accent italic">The Language of Machine Learning</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In the world of Machine Learning, <strong>Linear Algebra</strong> is not just a branch of mathematics; it is the fundamental language we use to communicate with data.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This curriculum is broken into <strong>16 focused topics</strong>, moving from the basic mechanics of vectors to advanced decompositions like SVD and Principal Component Analysis (PCA).
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
  `,sections:[e,t,i,a,s,n,o,r,l,d,c,h,m,p,g,u]};export{v as LINEAR_ALGEBRA_DATA};
