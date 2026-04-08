import { TopicSection } from '../../src/data/types';

export const unsupervisedLearningSection: TopicSection = {
  id: "unsupervised",
  title: "Unsupervised Learning",
  description: "Unsupervised Learning is a type of Machine Learning that looks for previously unknown patterns in a dataset without pre-existing labels.",
  color: "#FF9800",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Unsupervised</div>
      <h1>Unsupervised Learning: The Pattern Finder</h1>
      <p><strong>Unsupervised Learning</strong> is the machine equivalent of learning by observation. There are no "Teachers" and no "Answers." The machine looks for the <strong>Underlying Structure</strong> of the data. It's about finding out how things are related before we even know what they are.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Concepts: Structure over Labels</a>
      <a href="#clustering">Clustering: Finding Groups</a>
      <a href="#dimensionality-reduction">Dimensionality Reduction: Simplifying Space</a>
      <a href="#analogy">The "Blind Archeologist" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Concepts: Structure over Labels</h2>
    <p>In Unsupervised Learning, the input is just \(X\). There is no \(Y\) to predict. The machine's objective is to model the <strong>Probability Density</strong> (\(P(X)\)) or the <strong>Geometric Topology</strong> of the data.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as a <strong>Secret Society</strong>. 
        You walk into a party where you don't know anyone. You don't have their name tags (Labels). But after 30 minutes, you see that some people are wearing suits and talking in the corner, while another group is laughing by the snacks. You've <strong>clustered</strong> them just by looking at their behavior.
      </div>
    </div>

    <h2 id="clustering">Clustering: Finding Groups</h2>
    <div class="example-box">
      <h4>Problem: Segmenting Customers</h4>
      <p>You have a database of 1 million Amazon customers and their shopping history. You want to send them targeted ads.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Goal:</strong> Use an algorithm like **K-Means** to group them by "Similarity."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Result:</strong> The machine might find a group that "Only buys gardening tools" and another that "Buys video games." You didn't tell it these groups existed; it found them.</div>
        </div>
      </div>
    </div>

    <h2 id="dimensionality-reduction">Dimensionality Reduction: Simplifying Space</h2>
    <div class="example-box">
      <h4>Problem: Visualizing 100-D Data</h4>
      <p>You have 100 features for each person. You can't see in 100 dimensions. How do you find the "Big Picture"?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Goal:</strong> Use **PCA (Principal Component Analysis)** to compress the data into 2 or 3 dimensions while keeping the most important information.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Analogy:</strong> Taking a 3D shadow of a 100D object. You lose some detail, but the main "Shape" of the data becomes visible.</div>
        </div>
      </div>
    </div>

    <h2 id="analogy">The "Blind Archeologist" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Blind Archeologist</strong> feeling artifacts in the dark. 
        They don't know what a "Vase" or a "Sword" is yet. But as they feel the smooth, round surfaces of one set of objects and the sharp, flat surfaces of another, they <strong>Group</strong> those objects together. They've found the <strong>Structure</strong> without needing a textbook.
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we have a little bit of help? Explore <strong><a href="#/machine-learning/foundation-ml/semi-supervised">Semi-Supervised Learning</a></strong>.
    </div>
  `
};
