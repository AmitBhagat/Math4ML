import { TopicSection } from '../../src/data/types';

export const crossValidationSection: TopicSection = {
  id: "cross-validation",
  title: "Cross-Validation",
  description: "Cross-validation is a statistical method used to estimate the skill of Machine Learning models by partitioning the data into rotating subsets.",
  color: "#4A90E2",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Validation</div>
      <h1>Cross-Validation: The Rotating Jury</h1>
      <p>If you split your data once (80/20), you're at the mercy of luck. What if that 20% "Test Set" happens to be the easiest data points? <strong>Cross-Validation</strong> is the standard way to ensure your model's performance isn't just a fluke. We rotate the data so every single piece gets to be the "Test Set" at some point.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Variance of Estimates</a>
      <a href="#k-fold">K-Fold Cross-Validation</a>
      <a href="#example">The Logic of K=5</a>
      <a href="#analogy">The "Musical Chairs" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Variance of Estimates</h2>
    <p>A single Train/Test split gives you a single "Snapshot" of accuracy. But accuracy can vary depending on <strong>Which</strong> points are in the test set. Cross-Validation gives you an <strong>Average Accuracy</strong> and a <strong>Standard Deviation</strong>, telling you how much you can actually trust the model's performance.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Musical Chairs for Data."</strong> 
        We have 5 chairs (Blocks of data). In every round, 4 chairs are for the "Training" and 1 chair is for the "Test." We repeat the game 5 times, rotating the test chair each time. By the end, every piece of data has had a turn to judge the model.
      </div>
    </div>

    <h2 id="k-fold">K-Fold Cross-Validation</h2>
    <p>The most common form is **K-Fold**. We split the data into \(K\) "Folds" (usually 5 or 10).</p>
    <ul>
      <li><strong>Iteration 1:</strong> Fold 1 is the Test, Folds 2-5 are Training.</li>
      <li><strong>Iteration 2:</strong> Fold 2 is the Test, Folds 1, 3-5 are Training.</li>
      <li><strong>...</strong></li>
      <li><strong>Final Result:</strong> Average the accuracy of all 5 iterations.</li>
    </ul>

    <h2 id="example">The Logic of K=5</h2>
    <div class="example-box">
      <h4>Scenario: Training a Classifier with 1,000 Samples</h4>
      <p>You divide your 1,000 samples into 5 blocks of 200.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Round 1:</strong> Train on blocks [2,3,4,5], Test on [1]. Result: 85%.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Round 2:</strong> Train on blocks [1,3,4,5], Test on [2]. Result: 82%.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Round 5:</strong> Train on blocks [1,2,3,4], Test on [5]. Result: 88%.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Average Accuracy: 85%. Standard Deviation: 2.5%. This tells you the model is **Robust**. If one round gave 99% and another gave 50%, your data is too inconsistent.
        </div>
      </div>
    </div>

    <h2 id="analogy">The "Rotating Courtroom" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are a <strong>Chef auditioning for a restaurant</strong>. 
        Instead of one judge tasting one dish (Single Split), you have <strong>5 groups of judges</strong>. 
        Each group tastes 4 of your dishes and rates the 5th. By the end, every judge has tasted every dish, and you've cooked for everyone. Your final "Score" is the average of all their opinions. This is the **fairest** possible evaluation of your skill as a chef.
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> Even with perfect validation, if your data is "Bad," your model will be "Bad." Explore <strong><a href="#/machine-learning/foundation-ml/feature-engineering">Feature Engineering</a></strong>.
    </div>
  `
};
