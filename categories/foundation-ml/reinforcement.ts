import { TopicSection } from '../../src/data/types';

export const reinforcementLearningSection: TopicSection = {
  id: "reinforcement",
  title: "Reinforcement Learning",
  description: "Reinforcement Learning is a type of Machine Learning that trains agents to make sequences of decisions to maximize a cumulative reward.",
  color: "#F44336",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · RL</div>
      <h1>Reinforcement Learning: The Game Player</h1>
      <p><strong>Reinforcement Learning (RL)</strong> is the most "Human" type of Machine Learning. There is no training data. The machine (the <strong>Agent</strong>) is dropped into an environment and told: "Good luck. If you do this, I'll give you a cookie. If you do that, you'll fall into a pit." The agent learns to survive by <strong>Trial and Error</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: States, Actions, Rewards</a>
      <a href="#exploitation">Exploration vs. Exploitation</a>
      <a href="#example">AlphaZero and Game Logic</a>
      <a href="#analogy">The "Video Game" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: States, Actions, Rewards</h2>
    <p>RL is modeled as a <strong>Markov Decision Process (MDP)</strong>. At each time step \(t\), the agent is in a <strong>State</strong> (\(S_t\)). It takes an <strong>Action</strong> (\(A_t\)) and receives a <strong>Reward</strong> (\(R_{t+1}\)) while moving to a new <strong>State</strong> (\(S_{t+1}\)).</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Learning to Ride a Bike."</strong> 
        You don't have a labeled dataset of "Sitting on a bike." You have to <strong>Try</strong>. 
        You tilt too far left (Action) and fall (Penalty). You tilt slightly right (Action) and stay upright (Reward). The "Policy" your brain builds is just a mapping of how to move your body to stay balanced.
      </div>
    </div>

    <h2 id="exploitation">Exploration vs. Exploitation</h2>
    <p>This is the fundamental struggle of RL. Should the agent try a new, unknown action to find a potentially bigger reward (<strong>Exploration</strong>), or should it stick with the best action it has found so far (<strong>Exploitation</strong>)?</p>
    
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are at your <strong>Favorite Restaurant</strong>. 
        Do you order the same burger you know is good (Exploitation), or do you try the "Daily Special" that might be a disaster or the best thing you've ever tasted (Exploration)? A good RL agent does a bit of both.
      </div>
    </div>

    <h2 id="example">AlphaZero and Game Logic</h2>
    <div class="example-box">
      <h4>Scenario: Learning Chess from Scratch</h4>
      <p>AlphaZero was given the rules of Chess but <strong>no human strategies</strong>. It played millions of games against itself.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Loop:</strong> Lose a game (Penalty of -1) -> Look back at which "Move" led to the loss -> Change the weight of that move.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Result:</strong> After just 4 hours of self-play, it became the strongest chess player in history, discovering "Sacrifices" and "Strategies" that humans hadn't thought of in 1,000 years.</div>
        </div>
      </div>
    </div>

    <h2 id="analogy">The "Video Game" Analogy</h2>
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> It is like a <strong>Blindfolded Mario</strong> player. 
        Mario runs forward, hits a wall (Penalty), jumps, hits a coin (Reward). He has no idea what a "Goomba" or a "Pipe" is—he just knows that certain sequences of "Button Presses" lead to a higher score.
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> Before we start training, we need to know how to measure our progress. Explore <strong><a href="#/machine-learning/foundation-ml/train-test-split">Training vs. Testing Data</a></strong>.
    </div>
  `
};
