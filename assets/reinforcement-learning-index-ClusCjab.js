const e={id:"reinforcement-learning",title:"Reinforcement Learning",description:"Training agents to make sequences of decisions by rewarding desired behaviors and punishing undesired ones.",keyConcepts:[{title:"Agent/Env",description:"The interface between learning mechanism and world."},{title:"Q-Learning",description:"Learning value-based policies for action mapping."}],sections:[{id:"fundamentals",title:"RL Fundamentals",description:"The mathematical framework of Markov Decision Processes (MDPs) and the Agent-Environment interface.",html:String.raw`
        <div class="premium-hero">
          <div class="premium-hero-badge">🎮 ML · Reinforcement</div>
          <h1>RL Fundamentals</h1>
          <p>Reinforcement Learning is about <strong>Decision Making</strong>. Instead of being told what the right answer is, an Agent must explore the world and learn from the rewards it receives.</p>
        </div>

        <h2 id="interface">1. The Agent-Environment Loop</h2>
        <p>This is the heartbeat of RL: at each step, the Agent sees a <strong>State</strong> ($S_t$), takes an <strong>Action</strong> ($A_t$), and receives a <strong>Reward</strong> ($R_{t+1}$) and a new state ($S_{t+1}$).</p>

        <div class="callout tip">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <strong>Core Theory:</strong> This entire process is formalized as a <strong>Markov Decision Process (MDP)</strong>. The key assumption is the <strong>Markov Property</strong>:
            <div class="math-block">$$P(S_{t+1} | S_t, A_t, S_{t-1}, A_{t-1}, \dots) = P(S_{t+1} | S_t, A_t)$$</div>
            In plain English: "The future depends only on the present." Everything you need to know to make the best decision now is contained in your current state.
          </div>
        </div>

        <h2 id="policy">2. Policies and Value Functions</h2>
        <ul>
          <li><strong>Policy ($\pi$):</strong> The agent's strategy—a mapping from states to actions.</li>
          <li><strong>Reward ($G_t$):</strong> The total discounted return the agent expects to receive: $G_t = R_{t+1} + \gamma R_{t+2} + \gamma^2 R_{t+3} + \dots$</li>
        </ul>

        <div class="linking-rule">
          <strong>Next Step:</strong> Now that we have the framework, how does the agent actually calculate the best move? Explore the mathematics of <strong><a href="#/machine-learning/reinforcement-learning/value-iteration">Q-Learning</a></strong>.
        </div>
      `,tags:["MDP","Policies","Rewards"],color:"#3fb950"},{id:"value-iteration",title:"Value-based Logic",description:"Introduction to Q-Learning and the Bellman Equation for optimal decision making.",html:String.raw`
        <div class="premium-hero">
          <div class="premium-hero-badge">📈 ML · Reinforcement</div>
          <h1>Value-based Logic</h1>
          <p>The goal of the agent is to find the <strong>Optimal Policy</strong>. To do this, it needs to solve for the value of being in a certain state and taking a certain action. This is the "Q" in Q-Learning.</p>
        </div>

        <h2 id="bellman">1. The Bellman Equation</h2>
        <p>How do we know the value of a state? It's the reward we get right now plus the value of the <em>best possible</em> state we can reach next.</p>

        <div class="callout tip">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <strong>Core Theory:</strong> The <strong>Bellman Optimality Equation</strong> is the cornerstone of RL. It recursively defines the optimal Q-Value $Q^*(s, a)$:
            <div class="math-block">$$Q^*(s, a) = \mathbb{E}[R_{t+1} + \gamma \max_{a'} Q^*(s', a') | s, a]$$</div>
            This equation tells us that the value of our current choice is the immediate reward plus the discounted reward of the future, assuming we behave perfectly from then on.
          </div>
        </div>

        <h2 id="qlearning">2. Q-Learning Algorithm</h2>
        <p>In practice, the agent doesn't know the world's probabilities. It uses <strong>Temporal Difference (TD)</strong> learning to update its Q-Table every time it takes a step:</p>
        <div class="math-block">$$Q(s, a) \leftarrow Q(s, a) + \alpha [R + \gamma \max_{a'} Q(s', a') - Q(s, a)]$$</div>

        <div class="linking-rule">
          <strong>Next Step:</strong> We've seen how models learn and make decisions. Now let's look at how we prepare the raw data for them in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
        </div>
      `,tags:["Q-Learning","Bellman","Temporal Difference"],color:"#3fb950"}]};export{e as REINFORCEMENT_LEARNING_DATA};
