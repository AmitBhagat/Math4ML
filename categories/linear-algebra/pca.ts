import { TopicSection } from '../../src/data/types';

export const pcaSection: TopicSection = {
  id: "pca",
  title: "Principal Component Analysis (PCA)",
  description: "PCA is the ultimate dimensionality reduction tool. It finds the axes of maximum variance to compress data without losing its soul.",
  color: "#D32F2F",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Data Science · PCA</div>
      <h1>Principal Component Analysis (PCA)</h1>
      <p><strong>PCA</strong> is the most popular technique for <strong>Dimensionality Reduction</strong>. It uses the power of Eigenvalues and SVD to find the absolute best "Perspective" for looking at high-dimensional data.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In Machine Learning, "More Features" is often a curse. Features can be redundant, highly correlated, or just plain noisy. <strong>Principal Component Analysis (PCA)</strong> is the ultimate tool for finding the "Signal" within that noise. It mathematically rotates your data to find the <strong>Principal Components</strong>—the few directions where your data points are most spread out. By projecting your complex dataset onto these components, you can keep the "Soul" of your data while deleting the irrelevant jitter. It's the difference between memorizing a thousand details and understanding the one main story.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Lagrangian & Variance Maximization</div>
      <p>PCA is the search for the "Most Informative Projection." It finds the axis where your data points are the most spread out, preserving the "Signal" while deleting the "Noise."</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Given a centered data matrix $X$ (where the average of every feature is 0), we want to find a unit direction $\mathbf{w}$ such that when we project our data onto it, the variance of the resulting points is <strong>Maximum</strong>. Geometrically, we are looking for the longest axis of the data "cloud."</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>The variance of the projected data $X\mathbf{w}$ is given by the quadratic form $\mathbf{w}^\top \Sigma \mathbf{w}$, where $\Sigma = \frac{1}{n} X^\top X$ is the Covariance Matrix. We want to maximize this variance subject to the constraint that $\mathbf{w}$ is a unit vector ($\mathbf{w}^\top \mathbf{w} = 1$). We set up the <strong>Lagrangian</strong>:</p>
      <div class="math-block">
        $$\mathcal{L}(\mathbf{w}, \lambda) = \mathbf{w}^\top \Sigma \mathbf{w} - \lambda (\mathbf{w}^\top \mathbf{w} - 1)$$
      </div>
      <p>Taking the derivative with respect to $\mathbf{w}$ and setting it to zero:</p>
      <div class="math-block">
        $$\frac{\partial \mathcal{L}}{\partial \mathbf{w}} = 2\Sigma \mathbf{w} - 2\lambda \mathbf{w} = 0 \implies \Sigma \mathbf{w} = \lambda \mathbf{w}$$
      </div>
      <p>This reveals a profound truth: The directions of maximum variance are exactly the <strong>Eigenvectors</strong> of the covariance matrix, and the amount of variance captured is the <strong>Eigenvalue</strong> $\lambda$.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>To reduce noise, we keep the top $k$ components:</p>
      <ul class="mt-2 space-y-2">
        <li><strong>Principal Components</strong>: The eigenvectors of $\Sigma$ sorted by $\lambda$.</li>
        <li><strong>Explained Variance</strong>: $\frac{\lambda_i}{\sum \lambda_j}$ tells you the percentage of "truth" captured by that axis.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: PCA assumes the data is centered. If you forget to subtract the mean, your first "Principal Component" will just point from the origin to the center of your data cloud—a useless direction that tells you nothing about the internal structure.</p>
    </div>
    
    <visualizer topic="pca" />
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of PCA as <strong>"Finding the Best Camera Angle."</strong> 
        Imagine a clear 3D statue of a horse. If you take a picture from the front, you might just see a vague circle. But if you take it from the side (the direction of maximum spread), you capture the whole essence of the horse in 2D. 
        PCA calculates that perfect <strong>"Side View"</strong> automatically for your data. 
        In AI, we use this to plot 500-dimensional data on a 2D screen or to speed up training by throwing away features that don't actually vary much.
      </div>
    </div>



    <h2 id="steps">2. The 5 Steps of PCA</h2>
    <div class="algorithm-steps">
      <div class="algorithm-step">
        <span class="step-badge">1</span>
        <div><strong>Standardize:</strong> Center the data (Mean = 0).</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">2</span>
        <div><strong>Covariance Matrix:</strong> Find how features vary together.</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">3</span>
        <div><strong>Eigen-analysis:</strong> Get eigenvalues/vectors of Covariance.</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">4</span>
        <div><strong>Sort:</strong> Rank vectors by eigenvalues (Variance).</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">5</span>
        <div><strong>Project:</strong> Multiply data by top-k vectors.</div>
      </div>
    </div>

    <h2 id="example-3d2d" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Reducing 3D Data to 2D</h2>
    
      <h4>Problem: Visualizing a High-D Cluster</h4>
      <p>Data has features: [Height, Weight, Age]. If Age and Height are 100% correlated, can we simplify?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Correlation exists. One axis is redundant.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>PCA:</strong> Finds two axes that capture 99% of the variance.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We can plot this 3D data on a 2D screen without losing any important trends.
        </div>
      </div>
    

    <h2 id="example-variance" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Covariance Matrix Eigen-analysis</h2>
    
      <h4>Problem: Finding the PC for Cov = [[2, 1], [1, 2]]</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Calculate:</strong> \(\det(Cov - \lambda I) = \lambda^2 - 4\lambda + 3 = 0\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Roots:</strong> \(\lambda = 3, 1\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Interpret:</strong> PC1 has 3x more variance than PC2.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> By choosing PC1, you capture <strong>75%</strong> of the total variance (\(3 / (3+1)\)) with just one feature!
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
from sklearn.decomposition import PCA
import numpy as np

# Sample Data (3 features)
X = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])

# Initialize PCA to 2 components
pca = PCA(n_components=2)

# Fit and Transform
X_reduced = pca.fit_transform(X)

print(f"Explained Variance Ratio: {pca.explained_variance_ratio_}")
print(f"Reduced Shape: {X_reduced.shape}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>PCA is the ultimate "Noise Cancellation" for your data. It separates the "Soul" of the story from the irrelevant details, allowing your models to run faster and see clearer by focusing only on the directions of maximum spread.</p>
    <ul>
      <li><strong>Eigenfaces for Face Recognition</strong>: Your phone's biometric system doesn't compare every pixel of your face to a database. It uses PCA to find the 50 most important "Eigenfaces"—the primary directions of variation in human features (like jawline width or eye distance). By looking only at these 50 values, the AI identifies you in milliseconds, ignoring the "noise" of lighting or individual pimples.</li>
      <li><strong>Genomics & Disease Clustering</strong>: Scientists often work with 10,000+ genes per patient. PCA squashes that massive, unreadable data onto a 2D plot. Suddenly, patients with similar medical conditions "Cluster" together on the screen, revealing hidden geometric relationships between genetic markers and diseases that were invisible in the raw spreadsheet.</li>
    </ul>
    <p>Teacher's Final Word: PCA is the difference between memorizing a thousand boring details and understanding the one main story. It’s the "Best Camera Angle" for your data, ensuring that every dimension you keep is actually contributing to the truth of your model.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> You've mastered the building blocks of data models. Now, let's explore how we use these models to predict change in <strong><a href="#/mathematics/calculus/derivatives">Calculus & Differentiation</a></strong>.
    </div>
  `
};

