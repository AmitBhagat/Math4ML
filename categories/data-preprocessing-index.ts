import { CategoryData } from "../src/data/types";

export const DATA_PREPROCESSING_DATA: CategoryData = {
  id: "data-preprocessing",
  title: "Data Preprocessing",
  description: "Meticulous cleaning and transformation techniques (Scaling, Encoding, Imputation) required for high-quality model training.",
  keyConcepts: [
    { title: "Scaling", description: "Normalizing numerical feature ranges." },
    { title: "Cleaning", description: "Handling missing data and outliers." }
  ],
  sections: [
    {
      id: "scaling",
      title: "Feature Scaling",
      description: "Standardization vs. Normalization for gradient stability and algorithm convergence.",
      html: String.raw`
        <div class="premium-hero">
          <div class="premium-hero-badge">📏 ML · Preprocessing</div>
          <h1>Feature Scaling</h1>
          <p>Imagine trying to compare a person's height in meters (1.8) with their income in dollars (80,000). A model might think income is 40,000 times more important just because the number is bigger. <strong>Scaling</strong> levels the playing field.</p>
        </div>

        <h2 id="normalization">1. Normalization (Min-Max Scaling)</h2>
        <p>Normalization squashes all your data into a fixed range, usually $[0, 1]$. It's great when you know the boundaries of your data and don't have many outliers.</p>

        <div class="premium-def-box">
          <div class="premium-def-title">Min-Max Formula</div>
          <div class="math-block">$$x_{norm} = \frac{x - x_{min}}{x_{max} - x_{min}}$$</div>
        </div>

        <h2 id="standardization">2. Standardization (Z-Score)</h2>
        <p>Standardization centers your data around zero and gives it a spread (standard deviation) of 1. Most algorithms (especially those using Gradient Descent) prefer this.</p>

        <div class="callout tip">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <strong>Core Theory:</strong> The <strong>Z-Score</strong> transformation is defined as:
            <div class="math-block">$$z = \frac{x - \mu}{\sigma}$$</div>
            Where $\mu$ is the mean and $\sigma$ is the standard deviation. This doesn't just scale; it places every point in terms of how many "steps" it is away from the average. This is critical for <strong>Gradient Descent</strong> because it ensures the loss surface is circular rather than a narrow ellipse, making optimization $10\times$ faster.
          </div>
        </div>

        <div class="linking-rule">
          <strong>Next Step:</strong> Numbers are easy to scale, but how do we turn "Red, Green, Blue" into math? Move to <strong><a href="#/machine-learning/data-preprocessing/imputation">Categorical Encoding</a></strong>.
        </div>
      `,
      tags: ["StandardScaler", "MinMax", "Robust"],
      color: "#ff7b72"
    },
    {
      id: "imputation",
      title: "Categorical Encoding",
      description: "Transforming labels and categories into numerical vectors using One-Hot and Label encoding.",
      html: String.raw`
        <div class="premium-hero">
          <div class="premium-hero-badge">🔡 ML · Preprocessing</div>
          <h1>Categorical Encoding</h1>
          <p>Computers only speak numbers. To teach them about categories like "City" or "Gender," we have to translate words into a language of vectors.</p>
        </div>

        <h2 id="onehot">1. One-Hot Encoding</h2>
        <p>Instead of mapping "Apple" to 1 and "Banana" to 2 (which implies Banana > Apple), we create a separate column for each category. Only one can be "on" (1) at a time.</p>

        <div class="callout tip">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <strong>Core Theory:</strong> Beware the <strong>Dummy Variable Trap</strong>! If you have $m$ categories and you create $m$ one-hot columns, you introduce <strong>Multicollinearity</strong> because the $m^{th}$ column is perfectly predictable from the others ($Column_M = 1 - \sum_{i=1}^{M-1} Column_i$). In practice, we always drop one column ($m-1$ encoding) to keep the data linearly independent.
          </div>
        </div>

        <div class="linking-rule">
          <strong>Next Step:</strong> The data is ready and the model is trained. Now, let's prove it actually works in <strong><a href="#/machine-learning/model-evaluation">Model Evaluation</a></strong>.
        </div>
      `,
      tags: ["Missing Values", "One-Hot", "LabelEncoding"],
      color: "#ff7b72"
    }
  ]
};
