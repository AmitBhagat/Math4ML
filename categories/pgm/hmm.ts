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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A <strong>Hidden Markov Model (HMM)</strong> is the Sherlock Holmes of time-series data. It is designed for situations where you can see the "Symptoms" but not the "Reality" that caused them. Imagine you are a prisoner in a windowless basement; you can't see the weather (the Hidden State), but you see your guard walk in every day with or without an umbrella (the Observation). By modeling the transition between hidden states (is it likely to be sunny tomorrow if it rained today?) and the emission of observations (how likely is an umbrella if it’s raining?), HMMs allow us to deduce the hidden truth. It is the gold standard for Speech Recognition, DNA sequencing, and any domain where we must infer an invisible process from visible clues.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Latent Sequence Model</div>
      <p>A **Hidden Markov Model (HMM)** is defined by a 5-tuple $\lambda = (S, V, A, B, \pi)$ representing a system where the state sequence $\{q_1, q_2, \dots, q_T\}$ is unobservable (latent) and must be inferred from a sequence of observations $\{O_1, O_2, \dots, O_T\}$:</p>
      <div class="math-block">
        $$P(\mathbf{O}, \mathbf{q} \mid \lambda) = \pi_{q_1} b_{q_1}(O_1) \prod_{t=2}^T a_{q_{t-1}q_t} b_{q_t}(O_t)$$
      </div>
      <p>The model’s behavior is strictly governed by three fundamental parameter sets:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Transition Matrix ($A$)</strong>: $a_{ij} = P(q_{t+1} = S_j \mid q_t = S_i)$. Encodes the dynamics of the hidden reality over time.</li>
        <li><strong>Emission Matrix ($B$)</strong>: $b_j(k) = P(O_t = v_k \mid q_t = S_j)$. Encodes the probability of producing a specific observation from a specific hidden state.</li>
        <li><strong>Initial Distribution ($\pi$)</strong>: $\pi_i = P(q_1 = S_i)$. The starting probability vector for the hidden states.</li>
        <li><strong>Markov Property</strong>: The next state $q_{t+1}$ depends only on the current state $q_t$, not on the entire history.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">HMMs are operationalized via the **Forward-Backward** algorithm (Likelihood), the **Viterbi** algorithm (Decoding), and the **Baum-Welch** algorithm (Learning).</p>
    </div>
    
    <h2 id="viterbi">The Viterbi Search: Finding the Sequence</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Prisoner in the Basement</h2>
    
      <h4>Scenario: Guessing the Weather from the Guard's Gear</h4>
      <p>Imagine you are a prisoner in a windowless room. You want to know if it's Raining or Sunny outside, but you only see your guard once a day.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Hidden States:</strong> The actual Weather (Rain or Sun). You can't see it directly. (Latent variables).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Observations:</strong> Your Guard walks by. Sometimes he has an <strong>Umbrella</strong>, sometimes he has <strong>Sunshades</strong>. (Emission).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Transitions:</strong> If it's Raining today, there's a 70% chance it will still be Raining tomorrow. This is the <strong>Markov Property</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>The Decoding (Viterbi):</strong> You see [Umbrella, Umbrella, Sunshades]. You calculate the <strong>Most Likely Path</strong> and conclude: "It rained for two days, and then the sun came out."</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          HMMs are the <strong>Sherlock Holmes of Time</strong>. They look at the "Clues" (Observations) to deduce the "Truth" (Hidden States) that caused them. This makes them perfect for Speech (Sound waves -> Typed words) or Bio-informatics (Protein sequence -> Function).
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
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

