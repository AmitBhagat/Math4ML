import { TopicSection } from '../../src/data/types';

export const lstmGruSection: TopicSection = {
  id: "lstm-gru",
  title: "LSTM and GRU: Long-Term Memory",
  description: "Specialized kinds of RNN, capable of learning long-term dependencies, specifically designed to avoid the vanishing gradient problem.",
  color: "#e3b341",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Deep Learning · Memory</div>
      <h1>LSTM and GRU: The Long-Term Diary</h1>
      <p>How do we give a Goldfish a memory that lasts longer than 5 seconds? We give it a <strong>Hardcover Diary</strong>. <strong>Long Short-Term Memory (LSTM)</strong> and <strong>Gated Recurrent Units (GRU)</strong> are the evolution of the RNN. They use <strong>Gates</strong> to decide which information is worth keeping for 100 pages and which should be forgotten immediately.</p>
    </div>

    <h2 id="theory">Theoretical Core: The Constant Cell State</h2>
    <p>A simple RNN is one big mess of gradients. LSTM introduces a <strong>Cell State (\(C_t\))</strong> that acts as a <strong>Conveyor Belt</strong> through time. Information can flow across it with <strong>Zero Change</strong> if the gates allow it. This is how we remember the beginning of a paragraph at the end of a book.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of it as <strong>"Selective Writing."</strong> 
        The cell state is the <strong>Permanent Ink</strong>. 
        The gates are <strong>Electronic Checkpoints</strong>. 
        Checkpoint 1 (Forget Gate) decides what to <strong>Erase</strong>. 
        Checkpoint 2 (Input Gate) decides what to <strong>Add</strong>. 
        Checkpoint 3 (Output Gate) decides what to <strong>Read</strong>. 
      </div>
    </div>

    <h2 id="gates">The 3 Gates of the LSTM</h2>
    
      <h4>How to Control the Flow:</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Forget Gate (\(f_t\)):</strong> Decides what information is "Old News" (e.g., if the subject of a sentence changes from "John" to "Mary").</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Input Gate (\(i_t\)):</strong> Decides which new information is "Breaking News" worth saving.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Output Gate (\(o_t\)):</strong> Decides what to "Report" based on the internal diary and the current input.</div>
        </div>
      </div>
    

    <h2 id="gru">The GRU: Gating Simplified</h2>
    <p><strong>The Theory:</strong> GRU is a simplified version of LSTM. It merges the cell state and hidden state into <strong>One</strong>, and combines the Forget and Input gates into a single <strong>Update Gate</strong>. 
    <strong>Why use it?</strong> It's almost as powerful as LSTM but <strong>Much Faster to Train</strong> because it has fewer parameters. It is the modern choice for smaller datasets.</p>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Disciplined Scientist</h2>
    
      <h4>Scenario: Keeping a Lab Journal on a 10-Year Mars Mission</h4>
      <p>Imagine you are a scientist with limited ink and one journal (The Cell State). You must be ruthless about what you record.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Forget Gate (The Eraser):</strong> You check your old notes. "The weather was cloudy 5 years ago." You erase it to save space. (Removing irrelevant history).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Input Gate (The Pen):</strong> You find <strong>Liquid Water</strong>. This is huge! You write it in the "Permanent" section of your journal. (Updating the context).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Cell State (The Journal):</strong> This water discovery flows through time, protected from the "Noise" of daily life by the gates.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Output Gate (The Report):</strong> At the end of the year, you check your journal and report the Water Discovery first, ignoring the 364 days of boring rocks.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          LSTM is the <strong>Traffic Controller of Memory</strong>. By using the "Cell State" as a high-speed bypass, it allows important signals to skip over the noisy layers and reach the future intact.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code static-output="[Scan] Start: Cell State=0.0 (Empty Journal)\n[Input] Found 'Water' -> Forget: 0.9, Input: 1.0\n[Scan] Middle: 5 years of 'Boring Rocks' -> Input Gate: 0.0\n[Result] Step 10: Cell State=0.89 (Water Discovery Survived!)\n[Insight] The gates successfully blocked the noise and preserved the signal.">
import numpy as np

# 1. State: C (Cell State - Long Term) and H (Hidden State - Short Term)
C, h = 0.0, 0.0

# 2. Sequence of Events: [Discovery, Noise, Noise, ...]
events = [1.0] + [0.1] * 9

print("Simulating LSTM Gating Logic...")

for t, x_t in enumerate(events):
    # Rule-of-thumb Gates
    # Forget: Keep 90% of old memory
    f_gate = 0.9 
    # Input: Only write if the signal is strong (>0.5)
    i_gate = 1.0 if x_t > 0.5 else 0.0
    
    # Update Cell State: h_prev*forget + new*input
    C = (C * f_gate) + (x_t * i_gate)
    
    if t % 5 == 0 or t == 9:
        print(f"  Step {t}: Input={x_t:4.2f} | Cell State (Journal)={C:.4f}")

print("\n[The important discovery from Step 0 is still in the journal at Step 9!]")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Even with a diary, the goldfish still has to read it one page at a time. What if we read the whole book at once? Explore <strong><a href="#/machine-learning/deep-learning/transformers">The Transformer Revolution</a></strong>.
    </div>
  `
};
