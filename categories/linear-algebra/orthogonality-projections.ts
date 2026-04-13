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
      <div class="premium-def-title">Formalism: The Shadow & Orthogonality</div>
      <p>Projections are the mathematical way to find the "Best Approximation." We find the shadow of a vector onto a lower-dimensional subspace.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine we want to project a vector $\mathbf{y}$ onto a vector $\mathbf{u}$. The goal is to find a vector $\hat{\mathbf{y}}$ that is a "shadow" of $\mathbf{y}$ on the line spanned by $\mathbf{u}$. Two critical facts hold:</p>
      <ul class="mt-2 space-y-2">
        <li><strong>Direction</strong>: Since $\hat{\mathbf{y}}$ lies on the line spanned by $\mathbf{u}$, it must be a scalar multiple: $\hat{\mathbf{y}} = c\mathbf{u}$.</li>
        <li><strong>Orthogonality</strong>: The error vector $\mathbf{e} = \mathbf{y} - \hat{\mathbf{y}}$ must be perpendicular to $\mathbf{u}$.</li>
      </ul>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>Since the error vector $\mathbf{e}$ is orthogonal to $\mathbf{u}$, their dot product is zero:</p>
      <div class="math-block">
        $$\mathbf{u} \cdot (\mathbf{y} - \hat{\mathbf{y}}) = 0$$
        $$\mathbf{u} \cdot (\mathbf{y} - c\mathbf{u}) = 0$$
      </div>
      <p>Distributing the dot product and solving for $c$:</p>
      <div class="math-block">
        $$\mathbf{u} \cdot \mathbf{y} - c(\mathbf{u} \cdot \mathbf{u}) = 0 \implies c = \frac{\mathbf{u} \cdot \mathbf{y}}{\mathbf{u} \cdot \mathbf{u}}$$
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Formula</h3>
      <p>Plugging $c$ back into our definition $\hat{\mathbf{y}} = c\mathbf{u}$ gives the orthogonal projection of $\mathbf{y}$ onto $\mathbf{u}$:</p>
      <div class="math-block">
        $$\hat{\mathbf{y}} = \left( \frac{\mathbf{y} \cdot \mathbf{u}}{\mathbf{u} \cdot \mathbf{u}} \right) \mathbf{u}$$
      </div>
      <p class="mt-4 italic text-sm">Gotcha: This formula only works for 1D projections. For projecting onto a subspace spanned by matrix $X$, we use the <strong>Normal Equations</strong>: $\hat{\mathbf{y}} = X(X^T X)^{-1} X^T \mathbf{y}$.</p>
    </div>
    
    <visualizer topic="projections" />
    


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
    <p>Projections are the mathematical way to find the "Best Approximation." They allow us to filter out the noise that doesn't align with our chosen features, leaving only the "Truth" of the signal.</p>
    <ul>
      <li><strong>Linear Subspace Denoising</strong>: Real-world data is often corrupted by "White Noise"—random values scattered in every direction. However, the "Clean Signal" (like a person's voice or a clear image) usually lies in a specific low-dimensional subspace. By <strong>Projecting</strong> the noisy data onto that clean signal basis, we mathematically "flatten" the noise while preserving the essential pattern of the data.</li>
      <li><strong>Gram-Schmidt Orthogonalization in Simulation</strong>: In numerical optimization and climate modeling, we need vectors to stay 100% independent to prevent rounding errors from crashing the simulation. We use projections to "Orthogonalize" the vectors, stripping away any parallel overlap. This ensures that every step the model takes is in a fundamentally "New" direction, maintaining total numerical stability.</li>
    </ul>
    <p>Teacher's Final Word: A projection is like casting a shadow to see the core shape of an object while ignoring the distracting glare. In AI, it's how we find the "Truth" hidden within a noisy spreadsheet. Without the math of the projection, we'd be lost in the glare of the noise forever.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Projections give us "shadows." But what about the vectors that *never* move? Explore <strong><a href="#/mathematics/linear-algebra/eigenvalues-eigenvectors">Eigenvalues & Eigenvectors</a></strong>.
    </div>
  `
};


