import { TopicSection } from '../../src/data/types';

export const logisticRegressionSection: TopicSection = {
  id: "logistic-regression",
  title: "Logistic Regression",
  description: "Logistic Regression is used for binary classification, predicting the probability of an input matching a specific outcome.",
  color: "#58a6ff",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Probability</div>
      <h1>Logistic Regression</h1>
      <p>Wait—if it's classification, why is it called <strong>"Regression"</strong>? Because we start by predicting a continuous number (the log-odds) and then <strong>"Squash"</strong> it into a probability between 0 and 1. It is the gold standard for <strong>Binary Decisions</strong>.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Linear Regression tries to fit a path through points, but what if the answer isn't a "number"? What if the answer is a <strong>Binary Choice</strong> (Yes/No, Spam/Ham, Healthy/Sick)? <strong>Logistic Regression</strong> is for exactly these moments. We start with a linear prediction, but then we "Squash" it through a mathematical filter—the <strong>Sigmoid</strong>. This forces the infinite range of numbers into a tight 0-to-1 probability window. It is the gold standard for decisions because it doesn't just give you an answer; it tells you exactly how <em>certain</em> it is about that choice.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Logistic Regression</div>
      <p>Logistic regression models the probability of a binary response variable using the **Logistic (Sigmoid) Function**. For a feature vector $\mathbf{x}$, the predicted probability $\hat{y}$ is:</p>
      <div class="math-block">
        $$\hat{y} = \sigma(\mathbf{w}^T \mathbf{x} + b) = \frac{1}{1 + e^{-(\mathbf{w}^T \mathbf{x} + b)}}$$
      </div>
      <p>The model parameters are optimized by minimizing the **Binary Cross-Entropy (Log Loss)** objective:</p>
      <div class="math-block">
        $$\mathcal{L}(\mathbf{w}, b) = -\frac{1}{n} \sum_{i=1}^n \left[ y_i \log(\hat{y}_i) + (1 - y_i) \log(1 - \hat{y}_i) \right]$$
      </div>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Logistic Regression as a <strong>"Commitment Curve"</strong> or a <strong>"Soft Switch."</strong> 
        A linear model is like a long, straight pipe, but a Sigmoid is like an **S-Curve** that decides the fate of the data. 
        As your input gets stronger, the model "Leans" harder toward 1.0; as it gets weaker, it "Commits" to 0.0. 
        The magic happens in the middle: the model stays honest about the uncertainty. 
        It's the foundation of all Neural Networks—a single "Neuron" in a massive AI like GPT is often just a sophisticated version of this same logistic switch.
      </div>
    </div>

    <h2 id="decision">The Decision Threshold</h2>
    
      <h4>Scenario: Email Filter</h4>
      <p>The model outputs <strong>0.85</strong> from the Sigmoid.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Threshold:</strong> Usually 0.5. Anything \(\ge 0.5\) is Spam. Anything \(< 0.5\) is Not Spam.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Logic:</strong> You can tune this! If you are a <strong>Doctor</strong>, you might set the threshold to 0.1 because you'd rather have a <strong>False Positive</strong> than a <strong>False Negative</strong>.</div>
        </div>
      </div>
    

    <h2 id="analogy">The "Water Filter" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are <strong>Filtering Water</strong>. 
        Raw data (Unfiltered water) is very messy. The Linear model (\(wx + b\)) is your <strong>Pipe</strong>—it moves the water. 
        The <strong>Sigmoid Function</strong> is the <strong>Filter Membrane</strong>. 
        It only lets the "Pure" results through. If the water has enough "Signal" to overcome the membrane's resistance, it comes out as <strong>Clean (1)</strong>. If not, it stays <strong>Dirty (0)</strong>. 
        The "Threshold" is you deciding <strong>how clean</strong> the water has to be before you drink it.
      </div>
    </div>

    <h2 id="algorithm">The Logistic Regression Algorithm</h2>
    
      <h4>Probability Mapping</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Linear Mapping:</strong> Calculate $z = w_1x_1 + w_2x_2 + \dots + w_nx_n + b$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Log-Odds Squashing:</strong> Pass $z$ through the Sigmoid function: $\hat{y} = \frac{1}{1 + e^{-z}}$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Error Measurement:</strong> Use Binary Cross-Entropy Loss to compare the predicted probability $\hat{y}$ with the true label $y$.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Gradient Update:</strong> Use Gradient Descent to adjust $w$ and $b$ until the loss is minimized.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Thresholding:</strong> Convert the final probability $\hat{y}$ into a label (e.g., if $\hat{y} > 0.5$, class = 1).
        </div>
      </div>
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Squeezed Tube of Truth</h2>
    
      <h4>Scenario: Predicting if a Gym Member will Churn</h4>
      <p>Imagine your linear prediction is a long, infinite pipe. You need to squash it into a 0-to-1 probability tube.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Linear Score (z):</strong> A member visits 0 times/week. The linear formula says: $z = 10 \times (Months) - 50 \times (Visits) = 5.0$.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Sigmoid Squash:</strong> We pass 5.0 through the S-curve. It comes out as <strong>0.993</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Decision:</strong> Since 0.993 > 0.5, we are extremely confident this person is about to cancel.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Outcome:</strong> You send them a "Free Shake" coupon to keep them! Logistic regression just saved a customer.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Logistic Regression is the <strong>Basis of Neural Networks</strong>. A single neuron in a brain-like model is often just a logistic regression unit! It's the simplest "Switch" in AI.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np
from sklearn.linear_model import LogisticRegression

# 1. Dataset: [Visits_Per_Week, Membership_Months]
X = np.array([[5, 12], [0, 24], [4, 6], [1, 2]])
y = np.array([0, 1, 0, 1]) # 1 = Left (Churned), 0 = Stayed

# 2. Train the Model
model = LogisticRegression()
model.fit(X, y)

# 3. New Customer (Visits 1 time/week, Joined 12 months ago)
new_customer = np.array([[1, 12]])
prob = model.predict_proba(new_customer)[0]

print(f"Prob. of Staying: {prob[0]:.2%}")
print(f"Prob. of Churning: {prob[1]:.2%}")
print(f"Final Decision: {'Churn' if prob[1] > 0.5 else 'Stay'}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Logistic Regression is the "Commitment Curve." It starts with a linear score and then "Squashes" it into a tight probability window so you can make a definitive choice.</p>
    <ul>
      <li><strong>Credit Scoring</strong>: Banks use logistic regression to decide if you get a loan. They take your income and debt, pass it through the Sigmoid, and get a probability of default. If that probability is higher than their "Risk Fence," you are denied.</li>
      <li><strong>Ad Click Prediction</strong>: Every time you see an ad on Google, a logistic regression model has already calculated the probability that you will click it. This "Soft Switch" helps companies decide which ads are worth showing you in under 100 milliseconds.</li>
    </ul>
    <p>Teacher's Final Word: Logistic Regression is the gold standard for decisions because it doesn't just give you a "Yes" or "No"—it tells you exactly how certain it is about that choice. It's the simplest "Switch" in the world of AI.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we use Probability in a more "Natural" way? Explore <strong><a href="#/machine-learning/supervised-learning/naive-bayes">Naive Bayes Classification</a></strong>.
    </div>
  `
};


