import { TopicSection } from '../../src/data/types';

export const categoricalEncodingSection: TopicSection = {
  id: "encoding",
  title: "Categorical Encoding",
  description: "Transforming labels and categories into numerical vectors using One-Hot and Label encoding.",
  color: "#ff7b72",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔡 ML · Preprocessing</div>
      <h1>Categorical Encoding: Speaking the Machine's Language</h1>
      <p>Computers don't know what "London," "Berlin," or "Paris" mean. They only know <strong>Numbers</strong>. To teach them about categories, we have to translate words into a mathematical language that doesn't imply a false order or weight. <strong>Categorical Encoding</strong> is that translator.</p>
    </div>

    <h2 id="label">Label Encoding</h2>
    <p>Label Encoding maps each category to a unique integer (e.g., Red=0, Green=1, Blue=2). 
    <strong>The Gotcha:</strong> This implies an <strong>Order</strong>. If you use this for colors, the model might think <code>Blue > Green > Red</code>. Use this <strong>only</strong> for ordinal data (e.g., Cold=0, Warm=1, Hot=2).</p>

    <h2 id="onehot">One-Hot Encoding</h2>
    <p>Instead of one column with integers, we create a <strong>Binary Column</strong> for every category. 
    "Is it Red?" (1 or 0), "Is it Blue?" (1 or 0). Only one column can be "Hot" (1) at a time. This treats all categories as <strong>Equidistant</strong> and independent.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        One-Hot Encoding is like <strong>"Voting Panels."</strong> 
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
        <strong>Label Encoding</strong> is like giving each genre a number (History=1, Fiction=2, Sci-Fi=3). This is fine for keeping track, but a computer might think History + Fiction = Sci-Fi. 
        <strong>One-Hot Encoding</strong> is like giving each genre its own <strong>Shelf</strong>. 
        A book can only be on one shelf at a time. This way, the genres are treated as distinct categories with no mathematical relationship.
      </div>
    </div>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Label Translator</h2>
    
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
          Always use <strong>One-Hot</strong> for nominal data (Categories with no order like Cities or Colors). Save <strong>Label Encoding</strong> for ordinal data where the order actually matters (like "Small", "Medium", "Large").
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
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
  `
};
