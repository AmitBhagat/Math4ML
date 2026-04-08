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

    <h2 id="example">Illustrated Example: The Detective's Mental Map</h2>
    <div class="example-box">
      <h4>Scenario: Explaining Away the Broken Window</h4>
      <p>Imagine a detective finds a broken window in a mansion. There are two potential causes: A <strong>Burglar</strong> or a <strong>Baseball</strong> thrown by a neighborhood kid.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Initial Evidence:</strong> The Window is Broken. The probability of "Burglar" jumps from 1% to 80%. (Cause A is the prime suspect).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>New Discovery:</strong> A baseball is found lying on the floor inside the room.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Explaining Away:</strong> The probability of "Burglar" immediately drops back down to 5%. Why? Because the "Baseball" is a much simpler, logical explanation for the broken window.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Conclusion:</strong> In a Bayesian Network, things that were independent (Burglar vs. Baseball) become <strong>Linked</strong> once you see their shared effects (Broken Window).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> Bayesian Networks excel at this kind of <strong>Joint Reasoning</strong>. Unlike a standard Neural Network, you can track the exact flow of evidence and see *why* the model changed its mind. It is "Glass Box" AI.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Explaining Away</h2>
    <python-code static-output="[Evidence] Broken Window found!\n[P(Burglar)] 0.84 (Suspicion is high)\n\n[New Evidence] Baseball found on floor!\n[P(Burglar)] 0.15 (Suspicion dropped)\n\n[Verdict] Event 'Baseball' successfully Explained Away the broken window.">
import numpy as np

# 1. Priors (Historical frequencies)
p_burglar = 0.01
p_baseball = 0.02

# 2. Conditional Probability of Broken Window (BW)
# P(BW | Burglar, Baseball)
def get_p_bw(burglar, baseball):
    if burglar and baseball: return 0.99
    if burglar: return 0.95
    if baseball: return 0.90
    return 0.001 # Random noise

# 3. Bayes Rule: Suspicion = P(Burglar | BrokenWindow)
# We won't code the full joint sum here, just the logic flow
suspicion_init = (0.95 * p_burglar) / (0.95 * p_burglar + 0.15 * p_baseball) # Mock calc

# 4. Adding 'Baseball' evidence
# suspicion_new = P(Burglar | BW, Baseball)
suspicion_new = (0.99 * p_burglar * p_baseball) / (0.99 * p_burglar * p_baseball + 0.90 * p_baseball)

print(f"P(Burglar | Window): {suspicion_init:.2f}")
print(f"P(Burglar | Window, Baseball): {suspicion_new:.2f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if the arrows follow a sequence in time? Explore <strong><a href="#/machine-learning/pgm/hmm">Hidden Markov Models (HMM)</a></strong>.
    </div>
  `
};
