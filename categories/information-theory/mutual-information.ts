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
      <a href="#example-fruit">Example 1: Classification Signal</a>
      <a href="#example-noise">Example 2: Noisy Features</a>
      <a href="#example-nonlinear">Example 3: Non-Linear dependency</a>
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

    <h2 id="example-fruit">Example 1: Identifying a Fruit by Color</h2>
    <div class="example-box">
      <h4>Problem: Does Color provide a Categorical Signal?</h4>
      <p>Suppose 50% of our basket contains <strong>Oranges</strong> (all are orange) and 50% are <strong>Apples</strong> (mix of red and green).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Initial Uncertainty:</strong> $H(Fruit) = 1.0 \text{ bit}$ (perfect 50/50 uncertainty).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Observation:</strong> We learn the color is "Orange." Only the Orange fruit category possesses this color.</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Result:</strong> Uncertainty $H(Fruit|Color)$ drops to 0 bits.</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Interpretation:</strong> $I(Fruit; Color) = 1.0 - 0 = 1.0 \text{ bit}$. Color provides <strong>maximum information</strong> about the fruit type.
        </div>
      </div>
    </div>

    <h2 id="example-noise">Example 2: Noisy / Independent Features</h2>
    <div class="example-box">
      <h4>Problem: Detecting Lack of Relationship</h4>
      <p>Variable $X$: Exam Score. Variable $Y$: Student's Shoe Size.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Independence:</strong> Usually, $X$ and $Y$ are independent. Learning $Y$ doesn't change the distribution of $X$.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Calculation:</strong> $H(X|Y) = H(X)$.</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Result:</strong> $I(X; Y) = H(X) - H(X) = 0 \text{ bits}$.</div></div>

      <div class="callout warning">
        <div class="callout-icon">⚠️</div>
        <div class="callout-body">
          <strong>ML Usage:</strong> In automated feature selection, features with <strong>Zero Mutual Information</strong> are typically discarded because they contain no signal for the target.
        </div>
      </div>
    </div>

    <h2 id="example-nonlinear">Example 3: Capturing Non-Linear Shapes</h2>
    <div class="example-box">
      <h4>Problem: Identifying Dependencies where Correlation Fails ($Y = X^2$)</h4>
      <p>Standard <strong>Pearson Correlation</strong> might be zero if $X$ is centered at zero (as positive and negative slopes cancel out). However, Mutual Information is <strong>not</strong> fooled.</p>
      
      <p>Because $Y$ is a deterministic function of $X$, $H(Y|X) = 0$. The Mutual Information $I(X; Y)$ will be positive and significant, correctly identifying that a strong relationship exists.</p>
      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Key Benefit:</strong> MI is superior to Correlation for detecting complex, non-linear patterns in datasets.
        </div>
      </div>
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
      <strong>Next Step:</strong> Having mastered joint information, see these concepts in action with <strong><a href="#/mathematics/information-theory/examples">Practical Examples: Information Theory</a></strong>.
    </div>
  `
};
