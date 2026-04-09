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
  `
};

