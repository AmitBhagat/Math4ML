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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>How do you explain the difference between an Apple and a Banana to a calculator? Computers are high-speed counting machines; they don’t understand "meaning," only <strong>Magnitude</strong> and <strong>Distance</strong>. If you simply assign numbers like Apple=1 and Banana=2, the computer might assume that a Banana is "greater" than an Apple, or that two Apples equal one Banana. <strong>Categorical Encoding</strong> is the art of translating human labels into a numerical format that preserves the logic of the data without introducing these mathematical lies. It is the "Universal Translator" that allows our models to process the rich, qualitative variety of the real world.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Qualitative to Quantitative Projection</div>
      <p>Categorical Encoding is the process of mapping a categorical variable $X$ with domain $\mathcal{C} = \{c_1, \dots, c_k\}$ into a numeric vector space. The two primary paradigms are defined by the structure of $\mathcal{C}$:</p>
      
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Ordinal Encoding</strong>: Used when $\mathcal{C}$ possesses a natural ordering $\preceq$. The mapping $f: \mathcal{C} \to \mathbb{Z}^+$ satisfies $c_i \preceq c_j \iff f(c_i) \le f(c_j)$. This preserves the "Magnitude" of the relationship (e.g., Cold < Warm < Hot).</li>
        <li><strong>One-Hot Encoding</strong>: Used for nominal data where no order exists. The mapping $\phi: \mathcal{C} \to \{0, 1\}^k$ projects each category onto a standard basis vector $\mathbf{e}_i$. This ensures all categories are **Equidistant** in the feature space: $\|\phi(c_i) - \phi(c_j)\|_2 = \sqrt{2}$ for all $i \neq j$.</li>
      </ul>

      <p class="text-xs opacity-80 mt-2"><strong>The Dummy Variable Trap</strong>: In models with an intercept term, the sum of all one-hot columns is always 1, creating a linear dependency: $\sum_{i=1}^k \mathbf{x}_i = \mathbf{1}$. This causes **Perfect Multicollinearity**, making the covariance matrix non-invertible. To prevent this, we typically drop one category ($k-1$ encoding).</p>
      
      <p class="text-xs opacity-70 mt-2">Choose **One-Hot** to avoid false hierarchy in labels; choose **Ordinal** only when the numerical sequence reflects a semantic progression.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Categorical Encoding as <strong>"The Digital Library Catalog"</strong> or <strong>"The Voting Panel."</strong> 
        Imagine a library. <strong>Label Encoding</strong> is like giving each genre a number (History=1, Fiction=2). This is fine for a list, but a computer might think History + Fiction = Sci-Fi. 
        <strong>One-Hot Encoding</strong> is like giving each genre its own <strong>Shelf</strong>. A book can only be on one shelf at a time. By using binary "buttons" (1 if it's there, 0 if not), we ensure the computer treats all categories as <strong>Equidistant Neighbors</strong> with no inherent hierarchy. It’s about giving every category its own unique coordinate in space.
      </div>
    </div>

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
