import { TopicSection } from '../../src/data/types';

export const missingDataSection: TopicSection = {
  id: "missing-data",
  title: "Handling Missing Data",
  description: "Techniques for identifying and imputing missing values to prevent bias and maintain data integrity.",
  color: "#ff7b72",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🚫 ML · Preprocessing</div>
      <h1>Handling Missing Data: The Hole in the Map</h1>
      <p>Real-world datasets are <strong>Dirty</strong>. Sensors fail, people skip survey questions, and database entries get corrupted. Most ML algorithms will crash or fail if they see a <code>NaN</code> (Not a Number). <strong>Handling Missing Data</strong> is the art of repairing the holes in your dataset without introducing "Lies" or "Bias."</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#types">The 3 Types of Missingness</a>
      <a href="#deletion">Deletion Strategies</a>
      <a href="#imputation">Imputation: Filling the Gaps</a>
      <a href="#analogy">The "Missing Witness" Analogy</a>
    </div>

    <h2 id="types">The 3 Types of Missingness</h2>
    <p>Not all missing data is created equal. Understanding <strong>Why</strong> it's missing is critical:</p>
    <ul>
      <li><strong>MCAR (Missing Completely at Random):</strong> Pure bad luck. (e.g., A sample tube fell and broke).</li>
      <li><strong>MAR (Missing at Random):</strong> The missingness depends on other observed data. (e.g., Men are less likely to report their weight).</li>
      <li><strong>MNAR (Missing Not at Random):</strong> The value itself is the reason it's missing. (e.g., People with very high debt refuse to list it).</li>
    </ul>

    <h2 id="deletion">Deletion Strategies</h2>
    <p><strong>Listwise Deletion:</strong> Throw away the <strong>entire row</strong>. 
    <strong>Pros:</strong> Fast and simple. 
    <strong>Cons:</strong> You might lose 50% of your data if every row has at least one missing feature! <strong>Dangerous</strong> if the missingness isn't random.</p>

    <h2 id="imputation">Imputation: Filling the Gaps</h2>
    <p>Instead of throwing it away, we <strong>Guess</strong> the value:</p>
    <ul>
      <li><strong>Mean/Median Imputation:</strong> Replace missing values with the average of the column. (Reduces variance, "blurs" the data).</li>
      <li><strong>Mode Imputation:</strong> Best for Categorical data (Red, Blue, Green).</li>
      <li><strong>KNN Imputation:</strong> Look at the 5 "Nearest Neighbors" and see what their value for that feature was. (The smartest guess).</li>
    </ul>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Data Surgery."</strong> 
        If you have a thousand points and one is missing, Deletion is like cutting off an arm to fix a splinter. <strong>Imputation</strong> is like getting a prosthetic. It's not the original part, but it allows the body (your model) to keep functioning. 
      </div>
    </div>

    <h2 id="analogy">The "Missing Witness" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Crime Scene</strong> with 10 witnesses. 
        Witness #4 is missing. 
        <strong>Deletion</strong> means you close the case because you don't have all the info. 
        <strong>Mean Imputation</strong> is like asking the other 9 witnesses what color the car was. Most say "Red," so you assume Witness #4 would have said "Red" too. 
        <strong>KNN Imputation</strong> is like finding the 2 witnesses who were <strong>Standing right next to</strong> Witness #4 and asking <strong>them</strong> what they saw.
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Hole in the Map</h2>
    <div class="example-box">
      <h4>Scenario: Predicting House Prices with Missing Features</h4>
      <p>A house listing is missing its 'Number of Bathrooms' feature. We can't let the model crash, so we have to fill the hole.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Mean Imputation:</strong> The average of the neighborhood is 2.5. We put 2.5. (Problem: Realistic houses don't have half-bathrooms).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Median Imputation:</strong> The middle value is 2. We put 2. This is more "Robust" because it isn't pulled by the 10-bathroom mansion down the street.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>KNN Imputation:</strong> We look for houses with the same Square Footage and Price. They all have 3 bathrooms. We put 3. (The Smart Contextual Guess).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Winner:</strong> KNN found the "Most Probable Truth" by looking at context. The model can now proceed without crashing.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Handling missing data is about <strong>preserving signal</strong> without introducing <strong>hallucinations</strong>. If 50% of a column is missing, don't impute—just delete the column. You can't perform surgery on a ghost.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Imputing Values</h2>
    <python-code static-output="[Scan] Dataset identified with NaN values in 'Bathrooms' and 'Color'.\n[Median] Filling 'Bathrooms' holes with the middle value...\n[Result] Missing bathroom replaced with: 2.5\n[Mode] Filling 'Color' holes with most frequent value...\n[Result] Missing color replaced with: 'White'\n[Status] Dataset finalized and ready for ML training.">
import numpy as np
import pandas as pd
from sklearn.impute import SimpleImputer

# 1. Dataset with holes (NaN)
data = {
    'Price': [500000, 450000, 600000, 520000],
    'Bathrooms': [3, np.nan, 3, 2],
    'Color': ['White', 'Red', np.nan, 'White']
}
df = pd.DataFrame(data)

# 2. Impute Numerical (Using Median to avoid outlier bias)
num_imputer = SimpleImputer(strategy='median')
df['Bathrooms'] = num_imputer.fit_transform(df[['Bathrooms']])

# 3. Impute Categorical (Using the Most Frequent label)
cat_imputer = SimpleImputer(strategy='most_frequent')
df['Color'] = cat_imputer.fit_transform(df[['Color']])

print("Dataset after Repair (Imputation):")
print(df)
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if a data point is just wrong or totally weird? Explore <strong><a href="#/machine-learning/data-preprocessing/outliers">Outlier Detection</a></strong>.
    </div>
  `
};
