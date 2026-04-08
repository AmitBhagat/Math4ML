import { TopicSection } from '../../src/data/types';

export const jointDistributionsSection: TopicSection = {
  id: "joint-distributions",
  title: "Joint Distributions",
  description: "A Joint Distribution allows us to model a multi-dimensional random variable. It tells us the probability of two or more events occurring together.",
  color: "#FF6F00",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Joint</div>
      <h1>Joint Distributions: Modeling Multiple Variables</h1>
      <p>A <strong>Joint Distribution</strong> (\(P(X, Y)\)) is a mathematical function that models the probability of two or more random variables occurring at the same time. In Machine Learning, we don't just care about one feature; we care about the <strong>Interaction</strong> between all our features.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Definition</a>
      <a href="#example-scatter">Example 1: Scatter of Features</a>
      <a href="#example-marginal">Example 2: Marginalizing Out a Variable</a>
      <a href="#implementation">Implementation (Python/NumPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Probability Distributions</strong>: Scalar PMFs and PDFs.</li>
        <li><strong>Set Intersection</strong>: Understanding \(P(A \cap B)\).</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>A single distribution for "Heads/Tails" is simple. But what if you are modeling "House Price" <strong>and</strong> "Number of Bedrooms"? They aren't independent—high bedrooms usually mean high price. <strong>Joint Distributions</strong> allow us to track this relationship. If we know the joint distribution of our data, we have the "God's Eye View" of the entire dataset.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of a Joint Distribution like a <strong>2D Histogram</strong>. 
        Instead of just one axis of data, you have two. 
        The "peaks" on this map tell you which combinations of (X, Y) are most common. 
        In ML, we use this to find out if features are correlated or if they are "moving" together in predictable ways.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <ul>
      <li><strong>Joint Probability Mass Function (PMF):</strong> \(P(X=x, Y=y)\). The sum over all x and y must be 1.</li>
      <li><strong>Marginal Distribution:</strong> To find the probability of just one variable, you "sum out" (marginalize) the others: \(P(X=x) = \sum_{y} P(x, y)\).</li>
    </ul>

    <h2 id="example-scatter">Example 1: Scatter of Binary Features</h2>
    <div class="example-box">
      <h4>Problem: Tracking Clicks and Purchases</h4>
      <p>Let \(X=1\) be a customer who clicked a link, and \(Y=1\) be a customer who made a purchase. The joint probabilities are:</p>
      <table>
        <tr><th></th><th>Y=0 (No)</th><th>Y=1 (Yes)</th></tr>
        <tr><th>X=0 (No Click)</th><td>0.6</td><td>0.1</td></tr>
        <tr><th>X=1 (Click)</th><td>0.05</td><td>0.25</td></tr>
      </table>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Find the probability that a customer clicks <strong>and</strong> purchases. \(P(1, 1) = 0.25\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Summing:</strong> The total must be 1: \(0.6 + 0.1 + 0.05 + 0.25 = 1.0\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Most customers don't click and don't buy (0.6). But knowing the click (\(X=1\)) significantly shifts our expectation that they might buy.
        </div>
      </div>
    </div>

    <h2 id="example-marginal">Example 2: Marginalizing Out a Variable</h2>
    <div class="example-box">
      <h4>Problem: Finding the Overall Click-Rate</h4>
      <p>Given the table above, what is the probability that a customer clicks, regardless of whether they buy?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Formula:</strong> \(P(X=1) = P(1, 0) + P(1, 1)\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Calculate:</strong> \(0.05 + 0.25 = 0.30\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> 30% of our customers click. By "Marginalizing" out the purchase variable, we simplified a 2D problem back down to a 1D problem.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/NumPy)</h2>
    <python-code>
import numpy as np

# A joint probability table (2x2)
# Rows: Income (Low, High)
# Cols: Default (No, Yes)
joint_table = np.array([
    [0.7, 0.1],  # Low income
    [0.15, 0.05] # High income
])

# Marginalizing to find "Overall Default Rate" (Sum over rows)
marginal_default = joint_table.sum(axis=0)

print(f"Overall Default Rate: {marginal_default[1]*100}%")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Generative Models</strong>: Models like GANs try to learn the "Joint Distribution" \(P(X, Y)\) to create new, realistic data points from scratch.</li>
      <li><strong>Feature Selection</strong>: We check the joint distribution to see if two features are redundant.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we already <em>know</em> one variable? How does that change the probability of the other? Explore <strong><a href="#/mathematics/probability/conditional-probability">Conditional Probability</a></strong>.
    </div>
  `
};
