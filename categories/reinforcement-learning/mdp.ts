import { TopicSection } from '../../src/data/types';

export const mdpSection: TopicSection = {
  id: "fundamentals",
  title: "Markov Decision Processes (MDP)",
  description: "MDP is the mathematical framework for modeling decision-making in situations where outcomes are partly random and partly under the control of a decision maker.",
  color: "#3fb950",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎮 RL · Foundations</div>
      <h1>MDP: The Framework of Choice</h1>
      <p>Reinforcement Learning is about <strong>Decision Making</strong>. Instead of being told what the right answer is, an Agent must explore the world and learn from the rewards it receives. Every choice is a gamble on the future.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In standard supervised learning, we are like a student being shown the correct answer for every single problem. But <strong>Reinforcement Learning (RL)</strong> is how we learn in the real, messy world: by trial and error. Imagine trying to train a puppy or playing a video game for the first time without instructions. You take an action, and you either get a "Treat" (Reward) or you "Game Over" (Punishment). RL is the mathematical science of <strong>Sequential Decision Making</strong>. the agent must navigate an environment, balancing the urge to explore new paths with the need to exploit the rewards it already knows. It is the tactical framework for turning a series of chaotic interactions into a long-term winning strategy.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The MDP 5-tuple</div>
      <p>A **Markov Decision Process (MDP)** is defined by the tuple $(\mathcal{S}, \mathcal{A}, \mathcal{P}, \mathcal{R}, \gamma)$, where the process satisfies the **Markov Property**: the future state depends only on the current state and action, not on the historical path:</p>
      <div class="math-block">
        $$P(S_{t+1} | S_t, A_t, S_{t-1}, A_{t-1}, \dots) = P(S_{t+1} | S_t, A_t)$$
      </div>
      <p>The components of the learning environment are:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>State Space ($\mathcal{S}$)</strong>: The set of all possible situations the agent can be in.</li>
        <li><strong>Action Space ($\mathcal{A}$)</strong>: The set of all possible moves the agent can take.</li>
        <li><strong>Transition Probability ($\mathcal{P}$)</strong>: The probability $P(s' | s, a)$ of landing in state $s'$ after taking action $a$ in state $s$.</li>
        <li><strong>Reward Function ($\mathcal{R}$)</strong>: The immediate feedback $R(s, a)$ provided by the environment.</li>
        <li><strong>Discount Factor ($\gamma$)</strong>: A value in $[0, 1)$ that determines the present value of future rewards.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">The agent's objective is to find a **Policy** $\pi(s)$ that maximizes the expected cumulative discounted Reward (the Return).</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>The Training of a Puppy:</strong> Think of the agent as a dog and the environment as the park. Every "Good Boy!" is a positive reward that strengthens a specific behavior, while being ignored is a neutral or negative signal. 
        The agent doesn't need to remember every squirrel it chased an hour ago; it only needs to know where it is standing and what its options are right now.
      </div>
    </div>

    <h2 id="example-dog" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Training for Retrieval</h2>
    
      <h4>Problem: Optimizing the 'Fetch' Loop</h4>
      <p>Environment: A park. Agent: Puppy. State: [At owner, Ball thrown, At ball].</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>State ($S$):</strong> Puppy is "At ball".</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Action ($A$):</strong> Puppy chooses "Pick up ball" instead of "Bark at bird".</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Reward ($R$):</strong> Fetching the ball leads to a treat ($+10$), barking leads to nothing ($0$).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Over time, the puppy updates its internal <strong>Policy</strong> to prioritize "Picking up ball" because it maximizes the long-term treat count.
        </div>
      </div>
    

    <h2 id="implementation">Implementation Concept</h2>
    <python-code>
import numpy as np

class SimpleEnv:
    def __init__(self):
        self.state = 0
        self.goal = 5
        
    def step(self, action):
        # Action 0: Stay, Action 1: Move Forward
        if action == 1:
            self.state += 1
        
        reward = 10 if self.state == self.goal else -1
        done = self.state == self.goal
        return self.state, reward, done

env = SimpleEnv()
print(f"Starting at state {env.state}")
state, reward, done = env.step(1)
print(f"Action taken. New State: {state}, Reward: {reward}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>The Markov Decision Process is the "Blueprint of Choice." It is a mathematical way to map every current situation and possible action to a future reward, allowing an agent to plan for the long term.</p>
    <ul>
      <li><strong>Supply Chain Inventory Optimization</strong>: Global retailers use MDPs to decide exactly how much stock to order. The "State" is the current inventory and warehouses; the "Action" is the order quantity; and the "Probability" accounts for the uncertain future customer demand. By solving the MDP, the company minimizes the cost of overstacking while ensuring they never run out of a popular item.</li>
      <li><strong>Smart Building HVAC Control</strong>: To reduce energy bills, smart thermostats use MDPs to control heating and cooling. The system looks at the current room temperature and the weather forecast (the state) and decides whether to blast the AC now or let the building cool naturally (the action). The MDP ensures the building stays comfortable while using the least amount of electricity possible.</li>
    </ul>
    <p>Teacher's Final Word: Life is a series of state transitions. MDPs give us the mathematical roadmap to navigate them profitably. They teach the machine that it doesn't matter how you got here—what matters is where you are now and where you want to go next.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Now that we have the framework, how does the agent actually calculate the best move? Explore the mathematics of <strong><a href="#/machine-learning/reinforcement-learning/value-iteration">Q-Learning</a></strong>.
    </div>
  `
};

