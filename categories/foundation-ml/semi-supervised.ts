import { TopicSection } from '../../src/data/types';

export const semiSupervisedLearningSection: TopicSection = {
  id: "semi-supervised",
  title: "Semi-Supervised Learning",
  description: "Semi-Supervised Learning is a type of Machine Learning that uses both labeled and unlabeled data for training.",
  color: "#9C27B0",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Semi-Supervised</div>
      <h1>Semi-Supervised Learning: The Gold Rush</h1>
      <p><strong>Semi-Supervised Learning (SSL)</strong> is the pragmatic middle ground. In the real world, most data is unlabeled and "Messy." Labeling is expensive. SSL is about using a small handful of <strong>Labeled Diamonds</strong> to find the value in a mountain of <strong>Unlabeled Dust</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Smoothing and Manifolds</a>
      <a href="#example">The "Few High-Impact Samples" Approach</a>
      <a href="#analogy">The "Foreign City" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Smoothing and Manifolds</h2>
    <p>SSL relies on the <strong>Continuity Assumption</strong>: If two points \(x_1\) and \(x_2\) are close in space, they should probably have the same label. If we label 10 points, the machine "Spreads" those labels to nearby neighbors in the unlabeled set.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Infection of Knowledge."</strong> 
        You have 1,000 photos of cats and dogs. You only label 10. The machine looks at the 990 unlabeled photos. It notices that "Photo 11" looks almost exactly like "Labeled Dog 1." It decides to <strong>re-label</strong> Photo 11 as a dog. Now it has 11 dogs to help find more.
      </div>
    </div>

    <h2 id="example">The "Few High-Impact Samples" Approach</h2>
    <div class="example-box">
      <h4>Scenario: Training a Sentiment Analyzer</h4>
      <p>You want to know if Tweets are happy or sad. You have 1 million Tweets, but only 500 have been manually labeled.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Goal:</strong> Use the 500 labels to find "Anchor points" in the word cloud.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Result:</strong> Words like "Excellent" are labeled as Happy. The machine notices that words like "Stellar" often appear next to "Excellent" in the 1 million unlabeled Tweets. It correctly guesses "Stellar" is also Happy.</div>
        </div>
      </div>
    </div>

    <h2 id="analogy">The "Foreign City" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are <strong>Lost in a Foreign City</strong> where you don't speak the language. 
        Most signs are gibberish (Unlabeled). But you have a <strong>Tiny Tourist Map</strong> (Labeled). 
        You find one landmark on your map. You look around and see that the "Unlabeled" streets nearby are full of restaurants and shops. Even though they aren't on your tiny map, you've <strong>learned</strong> that this neighborhood is the "Entertainment District."
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if there are no labels at all, just a feedback loop? Explore <strong><a href="#/machine-learning/foundation-ml/reinforcement">Reinforcement Learning</a></strong>.
    </div>
  `
};
