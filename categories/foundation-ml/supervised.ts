import { TopicSection } from '../../src/data/types';

export const supervisedLearningSection: TopicSection = {
  id: "supervised",
  title: "Supervised Learning",
  description: "Supervised Learning is the most common form of Machine Learning, where a model is trained on a labeled dataset.",
  color: "#4CAF50",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Supervised</div>
      <h1>Supervised Learning: The Guided Path</h1>
      <p><strong>Supervised Learning</strong> is the machine equivalent of learning with a tutor. Every data point you feed the model comes with the <strong>"Right Answer"</strong> (the Label). The goal is for the model to learn a general mapping so it can guess the answers for data it has never seen before.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">The Mechanics: Mapping Inputs to Outputs</a>
      <a href="#regression">Regression: Predicting Infinite Numbers</a>
      <a href="#classification">Classification: Predicting Categories</a>
      <a href="#limitations">The "Labeling Tax" (Limitations)</a>
    </div>

    <h2 id="theory">The Mechanics: Mapping Inputs to Outputs</h2>
    <p>In Supervised Learning, we have an input vector \(X\) and a known target \(Y\). We want to find a function \(f\) such that:</p>
    <div class="math-block">$$Y = f(X) + \epsilon$$</div>
    <p>Where \(\epsilon\) is the noise we can't explain. The "Learning" happens as we minimize the difference between the model's prediction (\(\hat{Y}\)) and the actual truth (\(Y\)).</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as a <strong>"Flashcard Simulator."</strong> 
        The machine sees a picture (Input), guesses "Cow" (Output), looks at the back of the card (Label), sees it says "Dog," and slightly tweaks its internal neural weights to be more "Dog-like" next time. Done 10,000 times, it builds a robust mapping.
      </div>
    </div>

    <h2 id="regression">Regression: Predicting Infinite Numbers</h2>
    <div class="example-box">
      <h4>Problem: Predicting a Continuous Value</h4>
      <p>Imagine you're predicting the temperature tomorrow or the stock price of a company.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Goal:</strong> Find a trend line that goes through the middle of all your data points.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Analogy:</strong> Predicting how much a 10-year-old will weigh. You look at their height, their parents' weight, and their diet. The answer is a <strong>Continuous Number</strong> (e.g. 35.4 kg).</div>
        </div>
      </div>
    </div>

    <h2 id="classification">Classification: Predicting Categories</h2>
    <div class="example-box">
      <h4>Problem: Sorting into Buckets</h4>
      <p>Is this email "Spam" or "Not Spam"? Is this image a "Cat" or a "Car"?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Goal:</strong> Find a <strong>Boundary</strong> (a "Fence") that separates the different groups as clearly as possible.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Analogy:</strong> Sorting mail in a post office. You look at the address and throw it into the "NY" bucket or the "CA" bucket. The answer is a <strong>Discrete Category</strong>.</div>
        </div>
      </div>
    </div>

    <h2 id="limitations">The "Labeling Tax" (Limitations)</h2>
    <p>Supervised Learning is powerful, but it has one huge bottleneck: <strong>Humans are slow.</strong> To train a model to recognize cancer, you need to pay expensive doctors to manually highlight thousands of X-rays. If you don't have good labels, you can't do Supervised Learning.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we have no labels? How can a machine find patterns on its own? Explore <strong><a href="#/machine-learning/foundation-ml/unsupervised">Unsupervised Learning</a></strong>.
    </div>
  `
};
