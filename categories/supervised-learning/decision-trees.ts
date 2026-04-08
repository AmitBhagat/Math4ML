import { TopicSection } from '../../src/data/types';

export const decisionTreesSection: TopicSection = {
  id: "decision-trees",
  title: "Decision Trees",
  description: "A non-parametric classification and regression algorithm that builds a tree-like structure based on a series of feature-based splits.",
  color: "#4CAF50",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Logic</div>
      <h1>Decision Trees: The Flowchart</h1>
      <p>A <strong>Decision Tree</strong> is the most intuitive and human-like classification algorithm. It doesn't use math like lines or moats. It just asks a <strong>series of questions</strong>. If you want a model that can explain <strong>Exactly Why</strong> an email was marked as Spam, it's the 1st choice.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The "Best Split"</a>
      <a href="#entropy">The Chaos Metric: Entropy & Gini</a>
      <a href="#gain">Information Gain: Reducing Disorder</a>
      <a href="#overfitting">The Danger: Growing Too Deep</a>
      <a href="#analogy">The "20 Questions Game" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The "Best Split"</h2>
    <p>A Decision Tree works by <strong>Partitioning</strong> the feature space into buckets. At each step (Node), it picks the feature that "Splits" the data into the <strong>Purest Possible Piles</strong>. The more pure the piles, the easier it is to make a final decision.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Sorting Laundry."</strong> 
        You have a huge pile of white socks and black shirts. 
        Your 1st question: "Is it a sock or a shirt?" 
        If you get this right, you've solved 90% of the problem. That's a <strong>Deep Information Gain</strong> because your piles are now mostly "Pure."
      </div>
    </div>

    <h2 id="entropy">The Chaos Metric: Entropy & Gini</h2>
    <p>How does the machine know which question is "Best"? It measures **Order**. Two main formulas are used:</p>
    <ul>
      <li><strong>Entropy (\(H\)):</strong> A measure of randomness or disorder level. If a pile is 50/50, \(H=1\) (Max Chaos). If it's 100% pure, \(H=0\) (Perfect Order).</li>
      <div class="math-block">$$H(D) = -\sum_{i} p_i \log_2(p_i)$$</div>
      <li><strong>Gini Impurity (\(G\)):</strong> A measure of how often a random point would be wrongly labeled. It is faster to calculate than Entropy.</li>
    </ul>

    <h2 id="gain">Information Gain: Reducing Disorder</h2>
    <p><strong>Information Gain (IG)</strong> is the "Value" of a question. It is the change in Entropy before and after the split. The algorithm tries to find the feature that provides the <strong>Max IG</strong> at every node.</p>

    <h2 id="overfitting">The Danger: Growing Too Deep</h2>
    <div class="example-box">
      <h4>What happens when a tree is too tall?</h4>
      <p>If you don't stop a tree from growing, it will keep asking questions until every single data point is in its own "Leaf."</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Problem:</strong> The tree has <strong>Memorized the Noise</strong>. It has a leaf for "Customer #123 who lived in TX and wore red shoes." This doesn't help with new data!</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Fix:</strong> <strong>Pruning</strong> (cutting back branches) and <strong>Max-Depth</strong> (limiting the number of questions).</div>
        </div>
      </div>
    </div>

    <h2 id="analogy">The "20 Questions Game" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you're playing <strong>"20 Questions"</strong> with a friend who is thinking of an animal. 
        Instead of asking random questions, you ask the <strong>Smartest 1st Question</strong>: "Is it a Mammal?" 
        By asking that one question, you've <strong>Cut the World in Half</strong>. 
        The machine does the same. It's built to be the <strong>Worlds Best Questioner</strong>, reducing the universe to an answer with as few steps as possible.
      </div>
    </div>

    <h2 id="algorithm">The Decision Tree Algorithm</h2>
    <div class="example-box">
      <h4>The Flowchart Logic</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Select Feature:</strong> Calculate the Information Gain (Entropy reduction) for all features.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Branching:</strong> Split the data based on the feature that provides the <strong>Maximum Order</strong> (Purest subsets).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Recursion:</strong> Repeat the process for each "Child Node" using the remaining features.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Stopping:</strong> Stop growing if a node is pure, the 'max_depth' is reached, or the improvement is too small.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Leaf Assignment:</strong> Each final node (leaf) represents the majority class of the data that landed there.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Job Offer Flowchart</h2>
    <p>Imagine you just received a <strong>Job Offer</strong> and need to decide whether to accept it. You use a mental Decision Tree:</p>
    <ul>
      <li><strong>Node 1:</strong> Is the Salary > $100k? 
        <ul>
          <li><strong>Yes:</strong> Go to Node 2.</li>
          <li><strong>No:</strong> REJECT.</li>
        </ul>
      </li>
      <li><strong>Node 2:</strong> Is the Commute < 30 minutes?
        <ul>
          <li><strong>Yes:</strong> ACCEPT.</li>
          <li><strong>No:</strong> Go to Node 3.</li>
        </ul>
      </li>
      <li><strong>Node 3:</strong> Does it offer free coffee? ... and so on.</li>
    </ul>

    <python-code>
from sklearn.tree import DecisionTreeClassifier
import numpy as np

# 1. Features: [Salary > 100k (1/0), Commute < 30 (1/0)]
X = np.array([[1, 1], [1, 0], [0, 1], [0, 0]])
y = np.array([1, 1, 0, 0]) # 1=Accept, 0=Reject

# 2. Train the 'Flowchart Hat'
model = DecisionTreeClassifier(max_depth=2)
model.fit(X, y)

# 3. Predict for a job: 90k salary, 15 min commute [0, 1]
new_job = np.array([[0, 1]])
result = "Accept" if model.predict(new_job)[0] == 1 else "Reject"
print(f"Decision: {result}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we use a whole "Grave of Trees"? Explore <strong><a href="#/machine-learning/supervised-learning/random-forest">Random Forest Classification</a></strong>.
    </div>
  `
};
