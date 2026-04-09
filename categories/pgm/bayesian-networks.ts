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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Probabilities are rarely isolated. If it is raining, your grass is likely wet; if your grass is wet, you might slip. <strong>Bayesian Networks</strong> are the map of these causal ripples—the "Web of Influence" that defines complex systems of uncertainty. Using <strong>Directed Acyclic Graphs (DAGs)</strong>, we can model how information flows from one cause to an effect, allowing us to reason about the unseen. It’s a "Glass Box" approach to AI: unlike a black-box neural network, you can trace exactly why the model has reached a conclusion by looking at the logical connections between variables.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Directed Probabilistic Factorization</div>
      <p>A **Bayesian Network** $\mathcal{B}$ represents a joint probability distribution over a set of random variables $\mathcal{X} = \{X_1, \dots, X_n\}$ through a graph structure and a set of local parameters:</p>
      <div class="math-block">
        $$\mathcal{B} = \langle G, P \rangle$$
      </div>
      <p>where $G$ is a Directed Acyclic Graph (DAG) and $P$ is a set of Conditional Probability Distributions (CPDs). The structure satisfies the following properties:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Factorization</strong>: $P(X_1, \dots, X_n) = \prod_{i=1}^n P(X_i \mid \text{Pa}_G(X_i))$. The joint distribution is the product of the probability of each node given its parents.</li>
        <li><strong>Local Markov Property</strong>: Every variable $X_i$ is conditionally independent of its non-descendants given its parents $\text{Pa}_G(X_i)$.</li>
        <li><strong>D-Separation</strong>: A graphical criterion used to identify global independence relations ($X \perp Y \mid Z$) without explicitly computing the probability tables.</li>
        <li><strong>CPDs</strong>: For discrete variables, these are Conditional Probability Tables (CPTs); for continuous variables, these are functional mappings (e.g., Linear Gaussians).</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Bayesian Networks allow for efficient **Inference** (updating beliefs based on evidence) and **Learning** (discovering the graph structure and parameters from data).</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <p>This is the <strong>Chain Rule</strong> for Bayesian Networks. It turns an exponential problem into a manageable one.</p>
      </div>
    </div>

    <h2 id="inference">Inference: Predicting the Unseen</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Detective's Mental Map</h2>
    
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
          Bayesian Networks excel at this kind of <strong>Joint Reasoning</strong>. Unlike a standard Neural Network, you can track the exact flow of evidence and see *why* the model changed its mind. It is "Glass Box" AI.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
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

    <h2 id="applications">Applications in ML</h2>
    <p>Bayesian Networks are the "Map of Influence." They allow us to reason through complex webs of cause-and-effect, making them far more interpretable than "black-box" neural networks.</p>
    <ul>
      <li><strong>Root Cause Fault Diagnosis</strong>: Large data centers and manufacturing plants use Bayesian networks to find why a system failed. By modeling the causal web of sensors—heat, power consumption, and mechanical vibrations—the model can see a "Heat Spike" and calculate whether it was caused by a "Cooling Failure" or a "CPU Overload." It effectively reasons backward from the symptoms to the source.</li>
      <li><strong>Medical Symptom Influence Mapping</strong>: Doctors use Bayesian networks to predict diseases based on a massive array of potential symptoms. Since different diseases (like the Flu and COVID-19) share many symptoms, the network uses the "Causal Strength" of each connection to decide which diagnosis is most probable given the specific combination of signs found in the patient.</li>
    </ul>
    <p>Teacher's Final Word: Logic is simple; the truth is a web. Bayesian networks are how we turn that messy web of human intuition and physical cause-and-effect into a cold, hard mathematical calculation. They don't just give you an answer; they show you the exact logic of how they got there.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if the arrows follow a sequence in time? Explore <strong><a href="#/machine-learning/pgm/hmm">Hidden Markov Models (HMM)</a></strong>.
    </div>
  `
};

