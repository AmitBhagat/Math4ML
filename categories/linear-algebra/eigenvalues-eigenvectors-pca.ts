import { TopicSection } from '../../src/data/types';

export const eigenvaluesEigenvectorsPcaSection: TopicSection = {
  id: "eigenvalues-eigenvectors-pca",
  title: "Solved Examples: Eigenvalues, Eigenvectors, and PCA",
  description: "Practical, step-by-step examples to solidify your understanding of Eigenvalues, Eigenvectors, and Principal Component Analysis (PCA). Each example walks through the complete solution with all intermediate steps shown.",
  html: String.raw`
    <div class="toc">
      <div class="toc-title">Examples in This Page</div>
      <a href="#ex1">Example 1 — Finding Eigenvalues and Eigenvectors</a>
      <a href="#ex2">Example 2 — PCA Selection (Variance Explained)</a>
      <a href="#ex3">Example 3 — PCA Interpretation</a>
      <a href="#summary-table">Summary Table for Quick Revision</a>
    </div>

    <!-- EXAMPLE 1 -->
    <div class="solved-card" id="ex1">
      <div class="solved-header">
        <div class="solved-num">1</div>
        <div class="solved-title">Finding Eigenvalues and Eigenvectors</div>
      </div>
      <div class="solved-body">
        <div class="problem-box">
          <div class="problem-label">Problem</div>
          Find the eigenvalues and eigenvectors for the matrix \(A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}\).
        </div>

        <div class="step-label">Step 1: Set up the Characteristic Equation</div>
        <div class="math-block">$$\det(A - \lambda I) = 0$$
$$\begin{vmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{vmatrix} = 0$$</div>

        <div class="step-label">Step 2: Solve the Quadratic Equation</div>
        <div class="math-block">$$(4-\lambda)(3-\lambda) - (2)(1) = 0$$
$$\lambda^2 - 7\lambda + 12 - 2 = 0 \implies \lambda^2 - 7\lambda + 10 = 0$$</div>
        <p>Factoring the quadratic: \((\lambda - 5)(\lambda - 2) = 0\).</p>
        <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body">The <strong>Eigenvalues</strong> are \(\lambda_1 = 5\) and \(\lambda_2 = 2\).</div></div>

        <div class="step-label">Step 3: Find Eigenvectors for λ₁ = 5</div>
        <div class="math-block">$$(A - 5I)v = 0 \implies \begin{pmatrix} 4-5 & 1 \\ 2 & 3-5 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$
$$\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$</div>
        <p>From the first row: \(-x + y = 0 \implies x = y\).</p>
        <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body">One possible <strong>Eigenvector</strong> is \(v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}\).</div></div>

        <div class="step-label">Step 4: Find Eigenvectors for λ₂ = 2</div>
        <div class="math-block">$$(A - 2I)v = 0 \implies \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$</div>
        <p>From the first row: \(2x + y = 0 \implies y = -2x\).</p>
        <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body">One possible <strong>Eigenvector</strong> is \(v_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}\).</div></div>
      </div>
    </div>

    <!-- EXAMPLE 2 -->
    <div class="solved-card" id="ex2">
      <div class="solved-header">
        <div class="solved-num">2</div>
        <div class="solved-title">PCA Selection (Variance Explained)</div>
      </div>
      <div class="solved-body">
        <div class="problem-box">
          <div class="problem-label">Problem</div>
          Suppose you perform PCA on a dataset with 3 features. You calculate the eigenvalues of the covariance matrix as \(\lambda_1 = 15\), \(\lambda_2 = 4\), and \(\lambda_3 = 1\). How much variance is retained if you reduce the data to 2 dimensions?
        </div>

        <div class="step-label">Step 1: Calculate Total Variance</div>
        <p>Total Variance = Sum of all eigenvalues:</p>
        <div class="math-block">$$\text{Total} = 15 + 4 + 1 = 20$$</div>

        <div class="step-label">Step 2: Calculate Variance of Top 2 Components</div>
        <p>Sum of \(\lambda_1\) and \(\lambda_2\) (the highest values):</p>
        <div class="math-block">$$\text{Sum} = 15 + 4 = 19$$</div>

        <div class="step-label">Step 3: Calculate Percentage</div>
        <div class="math-block">$$\frac{19}{20} \times 100 = 95\%$$</div>

        <div class="conclusion">
          <strong>Conclusion:</strong> By keeping the first two principal components, you retain <strong>95%</strong> of the original information while reducing the dimensionality by 33%.
        </div>
      </div>
    </div>

    <!-- EXAMPLE 3 -->
    <div class="solved-card" id="ex3">
      <div class="solved-header">
        <div class="solved-num">3</div>
        <div class="solved-title">PCA Interpretation</div>
      </div>
      <div class="solved-body">
        <div class="problem-box">
          <div class="problem-label">Problem</div>
          In a dataset measuring "Height" and "Weight," the first Eigenvector (Principal Component 1) is found to be \(v_1 = \begin{pmatrix} 0.707 \\ 0.707 \end{pmatrix}\) with \(\lambda_1 = 50\). What does this tell you?
        </div>

        <div class="step-label">Interpretation of Eigenvector (v₁)</div>
        <p>Since both components are positive and equal, this eigenvector represents an axis where Height and Weight increase together. This is the "Size" component. It shows the direction of maximum correlation.</p>
        <div class="math-block">$$v_1 = \begin{pmatrix} 0.707 \\ 0.707 \end{pmatrix} \approx \begin{pmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{pmatrix}$$</div>
        <div class="callout info"><div class="callout-icon">ℹ️</div><div class="callout-body">The equal weighting (\(0.707 \approx 1/\sqrt{2}\)) means both Height and Weight contribute equally to this principal component — a diagonal axis at 45° in the Height-Weight plane.</div></div>

        <div class="step-label">Interpretation of Eigenvalue (λ₁ = 50)</div>
        <p>A value of 50 indicates that a significant portion of the total spread (variance) in the population is captured along this "Size" axis rather than by looking at height or weight individually.</p>
        <div class="math-block">$$\lambda_1 = 50 \implies \text{Variance along PC1} = 50 \text{ units}^2$$</div>

        <div class="conclusion">
          <strong>Conclusion:</strong> The first principal component captures a "Size" effect where Height and Weight move together. The eigenvalue of 50 quantifies how much of the total dataset variance is explained by this single axis.
        </div>
      </div>
    </div>

    <!-- SUMMARY TABLE -->
    <h2 id="summary-table">Summary Table for Quick Revision</h2>
    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Eigenvalue (\(\lambda\))</th>
            <th>Eigenvector (\(v\))</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Physical Meaning</strong></td>
            <td>Magnitude / Scaling factor</td>
            <td>Direction / Axis</td>
          </tr>
          <tr>
            <td><strong>In PCA</strong></td>
            <td>Amount of Variance captured</td>
            <td>The Principal Component itself</td>
          </tr>
          <tr>
            <td><strong>Selection Criteria</strong></td>
            <td>Keep the largest values</td>
            <td>Keep corresponding vectors</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout tip">
      <div class="callout-icon">🎯</div>
      <div class="callout-body">
        <strong>Key Insight:</strong> In PCA, you always sort eigenvalues in descending order. The eigenvector corresponding to the largest eigenvalue is the <strong>First Principal Component</strong> — the direction of greatest variance in your data.
      </div>
    </div>

    <div class="linking-rule">
      <strong>Linking Rule:</strong> Now that we have covered the static properties of data via Linear Algebra, we can transition to <strong>Calculus</strong>, which allows us to understand how these values <em>change</em>, leading us to the heart of ML training: <strong>Gradient Descent</strong>.
    </div>
  `
};
