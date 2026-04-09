import { TopicSection } from '../../src/data/types';

export const naiveBayesSection: TopicSection = {
  id: "naive-bayes",
  title: "Naive Bayes Classification",
  description: "A probabilistic classifier based on Bayes' Theorem with a strong (naive) independence assumption between features.",
  color: "#FF9800",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Bayesian</div>
      <h1>Naive Bayes: The Probabilistic Sleuth</h1>
      <p><strong>Naive Bayes</strong> is one of the most efficient and surprisingly effective classifiers in Machine Learning. It doesn't look for geometric boundaries; it calculates the <strong>Probability</strong> of a class given a set of clues. It is "Naive" because it assumes every clue is independent of the others—a simplify-to-win strategy.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p><strong>Naive Bayes</strong> is the ultimate implementation of "Probability-Based Common Sense." Unlike models that look for geometric boundaries, Naive Bayes calculates the <strong>Probability</strong> of a class based on a set of clues. It is "Naive" because it assumes every clue is independent of the others—a simplify-to-win strategy that allows the machine to work 1,000x faster than its competitors. It doesn't care if features relate to each other; it only cares about the signal each one provides individually. It is the gold standard for text classification because it can process trillions of words without breaking a sweat.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Naive Bayes as <strong>"Sherlock Holmes solving a case"</strong> or <strong>"The Fast-Thinking Detective."</strong> 
        Sherlock has three clues: [Mud on boots, smell of tobacco, left-handedness]. 
        Logic says we should look at how these clues interact, but Naive Bayes says: "I don't have time for that drama. I'm just going to <strong>multiply</strong> the individual chances of each clue appearing in a criminal vs. a regular person." 
        Even though this assumption is technically "Wrong," it captures the <strong>Signal</strong> so well that it's the primary engine behind your email spam filters. It is the "Probabilistic Sleuth" that finds the killer (the class) by weighing every piece of evidence independently.
      </div>
    </div>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Naive Bayes Classifier</div>
      <p>Given a class variable $y$ and dependent feature vector $\mathbf{x} = (x_1, \dots, x_d)$, Bayes' Theorem states:</p>
      <div class="math-block">
        $$P(y \mid x_1, \dots, x_d) = \frac{P(y) P(x_1, \dots, x_d \mid y)}{P(x_1, \dots, x_d)}$$
      </div>
      <p>Using the **Conditional Independence Assumption**, we simplify the likelihood to $P(\mathbf{x}|y) = \prod_{i=1}^d P(x_i|y)$, yielding the classification rule:</p>
      <div class="math-block">
        $$\hat{y} = \arg\max_{c \in \mathcal{Y}} P(y=c) \prod_{i=1}^d P(x_i \mid y=c)$$
      </div>
    </div>

    <h2 id="laplace">Laplace Smoothing: The Zero-Frequency Fix</h2>
    <p><strong>The Gotcha:</strong> If you see a word in a test email that <strong>never</strong> appeared in your training set for "Spam," the probability becomes <strong>0</strong>. Since everything is multiplied, the whole class probability becomes 0! 
    <strong>The Fix:</strong> We add 1 to every count (Laplace Smoothing) so that nothing is ever truly impossible.</p>

    <h2 id="algorithm">The Naive Bayes Algorithm</h2>
    
      <h4>The Bayesian Workflow</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Prior Probability:</strong> Calculate $P(C)$, the overall percentage of each class in the training data.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Likelihood Calculation:</strong> For every feature $x_i$, calculate $P(x_i|C)$ (how often that feature appears in that class).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Smoothing:</strong> Apply Laplace smoothing ($+1$) to ensure no probability is ever zero.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Joint Probability:</strong> For a new data point, calculate the score for each class: $Score(C) = P(C) \times P(x_1|C) \times \dots \times P(x_n|C)$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Normalization:</strong> Pick the class with the <strong>Highest Score</strong>.
        </div>
      </div>
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Bayesian Sleuth</h2>
    
      <h4>Scenario: Is this suspect 'Guilty' or 'Innocent'?</h4>
      <p>Imagine Sherlock Holmes has three clues. He assumes they are independent (The Naive part).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Prior Probability:</strong> 2% of the population are criminals. (P(Criminal)).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Likelihood:</strong> 80% of criminals smoke this specific tobacco. (P(Tobacco | Criminal)).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Evidence:</strong> The suspect smokes that tobacco.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Update:</strong> Sherlock multiplies $(0.02 \times 0.80)$ and normalizes. The suspect is now 15% likely to be the killer.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Naive Bayes is <strong>Log-Linear</strong>. Even though it looks like multiplication, computers usually add the <strong>Logs</strong> of the probabilities to avoid "Underflow" (where numbers get so small the computer thinks they are zero).
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import CountVectorizer
import numpy as np

# 1. Simple text data
emails = ["Get your prize now", "Meeting at 10am", "Cheap money prize", "Project update meeting"]
labels = [1, 0, 1, 0] # 1=Spam, 0=Ham

# 2. Vectorization (Word Counting)
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(emails)

# 3. Train the Sherlock Hat
model = MultinomialNB()
model.fit(X, labels)

# 4. Predict
test_email = ["Win prize money"]
test_X = vectorizer.transform(test_email)
prob = model.predict_proba(test_X)[0]
prediction = model.predict(test_X)[0]

print(f"Probabilities [Ham, Spam]: {prob}")
print(f"Prediction: {'Spam' if prediction == 1 else 'Ham'}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Naive Bayes is the "Fast-Thinking Detective." It calculates the probability of a class based on a set of clues, working 1,000x faster than most algorithms.</p>
    <ul>
      <li><strong>Email Spam Filtering</strong>: This is the most famous application. Naive Bayes looks at the probability of words like "Free," "Winner," and "Urgent" appearing in spam vs. real emails. Even though it assumes words are independent, it powers billions of inbox filters every day.</li>
      <li><strong>Customer Sentiment Analysis</strong>: Companies use Naive Bayes to quickly scan millions of product reviews. By multiplying the chances of positive words ("Great", "Happy") vs. negative ones ("Bad", "Broke"), it can judge the "mood" of your customers in real-time.</li>
    </ul>
    <p>Teacher's Final Word: Naive Bayes is a "Simplify-to-Win" strategy. It doesn't care if features relate to each other; it only cares about the signal each one provides individually. It's the gold standard for when you need to process massive amounts of text fast.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we look at physical "Closeness" instead of probability? Explore <strong><a href="#/machine-learning/supervised-learning/knn">k-Nearest Neighbors (KNN)</a></strong>.
    </div>
  `
};


