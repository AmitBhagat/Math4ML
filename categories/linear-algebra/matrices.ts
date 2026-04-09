import { TopicSection } from '../../src/data/types';

export const matricesSection: TopicSection = {
  id: "matrices",
  title: "Matrices",
  description: "A Matrix is an array of numbers representing a multi-dimensional transformation. They are the spreadsheets of the math world.",
  color: "#FF9800",
  html: String.raw`
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
  `
};
