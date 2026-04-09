import { TopicSection } from '../../src/data/types';

export const transformersSection: TopicSection = {
  id: "transformers",
  title: "The Transformer Revolution",
  description: "A deep learning architecture based on multi-head attention mechanisms, replacing recurrent layers with parallel processing for superior sequence modeling.",
  color: "#e3b341",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Attention</div>
      <h1>The Transformer: The Attention Spotlight</h1>
      <p>Why read a book word-by-word if you can read the <strong>Whole Page</strong> at once? <strong>Transformers</strong> are the breakthrough that made ChatGPT and modern AI possible. They threw away the "Recurrence" (Memory) and replaced it with <strong>Attention</strong>—the ability for every word in a sentence to "Look At" every other word simultaneously. It is the <strong>Parallelization</strong> of intelligence.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Why read a book word-by-word if you can read the <strong>Whole Page</strong> at once? <strong>Transformers</strong> are the breakthrough that made ChatGPT and modern LLMs possible. They threw away the "Recurrence" (the step-by-step memory) and replaced it with <strong>Attention</strong>—the ability for every token in a sequence to "Look At" every other token simultaneously. This is the <strong>Parallelization</strong> of intelligence. Instead of a goldfish trying to remember 10 seconds ago, a Transformer is like a global spotlight that can instantly see the relationship between a word at the beginning of a document and a word at the very end. It treats data not as a ticking clock, but as a single, massive web of connections.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Scaled Dot-Product Attention</div>
      <p>The Transformer maps a sequence of input representations $(\mathbf{x}_1, \dots, \mathbf{x}_n)$ to a sequence of continuous representations $\mathbf{z}$. The core operation is **Self-Attention**, which computes a weighted sum of values $\mathbf{V}$ based on the similarity between queries $\mathbf{Q}$ and keys $\mathbf{K}$:</p>
      <div class="math-block">
        $$\text{Attention}(\mathbf{Q}, \mathbf{K}, \mathbf{V}) = \text{Softmax}\left(\frac{\mathbf{Q}\mathbf{K}^T}{\sqrt{d_k}}\right)\mathbf{V}$$
      </div>
      <p>To capture information from different representation subspaces, the model uses **Multi-Head Attention**:</p>
      <div class="math-block">
        $$\text{MultiHead}(\mathbf{Q}, \mathbf{K}, \mathbf{V}) = \text{Concat}(\text{head}_1, \dots, \text{head}_h)\mathbf{W}^O$$
      </div>
      <p class="text-xs opacity-70 mt-2">Where each head is an independent attention mechanism. Because there is no recurrence, **Positional Encodings** are added to the input embeddings to inject sequence order.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of a Transformer as <strong>"The Stage Spotlight"</strong> or <strong>"Finding the Context in a Crowd."</strong> 
        Imagine a 20-actor play on a pitch-black stage. In the old way (RNN), a single spotlight moves from Actor 1 to Actor 2, and so on. By the time it reaches the end, the earlier lines are forgotten. 
        In a <strong>Transformer</strong>, <strong>Every Actor</strong> has their own high-powered spotlight. At the same instant, they shine them on the colleagues they need to understand. Actor 1 (The Subject) shines their light and sees Actor 12 (The Verb) holding a "Key" that perfectly matches their "Query." 
        The whole stage is lit up in a <strong>Global Search</strong> that resolves context instantly. It is the math of "Paying Attention" to what actually matters, regardless of distance.
      </div>
    </div>

    <h2 id="attention">Self-Attention Mechanism</h2>
    <p>We calculate the <strong>Compatibility</strong> between Queries and Keys using the <strong>Dot Product</strong>. This creates a weight (Attention Score). We then use those weights to create a <strong>Weighted Sum</strong> of the Values.</p>
    <div class="math-block">$$Attention(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$</div>
    <p><strong>The Power:</strong> This happens for <strong>Every Word at the Same Time</strong>. There is no "Looping." This makes training 100x faster than RNNs.</p>

    <h2 id="multi-head">Multi-Head Attention</h2>
    <p>Instead of just one "Search Engine," we have 8 or 12. 
    One head might focus on <strong>Grammar</strong>. 
    One might focus on <strong>Tense</strong>. 
    One might focus on <strong>Entity Relationships</strong>. 
    By combining these perspectives, the model builds a <strong>High-Resolution Understanding</strong> of the sequence.</p>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Stage Spotlight</h2>
    
      <h4>Scenario: A 20-Actor Play on a Total Blackout Stage</h4>
      <p>Imagine every actor on stage represents a word. How do they coordinate their performance if they can't see the whole script?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Old Way (RNN):</strong> One single spotlight moves from Actor 1 to Actor 2. Actor 2 tries to remember what Actor 1 said. By Actor 20, the memory is a blurry mess. (Sequential & Slow).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The New Way (Attention):</strong> <strong>EVERY Actor</strong> has their own high-powered spotlight. At the same instant, they can shine it on *any* other actor they want.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Query & Key:</strong> Actor 1 (The Subject) shines their "Query" light and sees Actor 12 (The Verb) holding a "Key" that perfectly matches their needs.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Synthesis:</strong> The whole stage is lit up in a web of connections. Everyone understands their role relative to everyone else <strong>Simultaneously</strong>. (Parallel & Global).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Transformers are the ultimate <strong>Parallel Processors</strong>. They don't have "Short-Term Memory"—they have <strong>Instant Vision</strong>. They see the whole sequence as a single structure, not a ticking clock.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np

def softmax(x):
    e_x = np.exp(x - np.max(x, axis=-1, keepdims=True))
    return e_x / e_x.sum(axis=-1, keepdims=True)

# 1. 3 Words, Embed Size 4 (Q, K, V)
# [I, Love, Math]
Q = np.array([[1, 0, 1, 0], [0, 1, 0, 1], [1, 1, 0, 1]])
K = Q # Self-Attention
V = np.array([[10, 0], [0, 20], [5, 5]]) # Meanings

# 2. Score = (Q * K^T) / sqrt(d_k)
d_k = Q.shape[-1]
scores = np.dot(Q, K.T) / np.sqrt(d_k)

# 3. Probabilities (Attention Weights)
weights = softmax(scores)

# 4. Final Output: Contextualized Meanings
output = np.dot(weights, V)

print(f"--- Attention Weights (How much word i looks at word j) ---")
print(weights.round(2))
print(f"\n--- Output Values (Context-aware embeddings) ---")
print(output.round(1))
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Transformers are the "Global Spotlights" that read the entire page at once. By replacing sequential memory with parallel attention, they make real-time reasoning possible at a massive scale.</p>
    <ul>
      <li><strong>Large Language Models (ChatGPT, Claude)</strong>: Transformers are the engine behind the current AI revolution. Because they can "Pay Attention" to 1,000+ words simultaneously, they can understand complex irony, follow long instructions, and write code—instantly seeing how a variable at the start of a file relates to a function at the end.</li>
      <li><strong>Protein Folding and Drug Discovery</strong>: In biology, the "Shape" of a protein determines its function. Transformers are used to see the relationship between distant atoms in a long amino acid sequence. This "Global Context" allows AI to predict how a molecule will fold in 3D space, accelerating the discovery of new medicines by decades.</li>
    </ul>
    <p>Teacher's Final Word: Parallel vision beats sequential memory every single time. Transformers turned AI from a goldfish in a bowl into a researcher with a spotlight, capable of finding the needle of context in a haystack of data.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have mastered the architectures of the mind. Now, let's learn how to prep and "Clean" your raw datasets in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
    </div>
  `
};

