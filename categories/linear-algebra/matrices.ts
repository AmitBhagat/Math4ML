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
      <div class="premium-def-title">Formalism: The Column Space & Linear Action</div>
      <p>A Matrix isn't just a static table of numbers; it is a <strong>Transformation Machine</strong>. It takes a vector and spits out a new one.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Think of the columns of a matrix $A$ as a set of basis vectors $\{\mathbf{a}_1, \dots, \mathbf{a}_n\}$. When we multiply this matrix by a vector $\mathbf{x}$, we are essentially choosing a path through the space using those column vectors as our directions. The output $A\mathbf{x}$ is a point in the <strong>Column Space</strong> of $A$.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>The standard row-column rule ($c_{ij} = \sum a_{ik}b_{kj}$) is just a shortcut. The "true" meaning of matrix-vector multiplication is a <strong>Weighted Sum of Columns</strong>. For a vector $\mathbf{x} = [x_1, \dots, x_n]^T$, the product $A\mathbf{x}$ is derived as:</p>
      <div class="math-block">
        $$A\mathbf{x} = x_1 \begin{bmatrix} a_{1,1} \\ \vdots \\ a_{m,1} \end{bmatrix} + x_2 \begin{bmatrix} a_{1,2} \\ \vdots \\ a_{m,2} \end{bmatrix} + \dots + x_n \begin{bmatrix} a_{1,n} \\ \vdots \\ a_{m,n} \end{bmatrix}$$
      </div>
      <p>This reveals that $A\mathbf{x}$ is just a <strong>Linear Combination</strong> of the columns of $A$. If the columns are dependent, you lose "reach" (rank), and the matrix becomes a bottleneck.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Rule</h3>
      <p>For any $A \in \mathbb{R}^{m \times n}$ and $\mathbf{x} \in \mathbb{R}^n$:</p>
      <ul class="mt-2 space-y-2">
        <li><strong>Matrix Action</strong>: $A\mathbf{x} = \sum_{j=1}^n x_j \mathbf{a}_j$.</li>
        <li><strong>Transformation</strong>: $A$ maps the $n$-dimensional input to an $m$-dimensional output.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Never multiply $A\mathbf{x}$ if the number of columns in $A$ doesn't match the dimensions of $\mathbf{x}$. It's like trying to fit a 3-pin plug into a 2-pin socket—the signal simply has nowhere to go.</p>
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
    <p>In Machine Learning, matrices are the "Industrial Spreadsheets" that organize and transform entire universes of data in a single pulse. They are the storage blocks for everything an AI knows.</p>
    <ul>
      <li><strong>Computer Vision Convolutional Kernels</strong>: When an AI "looks" at an image, it uses small matrices called "Kernels" or "Filters." By sliding these matrices over the image matrix and performing specific operations, the model can detect edges, textures, or even more complex features like "curved lines" or "dog ears." The matrix is literally the model's eyes.</li>
      <li><strong>User-Item Rating Matrices (Netflix/Amazon)</strong>: Recommendation engines organize the entire world into a giant matrix where rows are Users and columns are Products. The numbers inside are ratings. Since most people haven't seen most movies, the matrix is "Sparse" (mostly zeros). The AI's job is a massive matrix game: predicting the missing values to guess what you'd buy next.</li>
    </ul>
    <p>Teacher's Final Word: Think of a Matrix as a <strong>Batch Processor</strong>. Instead of calculating one data point at a time, you pack everything into a matrix and perform a single transformation. It’s the shift from "Handcrafted" math to "Mass Production," allowing AI to process millions of inputs in an instant.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Individually, matrices are static. How do we make them interact? Explore <strong><a href="#/mathematics/linear-algebra/matrix-multiplication">Matrix Multiplication</a></strong>.
    </div>
  `
};

