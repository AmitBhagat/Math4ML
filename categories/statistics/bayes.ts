import { TopicSection } from '../../src/data/types';

export const bayesTheoremSection: TopicSection = {
  id: "bayes-theorem",
  title: "Bayes' Theorem: The Mathematical Engine of Belief Updating",
  description: "A deep dive into Bayesian inference, transforming initial priors into refined posteriors through the integration of empirical likelihoods.",
  formula: "P(A|B) = \\frac{P(B|A)P(A)}{P(B)}",
  details: [
    "The 4 Pillars: Prior, Likelihood, Evidence, and Posterior",
    "Evidence Marginalization: The Law of Total Probability",
    "Bayesian Updating: Sequential Refinement of Hypotheses",
    "Naive Bayes: Assumption of Conditional Independence",
    "Point Estimates: MAP vs. MLE in Bayesian Settings",
    "Case Study: Recursive Diagnosis in Diagnostic Spaces"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Inference Roadmap</div>
      <a href="#components">I. Components of Bayesian Inference</a>
      <a href="#identity">II. Formal Bayesian Identity</a>
      <a href="#case-study">III. Case Study: Recursive Inference</a>
      <a href="#lab">Computational Bayesian Logic</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="components" class="premium-h2">I. The Components of Bayesian Inference</h2>
    <p>In machine learning, we don't just calculate static probabilities; we update them based on new incoming data. Bayes' Theorem provides the formal mechanism to transform our initial assumptions into refined diagnostic conclusions.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Component</th><th>Notation</th><th>Intuition</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Prior</strong></td><td>$P(H)$</td><td>Belief before observing data.</td></tr>
          <tr><td><strong>Likelihood</strong></td><td>$P(D|H)$</td><td>Probability of data given the hypothesis.</td></tr>
          <tr><td><strong>Evidence</strong></td><td>$P(D)$</td><td>Total probability of the data (Normalizing factor).</td></tr>
          <tr><td><strong>Posterior</strong></td><td>$P(H|D)$</td><td>Belief updated by empirical evidence.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 2 -->
    <h2 id="identity" class="premium-h2">II. Formal Bayesian Identity</h2>
    <p>The core of Bayesian logic is the update mechanism. It allows us to calculate the probability of a hypothesis (like a specific class label) given the observed features.</p>

    <div class="premium-math-block">
      P(H|D) = \frac{P(D|H) P(H)}{P(D)}
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">💡</div>
      <div class="premium-callout-body">
        <strong>The Normalizer:</strong> The evidence $P(D)$ is often calculated via the <strong>Law of Total Probability</strong>: $P(D) = \sum P(D|H_i) P(H_i)$. In complex ML models, this marginalization is the main computational bottleneck.
      </div>
    </div>

    <!-- SECTION 3 -->
    <h2 id="case-study" class="premium-h2">III. Case Study: Recursive Inference</h2>
    <div class="premium-case-study">
      <h4>The Two-Bag Problem</h4>
      <p>Assume two bags of marbles:</p>
      <ul>
        <li><strong>Bag 1:</strong> 3 Red, 2 Blue</li>
        <li><strong>Bag 2:</strong> 4 Red, 1 Blue</li>
      </ul>
      <p style="margin-top:15px">If we draw a <strong>Red</strong> marble, what is the probability it came from Bag 1?</p>
      <div class="premium-math-block" style="background:transparent; border:none; padding:10px 0; margin:15px 0;">
        P(B_1|R) = \frac{P(R|B_1)P(B_1)}{P(R|B_1)P(B_1) + P(R|B_2)P(B_2)} = \frac{(0.6 \times 0.5)}{(0.6 \times 0.5) + (0.8 \times 0.5)} = \frac{0.3}{0.7} \approx 0.428
      </div>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Computational Bayesian Logic</h2>
    <div class="premium-math-block">
      <python-code>
import numpy as np

# 1. Initial Beliefs & Observed Likelihoods
priors = np.array([0.5, 0.5])      # P(B1), P(B2)
likelihoods = np.array([3/5, 4/5]) # P(R|B1), P(R|B2)

# 2. Evidence Normalization
# P(D) = sum(P(D|Hi) * P(Hi))
evidence = np.sum(likelihoods * priors)

# 3. Posterior Calculation
# P(H|D) = (Likelihood * Prior) / Evidence
posteriors = (likelihoods * priors) / evidence

print(f"Initial Priors: {priors}")
print(f"Total Evidence P(Data): {evidence:.4f}")
print(f"Updated Posteriors: {posteriors}")
print(f"P(Bag 1 | Red): {posteriors[0]:.4f}")
      </python-code>
    </div>
  `
};
