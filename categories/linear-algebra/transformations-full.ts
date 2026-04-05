import { TopicSection } from '../../src/data/types';

export const transformationsFullSection: TopicSection = {
  id: "transformations-full",
  title: "Linear Transformations & Mappings: The DNA of Coordinate Movement",
  description: "An exploration of linear mappings as the fundamental operators of data movement—covering change of basis, kernel/range subspaces, and the conservation of dimensions via the Rank-Nullity Theorem.",
  formula: "L(\\mathbf{v}) = A\\mathbf{v}, \\quad [v]_{old} = P[v]_{new}, \\quad \\dim(\\ker A) + \\operatorname{rank}(A) = n",
  details: [
    "Change of Basis: Transition Matrices and Coordinate Shifts",
    "Kernel (Null Space): The Geometry of Information Loss",
    "Range (Column Space): The Expressive Capacity of Mappings",
    "Rank-Nullity Theorem: The Law of Dimensional Conservation",
    "ML Application: Bottlenecks and Manifold Learning in Autoencoders",
    "Numerical Implementation: Subspace Basis via SVD"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Transformation Logic</div>
      <a href="#basis">I. Change of Basis and Transition Matrices</a>
      <a href="#subspaces">II. Fundamental Subspaces: Kernel and Range</a>
      <a href="#conservation">III. Law of Dimensional Conservation</a>
      <a href="#lab">Numerical Subspace Basis: NumPy</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="basis" class="premium-h2">I. Change of Basis and Transition Matrices</h2>
    <p>Linear transformations describe how data moves between coordinate systems. Changing basis means expressing vectors in one coordinate system in terms of another. If $P$ is the transition matrix whose columns are the new basis vectors, then the mapping is defined as:</p>

    <div class="premium-math-block">
      \mathbf{x}_{old} = P \mathbf{x}_{new}
    </div>

    <div class="premium-case-study">
      <h4>ML Intuition: Data Whitening</h4>
      <p>In data preprocessing, we "whiten" data by changing its basis to the principal components. This ensures features are uncorrelated and have unit variance, effectively 'untangling' the input distribution for the optimizer.</p>
    </div>

    <!-- SECTION 2 -->
    <h2 id="subspaces" class="premium-h2">II. Fundamental Subspaces: Kernel and Range</h2>
    <p>Every linear transformation $A$ is characterized by two fundamental subspaces that define its information capacity and expressive potential.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">Kernel (Null Space)</div>
      <p style="margin:0">The <strong>Kernel</strong>, $\ker(A)$, is the set of all vectors $\mathbf{v}$ that the transformation sends to the zero vector ($\mathbf{0}$). It represents the information <strong>lost</strong> or collapsed by the mapping.</p>
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">Range (Column Space)</div>
      <p style="margin:0">The <strong>Range</strong> is the set of all possible output vectors. It represents the <strong>expressive capacity</strong> or "reach" of the transformation within the target space.</p>
    </div>

    <!-- SECTION 3 -->
    <h2 id="conservation" class="premium-h2">III. The Law of Dimensional Conservation</h2>
    <p>The total number of input dimensions $n$ is always conserved between what is kept (Rank) and what is lost (Nullity). This is the cornerstone of linear subspace analysis.</p>

    <div class="premium-math-block">
      \dim(\ker A) + \operatorname{rank}(A) = n
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">💡</div>
      <div class="premium-callout-body">
        <strong>Rank-Nullity Insight:</strong> In an autoencoder with a bottleneck layer of size $k$, the rank of the encoding transformation is at most $k$. Any information in the original $n$-dimensional input that lies in the null space of the encoder is permanently discarded.
      </div>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Numerical Subspace Basis: NumPy</h2>
    <div class="premium-math-block">
      <python-code>
import numpy as np
import scipy.linalg

# Define a rank-deficient 2x3 matrix
A = np.array([[1, 2, 3], [2, 4, 6]])

# 1. Null Space (Kernel) Basis
null_space_basis = scipy.linalg.null_space(A)

# 2. Dimensional Metrics
rank = np.linalg.matrix_rank(A)
nullity = null_space_basis.shape[1]

print(f"Matrix A:\n{A}")
print(f"Rank (Dim of Range): {rank}")
print(f"Nullity (Dim of Kernel): {nullity}")
print(f"Total Dimensions: {rank + nullity} (Should equal 3)")
      </python-code>
    </div>
  `
};
