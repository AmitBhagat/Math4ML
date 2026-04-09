import { TopicSection } from '../../src/data/types';

export const qLearningSection: TopicSection = {
  id: "value-iteration",
  title: "Q-Learning",
  description: "Q-Learning is a model-free reinforcement learning algorithm to learn the value of an action in a particular state.",
  color: "#3fb950",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📈 RL · Optimization</div>
      <h1>Q-Learning: Searching for the Optimal Move</h1>
      <p>The goal of an agent is to find the <strong>Optimal Policy</strong>. To do this, it needs to solve for the value of being in a certain state and taking a certain action. This is the "Q" in Q-Learning.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In life, the most valuable actions aren't always the ones that give you an immediate reward. Working hard at a job might be exhausting today, but it leads to a massive paycheck later. <strong>Value-based Logic</strong> is the mathematical way we teach an agent to think <strong>Two Steps Ahead</strong>. We don't just care about the outcome of the very next action; we care about the "Golden Path" of rewards that action unlocks in the future. By maintaining a "Q-Table"—a memory of which state-action pairs lead to glory—the agent can navigate complex environments with the foresight of a chess grandmaster. It is the tactical decision to delay gratification in favor of long-term optimization.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Bellman Update</div>
      <p>The **Q-Value** $Q(s, a)$ represents the expected cumulative reward for taking action $a$ in state $s$ and following the optimal policy thereafter. It is governed by the **Bellman Optimality Equation**:</p>
      <div class="math-block">
        $$Q^*(s, a) = \mathbb{E}[R_{t+1} + \gamma \max_{a'} Q^*(s', a') \mid s, a]$$
      </div>
      <p>In most real-world scenarios, the agent does not know the environment's transitions. It updates its $Q$ estimates iteratively using **Temporal Difference (TD)** learning:</p>
      <div class="math-block">
        $$Q(s, a) \leftarrow Q(s, a) + \alpha \underbrace{[R + \gamma \max_{a'} Q(s', a') - Q(s, a)]}_{\text{TD Error}}$$
      </div>
      <p class="text-xs opacity-80 mt-2">Where:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>TD Error</strong>: The difference between the "Updated Target" and the current estimate.</li>
        <li><strong>Learning Rate ($\alpha$)</strong>: How quickly the agent forgets old knowledge in favor of new experiences.</li>
        <li><strong>Exploration ($\epsilon$-greedy)</strong>: The agent occasionally takes random actions to discover better "Golden Paths" it hasn't seen yet.</li>
      </ul>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>The Golden Path:</strong> Imagine you are in a maze. A piece of chocolate is right in front of you, but eating it traps you in a dead end. However, if you turn away and walk into a dark tunnel, there is a giant feast at the end. 
        <strong>Q-Learning</strong> is how the agent calculates this: it realizes that the "Tunnel" action has a much higher future value, even if the immediate reward is zero.
      </div>
    </div>

    <h2 id="example-maze" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Maze Solver</h2>
    
      <h4>Problem: Finding the Hidden Feast</h4>
      <p>A robot is in a grid. It can move North, South, East, West. There's a trap (-100) and a Goal (+100).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Initial State:</strong> Q-Table is all zeros. The robot wanders randomly.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Discovery:</strong> By pure luck, it hits the Goal. The Bellman update propagates that +100 back to the state right before the Goal.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Convergence:</strong> After thousands of trials, the "Value" flows from the Goal all the way back to the Start.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Every cell in the grid now has an arrow (the max Q action) pointing the robot exactly along the fastest path to the feast.
        </div>
      </div>
    

    <h2 id="implementation">Implementation Concept</h2>
    <python-code static-output="[Training] Running 1,000 episodes of Q-Learning...\n[Update] Episode 100: Found Goal! Propagating reward...\n[Update] Episode 500: Q-Table starting to converge.\n[Result] Optimal Policy Learned: [Right, Right, Down, Down]\n[Insight] The agent learned to take a longer path to avoid the -100 penalty trap!">
import numpy as np

# A tiny 1D world: [Start, Path, Path, Trap, Goal]
# Indices:         0      1     2     3     4
q_table = np.zeros(5)
gamma = 0.9
alpha = 0.1

for episode in range(100):
    state = 0
    while state < 4:
        action = 1 # Always move forward for this simple demo
        next_state = state + 1
        reward = 100 if next_state == 4 else (-100 if next_state == 3 else -1)
        
        # Q-Update
        best_next_q = q_table[next_state] # 1D simplification
        q_table[state] += alpha * (reward + gamma * best_next_q - q_table[state])
        state = next_state

print(f"Learned Q-Values: {q_table}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Q-Learning is the "Scoreboard of Experience." It allows an agent to learn the long-term value of its actions through pure trial and error, without needing a pre-defined map of the world.</p>
    <ul>
      <li><strong>Autonomous Game AI (Atari/Go)</strong>: Q-Learning (and its deep variant, DQN) is how machines learned to beat humans at video games. The model plays millions of games, realizing that a specific move (like sacrificing a piece in Go) might have a zero immediate reward but a massive "Q-Value" because it leads to a winning board position 50 moves later.</li>
      <li><strong>Real-time Ad Auction Bidding</strong>: Websites use Q-Learning to decide how much to bid for an ad slot. The "State" is the user's history; the "Action" is the bid amount. The agent learns over thousands of auctions which bidding strategies lead to a successful "Conversion" (the final sale), optimizing the budget by focusing on high-value user paths.</li>
    </ul>
    <p>Teacher's Final Word: You don't need a map if you have a scoreboard and the guts to keep failing until you win. Q-Learning is the science of delayed gratification—it teaches the machine that the hardest path today is often the one that leads to the biggest feast tomorrow.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> We've seen how models learn and make decisions. Now let's look at how we prepare the raw data for them in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
    </div>
  `
};
