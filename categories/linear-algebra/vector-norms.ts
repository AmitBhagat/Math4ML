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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A single number in a vector doesn't tell you much—but its <strong>Norm</strong> tells you its total "Weight" or "Magnitude." In Machine Learning, we don't just care about the direction of our weights; we care about their size. If weights become too large, the model becomes hypersensitive to noise (overfitting). <strong>Vector Norms</strong> allow us to quantify this "Mass" and penalize it. Each norm tells a different story: some care about the absolute total mass (L1), while others care about the straight-line distance (L2). Choosing the right norm is the difference between a model that is "Sparse and Selective" vs. "Small and Stable."</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The $p$-norm Metric</div>
      <p>A **Norm** $\|\cdot\|$ is a function that maps a vector to a non-negative scalar, satisfying the triangle inequality and absolute homogeneity. In $\mathbb{R}^n$, we define the family of $L^p$ norms as:</p>
      <div class="math-block">
        $$\|\mathbf{x}\|_p = \left( \sum_{i=1}^n |x_i|^p \right)^{1/p}$$
      </div>
      <p>The three most critical variations in Machine Learning are:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>$L^1$ Norm</strong>: $\sum |x_i|$. Promotes sparsity (Lasso).</li>
        <li><strong>$L^2$ Norm</strong>: $\sqrt{\sum x_i^2}$. Promotes small, distributed weights (Ridge).</li>
        <li><strong>$L^\infty$ Norm</strong>: $\max_i |x_i|$. Measures the maximum deviation.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Norms provide the mathematical basis for regularization, ensuring that model complexity remains bounded during the learning process.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of norms as <strong>"Travel Rules."</strong> 
        <strong>L2 Norm</strong> is the "As the Crow Flies" distance—it's the shortest straight path. 
        <strong>L1 Norm</strong> is the "Taxicab" distance—it's walking through a city grid where you can't cut corners; you must take every street. 
        In AI, we use L1 to act like a <strong>"Liar Detector"</strong> for noise, forcing useless weights to exactly zero, and L2 to act like a <strong>"Stabilizer"</strong> that keeps our model's predictions from exploding into wild numbers.
      </div>
    </div>

    <visualizer topic="VectorNorms" />

    <h2 id="example-distance" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Manhattan vs. Euclidean</h2>
    
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
    

    <h2 id="example-reg" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Lasso vs. Ridge Regularization</h2>
    
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
    

    <h2 id="implementation">Implementation</h2>
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
    <p>Norms are the "Police Officers" of Machine Learning. They measure the total "Mass" of your weights to keep them from growing out of control, or quantify the distance between what you're seeing and what you expect.</p>
    <ul>
      <li><strong>Lasso and Ridge Regularization</strong>: When training a model, we add the L1 or L2 norm of the weights to our loss function. This "Penalty" prevents the model from relying too heavily on any single feature, keeping it from "Overfitting" to random noise. L1 (Lasso) is particularly ruthless; it acts like a "Pruning Tool" that shrinks useless weights of irrelevant features to exactly zero, effectively deleting them from the model.</li>
      <li><strong>Anomaly Detection in Server Logs</strong>: To find a hacker in millions of server requests, we represent each request as a vector (Time, Data Size, Frequency). We then calculate the <strong>Distance (Norm)</strong> of every new request from the "Normal" average vector. If the norm is massive, it means the request is a geometric outlier—a "weird" point in space that requires immediate attention.</li>
    </ul>
    <p>Teacher's Final Word: A Norm is a **"Magnitude Meter."** It takes a multi-dimensional mess and boils it down to a single, comparable number. In AI, this is our most power tool for keeping models lean, stable, and accurate.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Vectors are building blocks. Let's arrange them into grids. Explore <strong><a href="#/mathematics/linear-algebra/matrices">Matrices</a></strong>.
    </div>
  `
};
