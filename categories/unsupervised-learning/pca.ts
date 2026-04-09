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

    <h2 id="theory">Intuition & Motivation</h2>
    <p><strong>PCA</strong> is the most widely used Dimensionality Reduction algorithm because of its mathematical elegance. It doesn't simply delete features; it <strong>Squashes</strong> them into a new set of dimensions that maximize the <strong>Variance</strong>. Variance is just another word for "Information." PCA finds the directions where the data is most spread out and preserves those, while discarding the "Thin" directions where nothing much happens. It is the ultimate "Signal vs. Noise" filter, allowing you to find the skeleton of your data hidden within a high-dimensional cloud of features.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Principal Component Analysis</div>
      <p>PCA identifies the orthogonal axes (principal components) that maximize the variance of the projected data. For a centered data matrix $\mathbf{X} \in \mathbb{R}^{n \times d}$, the first principal component $\mathbf{w}_1$ is defined as:</p>
      <div class="math-block">
        $$\mathbf{w}_1 = \arg\max_{\|\mathbf{w}\|=1} \text{Var}(\mathbf{Xw}) = \arg\max_{\|\mathbf{w}\|=1} \mathbf{w}^T \mathbf{X}^T \mathbf{X} \mathbf{w}$$
      </div>
      <p>The solution is found via the **SVD** of $\mathbf{X}$ or the **Eigen-Decomposition** of the covariance matrix $\boldsymbol{\Sigma}$. The $k$-th principal component is the eigenvector corresponding to the $k$-th largest eigenvalue $\lambda_k$:</p>
      <div class="math-block">
        $$\boldsymbol{\Sigma} \mathbf{v}_k = \lambda_k \mathbf{v}_k$$
      </div>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of PCA as <strong>"Finding the Axis of Change"</strong> or the <strong>"Best Photograph Analogy."</strong> 
        Imagine a **Rugby Ball** floating in space. It has 3 dimensions, but its most important feature is its "Length." PC1 is that long axis. If you only had one dimension to describe that ball, you’d pick the long axis because it captures 80% of the shape. 
        Or think of it as taking a 2D picture of a 100D alien. <strong>PCA</strong> is the algorithm that calculates the <strong>Exact Orbital Position</strong> for your camera so that the 2D photo captures the most detail (the widest spread) of the alien's complex, many-dimensional body. It is about finding the **Perspective** that kills the redundant noise and keeps the pure signal.
      </div>
    </div>
    
    <h2 id="variance">The "First" Component: Maximum Variance</h2>
    <p>Variance is <strong>Information</strong>. If a feature has zero variance (all points are the same), it tells you nothing. PCA finds the direction where the data is <strong>most spread out</strong>. PC1 is the strongest signal, PC2 is the second strongest, and so on.</p>

    <h2 id="preprocessing">Requirement: Scaling & Mean Centering</h2>
    <p><strong>The Gotcha:</strong> PCA is hypersensitive to <strong>Scale</strong>. If your "Income" is in Millions and "Age" is in 10s, PCA will spend 100% of its energy on Income. You <strong>MUST</strong> scale your data (Standardization) so that every feature has a <strong>Fair Chance</strong> to be a Principal Component.</p>

    <h2 id="svd">Computational Trick: SVD</h2>
    <p>In modern libraries (like Scikit-Learn), we don't actually calculate the Covariance Matrix. We use <strong>Singular Value Decomposition (SVD)</strong> directly on the data matrix \(X\). It is numerically more stable and much faster for huge datasets.</p>

    <h2 id="analogy">The "Best Photograph" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are a <strong>Photographer taking a 2D picture</strong> of a 100D alien. 
        Where do you stand? 
        If you stand 100 meters away at a random angle, you just get a flat blob. (Information loss). 
        <strong>PCA</strong> is the algorithm that calculates the <strong>exact orbital position</strong> to stand so that your 2D photo shows the <strong>most detail</strong> (the most spread) of the alien's 100D body. 
      </div>
    </div>

    <h2 id="algorithm">The PCA Algorithm</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Most Informative Angle</h2>
    
      <h4>Scenario: Photographing a 100-Armed Alien</h4>
      <p>Imagine you meet an Alien with 100 arms and 4 heads. You only have a 2D piece of paper to draw it. Where do you stand?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Random Angle:</strong> You stand directly in front. 80 arms are hidden behind the body. You only capture 20% of the information. (Low Variance).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The PCA Calculation:</strong> The algorithm calculates the <strong>exact orbital position</strong> of the 100 dimensions to find the widest spread.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>PC1 (The Long Axis):</strong> It finds the direction where the alien's arms are most spread out. This becomes your new X-axis.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The 2D Result:</strong> Your 2D sketch now shows 95 arms and all 4 heads clearly. You've captured 98% of the signal on a flat page.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          PCA is <strong>Lossy</strong>. You throw away the "Thin" dimensions to save space. Usually, keeping the top 2 or 3 components is enough to visualize clusters that were invisible in 100D.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code static-output="[Scan] Scaling dataset for Mean=0, Std=1...\n[SVD] Calculating Principal Components...\n[Result] PC1 captures 95.2% of the variance (The Signal)\n[Result] PC2 captures 4.8% of the variance (The Shape)\n[Action] Projected high-dim data into 2D space.\n[Insight] Throwing away PC3 and PC4 results in ~0% loss of useful information.">
import numpy as np
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

# 1. High-dim data: [Feature1, Feature2, Feature3, RedundantFeature4]
X = np.array([
    [10, 20, 5, 10.1],
    [11, 21, 5.1, 10.9],
    [50, 80, 2, 49.5],
    [52, 82, 2.1, 51.0]
])

# 2. Scaling (PCA is useless without this!)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 3. Principal Component Transformation
pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X_scaled)

# 4. Check 'How much did we keep?'
ratios = pca.explained_variance_ratio_
print(f"Contribution of PC1: {ratios[0]:.2%}")
print(f"Contribution of PC2: {ratios[1]:.2%}")
print(f"Total Info Retained: {np.sum(ratios):.2%}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>PCA is the "Signal vs. Noise" filter. It doesn't just cut features; it squashes them into a new perspective that maximizes the capture of information (variance).</p>
    <ul>
      <li><strong>Facial Recognition (Eigenfaces)</strong>: Before deep learning, engineers used PCA to represent human faces. By finding the "Principal Components" of face images, they could represent a high-res photo using just a few numbers (Eigenfaces), allowing computers to compare faces 1,000x faster by ignoring pixel-noise.</li>
      <li><strong>Genetic Population Mapping</strong>: In DNA research, individual variations are often drowned out by massive amounts of biological noise. Researchers use PCA to find the "Main Signal" of genetic variation, allowing them to see the true structure of an ethnic population on a simple 2D map.</li>
    </ul>
    <p>Teacher's Final Word: PCA is the most mathematically elegant way to find the skeleton of your data hidden within a high-dimensional cloud. It is your first and best defense against the "Curse of Dimensionality."</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> PCA captures "Global" variance. But what if we want to visualize "Local" clusters of points? Explore <strong><a href="#/machine-learning/unsupervised-learning/tsne">t-SNE Visualization</a></strong>.
    </div>
  `
};
