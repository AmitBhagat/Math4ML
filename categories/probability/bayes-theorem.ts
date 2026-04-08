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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Conditional Probability</strong>: Understanding \(P(A|B)\).</li>
        <li><strong>Joint Probability</strong>: Understanding \(P(A \cap B)\).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Calculating the "Forward" probability (Probability of Effect given Cause) is usually easy. But in AI, we want to go <strong>backward</strong>: "Given this input data (Effect), what's the most likely model (Cause)?" Bayes' Theorem is the Bridge that lets us flip these conditional probabilities. It combines what you knew <strong>before</strong> (Prior) with what you see <strong>now</strong> (Evidence) to give you a <strong>Posterior</strong> belief.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Bayes' Theorem as a <strong>"Learning Machine."</strong> 
        You start with a guess (the Prior). 
        You see some evidence (the Data). 
        Bayes' Theorem tells you exactly how much to "correct" your initial guess to arrive at the <strong>Truth</strong> (the Posterior). 
        It is the fundamental rule for how a machine "Learns" from experience.
      </div>
    </div>

    <visualizer topic="BayesTheorem" />

    <h2 id="derivation">Formal Definition</h2>
    <div class="math-block">$$P(A|B) = \frac{P(B|A) P(A)}{P(B)}$$</div>
    <ul>
      <li><strong>\(P(A|B)\)</strong>: Posterior (Belief after seeing data).</li>
      <li><strong>\(P(B|A)\)</strong>: Likelihood (How well the data fits the cause).</li>
      <li><strong>\(P(A)\)</strong>: Prior (Initial belief).</li>
      <li><strong>\(P(B)\)</strong>: Evidence (Normalization constant).</li>
    </ul>

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
    <ul>
      <li><strong>Naive Bayes Classifier</strong>: The most famous application of this theorem in supervised learning for text classification.</li>
      <li><strong>A/B Testing</strong>: Bayesian methods help companies decide if a "Change" (Evidence) actually caused an "Improvement" (Cause).</li>
      <li><strong>Kalman Filters</strong>: Predicting the trajectory of self-driving cars by combining sensor data (Evidence) with the previous physics state (Prior).</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve mastered how to calculate probabilities within models. Now, see how we apply this to the <strong>Rigid Statistics</strong> of Large Scale Data. Explore <strong><a href="#/mathematics/statistics/basics">Probability & Statistics</a></strong>.
    </div>
  `
};
