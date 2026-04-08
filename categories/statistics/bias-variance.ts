import { TopicSection } from '../../src/data/types';

export const biasVarianceSection: TopicSection = {
  id: "bias-variance",
  title: "Bias-Variance Tradeoff",
  description: "The Bias-Variance Tradeoff is the fundamental struggle between model simplicity and complexity. It is the key to managing Underfitting and Overfitting.",
  color: "#D32F2F",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Optimization</div>
      <h1>Bias-Variance Tradeoff: The Model's Struggle</h1>
      <p>The <strong>Bias-Variance Tradeoff</strong> is the mathematical explanation of why our models fail. It decomposes the total error into two competing forces: <strong>Bias</strong> (Simplicity) and <strong>Variance</strong> (Wildness). Finding the "Sweet Spot" between them is the goal of all Machine Learning.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>MSE (Mean Squared Error)</strong>: How to measure residuals.</li>
        <li><strong>Complexity</strong>: Model capacity (e.g., number of parameters).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>If you build a model that is too simple (a straight line for a curvy road), you have <strong>High Bias</strong>—you are consistently wrong in a predictable way. If you build a model that is too complex (a line that touches every single data point), you have <strong>High Variance</strong>—you are reacting to noise, and your predictions will be wild on new data.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of the tradeoff as <strong>"The Storyteller's Dilemma."</strong> 
        A <strong>High Bias</strong> storyteller summarizes too much ("The hero won"). You miss the details. 
        A <strong>High Variance</strong> storyteller tells you every blade of grass the hero walked on. You can't see the Plot. 
        A <strong>Perfect Model</strong> tells you exactly the "General Lessons" (The Plot) without the noise.
      </div>
    </div>

    <h2 id="derivation">Mathematical Decomposition</h2>
    <p>Total Expected Error = \(\text{Bias}^2 + \text{Variance} + \sigma_{noise}^2\).</p>
    <ul>
      <li><strong>Bias:</strong> Error from erroneous assumptions (\(\mathbb{E}[\hat{f}] - f\)).</li>
      <li><strong>Variance:</strong> Sensitivity to small fluctuations in the training set.</li>
      <li><strong>Irreducible Error:</strong> Fundamental noise in the data (\(\sigma^2\)).</li>
    </ul>

    <h2 id="example-under" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Underfitting (High Bias)</h2>
    
      <h4>Problem: Trying to Fit a Parabola with a Line</h4>
      <p>Data: \(y = x^2\). Model: \(\hat{y} = ax + b\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> No matter how you tune \(a\) and \(b\), the "Linear" assumptions can't capture the "Curved" truth.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Result:</strong> High Error on both training <strong>and</strong> testing sets.</div>
        </div>
      </div>

      <div class="callout error">
        <div class="callout-icon">✕</div>
        <div class="callout-body">
          <strong>Result:</strong> This model is <strong>Underfitting</strong>. It is too "Opinionated" (BIASED) to learn from the data.
        </div>
      </div>
    

    <h2 id="example-over" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Overfitting (High Variance)</h2>
    
      <h4>Problem: Fitting 5 Points with a 10th-Degree Polynomial</h4>
      <p>Data: [1, 2, 3, 4, 5]. Model: Complex curve passing through all 5 points exactly.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> The model has <strong>Zero Error</strong> on the training set. It captures every random wiggle.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Predict:</strong> When you give it a 6th point, the curve swings wildly off-target.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> This model is <strong>Overfitting</strong>. It has high <strong>VARIANCE</strong> because even a tiny change in one of the 5 points would completely change the entire curve. It's too sensitive!
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np
import matplotlib.pyplot as plt

# Generate noisy data
x = np.linspace(0, 1, 20)
y = np.sin(x * 6) + np.random.normal(0, 0.2, 20)

# Linear (High Bias)
p1 = np.poly1d(np.polyfit(x, y, 1))

# High-degree (High Variance)
p15 = np.poly1d(np.polyfit(x, y, 15))

# Plotting Comparison
plt.scatter(x, y, label="Data")
plt.plot(x, p1(x), label="High Bias")
plt.plot(x, p15(x), label="High Variance")
plt.legend()
plt.show()
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Bagging (Random Forests)</strong>: Lowers <strong>Variance</strong> by averaging many high-variance trees together.</li>
      <li><strong>Boosting (XGBoost)</strong>: Lowers <strong>Bias</strong> by sequentially correcting the errors of simple models.</li>
      <li><strong>Cross-Validation</strong>: The standard tool to find the "Complexity Point" where bias and variance are perfectly balanced.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> How do we prove that our model's performance isn't just a fluke of luck? Explore <strong><a href="#/mathematics/statistics/hypothesis-testing">Hypothesis Testing</a></strong>.
    </div>
  `
};
