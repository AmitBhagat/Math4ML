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
      <div class="premium-def-title">Formalism: The Rubin Framework & Manifold Repair</div>
      <p>Missing data is the "Silent Killer" of models. It's the art of reconstructing a broken mirror without leaving any cracks or distorting the reflection.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine you are looking at a high-resolution photograph of a forest. Now, imagine someone has taken a hole-puncher and randomly punched thousands of holes in the picture. Geometrically, <strong>Missing Data</strong> is the existence of "Null Voids" in your high-dimensional manifold. If you simply ignore the holes, you are looking at a fragmented, broken reality. If you fill them with the "Average" color of the forest (Mean Imputation), you are "Smoothing" the image, potentially erasing the sharp edges (the signal) that actually matter. The goal is to perform <strong>Manifold Repair</strong>: to fill the voids in a way that is geometrically consistent with the surrounding patterns.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We define our data $X$ as composed of observed values $X_{obs}$ and missing values $X_{mis}$. The process of data missingness is a random variable $M$. According to the <strong>Rubin Framework</strong>, we must classify $M$ before we can fix it:</p>
      <ul class="mt-2 mb-4 space-y-2">
        <li><strong>MCAR (Missing Completely at Random)</strong>: $\mathbb{P}(M \mid X_{obs}, X_{mis}) = \mathbb{P}(M)$. The "Hole-Puncher" is blind. The missingness has no relationship to the data itself. You can delete these rows safely, though it saps your statistical power.</li>
        <li><strong>MAR (Missing at Random)</strong>: $\mathbb{P}(M \mid X_{obs}, X_{mis}) = \mathbb{P}(M \mid X_{obs})$. The holes depend only on what we *can* see (e.g., a sensor that fails only when the temperature is high). We can fix this using the observed context.</li>
        <li><strong>MNAR (Missing Not at Random)</strong>: $\mathbb{P}(M \mid X_{obs}, X_{mis})$ depends on the $X_{mis}$ itself. This is selection bias (e.g., patients dropping out of a study because they are too sick). This is the "Mathematical Trap"—you can't fix it without making deep assumptions about the hidden data.</li>
      </ul>
      <p>To fill the gaps, we use <strong>Multiple Imputation</strong>: we don't just guess once. We create $m$ différentes "Realities" by sampling from the conditional distribution $P(X_{mis} \mid X_{obs})$ and average the results to account for our own uncertainty.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Data Preprocessing, handling missingness is the <strong>Integrity Check</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Deletion vs. Imputation</strong>: If 50% of a column is missing, stop trying to be a hero and delete the column. You can't perform surgery on a ghost.</li>
        <li><strong>Bias Preservation</strong>: Always remember that mean imputation artificially shrinks your variance. If you want a model that understands risk, mean imputation is your enemy because it makes the world look safer and more "Average" than it actually is.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Indicating the Patch. When you impute data, you should often add a binary <code>Is_Missing</code> column. This allows the model to learn that the value was a guess. Sometimes the fact that a value is missing is the most important signal of all.</p>
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

    <h2 id="examples" class="mb-8"><span class="text-green-premium font-bold">Case Studies:</span> The Recovery Room</h2>
    
      <h4>Scenario 1: The Hole in the Map</h4>
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
          <div><strong>Conclusion:</strong> KNN found the "Most Probable Truth" by looking at context. The model can now proceed without crashing.</div>
        </div>
      </div>

      <h4>Scenario 2: The Wearable Bio-Tracker</h4>
      <p>A heart-rate monitor generates a time-series stream. Occasionally, the sensor loses contact with the skin, creating a "Gap."</p>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Wrong Move:</strong> Simple Deletion would break the time-series continuity, making it impossible to analyze heart rate variability over time.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Linear Interpolation:</strong> Since heart rates don't just "teleport" from 60 to 90, we draw a smooth line between the last known good pulse and the next one. This preserves the <strong>Causal Flow</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Conclusion:</strong> The model can now detect arrhythmia even if the hardware had a 5-second glitch, ensuring patient safety through "Signal Patching."</div>
        </div>
      </div>

      <h4>Scenario 3: Customer Sentiment Surveys</h4>
      <p>In a marketing survey, 40% of respondents skip the "Personal Income" field due to privacy concerns.</p>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Bias Trap:</strong> If we delete these records, we likely lose our most private (and often wealthiest) customers, creating a massive <strong>Selection Bias</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Imputation by Proxy:</strong> We use "Zip Code" and "Education" as proxies. Using a KNN model, we group them with people of similar backgrounds to impute a "Probable Income."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Conclusion:</strong> Data integrity is preserved. The company can market specifically to high-value segments that were previously "Invisible" due to missing labels.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Handling missing data is about <strong>preserving signal</strong> without introducing <strong>hallucinations</strong>. If 50% of a column is missing, don't impute—just delete the column. You can't perform surgery on a ghost.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
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

    <h2 id="applications">Applications in ML</h2>
    <p>Missing data is the "Hole in the Map." Handling it correctly ensures that we maintain the integrity of our findings without discarding valuable information or introducing systematic bias.</p>
    <ul>
      <li><strong>Imputing Missing Medical Vitals</strong>: In emergency room datasets, some vitals (like blood oxygen levels) might not be recorded for every patient due to the urgency of care. Doctors and data scientists use multivariate imputation to "guess" these missing values based on the patient's heart rate, age, and temperature, allowing the model to predict the severity of the case even when the data is incomplete.</li>
      <li><strong>Consumer Survey Completion Estimation</strong>: When users take marketing surveys, they often skip sensitive questions like "Annual Income." Companies use "Mean" or "Mode" imputation to fill these gaps across millions of surveys, ensuring that they can still build accurate customer segments without having to throw away every survey that has a single blank answer.</li>
    </ul>
    <p>Teacher's Final Word: Silence is a signal too. How you fill the gaps defines the integrity of your results. If you ignore the holes, you lose the signal; if you fill them blindly, you create a hallucination. The goal is to find the logical bridge that keeps your data alive while staying true to the underlying patterns.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve cleaned the map. Now, learn how to measure if your journey was successful in <strong><a href="#/machine-learning/model-evaluation/confusion-matrix">Model Evaluation</a></strong>.
    </div>
  `
};


