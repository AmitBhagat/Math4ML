import { TopicSection } from '../../src/data/types';

export const evaluationMetricsSection: TopicSection = {
  id: "evaluation-metrics",
  title: "Model Evaluation Metrics",
  description: "Evaluation metrics are used to measure the quality of a statistical or Machine Learning model.",
  color: "#4CAF50",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Evaluation</div>
      <h1>Model Evaluation: The Truth</h1>
      <p>Accuracy is a <strong>Lie</strong>. If 99% of your emails are "Not Spam," and your model just guesses "Not Spam" every single time, it is 99% accurate—but it is <strong>Useless</strong>. <strong>Evaluation Metrics</strong> are the "Scorecards" that tell the real story of how your model behaves.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#matrix">The Confusion Matrix</a>
      <a href="#classification">Precision, Recall, F1-Score</a>
      <a href="#regression">Regression: MAE, MSE, R-squared</a>
      <a href="#analogy">The "Doctor's Diagnosis" Analogy</a>
    </div>

    <h2 id="matrix">The Confusion Matrix</h2>
    <p>A table showing the 4 types of predictions:</p>
    <ul>
      <li><strong>True Positive (TP)</strong>: Correctly guessed "Yes."</li>
      <li><strong>True Negative (TN)</strong>: Correctly guessed "No."</li>
      <li><strong>False Positive (FP)</strong>: Wrongly guessed "Yes" (Type I Error).</li>
      <li><strong>False Negative (FN)</strong>: Wrongly guessed "No" (Type II Error).</li>
    </ul>

    <h2 id="classification">Precision, Recall, F1-Score</h2>
    <div class="example-box">
      <h4>Mathematical Definitions:</h4>
      <ul>
        <li><strong>Precision</strong> = \(\frac{TP}{TP + FP}\). (How many of our "Yes" guesses were actually correct?)</li>
        <li><strong>Recall</strong> = \(\frac{TP}{TP + FN}\). (How many of the actual "Yes" cases did we find?)</li>
        <li><strong>F1-Score</strong> = \(2 \cdot \frac{Precision \cdot Recall}{Precision + Recall}\). (The harmonic mean that balances both).</li>
      </ul>
      
      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Teacher's Intuition:</strong> Think of <strong>Precision</strong> as <strong>"Quality"</strong> and <strong>Recall</strong> as <strong>"Quantity."</strong> 
          If you are <strong>Catching Fish</strong>: 
          **Precision** is the percentage of stuff in your bucket that is actually fish. 
          **Recall** is the percentage of fish in the lake that are now in your bucket. 
          If you drink the whole lake (High Recall), you've caught all the fish, but your precision is 0.0001% because your bucket is full of mud!
        </div>
      </div>
    </div>

    <h2 id="regression">Regression: MAE, MSE, R-squared</h2>
    <ul>
      <li><strong>MAE (Mean Absolute Error):</strong> The average distance from the true value. (Simple and intuitive).</li>
      <li><strong>MSE (Mean Squared Error):</strong> The average of the <strong>Squared</strong> distances. (Punishes big mistakes much harder than small ones).</li>
      <li><strong>R-squared (\(R^2\)):</strong> How much of the "Variance" in the data your model explains. (1.0 = Perfect, 0.0 = Just guessing the average).</li>
    </ul>

    <h2 id="analogy">The "Doctor's Diagnosis" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Cancer Test</strong>. 
        A **False Positive** (FP) means the test says you have cancer, but you're fine. (Scary, but you're alive). 
        A **False Negative** (FN) means the test says you're fine, but you have cancer. (Deadly). 
        In this case, <strong>Recall</strong> is much more important than Precision. We'd rather have 100 people get a "Second Opinion" (FP) than 1 person die because we missed their cancer (FN).
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have completed the foundation. You possess the **Intuition** and **Math** to build real-world models. Explore <strong><a href="#/machine-learning/supervised-learning/basics">Supervised Machine Learning Algorithms</a></strong>.
    </div>
  `
};
