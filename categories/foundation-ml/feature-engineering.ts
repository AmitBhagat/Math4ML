import { TopicSection } from '../../src/data/types';

export const featureEngineeringSection: TopicSection = {
  id: "feature-engineering",
  title: "Feature Engineering",
  description: "Feature Engineering is the process of using domain knowledge to extract features (characteristics, properties, attributes) from raw data.",
  color: "#FF9800",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Data Art</div>
      <h1>Feature Engineering: The Art of Data</h1>
      <p>There is a famous saying: <strong>"Garbage In, Garbage Out."</strong> Even the most powerful algorithm (like a Deep Neural Network) will fail if you give it "Bad" data. <strong>Feature Engineering</strong> is the act of turning raw, noisy numbers into meaningful <strong>Insights</strong> that the machine can easily understand.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>There is a famous saying in machine learning: <strong>"Garbage In, Garbage Out."</strong> Even the most powerful algorithm in the world—like a massive Deep Neural Network—will fail if you feed it raw, noisy, or irrelevant data. <strong>Feature Engineering</strong> is the act of using your domain knowledge to transform raw numbers into meaningful <strong>Insights</strong> that the machine can actually digest. It is the "Art" of data science; it’s about figuring out which characteristics (features) truly matter for the problem you are trying to solve. When you engineer a feature, you are effectively pointing the way toward the answer, making the learning process 10x easier for the model. Model performance is often 90% data quality and only 10% mathematical complexity.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Data Transformation Mapping</div>
      <p>Feature Engineering is the process of defining a mapping $\Phi: \mathcal{X}_{raw} \to \mathcal{X}_{feat}$ that transforms raw data into a numerical representation optimized for a learning objective. This process is governed by three primary operations:</p>
      
      <div class="space-y-4">
        <div>
          <h4 class="text-sm font-bold text-green-premium">1. Feature Construction</h4>
          <p class="text-xs mb-1">Applying non-linear transformations or domain-specific logic to raw variables to expose latent relationships (e.g., $x_3 = x_1 / x_2$):</p>
          <div class="math-block">
            $$\Phi(x) = [\phi_1(x), \phi_2(x), \dots, \phi_d(x)]^\top$$
          </div>
        </div>

        <div>
          <h4 class="text-sm font-bold text-green-premium">2. Feature Selection</h4>
          <p class="text-xs mb-1">Identifying a subset of features $\mathcal{S} \subset \{1, \dots, D\}$ that maximizes the mutual information $I(X_\mathcal{S}; Y)$ while minimizing redundancy:</p>
          <div class="math-block">
            $$\arg \max_{\mathcal{S}} I(X_{\mathcal{S}}; Y)$$
          </div>
        </div>
      </div>

      <p class="text-xs opacity-80 mt-2">Mathematically, good feature engineering reduces the <strong>VC-Dimension</strong> required for the model to achieve a low generalization error. By embedding domain knowledge into the features, we reduce the amount of data needed for the model to "converge" on the true underlying pattern.</p>
    </div>
    
    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Gourmet Dish Prep</h2>
    
      <h4>Scenario: Prepping the Perfect Salad</h4>
      <p>Imagine the machine is a Master Chef, and your raw data is a pile of unwashed vegetables.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Raw Data:</strong> Whole carrots, unpeeled potatoes, and dirt. If you throw this in the blender, you get "Garbage."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Feature Creation:</strong> You peel the potatoes, chop the carrots, and wash the dirt off. You've <strong>engineered</strong> the raw inputs into something the Chef can actually use.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Feature Selection:</strong> You realize that "Old Lettuce" will ruin the dish. You <strong>drop</strong> it from the bowl. You only keep the high-impact ingredients.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Model performance is <strong>90% Data, 10% Math</strong>. If you spend time making your features smart, even a simple model will beat a complex one using raw, noisy data.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import pandas as pd
import numpy as np

# 1. Create a raw dataset
data = {
    'Price': [250, 300, 350],
    'Year_Built': [1990, 2010, 2000],
    'Year_Sold': [2020, 2022, 2021],
    'Door_Color': ['Red', 'Blue', 'Green'] # Irrelevant noise
}
df = pd.DataFrame(data)

# 2. Feature Selection: Drop irrelevant noise
df = df.drop(columns=['Door_Color'])

# 3. Feature Creation: The 'Magic' feature
df['Age_at_Sale'] = df['Year_Sold'] - df['Year_Built']

print("Modified Dataset (Optimized for ML):")
print(df[['Price', 'Age_at_Sale']])
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Feature Engineering is the "Art of Translation." It turns raw, messy facts into the specific signals that a machine can actually understand, making the learning process 10x faster and more accurate.</p>
    <ul>
      <li><strong>Time-Series Sales Prediction</strong>: To predict how many shirts a store will sell, simply giving the model the "Date" is not enough. Engineers create new features like "Day of the Week," "Is it a Holiday?", and "Days until Payday." These engineered insights allow the model to capture the weekly and seasonal cycles that are hidden in a raw calendar date.</li>
      <li><strong>Sentiment Analysis in NLP</strong>: When analyzing customer reviews, engineers don't just feed in raw text. They extract features like "Word Count," "Number of Exclamation Marks," and "Presence of Negative Words." By pre-processing these features, they give the model a massive head start in "understanding" whether a customer is angry or delighted without having to learn all of linguistics from scratch.</li>
    </ul>
    <p>Teacher's Final Word: Shovel in garbage, get out garbage. The model is only as smart as the features you give it. Feature engineering is the difference between a model that merely memorizes history and one that truly understands the hidden mechanics of future behavior.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve mastered the art of features. Now, learn the mechanical rigor of cleaning and scaling those features in <strong><a href="#/machine-learning/data-preprocessing/intro">Data Preprocessing</a></strong>.
    </div>
  `
};



