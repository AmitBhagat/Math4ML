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
    <p>If a vector is a single data point, a matrix is an <strong>entire dataset</strong>. Each row might represent a different house, and each column a different feature (price, size, year). Matrices allow us to process thousands of inputs in a single mathematical "swing."</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a Matrix as a <strong>Batch Processor</strong>. 
        Instead of calculating the price of one house at a time, you put all the house data into a matrix and multiply it by your weight vector. It’s the "Industrial Scale" version of vector math.
      </div>
    </div>

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
  `
};
