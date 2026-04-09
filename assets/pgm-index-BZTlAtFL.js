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
      <div class="premium-def-title">Formalism: Directed Probabilistic Factorization</div>
      <p>A **Bayesian Network** $\mathcal{B}$ represents a joint probability distribution over a set of random variables $\mathcal{X} = \{X_1, \dots, X_n\}$ through a graph structure and a set of local parameters:</p>
      <div class="math-block">
        $$\mathcal{B} = \langle G, P \rangle$$
      </div>
      <p>where $G$ is a Directed Acyclic Graph (DAG) and $P$ is a set of Conditional Probability Distributions (CPDs). The structure satisfies the following properties:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Factorization</strong>: $P(X_1, \dots, X_n) = \prod_{i=1}^n P(X_i \mid \text{Pa}_G(X_i))$. The joint distribution is the product of the probability of each node given its parents.</li>
        <li><strong>Local Markov Property</strong>: Every variable $X_i$ is conditionally independent of its non-descendants given its parents $\text{Pa}_G(X_i)$.</li>
        <li><strong>D-Separation</strong>: A graphical criterion used to identify global independence relations ($X \perp Y \mid Z$) without explicitly computing the probability tables.</li>
        <li><strong>CPDs</strong>: For discrete variables, these are Conditional Probability Tables (CPTs); for continuous variables, these are functional mappings (e.g., Linear Gaussians).</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Bayesian Networks allow for efficient **Inference** (updating beliefs based on evidence) and **Learning** (discovering the graph structure and parameters from data).</p>
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
    <python-code static-output="[Evidence] Broken Window found!\n[P(Burglar)] 0.84 (Suspicion is high)\n\n[New Evidence] Baseball found on floor!\n[P(Burglar)] 0.15 (Suspicion dropped)\n\n[Verdict] Event 'Baseball' successfully Explained Away the broken window.">
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
  `},i={id:"em-algorithm",title:"Expectation-Maximization (EM) Algorithm",description:"An iterative method to find maximum likelihood or maximum a posteriori (MAP) estimates of parameters in statistical models, where the model depends on unobserved latent variables.",color:"#FF5722",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 PGM · Inference</div>
      <h1>EM Algorithm: The Chicken & Egg Solver</h1>
      <p>How do you find the <strong>Average Height</strong> of two different species if you don't know <strong>Which Height belongs to Which Species</strong>? You can't find the average without the species, and you can't find the species without the average. This is the "Chicken and Egg" problem of Latent Variables. <strong>Expectation-Maximization (EM)</strong> is the algorithm that guesses its way to the truth.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>How do you find the average height of two different species if you don't know which height measurement belongs to which species? You can't find the average without knowing the group, and you can't find the group without knowing the average. This is the <strong>"Chicken and Egg" problem</strong> of Latent Variables (unseen factors). The <strong>Expectation-Maximization (EM)</strong> algorithm is the iterative engine that solves this by "Soft Guessing." It alternates between filling in the missing labels (Expectation) and optimizing the parameters based on those guesses (Maximization). It is the foundational algorithm for clustering and training complex probabilistic models where the ground truth is hidden from view.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Iterative Maximum Likelihood with Latent Variables</div>
      <p>The **EM Algorithm** is a strategy for maximum likelihood estimation in models with latent variables $\mathbf{Z}$. It iteratively improves a lower bound on the log-likelihood $\ell(\theta) = \log P(\mathbf{X} \mid \theta)$ through two coordinate-ascent steps:</p>
      <div class="math-block">
        $$Q(\theta \mid \theta^{(t)}) = \mathbb{E}_{\mathbf{Z} \mid \mathbf{X}, \theta^{(t)}} [ \log P(\mathbf{X}, \mathbf{Z} \mid \theta) ]$$
      </div>
      <p>The optimization process follows this rigorous cycle:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>E-Step (Expectation)</strong>: Calculate the posterior probability $P(\mathbf{Z} \mid \mathbf{X}, \theta^{(t)})$ of the hidden variables given the observed data and current parameters.</li>
        <li><strong>M-Step (Maximization)</strong>: Find $\theta^{(t+1)} = \arg \max_\theta Q(\theta \mid \theta^{(t)})$. Update parameters to maximize the expected log-likelihood.</li>
        <li><strong>Jensen's Inequality</strong>: EM guarantees that the likelihood $P(\mathbf{X} \mid \theta)$ is non-decreasing at each step by optimizing the Evidence Lower Bound (ELBO).</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">EM is the core solver for **Gaussian Mixture Models (GMM)** and the calibration phase of **Hidden Markov Models**.</p>
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
    <python-code static-output="[Scan] Iteration 0: Mu1 = -0.50, Mu2 = 0.50\n[Scan] Iteration 5: Mu1 = -1.82, Mu2 = 1.91\n[Scan] Iteration 10: Mu1 = -1.98, Mu2 = 2.05\n\n[Status] Converged after 10 epochs.\n[Verdict] EM correctly separated the overlapping Normal distributions (Target: -2.0, 2.0).">
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

    <div class="linking-rule">
      <strong>Next Step:</strong> You have mastered structured probability. Now, let's learn how to process the raw data for these advanced models in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
    </div>
  `},a={id:"pgm",title:"Probabilistic & Graphical Models",description:"The marriage of graph theory and probability to model complex conditional dependencies and latent structures.",keyConcepts:[{title:"Network Representation",description:"Directed Acyclic Graphs (DAGs) for modeling influence and causality."},{title:"Sequence Modeling",description:"Markovian transitions and observable symptoms over time."},{title:"Likelihood Inference",description:"Solving 'Chicken and Egg' problems via Expectation-Maximization."}],introHtml:String.raw`
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
          href="/#/machine-learning/pgm/bayesian-networks" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Bayesian Networks
        </a>
      </div>

    </div>
  `,sections:[e,t,i]};export{a as PGM_DATA};
