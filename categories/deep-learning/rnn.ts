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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>How do you understand a <strong>Sentence</strong>? You don't just look at each word in isolation; you need to remember the <strong>Context</strong> of the words that came before. <strong>Recurrent Neural Networks (RNN)</strong> are the biological "Memory" machines. They introduce a <strong>Looping Connection</strong> that allows information to flow from the <strong>Past</strong> into the <strong>Present</strong>. At every time step, the network takes a new input and combines it with its existing "Hidden State" (its internal memory bank). This allows the model to process sequences of data—like speech, text, or stock prices—where the <strong>Order</strong> of events is just as important as the events themselves.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Sequential State Updates</div>
      <p>An RNN is a dynamic system that computes a hidden state $\mathbf{h}_t$ by combining the current input $\mathbf{x}_t$ with the previous state $\mathbf{h}_{t-1}$. The update rule is typically defined as:</p>
      <div class="math-block">
        $$\mathbf{h}_t = \sigma( \mathbf{W}_{hh} \mathbf{h}_{t-1} + \mathbf{W}_{xh} \mathbf{x}_t + \mathbf{b}_h )$$
      </div>
      <p>The final output $\mathbf{y}_t$ is then projected from this hidden state:</p>
      <div class="math-block">
        $$\mathbf{y}_t = \text{Softmax}(\mathbf{W}_{hy} \mathbf{h}_t + \mathbf{b}_y)$$
      </div>
      <p class="text-xs opacity-70 mt-2">Due to the recursive nature, training involves **Backpropagation Through Time (BPTT)**, which can suffer from vanishing gradients over long sequences.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of an RNN as <strong>"The Goldfish with a Notebook"</strong> or <strong>"Updating your Story."</strong> 
        Imagine you have a 10-second memory. To understand a "Who-Done-It" mystery novel, you need a system to carry context. Every time you read a page (new input), you look at your notebook (the Hidden State) to see what happened on the previous page. You then <strong>Update</strong> the notebook with the new information and pass it to your future self. 
        Your internal "Story" keeps <strong>Evolving</strong> as you move through the sequence. The hidden state is the "Soul" of the RNN—it represents a compressed history of everything the network has seen so far.
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

    <h2 id="applications">Applications in ML</h2>
    <p>RNNs are the "Temporal Memory" of AI. They don't just see the world in snapshots; they see the "History" of the data, allowing information to flow from the past into the present.</p>
    <ul>
      <li><strong>Stock Market Trend Prediction</strong>: Financial analysts use RNNs to predict tomorrow's stock price. Because the model has a loopy connection, it remembers the price "momentum" from the last 10 days, allowing it to see a "Dip" as a buying opportunity rather than just a random number.</li>
      <li><strong>Real-time Live Captions</strong>: When you watch a video with live closed captioning, an RNN is processing the audio stream word-by-word. It uses the "Hidden State" to remember the subject of the sentence, ensuring that it translates "He" or "She" correctly based on the context introduced 5 seconds earlier.</li>
    </ul>
    <p>Teacher's Final Word: It's the Goldberg machine of data—every step passes a note to the next. While they struggle with long stories, for short-term temporal patterns, RNNs are the foundation of everything that moves through time.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> How do we give the goldfish a "Long-Term" memory? Explore <strong><a href="#/machine-learning/deep-learning/lstm-gru">LSTM and GRU Architectures</a></strong>.
    </div>
  `
};
