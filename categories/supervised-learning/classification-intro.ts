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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>If Regression answers the question "How Much?", <strong>Classification</strong> answers the definitive "What is it?". Whether it’s distinguishing a malignant tumor from a benign one or identifying a fraudulent credit card transaction, Classification is the art of <strong>Drawing Boundaries</strong> in a chaotic world of data. We aren't just predicting a number; we are assigning a fundamental identity. It is the process of turning continuous, messy signals into discrete, actionable buckets. In Machine Learning, this is the first step toward building a machine that can actually "See" and "Categorize" the universe just like a human brain does.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Classification</div>
      <p>Classification is the task of approximating a mapping function $f: \mathbf{x} \to y$ where $y \in \{1, 2, \dots, K\}$ is a discrete set of classes. Formally, for $K$ classes, the objective is to model the conditional probability distribution:</p>
      <div class="math-block">
        $$P(y = c \mid \mathbf{x}; \theta) = \frac{ \text{exp}(f_c(\mathbf{x}; \theta)) }{ \sum_{j=1}^K \text{exp}(f_j(\mathbf{x}; \theta)) }$$
      </div>
      <p>The model parameters $\theta$ are typically optimized by minimizing the **Cross-Entropy Loss**, which measures the divergence between the true and predicted distributions:</p>
      <div class="math-block">
        $$\mathcal{L}(\theta) = -\sum_{i=1}^n \sum_{c=1}^K y_{ic} \log(\hat{y}_{ic})$$
      </div>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Classification as the <strong>"Sorting Hat"</strong> or the <strong>"Ultimate Apple Sorter."</strong> 
        Imagine a conveyor belt of fruit. You check the weight, the color, and the texture. You have to decide: is this a Fuji or a Granny Smith? There is no "in-between" score. You must commit to <strong>one bucket</strong>. 
        The machine finds the <strong>Decision Boundary</strong>—the invisible fence in space that separates the Apples from the Oranges. If a new fruit lands on the left side of the fence, the model bets its life that it's an Apple. 
        It's about <strong>Commitment</strong>: turning mathematical uncertainty into a hard, "Yes" or "No" verdict.
      </div>
    </div>

    <h2 id="binary">Binary vs. Multi-class</h2>
    
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
    

    <h2 id="analogy">The "Sorting Hat" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine the <strong>Sorting Hat from Harry Potter</strong>. 
        It has a <strong>Decision Boundary</strong> for each House (Gryffindor, Slytherin, etc.). 
        It "Reads" your features (Brave, Ambitious, Loyal). It doesn't say you are "40% Gryffindor." It says "You belong in <strong>Gryffindor!</strong>" 
        <strong>Classification</strong> is that hat. The "Learning" was the hat looking at 1,000 years of students to find the <strong>Patterns of Personality</strong> that define each house.
      </div>
    </div>

    <h2 id="algorithm">The Classification Algorithm</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Email Sorting Hat</h2>
    
      <h4>Scenario: Is this Email Spam or Real?</h4>
      <p>Imagine your inbox is a set of two buckets. Every email must fall into exactly one.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Feature extraction:</strong> The hat reads the email: "Keywords = 50, Sender Score = -10."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Calculation:</strong> It doesn't just guess 'Spam'. It calculates: <strong>95% chance of Spam</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Threshold:</strong> Since 95% is higher than our safety fence (usually 50%), the choice is made.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Outcome:</strong> The email is tossed into the <strong>Spam Bucket</strong> before it can reach your eyes.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Classification is often just <strong>Regression on Probabilities</strong>. We calculate a score from 0 to 1, and the "Social Contract" of the model is that anything above 0.5 belongs to Class A.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
from sklearn.linear_model import LogisticRegression
import numpy as np

# 1. Dataset: [Num_Keywords, Reputation]
X = np.array([[20, 1], [2, 9], [35, 2], [1, 10]])
y = np.array([1, 0, 1, 0]) # 1 = Spam, 0 = Real

# 2. Train the 'Sorting Hat'
model = LogisticRegression()
model.fit(X, y)

# 3. Predict for a new email
new_mail = np.array([[5, 8]])
probs = model.predict_proba(new_mail)[0]
prediction = model.predict(new_mail)[0]

print(f"Probabilities: {probs}")
print(f"Final Class: {'Spam' if prediction == 1 else 'Real'}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Classification is the art of "Drawing Boundaries." If regression answers "How Much?", classification answers "What is it?"—turning messy signals into hard, actionable buckets.</p>
    <ul>
      <li><strong>Medical Diagnosis</strong>: In hospitals, we use classification to determine if a patient has a specific disease based on their symptoms and scans. It's not about a continuous score; it's a "Yes" or "No" decision that determines the next life-saving step.</li>
      <li><strong>Content Moderation</strong>: Platforms like YouTube or Instagram use classification to auto-detect "Violative Content." The model draws a boundary between acceptable speech and harmful content, ensuring millions of posts are sorted in milliseconds without a human needing to see every single one.</li>
    </ul>
    <p>Teacher's Final Word: Classification is how we build machines that can actually "See" and "Categorize" the universe. It is the first step toward creating an AI that understands the fundamental identity of the things it encounters.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What's the most common tool for building this "Fence"? Explore <strong><a href="#/machine-learning/supervised-learning/logistic-regression">Logistic Regression</a></strong>.
    </div>
  `
};


