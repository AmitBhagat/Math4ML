import { TopicSection } from '../../src/data/types';

export const probabilityRulesSection: TopicSection = {
  id: "probability-rules",
  title: "Probability Rules: The Axiomatic Logic of Chance",
  description: "A formalization of the Sum and Product rules—the dual engines that drive marginalization and conditioning in probabilistic graphical models.",
  formula: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
  details: [
    "The General Addition Rule (Inclusion-Exclusion)",
    "The Multiplication Rule for Dependent Outcomes",
    "Marginalization: The Sum Rule in High-Dimensional Spaces",
    "Conditioning: The Product Rule as a Dependency Chain",
    "Law of Total Probability: Partitioning the Sample Space",
    "Application: Propagating Uncertainty in Bayesian Networks"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Axiomatic Roadmap</div>
      <a href="#addition">I. The General Addition Rule</a>
      <a href="#multiplication">II. The Multiplication Rule</a>
      <a href="#total-prob">III. Law of Total Probability</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="addition" class="premium-h2">I. The General Addition Rule</h2>
    <p>The <strong>Addition Rule</strong> (or Sum Rule) dictates how we combine probabilities of individual events to find the chance of a union ($A$ or $B$).</p>

    <div class="premium-math-block">
      P(A \cup B) = P(A) + P(B) - P(A \cap B)
    </div>

    <div class="premium-callout warn">
      <div class="premium-callout-icon">⚠️</div>
      <div class="premium-callout-body">
        <strong>Inclusion-Exclusion:</strong> We must subtract the intersection $P(A \cap B)$ because those outcomes are counted twice—once in $A$ and once in $B$. If the events are <strong>Mutually Exclusive</strong>, the subtraction term is simply zero.
      </div>
    </div>

    <!-- SECTION 2 -->
    <h2 id="multiplication" class="premium-h2">II. The Multiplication Rule</h2>
    <p>The <strong>Multiplication Rule</strong> (or Product Rule) is the foundational engine for calculating the joint probability ($A$ and $B$) by decomposing it into marginal and conditional parts.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">Joint Probability Decomposition</div>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        P(A \cap B) = P(A|B)P(B)
      </div>
    </div>

    <!-- SECTION 3 -->
    <h2 id="total-prob" class="premium-h2">III. The Law of Total Probability</h2>
    <p>When we want to find the probability of an event $B$ but we only have its conditional probabilities relative to a set of exhaustive and mutually exclusive events $A_i$ (a "partition"), we use the Law of Total Probability.</p>

    <div class="premium-math-block">
      P(B) = \sum_{i} P(B | A_i) P(A_i)
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">🌉</div>
      <div class="premium-callout-body">
        <strong>Bayesian Logic:</strong> This rule acts as the <strong>Evidence</strong> $P(D)$ in Bayes' Theorem. It ensures the posterior probabilities are properly normalized so they sum to 1.
      </div>
    </div>
  `
};
