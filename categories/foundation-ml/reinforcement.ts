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

    <h2 id="example">Illustrated Example: The Blindfolded Mario</h2>
    <div class="example-box">
      <h4>Scenario: Crashing through Level 1-1</h4>
      <p>Imagine you are playing Super Mario Bros. for the first time, but you are <strong>blindfolded</strong>. You only have a speaker that beeps.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Action:</strong> You press 'Right' (Action). You hear a 'Ding' (Positive Reward). You learn that 'Right' is good.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Consequence:</strong> You press 'Right' again and hear a 'Death' sound (Negative Reward). You look back and see you hit a Goomba.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Policy:</strong> Next time you reach that spot, your "Policy" tells you to 'Jump' instead of just 'Right'. You've learned through the pain of mistakes.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> RL is <strong>Action-Focused</strong>. The goal isn't to predict a label, it's to find the sequence of moves that scores the most points.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Simple Q-Learning</h2>
    <python-code static-output="[Training] Agent is learning the optimal path...\nOptimal Q-Table (State: Best Action):\nState 0: GO RIGHT\nState 1: GO RIGHT\nState 2: GO RIGHT\nFinal Reward Reached!">
import numpy as np

# A simple 1D Grid World: [S] - [ ] - [ ] - [Goal (+1 reward)]
# States: 0, 1, 2, 3 (Goal)
# Actions: 0 (Left), 1 (Right)
q_table = np.zeros((4, 2)) 
gamma = 0.9 # Discount factor (care about future rewards)
alpha = 0.5 # Learning rate

# Simulate a few rewards at the goal
for _ in range(100):
    state = 0
    while state < 3:
        action = 1 # Always go right for this demo
        next_state = state + 1
        reward = 1 if next_state == 3 else 0
        
        # Bellman Equation Update
        old_val = q_table[state, action]
        next_max = np.max(q_table[next_state])
        q_table[state, action] = old_val + alpha * (reward + gamma * next_max - old_val)
        state = next_state

print("Optimal Q-Table (State: Action Value):")
for i in range(3):
    action = "RIGHT" if q_table[i, 1] > q_table[i, 0] else "LEFT"
    print(f"State {i}: Best Action is {action}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Before we start training, we need to know how to measure our progress. Explore <strong><a href="#/machine-learning/foundation-ml/train-test-split">Training vs. Testing Data</a></strong>.
    </div>
  `
};
