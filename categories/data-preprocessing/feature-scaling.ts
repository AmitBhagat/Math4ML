import { TopicSection } from '../../src/data/types';

export const featureScalingSection: TopicSection = {
  id: "scaling",
  title: "Feature Scaling",
  description: "Standardization vs. Normalization for gradient stability and algorithm convergence.",
  color: "#ff7b72",
  html: String.raw`
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
    <p>If features have different scales, the <strong>Loss Surface</strong> looks like a long, narrow "Taco Shell." Gradient Descent will bounce back and forth, taking forever to reach the bottom. When you scale, the surface becomes a <strong>Symmetric Bowl</strong>, and the gravity of the gradient pulls the model straight to the minimum 10x faster.</p>

    <h2 id="analogy">The "School Grades" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine comparing two students. 
        Student A got a <strong>90%</strong> on a Math test. 
        Student B got an <strong>800</strong> on the SAT. 
        Is 800 better than 90? Of course not—they are on different scales! 
        To compare them fairly, you have to <strong>Scale</strong> them to a common range (like 0 to 100) or check how many <strong>Standard Deviations</strong> they are above the class average. 
        <strong>Scaling is the universal translator for data.</strong>
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
  `
};
