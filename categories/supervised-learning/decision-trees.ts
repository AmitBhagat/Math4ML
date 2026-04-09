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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A <strong>Decision Tree</strong> is the most intuitive and human-like classification algorithm in the AI toolkit. It doesn't rely on complex math equations or geometric hyperplanes; instead, it uses the power of <strong>Logical Selection</strong>. It models decisions as a series of simple, branching questions. At each step, the tree looks for the one specific attribute that "Splits" the data into the purest possible piles. It is the ultimate implementation of the "Scientific Method" inside a machine—constantly testing hypotheses to reduce the chaos (Entropy) of the world into a single, understandable answer.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Decision Tree</div>
      <p>A decision tree represents a function $f: \mathcal{X} \to \mathcal{Y}$ that partitions the input space into $M$ disjoint regions $R_1, R_2, \dots, R_M$. The prediction is defined as:</p>
      <div class="math-block">
        $$\hat{f}(x) = \sum_{m=1}^M c_m I(x \in R_m)$$
      </div>
      <p>For classification, $c_m$ is the majority class in $R_m$. The regions are found by recursively minimizing the **Impurity Selection Criterion** (e.g., Gini):</p>
      <div class="math-block">
        $$G = \sum_{k=1}^K p_{mk}(1 - p_{mk})$$
      </div>
      <p class="text-xs opacity-70 mt-2">Where $p_{mk}$ is the proportion of class $k$ observations in node $m$.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a Decision Tree as a <strong>"Master of 20 Questions"</strong> or the <strong>"Flowchart of Wisdom."</strong> 
        Imagine you're trying to identify an animal. Instead of asking random questions, you ask the <strong>Smartest 1st Question</strong>: "Is it a Mammal?" By asking that one question, you've cut the entire world in half. 
        In ML, the tree seeks out the <strong>Information Gain</strong>—the specific question that reduces "Chaos" the most aggressively. 
        Whether it's "Is the salary > $100k?" or "Does the email contain 'Win'?", the tree is building a mental map that anyone can read. It is the "Transparent Box" of machine learning, allowing us to see exactly why a computer decided to say "Yes."
      </div>
    </div>

    <h2 id="entropy">The Chaos Metric: Entropy & Gini</h2>
    <p>How does the machine know which question is "Best"? It measures <strong>Order</strong>. Two main formulas are used:</p>
    <ul>
      <li><strong>Entropy (\(H\)):</strong> A measure of randomness or disorder level. If a pile is 50/50, \(H=1\) (Max Chaos). If it's 100% pure, \(H=0\) (Perfect Order).</li>
      <div class="math-block">$$H(D) = -\sum_{i} p_i \log_2(p_i)$$</div>
      <li><strong>Gini Impurity (\(G\)):</strong> A measure of how often a random point would be wrongly labeled. It is faster to calculate than Entropy.</li>
    </ul>

    <h2 id="gain">Information Gain: Reducing Disorder</h2>
    <p><strong>Information Gain (IG)</strong> is the "Value" of a question. It is the change in Entropy before and after the split. The algorithm tries to find the feature that provides the <strong>Max IG</strong> at every node.</p>

    <h2 id="overfitting">The Danger: Growing Too Deep</h2>
    
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

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Job Offer Flowchart</h2>
    
      <h4>Scenario: Should I Accept this Job?</h4>
      <p>Imagine your brain is a series of 'If-Then' switches. That is a Decision Tree.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Root Node:</strong> "Is the Salary > $100k?" (The most important question).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Split:</strong> If 'No', you reject immediately. If 'Yes', you ask the next most important question.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Leaf:</strong> "Is the Commute < 30 mins?" If 'Yes', you reach the final decision.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Outcome:</strong> <strong>ACCEPT</strong>. The tree has mapped a complex life choice into a simple, logical path.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Decision Trees are <strong>Greedy</strong>. They make the "Best" choice at every step without looking ahead. Sometimes this is short-sighted, which is why we combine hundreds of trees into a <strong>Random Forest</strong>.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code static-output="[Training] Growing a tree of depth 2...\n[Root] Top Split Feature: Salary > 100k\n[Importance] Salary: 1.0, Commute: 0.0 (Salary alone perfectly sorted this small dataset!)\n[Decision] For $120k salary: ACCEPT\n[Insight] The tree 'discovered' that salary was the only factor that mattered here.">
from sklearn.tree import DecisionTreeClassifier
import numpy as np

# 1. Dataset: [Salary > 100k (Binary), Commute < 30 (Binary)]
X = np.array([[1, 1], [1, 0], [0, 1], [0, 0]])
y = np.array([1, 1, 0, 0]) # 1=Accept, 0=Reject

# 2. Train the 'Flowchart Hat'
model = DecisionTreeClassifier(max_depth=2)
model.fit(X, y)

# 3. New Job ($120k salary, 45 min commute) -> [1, 0]
new_job = np.array([[1, 0]])
prediction = model.predict(new_job)[0]

print(f"Decision: {'Accept' if prediction == 1 else 'Reject'}")
print(f"Feature Importances: {model.feature_importances_}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>A Decision Tree is the "Master of 20 Questions." It is the most intuitive and human-like algorithm, offering perfect transparency for every choice it makes.</p>
    <ul>
      <li><strong>Loan Approval Systems</strong>: Banks use decision trees to automate lending because every step is auditable. The model can output exactly why a loan was rejected (e.g., "Salary was high, but Credit Score was too low"), making it easy to explain to customers.</li>
      <li><strong>Medical Triage</strong>: In emergency rooms, decision trees help nurses quickly sort patients. By asking a series of hard "If-Then" questions (e.g., "Is there chest pain?", "Is the heart rate above 100?"), the model provides a reliable, repeatable path to a diagnosis.</li>
    </ul>
    <p>Teacher's Final Word: Decision Trees are the "Transparent Box" of machine learning. They allow us to see exactly how a computer arrived at its conclusion, turning a mathematical prediction into a logical conversation.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we use a whole "Grave of Trees"? Explore <strong><a href="#/machine-learning/supervised-learning/random-forest">Random Forest Classification</a></strong>.
    </div>
  `
};
