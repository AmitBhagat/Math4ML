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
    <p>In Machine Learning, we often have massive, high-dimensional data that we want to simplify without losing the core signal. <strong>Orthogonal Projections</strong> are the mathematical way to find that "Best Approximation." By projecting a complex vector onto a simpler subspace, we effectively "filter out" the noise that doesn't align with our chosen features. The key is <strong>Orthogonality</strong>—the idea that the difference between our original data and our prediction should be 100% independent of the features we used. It’s how we ensure our models aren't "hallucinating" patterns that aren't really there.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Closest Vector Property</div>
      <p>Two vectors $\mathbf{u}, \mathbf{v}$ are **Orthogonal** if their inner product is zero ($\mathbf{u} \cdot \mathbf{v} = 0$). The **Orthogonal Projection** of a vector $\mathbf{x}$ onto a subspace $W$ is the unique vector $\hat{\mathbf{x}} \in W$ such that $(\mathbf{x} - \hat{\mathbf{x}})$ is orthogonal to every vector in $W$.</p>
      <p>Algebraically, the projection of $\mathbf{x}$ onto a non-zero vector $\mathbf{v}$ is:</p>
      <div class="math-block">
        $$\text{proj}_{\mathbf{v}} \mathbf{x} = \frac{\mathbf{x} \cdot \mathbf{v}}{\|\mathbf{v}\|^2} \mathbf{v}$$
      </div>
      <p>Properties of the projection include:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Optimality</strong>: $\hat{\mathbf{x}}$ is the vector in $W$ that minimizes the distance $\|\mathbf{x} - \mathbf{v}\|$ for all $\mathbf{v} \in W$.</li>
        <li><strong>Linearity</strong>: $\text{proj}_W (c_1\mathbf{x}_1 + c_2\mathbf{x}_2) = c_1\text{proj}_W \mathbf{x}_1 + c_2\text{proj}_W \mathbf{x}_2$.</li>
        <li><strong>Residual</strong>: The vector $\mathbf{e} = \mathbf{x} - \hat{\mathbf{x}}$ represents the component of $\mathbf{x}$ orthogonal to $W$.</li>
      </ul>
    </div>
    
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
    <p>Projections are the mathematical way to find the "Best Approximation." They allow us to filter out the noise that doesn't align with our chosen features.</p>
    <ul>
      <li><strong>Gram-Schmidt Preprocessing</strong>: When training models, highly correlated (parallel) features can cause the weights to "explode." We use projections to "orthogonalize" the features—stripping away their mutual overlap so the model sees 100% unique info from every input.</li>
      <li><strong>SVM Margin Calculation</strong>: In Support Vector Machines, we need to find the "Gap" between two classes. The algorithm uses vertical projections to find the absolute closest distance from a data point to the decision boundary, ensuring we maximize the safety margin.</li>
    </ul>
    <p>Teacher's Final Word: A projection is like casting a shadow to see the core shape of an object while ignoring the distracting glare. In AI, it's how we find the "Truth" hidden within a noisy spreadsheet.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Projections give us "shadows." But what about the vectors that *never* move? Explore <strong><a href="#/mathematics/linear-algebra/eigenvalues-eigenvectors">Eigenvalues & Eigenvectors</a></strong>.
    </div>
  `
};

