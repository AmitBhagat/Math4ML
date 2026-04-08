import { TopicSection } from '../../src/data/types';

export const featureEngineeringSection: TopicSection = {
  id: "feature-engineering",
  title: "Feature Engineering",
  description: "Feature Engineering is the process of using domain knowledge to extract features (characteristics, properties, attributes) from raw data.",
  color: "#FF9800",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Data Art</div>
      <h1>Feature Engineering: The Art of Data</h1>
      <p>There is a famous saying: <strong>"Garbage In, Garbage Out."</strong> Even the most powerful algorithm (like a Deep Neural Network) will fail if you give it "Bad" data. <strong>Feature Engineering</strong> is the act of turning raw, noisy numbers into meaningful <strong>Insights</strong> that the machine can easily understand.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">The Mechanics of Representation</a>
      <a href="#creation">Feature Creation: The Meaning from Raw</a>
      <a href="#selection">Feature Selection: The Minimalist</a>
      <a href="#analogy">The "Master Chef" Analogy</a>
    </div>

    <h2 id="theory">The Mechanics of Representation</h2>
    <p>A machine sees data as a <strong>Vector Space</strong>. Your job is to transform the data so that the "Distance" between points actually means something. Feature Engineering isn't about math; it's about <strong>Representing the World</strong> in a way that points the way toward the Answer.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Cooking Prep."</strong> 
        The machine is the <strong>Stove</strong>. The data is the <strong>Raw Ingredients</strong>. 
        If you throw a whole, unpeeled potato into the stove, the result is "Garbage." 
        If you peel it, chop it, and season it, you get a <strong>Gourmet Dish</strong>. Feature Engineering is the <strong>Chopping and Seasoning</strong> that happens before the cooking begins.
      </div>
    </div>

    <h2 id="creation">Feature Creation: The Meaning from Raw</h2>
    <div class="example-box">
      <h4>Scenario: Predicting House Prices</h4>
      <p>Data: [Year Built, Year Sold]. The machine might not see the pattern immediately.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>New Feature:</strong> Create **"Age of House at Sale"** (\(Year_{Sold} - Year_{Built}\)).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Result:</strong> This single number is 1,000x more informative to the machine than the two raw years separately. You've <strong>distilled</strong> the insight for the algorithm.</div>
        </div>
      </div>
    </div>

    <h2 id="selection">Feature Selection: The Minimalist</h2>
    <p>More data isn't always better. If you have 5,000 features but only 10 are useful, the other 4,990 are just <strong>Noise</strong> that will confuse the model. Part of engineering is <strong>Choosing only the High-Impact Features</strong>.</p>
    
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are <strong>packing for a 3-day trip</strong>. 
        If you bring 20 suitcases (Too much noise), you'll never find your toothbrush. 
        If you bring only a backpack with exactly what you need (Selected Features), you'll travel faster and spend less energy.
      </div>
    </div>

    <h2 id="analogy">The "Handwriting" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine the machine trying to <strong>Recognize the letter 'A'</strong>. 
        You could give it the <strong>Raw Pixels</strong> (all 10,000 of them). Or, you could engineer a <strong>Single Feature</strong>: "Does this shape have a triangle on top?" 
        By creating that one clever feature, you've done 90% of the machine's work for it. That's the **power of domain knowledge.**
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> Even with perfect features, if they are on different scales (e.g. 1 km vs 1,000 mm), the machine will get confused. Explore <strong><a href="#/machine-learning/foundation-ml/scaling-normalization">Scaling and Normalization</a></strong>.
    </div>
  `
};
