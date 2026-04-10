import { TopicSection } from '../../src/data/types';

export const vectorsSection: TopicSection = {
  id: "vectors",
  title: "Vectors",
  description: "A vector is a collection of numbers that represents a point or a magnitude in space. In ML, every data point is a vector.",
  color: "#3F51B5",
  html: String.raw`
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

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The $n$-tuplet & Geometric Magnitude</div>
      <p>A vector $\mathbf{v} \in \mathbb{R}^n$ is an ordered sequence of $n$ real numbers. To understand its "essence," we define it through its length and direction.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine a point in $n$-dimensional space. The vector $\mathbf{v}$ is the arrow connecting the origin $\mathbf{0}$ to this point. Its "size" isn't just a single number; it's the result of the spatial relationships between all its components.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation of Length</h3>
      <p>In 2D, we use the Pythagorean theorem: $c^2 = a^2 + b^2$. For a vector in $n$ dimensions, we generalize this logic. The magnitude (norm) $\|\mathbf{v}\|$ is derived by summing the "energy" of each component:</p>
      <div class="math-block">
        $$\|\mathbf{v}\| = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}$$
      </div>
      <p>A vector with $\|\mathbf{v}\| = 1$ is called a <strong>Unit Vector</strong>, derived as $\hat{\mathbf{v}} = \frac{\mathbf{v}}{\|\mathbf{v}\|}$.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Operations</h3>
      <p>Two fundamental rules govern vector algebra, allowing us to "navigate" data space:</p>
      <ul class="mt-2 space-y-2">
        <li><strong>Vector Addition</strong>: Geometrically, this is "tip-to-tail" placement. Algebraically:
          $$\mathbf{u} + \mathbf{v} = \begin{bmatrix} u_1+v_1 \\ \vdots \\ u_n+v_n \end{bmatrix}$$
        </li>
        <li><strong>Scalar Multiplication</strong>: Stretching or compressing the vector without changing its line of span:
          $$c\mathbf{v} = \begin{bmatrix} cv_1 \\ \vdots \\ cv_n \end{bmatrix}$$
        </li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Never add vectors of different dimensions. It's like trying to add "height in cm" to "color of an apple"—the math will break because the spaces don't align.</p>
    </div>

    <visualizer topic="Vectors" />
    
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
    <p>Vectors are the "DNA of Data." In ML, we don't see objects; we see coordinates in a high-dimensional reality where every quality—from the price of a stock to the pixel color of a cat's ear—is mapped to a specific numeric direction.</p>
    <ul>
      <li><strong>Semantic Word Embeddings (NLP)</strong>: Modern AI doesn't read words; it reads "Embeddings." Every word is translated into a 300-dimension vector. This geometry allows the computer to find relationships through subtraction: if you take the vector for "King," subtract the vector for "Man," and add the vector for "Woman," the resulting point in space is mathematically closest to the vector for "Queen." It’s a geometric logic for human language.</li>
      <li><strong>IoT Industrial Sensor Fusion</strong>: In a modern factory, a single "State Vector" can represent the entire health of a machine by combining temperature, vibration frequency, and power consumption into a single point. By tracking how this vector "moves" through time, engineers can detect an impending failure before it happens, simply by watching for the vector to drift into a "Danger Zone" in the coordinate space.</li>
    </ul>
    <p>Teacher's Final Word: Vectorization is the tactical process of turning messy reality into a neat coordinate system. Once you can represent a complex problem as a point in space, you can use the raw, elegant geometry of the universe to find your solution.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Individually, vectors are points. Where do these points "live"? Explore <strong><a href="#/mathematics/linear-algebra/vector-spaces">Vector Spaces</a></strong>.
    </div>
  `
};

