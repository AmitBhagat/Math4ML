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
      <p>Why read a book word-by-word if you can read the <strong>Whole Page</strong> at once? <strong>Transformers</strong> are the breakthrough that made ChatGPT and modern AI possible. They threw away the "Recurrence" (Memory) and replaced it with **Attention**—the ability for every word in a sentence to "Look At" every other word simultaneously. It is the **Parallelization** of intelligence.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Query, Key, and Value</a>
      <a href="#attention">Self-Attention Mechanism</a>
      <a href="#multi-head">Multi-Head Attention: Diverse Perspectives</a>
      <a href="#positional">Positional Encodings: The Only Order</a>
      <a href="#analogy">The "Spotlight" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Query, Key, and Value</h2>
    <p>Transformers treat information like a <strong>Search Engine (Database Retrieve)</strong>. Each word creates three vectors:</p>
    <ul>
      <li><strong>Query (Q):</strong> What am I looking for? ("I am a subject, I need a verb.")</li>
      <li><strong>Key (K):</strong> What do I offer? ("I am a past-tense verb.")</li>
      <li><strong>Value (V):</strong> What is my actual meaning? ("The action of 'running'.")</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Finding the Context."</strong> 
        In the sentence "The **Bank** was closed," the word "Bank" looks at "Closed" and knows it's a <strong>Financial Institution</strong>. 
        In "The **Bank** of the river," "Bank" looks at "River" and knows it's <strong>Geography</strong>. 
        Attention is the <strong>Exact Mathematical Calculation</strong> of that relationship.
      </div>
    </div>

    <h2 id="attention">Self-Attention Mechanism</h2>
    <p>We calculate the <strong>Compatibility</strong> between Queries and Keys using the <strong>Dot Product</strong>. This creates a weight (Attention Score). We then use those weights to create a <strong>Weighted Sum</strong> of the Values.</p>
    <div class="math-block">$$Attention(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$</div>
    <p>**The Power:** This happens for <strong>Every Word at the Same Time</strong>. There is no "Looping." This makes training 100x faster than RNNs.</p>

    <h2 id="multi-head">Multi-Head Attention</h2>
    <p>Instead of just one "Search Engine," we have 8 or 12. 
    One head might focus on <strong>Grammar</strong>. 
    One might focus on <strong>Tense</strong>. 
    One might focus on <strong>Entity Relationships</strong>. 
    By combining these perspectives, the model builds a <strong>High-Resolution Understanding</strong> of the sequence.</p>

    <h2 id="example">Illustrated Example: The Stage Spotlight</h2>
    <div class="example-box">
      <h4>Scenario: A 20-Actor Play on a Total Blackout Stage</h4>
      <p>Imagine every actor on stage represents a word. How do they coordinate their performance if they can't see the whole script?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Old Way (RNN):</strong> One single spotlight moves from Actor 1 to Actor 2. Actor 2 tries to remember what Actor 1 said. By Actor 20, the memory is a blurry mess. (Sequential & Slow).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The New Way (Attention):</strong> **EVERY Actor** has their own high-powered spotlight. At the same instant, they can shine it on *any* other actor they want.</div>
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
          <strong>Teacher's Hint:</strong> Transformers are the ultimate <strong>Parallel Processors</strong>. They don't have "Short-Term Memory"—they have <strong>Instant Vision</strong>. They see the whole sequence as a single structure, not a ticking clock.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Scaled Dot-Product Attention</h2>
    <python-code static-output="[Action] Calculating Context for 3 Words...\n[Attention Scores] Compatibility Matrix Calculated.\n[Softmax] Row 0: Word 0 paying 92% attention to Word 2!\n[Result] Input meanings successfully 'blended' based on their context.\n[Parallel] All word relationships resolved in a single matrix multiplication.">
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

    <div class="linking-rule">
      <strong>Next Step:</strong> You have mastered the architectures of the mind. Now, let's learn how to prep and "Clean" your raw datasets in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
    </div>
  `
};
