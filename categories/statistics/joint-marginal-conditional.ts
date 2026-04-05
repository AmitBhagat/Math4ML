import { TopicSection } from '../../src/data/types';

export const jointMarginalConditionalSection: TopicSection = {
  id: "joint-marginal-conditional",
  title: "Joint, Marginal, and Conditional Probability: The Multidimensional Manifold",
  description: "A formal investigation into the relationships between dependent random variables, covering marginalization, conditioning, and joint distribution decomposition.",
  formula: "P(X, Y) = P(Y|X)P(X) = P(X|Y)P(Y)",
  details: [
    "Joint Probability: Simultaneous Multi-variable Occurrences",
    "Marginalization: Summing Out Undesired Variable Spaces",
    "Conditional Probability: Redefining Sample Spaces with Evidence",
    "Product Rule and the Probability Chain Definition",
    "Independence as a Special Case of Joint Decomposition",
    "Application: Joint Distribution Tables in ML Inference"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Multidimensional Roadmap</div>
      <a href="#three-pillars">I. Three Pillars of Joint Inference</a>
      <a href="#marginalization">II. Marginalization and The Sum Rule</a>
      <a href="#product-rule">III. Product Rule and The Chain of Probability</a>
      <a href="#lab">Empirical Matrix Analysis</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="three-pillars" class="premium-h2">I. The Three Pillars of Joint Inference</h2>
    <p>In high-dimensional machine learning models, variables are rarely independent. We need to mathematicaly describe how they interact across the <strong>Joint Distribution</strong> and how to isolate specific variables via <strong>Marginalization</strong>.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Pillar</th><th>Notation</th><th>Intuition</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Joint</strong></td><td>$P(X, Y)$</td><td>Probability of $X$ <strong>AND</strong> $Y$ happening together.</td></tr>
          <tr><td><strong>Marginal</strong></td><td>$P(X)$</td><td>Probability of $X$ alone, regardless of $Y$.</td></tr>
          <tr><td><strong>Conditional</strong></td><td>$P(X|Y)$</td><td>Probability of $X$ <strong>GIVEN THAT</strong> we know $Y$ happened.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 2 -->
    <h2 id="marginalization" class="premium-h2">II. Marginalization and The Sum Rule</h2>
    <p>To find the <strong>Marginal Probability</strong> of a variable $X$, we simply sum (or integrate) out every other variable $Y$ from the joint distribution. This is essentially "collapsing" the multi-dimensional space into a single dimension.</p>

    <div class="premium-math-block">
      P(X) = \sum_{y \in Y} P(X, Y)
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">📉</div>
      <div class="premium-callout-body">
        <strong>The Marginalization Trick:</strong> In discrete joint probability tables, calculating the marginal is as simple as summing the rows or columns.
      </div>
    </div>

    <!-- SECTION 3 -->
    <h2 id="product-rule" class="premium-h2">III. Joint Probability and The Product Rule</h2>
    <p>The <strong>Product Rule</strong> allows us to calculate the joint probability from conditional and marginal parts. This is the foundation of the <strong>Chain Rule of Probability</strong> used in deep generative models.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">The Product Rule Identity</div>
      <p style="margin:0">The joint probability is the conditional probability of one variable multiplied by the marginal of the other:</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        P(X, Y) = P(X|Y)P(Y) = P(Y|X)P(X)
      </div>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Empirical Matrix Analysis</h2>
    <python-code>
import numpy as np

# 1. Define Joint Distribution Table (Rows: Observed, Cols: Predicted)
# joint_table[i, j] = P(Observed=i, Predicted=j)
joint = np.array([[0.1, 0.2], 
                  [0.3, 0.4]])

# 2. Marginalize by summing along axes
marginal_obs = np.sum(joint, axis=1) # Sum rows (P(Obs))
marginal_prd = np.sum(joint, axis=0) # Sum columns (P(Prd))

# 3. Calculate Conditional Probability: P(Obs=0 | Prd=1)
# P(H|D) = P(H,D) / P(D)
cond_prob = joint[0, 1] / marginal_prd[1]

print(f"Joint Matrix:\n{joint}")
print(f"Marginal Observed: {marginal_obs}")
print(f"Marginal Predicted: {marginal_prd}")
print(f"P(Observed=0 | Predicted=1): {cond_prob:.4f}")
    </python-code>
  `
};
