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

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">The Foundation: Bayes' Theorem</a>
      <a href="#naive">Why "Naive"? The Independence Assumption</a>
      <a href="#formula">The Mathematical Derivation</a>
      <a href="#laplace">Smoothing: The Zero-Frequency Fix</a>
      <a href="#analogy">The "Sherlock Holmes" Analogy</a>
    </div>

    <h2 id="theory">The Foundation: Bayes' Theorem</h2>
    <p>At its heart, Naive Bayes uses the most famous formula in probability to update our belief about a class based on new evidence:</p>
    <div class="math-block">$$P(C|x) = \frac{P(x|C) \cdot P(C)}{P(x)}$$</div>
    <ul>
      <li><strong>\(P(C|x)\) (Posterior):</strong> Probability of Class $C$ given feature $x$. (Goal)</li>
      <li><strong>\(P(x|C)\) (Likelihood):</strong> Probability of feature $x$ appearing in Class $C$. (Learned from data)</li>
      <li><strong>\(P(C)\) (Prior):</strong> General probability of Class $C$. (Common sense / Statistics)</li>
      <li><strong>\(P(x)\) (Evidence):</strong> Total probability of feature $x$. (Normalizer)</li>
    </ul>

    <h2 id="naive">Why "Naive"? The Independence Assumption</h2>
    <p>In the real world, features often correlate (e.g., if you see "Rain," you're likely to see "Clouds"). Naive Bayes <strong>ignores</strong> this. It assumes every feature is <strong>Independent</strong>. This is a massive mathematical shortcut that makes the calculation incredibly fast.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Logic says we should look at how features interact. But Naive Bayes says: "I don't care about the drama between features. I'm just going to <strong>multiply</strong> all their individual probabilities and see what's left." 
        Even though this assumption is technically "Wrong," the resulting classifier is often <strong>95% as good</strong> as complex models but 1,000x faster.
      </div>
    </div>

    <h2 id="formula">The Mathematical Derivation</h2>
    <p>Because we assume independence, the Likelihood \(P(x|C)\) becomes the product of individual feature likelihoods:</p>
    <div class="math-block">$$P(C | x_1, \dots, x_n) \propto P(C) \prod_{i=1}^n P(x_i | C)$$</div>
    <p>To predict, we simply pick the Class $C$ that results in the <strong>Maximum A Posteriori (MAP)</strong> value.</p>

    <h2 id="laplace">Laplace Smoothing: The Zero-Frequency Fix</h2>
    <p><strong>The Gotcha:</strong> If you see a word in a test email that <strong>never</strong> appeared in your training set for "Spam," the probability becomes <strong>0</strong>. Since everything is multiplied, the whole class probability becomes 0! 
    <strong>The Fix:</strong> We add 1 to every count (Laplace Smoothing) so that nothing is ever truly impossible.</p>

    <h2 id="analogy">The "Sherlock Holmes" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine <strong>Sherlock Holmes solving a crime</strong>. 
        He has three clues: [Mud on shoes, Smell of tobacco, Left-handedness]. 
        <strong>Naive Bayes</strong> assumes these clues happened completely separately. 
        It asks: "Out of 100 criminals, how many have mud? How many smoke tobacco? How many are lefties?" 
        Then it <strong>multiplies</strong> those chances together to see if the suspect is "Guilty" or "Innocent." It ignores the fact that a leftie smoker might be more likely to have mud. It's <strong>Simple, Fast, and often gets the Killer.</strong>
      </div>
    </div>

    <h2 id="algorithm">The Naive Bayes Algorithm</h2>
    <div class="example-box">
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
    </div>

    <h2 id="example">Illustrated Example: The Sleuth's Email Filter</h2>
    <p>Imagine Sherlock Holmes is classifying an email as <strong>Spam</strong> or <strong>Ham</strong> based on three words: "Prize", "Money", and "Meeting".</p>
    <ul>
      <li><strong>The Clues:</strong> "Prize" appears in 80% of Spam but only 1% of Ham. "Meeting" appears in 50% of Ham but only 2% of Spam.</li>
      <li><strong>The Detection:</strong> An email arrives with "Prize" and "Meeting". </li>
      <li><strong>The Bayes Calculation:</strong> Even though "Meeting" sounds safe, the 80% weight of "Prize" combined with the rare overlap makes the <strong>Spam</strong> probability win out.</li>
    </ul>

    <h2 id="example">Illustrated Example: The Bayesian Sleuth</h2>
    <div class="example-box">
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
          <strong>Teacher's Hint:</strong> Naive Bayes is <strong>Log-Linear</strong>. Even though it looks like multiplication, computers usually add the <strong>Logs</strong> of the probabilities to avoid "Underflow" (where numbers get so small the computer thinks they are zero).
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Multinomial NB</h2>
    <python-code static-output="[Training] Learning from 4 labeled emails...\n[Input] New Email: 'Win prize money'\n[Finding] 'Prize' is 100% correlated with Spam in this dataset.\n[Finding] 'Money' is 100% correlated with Spam in this dataset.\n[Result] Classification: Spam\n[Insight] Even with Laplace smoothing, the evidence for Spam was overwhelming.">
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

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we look at physical "Closeness" instead of probability? Explore <strong><a href="#/machine-learning/supervised-learning/knn">k-Nearest Neighbors (KNN)</a></strong>.
    </div>
  `
};
