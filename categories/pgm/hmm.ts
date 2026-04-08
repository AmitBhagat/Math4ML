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

    <h2 id="analogy">The "Invisible Reporter" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Radio Reporter</strong> who is <strong>Blind</strong> but reporting on a <strong>Soccer Game</strong> based only on the <strong>Sound of the Crowd</strong>. 
        The "Hidden State" is the <strong>Game Reality</strong> (Goal, Foul, Dribble). 
        The "Observation" is the <strong>Roar of the Fans</strong>. 
        The Reporter knows that a "Goal" is usually followed by a "Celebration" (Transition). 
        **Hidden Markov Models** are the physics that the reporter uses to describe the game perfectly, even though he can't see it.
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> How do we "Learn" these transition matrices if we don't know the states? Explore <strong><a href="#/machine-learning/pgm/em-algorithm">The EM Algorithm</a></strong>.
    </div>
  `
};
