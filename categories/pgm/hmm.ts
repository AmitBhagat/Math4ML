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
      <div class="premium-def-title">Formalism: The Latent Sequence Trellis</div>
      <p>HMMs are "Sequential Decoders." They allow us to see through the noise of observations to find the hidden logic governing a system.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine you are locked in a room and you hear a sequence of footsteps. You don't know who is walking (the Hidden States), but you can hear the distinct sound of their shoes (the Observations). <strong>Hidden Markov Models (HMMs)</strong> are the math of decoding that mystery. Geometrically, an HMM is a <strong>Trellis Diagram</strong>—a layered graph where each layer is a time step and each node is a possible reality. The "Truth" is a single path winding through this trellis. By calculating the "Weight" of each edge and node, we can find the <strong>Viterbi Path</strong>—the most probable trajectory that explains the sounds you heard.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>An HMM is defined by a 5-tuple $(S, V, A, B, \pi)$. The key components that define the "Story" are:</p>
      <ul class="mt-2 mb-4 space-y-2">
        <li><strong>Transition Matrix ($A$)</strong>: $A_{ij} = P(s_t = j \mid s_{t-1} = i)$. The probability of shifting from one hidden state to another (e.g., from "Rain" to "Sun").</li>
        <li><strong>Emission Matrix ($B$)</strong>: $B_{jk} = P(o_t = k \mid s_t = j)$. The probability of "Seeing" a specific clue given a hidden state (e.g., an "Umbrella" given "Rain").</li>
        <li><strong>Initial State ($\pi$)</strong>: Where the story begins.</li>
      </ul>
      <p>We solve the HMM by answering three fundamental questions:</p>
      <ol class="mt-2 mb-4 list-decimal pl-5 space-y-1">
        <li><strong>Evaluation</strong>: How likely is this specific sequence of clues? (Solved via the <strong>Forward Algorithm</strong>).</li>
        <li><strong>Decoding</strong>: What is the most likely "Hidden Path"? (Solved via the <strong>Viterbi Algorithm</strong>).</li>
        <li><strong>Learning</strong>: How do we learn the matrices $A$ and $B$ from raw data? (Solved via <strong>Baum-Welch/EM</strong>).</li>
      </ol>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Sequential Modeling, HMMs are the <strong>State-Space Decipherers</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Markov Property</strong>: The next hidden state depends only on the current one. It is a "Memoryless" system where the future is independent of the distant past once you know the present.</li>
        <li><strong>Stationarity</strong>: We assume the rules of the game (the matrices $A$ and $B$) don't change over time. Rain is just as likely to cause an umbrella on day 1 as on day 100.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Underflow. Because we are multiplying hundreds of small probabilities together, the resulting numbers become so tiny that computers can't store them. In practice, we always work in <strong>Log-Space</strong> (adding logs instead of multiplying decimals) to prevent the math from disappearing into zero.</p>
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
    <python-code>
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

    <h2 id="applications">Applications in ML</h2>
    <p>Hidden Markov Models are the "Time-Traveler's Logic." They allow us to deduce the hidden truth from a sequence of visible clues, making them essential for understanding anything that unfolds over time.</p>
    <ul>
      <li><strong>Speech-to-Text Transcription</strong>: When you talk to Siri or Alexa, the "Hidden States" are the words you intended to say, and the "Observations" are the raw sound waves recorded by the microphone. The HMM calculates the most likely sequence of words that would have produced those exact sound frequencies, accounting for the grammatical transitions (the probability of one word following another).</li>
      <li><strong>Bioinformatics Gene Profiling</strong>: Scientists use HMMs to find genes in a long string of DNA. The "Hidden States" are the functional roles of the DNA (e.g., protein-coding vs. non-coding), and the "Observations" are the sequence of bases (A, C, G, T). The model "decodes" the invisible biological map of the genome by analyzing the observed sequence structures.</li>
    </ul>
    <p>Teacher's Final Word: Just because you can't see the truth doesn't mean you can't calculate its shadow. HMMs teach us that a sequence of clues is just as good as a direct observation if you have the math to connect the dots across time.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> How do we "Learn" these transition matrices if we don't know the states? Explore <strong><a href="#/machine-learning/pgm/em-algorithm">The EM Algorithm</a></strong>.
    </div>
  `
};



