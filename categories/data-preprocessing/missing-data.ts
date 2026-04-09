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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Real-world data is never perfect. It’s "noisy," fragmented, and full of literal holes. Imagine trying to navigate a city with a map that has several squares cut out of it—if you just ignore the missing parts, you might drive into a river. <strong>Handling Missing Data</strong> (or Imputation) is the art of intelligently repairing those holes without introducing "Lies" into your dataset. Most machine learning algorithms will simply crash if they encounter a <code>NaN</code> (Not a Number), so we have to decide: do we cut out the damaged parts entirely, or do we use the surrounding context to guess what should have been there? It is the difference between performing surgery on a record and simply throwing it in the trash.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Mechanisms of Missingness</div>
      <p>Missing data handling is governed by the relationship between the missingness indicator $M$ and the data distribution. We categorize missingness into three formal mechanisms (Rubin, 1976):</p>
      
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>MCAR (Missing Completely at Random)</strong>: $\mathbb{P}(M \mid X_{obs}, X_{mis}) = \mathbb{P}(M)$. The absence of a value is independent of any data (e.g., a random hardware failure). Simple deletion is safe but reduces power.</li>
        <li><strong>MAR (Missing at Random)</strong>: $\mathbb{P}(M \mid X_{obs}, X_{mis}) = \mathbb{P}(M \mid X_{obs})$. The missingness is systematic but can be fully explained by variables we have observed (e.g., younger people being less likely to respond to a survey).</li>
        <li><strong>MNAR (Missing Not at Random)</strong>: $\mathbb{P}(M \mid X_{obs}, X_{mis})$ depends on the missing values $X_{mis}$ themselves. This is a source of **Selection Bias** (e.g., people with extreme illness not appearing in a study).</li>
      </ul>

      <p class="text-xs opacity-80 mt-2"><strong>Correction via Imputation</strong>: Imputation is the estimation of $X_{mis}$ using the conditional distribution $P(X_{mis} \mid X_{obs})$. While simple mean imputation preserves the first moment ($\mu$), it shrinks the variance and distorts the underlying probability density. Iterative methods like **MICE** (Chained Equations) are preferred for preserving multivariate relationships.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of handling missing data as <strong>"Filling the Silhouette"</strong> or <strong>"The Fortune Teller’s Task."</strong> 
        Imagine a crime scene with ten witnesses, but one is missing. 
        <strong>Deletion</strong> is like closing the case because you don't have all the info—simple, but you lose everything the other nine know. 
        <strong>Imputation</strong> is like asking the other witnesses what they saw to reconstruct the tenth person's account. 
        You use the <strong>Mean</strong> (the average of what others saw) or <strong>KNN</strong> (asking the people standing right next to the missing witness) to fill the gap. The goal is <strong>Signal Preservation</strong>: keeping the data alive while ensuring the "Patch" you apply doesn't distort the truth.
      </div>
    </div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of it as <strong>"Data Surgery."</strong> 
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

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Hole in the Map</h2>
    
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
          Handling missing data is about <strong>preserving signal</strong> without introducing <strong>hallucinations</strong>. If 50% of a column is missing, don't impute—just delete the column. You can't perform surgery on a ghost.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
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
