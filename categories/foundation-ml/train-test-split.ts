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
      <p>The <strong>Golden Rule</strong> of Machine Learning is: <strong>Never test your model on the same data you used to train it.</strong> If you do, you aren't measuring "Learning"—you're measuring "Memory." We need to know how the model performs on data it has <strong>never seen before</strong>.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>The <strong>Golden Rule</strong> of Machine Learning is simple: never test your model on the same data you used to train it. If you do, you aren't measuring "Learning"—you're measuring "Memory." The whole point of AI is <strong>Generalization</strong>: the ability to take a learned principle and apply it to a situation the model has never encountered before. If a model performs perfectly on the training set but fails on the test set, it hasn't actually learned anything useful; it has just memorized the noise of its environment. To build something that works in the real world, you must maintain a strict "Firewall" between what the model sees to learn and what it sees to be judged.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Data Partitioning Protocol</div>
      <p>Data partitioning is the process of dividing a dataset $\mathcal{D}$ into mutually exclusive subsets to provide an unbiased estimate of the generalization error. The standard split involves three distinct roles:</p>
      
      <div class="space-y-4">
        <div>
          <h4 class="text-sm font-bold text-green-premium">1. Training Set ($D_{train}$)</h4>
          <p class="text-xs mb-1">Used to minimize the objective function and fit model parameters $\theta$:</p>
          <div class="math-block">
            $$\hat{\theta} = \arg \min_\theta \sum_{(x,y) \in D_{train}} L(y, f(x; \theta))$$
          </div>
        </div>

        <div>
          <h4 class="text-sm font-bold text-green-premium">2. Test Set ($D_{test}$)</h4>
          <p class="text-xs mb-1">The "Hold-out" set, strictly forbidden during training, used to calculate the final out-of-sample error:</p>
          <div class="math-block">
            $$\text{Error}_{\text{test}} = \frac{1}{|D_{test}|} \sum_{(x,y) \in D_{test}} L(y, f(x; \hat{\theta}))$$
          </div>
        </div>
      </div>

      <p class="text-xs opacity-80 mt-2">To prevent <strong>Data Leakage</strong>, any preprocessing (scaling, imputation) must be calculated on $D_{train}$ only and applied to $D_{test}$. If $|D_{test} \cap D_{train}| > 0$, the resulting performance metrics are invalid due to circular reasoning.</p>
    </div>
    
    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Secret Sommelier</h2>
    
      <h4>Scenario: Qualifying as a Master Wine Taster</h4>
      <p>Imagine you are training to be a <strong>Wine Master</strong>. You have a cellar with 100 bottles of wine. How do you prove you've actually learned to taste, rather than just memorized your cellar?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Training Set (80 Bottles):</strong> You spend 3 months tasting these. you learn every aroma, every label, and every cork. You are 100% accurate on these specific 80.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Hold-out Set (20 Bottles):</strong> Before you started, you took 20 random bottles and locked them in a <strong>Mystery Room</strong>. You haven't seen them, smelled them, or read their labels.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Moment of Truth (Testing):</strong> On exam day, you are given a glass from the <strong>Mystery Room</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Evaluation:</strong> If you can identify those 20 mystery wines, you have learned the <strong>General Concept</strong> of grapes and regions. If you fail, you've just memorized your home cellar.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Training data is your <strong>Practice</strong>. Testing data is the <strong>Real World</strong>. If you skip the split, you're just lying to yourself about how good your model is. You must always maintain a "Firewall" between what the model sees to learn and what it sees to be judged.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
from sklearn.model_selection import train_test_split
from sklearn.datasets import make_regression

# 1. Create a large dummy dataset
X, y = make_regression(n_samples=1000, n_features=10, random_state=42)

# 2. Perform the Split
# test_size=0.2 means 80% for training, 20% for testing
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 3. Verify the counts
print(f"Total Database: {X.shape[0]} samples")
print(f"Training Pool (Knowledge): {X_train.shape[0]} samples")
print(f"Testing Pool (Ground Truth): {X_test.shape[0]} samples")

print(f"\nExample Input Features from Test set:\n{X_test[0:1]}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Train-test splitting is the "Reality Check" of AI. It is the only way to prove that your model has actually learned a useful mapping instead of just cheating by memorizing the data.</p>
    <ul>
      <li><strong>Kaggle Competitions</strong>: In data science competitions, contestants are given a "Training Set" but the winner is decided by a hidden "Private Leaderboard" (the ultimate Test Set). This prevents people from winning by manually hardcoding answers for the data they can see, ensuring that only the models with the best <strong>Generalization</strong> rise to the top.</li>
      <li><strong>Safety-Critical Model Deployment</strong>: Before a medical AI is allowed to diagnose patients, it is tested on a massive "Holdback" dataset of thousands of cases it has never seen. This split acts as a legal and ethical "Firewall," proving that the model's accuracy is a result of real diagnostic intelligence rather than just recognizing familiar patterns from its training hospital.</li>
    </ul>
    <p>Teacher's Final Word: Trust, but verify—with data the model has never touched. Train-test splitting is the boundary between a scientific discovery and a lucky guess. If you skip the split, you're not an engineer; you're just a gambler who doesn't know the house always wins.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What happens when the model memorizes too much? Explore <strong><a href="#/machine-learning/foundation-ml/overfitting-underfitting">Overfitting and Underfitting</a></strong>.
    </div>
  `
};



