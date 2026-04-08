const t={id:"vectors",title:"Vectors",description:"A vector is a collection of numbers that represents a point or a magnitude in space. In ML, every data point is a vector.",color:"#3F51B5",html:String.raw`
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
    <p>Why do we care about vectors? Because they allow us to treat <strong>features</strong> as <strong>directions</strong>. If you are predicting house prices, the number of bedrooms is one axis and the square footage is another. A single house then becomes a "location" in this feature space.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a vector as a <strong>Recipe</strong>. The numbers inside tell you exactly how much of each "ingredient" (direction) to mix to reach your destination. If you change one number, you change the entire flavor (data point).
      </div>
    </div>

    <visualizer topic="Vectors" />

    <h2 id="derivation">Formal Definition</h2>
    <p>A vector \(\mathbf{v}\) in \(\mathbb{R}^n\) is an ordered list of \(n\) real numbers:</p>
    <div class="math-block">$$\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{bmatrix}$$</div>
    <p><strong>Vector Addition:</strong> We add vectors component-wise: \(\mathbf{a} + \mathbf{b} = [a_1+b_1, a_2+b_2]^T\).</p>
    <p><strong>Scalar Multiplication:</strong> Scaling a vector grows or shrinks it: \(c\mathbf{v} = [cv_1, cv_2]^T\).</p>

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
    <ul>
      <li><strong>Input Layers</strong>: Every row in your CSV is a vector fed into a model.</li>
      <li><strong>Word Embeddings</strong>: In NLP, words like "King" and "Queen" are vectors in a 1000D space.</li>
      <li><strong>Image Pixels</strong>: A 28x28 grayscale image is a 784-dimensional vector.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Individually, vectors are points. Where do these points "live"? Explore <strong><a href="#/mathematics/linear-algebra/vector-spaces">Vector Spaces</a></strong>.
    </div>
  `},e={id:"vector-spaces",title:"Vector Spaces",description:"A Vector Space is the playground where vectors exist. It's defined by the rules of addition and scaling.",color:"#3F51B5",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🌌 Linear Algebra · Vector Spaces</div>
      <h1>Vector Spaces: The Arena</h1>
      <p>A <strong>Vector Space</strong> is a set of vectors that follows a consistent set of rules. It ensures that when you add or scale vectors, you stay within the "playground" and don't exit the mathematical universe.</p>
    </div>

    <h2 id="rules">1. Axioms: The Rules</h2>
    <p>A set of vectors \(V\) is a <strong>Vector Space</strong> if it is "closed" under addition and scalar multiplication. <strong>Closure</strong> means:</p>
    <ul>
      <li>If \(\mathbf{u}, \mathbf{v} \in V\), then \(\mathbf{u} + \mathbf{v} \in V\).</li>
      <li>If \(\mathbf{u} \in V\) and \(c \in \mathbb{R}\), then \(c\mathbf{u} \in V\).</li>
    </ul>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a <strong>Vector Space</strong> like a <strong>Gaming World</strong>. No matter where you move your character or how high they jump (scale), you should never "fall out of the map." 
        If you can navigate any combination of features without hitting a mathematical "dead end," you're in a vector space.
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
    <ul>
      <li><strong>Principal Component Analysis (PCA)</strong>: PCA find the best Lower-dimensional <strong>Subspace</strong> to represent your data.</li>
      <li><strong>Subspace Learning</strong>: Many domain adaptation techniques assume that different datasets live on the same "Manifold" (Subspace).</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Space is huge. How do we ensure our vectors aren't redundant? Explore <strong><a href="#/mathematics/linear-algebra/linear-independence">Linear Independence</a></strong>.
    </div>
  `},i={id:"linear-independence",title:"Linear Independence",description:"Linear Independence ensures your vectors aren't redundant. If a vector can be written as a combination of others, it adds no new information.",color:"#FF9800",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🏹 Linear Algebra · Linear Independence</div>
      <h1>Linear Independence: Zero Redundancy</h1>
      <p>Linear Independence is a way to measure the <strong>uniqueness</strong> of information. In Machine Learning, if two features are linearly dependent, you have redundant info that could slow down your model or cause errors.</p>
    </div>

    <h2 id="definition">1. The Definition</h2>
    <p>A set of vectors \(\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\}\) is <strong>Linearly Independent</strong> if the only solution to the following equation is all zeros (\(c_i = 0\)):</p>
    <div class="math-block">$$c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_n\mathbf{v}_n = \mathbf{0}$$</div>

    <h2 id="intuition">2. The "No Help" Intuition</h2>
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of vectors as <strong>Speakers</strong> in a debate. 
        If Speaker A says something new, they are independent. 
        But if Speaker B just repeats exactly what Speaker A said (or a mix of A and C), then Speaker B is <strong>Linearly Dependent</strong>. 
        They add no "news" to the conversation.
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
    <ul>
      <li><strong>Multicollinearity</strong>: In Linear Regression, independent features ensure your weights are stable and interpretable.</li>
      <li><strong>Dimensionality Reduction</strong>: Identifying dependent vectors helps us "compress" our data without losing any real info.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Independence is great. But how many independent vectors do we need to build an entire world? Explore <strong><a href="#/mathematics/linear-algebra/basis-dimension">Basis and Dimension</a></strong>.
    </div>
  `},s={id:"basis-dimension",title:"Basis and Dimension",description:"A Basis is the minimal set of vectors needed to build a space. Dimension is just the count of vectors in that set.",color:"#9C27B0",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Linear Algebra · Basis</div>
      <h1>Basis and Dimension</h1>
      <p>A <strong>Basis</strong> is the "Minimalist Skeleton" of a vector space. It’s the smallest set of independent vectors that let you reach <strong>every</strong> point in the space. The <strong>Dimension</strong> is just the total number of vectors in that basis.</p>
    </div>

    <h2 id="basis">1. The Basis Concept</h2>
    <p>A set of vectors \(\mathcal{B} = \{\mathbf{b}_1, \dots, \mathbf{b}_n\}\) is a <strong>Basis</strong> for a space \(V\) if:</p>
    <ul>
      <li>They are <strong>Linearly Independent</strong> (No redundancy).</li>
      <li>They <strong>Span</strong> the entire space (Every vector in \(V\) is a combination of \(\mathcal{B}\)).</li>
    </ul>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a <strong>Basis</strong> like the <strong>Primary Colors</strong> in painting. 
        You only need Red, Blue, and Yellow to create every other color in existence. 
        Adding a "Light Red" wouldn't help—it’s not independent! A basis is the <strong>absolute minimum</strong> you need to reach every color (data point).
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
    <ul>
      <li><strong>Autoencoders</strong>: Try to find a "compressed basis" (Bottleneck layer) that still contains enough information.</li>
      <li><strong>Fourier Transforms</strong>: Decompose signals into a basis of Sine and Cosine waves.</li>
      <li><strong>Compression</strong>: If you have 100 features but the dimension of their span is only 20, you can safely remove 80% of your data.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Space is defined. Now how do we measure the "Alignment" and "Overlap" between our vectors? Explore <strong><a href="#/mathematics/linear-algebra/dot-product">Dot Product</a></strong>.
    </div>
  `},a={id:"dot-product",title:"Dot Product",description:"The Dot Product measures the 'overlap' or 'alignment' between two vectors. It's the engine behind similarity and attention.",color:"#D32F2F",html:String.raw`
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
    <p>At its core, the Dot Product answers one critical question: <em>"How much are these two vectors pointing in the same direction?"</em></p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of the Dot Product as a <strong>"Compatibility Score."</strong> If two vectors are perfectly aligned, the score is high. If they are perpendicular (orthogonal), they have <em>zero</em> in common. If they point in opposite directions, the score is negative.
      </div>
    </div>

    <visualizer topic="DotProduct" />

    <h2 id="derivation">Formal Definition</h2>
    <p>For two vectors \(\mathbf{a}\) and \(\mathbf{b}\):</p>
    <div class="math-block">$$\mathbf{a} \cdot \mathbf{b} = \sum_{i=1}^{n} a_i b_i = a_1b_1 + a_2b_2 + \dots + a_nb_n$$</div>
    <p>Alternatively, using the angle \(\theta\) between them:</p>
    <div class="math-block">$$\mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \|\mathbf{b}\| \cos(\theta)$$</div>

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
    <ul>
      <li><strong>Attention Mechanisms</strong>: Transformers (like ChatGPT) use dot products to decide which words are relevant to the ones it just read.</li>
      <li><strong>Linear Regression</strong>: Your prediction \(\hat{y} = \mathbf{w} \cdot \mathbf{x}\) is just a dot product of weights and features.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Dot product is affected by vector length. How do we measure that length individually? Explore <strong><a href="#/mathematics/linear-algebra/vector-norms">Vector Norms (L1, L2)</a></strong>.
    </div>
  `},n={id:"vector-norms",title:"Vector Norms (L1, L2)",description:"A Norm is a function that measures the 'length' or 'magnitude' of a vector. Different norms tell different stories about the distance.",color:"#D32F2F",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Linear Algebra · Vector Norms</div>
      <h1>Vector Norms: Measuring Magnitude</h1>
      <p>A <strong>Norm</strong> is a mathematical function that assigns a strictly positive "length" to a vector. In Machine Learning, we use norms to prevent models from "overfitting" by penalizing large weights.</p>
    </div>

    <h2 id="definition">1. Definition of a Norm</h2>
    <p>A function \(\|\mathbf{x}\|\) is a norm if it satisfies these properties:</p>
    <ul>
      <li><strong>Non-negativity</strong>: \(\|\mathbf{x}\| \ge 0\).</li>
      <li><strong>Triangle Inequality</strong>: \(\|\mathbf{x} + \mathbf{y}\| \le \|\mathbf{x}\| + \|\mathbf{y}\|\).</li>
      <li><strong>Scaling</strong>: \(\|c\mathbf{x}\| = |c| \cdot \|\mathbf{x}\|\).</li>
    </ul>

    <h2 id="l2">2. L₂ Norm (Euclidean)</h2>
    <p>The most common norm. It is the "as the crow flies" distance from the origin.</p>
    <div class="math-block">$$\|\mathbf{x}\|_2 = \sqrt{x_1^2 + x_2^2 + \dots + x_n^2}$$</div>

    <h2 id="l1">3. L₁ Norm (Manhattan)</h2>
    <p>The "taxicab" distance. It is the sum of the absolute values of the components.</p>
    <div class="math-block">$$\|\mathbf{x}\|_1 = |x_1| + |x_2| + \dots + |x_n|$$</div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of <strong>L₂</strong> as a straight line across a field. 
        Think of <strong>L₁</strong> as walking through a city grid—you can't cut corners; you have to follow the streets. 
        In ML, <strong>L₁</strong> is used when you want a model to be "sparse" (selective), while <strong>L₂</strong> is used to keep weights small and stable.
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
    <ul>
      <li><strong>Lasso (L1)</strong>: Feature selection (makes unimportant weights zero).</li>
      <li><strong>Ridge (L2)</strong>: Stability (prevents weights from exploding).</li>
      <li><strong>Mean Squared Error (MSE)</strong>: Based on the L₂ norm of the errors.</li>
    </ul>

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
    <p>If a vector is a single data point, a matrix is an <strong>entire dataset</strong>. Each row might represent a different house, and each column a different feature (price, size, year). Matrices allow us to process thousands of inputs in a single mathematical "swing."</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a Matrix as a <strong>Batch Processor</strong>. 
        Instead of calculating the price of one house at a time, you put all the house data into a matrix and multiply it by your weight vector. It’s the "Industrial Scale" version of vector math.
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
    <ul>
      <li><strong>Weight Matrices</strong>: The core of a Neural Network—each layer is essentially one big matrix-vector multiplication.</li>
      <li><strong>Covariance Matrices</strong>: Used to find how different features in your data "move" together.</li>
      <li><strong>Image Gradients</strong>: Matrices are used to detect edges in images by calculating changes in pixel intensity.</li>
    </ul>

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
    <p>A matrix-vector product (\(Ax\)) takes a vector and "moves" it to a new location. Matrix multiplication (\(AB\)) takes <strong>all</strong> the vectors that B could possibly move and moves them <strong>again</strong> using A. This allows us to collapse multiple complex steps into a single matrix.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Matrix Multiplication as a <strong>Relay Race</strong>. 
        Matrix B runs the first leg (processes the input), then hands the baton to Matrix A (processes B's output). 
        The product \(AB\) is the <strong>entire race</strong> condensed into one motion. 
        In ML, this is how a model goes from "Raw Image Pixels" to "Cat or Dog."
      </div>
    </div>

    <h2 id="derivation">Formal Definition</h2>
    <p>For \(C = AB\), the element \(c_{ij}\) is the <strong>dot product</strong> of the \(i\)-th row of A and the \(j\)-th column of B:</p>
    <div class="math-block">$$c_{ij} = \sum_{k=1}^{n} a_{ik}b_{kj}$$</div>
    <p><strong>Crucial Rule:</strong> The number of <strong>columns</strong> in A must match the number of <strong>rows</strong> in B.</p>

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
    <ul>
      <li><strong>Neural Networks</strong>: Each layer \(y = \sigma(Wx + b)\) is a massive matrix multiplication (\(W \times x\)).</li>
      <li><strong>Attention Mechanisms</strong>: Query, Key, and Value interactions in LLMs.</li>
      <li><strong>Linear Transforms</strong>: Rotating, scaling, and shearing image data for augmentation.</li>
    </ul>

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
    <p>In algebra, if you multiply by 5, you undo it by dividing by 5. In Linear Algebra, the <strong>Inverse</strong> is that "division." We don't have a division sign for matrices, so we multiply by the Inverse to cancel out a transformation.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a Matrix Inverse as <strong>Unraveling a Knot</strong>. 
        Matrix A tied the knot (mixed the data). 
        The Inverse \(A^{-1}\) is the precise set of movements needed to untie it. 
        But beware: not every knot can be untied—if the matrix squashed the data into 0, that info is gone forever!
      </div>
    </div>

    <h2 id="derivation">Formal Definition</h2>
    <p>The matrix \(A^{-1}\) is defined by the property:</p>
    <div class="math-block">$$AA^{-1} = A^{-1}A = I$$</div>
    <p>where \(I\) is the <strong>Identity Matrix</strong> (the "1" of matrices). For a 2x2 matrix, the formula is:</p>
    <div class="math-block">$$A^{-1} = \frac{1}{\det(A)} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$</div>

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
    <ul>
      <li><strong>Linear Regression (Normal Equation)</strong>: \(\beta = (X^T X)^{-1} X^T y\) relies on inverting the feature correlation matrix.</li>
      <li><strong>Optimization</strong>: Newton’s Method uses the inverse of the Hessian to find the local minimum faster.</li>
    </ul>

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
    <p>Imagine a unit square on a grid (area = 1). When you multiply it by a matrix, it might stretch into a larger rectangle or rotate into a diamond. The <strong>Determinant</strong> is the area of that new shape. If \(\det = 2\), the space doubled; if \(\det = 0\), the space was squashed into a flat line.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of the Determinant as a <strong>"Dimension Watchdog."</strong> 
        If the determinant is zero, your matrix has "deleted" a dimension. 
        It’s like turning a 3D sphere into a 2D pancake—you can't go back! 
        That’s why matrices with zero determinant have no inverse (Singular Matrices).
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
    <ul>
      <li><strong>Jacobians</strong>: Calculating change in coordinate systems when training Variational Autoencoders (VAEs).</li>
      <li><strong>Probability Distributions</strong>: The "Normalization Constant" in Multivariate Normal distributions involves \(\det(\Sigma)\).</li>
    </ul>

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
    <p>You might have a spreadsheet with 100 columns (features), but if 80 of them are just combinations of others, your <strong>Matrix Rank</strong> is only 20. Rank is the "Reality Check" that tells you how much unique information you actually have before you start training a model.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Matrix Rank as <strong>Unique Witnesses</strong> in a courtroom. 
        If 5 people testify but 4 of them are just repeating exactly what the first person said, you only have <strong>Rank 1</strong> evidence. 
        In ML, high rank means diverse, "independent" features. Low rank means "noisy" or redundant data.
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
    <ul>
      <li><strong>Low-Rank Approximation</strong>: In recommendation systems, we approximate a massive "User-Item" matrix with a low-rank version to find hidden "topics."</li>
      <li><strong>Multicollinearity</strong>: Rank helps identify redundant features that could make a regression model unstable.</li>
    </ul>

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
    <p>In Machine Learning, we often have high-dimensional data that we want to simplify. <strong>Orthogonal Projections</strong> allow us to "condense" a vector into a smaller subspace while keeping as much of the original information as possible. It’s like looking at a 3D shadow on a 2D wall—you lose depth, but you keep the shape.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a Projection as a <strong>"Best Approximation."</strong> 
        If you are on a stage and a spotlight shines on you, your <strong>shadow</strong> on the floor is the "closest point" to you that exists on that floor. 
        In ML, we use this to find the "closest" prediction to our real labels.
      </div>
    </div>

    <visualizer topic="Projections" />

    <h2 id="derivation">Formal Definition</h2>
    <p>The projection of vector \(\mathbf{y}\) onto vector \(\mathbf{u}\) is:</p>
    <div class="math-block">$$\text{proj}_{\mathbf{u}}(\mathbf{y}) = \hat{\mathbf{y}} = \frac{\mathbf{y} \cdot \mathbf{u}}{\mathbf{u} \cdot \mathbf{u}} \mathbf{u}$$</div>
    <p>The <strong>Error Vector</strong> (\(\mathbf{e} = \mathbf{y} - \hat{\mathbf{y}}\)) is always <strong>Orthogonal</strong> to \(\mathbf{u}\).</p>

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
    <ul>
      <li><strong>Linear Regression</strong>: The core solver (Normal Equation) is a sequence of projections.</li>
      <li><strong>Gram-Schmidt Process</strong>: Turning any set of vectors into an <strong>Orthogonal Basis</strong> for training stability.</li>
      <li><strong>Support Vector Machines (SVMs)</strong>: Finding the perpendicular distance from a sample to the decision boundary.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Projections give us "shadows." But what about the vectors that *never* move? Explore <strong><a href="#/mathematics/linear-algebra/eigenvalues-eigenvectors">Eigenvalues & Eigenvectors</a></strong>.
    </div>
  `},p={id:"eigenvalues-eigenvectors",title:"Eigenvalues and Eigenvectors",description:"Eigenvectors are the 'Hidden Axes' of a matrix that don't rotate when transformed. Eigenvalues tell you how much they stretch.",color:"#3F51B5",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Linear Algebra · Eigenpairs</div>
      <h1>Eigenvalues & Eigenvectors</h1>
      <p>An <strong>Eigenvector</strong> is a vector that, when multiplied by a matrix, <strong>never changes direction</strong>—it only scales. The <strong>Eigenvalue</strong> \(\lambda\) is the scaling factor. They are the "Fingerprints" of a linear transformation.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Normally, when you multiply a vector by a matrix, it gets rotated and stretched into chaos. But for every matrix, there are a few "Special directions" that stay perfectly still. If you know these directions, you can simplify the entire matrix into a set of simple stretches. This is how we find <strong>Principal Components</strong> in data.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Eigenvectors like the <strong>Axes of Rotation</strong>. 
        If you spin a globe, every point moves—except for the North and South Poles. 
        The "Line through the Poles" is the <strong>Eigenvector</strong>. 
        It stays in place while everything else transforms around it.
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
    <ul>
      <li><strong>Principal Component Analysis (PCA)</strong>: Finding the eigenvectors of the data's covariance matrix to reduce dimensions.</li>
      <li><strong>Google PageRank</strong>: Your search results are ranked based on the leading eigenvector of a massive "Web matrix."</li>
      <li><strong>Spectral Clustering</strong>: Using eigenvalues to find groups (clusters) in complex data networks.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Some matrices have "Good Behavior" and always produce positive scaling factors. Explore <strong><a href="#/mathematics/linear-algebra/positive-definite">Positive Definite Matrices</a></strong>.
    </div>
  `},g={id:"positive-definite",title:"Positive Definite Matrices",description:"Positive Definite matrices are the 'Stability Kings' of optimization. They always point 'Up' or produce positive scales.",color:"#3F51B5",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Linear Algebra · Stability</div>
      <h1>Positive Definite Matrices</h1>
      <p>A <strong>Positive Definite (PD)</strong> matrix is a symmetric matrix where all eigenvalues are strictly positive (\(\lambda > 0\)). It is the mathematical guarantee that a "multivariate bowl" always has a unique bottom point.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In Optimization (Gradient Descent), we want to reach the minimum of a "loss surface." If the Hessian matrix (\(H\)) at a point is <strong>Positive Definite</strong>, it means the surface is locally curved like a bowl. No matter which way you move, you'll eventually "roll back down" to the center. This is the definition of <strong>Convexity</strong>.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a Positive Definite matrix like a <strong>Trampoline</strong>. 
        No matter where you step on it (\(\mathbf{x}\)), the surface pushes back "Up" toward you (\(\mathbf{x}^T A \mathbf{x} > 0\)). 
        If the matrix were <strong>Indefinite</strong>, it would be like a <strong>Saddle</strong>—it pushes up in one direction but collapses under you in another. 
        Stability is everything in ML.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <p>A symmetric matrix \(A\) is <strong>Positive Definite</strong> if for any non-zero vector \(\mathbf{x}\):</p>
    <div class="math-block">$$\mathbf{x}^T A \mathbf{x} > 0$$</div>
    <p><strong>Shortcut:</strong> All eigenvalues \(\lambda_i\) must be \(> 0\).</p>

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
    <ul>
      <li><strong>Kernel Methods (SVMs)</strong>: The Gram Matrix must be <strong>Positive Semi-Definite</strong> (\(\ge 0\)) to ensure a valid optimization problem.</li>
      <li><strong>Gaussian Processes</strong>: The Covariance Matrix is always Positive Semi-Definite.</li>
      <li><strong>Newton's Method</strong>: Relies on the Hessian being PD to guarantee convergence to a minimum.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> PD matrices are stable. Now, learn the "Swiss Army Knife" that decomposes <em>any</em> matrix into these components. Explore <strong><a href="#/mathematics/linear-algebra/svd">Singular Value Decomposition (SVD)</a></strong>.
    </div>
  `},m={id:"svd",title:"Singular Value Decomposition (SVD)",description:"The Swiss Army Knife of Linear Algebra. SVD decomposes any matrix into rotation, scaling, and rotation steps.",color:"#D32F2F",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Linear Algebra · Decompositions</div>
      <h1>Singular Value Decomposition (SVD)</h1>
      <p>SVD is the <strong>Swiss Army Knife</strong> of Linear Algebra. Unlike Eigen-decomposition, it works for <strong>any</strong> matrix—even the "messy" rectangular ones. It is the core algorithm behind image compression and recommendation systems.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Every linear transformation can be broken down into three simple steps: Rotate, Stretch, Rotate. SVD allows us to take a "chaos" matrix and find the core directions that contain all the information. In Machine Learning, this helps us find the "structure" in noisy data.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a lump of <strong>Pizza Dough</strong>. 
        SVD says you can turn it into any final pizza in 3 steps: 
        1. <strong>Rotate</strong> the dough to find the best axis, 
        2. <strong>Stretch</strong> it into a circle (Scaling), 
        3. <strong>Rotate</strong> it again to align it with the box.
        Even the messiest matrix is just a sequence of these 3 clean movements.
      </div>
    </div>

    <visualizer topic="SVD" />

    <h2 id="formula">2. The SVD Formula</h2>
    <div class="math-block">$$A = U \Sigma V^T$$</div>
    <ul>
      <li><strong>U:</strong> Left Singular Vectors (Rotates into the output space).</li>
      <li><strong>Σ:</strong> Singular Values (The scaling factors, in descending order).</li>
      <li><strong>Vᵀ:</strong> Right Singular Vectors (Rotates the input space).</li>
    </ul>

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
    <ul>
      <li><strong>Principal Component Analysis (PCA)</strong>: Most robust PCA implementations use SVD internally.</li>
      <li><strong>Topic Modeling (LSA)</strong>: SVD finds hidden topics in massive text corpora.</li>
      <li><strong>Low-Rank Recommendation</strong>: Predicting missing ratings by assuming the "Value" matrix is low-rank.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> SVD is the math. Now, let's look at the ultimate application in data science. Explore <strong><a href="#/mathematics/linear-algebra/pca">Principal Component Analysis (PCA)</a></strong>.
    </div>
  `},v={id:"pca",title:"Principal Component Analysis (PCA)",description:"PCA is the ultimate dimensionality reduction tool. It finds the axes of maximum variance to compress data without losing its soul.",color:"#D32F2F",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Data Science · PCA</div>
      <h1>Principal Component Analysis (PCA)</h1>
      <p><strong>PCA</strong> is the most popular technique for <strong>Dimensionality Reduction</strong>. It uses the power of Eigenvalues and SVD to find the absolute best "Perspective" for looking at high-dimensional data.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In Machine Learning, "More Features" is not always better. Features can be redundant (High-Correlation) or noisy. PCA finds the <strong>Principal Components</strong>—the directions in which the data is most spread out. By projecting data onto these components, we can keep the "Signal" while deleting the "Noise."</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of PCA as <strong>Finding the Best Camera Angle</strong>. 
        Imagine a clear 3D statue of a horse. If you take a picture from the front, you might just see a circle. But if you take it from the side (the direction of maximum spread), you capture the whole horse in 2D. 
        PCA calculates that perfect "Side View" automatically.
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
    <ul>
      <li><strong>Visualization</strong>: Plotting 100-dimensional genomics data in 2D to find clusters of diseases.</li>
      <li><strong>Preprocessing</strong>: Speeding up training by removing "Heigh-Correlation" features.</li>
      <li><strong>Face Recognition (Eigenfaces)</strong>: Representing human faces as a combination of a few thousand "Template" eigenvectors.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> You've mastered the building blocks of data models. Now, let's explore how we use these models to predict the future in <strong><a href="#/mathematics/statistics/basics">Probability & Statistics</a></strong>.
    </div>
  `},u={id:"linear-algebra",title:"Linear Algebra",description:"Linear Algebra is the language of Machine Learning. It provides the mathematical framework for representing and processing high-dimensional data.",keyConcepts:[{title:"Vectors & Spaces",description:"The arena where data lives, defined by basis and independence."},{title:"Matrix Operations",description:"Transforming space through multiplication, inversion, and determinants."},{title:"Decompositions",description:"Breaking complex transformations into Eigenvalues and SVD."},{title:"Applications",description:"Dimension reduction (PCA) and regression optimization."}],introHtml:String.raw`
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
  `,sections:[t,e,i,s,a,n,o,r,l,d,c,h,p,g,m,v]};export{u as LINEAR_ALGEBRA_DATA};
