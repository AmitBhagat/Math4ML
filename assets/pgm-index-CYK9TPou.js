const e={id:"bayesian-networks",title:"Bayesian Networks",description:"A probabilistic graphical model that represents a set of variables and their conditional dependencies via a directed acyclic graph (DAG).",color:"#FF5722",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 PGM · Graphical</div>
      <h1>Bayesian Networks: The Web of Influence</h1>
      <p>Probabilities are rarely isolated. If it's raining, your grass is likely wet. If your grass is wet, you might slip. <strong>Bayesian Networks</strong> are the map of these <strong>Causal Relationships</strong>. By using <strong>Directed Acyclic Graphs (DAGs)</strong>, we can model how information flows through a complex system of uncertainty.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: The DAG Structure</a>
      <a href="#independence">Local Markov Property</a>
      <a href="#math">Joint Probability Factorization</a>
      <a href="#inference">Inference: Predicting the Unseen</a>
      <a href="#analogy">The "Crime Scene" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: The DAG Structure</h2>
    <p>A Bayesian Network consists of <strong>Nodes</strong> (Random Variables) and <strong>Edges</strong> (Direct Influence). The graph must be <strong>Acyclic</strong> (no loops), because a variable cannot be its own cause.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"The Storyboard."</strong> 
        Each node is an event. The arrows tell the story of <strong>Who Influences Whom</strong>. 
        If there is no arrow between two nodes, it doesn't mean they aren't related—it just means they only talk to each other through <strong>intermediaries</strong>.
      </div>
    </div>

    <h2 id="independence">Local Markov Property</h2>
    <p>The "Magic" of Bayesian Networks is the <strong>Conditional Independence</strong> assumption. It states that a node is independent of its ancestors <strong>given its parents</strong>. This allows us to represent a massive joint probability table using just a few small <strong>Conditional Probability Tables (CPTs)</strong>.</p>

    <h2 id="math">Joint Probability Factorization</h2>
    <p>Because of the graph structure, the total probability of the entire system can be decomposed into a simple product:</p>
    <div class="math-block">$$P(x_1, \dots, x_n) = \prod_{i=1}^n P(x_i \mid Parents(x_i))$$</div>
    <p>This is the <strong>Chain Rule</strong> for Bayesian Networks. It turns an exponential problem into a manageable one.</p>

    <h2 id="inference">Inference: Predicting the Unseen</h2>
    <div class="example-box">
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
    </div>

    <h2 id="analogy">The "Crime Scene" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Detective investigating a break-in</strong>. 
        Clues: [Broken Window, Muddy Footprints, Empty Safe]. 
        The detective has a <strong>Mental Map</strong>: A Broken Window could be caused by a Burglar (90%) or a Baseball (10%). 
        **Bayesian Networks** are that mental map in mathematical form. 
        When the detective sees the "Broken Window," the probability of "Burglar" goes up. But if he then sees a "Baseball" on the floor, the probability of "Burglar" might go back down. This is <strong>Explaining Away</strong>—a unique power of graphical models.
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if the arrows follow a sequence in time? Explore <strong><a href="#/machine-learning/pgm/hmm">Hidden Markov Models (HMM)</a></strong>.
    </div>
  `},t={id:"hmm",title:"Hidden Markov Models (HMM)",description:"A statistical Markov model in which the system being modeled is assumed to be a Markov process with unobservable (hidden) states.",color:"#FF5722",html:String.raw`
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
  `},a={id:"em-algorithm",title:"Expectation-Maximization (EM) Algorithm",description:"An iterative method to find maximum likelihood or maximum a posteriori (MAP) estimates of parameters in statistical models, where the model depends on unobserved latent variables.",color:"#FF5722",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 PGM · Inference</div>
      <h1>EM Algorithm: The Chicken & Egg Solver</h1>
      <p>How do you find the <strong>Average Height</strong> of two different species if you don't know <strong>Which Height belongs to Which Species</strong>? You can't find the average without the species, and you can't find the species without the average. This is the "Chicken and Egg" problem of Latent Variables. <strong>Expectation-Maximization (EM)</strong> is the algorithm that guesses its way to the truth.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Latent Variables</a>
      <a href="#math">Jensen's Inequality & Lower Bound</a>
      <a href="#steps">The 2 Big Steps: E and M</a>
      <a href="#convergence">Convergence: Finding the Peak</a>
      <a href="#analogy">The "Blind School" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Latent Variables</h2>
    <p>In many real-world problems, we have <strong>Latent Variables (Z)</strong>—things that exist but aren't in our dataset. If we knew \(Z\), the problem would be simple. If we don't, we have to <strong>Iterate</strong>. EM is the engine that powers Gaussian Mixture Models (GMM) and Hidden Markov Model (HMM) training.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Soft Guessing."</strong> 
        The algorithm doesn't say "Point A *definitely* belongs to Species 1." It says "Point A belongs to Species 1 with <strong>70% probability</strong>." This "Soft" assignment is what allows the algorithm to converge smoothly.
      </div>
    </div>

    <h2 id="math">Jensen's Inequality & Lower Bound</h2>
    <p>Mathematically, we want to maximize the <strong>Log-Likelihood</strong> \(\ell(\theta) = \sum \log P(x \mid \theta)\). But the log of a sum is hard to optimize. EM works by maximizing a <strong>Lower Bound</strong> (The ELBO) on the likelihood. According to **Jensen's Inequality**, the average of the logs is less than or equal to the log of the averages.</p>
    <div class="math-block">$$\log \sum_z P(x, z \mid \theta) \ge \sum_z Q(z) \log \frac{P(x, z \mid \theta)}{Q(z)}$$</div>

    <h2 id="steps">The 2 Big Steps: E and M</h2>
    <div class="example-box">
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
    </div>

    <h2 id="analogy">The "Blind School" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a **Blind Schoolteacher** trying to separate 100 students into **2 Teams (Blue and Red)**. 
        He doesn't know who is who. 
        * **E-Step:** He hears a voice and **Guesses** "That sounds like a 60% chance of being Blue." 
        * **M-Step:** He takes all the "Mostly Blue" students and calculates their **Average Voice Pitch**. 
        * **E-Step again:** He uses the <strong>New Average</strong> to make better guesses. 
        **EM Algorithm** is that teacher. By the end of the day, even though he is blind, he has **perfectly separated the teams.**
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have mastered structured probability. Now, let's learn how to process the raw data for these advanced models in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
    </div>
  `},o={id:"pgm",title:"Probabilistic & Graphical Models",description:"The marriage of graph theory and probability to model complex conditional dependencies and latent structures.",keyConcepts:[{title:"Network Representation",description:"Directed Acyclic Graphs (DAGs) for modeling influence and causality."},{title:"Sequence Modeling",description:"Markovian transitions and observable symptoms over time."},{title:"Likelihood Inference",description:"Solving 'Chicken and Egg' problems via Expectation-Maximization."}],introHtml:String.raw`
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
  `,sections:[e,t,a]};export{o as PGM_DATA};
