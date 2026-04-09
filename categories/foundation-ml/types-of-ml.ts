import { TopicSection } from '../../src/data/types';

export const typesOfMLSection: TopicSection = {
  id: "types-of-ml",
  title: "Types of Machine Learning",
  description: "Machine Learning is categorized into different types based on the presence of labels and the nature of the learning feedback Loop.",
  color: "#4A90E2",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Paradigms</div>
      <h1>The Learning Paradigms</h1>
      <p>Not all learning is equal. How a machine learns depends entirely on the <strong>Feedback</strong> it receives. Do we have the correct answers labeled? Do we have no answers at all? Or do we reward the machine for good behavior? These categories define the "Flavors" of ML.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>How does intelligence actually grow? In the natural world, we learn in three distinct ways: by being taught, by observing patterns on our own, or by trial and error. Machine Learning mirrors these biological strategies. If we provide the machine with a "Teacher" (labeled data), it learns to map inputs to outputs. If we let it "Explore" (unlabeled data), it finds hidden structures we might have missed. And if we treat it like a "Player" in a game (rewards and penalties), it develops a strategy for survival. Choosing the right learning paradigm is the first and most critical decision in building any AI system—it defines the <strong>Feedback Loop</strong> that will shape the model's brain.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Four Supervisory Signals</div>
      <p>Machine learning is categorized by the nature of the training signal and the operational goal of the system. The paradigms are defined by their mapping objectives and data requirements:</p>
      
      <div class="space-y-4">
        <div>
          <h4 class="text-sm font-bold text-green-premium">1. Supervised (Predictive)</h4>
          <p class="text-xs mb-1">Learning a mapping $f: \mathcal{X} \to \mathcal{Y}$ from labeled examples to minimize expected risk. Primarily used for classification and regression.</p>
        </div>

        <div>
          <h4 class="text-sm font-bold text-green-premium">2. Unsupervised (Descriptive)</h4>
          <p class="text-xs mb-1">Discovering latent structure, density $P(\mathbf{x})$, or dimensionality reduction from context-free data. Primarily used for clustering and anomaly detection.</p>
        </div>

        <div>
          <h4 class="text-sm font-bold text-green-premium">3. Reinforcement (Prescriptive)</h4>
          <p class="text-xs mb-1">Optimizing a policy $\pi(a \mid s)$ to maximize cumulative discounted rewards in a dynamic environment (MDP). Primarily used for robotics and gaming.</p>
        </div>
      </div>

      <p class="text-xs opacity-80 mt-2">Hybrid paradigms like **Semi-Supervised Learning** utilize a mix of these signals to improve efficiency when labels are scarce but raw data is abundant. The choice of paradigm determines the mathematical complexity and the reliability of the resulting intelligence.</p>
    </div>
    
    <h2 id="supervised">Supervised Learning: The Teacher</h2>
    <p>A <strong>Supervised</strong> model is trained on "Labeled Data." Every input <span class="text-green-premium font-bold">Case Study:</span> comes with a corresponding target answer. The model learns to map inputs to outputs by correcting its mistakes.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of it as a <strong>Classroom Teacher</strong>. 
        You give the student a practice test with the answers on the back. The student tries to guess, flips the page, sees they're wrong, and adjusts their brain. Eventually, they learn enough to take the <strong>Final Exam</strong> (New Data) where the answers aren't provided.
      </div>
    </div>

    <h2 id="unsupervised">Unsupervised Learning: The Explorer</h2>
    <p>In <strong>Unsupervised</strong> learning, the data has no labels. The machine's job is to find <strong>Hidden Structure</strong> or patterns in the "Uncooked" data. It doesn't know what it's looking for; it just looks for things that are similar.</p>
    
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are an <strong>Alien looking at Earth's clouds</strong>. 
        No one tells you what "Cumulus" or "Stratus" means. But after looking at 1,000 clouds, you notice that "Flat gray ones" usually appear together and "Fluffy white ones" appear together. You've <strong>Clustered</strong> them into groups without knowing their names.
      </div>
    </div>

    <h2 id="semi-supervised">Semi-Supervised Learning: The Hybrid</h2>
    <p>In the real world, labels are expensive (humans have to write them). <strong>Semi-supervised</strong> learning uses a tiny amount of labeled data to "Guide" the grouping of a massive amount of unlabeled data.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        It's like having a <strong>Few Labeled Flashcards</strong>. 
        You have 10,000 photos. You (the human) label 100 as "Dogs" and 100 as "Cats." The machine takes that small "Seed of Knowledge" and applies it to the other 9,800 photos by finding things that look like your seeds.
      </div>
    </div>

    <h2 id="reinforcement">Reinforcement Learning: The Dog Trainer</h2>
    <p>This is learning through <strong>Trial and Error</strong>. The machine (the Agent) interacts with an environment and receives <strong>Rewards</strong> or <strong>Penalties</strong>. It learns to maximize its long-term reward.</p>
    
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Think of it as <strong>Dog Training</strong>. 
        You don't tell the dog "How" to sit (no rules). You don't show the dog pictures of sitting dogs (no labels). 
        You just say "Sit." If the dog sits, it gets a treat (Reward). If it jumps, it gets nothing (No Reward). Eventually, the dog learns the "Policy" that leads to the most treats.
      </div>
    </div>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Library Sorting Game</h2>
    
      <h4>Scenario: Sorting 10,000 Unlabeled Books from a Room</h4>
      <p>Imagine you are dropped in a messy library with 10,000 books on the floor. No covers, no database. How do you organize them?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Supervised Way:</strong> You invite a Librarian. They show you 50 books and say "This is History, this is Sci-Fi." You learn the specific characteristics (Keywords, Dates) of those 50 and use that knowledge to sort the rest.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Unsupervised Way:</strong> No librarian exists. You just start grouping books that "Feel" the same—maybe by thickness, paper smell, or language. You don't know the genres, but you find 10 distinct <strong>Clusters</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Reinforcement Way:</strong> You just shove books onto random shelves. If you put a book in the "Wrong" pile, a buzzer goes off (Penalty). If you put it in the "Right" pile, you get a cookie (Reward). You learn by maximizing cookies over time.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Choose your paradigm based on your data availability. If you have labels, use <strong>Supervised</strong>. If you have raw data and need insight, use <strong>Unsupervised</strong>. If you have an environment and an objective (like a robot), use <strong>Reinforcement</strong>.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code static-output="[Supervised] Input [1, 1] belongs to Class 'A'.\n[Unsupervised] Clustering 4 points into 2 groups...\n[Unsupervised] Labels assigned: [0, 0, 1, 1]\n\n[Insight] Notice how Supervised predicted a NAME, while Unsupervised just found a GROUP.">
from sklearn.neighbors import KNeighborsClassifier
from sklearn.cluster import KMeans
import numpy as np

# --- 1. Supervised Learning (Learning from labels) ---
# Data: [Size, Color] | Labels: 0 (Fruit), 1 (Vegetable)
X_train = np.array([[1, 1], [1, 2], [10, 10], [10, 11]])
y_train = np.array([0, 0, 1, 1]) 

clf = KNeighborsClassifier(n_neighbors=1)
clf.fit(X_train, y_train)

# Predicting on a new point
test_point = [[1, 1.5]]
pred = clf.predict(test_point)
print(f"[Supervised] Input {test_point} predicted as { 'Fruit' if pred[0]==0 else 'Veg'}")

# --- 2. Unsupervised Learning (Finding structure) ---
# We have the same points, but NO y_train labels!
kmeans = KMeans(n_components=2, n_init=10)
kmeans.fit(X_train) 

print(f"[Unsupervised] Group markers for data points: {kmeans.labels_}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Let's deep-dive into the most popular paradigm. Explore <strong><a href="#/machine-learning/foundation-ml/supervised">Supervised Learning</a></strong>.
    </div>
  `
};

