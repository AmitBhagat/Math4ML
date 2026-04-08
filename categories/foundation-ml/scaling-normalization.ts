import { TopicSection } from '../../src/data/types';

export const scalingNormalizationSection: TopicSection = {
  id: "scaling-normalization",
  title: "Feature Scaling and Normalization",
  description: "Feature Scaling is a method used to normalize the range of independent variables or features of data.",
  color: "#FF9800",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Scaling</div>
      <h1>Scaling: The Big vs. The Small</h1>
      <p>Imagine your machine is comparing <strong>Weight (in grams)</strong> to <strong>Height (in kilometers)</strong>. A human sees that 1,000g is smaller than 1km, but the machine just sees <strong>1,000</strong> vs. <strong>1</strong>. It will "Think" that weight is 1,000x more important than height. <strong>Feature Scaling</strong> is the art of making every feature speak the same <strong>Numerical Language</strong>.</p>
    </div>

    <h2 id="theory">Theoretical Core: Magnitude vs. Importance</h2>
    <p>Algorithms like <strong>Gradient Descent</strong> and <strong>K-Nearest Neighbors</strong> use "Distance" to calculate their updates. If one feature is on a much larger scale than another, the "Gradient" in that direction will be massive, while the other is tiny. This makes the optimization loop slow, unstable, or completely wrong.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of it as <strong>"The Big Fish"</strong>. 
        If you have a feature like "House Price" (Millions) and another like "Number of Bedrooms" (1 to 5), the Millions will "Drown Out" the Bedrooms. To the machine, the 2nd bedroom is invisible because it's just a tiny "1" compared to a million. Scaling gives every feature a <strong>Fair Fight</strong>.
      </div>
    </div>

    <h2 id="standardization">Standardization (Z-Score)</h2>
    <p>This transforms your data to have a <strong>Mean of 0</strong> and a <strong>Standard Deviation of 1</strong> (Standard Normal Distribution).</p>
    <div class="math-block">$$x' = \frac{x - \mu}{\sigma}$$</div>
    <p><strong>Note:</strong> Most algorithms (like SVMs and Neural Nets) prefer this because it handles "Outliers" more gracefully than Min-Max.</p>

    <h2 id="normalization">Normalization (Min-Max)</h2>
    <p>This "Squeezes" all your data into a fixed range, usually <strong>[0, 1]</strong>.</p>
    <div class="math-block">$$x' = \frac{x - x_{min}}{x_{max} - x_{min}}$$</div>
    <p><strong>Note:</strong> This is great when you <strong>know</strong> the boundaries of your data and there are no extreme outliers that would "Squash" all the other points into a tiny pile at the bottom.</p>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Multi-Currency Exchange</h2>
    
      <h4>Scenario: Who is Richer?</h4>
      <p>Imagine comparing the wealth of two people. One has 1 million <strong>Yen</strong>. The other has 10,000 <strong>USD</strong>.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Raw Data:</strong> The machine sees 1,000,000 vs. 10,000. It thinks the first person is 100x richer because the "Number" is bigger.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Exchange Rate:</strong> Scaling is the "Exchange Rate." It converts both into a common currency (like a range of 0 to 1).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Truth:</strong> After scaling, the machine realizes the 10,000 USD is actually worth more. You've given the features a <strong>Common Numerical Language</strong>.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          If your features are on different scales (e.g., Age 0-100 vs. Income 0-1,000,000), your machine will "Drown Out" the smaller numbers. Scale your data or your model will be <strong>Numerically Blind</strong>.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code static-output="[Original] Income: $50,000, Age: 25\n[Min-Max] Income: 0.5, Age: 0.25 (Fair Fight!)\n[Standardized] Income: 1.2Z, Age: -0.4Z\n[Now the machine 'sees' both features with equal importance]">
import numpy as np
from sklearn.preprocessing import StandardScaler, MinMaxScaler

# 1. Huge scale difference: [Income, Age]
X = np.array([[20000, 18], [50000, 35], [120000, 60]])

# 2. Normalization (Min-Max: 0 to 1)
scaler_minmax = MinMaxScaler().fit_transform(X)
print(f"Min-Max Normalized (0 to 1):\n{scaler_minmax}")

# 3. Standardization (Z-Score: Mean 0, Std 1)
scaler_std = StandardScaler().fit_transform(X)
print(f"\nStandardized (Mean 0, Std 1):\n{scaler_std}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> You've prepped the data. The model has learned. Now, how do we know if it's actually any good? Explore <strong><a href="#/machine-learning/foundation-ml/evaluation-metrics">Model Evaluation Metrics</a></strong>.
    </div>
  `
};
