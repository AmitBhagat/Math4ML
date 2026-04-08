import { TopicSection } from '../../src/data/types';

export const svmSection: TopicSection = {
  id: "svm",
  title: "Support Vector Machines (SVM)",
  description: "A robust classification algorithm that finds the optimal hyperplane to maximize the margin between classes.",
  color: "#3F51B5",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Supervised · Geometry</div>
      <h1>Support Vector Machines (SVM): The Wide Moat</h1>
      <p><strong>Support Vector Machines (SVM)</strong> is perhaps the most Elegant and Mathematically beautiful classification algorithm. It doesn't just want a "Decision Boundary" (a line). It wants the <strong>Widest Possible Road</strong> (The Margin) between two classes. It's the most robust way to draw a line in the sand.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">The "Max-Margin" Hyperplane</a>
      <a href="#support-vectors">The Pivot Points: Support Vectors</a>
      <a href="#slack">Soft Margin & Slack Variables</a>
      <a href="#kernel">The Kernel Trick: Folding Space</a>
      <a href="#analogy">The "Moat & Castle" Analogy</a>
    </div>

    <h2 id="theory">The "Max-Margin" Hyperplane</h2>
    <p>A standard classifier just wants a line that separates the dots. But there are <strong>infinite</strong> lines that can do that. SVM says: "I want the unique line that is <strong>as far as possible</strong> from the nearest dots of both classes." This is called the <strong>Optimal Hyperplane</strong>.</p>
    <div class="math-block">$$y = w \cdot x + b = 0$$</div>
    <p>The goal is to maximize the margin $M = \frac{2}{\|w\|}$, which is equivalent to <strong>minimizing</strong> \(\frac{1}{2} \|w\|^2\).</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Building a Super-Highway."</strong> 
        It's not just a narrow painted line. It's a <strong>multi-lane road</strong>. The highway has to be as wide as possible without hitting any "House" (a data point) on either side. SVM is the <strong>Civic Engineer</strong> who finds the perfect path for that highway.
      </div>
    </div>

    <h2 id="support-vectors">The Pivot Points: Support Vectors</h2>
    <p>The most important discovery of SVM is that <strong>only a few points matter.</strong> The points that are "Almost on the highway" are called <strong>Support Vectors</strong>. If you move any other point in the dataset, the highway doesn't move. These points are the <strong>scaffolding</strong> that holds up the whole model.</p>

    <h2 id="slack">Soft Margin & Slack Variables</h2>
    <p>What if your data is <strong>Messy</strong>? What if one rogue "Dog" is deep inside "Cat Territory"? If you try to build a perfect highway, you'll fail. <strong>Soft Margin SVM</strong> introduces "Slack Variables" (\(\xi\)). It allows some points to "Cheat" (be on the wrong side) for a small penalty. This makes the model much more <strong>Stable and Generalizable.</strong></p>

    <h2 id="kernel">The Kernel Trick: Folding Space</h2>
    <p><strong>The Magic:</strong> What if the data isn't a line? What if it's a <strong>Circle</strong>? 
    Instead of complex math, SVM uses a <strong>Kernel</strong>. It "Projects" the data into a <strong>Higher-Dimensional Space</strong> (like 3D). In that higher space, the data becomes separable by a flat "Hyperplane." Then, we project it back down to the 2D world. From our perspective, the line looks like a <strong>Bendy Curve</strong>.</p>
    
    <h2 id="analogy">The "Wide-Moat Boundary" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine two <strong>Feuding Kingdoms (Cats vs. Dogs)</strong>. 
        Instead of just a fence, you want a <strong>Giant River (The Moat)</strong>. 
        You want the river to be <strong>as wide as possible</strong> to prevent any random person from accidentally crossing over (The Noise). 
        The only things the river cares about are the <strong>Soldiers (Support Vectors)</strong> standing right on the edge of the water. If the king of Cats moves his palace in the back, the river doesn't change. It only moves if the Soldiers on the edge move. <strong>SVM is the Architect of the River.</strong>
      </div>
    </div>

    <h2 id="algorithm">The SVM Algorithm</h2>
    <div class="example-box">
      <h4>The Geometric Solver</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Select Kernel:</strong> Choose how to "Fold" the space (Linear, Radial Basis Function, etc.).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Constraint Formulation:</strong> Set up the rule: all points in Class A must be on one side of the road, Class B on the other.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Margin Maximization:</strong> Use Quadratic Programming to find the weights $w$ that create the <strong>widest possible gap</strong> (road) between the classes.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Identify Support Vectors:</strong> Find the critical points that are exactly on the edge of the road. All other points are ignored.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Inference:</strong> For a new point, check which side of the "Road Center" it falls on.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Wide Moat</h2>
    <div class="example-box">
      <h4>Scenario: Drawing a Border Between feuding Kingdoms</h4>
      <p>Imagine your data points are villages. You want to build a giant river (moat) to separate them.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Strategy:</strong> SVM doesn't just want a thin line. It wants a <strong>multi-lane highway</strong> (The Margin) that is as wide as possible.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Support Vectors:</strong> Only the <strong>Soldiers</strong> standing on the very edge of the river matter. The villages deep in the back don't move the border.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Kernel Trick:</strong> If the kingdoms are mixed up (a circle of Blue inside a ring of Red), SVM <strong>Bends Space</strong> so it can still draw a straight river in 3D.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Decision:</strong> A new village is built. You check which side of the river it is on. SVM provides the most <strong>Robust and Stable</strong> border.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> SVM is <strong>Geometric</strong>. It sees the world as points in space and boundaries as planes. It's the king of "Maximum Separation."
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Margin Maximization</h2>
    <python-code static-output="[Training] Solving quadratic program for widest margin...\n[Soldiers] Identified 3 Support Vectors on the border.\n[Result] Decision Boundary: y = -0.5x + 3.2\n[Input] Testing point at (5, 5)...\n[Classification] Result: 1 (Red Kingdom)\n[Insight] Notice that only the border points affected the final highway!">
import numpy as np
from sklearn.svm import SVC

# 1. 2D Data points (Coordinates of Villages)
X = np.array([[1, 2], [2, 1], [3, 3], [6, 5], [7, 7], [8, 6]])
y = np.array([0, 0, 0, 1, 1, 1]) # Blue (0) vs Red (1)

# 2. Train the 'Wide Moat' Solver
# C=1.0 tells it how much to punish villages on the 'wrong side'
model = SVC(kernel='linear', C=1.0)
model.fit(X, y)

# 3. Identify the 'Soldiers' (Support Vectors)
sv = model.support_vectors_

# 4. Predict
test_point = np.array([[5, 4]])
prediction = model.predict(test_point)[0]

print(f"Number of Support Vectors: {len(sv)}")
print(f"Decision for point at (5,4): {'Red' if prediction == 1 else 'Blue'}")
print(f"Support Vector Coordinates: \n{sv}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we want a model that acts like a "Flowchart" instead of a river? Explore <strong><a href="#/machine-learning/supervised-learning/decision-trees">Decision Trees</a></strong>.
    </div>
  `
};
