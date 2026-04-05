import { TopicSection } from '../../src/data/types';

export const probabilityBasicsSection: TopicSection = {
  id: "probability-basics",
  title: "Probability Basics: The Mathematical Language of Uncertainty",
  description: "An essential primer on sample spaces, events, and the classical definition of chance—the bedrock of probabilistic machine learning algorithms.",
  formula: "P(E) = \\frac{|E|}{|S|}",
  details: [
    "Sample Space ($S$): The Universal Set of Outcomes",
    "Events as Subsets of Sample Space",
    "Axiomatic Probability: The Kolmogorov Framework",
    "Range of Chance: $0 \\le P(E) \\le 1$",
    "Complementary Events: $P(E^c) = 1 - P(E)$",
    "Frequentist vs. Bayesian Interpretations"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Foundational Roadmap</div>
      <a href="#sample-spaces">I. Sample Spaces and Experiments</a>
      <a href="#axioms">II. Axiomatic Probability</a>
      <a href="#lab">Computational Implementation: Discrete Sim</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="sample-spaces" class="premium-h2">I. Sample Spaces and Experimental Design</h2>
    <p>Every probabilistic query begins with an <strong>Experiment</strong> and its <strong>Sample Space ($S$)</strong>—the set containing every possible atomic outcome. An <strong>Event ($E$)</strong> is simply a subset of this space.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">The Classical Definition</div>
      <p style="margin:0">If all outcomes in a finite sample space $S$ are equally likely, the probability of an event $E$ is the ratio of favorable outcomes to the total size of the sample space:</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        P(E) = \frac{|E|}{|S|}
      </div>
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">🎲</div>
      <div class="premium-callout-body">
        <strong>The Range of Chance:</strong> Probability is always bounded: $0 \le P(E) \le 1$. An event with $P(E)=0$ is "impossible," while $P(E)=1$ is "certain."
      </div>
    </div>

    <!-- SECTION 2 -->
    <h2 id="axioms" class="premium-h2">II. Axiomatic Probability</h2>
    <p>Beyond simple counting, modern probability rests on the <strong>Kolmogorov Axioms</strong>, which provide the rigorous foundation for processing uncertainty in high-dimensional datasets.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Axiom</th><th>Mathematical Statement</th><th>Intuition</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Non-negativity</strong></td><td>$P(E) \ge 0$</td><td>Chance cannot be negative.</td></tr>
          <tr><td><strong>Normalization</strong></td><td>$P(S) = 1$</td><td>Something must always happen.</td></tr>
          <tr><td><strong>Additivity</strong></td><td>$P(E_1 \cup E_2) = P(E_1) + P(E_2)$</td><td>Sum of disjoint event chances.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- LAB -->
    <h2 id="lab" class="premium-h2">Computational Implementation: Discrete Sim</h2>
    <python-code>
import numpy as np

def simulate_die_roll(event_condition, trials=10000):
    """
    Empirical probability via Monte Carlo simulation.
    """
    # 1. Generate random trials
    rolls = np.random.randint(1, 7, trials)
    
    # 2. Count favorable outcomes
    favorable = np.sum([event_condition(r) for r in rolls])
    
    # 3. Calculate empirical ratio
    return favorable / trials

# Define event: Roll is even
prob_even = simulate_die_roll(lambda x: x % 2 == 0)

print(f"Sample Space S: {set(range(1, 7))}")
print(f"Theoretical P(Even): 0.50")
print(f"Simulated P(Even): {prob_even:.4f}")
    </python-code>
  `
};
