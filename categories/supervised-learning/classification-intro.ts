import { TopicSection } from '../../src/data/types';

export const classificationIntroSection: TopicSection = {
  id: "classification-intro",
  title: "Introduction to Classification",
  description: "Classification is the task of predicting a discrete category (a label) from input features.",
  color: "#58a6ff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Core</div>
      <h1>Introduction to Classification</h1>
      <p>If Regression answers "How Much?", <strong>Classification</strong> answers "What is it?". Whether it's telling a Cat from a Dog or identifying Fraudent credit card transactions, Classification is the art of <strong>Drawing Boundaries</strong> in data space.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">The Mechanics: Mapping to Discrete Buckets</a>
      <a href="#binary">Binary vs. Multi-class</a>
      <a href="#analogy">The "Sorting Hat" Analogy</a>
      <a href="#objective">The Goal: Decision Boundaries</a>
    </div>

    <h2 id="theory">The Mechanics: Mapping to Discrete Buckets</h2>
    <p>In Classification, your output \(Y\) is a <strong>Category</strong>. For a machine, we usually encode these as integers (0, 1, 2...). Our model doesn't just guess a number; it calculates the <strong>Probability</strong> that an input belongs to each bucket.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Drawing a Line in the Sand."</strong> 
        Classification is like an <strong>Apple Sorter</strong>. You see a fruit. You check its weight and color. Is it a "Fuji" or a "Granny Smith"? Unlike regression, there is no "in-between." You have to commit to <strong>one bucket</strong>.
      </div>
    </div>

    <h2 id="binary">Binary vs. Multi-class</h2>
    <div class="example-box">
      <h4>Scenario: The Complexity of Buckets</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Binary (0 or 1):</strong> The classic "Yes or No" (e.g. Spam vs. Not Spam). <strong>The Goal:</strong> Find one boundary.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Multi-class:</strong> Choosing one from many. (e.g. Recognizing digits 0-9). <strong>The Goal:</strong> Partition the space into multiple "Regions of Influence."</div>
        </div>
      </div>
    </div>

    <h2 id="analogy">The "Sorting Hat" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine the <strong>Sorting Hat from Harry Potter</strong>. 
        It has a <strong>Decision Boundary</strong> for each House (Gryffindor, Slytherin, etc.). 
        It "Reads" your features (Brave, Ambitious, Loyal). It doesn't say you are "40% Gryffindor." It says "You belong in **Gryffindor!**" 
        **Classification** is that hat. The "Learning" was the hat looking at 1,000 years of students to find the <strong>Patterns of Personality</strong> that define each house.
      </div>
    </div>

    <h2 id="objective">The Goal: Decision Boundaries</h2>
    <p>The core objective of any classification algorithm is to find the <strong>Decision Boundary</strong>. This is the "Fence" that separates classes. If a new data point lands on the left side of the fence, it's a cat. Right side? A dog. The "Better" the algorithm, the more **robust and accurate** that fence is.</p>

    <h2 id="algorithm">The Classification Algorithm</h2>
    <div class="example-box">
      <h4>The Sorting Process</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Feature Extraction:</strong> Convert raw data (images, text) into numerical vectors.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Model Definition:</strong> Choose an algorithm (e.g., Logistic Regression, SVM) to define the probability space.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Training:</strong> Adjust the model weights to maximize the probability of the correct labels (Minimizing Cross-Entropy Loss).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Boundary Estimation:</strong> Find the line or surface that separates the classes in N-dimensional space.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Inference:</strong> For a new point, calculate the probability of each class and choose the <strong>Maximum Probability</strong> bucket.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Spam Filter</h2>
    <p>Think about your email inbox. Every incoming mail is <strong>Classified</strong> before you see it.</p>
    <ul>
      <li><strong>Features:</strong> Keywords (e.g., "Win", "Prize", "Account"), Sender reputation, Number of attachments.</li>
      <li><strong>The Boundary:</strong> The "Sorting Hat" checks the email. If the "Spamminess" score $> 0.8$, it goes to the **Spam Bucket**. Otherwise, it goes to **Inbox**.</li>
    </ul>
    <p>A good classifier learns that "Meeting" is safe, but "CONGRATULATIONS!" in all caps is high-risk.</p>

    <h2 id="python">Python Implementation</h2>
    <python-code>
from sklearn.linear_model import LogisticRegression
import numpy as np

# 1. Email features: [Num_Keywords, Reputation_Score]
X = np.array([[20, 1], [2, 9], [30, 0], [1, 10]])
y = np.array([1, 0, 1, 0]) # 1 = Spam, 0 = Real

# 2. Train the 'Sorting Hat'
model = LogisticRegression()
model.fit(X, y)

# 3. Predict for a new email (5 keywords, 8 reputation)
new_mail = np.array([[5, 8]])
label = "Spam" if model.predict(new_mail)[0] == 1 else "Real"
print(f"Classification result: {label}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What's the most common tool for building this "Fence"? Explore <strong><a href="#/machine-learning/supervised-learning/logistic-regression">Logistic Regression</a></strong>.
    </div>
  `
};
