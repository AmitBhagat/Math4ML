import { TopicSection } from '../../src/data/types';

export const chiSquareSection: TopicSection = {
  id: "chi-square-test",
  title: "Chi-Square Test",
  description: "The Chi-Square test is the fundamental tool for analyzing categorical data. In ML, it is the primary engine for Feature Selection between non-numeric variables.",
  color: "#D32F2F",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Categorical</div>
      <h1>Chi-Square: The Test of Independence</h1>
      <p>The <strong>Chi-Square (\(\chi^2\)) Test</strong> is how we mathematically prove that two categories are "talking to each other." In Machine Learning, we use it to answer the critical question: "Does knowing Feature X actually tell me anything about my Target Label Y, or are they completely independent?"</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Categorical Data</strong>: Understanding labels vs. numbers.</li>
        <li><strong>Contingency Tables</strong>: Organizing data into a grid of counts.</li>
        <li><strong>Expected Value</strong>: What the data <em>should</em> look like if there was zero relationship.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Imagine you’re building a model to predict if a customer will "Buy" or "Not Buy." You have a feature: "Morning Person" vs. "Night Owl." Does it matter? To find out, you look at a <strong>Contingency Table</strong>. If "Morning People" buy at exactly the same rate as "Night Owls," then the two are <strong>Independent</strong>—the feature is useless. But if "Night Owls" buy 5x more often, there’s a <strong>Relationship</strong>. The <strong>Chi-Square Test</strong> measures the "distance" between what you actually see (Observed) and what you would expect to see if they were totally unrelated (Expected). If that distance is huge, you’ve found a signal. This is the "secret sauce" of feature selection: discarding the noise and keeping the predictors.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Residual of Independence & The \(\chi^2\) Sum</div>
      <p>The Chi-Square Test is the "Independence Auditor." it measures how far a set of categorical observations drifts from the baseline of pure chance.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine a "Ghost Table" representing the perfect state of independence—where knowing $X$ gives you exactly zero information about $Y$. In this table, every cell is just a proportional slice of the totals. Now, look at your "Real Table" (the Observed data). Geometrically, Chi-Square is the <strong>Total Squared Strain</strong> required to warp the Ghost Table until it matches the Real Table. If the tables are nearly identical, the "strain" is low; if the counts are wildly concentrated in specific corners, the strain is high, indicating a strong hidden bond between the variables.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We first calculate the <strong>Expected Frequency</strong> ($E_{ij}$) for each cell under the null hypothesis of independence. This is the probability of the row times the probability of the column, scaled by the total sample size $N$:</p>
      <div class="math-block">
        $$E_{ij} = \frac{(\text{Row Total}_i \times \text{Column Total}_j)}{N}$$
      </div>
      <p>The <strong>Chi-Square Statistic</strong> is the sum of the standardized squared residuals across all cells of the table:</p>
      <div class="math-block">
        $$\chi^2 = \sum_{i} \sum_{j} \frac{(O_{ij} - E_{ij})^2}{E_{ij}}$$
      </div>
      <p>We divide by $E_{ij}$ to scale the "Error" relative to the magnitude of the expectation. A deviation of 10 is massive if you expected 2, but irrelevant if you expected 10,000.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, Chi-Square is the "First Filter": </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Feature Selection</strong>: We use $\chi^2$ to rank categorical features. If a feature has a low Chi-Square score against the target label, it means it is effectively independent of the outcome—meaning it is "Noise" and should be deleted to save memory and prevent overfitting.</li>
        <li><strong>Independence Check</strong>: Unlike correlation (which only sees straight lines), $\chi^2$ can detect complex, non-linear relationships between categories (e.g., "Color" and "Price Segment").</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Chi-Square is a "Large Sample" test. If any cells in your table have an expected count of less than 5, the math starts to break down and the test becomes unreliable. If your data is sparse, you need to use <strong>Fisher's Exact Test</strong> instead.</p>
    </div>
    
    <visualizer topic="chi-square" />
    

    
    <h2 id="case-study" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Feature Relevance (E-commerce)</h2>
    
      <h4>Problem: Is 'Gender' Related to 'Buying a Phone'?</h4>
      <p>Data: 200 people. You want to know if 'Gender' is a useful feature for your classifier.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Test Strategy:</strong> We use the <strong>Chi-Square Test of Independence</strong> because both 'Gender' and 'Purchase' are discrete, categorical labels.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Logic:</strong> If gender and purchasing were unrelated, we'd expect sales to be split evenly across genders (adjusting for population). The test calculates how far the *actual* sales deviate from this even split.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> If the \(p\)-value is tiny, 'Gender' is a <strong>Relevant Feature</strong>. If the \(p\)-value is high, it means any difference you saw was just luck—drop the feature from your model.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np
from scipy.stats import chi2_contingency

# Create a contingency table
# Rows: Gender (Male, Female)
# Cols: Purchase (Yes, No)
#         Yes  No
data = [[50,  10],  # Male
        [30,  40]]  # Female

chi2, p, dof, expected = chi2_contingency(data)

print(f"Chi-Square Statistic: {chi2:.4f}")
print(f"P-Value: {p:.4f}")
print("Expected Frequencies if Independent:")
print(expected)

if p < 0.05:
    print("\nDecision: Variables are Dependent (Significant Relationship)")
else:
    print("\nDecision: Variables are Independent (No Relationship)")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Chi-Square is the "Filter" for categorical feature engineering.</p>
    <ul>
      <li><strong>Feature Selection (SelectKBest)</strong>: In libraries like Scikit-Learn, <code>chi2</code> is a standard scoring function for selecting the top $k$ features. It ranks features by how much information they share with the target label.</li>
      <li><strong>Data Quality Audits</strong>: We use it to check for "Bias" in datasets—ensuring that the distribution of sensitive attributes (like race or age) isn't accidentally correlated with the target in a way that creates an unfair model.</li>
    </ul>
    <p>Teacher's Final Word: Don't guess if a category matters. Use Chi-Square to prove it. If they are independent, your model is just learning noise.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> You've compared means and categories. But how do you compare multiple groups at once? Explore <strong><a href="#/mathematics/statistics/anova">ANOVA</a></strong>.
    </div>
  `
};
