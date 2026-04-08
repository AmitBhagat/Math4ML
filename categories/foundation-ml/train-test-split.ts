import { TopicSection } from '../../src/data/types';

export const trainTestSplitSection: TopicSection = {
  id: "train-test-split",
  title: "Training vs. Testing Data",
  description: "To accurately evaluate a Machine Learning model, we must split our data into a Training set and a Test set.",
  color: "#4A90E2",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Evaluation</div>
      <h1>Training vs. Testing: The Golden Rule</h1>
      <p>The **Golden Rule** of Machine Learning is: <strong>Never test your model on the same data you used to train it.</strong> If you do, you aren't measuring "Learning"—you're measuring "Memory." We need to know how the model performs on data it has <strong>never seen before</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Generalization</a>
      <a href="#split">The Standard 80/20 Split</a>
      <a href="#contamination">Data Leakage: The Cheating Scandal</a>
      <a href="#analogy">The "Exam Day" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Generalization</h2>
    <p>The point of ML isn't to get 100% accuracy on the data you have. It's to <strong>Generalize</strong> to the data you <em>don't</em> have. If a model performs well on the Training set but poorly on the Test set, it has failed to learn the "Underlying Rule" and has instead just "Memorized the Noise."</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Exam Day."</strong> 
        If a teacher gives the students the <strong>Exact Questions</strong> that will be on the final exam as "Homework" (Training Data), every student will get a 100%. But they didn't learn Math; they just memorized the answers. A real test uses <strong>New Questions</strong> to see if the students truly understand the subject.
      </div>
    </div>

    <h2 id="split">The Standard 80/20 Split</h2>
    <div class="example-box">
      <h4>Problem: Allocating your Limited Data</h4>
      <p>Imagine you have 10,000 credit card transactions. 100 of them are Fraud. How do you split them?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Training Set (80%):</strong> 8,000 transactions. The model "Sees" these and adjusts its internal weights using Gradient Descent.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Test Set (20%):</strong> 2,000 transactions. These are locked in a "Bank Vault." The model <strong>never</strong> sees them until the very last stage of evaluation.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Key Result:</strong> The accuracy on the 2,000 "Hidden" transactions is the only number that <strong>truly matters</strong>.
        </div>
      </div>
    </div>

    <h2 id="contamination">Data Leakage: The Cheating Scandal</h2>
    <p><strong>Data Leakage</strong> happens when information from the Test set "Leaks" into the Training set during preprocessing (like calculating the "Mean" of all data before splitting). This is the #1 mistake in junior ML engineering. It leads to models that look perfect in the lab but <strong>Crash in the real world</strong>.</p>
    
    <h2 id="analogy">The "Hidden Secret" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are a <strong>Blind Wine Taster</strong>. 
        You have 8 glasses of "Practice Wine" (Training). You learn to recognize their profiles. 
        Then, I bring you 2 "Mystery Glasses" (Test) that you've <strong>never tasted</strong>. 
        If you can still correctly identify the grape in the mystery glasses, you are a <strong>True Sommelier</strong> (a Generalizing Model). If you can't, you just memorized the first 8 glasses' labels.
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> What happens when the model memorizes too much? Explore <strong><a href="#/machine-learning/foundation-ml/overfitting-underfitting">Overfitting and Underfitting</a></strong>.
    </div>
  `
};
