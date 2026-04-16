const e={id:"bayesian-networks",title:"Bayesian Networks",description:"A probabilistic graphical model that represents a set of variables and their conditional dependencies via a directed acyclic graph (DAG).",color:"#FF5722",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 PGM · Graphical</div>
      <h1>Bayesian Networks: The Web of Influence</h1>
      <p>Probabilities are rarely isolated. If it's raining, your grass is likely wet. If your grass is wet, you might slip. <strong>Bayesian Networks</strong> are the map of these <strong>Causal Relationships</strong>. By using <strong>Directed Acyclic Graphs (DAGs)</strong>, we can model how information flows through a complex system of uncertainty.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Probabilities are rarely isolated. If it is raining, your grass is likely wet; if your grass is wet, you might slip. <strong>Bayesian Networks</strong> are the map of these causal ripples—the "Web of Influence" that defines complex systems of uncertainty. Using <strong>Directed Acyclic Graphs (DAGs)</strong>, we can model how information flows from one cause to an effect, allowing us to reason about the unseen. It’s a "Glass Box" approach to AI: unlike a black-box neural network, you can trace exactly why the model has reached a conclusion by looking at the logical connections between variables.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Directed Acyclic Factorization & Causal Graphs</div>
      <p>Bayesian Networks are "Reasoning Maps." They take a chaotic set of variables and organize them into a hierarchy of influence and effect.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine the world is a giant web of dominoes. If you shove one, three others might fall. <strong>Bayesian Networks</strong> are the map of these causal ripples. Geometrically, a Bayesian Network is a <strong>Directed Acyclic Graph (DAG)</strong>. Each node is a Random Variable (like "Rain" or "Traffic"), and each directed arrow is a "Vocal Influence." The key is that the arrows never form a loop—causality only flows forward in time and logic. It is a way to factorize a massive, messy reality into a series of local, understandable dependencies.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>A Bayesian Network over a set of variables $\mathbf{X} = \{X_1, \dots, X_n\}$ is defined by a graph and a set of Conditional Probability Distributions (CPDs). The fundamental "Cheat Code" is the <strong>Factorization Rule</strong>:</p>
      <div class="math-block">
        $$P(X_1, \dots, X_n) = \prod_{i=1}^n P(X_i \mid \text{parents}(X_i))$$
      </div>
      <p>Instead of storing an exponential table of every possible combination of $n$ variables, we only store the local probabilities of each node given its direct "Parents." This reduces the complexity from $O(2^n)$ to $O(n \times 2^k)$, where $k$ is the max number of parents. This is the only reason we can model systems with thousands of variables.</p>
      <p>To determine if two variables are independent, we use <strong>d-separation</strong> (directed separation). If all paths between $X$ and $Y$ are "blocked" by evidence at $Z$, then $X$ and $Y$ are conditionally independent given $Z$. This is the mathematical language of "Focusing on the relevant facts."</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Graphical Models, Bayesian Networks are the <strong>Causal Anchors</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Local Markov Property</strong>: A node is "Shielded" from its past. If you know its parents, you don't need to know its grandparents or its cousins to predict its behavior.</li>
        <li><strong>V-Structure (Explaining Away)</strong>: A unique phenomenon where two independent causes (e.g., Burglar and Earthquake) become correlated once you observe their shared effect (e.g., Alarm). Seeing the earthquake "explains away" the need for a burglar.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Structure Learning. Finding the "Best" set of arrows to fit your data is an NP-Hard problem. Usually, we rely on domain experts to draw the map, or we use greedy algorithms that might miss the true "Source of Truth."</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <p>This is the <strong>Chain Rule</strong> for Bayesian Networks. It turns an exponential problem into a manageable one.</p>
      </div>
    </div>

    <h2 id="inference">Inference: Predicting the Unseen</h2>
    
      <h4>Scenario: The Alarm System</h4>
      <p>Variables: [Burglary, Earthquake, Alarm, JohnCalls, MaryCalls]</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Observation:</strong> Mary calls you. (Evidence).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Goal:</strong> Calculate $P(Burglary \mid MaryCalls)$. This is <strong>Inference</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Method:</strong> We use <strong>Variable Elimination</strong> or <strong>Belief Propagation</strong> to "Flow" the probability from the observation back to the cause.</div>
        </div>
      </div>
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Detective's Mental Map</h2>
    
      <h4>Scenario: Explaining Away the Broken Window</h4>
      <p>Imagine a detective finds a broken window in a mansion. There are two potential causes: A <strong>Burglar</strong> or a <strong>Baseball</strong> thrown by a neighborhood kid.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Initial Evidence:</strong> The Window is Broken. The probability of "Burglar" jumps from 1% to 80%. (Cause A is the prime suspect).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>New Discovery:</strong> A baseball is found lying on the floor inside the room.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Explaining Away:</strong> The probability of "Burglar" immediately drops back down to 5%. Why? Because the "Baseball" is a much simpler, logical explanation for the broken window.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Conclusion:</strong> In a Bayesian Network, things that were independent (Burglar vs. Baseball) become <strong>Linked</strong> once you see their shared effects (Broken Window).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Bayesian Networks excel at this kind of <strong>Joint Reasoning</strong>. Unlike a standard Neural Network, you can track the exact flow of evidence and see *why* the model changed its mind. It is "Glass Box" AI.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np

# 1. Priors (Historical frequencies)
p_burglar = 0.01
p_baseball = 0.02

# 2. Conditional Probability of Broken Window (BW)
# P(BW | Burglar, Baseball)
def get_p_bw(burglar, baseball):
    if burglar and baseball: return 0.99
    if burglar: return 0.95
    if baseball: return 0.90
    return 0.001 # Random noise

# 3. Bayes Rule: Suspicion = P(Burglar | BrokenWindow)
# We won't code the full joint sum here, just the logic flow
suspicion_init = (0.95 * p_burglar) / (0.95 * p_burglar + 0.15 * p_baseball) # Mock calc

# 4. Adding 'Baseball' evidence
# suspicion_new = P(Burglar | BW, Baseball)
suspicion_new = (0.99 * p_burglar * p_baseball) / (0.99 * p_burglar * p_baseball + 0.90 * p_baseball)

print(f"P(Burglar | Window): {suspicion_init:.2f}")
print(f"P(Burglar | Window, Baseball): {suspicion_new:.2f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Bayesian Networks are the "Map of Influence." They allow us to reason through complex webs of cause-and-effect, making them far more interpretable than "black-box" neural networks.</p>
    <ul>
      <li><strong>Root Cause Fault Diagnosis</strong>: Large data centers and manufacturing plants use Bayesian networks to find why a system failed. By modeling the causal web of sensors—heat, power consumption, and mechanical vibrations—the model can see a "Heat Spike" and calculate whether it was caused by a "Cooling Failure" or a "CPU Overload." It effectively reasons backward from the symptoms to the source.</li>
      <li><strong>Medical Symptom Influence Mapping</strong>: Doctors use Bayesian networks to predict diseases based on a massive array of potential symptoms. Since different diseases (like the Flu and COVID-19) share many symptoms, the network uses the "Causal Strength" of each connection to decide which diagnosis is most probable given the specific combination of signs found in the patient.</li>
    </ul>
    <p>Teacher's Final Word: Logic is simple; the truth is a web. Bayesian networks are how we turn that messy web of human intuition and physical cause-and-effect into a cold, hard mathematical calculation. They don't just give you an answer; they show you the exact logic of how they got there.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if the arrows follow a sequence in time? Explore <strong><a href="#/machine-learning/pgm/hmm">Hidden Markov Models (HMM)</a></strong>.
    </div>
  `},t={id:"hmm",title:"Hidden Markov Models (HMM)",description:"A statistical Markov model in which the system being modeled is assumed to be a Markov process with unobservable (hidden) states.",color:"#FF5722",html:String.raw`
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
  `},a={id:"em-algorithm",title:"Expectation-Maximization (EM) Algorithm",description:"An iterative method to find maximum likelihood or maximum a posteriori (MAP) estimates of parameters in statistical models, where the model depends on unobserved latent variables.",color:"#FF5722",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 PGM · Inference</div>
      <h1>EM Algorithm: The Chicken & Egg Solver</h1>
      <p>How do you find the <strong>Average Height</strong> of two different species if you don't know <strong>Which Height belongs to Which Species</strong>? You can't find the average without the species, and you can't find the species without the average. This is the "Chicken and Egg" problem of Latent Variables. <strong>Expectation-Maximization (EM)</strong> is the algorithm that guesses its way to the truth.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>How do you find the average height of two different species if you don't know which height measurement belongs to which species? You can't find the average without knowing the group, and you can't find the group without knowing the average. This is the <strong>"Chicken and Egg" problem</strong> of Latent Variables (unseen factors). The <strong>Expectation-Maximization (EM)</strong> algorithm is the iterative engine that solves this by "Soft Guessing." It alternates between filling in the missing labels (Expectation) and optimizing the parameters based on those guesses (Maximization). It is the foundational algorithm for clustering and training complex probabilistic models where the ground truth is hidden from view.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: ELBO Optimization & Coordinate Ascent</div>
      <p>The EM Algorithm is the "Sherlock Holmes" of statistics. It provides a rigorous way to find the truth when the most important clues are missing.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine you are trying to find the highest peak in a mountain range, but it's middle of the night and you can only see 5 feet in front of you. <strong>Expectation-Maximization (EM)</strong> is a two-step climb. Geometrically, it is a <strong>Coordinate Ascent</strong> on a Likelihood surface. Because our data has "Hidden" (Latent) variables, the true peak is hard to see. EM works by building a "Proxy Hill" (a lower bound) at your current location, climbing to its peak, and then building a new hill. It ensures that every step you take is mathematically guaranteed to lead you higher than where you started.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We want to find parameters $\theta$ that maximize the marginal log-likelihood $\mathcal{L}(\theta) = \sum_i \ln P(\mathbf{x}_i \mid \theta)$. But since we have unobserved latent variables $\mathbf{Z}$, the direct maximization is a nightmare. Using <strong>Jensen's Inequality</strong>, we define the <strong>Evidence Lower Bound (ELBO)</strong>:</p>
      <div class="math-block">
        $$\text{ELBO}(Q, \theta) = \mathbb{E}_{Q(\mathbf{Z})} [ \ln P(\mathbf{X}, \mathbf{Z} \mid \theta) ] + \mathbb{H}(Q)$$
      </div>
      <p>The EM algorithm alternates between optimizing $Q$ and optimizing $\theta$:</p>
      <ul class="mt-2 mb-4 space-y-2">
        <li><strong>E-Step (Expectation)</strong>: We set $Q(\mathbf{Z})$ to be the posterior distribution of the missing data: $Q(\mathbf{Z}) = P(\mathbf{Z} \mid \mathbf{X}, \theta^{(t)})$. This "Fills in the blanks" with our best possible guess.</li>
        <li><strong>M-Step (Maximization)</strong>: We find the $\theta$ that maximizes the expected log-likelihood:
          $$\theta^{(t+1)} = \arg \max_\theta \sum_{\mathbf{Z}} P(\mathbf{Z} \mid \mathbf{X}, \theta^{(t)}) \ln P(\mathbf{X}, \mathbf{Z} \mid \theta)$$
        </li>
      </ul>
      <p>Because the M-step maximizes the ELBO, and the E-step makes the ELBO equal to the true likelihood, the algorithm is guaranteed to never decrease the likelihood of your data.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Graphical Models, EM is the <strong>Incomplete Data Solver</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Latent Variables</strong>: These are the "Shadows" (like the species label in GMM or the hidden state in HMM) that we cannot see but must estimate to understand the system.</li>
        <li><strong>Local Convergence</strong>: While EM is guaranteed to go "Up," it is a greedy algorithm. It might get stuck on a small "Hill" and miss the "Mount Everest" of global maximum likelihood.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Initialization Matters. If you start your EM algorithm at a terrible location, it will converge to a terrible answer. Always run EM multiple times with different random start points to make sure you've found the true summit.</p>
    </div>
    
    <h2 id="steps">The 2 Big Steps: E and M</h2>
    
      <h4>How to solve the unsolvable:</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Expectation (E-Step):</strong> Using your current guess for the parameters (\(\theta\)), calculate the <strong>Expected Value</strong> of the hidden variables (\(Z\)). (Fill in the blanks).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Maximization (M-Step):</strong> Now that the blanks are filled, find the <strong>Highest Probability Parameters</strong> (\(\theta\)) to fit the data. (Update the averages).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Convergence:</strong> Keep bouncing between E and M until the parameters stop changing.</div>
        </div>
      </div>
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Blind Schoolteacher</h2>
    
      <h4>Scenario: Sorting 100 Students into Two Voice-Pitch Teams</h4>
      <p>Imagine a blind teacher trying to sort 100 students into two teams: <strong>The High-Pitch Sopranos</strong> and <strong>The Low-Pitch Basses</strong>. The teacher doesn't know who is who.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Initial State:</strong> The teacher makes two random guesses for the 'Average Pitch' of each team. (The Parameters $\theta$).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Expectation (E-Step):</strong> A student speaks. Based on the current guesses, the teacher says: "You sound 80% like a Soprano." This is a <strong>Soft Assignment</strong> (Filling the latent variable).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Maximization (M-Step):</strong> The teacher recalculates the 'Average Pitch' of both teams, giving the student's voice 80% weight to the Soprano average and 20% to the Bass average.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Convergence:</strong> After a few rounds of listening and averaging, the guesses 'float' toward the true averages of the two groups. The "Chicken and Egg" problem is solved.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          EM is for <strong>Incomplete Data</strong>. It handles the problem where you need the parameters to find the labels, and the labels to find the parameters. By iterating between "Filling in the blanks" (E) and "Optimizing the fit" (M), it eventually finds the global truth.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
import numpy as np

# 1. Setup Overlapping Data (True means: -2 and 2)
data = np.concatenate([np.random.normal(-2, 1, 50), np.random.normal(2, 1, 50)])

# 2. Initial Guesses
mu1, mu2 = -0.5, 0.5
sigma = 1.0

# 3. The EM Loop
def gaussian_pdf(x, mu, sig): 
    return np.exp(-0.5*((x-mu)/sig)**2) / (sig * np.sqrt(2*np.pi))

for i in range(10):
    # --- E-Step: Responsibilities ---
    r1 = gaussian_pdf(data, mu1, sigma)
    r2 = gaussian_pdf(data, mu2, sigma)
    total_r = r1 + r2
    r1 /= total_r
    r2 /= total_r
    
    # --- M-Step: Update Means ---
    mu1 = np.sum(r1 * data) / np.sum(r1)
    mu2 = np.sum(r2 * data) / np.sum(r2)

print(f"Final Estimation -> Soprano Mean: {mu1:.2f}, Bass Mean: {mu2:.2f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>The EM algorithm is the "Chicken-and-Egg Negotiator." It allows us to train complex models even when we are missing critical information about the data labels, making it the bedrock of unsupervised and semi-supervised learning.</p>
    <ul>
      <li><strong>Image Segmentation (Object vs. Background)</strong>: When you use a "Background Blur" feature on a video call, an EM-like process is at work. The model doesn't know which pixels are "You" and which are "The Wall." It starts with a guess, identifies the probable regions (E-Step), and then refines the color and edge boundaries of those regions (M-Step) until it has a clean separation between the person and the room.</li>
      <li><strong>Latent Consumer Profile Analysis</strong>: Market researchers use EM to find "Hidden Types" of shoppers in a massive dataset of purchase history. They don't have labels for "Budget Conscious" or "Luxury Buyer." The algorithm iterates through the data, assigning consumers to probable profiles (Expectation) and then updating the characteristics of those profiles (Maximization) until the true market segments emerge from the noise.</li>
    </ul>
    <p>Teacher's Final Word: When you don't know the answer, start with a guess and keep refining it until the math stops arguing with you. EM teaches us that even if the truth is hidden, we can still reach it through the persistence of iterative logic.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have mastered structured probability. Now, explore the high-speed engines that train these models in <strong><a href="#/machine-learning/optimization-ml/gradient-descent">Optimization in ML</a></strong>.
    </div>
  `},i={id:"pgm",title:"Probabilistic & Graphical Models",description:"The marriage of graph theory and probability to model complex conditional dependencies and latent structures.",keyConcepts:[{title:"Network Representation",description:"Directed Acyclic Graphs (DAGs) for modeling influence and causality."},{title:"Sequence Modeling",description:"Markovian transitions and observable symptoms over time."},{title:"Likelihood Inference",description:"Solving 'Chicken and Egg' problems via Expectation-Maximization."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Probabilistic & Graphical Models: <span class="text-accent italic">The Web of Uncertainty</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In Machine Learning, variables are rarely independent. If a person has a cough, it might be the flu. If they have the flu, they might have a fever. <strong>Graphical Models</strong> allow us to map these <strong>Conditional Dependencies</strong> using the language of networks and graphs.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This category covers the core engines of structured probability—how to model causality, how to guess the "Hidden Reality" of sequences, and how to optimize models that depend on unobserved information. 
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "Graphical models are a marriage between probability theory and graph theory. They provide a natural tool for dealing with two problems that occur throughout applied mathematics... uncertainty and complexity."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Michael I. Jordan (1998)</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Start mapping the web of influence.</p>
        <a 
          href="#/machine-learning/pgm/bayesian-networks" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Bayesian Networks
        </a>
      </div>

    </div>
  `,sections:[e,t,a]};export{i as PGM_DATA};
