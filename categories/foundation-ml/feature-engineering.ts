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

    <h2 id="theory">The Mechanics of Representation</h2>
    <p>A machine sees data as a <strong>Vector Space</strong>. Your job is to transform the data so that the "Distance" between points actually means something. Feature Engineering isn't about math; it's about <strong>Representing the World</strong> in a way that points the way toward the Answer.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of it as <strong>"Cooking Prep."</strong> 
        The machine is the <strong>Stove</strong>. The data is the <strong>Raw Ingredients</strong>. 
        If you throw a whole, unpeeled potato into the stove, the result is "Garbage." 
        If you peel it, chop it, and season it, you get a <strong>Gourmet Dish</strong>. Feature Engineering is the <strong>Chopping and Seasoning</strong> that happens before the cooking begins.
      </div>
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
    <python-code static-output="[Original Data] Columns: ['Year_Built', 'Year_Sold', 'Color_of_Door']\n[Engineered] Dropped 'Color_of_Door' (Irrelevant)\n[Engineered] Created 'Age_at_Sale' (\n[Result] Predictor score improved by 40%!">
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

    <div class="linking-rule">
      <strong>Next Step:</strong> Even with perfect features, if they are on different scales (e.g. 1 km vs 1,000 mm), the machine will get confused. Explore <strong><a href="#/machine-learning/foundation-ml/scaling-normalization">Scaling and Normalization</a></strong>.
    </div>
  `
};
