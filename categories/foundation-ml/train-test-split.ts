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

    <h2 id="example">Illustrated Example: The Secret Sommelier</h2>
    <div class="example-box">
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
          <strong>Teacher's Hint:</strong> Training data is your <strong>Practice</strong>. Testing data is the <strong>Real World</strong>. If you skip the split, you're just lying to yourself about how good your model is. You must always maintain a "Firewall" between what the model sees to learn and what it sees to be judged.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Partitioning the World</h2>
    <python-code static-output="[Scan] Dataset contains 1,000 samples and 10 features.\n[Action] Splitting data into 80/20 partitions...\n[Status] Training Set size: 800 samples\n[Status] Test Set size: 200 samples\n\n[Warning] The 200 Test samples are strictly HIDDEN from the training process.">
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

    <div class="linking-rule">
      <strong>Next Step:</strong> What happens when the model memorizes too much? Explore <strong><a href="#/machine-learning/foundation-ml/overfitting-underfitting">Overfitting and Underfitting</a></strong>.
    </div>
  `
};
