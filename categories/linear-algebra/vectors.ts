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

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example-data">Example 1: Data Representation</a>
      <a href="#example-navigation">Example 2: Vector Navigation</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Basic Arithmetic</strong>: Summing and multiplying numbers.</li>
        <li><strong>Coordinate Geometry</strong>: Plotting points on an (x, y) grid.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>Why do we care about vectors? Because they allow us to treat <strong>features</strong> as <strong>directions</strong>. If you are predicting house prices, the number of bedrooms is one axis and the square footage is another. A single house then becomes a "location" in this feature space.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of a vector as a <strong>Recipe</strong>. The numbers inside tell you exactly how much of each "ingredient" (direction) to mix to reach your destination. If you change one number, you change the entire flavor (data point).
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>A vector \(\mathbf{v}\) in \(\mathbb{R}^n\) is an ordered list of \(n\) real numbers:</p>
    <div class="math-block">$$\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{bmatrix}$$</div>
    <p><strong>Vector Addition:</strong> We add vectors component-wise: \(\mathbf{a} + \mathbf{b} = [a_1+b_1, a_2+b_2]^T\).</p>
    <p><strong>Scalar Multiplication:</strong> Scaling a vector grows or shrinks it: \(c\mathbf{v} = [cv_1, cv_2]^T\).</p>

    <h2 id="example-data">Example 1: Data Representation</h2>
    <div class="example-box">
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
    </div>

    <h2 id="example-navigation">Example 2: Vector Navigation</h2>
    <div class="example-box">
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
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
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
  `
};
