import { TopicSection } from '../../src/data/types';

export const bayesTheoremSection: TopicSection = {
  id: "bayes-theorem",
  title: "Bayes Theorem",
  description: "Bayes Theorem is the ultimate tool for Updating Beliefs in the face of new evidence. It allows us to calculate the probability of a cause given its effect.",
  color: "#FF6F00",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Bayesian Inference</div>
      <h1>Bayes' Theorem: The Logic of Science</h1>
      <p><strong>Bayes' Theorem</strong> (\(P(A|B)\)) is a mathematical formula used to determine the probability of an event based on prior knowledge of conditions that might be related to the event. In Machine Learning, it's the core of everything from <strong>Naive Bayes Classifiers</strong> to <strong>Bayesian Neural Networks</strong>.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Calculating the "Forward" probability (Probability of Effect given Cause) is usually easy, like guessing if it will rain given a dark cloud. But in AI, we want to go <strong>backward</strong>: "Given this input data (Effect), what's the most likely model (Cause)?" Bayes' Theorem is the Bridge that lets us flip these conditional probabilities. It combines what you knew <strong>before</strong> (Prior) with what you see <strong>now</strong> (Evidence) to give you a <strong>Posterior</strong> belief. It is the mathematical engine of "Self-Correction"—it tells us exactly how much to update our worldview when new facts hit the table. Without it, machines couldn't learn from experience; they would just be static calculators.</p>
    
    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Bayesian Inference & Posterior Update</div>
      <p>Bayes' Theorem provides a rigorous method for updating the probability of a hypothesis $\theta$ relative to observed data $\mathcal{D}$. It is the foundation of structural and parameter uncertainty in machine learning.</p>
      
      <p>The posterior probability is given by the relationship:</p>
      <div class="math-block">
        $$P(\theta \mid \mathcal{D}) = \frac{P(\mathcal{D} \mid \theta) P(\theta)}{P(\mathcal{D})}$$
      </div>

      <p>Where the components are characterized as follows:</p>
      <ul class="mt-2 space-y-1">
        <li><strong>Posterior ($P(\theta \mid \mathcal{D})$)</strong>: The probability that the hypothesis $\theta$ is true *after* considering data $\mathcal{D}$.</li>
        <li><strong>Likelihood ($P(\mathcal{D} \mid \theta)$)</strong>: The probability that the data $\mathcal{D}$ would have been observed given that $\theta$ is true.</li>
        <li><strong>Prior ($P(\theta)$)</strong>: The probability of $\theta$ before receiving any data, representing initial beliefs or domain knowledge.</li>
        <li><strong>Evidence ($P(\mathcal{D})$)</strong>: The marginal probability of the data, acting as a normalization constant: $P(\mathcal{D}) = \sum_{\theta'} P(\mathcal{D} \mid \theta') P(\theta')$.</li>
      </ul>
      
      <p class="mt-2">Bayes' Theorem is the mathematical prerequisite for **Naive Bayes Classifiers**, **Bayesian Optimization**, and **Gaussian Processes**.</p>
    </div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Bayes' Theorem as a <strong>"Scientific Tuning Machine"</strong> or a <strong>"Bullshit Detector."</strong> 
        You start with a guess (the Prior: "I think this email might be spam"). 
        You see some evidence (the Data: "It contains the word 'FREE' in all caps"). 
        Bayes' Theorem tells you exactly how much to "correct" your initial guess to arrive at the <strong>Truth</strong> (the Posterior). 
        It is the fundamental rule for how a machine "Learns" from experience. 
        It forces the model to balance its existing knowledge with the cold, hard facts of the new data, preventing it from jumping to conclusions too quickly or ignoring new evidence entirely.
      </div>
    </div>

    <h2 id="example-spam" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Spam Filter (Prior/Posterior)</h2>
    
      <h4>Problem: Identifying Junk Emails</h4>
      <p>10% of emails are Spam. 80% of Spam contains the word "Free." Only 1% of ham (good emails) contains "Free." If an email has "Free," is it spam?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> \(P(S) = 0.1, P(F|S) = 0.8, P(F|H) = 0.01\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Filter:</strong> \(P(\text{Spam} | \text{Free}) = \frac{P(\text{Free}|\text{Spam}) P(\text{Spam})}{P(\text{Free})}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Calculate:</strong> \(\frac{0.8 \times 0.1}{ (0.8 \times 0.1) + (0.01 \times 0.9) } = \frac{0.08}{0.089} \approx 0.89\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Your belief that the email is spam shot up from <strong>10%</strong> to <strong>89%</strong> just by seeing one word. This is how basic Spam filters function.
        </div>
      </div>
    

    <h2 id="example-monty" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Monty Hall Problem</h2>
    
      <h4>Problem: Updating Knowledge with Evidence</h4>
      <p>You choose Door #1. The host opens Door #3 (Evidence). Should you switch to Door #2?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Initial:</strong> \(P(1)=1/3, P(2)=1/3, P(3)=1/3\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>New Info:</strong> The host *can't* open the door with the car. So \(P(\text{Evidence} | \text{Car at 2})\) is 1, while \(P(\text{Evidence} | \text{Car at 1})\) is 0.5.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Bayes' Theorem shows that <strong>Door #2</strong> now has a <strong>2/3</strong> chance! Switching doubles your odds because the host's action provided <strong>Information</strong> that updated your Bayesian state.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
def bayes_inference(prior, likelihood_pos, likelihood_neg):
    # P(Cause|Effect) = (P(Effect|Cause) * P(Cause)) / P(Effect)
    evidence = (likelihood_pos * prior) + (likelihood_neg * (1 - prior))
    posterior = (likelihood_pos * prior) / evidence
    return posterior

prior_spam = 0.1
l_spam = 0.8 # P("Free" | Spam)
l_ham = 0.01 # P("Free" | Ham)

print(f"Prob(Spam | 'Free'): {bayes_inference(prior_spam, l_spam, l_ham):.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Bayes' Theorem is the "Self-Correction Engine" of AI. It provides the mathematical proof that our beliefs should always be in a state of flux, updating every time a new piece of data hits the table.</p>
    <ul>
      <li><strong>Bayesian Neural Networks (BNNs)</strong>: Standard neural networks give you a single "Guess" (e.g., 90% sure this is a dog). BNNs use Bayes' Theorem to give you a **Distribution of Guesses**. Instead of one set of weights, they have a "Prior" belief about what the weights should be and update that "Posterior" as they see training data. This allows the AI to say: "I think this is a dog, but I've never seen a picture this blurry before, so I'm actually very uncertain." It prevents the model from being "Arrogantly Wrong."</li>
      <li><strong>Self-Driving Car Localization (Kalman Filters)</strong>: A Tesla navigating a highway uses Bayes' Theorem every millisecond. It has a "Prior" (where it thought it was 10ms ago based on physics) and it receives "Evidence" (GPS and LIDAR data). The GPS might be slightly off due to a tunnel, and the LIDAR might be confused by rain. Bayes' Theorem allows the car to optimally **Blend** those two noisy inputs to calculate the most likely "Posterior" position. It is the math that keeps the car in its lane.</li>
    </ul>
    <p>Teacher's Final Word: Bayes' Theorem is the logic of humbleness. It forces the machine to admit what it knew before and adjust it based on what it sees now. In a world of noise, it is the only way to arrive at the signal.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve mastered how to calculate probabilities within models. Now, see how we apply this to the <strong>Rigid Statistics</strong> of Large Scale Data. Explore <strong><a href="#/mathematics/statistics/mle">Maximum Likelihood Estimation (MLE)</a></strong>.
    </div>
  `
};

