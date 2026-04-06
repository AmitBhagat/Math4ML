import { TopicSection } from '../../src/data/types';

export const mutualInformationSection: TopicSection = {
  id: "mutual-information",
  title: "Mutual Information",
  description: "Mutual Information (MI) quantifies the amount of information obtained about one random variable through another, capturing any kind of statistical dependency.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📏 Info Theory · MI</div>
      <h1>Mutual Information (MI)</h1>
      <p><strong>Mutual Information</strong> is a statistical measure that quantifies the amount of information obtained about one random variable through another random variable. It measures how much knowing one variable reduces uncertainty about the other.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#example">Illustrative Example</a>
      <a href="#implementation">Python Implementation</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Shannon Entropy $H(X)$:</strong> The average uncertainty in variable $X$.</li>
        <li><strong>Joint Entropy $H(X, Y)$:</strong> The total uncertainty of a pair of variables.</li>
        <li><strong>Conditional Entropy $H(X|Y)$:</strong> The uncertainty remaining in $X$ after $Y$ is known.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>If two variables $X$ and $Y$ are independent, knowing $Y$ tells you nothing about $X$; their Mutual Information is <strong>zero</strong>. If they are highly dependent, knowing $Y$ tells you a lot about $X$.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Reduction in Entropy:</strong> MI is the intersection of information between two variables. It is the reduction in the entropy of $X$ achieved by learning $Y$: $I(X; Y) = H(X) - H(X|Y)$.
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>For two discrete random variables $X$ and $Y$, Mutual Information is defined as:</p>
    <div class="math-block">
      $$I(X; Y) = \sum_{X, Y} P(x, y) \log_2 \left( \frac{P(x, y)}{P(x)P(y)} \right)$$
    </div>

    <div class="def-box">
      <div class="def-title">Key Properties</div>
      <ul style="margin-top:10px; margin-bottom:0">
        <li><strong>Symmetry:</strong> $I(X; Y) = I(Y; X)$. Information $X$ gives about $Y$ is the same as $Y$ gives about $X$.</li>
        <li><strong>Non-negativity:</strong> $I(X; Y) \geq 0$. Information gained cannot be negative.</li>
        <li><strong>Relationship to KL Divergence:</strong> $I(X; Y) = D_{KL}(P(x, y) \parallel P(x)P(y))$. It measures how far the variables are from independent.</li>
      </ul>
    </div>

    <h2 id="example">Illustrative Example</h2>
    <div class="example-box">
      <h4>Scenario: Predict if a Fruit is an Orange based on its Color</h4>
      <p>Data: 2 samples [Orange, Orange], 1 [Apple, Red], 1 [Apple, Green].</p>
      <ul>
        <li><strong>Entropy of Fruit $H(X)$:</strong> $P(\text{Orange})=0.5, P(\text{Apple})=0.5 \implies H(X) = 1$ bit.</li>
        <li><strong>Conditional Entropy $H(X|Y)$:</strong> If Color is Orange, we are 100% sure it's Orange. If Red or Green, 100% sure it's Apple. $H(X|Y) = 0$.</li>
        <li><strong>MI Calculation:</strong> $I(X; Y) = 1 - 0 = 1$ bit.</li>
      </ul>
      <p><strong>Conclusion:</strong> Knowing the color completely removes the uncertainty about the fruit.</p>
    </div>

    <h2 id="implementation">Python Implementation (Scikit-Learn)</h2>
    <python-code>
from sklearn.feature_selection import mutual_info_classif
import pandas as pd

# Sample Data
data = pd.DataFrame({
    'Feature_A': [1, 2, 1, 2],
    'Feature_B': [5, 5, 5, 5]  # Constant feature, MI should be 0
})
target = [0, 1, 0, 1]

# Calculate scores
mi_scores = mutual_info_classif(data, target)

for name, score in zip(data.columns, mi_scores):
    print(f"Mutual Information for {name}: {score:.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Feature Selection:</strong> A powerful filter method that detects <strong>non-linear</strong> relationships that correlation would miss.</li>
      <li><strong>Bayesian Networks:</strong> Used in structure learning to determine whether edges should exist between nodes.</li>
    </ul>

    <div class="linking-rule">
      <strong>Final Step:</strong> Having mastered the bridge of <strong>Mutual Information</strong> between variables, let's look at <strong>Entropy Examples</strong> to solidify our understanding of these core calculations.
    </div>
  `
};
