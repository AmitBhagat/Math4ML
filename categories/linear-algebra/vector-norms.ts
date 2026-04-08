import { TopicSection } from '../../src/data/types';

export const vectorNormsSection: TopicSection = {
  id: "vector-norms",
  title: "Vector Norms (L1, L2)",
  description: "A Norm is a function that measures the 'length' or 'magnitude' of a vector. Different norms tell different stories about the distance.",
  color: "#D32F2F",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Linear Algebra · Vector Norms</div>
      <h1>Vector Norms: Measuring Magnitude</h1>
      <p>A <strong>Norm</strong> is a mathematical function that assigns a strictly positive "length" to a vector. In Machine Learning, we use norms to prevent models from "overfitting" by penalizing large weights.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#definition">1. Definition of a Norm</a>
      <a href="#l2">2. L₂ Norm (Euclidean)</a>
      <a href="#l1">3. L₁ Norm (Manhattan)</a>
      <a href="#example-distance">Example 1: Manhattan vs. Euclidean</a>
      <a href="#example-reg">Example 2: Lasso vs. Ridge Regularization</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="definition">1. Definition of a Norm</h2>
    <p>A function \(\|\mathbf{x}\|\) is a norm if it satisfies these properties:</p>
    <ul>
      <li><strong>Non-negativity</strong>: \(\|\mathbf{x}\| \ge 0\).</li>
      <li><strong>Triangle Inequality</strong>: \(\|\mathbf{x} + \mathbf{y}\| \le \|\mathbf{x}\| + \|\mathbf{y}\|\).</li>
      <li><strong>Scaling</strong>: \(\|c\mathbf{x}\| = |c| \cdot \|\mathbf{x}\|\).</li>
    </ul>

    <h2 id="l2">2. L₂ Norm (Euclidean)</h2>
    <p>The most common norm. It is the "as the crow flies" distance from the origin.</p>
    <div class="math-block">$$\|\mathbf{x}\|_2 = \sqrt{x_1^2 + x_2^2 + \dots + x_n^2}$$</div>

    <h2 id="l1">3. L₁ Norm (Manhattan)</h2>
    <p>The "taxicab" distance. It is the sum of the absolute values of the components.</p>
    <div class="math-block">$$\|\mathbf{x}\|_1 = |x_1| + |x_2| + \dots + |x_n|$$</div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong>
        Think of <strong>L₂</strong> as a straight line across a field. 
        Think of <strong>L₁</strong> as walking through a city grid—you can't cut corners; you have to follow the streets. 
        In ML, <strong>L₁</strong> is used when you want a model to be "sparse" (selective), while <strong>L₂</strong> is used to keep weights small and stable.
      </div>
    </div>

    <h2 id="example-distance">Example 1: Manhattan vs. Euclidean</h2>
    <div class="example-box">
      <h4>Problem: Comparing Distances for [3, 4]</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>L₂ (Crow):</strong> \(\sqrt{3^2 + 4^2} = \sqrt{25} = 5\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>L₁ (Taxi):</strong> \(3 + 4 = 7\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> L₁ distance is always \(\ge\) L₂. L₁ is "harsher" and easier for models to interpret as binary decisions.
        </div>
      </div>
    </div>

    <h2 id="example-reg">Example 2: Lasso vs. Ridge Regularization</h2>
    <div class="example-box">
      <h4>Problem: Penalizing Large Weights</h4>
      <p>Assume your model weights are \(\mathbf{w} = [1, 0.01]\). Find the L₁ and L₂ penalties.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>L₁:</strong> \(|1| + |0.01| = 1.01\). (The "noisy" 0.01 is still heavily penalized).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>L₂:</strong> \(\sqrt{1^2 + 0.01^2} \approx 1\). (The small weight is almost ignored).</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> L₁ (Lasso) will often force small weights to exactly 0, effectively deleting irrelevant features. L₂ (Ridge) just keeps all weights tiny.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

v = np.array([3, 4])

# L2 Norm
l2 = np.linalg.norm(v) # default is p=2

# L1 Norm
l1 = np.linalg.norm(v, ord=1)

print(f"L2: {l2}, L1: {l1}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Lasso (L1)</strong>: Feature selection (makes unimportant weights zero).</li>
      <li><strong>Ridge (L2)</strong>: Stability (prevents weights from exploding).</li>
      <li><strong>Mean Squared Error (MSE)</strong>: Based on the L₂ norm of the errors.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Vectors are building blocks. Let's arrange them into grids. Explore <strong><a href="#/mathematics/linear-algebra/matrices">Matrices</a></strong>.
    </div>
  `
};
