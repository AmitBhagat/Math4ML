import { TopicSection } from '../../src/data/types';

export const linearIndependenceSection: TopicSection = {
  id: "linear-independence",
  title: "Linear Independence",
  description: "Linear Independence ensures your vectors aren't redundant. If a vector can be written as a combination of others, it adds no new information.",
  color: "#FF9800",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🏹 Linear Algebra · Linear Independence</div>
      <h1>Linear Independence: Zero Redundancy</h1>
      <p>Linear Independence is a way to measure the <strong>uniqueness</strong> of information. In Machine Learning, if two features are linearly dependent, you have redundant info that could slow down your model or cause errors.</p>
    </div>

    <h2 id="definition">1. The Definition</h2>
    <p>A set of vectors \(\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\}\) is <strong>Linearly Independent</strong> if the only solution to the following equation is all zeros (\(c_i = 0\)):</p>
    <div class="math-block">$$c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_n\mathbf{v}_n = \mathbf{0}$$</div>

    <h2 id="intuition">2. The "No Help" Intuition</h2>
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of vectors as <strong>Speakers</strong> in a debate. 
        If Speaker A says something new, they are independent. 
        But if Speaker B just repeats exactly what Speaker A said (or a mix of A and C), then Speaker B is <strong>Linearly Dependent</strong>. 
        They add no "news" to the conversation.
      </div>
    </div>

    <h2 id="example-redundancy" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Redundant Feature Check</h2>
    
      <h4>Problem: Identifying Noise</h4>
      <p>Are \(\mathbf{v}_1 = [1, 2]\) and \(\mathbf{v}_2 = [2, 4]\) independent?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Look for a scaling factor.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Calculate:</strong> \(\mathbf{v}_2 = 2 \times \mathbf{v}_1\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Check:</strong> \(\mathbf{v}_2\) is just a double of \(\mathbf{v}_1\).</div>
        </div>
      </div>

      <div class="callout error">
        <div class="callout-icon">✕</div>
        <div class="callout-body">
          <strong>Result:</strong> Dependent. They are just the same line. In ML, this could be like having "Temperature in Celsius" and "Temperature in Kelvin" as two separate features—they are mathematically redundant.
        </div>
      </div>
    

    <h2 id="example-zero" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Zero Solution Test</h2>
    
      <h4>Problem: Checking ℝ² Independence</h4>
      <p>Are \(\mathbf{v}_1 = [1, 0]\) and \(\mathbf{v}_2 = [0, 1]\) independent?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Equation:</strong> \(c_1[1, 0] + c_2[0, 1] = [0, 0]\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Solve:</strong> \(c_1 = 0, c_2 = 0\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Check:</strong> There is <strong>no other way</strong> to get zero except by using zero.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> YES. Independent. They point in completely different directions.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

# A set of vectors in a matrix
A = np.array([[1, 2], [2, 4]])

# If the Rank < Number of columns, they are dependent.
rank = np.linalg.matrix_rank(A)
is_independent = rank == A.shape[1]

print(f"Is Independent? {is_independent}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Multicollinearity</strong>: In Linear Regression, independent features ensure your weights are stable and interpretable.</li>
      <li><strong>Dimensionality Reduction</strong>: Identifying dependent vectors helps us "compress" our data without losing any real info.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Independence is great. But how many independent vectors do we need to build an entire world? Explore <strong><a href="#/mathematics/linear-algebra/basis-dimension">Basis and Dimension</a></strong>.
    </div>
  `
};
