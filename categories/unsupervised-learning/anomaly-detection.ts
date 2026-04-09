import { TopicSection } from '../../src/data/types';

export const anomalyDetectionSection: TopicSection = {
  id: "anomaly-detection",
  title: "Anomaly Detection",
  description: "Identifying outliers and strange patterns that deviate from the expected 'normal' behavior.",
  color: "#ff7b72",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🕵️ Unsupervised · Outliers</div>
      <h1>Anomaly Detection: The Fraud Detective</h1>
      <p>In a world of trillions of transactions, how do you find the one <strong>stolen credit card</strong>? How do you spot a <strong>failing engine</strong> before it explodes? Anomaly Detection is the art of defining "Normal" so clearly that anything "Strange" stands out like a flare in the dark.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Anomaly Detection is the "Needle in the Haystack" problem. Unlike Clustering—where we find groups of similar points—Anomaly Detection focuses on the <strong>Loner</strong>. In high-dimensional data, "Normal" is a dense, predictable crowd. An "Anomaly" is a point that wanders off into the lonely, empty regions of the feature space. It's not just "different"; it's <strong>Mathematically Isotropic</strong>—it doesn't belong to any distribution. Whether it's a hacker's unique signature or a sensor glitch, these points tell us that something in our system has <strong>Broken the Rules</strong>.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Probabilistic Density & The Low-Variance Void</div>
      <p>Anomaly Detection is "Mathematical Ostracism." It is the process of identifying points that are so statistically unlikely they must be treated as errors or threats.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine your data points as a dense, glowing "Continent" in a dark, high-dimensional space. Most points live in the crowded interior, surrounded by thousands of neighbors. <strong>Anomaly Detection</strong> is the search for the "Loners"—the dim points flickering far out in the void. Geometrically, we are looking for observations that fall into regions where the <strong>Probability Density</strong> is near zero. These points don't just deviate from the mean; they exist outside the manifolds that Define the "Normal" world.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>One of the most robust ways to model this is through <strong>Gaussian Density Estimation</strong>. We assume each feature $x_j$ follows a normal distribution $\mathcal{N}(\mu_j, \sigma_j^2)$. The joint probability of a data point $\mathbf{x}$ is calculated as the product of these individual feature densities:</p>
      <div class="math-block">
        $$p(\mathbf{x}) = \prod_{j=1}^d \frac{1}{\sqrt{2\pi}\sigma_j} \exp\left(-\frac{(x_j - \mu_j)^2}{2\sigma_j^2}\right)$$
      </div>
      <p>We then define an anomaly as any point whose total probability density falls below a critical sensitivity threshold $\epsilon$:</p>
      <div class="math-block">
        $$\text{Prediction} = \begin{cases} 1 (\text{Anomaly}) & \text{if } p(\mathbf{x}) < \epsilon \\ 0 (\text{Normal}) & \text{if } p(\mathbf{x}) \ge \epsilon \end{cases}$$
      </div>
      <p>For complex data, we use <strong>Isolation Forests</strong>, which measure "Path Length" $h(\mathbf{x})$ in a tree—anomalies are isolated faster (shorter paths) because they require fewer logical "cuts" to be separated from the rest of the data.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, Anomaly Detection is the <strong>Immune System</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Choosing $\epsilon$</strong>: This is the dial for your "Paranoia." Set it too low, and you'll miss the subtle hackers. Set it too high, and you'll flag your best customers as fraudsters because they bought a nice gift.</li>
        <li><strong>Feature Independence</strong>: Basic density estimation assumes features aren't correlated. If they are (e.g., "Amount" and "Category"), you must use a <strong>Multivariate Gaussian</strong> to account for the covariance between them.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Anomaly detection is notoriously difficult to evaluate because you usually don't have "labels" for the bad guys. You are often flying blind, relying purely on the math of "Strangeness."</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Anomaly Detection as <strong>"The Airport Security Scanner"</strong> or <strong>"The Immune System."</strong> 
        Your body knows exactly what "Self" looks like. When a virus (Anomaly) enters, it doesn't need to know the name of the virus; it just needs to know: <strong>"This is NOT Self."</strong> 
        Similarly, an Anomaly Detector learns the <strong>Manifold of Normalcy</strong>. It's like drawing a tight fence around a sheep herd. If a wolf appears, it's not because the wolf is blue or big; it's because the wolf is <strong>Outside the Fence</strong>.
      </div>
    </div>

    <h2 id="isolation-forest">Isolation Forest: The "Tree of Loneliness"</h2>
    <p>One of the most powerful ways to find anomalies is to try to <strong>Isolate</strong> them. If a point is normal, it lives in a crowd. You'd have to draw many lines to separate it from its neighbors. But if a point is an anomaly, it's alone. It only takes a few random slices to cut it off from the rest of the world.</p>
    
    <div class="premium-def-box">
      <div class="premium-def-title">Isolation Depth Multiplier</div>
      <p>The shorter the path length from the root of a random tree to a point, the more likely that point is an anomaly.</p>
      <div class="math-block">$$s(x, n) = 2^{-\frac{E(h(x))}{c(n)}}$$</div>
      <p class="mt-2">Where $E(h(x))$ is the average path length and $c(n)$ is the average path length of unsuccessful search in BST.</p>
    </div>

    <h2 id="one-class-svm">One-Class SVM: The Frontier</h2>
    <p>Instead of finding two classes (Apples vs. Oranges), the <strong>One-Class SVM</strong> learns the boundary of a single class (Apples). It tries to find the smallest possible "bubble" that contains the data. Anything falling outside that bubble is rejected as an anomaly.</p>

    <h2 id="gotchas">The "Masking" Gotcha</h2>
    <p><strong>The Headache:</strong> If anomalies come in <strong>groups</strong>, they can "mask" each other. The algorithm might think a group of 5 hackers is just a "new normal" cluster. Dealing with <strong>Clustered Anomalies</strong> is one of the biggest challenges in the field.</p>

    <h2 id="analogy">The "Blind Folded Slicing" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a room full of people. Most are standing in a tight circle in the center. One person is standing in the far corner. 
        Now, imagine you start drawing <strong>Random Lines</strong> across the floor. 
        How many lines does it take to <strong>Isolate</strong> the person in the corner? Maybe just one or two. 
        How many for someone in the middle of the crowd? You'd have to draw dozens to snip them out uniquely. 
        <strong>Isolation Forest</strong> uses this "Ease of Isolation" to score how strange a point is.
      </div>
    </div>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Bank Fraud Watchdogs</h2>
    
      <h4>Scenario: Spotting a Stolen Credit Card</h4>
      <p>A user typically spends $20 at Starbucks, $50 at the grocery store, and $100 on gas. Suddenly, there is a transaction for <strong>$5,000 at a Jewelry Store in Paris</strong>.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Normal Manifold:</strong> The model has "fenced in" the user's spending habits (Small amounts, local zip codes, specific categories).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Collision:</strong> The $5,000 transaction hits the model. In the High-Dimensional space of (Location, Amount, Time), this point is light-years away from the "Sheep Herd."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Score:</strong> The Isolation Forest cuts this point off in just 3 random splits. It triggers a "High Anomaly Score" ($> 0.8$).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Action:</strong> The transaction is blocked instantly. The "Normal" was preserved, and the "Strange" was isolated.</div>
        </div>
      </div>

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np
from sklearn.ensemble import IsolationForest

# 1. Generate 'Normal' Data (Cluster around center)
rng = np.random.RandomState(42)
X_normal = 0.3 * rng.randn(100, 2)
X_train = np.r_[X_normal + 2, X_normal - 2]

# 2. Generate 'Anomalous' Data (Outliers)
X_outliers = rng.uniform(low=-4, high=4, size=(5, 2))

# 3. The 'Fraud Detective' (Isolation Forest)
clf = IsolationForest(max_samples=100, random_state=rng, contamination=0.1)
clf.fit(X_train)

# 4. Score the data
y_pred_train = clf.predict(X_train)
y_pred_outliers = clf.predict(X_outliers)

print(f"Normal points detected as normal: {list(y_pred_train).count(1)} / 200")
print(f"Anomalies successfully isolated: {list(y_pred_outliers).count(-1)} / 5")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Anomaly Detection is the "Immune System" of AI. It doesn't need to know every possible threat; it just needs to know what "Normal" looks like so anything strange can be flagged.</p>
    <ul>
      <li><strong>Credit Card Fraud Prevention</strong>: Banks use anomaly detection to spot the "Loner" transaction. If your typical spending is small and local, a $5,000 purchase in a foreign country stands out as mathematically isolated and triggers an instant alert.</li>
      <li><strong>Industrial Equipment Maintenance</strong>: In factories, sensors track heat and vibration. An anomaly detector learns the "Manifold of Normalcy" for a healthy machine. When a bearing starts to fail, the sensor data wanders off into empty regions of space, flagging the problem before the machine actually breaks.</li>
    </ul>
    <p>Teacher's Final Word: Anomaly Detection focuses on the loner. It's the art of defining the "fence" around a sheep herd so clearly that a wolf stands out simply because it is outside the boundary.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve mastered the art of Discovery. Now, move into the frontier of complex modeling with <strong><a href="#/machine-learning/deep-learning/perceptron">Deep Learning & Neural Networks</a></strong>.
    </div>
  `
};


