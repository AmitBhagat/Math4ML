import { TopicSection } from '../../src/data/types';

export const rnnSection: TopicSection = {
  id: "rnn",
  title: "Recurrent Neural Networks (RNN)",
  description: "A class of artificial neural networks where connections between nodes form a directed graph along a temporal sequence.",
  color: "#e3b341",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Sequence</div>
      <h1>RNN: The Goldfish with a Notebook</h1>
      <p>How do you understand a <strong>Sentence</strong>? You don't just look at each word in isolation. You need to remember the <strong>Context</strong> of the previous words. <strong>Recurrent Neural Networks (RNN)</strong> are the biological "Memory" machines. They have a <strong>Looping Connection</strong> that allows information to flow from the <strong>Past</strong> into the <strong>Present</strong>.</p>
    </div>

    <h2 id="theory">Theoretical Core: The Hidden State</h2>
    <p>An RNN has a <strong>Hidden State (\(h_t\))</strong> that acts as its memory. At each time step \(t\), the network takes two inputs: the <strong>Current Data (\(x_t\))</strong> and the <strong>Previous Memory (\(h_{t-1}\))</strong>.</p>
    <div class="math-block">$$h_t = \sigma(W_{hh}h_{t-1} + W_{xh}x_t + b_h)$$</div>
    <ul>
      <li><strong>Weight \(W_{hh}\):</strong> The network's "Memory Strength." How much of the past does it want to keep?</li>
      <li><strong>Weight \(W_{xh}\):</strong> The network's "Perception Strength." How much does it care about the new word?</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of it as <strong>"Updating your Story."</strong> 
        The hidden state is the <strong>Current Version of the Story</strong>. 
        When a new word comes in, you update your story based on that word and your previous memory. 
        The story keeps <strong>evolving</strong> as the sequence progresses.
      </div>
    </div>

    <h2 id="bptt">BPTT: Backpropagation Through Time</h2>
    <p>How do we train an RNN? We "Unroll" it! 
    Imagine a network with 100 time steps as one giant 100-layer MLP where every layer <strong>Shares the Same Weights</strong>. This is <strong>Backpropagation Through Time (BPTT)</strong>. 
    <strong>The Gotcha:</strong> Because we use the same weights over and over, small errors can <strong>Explode</strong> or <strong>Vanish</strong> exponentially over time.</p>

    <h2 id="limitations">The Short-Term Memory Problem</h2>
    <p><strong>The Reality:</strong> Simple RNNs have <strong>Terrible Memory</strong>. If a sentence is 20 words long, by the time the RNN reaches the last word, it has usually <strong>forgotten</strong> the first word. It only has "Short-Term" persistence.</p>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Goldfish with a Notebook</h2>
    
      <h4>Scenario: Reading a Long Mystery Novel with Short-Term Memory</h4>
      <p>Imagine you have a 10-second memory. To understand a "Who-Done-It" book, you need a system to carry context.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The New Input (X):</strong> You read a single page. It says: "The Butler has a bloody knife."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Hidden State (The Notebook):</strong> You look at your notebook. It says: "Previously, the maid was found in the pantry." (Context from the Past).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Synthesis (Update):</strong> You combine the new word + the note and write a new note: "Butler killed the Maid."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Result:</strong> You pass the notebook to the next person. Every step depends on the <strong>History</strong> written in that notebook.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          An RNN is <strong>Temporal</strong>. It doesn't just see the world; it sees the <strong>History</strong> of the world. But be careful—the notebook is small. If the story is too long, the 'Blame' for a bad prediction can't travel all the way back to page 1.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code static-output="[Sequence] Step 0: Input 'Wait' -> Memory Strength: 0.12\n[Sequence] Step 1: Input 'For' -> Memory Strength: 0.45\n[Sequence] Step 2: Input 'It' -> Memory Strength: 0.82\n[Analysis] The Hidden State is evolving as new data 'updates' the existing context.\n[Result] Final Hidden Vector represents a 'compressed' history of the full sequence.">
import numpy as np

# 1. Weights: x->h and h->h (Memory)
W_xh = np.random.randn(4, 1) # Perception
W_hh = np.random.randn(4, 4) # Memory Persistence
h_state = np.zeros((4, 1))   # Initial 'Blank' Memory

# 2. Sequence of signals (imagine a sine wave or sentence)
sequence = [1.5, -0.5, 2.0]

print("Processing Sequence through Recurrence:")

for i, x_t in enumerate(sequence):
    # Rule: New Memory = tanh(Current Input + Previous Memory)
    z = np.dot(W_xh, x_t) + np.dot(W_hh, h_state)
    h_state = np.tanh(z)
    
    # Calculate Magnitude of Memory
    magnitude = np.linalg.norm(h_state)
    print(f"Step {i}: Input Signal {x_t:4.1f} | Memory Strength {magnitude:.4f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> How do we give the goldfish a "Long-Term" memory? Explore <strong><a href="#/machine-learning/deep-learning/lstm-gru">LSTM and GRU Architectures</a></strong>.
    </div>
  `
};
