import { TopicSection } from '../../src/data/types';

export const bayesTheoremSection: TopicSection = {
  id: "bayes-theorem",
  title: "Bayes' Theorem: Updating Beliefs",
  description: "Bayes' Theorem is the cornerstone of Bayesian inference. It allows us to update our initial belief (Prior) with new evidence (Likelihood) to arrive at a more accurate conclusion (Posterior).",
  formula: "P(A|B) = \\frac{P(B|A)P(A)}{P(B)}",
  details: [
    "Prior Probability: What we believe before we see the data.",
    "Likelihood: How well our belief explains the new evidence.",
    "Posterior: Our updated belief after seeing the evidence."
  ],
  contentSections: [
    {
      heading: "Updating Beliefs: The 4 Components of Bayes",
      paragraphs: [
        "In Machine Learning, we don't just calculate probabilities; we update them based on new data. Bayes' Theorem gives us the formula to update our diagnosis or classification into a **Posterior** probability:  ",
        "$$P(A|B) = \\frac{P(B|A)P(A)}{P(B)}$$",
        "- **P(A|B)**: **Posterior** - The updated probability of A given B.  ",
        "- **P(B|A)**: **Likelihood** - The probability of evidence B given A.  ",
        "- **P(A)**: **Prior** - The initial probability of A.  ",
        "- **P(B)**: **Evidence** - The total probability of B occurring."
      ]
    },
    {
      heading: "Case Study: The Two-Bag Problem",
      paragraphs: [
        "**Problem**: Suppose there are two bags.  ",
        "- **Bag 1**: Contains 3 Red and 2 Blue balls.  ",
        "- **Bag 2**: Contains 4 Red and 1 Blue ball.  ",
        "A bag is chosen at random (Prob = 0.5), and a ball is drawn and found to be **Red**. What is the probability it came from **Bag 1**?  ",
        "**Step 1: Identify Priors.** $P(B_1) = 0.5$, $P(B_2) = 0.5$.  ",
        "**Step 2: Identify Likelihoods.** $P(R|B_1) = 3/5 = 0.6$ and $P(R|B_2) = 4/5 = 0.8$.  ",
        "**Step 3: Calculate Total Evidence $P(R)$.**  ",
        "$P(R) = P(R|B_1)P(B_1) + P(R|B_2)P(B_2) = (0.6)(0.5) + (0.8)(0.5) = 0.7$.  ",
        "**Step 4: Update to Posterior $P(B_1|R)$.**  ",
        "$$P(B_1|R) = \\frac{P(R|B_1)P(B_1)}{P(R)} = \\frac{0.3}{0.7} = \\frac{3}{7}$$"
      ],
      code: "import numpy as np\nprob_b1 = 0.5\nprob_b2 = 0.5\nprob_r_given_b1 = 3/5\nprob_r_given_b2 = 4/5\n\n# Total Evidence\nevidence = (prob_r_given_b1 * prob_b1) + (prob_r_given_b2 * prob_b2)\n# Update Posterior\nposterior = (prob_r_given_b1 * prob_b1) / evidence\n\nprint(f\"Total Evidence P(R): {evidence:.4f}\")\nprint(f\"Posterior P(B1|R): {posterior:.4f} (or 3/7)\")",
      output: "Total Evidence P(R): 0.7000\nPosterior P(B1|R): 0.4286 (or 3/7)"
    }
  ],
  tags: ["Bayesian Inference", "Prior", "Likelihood", "Posterior", "Naive Bayes"],
  level: "Intermediate"
};
