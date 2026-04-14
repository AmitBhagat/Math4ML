import { TopicSection } from '../../src/data/types';

export const mutualInformationSection: TopicSection = {
  id: "mutual-information",
  title: "Mutual Information",
  description: "Mutual Information quantifies the dependency between two random variables. It measures how much information X tells us about Y.",
  color: "#FF9800",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Info Theory · Dependency</div>
      <h1>Mutual Information: Shared Intelligence</h1>
      <p><strong>Mutual Information</strong> (\(I(X; Y)\)) is a measure of the mutual dependence between two random variables. It asks: "If I know the state of \(X\), how much uncertainty do I lose about \(Y\)?". Unlike correlation, it captures any kind of relationship—linear or non-linear.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Entropy</strong>: Measuring individual uncertainty.</li>
        <li><strong>Joint Entropy</strong>: Measuring total system uncertainty.</li>
        <li><strong>Conditional Entropy</strong>: Measuring remaining uncertainty after observation.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Mutual Information represents the <strong>Intersection</strong> of information. If \(X\) and \(Y\) are two completely independent coin tosses, knowing \(X\) tells you absolutely nothing about \(Y\)—their mutual information is zero. However, if \(X\) is the height of a person and \(Y\) is their weight, they are highly dependent. Knowing \(X\) significantly reduces your surprise about \(Y\). In Machine Learning, mutual information is used for feature selection (finding which inputs (\(X\)) are most informative about the target (\(Y\))) and for understanding the representation capacity of deep neural networks.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Reduction in Uncertainty & The Venn of Entropy</div>
      <p>Mutual Information is the "Reduction of Ignorance." It quantifies the amount of "Signal" shared between two channels.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Reduction formula</h3>
      <p>We define Mutual Information as the difference between our original uncertainty about $Y$ and our remaining uncertainty about $Y$ after we've seen $X$:</p>
      <div class="math-block">
        $$I(X; Y) = H(Y) - H(Y|X)$$
      </div>
      <p>Because Information Theory is symmetric, this is equivalent to how much $Y$ tells us about $X$:</p>
      <div class="math-block">
        $$I(X; Y) = H(X) - H(X|Y)$$
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Joint Relationship</h3>
      <p>Geometrically (via the Venn diagram), Mutual Information is the overlap between the two entropy circles. The total area covered by both is the Joint Entropy $H(X, Y)$:</p>
      <div class="math-block">
        $$I(X; Y) = H(X) + H(Y) - H(X, Y)$$
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">3. KL-Divergence Connection</h3>
      <p>Fascinatingly, $I(X; Y)$ is also the KL-Divergence between the <strong>Joint Distribution</strong> $P(X, Y)$ and the <strong>Product of Marginals</strong> $P(X)P(Y)$. It measures how far the system is from being independent:</p>
      <div class="math-block">
        $$I(X; Y) = D_{KL}( P(X, Y) \parallel P(X)P(Y) )$$
      </div>
    </div>

    <visualizer topic="mutual-information" />
    
    <h2 id="example-coins" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Linked Random Variables</h2>
    
      <h4>Problem: Information in a Communication Channel</h4>
      <p>Let $X$ be a weather sensor and $Y$ be the actual weather. Calculate how much the sensor "knows" about reality.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Independence:</strong> If the sensor is broken and random, $P(X,Y) = P(X)P(Y) \implies I=0$.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Perfect Sensor:</strong> If $X$ always equals $Y$, $H(Y|X) = 0$, so $I(X;Y) = H(Y)$. The sensor knows everything.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Key Takeaway:</strong> Mutual Information is effectively the "Capacity" of the connection between two variables. It is the "Bandwidth" of relevance.
        </div>
      </div>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Information Bottleneck Principle</strong>: In Deep Learning, we want the hidden layers to have high mutual information with the label (\(Y\)) but *low* mutual information with the raw input (\(X\)). This forces the model to ignore noisy, irrelevant details and only keep the "Semantic Essence" needed for prediction.</li>
      <li><strong>Feature Selection</strong>: Before training a massive model, engineers use Mutual Information to rank features. Features with high \(I(X; Y)\) are kept, while those with zero mutual information are discarded as useless noise that would only lead to overfitting.</li>
    </ul>
    <p>Teacher's Final Word: In a world of noise, mutual information is the signal. It’s the measure of how much one thing truly matters to another. High-fidelity AI is simply the search for the features that share the most secrets with the outcome.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Explore how KL-Divergence measures the distance between distributions in <strong><a href="#/mathematics/information-theory/kl-divergence">KL Divergence</a></strong>.
    </div>
  `
};
