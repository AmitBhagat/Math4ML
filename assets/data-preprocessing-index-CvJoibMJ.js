const e={id:"scaling",title:"Feature Scaling",description:"Standardization vs. Normalization for gradient stability and algorithm convergence.",color:"#ff7b72",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📏 ML · Preprocessing</div>
      <h1>Feature Scaling: Leveling the Playing Field</h1>
      <p>Imagine trying to compare a person's <strong>Height in meters</strong> (1.8) with their <strong>Annual Income</strong> (80,000). To a computer, 80,000 is objectively "bigger" and "more important" than 1.8. Without scaling, your model will ignore height and obsess over income. <strong>Feature Scaling</strong> ensures every variable gets a fair vote.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#normalization">Normalization (Min-Max)</a>
      <a href="#standardization">Standardization (Z-Score)</a>
      <a href="#importance">Why Scale? The Gradient Speedup</a>
      <a href="#analogy">The "Compare Apples to Oranges" Analogy</a>
    </div>

    <h2 id="normalization">Normalization (Min-Max Scaling)</h2>
    <p>Normalization squashes all your data into a fixed range, usually <strong>[0, 1]</strong>. It's the best choice when your data has a fixed boundary (like image pixels 0-255) and follow a non-Gaussian distribution.</p>
    
    <div class="premium-def-box">
      <div class="premium-def-title">Min-Max Formula</div>
      <div class="math-block">$$x_{norm} = \frac{x - x_{min}}{x_{max} - x_{min}}$$</div>
    </div>

    <h2 id="standardization">Standardization (Z-Score)</h2>
    <p>Standardization centers your data around <strong>Zero</strong> and gives it a standard deviation of <strong>One</strong>. This is the "Gold Standard" for algorithms like SVM, Logistic Regression, and Neural Networks.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">Z-Score Formula</div>
      <div class="math-block">$$z = \frac{x - \mu}{\sigma}$$</div>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Standardization doesn't just "shrink" the numbers; it translates them into <strong>"Standard Deviation Steps."</strong> Instead of saying "You earn $80k," the model sees "You are 2.5 standard deviations above the average earner." This is much more informative for the math.
      </div>
    </div>

    <h2 id="importance">Why Scale? The Gradient Speedup</h2>
    <p>If features have different scales, the <strong>Loss Surface</strong> looks like a long, narrow "Taco Shell." Gradient Descent will bounce back and forth, taking forever to reach the bottom. When you scale, the surface becomes a **Symmetric Bowl**, and the gravity of the gradient pulls the model straight to the minimum 10x faster.</p>

    <h2 id="analogy">The "School Grades" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine comparing two students. 
        Student A got a **90%** on a Math test. 
        Student B got an **800** on the SAT. 
        Is 800 better than 90? Of course not—they are on different scales! 
        To compare them fairly, you have to <strong>Scale</strong> them to a common range (like 0 to 100) or check how many <strong>Standard Deviations</strong> they are above the class average. 
        **Scaling is the universal translator for data.**
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Fair Athlete</h2>
    <div class="example-box">
      <h4>Scenario: Comparing a Sprinter and a Weightlifter</h4>
      <p>How do you decide who is the "Best Athlete" when one measures performance in <strong>Seconds</strong> (10.0) and the other in <strong>Grams</strong> (200,000)?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Raw Gap:</strong> To a computer, 200,000 looks 20,000x more important than 10.0. The Weightlifter wins purely due to units.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Standardization:</strong> We calculate the "Z-Score." We find the Sprinter is 3 standard deviations faster than average, while the lifter is only 1.2 standard deviations stronger.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Level Field:</strong> Now both are measured in <strong>"Deviation Steps."</strong> The massive numbers are gone, and the "Signal" is preserved.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Result:</strong> The model now sees that the Sprinter's accomplishment is mathematically rarer and grants it higher weight.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Scaling is the <strong>Universal Translator</strong> for data. Without it, your model isn't learning logic; it's just following the biggest units. If your model is taking 1,000 epochs to move an inch, check your scales!
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Standardization in Action</h2>
    <python-code static-output="[Scan] Input: Height (m) vs. Income ($)\n[Action] Initializing Scikit-Learn StandardScaler (Z-Score)...\n[Mapping] Row 1: [1.8m, $80k]  -> [ 0.9,  0.8]\n[Mapping] Row 2: [1.6m, $40k]  -> [-1.3, -1.1]\n[Status] Features are now centered at 0 with unit variance.\n[Insight] The model now sees 'Height' and 'Income' as equally influential voters.">
import numpy as np
from sklearn.preprocessing import StandardScaler

# 1. Raw Data: [Height in meters, Income in dollars]
X = np.array([
    [1.8, 80000],
    [1.6, 40000],
    [1.9, 120000],
    [1.7, 60000]
])

# 2. Apply the 'Leveler' (Standardization)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 3. Validation: Check the new distribution
print(f"Original Input Sample: \n{X[0]}")
print(f"\nScaled Result (Z-Score): \n{X_scaled[0].round(2)}")
print(f"\nFinal Means (should be 0): {np.mean(X_scaled, axis=0).round(1)}")
print(f"Final Std Devs (should be 1): {np.std(X_scaled, axis=0).round(1)}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Numbers are easy to scale, but what about text? Explore <strong><a href="#/machine-learning/data-preprocessing/encoding">Categorical Encoding</a></strong>.
    </div>
  `},t={id:"encoding",title:"Categorical Encoding",description:"Transforming labels and categories into numerical vectors using One-Hot and Label encoding.",color:"#ff7b72",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔡 ML · Preprocessing</div>
      <h1>Categorical Encoding: Speaking the Machine's Language</h1>
      <p>Computers don't know what "London," "Berlin," or "Paris" mean. They only know <strong>Numbers</strong>. To teach them about categories, we have to translate words into a mathematical language that doesn't imply a false order or weight. <strong>Categorical Encoding</strong> is that translator.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#label">Label Encoding: The Integer Map</a>
      <a href="#onehot">One-Hot Encoding: The Binary Vector</a>
      <a href="#trap">The Dummy Variable Trap</a>
      <a href="#analogy">The "Traffic Light" Analogy</a>
    </div>

    <h2 id="label">Label Encoding</h2>
    <p>Label Encoding maps each category to a unique integer (e.g., Red=0, Green=1, Blue=2). 
    **The Gotcha:** This implies an <strong>Order</strong>. If you use this for colors, the model might think <code>Blue > Green > Red</code>. Use this <strong>only</strong> for ordinal data (e.g., Cold=0, Warm=1, Hot=2).</p>

    <h2 id="onehot">One-Hot Encoding</h2>
    <p>Instead of one column with integers, we create a <strong>Binary Column</strong> for every category. 
    "Is it Red?" (1 or 0), "Is it Blue?" (1 or 0). Only one column can be "Hot" (1) at a time. This treats all categories as <strong>Equidistant</strong> and independent.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> One-Hot Encoding is like <strong>"Voting Panels."</strong> 
        Instead of a single dial, you have a row of buttons. If you press the "Berlin" button, all other buttons pop up. It's the safest way to encode nominal data without introducing bias.
      </div>
    </div>

    <h2 id="trap">The Dummy Variable Trap</h2>
    <p>If you have 3 categories (Red, Blue, Green) and you create 3 columns, you have <strong>Redundant Information</strong>. If you know it's not Red and not Blue, then it <strong>must</strong> be Green. 
    Mathematically, this causes <strong>Multicollinearity</strong>. To fix it, we always drop one column ($n-1$ encoding).</p>

    <h2 id="analogy">The "Library Catalog" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Library</strong>. 
        **Label Encoding** is like giving each genre a number (History=1, Fiction=2, Sci-Fi=3). This is fine for keeping track, but a computer might think History + Fiction = Sci-Fi. 
        **One-Hot Encoding** is like giving each genre its own <strong>Shelf</strong>. 
        A book can only be on one shelf at a time. This way, the genres are treated as distinct categories with no mathematical relationship.
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Label Translator</h2>
    <div class="example-box">
      <h4>Scenario: Teaching a Model about Fruit</h4>
      <p>How do we represent 'Apple', 'Banana', and 'Cherry' without making the computer think one is "Greater" than the other? A computer sees integers as having magnitude (2 > 1).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Numerical Trap:</strong> Label Encoding (Apple=0, Banana=1, Cherry=2) implies that <code>Apple + Banana = Cherry</code>. This is nonsense in feature space.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Separation of Powers:</strong> We create 3 separate columns. If it's an Apple, only the "Apple" button is pressed [1, 0, 0].</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Final Squeeze:</strong> We drop the 'Cherry' column. If Apple is 0 and Banana is 0, the model knows it <strong>must</strong> be a Cherry. (Avoiding Redundancy).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Result:</strong> The model now treats all fruits as equally distant neighbors in a high-dimensional space. No fruit is "Greater" than another.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Always use <strong>One-Hot</strong> for nominal data (Categories with no order like Cities or Colors). Save <strong>Label Encoding</strong> for ordinal data where the order actually matters (like "Small", "Medium", "Large").
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: One-Hot vs. Label Encoding</h2>
    <python-code static-output="[Scan] Dataset: 4 nominal categories (Cities)\n[Label] Running LabelEncoder: {'Berlin':0, 'London':1, 'Paris':2}\n[OHE] Running get_dummies (One-Hot Encoding)...\n[Mapping] Row 0: 'London' -> [0, 1, 0] (as binary vector)\n[Insight] One-Hot encoding added 2 new features to eliminate false ordering.\n[Efficiency] Using 'drop_first=True' to avoid the Dummy Variable Trap.">
import pandas as pd
from sklearn.preprocessing import LabelEncoder

# 1. Dataset: Nominal Categories (No inherent order)
data = {'City': ['London', 'Paris', 'Berlin', 'London']}
df = pd.DataFrame(data)

# 2. Label Encoding (Quick but potentially biased)
le = LabelEncoder()
df['City_Label'] = le.fit_transform(df['City'])

# 3. One-Hot Encoding (The ML Standard)
# drop_first=True removes redundancy (The Dummy Variable Trap)
df_ohe = pd.get_dummies(df['City'], prefix='City', drop_first=True)

print("Label Encoding Result:")
print(df)
print("\nOne-Hot Encoding Result (dropped first column):")
print(df_ohe)
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if the data is just missing? Explore the art of <strong><a href="#/machine-learning/data-preprocessing/missing-data">Handling Missing Data</a></strong>.
    </div>
  `},a={id:"missing-data",title:"Handling Missing Data",description:"Techniques for identifying and imputing missing values to prevent bias and maintain data integrity.",color:"#ff7b72",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🚫 ML · Preprocessing</div>
      <h1>Handling Missing Data: The Hole in the Map</h1>
      <p>Real-world datasets are <strong>Dirty</strong>. Sensors fail, people skip survey questions, and database entries get corrupted. Most ML algorithms will crash or fail if they see a <code>NaN</code> (Not a Number). **Handling Missing Data** is the art of repairing the holes in your dataset without introducing "Lies" or "Bias."</p>
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
    **Pros:** Fast and simple. 
    **Cons:** You might lose 50% of your data if every row has at least one missing feature! <strong>Dangerous</strong> if the missingness isn't random.</p>

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
        If you have a thousand points and one is missing, Deletion is like cutting off an arm to fix a splinter. **Imputation** is like getting a prosthetic. It's not the original part, but it allows the body (your model) to keep functioning. 
      </div>
    </div>

    <h2 id="analogy">The "Missing Witness" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a **Crime Scene** with 10 witnesses. 
        Witness #4 is missing. 
        **Deletion** means you close the case because you don't have all the info. 
        **Mean Imputation** is like asking the other 9 witnesses what color the car was. Most say "Red," so you assume Witness #4 would have said "Red" too. 
        **KNN Imputation** is like finding the 2 witnesses who were <strong>Standing right next to</strong> Witness #4 and asking <strong>them</strong> what they saw.
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
  `},i={id:"data-preprocessing",title:"Data Preprocessing",description:"Meticulous cleaning and transformation techniques (Scaling, Encoding, Imputation) required for high-quality model training.",keyConcepts:[{title:"Scaling",description:"Normalizing numerical feature ranges."},{title:"Encoding",description:"Translating words to mathematical vectors."},{title:"Imputation",description:"Handling missing data gaps."}],sections:[e,t,a]};export{i as DATA_PREPROCESSING_DATA};
