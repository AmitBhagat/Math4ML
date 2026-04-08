import { TopicSection } from '../../src/data/types';

export const bayesianNetworksSection: TopicSection = {
  id: "bayesian-networks",
  title: "Bayesian Networks",
  description: "A probabilistic graphical model that represents a set of variables and their conditional dependencies via a directed acyclic graph (DAG).",
  color: "#FF5722",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 PGM · Graphical</div>
      <h1>Bayesian Networks: The Web of Influence</h1>
      <p>Probabilities are rarely isolated. If it's raining, your grass is likely wet. If your grass is wet, you might slip. <strong>Bayesian Networks</strong> are the map of these <strong>Causal Relationships</strong>. By using <strong>Directed Acyclic Graphs (DAGs)</strong>, we can model how information flows through a complex system of uncertainty.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The DAG Structure</a>
      <a href="#independence">Local Markov Property</a>
      <a href="#math">Joint Probability Factorization</a>
      <a href="#inference">Inference: Predicting the Unseen</a>
      <a href="#analogy">The "Crime Scene" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The DAG Structure</h2>
    <p>A Bayesian Network consists of <strong>Nodes</strong> (Random Variables) and <strong>Edges</strong> (Direct Influence). The graph must be <strong>Acyclic</strong> (no loops), because a variable cannot be its own cause.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Storyboard."</strong> 
        Each node is an event. The arrows tell the story of <strong>Who Influences Whom</strong>. 
        If there is no arrow between two nodes, it doesn't mean they aren't related—it just means they only talk to each other through <strong>intermediaries</strong>.
      </div>
    </div>

    <h2 id="independence">Local Markov Property</h2>
    <p>The "Magic" of Bayesian Networks is the <strong>Conditional Independence</strong> assumption. It states that a node is independent of its ancestors <strong>given its parents</strong>. This allows us to represent a massive joint probability table using just a few small <strong>Conditional Probability Tables (CPTs)</strong>.</p>

    <h2 id="math">Joint Probability Factorization</h2>
    <p>Because of the graph structure, the total probability of the entire system can be decomposed into a simple product:</p>
    <div class="math-block">$$P(x_1, \dots, x_n) = \prod_{i=1}^n P(x_i \mid Parents(x_i))$$</div>
    <p>This is the <strong>Chain Rule</strong> for Bayesian Networks. It turns an exponential problem into a manageable one.</p>

    <h2 id="inference">Inference: Predicting the Unseen</h2>
    <div class="example-box">
      <h4>Scenario: The Alarm System</h4>
      <p>Variables: [Burglary, Earthquake, Alarm, JohnCalls, MaryCalls]</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Observation:</strong> Mary calls you. (Evidence).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Goal:</strong> Calculate $P(Burglary \mid MaryCalls)$. This is <strong>Inference</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Method:</strong> We use <strong>Variable Elimination</strong> or <strong>Belief Propagation</strong> to "Flow" the probability from the observation back to the cause.</div>
        </div>
      </div>
    </div>

    <h2 id="analogy">The "Crime Scene" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Detective investigating a break-in</strong>. 
        Clues: [Broken Window, Muddy Footprints, Empty Safe]. 
        The detective has a <strong>Mental Map</strong>: A Broken Window could be caused by a Burglar (90%) or a Baseball (10%). 
        **Bayesian Networks** are that mental map in mathematical form. 
        When the detective sees the "Broken Window," the probability of "Burglar" goes up. But if he then sees a "Baseball" on the floor, the probability of "Burglar" might go back down. This is <strong>Explaining Away</strong>—a unique power of graphical models.
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if the arrows follow a sequence in time? Explore <strong><a href="#/machine-learning/pgm/hmm">Hidden Markov Models (HMM)</a></strong>.
    </div>
  `
};
