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

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Magnitude vs. Importance</a>
      <a href="#standardization">Standardization (Z-Score)</a>
      <a href="#normalization">Normalization (Min-Max)</a>
      <a href="#analogy">The "Multi-Currency" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Magnitude vs. Importance</h2>
    <p>Algorithms like <strong>Gradient Descent</strong> and <strong>K-Nearest Neighbors</strong> use "Distance" to calculate their updates. If one feature is on a much larger scale than another, the "Gradient" in that direction will be massive, while the other is tiny. This makes the optimization loop slow, unstable, or completely wrong.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Big Fish"</strong>. 
        If you have a feature like "House Price" (Millions) and another like "Number of Bedrooms" (1 to 5), the Millions will "Drown Out" the Bedrooms. To the machine, the 2nd bedroom is invisible because it's just a tiny "1" compared to a million. Scaling gives every feature a <strong>Fair Fight</strong>.
      </div>
    </div>

    <h2 id="standardization">Standardization (Z-Score)</h2>
    <p>This transforms your data to have a **Mean of 0** and a **Standard Deviation of 1** (Standard Normal Distribution).</p>
    <div class="math-block">$$x' = \frac{x - \mu}{\sigma}$$</div>
    <p><strong>Note:</strong> Most algorithms (like SVMs and Neural Nets) prefer this because it handles "Outliers" more gracefully than Min-Max.</p>

    <h2 id="normalization">Normalization (Min-Max)</h2>
    <p>This "Squeezes" all your data into a fixed range, usually **[0, 1]**.</p>
    <div class="math-block">$$x' = \frac{x - x_{min}}{x_{max} - x_{min}}$$</div>
    <p><strong>Note:</strong> This is great when you <strong>know</strong> the boundaries of your data and there are no extreme outliers that would "Squash" all the other points into a tiny pile at the bottom.</p>

    <h2 id="analogy">The "Ruler" Analogy</h2>
    <div class="example-box">
      <h4>Scenario: Comparing Two Rulers</h4>
      <p>Data: Height in **mm** [1800, 1900] and Height in **Inches** [70, 75].</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Problem:</strong> The "mm" feature has a much larger <strong>range</strong> (100 vs. 5). The machine will incorrectly assume the first feature is 20x more informative.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Result:</strong> After scaling, both features will live in the <strong>[-1, 1]</strong> or <strong>[0, 1]</strong> range. Now, the machine treats them with <strong>Equal Respect</strong>.</div>
        </div>
      </div>
    </div>

    <h2 id="analogy">The "Multi-Currency" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are <strong>Comparing the Wealth of two people</strong>. 
        One has 1 million <strong>Yen</strong>. The other has 10,000 <strong>Dollars</strong>. 
        If you just look at the raw numbers (1,000,000 vs. 10,000), you'll think the first person is much richer. Scaling is the <strong>"Exchange Rate"</strong> that lets you see the true value in a common currency.
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> You've prepped the data. The model has learned. Now, how do we know if it's actually any good? Explore <strong><a href="#/machine-learning/foundation-ml/evaluation-metrics">Model Evaluation Metrics</a></strong>.
    </div>
  `
};
