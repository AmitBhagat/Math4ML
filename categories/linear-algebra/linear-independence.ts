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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Linear Independence is the ultimate measure of <strong>Efficiency</strong>. If a vector can be built by combining other vectors you already have, then it is "Dependent"—it adds exactly zero new information to your system. In Machine Learning, we strive for independence because redundant features (like "Temp in Celsius" and "Temp in Fahrenheit") just add noise and computational weight without helping the model learn anything new. Ensuring independence is the first step toward a lean, fast, and stable model.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Trivial Solution Requirement</div>
      <p>A set of vectors $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ is **Linearly Independent** if the vector equation:</p>
      <div class="math-block">
        $$\sum_{i=1}^k c_i \mathbf{v}_i = \mathbf{0}$$
      </div>
      <p>is satisfied **only** when $c_1 = c_2 = \dots = c_k = 0$. If there exists a non-trivial solution (where at least one $c_i \neq 0$), the set is **Linearly Dependent**.</p>
      <p class="text-xs opacity-70 mt-2">Geometrically, this means that every independent vector adds a new dimension to the span. Dependent vectors are redundant because they lie within the span of the others.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of vectors as <strong>Speakers in a Room</strong>. 
        If Speaker A says something new, they are <strong>Independent</strong>. 
        But if Speaker B just repeats a mix of what Speaker A and Speaker C already said, then Speaker B is <strong>Linearly Dependent</strong>. 
        They are a "copycat" who adds no new insight (news) to the conversation. 
        In AI, we want a team of "Independent Experts" where every feature brings a unique perspective to the table, rather than having a thousand voices all saying the same thing.
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
    <p>Linear Independence is the ultimate measure of "Efficiency." It asks your data: "Are you actually telling me something new, or are you just a remix of what I already know?"</p>
    <ul>
      <li><strong>Signal De-noising</strong>: When processing audio or sensor data, we look for independent signals. If two sensors give you the same data stream, they are dependent; one is just redundancy. We use linear independence to strip away the "copycats" and keep only the raw, unique signal.</li>
      <li><strong>Feature Selection</strong>: In predictive modeling, having independent features is the key to stability. If your model uses both "Total Sales" and "Tax Paid" where tax is a fixed percentage, the features are dependent. This can cause the math to "explode" during training (Singular Matrix).</li>
    </ul>
    <p>Teacher's Final Word: In AI, we want a lean team of "Independent Experts." Every feature should bring a unique perspective to the table, rather than having a thousand voices all saying the same thing in different languages.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Independence is great. But how many independent vectors do we need to build an entire world? Explore <strong><a href="#/mathematics/linear-algebra/basis-dimension">Basis and Dimension</a></strong>.
    </div>
  `
};
