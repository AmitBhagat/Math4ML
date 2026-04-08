import { TopicSection } from '../../src/data/types';

export const pcaSection: TopicSection = {
  id: "pca",
  title: "Principal Component Analysis (PCA)",
  description: "A statistical procedure that uses an orthogonal transformation to convert a set of observations of possibly correlated variables into a set of values of linearly uncorrelated variables called principal components.",
  color: "#bc8cff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧩 Unsupervised · Variance</div>
      <h1>Principal Component Analysis (PCA)</h1>
      <p><strong>PCA</strong> is the most widely used Dimensionality Reduction algorithm. It doesn't delete features; it <strong>Squashes</strong> them into a new set of orthogonal axes that maximize the <strong>Variance</strong>. It's the ultimate "Signal vs. Noise" filter for your data.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Covariance & Eigen-decomposition</a>
      <a href="#variance">The "First" Component: Maximum Variance</a>
      <a href="#svd">Computational Trick: SVD</a>
      <a href="#preprocessing">Requirement: Scaling & Mean Centering</a>
      <a href="#analogy">The "Main Axis" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Covariance & Eigen-decomposition</h2>
    <p>PCA treats the data as a <strong>Cloud</strong>. It calculates the <strong>Covariance Matrix</strong> \(\Sigma\) to see how the features "Move Together." Then, it finds the <strong>Eigenvectors</strong> of that matrix.</p>
    <div class="math-block">$$\Sigma \mathbf{v}_i = \lambda_i \mathbf{v}_i$$</div>
    <ul>
      <li><strong>Eigenvectors (\(\mathbf{v}_i\)):</strong> The directions (Principal Components) of the cloud.</li>
      <li><strong>Eigenvalues (\(\lambda_i\)):</strong> The <strong>Strength</strong> (Variance) of each direction.</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Finding the Axis of Change."</strong> 
        Imagine a **Rugby Ball** floating in the air. 
        It has 3 dimensions (Length, Width, Height). 
        The **1st Principal Component (PC1)** is the <strong>Long Axis</strong>. 
        The **2nd Principal Component (PC2)** is the **Width**. 
        If you only have 1 dimension, you choose the <strong>Long Axis</strong> because it captures 80% of the ball's shape. 
      </div>
    </div>

    <h2 id="variance">The "First" Component: Maximum Variance</h2>
    <p>Variance is <strong>Information</strong>. If a feature has zero variance (all points are the same), it tells you nothing. PCA finds the direction where the data is <strong>most spread out</strong>. PC1 is the strongest signal, PC2 is the second strongest, and so on.</p>

    <h2 id="preprocessing">Requirement: Scaling & Mean Centering</h2>
    <p><strong>The Gotcha:</strong> PCA is hypersensitive to **Scale**. If your "Income" is in Millions and "Age" is in 10s, PCA will spend 100% of its energy on Income. You **MUST** scale your data (Standardization) so that every feature has a <strong>Fair Chance</strong> to be a Principal Component.</p>

    <h2 id="svd">Computational Trick: SVD</h2>
    <p>In modern libraries (like Scikit-Learn), we don't actually calculate the Covariance Matrix. We use **Singular Value Decomposition (SVD)** directly on the data matrix \(X\). It is numerically more stable and much faster for huge datasets.</p>

    <h2 id="analogy">The "Best Photograph" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are a <strong>Photographer taking a 2D picture</strong> of a 100D alien. 
        Where do you stand? 
        If you stand 100 meters away at a random angle, you just get a flat blob. (Information loss). 
        **PCA** is the algorithm that calculates the <strong>exact orbital position</strong> to stand so that your 2D photo shows the <strong>most detail</strong> (the most spread) of the alien's 100D body. 
      </div>
    </div>

    <h2 id="algorithm">The PCA Algorithm</h2>
    <div class="example-box">
      <h4>The Variance Extraction Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Standardization:</strong> Shift data so the mean is 0 and scale so variance is 1. (Crucial!).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Covariance Matrix:</strong> Calculate how every feature varies in relation to every other feature.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Eigen-Decomposition:</strong> Find the Eigenvectors (Directions) and Eigenvalues (Magnitude of Variance) of that matrix.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Selection:</strong> Pick the top $k$ eigenvectors with the largest eigenvalues.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Projection:</strong> Multiply the original data by these eigenvectors to project it into the new, lower-dimensional space.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Best Alien Photograph</h2>
    <p>Imagine you are meeting an <strong>Alien with 10 arms and 4 heads</strong> (100 dimensions of features). You only have 1 piece of paper (2D) to draw it.</p>
    <ul>
      <li><strong>Standard Approach:</strong> You take a photo from a random angle. Most of the arms are hidden behind the body. </li>
      <li><strong>The PCA Approach:</strong> You calculate the <strong>Axis of Maximum Spread</strong>. You realize that if you stand slightly to the left and tilt the camera, you can see 8 arms and all 4 heads clearly. </li>
    </ul>
    <p>By choosing that <strong>Principal Angle</strong>, you've captured 90% of the "Alien-ness" on a flat 2D page. <strong>PCA is that perfect camera angle.</strong></p>

    <h2 id="python">Python Implementation</h2>
    <python-code>
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
import numpy as np

# 1. High-dimensional data [X1, X2, X3, X4]
X = np.array([
    [10, 20, 1, 0.1],
    [12, 22, 1.1, 0.2],
    [5, 8, 0.5, 0.9],
    [6, 9, 0.6, 0.8]
])

# 2. Scale the data (MUST do this for PCA!)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 3. Reduce to 2 Principal Components
model = PCA(n_components=2)
X_pca = model.fit_transform(X_scaled)

print(f"Variance explained per component: {model.explained_variance_ratio_}")
print(f"Original shape: {X.shape} -> New shape: {X_pca.shape}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> PCA captures "Global" variance. But what if we want to visualize "Local" clusters of points? Explore <strong><a href="#/machine-learning/unsupervised-learning/tsne">t-SNE Visualization</a></strong>.
    </div>
  `
};
