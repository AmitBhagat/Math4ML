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
      <p>How do you understand a **Sentence**? You don't just look at each word in isolation. You need to remember the <strong>Context</strong> of the previous words. <strong>Recurrent Neural Networks (RNN)</strong> are the biological "Memory" machines. They have a <strong>Looping Connection</strong> that allows information to flow from the <strong>Past</strong> into the <strong>Present</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The Hidden State</a>
      <a href="#math">The Recurrence Relation</a>
      <a href="#bptt">BPTT: Backpropagation Through Time</a>
      <a href="#limitations">The Short-Term Memory Problem</a>
      <a href="#analogy">The "Goldfish" Analogy</a>
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
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Updating your Story."</strong> 
        The hidden state is the <strong>Current Version of the Story</strong>. 
        When a new word comes in, you update your story based on that word and your previous memory. 
        The story keeps <strong>evolving</strong> as the sequence progresses.
      </div>
    </div>

    <h2 id="bptt">BPTT: Backpropagation Through Time</h2>
    <p>How do we train an RNN? We "Unroll" it! 
    Imagine a network with 100 time steps as one giant 100-layer MLP where every layer <strong>Shares the Same Weights</strong>. This is <strong>Backpropagation Through Time (BPTT)</strong>. 
    **The Gotcha:** Because we use the same weights over and over, small errors can <strong>Explode</strong> or <strong>Vanish</strong> exponentially over time.</p>

    <h2 id="limitations">The Short-Term Memory Problem</h2>
    <p><strong>The Reality:</strong> Simple RNNs have <strong>Terrible Memory</strong>. If a sentence is 20 words long, by the time the RNN reaches the last word, it has usually <strong>forgotten</strong> the first word. It only has "Short-Term" persistence.</p>

    <h2 id="analogy">The "Goldfish with a Notebook" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Goldfish</strong> with a 5-second memory. 
        It is trying to read a <strong>Mystery Novel</strong>. 
        Every time it turns a page, it forgets everything that happened before. 
        So, it keeps a <strong>Small Notebook (Hidden State)</strong>. 
        On each page, it looks at the new text, reads its notebook, and then <strong>Scribbles</strong> a summary for the next page. 
        **The RNN is that Goldfish. The "Notebook" is its hidden state. The "Short-Term" problem is the notebook being too small to hold the whole story.** 
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> How do we give the goldfish a "Long-Term" memory? Explore <strong><a href="#/machine-learning/deep-learning/lstm-gru">LSTM and GRU Architectures</a></strong>.
    </div>
  `
};
