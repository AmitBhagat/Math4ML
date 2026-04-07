import { TopicSection } from '../../src/data/types';

export const vectorCalculusSection: TopicSection = {
  id: "vector-calculus",
  title: "Vector Calculus",
  description: "Vector Calculus deals with the differentiation and integration of vector fields. Learn how divergence and curl are used to constrain AI simulations.",
  color: "#66BB6A",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🌀 Calculus · Vector Fields</div>
      <h1>Vector Calculus: The Geometry of Flow</h1>
      <p><strong>Vector Calculus</strong> deals with the differentiation and integration of <strong>vector fields</strong>—regions where every point is associated with a vector (like wind speed in the atmosphere or force in an electromagnetic field). While standard calculus focuses on how single values change, Vector Calculus describes how these fields flow, rotate, and spread.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example">Illustrative Example</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Multivariable Calculus</strong>: Understanding the <strong>Gradient</strong> ($\nabla$) operator.</li>
        <li><strong>Linear Algebra</strong>: Dot products and Cross products.</li>
        <li><strong>Vector Fields</strong>: Visualizing functions that map $\mathbb{R}^n \to \mathbb{R}^n$.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>In AI, we use vector calculus to constrain models. For example, if we are training an AI to simulate water flow, we must enforce that the <strong>Divergence is zero</strong> (incompressibility).</p>
    <ul>
      <li><strong>Divergence</strong>: Measures the "outward flow." Does a point in the field act as a <strong>source</strong> (stuff moving away) or a <strong>sink</strong> (stuff moving toward it)?</li>
      <li><strong>Curl</strong>: Measures the "rotation." If you placed a tiny paddlewheel in the field, would it spin?</li>
    </ul>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>The "Del" operator $\nabla$ is defined as:</p>
    <div class="math-block">$$\nabla = \left[ \frac{\partial}{\partial x}, \frac{\partial}{\partial y}, \frac{\partial}{\partial z} \right]$$</div>

    <h3>1. Divergence ($\text{div } \mathbf{F}$ or $\nabla \cdot \mathbf{F}$)</h3>
    <p>Divergence is the <strong>dot product</strong> of the Del operator and the vector field $\mathbf{F} = [P, Q, R]$. It results in a <strong>scalar</strong>.</p>
    <div class="math-block">$$\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$$</div>

    <h3>2. Curl ($\text{curl } \mathbf{F}$ or $\nabla \times \mathbf{F}$)</h3>
    <p>Curl is the <strong>cross product</strong> of the Del operator and the vector field. It results in a <strong>vector</strong> that represents the axis of rotation.</p>
    <div class="math-block">
      $$\nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix}$$
    </div>

    <h2 id="example">Illustrative Example</h2>
    <div class="example-box">
      <h4>Problem: Finding Field Divergence</h4>
      <p>Given a 2D vector field $\mathbf{F} = [x^2, y^2]$, find the divergence at point $(2, 3)$.</p>
      
      <p><strong>Step-by-Step Solution:</strong></p>
      <ol>
        <li>Identify components: $P = x^2$, $Q = y^2$.</li>
        <li>Calculate partials: $\frac{\partial P}{\partial x} = 2x$, $\frac{\partial Q}{\partial y} = 2y$.</li>
        <li>Sum them for Divergence: $\nabla \cdot \mathbf{F} = 2x + 2y$.</li>
        <li>Evaluate at $(2, 3)$: $2(2) + 2(3) = 4 + 6 = 10$.</li>
      </ol>
      <p><strong>Result:</strong> Since $10 > 0$, the point $(2, 3)$ is a source where the field is "expanding."</p>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <p>While we usually use symbolic math libraries like <code>SymPy</code> for these, we can approximate divergence on a grid for AI applications.</p>
    <python-code>
import numpy as np

def numerical_divergence(F_x, F_y, dx, dy):
    """
    Computes the divergence of a 2D vector field numerically.
    """
    # Use numpy gradient to get partial derivatives
    dFx_dx = np.gradient(F_x, axis=1) / dx
    dFy_dy = np.gradient(F_y, axis=0) / dy
    
    return dFx_dx + dFy_dy

# Create a sample coordinate grid
x = np.linspace(-5, 5, 10)
y = np.linspace(-5, 5, 10)
X, Y = np.meshgrid(x, y)

# Define field F = [X**2, Y**2]
Fx = X**2
Fy = Y**2

div = numerical_divergence(Fx, Fy, 1, 1)
print(f"Divergence at center index [5,5]: {div[5, 5]}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <visualizer topic="Gradient" />
    <ul>
      <li><strong>PINNs</strong>: Loss functions are designed to penalize the model if the Divergence or Curl violates physical laws (e.g., Maxwell's equations).</li>
      <li><strong>Generative Models</strong>: Divergence is used in Normalizing Flows to track how probability density "spreads" as data is transformed.</li>
      <li><strong>Fluid Dynamics AI</strong>: Simulating weather, aerodynamics, or medical blood flow simulations.</li>
    </ul>

    <div class="linking-rule">
      <strong>Final Step:</strong> Having mastered vector fields and flow, you've completed the <strong>Calculus</strong> foundations. You are now equipped to step into <strong><a href="#/mathematics/information-theory/entropy">Information Theory</a></strong>, where we measure "Surprise" and "Entropy".
    </div>
  `
};
