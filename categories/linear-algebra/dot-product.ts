import { TopicSection } from '../../src/data/types';

export const dotProductSection: TopicSection = {
  id: "dot-product",
  title: "Dot Product",
  description: "The Dot Product measures the 'overlap' or 'alignment' between two vectors. It's the engine behind similarity and attention.",
  color: "#D32F2F",
  html: String.raw`
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

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Inner Product & The Law of Cosines</div>
      <p>The Dot Product is the bridge between raw numbers (coordinates) and physical reality (angles). We derive it by looking at the geometry of a triangle.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Consider two vectors $\mathbf{u}$ and $\mathbf{v}$ starting at the origin, with an angle $\theta$ between them. They form two sides of a triangle. The third side is the vector $\mathbf{w} = \mathbf{u} - \mathbf{v}$.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>From the Law of Cosines, we know the relationship between the lengths of the sides:</p>
      <div class="math-block">
        $$\|\mathbf{u} - \mathbf{v}\|^2 = \|\mathbf{u}\|^2 + \|\mathbf{v}\|^2 - 2\|\mathbf{u}\|\|\mathbf{v}\|\cos(\theta)$$
      </div>
      <p>Using the property that $\|\mathbf{x}\|^2 = \mathbf{x} \cdot \mathbf{x}$, we expand the left side:</p>
      <div class="math-block">
        $$(\mathbf{u} - \mathbf{v}) \cdot (\mathbf{u} - \mathbf{v}) = \mathbf{u} \cdot \mathbf{u} - 2(\mathbf{u} \cdot \mathbf{v}) + \mathbf{v} \cdot \mathbf{v}$$
      </div>
      <p>Equating both expressions and cancelling identical terms ($\|\mathbf{u}\|^2$ and $\|\mathbf{v}\|^2$), we find the definition of the Dot Product:</p>
      <div class="math-block">
        $$-2(\mathbf{u} \cdot \mathbf{v}) = -2\|\mathbf{u}\|\|\mathbf{v}\|\cos(\theta)$$
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Formula</h3>
      <p>The duality of the Dot Product allows us to calculate angles using only coordinates:</p>
      <div class="math-block">
        $$\mathbf{u} \cdot \mathbf{v} = \sum_{i=1}^n u_i v_i = \|\mathbf{u}\| \|\mathbf{v}\| \cos(\theta)$$
      </div>
      <p class="mt-4 italic text-sm">Gotcha: If the dot product is 0, $\cos(\theta) = 0$, meaning the vectors are orthogonal (90°). If it's negative, they are pointing in "opposite" directions (> 90°).</p>
    </div>
    
    <visualizer topic="dot-product" />


    
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
    <p>Think of the Dot Product as a "Similarity Radar." It is the fundamental way computers measure the conceptual overlap between words, images, or even customer personalities.</p>
    <ul>
      <li><strong>Content-Based Movie Recommendations</strong>: Netflix represents movies as vectors based on features like "Action Score," "Romance Score," and "Director Style." When you watch a film, the system calculates the dot product between that film's vector and every other movie in the library. A high dot product indicates that the "Directions" (the vibes) align perfectly, signaling a match you'll likely enjoy.</li>
      <li><strong>Transformer Attention Mechanics (Large Language Models)</strong>: Every time you ask ChatGPT a question, it uses billions of dot products to decide which words to focus on. Each word creates a "Query" vector and a "Key" vector; the dot product between them calculates the "Attention Score." A high score essentially tells the model: "When looking at word A, you must pay heavy attention to word B." It is the mathematical engine of human-like context.</li>
    </ul>
    <p>Teacher's Final Word: In AI, the dot product is the universal gauge of alignment. Whether you're finding a girlfriend on a dating app or training a trillion-parameter LLM, you are essentially asking the math to find the vectors that are pointing in the same direction.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Dot product is affected by vector length. How do we measure that length individually? Explore <strong><a href="#/mathematics/linear-algebra/vector-norms">Vector Norms (L1, L2)</a></strong>.
    </div>
  `
};


