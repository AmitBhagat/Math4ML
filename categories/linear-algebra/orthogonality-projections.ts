import { TopicSection } from '../../src/data/types';

export const orthogonalityProjectionsSection: TopicSection = {
  id: "orthogonality-projections",
  title: "Orthogonality and Projections",
  description: "Orthogonality is the mathematical way of saying 'Zero Correlation.' Projections are how we find the closest distance between vectors and subspaces.",
  color: "#9C27B0",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📐 Linear Algebra · Projections</div>
      <h1>Orthogonality & Projections</h1>
      <p>Two vectors are <strong>Orthogonal</strong> if they have zero in common (angle = 90°). A <strong>Projection</strong> is the "shadow" that one vector casts onto another. In ML, this is how we filter out noise from our features.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In Machine Learning, we often have high-dimensional data that we want to simplify. <strong>Orthogonal Projections</strong> allow us to "condense" a vector into a smaller subspace while keeping as much of the original information as possible. It’s like looking at a 3D shadow on a 2D wall—you lose depth, but you keep the shape.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a Projection as a <strong>"Best Approximation."</strong> 
        If you are on a stage and a spotlight shines on you, your <strong>shadow</strong> on the floor is the "closest point" to you that exists on that floor. 
        In ML, we use this to find the "closest" prediction to our real labels.
      </div>
    </div>

    <visualizer topic="Projections" />

    <h2 id="derivation">Formal Definition</h2>
    <p>The projection of vector \(\mathbf{y}\) onto vector \(\mathbf{u}\) is:</p>
    <div class="math-block">$$\text{proj}_{\mathbf{u}}(\mathbf{y}) = \hat{\mathbf{y}} = \frac{\mathbf{y} \cdot \mathbf{u}}{\mathbf{u} \cdot \mathbf{u}} \mathbf{u}$$</div>
    <p>The <strong>Error Vector</strong> (\(\mathbf{e} = \mathbf{y} - \hat{\mathbf{y}}\)) is always <strong>Orthogonal</strong> to \(\mathbf{u}\).</p>

    <h2 id="example-projection" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> 1D Projection (Searching for Shadows)</h2>
    
      <h4>Problem: Shadow of [3, 4] on X-axis</h4>
      <p>Project vector \(\mathbf{y} = [3, 4]\) onto the vector \(\mathbf{u} = [1, 0]\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Overlap:</strong> \(\mathbf{y} \cdot \mathbf{u} = (3 \times 1) + (4 \times 0) = 3\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Normalization:</strong> \(\mathbf{u} \cdot \mathbf{u} = (1 \times 1) = 1\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Result:</strong> \(\hat{\mathbf{y}} = 3 \times [1, 0] = [3, 0]\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> We discarded the "Vertical" information (4) as noise. The result stays in the \(\mathbf{u}\) direction.
        </div>
      </div>
    

    <h2 id="example-least-squares" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Least Squares (Simple Regression)</h2>
    
      <h4>Problem: Fitting a Line</h4>
      <p>Least Squares is just a projection. We project our target vector \(\mathbf{y}\) onto the column space of our features \(X\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Calculate:</strong> \(\mathbf{x} = (X^T X)^{-1} X^T \mathbf{y}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Interpret:</strong> The result \(\hat{\mathbf{y}} = X\mathbf{x}\) is the orthogonal projection of \(\mathbf{y}\).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Your "prediction" is the best approximation allowed by your data. The difference (Residual) is always 100% independent of your features.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

y = np.array([3, 4])
u = np.array([1, 0])

# Projection formula
proj_y_u = (np.dot(y, u) / np.dot(u, u)) * u

print(f"Shadow of y on u: {proj_y_u}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Linear Regression</strong>: The core solver (Normal Equation) is a sequence of projections.</li>
      <li><strong>Gram-Schmidt Process</strong>: Turning any set of vectors into an <strong>Orthogonal Basis</strong> for training stability.</li>
      <li><strong>Support Vector Machines (SVMs)</strong>: Finding the perpendicular distance from a sample to the decision boundary.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Projections give us "shadows." But what about the vectors that *never* move? Explore <strong><a href="#/mathematics/linear-algebra/eigenvalues-eigenvectors">Eigenvalues & Eigenvectors</a></strong>.
    </div>
  `
};
