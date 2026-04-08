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
    <p>In Machine Learning, "More Features" is not always better. Features can be redundant (High-Correlation) or noisy. PCA finds the <strong>Principal Components</strong>—the directions in which the data is most spread out. By projecting data onto these components, we can keep the "Signal" while deleting the "Noise."</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of PCA as <strong>Finding the Best Camera Angle</strong>. 
        Imagine a clear 3D statue of a horse. If you take a picture from the front, you might just see a circle. But if you take it from the side (the direction of maximum spread), you capture the whole horse in 2D. 
        PCA calculates that perfect "Side View" automatically.
      </div>
    </div>

    <visualizer topic="PCA" />

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
    <ul>
      <li><strong>Visualization</strong>: Plotting 100-dimensional genomics data in 2D to find clusters of diseases.</li>
      <li><strong>Preprocessing</strong>: Speeding up training by removing "Heigh-Correlation" features.</li>
      <li><strong>Face Recognition (Eigenfaces)</strong>: Representing human faces as a combination of a few thousand "Template" eigenvectors.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> You've mastered the building blocks of data models. Now, let's explore how we use these models to predict the future in <strong><a href="#/mathematics/statistics/basics">Probability & Statistics</a></strong>.
    </div>
  `
};
