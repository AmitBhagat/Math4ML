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
    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Symmetry of Joint Probability & The Posterior Update</div>
      <p>Bayes' Theorem isn't just a formula; it's a "Consistency Constraint." it ensures that your conditional beliefs remain mathematically valid regardless of which variable you observe first.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine a sample space $\Omega$ (the "Universe") where two events $A$ and $B$ occur. These events overlap in a region $A \cap B$. To find the conditional probability $P(A|B)$, we effectively "shrink" our universe. Instead of looking at the whole box $\Omega$, we look only through the "keyhole" of event $B$. The probability of $A$ occurring in this new, smaller universe is just the ratio of the overlap to the total area of $B$.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We derive Bayes' Rule by exploiting the fact that the "Overlap" $P(A \cap B)$ can be calculated in two identical ways. By the definition of conditional probability:</p>
      <div class="math-block">
        $$P(A \cap B) = P(A|B)P(B)$$
        $$P(B \cap A) = P(B|A)P(A)$$
      </div>
      <p>Since $P(A \cap B) = P(B \cap A)$, we set the right-hand sides equal to each other:</p>
      <div class="math-block">
        $$P(A|B)P(B) = P(B|A)P(A)$$
      </div>
      <p>Solving for $P(A|B)$ gives the final update rule:</p>
      <div class="math-block">
        $$P(A|B) = \frac{P(B|A) P(A)}{P(B)}$$
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria (ML Practitioner's View)</h3>
      <p>In Machine Learning, we replace generic events with <strong>Hypothesis</strong> ($\theta$) and <strong>Data</strong> ($\mathcal{D}$):</p>
      <div class="math-block">
        $$\text{Posterior} = \frac{\text{Likelihood} \times \text{Prior}}{\text{Evidence}}$$
      </div>
      <p class="mt-4 italic text-sm">Gotcha: Beginners usually ignore the <strong>Evidence</strong> ($P(\mathcal{D})$) because it's just a constant. But in complex models, calculating it requires a massive integral over all possible hypotheses—this is the "Bayesian Bottleneck" that makes full Bayesian inference computationally expensive (and why we use things like MCMC or Variational Inference).</p>
    </div>
    
    <visualizer topic="bayes-theorem" />



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
      <li><strong>Bayesian Neural Networks (BNNs)</strong>: Standard neural networks give you a single "Guess" (e.g., 90% sure this is a dog). BNNs use Bayes' Theorem to give you a <strong>Distribution of Guesses</strong>. Instead of one set of weights, they have a "Prior" belief about what the weights should be and update that "Posterior" as they see training data. This allows the AI to say: "I think this is a dog, but I've never seen a picture this blurry before, so I'm actually very uncertain." It prevents the model from being "Arrogantly Wrong."</li>
      <li><strong>Self-Driving Car Localization (Kalman Filters)</strong>: A Tesla navigating a highway uses Bayes' Theorem every millisecond. It has a "Prior" (where it thought it was 10ms ago based on physics) and it receives "Evidence" (GPS and LIDAR data). The GPS might be slightly off due to a tunnel, and the LIDAR might be confused by rain. Bayes' Theorem allows the car to optimally <strong>Blend</strong> those two noisy inputs to calculate the most likely "Posterior" position. It is the math that keeps the car in its lane.</li>
    </ul>
    <p>Teacher's Final Word: Bayes' Theorem is the logic of humbleness. It forces the machine to admit what it knew before and adjust it based on what it sees now. In a world of noise, it is the only way to arrive at the signal.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve mastered how to calculate probabilities within models. Now, see how we apply this to the <strong>Rigid Statistics</strong> of Large Scale Data. Explore <strong><a href="#/mathematics/statistics/mle">Maximum Likelihood Estimation (MLE)</a></strong>.
    </div>
  `
};

