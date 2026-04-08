import { TopicSection } from '../../src/data/types';

export const matrixRankSection: TopicSection = {
  id: "matrix-rank",
  title: "Matrix Rank",
  description: "Rank measures the number of linearly independent rows or columns in a matrix. It tells you the true 'Information Density' of your data.",
  color: "#FF9800",
  html: String.raw`
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
  `
};
