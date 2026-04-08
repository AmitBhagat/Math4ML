import { TopicSection } from '../../src/data/types';

export const hmmSection: TopicSection = {
  id: "hmm",
  title: "Hidden Markov Models (HMM)",
  description: "A statistical Markov model in which the system being modeled is assumed to be a Markov process with unobservable (hidden) states.",
  color: "#FF5722",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 PGM · Sequential</div>
      <h1>Hidden Markov Models (HMM)</h1>
      <p>Imagine you are a <strong>Prisoner in a Basement</strong>. You cannot see the weather (Rain or Sun). But every day, you see your <strong>Guard</strong> come in with or without an <strong>Umbrella</strong>. <strong>Hidden Markov Models</strong> are the math for guessing the "Hidden" weather based on the "Observable" guard. It's the standard tool for Speech Recognition and DNA Sequencing.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Latent vs. Observed</a>
      <a href="#markov">The Markov Property: No Memory</a>
      <a href="#math">Transition & Emission Matrices</a>
      <a href="#viterbi">The Viterbi Search: Finding the Sequence</a>
      <a href="#analogy">The "Invisible Reporter" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Latent vs. Observed</h2>
    <p>An HMM has two layers:</p>
    <ul>
      <li><strong>Hidden States (\(Z\)):</strong> The internal variables we care about but cannot see (e.g., Weather, Part-of-Speech).</li>
      <li><strong>Observations (\(X\)):</strong> The evidence we can measure (e.g., Umbrella, Words).</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Connecting the Dots in Time."</strong> 
        The hidden states (\(Z_t\)) are the <strong>Reality</strong>. The observations (\(X_t\)) are the <strong>Symptoms</strong>. 
        Because the reality changes over time, we use a <strong>Markov Chain</strong> to model the transitions.
      </div>
    </div>

    <h2 id="markov">The Markov Property: No Memory</h2>
    <p>HMMs assume the <strong>1st-Order Markov Property</strong>. This means the probability of tomorrow's weather only depends on <strong>Today</strong>. It doesn't care what happened a month ago. This makes the math incredibly efficient.</p>
    <div class="math-block">$$P(Z_t \mid Z_{t-1}, Z_{t-2}, \dots, Z_1) = P(Z_t \mid Z_{t-1})$$</div>

    <h2 id="math">Transition & Emission Matrices</h2>
    <p>We describe the model with two matrices:</p>
    <ul>
      <li><strong>Transition Matrix (A):</strong> $P(Rain \mid Sun)$. How likely is the weather to change?</li>
      <li><strong>Emission Matrix (B):</strong> $P(Umbrella \mid Rain)$. How likely is the guard to bring an umbrella if it's raining?</li>
    </ul>

    <h2 id="viterbi">The Viterbi Search: Finding the Sequence</h2>
    <div class="example-box">
      <h4>Scenario: What is the most likely sequence?</h4>
      <p>If you see [Umbrella, No Umbrella, Umbrella], what was the weather? [Rain, Sun, Rain] or [Rain, Rain, Rain]?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Goal:</strong> Find the sequence of hidden states that has the <strong>Highest Joint Probability</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Method:</strong> We use the <strong>Viterbi Algorithm</strong> (a Dynamic Programming trick) to find the "Best Path" through the trellis of possibilities.</div>
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Prisoner in the Basement</h2>
    <div class="example-box">
      <h4>Scenario: Guessing the Weather from the Guard's Gear</h4>
      <p>Imagine you are a prisoner in a windowless room. You want to know if it's Raining or Sunny outside, but you only see your guard once a day.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Hidden States:</strong> The actual Weather (Rain or Sun). You can't see it directly. (Latent variables).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Observations:</strong> Your Guard walks by. Sometimes he has an **Umbrella**, sometimes he has **Sunshades**. (Emission).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Transitions:</strong> If it's Raining today, there's a 70% chance it will still be Raining tomorrow. This is the **Markov Property**.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Decoding (Viterbi):</strong> You see [Umbrella, Umbrella, Sunshades]. You calculate the **Most Likely Path** and conclude: "It rained for two days, and then the sun came out."</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> HMMs are the <strong>Sherlock Holmes of Time</strong>. They look at the "Clues" (Observations) to deduce the "Truth" (Hidden States) that caused them. This makes them perfect for Speech (Sound waves -> Typed words) or Bio-informatics (Protein sequence -> Function).
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Viterbi Decoding</h2>
    <python-code static-output="[Scan] Sequence: [Umbrella, No Umbrella]\n[Path A] 'Rain' -> 'Sun' Prob: 0.1215\n[Path B] 'Rain' -> 'Rain' Prob: 0.0315\n\n[Viterbi] Winner: 'Rain' followed by 'Sun'\n[Verdict] It was likely raining when the guard had the umbrella, but cleared up by the second visit.">
import numpy as np

# 1. Probabilities
p_start_rain = 0.5 
# A: Transition (Row=From, Col=To) [Sun, Rain]
A = np.array([[0.8, 0.2], [0.3, 0.7]]) 
# B: Emission (Row=State, Col=Obs) [No-Umb, Umb]
B = np.array([[0.9, 0.1], [0.1, 0.9]])

# 2. Score Path A: [Rain -> Sun]
# p(start_rain) * p(umb|rain) * p(sun|rain) * p(no_umb|sun)
path_A = p_start_rain * B[1,1] * A[1,0] * B[0,0]

# 3. Score Path B: [Rain -> Rain] 
# p(start_rain) * p(umb|rain) * p(rain|rain) * p(no_umb|rain)
path_B = p_start_rain * B[1,1] * A[1,1] * B[1,0]

print(f"Path A [Rain -> Sun] Prob:  {path_A:.4f}")
print(f"Path B [Rain -> Rain] Prob: {path_B:.4f}")
print(f"Most Likely Sequence: {'Rain -> Sun' if path_A > path_B else 'Rain -> Rain'}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> How do we "Learn" these transition matrices if we don't know the states? Explore <strong><a href="#/machine-learning/pgm/em-algorithm">The EM Algorithm</a></strong>.
    </div>
  `
};
