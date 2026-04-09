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
    <p>You might have a dataset with 100 features (columns), but if 80 of them are just duplicates or simple combinations of others, your <strong>Matrix Rank</strong> is only 20. Rank is the "Reality Check" of Linear Algebra. It tells you the <strong>True Information Density</strong> of your data—the actual number of dimensions you are working with once you strip away all the fluff and redundancy. In Machine Learning, high rank means you have a diverse set of independent sensors, while low rank means your model is essentially listening to the same gossip repeated multiple times.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Dimension of the Span</div>
      <p>The **Rank** of a matrix $A$, denoted $\text{rank}(A)$, is defined as the dimension of the vector space spanned by its columns (or rows). Formally:</p>
      <div class="math-block">
        $$\text{rank}(A) = \dim(\text{col}(A)) = \dim(\text{row}(A))$$
      </div>
      <p>Crucially, $\text{rank}(A) \le \min(m, n)$. A matrix is called **Full Rank** if its rank equals the smaller of its two dimensions. Key implications include:</p>
      <ul class="mt-2 space-y-1">
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
    <p>Rank is the "Reality Check" of Linear Algebra. It tells you the **True Information Density** of your data—the actual number of independent dimensions you are working with once you strip away all the fluff and redundant copycats.</p>
    <ul>
      <li><strong>Low-Rank Recommendation Systems</strong>: Services like Netflix treat user ratings as a giant matrix. By forcing the model to find a "Low-Rank" approximation of this matrix, we discover the core "Latent Factors" (like Preference for Sci-Fi or Hate for Musicals) that explain millions of ratings. This turns a sparse, messy grid into a lean, predictive engine.</li>
      <li><strong>Identifying Degrees of Freedom</strong>: In physics-based ML or robotics, the rank of a "Jacobian Matrix" tells you the actual number of ways a robot arm can move. If the rank drops (due to a mechanical limit), the robot loses a "Degree of Freedom." By monitoring rank, we ensure the system always knows the limits of its own physical agency.</li>
    </ul>
    <p>Teacher's Final Word: Rank is what separates a rich, diverse dataset from a loud but repetitive one. No matter how many columns you have, the Rank is the ultimate truth of your data's variety. In the world of AI, high rank is intelligence; low rank is just noise.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Rank ensures our directions are unique. How do we find the "Distance" between those directions? Explore <strong><a href="#/mathematics/linear-algebra/orthogonality-projections">Orthogonality & Projections</a></strong>.
    </div>
  `
};

